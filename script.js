function loadContent(page) {
  const content = document.getElementById("content");
  switch (page) {
    case "/home":
      content.innerHTML = "<h2>Home Page</h2> <p>Welcome To Home Page</p>";
      break;
    case "/about":
      content.innerHTML = "<h2>about Page</h2> <p>Welcome To about Page</p>";
      break;
    case "/contact":
      content.innerHTML =
        "<h2>contact Page</h2> <p>Welcome To contact Page</p>";
      break;

    default:
      content.innerHTML = "<h2>Home Page</h2> <p>Welcome To Home Page</p>";

      break;
  }
}
function navigate(page) {
  window.history.pushState({ page }, "", page);
  loadContent(page);
}
window.addEventListener("popstate", (event) => {
  loadContent(event.state ? event.state.page : "/home");
  console.log(event);
});
loadContent(window.location.pathname);
function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}
