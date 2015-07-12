![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

# Introduction to jQuery
---
---


### Overview

* Libraries v Frameworks & "what is jQuery?"
* Including jQuery correctly
* Selectors
* Manipulating the DOM
* Play with jQuery

## Libraries v Frameworks

Define: Library in this context.
Individual search excercise on Libraries v Frameworks 2mins. Group discussion 2 mins.   
Look at libraries in both CSS (animate.css and bootstrap) and JS (jQuery and Angular).

<http://daneden.github.io/animate.css/>

<http://getbootstrap.com/css/#grid>

<http://api.jquery.com/>


## Including jQuery
* how do you include it? --> cdn or downloaded

## Element selectors

Thus far, you have been used to using ```document.getElementBy...``` to select DOM elements. jQuery does this slightly differently. 

> The **$** sign **doesn't** mean that you're rich (just yet)

Element, Descendant, Child, Multiple & First(pseudo) Selectors:
I
```javascript
$("element, #id or .class")
```

```javascript
$("#id **descendant**")
```

```javascript
$(".class > **child**")
```

```javascript
$("#id1**,** #id2**,** #id3")
```

```javascript
$("li :first")
```

A few useful jQuery methods that will also help with selection:

```javascript
$("").first()
```

```javascript
$("").last()
```

```javascript
$("").next()
```

```javascript
$("").prev()
```

(More on these when we look at trasversing the DOM)
#jQuery basics
---
---

Making Sure the Page Is Ready
---

```javascript
$(document).ready(function(){
  alert("Everything is ready, let's do this");
});
```

jQuery includes a shortcut version

```javascript
$(function(){
  alert("Everything is ready, let's do this");
});
```
Selecting. The core of JQuery
---
You may use `jQuery` or `$` which are equivalent.
`jQuery(<selector goes here>)` does the same as `$(<selector here>)`

jQuery uses css selectors, so you can do
`$('#my-element-with-id')` or `$('.my-element-with-a-class')`

If we have an html table like the following:

```html
<table class="data table" id="turtles">
 <thead>
   <tr>
     <th>Name</th>
     <th>Color</th>
     <th>Weapon</th>
     <th>Trait</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>Donatello</td>
     <td>Purple</td>
     <td>Bo Staff</td>
     <td>Brainiac</td>
   </tr>
   <tr>
     <td>Leonardo</td>
     <td>Blue</td>
     <td>Twin Katanas</td>
     <td>Leader</td>
   </tr>
 </tbody>
</table>
```

**Complete the table with the remaining turtles
[hint](http://www.answers.com/Q/What_are_the_ninja_turtles_names_colors_and_weapons)**
<br>
<br>
Specifity in selections
---
You can select the table by id like so: `$('#turtles')` or `$('.data')`

We can narrow down our selection like so `$('#turtles tr')` or be more specific like`$('#turtles thead tr')`

Testing the selection
---

```javascript
$(function(){
  alert($('#turtles tr').length + ' elements');
});
```

Set CSS property
---

```javascript
$(document).ready(function() {
  $('#turtles tbody tr:even').css('background-color','#dddddd');
});
```
Can be written like:

```javascript
$(function() {
  $('#turtles tbody tr:even').css({
    'background-color':'#dddddd',
    'color': '#666666'
  });
});
```

![GeneralAssemb.ly](https://raw.githubusercontent.com/ga-students/WDI_DTLA_3/master/assets/icons/Exercise_icon_md.png?token=AGbhZU9q5sKlwOl_vAWriq5Q7em_cl8aks5VgOY2wA%3D%3D "GeneralAssemb.ly")

####Take a few minutes and add the following css styling to elements in our HTML using jQuery:

* Access the title above our table and center it
* Change the color of our title text to green
* Access each row in the table and change the background color to match each turtles signature color
	* Hint: remember `$('...').first`? Well, in order to access a specific element when there are many we can use another syntax to call them by the index value in which they appear
	`$('...').eq(1)` < will grab the second element of this type


Adding and Removing Classes
---
It's better to add classes rather than inline styling.
JQuery allows us to add and remove classes dynamically.

```javascript
$('#turtles tbody tr:even').addClass('badass');
$('#turtles tbody tr:even').removeClass('badass');
```

Hiding and Revealing Elements
---
We can easily hide elements by using the hide method. So if for example
we have a disclaimer in our html page we could hide it like so.

```html
<input type="button" id="hideButton" value="hide" />
<p id="disclaimer">
    This information was taken from the internet here
    http://wiki.answers.com/Q/_What_are_the_ninja_turtles_names_colors_and_weapons
</p>
```

```javascript
$('#hideButton').click(function() {
  $('#disclaimer').hide();
});
```
####Or...
### we can show it:

![GeneralAssemb.ly](https://raw.githubusercontent.com/ga-students/WDI_DTLA_3/master/assets/icons/Exercise_icon_md.png?token=AGbhZU9q5sKlwOl_vAWriq5Q7em_cl8aks5VgOY2wA%3D%3D "GeneralAssemb.ly")

#### Take 5 minutes to add a show button and the javascript code to make it functional.
---
<br>
Since this action is so pervasive, jQuery comes with a toggle.

```javascript
$('#toggleButton').click(function() {
  $('#disclaimer').toggle();
});
```

Adding new elements
---

```javascript
$('<p>My new paragraph</p>')
```


We can add a class to our newly created dom element

```javascript
$('<p>My new paragraph</p>').addClass('new');
```
And then inserted into the live DOM

```javascript
$('<input type="button" value="new turtle?" id="newTurtleButton">')
  .insertAfter('#turtles');
$('#turtleButton').click(function() {
  $('<tr><td>Rembrandt</td><td>Brown</td><td>Snapping Bite</td><td>Never fully mutated</td></tr>').appendTo('#turtles tbody');
});
```

![GeneralAssemb.ly](https://raw.githubusercontent.com/ga-students/WDI_DTLA_3/master/assets/icons/Exercise_icon_md.png?token=AGbhZU9q5sKlwOl_vAWriq5Q7em_cl8aks5VgOY2wA%3D%3D "GeneralAssemb.ly")

####Complete the following:

* That more turtles button we just added will continue to add Rembrandt over and over again, make it so that once it is clicked the first time it disappears.
* There is a hidden photo at the bottom of our html. Use jQuery to make it appear.
* There is a hidden div with the TMNT lost fifth member. Use jQuery to make it appear.
* Now create a button that reads "show the turtles" that will allow you to toggle the images of the turtles.
	* Bonus points if you can get the text inside the button to change back and forth between "show the turtles" and "hide the turtles"


---
---

###References for self-study:
	
jQuery documentation <http://api.jquery.com/>

codeschool.com "introduction to jQuery" <http://try.jquery.com/>