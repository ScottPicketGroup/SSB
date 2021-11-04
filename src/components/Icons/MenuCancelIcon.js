import React from "react"
import useActiveMenu from "../hooks/ActiveMenu"

const MenuCancelIcon = () => {
  const { setMenuOpen, giftOpen, setGiftOpen } = useActiveMenu()

  const handleClick = () => {
    if (giftOpen) {
      setGiftOpen(false)
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => handleClick()}
      viewBox="0 0 39.914 39.914"
      height="2rem"
    >
      <path
        id="LaTrobe_Icon_Library-20"
        data-name="LaTrobe Icon Library-20"
        d="M39.914,1.414,38.5,0,19.957,18.543,1.414,0,0,1.414,18.543,19.957,0,38.5l1.414,1.414L19.957,21.371,38.5,39.914,39.914,38.5,21.371,19.957Z"
        fill="#fff"
      />
    </svg>
  )
}

export default MenuCancelIcon
