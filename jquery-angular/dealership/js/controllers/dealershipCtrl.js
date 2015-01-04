(function() {
	"use strict";

	console.log("go ctrl go");

	// the 'dealershipApp' here comes from app.js

	// the 'dealershipCtrl' here matches what is in your ng-controller in the HTML

	// $scope here is a magic Angular variable which houses anything inside the current scope and above (it inherits parent scope items).  to access something in HTML, it has to be available on scope.

	// the ["$scope", function($scope) {...  part handles minification.  Angular knows uses this to map things when minifying.  This is optional but sometimes avoids problems in the future (collisions, etc).

	angular.module("dealershipApp").controller("dealershipCtrl", ["$scope",
		function($scope) {


			// in the HTML, we have ng-submit="onFormSubmit()".  Notice how here, it is
			// $scope.onFormSubmit even though in the HTML, its just onFormSubmit().  The
			// $scope part is assumed. when using ng-* tags.
			$scope.onFormSubmit = function(e) {
				e.preventDefault(); // notice how we passed $event in to this event handler.  normally this is passed implicitely.  in angular you have to use the $event magic word.

				// from here on, we're regular javascript.  parse the form however you like.  even in jquery.

				// angular comes with jqLite which is a simplified version of jQuery.  What you'll miss are things like $("#selector").  $() works only with tag names, like $("div"), which makes sense because in Angular (excluding IE8) you can create your own tags.  $("dealership") is valid Angular (although not demonstrated here).

				// lets grab each value and just alert it.

				var price = prompt("A " + $scope.manufacturer + " " + $scope.model + " with " + $scope.miles + " miles.  How much?");

				// prompt() is a native JS thing..  its not used much.  it returns the value of what you type in the box.

				// notice how ng-model items became $scope.{whatever} items.  ng-model="manufacturer" becomes $scope.manufacturer.

				// another bit of angular magic.  by just setting a scope value, even if it never existed, it shows up in your HTML.  no $("#item").html(value) necessary.

				$scope.price = price; // this will show up anywhere you see {{price}} WITHIN THIS SCOPE (the controller).  above the scope, you won't.

				return false;
			};


			$scope.isManufacturer = function(manufacturer) {
				return manufacturer == $scope.manufacturer;
			};
		}
	]);
}());