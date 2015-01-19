 

 "use strict";
  
  
 HegelApp.factory("isAuthFormComplete", function () {

    return {
      isComplete: function (fields) {
        var Complete = true;
        for (var f = 0; f < fields.length; f++) {
          if (fields[f] == "") {
           Complete = false;
        }
      } 
      return Complete; 
    }
  };
});

  