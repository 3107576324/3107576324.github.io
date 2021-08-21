$(".mv-head>div:nth-of-type(1)>div>ul>li").click(function(){
	$(".mv-head>div:nth-of-type(1)>div>ul>li").css({"background-color":"#fff","color":"#000"});
	$(this).css({"background-color":"rgb(49,194,124)","color":"#fff"});
})
$(".mv-head>div:nth-of-type(2)>div>ul>li").click(function(){
	$(".mv-head>div:nth-of-type(2)>div>ul>li").css({"background-color":"#fff","color":"#000"});
	$(this).css({"background-color":"rgb(49,194,124)","color":"#fff"});
})
/* 推荐，最新点击样式 */
$(".mv-body>div:nth-of-type(1)>div:nth-of-type(2)>span").click(function(){
	$(".mv-body>div:nth-of-type(1)>div:nth-of-type(2)>span").css({"background-color":"#fff","color":"#000","border":"#fff solid 1px"})
	$(this).css({"background-color":"rgb(49,194,124)","color":"#fff","border":"rgb(153,153,153) solid 1px"})
})