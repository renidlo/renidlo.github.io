$("button").click(() => {
  $("ul").append("<li>" + $("input").val() + "</li>");
  $("input").val("");
});

$("ul").click(() => {
  $(event.target).css("text-decoration", "line-through");
});
