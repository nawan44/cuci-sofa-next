import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Layout from "../layouts/Main";
import About from "./about.js";
import Contact from "./contact";
import Portofolio from "./portofolio";
// import { getPosts } from '../services/blog'

// import Post from '../components/Post'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const IndexPage = ({ posts }) => (
  <Layout>
    <Head>
      <title>Homepage</title>
    </Head>
    <ul>{/* {posts.map(p => <Post key={p.id} post={p} />)} */}</ul>
    <div id="about">About</div>
    <About />
    <div id="service">Service</div>
    <div id="portofolio">Portofolio</div>
    <Portofolio />
    <div id="contact">Contact</div>
    <Contact />
  </Layout>
);

// IndexPage.getInitialProps = async ({ req }) => {
//   const res = await getPosts()
//   const json = await res.json()
//   return { posts: json }
// }

export default IndexPage;
