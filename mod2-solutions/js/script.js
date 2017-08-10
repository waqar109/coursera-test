$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#bs-example-navbar-collapse-2").collapse('hide');
    }
  });

   $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
(function (global) {

var dc = {};

var homeHtmlUrl = "snippets/home-snippet.html";
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};
document.addEventListener("DOMContentLoaded", function (event) {
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
homeHtmlUrl,
  function (responseText){
    document.querySelector(#main-content).innerHTML=responseText;
  }, // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitely setting the flag to get JSON from server processed into an object literal
});
global.$dc = dc;

})(window);