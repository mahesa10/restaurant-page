const menuPage = () => {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Our Menu";

  menuContainer.appendChild(menuHeader);

  const menus = [
    {
      name: "Beef Rendang",
      imageUrl: "./assets/images/rendang.jpg",
    },
    {
      name: "Satay",
      imageUrl: "./assets/images/satay.jpg",
    },
    {
      name: "Fried Rice",
      imageUrl: "./assets/images/fried-rice.jpg",
    },
    {
      name: "Gado-Gado",
      imageUrl: "./assets/images/gado-gado.jpg",
    },
    {
      name: "Soto",
      imageUrl: "./assets/images/soto.jpg",
    },
    {
      name: "Martabak",
      imageUrl: "./assets/images/martabak.jpeg",
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
  main.appendChild(menuPage());
}

export default displayMenu;