"use client";

/**
 * TrialModeProvider — runtime URL-param personalization for the trial preview.
 *
 * When a visitor lands on this site with `?trial=true&config=<base64>`, this
 * provider decodes the config blob and exposes brand-level overrides through
 * `useTrialMode()` and `useTrialField()`. In trial mode, form submissions are
 * blocked via `useTrialFormGuard()` so visitors can SEE the intake but cannot
 * actually submit.
 *
 * Coexistence with build-time personalization:
 *   - Template files use string literals like "Lendzi Real Estate" as fallbacks.
 *   - The site-generator personalizer replaces these tokens at build time
 *     when a real customer provisions a site.
 *   - At runtime, the trial config (when present) takes precedence over
 *     whatever string the personalizer left in place.
 *
 * Non-trial deploys behave identically to a normal personalized site —
 * `isTrial` defaults to false and the placeholder/build-time values are used.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TrialConfig {
  businessName?: string;
  tagline?: string;
  primaryColor?: string;
  accentColor?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
}

interface TrialModeValue {
  isTrial: boolean;
  config: TrialConfig | null;
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const TrialModeContext = createContext<TrialModeValue>({
  isTrial: false,
  config: null,
});

// ---------------------------------------------------------------------------
// Decode helpers
// ---------------------------------------------------------------------------

function safeBase64Decode(raw: string): string | null {
  try {
    // URL-safe base64 (replace - / _ back to + /)
    const normalized = raw.replace(/-/g, "+").replace(/_/g, "/");
    if (typeof atob !== "function") return null;
    const binary = atob(normalized);
    // Handle UTF-8
    try {
      return decodeURIComponent(
        binary
          .split("")
          .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
          .join("")
      );
    } catch {
      return binary;
    }
  } catch {
    return null;
  }
}

function parseTrialConfig(raw: string | null): TrialConfig | null {
  if (!raw) return {};
  const decoded = safeBase64Decode(raw);
  if (!decoded) return null;
  try {
    const parsed = JSON.parse(decoded);
    if (parsed && typeof parsed === "object") {
      return parsed as TrialConfig;
    }
    return null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function TrialModeProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<TrialModeValue>({
    isTrial: false,
    config: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    let isTrial = false;
    let config: TrialConfig | null = null;

    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("trial") === "true") {
        isTrial = true;
        config = parseTrialConfig(params.get("config")) ?? {};
      }
    } catch {
      isTrial = false;
      config = null;
    }

    setValue({ isTrial, config });

    // Apply CSS variables at runtime so every brand-* utility cascades to
    // the visitor's chosen colors. Only runs in trial mode; otherwise the
    // build-time personalized values from globals.css remain in effect.
    if (isTrial && config) {
      const root = document.documentElement;
      if (config.primaryColor) {
        root.style.setProperty("--color-primary", config.primaryColor);
        root.style.setProperty(
          "--color-primary-light",
          `color-mix(in srgb, ${config.primaryColor} 10%, white)`
        );
      }
      if (config.accentColor) {
        root.style.setProperty("--color-accent", config.accentColor);
        root.style.setProperty(
          "--color-accent-light",
          `color-mix(in srgb, ${config.accentColor} 10%, white)`
        );
      }
    }

    // Re-read on URL changes (the /try page debounces config edits and
    // mutates the iframe src — same-origin re-renders fire a popstate-ish
    // event when the iframe location changes, but the simplest signal is
    // a polling fallback on `window.location.search` since iframe src
    // updates remount the document anyway).
  }, []);

  return (
    <TrialModeContext.Provider value={value}>
      {children}
    </TrialModeContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

export function useTrialMode(): TrialModeValue {
  return useContext(TrialModeContext);
}

/**
 * Returns the trial config value for `key` if in trial mode, otherwise the
 * fallback string. Use the build-time placeholder token as the fallback so
 * the personalizer can replace it for real customer deploys.
 *
 * Example:
 *   const businessName = useTrialField("businessName", "Lendzi Real Estate");
 */
export function useTrialField<K extends keyof TrialConfig>(
  key: K,
  fallback: string
): string {
  const { config } = useTrialMode();
  const value = config?.[key];
  if (typeof value === "string" && value.length > 0) return value;
  return fallback;
}

/**
 * Form submission guard. Returns an `onSubmit` wrapper that blocks the
 * submission and shows a tooltip-style alert in trial mode. In non-trial
 * mode the wrapped handler runs normally.
 */
export function useTrialFormGuard(): {
  isTrial: boolean;
  guardSubmit: (e: { preventDefault: () => void }) => boolean;
} {
  const { isTrial } = useTrialMode();
  const guardSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      if (!isTrial) return true;
      e.preventDefault();
      if (typeof window !== "undefined") {
        // Lightweight notice — no new dep, no toast lib.
        window.alert(
          "Sign up to launch this site and start collecting real submissions."
        );
      }
      return false;
    },
    [isTrial]
  );
  return { isTrial, guardSubmit };
}
