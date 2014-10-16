function startMove(iTarget){
	var oDiv = document.getElementById('div1');
	
	clearInterval(timer);
	timer = setInterval(function(){
		var iSpeed = 0;
		
		if(oDiv.offsetLeft<iTarget){
			iSpeed = 10;
		}
		else{
			iSpeed = 10;
		}
		if(oDiv.offsetLeft>=300)
		{
			clearInterval(timer);
		}
		else
		{
			oDiv.style.left = oDiv.offsetLeft+iSpeed+'px';
		}	
	},30);
}