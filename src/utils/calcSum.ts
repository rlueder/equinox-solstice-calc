/**
 * @name calcSum
 * @summary Calculates the sum S of the 24 periodic terms
 * @see Meeus, "Equinoxes and Solstices" in Astronomical Algorithms, 179
 * @param {number} T
 * @return {number} SUM
 */

const calcSum = (T: number): number => {
  const { cos, PI } = Math;

  /**
   * @name A
   * @type {Array<number>}
   */

  const A = [
    485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17,
    16, 14, 12, 12, 12, 9, 8,
  ];

  /**
   * @name B
   * @type {Array<number>}
   */

  const B = [
    324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58,
    119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04,
    199.76, 95.39, 287.11, 320.81, 227.73, 15.45,
  ];

  /**
   * @name C
   * @type {Array<number>}
   */

  const C = [
    1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934,
    3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956,
    4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756,
    34777.259, 1222.114, 16859.074,
  ];

  let SUM = 0;

  for (let i = 0; i < A.length; i++) {
    const deg = B[i] + C[i] * T;
    SUM += A[i] * cos((deg * PI) / 180);
  }

  return SUM;
};

export default calcSum;
