/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-07-22 14:40:08
 * @LastEditors: yzq
 */
import Layout from '../../components/layout'
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import {indexBackground, indexLayout, indexContentLayout, indexContent,
  indexLinkWrap, indexLink, floatWrap, floatHeader, floatContent,
  floatTitle, floatRest
} from './index.module.css'

 

const BlogPage = ({data}) => {

  return (
    <Layout>
       <div className={indexBackground}>
        <div className={indexLayout}>
          <div className={indexContentLayout}>
            <div className={indexContent}>
              indexContent
            </div>
          
          </div>
          <div className={indexLinkWrap}>
            <div className={indexLink} id='blogLink'>
              <div className={floatWrap}>
                <div className={floatHeader}>
                  <span style={{fontSize: '16px', fontWeight: 'bold'}}>个人成就</span>
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
        {/* {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </article>
        ))
      } */}
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
        count
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

export default BlogPage