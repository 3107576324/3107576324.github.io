/* 当点击时改变字体颜色和背景颜色 */
$(".csl-head>ul>li>ul>li").click(function(){
	$(".csl-head>ul>li>ul>li").css({"color":"#000","background-color":"#fff"});
	$(this).css({"color":"#fff","background-color":"rgb(49,194,124)"});
})
/* 最新和推荐按钮点击事件 */
var x=false;
$(".csl-body>div:nth-of-type(1)>div:nth-of-type(2)>span").click(function(){
$(".csl-body>div:nth-of-type(1)>div:nth-of-type(2)>span").css({"color":"#000","background-color":"#fff","border":"solid rgb(153,153,153) 1px"})	;
$(this).css({"border":"1px #fff solid","background-color":"rgb(49,194,124)","color":"#fff"});
})
