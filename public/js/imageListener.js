// $('img').each(function(){
// 	console.log("hi");
// 	$(this).addEventListener('click', function(){
// 		alert("hi");
// 		console.log("hedgehogs");
// 	}, false)
// });

var checkedImgArray = [];
var setJSON = "";
function getAllImages(){
//uh-mazingggg
	window.onload=function()
	{
	    var imgs=document.getElementsByTagName('img');
	    for(var i=0; i<imgs.length; i++)
	    {	
	    	checkedImgArray[i] = false;//all imgs are not yet checked
	        imgs[i].id='x'+i; // An ID can't begin with a number, hence the "x".
	        imgs[i].onclick=function()
	        {
	        	var val = this.id.replace('x','');
	            console.log(val); // Remove "x" and [b]i[/b] remains.
	            if (checkedImgArray[val] == true){//update values if img is clicked on
	            	checkedImgArray[val] = false;
	            } else if (checkedImgArray[val] == false){
	            	checkedImgArray[val] = true;
	            } //css transition
	        }

	    }
	}
}


getAllImages();

// on submit, post checkedImgArray to /map

function submitToBackend() {
	var r = new XMLHttpRequest();   // new HttpRequest instance 
	r.open("POST", "/map ");

	// console.log("submitToBackend pressed");
	r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	r.send(JSON.stringify({
		checkedImgArray: checkedImgArray
	}));
	// console.log("setJSON: " + setJSON);
	console.log("checked img array: " + checkedImgArray);
}


