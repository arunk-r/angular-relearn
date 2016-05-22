//Directives
weatherApp.directive('weatherReport', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/customDirectives.html',
        replace: true,
        scope: {
            weather: '=',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    };
});