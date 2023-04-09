import { useEffect, useRef } from "react"
import BazziKart from "./bazzi_kart.png"
import Dao from "./dao.png"
import DaoKart from "./dao_kart.png"
import * as style from "./index.css"
import KartRiderBackground from "./kartrider-background.jpg"

const Page = () => {
  const stickyBackgroundRef = useRef<HTMLDivElement>(null)
  const daoKartRef = useRef<HTMLImageElement>(null)
  const bazziKartRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const fn = () => {
      const startY = 1565
      const endY = 2500
      if (window.scrollY > startY && window.scrollY < endY) {
        const diff = endY - startY
        const currentY = window.scrollY - startY
        const ratio = currentY / diff
        const daoKart = daoKartRef.current
        const bazziKart = bazziKartRef.current
        const stickyBackground = stickyBackgroundRef.current
        if (daoKart && bazziKart && stickyBackground) {
          daoKart.style.transform = `scale(${0.5 + 0.5 * ratio}) translate(${
            -ratio * 600
          }px, ${(1 - Math.pow(1 - ratio, 3)) * 150}px)`
          bazziKart.style.transform = `scale(${0.7 + 0.3 * ratio}) translate(${
            ratio * 800
          }px, ${(1 - Math.pow(1 - ratio, 3)) * 150}px)`
        }
      }
    }

    window.addEventListener("scroll", fn)

    return () => {
      window.removeEventListener("scroll", fn)
    }
  }, [])

  return (
    <div className={style.body}>
      <div className={style.bannerContainer}>
        <img
          src={KartRiderBackground}
          alt="kartrider banner"
          className={style.bannerImage}
        />
        <h1 className={style.bannerHead}>
          GOOD BYE
          <br />
          <span>카트라이더</span>
        </h1>
      </div>
      <div className={style.sectionContainer}>
        <section className={style.section}>
          <img src={Dao} alt="다오" className={style.sectionImage} />
          <div>
            <h2>대충 있어보이는 문구</h2>
            <p>
              대충 있어보이는 내용 대충 있어보이는 내용 대충 있어보이는 내용
            </p>
          </div>
        </section>
        <section className={style.section}>
          <div>
            <h2>대충 있어보이는 문구</h2>
            <p>
              대충 있어보이는 내용 대충 있어보이는 내용 대충 있어보이는 내용
            </p>
          </div>
          <img src={Dao} alt="다오" className={style.sectionImage} />
        </section>
      </div>
      <div className={style.stickyContainer}>
        <div className={style.stickyBackground} ref={stickyBackgroundRef}>
          <img
            src={BazziKart}
            className={style.bazziKartImage}
            alt="카트 탄 배찌"
            ref={bazziKartRef}
          />
          <img
            src={DaoKart}
            className={style.daoKartImage}
            alt="카트 탄 다오"
            ref={daoKartRef}
          />
        </div>
      </div>
      <div className={style.sectionContainer}>
        <section className={style.section}>
          <img src={Dao} alt="다오" className={style.sectionImage} />
          <div>
            <h2>대충 있어보이는 문구</h2>
            <p>
              대충 있어보이는 내용 대충 있어보이는 내용 대충 있어보이는 내용
            </p>
          </div>
        </section>
        <section className={style.section}>
          <div>
            <h2>대충 있어보이는 문구</h2>
            <p>
              대충 있어보이는 내용 대충 있어보이는 내용 대충 있어보이는 내용
            </p>
          </div>
          <img src={Dao} alt="다오" className={style.sectionImage} />
        </section>
      </div>
    </div>
  )
}

export default Page
