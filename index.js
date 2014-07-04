"use strict"

const assert = require("assert")
const eq = require("deep-equal")
const util = require("util")

// used http://stackoverflow.com/a/2946616/11926 as baseline
function getAllMethods(object) {
    return Object.getOwnPropertyNames(object.prototype).filter(function(property) {
        return typeof object.prototype[property] === "function"
    })
}

/**
 * implement just tests only if functions do exist. It should also be tested(unit)
 */ 
function implement(actual, expected) {
    const actualMethods = getAllMethods(actual)
    const expectedMethods = getAllMethods(expected)
    const errorMessage = util.format("Should implement interface [%s]", expectedMethods)
    const bool = eq(actualMethods, expectedMethods)
    assert.ok(bool, errorMessage)
}

module.exports = exports = implement
