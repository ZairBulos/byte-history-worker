import { DateTime } from "luxon";

function getToday(): DateTime {
  return DateTime.now().setZone("America/Argentina/Buenos_Aires");
}

export function getFormattedDate(): string {
  const today = getToday();
  const day = today.day;
  const month = today.setLocale("es").toFormat("LLLL");

  return `${day} de ${month}`;
}
