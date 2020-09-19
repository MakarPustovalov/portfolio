$(document).ready(function() {
  new WOW().init();

  //Прокрутка до якоря

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  //Смена фона в portfolio

  const portfolio1 = document.querySelector("#portfolio1");

  portfolio1.addEventListener("mouseover", function() {
    $(".portfolio").css("background-color", "rgba(0, 0, 0, 0.8)");
    $(".portfolio__bg_leti-studio").css("visibility", "visible");
  });

  portfolio1.addEventListener("mouseout", function() {
    $(".portfolio").css("background-color", "#1F1F1F");
    $(".portfolio__bg_leti-studio").css("visibility", "hidden");
  });

  portfolio2.addEventListener("mouseover", function() {
    $(".portfolio").css("background-color", "rgba(0, 0, 0, 0.8)");
    $(".portfolio__bg_lightroom").css("visibility", "visible");
  });

  portfolio2.addEventListener("mouseout", function() {
    $(".portfolio").css("background-color", "#1F1F1F");
    $(".portfolio__bg_lightroom").css("visibility", "hidden");
  });

  //Модальные блоки

  const case1 = document.querySelector(".case1"),
        case2 = document.querySelector(".case2");

  portfolio1.addEventListener("click", function() {
    $(case1).removeClass("fadeOutLeft");
    $(case1).addClass("fadeInLeft");
    $(case1).css("display", "block");
    setTimeout(() => {
      $(case1).removeClass("fadeInLeft");
    }, 1000)
  })

  portfolio2.addEventListener("click", function() {
    $(case2).css("display", "block");
  })

  $(".modal__close").each(function () {
    $(this).click(function() {
      $(".modal").each(function () {
        $(case1).addClass("fadeOutLeft");
        $(case1).css("display", "none");
      })
    })
  })

})