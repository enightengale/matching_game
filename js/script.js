let parent = document.querySelector(".father");
var box_click = document.querySelector(".col-2");
var matched = document.querySelector(".matched");
const num_of_boxes = 16;
let boxes;
var symbols = [2, 3, 3, 2, 1, 1, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let clicked = -1;
var values = [];
var clicked_boxes = [];

var moves = document.querySelector("span");
let moves_in_game = 0;



//function for boxes that determines matches
function handler(e){
  moves_in_game = moves_in_game + 1;
  moves.innerHTML = moves_in_game;
  clicked = clicked + 1;
  var value = this.innerHTML;
  values.push(value);


  if(clicked === 2){
    $(this).addClass("fade z-index");
    twoClicked();
  }

  $(this).addClass("fade z-index");

  if(clicked === 1 && a_match()){

  }
}

//adds eventListener for boxes
var box_clicked = function(box){

  box.addEventListener("click", handler, true);
  var this_box = box;
  clicked_boxes.push(this_box);

}

//creates the boxes and adds classes, numbers, and event listeners to them.
for(let i = 0; i < num_of_boxes; i++){
  var symbol = symbols[Math.floor(Math.random() * symbols.length)];

  boxes = document.createElement("div");
  box_clicked(boxes);
  boxes.innerHTML = symbol;
  $(boxes).addClass("col-2");
  parent.appendChild(boxes);

}



//a function that doesn't allow users to see more than two squares!
var twoClicked = function(){
  $("div").removeClass("fade z-index");
  clicked = 0;
  var third_value = values.pop(2);

  values = [];
  values.push(third_value);

}

//DECTECTS A MATCH IN THE GAME
var a_match = function(box) {
  var x = values[0];
  var y = values[1];
  var match_one = clicked_boxes.length - 1;
  var match_two = clicked_boxes.length - 2;
  var fade_out = clicked_boxes[match_one];
  var fade_out_two = clicked_boxes[match_two];

  if(x === y){
    fade_out.removeEventListener("click", handler, false);
    fade_out_two.removeEventListener("click", handler, false);
    $(fade_out).addClass("matched");
    $(fade_out_two).addClass("matched");
  }
}
