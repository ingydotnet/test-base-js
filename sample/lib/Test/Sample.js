// Class Test.Sample
(function(className) {
var __ = (Test.Sample = function() {
    this.init.apply(this, arguments);
    this.className = className;
}).prototype = new Test.Base();

__.init = function() {
    Test.Base.prototype.init.call(this);
    this.block_class = 'Test.Sample.Block';
}

})('Test.Sample');


// Class Test.Sample.Block
(function(className) {
var __ = (Test.Sample.Block = function() {
    this.init.apply(this, arguments)
    this.className = className;
}).prototype = new Test.Base.Block();

__.init = function() {
    Test.Base.Block.prototype.init.call(this);
    this.filter_object = new Test.Sample.Filter();
}

})('Test.Sample.Block');


// Class Test.Sample.Filter
(function(className) {
var __ = (Test.Sample.Filter = function() {
    this.init.apply(this, arguments);
    this.className = className;
}).prototype = new Test.Base.Filter();

__.upper_case = function(content, block) {
    return content.toUpperCase();
}


})('Test.Sample.Filter');
