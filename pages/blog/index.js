import React from "react";
import Blogs from "../../components/blogs";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const Blog = ({ blogs, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <div className="section">
        <div className="">
          <Blogs blogs={blogs} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [blogsRes, labelsRes, homepageRes] = await Promise.all([
    fetchAPI("/blogs", { populate: ["image", "label"] }),
    fetchAPI("/labels", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      blogs: blogsRes.data,
      labels: labelsRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Blog;
