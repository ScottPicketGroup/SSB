import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  PageContainer,
  SectionContainer,
} from "../components/StyledComponents/containers.css"
import { Heading1 } from "../components/StyledComponents/typography.css"
import MenuDuJour from "../components/Pages/MenuDuJour/MenuDuJour"
import Brunch from "../components/Pages/MenuDuJour/Brunch"
import Desserts from "../components/Pages/MenuDuJour/Desserts"

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
      <PageContainer red>
        <SectionContainer marginTop="xl" marginBottom="lg" centered red>
          <Heading1 color="white">{pageTitle}</Heading1>
        </SectionContainer>
        <SectionContainer marginBottom="xl" centered red>
          <MenuDuJour menuDuJourData={menuDuJour} />
        </SectionContainer>
        <SectionContainer marginBottom="xl" centered red>
          <Brunch
            brunchData={brunch}
            hiddenOnMobImg={imageAdjacentToBrunchMenuHiddenOnMob}
          />
        </SectionContainer>
        <SectionContainer marginBottom="xxl" centered red>
          <Desserts
            dessertData={desserts}
            hiddenOnMobImg={imageAdjacentToBrunchMenuHiddenOnMob}
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
          gatsbyImageData
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
        }
      }
    }
  }
`
