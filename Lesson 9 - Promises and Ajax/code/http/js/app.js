angular.module('app', []).controller('AppCtrl', function ($scope, $http) {
	$scope.results = [];

	$scope.clickElement = function (element) {
        element.count += 1;
        $http.post('./elements/'+element.id, element);
	};

    
   $scope.loadUsers = function (){
        $http.get('./elements')
        .success(function (data, status, headers, config, statusText) {
            $scope.results = data;
        })
        .error(function (data, status, headers, config, statusText) {

        });
    };
});


