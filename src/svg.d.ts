declare module "*.svg" {
  import React from "react"

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >

  export default ReactComponent
}
