var productPrice1;
var productPrice2;
var productPrice3;
var productPrice4;
var productPrice5;
var productPrice6;
var productPrice7;
var productPrice8;
var quantityArray =[];
var productArray =[];
var priceArray =[];
var alertMessage =[];

function validateForm(){
	var firstName = document.getElementById("fname").value;
	var lastName = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var mobileNumber = document.getElementById("mobi").value;
	var text;
	
	
	//presence check
	if(firstName.length == ""){
		window.alert("Please enter Your First name");
		return false;
	}
	if(lastName.length ==""){
		window.alert("Please enter Last name");
		return false;
	}
	if(isNaN(mobileNumber) || mobileNumber.length != 10){
		window.alert("Please enter a valid Mobile number")
		false;	
	}
	if(email.indexOf("@")== -1 || email.length < 6){
		window.alert("Please enter a Valid Email address");
		return false;
	}
	
	var totalPrice = 0;
	var i;
	for(i = 0; i < productArray.length; i++){
		var tempString = quantityArray[i] + " x " + productArray[i] + " - Rs. " + priceArray[i];
		alertMessage.push(tempString);
		totalPrice += priceArray[i];
	}
	
	window.alert("Customer  First name : "+document.getElementById('fname').value + "\nCustomer  Last name : "+document.getElementById('lname').value + "\nCustomer Email Address : "+document.getElementById('email').value +  "\nYour Invoice Details : \n" + "\n---------------------\n" + alertMessage.join("\n") + "\nYour total Bill is Rs." + totalPrice + "\nThank you for shopping with us.Come Again!!")
}

function addProduct1(){
	productPrice1 = document.getElementById('product1').value*3500;
	if(document.getElementById('product1').value == ""){
		window.alert("Please Select Quentity First");
	}else{
		window.alert(document.getElementById('product1').value+" Traditional Sri Lankan Wooden Masks is added to your cart. \nRs"+ productPrice1);
		quantityArray.push(document.getElementById('product1').value);
		productArray.push("Sri Lankan Wooden Mask");
		priceArray.push(productPrice1);
	}
		
}
function addProduct2(){
	productPrice2 = document.getElementById('product2').value*2500;
	if(document.getElementById('product2').value == ""){
		window.alert("Please Select Quentity First");
	}else{
		window.alert(document.getElementById('product2').value+" Mens Travelling Backpack is added to your cart. \nRs"+ productPrice2);
		quantityArray.push(document.getElementById('product2').value);
		productArray.push("Mens Travelling Backpack");
		priceArray.push(productPrice2);	
	}	
}

function addProduct3(){
	productPrice3 = document.getElementById('product3').value*1100;
	if(document.getElementById('product3').value == ""){
		window.alert("Please Select Quentity First");
	}else{
		window.alert(document.getElementById('product2').value+" TOICA Hat is added to your cart. \nRs"+ productPrice3);
		quantityArray.push(document.getElementById('product3').value);
		productArray.push("TOICA Hat");
		priceArray.push(productPrice3);	
	}	
}
function addProduct4(){
	productPrice4 = document.getElementById('product4').value*1650;
	if(document.getElementById('product4').value == ""){
		window.alert("Please Select Quentity First");
	}else{
		window.alert(document.getElementById('product4').value+" Hawaiian Shirt is added to your cart. \nRs"+ productPrice4);
		quantityArray.push(document.getElementById('product4').value);
		productArray.push("Hawaiian Shirt");
		priceArray.push(productPrice4);	
	}	
}
function addProduct5(){
	productPrice5 = document.getElementById('product5').value*2470;
	if(document.getElementById('product5').value == ""){
		window.alert("Please Select Quentity First");
	}else{
		window.alert(document.getElementById('product5').value+" Elephant Design Hand Bag is added to your cart. \nRs"+ productPrice5);
		quantityArray.push(document.getElementById('product5').value);
		productArray.push("Elephant Design Hand Bag");
		priceArray.push(productPrice5);	
	}	
}
function addProduct6(){
	productPrice6 = document.getElementById('product6').value*6300;
	if(document.getElementById('product6').value == ""){
		window.alert("Please Select Quentity First");
	}else{
		window.alert(document.getElementById('product6').value+"Hiking Camping Portable Dome Tent is added to your cart. \nRs " + productPrice6);
		quantityArray.push(document.getElementById('product6').value);
		productArray.push("Hiking Camping Portable Dome Tent");
		priceArray.push(productPrice6);	
	}	
}
function addProduct7(){
	productPrice7 = document.getElementById('product7').value*4900;
	if(document.getElementById('product7').value == ""){
		window.alert("Please Select Quentity First");
	}else{
		window.alert(document.getElementById('product7').value+" Brass Elephant Statue is added to your cart. \nRs"+ productPrice7);
		quantityArray.push(document.getElementById('product7').value);
		productArray.push("Brass Elephant Statue");
		priceArray.push(productPrice7);	
	}	
}
function addProduct8(){
	productPrice8 = document.getElementById('product8').value*4800;
	if(document.getElementById('product8').value == ""){
		window.alert("Please Select Quentity First");
	}else{
		window.alert(document.getElementById('product8').value+" Sri Lanka traditional wall mask is added to your cart. \nRs"+ productPrice8);
		quantityArray.push(document.getElementById('product8').value);
		productArray.push("Sri Lanka traditional wall mask");
		priceArray.push(productPrice8);	
	}	
}