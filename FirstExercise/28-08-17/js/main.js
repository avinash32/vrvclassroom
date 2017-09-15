// does all the assignments and checking functions

var todomain = (function(){
	
	var toDoElements = {};
	//to make the variable global
	window.toDoElements = toDoElements;
	
	document.addEventListener("DOMContentLoaded", function(event) {
		console.log("DOM loaded");
		var preloadedItems = ["Eat","sleep"];
		preloadedItems.map(function(item)
			{
				todoitems.timeForNewToDoItem(item);
			});
			(function(){
			var newInputItem = document.getElementById("newToDoItem");
			var ulElement = document.getElementById("itemContainerId");
			var clrscr = document.getElementById("clearScreen");
			ulElement.addEventListener("click",todoitems.assignListeners);
			clrscr.addEventListener("click",clearScreen);
			newInputItem.addEventListener("keydown",check);
		})();
	});
	
		
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
	check = function(event){
		console.log("Keydown event listened");
		if(event.keyCode === 13){
			console.log("Enter key pressed, going to add new items");
			var newItem = document.getElementById("newToDoItem").value;
			todoitems.timeForNewToDoItem(newItem);
		}
	}
	
		//clear screen function
	function clearScreen(){
		var id = "clearScreen";
		todoitem.removeElements(id);
	}
	
	return {
        storeElements   : storeElements, 
        check : check
    }
})();