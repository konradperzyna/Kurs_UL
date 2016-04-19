angular.module('myapp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('users', {
        url: "/users",
        controller: 'UsersCtrl',
        templateUrl: 'partials/users.html'   
    });
});
