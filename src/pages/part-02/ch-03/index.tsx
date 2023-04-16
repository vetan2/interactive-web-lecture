import { animated, useSpring, useSprings } from "@react-spring/web"
import { useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import { useCanvas } from "./canvas"
import * as style from "./index.css"
import Ring from "./ring.png"

const COUNT = 3

const Page = () => {
  const { canvasRef, createRing } = useCanvas()

  const effectEnabled = useRef(true)

  const [countdownSprings, countdownApi] = useSprings(
    COUNT,
    () => ({ from: { opacity: 0, scale: 5 } }),
    [],
  )

  const [ringSpring, ringApi] = useSpring(() => ({ from: { opacity: 1 } }), [])

  useEffect(() => {
    const startCount = () => {
      if (effectEnabled.current) {
        effectEnabled.current = false
        ringApi.start({ to: { opacity: 1 }, config: { duration: 500 } })

        Promise.all(
          countdownApi
            .start((i) => ({
              from: { opacity: 0, scale: 5 },
              to: { opacity: 1, scale: 1 },
              delay: i * 1000,
              config: {
                duration: 100,
              },
              onStart: () => {
                if (i >= COUNT - 1) {
                  ringApi.start(() => ({
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                    delay: 1000,
                    config: {
                      duration: 100,
                    },
                    onStart: () => {
                      createRing()
                    },
                  }))
                }
              },
            }))
            .map((p, promiseIndex) =>
              p.then(() =>
                countdownApi.start((springIndex) => ({
                  ...(promiseIndex === springIndex && {
                    from: { opacity: 1, scale: 1 },
                    to: { opacity: 0, scale: 1 },
                    delay: 900,
                  }),
                })),
              ),
            ),
        ).then(() => {
          effectEnabled.current = true
        })
      }
    }

    addEventListener("click", startCount)
    return () => removeEventListener("click", startCount)
  }, [countdownApi, ringApi, createRing])

  return (
    <>
      <Helmet>
        <title>Countdown</title>
      </Helmet>
      <div className={style.body}>
        <animated.img
          src={Ring}
          alt="circle"
          className={style.ring}
          style={ringSpring}
        />
        <canvas ref={canvasRef} />
        <div className={style.countdownContainer}>
          {Array(COUNT)
            .fill(0)
            .map((_, i, array) => (
              <animated.span
                key={i}
                className={style.countdown}
                style={countdownSprings[i]}
              >
                {array.length - i}
              </animated.span>
            ))}
        </div>
      </div>
    </>
  )
}

export default Page
