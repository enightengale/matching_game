let parent = document.querySelector(".father");
const num_of_boxes = 16;

for(let i = 0; i < num_of_boxes; i++){

  var boxes = document.createElement("div");
  $(boxes).addClass("col-2");
  parent.appendChild(boxes);

}
