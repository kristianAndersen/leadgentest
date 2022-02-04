
const line =  document.querySelector(".dynamic-subline");
const lineH =  document.querySelector(".dynamic-subline > h3");


let textMobile=[
  'Dette er ikke en lånesøknad',
  'Få lånetilbud som den første',
  'Gratis og uforpliktende tjeneste'
]; 

line.innerHTML=  `<h3><span class="dynamicletters letters-1">${textMobile[0]}</span></h3>
<h3><span class="dynamicletters letters-2">${textMobile[1]}</span></h3>
<h3><span class="dynamicletters letters-3" style="white-space:pre-wrap;">${textMobile[2]}</span><h3>`



const l1 =  document.querySelector(".letters-1");
l1.innerHTML = l1.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");

const l2 =  document.querySelector(".letters-2");
l2.innerHTML = l2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");


const l3 =  document.querySelector(".letters-3");
l3.innerHTML = l3.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");




let animeConfig = {};
animeConfig.durationIn = 1200;
animeConfig.durationOut = 1200;
animeConfig.delayIn = 1000;
animeConfig.delayOut = 4000;
let  textAnimation=anime.timeline({loop: true});

const startDynamicHeadline =()=>{

  textAnimation.add({
    targets:'.letter1',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration:animeConfig.durationIn,
    delay: (el, i) => animeConfig.delayIn + 30 * i
  }).add({
    targets:'.letter1',
    translateX: [0,-40],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => animeConfig.delayOut + 30 * i
  }).add({
    targets:'.letter2',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => animeConfig.delayIn + 30 * i
  }).add({
    targets:'.letter2',
    translateX: [0,-40],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => animeConfig.delayOut+ 30 * i
  }).add({
    targets:'.letter3',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => animeConfig.delayIn+ 30 * i
  }).add({
    targets:'.letter3',
    translateX: [0,-40],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => animeConfig.delayOut + 30 * i
  })


}
const stopDynamicHeadlin =()=>{
  textAnimation.pause();
}



let resizeTimer;

window.addEventListener('resize', function(e) {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

    startStopAni();
            
  }, 5);

});

function startStopAni(){  
  if(window.innerWidth < 768){
    line.classList.remove('dsHidden')
    startDynamicHeadline()
  }
  else{
    
    line.classList.add('dsHidden')
    stopDynamicHeadlin()
  }
};

startStopAni()

export{startDynamicHeadline}