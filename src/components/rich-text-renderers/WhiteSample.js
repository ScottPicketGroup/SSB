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
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BC1 marginBottom="sm" color="white">{children}</BC1>
      ),
      [BLOCKS.HYPERLINK]: (node, children) => (
        <BC1 marginBottom="sm" style={{color: `white !important`}}>{children}</BC1>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
       
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        // if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        //    (
        //     <pre>
        //       <code>{node.data.target.fields.code}</code>
        //     </pre>
        //   );
        }
    },
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
    
      },
  }

  return <>
  {renderRichText(node, options)} 
  {
  node.references ? <GetMenu menu={node.references[0]} />  : null
}
  </>
}

export default Renderer
