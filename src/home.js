import displayMenu from "./menu.js";

const homePage = () => {
  const home = document.createElement("div");
  home.setAttribute("id", "home");

  const homeHeader = document.createElement("h1");
  homeHeader.innerHTML = `<span id="resto">Resto</span><span id="nesia">nesia</span>`;

  const homeDesc = document.createElement("p");
  homeDesc.textContent = "Your Favorite Indonesian Restaurant";

  const homeButton = document.createElement("button");
  homeButton.textContent = "Our Menu";
  homeButton.addEventListener("click", () => {
    const menuNav = document.getElementById("nav-menu");
    const activeNav = document.getElementsByClassName("active");
    activeNav[0].className = activeNav[0].className.replace("active", "");
    menuNav.className = "active";
    displayMenu();
  })

  home.appendChild(homeHeader);
  home.appendChild(homeDesc);
  home.appendChild(homeButton);

  return home;
}

const displayHome = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(homePage());
}

export default displayHome;