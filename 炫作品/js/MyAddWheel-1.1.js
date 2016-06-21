function addWhell(obj,fn){
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
			obj.addEventListener('DOMMouseScroll',fnEv);
		}else{
			//不是FF是别的浏览器
			obj.addEventListener('mousewheel',fnEv);
		}
	
		function fnEv(ev){
			/*
			 	处理2件事：
			 		第一件事：2个的ev下的方向属性是不一样的
			 		
			 		第二件事:2个方向都不一样。	
			*/
			var down = true;
			if(ev.wheelDelta){
				 down = ev.wheelDelta > 0 ? true : false;
			}else{
				 down = ev.detail < 0 ? true : false;
			}
			
			//同鞋写的
//			if(down){
//				typeof fnDown === 'function' && fnDown();
//			}else{
//				typeof fnUp === 'function' && fnUp();
//			}
			typeof fn == 'function' && fn(down);
		}
	}