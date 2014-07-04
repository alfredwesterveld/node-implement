"use strict"

const implement = require("./../index")

function A() {}
A.prototype = {
    C: function () {},
    D: function () {}
}

function sameAsA() {}
sameAsA.prototype = {
    C: function () {},
    D: function () {}
}
            
function differentAsA() {}
differentAsA.prototype = {
    D: function () {},
    E: function () {}
}


describe("implement", function () {
    it("should continue when implementing interface", function (done) {
        implement(A, sameAsA)
        done()
    })
    
    it("Should throw error when not implementing interface", function (done) {
        try {
            implement(A, differentAsA)
        } catch (error) {
            done()        
        }
    })
})
