let parent = document.querySelector(".father");
let box_click = document.querySelector(".col-2");
let matched = document.querySelector(".matched");
const num_of_boxes = 16;
let boxes;
let symbols = [13, 13, 3, 3, 1, 1, 4, 4, 5, 5, 10, 10, 7, 7, 8, 8];
let clicked = -1;
let values = [];
let clicked_boxes = [];
let moves = document.querySelector(".move");
let moves_in_game = 0;
let correct_boxes = [];
let cards;
let icon = $("i");
let button_two = $(".button2");



//shuffle array of numbers got this from stackoverflow
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

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

let create_shuffle_cards = function(){

  cards = shuffle(symbols);
    for(var i = 0; i < cards.length; i++){
      boxes = document.createElement("div");
      $(boxes).addClass("col-2");
      $(boxes).attr("id", "card"+(i+1));
      boxes.innerHTML = cards[i];
      parent.appendChild(boxes);
    }
}

//create cards
var game = function(card){

  create_shuffle_cards();


//Making a timer in Javascript , starting from 00:00:00
//I found this on stackoverflow

  var timer = setInterval(clock, 1000);
  var msec = 00;
  var sec = 00;
  var min = 00;

  function clock() {
	   msec += 1;
	    if (msec == 60) {
		      sec += 1;
		        msec = 00;
		          if (sec == 60) {
			             sec = 00;
			                min += 1;
			                   if (sec % 2 == 0) {
				                       alert("Pair");
			                      }
		              }
	        }
	document.querySelector("#time").innerHTML = min + ":" + sec + ":" + msec;
}

  //show symbol when card is clicked and increment moves in game
  $(".col-2").click(function(){
    $(this).addClass("fade z-index");
    clicked_boxes.push(this);


    var x = clicked_boxes[0];
    var y = clicked_boxes[1];
    var x_id = $(x).attr("id");
    var y_id = $(y).attr("id");



    //changes the star rating when user clicks on cards
    var stars = function(moves, number_correct){
        //if users gets no correct card matches...
        if(moves > 1 && number_correct.length === 0){
          $(".fa-star-o:nth-child(1)").css("color", "gray");
          $(".fa-star-o:nth-child(2)").css("color", "gray");
          $(".fa-star-o:nth-child(3)").css("color", "gray");
        }

        if(moves > 6 && number_correct.length === 4){
          $(".fa-star-o:nth-child(1)").css("color", "gold");
          $(".fa-star-o:nth-child(2)").css("color", "gold");
          $(".fa-star-o:nth-child(3)").css("color", "gray");
        }

        if(moves - number_correct.length === 0){
          $(".fa-star-o:nth-child(1)").css("color", "gold");
          $(".fa-star-o:nth-child(2)").css("color", "gold");
          $(".fa-star-o:nth-child(3)").css("color", "gold");
        }

        if(moves => 19 && number_correct.length === 16){
          $(".fa-star-o:nth-child(1)").css("color", "gold");
          $(".fa-star-o:nth-child(2)").css("color", "gray");
          $(".fa-star-o:nth-child(3)").css("color", "gray");
        }

        //if users does really well matching the cards
        if(moves <= 11 && number_correct.length === 16){
          $(".fa-star-o:nth-child(1)").css("color", "gold");
          $(".fa-star-o:nth-child(2)").css("color", "gold");
          $(".fa-star-o:nth-child(3)").css("color", "gold");
        }
    }

    stars(moves_in_game, correct_boxes);

    //does x and y match? correct boxes
    if(x.innerHTML === y.innerHTML && x_id !== y_id ){
      correct_boxes.push(x);
      correct_boxes.push(y);

      $(x).addClass("correct");
      $(y).addClass("correct");
    }

    //increment moves in game
    if(clicked_boxes.length === 2){
      moves_in_game = moves_in_game + 1;
      moves.innerHTML = moves_in_game - 1;
      $("p span.move").html(moves_in_game);
    }

    if(correct_boxes.length === 16){

      $("div#modal.modal").css("display", "block");
      $(".modal-content").css("display", "block");
      clearInterval(timer);

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
  $(".fa-refresh").click(function(){
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
