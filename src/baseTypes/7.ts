/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}
function isWeekend(day: WeekDays): boolean {
  if (day === WeekDays.SUNDAY || day === WeekDays.SATURDAY) {
    return true;
  } else {
    return false;
  }
}
