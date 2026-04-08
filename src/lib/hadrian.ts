/**
 * Hadrian API configuration.
 *
 * This file connects the generated site to the Hadrian backend.
 * The personalizer replaces the placeholder tokens during site generation.
 * In production, sensitive values come from environment variables.
 */

export const HADRIAN_CONFIG = {
  /** The Hadrian API base URL */
  apiUrl: process.env.HADRIAN_API_URL || "https://hadrian.app",

  /** Tenant ID for this business */
  tenantId: process.env.HADRIAN_TENANT_ID || "lendzi",

  /** API key scoped to this tenant */
  apiKey: process.env.HADRIAN_API_KEY || "",

  /** Business slug used in intake/status URLs */
  slug: "lendzi-real-estate",
} as const;

/**
 * Make an authenticated request to the Hadrian API.
 */
export async function hadrianFetch(
  path: string,
  options?: RequestInit
): Promise<Response> {
  return fetch(`${HADRIAN_CONFIG.apiUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HADRIAN_CONFIG.apiKey}`,
      ...options?.headers,
    },
  });
}
