myApp.filter('filterProvider', function() {
    return function(input, filterData) {
        var output = [];
        angular.forEach(input, function(item) {
            angular.forEach(filterData, function(filter) {
                if(item.Cuisines.indexOf(filter) > -1) {
                    output.push(item);
                }
            });
        });
        return output;
    }
});
