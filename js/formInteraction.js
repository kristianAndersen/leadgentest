const slideFormBtn=document.getElementById('sfBtn')
const formslidewrap=document.getElementById('formslidewrap')
const fswHeight= formslidewrap.clientHeight ;


let numberH = document.querySelector('.stepper.horizontal').getAttribute('data-start');
let tl = anime.timeline();
let trigger = true;
let eachNumberDelay = 50;
let speed = 1800;

console.log(fswHeight)
let slideval=50;
function slideForm(){
let slideup = anime({
    targets: formslidewrap,
    translateY: '-'+slideval+'rem',
    duration: 500,
    easing: 'spring(1, 80, 10, 0)',
    autoplay: false,
    complete: function(anim) {
       
        slideval+=50;
      
    }
})



console.log(slideval)
    if(fswHeight>(slideval*10)){
        slideup.play()
    }
   
}

slideFormBtn.addEventListener('click',slideForm)

/*Stepper*/
/*

$('body').on('click', '.horizontal .arrow.top', () => {
  if (trigger) {
    trigger = false;
    numberH--;

    setTimeout(() => {
      trigger = true;
    }, 400);

    setNumbers(numberH, '.horizontal');
  
    tl.pause();  
    
    tl = anime.timeline();

    anime({
      targets: '.horizontal .box > div:not(.active) span',
      translateX: -185,
      duration: 0
    })
  
    tl.add({
      targets: '.horizontal .box > div.active span',
      translateX: 185,
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(30),
    })
    .add({
      targets: '.horizontal .box > div:not(.active) span',
      translateX: 0,
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(30),
    }, '-=' + speed / 1.1);
  
    changeClass('.horizontal');
  }
});

$('body').on('click', '.horizontal .arrow.bottom', () => {
  if (trigger) {
    trigger = false;
    numberH++;

    setTimeout(() => {
      trigger = true;
    }, 400);

    setNumbers(numberH, '.horizontal');

    tl.pause();  
    
    tl = anime.timeline();

    anime({
      targets: '.horizontal .box > div:not(.active) span',
      translateX: 185,
      duration: 0
    })    
  
    tl.add({
      targets: '.horizontal .box > div.active span',
      translateX: -185,
      duration: speed,
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(30),
    })
    .add({
      targets: '.horizontal .box > div:not(.active) span',
      translateX: 0,
      duration: speed,
      easing: 'spring(1, 80, 10, 0)',
      delay: anime.stagger(30),
    }, '-=' + speed / 1.1);
  
    changeClass('.horizontal');
  }  
});



let setNumbers = (number, direction) => {
  $('.stepper' + direction + ' .box > div:not(.active)').html('');
  
  for (char of number.toString()) {
    $('.stepper' + direction + ' .box > div:not(.active)').append('<span>' + char + '</span>');
  }
}

let changeClass = (direction) => {
  if ($('.stepper' + direction + ' .numbers1').hasClass('active')) {
    $('.stepper' + direction + ' .numbers1').removeClass('active');
    $('.stepper' + direction + ' .numbers2').addClass('active');
  } else {
    $('.stepper' + direction + ' .numbers2').removeClass('active');
    $('.stepper' + direction + ' .numbers1').addClass('active');
  }
}
*/

export {slideForm}