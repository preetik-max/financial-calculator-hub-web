export interface AgeInput {
  dateOfBirth: number | string | Date;
  asOfDate?: number | string | Date;
}

export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  nextBirthday: Date;
  daysUntilBirthday: number;
}

function toDate(value: number | string | Date): Date {
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function calculateAge({
  dateOfBirth,
  asOfDate = new Date(),
}: AgeInput): AgeResult {
  const birth = toDate(dateOfBirth);
  const today = toDate(asOfDate);

  if (Number.isNaN(birth.getTime()) || Number.isNaN(today.getTime())) {
    return {
      years: 0,
      months: 0,
      days: 0,
      totalMonths: 0,
      nextBirthday: today,
      daysUntilBirthday: 0,
    };
  }

  if (birth > today) {
    return {
      years: 0,
      months: 0,
      days: 0,
      totalMonths: 0,
      nextBirthday: birth,
      daysUntilBirthday: 0,
    };
  }

  let years = today.getFullYear() - birth.getFullYear();
  const birthdayThisYear = new Date(
    today.getFullYear(),
    birth.getMonth(),
    birth.getDate(),
  );

  if (birthdayThisYear > today) {
    years -= 1;
  }

  const lastBirthday = new Date(
    birth.getFullYear() + years,
    birth.getMonth(),
    birth.getDate(),
  );

  let months = today.getMonth() - lastBirthday.getMonth();
  let days = today.getDate() - lastBirthday.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    months += 12;
  }

  const totalMonths = years * 12 + months;

  let nextBirthdayYear = today.getFullYear();
  let nextBirthday = new Date(
    nextBirthdayYear,
    birth.getMonth(),
    birth.getDate(),
  );

  if (nextBirthday <= today) {
    nextBirthdayYear += 1;
    nextBirthday = new Date(
      nextBirthdayYear,
      birth.getMonth(),
      birth.getDate(),
    );
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const daysUntilBirthday = Math.max(
    0,
    Math.ceil((nextBirthday.getTime() - today.getTime()) / msPerDay),
  );

  return {
    years,
    months,
    days,
    totalMonths,
    nextBirthday,
    daysUntilBirthday,
  };
}

export function calculateAgeGrowth(ageYears: number): { label: string; value: number }[] {
  const age = Math.max(0, Math.floor(ageYears));

  return Array.from({ length: age + 1 }, (_, index) => ({
    label: `Age ${index}`,
    value: index,
  }));
}
