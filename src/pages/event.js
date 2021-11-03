// import React from "react"
// import Layout from "../components/layout"
// import Gallery from "../components/Pages/Landing/Gallery"
// import Renderer from "../components/rich-text-renderers/sample"
// import Seo from "../components/seo"
// import {
//   SectionContainer,
// } from "../components/StyledComponents/containers.css"
// import { BBHeading2, BC1, Heading1, NoneDecorationLink } from "../components/StyledComponents/typography.css"
// import { Intro, GalleryWrapper, DescriptionWrapper } from "./index.css"

// const EventTemplate = ({ pageContext }) => {
//   const eventData = pageContext.eventData
//   console.log(eventData)
//   return (
//     <Layout>
//       <Seo title="Home" />
//       {/* <SectionContainer red full centerd>
//           <Intro>
//               <Heading1 color="white"></Heading1>
//               <BC1 color="white"></BC1>
//               <BC1 color="white"></BC1>
//               <NoneDecorationLink to={}><BBHeading2 color="white"></BBHeading2></NoneDecorationLink>
//           </Intro>
//           <GalleryWrapper>
//               <Gallery image={} />
//           </GalleryWrapper>
//           <DescriptionWrapper>
//               <Renderer node={} />
//               <Link to={} style={{textDecotationColor: "white"}}><BC1 color="white"></BC1></Link>
//           </DescriptionWrapper>
//       </SectionContainer> */}
//     </Layout>
//   )
// }

// export default EventTemplate


// query MyQuery {
//   contentfulWhatsOnPageEventsLandingPageContent(
//     id: {eq: "4437fbd8-135c-5422-b690-67964664d1f9"}
//   ) {
//     events {
//       bookNowLinkText
//       bookNowLinkUrl
//       id
//       eventDateAndStartTime(formatString: "DD-MM-YY")
//       eventTitle
//       galleryImages {
//         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 0.7)
//       }
//       eventDescription {
//         raw
//       }
//       eventEndDateAndTime(formatString: "DD-MM-YY")
//       eventMenu {
//         menuName
//         sideMenuName
//         eventMenuItems {
//           menuITem
//           menuItemLongDescription
//           menuItemPrice
//           menuItemShortDescription
//         }
//       }
//       eventMenuImage {
//         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 0.7)
//       }
//     }
//   }
// }
