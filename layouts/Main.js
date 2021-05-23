/* layouts/Main.js */

import Head from "next/head";
import Wrapper from "./Wrapper";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default ({ children, title = "nawan44" }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>{children}</main>

    <Footer>nawan44</Footer>
  </Wrapper>
);
