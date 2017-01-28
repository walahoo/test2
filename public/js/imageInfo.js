// var User = require('../models/user');

var url, address, city;

function storeImageInfo(){
	url = document.getElementById("url").value;
 	address = document.getElementById("address").value;
 	city = document.getElementById("city").value;
	console.log("hi imageInfo, storeImageInfo() fcn here");
	console.log("url: " + url);
	console.log("address: " + address);
	console.log("city: " + city);

}

$(document).ready(function () {
	$("#submitbutton").click(storeImageInfo());
}); 
// document.getElementById("submitBtn").addEventListener('click',function(){
// storeImageInfo(), false});

// // on submit, post checkedImgArray to /map

function submitToBackend() {
	var r = new XMLHttpRequest();   // new HttpRequest instance 
	r.open("POST", "/map");

	r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	r.send(JSON.stringify({
			src: url,
			address: address,
			city: city
		}));
	$.post('/map',function(data){
		$(".info").html(data);
		console.log(data);
	});
}
