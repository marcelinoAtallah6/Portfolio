const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
var theme = "light";
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
const navbar = document.getElementsByClassName("navbar")[0];
const header = document.getElementsByClassName("header")[0];




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


$(document).ready(function(){
    $(".navbar .nav-link,.btn-component ").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
    
    setTheme();

});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

  function setTheme() {    switch (theme) {
      case "light":
        setLight();
        theme = "dark";
        break;
      case "dark":
        setDark();
        theme = "light";
        break;
    }
  }
  
  function setLight() {
    document.body.style="background-color: var(--light);transition: 0.5s;color:#212529;"
    navbar.classList.remove("bg-dark");
    navbar.classList.add("bg-white");
    header.classList.remove("withoutOpacity");
    header.classList.add("withOpacity");
    container.classList.remove("shadow-dark");
   
    $(".header-content").css("color","#fff");
    $(".text-light").css("color","#f8f9fa","!important");
    $(".brand-img").css("border"," 10px solid white")
    $(".nav-link").css("color","rgba(0, 0, 0, 0.8)")
    $("p").css("color","#444")
    $("span").css("color","#343a40")
    $(".info").css("color","#6c757d")
    $(".card").css("background-color","#fff")
    $(".card").css("border","1px solid rgba(0, 0, 0, 0.125)")
    $("hr").css("border-top","1px solid rgba(0, 0, 0, 0.1)")
    $(".card .card-body ").css("color","#6c757d")

    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }

  function setDark() {
    document.body.style="background-color: var(--dark);transition: 0.5s;color:#fff;"
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-dark");
    $(".header-content ").css("color","#000000")
    $(".text-light").css("color","#000000","!important");
    header.classList.remove("withOpacity");
    header.classList.add("withoutOpacity");
    container.classList.remove("shadow-light");
    $(".brand-img").css("border"," 10px solid #212529")
    $(".nav-link").css("color","#fff")
    $("p").css("color","#fff")
    $("span").css("color","#fff")
    $("span").css("opacity","1","!important");
    $(".info").css("color","#fff")
    $(".info").css("opacity","0.7")
    $(".card").css("background-color","inherit")
    $(".card").css("border","1px solid #fff")
    $("hr").css("border-top","1px solid #fff")
    $(".card .card-body ").css("color","#fff")
    
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }