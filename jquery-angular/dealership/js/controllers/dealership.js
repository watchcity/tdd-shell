$(document).ready(function() {
	var model = "";

	$("#dealership-form").on("submit", function(e) {
		e.preventDefault();

		// should look similar.  plain jquery.  instead of $scope.model, we're using $("#item").val();
		var price = prompt("A " + $("#manufacturer").val() + " " + model + " with " + $("#miles").val());

		// the angular way is not possible here.  you'll need to target the div and specify its html().
		$("#price").html(price);

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

});