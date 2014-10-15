function ajax(url,fnSucc,fnFaild){
	var oBtn = document.getElementById('btn1');
	oBtn.onclick = function(){
		var oAjax = null;
		if(window.XMLHttpRequest){
			var oAjax = new XMLHttpRequest();
		}
		else{bb  
			oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//open(method,url,是否异步)
		oAjax.open('GET',url,true);

		oAjax.send();

		oAjax.onreadystatechange = function(){
			if(oAjax.readyState == 4){
				if(oAjax.status == 200){
					fnSucc(oAjax.responseText);
				}
				else{
					if(fnFaild){
						fnFaild();
					}
						
				}
			}
		}

	}
}
