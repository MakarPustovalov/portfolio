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

  //Pagination

  function setActiveBullet (elem) {
    $(elem).css("background-color", "#C52F06");
  }

  function disableBullet (elem) {
    $(elem).each(function () {
      $(this).css("background-color", "transparent");
    });
  }

  function setLightBulletBorder () {
    $(".pagination__bullet").each(function () {
      $(this).css("border-color", "#ffffff");
    });
  }

  function setDarkBulletBorder () {
    $(".pagination__bullet").each(function () {
      $(this).css("border-color", "#2c2c2c");
    });
  }

  $(window).on("scroll", () => {

    if (($("#header").offset().top) <= (($(window).scrollTop()) + 490) && $("#header-end").offset().top > (($(window).scrollTop()) + 370)) {

      disableBullet($(".pagination__bullet"));
      setActiveBullet($(".bullet-header"));
      setLightBulletBorder();

    } else if (($("#offers").offset().top) <= (($(window).scrollTop()) + 490) && $("#offers-end").offset().top > (($(window).scrollTop()) + 370)) {

      disableBullet($(".pagination__bullet"));
      setActiveBullet($(".bullet-offers"));
      setDarkBulletBorder();

    } else if (($("#portfolio").offset().top) <= (($(window).scrollTop()) + 490) && $("#portfolio-end").offset().top > (($(window).scrollTop()) + 370)) {

      disableBullet($(".pagination__bullet"));
      setActiveBullet($(".bullet-portfolio"));
      setLightBulletBorder();

    } else if (($("#contacts").offset().top) <= (($(window).scrollTop()) + 490)) {

      disableBullet($(".pagination__bullet"));
      setActiveBullet($(".bullet-contacts"));
      setDarkBulletBorder();

    } else {
      disableBullet($(".pagination__bullet"));
    }

  })

  //Смена фона в portfolio

  const portfolio1 = document.querySelector("#portfolio1");

  portfolio2.addEventListener("mouseover", function() {
    $(".portfolio").css("background-color", "rgba(0, 0, 0, 0.8)");
    $(".portfolio__bg_leti-studio").css("visibility", "visible");
  });

  portfolio2.addEventListener("mouseout", function() {
    $(".portfolio").css("background-color", "#1F1F1F");
    $(".portfolio__bg_leti-studio").css("visibility", "hidden");
  });

  portfolio1.addEventListener("mouseover", function() {
    $(".portfolio").css("background-color", "rgba(0, 0, 0, 0.8)");
    $(".portfolio__bg_lightroom").css("visibility", "visible");
  });

  portfolio1.addEventListener("mouseout", function() {
    $(".portfolio").css("background-color", "#1F1F1F");
    $(".portfolio__bg_lightroom").css("visibility", "hidden");
  });

  //Модальные блоки

  const case1 = document.querySelector(".case1"),
        case2 = document.querySelector(".case2"),
        form = document.querySelector(".form"),
        case1Close = document.querySelector(".case1__close"),
        case2Close = document.querySelector(".case2__close"),
        formClose = document.querySelector(".form__close");

  portfolio1.addEventListener("click", function() {
    $(case1).removeClass("slideOutLeft");
    $(case1).addClass("slideInLeft");
    $(case1).css("display", "block");
    $("body").css("overflow", "hidden");
    setTimeout(() => {
      $(case1).removeClass("slideInLeft");
    }, 1000)
  })

  portfolio2.addEventListener("click", function() {
    $(case2).removeClass("slideOutRight");
    $(case2).addClass("slideInRight");
    $(case2).css("display", "block");
    $("body").css("overflow", "hidden");
    setTimeout(() => {
      $(case2).removeClass("slideInRight");
    }, 1000)
  })

  case1Close.addEventListener("click", function() {
    $(case1).addClass("slideOutLeft");
    $("body").css("overflow", "auto");
    setTimeout(() => {
      $(case1).removeClass("slideInLeft");
    }, 200)
  })

  case2Close.addEventListener("click", function() {
    $(case2).addClass("slideOutRight");
    $("body").css("overflow", "auto");
    setTimeout(() => {
      $(case2).removeClass("slideInRight");
    }, 200)
  })

  $(".form-button").each(function(){
    $(this).click(() => {
      $(form).removeClass("slideOutLeft");
      $(form).addClass("slideInLeft");
      $(form).css("display", "block");
      $("body").css("overflow", "hidden");
      setTimeout(() => {
        $(form).removeClass("slideInLeft");
      }, 1000)
    })
  })

  formClose.addEventListener("click", function() {
    $(form).addClass("slideOutLeft");
    $("body").css("overflow", "auto");
    setTimeout(() => {
      $(form).removeClass("slideInLeft");
    }, 200)
  })

})