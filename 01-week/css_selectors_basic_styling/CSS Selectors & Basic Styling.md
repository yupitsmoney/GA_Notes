# CSS Selectors & Basic Styling
---
## Learning Objectives

Students will be able to:

- Link external stylesheets to their web page.
- Use CSS selectors to target elements for styling.
- Style basic CSS properties of an element.
- Set the box model properties to control the size of elements.
- Choose between 'content-box' and 'border-box' modes of the *box-sizing* property.


## Roadmap
1. Intro to CSS (Cascading Style Sheets)
2. CSS Selectors
3. Basic CSS Properties
4. Box Model
5. Lab - Practice Styling

### 1. Intro to CSS (Cascading Style Sheets)

* What is CSS?

   A language used for describing the formatting of a HTML document.

* Why CSS?

   CSS enables us to separate the content of a document from its presentation.  This concept of *separation of concerns* is wide-spread throughout software development.

* Where do we write our CSS?

  * Best Practice - Use a `<link>` element to include an external css file

     Always put your css in a separate file with an extension of 'css', for example: `styles.css`
     
     Let's do this now!  Using terminal, ensure that you are in your the directory where you copied this lesson's repo.  You will find an *index.html* waiting to play with.  Now lets create our stylesheet in a sub-directory like this:
     
     ```
     mkdir css
     touch css/styles.css
     ```
     
     Lets open this directory in Sublime (or your fav editor)
     
     ```subl .```
     
     Lastly, lets link to our `styles.css` file by including this in your `<head>` element:
     
     ```HTML
     <!DOCTYPE html>
     <html lang="en">
     <head>
          <meta charset="UTF-8">
          <title>Document</title>
          <link rel="stylesheet" type="text/css" href="css/styles.css">
     </head>
     ```
     
     Note that the *href* path in this case is relative to *index.html*.  This is how you would load an external stylesheets using an absolute path:
     
     `<link rel="stylesheet" type="text/css" href="http://www.somedomain.com/css/stylesheet.css">`

   * Not Recommended (don't do these)

      You may come across css styling being put in the document `<head>` such as this:
      
      ```HTML
      <html>
      <head>
          <meta charset="utf-8">
          <title>My Document</title>
          <style>
              body {
                  font-family: "Lucida Grande";
              }
          </style>
      </head>
      ```
      
      Another way would be use what's called *inline styling* by setting the *style* attribute of an element.  Again, don't do this!
      
      ```HTML
      <p style="color: red">I'm red text</p>
      ```

- Basic CSS Syntax

   Here is the basic structure for a CSS rule:
   
   <img src="css-syntax.png" height="150" width="550">

- Load Order Matters

   Often, there will be multiple CSS files that you want to include in your web page. For example, you may want to load a CSS file from a CSS framework and include your own custom CSS file as well. When there is more than one file being loaded, the load order matters if multiple files define the same CSS rule.
   
   **Lets experiment with load order by using a `<style>` tag before/after *styles.css* loaded with the `<link>` element by setting an identical rule to set an element's color.**
   
   What did we discover?  When there's a conflict, who wins?
   
   Note that inline styling has the highest priority.
   
- CSS Frameworks

   **Disclaimer** - when learning basic CSS, do not rely on a CSS framework before you have taken the time to learn the basics of how CSS works. Rarely will you be able to rely solely on a framework to style your web app, so you have to know CSS to write additional CSS to customize the look and feel.
   
   A CSS framework is ready to go CSS that makes you more productive at styling a web application.
   
   They provide code that "resets" the browser's default stylings that look much better than defaults and make pages render more consistently from browser to browser.
   
   They can vary greatly framework to framework, but they almost always include a *grid system* to help with layout and include options to make your page adapt to the size of the display device (*responsive design*).  

- Web Colors

   In styles, color can be specified three ways:
   - Using one of the pre-defined color keywords, e.g. `red`, `seagreen`.
   - Specifying a RGB value with either the #-hexadecimal `#0e33f4` or `rgb(14, 51, 244)` and `rgba(14, 51, 244, 0.5)` functional notation.
   - Lastly, you can use the HSL system via the hsl() and hsla() functional notations.

   Here is a link that documents in detail the above concepts: [CSS Color Values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

- Font Sizing
   
   Font sizes can specified in pixels, points, em's, and percentages.  This topic warrants a more in depth discussion than we can do here.  Here's a link to a blog post to get you started:  [CSS Font-Size](http://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/)

### 2. CSS Selectors

The CSS Selectors in a CSS rule do just what they say, they select an element, or elements, to be styled.

**We're going to use this [Liveweave code playground](http://liveweave.com/VoZNjc) example to practice targeting elements**


#### Basic Selectors

##### *element* Selector

Select all `<h1>` and `<h2>` tags:

```HTML
h1, h2 { ... }
```
##### *ID* Selector

Selects an element that matches the value of the *id* attribute

```HTML
#id_value { ... }
```

##### *class* Selector

Selects elements that match one of the values of the *class* attribute (yes, the *class* attribute accepts multiple space separated values)

```HTML
.classname { ... }
span.classname { ... }  /* This will selected all <span class="classname"> tags */
```

##### *attribute* Selector

Selects elements based upon its attributes.  This is only a sampling of possibilities

```HTML
[attr] { ... }  /* Matches an element that has attribute named attr */
a[href="#about"] { ... }  /* This will selected anchor tags with an href set to "#about" */
```

#### Combinators

Combinators provide a powerful way to select an element based upon its relationship to another element.

The most common is the *descendant* selector which is simply a space between two specified elements.

```HTML
/* This will match <p> tags nested anywhere within a <div> tag */
div p { ... }
```

#####There are three additional combinators:

- The *child* Selector (>)

	Selects direct children only!
	
- The *adjacent sibling* Selector (+)

   **Example**
   
   ```HTML
   .boo {
      display: none;
   }
   
   .peek:hover + .boo {
      display: block;
   }
   ```

- The *general sibling* Selector (~)

#### Pseudo-classes

Pseudo-classes (along with pseudo-elements) let you style elements not just based upon their position in the document, but also in relation to other factors like whether an <input type="checkbox"> is :checked.

**Lets take 5 minutes pair up and research *pseudo-classes*.  Be prepared to experiment.**

Some common pseudo-classes are `:active`, `:disabled`, `:empty`, `:nth-child`, `:nth-of-type`, `:focus`, `:hover`, and many more!

Try chaining pseudo-classes!  `li:nth-child(2):hover`

#### Specificity

*Specificity* is the means by which a browser decides which CSS rule gets applied when there is a conflict.  For example:

```HTML
.my-class {
    color: blue;
}

div {
    color: red;
}

<div class="my-class">What color am I?</div>
```

A conflict exists because the `<div>` matches both CSS selector rules.  The selector with the **highest** *Specificity* wins based upon this list of increasing specificity:

- Universal (*) selectors
- Type (element) selectors
- Class selectors
- Attributes selectors
- Pseudo-classes
- ID selectors
- Inline styles

**What color will the `<div>` in the example be?**

There is an exception to the concept of *specificity* known as *!important*.  Use of *!important* is not recommended because it makes debugging difficult since it breaks the natural **cascading** in your stylesheets.

#### CSS Selectors - Key Takeaway

CSS selectors provide enormous capability and flexabiltiy to target any element(s) for styling!  You will spend a good amount of time as a front-end developer learning how to wield their power.

### 3. Basic CSS Properties

#### There are over two hundred CSS properties!  You can view them here: [CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

No doubt, you will spend a great deal of time getting to know many of these properties.  Diving into the numerous properties, many that apply only to certain elements, would not be prudent use of our lesson time.  However, here are a few common ones we will discuss:

#### *color*

Sets the color of the text.

#### *text-align*

Sets how inline content is aligned within its parent block element.

#### *background-color*

Sets the background color of an element.

#### *display*

There are many values for *display*, but the four most common ones are *block*, *inline*, *inline-block* and *none*.

**Let's pair up and research these three values, then we will contrast their differences.**

#### Shorthand Properties

   Shorthand properties are CSS properties that let you set the values of several CSS properties simultaneously.
   
   Using a shorthand property, a web developer can write more concise and often more readable CSS, saving time and energy. 
  
  A shorthand property groups properties of a common theme.  Here are some examples:

- *font*

   *font* is a shorthand property that can be used to set font related properties.  For example:
  
   ```HTML
	p {
	   font-style: italic;
	   font-weight: bold;
	   font-size: 12px;
	   line-height: 14px;
	   font-family: Arial, sans-serif;
	}
	```

   The five lines of CSS declarations above can be merged into a single declaration as follows:

	```HTML
	p {
	   font: italic bold 12px/14px Arial, sans-serif;
	}
	```

- *margin*

   *margin* is a shorthand property that can be used to set margin related properties.  For example:
  
   ```HTML
	p {
	   margin-top: 10px;
	   margin-right: 5px;
	   margin-bottom: 15px;
	   margin-left: 25px;
	}
	```
   The four lines of CSS declarations above can be merged into a single declaration as follows:
  
	```HTML
	p {
	   margin: 10px 5px 15px 25px;
	}
	```
   
   The above `margin` example happened to specify all four sides (top, right, bottom & left - in that order).  A good word to help remember the order of these values is _T__R_ou_B__L_e.
   
   There are other shorthand properties like `padding`, `margin` and `border-width` that also have the same four values for top, right, bottom and left.  However, we often want to set opposite ends, e.g., top / bottom, or even all four sides to the same value.
   
    **Lets PAIR up, and research what happens when 1, 2, or 3 values are entered instead of all 4.**


### 4. Box Model

- Every element in your web page is a rectangular box.
- The box consists of four distinct parts:
   - The *content*
   - The *padding*
   - The *border*
   - The *margin*

   Here's a diagram that demonstrates these four parts:
   
   <img src="box-model.gif" height="300" width="550">
   
- Here are properties we can set to change the dimensions of the box:
   - `width`, `min-width`, `max-width`
   - `height`, `min-height`, `max-height`
   - `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`
   - `border`, `border-top`, `border-right`, `border-bottom`, `border-left`
   - `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`
   - The actual contents

   **Experiment by changing the width, height, padding, and border sizes on a `<div>`**

- The *box-sizing* property

   The *box-sizing* property is used to tell the browser what properties are included in the element's width or height.
   
   There are two common values, *content-box* (default), and *border-box*.
   
   The default value of *content-box* includes only the content's size, therefore the size of the element's padding and border are **not** included.  In this example:
   
   ```HTML
   div.hippo {
       width: 50px;
       height: 40px;
       padding: 10px;
       border: 5px solid red;
       margin: 10px 30px;
   }
   ```

   **What would the total width of a `div.hippo' element be with these CSS values?  Its height?**
   
	Most CSS frameworks set the box-sizing property to *border-box*.
   
   When set to *border-box*, an element's width and height **includes** the sizes of the content, padding and border. In this example:

   **Using the same `div.hippo` example, what would the element's width be? Its height?**
   
   **We can demonstrate the difference in [Liveweave](http://liveweave.com/) using the follow code snippet and changing between *content-box* and *border-box*.
   
   ```HTML
     <!-- html -->
     <div class="box"></div>
     
     <!-- css -->
     *, html { box-sizing: content-box; }
     
	 .box {
   		width: 200px;
  		height: 200px;
  		border: 50px solid teal;
  		background: pink;
	 }
```

### 5. Lab - Practice Styling

Practice styling *index.html* by trying the following:

- Set the *font-family* to  `Lucida Grande` for the entire page.

- Center horizontally a `<div>` with a width of 200px and a height of 100px within the `<body>`.  Add a solid border to only the left and right sides with a width of 10px and a color of your choice using a hexadecimal.  Add some padding on all four sides and put a couple of lines of text inside.  Style four separate words of text to look like it has been highlighted with a yellow highlighter.

- Add another `<p>` element inside the `<footer>` and include some text as content. Style them so that one "floats" (hint) to the left and the other on the right without a line-break between them.

- Style the two `<a>` tags inside of `<nav>` so that they:
   - Have padding of 10px on all sides.
   - Are not underlined.
   -  Have red text with a white background at all times (even after they have been clicked/visited), unless the mouse pointer is over them, then reverse the colors.
   -  Have 20px of space between them.

- Add a third `<section>` below the other two.  Nest two `<asides>`, both with some text, and have them display side by side within the section.


## Resources

[CSS Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)


