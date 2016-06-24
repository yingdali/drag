	(function(){//动画
	       $(window).bind('scroll',function(){
       	var top=$(this).scrollTop();//当前窗口的滚动距离
       	console.log(top)
       	if(top>=900){
       		$('#must').addClass('animated bounceInLeft');
       	}
        if(top>=1200){
       		$('#baol').addClass('animated bounceInUp');
       	}
//      if(top>=1600){
//     		$('.pictureq1 img').addClass('animated rubberBand');
//     	}
//      if(top>=2100){
//     		$('.pictureq2 img').addClass('animated rubberBand');
//     	}
//      if(top>=2600){
//     		$('.pictureq3 img').addClass('animated shake');
//     	}
//      if(top>=3000){
//     		$('.pictureq4 img').addClass('animated shake');
//     	}
//     if(top>=3600){
//     		$('.pictureq5 img').addClass('animated tada');
//     	}
//      if(top>=4200){
//     		$('.pictureq6 img').addClass('animated tada');
//     	}
//      if(top>=4700){
//     		$('.pictureq7 img').addClass('animated rubberBand');
//     	}
//      if(top>=5200){
//     		$('.pictureq8 img').addClass('animated rubberBand');
//     	}
//       if(top>=5700){
//     		$('.pictureq9 img').addClass('animated wobble');
//     	}
//      if(top>=6200){
//     		$('.pictureq10 img').addClass('animated wobble');
//     	}
//      if(top>=6700){
//     		$('.pictureq11 img').addClass('animated rubberBand');
//     	}
//      if(top>=7200){
//     		$('.pictureq12 img').addClass('animated rubberBand');
//     	}
        if(top>=7450){
       		$('#animate').addClass('animated bounceInRight');
       	}
        if(top>=7600){
       		$('.show a').addClass('animated bounceInUp');
       	}
        });

	})();
//懒加载
	$(window).scroll(fn1);
//fn1();
	function fn1(){//图片懒加载
		$('.spring').find('.category-sub').css('display','none');//让选项卡中内容不被懒加载出来
		var scrollT = $(window).scrollTop();
		var iH = $(window).innerHeight();
		setTimeout(function(){
		$('img').each(function(i,elem){
//		$(elem).attr('src','');
		//给每张图片添加_src的属性名，$(elem).attr('src')为属性值即：src="img/img2/s2.jpg"/		
			if((scrollT+iH)> $(elem).offset().top){
		$(elem).attr('src',$(elem).attr('_src'));

			};
				
		});
		},500);
	}
function caidan(){//下拉菜单实现
	var timer=0;
	$('.sanjiao').mouseover(function(){
		$('.select').each(function(i,elem){
		$(elem).animate({
				opacity:1
				},800);
	 });
	});     
}
//caidan();
function tab(){//自动切换菜单
	var timer=0
	var num=-1;
	var length = $('.Brand_recommendation').find('.second').size();
	
//	console.log(length)
	timer=setInterval(function(){
		num++;
		num%=length;
		tab2(num); 
//		console.log(num)
	},2500);
	$('.ul_1').find('li').click(function(){
		clearTimeout(timer);
	 	var numq=$(this).index();
	 	num=numq;//把点击的是第几个传给定时器
//	    console.log(numq);
	$('.ul_1').find('a').attr('class','');
	$('.ul_1').find('a').eq(numq).attr('class','active');
	$('.Brand_recommendation').find('.second').css('display','none');
	$('.Brand_recommendation').find('.second').eq(numq).css('display','block');
		timer=setInterval(function(){
		numq++;
		numq%=length;
//		console.log(numq)
		tab2(numq); 
	},2500);
	 });
	function tab2(){
	    $('.Brand_recommendation').find('.second').css('display','none');
	    $('.Brand_recommendation').find('.second').eq(num).css('display','block');
		$('.ul_1').find('a').attr('class','');
		$('.ul_1').find('a').eq(num).attr('class','active');//给当前元素，即input设置属性
	}
	$('.Brand_recommendation').mouseover(function(){
	 	clearTimeout(timer);
	 });
	 
	$('.Brand_recommendation').mouseout(function(){
	 	timer=setInterval(function(){
		num++;
		num%=length;
		tab2(num); 
	},2500);
	 });
}
tab();
lunbo();
 function lunbo(){//焦点轮播图
    var timer=0;
    var numz=0;
    var length1 =$('.slide-control').find('.control-btn').size();
    timer=setInterval(function(){
    numz++;
    numz%=length1;
     lunbo2(numz);
     },2000);
      	$('.control-btn').mouseover(function(){//鼠标移入圆点效果
 		clearTimeout(timer);
 		$(this).addClass('active1').siblings('li').removeClass('active1');//给当前li加红，出去当前li去红    
 		$('.showw').removeClass();
 		$('.lunbo').find('img').each(function(i,elem){
 			$(elem).css('display','none'),
 			$(elem).css('opacity','0')
 		});//循环之后就不会出现跳着点失效
   	    numz1 = $(this).index();
        numz =numz1;
 	    //animate不支持display
		$('.lunbo').find('img').eq(numz).css({
			zIndex:10,
			display:'block',
		});
		$('.lunbo').find('img').eq(numz).animate({
			opacity:1
		},2000);
 });
     $('.spring').mouseover(function(){
    	clearTimeout(timer);
    });//鼠标移入图片，清除定时器
    $('.spring').mouseout(function(){
            timer=setInterval(function(){
		    numz++;
		    numz%=length1;
		     lunbo2(numz);
//		     console.log(numz)
		     },2000);//鼠标移出图片，开定时器
    });
     function lunbo2(){   
     	
       //自动轮播
        $('.control-btn').eq(0).addClass('active1');
        $('.control-btn').eq(numz).addClass('active1').siblings('li').removeClass('active1');
        $('.showw').removeClass();
 		$('.lunbo').find('img').each(function(i,elem){
 		$(elem).css({
 				display:'none',
 				opacity:0
 				});
 			
 		});//循环之后就不会出现跳着点失效
   		$('.lunbo').find('img').eq(numz).css({
			zIndex:10,
			display:'block'
		});
   		$('.lunbo').find('img').eq(numz).animate({
					opacity:1
		},2000);
    }
 }
//轮播上的选项卡
function huan(){
     $('.spring').find('dd').mouseover(function(){
        $('.spring').find('.category-sub').css('display','none');
	    $('.spring').find('.category-sub').eq( $(this).index() ).css('display','block')//eq($(this).index()),input索引
//		$('.spring').find('dd').attr('class','');
//		$(this).attr('class','active');//给当前元素，即input设置属性
     });
     $('.spring').find('dd').mouseout(function(){
     	 $('.spring').find('.category-sub').css('display','none');
     });
}
var mnum=0;
huan();
//左侧悬浮导航
(function(){			
	    var a0=$('.a0');//第0个li的第0个a
       	var a1=$('.txt');
       $(window).bind('scroll',function(){
       	var top=$(this).scrollTop();//当前窗口的滚动距离
//     	console.log(top)
       	var po=$('.p-price1')[0];
       	var zz=$('.g-elevator');
       	if(top>1000){
       	$('.g-elevator').animate({
			opacity:1
		},1000);
//		$('#must').addClass('animated bounceInLeft');
//		$('#baol').addClass('animated bounceInUp');
       	}
       	else if(top<1000){
         		  $('.g-elevator').css('display','none');
       	}
       	if(top<1800&&top>1300){
         fn(0);

       	}
       	else if(1800<top&&top<2300){
         fn(1);
       	}
       	else if(2300<top&&top<2800){
        fn(2);
       	}
       	else if(2800<top&&top<3300){
        fn(3);
       	}
       	else if(3300<top&&top<3800){
        fn(4);
       	}
       	else if(3800<top&&top<4300){
         fn(5);
       	}
       	else if(4300<top&&top<4800){
        fn(6);
       	}
       	else if(4800<top&&top<5300){
        fn(7);
       	}
       	else if(5300<top&&top<5800){
        fn(8);
       	}
       	else if(5800<top&&top<6300){
        fn(9);
       	}
       	else if(6300<top&&top<6800){
        fn(10);
       	}
       	else if(6800<top&&top<7300){
        fn(11);
       	}
       	else if(top>7201){
        	$('.g-elevator').css('display','none');
        }
       	function fn(num){
       	a0.css('display','block');
        a1.css('display','none');
        a0[num].style.display = 'none';     
        a1[num].style.display = 'block';
        a1[num].style.color = '#ef353d';
         $('.g-elevator').css('display','block');
       	}
       });

})();
(function(){//搜索框
	    var s=document.getElementById('search_input');
	    var div=document.getElementsByClassName('divzzzz');
 $('#search_input').bind('keyup',function(event){//键盘抬起，给出提示
	var jqueryInput = $(this);
	var searchText = jqueryInput.val();
	var srarch=document.getElementById('search-suggest');
	var oS = document.createElement('script');
	oS.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+searchText+'&json=1&cb=fn1';
	document.body.appendChild(oS);
$('#search-suggest').show();
 });//keyup结束

 $('#search_input').click(function(){
 	$('#search_input').val('');
 });
$(document).bind('click',function(){//点击提示
	$('#search-suggest').hide();
});
	window.fn1 = function(data){//jsonp接收数据
		var html = '';
		for(var i=0;i<data.s.length;i++){
			html+='<div class="divzzzz">'+data.s[i]+'</div>';
		}
//			  
		$('#search-result').html(html);		
		 	for(var i=0;i<div.length;i++){
		 	div[i].onclick=function(){
		 		s.value=this.innerHTML;
		 	};	 	
		}

	}
})();

