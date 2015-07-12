![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")
<br>
<br>
#Javascript Objects & The DOM 

---

##Javasript Objects

- Understand the structure/syntax of a JavaScript object

```
var object = {};
object.foo = 1;
```

- Make new objects three ways 
	- new Object()
	- initialize
	- constructor


#### new Object()
```
var person = new Object();

person.firstName = "Barry";
person.lastName  = "Obama";
```

#### initialize (literal)
```
var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};

// Is the same as:

var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

```


#### constructor
```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};
var yourCar = new Car("Mazda", "Miata", 1990);

```


- Access object properties a few different ways
	- dot syntax
	- for…in
	- Object.keys(o)

####dot syntax
	
```
var person = {firstName: "Grant", lastName: "Roy"};

person.firstName
person.lastName

```


####for...in


```
var myCar = new Car("Nissan", "300ZX", 1992);

for (var prop in myCar) {
  console.log(prop + ": " + myCar[prop]);
}
```

####Object.keys(o)
Getting the keys of an object

```
var milleniumFalcon = new Object();

milleniumFalcon.pilot = "Han Solo";
milleniumFalcon.copilot = "Chewie";

var falconKeys = Object.keys(milleniumFalcon);
```
___

##Your turn to rock Objects

Working in our Chrome console we are going to make an object to represent our class.

___

1. Using the `new Object()` method, create an object to store some of our classmates. Name it `usHippos`.
2. Now Us Hippos will add our first member to the group list. Using dot syntax, give our object a property called `grant` and assign it to the value of our `person` object (we created this already during the lesson)
3. Using the `Car` constructor which we created during the lesson, add Grant's car information (let's simply call it `carInfo`) to `grant`.
4. Now ask 2-3 classmates for their information. Use the object literal method to create new objects within `usHippos` for each classmate. Include their firstName, lastName, and carInfo.
5. [Challenge Mode!] Use the `for...in` method to print out the first name and car model of all of the members of your group.
___

##Intro to The DOM

- Have a basic understanding of what the DOM is and how JavaScript interacts with it

#### DOM
The Document Object Model, normally abbreviated to DOM, is the API through which JavaScript interacts with content within a website.


JavaScript Can Be Used Change HTML Elements (also called Nodes)


- Access properties belonging to the **document** object

```
document.body             // Returns the <body> element
document.URL              // Returns the complete URL of the document
document.lastModified     // Returns the date and time the document was updated

```

- Use document methods to access elements
	- getElementsByTagName
	- getElementById
	- getElementsByClassName
	- document.querySelector
	- document.querySelectorAll

####document.getElementsByTagName
```
var paragraphs = document.getElementsByTagName("p");
```

####document.getElementById
```
var hippoImage = document.getElementById("hippo-image");
```

####document.getElementsByClassName
```
var infos = document.getElementsByClassName("info");
```

####document.querySelector

returns only the first of this node type in the document

```
document.querySelector('p');
```

####document.querySelectorAll
returns a node list of all elements in the document matching this type

```
document.querySelectorAll('p');
```
<br>

##Manipulating elements and styling using JavaScript
<br>

####Change innerHTML (content)
```
document.getElementById("hippo-link").innerHTML = "Show me the Hippos";

document.getElementById("page-title").innerHTML = "Hello" + person.firstName;

```

####Change value of an attribute
```
document.getElementById("hippo-image").src = "http://media.giphy.com/media/EcXSdQLLEpdtK/giphy.gif";
document.getElementById("hippo-link").href = "http://animals.nationalgeographic.com/animals/mammals/hippopotamus/";
```

####Change styles of an element
```
document.getElementById("hippo-link").style.color = "orange";
document.getElementById("hippo-link").style.backgroundColor = "white";
document.getElementById("hippo-image").style.display = "block";
document.getElementById("hippo-image").style.padding = "10px";
```






###JavaScript Jedi Academy

Practice the things you learned today by modifying the Jedi Academy document!