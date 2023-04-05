import { style } from "@vanilla-extract/css"

export const body = style({
  height: "200vh",
  backgroundColor: "#00110C",
})

export const header = style({
  height: 36,
  backgroundColor: "#04120C",
  color: "#BBE1EE",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})

export const headerButton = style({
  padding: 10,
  fontWeight: 700,
  cursor: "pointer",
  height: "100%",
  color: "unset",
  textDecoration: "unset",
  selectors: {
    "&:hover": {
      backgroundColor: "#127374",
    },
  },
})

export const rightButtonContainer = style({
  display: "flex",
})

export const longText = style({
  display: "none",
  "@media": {
    "screen and (min-width: 800px)": {
      display: "unset",
    },
  },
})

export const shortText = style({
  "@media": {
    "screen and (min-width: 800px)": {
      display: "none",
    },
  },
})

export const activeMenu = style({
  backgroundColor: "#013A3B",
})

export const backgroundContainer = style({
  overflow: "hidden",
})

export const background = style({
  // minWidth: 1000,
})

export const mainContentContainer = style({
  marginTop: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

export const title = style({
  color: "#BBE1EE",
  fontSize: "170%",
  fontWeight: 300,
  letterSpacing: 10,
})

export const mountainTagContainer = style({
  display: "flex",
  marginTop: 40,
  fontSize: 18,
  fontWeight: 700,
  gap: 20,
  "@media": {
    "screen and (max-width: 800px)": {
      flexDirection: "column",
    },
  },
})

export const mountainContentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 20,
})

export const mountainContent = style({
  display: "flex",
  width: 325,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#BBE1EE",
  color: "#04120C",
})
