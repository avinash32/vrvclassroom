// does all the assignments and checking functions

	window.Todo = window.Todo || {};

	Todo.AppView = (function(){	
		var newInputItem;
		var toDoElements = {};
	
		document.addEventListener("DOMContentLoaded", function(event) {
			console.log("DOM loaded");
			var preloadedItems = ["Eat","sleep"];
			preloadedItems.map(function(item)
				{
					addToItem(item);
				});
			(function(){
				var ulElement = document.getElementById("itemContainerId");
				var clrscr = document.getElementById("clearScreen");
				var width = window.innerWidth;
				ulElement.addEventListener("click",Todo.itemsView.assignListeners);
				clrscr.addEventListener("click",clearScreen);
				newInputItem = document.getElementById("newToDoItem");
				newInputItem.addEventListener("keydown",init);
			})();
		});
		
		display = function(item) {
					Todo.itemsView.init(item);
				}
				
		addToItem = function(item) {
					Todo.AppView.display(item);
				}
					
		remove = function() {
					Todo.itemsView.remove();
				}
		
		storeElements = function(insertedItems){
					console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
					idOfTheItem = insertedItems.id;
					toDoElements[idOfTheItem] = insertedItems;
					console.log("Stored items summary :");
					console.log(toDoElements);
				}
	
		init = function(event){
				console.log("Keydown event listened");
				if(event.keyCode === 13){
					console.log("Enter key pressed, going to add new items");
					var newItem = newInputItem.value;
					Todo.itemsView.add(newItem);
				}
			}	

		function clearScreen(){
			var id = "clearScreen";
			Todo.itemView.remove(id);
		}
	
		return {
			storeElements   : storeElements, 
			init : init,
			display : display,
			toDoElements : toDoElements
		}
	})();