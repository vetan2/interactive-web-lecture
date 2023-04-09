import { Helmet } from "react-helmet"
import UFO from "../../../asset/ufo.svg"
import { container } from "./index.css"

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
