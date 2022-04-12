import React from 'react'
import { getImage } from "gatsby-plugin-image"
import {
    BBHeading2,
    Heading2,
    BC2,
    BC1,
  } from "../../../components/StyledComponents/typography.css"
  import {
    MenuDuJourContainer,
    BrunchFirstWrapper,
    MenuDuJourItemWrapper,
    SeasonalTitleWrapper,
    BrunchHiddenOnMobImage,
    MenuHeadingWrapper,
  } from "../index.css"
const EventMenu = ({eventData}) => {
    console.log(eventData.eventMenu.__typename)
  return (
    <BrunchFirstWrapper
            justify={eventData.eventMenuImage ? "space-between" : "center"}
            >
              {eventData.eventMenu.menuName !== null ? (
                <MenuDuJourContainer height="auto">
                  <MenuHeadingWrapper>
                    <Heading2 color="black">
                      {eventData.eventMenu
                        ? eventData.eventMenu.menuName
                        : "Menu"}

                        {}
                    </Heading2>
               </MenuHeadingWrapper>

                   {eventData.eventMenu.eventMenuItems ? (
                    eventData.eventMenu.eventMenuItems.map((item, index) => (
                      <MenuDuJourItemWrapper key={index}>
                        <BC2 color="black" bold>
                          {item.menuITem}
                        </BC2>
                        <BC2 color="black" bold>
                          {item.menuItemShortDescription}
                        </BC2>
                        <BC2 color="black">{item.menuItemLongDescription}</BC2>
                      </MenuDuJourItemWrapper>
                    ))
                  ) : (
                    <BC1 color="white"></BC1>
                  )}

                  {eventData.eventMenu && (
                    <SeasonalTitleWrapper>
                      <BC2 bold>{eventData.eventMenu.sideMenuName}</BC2>
                    </SeasonalTitleWrapper>
                  )}
                </MenuDuJourContainer>
              ) : null}
              {eventData.eventMenuImage ? (
                <BrunchHiddenOnMobImage
                  image={getImage(eventData.eventMenuImage)}
                  alt="brunch-hidden"
                />
              ) : (
                <BC1 color="white"></BC1>
              )}
            </BrunchFirstWrapper>
  )
}

export default EventMenu