import React, { useState, useEffect, useRef } from "react"
import { Logos, Logo } from "./Footer.css"
import { Heading1 } from "../StyledComponents/typography.css"
import useGetElementSize from '../hooks/ItemSizing'
import useWindowSize from "../hooks/useWindowSize"
import LogoSliderOld from "./LogoSliderOld"
const contentful = require("contentful")

const LogoSlider = () => {
  const LogosContainer = useRef()
  const [logos, setLogos] = useState([])
  const [logosWidth, setLogosWidth] = useState(0)
  const [windowWidth, setWindowWith] = useState(0)
  const LogosContainerWidth = useGetElementSize(LogosContainer)

  useEffect(() => {

   setLogosWidth(LogosContainerWidth)

    const client = contentful.createClient({
      space: "s1sz6aratr2c",
      environment: "master", // defaults to 'master' if not set
      accessToken: "HvLYzkcU-68nLJPCWug6U29j7ey4M4PyjCPHYIdi6Bo",
    })

    client
      .getEntry("5zSRdrKU9rKu3HFcw4ONYS")
      .then(entry => {
        const logosUpdate = []
        entry.fields.footerItems.map(item => {
          const updateItem = {
            url: item.fields.url,
            image: {
              imageTitle: item.fields.icon.fields.title,
              imageSource: item.fields.icon.fields.file.url,
            },
          }
          logosUpdate.push(updateItem)
        })
        
        setLogos(logosUpdate)
      })
      .catch(console.error)


  }, [])
  console.log('w', LogosContainerWidth.elementWidth, logosWidth)


 

 return (
  <LogoSliderOld/>  
  // <Logos ref={LogosContainer} logosWidth={logos.length * 140} >
    //   { logos.map((logo, i) => (
    //     <Logo key={i}>
    //       <img  src={logo.image.imageSource} />
    //     </Logo>
    //   ))}
    // </Logos>
  )
}

export default LogoSlider
