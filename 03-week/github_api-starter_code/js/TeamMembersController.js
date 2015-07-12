angular
  .module("githubApp")
  .controller("TeamMembersController", TeamMembersController);
  
  // We inject our previously created Team factory into our Controller
  
  TeamMembersController.$inject = ["Team"];

  function TeamMembersController(Team){
    var self = this;

    self.team = new Team();
    self.members = [];
    self.responseStatus;
    self.responseHeaders;

    self.team.getMembers().then(function(response){
      self.members = response.data;
      self.responseStatus = response.status;
      self.responseHeaders = response.headers();
    });
  }

  
