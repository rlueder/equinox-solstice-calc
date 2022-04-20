/**
 * @name TIMES
 * @summary The supported time standards.
 * @see {@link https://en.wikipedia.org/wiki/Coordinated_Universal_Time}
 * @see {@link https://en.wikipedia.org/wiki/Terrestrial_Time}
 * @see {@link https://en.wikipedia.org/wiki/UTC_offset}
 */

export const TIMES = ["LOCAL", "TDT", "UTC"];

/**
 * @name HISTORICAL
 * @summary Historical observations of Delta T.
 * @see {@link https://en.wikipedia.org/wiki/%CE%94T_(timekeeping)}
 * @see {@link https://eclipse.gsfc.nasa.gov/SEhelp/deltaT.html}
 * @see {@link https://webspace.science.uu.nl/~gent0113/deltat/deltat_modern.htm}
 */

export const HISTORICAL = [
  // 1620
  121, 112, 103, 95, 88,
  // 1630
  82, 77, 72, 68, 63,
  // 1640
  60, 56, 53, 51, 48,
  // 1650
  46, 44, 42, 40, 38,
  // 1660
  35, 33, 31, 29, 26,
  // 1670
  24, 22, 20, 18, 16,
  // 1680
  14, 12, 11, 10, 9,
  // 1690
  8, 7, 7, 7, 7,
  // 1700
  7, 7, 8, 8, 9,
  // 1710
  9, 9, 9, 9, 10,
  // 1720
  10, 10, 10, 10, 10,
  // 1730
  10, 10, 11, 11, 11,
  // 1740
  11, 11, 12, 12, 12,
  // 1750
  12, 13, 13, 13, 14,
  // 1760
  14, 14, 14, 15, 15,
  // 1770
  15, 15, 15, 16, 16,
  // 1780
  16, 16, 16, 16, 16,
  // 1790
  16, 15, 15, 14, 13,
  // 1800
  13.1, 12.5, 12.2, 12.0, 12.0,
  // 1810
  12.0, 12.0, 12.0, 12.0, 11.9,
  // 1820
  11.6, 11.0, 10.2, 9.2, 8.2,
  // 1830
  7.1, 6.2, 5.6, 5.4, 5.3,
  // 1840
  5.4, 5.6, 5.9, 6.2, 6.5,
  // 1850
  6.8, 7.1, 7.3, 7.5, 7.6,
  // 1860
  7.7, 7.3, 6.2, 5.2, 2.7,
  // 1870
  1.4, -1.2, -2.8, -3.8, -4.8,
  // 1880
  -5.5, -5.3, -5.6, -5.7, -5.9,
  // 1890
  -6.0, -6.3, -6.5, -6.2, -4.7,
  // 1900
  -2.8, -0.1, 2.6, 5.3, 7.7,
  // 1910
  10.4, 13.3, 16.0, 18.2, 20.2,
  // 1920
  21.1, 22.4, 23.5, 23.8, 24.3,
  // 1930
  24.0, 23.9, 23.9, 23.7, 24.0,
  // 1940
  24.3, 25.3, 26.2, 27.3, 28.2,
  // 1950
  29.1, 30.0, 30.7, 31.4, 32.2,
  // 1960
  33.1, 34.0, 35.0, 36.5, 38.3,
  // 1970
  40.2, 42.2, 44.5, 46.5, 48.5,
  // 1980
  50.5, 52.5, 53.8, 54.9, 55.8,
  // 1990
  56.9, 58.3, 60.0, 61.6, 63.0,
  // 2000
  63.8, 64.3, 64.5, 64.8, 65.4,
  // 2010
  66.07,
];

/**
 * @name INTERVAL
 * @summary The range of years in the historical observations table.
 */

export const INTERVAL = [1620, 2010];
