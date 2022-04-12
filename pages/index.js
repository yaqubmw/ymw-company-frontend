import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      HOMEPAGE
    </Layout>
  );
};

export async function getStaticProps() {
  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);
  return {
    props: {
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
