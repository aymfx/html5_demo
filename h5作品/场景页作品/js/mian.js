//获得画布和画笔
var canvas=document.getElementById("canvas");
  	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	canvas.style.background="url(img/bg1.png) no-repeat center center"
	
//canvas.style.background="black";
var ctx=canvas.getContext("2d");
//----------------首页---------------
     //文字淡出
    function nowpage1(){
    	$(".wenzi1_1").fadeIn(600,function(){
    		$(".wenzi1_2").fadeIn(600,function(){
    			$(".wenzi1_3").fadeIn(900,function(){
    				$(".wenzi1_4").fadeIn(1500,function(){
    					$(".wenzi1_1").fadeOut(300);
    					$(".wenzi1_2").fadeOut(300);
    					$(".wenzi1_3").fadeOut(300);
    					$(".wenzi1_4").fadeOut(300,function(){
    						$("#a1").fadeIn(1500);
    					});
    				});
    			});
    			
    		})
    	})
    }
 nowpage1();
//画布的点击事件
//---------第二页----------------
//实心圆
function DrawSmallArc(x,y,radious,color){
	this.x=x;
	this.y=y;
	this.radius=radious;
	this.color=color;
	this.drawsmall=function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
		ctx.fillStyle=this.color;			
		ctx.closePath();
		ctx.fill();
	}
	
}
//画虚线圆
function Arc(x,y,radius,clock,color,parts){
	this.x=x;
	this.y=y;
	this.radius=0;
	this.finalRad=radius;
	this.clock=clock;
	this.parts=parts;
	this.color=color;
	this.startAngel=0;
	this.lineAngel=Math.PI*2/this.parts;
	this.drawSelf=function(){	
		if(this.parts==0){	
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
		ctx.lineWidth=2;
		ctx.strokeStyle=this.color;			
		ctx.closePath();
		ctx.stroke();
		}else{
		for (var i=0;i<this.parts;i++) {
			if(i%2==0){
				continue;
			}
		
		ctx.beginPath();
		ctx.moveTo(this.x+this.radius*Math.sin(this.startAngel+this.lineAngel*i),
		this.y+this.radius*Math.cos(this.startAngel+this.lineAngel*i));
		ctx.lineTo(this.x+this.radius*Math.sin(this.startAngel+this.lineAngel*(i+1)),
		this.y+this.radius*Math.cos(this.startAngel+this.lineAngel*(i+1)));
		ctx.strokeStyle=this.color;
		ctx.closePath();
		ctx.stroke();
		}
		
		}
	}
   this.arcTransfrom=function(){
   	this.startAngel+=this.clock;
   	
   }
   var b=1;
   this.changeRadious=function(){
   	
   	if(b==1){
   		if(this.radius<this.finalRad){
   			this.radius +=0.0005*this.finalRad*this.finalRad;
   		}else{
   			b=0;
   		}
   		
   		
   	}
   	else if(b==0){
   		if(this.radius>this.finalRad*0.5){
   			this.radius -=0.0005*this.finalRad*this.finalRad;
   		}else{
   			b=1;
   		}
   		
   	}
   	
   }
	
}
//划线
function threeLineTo(){
	//第一个主题
	  ctx.beginPath();
	  ctx.moveTo(canvas.width*0.20,canvas.height*0.6);
	  ctx.lineTo(canvas.width*0.25,canvas.height*0.65);	  
	  ctx.strokeStyle="chartreuse";
	  ctx.closePath();
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.moveTo(canvas.width*0.25,canvas.height*0.65);
	  ctx.lineTo(canvas.width*0.75,canvas.height*0.65);
	  ctx.strokeStyle="chartreuse";
	  ctx.closePath();
	  ctx.stroke();
	  //第2个主题
	  ctx.beginPath();
	  ctx.moveTo(canvas.width*0.20,canvas.height*0.7);
	  ctx.lineTo(canvas.width*0.25,canvas.height*0.75);	  
	  ctx.strokeStyle="chartreuse";
	  ctx.closePath();
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.moveTo(canvas.width*0.25,canvas.height*0.75);
	  ctx.lineTo(canvas.width*0.75,canvas.height*0.75);
	  ctx.strokeStyle="chartreuse";
	  ctx.closePath();
	  ctx.stroke();
	    //第3个主题
	  ctx.beginPath();
	  ctx.moveTo(canvas.width*0.20,canvas.height*0.8);
	  ctx.lineTo(canvas.width*0.25,canvas.height*0.85);	  
	  ctx.strokeStyle="chartreuse";
	  ctx.closePath();
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.moveTo(canvas.width*0.25,canvas.height*0.85);
	  ctx.lineTo(canvas.width*0.75,canvas.height*0.85);
	  ctx.strokeStyle="chartreuse";
	  ctx.closePath();
	  ctx.stroke();  
	  //第四个主题
	  ctx.beginPath();
	  ctx.moveTo(canvas.width*0.20,canvas.height*0.9);
	  ctx.lineTo(canvas.width*0.25,canvas.height*0.95);	  
	  ctx.strokeStyle="chartreuse";
	  ctx.closePath();
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.moveTo(canvas.width*0.25,canvas.height*0.95);
	  ctx.lineTo(canvas.width*0.75,canvas.height*0.95);
	  ctx.strokeStyle="chartreuse";
	  ctx.closePath();
	  ctx.stroke(); 
}
var timer;
var arc=[];
var arc_1=new Arc(canvas.width*0.20,canvas.height*0.6,20,0.01,'green',30);
var arc_2=new Arc(canvas.width*0.20,canvas.height*0.7,20,-0.01,'green',30);
var arc_3=new Arc(canvas.width*0.20,canvas.height*0.8,20,0.01,'green',30);
var arc_4=new Arc(canvas.width*0.20,canvas.height*0.9,20,0.01,'green',30);
arc.push(arc_1);
arc.push(arc_2);
arc.push(arc_3);
arc.push(arc_4);
var small=[];
var small_1=new DrawSmallArc(canvas.width*0.20,canvas.height*0.6,10,"red");
var small_2=new DrawSmallArc(canvas.width*0.20,canvas.height*0.7,10,"red");
var small_3=new DrawSmallArc(canvas.width*0.20,canvas.height*0.8,10,"red");
var small_4=new DrawSmallArc(canvas.width*0.20,canvas.height*0.9,10,"red");
small.push(small_1);
small.push(small_2);
small.push(small_3);
small.push(small_4);
//定时器，无线循环圆
function loop1(){
	timer=setInterval(function(){
		
		ctx.clearRect(0,0,canvas.width,canvas.height);
		for(var j=0;j<small.length;j++){
			small[j].drawsmall();	
		}
		threeLineTo();
		for(var i=0;i<arc.length;i++){
	  	  arc[i].drawSelf();
	  	  arc[i].arcTransfrom();
	  	  arc[i].changeRadious();
	  }
		
	},30)
	  
}


var panduan=0;
var nowpage=1;
$("#a1").click(function(){
	nowpage++;
	if(nowpage==2){
		$("#a1").fadeOut(50)
		 ctx.clearRect(0,0,canvas.width,canvas.height);
		// canvas.style.backgroundSize="100%";
	   canvas.style.background="url(img/bg2.jpeg) no-repeat center center";
	    loop1();
	     
	    $(".zhuti_1").fadeIn(600,function(){
	    	$(".zhuti_2").fadeIn(600,function(){
	    		$(".zhuti_3").fadeIn(600,function(){
	    			$(".zhuti_4").fadeIn(600);
	    		})
	    	})
	    })
	}
})
//返回主页的点击事件
$(".fanhui").click(function(){
	   if(panduan==0){
	   	$(".fanhui").fadeOut(20);
	   	$(".guanglingsan").fadeOut(300,function(){
	   		$(".guanglingsan_title").fadeOut(300);
	   	})
	   	$(".xuanshang").fadeOut(300,function(){
	   		$(".xuanshang_title").fadeOut(300);
	   	})
	   	$(".muhan").fadeOut(300,function(){
	   		$(".muhan_title").fadeOut(300);
	   	})
	   	$(".nishang").fadeOut(300,function(){
	   		$(".nishang_title").fadeOut(300);
	   	})
	   	
	   	$("#a1").fadeOut(50)
		 ctx.clearRect(0,0,canvas.width,canvas.height);
		// canvas.style.backgroundSize="100%";
	   canvas.style.background="url(img/bg2.jpeg) no-repeat center center";
	    loop1();
	     
	    $(".zhuti_1").fadeIn(600,function(){
	    	$(".zhuti_2").fadeIn(600,function(){
	    		$(".zhuti_3").fadeIn(600,function(){
	    			$(".zhuti_4").fadeIn(600);
	    		})
	    	})
	    })
	    
	   }else if(panduan==1){
	   	$(".fanhui").fadeOut(20);
	   	$(".hanfu").fadeOut(300,function(){
	   		$(".hanfu_title").fadeOut(300);
	   	})
	   	$(".qinfu").fadeOut(300,function(){
	   		$(".qinfu_title").fadeOut(300);
	   	})
	   	$(".hufu").fadeOut(300,function(){
	   		$(".hufu_title").fadeOut(300);
	   	})
	   	$(".qingfu").fadeOut(300,function(){
	   		$(".qingfu_title").fadeOut(300);
	   	})
	   	
	   	$("#a1").fadeOut(50)
		 ctx.clearRect(0,0,canvas.width,canvas.height);
		// canvas.style.backgroundSize="100%";
	   canvas.style.background="url(img/bg2.jpeg) no-repeat center center";
	    loop1();
	     
	    $(".zhuti_1").fadeIn(600,function(){
	    	$(".zhuti_2").fadeIn(600,function(){
	    		$(".zhuti_3").fadeIn(600,function(){
	    			$(".zhuti_4").fadeIn(600);
	    		})
	    	})
	    })
	  
	   }else if(panduan==2){
	   	$(".fanhui").fadeOut(20);
	   	$(".baizihua").fadeOut(300,function(){
	   		$(".baizihua_title").fadeOut(300);
	   	})
	   	$(".longk").fadeOut(300,function(){
	   		$(".longk_title").fadeOut(300);
	   	})
	   	$(".huaqiangu").fadeOut(300,function(){
	   		$(".huaqiangu_title").fadeOut(300);
	   	})
	   	$(".mingyuexin").fadeOut(300,function(){
	   		$(".mingyuexin_title").fadeOut(300);
	   	})
	   	  a1();
	   }
	   else if(panduan==3){
	   	$(".fanhui").fadeOut(20);
	   	$(".zongzi").fadeOut(300,function(){
	   		$(".zongzi_title").fadeOut(300);
	   	})
	   	$(".xingrencha").fadeOut(300,function(){
	   		$(".xingrencha_title").fadeOut(300);
	   	})
	   	$(".jisuisun").fadeOut(300,function(){
	   		$(".jisuisun_title").fadeOut(300);
	   	})
	   	$(".yipinggao").fadeOut(300,function(){
	   		$(".yipinggao_title").fadeOut(300);
	   	})
	   	a1();
	   }
	   
	   
	   
})
function a1(){
	 	$("#a1").fadeOut(50)
		 ctx.clearRect(0,0,canvas.width,canvas.height);
		// canvas.style.backgroundSize="100%";
	   canvas.style.background="url(img/bg2.jpeg) no-repeat center center";
	    loop1();
	     
	    $(".zhuti_1").fadeIn(600,function(){
	    	$(".zhuti_2").fadeIn(600,function(){
	    		$(".zhuti_3").fadeIn(600,function(){
	    			$(".zhuti_4").fadeIn(600);
	    		})
	    	})
	    })
}
//第一个主题
$(".zhuti_1").click(function(){
	clearInterval(timer);
	 $(".zhuti_1").fadeOut(600);
	 $(".zhuti_2").fadeOut(600);
	 $(".zhuti_3").fadeOut(600);
	 $(".zhuti_4").fadeOut(30);
	 ctx.clearRect(0,0,canvas.width,canvas.height);
	 canvas.style.background="url(img/zhubg1.jpeg)";
	 $(".zhuti_title").fadeIn(3000,function(){
	 	$(".zhuti_title").fadeOut(2000,function(){
	 	ctx.clearRect(0,0,canvas.width,canvas.height);
	 	canvas.style.background="url(img/zhubg2.jpg)";
	 	
	 	$(".guanglingsan").animate({top:'3%'},3000,function(){
	 		$(".guanglingsan_title").fadeIn(3000);
	 	});
	 	$(".xuanshang").animate({right:'35%'},3000,function(){
	 		$(".xuanshang_title").fadeIn(3000);
	 	});
	 	$(".muhan").animate({left:'5%'},3000,function(){
	 		$(".muhan_title").fadeIn(3000);
	 	});
	 	$(".nishang").animate({bottom:'10%'},3000,function(){
	 		$(".nishang_title").fadeIn(3000);
	 	});
	 	panduan=0;
	 	$(".fanhui").fadeIn(300);
	 	});
	 });
	 console.log(1);
	 
})

//第二个主题
$(".zhuti_2").click(function(){
	 clearInterval(timer);
	 $(".zhuti_1").fadeOut(600);
	 $(".zhuti_2").fadeOut(600);
	 $(".zhuti_3").fadeOut(600);
	 $(".zhuti_4").fadeOut(30);
	 ctx.clearRect(0,0,canvas.width,canvas.height);
	 canvas.style.background="url(img/zhuti2_bg1.jpg)";
	 $(".zhuti2_title").fadeIn(6000,function(){
	 	$(".zhuti2_title").fadeOut(3000,function(){
	 	ctx.clearRect(0,0,canvas.width,canvas.height);
	 	canvas.style.background="url(img/zhuti2_bg2.jpeg) no-repeat center center";
	 	$(".hanfu").animate({top:'3%'},3000,function(){
	 		$(".hanfu_title").fadeIn(3000);
	 	});
	 	$(".qinfu").animate({right:'35%'},3000,function(){
	 		$(".qinfu_title").fadeIn(3000);
	 	});
	 	$(".hufu").animate({left:'5%'},3000,function(){
	 		$(".hufu_title").fadeIn(3000);
	 	});
	 	$(".qingfu").animate({bottom:'5%'},3000,function(){
	 		$(".qingfu_title").fadeIn(3000);
	 	});
	 	panduan=1;
	 	$(".fanhui").fadeIn(300);
	 	
	 	console.log(2);
	 	})
	 })
	 
})

//第三个主题
$(".zhuti_3").click(function(){
	 clearInterval(timer);
	 $(".zhuti_1").fadeOut(600);
	 $(".zhuti_2").fadeOut(600);
	 $(".zhuti_3").fadeOut(600);
	 $(".zhuti_4").fadeOut(30);
	 ctx.clearRect(0,0,canvas.width,canvas.height);
	 canvas.style.background="url(img/zhuti_bg1.gif) no-repeat center center";
	
	//---------
	 $(".zhuti3_title").fadeIn(3000,function(){
	 	$(".zhuti3_title").fadeOut(3000,function(){
	 	ctx.clearRect(0,0,canvas.width,canvas.height);
	 	canvas.style.background="url(img/zhuti3_bg2.gif)  no-repeat center center";
	 	$(".baizihua").animate({top:'8%'},3000,function(){
	 		$(".baizihua_title").fadeIn(3000);
	 	});
	 	$(".longk").animate({right:'15%'},3000,function(){
	 		$(".longk_title").fadeIn(3000);
	 	});
	 	$(".huaqiangu").animate({left:'5%'},3000,function(){
	 		$(".huaqiangu_title").fadeIn(3000);
	 	});
	 	$(".mingyuexin").animate({bottom:'8%'},3000,function(){
	 		$(".mingyuexin_title").fadeIn(3000);
	 	});
	 	panduan=2;
	 	$(".fanhui").fadeIn(300);
	 	
	 	console.log(2);
	 	})
	 })
	 //--------
})

//第四个主题
$(".zhuti_4").click(function(){
	 clearInterval(timer);
	 $(".zhuti_1").fadeOut(600);
	 $(".zhuti_2").fadeOut(600);
	 $(".zhuti_3").fadeOut(600);
	 $(".zhuti_4").fadeOut(30);
	 ctx.clearRect(0,0,canvas.width,canvas.height);
	 canvas.style.background="url(img/zhuti4_bg1.gif) no-repeat center center";
	 //---------
	 $(".zhuti4_title").fadeIn(3000,function(){
	 	$(".zhuti4_title").fadeOut(3000,function(){
	 	ctx.clearRect(0,0,canvas.width,canvas.height);
	 	canvas.style.background="url(img/zhuti4_bg2.gif) no-repeat center center";
	 	$(".zongzi").animate({top:'3%'},3000,function(){
	 		$(".zongzi_title").fadeIn(3000);
	 	});
	 	$(".xingrencha").animate({right:'25%'},3000,function(){
	 		$(".xingrencha_title").fadeIn(3000);
	 	});
	 	$(".jisuisun").animate({left:'5%'},3000,function(){
	 		$(".jisuisun_title").fadeIn(3000);
	 	});
	 	$(".yipinggao").animate({bottom:'5%'},3000,function(){
	 		$(".yipinggao_title").fadeIn(3000);
	 	});
	 	panduan=3;
	 	$(".fanhui").fadeIn(300);	 	
	 	console.log(2);
	 	})
	 })
	 
})
