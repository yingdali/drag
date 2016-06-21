var memoryUrl="//www.m-studio.cc/";
var strUrl=window.location.href;
var arrUrl=strUrl.split("/");
var strPage=arrUrl[arrUrl.length-1];
var strLast=strPage.lastIndexOf("_");
var find3G=strUrl.indexOf("3g");
    var system = {
        win: false,
        mac: false,
        xll: false,
        ipad: false
    };
  console.log(find3G);
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
	if (system.win || system.mac || system.xll || system.ipad) { 
		if (find3G > 0){	
			if (strLast > 4){ 			
				window.location.href=memoryUrl+"work_detail"+strPage.slice(12,strPage.length);
			}else if(strLast < 0){  
				strPage="index.html";
				window.location.href=memoryUrl+strPage;
			}
		}
	} else {  
		if(find3G < 0){
			if (strLast == 4){
				window.location.href=memoryUrl+"3g/"+"work_detail_"+strPage.slice(11,strPage.length);
			}else if(strLast < 0){
				window.location.href=memoryUrl+"3g/"+strPage;
			}
		}

	}
	
	
