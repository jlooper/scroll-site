//Intersection Observer API Method

//Cards
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  rootMargin: "0% 0% -50% 0%"
};

const appearOnScroll = new IntersectionObserver(function(
  entries, 
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      entry.target.classList.remove('appear');
    } else {
      entry.target.classList.add('appear');
    }
  })
}, 
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


//Zoom
const painting = document.querySelector('body');
const sectionOne = document.querySelector('.section')
const sectionTwo = document.querySelector('.section2')
const sectionThree = document.querySelector('.section3')
const sectionFour = document.querySelector('.section4')
const sectionFive = document.querySelector('.section5');



//First Zoom
const zoomOneOptions = {
  rootMargin: "0% 0% -10% 0%"
};

const zoomOne = new IntersectionObserver
(function(
  entries,
  zoomOne
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      painting.classList.remove('slide1');
    } else {
      painting.classList.add('slide1');
    }
  });
}, 
zoomOneOptions);

zoomOne.observe(sectionOne)

//Second Zoom

const zoomTwoOptions = {
  rootMargin: "0% 0% -10% 0%"
};

const zoomTwo = new IntersectionObserver
(function(
  entries,
  zoomTwo
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      painting.classList.remove('slide2');
    } else {
      painting.classList.add('slide2');
    }
  });
}, zoomTwoOptions)

zoomTwo.observe(sectionTwo)

//Third Zoom

const zoomThreeOptions = {
  rootMargin: "0% 0% -10% 0%"
};

const zoomThree = new IntersectionObserver
(function(
  entries,
  zoomThree
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      painting.classList.remove('slide3');
    } else {
      painting.classList.add('slide3');
    }
  });
}, 
zoomThreeOptions)

zoomThree.observe(sectionThree)

//Fourth Zoom
const zoomFourOptions = {
  rootMargin: "0% 0% -10% 0%"
};

const zoomFour = new IntersectionObserver
(function(
  entries,
  zoomFour
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      painting.classList.remove('slide4');
    } else {
      painting.classList.add('slide4');
    }
  });
}, zoomFourOptions)

zoomFour.observe(sectionFour)

//Fifth Zoom
const zoomFiveOptions = {
  rootMargin: "0% 0% -10% 0%"
};

const zoomFive = new IntersectionObserver
(function(
  entries,
  zoomFive
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      painting.classList.remove('slide5');
    } else {
      painting.classList.add('slide5');
    }
  });
}, zoomFiveOptions)

zoomFive.observe(sectionFive)





//JQuery Method
// $(document).ready(function() {
//   $(window).scroll(function(event) {
//       let scroll = $(this).scrollTop();
//       let opacity = 1.2 - (scroll / 1000);
//       let x = $("#part1").position();
//       if (opacity >= 0 && x.top < 300) {
//           $('#part1').css('opacity', opacity);
//       }
//       scroll = $(this).scrollTop();
//       opacity = 1.8 - (scroll / 1000);
//       let x2 = $("#part2").position();
//       if (opacity >= 0 && x2.top < 300) {
//           $('#part2').css('opacity', opacity);
//       }
//       scroll = $(this).scrollTop();
//       opacity = 2.6 - (scroll / 1000);
//       let x3 = $("#part3").position();
//       if (opacity >= 0 && x3.top < 300) {
//           $('#part3').css('opacity', opacity);
//       }
//       scroll = $(this).scrollTop();
//       opacity = 3.2 - (scroll / 1000);
//       let x4 = $("#part4").position();
//       if (opacity >= 0 && x4.top < 300) {
//           $('#part4').css('opacity', opacity);
//       }
//   });
// });
