var button = document.getElementsByClassName("addBtn");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);


// Toggle done button // 
// document.querySelector("li").classList.toggle("done");

// --------------------------------------- // 

//Create "Close" button and append it to each list item
var toBuyList = document.getElementsByTagName("li"); 
	for (var i=0; i < toBuyList.length; i++) {
		var span = document.createElement("SPAN");
		var x = document.createTextNode("\u00D7");
		span.className = "close"; 
		span.appendChild(x);
		toBuyList[i].appendChild(span);
	}

// Click on close button to hide the current list item
var close = document.getElementsByClassName("close");
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function () { 
			var div = this.parentElement; 
			div.style.display = "none";
		}
	}

//Add a "checked" symbol when clicking on a list item
	ul.addEventListener("click", function(event) {
		if (event.target.tagName === 'li'); {
			event.target.classList.toggle("checked");
		}
	}, false);


//Create a new list item when click on the "Add" Button

// function newElement() {
// 	createListElement(); 
// 		if (input.value === ""); {
// 			alert("You better writing something!");
// 		} else {
// 			document.getElementById("myUL").appendChild(li);
// 		} 
// }


// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	if (inputLength() === '') {
		alert("write something!");
	} else { 
	input.value = "";

	var span = document.createElement("SPAN");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "close";
	  span.appendChild(txt);
	  li.appendChild(span);

	  for (i = 0; i < close.length; i++) {
	    close[i].onclick = function() {
	      var div = this.parentElement;
	      div.style.display = "none";
	    }
	  }
	}
	}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	} 
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} 
}

// button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);