var music=document.getElementById('music');
var audio=document.getElementsByTagName('video')[0];
var page1=document.getElementById('page1');
var page2=document.getElementById('page2');
var page3=document.getElementById('page3');
music.addEventListener('touchstart',function(){
		if(audio.paused){//暂停
		audio.play();
//		this.setAttribute('class','play');点击暂停之后回到初始位置而不是旋转的当前位置，效果不好
        this.style.animationPlayState='running';
        this.style.webkitAnimationPlayState='running';
        
	}else{
		audio.pause();//暂停
//		this.setAttribute('class','');
        this.style.animationPlayState='paused';
        this.style.webkitAnimationPlayState='paused';
	}
},false)
//当音乐播放完毕，转动停止
audio.addEventListener('ended',function(event){
	music.setAttribute('class','');
	
},false)
page1.addEventListener('touchstart',function(event){
	page1.style.display="none";
	page2.style.display="block";
	page3.style.top='0';
	setTimeout(function(){
		page2.setAttribute('class','page fadeout');
		page3.style.display="block";
//		page3.setAttribute('class','page fadein');
	},5500);
},false)
