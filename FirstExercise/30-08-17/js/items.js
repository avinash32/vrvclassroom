//everything related to ul elements goes here
window.todo = window.todo || {};
	todo.todoitems = (function(){
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
		todo.todomain.storeElements(insertedItems);
	}
	
		//delegation function
	assignListeners = function(){
		var width = window.innerWidth;
		console.log(width);
		if(width < 1000){
			console.log("mobile version");
			if(event.target.classList.contains("customHorizontalRule")){
				//here im trying to get the id's of check box and anchor tag(delete button)
				checkId = event.target.getAttribute("checkid");
				deleteId = event.target.getAttribute("deleteid");
				console.log(width);
				
				// now i'm using getElementById bcos event.target refers to the li element not the checkbox or anchor tag(delete button)
				let checkBox = document.getElementById(checkId);
				let deleteButton = document.getElementById(deleteId);
				checkBox.classList.toggle("mobileVisibility");
				deleteButton.classList.toggle("mobileVisibility");
			}
			
		}
		//console.log(event.target);
		console.log("reached delegation");
		var id = event.target.id;
		item = document.getElementById(id);
		if (item.classList.contains("checkBox")){
			todo.todoitem.checkBoxEffect(id);
		}
		else if(item.classList.contains("moveRightSide")){
			var outerDivId = event.target.getAttribute("divid");
			todo.todoitem.removeElements(outerDivId);
		}
	}

	return {
		timeForNewToDoItem : timeForNewToDoItem,
		assignListeners : assignListeners
	}
	
	
	
	
})();
