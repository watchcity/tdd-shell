

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
        if (siteId == 'aarpm') {
          $scope.siteIdIsAARP = true;
        } else {
          $scope.siteIdIsAARP = false;
        }
        return $scope.siteIdIsAARP;
      }
    

      // get the site id from JSP and check to see if its aarpm
      $scope.maybeCallWebTrends = function maybeCallWebTrends(siteIdIsAARP) {
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
      }
  }
]);


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

