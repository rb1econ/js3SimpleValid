var x=true

// while (x) {

// 	var phone = prompt("please enter you phone number with dashes and without thenumber 1 at the begining")

// 	if (phone[3]==="-" && phone[7]==="-" && phone.length === 12) {
// 		console.log(true);
// 		alert("thank you for a valid number");
// 		x=false
// 	}
// 	else {
// 		console.log(false);
// 		alert("that is not a valid number");
// 	}

// }

// while (x) {
// 	var dob = prompt("please enter your date of birth in the following format: mm/dd/yy")

// 	if (dob[2]==='/' && dob[5]==='/' && dob.length===8) {
// 		alert("wonderful, gracias amigo");
// 		x=false;
// 	}
// 	else {
// 		alert("invalid, yo. use correct format.");
// 	}
// }

// while (x) {
// 	var postalCode = prompt("please enter your postal code in the following format: xxxxx OR xxxxx-xxxx");
// 	if ((postalCode.length===5 || postalCode.length===10) && isNaN(postalCode.substring(0,5))===false && isNaN(postalCode.substring(6,10))===false) 
// 	{
// 		alert("thanks for your postal info");
// 		x=false;
// 	}
// 	else {
// 		alert("please try again with a legit postal code.");
// 	}
// }


// while (x) {
// 	var state = prompt("what is the two letter abreviation of the state in which you live.");
// 	if (state.length===2 && state ===state.toUpperCase()) {
// 		alert("thanks dude, cool state to live in");
// 		x=false;
// 	}
// 	else {
// 		alert("please try again.");
// 	}
// }

while (x) {
	var married = prompt("are you married? answer with yes or no.")
	if (married.toLowerCase()==="yes" || married.toLowerCase()==="no") {
		alert("thanks, best wishes");
		x=false;
	}
	else {
		alert("please try again with a valid answer.");
	}
}