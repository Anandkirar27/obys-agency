function loader(){

     var tl = gsap.timeline();

    tl.from(".load h1,.load h2",{
        y:130,
        duration: 0.7,
        delay: 0.2,
        stagger : 0.2
    })
 
    tl.to(".load",{
        opacity:0,
        delay:1.6,
        stagger:-0.2
    })
   
  
    var timer = document.querySelector("#timer h4");
    var grow =0;
    var int = setInterval(function(){
        if(grow<100){
            grow++;
            timer.innerHTML = grow;
           
        }
       
    },8)
    
    setTimeout(function(){
        clearInterval(int);
    },1500)

    tl.to("#loader",{
        top:"-100%",
        duration:1,
        ease : "power4.out"
    })
}

loader();

Shery.mouseFollower();

function page2Animation(){
    var videoC = document.querySelector("#video-container");
    videoC.addEventListener("mouseenter",function(){
        console.log("mouse enter hua")
        gsap.to(".mousefollower",{
            opacity:0
        })
    })

    videoC.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })
        gsap.to("#play-btn",{
            left:"67%",
            top:"-10%"
        })
    })

   

    var videoImage = document.querySelector("#video-container img");
    var videoVideo = document.querySelector("#video-container video");

    var flag = 0;

    videoC.addEventListener("click",function(){
        if(flag == 0){
            gsap.to(videoVideo,{
                opacity:1
            })

            gsap.to("#play-btn",{
                scale : 0.8
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-pause-line"></i>';
            videoVideo.play();
            flag = 1;
        }

        else{
            gsap.to(videoVideo,{
                opacity:0
            })

            gsap.to("#play-btn",{
                scale : 1
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-play-fill"></i>';
            videoVideo.pause();
            flag = 0;
        }
    })
        videoC.addEventListener("mousemove",function(dets){
            gsap.to("#play-btn",{
                left: dets.x -450,
                top : dets.y -150
            })
    })



}

page2Animation();