import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  Heading1,
  Heading2,
  Heading3,
  BC1,
} from "../StyledComponents/typography.css"

const Renderer = ({ node }) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Heading1 color="black">{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2 color="black">{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3 color="black">{children}</Heading3>,
      [BLOCKS.HYPERLINK]: (node, children) => (
       <a href="" color="red" style={{color: `red !important`, marginTop: `25rem` }}>{children}</a>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BC1 marginBottom="sm" color="red">{children}</BC1>
      ),
    },
  }

  return <>{renderRichText(node, options)}</>
}

export default Renderer
