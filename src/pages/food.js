import * as React from "react"
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
  const {
    pageTitle,
    menuDuJour,
    brunch,
    desserts,
    imageAdjacentToBrunchMenuHiddenOnMob,
  } = data.allContentfulFoodMenuPageContent.nodes[0]

  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer red={true}>
        <Intro pageTitle={pageTitle} />
        <FoodScrollMenu />
        <MenuDuJour menuDuJourData={menuDuJour} />
        <Brunch
          brunchData={brunch}
          hiddenOnMobImg={imageAdjacentToBrunchMenuHiddenOnMob}
        />
        <SectionContainer marginBottom="xxl" centered red>
          <Desserts
            dessertData={desserts}
          />
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
