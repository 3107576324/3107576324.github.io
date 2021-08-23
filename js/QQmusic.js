/* 轮播图 */
layui.use('carousel', function() {
	var carousel = layui.carousel;
	//建造实例
	carousel.render({
		elem: '#Carouselmap1',
		width: '100%' //设置容器宽度
			,
		height: '350px' //设置容器高度
			,
		arrow: 'hover' //始终显示箭头
			,
		autoplay: false, //自动播放
		interval: 5000
		/* ,anim: 'fade' //切换动画方式 */
	});
	carousel.render({
		elem: '#Carouselmap2',
		width: '1510px' //设置容器宽度
			,
		height: '370px' //设置容器高度
			,
		arrow: 'hover' //始终显示箭头
			,
		autoplay: false, //自动播放
		interval: 5000
		/* ,anim: 'fade' //切换动画方式 */
	});
	carousel.render({
		elem: '#Carouselmap3',
		width: '1700px' //设置容器宽度
			,
		height: '300px' //设置容器高度
			,
		arrow: 'hover' //始终显示箭头
			,
		autoplay: false, //自动播放
		interval: 5000
		/* ,anim: 'fade' //切换动画方式 */
	});
	carousel.render({
		elem: '#Carouselmap4',
		width: '1510px' //设置容器宽度
			,
		height: '600px' //设置容器高度
			,
		arrow: 'hover' //始终显示箭头
			,
		autoplay: false, //自动播放
		interval: 5000
		/* ,anim: 'fade' //切换动画方式 */

	});
	carousel.render({
		elem: '#Carouselmap5',
		width: '1510px' //设置容器宽度
			,
		height: '600px' //设置容器高度
			,
		arrow: 'hover' //始终显示箭头
			,
		autoplay: false, //自动播放
		interval: 5000
		/* ,anim: 'fade' //切换动画方式 */

	});
});


/* 登录逻辑 */
var names = [];
var passwords = [];
var LoginStatus = false;
names.push("admin");
passwords.push("123456");

$("#login-btn").click(function() {
	if (LoginStatus) {
		if (confirm("确定退出吗？")) {
			$("#login-btn>img").hide();
			$("#login-btn>span").css("display", "none");
			$("#login-btn>a").show();
			LoginStatus = false;
		}
	} else {
		$("main").css("display", "none");
		$("#loginbox").css("display", "flex");
	}
})

$(".loginright>div>span:nth-of-type(1)").click(function() {
	var name = $("#loginname").val();
	var password = $("#loginpassword").val();
	judgeid();
	judgepass();
	if (pdname(name) && pdpass(password)) {
		$("main").css("display", "flex");
		$("#loginbox").hide();
		$("#loginname").val("");
		$("#loginpassword").val("");
		$("#login-btn>a").hide();
		$("#login-btn>img").show();
		$("#login-btn").css("ld", "login-btn2");
		LoginStatus = true;

	} else {
		/* alert("密码错误"); */
		$(".no").css("display", "flex");
	}
})

function pdname(name) {
	for (var i = 0; names.length; i++) {
		if (names[i] == name) {
			return true;
		}
		return false;
	}
}

function pdpass(pass) {
	for (var i = 0; passwords.length; i++) {
		if (passwords[i] == pass) {
			return true;
		}
		return false;
	}
}

$(".loginright>div>span:nth-of-type(2)").click(function() {
	$("main").css("display", "flex");
	$("#loginbox").hide();
	$("#loginname").val("");
	$("#loginpassword").val("");
})
/* $(".myMusic").click(function(){
	if(LoginStatus){
		alert("已登录");
	}else{
		alert("请先登录！");
	}
}) */
$("#login-btn").mousemove(function() {
	if (LoginStatus) {
		$("#login-btn>img").hide();
		$("#login-btn>span").css("display", "block");
	}
})
$("#login-btn").mouseout(function() {
	if (LoginStatus) {
		$("#login-btn>img").show();
		$("#login-btn>span").css("display", "none");
	}
})
/* 密码错误弹窗关闭按钮 */
$(".no>p:nth-of-type(2)").click(function() {
	$(".no").css("display", "none");
})
// 表单验证
$("#loginname").blur(function(){
	judgeid();
})
$("#loginpassword").blur(function(){
	judgepass();
})
function judgeid(){
	var id=$("#loginname").val();
	if(id.length<5||id.length>10){
		$("#psname").text("你输入的账号有误，请检查重新输入！");
		$("#psname").css("color","#ff0000");
		return false;
	}else{
		$("#psname").text("");
		return true;
	}
}
function judgepass(){
	var pass=$("#loginpassword").val();
	if(pass.length<6||pass.length>12){
		$("#pspass").text("你输入的密码有误，请检查重新输入！");
		$("#pspass").css("color","#ff0000");
		return false;
	}else{
		$("#pspass").text("");
		return true;
	}
}