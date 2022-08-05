import React, { useState, useEffect } from "react"
import Marquee from "react-marquee-slider"
import styled, { keyframes } from "styled-components"

const contentful = require("contentful")

const LogoSliderNew = () => {
  const [logos, setLogos] = useState([])

  useEffect(() => {
    const client = contentful.createClient({
      space: "s1sz6aratr2c",
      environment: "master", 
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
              imageHeight: item.fields.icon.fields.file.details.image.height,
              imageWidth: item.fields.icon.fields.file.details.image.width,
              aspectRatio:
                item.fields.icon.fields.file.details.image.height /
                item.fields.icon.fields.file.details.image.width,
            },
          }

          logosUpdate.push(updateItem)
        })

        setLogos(logosUpdate)
      })
      .catch(console.error)
  }, [])

console.log(logos)
  return (
    <SliderExtended>
      <Marquee velocity={0}>
        {
        logos &&
          logos.map((logo, i) => (
        <LogoLink>
       
            <Img
              key={i}
              src={logo.image.imageSource}
              aspectRatio={logo.image.aspectRatio}
            />
             </LogoLink>
          ))}
         
      </Marquee>
    </SliderExtended>
  )
}

export default LogoSliderNew
export const LogoLink = styled.a`
height: 7rem;
display: flex;
align-items: center;
  
`;
const SliderExtended = styled.div`
  background: blue;
  height: 7rem;
  display: flex;
  align-items: center;
  background: #8C1D1C;
  border-bottom: 1px solid white;
  .fkWtkb .sc-dkPtRN{
    display: flex;
    align-items: center;
  }
`
const Img = styled.img`
  height: ${props =>
    props.aspectRatio > 0.91
      ? "7rem"
      : props.aspectRatio < 0.9 && props.aspectRatio > 0.3
      ? "2.5rem"
      : "1.25rem"};
  margin-right: 3rem;
`
export const ImgContainer = styled.div`

  display: flex !important;
  align-items: center !important;
  marign-right: 2rem;
`
