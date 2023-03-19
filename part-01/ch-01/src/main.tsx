import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
