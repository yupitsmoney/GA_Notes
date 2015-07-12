# Intro to Firebase
- - -

## Learning Objectives
###Students will be able to:

- Understand the role of databases in our applications
- Use Firebase to persist application data
- Read & Modify Firebase Data with JavaScript

## Roadmap
1. Databases in Brief
2. What is Firebase?
3. JSON Primer
4. Getting Started with Firebase
5. Reading and Updating Data
6. Lab - Create a Simple To Do List


## 1. Databases in Brief

### What Are Databases For?

**ASK: What apps in class have played with use data? [Big Hippo Depot, To Do, etc.]**

**ASK: If we add our own data in those app, then refresh the page, what happens to the data when we refresh the page?**

This problem is solved by databases.

The primary responsibility of databases is to persist data.

**WB: Browser <--> Server <--> Database**

You're going to learn a bunch about database technologies while in WDI.  Here is typically how databases are accessed by applications.

But the one you're going to learn about today, is pretty unique.

## 2. What is Firebase?

### Firebase - A Different Kind of Database

Firebase is a different kind of database in a couple of ways:

**WB: Browser <--> Firebase**

- Firebase allows us to connect our web apps directly to the database - no server required.
- Updates to the same Firebase location are synced in realtime to all connected clients.

### What Else
   
- Firebase was recently acquired by Google.
- Firebase also provides user authentication and security, services that typically are provided by a backend server - therefore Firebase can be looked at as a all-in-one backend server.
- It stores data in a format called JavaScript Object Notation (JSON).

## 3. JSON Primer

### What is JSON

JSON is a language agnostic data interchange format.

Format based upon JavaScript's Object Literal Notation.

Primary difference is that the property names need to be quoted and it does not support the _Date_ or _undefined_ data types.

### Using JSON in JavaScript

**I DO: In console demo JSON.parse & JSON.stringify**

**YOU DO: Create a file in Sublime called _myBlog.json_ and write JSON that models your own blog.  Include at least two blog posts.  One of the posts should have at least two comments. Here's a possible data model:**

- blogTitle (string)
- author (string)
- blogPosts (array)

The _blogPosts_ array will hold objects that represent a blog post:

- title (string)
- postDate (string)
- postBody (string)
- allowComments (boolean)
- comments (array)

## 4. Getting Started with Firebase

### Creating Your Account

Lets go to [https://www.firebase.com/](https://www.firebase.com/) and get our own free Firebase account.

After you have your account setup, inside the Dashboard, create a new firebase app named anything you want.  The url has to be globally unique though...

### Managing Your App with _Forge_

#### Manipulate Data

Firebase has an UI called _Forge_ that can be used to view and manipulate data in your Firebase.

Note that the URL in the browser is the URL of your firebase.

**YOU DO: Add, update & delete data using Forge**

#### URLs Reference Data

Try clicking on the key name for some data.  Note the path in your browser has changed to point directly to the data you have selected.

__All__ data in your firebase can be referenced with a URL! This is an __important__ concept to remember.

Note that if a key contains spaces, the spaces are _percent-encoded_ in the URL which is commonly done throughout the web.

#### Import/Exporting Data

One of the cool features is that you can use Forge to import/export JSON data files.

Lets import the _myBlog.json_ file we created earlier - super cool!

Note that you whatever data location (url path) you are on is where the data is imported to or exported from.

**YOU DO: Explore the data hierarchy**

#### Arrays in Firebase

Note how the arrays were converted into objects with index integers as the key names.

There are technical reasons why Firebase uses objects instead of arrays.  However, Firebase will help us out by returning our data in an array instead of an object if all of the keys are an integer and most of them are sequential.

Use objects with meaningful keys as strings instead of arrays when possible.  For example for our blog posts, we could create a key format using the date of the blog post like this

```javascript
"20150510": {
	allowComments: true,
	postBody: "...",
	postDate: "May 10, 2015"
	// etc
}
```

We will also see in a bit that we can just let Firebase generate unique keys for us.

#### Setup CodePen with the Firebase JavaScript Library

Forge is cool to use for debugging data, but we are obviously here to learn how to use Firebase with JavaScript.

Lets use another great front end developer playground, [CodePen - http://codepen.io/](http://codepen.io/) to learn how to read and manipulate data using Firebase's JavaScript library.

Create a new Pen and click the configure HTML _gear_ add the current library from [Firebase's website](https://www.firebase.com) to the head section.

## 5. Reading and Manipulating Data

### Referencing Data with Refs

We reference, or point to, data with _references_ (refs) that we create as follows:

```javascript
var rootRef = new Firebase('https://scorching-fire-8426.firebaseio.com');
```

You can also create new refs from existing refs using the ```child()``` method:

``` javascript
// ref for accessing all of the blogPosts
var blogPostsRef = rootRef.child('blogPosts');

// the following are ways we can create refs for accessing the first blogPost
var aFirstBlogPostRef = rootRef.child('blogPosts/0');
var bFirstBlogPostRef = blogPostsRef.child('0');
var cFirstBlogPostRef = rootRef.child('blogPosts').child('0');
var dFirstBlogPostRef = new Firebase('https://scorching-fire-8426.firebaseio.com/blogPosts/0');
```

**CFK: How could we obtain a ref to blogTitle? The second blog post?**

**Important:** Firebase references do not actually attempt to connect to the server or download data.  Data is fetched or updated using the API's methods.

Firebase refs are very lightweight, so feel free to create as many as your application needs.

### A Note Regarding Asynchronous (async) Programming

Fetching data or other resources over the internet (or even from our own hard drives), in computer terms, is very slow.  If our computer had to sit and wait for data to show up each time we requested it, our computer would waste most of its time doing absolutely nothing and we as users would not be happy campers.

To prevent this problem, many languages use an event driven pattern that allows our code to invoke a method and be notified when it has some results for us to process.

In JavaScript, we implement this pattern using _callbacks_.  Callbacks are functions we provide to the method we are calling, and the method will execute our callback function when it has completed its task.

As you will see, Firebase relies heavily on callbacks to keep our programs efficient and responsive.

### Retrieving Data

In Firebase, data is retrieved by attaching callbacks, or asynchronous listeners, to our Firebase references.

To "listen" to the data located at a reference, we can use the ```on()``` method:

```javascript
// Attach an asynchronous callback to read all of the data from the root location
rootRef.on("value", function(snapshot) {
    console.log(snapshot.val());
});
```

Check out the data object returned in the console!

The object returned in the callback contains a bunch of info , Note that we have to call the ```val()``` method to get the actual data.

**Demo: async pattern by adding another console.log after other code that will actually run first**

The ```on``` listener will continue to listen for changes to data until it is removed using the ```off()``` method.

**Demo: Update data in Forge and see it live in the console**

The "value" event we used here is the most common event to listen to. "value" triggers once for all of the data, then again whenever the data changes.

If you need more granular notification, there are several "child" events that will notify the ```on()``` method's callback each time a child is updated:

- _child___added_
- _child___removed_
- _child___changed_
- _child___moved_

Learn more about the above events here: [https://www.firebase.com/docs/web/api/query/on.html](https://www.firebase.com/docs/web/api/query/on.html)

**YOU DO: Practice creating references to your blog data's specific data locations and use the ```on()``` method to console.log the results**

### Updating and Saving Data

Lets learn the three most popular methods used to save or update data in a firebase.

#### The set() Method

Use ```set()``` to write or __replace__ replace the data at a firebase ref location:

```javascript
rootRef.child('blogPosts').child('0').child('title').set('Firebase is VERY Cool');
```

Checkout the update in Force!

**YOU DO: Try updating the 2nd blog post in its entirety with one set.  Hint: you can pass in an object to the ```set()``` method**

#### The update() Method

Unlike ```set()```, which replaces all of the data at a particular location, the ```update()``` method can be used to replace only the child keys specified in the new object.  For example, here's the code to update the postDate and title nodes of the first blog post:

```javascript
rootRef.child('blogPosts').child('0').update({
	"postDate": "May 11, 2015",
	"title": "17 out of 18 GA Students agree - Firebase is awesome!"
});
```

**CFU: If the above code were ran using the ```set()``` method instead, what data would the first blog post contain?***

#### The push() Method

When adding lists of data to Firebase, we often don't want to worry about generating a unique key on our own, especially when the app is accessed by multiple users simultaneously.

The ```push()``` method generates a unique key name automatically and assigns the data provided to it.

For example, when creating new blog posts, we could start appending new blogs like this:

```javascript
rootRef.child('blogPosts').push({
	"allowComments": false,
	"postBody": "This post was added via the 'push()' method!",
	"postDate": "May 11, 2015",
	"title": "17 out of 18 GA Students agree - Firebase is awesome!"
});

```

If you examine the data in Forge, you'll notice that the auto-generated unique ID is kind of crazy looking.  But the cool thing about it is that its based on a timestamp and will keep the list in chronological order.

**ASK: Look at the blogPosts that were console.log'd.  Do you notice anything different about the list? [no longer an array]**

**ASK: Who remembers the reason why this happened? [all of the keys are no longer integers]**

We've only scratched the surface here.  You will surely be learning more details as you reference the docs.

## 6. Lab - Create a Simple To Do List

#### Create a simple To Do List that uses Firebase to persist the data:

1. Create an _index.html_ & _app.js_ file.
2. Optionally link in Bootstrap.
3. Do not use AngularJS for this lab.
4. Add the task entered in an input box to your firebase when a user clicks a button.  Don't forget to clear out the input after the task is added.
5. Each time the "value" event of the ```on()``` method triggers:
   - Clear out the contents of a ```<div>``` that you will use to contain the tasks.
   - Create a ```<p>``` and ```<input type="checkbox">``` element for each task and append them to your container ```<div>```.

#### Bonus

- Update the firebase when the checkbox is checked/unchecked.

## Essential Questions
- What is passed in to the ```new Firebase(....what goes here....)``` method to create a reference to a Firebase location?
- Write the code to read data from a location and be notified whenever that location's data changes. 

## References

[Firebase Docs for JavaScript](https://www.firebase.com/docs/web/)

[AngularFire Library](https://www.firebase.com/docs/web/libraries/angular/)



