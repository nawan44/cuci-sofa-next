import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 15px;
  border-bottom: 1px solid #ddd;

  background: #98fb98;
  text-align: center;
  margin: 0 auto;
  a {
    color: #000;
    text-decoration: none;
    background: red;
    padding: 10px;
  }
  a:hover {
    background: blue;
    color: #fff;
  }
`;

const Nav = () => (
  <Wrapper>
    <Link href="/">
      <a>Home</a>
    </Link>{" "}
    <Link href="/about" prefetch>
      <a>About</a>
    </Link>{" "}
    <Link href="/contact" prefetch>
      <a>Contact</a>
    </Link>
  </Wrapper>
);

export default Nav;
