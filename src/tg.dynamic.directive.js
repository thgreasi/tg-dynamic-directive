angular.module('tg.dynamicDirective', [])
    .directive('tgDynamicDirective', ['$compile',
        function($compile) {
            'use strict';
            return {
                restrict: 'E',
                require: '^ngModel',
                scope: true,
                template: '<div ng-include="templateUrl"></div>',
                link: function(scope, element, attrs, ngModel) {
                    var ngModelItem = scope.$eval(attrs.ngModel);
                    scope.ngModelItem = ngModelItem;
                    scope.templateUrl = '';

                    var getView = scope.$eval(attrs.tgDynamicDirectiveView);
                    if (getView && typeof getView === 'function') {
                        var templateUrl = getView(ngModelItem);
                        if (templateUrl) {
                            scope.templateUrl = templateUrl;
                        }
                    }
                }
            };
        }
    ]);
