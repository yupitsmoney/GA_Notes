# Regular Expressions
---

## Learning Objectives
Students will be able to:

- Not be mystified by Regular Expressions
- Use Regular Expressions in HTML & code

## Roadmap
- What are Regular Expressions?
- Regular Expression Patterns

### What are Regular Expressions?

- Regular expressions are grounded in computer science.
- They are useful throughout computing, including being used by  most programming languages to search and validate strings.  Many word processors, text editors, and system utilities also use regular expressions.
- Often abbreviated as "regex" or "regexp".
- A regular expression is a sequence of characters that define a search or matching pattern.

### Regular Expression Patterns

To start, lets use [codepen.io](http://codepen.io/pen/) to play with some regular expressions in HTML input elements.

To start, put the following HTML & CSS in your codepen:

```html
<form>
	text: <input type="text" required pattern="Fred">
</form>

```

```css
body {
  font: 14pt Helvetica;
}
form {
  padding: 50px;
  border: 4px solid lightgreen;
  border-radius: 20px;
}
form:invalid {
  border-color: yellow;
}
input {
  font: 14pt Helvetica;
  margin: 10px;
  padding: 4px;
}
input:invalid {
  border-color: red;
}
```

Now that we have our codepen set up, lets take a look at how the characters in a Regular Expression have meaning:

#### Literal Characters

The most basic of regex consists of literal character(s), such as the `pattern="Fred"` attribute we just put in the `<input>` element. This expression would match the first occurrence of the letters `Fred` in a string such as "Say hi to Fredrick, aka Fred, when you see him". The fact that the `Fred` is in the middle of a word does not matter. If it does happen to matter, you will see how to use word boundaries in a bit. Note that regex's by default are case sensitive.

Any value, other than "Fred", entered in the text box will cause it to be considered invalid and the `:invalid` CSS selector rule to be applied.

#### Character Classes

With _character classes_, you can tell the regex engine to match only one of several characters by placing the characters between square brackets.

Lets change our pattern to `gr[ae]y`.

__>>__What will this match?

You can use a hyphen inside of a character class to specify a range of characters. For example, `[0-9]` will match a single digit.

You can use more than one range too. This pattern, `[0-9a-fA-F]`, would would match any single hexadecimal digit regardless of case.

Character classes are great for matching frequently misspelled words like `li[cs]en[cs]e`.

#### Negated Character Class

By putting a `^` (caret) symbol after the `[`, you are saying you want to match any character other than those in the brackets. So `q[^u]` will match the "q " in "Iraq is a country", but will not match the "q" in "Iraq" since it is not followed by any character at all.

#### Shorthand Character Classes

Since character classes are used so often, there are _shorthand character classes_ available. For example, instead of using `[0-9]` to match a digit, you can use `\d` instead.

Here are other shorthand character classes:

`\w` will match any "word" character, including digits and the underscore character.

`\s` will match any "whitespace" character, including a space, tab, newline and carriage return.

Interestingly, the capitalized versions of these shorthands, `\D`, `\S` and `\W` match one character that is NOT what their lowercase versions match.  For example, `\D` will match any character that is not a digit.

Lastly, `.` will match any character except line breaks.

__>>__

Note that to match a letter from the alphabet only, you must use `[a-z]`, `[A-Z]`, or `[a-zA-Z]`.

#### Quantifiers

In the previous example, we repeated the same character classes when we wanted to match more than one. Well, there's a better way using _quantifiers_.

We can use curly braces to specify an exact quantity to repeat a character class like this, `[0-9]{3}`, would match three digits.

__>>__

We can also specify a range like `[0-9]{1,5}`, which would match between 1 and 5 digits.

A range from a number to infinity can be created by leaving off the second number such as this `{5,}`, 

Note that regular expressions by default are "greedy", that is, they will match as many characters as possible (longest match).

In addition to the `{x,y}` (x times at least, y times at most) quantifier, there are these repetition operators:

`*` A star symbol will match the preceding character class zero or more times.

`+` A plus symbol will match the preceding character class one or more times.

`?` A question mark will match the preceding character class zero or one time.

__>>__

#### Escaping Special Characters

You've seen us use characters such as these `*+?.[]{}` as special characters that have special meaning in a regular expression. What if you want to include one or more of these special characters as a literal character?  For example, what if you wanted a pattern to match a number that includes a decimal point? To do this, you would have to _escape_ the special character, `.`, by preceding it with a `\` (backslash).

__>>__

#### Regular Expressions in JavaScript

Before we begin to learn more complex regular expressions, let use the console in Chrome's Dev Tools to work them in JavaScript.

In JavaScript, regular expressions are also objects that can be created using a _regular expression literal_, or with the _RegEx()_ constructor function.

The literal syntax is used like this:

```javascript
var re = /cats?/;
```

You will probably prefer to use the literal syntax if you know the pattern you want to use in advance.  However, using the constructor allows you to pass in a string, which of course can be a variable that holds a string value like this:

```javascript
var s = "cats?";
var re = new RegExp(s);
```

One of the methods you can call on a JS regular expression is `test(strToTest)` which will return `true` or `false` depending upon whether there is at least one match. For example, using the regex created above, `re.test('cat')`, `re.test('cats')` and `re.test('catsup')` would all return true, however, `re.test('cas')`, would return false.

__>>__

[These docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) discuss working with regular expressions in JavaScript, including the methods on _Strings_ as well as the _test()_ and _exec()_ methods of the _regular expression_ object.

#### Anchors and Boundaries

Anchors and boundaries are unique in that they don't match a character, instead they match a position.

The `^` symbol is used to match the start of the string, or line in the case of a multiline regex.

The `$` symbol matches the end of the string.

These _anchors_ allow us to write patterns that match strings that contain only the word(s) we are interested in, but will not match if there are extra characters contained in the search string.  For example, the regex `dog` will return _true_ when tested against any of these strings: "dog", "dogs" and "My dog is named Spot".  However, the regex `^dog$` will match only the string "dog".

We also have available `\b`, which matches at a position called a _word boundary_. The `\b` will match any of the following:

- Before the first character in the string.
- After the last character in the string.
- Between two characters in the string where one character is a word character and the other is a non-word character such as a space, tab, or newline.

The `\b` easily allows us to search for whole words only. For example, earlier we had a regex of `/cats?/` that would match the strings "cat", "cats" and "I like catsup".

__YOU DO: Modify the regex above so that will not match the string that included "catsup".__

#### Grouping and Capturing

Parentheses are used inside regular expressions to create groups that can then have a quantifier applied to the entire group.

Ruby can create regular expressions using the forward slash delimiters the same way JavaScript does. They can also be created by calling `Regexp.new(the_pattern)`.

Lets explore using _grouping_ with the Interactive Ruby Shell (IRB).

Lets say we wanted to match an IP Address. Ignoring the fact that we should limit the numbers to between 0 and 255, we know we could write something like this:
`\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}`
But using grouping we can shorten this to:
`(\d{1,3}\.){3}\d{1,3}`.

Try it out in Ruby like this:

```ruby
/(\d{1,3}\.){3}\d{1,3}/.match("123.45.6.289")
```

#### Alternation

Alternation allows us to easily search for one of several characters or words.

If you wanted to search for either of these  sentences: "I have a dog."; "I have a cat."; "I have a bird."; or "I have a fish.", you could write this regex `I have a (dog|cat|bird|fish)`.

__>>__

Ruby has plenty of methods that take advantage of regular expressions:

[Ruby Regexp class](http://ruby-doc.org/core-2.2.0/Regexp.html) 

[Ruby String class](http://ruby-doc.org/core-2.2.0/String.html)

#### Moving Forward

We've visited the core of regular expressions, however, there's plenty of more features that make them even more powerful.

You will surely cross paths with regular expressions during your career as a developer. And when you do, as usual, documentation will be your friend.  There are also regex playgrounds like this great site: [Nice RegEx Tester and Learning Playground](http://www.regexr.com/)

## Lab

Have fun testing your regular expression knowledge by writing and testing patterns that can be used to match the following:

An American Express Card number which always begin with 34 or 37 and total 15 digits.

`3[47]\d{13}`

Full U.S. Phone Number: +1-(555)-555-5555

`\+1-\(\d{3}\)-\d{3}-\d{4}`

A date in the format: YYYY-MM-DD. YYYY can start with either 19 or 20. DD can be anything from 01 to 31, regardless of the month.

`(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])`

An integer between 0 and 255

`([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])`



## References

[RegEx Quick-Start & Cheat Sheet](http://www.rexegg.com/regex-quickstart.html)

## Essential Questions

- What is a Regular Expression?
  
  A sequence of characters that define a search or matching pattern.
  
- What Regular Expression could be used to match a string representing a social security number in this format: `xxx-xx-xxxx`?

  `\d{3}-\d{2}-\d{4}`
