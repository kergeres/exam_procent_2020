
//slider
 const slides=document.querySelector(".slider").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 let index=0;


   prev.addEventListener("click", function(){


prevSlide()
       resetTimer();

   });

   next.addEventListener("click", function(){
      nextSlide();
       resetTimer();


   });



   function prevSlide(){
   	 if(index==0){
   	 	index=slides.length-1;
   	 }
   	 else{
   	 	index--;
   	 }
   	 changeSlide();
   }

   function nextSlide(){
      if(index==slides.length-1){
      	index=0;
      }
      else{
      	index++;
      }
      changeSlide();
   }

   function changeSlide(){
   	       for(let i=0; i<slides.length; i++){
   	       	 slides[i].classList.remove("slide_active");
   	       }

       slides[index].classList.add("slide_active");
   }


function resetTimer(){
   	  // when click to indicator or controls button
   	  // stop timer
   	  clearInterval(timer);
   	  // then started again timer
   	  timer=setInterval(autoPlay,10000);
   }


  function autoPlay(){
      nextSlide();
      updateCircleIndicator();
  }

  let timer=setInterval(autoPlay,10000);














// burger menu navigation
function kitar() {
    const burger = document.querySelector("#burger_menu");
    const nav = document.querySelector(".nav_links");
    const lineOne = document.querySelector(".csik1");
    const lineTwo = document.querySelector(".csik2");
    const lineThree = document.querySelector(".csik3");

    burger.addEventListener("click", function () {
        nav.classList.toggle("nav_links_clicked");
        lineOne.classList.toggle("csik1_a");
        lineTwo.classList.toggle("csik2_a");
        lineThree.classList.toggle("csik3_a");
    });
}
//navigation bar - animation
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('navbar_active');
        $('.cimer').addClass('cimer_small');

    } else {
        $('nav').removeClass('navbar_active');
        $('.cimer').removeClass('cimer_small');
    }
})

//text appear animation

function textAnomatoin() {
    var p1 = document.querySelector(".show1");
    var introPosition = p1.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    if (introPosition < screenPosition) {
        p1.classList.add("show_on1");
    }
}

function textAnomatoin2() {
    var p2 = document.querySelector(".show2");
    var introPosition2 = p2.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    if (introPosition2 < screenPosition) {
        p2.classList.add("show_on2");
    }
}

function textAnomatoin3() {
    var p3 = document.querySelector(".show3");
    var introPosition3 = p3.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    if (introPosition3 < screenPosition) {
        p3.classList.add("show_on3");
    }
}

window.addEventListener('scroll', textAnomatoin);
window.addEventListener('scroll', textAnomatoin2);
window.addEventListener('scroll', textAnomatoin3);

kitar();

//mapbox

mapboxgl.accessToken = 'pk.eyJ1Ijoia2VyZ2VyZXMiLCJhIjoiY2s3ZDE2OWptMGNlcDNucHE0dTJzaXRubyJ9.n8mW2tGizEW9Hwvu26iG9g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kergeres/ckaobssla6l3y1io01cc86o69',
    center: [10.128532, 56.156348],
    zoom: 12
});

var marker = new mapboxgl.Marker()
    .setLngLat([10.128532, 56.156348])
    .addTo(map);







