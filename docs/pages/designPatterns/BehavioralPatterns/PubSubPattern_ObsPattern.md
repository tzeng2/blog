---
title: Publish-Subscribe Pattern vs Observer Pattern
author: 曾田
date: '2023-09-28'
navbar: true
---



## Publish-Subscribe Pattern
> **The formal definition:** In software architecture, publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers, but instead categorize published messages into classes without knowledge of which subscribers, if any, there may be. Similarly, subscribers express interest in one or more classes and only receive messages that are of interest, without knowledge of which publishers, if any, there are.

To put it bluntly, the publish-subscribe pattern has three main roles: a publisher, some subscribers, and a dispatch center. Publishers publish messages to the dispatch center, and subscribers receive notifications from the dispatch center. This structure allows the decoupling of publishers and dispatch groups

**Example**  
A good real life example is subscribing channels on YouTube, when we see some programs we like, and if we want to know the up-to-date information, so we'll subscribe the channel, and when the YouTuber upload their new videos, the platform will send us a message to let us know that. Now we'll use JS to implement this scenario:
Here YouYube known as `dispatch center`, video maker known as `publishers`, users known as `subscribers`.
```js
class YouTube {
    constructor() {
        this.cbs = [];
    }
    on(cb) {
        this.cbs.push(cb);
    }
    emit() {
        this.cbs.forEach(cb => cb());
    }
}

const userA = {
    action: () => {console.log('watch new video right away')}
}
const userB = {
    action: () => {console.log('watch new video before sleep')}
}
const youtube = new YouTube();
youtube.on(userA.action);
youtube.on(userB.action);
const videoMaker = {
    postVedio: () => {
        youtube.emit()
    }
}
videoMaker.postVedio();
```


## Observer Design Pattern
> **The formal definition:** The observer pattern is a software design pattern in which an object, called the `subject`, maintains a list of its dependents, called `observers`, and notifies them automatically of any state changes, usually by calling one of their methods.

**Example**  
An real life example is shopping, customers always want to buy something at a discount, and the stores sometimes have it. But how the stores can let the customers know when there will be a good price. Here is the solution: customers, also called `Observers` in Obs Pattern, subscribe to the messages from the store, the store, also called `Subject`, and when the price of the goods goes down, the store immediately inform the customers, and the customer will take some actions. Right below is a very simple implementation, :
```js
// def
class Shop {
    constructor() {
        this.customers = []
        this.price = 100
    }
    addCustomer(customer) {
        this.customers.push(customer)
    }
    priceRenewed() {
        this.price = 90 // nity percent off
        this.notifyCustomers(this.price);
    }
    notifyCustomers(price) {
        this.customers.forEach(customer => {
            customer.takeActions(price);
        })
    }
}

class Customer {
    constructor(shop, name, action) {
        shop.addCustomer(this)
        this.name = name;
        this.action = action // assume one customer will take only one action when the price gets renewed
    }
    takeActions(price) {
        this.action(this.name, price);
    }
    
}
// use
const shop = new Shop();
const customerA = new Customer(shop, 'Alice', (name, price) => {console.log(`${name}: it is cheaper, I have to buy it at ${price}`)})
const customerB = new Customer(shop, 'Bob', (name, price) => {console.log(`${name}: ${price} is still expensive, I can't afford it`)})
shop.priceRenewed();
```

## Difference between Pub-Sub Pattern and Obs Pattern

From the above introduction, we can get a glimpse to the little difference between Pub-Sub Pattern and Obs Pattern.

**First**, in Pub-Sub Pattern, there is a dispatch center, subscribers behave to the state change of publishers through dispatch center, while subscribers and publishers don't know each other. In Obs Pattern, the publishers maintain a list of its subscribers.

**Second**, in the publisher-subscriber pattern, components are loosely coupled as opposed to the observer pattern.



## Reference
- [Design Patterns: Observer Pattern in JavaScript]('https://medium.com/javascript-in-plain-english/design-patterns-observer-pattern-in-javascript-b9611827a876')
- [Implementing the Observer Pattern in JavaScript]('https://medium.com/lftechnology/implementing-the-observer-pattern-in-javascript-198ccb62124d')
- [https://medium.com/better-programming/observer-vs-pub-sub-pattern-50d3b27f838c]('https://medium.com/better-programming/observer-vs-pub-sub-pattern-50d3b27f838c')
- [Publish-Subscribe Pattern: The Most Used Patterns in JavaScript]('https://medium.com/frontend-canteen/publish-subscribe-pattern-in-javascript-17bf1e94e83d')