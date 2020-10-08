require(['ko'], function (ko) {
    ko.components.register('dashboard', {
        viewModel: { require: "components/dashboard/scripts/dashboard" },
        template: { require: "text!components/dashboard/dashboard.html" }
    });
    ko.applyBindings();

});
