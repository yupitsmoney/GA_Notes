angular
	.module('presidentsApp')
	.controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$firebaseObject', '$firebaseArray'];

function PresidentsController($firebaseObject, $firebaseArray){
	// capture variable of this so that we can use it in our functions below
  var {{some code here}}

  // calls the function getPresidents which returns an array
  presidentsList = {{assign this to one of our functions below}};
  
  //  bind addPresident to the controller
  addPresident = {{assign this to one of our functions below}};

  // calls the function getGovernment which returns an object
  government = {{assign this to one of our functions below}};

  // WHICH of the functions above need to be called on declaration and which ones do not? How do we write that out?

  // should be called on initialization, returns a government object
  function getGovernment() {
  	// firebase url
  	var ref = new Firebase("https://{{link name here}}.firebaseio.com/government");
  	// creates an object based off the Firebase object
  	var government = "some code goes here";
  	return government;
  }

  // should be called on initialization, getting Presidents
  function getPresidents() {
    // url leading to government.presidents

    var ref = new Firebase("https://{{link name here}}.firebaseio.com/presidents");
    // creates an array of presidents based off firebase
    var presidents = "some code goes here";
    return presidents;
  }
  // called on ng-submit, submits president to the database

  function addPresident(newPresidentObject) {
    // adds a new object to the presidentsList array
    this.presidentsList.$add(newPresidentObject);

    // set the value of the model back to null
    this.newPresident = null;
  }

  // seeds some data
  self.government.name = "The United States of Murrica";
	self.government.foundingYear = 1776;
	self.government.population = 317000000;
	// saves it to our database (go ahead and change these itmes and see how )
	self.government.$save();
}
