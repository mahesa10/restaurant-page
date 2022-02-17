import displayHome from './home.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';

const setActiveNav = (target) => {
  const activeNav = document.getElementsByClassName("active");
  activeNav[0].className = activeNav[0].className.replace("active", "");
  target.className = "active";
}

const headerElement = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  
  const homeNav = document.createElement("li");
  homeNav.setAttribute("id", "nav-home");
  homeNav.classList.add("active")
  homeNav.textContent = "Home";
  homeNav.addEventListener("click", (e) => {
    setActiveNav(e.target);
    displayHome();
  })

  const menuNav = document.createElement("li");
  menuNav.setAttribute("id", "nav-menu");
  menuNav.textContent = "Menu";
  menuNav.addEventListener("click", (e) => {
    setActiveNav(e.target);
    displayMenu();
  })

  const contactNav = document.createElement("li");
  contactNav.setAttribute("id", "nav-contact");
  contactNav.textContent = "Contact";
  contactNav.addEventListener("click", (e) => {
    setActiveNav(e.target);
    displayContact();
  })

  ul.appendChild(homeNav);
  ul.appendChild(menuNav);
  ul.appendChild(contactNav);

  nav.appendChild(ul);

  header.appendChild(ul);

  return header;
}

const mainElement = () => {
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

export { displayWebsite, setActiveNav };