import "modern-normalize/modern-normalize.css"
import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./global.css"
import { Router } from "./Router"

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter
      basename={import.meta.env.PROD ? "interactive-web-lecture" : undefined}
    >
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
