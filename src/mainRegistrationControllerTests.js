

  "use strict";
  
  var RegistrationApp = angular.module('RegistrationApp', []);    
    

  //create simple controller
  RegistrationApp.controller('mainRegistrationController',["$scope", "$window", 
    function($scope,$window){
      $scope.hello="Hello Optum";
      
      $scope.regErrorMessages = $window.regErrorMessages;

      //check errors and initial
      $scope.dobInvalidFormat = "<%=dobInvalidFormat%>";  
      $scope.dobInvalidDate = "<%=dobInvalidDate%>";
      $scope.globalErrorMsg  = "<%=globalMsgPersonalId%>";
      $scope.errorCode= "<%=errorCode%>";
      $scope.siteId = "<%=siteId%>";

      $scope.siteIdIsAARP = false;
      $scope.WTDataObjULAYERpersonal_id = "";


      // get the site id from JSP and check to see if its aarpm
      $scope.checkSiteId = function checkSiteId(siteId) {
        var siteIdIsAARP = false;
        if (siteId == 'aarpm') {
          siteIdIsAARP = true;
        }
        return siteIdIsAARP;
      }
    

      // get the site id from JSP and check to see if its aarpm
      $scope.CallWebTrends = function (siteIdIsAARP) {
        if (siteIdIsAARP) {
          $scope.webtrendDataObj= $scope.WTDataObjULAYERpersonal_id;
          if (typeof $scope.webTrendsSmartViewTags === "function") { 
            //failing this on purpose -- not sure where this thing lives yet
            $scope.webTrendsSmartViewTags();
            return true;
          } else {
            return false;
          }
        }
      };

      $scope.errorMessageNull = function (errorMessage) {
        if (errorMessage) {
          $scope.memberidErrorMsg = "<%=errorMessage%>"; //new to bootstrap from jsp
          return "theErrorMessage";
        } else {
          return null;
        }
      };

      $scope.returnColorsObject = function (siteId, errorCode) {
        var AARPMemberIdErrorColors = {
          memberid1: "#FF0000",
          memberid2: "#FF0000",
          month: "#FF0000",
          day: "#FF0000",
          year: "#FF0000"
        };
        if (siteId == 'aarpm' && errorCode == 'errorMemberIDNotFound') {
          return AARPMemberIdErrorColors;
        } else {
          return {};
        }
      };

    //if the error code errorPCPPlansNotAllowed is returned, pop the modelBox
    $scope.errorPCPPlansNotAllowed = function (errorCode) {
      
      if (errorCode = "errorPCPPlansNotAllowed") {
        
        var ngModelBox = {
          loadPopup: function (pcp_error_message, smallpopup) {
             //modelBox.loadPopup('#pcp_error_message','smallpopup');
              //$("#pcp_error_message").css({"left":"400px"});
            return true;
          },
        };
        
        var modelReturn = ngModelBox.loadPopup('#pcp_error_message','smallpopup');
        return modelReturn;
      } else {
        return false;
      }
    };

    $scope.InfoBox = function () {
        var ngInfoBox = {
          init: function () {
            //infoBox.init();
            return true;
          }
        }
        var infoBoxReturn = ngInfoBox.init();
        return infoBoxReturn;
      };

    $scope.validateRegistrationForm = function () {
      
      var ngValidateRegistrationForm = {
        groups: {
          username: "memberIdNumber1 memberIdNumber2"
          },
          errorPlacement: function(error, element) {
              if (element.attr("name") == "memberIdNumber1" || element.attr("name") == "memberIdNumber2" ) {
                  error.insertAfter("#memberid2");
              } else {
                  error.insertAfter(element);
              }
          },
          validate: function (groups, errorPlacement) {
            //$("#registrationForm").validate(options);
            return true;
          }
        }
       var validateRegistrationReturn = ngValidateRegistrationForm.validate();
       return validateRegistrationReturn;
      };      
    
      $scope.submitForm = function (FormData, bValue){
    
        $scope.memberidErrorMsg = "";
        $scope.memberidcheckErrorMsg = "";
        $scope.memberid1 = "";
        $scope.memberid2 = "";
        var resp = {
          status: false
        }
        var invalidDate = "<%=dobInvalidDate%>",
         invalidFormat = "<%=dobInvalidFormat%>",
         globalMsgPersonalId = "<%=globalMsgPersonalId %>"



        var FormData = FormData || {};

        if (FormData.hasOwnProperty("memberid2")) {
          resp.memberid2 = FormData.memberid2;
          resp.status = true;
        }

        //need to check what this is
        //dateValidation(invalidForamt,invalidDate );

        //memberid = member1 and member2 or just member one if member two is null
        if (FormData.memberid1 == "" ) {
          $scope.validateRegistrationForm();
          $scope.memberidErrorMsg = "<%=globalMsgPersonalId %>";
          $scope.memberIdLabel.color = "#ff0000";

            //return false;
        }

        return resp;
      };


//below is end of test controller
  }
]);

/*

    //      var memberIdOne = document.getElementById('memberid1').value;
    //      var memberIdTwo = document.getElementById('memberid2').value;
    //      var memberid = memberIdOne +'-'+memberIdTwo;
    //      if(memberIdTwo =="" ){
    //          memberid = memberIdOne;
    //      }
    //      //var memberid= document.getElementById("memberid").value
    //      var day = document.getElementById("day").value
    //      var month = document.getElementById("month").value
    //      var year = document.getElementById("year").value
    //      var invalidForamt = "<%=dobInvalidFormat%>";    
    // var invalidDate = "<%=dobInvalidDate%>";
    //   dateValidation(invalidForamt,invalidDate );
      
    // if (memberIdOne == ""){       
    //  $("#registrationForm").submit().validate();
    //        $("div#memberidErrorMsg").html("<%=globalMsgPersonalId %>");
    //       $(".memberIdLabel").css({"color":"#ff0000"});
    //       return false;
    // }


      var infoBox = {
        init = function () {
          return true;
        }

      var infoBoxInitReturn = infoBox.init();

      

if(errorCode == "errorPCPPlansNotAllowed"){
    //     modelBox.loadPopup('#pcp_error_message','smallpopup');
    //   $("#pcp_error_message").css({"left":"400px"});

    //   } 
    //     infoBox.init();
    //     $("#registrationForm").validate({
    //         groups: {
    //             username: "memberIdNumber1 memberIdNumber2"
    //         },
    //         errorPlacement: function(error, element) {
    //             if (element.attr("name") == "memberIdNumber1" || element.attr("name") == "memberIdNumber2" ) {
    //                 error.insertAfter("#memberid2");
    //             } else {
    //                 error.insertAfter(element);
    //             }
    //         }
    //        }); 
    // });


*/



    // if(errorMessage != null) {
    //    %> $("div#memberidErrorMsg").html("<%=errorMessage%>");<%
    // }
    // %>


    // if (siteId == "aarpm" && errorCode == "errorMemberIDNotFound"){
    //     $("#memberid1").css({"color":"#FF0000"});
    //     $("#memberid2").css({"color":"#FF0000"});
    // $("#month").css({"color":"#FF0000"});
    // $("#day").css({"color":"#FF0000"});
    //     $("#year").css({"color":"#FF0000"});
    //     }
    // if(errorCode == "errorPCPPlansNotAllowed"){
    //     modelBox.loadPopup('#pcp_error_message','smallpopup');
    //   $("#pcp_error_message").css({"left":"400px"});

    //   } 
    //     infoBox.init();
    //     $("#registrationForm").validate({
    //         groups: {
    //             username: "memberIdNumber1 memberIdNumber2"
    //         },
    //         errorPlacement: function(error, element) {
    //             if (element.attr("name") == "memberIdNumber1" || element.attr("name") == "memberIdNumber2" ) {
    //                 error.insertAfter("#memberid2");
    //             } else {
    //                 error.insertAfter(element);
    //             }
    //         }
    //     }); 
    // });




//if it's aarpm then call some webTrends business


/*
 <%   if (siteId == "aarpm") { %>
    
    webtrendDataObj= WTDataObjULAYERpersonal_id;
    webTrendsSmartViewTags();
    
    <%}
 

    if(errorMessage != null) {
       %> $("div#memberidErrorMsg").html("<%=errorMessage%>");<%
    }
    %>


    if (siteId == "aarpm" && errorCode == "errorMemberIDNotFound"){
        $("#memberid1").css({"color":"#FF0000"});
        $("#memberid2").css({"color":"#FF0000"});
    $("#month").css({"color":"#FF0000"});
    $("#day").css({"color":"#FF0000"});
        $("#year").css({"color":"#FF0000"});
        }
    if(errorCode == "errorPCPPlansNotAllowed"){
        modelBox.loadPopup('#pcp_error_message','smallpopup');
      $("#pcp_error_message").css({"left":"400px"});

      } 
        infoBox.init();
        $("#registrationForm").validate({
            groups: {
                username: "memberIdNumber1 memberIdNumber2"
            },
            errorPlacement: function(error, element) {
                if (element.attr("name") == "memberIdNumber1" || element.attr("name") == "memberIdNumber2" ) {
                    error.insertAfter("#memberid2");
                } else {
                    error.insertAfter(element);
                }
            }
        }); 
    });
*/

