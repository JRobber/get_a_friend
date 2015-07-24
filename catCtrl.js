angular.module("app").controller("catCtrl", function($scope, mainSrvc) {

  $scope.receiveCat = function() {
    mainSrvc.getCat().get( {}, function(res){
          console.log(res.results);
        });
    }

  $scope.receiveCat();






})
