import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import "antd/dist/antd.css";

// const path = require("path");
// const moduleAlias = require("module-alias");

// moduleAlias.addAlias(
//   "styled-components",
//   path.join(__dirname, "../node_modules/styled-components")
// );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
