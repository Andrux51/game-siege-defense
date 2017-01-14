angular.module('siege-defense', ['ngRoute']);

angular.module('siege-defense').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {controller: 'ChatLobbyController', templateUrl: '/js/chat-lobby/chat-lobby.tpl.html'})
        .when('/game', {controller: 'GameController', controllerAs: 'vm', templateUrl: '/js/game/game.tpl.html'});
    
}]);

angular.module('siege-defense').run(['$rootScope', function($rootScope) {
    $rootScope.productName = 'SIEGE Defense';
}]);