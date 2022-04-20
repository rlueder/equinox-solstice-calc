import type { Event } from "../../definitions";

type Props = {
  data: Array<Event | undefined>;
};

import "./styles.scss";

/**
 * @name Results
 * @param {Props} props
 * @returns JSX.Element
 */

const Results = (props: Props): JSX.Element => {
  const { data } = props;
  return (
    <div className="Results">
      {data.length ? (
        <>
          {data.map((event, index) => {
            return (
              <div className="Results__item" key={index}>
                <h1>{event?.name}</h1>
                <p>{event?.date}</p>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default Results;
