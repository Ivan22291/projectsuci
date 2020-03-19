
var modal = document.getElementById("myModal");


var img = document.getElementById("myImage1");
var modalImg = document.getElementById("myImage1");
var captionText = document.getElementById("caption");
modalImg.onClick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}