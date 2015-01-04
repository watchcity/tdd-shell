(function() {
	"use strict";

	// we have a very similar structure, but the contents of the controller will be different.

	angular.module("dealershipApp").controller("dealershipCtrl", ["$scope",
		function($scope) {
			var model = "";

			$("#dealership-form").on("submit", function(e) {
				e.preventDefault();

				// should look similar.  plain jquery.  instead of $scope.model, we're using $("#item").val();
				var price = prompt("A " + $("#manufacturer").val() + " " + model + " with " + $("#miles").val());

				// but angular binding still works, because we're in a controller.
				// BUT THERES A CATCH.  Because you invoked this DOM change OUTSIDE OF ANGULAR by using $("#item").on(), you must wrap it in an $apply call.  $apply tells Angular "redo the page because I changed it behind your back."  Remove this and watch what happens.
				$scope.$apply(function() {
					$scope.price = price;
				});

				return false;
			});


			$("#manufacturer").on("change", function(e) {
				var manufacturer = $(this).val();


				// this replaces the ng-show of the manufacturer fieldsets
				$(".manufacturer").hide();
				$("#" + manufacturer).show();



				//**********************************************************************
				//	This isn't necessary in Angular.  $scope handles it.
				//**********************************************************************
				model = $("#" + manufacturer).find("select").val();
			});

		}
	]);
}());