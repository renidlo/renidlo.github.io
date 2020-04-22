var sourceData = [
  {
    photo: "./images/athletics.jpg",
    title: "Athletics",
    description:
      "Athletics refers to track and field sports such as running, the high jump, and the javelin.",
  },
  {
    photo: "./images/baseball.jpg",
    title: "Baseball",
    description:
      "Baseball is a game played by two teams of nine players. Each player from one team hits a ball with a bat and then tries to run around three bases and get to the home base before the other team can get the ball back.",
  },
  {
    photo: "./images/basketball.jpg",
    title: "Basketball",
    description:
      "Basketball is a game in which two teams of five players each try to score goals by throwing a large ball through a circular net fixed to a metal ring at each end of the court.",
  },
  {
    photo: "./images/darts.jpg",
    title: "Darts",
    description:
      "Darts is a game in which darts are thrown at a target usually marked with concentric circles divided into segments and with a bull's- eye in the center.",
  },
  {
    photo: "./images/football.jpg",
    title: "Football",
    description:
      "Football is a game played by two teams of eleven players using a round ball. Players kick the ball to each other and try to score goals by kicking the ball into a large net.",
  },
  {
    photo: "./images/ice-hockey.jpg",
    title: "Ice hockey",
    description:
      "Ice hockey is a game played on ice between two teams of 11 players who use long curved sticks to hit a small rubber disk, called a puck, and try to score goals.",
  },
  {
    photo: "./images/rugby.jpg",
    title: "Rugby",
    description:
      "Rugby or rugby football is a game played by two teams using an oval ball. Players try to score points by carrying the ball to their opponents' end of the field, or by kicking it over a bar fixed between two posts.",
  },
  {
    photo: "./images/skiing.jpg",
    title: "Skiing",
    description: "When people ski, they move over snow or water on skis.",
  },
  {
    photo: "./images/snooker.jpg",
    title: "Snooker",
    description:
      "Snooker is a game involving balls on a large table. The players use a long stick to hit a white ball, and score points by knocking coloured balls into the pockets at the sides of the table.",
  },
  {
    photo: "./images/swimming.jpg",
    title: "Swimming",
    description:
      "Swimming is the activity of swimming, especially as a sport or for pleasure.",
  },
  {
    photo: "./images/tennis.jpg",
    title: "Tennis",
    description:
      "Tennis is a game played by two or four players on a rectangular court. The players use an oval racket with strings across it to hit a ball over a net across the middle of the court.",
  },
  {
    photo: "./images/volleyball.jpg",
    title: "Volleyball",
    description:
      "Volleyball is a game in which two teams hit a large ball with their hands backwards and forwards over a high net. If you allow the ball to touch the ground, the other team wins a point.",
  },
];

// number of images
var numberOfImages = sourceData.length;

var imagesData = [];
// fill imagesData from sourceData with leftI as first index
function fillImages(leftI) {
  for (let i = 0; i < 8; i++) {
    if (leftI + i > numberOfImages - 1) {
      imagesData[i] = sourceData[leftI - numberOfImages + i];
    } else {
      imagesData[i] = sourceData[leftI + i];
    }
  }
}

// first left index of sourceData is 0
var leftIndex = 0;

// first images filling
fillImages(0);

// first picture as default
var highlightedThumbnail = 0;
displayPhoto(imagesData[highlightedThumbnail]);

//user clicked on the left arrow
$(".arrow-l").click(function () {
  var previousBox = `[data-index="` + highlightedThumbnail + `"]`;
  $(previousBox).css("border", "3px solid gray");

  highlightedThumbnail = highlightedThumbnail - 1;
  if (highlightedThumbnail === -1) {
    leftIndex = leftIndex - 1;
    if (leftIndex === -1) {
      leftIndex = numberOfImages - 1;
    }
    highlightedThumbnail = 0;
    fillImages(leftIndex);
    displayAllThumbnails();
  }
  displayPhoto(imagesData[highlightedThumbnail]);
  var clickedBox = `[data-index="` + highlightedThumbnail + `"]`;
  $(clickedBox).css("border", "3px solid orange");
});

//user clicked on the right arrow
$(".arrow-r").click(function () {
  var previousBox = `[data-index="` + highlightedThumbnail + `"]`;
  $(previousBox).css("border", "3px solid gray");

  highlightedThumbnail = highlightedThumbnail + 1;
  if (highlightedThumbnail === 8) {
    leftIndex = leftIndex + 1;
    if (leftIndex === numberOfImages) {
      leftIndex = 0;
    }
    highlightedThumbnail = 7;
    fillImages(leftIndex);
    displayAllThumbnails();
  }
  displayPhoto(imagesData[highlightedThumbnail]);
  var clickedBox = `[data-index="` + highlightedThumbnail + `"]`;
  $(clickedBox).css("border", "3px solid orange");
});

// function for displaying main picture
function displayPhoto(element) {
  $("#photo").attr("src", element.photo);
  $("#photo").attr("alt", element.title);
  $("#photo-title").text(element.title);
  $("#photo-description").text(element.description);
}

// function for displaying one thumbnail
function displayThumbnail(element, ind) {
  var xxx = `[data-index="` + ind + `"]`;
  $(xxx).css("background-image", `url(` + element.photo + `)`);
  var yyy = `[data-hint="` + ind + `"]`;
  $(yyy).text(element.title);
}

// function for displaying all thumbnails
function displayAllThumbnails() {
  for (let j = 0; j < 8; j++) {
    displayThumbnail(imagesData[j], j);
  }
}

// create thumbnails
imagesData.forEach((item, index) => {
  $("#thumbnails").append(`<div class="box" data-index="${index}"></div>`);
  $(`[data-index="` + index + `"]`).append(
    `<div class="hint" data-hint="${index}"></div>`
  );
  $(`[data-hint="` + index + `"]`).text(item.title);
  displayThumbnail(item, index);
});

// first thumbnail as default
var highlightedThumbnail = 0;
$(`[data-index="0"]`).css("border", "3px solid orange");

// thumbnail is clicked
$(".box").click((event) => {
  let indexClicked = $(event.target).attr("data-index");
  // indexClicked is now a string! if you need it as a number you have to change it
  // because for example "1" + 1 is going to be "11" and not 2
  let numberIndex = parseInt(indexClicked);
  // now numberIndex is a number
  if (numberIndex != highlightedThumbnail) {
    displayPhoto(imagesData[numberIndex]);
    var clickedBox = `[data-index="` + numberIndex + `"]`;
    $(clickedBox).css("border", "3px solid orange");
    var previousBox = `[data-index="` + highlightedThumbnail + `"]`;
    $(previousBox).css("border", "3px solid gray");
    highlightedThumbnail = numberIndex;
  }
});

// small left arrow is clicked
$(".small-arrow-l").click((event) => {
  var previousBox = `[data-index="` + highlightedThumbnail + `"]`;
  $(previousBox).css("border", "3px solid gray");
  highlightedThumbnail = highlightedThumbnail - 1;
  if (highlightedThumbnail === -1) {
    leftIndex = leftIndex - 1;
    if (leftIndex === -1) {
      leftIndex = numberOfImages - 1;
    }
    highlightedThumbnail = 0;
    fillImages(leftIndex);
    displayAllThumbnails();
  }
  displayPhoto(imagesData[highlightedThumbnail]);
  var clickedBox = `[data-index="` + highlightedThumbnail + `"]`;
  $(clickedBox).css("border", "3px solid orange");
});

// small right arrow is clicked
$(".small-arrow-r").click((event) => {
  var previousBox = `[data-index="` + highlightedThumbnail + `"]`;
  $(previousBox).css("border", "3px solid gray");
  highlightedThumbnail = highlightedThumbnail + 1;
  if (highlightedThumbnail === 8) {
    leftIndex = leftIndex + 1;
    if (leftIndex === numberOfImages) {
      leftIndex = 0;
    }
    highlightedThumbnail = 7;
    fillImages(leftIndex);
    displayAllThumbnails();
  }
  displayPhoto(imagesData[highlightedThumbnail]);
  var clickedBox = `[data-index="` + highlightedThumbnail + `"]`;
  $(clickedBox).css("border", "3px solid orange");
});
