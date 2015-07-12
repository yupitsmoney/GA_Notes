angular
        .module("githubApp", [])
        .factory("Team", TeamFactory);

    TeamFactory.$inject = ["$http"];

    function TeamFactory($http){

        var Team = function(){

            this.getMembers = getMembers;

    		function getMembers(){

                var url = "https://api.github.com/orgs/ga-students/members?page=1&per_page=100&access_token="  
                var apiToken = "da32c9af15f4e6a517ae0b8e01796770baa884f7";
                var endpoint = url + apiToken;

                return $http({method: 'GET', url: endpoint});
            }
            
        }
        return Team;

    }

