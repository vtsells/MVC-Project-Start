define(['ko'], function (ko) {
    var model = function (params) {

        var self = this;
        self.title = "Testing";
    };
    var defaults = function (params) {
        var self = this;
        return self;
    }
    return model;
});