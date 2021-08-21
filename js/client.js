var imgs=["../img/khdbj1.jpg","../img/khdbj2.jpg","../img/khdbj3.jpg","../img/khdbj4.jpg"];

$(".bottomouterbox>ul>li").click(function(){
	$(".bottomouterbox>ul>li").css("border-top","none");
	$(".bottomouterbox>ul>li>p").css("color","rgb(153,153,153)");
	$(this).css("border-top","1px solid #fff");
	$($(this).children()[1]).css("color","#fff");
	$($(this).children()[0]).css("color","#fff");
	$(".bottomouterbox>ul>li>span:nth-of-type(2)")[0].innerText="false";
	$(".bottomouterbox>ul>li>span:nth-of-type(2)")[1].innerText="false";
	$(".bottomouterbox>ul>li>span:nth-of-type(2)")[2].innerText="false";
	$(".bottomouterbox>ul>li>span:nth-of-type(2)")[3].innerText="false";
	$(this).children()[3].innerText="true";
/* 	var x=$(this).children()[2].innerText;
	x="url(../img/khdbj2.jpg)";
	console.log(x);
	$("main").css({"background-image":x});
	 */
})
$(".bottomouterbox>ul>li").hover(
function(){
	console.log($(this).children()[3].innerText);
	if($(this).children()[3].innerText=="false"){
		$($(this).children()[1]).css("color","#fff");
		$($(this).children()[0]).css("color","#fff");
	}
	
},function(){
	if($(this).children()[3].innerText=="false"){
		$($(this).children()[1]).css("color","rgb(153,153,153)");
		$($(this).children()[0]).css("color","rgb(153,153,153)");
	}
	
})
