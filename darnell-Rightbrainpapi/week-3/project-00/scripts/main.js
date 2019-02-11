

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
var inWrap = $('.inner-wrapper');
var prev = document.querySelector('.prev');
prev.addEventListener('click', somethingnice);



var next = document.querySelector('.next');
next.addEventListener('click', myRightAnimation);



  // setInterval(myRightAnimation, 3000);

      function myRightAnimation (e){
            inWrap.animate({left: '-190%'});
            inWrap.css('left', '-190%');
            $('.slide').last().after($('.slide').first());
      };

      function myLeftAnimation (e){
            inWrap.animate({left: '-30%'});
            inWrap.css('left', '-190%');
            $('.slide').first().before($('.slide').last());
      };

function somethingnice(){
var i = 0;
while (i == 0) {
  debugger;
        myLeftAnimation();
  debugger;
  // i++;
  debugger;
}
};






















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






//[] sections:
       //[x]about
            //[x]Photo of Me
            //[x]breif elevator pitch
            //[x]Social links
       //[]projects
            //[]carosel features
              //[] before after navagation arrows https://www.youtube.com/watch?v=9IlzqyZcg24
              //[]Functionality that allows a carousel image to enlarge in a lightbox when the user clicks on it. Clicking anywhere on the screen when the lightbox is open should close the lightbox.
              //[] modal feature https://www.youtube.com/watch?v=4YQ4svkETS0
              //
            // https://www.google.com/search?safe=active&ei=4TJdXN6CG4rmsAW5yYnwBQ&q=jquery+carousel+tutorial&oq=jquery+carousel&gs_l=psy-ab.1.2.0i71l8.0.0..18300...0.0..0.0.0.......0......gws-wiz.ct-bJJm1OQo
            // https://www.youtube.com/watch?v=t79ys-pRbus
       //[x]Testimonial
            //[x]Images
            //[] Fade in and out on a timer
       //[]contact
            //[x]Contact form
            //[]Fix broken button. On click send to top
       //[]footer
            //[x]Copyright
            //[x]Social Links
            //[] hamburger the social links at the bottom
       //[] Nav Bar
            //[x] sticky nav bar https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
            //[] on scroll show activated nav links https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
            //[x]mouse click jumps to section https://designshack.net/articles/html/how-to-link-to-specific-points-in-a-page-and-animate-the-scroll/
            //[] mouse hover jumps to section of page
            //[] highlight links that are being scrolled throughactivate
            //[x] hamburger nav bar https://www.w3schools.com/howto/howto_js_topnav_responsive.asp   https://www.youtube.com/watch?v=gXkqy0b4M5g
                //[x] when squeezed nav bar turns into an H
       //[] deploy on haroku



        //Most proud of
            //[] I figured out how to have the hamburger menu remain aligned to the nav bar
            //[] My task break down. (making every major challenge more managable)
            //[] I honed my flex-box understanding through
            //[] I used my learning style to my advantage.
                //(I learn most by seeing & Doing) so thats what I did.
                //(I watched a tutorial on how to create the drop down then
                // created it)
            //[] I took notes on every piece of the code I was unformilar with.
        //Pain Points are
            //[] I really enjoyed this project. With time all things are possible.
                //("Difficult takes a day. Impossible takes a week." -Jay Z)
       //Things to review
          //
