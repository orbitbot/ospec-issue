var mq = require("mithril-query")
var o = require("ospec")

var MyComponent = require("../my-component.js")

o.spec("MyComponent", function() {
    o("things are working", function() {
        var out = mq(MyComponent, {text: "What a wonderful day to be alive!"})
        out.should.contain("day")
    })
})