
//轮播
    $(function(){
        //每个固定的时间移动图片
        var timer = setInterval(picLoop,2000);
        var index = 0;
        function picLoop(){
            index++;
            if (index===8) {index=0;}
            $(".banner-img ul").animate({"left":-590*index},400);
            $(".banner-index li ").eq(index).addClass("current").siblings().removeClass("current");
        }

        //定时器的控制
        $(".banner").hover(function(){
            clearInterval(timer);
        //     $(".arrow-left").show();
        //     $(".arrow-right").show();
        },function(){
            timer = setInterval(picLoop,2000);
        //     $(".arrow-left").hide();
        //     $(".arrow-right").hide();
        });

        $(".banner-index li").click(function(){
            $(this).eq(index).addClass("current").siblings().removeClass("current");
            index = $(this).index();
            $(".banner-img ul").animate({"left":-590*index},400);
        });

        $(".arrow-left").click(function(){
            index--;
            if (index===-1) {index=7;}
            $(".banner-img ul").animate({"left":-590*index},400);
            $(".banner-index li").eq(index).addClass("current").siblings().removeClass("current");
        });
        $(".arrow-right").click(function(){
            index++;
            if (index===8) {index=0}
            $(".banner-img ul").animate({"left":-590*index},400);
            $(".banner-index li").eq(index).addClass("current").siblings().removeClass("current");
        })
    });

//秒杀效果
function cutDownTime() {
    var totalSec = 3*60*60;
    var timeId = setInterval(function () {
        // 0 判断 是否 小于0了
        if (totalSec<=0) {
            // 干掉 定时器
            clearInterval(timeId);
            console.log('结束啦,你买不到了哦');
            return;
        }
        totalSec--;
        var hour = Math.floor(totalSec / 3600);
        var minute = Math.floor(totalSec % 3600 /60);
        var sec =totalSec % 60;
        $(".seckill-countDown-hour li").eq(0).html(Math.floor(hour/10)).end().eq(1).html(Math.floor(hour%10));
        $(".seckill-countDown-minute li").eq(0).html(Math.floor(minute/10)).end().eq(1).html(Math.floor(minute%10));
        $(".seckill-countDown-second li").eq(0).html(Math.floor(sec/10)).end().eq(1).html(Math.floor(sec%10));
    },1000)
}
cutDownTime();

// skill点击切换
$(function(){
    var index = 0;
    var left = $(".seckill-arrow-left");
    var right = $(".seckill-arrow-right");
    left.on("click",function(){
        index--;
        if(index==-1){index=0}
        $(".seckill-list ul").animate({"left":-200*index},400);
    });
    right.on("click",function(){
        index++;
        if(index== 8){index=0}
        $(".seckill-list ul").animate({"left":-200*index},400);
    })
});

$(function(){
    var index = 0;
    var timer = setInterval(function(){
        index++;
        if(index==2){index=0}
        $(".seckill-pic ul").animate({"left":-190*index});
        $(".seckill-pic-index i").eq(index).addClass("current").siblings().removeClass("current");
    },1500);
    $(".seckill-pic").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            index++;
            if(index==2){index=0}
            $(".seckill-pic ul").animate({"left":-190*index});
            $(".seckill-pic-index i").eq(index).addClass("current").siblings().removeClass("current");
        },1500);
    });
})
