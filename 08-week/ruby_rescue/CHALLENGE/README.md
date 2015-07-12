![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")(is awesome)

# Ruby Rescue

Whenever there's things that are out of your control, or could possible go horribly wrong, it's good practice to start working with rescues – they'll save you when there are errors.

**The object here is *not* to fix the code, it's to handle errors.** Assume the code has to work the way that it does, and instead write supporting code that'll be informative if & when it breaks.

## Learning Objectives:
- Understand the syntax of rescuing code, and when to do it
- Start programming to recover gracefully from errors

###Raising an exception.

An **exception** is a special kind of object, an instance of the class Exception or a descendant of that class that represents some kind of exceptional condition; it indicates that something has gone wrong. When this occurs, an exception is raised (or thrown). By default, Ruby programs terminate when an exception occurs. But it is possible to declare exception handlers. An exception handler is a block of code that is executed if an exception occurs during the execution of some other block of code.

**example:**

```ruby
def raise_exception  
  puts 'I am before the raise.'  
  raise 'An error has occured'  
  puts 'I am after the raise'  
end  
raise_exception
```

###Handling exceptions.

To do exception handling, we enclose the code that could raise an exception in a begin-end block and use one or more rescue clauses to tell Ruby the types of exceptions we want to handle.

**example:**

```ruby
def raise_and_rescue  
  begin  
    puts 'I am before the raise.'  
    raise 'An error has occured.'  
    puts 'I am after the raise.'  
  rescue  
    puts 'I am rescued.'  
  end  
  puts 'I am after the begin block.'  
end  
raise_and_rescue
```

![GeneralAssemb.ly](https://raw.githubusercontent.com/ga-students/WDI_DTLA_3/master/assets/icons/Exercise_icon_md.png?token=AGbhZUMpXq1hBCJg88iJZI0qnQPKC6THks5VikX_wA%3D%3D)

######Partner up and go to town on these challenges.

#### 01. Basic Rescue

Unfortunately, you can't add together two totally different types of objects, and we've got here a string & and integer. Rather than making that work, wrap the example in a ``begin/rescue/else/end`` that will explain when it breaks *why* it can't be done.

#### 02. Rescue from a Bad Request

In this, we'll use the ``open-uri`` library that comes with Ruby to grab the contents of a webpage and spit it out. This works great – unless there's a url that doesn't work. We've included one that will, and another that won't. Write some supporting code that'll ``put`` a helpful error message out saying it didn't work with the URL we put in.

#### 03. Ensuring *Something* Happens

Ruby's ``rescue`` has a few more methods than just ``begin``, ``rescue``, ``else``, and ``end`` – research and figure out a small extra method that'll make sure to ``puts`` something a nice, friendly comment about the URL no matter what.

#### 04. Descriptive Rescues

Ruby's rescue lets you specify which error types you want to rescue from, and the default is the generic ``StandardError``, which will contain at least some helpful information about what went wrong. 

Research how to ``rescue`` from ``StandardError`` and use the output of it to ``puts`` a more descriptive error to the terminal.

#### 05. Calling Errors When You Need Them!

In Ruby, *everything* is an object, including the errors that get called. But maybe, when something goes wrong, you want to call a specific error, and give a particular message.

In this example, we've opened up our String class and added our own custom method, to see if a string is awesome or not. If something isn't awesome, figure out how you can call a ``StandardError`` and tell it what message you want passed in.

#### 06. Custom Errors Are More Descriptive, and Every Error Is An Object

Sometimes it's more helpful to call a custom error, one of your own making – sometimes that can help be more descriptive for when you're trying to do a certain thing when an error happens. Since every error is a Ruby object, you can make on yourself! 

Using our method from last time, make a custom error class, call it when something *isn't* awesome, and then write a ``begin/rescue`` that will handle it.

Tip: Research inheriting from ``StandardError``


#### 07. Bonus Challenge

Raising an error in Ruby totally stops our code, and boots it out to the error catcher. If you're feeling ambitious, research and make an example of how Ruby can handle an error *without* completely abandoning the code that follows. You can use our ``awesome`` example as a starting point.