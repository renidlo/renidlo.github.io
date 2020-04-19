// Item erases by click on bin icon
var close = document.getElementsByClassName("binButton");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// toggle done/undone by click on text
var t = document.getElementsByClassName("myText");
var i;
for (i = 0; i < close.length; i++) {
  t[i].onclick = function () {
    var div = this.parentElement;
    div.classList.toggle("checked");
  };
}

// toggle done/undone by click on check button
var t = document.getElementsByClassName("checkButton");
var i;
for (i = 0; i < close.length; i++) {
  t[i].onclick = function () {
    var div = this.parentElement;
    div.classList.toggle("checked");
  };
}

// add item
function newElement() {
  if (document.getElementById("myInput").value !== "") {
    var mother = document.createElement("div");
    mother.setAttribute("class", "myContainer");
    var greatmother = document.getElementsByClassName("section");

    greatmother[0].appendChild(mother);

    var ab = document.createElement("div");
    ab.setAttribute("class", "myText");
    var inputValue = document.getElementById("myInput").value;
    ab.innerHTML = inputValue;
    greatmother[0].lastChild.appendChild(ab);
    document.getElementById("myInput").value = "";

    var bb = document.createElement("div");
    bb.setAttribute("class", "binButton");
    greatmother[0].lastChild.appendChild(bb);

    var cb = document.createElement("div");
    cb.setAttribute("class", "checkButton");
    greatmother[0].lastChild.appendChild(cb);

    bb.addEventListener("click", function () {
      var div = this.parentElement;
      div.style.display = "none";
    });

    ab.addEventListener("click", function () {
      var div = this.parentElement;
      div.classList.toggle("checked");
    });

    cb.addEventListener("click", function () {
      var div = this.parentElement;
      div.classList.toggle("checked");
    });
  }
}
