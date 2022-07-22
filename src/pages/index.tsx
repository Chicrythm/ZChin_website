import * as React from "react"
import ReactDOM from "react-dom"
import './index.css'
import HeaderContent from './component/header/header'
// import Content from './component/content/content.tsx'
import Home from './Home/home'
import About from './about'
import {HashRouter,Routes, Route} from 'react-router-dom'
// import { Layout } from 'antd'
import {Link} from 'gatsby'
import Layout from '../components/layout'

// const { Header, Footer, Sider, Content } = Layout;
const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
      {/* <HashRouter>
        <Layout>
          <Header>
            <HeaderContent>
              
            </HeaderContent>
          </Header>
          <Content>
            123
             <Routes> 
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </HashRouter> */}
    </> 
  )
 
}

export default IndexPage
