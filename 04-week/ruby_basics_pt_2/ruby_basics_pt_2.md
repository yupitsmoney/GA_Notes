<img id="icon" src="https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png">

#WDI - Collections, Conditionals & Loops


---

##Agenda

*	Iteration - Loops
*	Collections
	*	Arrays
	*	Hashes
*   Conditionals

---


##Iteration
###Repetition
###Repetition
###Repetition



---


##Iteration (Ruby-esque Loops)
###Times Iterator

	3.times do
		puts "going…"
	end
	puts "gone"

	# going...
	# going...
	# going...
	# gone
---


##Iteration (Ruby-esque Loops)
###.upto

	1.upto(3) do |num|
		puts "#{num}. going"
	end

	# 1. going
	# 2. going
	# 3. going

---


##Iteration (Ruby-esque Loops)
###.downto

	3.downto(1) do |guess|
		puts "You have #{guess} guesses left"
	end

	# You have 3 guesses left
	# You have 2 guesses left
	# You have 1 guesses left

---


##Iteration (Ruby-esque Loops)
###for loop

	for i in 0..3
	puts "The value of local variable is #{i}"
	end

	# The value of local variable is 0
	# The value of local variable is 1
	# The value of local variable is 2
	# The value of local variable is 3

---



##Iteration (Ruby-esque Loops)
###Less common in Ruby

*	These loops are less common in Ruby, but good to know as a programmer.

	*	X.times
	*	upto
	*	downto
	*   for

* For additional help with syntax, see the Resources at the end of the slides.

---


##Conditional Loops

	count = 10
	while count > 0
		puts "Looping"
		count -=1
	end

	count = 10
	until count < 1
		puts "Looping"
		count -= 1
	end

	count = 10
	loop do
		break if count < 1
		puts "Looping"
		count -= 1
	end

---


<img id ='icon' src="../assets/icons/Exercise_icon_md.png">
##Loop

* OCD Parrot! Create a method that will take a string parameter and print out the string exactly three times.
* Create a conditional loop that will start with a count of 2 and count up by even numbers until it gets to 20.

---


##Iteration Recap
###Recap

* 	Iteration in programming allows us to keep our code DRY
* 	Loops are used to repeat lines of code
* 	Common or Ruby-esque loops are
	*	.times
	*	.upto
	*	.downto
	* 	.each (we will see in a moment)

---


##Collections
###Working with Collections in Ruby

---


##Collections
###Arrays

![accordion folder](../assets/ruby/accordian.jpg)

---


##Arrays
###Find by Index

![Array Indexing](../assets/ruby/array_index_diagram.png)

---


##Arrays
###Find by Index

	my_array = ["NYC", "LA", "SYD", "LDN"]
	my_array[0] #"NYC"
	my_array[1] #"LA"
	my_array[-1] #"LDN"

---


##Arrays
###Find by Position

![Array position](../assets/ruby/arrays_position_diagram.png)

---


##Arrays
###Find by Position

	my_array = ["NYC", "LA", "SYD", "LDN"]
	my_array.first #"NYC"
	my_array.last #"LDN"

---


##Arrays
###Array Methods

	name = "Keyan"
	name.upcase

	my_array = ["NYC", "LA", "SYD", "LDN"]
	my_array.reverse
	my_array.sort
	my_array.shuffle


---


<img id ='icon' src="../assets/icons/Exercise_icon_md.png">
##Arrays
* Create an array called ice_cream_flavors. Add 3 or 4 flavors to the array.
* Print the second flavor to the console.
* Print a shuffled version of the array.
* Print an ordered version of the array.

---


##Arrays
###Recap


*	A collection of data
*	Can search an array by index or position
*	Arrays are objects and therefore have methods.

---


##Collections
###Hashes

![Labeled Accordion](../assets/ruby/labeled_accordian.jpeg)


####What is a hash?

* A collection of objects with corresponding keywords (keys must be unique)
* Use when order doesn't matter.
* Use when you have more complex collection of data.



##Real World Examples?

___
#####?
####?
###?
___

###Creating a Hash

```
# Blank hashes...
empty_hash = Hash.new
# => {}
another_empty_hash = {}
# => {}
hash_with_value = {:name => "Money"}
# => {:name => "Money"}
```

####What's going on here?
* Hash ~ class
* =	~ assignment operator
* :name	~ symbol (class) that serves as a key
* “Money”	~ string (class) value
* => ~ hash rocket (assignment operator/)

```
# Here's the syntax with key:value

person = {:name => "Tony Stark", :age => 35, :titles => ["Genius", "Billionaire", "Playboy", "Philantrhopist"]}

person[:name]
# like an array, we use the brackets but instead of the index, we provide the key

person[:age]
# The two brackets are like a crosshairs used to line up precisely on a target. These brackets mean, "I am looking for `age` somewhere in this `person` object. Ready...aim...data."

person[:titles][0]
# => "Genius"

person[:random]
# => nil

# you can change existing values
person[:age] = person[:age] + 1

# or create new values
person[:alias] = "Ironman"
person[:deepest_darkest_secret] = "Has daddy issues"

person
person.delete(:deepest_darkest_secret)
person

person.keys
perssn.values

# check if a key exists in the hash

person.keys.include?(:name)
# => true
person.keys.include?(:secret)
#=> false

person.keys.include?(35)
# => false
person.values.include?(35)
#  => true
```
<img id ='icon' src="../assets/icons/Exercise_icon_md.png">


Create a hash called `class_data` with the following keys:

- :course_name, which should correspond to "WDI"
- :student_count, which should correspond to number of students, say 25
- :instructor, which should itself be a hash with the following keys
    - :name ("Keyan")
    - :gender ("M")
    - :can_program (true)
- get the student count from the hash
- get the instructor name from the hash

##Collections
###Array of Hashes

	users = [
		{:user => "Keyan Bagheri", :role => "Instructor"},
		{:user => "Edwin Elegre", :role=> "Expert-in-Residence"}
		{:user => "Jeff Wu", :role => "Student"]
	]


	# Alternate syntax for Ruby 1.9+

	users = [
		{user: "Keyan Bagheri", role: "Instructor"},
		{user: "Edwin Elegre", role: "Expert-in-Residence"},
		{user: "Jeff Wu", role: "Student"}
	]


---


##Iterating Over Collections
###.each

	ga_markets = ["NYC", "LA", "SYD", "LDN"]

	ga_markets.each {|market| puts market}


---


<img id ='icon' src="../assets/icons/Exercise_icon_md.png">
##Lab Time
* Print out each of our icecream flavors.
* Print out all of our users names and roles on one line each.

---


##Conditional Logic
###Decision Time 

It's either TRUE or FALSE (like booleans)

If you are greater than 18 
you are an adult

	if age > 18
		puts "You are an adult"
	end

---


##Conditional Logic
###Multiple Conditions


	guess = 7 
	if guess > 5
		puts "Too high!"
	elsif guess < 5
		puts "Too Low!"
	else
		puts "You've guessed my hidden digit!"
	end

---

##Conditional Logic
###Multiple Conditions

![truth_table](../assets/ruby/truth_table.png)

---

<img id ='icon' src="../assets/icons/Exercise_icon_md.png">
##Lab Time
* McDLP (McDonald's Lawsuit Protection App). Create a conditional that checks if your coffee is too hot. If the temp of the coffee is above 100 degrees then you should print out that it's too hot to serve. Otherwise you should print out that its safe to drink.
* Add another condition to make sure that the coffee is not served too cold. If the cup is less than 80 degrees then it should not be served. Help our McCafe baristas hit the sweet spot!

---



##Recap
###Iterating Over Collections



---


## Resources: Collections, Loops and APIs


###Cheat Sheet

####Arrays

__Creating Arrays__

```ruby
my_array = ["Apples", "Oranges", "Pears"]
```

> ["Apples", "Oranges", "Pears"]

```ruby
my_array = Array.new
```

> []

```ruby
Array.new(3)
```

> [nil, nil, nil]

```ruby
Array.new(3, "WDI")
```

> ["WDI", "WDI", "WDI"]

__Assessing Elements__

```ruby
arr = ["NYC", "LDN", "LA", "SF", "BOS", "BER"]
arr[0]
arr[100]
arr[-3]
```

> NYC

> nil

> SF

```ruby
arr[2, 3] #=> [3, 4, 5]
```

> ["LA", "SF", "BOS"]

```ruby
arr[1..4]
```

> [LDN, LA, SF, BOS]

####Hashes

```ruby
	GA_Markets = { "New York City"=>"NYC", "London"=>"LDN", "Los 	Angeles"=>"LA", "San Francisco"=>"SF", "Boston"=>"BOS", 	"Berlin"=>"BER" }

	GA_Markets["London"]
```

> "LDN"

```ruby
	super_heros = { batman: "Bruce Wayne", superman: "Clark Kent", 	spiderman: "Peter Parker"}

	super_heros[:superman]
```

> "Clark Kent"

####Loops

__Iterator loop__

```ruby
4.times do
  puts "This will be printed 4 times"
end
```

> This will be printed 4 times

> This will be printed 4 times

> This will be printed 4 times

> This will be printed 4 times

__Each Loop__

```ruby
		# A list of GA Courses
		courses = [ "WDI", "UXDI", "BEWD", "FEWD" ]

	names.each do|n|
  		puts "GA has a course on #{n}"
	end
```

> GA has a course on WDI

> GA has a course on UXDI

> GA has a course on BEWD

> GA has a course on FEWD



###Still Feel Lost?
####Catch Up With These Resources


-	Arrays [Ruby Docs](http://ruby-doc.org/core-2.0/Array.html)
-	Hashes [Ruby Docs](http://ruby-doc.org/core-2.0/Hash.html)
-	Hashes and Arrays [Tutorial](http://www.codecademy.com/courses/ruby-beginner-en-F3loB?curriculum_id=5059f8619189a5000201fbcb)
-	What is iteration - [article](http://www.computerhope.com/jargon/i/iteration.htm)
-	[*“Ruby-esque”* Loops](http://ruby.about.com/od/rubyfeatures/a/loops_2.htm) see page 1 for more ruby loops not covered in class.
