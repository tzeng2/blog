---
title: Factory Pattern
author: 曾田
date: '2023-11-13'
navbar: true
---

## Formal definition
> **Abstract Factory** is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.


**Factory Pattern** is used to optimize code like this:
```js
class Creator {
    create(type) {
        if (type === 'car') console.log('make car')
        if (type === 'ship') console.log('make ship')
    }
}

const carC = new Creator()
carC.create('car')
const shipC = new Creator()
shipC.create('ship')
```

## Structure
<img src="../../../.vuepress/public/imgs/FactoryPatternStr.png" width="500" height="600" />

## Code Example
```js
interface ProductMaker {
    makeSth():void
}

class CarMaker implements ProductMaker {
    public makeSth() {
        console.log('make car')
    }
}

class ShipMaker implements ProductMaker {
    public makeSth() {
        console.log('make ship')
    }
}


abstract class Creator {
    abstract getMaker(): ProductMaker

    public create() {
        this.getMaker().makeSth()
    }
}

class CarCreator extends Creator {
    public getMaker() {
        return new CarMaker()
    }
}

class ShipCreator extends Creator {
    public getMaker() {
        return new ShipMaker()
    }
}

const carC = new CarCreator()
carC.create()
const shipC = new ShipCreator()
shipC.create()

// GUIFactory

interface GUIFactory {
    createButton(): Button,
    createCheckBox(): CheckBox
}

class WinGUIFactory implements GUIFactory {

    createButton(): Button {
        return new WinButton()
    }
    createCheckBox(): CheckBox {
        return new WinCheckBox()
    }
}

class MacGUIFactory implements GUIFactory {

    createButton(): Button {
        return new MacButton()
    }
    createCheckBox(): CheckBox {
        return new MacCheckBox()
    }
}


interface Button {
    paint(): string
}

interface CheckBox {
    paint(): string
}

class MacButton implements Button {
    paint() {return 'MacButton'}
}

class MacCheckBox implements CheckBox {
    paint() {return 'MacCheckBox'}
}

class WinButton implements Button {
    paint() {return 'WinButton'}
}

class WinCheckBox implements CheckBox {
    paint() {return 'WinCheckBox'}
}


class Application {
    public factory: GUIFactory
    public btn: Button
    constructor(factory: GUIFactory) {
        this.factory = factory
        this.btn = this.factory.createButton()
    }
    paint() {
        this.btn.paint()
    }   
}

const app = new Application(new MacGUIFactory())
app.paint()
```
