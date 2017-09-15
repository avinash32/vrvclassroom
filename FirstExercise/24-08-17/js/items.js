//everything related to ul elements goes here

(function(){
	//to add new todo item
	window.timeForNewToDoItem = function(newItem){
		var newInputItem = document.getElementById("newToDoItem");
		newInputItem.value = null;
		var ulContainer = document.getElementById("itemContainerId");
		var div = document.createElement("div");
		var divId = newItem+"div";;
		div.id = divId;
		var checkBoxid = "checkBox"+newItem;
		var stat = "unchecked";
		div.innerHTML = template(newItem,checkBoxid,divId);
		ulContainer.appendChild(div);
		console.log("new TODO item added");
		var insertedItems = {id : checkBoxid, name : newItem, state : stat};
		storeElements(insertedItems);
	}
		//delegation function
	window.assignListeners = function(){
		console.log("reached delegation");
		var id = event.target.id;
		item = document.getElementById(id);
		if (item.classList.contains("checkBox")){
			checkBoxEffect(id);
		}
		else if(item.classList.contains("moveRightSide")){
			var outerDivId = event.target.getAttribute("divid");
			removeElements(outerDivId);
		}
	}
	
})();