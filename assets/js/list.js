var list = [1,2,3,4]

function tell_me(num){console.log(num);}

var i = 0;
setInterval(function(){
	
tell_me(list[i++]);
if(i>=list.length) i = 0;

},500);