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
  indexLinkWrap, indexLink, floatWrap, floatHeader, floatIcon,
  floatContent, floatItemContent, floatItem,
  contentHead, contentBody, headAvater, headPersonalInfo, divider,
  intro, contentMedel, medel, contentItem, itemInfo, itemAvater,
  itemBussiness, itemUserName, blogCoverWrap, postItemContent, postName,
  richContent, postItemExcerpt, blogCover,
  postAction, actionItem, actionTitleBox
} from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMedal, faThumbsUp as ThumbsUp} from '@fortawesome/free-solid-svg-icons' 
import { faThumbsUp, faBookmark, faArrowAltCircleUp, faBuilding, faComment, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { StaticImage } from 'gatsby-plugin-image'

const BlogPage = ({data}) => {

  let likeArray = data.allMdx.nodes.map((node) => {
    return node.frontmatter.like
  })
  let likeSum = likeArray.reduce((preVal, curVal) => {
    return preVal + curVal
  },0)

  console.log(data.allMdx.nodes[0].frontmatter.like)
  let readArray = data.allMdx.nodes.map((node) => {
    return node.frontmatter.count
  })
  let readSum = readArray.reduce((preVal, curVal) => {
    return preVal + curVal
  },0)

  console.log(readArray)

  return (
    <Layout>
       <div className={indexBackground}>
        <div className={indexLayout}>
          <div className={indexContentLayout}>
            <div className={indexContent}>
              <div className={contentHead}>
                <StaticImage src="../../images/icon/avater.jpeg" alt="" className={headAvater}/>
                <div className={headPersonalInfo}>
                  <h1 >ZChin</h1>
                  <div>
                    <FontAwesomeIcon icon={faBuilding} className={floatIcon}/>
                    <span>前端开发工程师</span>
                    <span className={divider}>|</span>
                    <span>腾讯音乐娱乐TME</span>
                  </div>
                  <div className={intro}>
                    寻找自己的兴奋点
                  </div>
                </div>
              </div>
                <a className={contentMedel}>
                  <div className={medel}><FontAwesomeIcon icon={faMedal} className={floatIcon}/>获得勋章 0</div>
                </a>
              <div className={contentBody}>
                <div className={contentItem}>


                  {/* 博客头部部分 */}
                  <div className={itemInfo}>
                    <div className={itemAvater}>
                      <StaticImage src="../../images/icon/avater.jpeg" alt=""/>
                    </div>
                    <div style={{marginLeft: '1rem', paddingTop:'0.3rem'}}>
                      <div className={itemUserName}>ZChin</div>
                      <div className={itemBussiness}>
                        <div>前端开发工程师 @ 腾讯音乐娱乐TME</div>
                        <div>·</div>
                        2天前
                      </div>
                    </div>
                  </div>

                  {/* <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link> */}

                  {/* 博客内容部分 */}
                  <div className={postItemContent}>
                    <Link className={postName} to={`/blog/my-first-post`}>
                      <div>
                        <h3>useImperativeHandle ref引用传递与父组件获取子组件函数句柄</h3>
                      </div>
                      <div className={richContent}>
                        <div className={postItemExcerpt}><span style={{wordBreak: 'break-word'}}>useImperativeHandle ref引用传递与父组件获取子组件函数句柄 fancyInput 通过 useImperativeHandle hook 把组件属性以...</span></div>
                        <div className={blogCoverWrap}>
                          <StaticImage src="../../../blog/my-first-post/1.jpg" alt="" className={blogCover}/>
                        </div>
                        
                      </div>
                    </Link>
                  </div>

                  <div className={postAction}>
                    <div className={actionItem}>
                      <div className={actionTitleBox}>
                        <FontAwesomeIcon icon={ThumbsUp}></FontAwesomeIcon>
                        1 赞
                      </div>
                    </div>
                    <div className={actionItem}>
                      <div className={actionTitleBox}>
                        <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                        0 评论
                      </div>
                      
                    </div>
                    <div className={actionItem}>
                      <div>
                        <FontAwesomeIcon icon={faShareFromSquare}></FontAwesomeIcon>
                        0 分享
                      </div>
                     
                    </div>
                  </div>

                </div>
              </div>
            </div>
          
          </div>
          <div className={indexLinkWrap}>
            <div className={indexLink} id='blogLink'>
              <div className={floatWrap}>
                <div className={floatHeader}>
                  <span style={{fontSize: '16px', fontWeight: 'bold'}}>个人成就</span>
                </div>
                <div className={floatContent}>
                  <div className={floatItem}>
                    <FontAwesomeIcon icon={faThumbsUp} className={floatIcon}/>
                    <span className={floatItemContent}>文章被点赞 {likeSum}</span>
                  </div>
                  <div className={floatItem}>
                    <FontAwesomeIcon icon={faBookmark} className={floatIcon} style={{paddingRight: '11px'}}/>
                    <span className={floatItemContent}>文章被阅读 {readSum}</span>
                  </div>
                  <div className={floatItem}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} className={floatIcon}/>
                    <span className={floatItemContent}>掘力值 11</span>
                  </div>
                </div>
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
          count
        }
        id
        slug
      }
    }
  }
`

export default BlogPage