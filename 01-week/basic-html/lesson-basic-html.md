# HTML Basics
---
## Learning Objectives
Students will be able to:

- Identify common HTML elements and write with correct syntax
- Assign attributes to elements
- Correctly indent content according to document hierarchy
- Recognize name and purpose of HTML5 semantic elements
- Load external Stylesheets (CSS) and JavaScript files
- Build a basic static HTML webpage from scratch

## Roadmap
1. HTML in Context
2. Essential HTML5 Boilerplate
3. HTML Fundamentals
4. Exploring Tags
5. Nesting
6. Malformed HTML
7. Semantic HTML
8. Loading external Stylesheets and JavaScript
9. Lab - Build a webpage with unstyled HTML!

### 1. HTML in Context
**&lt; DIAGRAM &gt;**

#### The 3 technologies in a web page:

##### HTML (__H__yper__t__ext __M__arkup __L__anguage)
- Structure & Content
- Flavor of the day: HTML5
- Open Standards: W3C (World Wide Consortium - www.w3.org)

##### CSS (Cascading Style Sheets)
- Styling & Layout

##### JavaScript (ECMAScript)
- Behavior

### 2. Essential HTML5 Boilerplate

**&lt; DO &gt;** 

- So that we can start experimenting with HTML, lets create a file and name it *index.html* and open it in Sublime.  Typically, *index.html* is the default web page for a website.

```
> touch index.html
> subl .
```

- Inside the file, we're going to put the following HTML that every HTML5 document should have at a minimum.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Title</title>
</head>
<body>
    
</body>
</html>
```

### 3. HTML Fundamentals

#### HTML Documents
- HTML Documents consist of *elements* that define the structure and content of a web page.
- HTML does not specify how to display content. Browsers have default styling for each type of element.
- The W3C recommends lowercase be used for tags and attribute names.

#### Elements
- An **Element** consist of a *Tag* and its contents (if any), which may include other tags.<br>For example: `<p>Have a <em>great</em> day!</p>`
- Some elements, such as a table cell `<td>`, would be pointless unless nested inside of a `<tr>` row element.
- Most elements are defined as either *block level* or *inline* elements.
  - *Block level* elements normally display on their own line and take up the full width available to them (they don't allow other elements next to them, unless they are styled to do so).

      Examples: `<div>`, `<h1>`, `<p>`
  - *Inline* elements are normally displayed without line breaks and occupy only enough space to contain its contents.

      Examples: `<span>`, `<td>`, `<img>`

#### Tags
- **Tags** commonly have an opening and closing tag name inside angle brackets like this<br>`<p>This is a paragraph</p>`.
- Some tags such as `<img>` and `<br>` are called *empty tags* because they never have content and thus do not need a closing tag.  Prior to HTML5, empty tags typically had a slash before the last angle bracket like this `<br/>`, however, since HTML5, it is preferrable to omit the slash.

#### Attributes
- Elements may contain **Attributes**.
- Attributes provide additional information about an element.
- Attributes are typically *name/value* pairs separated by an equals sign inside the opening tag and the *value* should always be put in quotes.<br>For example:  `<div class="my-class">My Content</div>`
- There are a few attributes, such as `required` `checked` `novalidate` and `disabled`, that stand alone without a value - these are called *boolean attributes*.
- You can add your own custom attributes too! The HTML5 spec recommends that you prefix them with `data-`.  You will see custom attributes heavily utilized when we learn AngularJS.
- The most common attribute is `class`.
- The `id` attribute is used to target a specific element (or its contents) for styling or JS access.  The value of an `id` attribute must be unique in the document. They are optional and should be used only if necessary - remember, the less we clutter our code, the better.

#### Whitespace
- Multiple spaces created by the spacebar, tab key and return key are  reduced down to a single space between pieces of text.
- One way to create extra spaces is by using the HTML *entity* **`&nbsp;`**.

#### Comments
- You can add comments to an HTML document by placing the text inside of a comment tag using the following syntax:

   ```
   <!-- This is a comment -->
   ```
- Comments can span multiple lines and elements in a comment tag will not be rendered.

### 4. Exploring Common Tags

**&lt; PAIR Draw and research common tags&gt;**

- `<a>`, `<blockquote>`, `<br>`, `<button>`, `<div>`, `<dl>`, `<form>`, `<h1>..<h6>`, `<img>`, `<input>`, `<link>`, `<ol>`, `<p>`, `<script>`, `<select>`, `<span>`, `<table>`, `<ul>`

#### Discuss
- What is the common name for the tag?
- What is it's primary purpose?
- Is is an *empty tag*?
- Is its default display type (block level or inline)
- Does the tag require other tags to be useful?  If so, what are they and what do they do?
- What attributes, if any, does it require?

###5. Nesting
- When an element contains another element, the contained element is considered to be *nested* inside the outer element.  In the HTML snippet above, the `<title>` element is nested inside of the `<head>` element.
- It is a good practice to indent nested elements.  However, the `<head>`, and `<body>` tags are rarely indented despite being children of the `<html>` element.
- Describing Nested Relationships:
   - Descendant / Ancestor<br>
   An element is considered a *descendant* if it is nested anywhere within its *ancestor*.
   
   - Child / Parent<br>An element is considered a *child* if it is a direct descendant of its *parent*.

   - Siblings<br>Two or more elements are considered *siblings* if they have the same *parent*.
  
  **&lt; ASK to identify relationship of tags in boilerplate  &gt;**

###6. Malformed HTML

* Proper structure and nesting of elements is important because the browser won't complain - it just won't necessarily display what you are expecting it to.
* Common mistakes include missing closing tags or overlapping tags instead of nesting them.  Here's an example of malformed HTML:

  ```HTML
  <p>This is <strong>important text</p></strong>
  ```
 **&lt; PAIR Fix UGLY.HTML excercise  &gt;**
 
- Let's pair up and correct as many errors and inconsistencies you can find in the supplied *ugly.html* file.
 
- Errors in complex HTML can be hard to find so it's not uncommon for Developers to use plugins or other tools to help them find errors, no matter what the language.  Here is a link to a website that finds errors in HTML that you paste in:

   [http://www.dirtymarkup.com/](http://www.dirtymarkup.com/)

###7. Semantic HTML
- Semantic HTML helps express the **meaning**, or purpose, of the content in a webpage.
- Benefits for the developer:
	- Semantic HTML makes the developer's intentions more clear as to what the developer is trying to accomplish.
- Benefits for the user:
	- More accurate web searches via better SEO (search engine optimization).
	- Improves accessibility for the vision impaired because screen readers can do their job better.


**&lt; PAIR 10 min to research semantic tags, then discuss use of each  &gt;**

- Some Common HTML5 Semantic Tags
   - `<article>`
   - `<aside>`
   - `<figure>`
   - `<footer>`
   - `<header>`
   - `<main>`
   - `<nav>`
   - `<section>`

#### Discuss
- What meaning does each semantic provide?
  
- **&lt; PAIR &gt;** Lets continue to improve the *ugly.html* file by identifying and replacing current tags with semantic tags where possible.

### 8. Loading external Stylesheets and JavaScript

#### Stylesheets (CSS)
- We use the `<link>` tag nested in the `<head>` element to include CSS stylesheets as such:

   ```HTML
   <head>
       <meta charset="utf-8">
       <title>My Document</title>
       <link rel="stylesheet" type="text/css" href="css/styles.css">
	</head>   
   ```
- We use the `<script>` tag either nested in the `<head>` element, or preferably, just inside the closing `</body>` tag to embed or include external JavaScript.
- Embed as such:

   ```HTML
   <body>
       <!-- HTML goes here -->
       <script>
           document.getElementById("demo").innerHTML = "Hello JavaScript!";
       </script>
	</body>   
   ```
   
- Include external JavaScript as such:

   ```HTML
   <body>
       <!-- HTML goes here -->
       <script src="js/javascript.js"></script>
	</body>
	```


### 9. Lab

#### Write a HTML document that represents your own personal blog using semantic HTML. Focus on structure and include some sample content.  Include attributes such as *class* and *id*, but do not worry about writing any styling.

## Essential Questions

1. Explain what semantic HTML is and the benefits it provides.
2. What is the minimum HTML5 boilerplate that each web page should contain?

## Time Permitting

- Discuss plug-ins such as [Emmet](http://emmet.io/) that can increase productivity when writing HTML.

