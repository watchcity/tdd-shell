
 "use strict";

// test for initial errors and css

//check the comps for this
describe('Unit: AuthController', function() {
  // Load the module with MainController
  beforeEach(module('HegelApp'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('AuthController', {
      $scope: scope
    });
  }));


  describe('it should check to make sure the email, username and password are completed', function() {
      it('passing none should return false', function () {

          var username = '';
          var password = '';
          var email = '';
          var fields = [username, username, password];
        expect(scope.isAuthFormComplete(fields)).toBe(false);
      });
    });

   describe('it should check to make sure the email, username and password are completed', function() {
      it('passing only email should return false', function () {
            var email = 'bob@bob.com';
          var username = '';
          var password = '';
          var fields = [username, username, password];
        expect(scope.isAuthFormComplete(fields)).toBe(false);
      });
    });

   describe('it should check to make sure the email, username and password are completed', function() {
      it('passing only email should return false', function () {
          var email = 'fish@ocean.com';
          var username = 'swift';
          var password = '123456789';
          var fields = [username, username, password];
        expect(scope.isAuthFormComplete(fields)).toBe(true);
      });
    });

  // describe('is JSP variable errorMessage populated?'), function () {
  //   it('should return false when passed nothing', function () {
  //     expect(scope.errorMessage.length > 0).toBe(true);
  //   });
  // });

});







