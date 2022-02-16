import displayHome from './home.js';
import displayMenu from './menu.js';

const headerElement = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  
  const homeNav = document.createElement("li");
  homeNav.setAttribute("id", "nav-home");
  homeNav.textContent = "Home";
  homeNav.addEventListener("click", () => {
    displayHome();
  })

  const menuNav = document.createElement("li");
  menuNav.setAttribute("id", "nav-menu");
  menuNav.textContent = "Menu";
  menuNav.addEventListener("click", () => {
    displayMenu();
  })

  const contactNav = document.createElement("li");
  contactNav.setAttribute("id", "nav-contact");
  contactNav.textContent = "Contact";

  ul.appendChild(homeNav);
  ul.appendChild(menuNav);
  ul.appendChild(contactNav);

  nav.appendChild(ul);

  header.appendChild(ul);

  return header;
}

const mainElement = (content) => {
  const main = document.createElement("main");
  return main;
}

const footerElement = () => {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.innerHTML = `Copyright &copy; 2021 - mahesa10`;

  footer.appendChild(footerText);

  return footer;
}

const displayWebsite = () => {
  const content = document.querySelector("#content");

  content.appendChild(headerElement());
  content.appendChild(mainElement());
  content.appendChild(footerElement());

  displayHome();
}

export { displayWebsite };