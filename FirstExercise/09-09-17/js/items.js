	//everything related to ul elements goes here
	window.Todo = window.Todo || {};
	Todo.itemsView = (function(){	
	
		init = function(item) {
			// initializing unordered list
			var ulElement = document.getElementById("itemContainerId");
			ulElement.addEventListener("click",assignListeners);
			return true;	
		}
		
		
		remove = function(divId,checkId) {
			Todo.itemView.remove(divId,checkId);
		}
	
		display = function(item) {
			var newInputItem = document.getElementById("newToDoItem");
			var div = document.createElement("div");
			var ulContainer = document.getElementById("itemContainerId");
			newInputItem.value = "";
			var divId = item+"div";;
			div.id = divId;
			var checkBoxid = "checkBox"+item;
			var stat = "unchecked";
			div.innerHTML = Todo.itemView.display(item,checkBoxid,divId);
			console.log("new TODO item added");
			var insertedItems = {id : checkBoxid, name : item, state : stat};
			//since itemView and itemsView are not allowed to interact with store, we have to go through AppView to store the items
			Todo.AppView.storeElements(insertedItems);
			ulContainer.appendChild(div);
			return true;
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
					//now i'm using getElementById bcos event.target refers to the li element not the checkbox or anchor tag(delete button)
					let checkBox = document.getElementById(checkId);
					let deleteButton = document.getElementById(deleteId);
					checkBox.classList.toggle("mobileVisibility");
					deleteButton.classList.toggle("mobileVisibility");
				}
			}
			//console.log(event.target);
			console.log("reached delegation");
			var id = event.target.id;
			item = event.target;
			if (item.classList.contains("checkBox")){
				Todo.itemView.checkBoxEffect(id);
			}
			else if(item.classList.contains("moveRightSide")){
				var outerDivId = event.target.getAttribute("divid");
				var checkId = event.target.getAttribute("checkId");
				Todo.itemsView.remove(outerDivId,checkId);
			}
		}
	

		return {
			add : add,
			init : init,
			display : display,
			remove : remove,
		}	
	})();
