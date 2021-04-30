import { DateTime } from "luxon";

export function millisToString(
  dateTime: number | undefined,
  options?: {
    pattern?: string;
    timezone?: string;
  }
): string | undefined {
  if (dateTime === undefined) {
    return dateTime;
  }
  const pattern = options?.pattern ?? "yyyy-MM-dd HH:mm";
  const timezone = options?.timezone ?? "local";

  return DateTime.fromMillis(dateTime).setZone(timezone).toFormat(pattern);
}

export function millisToDateTime(dateTime: number, timezone: "local") {
  return DateTime.fromMillis(dateTime).setZone(timezone);
}
