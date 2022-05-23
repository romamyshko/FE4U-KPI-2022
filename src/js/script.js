var modal = document.getElementById("popup-modal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("popup-modal");

var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
};

var modal1 = document.getElementById("teacherM");

var btn1 = document.getElementById("teacher");

var span1 = document.getElementsByClassName("closeModal")[0];

btn1.onclick = function () {
  modal1.style.display = "block";
};

span1.onclick = function () {
  modal1.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
