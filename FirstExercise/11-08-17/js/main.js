// function to check whether enter is pressed or not will be loaded on load
function check(){
	var newItemInputBox = document.getElementById("newToDoItem");
	newItemInputBox.addEventListener("keydown",function keyCheck(key){
		if(key.keyCode === 13){
			// 13 is the keycode for enter
			var newItem = newItemInputBox.value;
			var regex = /^\s*$/;
			console.log("Enter key pressed");
			console.log("the entered item is "+newItemInputBox.value);
			if(newItem.match(regex) || newItem == null){
				alert("Please enter valid items");
			}
			//if(newItem == null||newItem == ""){
			//	alert("Please enter valid ToDO name");
			//	console.log("No item was present in the text box");
			//}
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
	listItem.id = "listItemId";
	
	//creating a label with the name input by the user
	var label = document.createElement("label");
	label.appendChild(document.createTextNode(itemName));
	
	//creating a checkbox
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "checkBoxId";

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
	
	//creating delete button
	var deleteButton = document.createElement("A");
	deleteButton.href = "#";
	deleteButton.id = "deleteButtonId";
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
	listItem.classList.add("customHorizontalRule");
	console.log("Horizontal rule added to the list");
	
	//adding li element to the container, i.e ul element
	container.appendChild(listItem);
	console.log("Whole list item is added to the ul element");
}

function removeEverything(){
	console.log("Removing everything now");
	var checkBoxCount = 0;
	var deleteButtonCount = 0;
	
	var OutSideUnorderedList = document.getElementById("itemContainerId");
	console.log(OutSideUnorderedList.childNodes[2].id);
	while(OutSideUnorderedList.firstChild){
		var liElementIdInsideUL = OutSideUnorderedList.firstChild.id;
		var list = OutSideUnorderedList.firstChild;
		if(liElementIdInsideUL == null){
			OutSideUnorderedList.removeChild(OutSideUnorderedList.firstChild);
		}
		else {
				if(liElementIdInsideUL == "listItemId"){
					while(list.firstChild){
					var itemId = document.getElementById(liElementIdInsideUL).firstChild.id;
					if(itemId == null){
						console.log("null");
						list.removeChild(item);
					}
					else{
					var item = document.getElementById(liElementIdInsideUL).firstChild;
					if(itemId == "checkBoxId"){
						document.getElementById(itemId).onclick = null;
						checkBoxCount++;
						console.log(checkBoxCount+" checkbox event listener removed");
					}
					else if(itemId == "deleteButtonId"){
						document.getElementById(itemId).onclick = null;
						deleteButtonCount++;
						console.log(deleteButtonCount+" deletebutton event listener removed");
					}
					list.removeChild(item);
					}
					}
				}
			OutSideUnorderedList.removeChild(OutSideUnorderedList.firstChild);
		}
	}
	var newItemInputBox = document.getElementById("newToDoItem");
	newItemInputBox.addEventListener("keydown",null);
	console.log("Input box event listener removed");	
}