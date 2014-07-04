Install
===

```bash
npm install implement
```

Javascript
===

Demonstrated using mocha


```javascript
// test.implement.js

"use strict"

const implement = require("implement")

// LIFO.
function Queue() {}
Queue.prototype = {
    offer: function (e) {},
    poll: function () {},
    peek: function () {}
}

// Queue backed by array.
function ArrayQueue() {}
ArrayQueue.prototype = {
    offer: function (e) {},
    poll: function () {},
    peek: function () {}
}
       
// FIFO.
function Stack() {}
Stack.prototype = {
    peek: function () {},
    pop: function () {},
    push: function () {}
}


describe("implement", function () {
    it("should not throw error when implementing interface", function (done) {
        implement(ArrayQueue, Queue)
        done()
    })
    
    it("Should throw error when not implementing interface", function (done) {
        try {
            implement(Stack, Queue)
        } catch (error) {
            console.log(error.message)
            done()        
        }
    })
})

```

Run
===

```bash
mocha test.js
```
