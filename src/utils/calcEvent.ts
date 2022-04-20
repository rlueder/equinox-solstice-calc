import { calcMeanInstant, calcSum, fromJDtoUTC, fromTDTtoUTC } from "./index";

/**
 * @name calcEvent
 * @see Meeus, "Equinoxes and Solstices" in Astronomical Algorithms, 177
 * @param {number} k
 * @param {number} year
 * @param {string} timeStd
 * @returns {string|null}
 */

const calcEvent = (k: number, year: number, timeStd: string): string | null => {
  const { cos, PI } = Math;

  const JDE0 = calcMeanInstant(k, year);

  const T = (JDE0 - 2451545.0) / 36525;
  const W = 35999.373 * T - 2.47;

  const dL =
    1 + 0.0334 * cos((W * PI) / 180) + 0.0007 * cos((2 * W * PI) / 180);

  /**
   * @name S
   * @summary The sum of the 24 periodic terms
   */

  const S = calcSum(T);

  /**
   * @name JDE
   * @summary The required time, expressed as a Julian Ephemeris Day
   * @see {@link https://en.wikipedia.org/wiki/Julian_day}
   */

  const JDE = JDE0 + (0.00001 * S) / dL;

  const TDT = fromJDtoUTC(JDE);
  const UTC = fromTDTtoUTC(TDT);

  switch (timeStd) {
    case "LOCAL":
      // convert to local time string
      return UTC.toString();
    case "TDT":
      // convert to Dynamical Time string, change UTC to TDT
      return TDT.toUTCString().replace(/UTC/g, "TDT");
    case "UTC":
      // convert to UTC time string
      return UTC.toUTCString();
    default:
      return null;
  }
};

export default calcEvent;
