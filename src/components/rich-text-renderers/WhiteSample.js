import React from "react"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"


import {
  Heading1,
  Heading2,
  Heading3,
  BC1,
} from "../StyledComponents/typography.css"
import GetMenu from './GetMenu'


const Renderer = ({ node }) => {



  
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Heading1 color="white">{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2 color="white">{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3 color="white">{children}</Heading3>,
      [BLOCKS.HR]: (node, children) => <br style={{marginBottom: '-25rem'}}/>,
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BC1 marginBottom="sm" color="white">{children}</BC1>
      ),
      [BLOCKS.HYPERLINK]: (node, children) => (
        <BC1 marginBottom="sm" style={{color: `white !important`}}>{children}</BC1>
      ),
  
    },
   
  }

  return <>
  {renderRichText(node, options)} 
 
  </>
}

export default Renderer
