var users = [];

function resetValidation() {
	document.getElementById("firstName").style.borderColor = "#73bb13";
	document.getElementById("lastName").style.borderColor = "#73bb13";
	document.getElementById("age").style.borderColor = "#73bb13";
}

function readUser() {
	resetValidation();
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var age = document.getElementById("age").value;
	if (validateUser(firstName, lastName, age)) {
		var user={"firstName":firstName, "lastName":lastName, "age":age};
	}
	return user;
}

function createUser(){
	var user=readUser();
	if (user){
		addUser(user);
		renderUser(user);
	}
}

function addUser(user) {
	if (users.length<4){
		users.push(user);
	}
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("age").value = "";
}

function renderUser(){
	document.getElementById("result").innerHTML = "";
	for (var i=0;i<users.length;i++){
		document.getElementById("result").innerHTML+=users[i].firstName+" "+users[i].lastName+" "+users[i].age+"<br/>";
	}
	
}

function validateUser(firstName, lastName, age){
	if (!firstName) {
		document.getElementById("firstName").style.borderColor = "red";
	}
	if (!lastName) {
		document.getElementById("lastName").style.borderColor = "red";
	}
	if (!age) {
		document.getElementById("age").style.borderColor = "red";
	}
	return firstName && lastName && age;
}

function clearForm() {
	users.splice(0);
	renderUser();
}