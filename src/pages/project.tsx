import * as React from "react"
import Layout from "../components/layout"
import {iphone, hardware, ui, topUi, projectBody} from './project.module.css'
import {StaticImage} from "gatsby-plugin-image"

const projectPage = () => {

  let uiRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {

    // add scroll listener
    const rows = uiRef.current!.querySelectorAll('ul li')
    const html = document.documentElement
    document.addEventListener("scroll", () => {
      let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight)
      let total =  1 / rows.length
      
      for (let [index, row] of rows.entries()) {
        let start = total * index
        let end = total * (index + 1)
        
        let progress = (scrolled - start) / (end - start)
        if (progress >= 1) progress = 1
        if (progress <= 0) progress = 0
        row.style.setProperty('--progress', progress)
      }
    })
  }, [])

  return (
    <Layout>
      <div className={projectBody}>
        <h2>Chicrythm project
          <p><a href='https://github.com/Chicrythm' target="blank">github Link</a></p>          
        </h2>
        
        <div id={iphone}>
          <div id={hardware}></div>
          <div id={ui} ref={uiRef}>
          <img src="https://assets.codepen.io/2002878/iphone12-5g_top_ui.jpg" className={topUi} alt=""/>
            
            <ul>
              <li>
                <StaticImage 
                  src="../images/project/1.jpeg"
                />
              </li>
              <li>
                <StaticImage 
                  src="../images/project/2.jpeg"
                />
              </li>
              <li>
                <StaticImage 
                  src="../images/project/4.jpeg"
                />
              </li>
              <li>
                <StaticImage 
                  src="../images/project/6.jpeg"
                />
              </li>
              <li>
                <StaticImage 
                  src="../images/project/7.jpeg"
                />
              </li>
              {/* <li>
                <StaticImage 
                  src="../images/project/1.jpeg"
                />
              </li> */}
              {/* <li>
                <img src="https://assets.codepen.io/2002878/iphone12-5g_show_07.jpg" />
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default projectPage