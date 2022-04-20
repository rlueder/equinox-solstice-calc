import { calcEvent } from "./index";

import { Event } from "../definitions";

/**
 * @name getEvents
 * @summary Returns an array of solar events.
 * @param {number} year
 * @param {string} timeStd
 * @returns {Array<Event>}
 */

const getEvents = (year: number, timeStd: string): Array<Event> => {
  return [
    {
      name: "March Equinox",
      date: calcEvent(0, year, timeStd),
    },
    {
      name: "June Solstice",
      date: calcEvent(1, year, timeStd),
    },
    {
      name: "September Equinox",
      date: calcEvent(2, year, timeStd),
    },
    {
      name: "December Solstice",
      date: calcEvent(3, year, timeStd),
    },
  ];
};

export default getEvents;
