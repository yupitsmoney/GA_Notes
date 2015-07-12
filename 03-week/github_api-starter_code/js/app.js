TeamFactory.$inject = ["$http"];

function TeamFactory($http){

    var Team = function(){

        this.getMembers = getMembers;

        //note: this is for illustration only. 
        //We would never store our API token in a production app like this. 
        //Also, don't push this to Github b/c then anyone can see your API token.
        function getMembers(){

            var url = "https://api.github.com/teams/1124902/members?access_token="  
            var apiToken = "<YOUR_API_TOKEN_HERE>";
            var endpoint = url + apiToken;

            return $http({method: 'GET', url: endpoint});
        }

    }
    return Team;
}