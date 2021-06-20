console.log('live Server is working');

const toggleMenuBtn = document.querySelectorAll('.btn-toggle-menu')
const navigation = document.querySelector('nav');

toggleMenuBtn.forEach(e =>{
    e.addEventListener('click',(e)=>{
        navigation.classList.toggle('nav-hidden')
    })
})


/* projects */


var amount = document.querySelectorAll('.amount')

function animateValue(target, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = target;
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

amount.forEach(e=>{
    animateValue(e,0,parseInt(e.innerHTML) , 5000)
})

/* projects */


/* slider */
const nextBtn = document.querySelector('.slider-next')
const pervBtn = document.querySelector('.slider-perv')
const slides = document.querySelectorAll('.slide')
const slideIndex = document.querySelectorAll('.slide-index')




nextBtn.addEventListener('click',()=>{
    slides.forEach(e=>{
        var slide = e;
        slide.style.transform += "translateX(" + (-300) + "px)";
    });
})
pervBtn.addEventListener('click',()=>{
    slides.forEach(e=>{
        var slide = e;
        slide.style.transform += "translateX(" + (300) + "px)";
    });
})



/* slider */