app.directive('atHeader', function () {
    return {
        restrict: 'AE', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        // replace: true,
        templateUrl: "../templates/header.html",
        // controller: ['$scope', '$filter', function ($scope, $filter) {
        //     // Your behaviour goes here :)
        // }]
    }
});