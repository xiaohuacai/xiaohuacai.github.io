// JavaScript Document
/*��HTML���������div��ÿ��div������һ��ѩ��ͼƬ�������������div��left��height��������һ��ʱ���ڲ�������������ʧ*/
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
