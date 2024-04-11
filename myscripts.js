document.getElementById("userEmail").size = "40";

function blurLN() {
	if (document.getElementById("lastName").value == "") {
		document.getElementById("lastName").style.border = "2px solid red";
	} else {
		document.getElementById("lastName").style.border = "2px solid #00FF7F";
	}
}
function focusLN() {
	document.getElementById("lastName").style.border = "4px solid #00FF7F";
}

function blurFN() {
	if (document.getElementById("firstName").value == "") {
		document.getElementById("firstName").style.border = "2px solid red";
	} else {
		document.getElementById("firstName").style.border = "2px solid #00FF7F";
	}
}
function focusFN() {
	document.getElementById("firstName").style.border = "4px solid #00FF7F";
}

function blurMF() {
	if (document.getElementById("gender").value == "") {
		document.getElementById("gender").style.border = "2px solid red";
	} else {
		document.getElementById("gender").style.border = "2px solid #00FF7F";
	}
}
function focusMF() {
	document.getElementById("gender").style.border = "4px solid #00FF7F";
}

function blurDate() {
	if (document.getElementById("birthDate").value == "") {
		document.getElementById("birthDate").style.border = "2px solid red";
	} else {
		document.getElementById("birthDate").style.border = "2px solid #00FF7F";
	}
}
function focusDate() {
	document.getElementById("birthDate").style.border = "4px solid #00FF7F";
}

function blurStreet() {
	if (document.getElementById("street").value == "") {
		document.getElementById("street").style.border = "2px solid red";
	} else {
		document.getElementById("street").style.border = "2px solid #00FF7F";
	}
}
function focusStreet() {
	document.getElementById("street").style.border = "4px solid #00FF7F";
}

function blurBRGY() {
	if (document.getElementById("brgy").value == "") {
		document.getElementById("brgy").style.border = "2px solid red";
	} else {
		document.getElementById("brgy").style.border = "2px solid #00FF7F";
	}
}
function focusBRGY() {
	document.getElementById("brgy").style.border = "4px solid #00FF7F";
}

function blurZip() {
	if (document.getElementById("zipcod").value == "") {
		document.getElementById("zipcod").style.border = "2px solid red";
	} else {
		document.getElementById("zipcod").style.border = "2px solid #00FF7F";
	}
}
function focusZip() {
	document.getElementById("zipcod").style.border = "4px solid #00FF7F";
}

function blurCity() {
	if (document.getElementById("city").value == "") {
		document.getElementById("city").style.border = "2px solid red";
	} else {
		document.getElementById("city").style.border = "2px solid #00FF7F";
	}
}
function focusCity() {
	document.getElementById("city").style.border = "4px solid #00FF7F";
}

function blurProv() {
	if (document.getElementById("province").value == "") {
		document.getElementById("province").style.border = "2px solid red";
	} else {
		document.getElementById("province").style.border = "2px solid #00FF7F";
	}
}
function focusProv() {
	document.getElementById("province").style.border = "4px solid #00FF7F";
}


function blurCount() {
	if (document.getElementById("country").value == "") {
		document.getElementById("country").style.border = "2px solid red";
	} else {
		document.getElementById("country").style.border = "2px solid #00FF7F";
	}
}
function focusCount() {
	document.getElementById("country").style.border = "4px solid #00FF7F";
}

function blurEmail() {
	if (document.getElementById("userEmail").value == "") {
		document.getElementById("userEmail").style.border = "2px solid red";
	} else {
		document.getElementById("userEmail").style.border = "2px solid #00FF7F";
	}
}
function focusEmail() {
	document.getElementById("userEmail").style.border = "4px solid #00FF7F";
}

function blurUName() {
	if (document.getElementById("userName").value == "") {
		document.getElementById("userName").style.border = "2px solid red";
	} else {
		document.getElementById("userName").style.border = "2px solid #00FF7F";
	}
}
function focusUName() {
	document.getElementById("userName").style.border = "4px solid #00FF7F";
}

function blurPass1() {
	if (document.getElementById("pw1").value == "") {
		document.getElementById("pw1").style.border = "2px solid red";
	} else {
		document.getElementById("pw1").style.border = "2px solid #00FF7F";
	}
}
function focusPass1() {
	document.getElementById("pw1").style.border = "4px solid #00FF7F";
}

function blurPass2() {
	if (document.getElementById("pw2").value == "") {
		document.getElementById("pw2").style.border = "2px solid red";
	} else {
		document.getElementById("pw2").style.border = "2px solid #00FF7F";
	}
}
function focusPass2() {
	document.getElementById("pw2").style.border = "4px solid #00FF7F";
}

function blurComm() {
	if (document.getElementById("interests").value == "") {
		document.getElementById("interests").style.border = "2px solid red";
	} else {
		document.getElementById("interests").style.border = "2px solid #00FF7F";
	}
}
function focusComm() {
	document.getElementById("interests").style.border = "4px solid #00FF7F";
}

function results() {
	var name = getName();
	var userGender = gender.value;
	var bDay = birthDate.value;
	var address = getAddress();
	var email = userEmail.value;
	var nameUser = userName.value;
	var password12 = pw1.value;
	var writeInterests = interests.value; 
	
	userDetails.innerHTML = "Full Name: " + name + "</br></br>";
	userDetails.innerHTML += "Gender: " + userGender + "</br></br>";
	userDetails.innerHTML += "Date of Birth: " + bDay + "</br></br>";
	userDetails.innerHTML += "Full Address: " + address + "</br></br>";
	userDetails.innerHTML += "Email: " + email + "</br></br>";
	userDetails.innerHTML += "Username: " + nameUser + "</br></br>";
	userDetails.innerHTML += "Password: " + password12 + "</br></br>";
	userDetails.innerHTML += 'Interest/s: "' + writeInterests + '"</br></br>';
	document.getElementById("body").style.overflowY = "scroll";
	adjustBackgroundHeight();
	setTimeout(adjustBackgroundHeight, 100);
	return false;
}

function adjustBackgroundHeight() {
    var heightSame = document.getElementById("main").offsetHeight;
    document.getElementById("background").style.height = heightSame + "px";
}

function getName() {
	var firstN = firstName.value;
	var lastN = lastName.value.toUpperCase();
	var fullN = lastN + ", " + firstN;
	return fullN;
}

function getAddress(){
	var strt = street.value;
	var brgay = brgy.value;
	var zipCod = zipcod.value;
	var cit = city.value;
	var prov = province.value;
	var cntr = country.value;
	var fullAd = strt + ", " + brgay + ", " + zipCod + " " + cit + ", " + prov + ", " + cntr;
	return fullAd;
}

function resetAll(){
	userDetails.innerHTML = "(Your personal and account details will appear here after you submit.)";
	document.getElementById("lastName").style.border = "1px solid black";
	document.getElementById("lastName").style.border = "1px solid black";
	document.getElementById("firstName").style.border = "1px solid black";
	document.getElementById("gender").style.border = "1px solid black";
	document.getElementById("birthDate").style.border = "1px solid black";
	document.getElementById("street").style.border = "1px solid black";
	document.getElementById("brgy").style.border = "1px solid black";
	document.getElementById("zipcod").style.border = "1px solid black";
	document.getElementById("city").style.border = "1px solid black";
	document.getElementById("province").style.border = "1px solid black"
	document.getElementById("country").style.border = "1px solid black";
	document.getElementById("userEmail").style.border = "1px solid black";
	document.getElementById("userName").style.border = "1px solid black";
	document.getElementById("pw1").style.border = "1px solid black";
	document.getElementById("pw2").style.border = "1px solid black";
	document.getElementById("interests").style.border = "1px solid black";
	document.getElementById("body").style.overflow = "hidden";
	document.getElementById("background").style.height = "100vh";
}