// everything related to li elements goes here

(function(){
		
		window.template = function(newItem,checkBoxid,divId){
		var newItemToBeAdded = [];
		var count = 0;
		newItemToBeAdded[count++] = "<li class = 'customHorizontalRule'>";
		newItemToBeAdded[count++] = "<input type = 'checkbox' id = '"+checkBoxid+"' class = 'checkBox'/>";
		newItemToBeAdded[count++] = "<span>"+newItem+"</span>";
		newItemToBeAdded[count++] = "<a href = '#' class = 'moveRightSide' divId = "+divId+" id = 'deletebutton"+newItem+"' >Delete</a>";
		newItemToBeAdded = newItemToBeAdded.join("");
		return newItemToBeAdded;
	}
	
	//function to add effects to checkbox name and updating status of the checkbox
	window.checkBoxEffect = function(id){
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
	
		//function to remove li elements
	window.removeElements = function(divId){
		var outerDivId = "#"+divId;
		var outerDiv = document.querySelector(outerDivId);
		//outerDiv.outerHTML = ""; this also works
		outerDiv.remove();
		console.log("todo item deleted successfully");
		
	}
})();