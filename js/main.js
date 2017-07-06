"use strict";
var navMobile = document.getElementById("js-navMobile");
var navShow = document.getElementById("js-navShow");

navMobile.addEventListener("click", mobile);

function mobile() {
  navShow.classList.toggle("list-show");
  navMobile.classList.toggle("open");
}

var header = document.querySelector(".nav-content");
var smallMenuLinkList = document.querySelectorAll(".nav-mobile-items li a");
for (var i = 0; i < smallMenuLinkList.length; i++) {
  smallMenuLinkList[i].addEventListener("click", mobile);
}
window.addEventListener("scroll", changeOpacity);

function changeOpacity() {
  if (document.body.scrollTop > header.offsetHeight) {
    header.classList.add("opacity");
  } else {
    header.classList.remove("opacity");
  }
}

$(function() {

  $('a.link-nav').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {

      var $target = $(this.hash);

      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 1000);
        return false;
      }
    }
  });
});

//Calculadora
var resultButton = document.getElementById("mlResult");
var mgProductElement = document.getElementById("mgProduct");
var mlProductElement = document.getElementById("mlProduct");
var catWeightElement = document.getElementById("catWeight");
var mgDoseElement = document.getElementById("mgDose");
var modalText = document.getElementById("modalText");
var modalInput = document.getElementById("modalInput");
var form = document.querySelector(".converter-form");

function getMlResult(e) {
  e.preventDefault();
  var resultDose = document.getElementById("resultDose");
  var mgProductInput = mgProductElement.value;
  var mlProductInput = mlProductElement.value;
  var mgDoseInput = mgDoseElement.value;
  var catWeightInput = catWeightElement.value;
  var modalDose = document.getElementById("modalDose");


  if ((mgProductInput === "" || mgProductInput === "0") || (mlProductInput === "" || mlProductInput === "0") || (mgDoseInput === "" || mgDoseInput === "0") || (catWeightInput === "" || catWeightInput === "0")) {
    if (mgProductInput === "" || mgProductInput === "0") {
      mgProductElement.classList.add("alarm");
    }
    if (mlProductInput === "" || mlProductInput === "0") {
      mlProductElement.classList.add("alarm");
    }
    if (mgDoseInput === "" || mgDoseInput === "0") {
      mgDoseElement.classList.add("alarm");
    }
    if (catWeightInput === "" || catWeightInput === "0") {
      catWeightElement.classList.add("alarm");
    }
    modalDose.classList.add("modal-open");
    modalText.innerHTML = ("Por favor, revise los campos");
  } else {

    var catWeight = catWeightInput / 1000;
    var weightDose = mgDoseInput * catWeight;
    modalText.innerHTML = ((weightDose * mlProductInput) / mgProductInput).toFixed(3).replace(".", ",") + " ml";
    modalDose.classList.add("modal-open");
    form.reset();
  }
  $(".converter-products > input").attr("disabled", true);
  $(".converter-form > input").attr("disabled", true);
  $("#mlResult").removeClass("converter-btn-hover");
};
resultButton.addEventListener("click", getMlResult);

function closeModal() {
  modalDose.classList.remove("modal-open");
  $(".converter-form > input").attr("disabled", false);
  $(".converter-products > input").attr("disabled", false);
  $("#mlResult").addClass("converter-btn-hover");
};
modalInput.addEventListener("click", closeModal);

function alarmMgProduct() {
  mgProductElement.classList.remove("alarm");
};

function alarmMlProduct() {
  mlProductElement.classList.remove("alarm");
};

function alarmCatWeight() {
  catWeightElement.classList.remove("alarm");
};

function alarmMgDose() {
  mgDoseElement.classList.remove("alarm");
};

//Flecha subir arriba
$(document).ready(function() {
  $('.up-page').click(function() {
    $('body, html').animate({
      scrollTop: '0px'
    }, 1000);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.up-page').fadeIn(300);
    } else {
      $('.up-page').fadeOut(300);
    }
  });
})
