![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

#JQuery pt. 2
###(more jaQwurry)
<br>

	Objectives
	- Learn more about jQuery
	- Revisit jQuery selectors
	- Understand jQuery chaining
	- Make cool animations with jQuery!


Get started with jQuery 

	mkdir jquery_pt_2
	cd jquery_pt_2
	touch index.html
	mkdir css
	mkdir js
	touch css/app.css
	touch js/app.js

You can use jQuery by downloading it and placing it in your js file or simply applying the google hosted library into your index.html like so...

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

<br>

####Refresher:
How do you select an element in jQuery? 

```javascript
var listItems = jQuery('li');
```

Or the shorthand

```javascript
var listItems = $('li');
```

You can specify classes, ids, elements etc.

```javascript
$( '#header' ); // select the element with an ID of 'header'
	
$( 'li' );      // select all list items on the page
	
$( 'ul li' );   // select list items that are in unordered lists
	
$( '.person' ); // select all elements with a class of 'person'
```

Remember to set up jQuery to wait for the document to load before running the script 

```javascript
$(document).ready(function(){
	
});
```

Or the shorthand 

```javascript
$(function(){
		
});
```

Setters & Getters in JQuery

```javascript
// This is a setter
$("h1").html("hello");
	
// This is a getter
$("h1").html();
```

###OK. Now let's get started

Let's set up your index.html

```html
<!DOCTYPE html>
<html>
<head>
	<title>jQuery Demo</title>	
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>	
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>
```

####Why is it beneficial to load our javascript at the bottom of the HTML page?

#####What are some possible issues that come from that?

Above we saw a `setter` that would append the word *"hello"* to an h1 tag.

Let's take that snippit and add it to our app.js (don't forget to put it in our document ready function)

Let's add an empty h1 tag so that our message has an element to print to.

###Now we should see "hello" on our screen

Add another h1 tag... add as many as you want... what do you see?

Let's add some text to our first h1 tag

```html
<h1>Some Text</h1>
```

Refresh the page a few times rapidly. What do you notice?
Our message of "hello" doesn't appear right away and we notice a flash of "Some Text". We don't want that!
####Why is this happening?

If we moved our script tags up to the head section and reload the page we will notice that "hello" is there on load. This is because we are loading our js before displaying our body. But doing that means that our body of content will not display until after the js has fully loaded. This results in a lag time when loading the page.

So, what if we would rather load our body first before our js? And so we load our javascript at the bottom of the page. How could we fix the momentary flash of the wrong text using jQuery?

In our app.css

```css
h1 {
	visibility: hidden;
}
```

Now we use jQuery to add visibility only after our javascript file has loaded.

```js
$('h1').css('visibility', 'visible');
```

Now try reloading the page. Can you still see "Some Text"?

No?

*Looks like we got rid of that pesky DOM element.*

`AWESOME! Moving right along...`

##Sliding panel effect

Create a button and a panel in index.html

```html
<div id="panel"></div>
<button id="btn-slide">Slide panel</button>
```
	
Apply CSS to the panel in app.css


```css
#panel {
	background: hotpink;
	height: 200px;
	width: 150px;	
	display: none;	
}
```

And write jQuery into app.js

```js
//When document is loaded
$(function(){
	
	$('#btn-slide').click(function(){
		$("#panel").slideToggle("slow");
	});
	
});
```

##Disappearing pane effect

Create a disappearing pane in index.html

```html
<div class="pane">
	<h3>Sample header</h3>
	
	<span class="delete">delete</span>
	
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	
</div>
```

Now, in app.js

```js
// Disappearing panel effect
$(".pane .delete").click(function(){
		$(this).parents(".pane").animate({opacity: 'hide'}, "slow");
		
});
```

#####Now for the magic!
Load the browser and click on the word "delete"

![GeneralAssemb.ly](https://raw.githubusercontent.com/ga-students/WDI_DTLA_3/master/assets/icons/Exercise_icon_md.png?token=AGbhZUMpXq1hBCJg88iJZI0qnQPKC6THks5VikX_wA%3D%3D)

Break into groups of two. Create a cool effect using jQuery animate (5 mins)

Need help or inspiration? [click here](http://lmgtfy.com/?q=jquery+animate+examples)

Demo the animations (5 mins)

##Access the DOM in jQuery

You can grab the first child of document.body like this

```js
$(document.body.children[0]);
```

Let's make the first element of the body slide

```javascript
$(document.body.children[1]).click(function(){
	$(this).slideToggle('fast');
});
```

Let's create HTML elements using jQuery 

In index.html

```html
<!-- Append a paragraph to all body's children -->

<button id="append-p">Append a paragraph to elements</button>
```
	
In app.js

```js
// Append a paragraph to elements

$('#append-p').click(function(){
	$(document.body.children).append("<p>Hello class!</p>");
});
```

![GeneralAssemb.ly](https://raw.githubusercontent.com/ga-students/WDI_DTLA_3/master/assets/icons/Exercise_icon_md.png?token=AGbhZUMpXq1hBCJg88iJZI0qnQPKC6THks5VikX_wA%3D%3D)

Try and make this button append to only the 2nd item in the document.body (3min)


**Note: The jQuery objects are always truthy, so use the length to check for the right condition**


To check if selections exist, check the length 

```js

if ( $( '#nonexistent' ) ) {
  // Wrong! This code will always run!
}
	
if ( $( '#existent' ).length > 0 ) {
  // Correct! This code will only run if there's an element in your page
  // with an ID of 'existent' present
}
```

If you can add elements, you can remove them as well (app.js)

```js
// Append a paragraph to elements

$('#append-p').click(function(){

    if($(this).html() !== "Now you see it!"){
        $(document.body.children[1]).append("<p class='.p'>Hello class!</p>");
        $(this).html("Now you see it!");
    }else{
        $('p').remove(":contains('Hello')");
        $(this).html("Now you don't!");
    }
    
});
```
	
Using alternate syntax with $ function, you can create elements like this (app.js):

```js
// Creating an element in jQuery
	
$('<p>', {html: 'Keyan was here!', class: 'greet'}).appendTo(document.body);
```	

##Chaining example

```js
// end method specifies that we are getting back to the original selection

$(".pane").find("span").eq(0).html("Lol").end().end().find("h3").eq(0).html("Fun title");
```

##$.AJAX example

Let's do an AJAX request to OMDB grab some movie data

```js
// AJAX demo (.getJSON is a jquery method to return plain objects or strings from JSON)
$.getJSON("http://www.omdbapi.com/?t=Shrek", function(response, status, jqXHR){

	console.log(response);
	console.log(status);
	// jQuery XMLHttpRequest
	console.log(jqXHR);
});
```

Check the console in chrome dev tools and see what returned

Now lets use jQuery to print some of our results to existing elements on the DOM.

```js
//Prints title to header tag
$(".pane").find('h3').eq(0).html(response['Title']);
//Prints plot to 'pane' paragraph
$(".pane").find('p').eq(0).html(response['Plot']);
```

Let's use jQuery to add a new element to the DOM.

```js
$('<img>', {src: response['Poster'], class: 'poster'}).appendTo(".pane");
```

![GeneralAssemb.ly](https://raw.githubusercontent.com/ga-students/WDI_DTLA_3/master/assets/icons/Exercise_icon_md.png?token=AGbhZUMpXq1hBCJg88iJZI0qnQPKC6THks5VikX_wA%3D%3D)

[Time Permitting]

###Create a search bar for our API AJAX!

Use jQuery to replace our title, plot and poster image with a movie from the search bar.


##Awesome! You are now doubly familiar with jaQwurry

#####Resources:

[More about AJAX](http://api.jquery.com/jQuery.ajax/#jqXHR)