// function to check whether enter is pressed or not
function check(){
	var newItemInputBox = document.getElementById("newToDoItem");
	newItemInputBox.addEventListener("keydown",function(key){
		if(key.keyCode === 13){
			// 13 is the keycode for enter
			var newItem = newItemInputBox.value;
			console.log("Enter key pressed");
			console.log("the entered item is "+newItemInputBox.value);
			if(newItem == null||newItem == ""){
				alert("Please enter valid ToDO name");
				console.log("No item was present in the text box");
			}
			else {
			letsAddNewItem();
			}
		}
		
	});
	
}

// function to add new Items to the item container
function letsAddNewItem(){
	var newItemInputBox = document.getElementById("newToDoItem");
	var itemName = newItemInputBox.value;
	newItemInputBox.value = null;
	
	//creating referance to ul element
	var container = document.getElementById("itemContainerId");
	
	//creating a list element
	var listItem = document.createElement("LI");
	
	//creating a label with the name input by the user
	var label = document.createElement("label");
	label.appendChild(document.createTextNode(itemName));
	
	//creating a checkbox
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	//changing checkbox label status to striked out look or to normal
	checkBox.onclick = function changeState(){
		if(checkBox.checked){
			label.classList.add("strikeItOut");
			console.log("Striked out look added");
		}
		else{
			label.classList.remove("strikeItOut");
			console.log("normal look added");
		}
	}
	
	//creating horizontal rule
	var horizontalRule = document.createElement("HR");
	
	//creating delete button
	var deleteButton = document.createElement("A");
	deleteButton.href = "#";
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.classList.add("deleteButtonStyle");
	//adding onclick listener to the delete button
	deleteButton.onclick = function deleteAllElements(){
		container.removeChild(listItem);
		console.log("Item has been deleted after pressing delete button");
	}
	
	
	//adding everything to list item, i.e li element
	listItem.appendChild(checkBox);
	console.log("checkbox added to the list");
	listItem.appendChild(label);
	console.log("label added to the list");
	listItem.appendChild(deleteButton);
	console.log("Delete button added to the list");
	listItem.appendChild(horizontalRule);
	console.log("Horizontal rule added to the list");
	
	//adding li element to the container, i.e ul element
	container.appendChild(listItem);
	console.log("Whole list item is added to the ul element");
}