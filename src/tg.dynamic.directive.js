angular.module('tg.dynamicDirective', [])
    .directive('tgDynamicDirective', ['$compile',
        function($compile) {
            'use strict';
            return {
                restrict: 'E',
                require: '^ngModel',
                scope: true,
                link: function(scope, element, attrs, ngModel) {
                    var ngModelItem = scope.$eval(attrs.ngModel);
                    scope.ngModelItem = ngModelItem;

                    var getView = scope.$eval(attrs.tgDynamicDirectiveView);
                    if (getView && typeof getView === 'function') {
                        var templateUrl = getView(ngModelItem);
                        if (templateUrl) {
                            element.html('<div ng-include src="\'' + templateUrl + '\'"></div>');
                        }

                        $compile(element.contents())(scope);
                    }
                }
            };
        }
    ]);
