myApp.controller('infoController', ['$scope', '$location', 'sharedData', 'getMenuList', function($scope, $location, sharedData, getMenuList) {
    var next = sharedData;
    var data = next.get();
    $scope.data = data;
    $scope.page = "menu";
    $scope.review = [];
    $scope.subTotalAmount = 0;
    $scope.isDisabled = true;
    var jsonRequest = getMenuList(data.id);
    jsonRequest.then(function(response) {
        $scope.menuList = response;

    });
    $scope.addItem = function(data, count) {
        var isDuplicate = false;
        $scope.isDisabled = false;
        for(var i = 0; i < $scope.review.length; i++) {
            if($scope.review[i].item == data.name) {
                $scope.review[i].count += count;
                $scope.review[i].total = $scope.review[i].count * data.price;
                isDuplicate = true;
            }
            $scope.subTotalAmount += $scope.review[i].total;
        }
        if(!isDuplicate) {
            $scope.review.push({
                item: data.name,
                count: count,
                pricePerItem: data.price,
                total: (count*data.price)
            });
        }
        if($scope.review.length == 1) {
            $scope.subTotalAmount = $scope.review[0].total;
        }
    };
    $scope.removeItem = function(index) {
        $scope.subTotalAmount -= $scope.review[index].total;
        $scope.review.splice(index,1);
        if($scope.review.length == 0) {
            $scope.isDisabled = true;
        }
    };

    $scope.proceedToCheckout = function() {
        next.set({
            data : $scope.data,
            review : $scope.review,
            total : $scope.subTotalAmount
        });
        $location.path('/checkout');
    };
    $scope.checkoutClick = function(data) {
        if(data.length > 0) {
            next.set(data);
            $location.path('/checkout');
            return true;
        } else {
            return false;
        }
    };
}]);
