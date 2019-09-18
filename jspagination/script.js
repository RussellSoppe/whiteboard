let control = 4;
let next = 0;
let array = document.getElementsByClassName("item");

// test array
// let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const nextItems = (num)=>{
	displayItems(num)
}

const displayItems = (num=0)=>{
	
	let alength = array.length-1;
	let length = array.length;

	
	// remove all items from displaying in the dom
	for (let r=0; r<=alength; r++){
		array[r].style.display = "none";
	}

	// sets new value for increase/decrease for index in array for items to display
	next += num;

	// checks to see if we are at end of list and to ensure remainders are shown
	if (next > alength){
	next = length - (length % (control));
	}

	// checks to see if we are at start of list
	if (next < 0){
		next = 0;
	}
	
	// displays the current selection 
	for(let i = 0; i<=control-1; i++){

		// skips empty spots in the array while displaying remainder of control to length of array
		if(array[i+next] === undefined){
			return;
		}else{
			array[i+next].style.display = "block";
		}
	}
}

// set to initial load
displayItems(0);

// set eventListeners

let previousitem = document.getElementById('previous-item');
let nextitem = document.getElementById('next-item');

previousitem.addEventListener('click', ()=>nextItems(-4));
nextitem.addEventListener('click', ()=>nextItems(4));
