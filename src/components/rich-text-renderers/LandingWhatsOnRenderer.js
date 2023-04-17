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
  const output = []
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading1 color="black">{children}</Heading1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading2 color="black">{children}</Heading2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading3 color="black">{children}</Heading3>
      ),
      [BLOCKS.HYPERLINK]: (node, children) => (
        <a
          href=""
          color="red"
          style={{ color: `red !important`, marginTop: `25rem` }}
        >
          {children}
        </a>
      ),

      [BLOCKS.PARAGRAPH]: (node, children) => <BC1>{children}</BC1>,
      // [BLOCKS.PARAGRAPH]: (node, children) => {
      //   output.push(children)
      // },
    },
  }

  return (
    <>
      {renderRichText(node, options)}
      {/* {console.log("output", output[0].toString().substring(output[0].toString().length - 2))}
      {output[0].toString().length > 120 ? (
        <BC1 marginBottom="md">
          {output[0].toString().substring(0, 150)}
          <span style={{ marginLeft: `-.6rem`, background: `white` }}>…</span>
        </BC1>
      ) :
      output.length < 2 && output[0].toString().length < 150 ? (
        <BC1>
          {output[0].toString().substring(0, 150)}
          <span style={{ marginLeft: `-.6rem`, background: `white` }}>…</span>
        </BC1>
      ) :
      (
        <>
          <BC1>{output[0]}</BC1>
          <BC1>
            {output[1].toString().substring(0, 40)}
            <span style={{ marginLeft: `-.6rem`, background: `white` }}>…</span>
          </BC1>
        </>
      )} */}
    </>
  )
}

export default Renderer
