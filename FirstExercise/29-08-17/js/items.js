//everything related to ul elements goes here

	window.todo.todoitems = (function(){
	//to add new todo item

	timeForNewToDoItem = function(newItem){
		var newInputItem = document.getElementById("newToDoItem");
		newInputItem.value = null;
		var ulContainer = document.getElementById("itemContainerId");
		var div = document.createElement("div");
		var divId = newItem+"div";;
		div.id = divId;
		var checkBoxid = "checkBox"+newItem;
		var stat = "unchecked";
		div.innerHTML = window.todo.todoitem.template(newItem,checkBoxid,divId);
		ulContainer.appendChild(div);
		console.log("new TODO item added");
		var insertedItems = {id : checkBoxid, name : newItem, state : stat};
		window.todo.todomain.storeElements(insertedItems);
	}
	
		//delegation function
	assignListeners = function(){
		console.log("reached delegation");
		var id = event.target.id;
		item = document.getElementById(id);
		if (item.classList.contains("checkBox")){
			window.todo.todoitem.checkBoxEffect(id);
		}
		else if(item.classList.contains("moveRightSide")){
			var outerDivId = event.target.getAttribute("divid");
			window.todo.todoitem.removeElements(outerDivId);
		}
	}

	return {
		timeForNewToDoItem : timeForNewToDoItem,
		assignListeners : assignListeners
	}
	
	
	
	
})();
