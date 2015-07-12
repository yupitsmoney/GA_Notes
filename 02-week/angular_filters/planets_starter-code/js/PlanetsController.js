angular
  .module('planetApp')
  .controller('PlanetsController', PlanetsController);

  function PlanetsController(){

  this.planetsList = [
    {
      name: 'Mercury',
      diameter: 3022.03297203534082573240,
      distSun: 35983610
    },
    {
      name: 'Venus',
      diameter: 7521,
      distSun: 67232360
    },
    {
      name: 'Earth',
      diameter: 7926,
      distSun: 92957100
    },
    {
      name: 'Mars',
      diameter: 4222,
      distSun: 141635300
    },
    {
      name: 'Jupiter',
      diameter: 88846,
      distSun: 483632000
    },
    {
      name: 'Saturn',
      diameter: 74898,
      distSun: 888188000
    },
    {
      name: 'Uranus',
      diameter: 31763,
      distSun: 1783950000
    },
    {
      name: 'Neptune',
      diameter: 30778,
      distSun: 2798842000
    }
  ];

}