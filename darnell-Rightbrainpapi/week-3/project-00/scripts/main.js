

// Nav bar Functionality begins
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li'); // selected all links in nav bar on html page.

// This toggles the nav. (turning on and off the )
  burger.addEventListener("click", ()=> {
    nav.classList.toggle('nav-active'); //When I click on the burger I am giving the nav list the nav-active class
                                        //of active that is on the css page. (the dot is not needed to call a class that only exist on the css page.
                                        // this is to say on the initial page load .nav-active did not exist.

//  This animates the links when clicked. See the css file (@keyframes before and after)
//for each link we will run a function.
    navLinks.forEach((link, idx)=>{
          if (link.style.animation){ //if link.style.animation exists
            link.style.animation = '' //set it to nothing so that I can run the effect again.

          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${idx / 7 + 0.5}s`;
          //adding 0.5 causes an initial delay on index 0 otherwise there would be no delay for index 0
          //remember PEMDAS
          console.log(idx/7);
          }

    });
    //Burger animation
    burger.classList.toggle('hline');


  });

}

navSlide();
// Nav bar Functionality ends





// Carousel Functionality starts here

var inWrap = $('.inner-wrapper');

var prev = document.querySelector('.prev');
prev.addEventListener('click', myLeftAnimation);


var next = document.querySelector('.next');
next.addEventListener('click', myRightAnimation);

      function myLeftAnimation (e){
            inWrap.animate({left: '-30%'});
            inWrap.css('left', '-190%');
            $('.slide').first().before($('.slide').last());
      };

  setInterval(myRightAnimation, 15000);

      function myRightAnimation (e){
            inWrap.animate({left: '-190%'});
            inWrap.css('left', '-190%');
            $('.slide').last().after($('.slide').first());
      };

// Carousel functionality ends here.


// testimonial functionality begins here

var person1= $('.person1');
var quote2 = "Diligent and Dependable";
var quote3 = "A compassionate soul.";

var person2 = $('.person2');
var quote4 = "Determined";
var quote5 = "Observant";

var person3 = $('.person3');
var quote6 = "Exceptionally tenacious.";
var quote7 = "A gentleman and a scholar.";

setInterval(cycle,3000);

function cycle(){
  person1.animate({'opacity': 0}, 1500, function() {
    $(this).text(quote2);
  }).animate({'opacity': 1}, 1500);
  person1.animate({'opacity': 0}, 1500, function() {
    $(this).text(quote3);
  }).animate({'opacity': 1},1500);


  person2.animate({'opacity': 0}, 1700, function() {
    $(this).text(quote4);
  }).animate({'opacity': 1}, 1700);
  person2.animate({'opacity': 0}, 1700, function() {
    $(this).text(quote5);
  }).animate({'opacity': 1}, 1700);

  person3.animate({'opacity': 0}, 2000, function() {
    $(this).text(quote6);
  }).animate({'opacity': 1}, 2000);
  person3.animate({'opacity': 0}, 2000, function() {
    $(this).text(quote7);
  }).animate({'opacity': 1},2000);



};



// testimonial functionality ends here




   // $("div").mouseenter(function(){
   //   var id = $(this).attr('id');
   //   $('a').removeClass('active');
   //   $("[href=#"+id+"]").addClass('active');
   // });












// Carousel functionality begins

// $(function() {
//   var inWrap = $('.inner-wrapper');

//   // click event listener on the prev button
//   $('.prev').on('click', function() {

// //when user clicks it targets the inner wrapper and changes the image from -190% to -30%
//     inWrap.animate({left: '-30%'}, 300, function(){

//       inWrap.css('left', '-190%');

//       $('.slide').first().before($('.slide').last());


//     });




//   });

//   // click event listener on the prev button
//   $('.next').on('click', function(){

// //when user clicks it targets the inner wrapper and changes the image from -190% to -30%
//     inWrap.animate({left: '-190%'}, 300, function(){

//       inWrap.css('left', '-190%');

// //after the last slide the first slide will be added
//       $('.slide').last().after($('.slide').first());


//     });




//   });

// })



//Carousel functionality ends




// var inWrap = $('.inner-wrapper');
// setInterval(myAnimation, 3000);

   // function myAnimation(){

   //      inWrap.animate({left: '-30%'}, 300);

   //      inWrap.css('left', '-190%');


   //      inWrap.animate({left: '-30%'}, 300);

   //      $('.slide').last().after($('.slide').first());


   //  };



// ----------------this works for the left--------------//
// $('.prev').on('click', function myAnimation(){

//         inWrap.animate({left: '-30%'}, 300);

//         inWrap.css('left', '-190%');


//         inWrap.animate({left: '-30%'}, 300);

//         $('.slide').last().after($('.slide').first());


//     });




// var inWrap = $('.inner-wrapper');
// var prev = document.querySelector('.prev');
// prev.addEventListener('click', myLeftAnimation);


// var next = document.querySelector('.next');

// next.addEventListener('click', myRightAnimation);



// function myRightAnimation (e){

//       // setTimeout(myRightAnimation, 3000);
//       inWrap.animate({left: '-190%'});
//       inWrap.css('left', '-190%');
//       $('.slide').last().after($('.slide').first());
// // setInterval(myRightAnimation, 3000);
// };
// // setTimeout(myRightAnimation, 3000);



// setInterval(myLeftAnimation, 3000);

// function myLeftAnimation (e){

//       inWrap.animate({left: '-30%'});
//       inWrap.css('left', '-190%');
//       $('.slide').first().before($('.slide').last());
// };






// function somethingnice(){
// // debugger;
// var i = 0;
// while (i < 10) {
//   // debugger;
//         myLeftAnimation();
//   // debugger;
//   i++;
//   // debugger;
// }
// // debugger;
// var i = 0
// };





















//     , 300, function(){

//       inWrap.css('left', '-190%');

//       $('.slide').first().before($('.slide').last());


//     };





































// Carousel functionality begins
// var i = 0;
// var images = [];
// var time = 2000;

// // images list
// images[0] = 'images/carousel1.png';
// images[1] = 'images/carousel2.png';
// images[2] = 'images/carousel3.png';
// images[3] = 'images/carousel4.png';

// // Change image function
// function changeImg(){
//   document.querySelector("carousel.src")= images[i];

//   if (i < images.length - 1){
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changeImg()", time);
// }


//Carousel functionality ends

