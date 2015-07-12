angular
  .module('presidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$firebaseObject', '$firebaseArray'];

function PresidentsController($firebaseObject, $firebaseArray){
  var self = this;

  self.presidentsList = getPresidents();
  self.addPresident = addPresident;
  self.government = getGovernment();

  function getGovernment(){
    var ref = new Firebase('https://presidential.firebaseio.com/government');
    return $firebaseObject(ref);
  }

  function getPresidents(){
    var ref = new Firebase('https://presidential.firebaseio.com/presidents');
    return  $firebaseArray(ref);
  }

  function addPresident(newPresidentString){
    console.log(newPresidentString);
    self.presidentsList.$add(newPresidentString);
    self.newPresident = null;
  }
}
