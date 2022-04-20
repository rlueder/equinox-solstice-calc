import React, { ChangeEvent, useRef } from "react";

import { TIMES } from "../../constants";

type Props = {
  year: number;
  setTimeStd: React.Dispatch<string>;
  setYear: React.Dispatch<number>;
};

import "./styles.scss";

/**
 * @name Controls
 * @param {Props} props
 * @returns JSX.Element
 */

const Controls = (props: Props): JSX.Element => {
  const { year, setTimeStd, setYear } = props;

  const inputEl = useRef(null);
  const selectEl = useRef(null);

  const updateValue = (e: ChangeEvent) => setYear(Number(e.target.value));

  return (
    <div className="Controls">
      <div>
        <label>Year</label>
        <div>
          <button onClick={() => setYear(year - 1)}>Prev</button>
          <input
            defaultValue={year}
            ref={inputEl}
            value={year}
            onBlur={(e) => updateValue(e)}
            onChange={(e) => updateValue(e)}
          />
          <button onClick={() => setYear(year + 1)}>Next</button>
        </div>
      </div>
      <div>
        <label>Calculated Time</label>
        <select
          defaultValue="UTC"
          ref={selectEl}
          onChange={(e) => setTimeStd(e.target.value)}
        >
          {TIMES.map((std, index) => {
            return (
              <option key={index} value={std}>
                {std}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Controls;
