const regbtn=document.querySelectorAll('.next-button-reg')
const scrollWindow = window.document.scrollingElement || window.document.body || window.document.documentElement;

for(let i = 0; i < regbtn.length; i++){ 
    regbtn[i].addEventListener('click',scrollIt )
}

function scrollIt(){
       anime({
        targets: scrollWindow,
        scrollTop: 0,
        easing: 'linear',
        duration: 500
      });
}