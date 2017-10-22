let parent = document.querySelector(".father");
var box_click = document.querySelector(".col-2");
var matched = document.querySelector(".matched");
const num_of_boxes = 16;
let boxes;
var symbols = [13, 13, 3, 3, 1, 1, 4, 4, 5, 5, 10, 10, 7, 7, 8, 8];
let clicked = -1;
var values = [];
var clicked_boxes = [];
var moves = document.querySelector("span");
let moves_in_game = 0;
var correct_boxes = [];


//shuffle array of numbers
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



//create cards
var create_cards = function(card){

var cards = shuffle(symbols);
for(var i = 0; i < cards.length; i++){
  var symbol = i;
}

  for (var i = 0; i < num_of_boxes; i++) {

    boxes = document.createElement("div");
    $(boxes).addClass("col-2");
    boxes.innerHTML = i;
    var opened_boxes = [];


    boxes.addEventListener("click", function(){
      moves_in_game = moves_in_game + 1;
      moves.innerHTML = moves_in_game;



      $(this).addClass("fade z-index");
      clicked++;
      console.log(clicked);
      opened_boxes.push(this);
      console.log(opened_boxes);
      var box_one = opened_boxes[0];
      var box_two = opened_boxes[1];
      var box_one_value = box_one.innerHTML;
      var box_two_value = box_two.innerHTML;


      if(box_one_value === box_two_value) {

        correct_boxes.push(box_one_value);
        correct_boxes.push(box_two_value);

        $(box_one).addClass("correct");
        $(box_two).addClass("correct");

        opened_boxes = [];

        setTimeout(function(){
          $("div").removeClass("fade z-index wrong");
          clicked = -1;

        }, 1500);

      }

      if(clicked === 1 && opened_boxes.length === 2) {

        $(box_one).addClass("wrong");
        $(box_two).addClass("wrong");

        opened_boxes = [];

        setTimeout(function(){
          $("div").removeClass("fade z-index wrong");
          clicked = -1;

        }, 1500);
      }
    });
    parent.appendChild(boxes);
  }
}

create_cards(boxes);
