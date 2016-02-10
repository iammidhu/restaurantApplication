myApp.controller('infoController', ['$scope', 'sharedData', 'getMenuList', function($scope, sharedData, getMenuList) {
    //get menu json via http passing the id.
    //two tabs: info tab and the menu tab.
    //info tab displays all the info about the restaurant.
    //the menu tab lists the menu items with a checkbox.
    //when checked, the checkout box on the right is dynamically updated.
    //when checkout is clicked, user is redirected to the checkout page.
    var next = sharedData;
    var data = next.get();

    $scope.data=data;
    $scope.page = "menu";
    $scope.review = [];
    var jsonRequest = getMenuList(data.id);
    jsonRequest.then(function(response) {
        $scope.menuList = response;

    });
    $scope.addItem = function(data, count) {
        $scope.review.push({
            item: data.name,
            count: count,
            pricePerItem: data.price,
            total: (count*data.price)
        });
    };

    var checkoutClick = function(data) {
        if(data.length > 0) {
            next.set(data);
            $location.path('/checkout');
            return true;
        } else {
            return false;
        }
    };
}]);
