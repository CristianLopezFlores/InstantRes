
//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

// detect ios
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (is_Mac == true || iOS == true) {
     
}

// detect ie
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){
  
}

// detect mobile device
var is_Mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

var loadedImages = 0;
// preload variables
var loadedImages = 0;
var imageArray = new Array("i_bg.jpg",
  "i_c_out.png",
  "i_c_ovr.png",
  "i_d1.png",
  "i_d2.png",
  "i_device_all.png",
  "i_device_ph.png",
  "i_device_tab.png",
  "i_logo.png",
  "i_snowflakes_1.png",
  "i_snowflakes_2.png",
  "i_t1.png",
  "i_t2.png",
  "i_t3.png",
  "i_t4.png",
  "i_t5.png",
  "i_t6.png",
  "i_t7.png",
  "i_t8.png",
  "i_t9.png",
  "i_t10.png",
  "i_t11.png",
  "i_t12.png",
  "i_t13.png");

// get element id
var id = function(name){
    return document.getElementById(name);
}

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;
    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

function imagesLoaded() {
    
    id('loader').style.display = 'none';
    id('banner').style.display = 'block';
    
    initHandlers();
    initAnimations();

}


// timeline max
var _scene1 = new TimelineMax();
var _scene2 = new TimelineMax();
var _scene3 = new TimelineMax();

function initAnimations(){

TweenMax.ticker.useRAF(true);

  // scene 1
  _scene1.delay(0.5).timeScale(1); 

  _scene1.fromTo(id('t1'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"40% 60%", ease: Back.easeInOut.config(0.9)})
         .fromTo(id('t2'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"40% 80%", ease: Back.easeInOut.config(0.9)},"-= 0.3")
         .fromTo(id('t3'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"50% 60%", ease: Back.easeInOut.config(0.9)},"-= 0.3")
         .fromTo(id('t4'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"60% 60%", ease: Back.easeInOut.config(0.9)},"-= 0.3")
         .fromTo(id('t5'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"72% 75%", ease: Back.easeInOut.config(0.9)},"-= 0.3");

  TweenMax.delayedCall(4, function(){    
     _scene1.timeScale(1.2).reverse();    
  });

  // scene 2
  _scene2.delay(6).timeScale(1); 

  _scene2.fromTo(id('t6'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"36% 70%", ease: Back.easeInOut.config(0.9)},"scene2")
         .fromTo(id('t7'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"47% 50%", ease: Back.easeInOut.config(0.9)},"-= 0.3")
         .fromTo(id('t8'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"62% 60%", ease: Back.easeInOut.config(0.9)},"-= 0.3")
         .fromTo(id('d1'), 0.6, { autoAlpha:0 }, { autoAlpha:1, ease: Power2.easeOut},"-= 0.3");

  TweenMax.to(id('alldevices'),  0.6, { autoAlpha:0, delay:10.5, ease: Power2.easeOut})

  TweenMax.delayedCall(9, function(){    
     _scene2.timeScale(1).reverse();    
  });

  _scene3.delay(11).timeScale(1); 

  _scene3.fromTo(id('t9'),     0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"30% 60%", ease: Back.easeInOut.config(0.9)})
         .fromTo(id('t10'),    0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"30% 80%", ease: Back.easeInOut.config(0.9)},"phone -= 0.4")
         .fromTo(id('phones'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"75% 50%", ease: Back.easeInOut.config(0.9)},"phone -= 0.4")
         .fromTo(id('t11'),    0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"43% 60%", ease: Back.easeInOut.config(0.9)},"-= 0.3")
         .fromTo(id('t12'),    0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"53% 60%", ease: Back.easeInOut.config(0.9)},"tablet -= 0.3")
         .fromTo(id('tablet'), 0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"75% 50%", ease: Back.easeInOut.config(0.9)},"tablet -= 0.3")
         .fromTo(id('t13'),    0.6, { autoAlpha:0, scale:0 }, { autoAlpha:1, scale:1, transformOrigin:"65% 75%", ease: Back.easeInOut.config(0.9)},"-= 0.3")
         .fromTo(id('cta'),    0.6, { autoAlpha:0}, { autoAlpha:1, ease: Power2.easeOut},"-= 0");

  TweenMax.fromTo(id('d2'),  0.6, { autoAlpha:0}, { autoAlpha:1, delay: 12, ease: Power2.easeOut})


  // create snowflake
  counter = 0;

  s_interval = new TimelineMax({ repeat: -1 }).call(function() {
    createSnowFlakes(counter);
  }, null, null, 1);

  // stop all animation
  TweenMax.delayedCall(14, function(){    
    s_interval.kill();
    TweenMax.killAll();  
  });
}


var counter = 0,
    s_interval;
var s_images = [
    {
        img: "i_snowflakes_1.png"
    },
    {
        img: "i_snowflakes_2.png"
    },
]

function createSnowFlakes(n) {
  counter++;

  var snowflakes = document.createElement("div");
      snowflakes.setAttribute('id', 'snowflake_' + n);
      snowflakes.setAttribute('class', 'abs contain');

  var size    = getRandom(20,50);    // size
  var from    = getRandom(0,3);      // from
  var rotate  = getRandom(0,360);    // rotation
  var index   = getRandom(0,1);      // image index
  var opacity = opacityVal(0.3,0.5)  // opacity
  var speed   = getRandom(10,15);    // drop speed
  var x; // x value

  if(from == 0){
    // left
    x     = getRandom(-10,20);  
  }else {
    // right
    x     = getRandom(150,740);
  }

  id("snowflakes").appendChild(snowflakes);

  TweenMax.set(id("snowflake_" + n), { 
      width           : size, 
      height          : size, 
      top             : -50, 
      left            : x, 
      rotation        : rotate,
      opacity         : opacity,
      backgroundImage : 'url(' + s_images[index].img + ')',
      z               : 0.01
  });

  TweenMax.to(id("snowflake_" + n), speed, { y:200, ease:Power1.easeOut, onComplete:function(){
      TweenMax.killTweensOf(id("snowflake_" + n))
  }});

  TweenMax.to(id("snowflake_" + n), getRandom(5,10), { x: getRandom(-30,30), yoyo:true, repeat: -1, ease: Power0.easeNone });
}

function getRandom(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function opacityVal(min,max) {
  return Math.random()*(max-min+0)+min;
}

// Event Handler
function initHandlers() {
    id("clickthrough").addEventListener('click', exitHandler, false);

    if(is_Mobile) return;

    id("clickthrough").addEventListener('mouseover', exitHandler, false);
    id("clickthrough").addEventListener('mouseout', exitHandler, false);
}

function exitHandler(e) {
    switch (e.type)
    {
        case 'click' :
            Enabler.exit('clicktag', window.clickTag);
        break;
        case 'mouseover' :
            TweenMax.to(id("ctaovr"), 0.5, { autoAlpha: 1, ease: Power4.easeOut });
        break;
        case 'mouseout' :
            TweenMax.to(id("ctaovr"), 0.5, { autoAlpha: 0, ease: Power4.easeOut });
        break;
    }
}
