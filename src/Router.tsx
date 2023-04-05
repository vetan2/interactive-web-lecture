/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, Fragment, PropsWithChildren } from "react"
import { Route, Routes } from "react-router-dom"

const BASIC: Record<string, { [key: string]: FC<PropsWithChildren> }> =
  import.meta.globEager("/src/pages/(_app|404).tsx")

const COMPONENTS: Record<string, { [key: string]: FC }> = import.meta.globEager(
  "/src/pages/**/[a-z[]*.tsx",
)

const basics = Object.keys(BASIC).reduce((basic, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, "")
  return { ...basic, [key]: BASIC[file].default } satisfies Record<
    string,
    FC<PropsWithChildren>
  >
}, {} as Record<string, FC<PropsWithChildren>>)

const components = Object.keys(COMPONENTS).map((component) => {
  const path = component
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1")

  return { path, component: COMPONENTS[component].default }
})

export const Router = () => {
  const App = basics?.["_app"] || Fragment
  const NotFound = basics?.["404"] || Fragment

  return (
    <App>
      <Routes>
        {components.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  )
}
