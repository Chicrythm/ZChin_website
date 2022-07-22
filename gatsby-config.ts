/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-07-11 23:57:42
 * @LastEditors: yzq
 */
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    
    title: `ZChin website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-mdx",
  ]
};

export default config;
