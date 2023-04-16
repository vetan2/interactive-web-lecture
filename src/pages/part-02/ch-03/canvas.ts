/* eslint-disable no-param-reassign */

import { ioOption, option } from "fp-ts"
import { pipe } from "fp-ts/function"
import { useCallback, useEffect, useRef } from "react"
import { Particle } from "./particle"

const INTERVAL = 1000 / 60

export const PARTICLE_COUNT = 1000

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasInfo = useRef<{
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    dpr: number
    width: number
    height: number
  }>()

  const now = useRef(Date.now())
  const then = useRef(Date.now())
  const delta = useRef(0)

  const particles = useRef<Particle[]>([])

  const getCanvasElement = useCallback(
    () =>
      pipe(
        canvasRef.current,
        option.fromNullable,
        option.bindTo("canvas"),
        option.bind("ctx", ({ canvas }) =>
          option.fromNullable(canvas.getContext("2d")),
        ),
        option.bind("dpr", () => option.some(devicePixelRatio)),
        option.bind("width", () => option.some(innerWidth)),
        option.bind("height", () => option.some(innerHeight)),
      ),
    [],
  )

  const initCanvas = pipe(
    getCanvasElement,
    ioOption.chainFirstIOK(({ canvas, width, height, dpr, ctx }) => () => {
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }),
  )

  const createRing = () => {
    Array(PARTICLE_COUNT)
      .fill(0)
      .map(() => {
        particles.current.push(new Particle())
      })
  }

  const frame = useCallback(() => {
    requestAnimationFrame(frame)
    now.current = Date.now()
    delta.current = now.current - then.current

    if (delta.current < INTERVAL) return

    if (canvasInfo.current) {
      const { ctx, width, height } = canvasInfo.current
      ctx.clearRect(0, 0, width, height)

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const particle = particles.current[i]
        particle.update()
        particle.draw(ctx)

        if (particle.opacity <= 0) particles.current.splice(i, 1)
      }
    }

    then.current = now.current - (delta.current % INTERVAL)
  }, [])

  useEffect(() => {
    canvasInfo.current = pipe(getCanvasElement(), option.toUndefined)
    initCanvas()
    requestAnimationFrame(frame)

    addEventListener("resize", initCanvas)

    return () => {
      removeEventListener("resize", initCanvas)
    }
  }, [frame, getCanvasElement, initCanvas])

  return { canvasRef, createRing }
}
