import * as React from "react"
import { useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  PageContainer,
  SectionContainer,
} from "../components/StyledComponents/containers.css"
import DrinksIntro from "../components/Pages/Drinks/DrinksIntro"
import DrinksScrollMenu from "../components/Pages/Drinks/DrinksScrollMenu"
import WinesByTheGlass from "../components/Pages/Drinks/WinesByTheGlass"
import Cocktail from "../components/Pages/Drinks/Cocktail"
import BottomImage from "../components/Pages/Drinks/BottomImage"

const DrinksPage = ({ data }) => {
  const itemsRef = useRef([])
  const {
    pageHeading,
    bottomImage,
    cocktailMenu,
    nonAlcoholicDrinksMenu,
    wineByTheGlassMenu,
  } = data.allContentfulWineMenuPageContent.nodes[0]

  const excuteScroll = el => {
    const pos = itemsRef.current[el].getBoundingClientRect().top -150
    window.scrollTo({top: pos, behavior: "smooth"})
  }

  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer>
        <DrinksIntro pageTitle={pageHeading} />
        <DrinksScrollMenu excuteScroll={excuteScroll} />
        <SectionContainer
          marginBottom="xl"
          ref={el => (itemsRef.current[0] = el)}
        >
          <WinesByTheGlass wineByTheGlassMenu={wineByTheGlassMenu} />
        </SectionContainer>
        <SectionContainer
          marginBottom="xl"
          centered
          ref={el => (itemsRef.current[1] = el)}
          full
        >
          <Cocktail
            cocktailMenu={cocktailMenu}
            nonAlcoholicDrinksMenu={nonAlcoholicDrinksMenu}
          />
        </SectionContainer>
        <BottomImage bottomImage={bottomImage} alt="bottom-image" />
      </PageContainer>
    </Layout>
  )
}

export default DrinksPage

export const drinksPageData = graphql`
  query MyQuery {
    allContentfulWineMenuPageContent {
      nodes {
        pageHeading
        wineByTheGlassMenu {
          wineMenuSection {
            sectionHeadingIeRed
            sectionMenuItems {
              producer
              price
              region
            }
          }
        }
        cocktailMenu {
          menuHeadingBottom
          seasonHeading
          menuItems {
            menuItem
            menuItemDescription
          }
        }
        nonAlcoholicDrinksMenu {
          menuTitle
          nonAlcoholicMenuItems {
            menuItem
            menuItemDescription
          }
          backgroundImage {
            file {
              url
            }
          }
        }
        bottomImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
      }
    }
  }
`
