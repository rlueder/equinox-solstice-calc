import { useEffect, useState } from "react";

import { Controls, Footer, Results } from "./index";

import { TIMES } from "../constants";
import { getEvents } from "../utils";

import type { Event } from "../definitions";

type Props = {
  title: string;
};

/**
 * @name App
 * @type {Function}
 * @summary Calculate Equinoxes and Solstices for a given year.
 * @see {@link https://en.wikipedia.org/wiki/Equinox}
 * @see {@link https://en.wikipedia.org/wiki/Solstice}
 * @returns JSX.Element
 */

// TODO
//  - add early, mid, late season names (use date-fns)

const App = (props: Props): JSX.Element => {
  const { title } = props;

  const [events, setEvents] = useState<Array<Event | undefined>>([]);
  const [timeStd, setTimeStd] = useState<string>(TIMES[2]);

  const date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());

  useEffect(() => {
    const events = getEvents(year, timeStd);
    setEvents(events);
  }, [timeStd, year]);

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="App__wrapper">
        <Controls year={year} setYear={setYear} setTimeStd={setTimeStd} />
        <Results data={events} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
