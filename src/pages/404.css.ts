import { globalStyle, style } from "@vanilla-extract/css"

export const ul = style({})

export const body = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

globalStyle(`${ul} > li`, {
  fontSize: 32,
  fontWeight: 800,
  marginBottom: 16,
})

globalStyle(`${ul} > li > ul > li a`, {
  fontWeight: 500,
  fontSize: 24,
  marginBottom: 4,
  color: "black",
})
