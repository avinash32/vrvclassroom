// does all the assignments and checking functions

(function(){
	
	var toDoElements = {};
	//to make the variable global
	window.toDoElements = toDoElements;
	
	document.addEventListener("DOMContentLoaded", function(event) {
		console.log("DOM loaded");
		var preloadedItems = ["Eat","sleep"];
		preloadedItems.map(function(item)
			{
				timeForNewToDoItem(item);
			});
		(function(){
			var newInputItem = document.getElementById("newToDoItem");
			var ulElement = document.getElementById("itemContainerId");
			var clrscr = document.getElementById("clearScreen");
			ulElement.addEventListener("click",assignListeners);
			clrscr.addEventListener("click",clearScreen);
			newInputItem.addEventListener("keydown",check);
		})();
	});
	
	window.storeElements = function(insertedItems){
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
	window.check = function(event){
		console.log("Keydown event listened");
		if(event.keyCode === 13){
			console.log("Enter key pressed, going to add new items");
			var newItem = document.getElementById("newToDoItem").value;
			timeForNewToDoItem(newItem);
		}
	}
	
		//clear screen function
	function clearScreen(){
		var newInputItem = document.getElementById("newToDoItem");
		var clrscr = document.getElementById("clearScreen");
		newInputItem.removeEventListener("keydown",check);			
		clrscr.removeEventListener("click",clearScreen);
		document.body.innerHTML = null;
		console.log("Clear screen, inputbox Event listener removed and screen cleared");	
	}
})();