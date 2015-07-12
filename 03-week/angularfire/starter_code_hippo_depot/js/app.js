angular.module('myApp', []);

// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('myApp')
    .controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController($scope) {
    // $scope is an object and the glue between our controller and the view.
    // If we put properties on it, they will be accessible to the view!

    $scope.hippos = [
        { name: 'Henry', weight: 3800, price: 5000, sold: false },
        { name: 'Flo', weight: 3100, price: 5200, sold: false },
        { name: 'George', weight: 3600, price: 4400, sold: false },
        { name: 'Alice', weight: 2900, price: 4600, sold: false }
    ];

    $scope.addHippo = function() {
        $scope.hippos.push(
            {
                name: $scope.new.name,
                weight: $scope.new.weight,
                price: $scope.new.price
            }
        );
        $scope.new = {};
    };

    $scope.removeHippo = function(hippo) {
        $scope.hippos.forEach(function(curHippo, idx) {
            if (hippo.name === curHippo.name) {
                $scope.hippos.splice(idx, 1);
                return;
            }
        });
    };

}



    