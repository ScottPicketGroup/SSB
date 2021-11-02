import * as React from "react"
import { useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  PageContainer,
  SectionContainer,
} from "../components/StyledComponents/containers.css"
import MenuDuJour from "../components/Pages/Food/MenuDuJour"
import Brunch from "../components/Pages/Food/Brunch"
import Desserts from "../components/Pages/Food/Desserts"
import Intro from "../components/Pages/Food/Intro"
import FoodScrollMenu from "../components/Pages/Food/FoodScrollMenu"

const FoodPage = ({ data }) => {
  const itemsRef = useRef([])
  const {
    pageTitle,
    menuDuJour,
    brunch,
    desserts,
    imageAdjacentToBrunchMenuHiddenOnMob,
  } = data.allContentfulFoodMenuPageContent.nodes[0]

  const excuteScroll = el => {
    itemsRef.current[el].scrollIntoView({behavior: "smooth"})
  }
  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer red={true}>
        <Intro pageTitle={pageTitle} />
        <FoodScrollMenu excuteScroll={excuteScroll} />
        <SectionContainer
          marginBottom="xl"
          centered
          red
          ref={el => (itemsRef.current[0] = el)}
        >
          <MenuDuJour menuDuJourData={menuDuJour} />
        </SectionContainer>
        <SectionContainer
          marginBottom="xl"
          centered
          red
          ref={el => (itemsRef.current[1] = el)}
        >
          <Brunch
            brunchData={brunch}
            hiddenOnMobImg={imageAdjacentToBrunchMenuHiddenOnMob}
          />
        </SectionContainer>
        <SectionContainer
          marginBottom="xxl"
          centered
          red
          ref={el => (itemsRef.current[2] = el)}
        >
          <Desserts dessertData={desserts} />
        </SectionContainer>
      </PageContainer>
    </Layout>
  )
}

export default FoodPage

export const foodPageData = graphql`
  query FoodPageQuery {
    allContentfulFoodMenuPageContent {
      nodes {
        pageTitle
        menuDuJour {
          menuTitleTop
          menuItems {
            day
            menuItem
          }
          bottomTitle
          scrollToMenuItem
          seasonalMenuTitle
        }
        brunch {
          bottomMenuTitle
          menuLogo {
            gatsbyImageData
          }
          menuItems {
            menuItem
            menuItemDescription
            menuItemPrice
          }
        }
        imageAdjacentToBrunchMenuHiddenOnMob {
          gatsbyImageData(aspectRatio: 0.7)
        }
        desserts {
          bottomHeading
          scrollToMenuItem
          menuItems {
            menuItem
            menuItemDescription
            menuItemPrice
          }
          drinksSection {
            drinkMenuItems {
              menuItem
              menuItemDescription
              menuItemPrice
            }
          }
          food_menu_page_content {
            imageAdjacentToDessertMenu {
              gatsbyImageData(aspectRatio: 1, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`
