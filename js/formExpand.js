
const nxtBtn=document.querySelector('.next-button');
const nxtBackBtn=document.querySelector('.next-button-back')

const btntxt2=document.querySelector('.btntxt2')
const btntxt1=document.querySelector('.btntxt1')

const formbg=document.querySelector('.formbg');
const sliders=document.querySelector('.sliders')
const inputs=document.querySelector('.inputs')
const formslidewrap=document.querySelector('.formslidewrap');

const amountValue = document.getElementById('amountValue')
const periodValue = document.getElementById('yearvalue')
const loantypetextblue=document.querySelector('.loantypetextblue')


const scrollWindow = window.document.scrollingElement || window.document.body || window.document.documentElement;

let mobileExpanded=false;
let desktopExpanded=false;

window.addEventListener("resize", function(){

    if(window.innerWidth > 767 && mobileExpanded==true){
        formbg.classList.remove("formExpanded");
        sliders.classList.remove("slidersExpanded");
        
        btntxt2.classList.add('btntxt2-hide')
        btntxt1.classList.remove('btntxt1-hide')

        loantypetextblue.style.display="block"
        mobileExpanded=false;
        desktopExpanded==true
    }

    if(window.innerWidth < 767 && desktopExpanded==true){
        
        btntxt2.classList.add('btntxt2-hide')
        btntxt1.classList.remove('btntxt1-hide')

     

        slideFormBack()

        loantypetextblue.style.visibility="hidden";
        loantypetextblue.style.height=0;
        mobileExpanded=true;
        desktopExpanded==false
    }
});


function expandForm(){
    const rect = formbg.getBoundingClientRect();
    const scrollPosition = window.scrollY
    const documentTop = scrollWindow.clientTop
    const scrollOffset = rect.top + scrollPosition - documentTop

    anime({
        targets: scrollWindow,
        scrollTop: Math.round(scrollOffset),
        easing: 'easeInExpo',
        duration: 500,
        update: function(anim) {
            if (anim.currentTime < 500) {
            formbg.classList.add("formExpanded");
            sliders.classList.add("slidersExpanded");

            btntxt2.classList.remove('btntxt2-hide')
            btntxt1.classList.add('btntxt1-hide')

            }
        }
    })
}



function slideForm(){

let amountValue = document.getElementById('amountValue')
let periodValue = document.getElementById('yearvalue')

let slideValue=sliders.clientHeight;

nxtBtn.classList.add('next-button-small');
nxtBackBtn.classList.add('next-button-back-show')

btntxt2.classList.remove('btntxt2-hide')
btntxt1.classList.add('btntxt1-hide')

loantypetextblue.innerHTML=`Du vil vite mer om muligheten for å låne<br><strong> ${amountValue.value}</strong> over ${periodValue.value}</p>`;

    anime({
        targets: '.bgslider',
        translateY: '-'+slideValue+'px',
        duration: 1000,
        easing: 'easeInExpo',
    
    })
}

function slideFormBack(){
    
    nxtBtn.classList.remove('next-button-small');
    nxtBackBtn.classList.remove('next-button-back-show')

    btntxt2.classList.add('btntxt2-hide')
    btntxt1.classList.remove('btntxt1-hide')
  
 
    anime({
        targets: '.bgslider',
        translateY: 0+'rem',
        duration: 1000,
        easing: 'easeInExpo',
        update:function(){
            if(anime.currentTime==1000){
            formbg.classList.add("formExpanded");
            sliders.classList.add("slidersExpanded");
            }
        }
    })
}







function formAction(){
   
    if(window.innerWidth<767){
        mobileExpanded=true;
        desktopExpanded=false;
        expandForm()
    }else{
        desktopExpanded=true;
        mobileExpanded=false;
        slideForm();
    }

}


nxtBtn.addEventListener('click',formAction)
nxtBackBtn.addEventListener('click',slideFormBack)
