/*
//Initially disable the button
$("button").prop("disabled", true);

//When the value of the text area changes..
$("textarea").on("input", function() {
  ${"span"}.text(140 - $(this).val().length);
  // If there's at least one character...
  if ($ (this).val().length > 0 ) {
    // Enable the button.
    $(".js-tweet-button").prop("disabled", false);
  }else {
    //Else, disable the button.
    $(".js-tweet-button").prop("disabled", true);
  }
});

$(".js-add-photo-button").on("click", function() {
  if ($(this).hasClass("is-on")) {
    $(this)
      .removeClass("is-on")
      .text("Add Photo");
    $("span").text(140 - $("textarea").val().length);
  } else {
    $(this)
      .addClass("is-on")
      .text("✓ Photo Added");
    $("span").text(140 - 23 - $("textarea").val().length);
  }
});
*/
$("textarea").on("input", function() {
  if ($(".js-add-photo-button").hasClass("is-on")) {
    $("span").text(140 - 23 - $(this).val().length);
  } else {
    $("span").text(140 - $(this).val().length);
  }

  if ($(this).val().length > 0 || $(".js-add-photo-button").hasClass("is-on")) {
    $(".js-tweet-button").prop("disabled", false);
  } else {
    $(".js-tweet-button").prop("disabled", true);
  }
});

$(".js-add-photo-button").on("click", function() {
  if ($(this).hasClass("is-on")) {
    $(this)
      .removeClass("is-on")
      .text("Add Photo");
    $("span").text(140 - $("textarea").val().length);
    if ($("textarea").val().length === 0) {
      $(".js-tweet-button").prop("disabled", true);
    }
  } else {
    $(this)
      .addClass("is-on")
      .text("✓ Photo Added");
    $("span").text(140 - 23 - $("textarea").val().length);
    $(".js-tweet-button").prop("disabled", false);
  }
});
