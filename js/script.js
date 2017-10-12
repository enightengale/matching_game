let parent = document.querySelector(".father");
var box_click = document.querySelector(".col-2");
const num_of_boxes = 16;
let boxes;
var symbols = [2, 3, 3, 2, 1, 1, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let clicked = -1;
var values = [];



//on click listener function for squares
var box_clicked = function(box){
  box.addEventListener("click", function(){
    clicked = clicked + 1;
    var value = this.innerHTML;
    values.push(value);
    if(clicked === 2){
      twoClicked();
    }
    console.log(clicked);
    $(this).addClass("fade z-index");
  });
}


//creates the boxes and adds classes and event listeners to them.
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
  console.log(values);

    var x = values.indexOf(0);
    var y = values.indexOf(1);
    alert(x);// this alerts -1
    alert(y);// this alerts -1

    //if x and y equal then alert "A MATCH"

  values = [];
  values.push(third_value);

}
