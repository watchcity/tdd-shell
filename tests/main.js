

// test for initial errors and css

//check the comps for this
describe('Unit: MainRegistrationController', function() {
  // Load the module with MainController
  beforeEach(module('RegistrationApp'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('mainRegistrationController', {
      $scope: scope
    });
  }));


  describe('test checkSiteId function manually passing value that eventually needs to be chained from JSP', function() {
      it('passing bob should be false', function() {
        expect(scope.checkSiteId('bob')).toBe(false);
      });
    });

  describe('test the siteId', function() {
    it('passing aarpm should be false', function() {
      expect(scope.checkSiteId('aarpm')).toBe(true);
    });
  });

  describe('test calling some web Analytics if the site is aarpm', function() {
    it('it should call web Analytics', function() {
      expect(scope.checkSiteId()).toBe(false);
    });
  });  

  describe('see if we should call WebTrends', function() {
    it('it should call web Trends', function() {
      expect(scope.maybeCallWebTrends()).toBe(true);
    });
  });  



});








