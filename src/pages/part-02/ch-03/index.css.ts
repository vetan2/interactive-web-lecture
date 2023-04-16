import { style } from "@vanilla-extract/css"

export const body = style({
  height: "100%",
  overflow: "hidden",
  backgroundColor: "#000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export const ring = style({
  position: "absolute",
  width: "50vh",
  height: "50vh",
})

export const countdownContainer = style({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
})

export const countdown = style({
  position: "absolute",
  fontSize: "7rem",
  // transform: "scale(5)",
  opacity: 0,
})
