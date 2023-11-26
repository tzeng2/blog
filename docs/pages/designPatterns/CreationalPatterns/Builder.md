---
title: Factory Pattern
author: 曾田
date: '2023-11-12'
navbar: true
---

## Formal definition
> **Builder** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.


**Builder** is used to optimize code like this:
```js

```

## Structure
<img src="../../../.vuepress/public/imgs/FactoryPatternStr.png" width="500" height="600" />

## Code Example
```js
interface Builder {
    reset(): void,
    setSeats(): void,
    setEngine(): void,
    getProduct(): any
}

class CarA {
    product: string = ''
    // 座位调整
    seatSize() {}
    // 引擎调整
    engineChoose() {}
}

class CarB {
    product: string = ''
    // 座位调整
    seatSize() {}
    // 引擎调整
    engineChoose() {}
}

class CarABuilder implements Builder {
    product: CarA = new CarA()
    constructor () {
        this.reset()
    }

    public reset() {
        this.product = new CarA()
    }

    public setSeats() {
        this.product.seatSize()
    }

    public setEngine() {
        this.product.engineChoose()
    }

    public getProduct() {
        this.reset()
        return this.product
    }
}

class CarBBuilder implements Builder {
    product: CarB = new CarB()
    constructor() {
        this.reset()
    }

    public reset() {
        this.product = new CarB()
    }

    public setSeats() {
        this.product.seatSize()
    }

    public setEngine() {
        this.product.engineChoose()
    }

    public getProduct() {
        this.reset()
        return this.product
    }
}

class Director {
    builder: Builder
    constructor(builder: Builder) {
        this.builder = builder
    }
    setBuilder(builder: Builder) {
        this.builder = builder
    }
    makeCar() {
        this.builder.setSeats()
        this.builder.getProduct()
    }
}
```
