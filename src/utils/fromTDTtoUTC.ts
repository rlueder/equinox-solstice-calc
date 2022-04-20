import { HISTORICAL, INTERVAL } from "../constants";

/**
 * @name fromTDTtoUTC
 * @summary Converts Date from TD (Dynamical Time) to UTC
 * @see Meeus, "Dynamical Time and Universal Time" in Astronomical
 * Algorithms, 77
 * @param {Date} TDT
 * @return {Date} UTC
 */

const fromTDTtoUTC = (TDT: Date): Date => {
  const { pow } = Math;

  /**
   * @name deltaT
   */

  let deltaT = 0;

  /**
   * @name year
   */

  const year = TDT.getUTCFullYear();

  /**
   * @name t
   * @summary The time measured in centuries from the epoch 2000.0
   */

  const t = (year - 2000) / 100;

  // for years in the historical observation table
  if (year >= INTERVAL[0] && year <= INTERVAL[1]) {
    // find correction in table
    if (year % 2) {
      // odd year, interpolate
      deltaT =
        (HISTORICAL[(year - INTERVAL[0] - 1) / 2] +
          HISTORICAL[(year - INTERVAL[0] + 1) / 2]) /
        2;
    } else {
      // even year, direct table lookup
      deltaT = HISTORICAL[(year - INTERVAL[0]) / 2];
    }
  }

  // 10.1
  if (year < 948) {
    deltaT = 2177 + 497 * t + 44.1 * pow(t, 2);
  }

  // 10.2
  if (year >= 948) {
    deltaT = 102 + 102 * t + 25.3 * pow(t, 2);
    if (year >= 2000 && year <= 2100) {
      // correction to avoid discontinurity in 2000
      deltaT += 0.37 * (year - 2100);
    }
  }

  return new Date(TDT.getTime() - deltaT * 1000);
};

export default fromTDTtoUTC;
