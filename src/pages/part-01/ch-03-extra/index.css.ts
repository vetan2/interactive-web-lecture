import { globalStyle, style } from "@vanilla-extract/css"

export const body = style({
  backgroundColor: "#90c5e0",
})

export const bannerContainer = style({
  position: "relative",
})

export const bannerImage = style({
  width: "100%",
  WebkitMaskImage:
    "-webkit-gradient(linear, left 25%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 25%, rgba(0,0,0,0))",
})

export const bannerHead = style({
  position: "absolute",
  top: "75%",
  left: 0,
  right: 0,
  textAlign: "center",
  fontSize: 72,
  fontWeight: 800,
  color: "white",
})

globalStyle(`${bannerHead} span`, {
  fontSize: 144,
})

export const sectionContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 80,
  marginTop: 120,
  padding: "40px 120px",
})

export const section = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
})

globalStyle(`${section} h2`, {
  fontSize: 32,
  fontWeight: 600,
})

globalStyle(`${section} p`, {
  fontSize: 16,
  fontWeight: 400,
  marginTop: 12,
})

export const sectionImage = style({
  width: 144,
  height: 144,
})

export const stickyContainer = style({
  height: "200vh",
  padding: 40,
  selectors: {
    "&:not(:first-child)": {
      marginTop: 40,
    },
  },
})

export const stickyBackground = style({
  position: "sticky",
  width: "100%",
  height: "calc(100vh - 80px)",
  top: 40,
})

export const daoKartImage = style({
  position: "absolute",
  top: 40,
  right: 40,
  width: 500,
  height: 500,
  transformOrigin: "center",
  transform: "scale(0.5)",
})

export const bazziKartImage = style({
  position: "absolute",
  top: 200,
  left: 40,
  width: 300,
  height: 300,
  transformOrigin: "center",
  transform: "scale(0.7)",
})
