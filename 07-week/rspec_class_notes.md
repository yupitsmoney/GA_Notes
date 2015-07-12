#Ruby Rspec
---

Let's dig into some really groovy testing with Rspec!

##Rspec & Ruby

###Learning Objectives
* Understand & articulate the value of testing in programming
* Be able to setup Rspec in a project
* Be able to write tests to cover:
    - Instance Methods
    - Class Methods
* Run your test suite

##What is Rspec & why do we care?

Rspec is a testing framework. It allows us to write code that tests other code. With Rspec, we write a bunch of spec (short for _specification_) files for the different Ruby/Rails files in our project.

Then, before we push our code to a production server or share it with one of our teammates, we can run the suite of rspec tests to make sure our code behaves as expected.

##Let's Write A Spec!
---

###Making A Calculator

Make a new directory called `ruby-rspec`. Inside that folder, create another folder called `lib`.

Create a new ruby file called `calculator.rb`. Then write the Ruby code below to setup a basic calculator class:

```rb
class Calculator

end
```

Now, let's add a really simply multiplication Class function that always returns '1'.

```rb
def multiply
  return 1
end
```

###Mini-Ruby Lab

Great! Now, it's your turn. In pairs, I want you to take a few minutes to write the ruby logic for the multiply method. It should:

* Take an array as it's argument
* Multiple the numbers in the array together
* Return the Integer product of the numbers

---
---

###Introducing Rspec

Let's add rspec to our project. First we need to install Rspec, which is a Ruby gem. From the Command Line, run this command: `$ gem install rspec`

Once that is installed, we can add rspec to our little project using `rspec --init`. Run that command now, from the Command Line, at the root of our project (not inside `lib`!).

```
$ cd ..
$ rspec --init
```

Rspec will tell you what it created. Let's talk about them.

* `.rspec` is a hidden file that loads Rspec and has some basic options. Whenever we run Rspec this file is run.
* `/spec` is the default spec folder where we keep all of our spec files. This is a convention for Ruby and Rails projects.
* `/spec/spec_helper.rb` is a configuration file for Rspec. We can adjust default settings, add additional testing tools, and adjust how Rspec behaves from there.

For now, we're only going to adjust one thing. In your `.rspec` file, add this line at the bottom: `--format documentation`. This changes how Rspec shows our test results. We can also do `progress`, which is a format that uses dots instead of printing each test.

###Writing A Spec

Create a file inside `/spec` called `calculator_spec.rb` (notice spec files are Ruby files... rspec is written in Ruby).

At the top of the file, we require the Ruby file we want to test. Then below we write a `describe` block.

```rb
require 'calculator' # rspec assumes this is a Ruby file and it looks by default in our project's `/lib` folder so we don't need to be more specific than 'calculator'

describe Calculator do

end
```

Let's write a test!

```rb
require 'calculator'

describe Calculator do

  # group tests inside describe blocks, one for each method. All of those are grouped inside the describe block with the class (Calculator above).
  describe ".multiply" do
    
    # Our first spec!
    it "multiplies an array of numbers together" do
      expect( Calculator.multiply([2,5,6]) ).to eq(60)
    end
  end

end
```

We group specs by the method they test. You can see above I added a `describe ".multiply" do/end` block in our test. Then we write out specs for that method inside that block.

_Convetion:_ describe blocks for a class method start with a period (`".multiply"`) and describe blocks with an instance method start with a hashtag (`#spine`).

Look at the spec inside of the `".multiply"` describe block.

The first line of the spec is it's name. That will get printed when we run rspec with the documentation format or if the test fails. The name does not mean anything or have any bearing on how the code is tests. It's just a name.

The second line `expect( Calculator.multiply([2,5,6]) ).to eq(60)` is the entire test. 

In rspec, we write everyhing as an expecation. Basically, this line says

1. When `Calculator.multiply( ... )` runs...
2. with the argument `[2,5,6]`, ...
3. we expect the result to equal the integer 60. 
4. If it doesn't, the test failed... 
5. and our code doesn't work as expected.

Let's run it! We can run all the tests in our project by going to the root of our project and using the `rspec` command:

```
$ cd .. # if you're in /lib or /spec
$ rspec
```

Green means good, Red means bad.

Now, let's add a few more tests:

```rb
describe ".multiply" do

  # ... our first test is here

  it "accepts string numbers" do
    expect( Calculator.multiply(['2', '8', '1']) ).to eq(16)
  end

  it "accepts mixed input" do
    expect( Calculator.multiply(['3', 3, 4]) ).to eq(36)
  end

  it "returns nil when it receives an empty array" do
    expect( Calculator.multiply([])).to be_nil
  end

end
```

Now that we have four tests to cover our Multiply function, run them.

Did they fail? That is expected! 

This is a common pattern in programming, it's called *Red-Green-Refactor*.

###Red-Green-Refactor

Here is the philosophy

* *Red*: Write tests before you write the actual code. These are like fences around your code that describe exactly how you want the code you're writing to work.
* *Green*: Write the code. It doesn't need to be perfect or pretty. Just write whatever code is the easiest or most obvious way. Continually run your test sweet until all your tests pass.
* *Refactor*: Once you've written code that successfully passes your tests (which are complete and rigorous, right?), you can refactor the code. Fix the ugly bits, make your code faster or easier to read. Use your tests as guides so you know your optimizing isn't breaking anything.

###Lab

Take time now to get your test suite passing, then take some time to refactor your Multiply method once it works. Do this in pairs now.

---
---

### Adding some specs

Right now our calculator has multiply but we need to take it to the next level, a calculator that can only multiply isnt really that good, our calculator is going to be pretty basic, all we really need it to do is `add`, `subtract` and `divide`. Does that mean we have to write all these tests at once?

NO! we can always write out our functionality an djust leave those tests pending for now, lets try this 
```
  describe ".add" do
    it "adds together two numbers"
  end

  describe ".subtract" do
    it "subracts two numbers"
  end
  
  describe ".divide" do
    it "divides two numbers"
  end
```
Now if we run our rspec it should say that there are 3 specs pending!

This is great a lot of times I'll just write out a lot of the functionality of something I'm trying to build as pending tests and then I go back in later and fill it all in

Let's work on the parts related to the add section for now:
      expect( Calculator.multiply([2,5,6]) ).to eq(60)

Remember the three parts of any test!
* Arrange
* Act
* Assert

```ruby
  describe ".add" do
    it "adds together two numbers" do
      # arrange
      numbers = [4,3]
      # act
      output = Calculator.add(numbers)
      # assert
      expect(output).to eq(7)
    end
    it "works with stringed numbers" do
      # arrange
      numbers = ['4','13']
      # act
      output = Calculator.add(numbers)
      # assert
      expect(output).to eq(17)
    end
  end
```


##Wrap Up
---

* Why Test?
  - Testing bring rigour and stability to programming.
  - Testing makes it easier to work on a team.
  - Testing makes it easier to ship good code and prevent regression (backsliding)
