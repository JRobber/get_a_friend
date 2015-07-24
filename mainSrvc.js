angular.module("app").service("mainSrvc", function($http, $q, $resource) {

  this.getPerson = function() {
    var deffered = $q.defer();
    $http({
      method: "GET",
      url: "https://randomuser.me/api/"
    }).then(function(response) {
      var filterData = response.data.results[0].user;
      var image = filterData.picture.large;
      // var personFrom = ;
      String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
      };
      var newFName = filterData.name.first.capitalizeFirstLetter();
      var newLName = filterData.name.last.capitalizeFirstLetter();
      var newFullName = newFName + " " + newLName;
      var newInfo = ({
        FullName: newFullName,
        newImage: image
      })
      return deffered.resolve(newInfo);
    })
    return deffered.promise;
  }

  this.getCat = function() {
    return $resource('http://thecatapi.com/api/images/:action',
      {action: 'get', callback: 'JSON_CALLBACK',format:'src',results_per_page:'1'},
      {get: {method: 'JSONP'}});
    };




})
