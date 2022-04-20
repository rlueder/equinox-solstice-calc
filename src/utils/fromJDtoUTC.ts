/**
 * @name fromJDtoUTC
 * @summary Calculation of the Calendar Date from the Julian Day
 * @see Meeus, "Julian Day" in Astronomical Algorithms, 63
 * @param {number} JD - Julian Day
 * @returns {Date} UTC - a JavaScript UTC Date Object
 */

const fromJDtoUTC = (JD: number): Date => {
  const { floor } = Math;

  /**
   * @name Z
   * @summary The integer part of adding 0.5 to the JD.
   */

  const Z = floor(JD + 0.5);

  /**
   * @name F
   * @summary The fractional (decimal) part of the result.
   */

  const F = JD + 0.5 - Z;

  let A;
  if (Z < 2299161) {
    A = Z;
  } else {
    const alpha = floor((Z - 1867216.25) / 36524.25);
    A = Z + 1 + alpha - floor(alpha / 4);
  }

  const B = A + 1524;
  const C = floor((B - 122.1) / 365.25);
  const D = floor(365.25 * C);
  const E = floor((B - D) / 30.6001);

  const day = B - D - floor(30.6001 * E) + F;
  const month = E - (E < 14 ? 1 : 13);
  const year = C - (month > 2 ? 4716 : 4715);

  const hours = 24 * (day - floor(day));
  const minutes = 60 * (hours - floor(hours));
  const seconds = floor(60 * (minutes - floor(minutes)));

  const UTC = new Date(0);
  UTC.setUTCFullYear(year, month - 1, floor(day));
  UTC.setUTCHours(hours, minutes, seconds);

  return UTC;
};

export default fromJDtoUTC;
