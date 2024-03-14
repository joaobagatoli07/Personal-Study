angular.module("ui", [])

angular.module("ui").run(function ($templateCache) {
    $templateCache.put("view/accordion.html", "<div class='accordion'>" +
        "<div class='accordion-item'>" +
        "<div class='accordion-header' ng-click='open()'>{{title}}</div>" +
        "<div class='accordion-body' ng-show='isOpened' ng-transclude></div>" +
        "</div>" +
        "</div>");
});

angular.module("ui").directive("uiAccordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            let accordions = []

            this.registerAccordion = accordion => {
                accordions.push(accordion)
            }

            this.closeAll = () => {
                accordions.forEach(accordion => {
                    accordion.isOpened = false
                })
            }
        }
    }
})

angular.module("ui").directive("uiAccordion", function () {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: function (scope, elements, attrs, ctrl) {
            ctrl.registerAccordion(scope)
            scope.open = () => {
                ctrl.closeAll()
                scope.isOpened = !scope.isOpened
            }
        }
    }
})