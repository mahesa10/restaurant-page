const menuElement = () => {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Our Menu";

  menuContainer.appendChild(menuHeader);

  const menus = [
    {
      name: "Beef Rendang",
      imageUrl: "./images/rendang.jpg",
    },
    {
      name: "Satay",
      imageUrl: "./images/satay.jpg",
    },
    {
      name: "Fried Rice",
      imageUrl: "./images/fried-rice.jpg",
    },
    {
      name: "Gado-Gado",
      imageUrl: "./images/gado-gado.jpg",
    },
    {
      name: "Soto",
      imageUrl: "./images/soto.jpg",
    },
    {
      name: "Martabak",
      imageUrl: "./images/martabak.jpeg",
    }
  ];
  
  menus.forEach(menu => {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("food-menu");
    
    const menuName = document.createElement("span");
    menuName.classList.add("food-name");
    menuName.textContent = menu.name;

    const menuImg = document.createElement("img");
    menuImg.setAttribute("src", menu.imageUrl);

    menuDiv.appendChild(menuImg);
    menuDiv.appendChild(menuName);
    menuContainer.appendChild(menuDiv);
  });

  return menuContainer;
}

const displayMenu = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(menuElement());
}

export default displayMenu;