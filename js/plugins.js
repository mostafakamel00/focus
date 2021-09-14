$(document).ready(function () {
  "use strict";
  $(".col-md-4").mouseenter("hover", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //scroll to top
  const scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
      scrollButton.show();
    } else {
      scrollButton.hide();
    }
  });
  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 100);
  });
});
