/*loading页面*/


setInterval(function(){
	$('#loading').animate({
		'opacity': '0'
	},1000,function(){
		$('#loading').css({'display': 'none'})
	});
	
},6000)
//左侧导航选项卡 切换页面
var active = null;
$('.pTextClick').on('click',function(){
	var divHove = $('.divHover');
	var index = $(this).parent().parent().index();
	$(this).find('a').removeClass('active');
	
	
	$('body').find('section').css({
		'visibility':'hidden',
	});
	
	$('body').find('section').eq(index).css({
		'visibility':'visible',
	});
	active = $('.divHover').eq(index);
	divHove.each(function(i,ele){
		if(i!=index){
			$(ele).css({left:0});
		}else{
			$(ele).css({left:-170});
		}
	});
})	


/*第一页图片轮播开始*/
var as=$('#ulNav').find('a');
var Imgs=$('#divImg').find('a');
for(var i = 0;i<as.length;i++){
	as[i].index = i; 
	$(as[i]).on('click',function(){
		for(var i=0;i<as.length;i++){
			Imgs[i].style.zIndex=(1-i);
			Imgs[i].style.opacity=0;
			as[i].className= '';
		}
		Imgs[this.index].style.zIndex=10;
		Imgs[this.index].style.transition='1s';
		Imgs[this.index].style.opacity=1;
		this.className = 'active1'
	})
	
}
/*第一页面最下面的导航按钮切换*/
var pic1 = $('#navbtn').find('.pic1');
var pic2= $('#navbtn').find('.pic2');

pic1.on('mouseover',function(){
	this.src = "img/bottom_biao2.png";
})
pic1.on('mouseout',function(){
	this.src = "img/bottom_biao.png";
})

pic1.click(function(){
	$('#page_1').animate({'opactty' : '0'},2000,function(){
		$('#page_1').css({'visibility':'hidden'});
	});
	$('#page_2').css({'visibility':'visible'});
	
})


//左侧导航按钮开关 开始
$('.imgOpen').on('mouseover',function(){  //第0个图片按钮鼠标移入
	$('.openHover').css('display','block');
	$('.imgOpen').css('display','none');
	$('.closedHover').css('display','none');
	$('.imgClosed').css('display','none');
})
$('.openHover').on('mouseout',function(){  //第二个图片按钮鼠标移除
	$('.openHover').css('display','none');
	$('.imgOpen').css('display','block');
	$('.closedHover').css('display','none');
	$('.imgClosed').css('display','none');
})

$('.openHover').on('click',function(){ // 第二个图片按钮点击
	$('#divBoxLeft').css({
		'left':'0',
		'display':'block'
	});
	//左侧导航显示
	$('.wrap1').css('left','170px');//整个页面右移
	$('.openHover').css('display','none');
	$('.imgOpen').css('display','none');
	$('.imgClosed').css('display','block');
});
$('.imgClosed').on('mouseover',function(){
	$('.imgClosed').css('display','none');
	$('.closedHover').css('display','block');
	$('.openHover').css('display','none');
	$('.imgOpen').css('display','none');
})
$('.closedHover').on('mouseout',function(){
	$('.closedHover').css('display','none');
	$('.imgClosed').css('display','block');
	$('.openHover').css('display','none');
	$('.imgOpen').css('display','none');
})
$('.closedHover').on('click',function(){ //第一个图片按钮点击
	$('#divBoxLeft').css({
		'left':'170px'
	});
	$('.wrap1').css('left','0');
	$('.imgOpen').css('display','block');
	$('.closedHover').css('display','none');
	$('.imgClosed').css('display','none');
	$('.openHover').css('display','none');
})
//左侧hover
$('.divHover').on('mouseover',function(){
	$('.divHover').css({'left':'0'});
	$(this).css({'left':'-170px'});
	if(active){
		active.css({'left':'-170px'});
	}
})
$('.divHover').on('mouseout',function(){
	$(this).css({
		'left':'0'
	});
	if(active){
		active.css({'left':'-170px'});
	}
})
//hover我的二维码
$('#erWeimMa').on('mouseover',function(){
	$('#erWeimMaHover').css({
		'display': 'block'
	})
});
$('#erWeimMaHover').on('mouseout',function(){
	$('#erWeimMaHover').css({
		'display': 'none'
	})
});
//page3的中英文切换
english();
function english(){
	var aImg = $('.w655').find('a');
	var onOff = true;
	aImg.on('click',function(){
		if(onOff){
			$('#txteng').css({
			'opacity':'1',
			'left':'30px',
			'transition':'.5s'
			})
			$('#china_txteng').css({
				'opacity':'0',
				'transition':'.5s'
			});
			$('.txteng').css({
				'opacity':'1',
				'left':'30px',
				'transition':'.5s'
			})
			$('.china_txteng').css({
				'opacity':'0',
				'transition':'.5s'
			});
			$('#english_text').css({
				'opacity':'1',
				'right':'55px',
				'transition':'.5s'
			})
		onOff = false;
		}else{
			$('#txteng').css({
			'opacity':'0',
			'left':'256px',
			'transition':'1s'
			})
			$('#china_txteng').css({
				'opacity':'1',
				'transition':'1s'
			});
			$('.txteng').css({
				'opacity':'0',
				'left':'256px',
				'transition':'.5s'
			})
			$('.china_txteng').css({
				'opacity':'1',
				'transition':'.5s'
			});
			$('#english_text').css({
				'opacity':'0',
				'right':'-250px',
				'transition':'.5s'
			})
			onOff = true;
		}
	});
}
//page4的中英文切换
fnEnglish();
function fnEnglish(){
	var aImg = $('.w655').find('a');
	var onOff = true;
	aImg.on('click',function(){
		if(onOff){
			$('#english_text').css({
				'opacity':'1',
				'right':'150px',
				'transition':'.5s'
			})
			$('#china_text').css({
				'opacity':'0',
				'transition':'.5s'
			})
			onOff = false;
		}else{
			$('#english_text').css({
				'opacity':'0',
				'right':'-250px',
				'transition':'.5s'
			})
			$('#china_text').css({
				'opacity':'1',
				'transition':'.5s'
			})
			onOff = true;
		}
	});
	$('#showmessage').on('mouseover',function(){
		$('.mess_box').css({
			'top':'-31px',
			'transition':'.5s'
		})
	})
	$('#showmessage').on('mouseout',function(){
		$('.mess_box').css({
			'top':'0',
			'transition':'.5s'
		})
	})
}
//右上角logohover
$('.memory_logo').on('mouseover',function(){
	this.src="img/memory_logohover.gif";
})
$('.memory_logo').on('mouseout',function(){
	this.src="img/memory_logo.gif";
})
//page2的鼠标滚轮事件
hidden2();
function hidden2(){
	var div1 = document.getElementById('divScroll1');
	var div2 = document.getElementById('divScroll2');
	var div3 = document.getElementById('divScroll3');
	var div4 = document.getElementById('divScroll4');
//	var divOldParent = document.getElementById('div_wrap');
	
	div2.addEventListener('mousedown',fnDown);
	function fnDown(ev){
		var disY = ev.pageY - div2.offsetTop;
		document.addEventListener('mousemove',fnMove);
		document.addEventListener('mouseup',fnUp);
		function fnMove(ev){
			var t = ev.pageY - disY ;
			
			if(t < 0){
				t = 0;
			}else if(t > div1.offsetHeight - div2.offsetHeight){
				t = div1.offsetHeight - div2.offsetHeight;
			}
			
			var scale = t/(div1.offsetHeight - div2.offsetHeight);
			
			div4.style.top = -scale * (div4.scrollHeight - div3.clientHeight) + 'px';
			div2.style.top = t + 'px';
		}
		function fnUp(){
			document.removeEventListener('mousemove',fnMove);
			document.removeEventListener('mouseup',fnUp);
		}
		ev.preventDefault();
	}
	addWhell(document,function(down){
		var T = div2.offsetTop;
		if(down){
			//向上
			T -= 20; 
			if(T < 0){
				T = 0;
			}
		}else{
			//向下
			T += 20;
			if(T > div1.offsetHeight - div2.offsetHeight){
				T = div1.offsetHeight - div2.offsetHeight;
			}
		}
		var scale = T / (div1.offsetHeight - div2.offsetHeight);
//		console.log(scale)

		div4.style.top = scale * (div3.offsetHeight - div4.scrollHeight) + 'px';
		div2.style.top = T + 'px';
	});
};

//page3的鼠标滚轮事件
hidden3();
function hidden3(){
	var div1 = document.getElementById('div1');
	var div2 = document.getElementById('div2');
	var div3 = document.getElementById('about_conwrap');
	var div4 = document.getElementById('div4');
	var divOldParent = document.getElementById('div_wrap');
	
	div2.addEventListener('mousedown',fnDown);
	function fnDown(ev){
		var disY = ev.pageY - div2.offsetTop;
		document.addEventListener('mousemove',fnMove);
		document.addEventListener('mouseup',fnUp);
		function fnMove(ev){
			var t = ev.pageY - disY ;
			
			if(t < 0){
				t = 0;
			}else if(t > div1.offsetHeight - div2.offsetHeight){
				t = div1.offsetHeight - div2.offsetHeight;
			}
			
			var scale = t/(div1.offsetHeight - div2.offsetHeight);
			
			div4.style.top = -scale * (div4.scrollHeight - div3.clientHeight) + 'px';
			div2.style.top = t + 'px';
		}
		function fnUp(){
			document.removeEventListener('mousemove',fnMove);
			document.removeEventListener('mouseup',fnUp);
		}
		ev.preventDefault();
	}
	addWhell(document,function(down){
		var T = div2.offsetTop;
		if(down){
			//向上
			T -= 20; 
			if(T < 0){
				T = 0;
			}
		}else{
			//向下
			T += 20;
			if(T > div1.offsetHeight - div2.offsetHeight){
				T = div1.offsetHeight - div2.offsetHeight;
			}
		}
		var scale = T / (div1.offsetHeight - div2.offsetHeight);
//		console.log(scale)

		div4.style.top = scale * (div3.offsetHeight - div4.scrollHeight) + 'px';
		div2.style.top = T + 'px';
	});
}
//page4的鼠标滚轮事件
hidden4();
function hidden4(){
	var div1 = document.getElementById('div11');
	var div2 = document.getElementById('div22');
	var div3 = document.getElementById('contact_conWrap4');
	var div4 = document.getElementById('div44');
	var divOldParent = document.getElementById('div_wrap4');
	
	div2.addEventListener('mousedown',fnDown);
	function fnDown(ev){
		var disY = ev.pageY - div2.offsetTop;
		document.addEventListener('mousemove',fnMove);
		document.addEventListener('mouseup',fnUp);
		function fnMove(ev){
			var t = ev.pageY - disY ;
			
			if(t < 0){
				t = 0;
			}else if(t > div1.offsetHeight - div2.offsetHeight){
				t = div1.offsetHeight - div2.offsetHeight;
			}
			
			var scale = t/(div1.offsetHeight - div2.offsetHeight);
			
			div4.style.top = -scale * (div4.scrollHeight - div3.clientHeight) + 'px';
			div2.style.top = t + 'px';
		}
		function fnUp(){
			document.removeEventListener('mousemove',fnMove);
			document.removeEventListener('mouseup',fnUp);
		}
		ev.preventDefault();
	}
	addWhell(document,function(down){
		var T = div2.offsetTop;
		if(down){
			//向上
			T -= 20; 
			if(T < 0){
				T = 0;
			}
		}else{
			//向下
			T += 20;
			if(T > div1.offsetHeight - div2.offsetHeight){
				T = div1.offsetHeight - div2.offsetHeight;
			}
		}
		var scale = T / (div1.offsetHeight - div2.offsetHeight);
//		console.log(scale)

		div4.style.top = scale * (div3.offsetHeight - div4.scrollHeight) + 'px';
		div2.style.top = T + 'px';
	});
}
//page5的鼠标滚轮事件
hidden5();
function hidden5(){
	var div1 = document.getElementById('div111');
	var div2 = document.getElementById('div222');
	var div3 = document.getElementById('brandWrap5');
	var div4 = document.getElementById('div444');
	var divOldParent = document.getElementById('div_wrap5');
	
	div2.addEventListener('mousedown',fnDown);
	function fnDown(ev){
		var disY = ev.pageY - div2.offsetTop;
		document.addEventListener('mousemove',fnMove);
		document.addEventListener('mouseup',fnUp);
		function fnMove(ev){
			var t = ev.pageY - disY ;
			
			if(t < 0){
				t = 0;
			}else if(t > div1.offsetHeight - div2.offsetHeight){
				t = div1.offsetHeight - div2.offsetHeight;
			}
			
			var scale = t/(div1.offsetHeight - div2.offsetHeight);
			
			div4.style.top = -scale * (div4.scrollHeight - div3.clientHeight) + 'px';
			div2.style.top = t + 'px';
		}
		function fnUp(){
			document.removeEventListener('mousemove',fnMove);
			document.removeEventListener('mouseup',fnUp);
		}
		ev.preventDefault();
	}
	addWhell(document,function(down){
		var T = div2.offsetTop;
		if(down){
			//向上
			T -= 20; 
			if(T < 0){
				T = 0;
			}
		}else{
			//向下
			T += 20;
			if(T > div1.offsetHeight - div2.offsetHeight){
				T = div1.offsetHeight - div2.offsetHeight;
			}
		}
		var scale = T / (div1.offsetHeight - div2.offsetHeight);
//		console.log(scale)

		div4.style.top = scale * (div3.offsetHeight - div4.scrollHeight) + 'px';
		div2.style.top = T + 'px';
	});
}
//page2的数据渲染
(function(){
	var aa=$(".workshow");
	var data =date;
    var bb =$('#divScroll4');
       console.log(data)
	function zz(num){
		for(var i=0;i<data[num].length;i++){
		var str="";
		str+='<a href="work_detail17.html"><div class="work-imgbox"><img src="'+data[num][0]+'" alt="电梯VI设计，标识设计" title="天梭电梯,VI,LOGO,标识,标志,APP,UI,WEB设计" /></div>'+
'<div class="workinfo"><p class="workeng">'+data[num][1]+'</p>'+
'<h2>'+data[num][2]+'</h2>'+
'<p>'+data[num][3]+'</p></div></a>';

		}
      aa.eq(num).html(str);
 
	}
		
	for(var i=0;i<aa.length;i++){
		zz(i);
	}
})();
