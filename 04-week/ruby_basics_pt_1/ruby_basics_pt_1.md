# Ruby Basics, Part 1

## Learning Objectives
Students will be able to:

- Identify Ruby data types
- Use variables
- Define and call a method

## Roadmap

1. What's Ruby?
2. Lets Play with Ruby!


## 1. What's Ruby?

####YOU DO: Research the background of the Ruby Language (not Ruby on Rails) and its creator's intentions
- "Matz" (Yukihiro Matsumoto)
- mid-1990's
- Make Ruby "natural", in a way that mirrors life.
- Fun to use, less typing
- OOP Language
   - Everything is an Object
   - Objects are created from Classes
- General Purpose: Both local & servers

__DISCUSS: Interpreted/scripting languages vs. compiled languages__

## 2. It's Ruby Time!

- New `.rb` file
- Text editor and terminal side by side.
- Execute Ruby file in terminal using `ruby` command (interpreter)

### `print`, `puts`, `gets` & Strings
---

###### Hello World / no semicolons or `()` necessary
```ruby
puts "Hello World"
```
#### ASK: Lets contrast this with JS

###### No variable declaration necessary like `var` in JS
```ruby
name = "Bill"
puts name
```
###### `gets` / no `()` necessary to invoke method
```ruby
name = gets
puts name
puts(name)
```
###### `print` / variable naming / concatenation
```ruby
print "What's your name? "
first_name = gets
puts "Hello " + first_name
```
Snakecasing variable names is the convention.
###### `length` / `gets` includes a new line character
```ruby
print "First name? "
first_name = gets
puts first_name.length
```
##### What happened?
###### `chomps` / chaining
```ruby
print "First name? "
first_name = gets.chomp
puts first_name.length
```
#### YOU DO: Write the code to ask for a first and last name, then say hello to the user using both their first and last name

### Numbers
---

__ASK: How many types of numbers do we have in JS?__

Unlike JS, Ruby has a few different types, however, usually we don't have to worry about which type we are using - Ruby will usually convert as necessary.

```ruby
how_much = 10
how_much_more = 5.5
puts how_much + how_much_more
```
###### Everything's an object / check an object's type

__ASK: Is anyone curious about the type of objects the above variables are?__

```ruby
how_much = 10
how_much_more = 5.5
total = how_much + how_much_more
puts how_much.class
puts how_much_more.class
puts total.class
```
###### Conversion methods

```ruby
print "First number to add: "
first = gets.chomp
print "Second number to add: "
second = gets.chomp

puts first + second
```

__ASK: What happened?__

Our input was treated as a string!

We have to convert to a type of number:

```ruby
puts first.to_i + second.to_i
# or, another example
puts first.to_i + second.to_f
```

#### PAIR: Write the code to ask for a person's name and age, then print back the message: "{name} will be {x} years old in 5 years."

###### String Interpolation

__ASK: How many of you had to save the age plus 5 computation in a new variable so that you could print it out?__

Ruby has multitudes of handy methods and helpers.

__ASK: What if after we gets the name & age, we could print out our last exercise's message in one line of code with a single pair of quotes?  Then would you be a believer?__ 

```ruby
print "What's your name? "
name = gets.chomp
print "How old are you? "
age = gets.chomp

puts "#{name} will be #{age.to_i + 5} years old in 5 years."
```
__DISCUSS the expressions__

__ASK FOR ?__

###### Everything an Object / Code Blocks
__ASK: Everything in Ruby is a ?__ -> Object

```ruby
2.times { puts "Hello World" }
```
The braces define a _code block_.

Another way to define a _code block_ is with the keywords `do` and `end` like this:

```ruby
3.times do |n|
	puts n
end
```
__YOU DO: Write the Ruby code that will print out:__

```
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```
__Using a single line of Ruby__

```ruby
5.times do |n| puts "Number: #{n + 1}" end
```

__QUESTIONS / REVIEW?__

### Ranges
Ranges - a concept we're all familiar with.

For example, the days in January range from 1 to 31.

Ruby makes working with ranges very convenient:

###### ranges / each method
```ruby
digits = 0..9
digits.each { |d|
    print d
}
```
Notice how we called a method on the range object?

Lets look at another example of a Ruby range
###### non-inclusive range
```ruby
('a'...'e').each do |letter|
    puts "Letter in loop: #{letter}"
end
```
__ASK: What's different about this range?__

letters instead of numbers

... operator does not include the last item of the range.

###### case

Lets look at one last example of ranges and see Ruby's `case` statement in action:
 
```ruby
score = 70

result = case score
    when 0..69 then "Must be a quiz on Firebase :("
    when 70..79 then "You got by..."
    when 80..89 then "Not bad."
    when 90..98 then "Congrats!"
    when 99..100 then "Berkeley's calling :)"
    else "Invalid Score"
end

puts result
```
__DISCUSS:__
ranges used as conditions
case statement

__ASK: Questions?__

__PAIR: Ask the user to enter a character and print out:__

```
The character {char} is in the first/second half of the alphabet!
```

Here's one way to do it:

###### `downcase`, strings are arrays of chars, different use of `case`

```ruby
print "Enter a character: "
char = gets.downcase[0]
print "The character '#{char}' is in the "
case char
    when 'a'..'m'
        print "first"
    when 'n'..'z'
        print "second"
end
puts " half of the alphabet!"
```
`Case` uses `then` to put code on same line.

__ASK: Any questions about ranges?__

### Methods

__ASK: What do we use in JS to organize code with a common purpose and that we may want to call multiple times?__

_functions_

Ruby also has methods!

__WE DO: Review above code and have students identify the methods__

So, we've been using methods that others have written for us, lets write one of our own:

Here's the most basic form:

```ruby
def method_name
	# code goes in here
end
```
__DISCUSS__

- `def` / `end` block
- naming convention - lowercase
- comments start with a `#`

Lets step it up:

```ruby
def embiggen(str)
   str = "#{str}!!!"
   str = str.upcase
   return str
end

puts embiggen('hello world')
```
__DISCUSS: What can you tell me about this method definition__

- Parameter list in parens just like JS

Don't forget, one of the goals for Ruby is to write less code, lets see another example of this by tweaking this method:

```ruby
def embiggen(str)
   str = "#{str}!!!"
   str.upcase
end

str = 'hello world'
puts embiggen(str)
puts str
```
__DISCUSS the method__

- The last expression in a method is returned automatically
- Arguments are passed in by 'value'

## Mini-Lab

#### Write a Ruby method called _calculate_.  It will accept three arguments, two numbers & a single character string that will represent one of the following operators: '+'; '-'; '*'; '/'; or ''%'

```ruby
def calculate(num1, num2, op)
    case op
        when '+' then num1 + num2
        when '-' then num1 - num2
        when '*' then num1 * num2
        when '/' then num1.to_f / num2
        when '%' then num1 % num2
    end
end
```

## Essential Questions
- What Ruby method prints out information with a new line after it?

`puts`

- Write a Ruby method named _say_hello_ that accepts as a parameter a person's name as a string and will print out "Hello, " before the person's name using interpolation.

```ruby
def say_hello(name)
    puts "Hello, #{name}"
end
```

## References

[Ruby's official documentation](http://ruby-doc.org/)