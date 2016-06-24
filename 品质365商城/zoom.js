
(function(){
    var div1 = $('#J_ZoomMain').get(0);//包着左右两个div的父级
	var smbox = $('.J_ZoomHook')[0]; //左图
//	console.log(smbox)
	var sDiv = smbox.children[0];//移动的小方块
	var bbox = $('#big')[0];//包着右图的div
	var img = $('#img1111')[0];//右图

		//
//	/*
//		在选择图片的时候，左边的图片比例要和右边大图片的比例成倍数关系，
//		不然，虽然计算的比例正确，但是，比例对应的位置（视觉上）是不正确的。
//	*/
//	
	smbox.onmouseover = function(){
		sDiv.style.display = 'block';
		bbox.style.display = 'block';
	}
	smbox.onmouseout = function(){
		sDiv.style.display = 'none';
		bbox.style.display = 'none';
	}
	
	smbox.onmousemove = function(ev){
		var e = ev || window.event;
		var disX = e.pageX - div1.offsetLeft - sDiv.offsetWidth/2;
		var disY = e.pageY - div1.offsetTop - sDiv.offsetHeight/2;

		//限定disX范围
		if(disX <= 0){
			disX = 0;
		}else if(disX > smbox.offsetWidth - sDiv.offsetWidth){
			disX = smbox.offsetWidth - sDiv.offsetWidth;
		}
		
		if(disY <= 0){
			disY = 0;
		}else if(disY > smbox.offsetHeight - sDiv.offsetHeight){
			disY = smbox.offsetHeight - sDiv.offsetHeight;
		}
				
		//计算比例关系
		var scaleX = disX / (smbox.offsetWidth - sDiv.offsetWidth);
		var scaleY = disY / (smbox.offsetHeight - sDiv.offsetHeight);
		
		//console.log(scaleX)
		
		//通过比例关系计算img的left值或者top值
		img.style.left = scaleX * -(img.offsetWidth - bbox.offsetWidth) + 'px';
		img.style.top = scaleY * -(img.offsetHeight - bbox.offsetHeight) + 'px';
		
		sDiv.style.left = disX+'px';
		sDiv.style.top = disY+'px';
		}
	})();
	(function(){
		var ul= $('.J_ImagesView').get(0);
		var lis=ul.getElementsByTagName('li');
        var imgz =$('.J_ImagesHook')[0];
        var imgs=ul.getElementsByTagName('img');
         var img = $('#img1111')[0];//右图
		for(var i=0;i<lis.length;i++){	
			lis[i].index = i;
			var src=imgs[i].src; 
			lis[i].onclick=function(){
				for(var i=0;i<lis.length;i++){
					lis[i].className = '';
				}		
					this.className='selected';
					imgz.src=imgs[this.index].src;
					img.src=imgs[this.index].src;
			}
		}
	})();
var num=1;
function buy(){
	var buy= $('#addToCart')[0];
	var add=$('#addNumButton')[0];
	var reduce=$('#reduceNumButton')[0];
	var inputs=$('#buy-num')[0];
	var cartnum=$('.cart-num')[0];
	buy.onclick=function(){
		span.innerHTML = window.localStorage.getItem('count');
		$('.cart-num').addClass('animated rubberBand');
		if(cartnum.className==rubberBand){
			
		}
	}
	add.onclick=function(){
		num++;
		inputs.value=num;	
		window.localStorage.setItem('count',num);//在html本地存储中存入num
	//从localStorage中获取num输入到span[0].innerHTML
	}
    reduce.onclick=function(){
    	num--;
		if(num<=0){
			num=0;
		}	
	    inputs.value=num;
	    window.localStorage.setItem('count',num);
	   
	}
}
buy();