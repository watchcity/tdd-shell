

  "use strict";
  
  var HegelApp = angular.module('HegelApp', []);    
    

HegelApp.controller('AuthController', ["$scope","isAuthFormComplete",
  function($scope,isAuthFormComplete){
    
    //takes the form inputs from signup partial
    $scope.isAuthFormComplete = function (fields) {
      return isAuthFormComplete.isComplete(fields);
    };

  }
]);


