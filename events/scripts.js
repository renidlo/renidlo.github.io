$(".upper").css("background-color", "blue");

$("#first").on("click", () => {
  console.log(
    "Yeah, you clicked me’ to the console when the user clicks on the button"
  );
});

$("#second").click(() => {
  $("#first").text("ooops");
});

let hodnota;
let zmeneno = false;
$("#third").click(() => {
  if (!zmeneno) {
    zmeneno = true;

    hodnota = $("input").val(); //uloží value z inputu do hodnota
    $(".upper").css("background-color", hodnota);
  }
});

let counter = 0;

$("#increase").click(() => {
  counter = counter + 1;
  $("h2").text(counter);
});

$("#decrease").click(() => {
  counter = counter - 1;
  $("h2").text(counter);
});
