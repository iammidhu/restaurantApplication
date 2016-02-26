myApp.controller('successController', ['$scope', '$location', 'finalData', function($scope, $location, finalData) {

      var next = finalData;
      var data = next.get();
      console.log(data);
    }]);
