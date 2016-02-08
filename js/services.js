myApp.factory('searchQuery',['$http', function($http) {
    var search = function(data) {
        var config = {
            url: 'list/list.json',
            method: 'GET'
        };

        var list,
            searchResult = [];

        $http(config).then(function(response) {
            list = response.data;
            for(i=0 ; i < list.length ; i++) {
                if(list[i].indexOf(data) > -1) {
                    searchResult.push(list[i]);
                }
            }
        }, function() {
            console.log('Error occured when getting json file');
        });




        return searchResult;

    };

    return search;
}]);
