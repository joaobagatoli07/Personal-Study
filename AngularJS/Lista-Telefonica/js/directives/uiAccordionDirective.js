angular.module("listaTelefonica").directive("uiAccordions", function () {
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

angular.module("listaTelefonica").directive("uiAccordion", function () {
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