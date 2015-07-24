angular.module("app").controller("mainCtrl", function($scope, mainSrvc) {

  $scope.receiveData = function() {
    mainSrvc.getPerson().then(function(response) {
      $scope.newData = response;
      $scope.yourFriend = "Your New Best Friend:";
      // console.log($scope.newData);
      $(".imgBorder").css("display", "block");
      $(".removeGetButton").css("display", "none");
    })
  }

  $scope.intro = "Are you lonely?";
  $scope.well = "well you better get some friends..."

  $scope.introDisappear = function() {
    $scope.intro = "";
    $scope.well = "";
  }


})
