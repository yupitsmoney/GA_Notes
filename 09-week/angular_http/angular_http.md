# AngularJS - $http
---

## Learning Objectives
Student will be able to:

- Uses Angular's $http service to retrieve data from an API

## Roadmap

1. Build a new AngularJS app
2. The Pokémon RESTful API
3. Use $http to retrieve data from an API
4. Getting Pokemon details from the API
5. Lab Exercises

### 1. Build a new AngularJS app

We're going to create an app that can display and search for Pokemon, yes, Pokemon.  The app will consist entirely of static assets.

__>>__

To get started, we need to:

- Create a project folder named something like _pokemon_ and `cd` into it.
- Create an _index.html_ file with all of the usual HTML5 boilerplate.
- We're going to use Bootstrap, best to load it via its CDN.
- Create a _css_ directory with a _style.css_ file for your custom styling (if any), then include it in your _index.html_.  Be sure your _style.css_ file is included after any css framework you include.
- Include the AngularJS library, also via its CDN.
- Create a _js_ directory with an _app.js_ file for your app's JavaScript, then include it in your _index.html_.  Be sure the _app.js_ file is included after the AngularJS library.
- Display a page title with a `<h1>` or some other tag. 

Here's what our _index.html_ file should more or less look like thus far:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pokemon Fun</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
    <script src="js/app.js"></script>
</head>
<body class="container">
    <h1 class="jumbotron text-center">Pokemon Fun</h1>
</body>
</html>
```

Now lets code our Angular module and a controller for our page in our _app.js_ file.  As a best practice, put your code inside of an IIFE. In today's lesson, we will be using the _controller as_ syntax, so lock down _this_ by assigning to a variable named 'self', or 'vm', or whatever...  Create a property on your controller that we can bind to in our HTML to ensure that Angular is wired up successfully (_vm.test_ in the example code below).  Depending upon what style of min-safe dependency injection you want to use, your _app.js_ should look something like this:

```javascript
(function() {
'use strict';

angular
    .module('app', [])
    .controller('MainController', MainController);

    MainController.$inject = ['$http'];

    function MainController($http) {
        var vm = this;

        // remove after checking for successful boot
        vm.test = 'This is only a test...';
    }

})();
```

Sooner or later, we will want to run a local server to serve up our app.  Make sure that you're in your app's directory and run this nifty little command in Terminal to create a web server for your app on port 3000:

```
? python -m SimpleHTTPServer 3000
```

If you browse to [http://localhost:3000](http://localhost:3000/), you should see your app's _index.html_ page appear.

So far, so good, but now it's time to modify our app to bootstrap Angular and check if all is well by binding to our _test_ property that we created in our controller.

__>>__

__>>__

This is our new and improved _index.html_ powered by Angular:

```html
<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="UTF-8">
    <title>Pokemon Fun</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
    <script src="js/app.js"></script>
</head>
<body class="container" ng-controller="MainController as vm">
    <h1 class="jumbotron text-center">Pokemon Fun</h1>
    <p>Test: {{vm.test}}</p>
</body>
</html>
```
Refresh the browser and be sure to check the dev tool's console for errors.

### 2. The Pokémon RESTful API

Our app is going to utilize the [The Pokémon RESTful API](http://pokeapi.co/).

There are over over 700 Pokemon in this API - check it out!

### 3. Use $http to retrieve all Pokemon names from the API

__>>__

Angular's `$http` service, in its simplest form, requires only a URL and makes AJAX very easy to work with. Of course, it can also be used in a more powerful fashion by passing in an object with several configuration properties set on it.

For our app, we will get away with calling its `get` method and all we have to pass it is a proper URL.

A fundamental purpose of an Angular controller is to initialize data needed for the view. We are going to load all of the Pokemon names along with the URL to access the detail info for each particular Pokemon.  The URL to fetch all Pokemon is provided by the API's documentation. Here is how we can use it:

```javascript
function MainController($http) {
   var vm = this;

   var allPokemonUrl = 'http://pokeapi.co/api/v1/pokedex/1/';
   vm.allPokemon = [];

   $http.get(allPokemonUrl)
       .success(function(data) {
           vm.allPokemon = data.pokemon;
       });
}
``` 
When the asynchronous call is complete, the `.success` handler will be called.

__>>__

Lets display this crazy number of Pokemon as buttons in a Bootstrap column on the left, saving the right column for the details of a clicked Pokemon:

```html
<body class="container" ng-controller="MainController as vm">
    <h1 class="jumbotron text-center">Pokemon Fun</h1>
    <div class="row">
        <div class="col-xs-8">
            <button type="button" class="btn btn-info btn-xs" ng-repeat="p in vm.allPokemon" ng-click="vm.showPokemon(p)">{{p.name}}</button>
        </div>
        <div class="col-xs-3 col-xs-offset-1">
            <!-- Pokemon detail goes here -->
        </div>
    </div>
</body>
```

Also, add a little css so that the buttons don't touch each other:

```css
.btn {
    margin: 0 2px 2px 0;
}
```

### 4. Getting Pokemon details from the API

Note the `ng-click` on our buttons.  Lets write the click handler (`showPokemon`) in our controller to fetch the details for the Pokemon from the API. Let's also `console.log` the returned data to figure out what data we want to use:

```javascript
function MainController($http) {
    var vm = this;

    var allPokemonUrl = 'http://pokeapi.co/api/v1/pokedex/1/';
    vm.allPokemon = [];

    var detailBaseUrl = 'http://pokeapi.co/';
    vm.selectedPokemon = null;

    $http.get(allPokemonUrl)
        .success(function(data) {
            vm.allPokemon = data.pokemon;
        });

    vm.showPokemon = function(pokemon) {
        $http.get(detailBaseUrl + pokemon.resource_uri)
            .success(function(data) {
                vm.selectedPokemon = data;
                console.log(data);
            });
            
    };
    
}
```

Let's discuss the code..

Looking in the console, wow, that's a lot of data! Lets keep it simple and display the Pokemon's _name_, _weight_ and _speed_. We'll display the Pokemon's image in a bit.

```html
<body class="container" ng-controller="MainController as vm">
    <h1 class="jumbotron text-center">Pokemon Fun</h1>
    <div class="row">
        <div class="col-xs-8">
            <button type="button" class="btn btn-info btn-xs" ng-repeat="p in vm.allPokemon" ng-click="vm.showPokemon(p)">{{p.name}}</button>
        </div>
        <div class="col-xs-4">
            <div class="panel" ng-show="vm.selectedPokemon">
                <h2>{{vm.selectedPokemon.name}}</h2>
                <hr>
                <dl class="dl-horizontal">
                    <dt>Weight</dt>
                    <dd>{{vm.selectedPokemon.weight}}</dd>
                    <dt>Speed</dt>
                    <dd>{{vm.selectedPokemon.speed}}</dd>
                </dl>
            </div>
        </div>
    </div>
</body>
```

Congrats, but there's still two important improvements to make to our app: Filtering the massive amount of Pokemon to make it easier to find the one you may be interested in (easy); and displaying an image of the selected Pokemon (not as easy as it should be).

Go for it - and let me know if you need help if StackOverflow isn't doing the trick for you :)

### 5. Lab Exercises

#### Filter the Pokemon

Add an `<input>` above the Pokemon buttons that will allow a user to type in to filter the list of Pokemon.  One quick Google search, and you got this.  Angular makes this easy!

#### Display the Pokemon's Image

Your goal is to add an `<img>` tag below our `<dl>` to display the Pokemon's image.

Hints:

- Looking at the detail Pokemon data in the console, you'll see a `sprites` array with at least one element. There is a `resource_uri` property available on that element (just use the first element if there is more than one). You will need to use that resource_uri to to call the API - using $http.
- Make that $http call inside the existing `.success` function, in essence, you'll be creating a nested `$http.get`.
- When your nested call returns, you will have information that will lead you to the path of the image.  Use that info to add an `imagePath` property to your `vm.selectedPokemon` object and set it to the __full__ path (including the _vm.detailBaseUrl_).
- Use a `ng-src` directive inside your `<img>` tag.
- Set `ng-src` to the property you just created.

## References

[AngularJS Docs for $http](https://docs.angularjs.org/api/ng/service/$http)

[The Pokémon RESTful API](http://pokeapi.co/)


