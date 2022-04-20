import "./styles.scss";

/**
 * @name Footer
 * @returns JSX.Element
 */

const Footer = (): JSX.Element => {
  return (
    <footer className="Footer">
      <p>
        This is a TypeScript and React port of the work done by Ken Slater at{" "}
        <a
          href="https://stellafane.org/misc/equinox.html"
          rel="noreferrer"
          target="_blank"
        >
          Stellafane
        </a>
      </p>
    </footer>
  );
};

export default Footer;
