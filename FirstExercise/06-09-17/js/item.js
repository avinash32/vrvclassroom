// everything related to li elements goes here
	window.Todo = window.Todo || {};
	Todo.itemView = (function(){
		
		init = function(newItem,checkBoxid,divId){
			var toBeAdded = Todo.itemView.display(newItem,checkBoxid,divId);
			return toBeAdded;
		}
	
		checkBoxEffect = function(id){
			var checkBox = document.getElementById(id);
			var name = checkBox.nextSibling;
			if (checkBox.checked){
				name.classList.add("strikeItOut");
				Todo.AppView.toDoElements[id].state = "checked";
			}else {
				name.classList.remove("strikeItOut");
				Todo.AppView.toDoElements[id].state = "unchecked";
			}
		}
	
		remove = function(divId){
			var newInputItem = document.getElementById("newToDoItem");
			var clrscr = document.getElementById("clearScreen");
			if(divId == "clearScreen"){
				newInputItem.removeEventListener("keydown",Todo.AppView.init);			
				clrscr.removeEventListener("click",clearScreen);
				document.body.innerHTML = null;
				console.log("Clear screen, inputbox Event listener removed and screen cleared");
			}
			else{
				var decision = confirm("Do you want to delete?");
				if(decision == true){
					var outerDivId = "#"+divId;
					console.log(outerDivId);
					var outerDiv = document.querySelector(outerDivId);
					//outerDiv.outerHTML = ""; this also works
					outerDiv.remove();
					console.log("todo item deleted successfully");
					alert("item deleted successfully");
				}
				else {
				alert("You chose not to delete that item");
				}
			}
		}
		display = function(newItem,checkBoxid,divId){
			var newItemToBeAdded = [];
			var count = 0;
			var deleteButtonId = "deleteButton"+newItem;
			var liId = "li"+newItem;
			newItemToBeAdded[count++] = "<li id = '"+liId+"' class = 'customHorizontalRule'  checkId = "+checkBoxid+" deleteId = "+deleteButtonId+">";
			newItemToBeAdded[count++] = "<input type = 'checkbox' id = '"+checkBoxid+"' class = 'checkBox visibilityNone'/>";
			newItemToBeAdded[count++] = "<span>"+newItem+"</span>";
			newItemToBeAdded[count++] = "<a href = '#' class = 'moveRightSide visibilityNone' divId = "+divId+" id = '"+deleteButtonId+"' >Delete</a>";
			newItemToBeAdded = newItemToBeAdded.join("");
			return newItemToBeAdded;
		}
		
		return {
		init : init,
		checkBoxEffect : checkBoxEffect,
		remove : remove,
		display : display
		}
	
	})();