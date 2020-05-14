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


$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('navbar_active');
        $('.cimer').addClass('cimer_small');


    } else {
        $('nav').removeClass('navbar_active');
        $('.cimer').removeClass('cimer_small');
    }
})

function textAnomatoin ()
{
    var paragraph = document.querySelector(".appear_paragraph");
    var introPosition = paragraph.getBoundingClientRect().top;

    var screenPosition = window.innerHeight/2;

    if(introPosition < screenPosition)
        {
            paragraph.classList.add("appear_paragraph_on");
        }
}



window.addEventListener('scroll', textAnomatoin);

kitar();






