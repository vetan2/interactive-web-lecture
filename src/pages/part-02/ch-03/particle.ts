/* eslint-disable no-param-reassign */
import { randomNumberBetween } from "./util"

export class Particle {
  x = 0
  y = 0

  r = innerHeight / 4
  rAlpha = randomNumberBetween(4, 5)
  rFriction = randomNumberBetween(0.9, 1)

  angle = (Math.PI / 180) * randomNumberBetween(0, 360)
  angleAlpha = (Math.PI / 180) * randomNumberBetween(1, 10)
  angleFriction = randomNumberBetween(0.99, 1.01)

  opacity = randomNumberBetween(0.2, 1)

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`
    ctx.fill()
    ctx.closePath()
  }

  update() {
    this.rAlpha *= this.rFriction
    this.r += this.rAlpha

    this.angleAlpha *= this.angleFriction
    this.angle += this.angleAlpha

    this.x = innerWidth / 2 + this.r * Math.cos(this.angle)
    this.y = innerHeight / 2 + this.r * Math.sin(this.angle)

    this.opacity -= 0.008 + this.rAlpha / 500 + this.angleAlpha / 50
  }
}
