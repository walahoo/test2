// var User = require('../models/user');

// var url = "";
// var address = "";
// var city = "";

// function storeImageInfo(){
// 	console.log($("#fileupload").val());
// }



// $(document).ready(function () {
// 	$("#submit").click(submitToBackend());
// }); 
// // document.getElementById("submitBtn").addEventListener('click',function(){
// // storeImageInfo(), false});

// // // on submit, post checkedImgArray to /map

// function submitToBackend() {
// 	var r = new XMLHttpRequest();   // new HttpRequest instance 
// 	r.open("POST", "/");

// 	r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


// 	// r.send(JSON.stringify({
// 	// 		src: url,
// 	// 		address: address,
// 	// 		city: city
// 	// 	}));


// 	$.post('/users/userProfile',function(data){
// 		$("#autocomplet").html(data);
// 		console.log(data);
// 	});
// }