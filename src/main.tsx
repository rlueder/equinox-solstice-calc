import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import "./assets/styles/styles.scss";

import { App, Head } from "./components";

const container = document.getElementById("root");
// @ts-ignore
// @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/issues/43848}
const root = createRoot(container);

const title = "Equinox & Solstice Calculator";

root.render(
  <HelmetProvider>
    <Head title={title} />
    <App title={title} />
  </HelmetProvider>
);
