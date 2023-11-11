function myFunctionfirstbtn() {
  document.getElementById("firstDropDown").classList.toggle("show");
  document.getElementById("secondDropDown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".firstbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu-first");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFunctionsecondbtn() {
  document.getElementById("secondDropDown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".secondbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu-second");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// tab 2 section 3
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// tab 4 section 4
const formTab = document.getElementById("formTab");
const textTab = document.getElementById("textTab");
const imageTab = document.getElementById("imageTab");
const videoTab = document.getElementById("videoTab");

const formContent = document.getElementById("formContent");
const textContent = document.getElementById("textContent");
const imageContent = document.getElementById("imageContent");
const videoContent = document.getElementById("videoContent");

// Add click event listeners to tabs

document.getElementById("formContent").style.display = "none";
document.getElementById("textContent").style.display = "none";
document.getElementById("imageContent").style.display = "none";
document.getElementById("videoContent").style.display = "none";

function changeBackground() {
  document.getElementById("formContent").style.display = "block";
  document.getElementById("textContent").style.display = "none";
  document.getElementById("imageContent").style.display = "none";
  document.getElementById("videoContent").style.display = "none";
}
function changeBackground1() {
  document.getElementById("formContent").style.display = "none";
  document.getElementById("textContent").style.display = "block";
  document.getElementById("imageContent").style.display = "none";
  document.getElementById("videoContent").style.display = "none";
}
function changeBackground2() {
  document.getElementById("formContent").style.display = "none";
  document.getElementById("textContent").style.display = "none";
  document.getElementById("imageContent").style.display = "block";
  document.getElementById("videoContent").style.display = "none";
}
function changeBackground3() {
  document.getElementById("formContent").style.display = "none";
  document.getElementById("textContent").style.display = "none";
  document.getElementById("imageContent").style.display = "none";
  document.getElementById("videoContent").style.display = "block";
}

