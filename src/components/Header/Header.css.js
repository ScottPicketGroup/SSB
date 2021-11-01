import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
  padding: 56px 139px 28px;

  @media (max-width: 451px) {
    padding: 14px 5%;
  }
`
export const MenuCancelIconWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 1.75rem;
`
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
`
export const MenuLogoWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`
export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 6rem;
`
export const HeaderLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;

  a {
    text-decoration: none;
  }

  @media (max-width: 451px) {
    a {
      width: 50px;
      text-align: center;
    }
  }
`
