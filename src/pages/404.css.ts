import { globalStyle, style } from "@vanilla-extract/css"

export const ul = style({})

globalStyle(`${ul} > li`, {
  fontSize: 32,
  fontWeight: 700,
  marginBottom: 16,
})

globalStyle(`${ul} > ul > li a`, {
  fontSize: 24,
  marginBottom: 4,
})

globalStyle(`${ul} > ul > li a:visited`, {
  color: "black",
})
