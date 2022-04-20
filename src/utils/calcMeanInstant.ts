/**
 * @name calcMeanInstant
 * @summary Returns the instant of the "mean" equinox or solstice.
 * @see Meeus, "Equinoxes and Solstices" in Astronomical Algorithms, 178
 * @param {number} k
 * @param {number} year
 * @returns {number} JDE0
 */

const calcMeanInstant = (k: number, year: number): number => {
  const { pow } = Math;
  const Y = (year - 2000) / 1000;
  let JDE0 = 0;
  switch (k) {
    // March equinox
    case 0:
      JDE0 =
        2451623.80984 +
        365242.37404 * Y +
        0.05169 * pow(Y, 2) -
        0.00411 * pow(Y, 3) -
        0.00057 * pow(Y, 4);
      break;
    // June solstice
    case 1:
      JDE0 =
        2451716.56767 +
        365241.62603 * Y +
        0.00325 * pow(Y, 2) +
        0.00888 * pow(Y, 3) -
        0.0003 * pow(Y, 4);
      break;
    //  September equinox
    case 2:
      JDE0 =
        2451810.21715 +
        365242.01767 * Y -
        0.11575 * pow(Y, 2) +
        0.00337 * pow(Y, 3) +
        0.00078 * pow(Y, 4);
      break;
    //  December solstice
    case 3:
      JDE0 =
        2451900.05952 +
        365242.74049 * Y -
        0.06223 * pow(Y, 2) -
        0.00823 * pow(Y, 3) +
        0.00032 * pow(Y, 4);
      break;
    default:
    // no default
  }
  return JDE0;
};

export default calcMeanInstant;
