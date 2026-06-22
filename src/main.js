$(document).ready(function () {
  var currentPath = window.location.pathname.split("/").pop();
  if (!currentPath || currentPath === "") {
    currentPath = "index.html";
  }

  $(".nav-link").each(function () {
    var href = $(this).attr("href") || "";
    if (href.charAt(0) === "/") {
      href = href.substring(1);
    }
    if (href === currentPath) {
      $(this).addClass("text-danger").removeClass("text-dark");
    }
  });
});
