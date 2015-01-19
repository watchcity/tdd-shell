

// // test for initial errors and css

// //check the comps for this
// describe('Unit: MainRegistrationController', function() {
//   // Load the module with MainController
//   beforeEach(module('RegistrationApp'));

//   var ctrl, scope;
//   // inject the $controller and $rootScope services
//   // in the beforeEach block
//   beforeEach(inject(function($controller, $rootScope) {
//     // Create a new scope that's a child of the $rootScope
//     scope = $rootScope.$new();
//     // Create the controller
//     ctrl = $controller('mainRegistrationController', {
//       $scope: scope
//     });
//   }));


//   // describe('test checkSiteId function manually passing value that eventually needs to be chained from JSP', function() {
//   //     it('passing bob should be false', function () {
//   //       expect(scope.checkSiteId('bob')).toBe(false);
//   //     });
//   //   });

//   // describe('test the siteId', function () {
//   //   it('passing aarpm should be false', function () {
//   //     expect(scope.checkSiteId('aarpm')).toBe(true);
//   //   });
//   // });

//   // describe('test calling web Analytics if the site is aarpm', function () {
//   //   it('it should call web Analytics', function () {
//   //     expect(scope.checkSiteId()).toBe(false);
//   //   });
//   // });  

//   // describe('see if we should call WebTrends', function () {
//   //   it('it should call web Trends and return true', function () {
//   //     expect(scope.WebTrends()).toBe(true);
//   //   });
//   // });  


//   // describe('display error message if JSP var errorMessage is not null', function () {
//   //   it('it should false when we pass it nothing', function () {
//   //     expect(scope.errorMessageNull()).toBe(null);
//   //   });
//   // });  

//   //   describe('display error message if JSP var errorMessage is not null', function () {
//   //   it('it should set the Error message if the errorMessage is not null', function () {
//   //     expect(scope.errorMessageNull('notnullvalue')).toBe('theErrorMessage');
//   //   });
//   // });  

//   // describe('the error codes if siteId == "aarpm" && errorCode == "errorMemberIDNotFound"', function () {
//   //   it('should return an object with the following criteria: #memberid1 #FF0000 memberid2 #FF0000 month #FF0000 day #FF0000 year #FF0000 when the siteId = aarpm and the errorCode = errorMemberIDNotFound', function () {
//   //     var colorsObject = scope.returnColorsObject('aarpm', 'errorMemberIDNotFound');
//   //     expect(colorsObject.memberid1).toBe("#FF0000");
//   //   });
//   // });

//   //   describe('if the error code errorPCPPlansNotAllowed is returned, pop the modelBox', function () {
//   //   it('should return true when errorCode errorPCPPlansNotAllowed is passed to errorPCPPlansNotAllowed', function () {
//   //     expect(scope.errorPCPPlansNotAllowed('errorPCPPlansNotAllowed')).toBe(true);
//   //   });
//   // });

//   //    describe('test to see if InfoBox initialis', function () {
//   //   it('should return true when InfoBox.init is called', function () {
//   //     expect(scope.InfoBox()).toBe(true);
//   //   });
//   // });   


//   //     //insert test for validate Registration form


//   //     //test for Submit Form
//   //    describe('test Submit form', function () {

//   //       it('should read the sample FormData and return the memberid2', function () {
//   //         var FormData = {
//   //         memberid1: '123456789',
//   //         memberid2: '1011121314',
//   //         day: '01',
//   //         month: '01',
//   //         year: '2015'
//   //       }
//   //       var resp = scope.submitForm(FormData);
//   //        expect(FormData.memberid2).toBe(resp.memberid2);
//   //     });

// 				it('should return false status when no data is passed', function () {
//           var FormData = {
//           memberid1: '123456789',
//           memberid2: '1011121314',
//           day: '01',
//           month: '01',
//           year: '2015'
//         };
//         var resp = scope.submitForm();
//          expect(resp.status).toBe(false);
//       });




//   // describe('is JSP variable errorMessage populated?'), function () {
//   //   it('should return false when passed nothing', function () {
//   //     expect(scope.errorMessage.length > 0).toBe(true);
//   //   });
//   // });

// });







