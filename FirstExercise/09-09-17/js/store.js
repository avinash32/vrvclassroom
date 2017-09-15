
	window.Todo = window.Todo || {};

	Todo.Store = (function(){
		var toDoElements = {};
		
		init = function(){
			var preloadedItems = ["Eat","sleep"];
			return preloadedItems;
		}
		
		storeElements = function(insertedItems){
			if(insertedItems.id!= undefined){
			console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
			idOfTheItem = insertedItems.id;
			toDoElements[idOfTheItem] = insertedItems;
			console.log("Stored items summary :");
			console.log(toDoElements);
			}
		}
		
		return{
			init : init,
			toDoElements : toDoElements,
			storeElements : storeElements
		}
	
})();