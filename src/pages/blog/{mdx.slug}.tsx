/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-07-22 21:46:39
 * @LastEditors: yzq
 */
import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import {blogBackground, blogLayout, blogContent, gatsbyImage, blogLink, blogContentLayout, blogTime,
  avatar, dateWrap, dateContent, floatTitle, floatContent ,floatHeader,
  floatWrap, floatRest, blogLinkWrap
} from "./{mdx.slug}.module.css"
import { graphql, Link } from 'gatsby'
import { remset } from '../../common/remset'
// import {rafFix} from '../../common/fixblock'

const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  React.useEffect(()=> {
    // rafFix()
    remset()
  },[])

  return (
    <Layout>
      <div className={blogBackground}>
        <div className={blogLayout}>
          <div className={blogContentLayout}>
            <div className={blogContent}>
              <h1>{data.mdx.frontmatter.title}</h1>
              <div className={dateWrap}>
                
                <StaticImage className={avatar}
                  alt="avatar"
                  src="../../images/icon/2.jpeg"
                />

                <div className={dateContent}>
                  <div>
                      <span style={{color: '#515767'}}>
                        ZChin
                      </span>
                    </div>
                  <p className={blogTime}>{data.mdx.frontmatter.date}</p>
                </div>
              </div>
              
              <GatsbyImage className={gatsbyImage}
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
              />
              <MDXRenderer>
                {data.mdx.body}
              </MDXRenderer>
            </div>
          
          </div>
          <div className={blogLinkWrap}>
            <div className={blogLink} id='blogLink'>
              <div className={floatWrap}>
                <div className={floatHeader}>
                  <span style={{fontSize: '16px', fontWeight: 'bold'}}>相关博客</span>
                </div>
                { 
                  data.allMdx.nodes.map((node) => (
                      <div className={floatContent} key={node.id}>
                        <div className={floatTitle}>
                          <Link to={`/blog/${node.slug}`}>
                            <span style={{fontSize: '1rem', color: '#252933'}}>{node.frontmatter.title}</span>
                          </Link>
                        </div>
                        <div className={floatRest} style={{color: '#8a919f'}}>
                          <span>{node.frontmatter.like}点赞  </span>
                          ·
                          <span>  {node.frontmatter.comment}评论</span>
                        </div>
                      </div>
                    )
                  
                  )
                }
              </div>
            
              
            </div>
          </div>
         
        </div>
      </div>
    
      
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    },
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
          like
          comment
        }
        id
        slug
      }
    }
  }
`

export default BlogPost