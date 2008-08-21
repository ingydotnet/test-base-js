(function() {

Test.Base.newSubclass('Test.Sample');

var proto = Test.Sample.Filter.prototype;

proto.upper_case = function(content, block) {
    return content.toUpperCase();
}

})();
