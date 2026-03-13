/**
 * Anthropic model shorthand aliases → canonical model IDs.
 *
 * Kept in a standalone leaf module (no imports) so that bundlers
 * always initialise this constant before any code that uses it,
 * avoiding temporal-dead-zone (TDZ) errors caused by circular
 * module dependencies in the bundled output.
 */
export const ANTHROPIC_MODEL_ALIASES: Readonly<Record<string, string>> = {
  "opus-4.6": "claude-opus-4-6",
  "opus-4.5": "claude-opus-4-5",
  "sonnet-4.6": "claude-sonnet-4-6",
  "sonnet-4.5": "claude-sonnet-4-5",
};
