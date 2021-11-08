import styled from "styled-components"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { color } from "../../StyledComponents/variables"

export const GalleryContainer = styled(SectionContainer)`
  background: transparent;
  @media (max-width: 451px) {
    width: 100%;
    margin-bottom: 0;
  }
`

export const ImageContainer = styled.div`
  margin-top: 2.25rem;
  ${props=>props.page==="dining" && "width:100vw"};
  height: ${props=>props.page==="dining" ? "35vw" : "46vw"};
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;

  @media (max-width: 451px) {
    height: 60vw;
  }
`

export const Card = styled.div`
  width: 100%;
  margin-left: ${props =>
    props.active === props.i + 1
      ? "0vw"
      : `${(props.i - props.active) * 100}vw`};
  transition: margin-left 550ms ease-in-out;
  position: absolute;
  top: 0;
`

export const Controls = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`

export const Control = styled.div`
  width: 12px;
  height: 12px;
  margin: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 451px) {
    width: 15px;
    height: 15px;
  }
`
export const ActiveControl = styled.div`
  width: 12px;
  height: 12px;
  margin: 0.5rem;
  text-align: center;
  border-radius: 50%;
  background: ${color.PRIMARY_RICH_BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 451px) {
    width: 15px;
    height: 15px;
  }
`
export const ActiveControlBgRed = styled.div`
  width: 12px;
  height: 12px;
  margin: 0.5rem;
  text-align: center;
  border-radius: 50%;
  background: ${color.SECONDARY_WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 451px) {
    width: 15px;
    height: 15px;
  }
`
