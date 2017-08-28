/*
* @Author: Administrator
* @Date:   2017-07-10 11:34:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-12 09:27:06
*/

'use strict';
// app.js是整个angularjs应用程序的入口
// 创建应用程序
var yike = angular.module("yike",['ngRoute','Controllers','directives']);
// 定义toggle方法
// $(function(){})
yike.run(["$rootScope",function($rootScope){
	// 往$rootScope上绑定toggle方法
	$rootScope.collapsed = false;
	$rootScope.toggle = function(){
		// 找到navs节点 将left属性改变(添加collapse类)
		$rootScope.collapsed = !$rootScope.collapsed;
		// 找到dd节点 改变transform的值
		var dds=document.querySelectorAll(".navs dd");
		
		//根据$rootScope.collapsed的值判断是收起还是打开
		if($rootScope.collapsed){
			for(var i=0;i<dds.length;i++){
				var dd=dds[i];
				dd.style.transform="translate(0)"
				//设置每个dd依次入场
				dd.style.transitionDuration=(i+1)*0.15+"s";
				
			}
		}else{
			//折起时候的动画
			for(var i=0;i<dds.length;i++){
				var dd=dds[i];
				dd.style.transform="translate(-100%)";
				dd.style.transitionDuration=(dds.length-i)*0.15+"s";
				
			}
		}
		//遍历所有dds 将其中的每一个dd的transform属性
		//改成translate(0)
		
	}
}])
//解决锚点乱码bug
yike.config(function($locationProvider){
	$locationProvider.hashPrefix('');
});
//配置路由
yike.config(["$routeProvider",function($routeProvider){
	//具体内容
	$routeProvider.when('/today',{
		templateUrl:"./views/today.html",
		controller:"todayController"
	}).when('/older',{
		templateUrl:"./views/older.html",
		controller:"olderController"
	}).when('/author',{
		templateUrl:"./views/author.html",
		controller:"authorController"
	}).when('/category',{
		templateUrl:"./views/category.html",
		controller:"categoryController"
	}).when('/settings',{
		templateUrl:"./views/settings.html",
		
	})
	
}])


var dl =document.querySelector(".dl");
dl.addEventListener("click", function(e){
	var t=e.target;
	var dh =document.querySelector(".dh");
	dh.innerHTML=t.innerHTML;
})