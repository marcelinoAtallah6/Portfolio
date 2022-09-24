

window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
const particles = Particles.init({
  selector: ".background",
  color: ["#3399ff", "#000000", "#1300FF"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#000000", "#3399ff", "#1300FF"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});


  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

function hideSocial(data)
{
  $("#"+data).css("opacity", "0");


      /* line-height: 33px; */
    /* -webkit-transition: all 0.5s ease-in-out; */
    /* transition: all 0.5s ease-in-out;*/
}

function displaySocial(data)
{
    $("#"+data).css("opacity", "1");
    $("#"+data).css("-webkit-transition", "all 0.7s ease-in-out");
    $("#"+data).css("transition", "all 0.7s ease-in-out");

}

$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  },1000);
  return false;
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);