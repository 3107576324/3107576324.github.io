window.onload=function(){
			var tobtn = document.getElementById("btn");
			var timer;
			var height=document.documentElement.clientHeight;
			window.onscroll=function(){
				var backtop=document.documentElement.scrollTop;
				if(backtop>=height){
					tobtn.style.display="block"
				}else{
					tobtn.style.display="none"
				}
			}
			tobtn.onclick=function(){
				var backtop=document.documentElement.scrollTop;
				var speedtop=backtop/5;
				timer=setInterval(function(){
					document.documentElement.scrollTop = backtop-speedtop;
					backtop-=100;
					console.log(backtop);
					if(backtop<0){
						clearInterval(timer);
					}
				},30)
				
			}
		}