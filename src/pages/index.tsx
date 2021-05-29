import React from "react";
import Home from "./home/home";
import { siteMetadata } from "site-settings/site-metadata/siteMetadata";
import { SEO } from "components/Seo/seo";

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={siteMetadata.home.title}
        description={siteMetadata.home.description}
      />
      <Home />
    </>
  );
};

export default IndexPage;
