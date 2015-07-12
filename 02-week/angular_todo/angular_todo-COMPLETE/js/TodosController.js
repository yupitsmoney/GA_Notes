angular
	.module("todoApp")
	.controller("TodosController", TodosController);

	function TodosController(){

		this.todoList = [
			{task: "build an awesome todo app", done: false},
			{task: "get super good at Angular", done: false},
			{task: "party on code", done: false},
			{task: "tackle the bonus challenges for this lesson", done: false},
			{task: "take a nap", done: false}
		];

		this.addTodo = addTodo;
		this.deleteTodo = deleteTodo;
		this.completedTodos = completedTodos;
		this.remainingTodos = remainingTodos;

		//function that allows us to add new todos to our todoList
		function addTodo(){
			this.todoList.push({task: this.text, done: false});
			this.text = null;
		}

		//function that allows us to delete specific todos from our todoList
		function deleteTodo($index){
			this.todoList.splice($index, 1);
		}

		//returns a count of the tasks that have been marked as done
		function completedTodos(){
			var count = 0;
			for(var i = 0; i < this.todoList.length; i++){
				if(this.todoList[i].done){
					count++;
				}
			}
			return count;
		}

		//returns a count of the tasks that have not been marked as done
		function remainingTodos(){
			var count = 0;
			for(var i = 0; i < this.todoList.length; i++){
				if(this.todoList[i].done === false){
					count++;
				}
			}
			return count;
		}

	}
	