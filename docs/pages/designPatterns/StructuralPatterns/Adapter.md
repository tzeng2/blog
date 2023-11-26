---
title: Adapter
author: 曾田
date: '2023-11-19'
navbar: true
---

```js
class RoundHole {
    radius
    constructor(radius: number) {
        this.radius  = radius
    }
    fits(peg: RoundPeg) {
        return this.radius >= peg.radius
    }
}
class RoundPeg {
    radius
    constructor(radius: number) {
        this.radius = radius
    }
}

class SquarePeg {
    width
    constructor(width: number) {
        this.width = width
    }
}

class SquarePegAdapter {
    radius
    constructor (peg:SquarePeg) {
        this.radius = peg.width * Math.sqrt(2) / 2
    }
}

let hole = new RoundHole(5)
let rpeg = new RoundPeg(5)

console.log(hole.fits(rpeg))

let small_sqpeg = new SquarePeg(5)
let large_sqpeg = new SquarePeg(10)
console.log(hole.fits(new SquarePegAdapter(small_sqpeg)))
console.log(hole.fits(new SquarePegAdapter(large_sqpeg)))
```