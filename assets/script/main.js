$(document).ready(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");

  $("#ms, #dt, #op").click(function () {
    $("#bannerSection").hide();
    $("#introSection").show();
  });

  $("#hide").click(function () {
    $("#bannerSection").show();
    $("#introSection").hide();
  });

  $(".home-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    margin: 5,
    navText: [
      "<i class='icon-arrow-left'></i>",
      "<i class='icon-arrow-right'></i>",
    ],
  });
  $(".solution-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    margin: 5,
    URLhashListener: true,
    startPosition: "URLHash",
  });

  $(".full-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    margin: 0,
    navText: [
      "<i class='icon-arrow-left'></i>",
      "<i class='icon-arrow-right'></i>",
    ],
  });
  $(".intro-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: true,
    margin: 0,
  });
  $(".card-slider, .card-slider3").owlCarousel({
    loop: false,
    margin: 14,
    responsiveClass: true,
    dots: true,
    nav: true,
    navText: [
      "<i class='icon-arrow-left'></i>",
      "<i class='icon-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1.5,
        center: true,
        nav: false,
        loop: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".card-slider4").owlCarousel({
    loop: false,
    margin: 14,
    responsiveClass: true,
    dots: true,
    nav: true,
    navText: [
      "<i class='icon-arrow-left'></i>",
      "<i class='icon-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".card-slider2").owlCarousel({
    loop: false,
    margin: 14,
    responsiveClass: true,
    dots: true,
    nav: true,
    navText: [
      "<i class='icon-arrow-left'></i>",
      "<i class='icon-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".article-item").show("1000");
    } else {
      $(".article-item")
        .not("." + value)
        .hide("3000");
      $(".article-item")
        .filter("." + value)
        .show("3000");
    }
  });
  $("#privacyBtn").click(function () {
    $("#protectionBlock").hide();
    $("#dataBlock").hide();
    $("#privacyBlock").fadeIn("slow");
  });
  $("#protectionBtn").click(function () {
    $("#privacyBlock").hide();
    $("#dataBlock").hide();
    $("#protectionBlock").fadeIn("slow");
  });
  $("#protectionBlock .close-button, #privacyBlock .close-button").click(
    function () {
      $("#protectionBlock").hide();
      $("#privacyBlock").hide();
      $("#dataBlock").fadeIn("slow");
    }
  );

  $("#cloudBtn").click(function () {
    $("#edgeBlock").hide();
    $("#cloudBlock").hide();
    $("#securityBlock").fadeIn("slow");
  });
  $("#edgeBtn").click(function () {
    $("#securityBlock").hide();
    $("#cloudBlock").hide();
    $("#edgeBlock").fadeIn("slow");
  });
  $("#securityBlock .close-button, #edgeBlock .close-button").click(
    function () {
      $("#edgeBlock").hide();
      $("#securityBlock").hide();
      $("#cloudBlock").fadeIn("slow");
    }
  );
});
var selector = ".article-filter li";

$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});

$(window).on("load resize", function (e) {
  $("#mainNav .nav-has-sub-menu > a").click(function (e) {
    e.preventDefault();
    $(this).parent().addClass("nav-sub-menu-expand");
  });
  $(".nav-menu-back").click(function (e) {
    e.preventDefault();
    $(this).closest(".nav-has-sub-menu").removeClass("nav-sub-menu-expand");
  });
});

var scroll = $(window).scrollTop();
if (scroll >= 60) {
  $("#header").addClass("small-head");
}
$(window).scroll(function () {
  scroll = $(window).scrollTop();
  if (scroll >= 60) {
    $("#header").addClass("small-head");
    $("body").addClass("body-scroll");
  } else {
    $("#header").removeClass("small-head");
    $("body").removeClass("body-scroll");
  }
});
