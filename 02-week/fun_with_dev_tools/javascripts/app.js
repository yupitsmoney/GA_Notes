console.warn('Look closely at the errors you recieve');

var skyify = function (){
	var cloudy = document.getElementsByClassName('cloudy');
	for(var i =0, il = cloudy.length;i<il;i++){
	cloudy[i].style.backgroundImage= "url('https://s3-us-west-2.amazonaws.com/nsr-invest/backgrounds/sky.jpg')";
	cloudy[i].style.color = "beige";
  }
}

// this variable doesn't actually exist
console.log(variableX)

