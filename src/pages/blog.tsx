/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-07-22 14:40:08
 * @LastEditors: yzq
 */
import Layout from '../components/layout'
import * as React from 'react'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout>
        <ul>
          {
            data.allFile.nodes.map(node => (
              <li key={node.name}>
                {node.name}
              </li>
            ))
          }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile {
    nodes {
      name
    }
  }
}
`
export default BlogPage