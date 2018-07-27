var $body = $("body");

$("h1").on("click", e => {
  $body.removeClass("minimized");
  $(".first-container").removeClass("minimized");
  $(".contact").hide();
});

$(".contact-link").on("click", function(e) {
  e.preventDefault();
  $(".first-container").addClass("minimized");
  var $this = $(this);
  $(".contact").show();
  setTimeout(() => $(".contact").addClass("visible"), 0);
  $body.addClass("minimized");
});

$(".first-container").addClass("visible");
