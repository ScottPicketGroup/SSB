import styled from "styled-components"

export const IntroWrapper = styled.div`
  width: 60vw;
  display: flex;
  max-width: 40vw;
  flex-direction: column;
  margin: 6rem auto 3.25rem;
  text-align: center;
  @media (max-width: 451px) {
    width: 90%;
    max-width: 90%;
    margin: 3.25rem auto 1.75rem;
  }
`
export const GallaryWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto 6rem;
  text-align: left;
  @media (max-width: 451px) {
    width: 90%;
    margin: 0 auto 3.75rem;
  }
`
export const FormWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto 11.25rem;
  @media (max-width: 451px) {
    width: 90%;
    margin: 0 auto 6rem;
  }
`
export const TitleWrapper = styled.div`
  width: 40vw;
  margin-left: 3rem;
  text-align: center;
  margin-bottom: 1.75rem;
  @media (max-width: 451px) {
    width: 90%;
  }
`
export const DescriptionWrapper = styled.div`
  width: 45vw;
  @media (max-width: 451px) {
    width: 100%;
  }
`
export const GallerySliderWrapper = styled.div`
  margin-bottom: 3.5rem;
  @media (max-width: 451px) {
    margin-bottom: 1.75rem;
  }
`
