import { Helmet } from "react-helmet"
import { container } from "./index.css"
import UFO from "./ufo.svg"

const Page = () => {
  return (
    <>
      <Helmet>
        <title>404 에러 페이지</title>
      </Helmet>
      <div className={container}>
        <UFO />
      </div>
    </>
  )
}

export default Page
