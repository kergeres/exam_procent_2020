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
    var p1 = document.querySelector(".show1");
    var introPosition = p1.getBoundingClientRect().top;

    var screenPosition = window.innerHeight/1.3;

    if(introPosition < screenPosition)
        {
            p1.classList.add("show_on1");
        }
}
 function textAnomatoin2 ()
{
    var p2 = document.querySelector(".show2");
    var introPosition2 = p2.getBoundingClientRect().top;

    var screenPosition = window.innerHeight/1.3;

    if(introPosition2 < screenPosition)
        {
            p2.classList.add("show_on2");
        }
}
function textAnomatoin3 ()
{
    var p3 = document.querySelector(".show3");
    var introPosition3 = p3.getBoundingClientRect().top;

    var screenPosition = window.innerHeight/1.3;

    if(introPosition3 < screenPosition)
        {
            p3.classList.add("show_on3");
        }
}



window.addEventListener('scroll', textAnomatoin);
window.addEventListener('scroll', textAnomatoin2);
window.addEventListener('scroll', textAnomatoin3);

kitar();






