<script>
window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmousedown=function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-oDiv.offsetLeft;
		var disY=oEvent.clientY-oDiv.offsetTop;
		
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			
			oDiv.style.left=oEvent.clientX-disX+'px';
			oDiv.style.top=oEvent.clientY-disY+'px';
		};
		
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		};
		
		return flase;
	};
};
</script>