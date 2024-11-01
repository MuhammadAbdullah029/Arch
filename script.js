(function init() {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
  
      pinType: document.querySelector("#main").style.transform ? "transform" : "initial"
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
    });
  })();

function project() {
    
let project = document.querySelectorAll(".project");

project.forEach(elem => {
    console.log(elem.childNodes);
    elem.childNodes[5].addEventListener("mouseenter", function(){
        elem.childNodes[5].load();
    });
    
    elem.addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[1], {
            display: "block",
            scale: 1
            
        })
    });
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[1], {
            display: "none",
            scale: 0
        })
    });
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[1], {
            x: dets.x - elem.getBoundingClientRect().x - 35,
            y: dets.y - elem.getBoundingClientRect().y + 15 
    
        })
    });
});

}

project();

gsap.to(".roll-img", {
    y: 15,
    duration: 2,
    yoyo: true,
    repeat: -1
})


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const progressLine = document.querySelector('.progress-line');
let currentSlide = 0;
let autoSlideInterval;
const totalSlides = slides.length;


function initSlider() {
    showSlide(currentSlide);
}


function showSlide(index) {
    
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i].classList.remove('active');
    });

    
    slides[index].style.display = 'flex';
    dots[index].classList.add('active');

    
    updateProgressLine(index);
}

function updateProgressLine(index) {
    const step = 100 / (totalSlides - 1); 
    const fillPercentage = step * index; 
    progressLine.style.width = `${fillPercentage }%`;
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    gsap.from(".slide h2, .slide h3", {
      y: 65,
      opacity: 0
    })
}
function pervSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
    gsap.from(".slide h2, .slide h3", {
      y: 65,
      opacity: 0
    })
}


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        gsap.from(".slide h2, .slide h3", {
          y: 65,
          opacity: 0
        })
    });
});

initSlider();


// Influncer Slider

const workers = [
    { name: "NARUCIAK", followers: "3.3M" },
    { name: "Murat-Soner", followers: "1.3M" },
    { name: "Beta-Squad", followers: "5.3M" },
    { name: "lufy", followers: "2.8M" }
];

const islides = document.querySelectorAll('.islide');
const inh1 = document.querySelector('.in-h1');
const inh2 = document.querySelector('.in-h2');
let icurrentSlide = 0;

const directions = ['rotate-left', 'rotate-right', 'rotate-up', 'rotate-down'];

function showNextSlide() {
  
  islides[icurrentSlide].classList.remove('current');
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  islides[icurrentSlide].classList.add(randomDirection);


  icurrentSlide = (icurrentSlide + 1) % islides.length;
  inh1.innerHTML = workers[icurrentSlide].name;
  inh2.innerHTML = workers[icurrentSlide].followers;


  islides[icurrentSlide].classList.remove('rotate-left', 'rotate-right', 'rotate-up', 'rotate-down');
  islides[icurrentSlide].classList.add('current');
}

setInterval(showNextSlide, 3000);



// Team Slider

function rotater(dname) {

const slides = document.querySelectorAll(dname);
let currentSlide = 0;

const directions = ['rotate-left', 'rotate-right', 'rotate-up', 'rotate-down'];

function showNextSlide() {
  
  slides[currentSlide].classList.remove('current');
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  slides[currentSlide].classList.add(randomDirection);

 
  currentSlide = (currentSlide + 1) % slides.length;

  
  slides[currentSlide].classList.remove('rotate-left', 'rotate-right', 'rotate-up', 'rotate-down');
  slides[currentSlide].classList.add('current');
}

setInterval(showNextSlide, 3000);
}

setInterval(rotater(".tslide"), 3000);
setInterval(rotater(".so-slide"), 3000);
setInterval(rotater(".p-slide"), 3000);


// Loader Animation

let tl = gsap.timeline();

tl.to(".loader", {
    y: "-115%",
    delay: 5,
    display: "none"
})
tl.from(".hero-left h1", {
    y: 85,
    duration: 1,
    opacity: 0,
    stagger: .1
})

// Scroll Trigger Anim

function anim(name) {
    gsap.from(name, {
        duration: 1.5,
        delay: .5,
        y: 85,
        opacity: 0,
        scrollTrigger: {
          trigger: name,
          scroller: "#main",
          scrub: 3,
          end: 'top 110%',
          start: 'top 115%',
        //   markers: true
      
        },
      });
}



  anim(".p-text h1")
  anim(".p-text h3")
  anim(".roll2 h1, .roll2 h3")
  anim(".left-top h2, .left-top h1")
  anim(".inf-left h2, .hs h1")
  anim(".t-left h2, .t-left h1")
  anim(".so1 h1, .so1 h2")
  anim(".pa1 h1, .pa1 h2")
  anim(".conp1 h1, .conp1 h2")
  anim(".slide h2, .slide h3")



//   Counter

const counterElement = document.getElementById("counter");
const duration = 3000; 
const targetCount = 100; 
const intervalTime = duration / targetCount; 

let count = 0;

const interval = setInterval(() => {
  count++;
  counterElement.textContent = count;

  if (count === targetCount) {
    clearInterval(interval);
  }
}, intervalTime);


// Mobile Vidoes Autoplay

// function isMobileDevice() {
//     return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
//   }
  
  
//   let vids = document.querySelectorAll(".vid");
  
  
//   vids.forEach(video => {
//     if (isMobileDevice()) {
//       video.setAttribute("autoplay", "true");
//       video.play();
//     } else {
//         video.puase();
//         video.removeAttribute("autoplay");
//     }
//   });