angular.module('siege-defense').controller('GameController', ['$interval', function($interval) {
    var vm = this;
    
    vm.canvasSize = { x: 1280, y: 720 };
    
    vm.ctx = document.getElementById('gameCanvas').getContext('2d');
    
    var bgColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF6600'];
    
    vm.player = {
        position: { x: 0, y: 0 },
        health: { max: 100, current: 100 },
        draw: function() {
            vm.ctx.fillStyle = '#FF6600';
            
            vm.ctx.fillRect(this.position.x, this.position.y, 64, 64);
        },
        move: function(x, y) {
            this.position.x += x;
            this.position.y += y;
        }
    };
    
    vm.initialize = function() {
        vm.ctx.clearRect(0, 0, vm.canvasSize.x, vm.canvasSize.y);
        
        // placeholder junk
        vm.randIndex = Math.floor(Math.random() * bgColors.length-1);
        
        vm.ctx.fillStyle = bgColors[vm.randIndex];
        
        vm.ctx.fillRect(10, 10, 100, 100);
        
        // actual stuff happening
        vm.reset();
        
        vm.draw();
    };
    
    vm.reset = function() {
       vm.player.position = { x: 0, y: 0 };
       vm.player.health = { max: 100, current: 100 };
    };
    
    vm.draw = function() {
        vm.ctx.clearRect(0, 0, vm.canvasSize.x, vm.canvasSize.y);
        
        vm.player.draw();

        $interval(vm.draw, 333);
    };
}]);