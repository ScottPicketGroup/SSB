import styled from "styled-components"

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  text-align: center;
  margin: 6rem auto 3.5rem;
  @media (max-width: 451px) {
    width: 90%;
    margin: 3.5rem auto;
  }
`
export const GalleryWrapper = styled.div`
  width: 70vw;
  margin: 0 auto 3.5rem;
  @media (max-width: 451px) {
    width: 90%;
    margin: 0 auto 1.75rem;
  }
`
export const DescriptionWrapper = styled.div`
  width: 40vw;
  margin: 6 auto 3.5rem;
  @media (max-width: 451px) {
    width: 90%;
    margin: 0 auto 3.5rem;
  }
`