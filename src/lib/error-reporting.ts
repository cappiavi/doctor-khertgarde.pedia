type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

/**
 * Reports a client-side error. Currently logs to the console; swap this out
 * for your preferred error-tracking service (e.g. Sentry) when ready.
 */
export function reportClientError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: ErrorReportOptions = {},
) {
  if (typeof window === "undefined") return;
  console.error(error, {
    route: window.location.pathname,
    mechanism: options.mechanism ?? "react_error_boundary",
    severity: options.severity ?? "error",
    ...context,
  });
}
