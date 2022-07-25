/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-07-22 21:46:39
 * @LastEditors: yzq
 */
import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout>
      <p>{data.mdx.frontmatter.date}</p>
      
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost