import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
};

/**
 * @name Head
 * @summary Renders <head> elements (link, meta, title, etc.)
 * @param {Props} props
 * @returns JSX.Element
 */

const Head = (props: Props): JSX.Element => {
  const { title } = props;
  return (
    <Helmet>
      <link rel="icon" type="image/svg+xml" href="/src/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
