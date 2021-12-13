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
import Food from "../components/Pages/Food/Food"

const FoodPage = ({ data }) => {
  const itemsRef = useRef([])

  // const {
  //   pageTitle,
  //   menuDuJour,
  //   brunch,
  //   desserts,
  //   vertImageUnderMenuHiddenOnMob,
  //   image3,
  //   imageAdjacentToBrunchMenuHiddenOnMob,
  //   lunchAndDinner,
  // } = data.allContentfulFoodMenuPageContent.nodes[0]

  const excuteScroll = el => {
    const pos = itemsRef.current[el].getBoundingClientRect().top - 150
    window.scrollTo({ top: pos, behavior: "smooth" })
  }


  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer red={true}>
      food page
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
            gatsbyImageData(aspectRatio: 4.19)
          }
          menuItems {
            menuItem
            menuItemDescription
            menuItemPrice
          }
        }
        imageAdjacentToBrunchMenuHiddenOnMob {
          gatsbyImageData(aspectRatio: 1.8)
        }
        lunchAndDinner {
          menuItems {
            id
            sectionHeadingIeEntrees
            menuItems {
              menuItem
              menuItemDescription
              menuItemPrice
            }
          }
          topTitleIeFood
          seasonalTitleTopRight
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
