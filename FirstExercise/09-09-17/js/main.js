// does all the assignments and checking functions

	window.Todo = window.Todo || {};

	Todo.AppView = (function(){	
	
		var newInputItem;
		var toDoElements = Todo.Store.toDoElements;
		
		init = function(event){
			//initializing item.js , items.js and store.js
			var preloadedItems = Todo.Store.init();
			var itemInit = Todo.itemView.init();
			var itemsInit = Todo.itemsView.init();
			(itemInit && itemsInit) ? console.log("item and items initialized") : console.log("item and items initialization failed");
			preloadedItems.map(function(item)
				{
					add(item);
				});
			(function(){
				var clrscr = document.getElementById("clearScreen");
				clrscr.addEventListener("click",clearScreen);
				newInputItem = document.getElementById("newToDoItem");
				newInputItem.addEventListener("keydown",check);
			})();
			console.log("Keydown event listened");
		}
			
				
		add = function(item) {
			//AppView calls itemView to add item to the DOM as well as it calls Store to store the item
			var statusOfAddition = Todo.itemsView.display(item);
			(statusOfAddition) ? Todo.Store.storeElements(item) : alert("Couldn't add new item"); 
		}
		
		// store is only accessible by AppView. itemView and itemsView cannot access store.
		storeElements = function(insertedItems){
			Todo.Store.storeElements(insertedItems);
		}
		
		deleteFromStorage = function(id){
			delete toDoElements[id];
			Todo.Store.toDoElements = toDoElements;
			console.log("Item deleted from storage");
			console.log(toDoElements);
		}
		
		check = function(){
			if(event.keyCode === 13){
				console.log("Enter key pressed, going to add new items");
				var newItem = newInputItem.value;
				add(newItem);
			}
		}
		
		changeState = function(state,id){
			(state == "checked") ? Todo.Store.toDoElements[id].state = "checked" : Todo.Store.toDoElements[id].state = "unchecked";
			Todo.Store.toDoElements = toDoElements;
			console.log("item state changed");
			console.log(toDoElements);
		}
		
		function clearScreen(){
			var id = "clearScreen";
			Todo.itemsView.remove(id);
		}
		
		// As soon as the DOM loads, I'm calling init function
		document.addEventListener("DOMContentLoaded", function(event) {
		console.log("DOM loaded");
		Todo.AppView.init();
		});
		return {
			init : init,
			storeElements : storeElements,
			check : check,
			toDoElements : toDoElements,
			changeState : changeState,
			deleteFromStorage : deleteFromStorage
		}
	})();