app.factory('searchQuery', function() {
    var search = function(data) {
        var config = {
            url: 'json/list.json',
            method: 'GET'
        };

        var list,
            searchResult = [];

        $http(config).then(function(response) {
            list = response.data;
        }, function() {
            console.log('Error occured when getting json file');
        });

        list = JSON.parse(list);
        for(i=0 ; i < list.length ; i++) {
            if(list[i].indexOf(data) > -1) {
                searchResult.push(list[i]);
            }
        }

        return searchResult;

    };

    return search;
});
