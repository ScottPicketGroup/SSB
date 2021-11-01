import React from "react"

const MenuHamburgerIcon = ({ mobile, menuOpen, setMenuOpen }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={mobile ? "39" : "58"}
      height="27"
      viewBox="0 0 58 27"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <g id="Group_1" data-name="Group 1" transform="translate(-1133 -57.5)">
        <line
          id="Line_212"
          data-name="Line 212"
          x2="58"
          transform="translate(1133 59)"
          fill="none"
          stroke="#dc1e28"
          strokeWidth="3"
        />
        <line
          id="Line_213"
          data-name="Line 213"
          x2="58"
          transform="translate(1133 71)"
          fill="none"
          stroke="#dc1e28"
          strokeWidth="3"
        />
        <line
          id="Line_214"
          data-name="Line 214"
          x2="58"
          transform="translate(1133 83)"
          fill="none"
          stroke="#dc1e28"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export default MenuHamburgerIcon
