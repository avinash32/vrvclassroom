// does all the assignments and checking functions

window.Todo = window.Todo || {};
	Todo.AppView = (function(){
	
	var toDoElements = {};
	//to make the variable global
	window.toDoElements = toDoElements;
	
	document.addEventListener("DOMContentLoaded", function(event) {
		console.log("DOM loaded");

		var preloadedItems = ["Eat","sleep"];
		preloadedItems.map(function(item)
			{
				addToItem(item);
			});
		(function(){
			var newInputItem = document.getElementById("newToDoItem");
			var ulElement = document.getElementById("itemContainerId");
			var clrscr = document.getElementById("clearScreen");
			var width = window.innerWidth;
			ulElement.addEventListener("click",Todo.itemsView.assignListeners);
			clrscr.addEventListener("click",clearScreen);
			newInputItem.addEventListener("keydown",init);
		})();
	
	});
		addToItem = function(item) {
					Todo.itemsView.add(item);
					}
					
		remove = function() {
					Todo.itemsView.remove();
					}
		display = function() {
					Todo.itemsView.display();
				}
				
		storeElements = function(insertedItems){
		console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
		// storing the todo items using objects inside an object
		
		//getting the id of the inserted item to use as index
		idOfTheItem = insertedItems.id;
		//storing the javascript object inside another object
		toDoElements[idOfTheItem] = insertedItems;
		console.log("Stored items summary :");
		console.log(toDoElements);
	}
	
		//checks for enter key
	init = function(event){
		console.log("Keydown event listened");
		if(event.keyCode === 13){
			console.log("Enter key pressed, going to add new items");
			var newInputItem = document.getElementById("newToDoItem");
			var newItem = newInputItem.value;
			Todo.itemsView.add(newItem);
		}
	}
	
		//clear screen function
	function clearScreen(){
		var id = "clearScreen";
		Todo.itemView.remove(id);
	}
	
	
	return {
        storeElements   : storeElements, 
        init : init,
		//checkresolution : checkresolution
    }

})();