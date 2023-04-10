import { keyframes, style } from "@vanilla-extract/css"
import 검은마법사 from "./icons/검은마법사.png"
import 더스크 from "./icons/더스크.png"
import 데미안 from "./icons/데미안.png"
import 듄켈 from "./icons/듄켈.png"
import 루시드 from "./icons/루시드.png"
import 세렌 from "./icons/세렌.png"
import 스우 from "./icons/스우.png"
import 윌 from "./icons/윌.png"
import 진힐라 from "./icons/진힐라.png"
import 카링 from "./icons/카링.png"
import 칼로스 from "./icons/칼로스.png"

export const body = style({
  backgroundColor: "#111",
  minHeight: "100%",
  paddingTop: 140,
})

export const bannerImageContainer = style({
  width: "100%",
  textAlign: "center",
})

export const bannerImage = style({
  width: 320,
})

export const bannerTitle = style({
  width: "100%",
  marginTop: 56,
  textAlign: "center",
  color: "white",
  fontSize: 40,
  fontWeight: 500,
})

export const distinctTitleText = style({
  marginTop: 20,
})

export const bannerH2 = style({
  opacity: 0.6,
  fontSize: 16,
  fontWeight: 400,
  marginTop: 76,
})

const upAndDown = keyframes({
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-10px)" },
  "100%": { transform: "translateY(0)" },
})

export const downArrow = style({
  marginTop: 20,
  width: 32,
  animation: `${upAndDown} 1s ease-in-out infinite`,
})

export const listItemContainer = style({
  margin: "120px auto 0",
  width: 384,
})

export const listItem = style({
  display: "inline",
  fontSize: 48,
  fontWeight: 600,
  selectors: {
    "&::before": {
      display: "inline-block",
      backgroundSize: "40px 40px",
      content: "",
      width: 40,
      height: 40,
      filter: "grayscale(100%)",
      opacity: 0.2,
    },
    "&:nth-child(11n+1)::before": {
      backgroundImage: `url(${스우})`,
    },
    "&:nth-child(11n+2)::before": {
      backgroundImage: `url(${데미안})`,
    },
    "&:nth-child(11n+3)::before": {
      backgroundImage: `url(${루시드})`,
    },
    "&:nth-child(11n+4)::before": {
      backgroundImage: `url(${윌})`,
    },
    "&:nth-child(11n+5)::before": {
      backgroundImage: `url(${더스크})`,
    },
    "&:nth-child(11n+6)::before": {
      backgroundImage: `url(${진힐라})`,
    },
    "&:nth-child(11n+7)::before": {
      backgroundImage: `url(${듄켈})`,
    },
    "&:nth-child(11n+8)::before": {
      backgroundImage: `url(${검은마법사})`,
    },
    "&:nth-child(11n+9)::before": {
      backgroundImage: `url(${세렌})`,
    },
    "&:nth-child(11n+10)::before": {
      backgroundImage: `url(${칼로스})`,
    },
    "&:nth-child(11n+11)::before": {
      backgroundImage: `url(${카링})`,
    },
  },
})
