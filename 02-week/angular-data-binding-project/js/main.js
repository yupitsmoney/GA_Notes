//on line 2 let's create our new angular app and give it a name
var sampleApp = angular.module("sampleApp", []);

//on line 8 declare a new controller in our app.
//we will use this controller to hold some data that we will bind to our view.
//inside of that controller we will declare a property on the scope called "test" which will help us test to make sure that the controller is loading on the DOM. Set the value of test to an string and see if that string appears in HTML.
// created a an array inside of the scope called 'contacts' and fill it with some information
// finally declare a function named 'deleteContact' that will remove a contact from our array
sampleApp.controller("MyController", ['$scope', function($scope){
	$scope.pbandj = "Peanut butter jelly time!";

	$scope.contacts = [
		{name: "Kanye West", street: "500 Kanye Way", city: "Chicago", state: "IL", zip: 64093},
		{name: "Barry Obama", street: "1600 Penn", city: "Washington DC", state: "DC", zip: 20001},
		{name: "Miley Cyrus", street: "1300 Twerk Lane", city: "Los Angeles", state: "CA", zip: 90013}
	]

	$scope.terminateContact = function($index) {
		$scope.contacts.splice($index, 1);
	}
}])