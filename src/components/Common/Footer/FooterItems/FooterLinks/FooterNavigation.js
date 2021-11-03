import React from "react"
import { FooterLink, FooterLinksColumn } from "../../Footer.css"

const FooterNavigation = () => {

  const links = [
    { name: "Home", to: "/" },
    { name: "Contact", to: "/contact-us" },
    { name: "Terms and Conditions", to: "/terms-conditions" }
  ]

  return (
    <FooterLinksColumn>
      <FooterLink marginBottom="md">SP EVENTS</FooterLink>
      {links.map((link, i) => (
        <FooterLink marginBottom="sm" to={link.to}>
          {link.name}
        </FooterLink>
      ))}

    </FooterLinksColumn>
  )
}

export default FooterNavigation
