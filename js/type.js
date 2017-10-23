let parent = document.querySelector(".father");
var box_click = document.querySelector(".col-2");
var matched = document.querySelector(".matched");
const num_of_boxes = 16;
let boxes;
var symbols = [13, 13, 3, 3, 1, 1, 4, 4, 5, 5, 10, 10, 7, 7, 8, 8];
let clicked = -1;
var values = [];
var clicked_boxes = [];
var moves = document.querySelector(".move");
let moves_in_game = 0;
var final_moves = 0;
var correct_boxes = [];
var cards;
var icon = $("i");
var button_two = $(".button2");



//shuffle array of numbers got this from stackoverflow
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

var create_shuffle_cards = function(){

  cards = shuffle(symbols);
    for(var i = 0; i < cards.length; i++){
      boxes = document.createElement("div");
      $(boxes).addClass("col-2");
      $(boxes).attr('id', 'card'+(i+1));
      boxes.innerHTML = cards[i];
      parent.appendChild(boxes);
    }
}

//create cards
var game = function(card){

  create_shuffle_cards();

  //show symbol when card is clicked and increment moves in game
  $(".col-2").click(function(){
    $(this).addClass("fade z-index");
    moves_in_game = moves_in_game + 1;
    moves.innerHTML = moves_in_game;
    $("p span.move").html(moves_in_game);
    clicked_boxes.push(this);


    var x = clicked_boxes[0];
    var y = clicked_boxes[1];
    var x_id = $(x).attr("id");
    var y_id = $(y).attr("id");

    //does x and y match? correct boxes
    if(x.innerHTML === y.innerHTML && x_id !== y_id ){
      correct_boxes.push(x);
      correct_boxes.push(y);

      $(x).addClass("correct");
      $(y).addClass("correct");
    }

    if(correct_boxes.length === 16){

      $("div#modal.modal").css("display", "block");
      $(".modal-content").css("display", "block");

    }

    //reset clicked_boxes/wrong matches
    if(clicked_boxes.length === 2) {
      $(x).addClass("wrong");
      $(y).addClass("wrong");
      clicked_boxes = [];
      setTimeout(function(){

        $(x).removeClass("fade z-index wrong");
        $(y).removeClass("fade z-index wrong");

      }, 1000);
    }
  });
}

//modal functionality**********************************


//restart game
  $(icon).click(function(){
    $("#modal-reload").css("display", "block");
    $("#content-reload").css("display", "block");

    $("#close").click(function(){
      $("#modal-reload").css("display", "none");
      $("#content-reload").css("display", "none");
    });

    $("#reload").click(function(){
        location.reload();
    });
  });

$("#modal-reload").css("display", "none");
$("#content-reload").css("display", "none");
$(".modal-content").css("display", "none");
$("div#modal.modal").css("display", "none");

$(button_two).click(function(){
  location.reload();
});


game(boxes);
