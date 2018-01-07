// JavaScript Document
/*在HTML中随机生成div，每个div都包含一张雪花图片，用随机数控制div的left和height，让它在一定时间内产生动画最终消失*/
window.onload=function(){ 
snowFlow(); 
function snowFlow(left,height,src){ 
var container=document.createElement('div');
var pic=document.createElement('img'); 
var snowFlow=document.getElementById('main'); 
pic.className='pic'; 
container.className='container';
snowFlow.appendChild(container); 
container.appendChild(pic);
container.style.left=left+'px'; 
container.style.height=height+'px';
pic.src=src; 
setTimeout(function(){
	snowFlow.removeChild(container); 
	},5000);
}
setInterval(function(){ 
	var left=Math.random()*window.innerWidth; 
	var height=Math.random()*window.innerHeight; 
	var src = 'img/snow.png';
	snowFlow(left,height,src); 
	},500) 
}
