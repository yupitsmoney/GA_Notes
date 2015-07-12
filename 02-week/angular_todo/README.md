#To Do...or...Not To Do!

###Learning Objectives
* Get hands on experience coding an Angular app from start to finish!
* Understand how an Angular controller interacts with the view to display _and_ manipulate our data!
* See more of Angular's awesome two-way data binding in action!

###Roadmap
* Today's lesson will be a code along.
* The finished code will be available in the class repo at the end of the day.

###Angular Directives We Will Use Today
		ng-app
		ng-controller
		ng-model
		ng-repeat
		ng-class
		ng-click

###Steps for Building our Angular Todo List


1. Do a `git pull` in the class repo.
2. Copy the angular_todo folder to your 03_week working directory and then CD into this directory.  Follow that up with a `subl .` to open our project in Sublime.
3. define our Angular app module in main.js file:

		//this goes in our main.js file
		angular
			.module("todoApp", []);
			
4. add `ng-app="todoApp"` to the body tag of our html file
5. put a simple expression inside our body tag to make sure that our app is hooked up properly:  `{{ 1 + 1 }}`
6. create a file inside your js folder called "TodosController.js"
7. add this file in a script tag to your html file
8. define our controller in the TodoController.js file:

		angular
			.module("todoApp")
			.controller("TodosController", TodosController);
		
		function TodosController(){
		
		}
		
9. create a div inside our body tag and give it `class="wrapper"`.  This will be the container that our entire webpage will sit inside of.
10. add `ng-controller="TodosController as todos"` to our div.
11. now, let's test our controller to make sure it is hooked up properly.  add this variable to our controller: `this.test = "Testing our controller!";`. Then we will try to access this in our view and see if it works.
12. let's give our controller some data to work with:

		this.todoList = [
			{task: "build an awesome todo list", done: false},
			{task: "get super good at Angular", done: false},
			{task: "party on code", done: false},
			{task: "tackle the bonus challenges for this lesson", done: false},
			{task: "take a nap", done: false}
		];

13. Before we render these tasks in our browser, let's give add some structure to our html.  Let's create a header for our page.  Inside our wrapper div, let's add a `<header>` and a `<main>` tag.

		<header>
			<h1>YOU'VE GOT {{ ??? }} THINGS TO DO!</h1>
		</header>
		
		<main>
			<!-- we'll add the rest of the html for our app inside here -->
		</main>

14. Now, we are going to use `ng-repeat` to display all of our todos on our page.  

		<section class="todo-list">
			<ul>
				<li ng-repeat="todo in todos.todoList">
					<input class="checkbox" type="checkbox" ng-model="todo.done">
					<span>{{ todo.task }}</span>
				</li>
			</ul>
		</section>

15. Let's take a closer look at what's going on with that checkbox and how it's affecting our data.
16. Add `ng-class="{done: todo.done}"` to the span tag to dynamically apply styling when a task is marked as done.
17. Wouldn't it be great if we could add new items to our todo list?!  Let's give ourselves an input box and a button for that:

		<section class="add-todo">
			<input class="text-box" type="text" placeholder="I need to..." ng-model="todos.text">
			<button class="btn btn-add"">+</button>
		</section>
18. That's pretty cool, but our button doesn't do anything yet.  We need to add a function to our controller!

		function addTodo(){
			this.todoList.push({task: this.text, done: false});
		}
		
		//this will add our new function as a property on our controller
		this.addTodo = addTodo;

19. Sweet!  Now, let's add `ng-click="todos.addTodo()"` to our button element to call our function.
20. It sure would be nice if our text box would clear out after we add a todo.  We can do that!  We just need to add `this.text = null` to our addTodo() function.
21. Alright, now that we are able to add tasks and mark them as done, let's figure out how to actually delete tasks from our list.  We're going to need a function for that!  Let's add this to our controller:

		function deleteTodo($index){
			this.todoList.splice($index, 1);
		}
		
		//this will add our new function as a property on our controller
		this.deleteTodo = deleteTodo;	

22.  Now, we need to add a button for each task that has the `ng-click` directive attached.  Let's put the following snippet of code just below the `span` tag inside our ng-repeat:

		<button class="btn btn-delete" ng-click="todos.deleteTodo($index)">x</button>

23. Let's add a counter that tells us how many tasks have been completed.  Another function in our controller, please!

		function completedTodos(){
			var count = 0;
			for(var i = 0; i < this.todoList.length; i++){
				if(this.todoList[i].done){
					count++;
				}
			}
			return count;
		}
		
		//this will add our new function as a property on our controller
		this.completedTodos = completedTodos;
		
24. Now, let's bind this data to our view.  We can add the following code inside the `<header>` tag of our html:

		<h4>{{ todos.completedTodos() }} things completed</h4>

25. Cool--this todo app is getting pretty awesome!  The last thing we'll do is add a counter that tells us how many tasks have not been completed.  How can we do that?  You guessed it: another function in our controller!

		function remainingTodos(){
			var count = 0;
			for(var i = 0; i < this.todoList.length; i++){
				if(this.todoList[i].done === false){
					count++;
				}
			}
			return count;
		}
		
		//this will add our new function as a property on our controller
		this.remainingTodos = remainingTodos;

26. Okay, let's bind this data to our view and then we're done!  Replace the `<h4>`tag inside your `<header>` tag with the following code:

		<h4>{{ todos.completedTodos() }} things completed | {{ todos.remainingTodos() }} things remaining</h4>

####Bonus Stuff to Make _You_ Super Good at Angular!
* Display the date and time that each task was created
* Have your todo list display the newest tasks first
* Research the ngPluralize directive and figure out how to make the word "things" display as "thing" if the number that precedes it is 1.
* Add a feature that will archive all tasks that are marked as done and then remove them from the view (but not delete them from your todoList array).  Then, add a feature that will re-display the archived tasks.
* Our completedTodos() and remainingTodos() functions work, but there is a lot of repetition.  Refactor these functions into a single function that returns an object with properties called "completed" and "remaining".