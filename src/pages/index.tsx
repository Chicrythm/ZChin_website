import * as React from "react"
import {container, indexBody} from './index.module.css'
import Layout from '../components/layout'
import Video from "../components/video"
import {remset} from '../common/remset'

// const { Header, Footer, Sider, Content } = Layout;
const IndexPage = () => {

  return (
    <>
      <Layout>
      <div className={indexBody}>
        <div id={container}>
          <h1>
            <span><i>Welcome</i></span>
            <span><i>To</i></span>
            <span><i>ZChin</i></span>
            <span><i>Website</i></span>
            <span><i></i></span>
            <span><i></i></span>
          </h1>
          <p>
            This is a personal website about myself written in <a href='https://www.gatsbyjs.com'>gatsby</a> and <a href="https://reactjs.org/">react</a>
          </p>
        </div>
      </div>
      
      </Layout>
    </> 
  )
 
}

export default IndexPage
