
    	var span=$('.cart-num')[0];
    window.addEventListener('storage',function(){
//  window.addEventListener('storage',function(){
    	console.log(window.localStorage.getItem('count'))
    	span.innerHTML = window.localStorage.getItem('count');
   })
	    window.addEventListener('storage',function(){
//  window.addEventListener('storage',function(){
    	console.log(window.localStorage.getItem('count'))
    	span.innerHTML = window.localStorage.getItem('count');
    })



//	console.log(inputs.value)