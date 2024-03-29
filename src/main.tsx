import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "reset-css"
import "./global.css"
import { Router } from "./Router"

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="interactive-web-lecture">
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
