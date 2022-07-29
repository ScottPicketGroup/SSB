import React, { useState, useEffect } from "react"
import { Logos, Logo } from "./Footer.css"
import { StaticImage } from "gatsby-plugin-image"
import { Heading1 } from "../StyledComponents/typography.css"
const contentful = require("contentful")

const LogoSliderNew = () => {
  const [logos, setLogos] = useState([])

  useEffect(() => {
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

  console.log('logos')

  return <Logos><Heading1>boob</Heading1><Heading1>boob</Heading1><Heading1>boob</Heading1><Heading1>boob</Heading1>
    {logos.map((logo, i) => <img key ={i} src={logo.image.imageSource}/>)}
  </Logos>
}

export default LogoSliderNew
