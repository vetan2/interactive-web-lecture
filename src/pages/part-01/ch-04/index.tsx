import { Helmet } from "react-helmet"
import Banner from "./banner.png"
import DownArrow from "./down-arrow.png"
import * as style from "./index.css"

const Page = () => {
  return (
    <div className={style.body}>
      <Helmet>
        <title>Fast Bank</title>
      </Helmet>
      <div className={style.bannerImageContainer}>
        <img src={Banner} alt="banner" className={style.bannerImage} />
      </div>
      <div className={style.bannerTitle}>
        <h1>이미 모두의 은행,</h1>
        <h1>패스트뱅크</h1>
        <h1 className={style.distinctTitleText}>함께 일해요</h1>
        <h2 className={style.bannerH2}>Join us!</h2>
        <img src={DownArrow} alt="down arrow" className={style.downArrow} />
      </div>
      <ul className={style.listItemContainer}>
        {[]
          .concat(
            ...Array(4).fill([
              "스우",
              "데미안",
              "루시드",
              "윌",
              "거대 괴수 더스크",
              "진 힐라",
              "친위대장 듄켈",
              "검은 마법사",
              "선택받은 세렌",
              "감시자 칼로스",
              "카링",
            ]),
          )
          .map((text, index) => (
            <li key={`${text}-${index}`} className={style.listItem}>
              {text}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Page
