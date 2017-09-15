	//creating object to store the new toDo items
	var toDoElements = {};
	
	document.addEventListener("DOMContentLoaded", function(event) {
		console.log("DOM loaded");
		//adding existing elements
		var preloadedItems = ["Eat","sleep"];
		preloadedItems.map(function(item)
			{
				TimeForNewToDoItem(item);
			});	
		var newInputItem = document.getElementById("newToDoItem");
		var ulElement = document.getElementById("itemContainerId");
		var clrscr = document.getElementById("clearScreen");
		ulElement.addEventListener("click",AssignListeners);
		clrscr.addEventListener("click",clearScreen);
		newInputItem.addEventListener("keydown",check);
	});


	//checks for enter key
	function check(event){
		console.log("Keydown event listened");
		if(event.keyCode === 13){
			console.log("Enter key pressed, going to add new items");
			var newItem = document.getElementById("newToDoItem").value;
			TimeForNewToDoItem(newItem);
		}
	}


	//function to remove li elements
	function removeElements(id){
		var deleteButton = document.getElementById(id);
		parentLiElement = deleteButton.parentNode;
		parentLiElement.parentNode.removeChild(parentLiElement);
		console.log("todo item deleted successfully");
	}


	//function to add effects to checkbox name and updating status of the checkbox
	function checkBoxEffect(id){
		var checkBox = document.getElementById(id);
		var name = checkBox.nextSibling;
		if (checkBox.checked){
			name.classList.add("strikeItOut");
			toDoElements[id].state = "checked";
		}
		else {
			name.classList.remove("strikeItOut");
			toDoElements[id].state = "unchecked";
		}
	}


	//to add new todo item
	function TimeForNewToDoItem(newItem){
		var newInputItem = document.getElementById("newToDoItem");
		newInputItem.value = null;
		var ulContainer = document.getElementById("itemContainerId");
		var div = document.createElement("div");
		var childCount = ulContainer.childNodes.length;
		console.log("totally "+childCount+" child nodes are currently present inside parent ul element");
		var checkBoxid = "checkBox"+childCount;
		var stat = "unchecked";
		div.innerHTML = template(newItem,childCount);
		ulContainer.appendChild(div);
		console.log("new TODO item added");
		var insertedItems = {id : checkBoxid, name : newItem, state : stat};
		storeElements(insertedItems);
	}
	
	
	//returns the array of elements to be added to the DOM
	function template(newItem,childCount){
		var checkBoxid = "checkBox"+childCount;
		var newItemToBeAdded = [];
		var count = 0;
		newItemToBeAdded[count++] = "<li class = 'customHorizontalRule'>";
		newItemToBeAdded[count++] = "<input type = 'checkbox' id = '"+checkBoxid+"' class = 'checkBox'/>";
		newItemToBeAdded[count++] = "<span>"+newItem+"</span>";
		newItemToBeAdded[count++] = "<a href = '#' class = 'moveRightSide' id = 'deletebutton"+childCount+"' >Delete</a>";
		newItemToBeAdded = newItemToBeAdded.join("");
		return newItemToBeAdded;
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

	
	// stores all inserted elements
	function storeElements(insertedItems){
		console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
		// storing the todo items using objects inside an object
		
		//getting the id of the inserted item to use as index
		idOfTheItem = insertedItems.id;
		//storing the javascript object inside another object
		toDoElements[idOfTheItem] = insertedItems;
		console.log("Stored items summary :");
		console.log(toDoElements);
	}

	
	//delegation function
	function AssignListeners(){
		console.log("reached delegation");
		var id = event.target.id;
		item = document.getElementById(id);
		if (item.classList.contains("checkBox")){
			checkBoxEffect(id);
		}
		else if(item.classList.contains("moveRightSide")){
			removeElements(id);
		}
	}