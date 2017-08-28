//所有的控制器 - 专门用于管理控制器
//将所有控制器整体定义成一个控制器模块
//var Controllers =angular.module("Controllers",[])
//测试
//创建控制器
angular.module("Controllers",[]).controller("navController",["$scope",function($scope){
	//模块模型层数据
	$scope.navs =[
		{link:"#/today",icon:"icon-home",text:"今日一刻"},
		{link:"#/older",icon:"icon-file-empty",text:"往期内容"},
		{link:"#/author",icon:"icon-pencil",text:"热门作者"},
		{link:"#/category",icon:"icon-menu",text:"栏目浏览"},
		{link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
		{link:"#/settings",icon:"icon-cog",text:"设置"}
	];
}])
//今日一刻的控制器
.controller("todayController",["$scope","$filter","$http","$rootScope",function($scope,$filter,$http,$rootScope){
	console.log("进入today")
	//获取今天日期2017-7-11 $filter 转成date过滤器
	var today =$filter('date')(new Date,'yyyy-MM-dd');
	$scope.time =today;
	$rootScope.loaded= false;//加载是否完成
	$http({
//服务器不能访问服务器  跨域url:"https://moment.douban.com/api/stream/date/"+today+"?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6",
		url:"./api/today.php",//请求地址从后台发送 解决跨域问题
		method:"get",
		params:{today:today},
	}).then(function(result){
		
		$rootScope.loaded= true;
		//将数据放到模型层
		/*data，posts在php返回的值里*/
		$scope.time =result.data.date;//日期
		$scope.posts =result.data.posts; //当天的所有数据
	})//success被废弃 不建议使用 success拿回{time:"333",name:"list"}   then拿回{"data":{time:"333",name:"list"},"success":"ok"}

}])
.controller("olderController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	//获取今天日期2017-7-11 $filter 转成date过滤器
	$rootScope.loaded= false;//加载是否完成
	$http({
//服务器不能访问服务器  跨域url:"https://moment.douban.com/api/stream/date/"+older+"?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6",
		url:"./api/older.php",//请求地址从后台发送 解决跨域问题
		method:"get",
	}).then(function(result){	
		$rootScope.loaded= true;
		//将数据放到模型层
		/*data，posts在php返回的值里*/
		$scope.time =result.data.date;//日期
		$scope.posts =result.data.posts; //当天的所有数据
	})
}])
.controller("authorController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	
	$rootScope.loaded= false;
	$http({
		url:"./api/author.php",//请求地址从后台发送 解决跨域问题
		method:"get",
	}).then(function(result){
		console.log(result)
		$rootScope.loaded= true;
		$scope.authors =result.data.authors; 
	})
}])
.controller("categoryController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	
	$rootScope.loaded= false;
	$http({
		url:"./api/category.php",//请求地址从后台发送 解决跨域问题
		method:"get",
	}).then(function(result){
		console.log(result)
		$rootScope.loaded= true;
		$scope.columns =result.data.columns; 
	})
}])
.controller("categoryController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	
	$rootScope.loaded= false;
	$http({
		url:"./api/category.php",//请求地址从后台发送 解决跨域问题
		method:"get",
	}).then(function(result){
		console.log(result)
		$rootScope.loaded= true;
		$scope.columns =result.data.columns; 
	})
}])

