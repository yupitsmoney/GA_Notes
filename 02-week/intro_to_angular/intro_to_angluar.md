# Intro to AngularJS
- - -

## Learning Objectives

Students will be able to:

- Add the AngularJS framework to a web app.
- Use AngularJS components to implement the client-side MVC design pattern.
- Create AngularJS controllers using both the *$scope* and *controller as* syntaxes.
- Use two-way data binding to create data driven UI's that update automatically.
- Use client-side routing to implement the SPA design pattern.

## Roadmap

1. What is AngularJS and Why Should You Learn it?
2. The Components of AngularJS
3. The AngularJS Mindset
4. SPA Architecture
5. Learn the Concepts of AngularJS as we Code Along
6. Why Use Services?
7. Lab - Create a To Do List App

## 1. What is AngularJS and Why Should You Learn it?

- An open source JS framework maintained by Google - maybe you've heard of them?
- Created nearly 6 years ago - its longevity is a testament to its capability and usefulness.
- AngularJS is by far the most widely adapted MVC JS framework in use today and is a valuable job skill to put on your resume.

**Take 5 minutes to pair up and research what MVC means and discuss in class** 

- AngularJS provides the following benefits when used to develop web apps:
	- Enables us to organize and structure SPA's using the popular MVC design pattern.
   - Makes us more productive when developing web apps because it provides features, such as data binding, that requires less code from the developer.
   - Was designed with testing in mind.

## 2. The Components of AngularJS

**WB and _briefly_ discuss the components of the AngularJS app**

<img src="angular_components.jpg?raw=true" width="400" height="300">

### Modules

Modules are containers for related code.

The concept of *modules* is prevalent throughout programming

### Config & Routes

Each AngularJS module has a *config* method that allows us to provide code that runs when a module is loaded.

The *config* method is used most commonly to setup routing.

### Controller

Controllers in AngularJS serve two primary purposes:

- Initialize the data used for the view they are attached to.
- Contain the primary code to respond to user events, such as when a user clicks on a button.

A controller is a JS constructor function that is instantiated by the _ng-controller_ directive.

### Services (including Factories)

- Services provide a way to organize related code and data that can be shared by controllers and even other services.
- Unlike controllers, which are instantiated and destroyed as the views they are attached come into and out of view, services are created once (singletons) and persist for the life of the application.
- Services should be used to hold the bulk of your application's logic and data, thus keeping controllers focused on what they are responsible for.

### Directives

- Directives are "markers" in HTML - most commonly as attributes and custom element tags.
- When processed by AngularJS's HTML compiler, they attach behavior to DOM elements or even transform them and/or their children.

   **WB: Example of a _ng-show_ attr directive and a custom _widget_ element with a couple of nested _widget-part_ elements.**

### Filters

- Filters are used to transform data.
- They are very flexible and can be used for formatting text in a view, such as making it all uppercase, or used to filter and sort an array of items.

## 3. The AngularJS Mindset
- Programming a web app with AngularJS requires a different mindset.
- To use AngularJS effectively, it helps to think of your application being driven by data - you change data, the app responds.
- We naturally think more procedurally when coding, we attach an event handler and write code to respond...
- Let's look at an example of the different approaches.  Say we want an edit form to show when a button is clicked:
   - Procedurally, we would attach an event handler to the button.  The handler code would select the element and set it's display property to something besides "none".
   - Using AngularJS, we declare a click handler on the Button element.  The handler could set a variable named editMode equal to true, and the view would respond automatically.
- Remember, drive your application using data - your data model is the single source of truth!


## 4. SPA Architecture

Single Page Applications are all the rage today. A misconception is that a SPA has only a single view - this is far from the truth!  The single page aspect of a SPA refers to a single page coming from the server, such as our _index.html_ page.  Once loaded, the SPA changes views by using _client-side_ routing, which loads partial HTML snippets called templates.

<img src="spa_architecture.png" width="500">

Client-side routing requires something known as a _router_.  A router in AngularJS, at a minimum, is used to define our routes, specify the template for that route, and specify which controller to attach to that view.

There's a very popular third-party router called _ui-router_ that is more capable than Angular's.  However, Angular is getting ready to release a new router with version 1.4.

You will get to see routers in action in a later lesson.

## 5. Learn the Concepts of AngularJS as we Code Along

### We're going accomplish our Learning Objectives by building an AngularJS application - *Big Hippo Depot*

#### Add AngularJS to Our Page
- ```> cd big_hippo_depot```
- ```touch index.html```
- ```subl .```
- Slack boilerplate HTML
- Get cdn from angularjs.org and paste into script tag in the ```<head>```.
- Lets also grab Bootstrap's cdn (www.getbootstrap.com) and include in a link tag in the ```<head>```.
- Bootstrap Angular with ng-app directive in the ```<html>``` tag.
- Add binding expression to test that Angular is hooked up - check for no errors in console.
- Put a _container_ class on the body.
- For our page heading, lets add this:

```html
<h1 class="jumbotron text-center">Big Hippo Depot</h1>
```

#### Basic Data Binding

Lets look at basic two-way data binding.

Add the following HTML:

```html
<label>Search:</label>
<input type="text" ng-model="search">
<p>{{search}}</p>
```

**DISCUSS what is taking place**

- A variable named _search_ is being created on something called the _$rootScope_ and this variable is available to the view to bind to as we did in the binding expression between the ```<p>``` tags.
- $rootScope is analogous to JavaScript's global scope.

#### Power of Directives

So far, we've only used the ```ng-app``` directive to bootstrap Angular.  Now lets add a little bit of data to our page using another directive, ```ng-init```.  This is for demo purposes only - in a bit, we'll see how to put data in controllers...  Add the ```ng-init``` to the body tag like this:

```html
<body class="container" ng-init="hippos = ['Henry', 'Flo', 'George', 'Alice']">

```
When angular parses this expression inside ng-init, it puts the _hippos_ array on $rootScope which makes it available to the view for binding, similar to what ng-model did earlier.

Next, we will discuss use one of Angular's finest directives, _ng-repeat_.  Wanna guess what it does?

Lets see how to use it. First, let me slack code an empty ```<table>``` like this:

```html
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
```

Then, we add the _ng-repeat_ to the element that we want to repeat for each item in an array - in this case the ```<tr>``` element.  The ```<tr>``` and its nested elements will be copied for each element in the _hippos_ array.  While we're at it, lets put a binding expression to print out each _hippo_ like this:

```html
        <tbody>
            <tr ng-repeat="hippo in hippos">
                <td>{{hippo}}</td>
            </tr>
        </tbody>
```

#### Power of Filters

Lets remove the ```<p>``` tag since we've already seen two-way binding in action.

Angular filters are powerful and easy to use.  Remember, we feed in, or "pipe" data to a filter, it then manipulates and returns it.

There are several filters built-in to Angular, but we can also create our own.

Lets use the _filter_ filter to filter our _hippos_ array based upon the value of the _search_ variable created by the ng-model on the input element:

```html
            <tr ng-repeat="hippo in hippos | filter:search">
```

Notice that we separated our array and the filter filter with a vertical bar, also called the pipe symbol.  Notice that the _filter_ filter itself took in an argument after a colon.

Filters can be chained too!  Lets use the _orderBy_ filter to sort our data like this:

```html
            <tr ng-repeat="hippo in hippos | filter:search | orderBy:hippo">
```

We'll see another use of filters a bit later.

#### Modules - Containers for Code (Controllers, Custom Filters, Services, etc.)

Thanks to the magic of AngularJS, so far we have not written a single line of JavaScript!  This demo code dream however is about to come to an end :(

Angular modules are containers for our code.  You will always create at least one module for your application.  Lets do that now:

```
> mkdir js
> touch js/app.js
```
Now lets include it in our web page by adding another ```<scrip>``` tag after the one that loads Angular.

```html
    <script type="text/javascript" src="js/app.js"></script>
```

In app.js, we are first going to define module named "myApp" with this code:

```javascript
angular.module('myApp', []);
```

The empty array is where we would pass in other module names that "myApp" uses, or depends on - this is called _dependency injection_.  Even though "myApp" does not depend on any other modules, the empty array is necessary because if we call the _module_ method with only one argument, the method becomes a getter, returning the specified module.  When two arguments are supplied, the _module_ method will create a new module like we did above.

Our newly created "myApp" module is our program's "main" module that Angular will load for us - if we tell it to.  This is how we tell Angular which module to bootstrap with:

```html
<html ng-app="myApp" lang="en">
```
Now, lets give our module some Angular components!

#### Controllers - View Data & Event Handlers

So, in Angular's flavor of MVC, controllers are intended to primarily:

1. Respond to user actions.
2. Provide data to the view (occasionally referred to the view-model).

Since we are going to use our new controller to provide data to our view, lets delete the ```ng-init``` - say goodbye, you may never see one in action again.

Now, lets stub up a new controller and plug it into our module:

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('myApp')
    .controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController() {

}
```

For those of you that noticed that we are polluting the global scope with our _HomeController_ function - good eye!  Feel free to wrap all the code in an IIFE (Immediately Invoked Function Expression)!

Now, there are two acceptable methods for defining controllers.  They are commonly referred to as the:

- _$scope_ method
- _controller as_ method

We will start with the $scope method since it was the original way.

$scope is a JS object that acts as the glue between the controller and the view.  In order to use it however, it must be _injected_ into our controller like this:

```javascript
function HomeController($scope) {
    // $scope is an object and the glue between our controller and the view.
    // If we put properties on it, they will be accessible to the view!
}
``` 

Now lets set some data on the $scope inside the controller for the view to bind to:

```javascript
    $scope.hippos = [
        { name: 'Henry', weight: 3800, price: 5000 },
        { name: 'Flo', weight: 3100, price: 5200 },
        { name: 'George', weight: 3600, price: 4400 },
        { name: 'Alice', weight: 2900, price: 4600 }
    ];
```

Now, we just need to hook up our controller to our view by using an _ng-controller_ directive.  Lets put it on our ```<body>```:

```javascript
<body class="container" ng-controller="HomeController">
```

When Angular parses our html and finds the ng-controller directive, it will instantiate the HomeController and the element it is attached to, plus all its nested elements, will have access to the properties, including methods, created on $scope.

Since we've changed our data structure to contain hippo objects instead of just names, we have to update our ```<table>``` to display the other properties and allow for the fact that each element of the hippos array is an object:

```html
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Weight</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="hippo in hippos | filter:search | orderBy:hippo">
                <td>{{hippo.name}}</td>
                <td>{{hippo.weight}}</td>
                <td>{{hippo.price}}</td>
            </tr>
        </tbody>
    </table>
```
While we're at it, we need to fix up our _orderBy_ filter:

```html
            <tr ng-repeat="hippo in hippos | filter:search | orderBy:'name'">
```

Nice!  Be sure to check out the search filter at work now!

Lets look at another built-in filter that transforms how our data is displayed:

```html
                <td>{{hippo.price | currency}}</td>
```

Now the hippos' prices display as a dollar value.  However, we may not want the cents to display.  The _currency_ filter can take in two arguments, the first the currency symbol to use, the second, the number of decimals to display.

```html
                <td>{{hippo.price | currency:'$':0}}</td>

```

There's a _number_ filter that can be used to display the specified number of decimals and add a comma every between every three digits.

**How would we use it to format the Hippos' weights?**

We said that our controllers should handle user actions, lets say our users want to add more Hippos to the Depot!

Here's some html to add below our ```<table>```:

```html
    <hr>
    <h4>Add a Hippo</h4>
    <label>Name:</label> <input type="text" ng-model="new.name">&nbsp;
    <label>Weight:</label> <input type="text" ng-model="new.weight">&nbsp;
    <label>Price:</label> <input type="text" ng-model="new.price">
    <button class="btn btn-primary">+ Add</button>
```

We have setup the ng-models to automatically create three new properties on $scope.  Notice how we organized our new props into a "new" namespace - this is a good practice where it makes sense.

If we click our button, nothing happens because we haven't bound it to our controller, nor have we provided any code!

First the code in the controller we want to call when the button is clicked:

```javascript
    $scope.addHippo = function() {
        $scope.hippos.push(
            {
                name: $scope.new.name,
                weight: $scope.new.weight,
                price: $scope.new.price
            }
        );
    };
```

Now lets bind this to the button with another directive, called _ng-click_:

```html
    <button class="btn btn-primary" ng-click="addHippo()">+ Add</button>
```

Looks good, except we should reset the inputs after the data has been added:

```javascript
    $scope.addHippo = function() {
        $scope.hippos.push(
            {
                name: $scope.new.name,
                weight: $scope.new.weight,
                price: $scope.new.price
            }
        );
        $scope.new = {};
    };
```

Lastly, lets sell these Hippos!

First, lets add a boolean to our data model:

```javascript
    $scope.hippos = [
        { name: 'Henry', weight: 3800, price: 5000, sold: false },
        { name: 'Flo', weight: 3100, price: 5200, sold: false },
        { name: 'George', weight: 3600, price: 4400, sold: false },
        { name: 'Alice', weight: 2900, price: 4600, sold: false }
    ];
```

Add another column to our table:

```html
...
                <td>
                    <button class="btn btn-xs btn-warning" ng-click="hippo.sold = true" ng-hide="hippo.sold">Sell</button>
                </td>
            </tr>
```

**Discuss code in ng_click and the ng-hide directive**

What if we want to display a sold hippo's text in red?

Add this styling in the ```<head>```

```html
    <style>
        .sold { color: red; }
    </style>
```

No code to add, just another directive - ng-class:

```html
            <tr ng-class="{'sold': hippo.sold}" ng-repeat="hippo in hippos | filter:search | orderBy:'name'">
```

You will most definitely be using the ng-class directive in your apps.  It has several syntaxes - here's a great article that discusses [The Many Ways To Use ngClass](https://scotch.io/tutorials/the-many-ways-to-use-ngclass).

##### A couple of notes about controllers:

- Since your controller is basically a constructor function, the code in it will execute one time.  So the controllers code should be sure to initialize any data the view needs and define the methods that will run in response to user actions.
- Production JavaScript is almost always "minified" before it is deployed. Minification strips out whitespace, comments, and changes variable and function identifiers to one or two character names.  This process will break Angular's dependency injection system.  In another lesson, we will show you ways around this problem...

## 6. Why Use Services?

Services allow us to share data and/or behavior between controllers, directives, filters and even other services.

You provide access to services just like we provide access to just about any Angular component - you use _dependency injection_!

Services are created once when first accessed, and are persisted for the lifetime of the application. This is contrary to controllers, which are initialized and destroyed as the views they are attached to change.

There are a few different methods for creating services, the two most popular being _factories_ and _services_.

You will learn more about using services in a future lesson.

## 7. Lab - Create a To Do List App

#### Lets create a To Do List app using the power of AngularJS.  Your app should be able to:
- Display a list of To Do's with a "Completed" checkbox in the first column, and  a task in the second column.
- When the user checks the checkbox, the text of the task should be muted and styled with a strikethrough.
- Provide the ability for the user to add new tasks.
- Ensure that you use a controller to hold the data and provide the event handler code.

#### Bonus
- Provide a button that removes all completed tasks from the list.

## Essential Questions
- What are some benefits that AngularJS provides to us?
  - Organize our client side JavaScript code using the MVC pattern.
  - Easily implement the SPA architecture.
  - Writing less code.
  - Easy dynamic view thanks to automatic two-way data binding.

## References
- [Official AngularJS website](https://angularjs.org/)
- Two great AngularJS Style Guides:<br>
   [Todd Motto's](https://github.com/toddmotto/angularjs-styleguide)<br>
   [John Papa's](https://github.com/johnpapa/angular-styleguide)

