import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import Background from "./background.svg"
import * as style from "./index.css"

const Page = () => {
  const [activeItem, setActiveItem] = useState("MOUNTAIN")
  const backgroundRef = useRef<SVGSVGElement>(null)
  const clientWidth = useRef(-1)
  if (clientWidth.current < 0) {
    clientWidth.current = document.documentElement.clientWidth
  }
  const href = "#document-title"

  const controlTranslation = (options?: { reset?: boolean }) => {
    const reset = options?.reset
    const backgroundElement = backgroundRef.current
    const sunElement = backgroundElement?.querySelector<HTMLElement>("#sun")
    const whiteCloudElement =
      backgroundElement?.querySelector<HTMLElement>("#white-clouds")
    const grayCloudElement =
      backgroundElement?.querySelector<HTMLElement>("#gray-clouds")
    const birdElements = ["#bird1", "#bird2", "#bird3"].map((id) =>
      backgroundElement?.querySelector<HTMLElement>(id),
    )
    const mountainElements = Array.from({ length: 7 })
      .map((_, i) => `#mountain${i}`)
      .map((id) => backgroundElement?.querySelector<HTMLElement>(id))
    console.log(clientWidth.current)

    const scrollY = window.scrollY

    if (sunElement) {
      sunElement.style.transform = `translateY(${reset ? 0 : scrollY * 0.9}px)`
    }

    if (whiteCloudElement) {
      whiteCloudElement.style.transform = `translate(${
        reset ? 0 : scrollY * -0.5
      }px,${reset ? 0 : scrollY * 0.9}px)`
    }

    if (grayCloudElement) {
      grayCloudElement.style.transform = `translate(${
        reset ? 0 : scrollY * 0.25
      }px,${reset ? 0 : scrollY * 0.9}px)`
    }

    if (birdElements) {
      const speeds = [-1, 0.5, 1.25]
      birdElements.forEach((el, i) => {
        if (el) {
          // eslint-disable-next-line no-param-reassign
          el.style.transform = `translateX(${
            reset ? 0 : scrollY * speeds[i]
          }px)`
        }
      })
    }

    if (mountainElements) {
      mountainElements.forEach((el, i, array) => {
        if (el) {
          // eslint-disable-next-line no-param-reassign
          el.style.transform = `translateY(${
            reset ? 0 : scrollY * (0.9 - i / array.length)
          }px)`
        }
      })
    }
  }

  useEffect(() => {
    const initScroll = () => {
      if (clientWidth.current > 800) {
        controlTranslation()
      }
    }

    window.addEventListener("scroll", initScroll)

    return () => {
      window.removeEventListener("scroll", initScroll)
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      clientWidth.current = document.documentElement.clientWidth
      if (clientWidth.current <= 800) {
        controlTranslation({ reset: true })
      }
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>FireWatch</title>
      </Helmet>
      <div className={style.body}>
        <header className={style.header}>
          <a
            id="title"
            className={style.headerButton}
            href={href}
            onClick={(event) => {
              event.preventDefault()
              document.querySelector(href)?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            THE MOUNTAIN
          </a>
          <ul className={style.rightButtonContainer}>
            {[
              ["MOUNTAIN", "MOUNTAIN"],
              ["AMAZING NEWS", "NEWS"],
              ["AMAZING BLOG", "BLOG"],
            ].map(([long, short], index) => (
              <li
                key={index}
                className={clsx(
                  style.headerButton,
                  long === activeItem && style.activeMenu,
                )}
                onClick={() => setActiveItem(long)}
              >
                <span className={style.longText}>{long}</span>
                <span className={style.shortText}>{short}</span>
              </li>
            ))}
          </ul>
        </header>
        <div className={style.backgroundContainer}>
          <Background className={style.background} ref={backgroundRef} />
        </div>
        <div className={style.mainContentContainer}>
          <p className={style.title} id="document-title">
            아름다운 금수강산
          </p>
          <div className={style.mountainTagContainer}>
            <ul className={style.mountainContentContainer}>
              {["지리산", "금강산"].map((mountain) => (
                <li key={mountain} className={style.mountainContent}>
                  {mountain}
                </li>
              ))}
            </ul>
            <ul className={style.mountainContentContainer}>
              {["한라산", "북한산"].map((mountain) => (
                <li key={mountain} className={style.mountainContent}>
                  {mountain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
