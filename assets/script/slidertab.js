document.addEventListener("DOMContentLoaded", function () {
  console.log("start");
  let galleries = document.querySelectorAll(".tab-slider-block");

  Array.prototype.forEach.call(galleries, function (el, i) {
    const $this = $(el);
    const $owl1 = $this.find(".slide-main");
    const $owl2 = $this.find(".slide-navigator");
    let flag = false;
    let duration = 300;

    $owl1
      .owlCarousel({
        items: 1,
        lazyLoad: false,
        loop: false,
        margin: 10,
        nav: false,
        responsiveClass: true,
      })
      .on("changed.owl.carousel", function (e) {
        if (!flag) {
          flag = true;
          $owl2
            .find(".owl-item")
            .removeClass("current")
            .eq(e.item.index)
            .addClass("current");
          if ($owl2.find(".owl-item").eq(e.item.index).hasClass("active")) {
          } else {
            $owl2.trigger("to.owl.carousel", [e.item.index, duration, true]);
          }
          flag = false;
        }
      });

    $owl2
      .on("initialized.owl.carousel", function () {
        $owl2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        startPosition: 0,
        items: 4,
        loop: false,
        margin: 14,
        autoplay: false,
        lazyLoad: false,
        responsiveClass: true,
        nav: true,
        dots: false,
        navText: [
          "<i class='icon-arrow-left'></i>",
          "<i class='icon-arrow-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      })
      .on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        $owl1.trigger("to.owl.carousel", [number, duration, true]);
      });
  });
});
