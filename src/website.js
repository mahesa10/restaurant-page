import homeElement from './home.js'

const headerElement = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  
  const homeNav = document.createElement("li");
  homeNav.textContent = "Home";

  const menuNav = document.createElement("li");
  menuNav.textContent = "Menu";

  const contactNav = document.createElement("li");
  contactNav.textContent = "Contact";

  ul.appendChild(homeNav);
  ul.appendChild(menuNav);
  ul.appendChild(contactNav);

  nav.appendChild(ul);

  header.appendChild(ul);

  return header;
}

const mainElement = () => {
  const main = document.createElement("main");
  main.appendChild(homeElement());
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
}

export default displayWebsite;