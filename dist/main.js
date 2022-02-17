/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactPage = () => {
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contact");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Book Now";

  const contactTel = document.createElement("span");
  contactTel.classList.add("telephone");
  contactTel.innerHTML = `<img src="./assets/icons/phone.svg"> (999) 999-9999`;

  const contactAddr = document.createElement("span");
  contactAddr.classList.add("address");
  contactAddr.innerHTML = `<img src="./assets/icons/location.svg"> 99 Nusantara Street`;

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactInfo.appendChild(contactTel);
  contactInfo.appendChild(contactAddr);

  const form = document.createElement("form");
  form.setAttribute("autocomplete", "off");
  const formInput = [
    {
      labelText: "Name",
      type: "name"
    },
    {
      labelText: "Email",
      type: "email"
    },
    {
      labelText: "Date",
      type: "date"
    },
    {
      labelText: "Time",
      type: "time"
    }
  ];

  formInput.forEach(input => {
    const formGroup = document.createElement("div");
    formGroup.className = `form-group form-group-${input.type}`

    const inputLabel = document.createElement("label");
    inputLabel.setAttribute("for", input.type);
    inputLabel.textContent = input.labelText;
    
    const inputField = document.createElement("input");
    inputField.setAttribute("type", input.type);
    inputField.setAttribute("id", input.type);
    
    formGroup.appendChild(inputLabel);
    formGroup.appendChild(inputField);
    
    form.appendChild(formGroup);
  });

  const formButton = document.createElement("button");
  formButton.textContent = "Submit";

  form.appendChild(formButton);

  contactDiv.appendChild(contactHeader);
  contactDiv.appendChild(form);
  contactDiv.appendChild(contactInfo);

  return contactDiv;
}

const displayContact = () => {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(contactPage());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");


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
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayWebsite": () => (/* binding */ displayWebsite),
/* harmony export */   "setActiveNav": () => (/* binding */ setActiveNav)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




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
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  })

  const menuNav = document.createElement("li");
  menuNav.setAttribute("id", "nav-menu");
  menuNav.textContent = "Menu";
  menuNav.addEventListener("click", (e) => {
    setActiveNav(e.target);
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  })

  const contactNav = document.createElement("li");
  contactNav.setAttribute("id", "nav-contact");
  contactNav.textContent = "Contact";
  contactNav.addEventListener("click", (e) => {
    setActiveNav(e.target);
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");


(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.displayWebsite)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNOOEM7QUFDOUM7QUFDQSwyREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xyXG5cclxuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkJvb2sgTm93XCI7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RUZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb250YWN0VGVsLmNsYXNzTGlzdC5hZGQoXCJ0ZWxlcGhvbmVcIik7XHJcbiAgY29udGFjdFRlbC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIuL2Fzc2V0cy9pY29ucy9waG9uZS5zdmdcIj4gKDk5OSkgOTk5LTk5OTlgO1xyXG5cclxuICBjb25zdCBjb250YWN0QWRkciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvbnRhY3RBZGRyLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xyXG4gIGNvbnRhY3RBZGRyLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIi4vYXNzZXRzL2ljb25zL2xvY2F0aW9uLnN2Z1wiPiA5OSBOdXNhbnRhcmEgU3RyZWV0YDtcclxuXHJcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XHJcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFRlbCk7XHJcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEFkZHIpO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XHJcbiAgY29uc3QgZm9ybUlucHV0ID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbFRleHQ6IFwiTmFtZVwiLFxyXG4gICAgICB0eXBlOiBcIm5hbWVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWxUZXh0OiBcIkVtYWlsXCIsXHJcbiAgICAgIHR5cGU6IFwiZW1haWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWxUZXh0OiBcIkRhdGVcIixcclxuICAgICAgdHlwZTogXCJkYXRlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsVGV4dDogXCJUaW1lXCIsXHJcbiAgICAgIHR5cGU6IFwidGltZVwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgZm9ybUlucHV0LmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Hcm91cC5jbGFzc05hbWUgPSBgZm9ybS1ncm91cCBmb3JtLWdyb3VwLSR7aW5wdXQudHlwZX1gXHJcblxyXG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0LnR5cGUpO1xyXG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGlucHV0LmxhYmVsVGV4dDtcclxuICAgIFxyXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBpbnB1dC50eXBlKTtcclxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXQudHlwZSk7XHJcbiAgICBcclxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcclxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcclxuICAgIFxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtR3JvdXApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBmb3JtQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcclxuXHJcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcclxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xyXG5cclxuICByZXR1cm4gY29udGFjdERpdjtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250YWN0OyIsImltcG9ydCBkaXNwbGF5TWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcblxyXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcclxuXHJcbiAgY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBob21lSGVhZGVyLmlubmVySFRNTCA9IGA8c3BhbiBpZD1cInJlc3RvXCI+UmVzdG88L3NwYW4+PHNwYW4gaWQ9XCJuZXNpYVwiPm5lc2lhPC9zcGFuPmA7XHJcblxyXG4gIGNvbnN0IGhvbWVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaG9tZURlc2MudGV4dENvbnRlbnQgPSBcIllvdXIgRmF2b3JpdGUgSW5kb25lc2lhbiBSZXN0YXVyYW50XCI7XHJcblxyXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk91ciBNZW51XCI7XHJcbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LW1lbnVcIik7XHJcbiAgICBjb25zdCBhY3RpdmVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpO1xyXG4gICAgYWN0aXZlTmF2WzBdLmNsYXNzTmFtZSA9IGFjdGl2ZU5hdlswXS5jbGFzc05hbWUucmVwbGFjZShcImFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIG1lbnVOYXYuY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcclxuICAgIGRpc3BsYXlNZW51KCk7XHJcbiAgfSlcclxuXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVEZXNjKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG5cclxuICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lOyIsImNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xyXG5cclxuICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBNZW51XCI7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcblxyXG4gIGNvbnN0IG1lbnVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJlZWYgUmVuZGFuZ1wiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2Fzc2V0cy9pbWFnZXMvcmVuZGFuZy5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2F0YXlcIixcclxuICAgICAgaW1hZ2VVcmw6IFwiLi9hc3NldHMvaW1hZ2VzL3NhdGF5LmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJGcmllZCBSaWNlXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcIi4vYXNzZXRzL2ltYWdlcy9mcmllZC1yaWNlLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJHYWRvLUdhZG9cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiLi9hc3NldHMvaW1hZ2VzL2dhZG8tZ2Fkby5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU290b1wiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2Fzc2V0cy9pbWFnZXMvc290by5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTWFydGFiYWtcIixcclxuICAgICAgaW1hZ2VVcmw6IFwiLi9hc3NldHMvaW1hZ2VzL21hcnRhYmFrLmpwZWdcIixcclxuICAgIH1cclxuICBdO1xyXG4gIFxyXG4gIG1lbnVzLmZvckVhY2gobWVudSA9PiB7XHJcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcImZvb2QtbWVudVwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1lbnVOYW1lLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XHJcbiAgICBtZW51TmFtZS50ZXh0Q29udGVudCA9IG1lbnUubmFtZTtcclxuXHJcbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1lbnVJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnUuaW1hZ2VVcmwpO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUltZyk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5TWVudSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lbnU7IiwiaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgZGlzcGxheUNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcclxuXHJcbmNvbnN0IHNldEFjdGl2ZU5hdiA9ICh0YXJnZXQpID0+IHtcclxuICBjb25zdCBhY3RpdmVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpO1xyXG4gIGFjdGl2ZU5hdlswXS5jbGFzc05hbWUgPSBhY3RpdmVOYXZbMF0uY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmVcIiwgXCJcIik7XHJcbiAgdGFyZ2V0LmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIFxyXG4gIGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgaG9tZU5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1ob21lXCIpO1xyXG4gIGhvbWVOYXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gIGhvbWVOYXYudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBob21lTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlTmF2KGUudGFyZ2V0KTtcclxuICAgIGRpc3BsYXlIb21lKCk7XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBtZW51TmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LW1lbnVcIik7XHJcbiAgbWVudU5hdi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIG1lbnVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVOYXYoZS50YXJnZXQpO1xyXG4gICAgZGlzcGxheU1lbnUoKTtcclxuICB9KVxyXG5cclxuICBjb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnRhY3ROYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtY29udGFjdFwiKTtcclxuICBjb250YWN0TmF2LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgY29udGFjdE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNldEFjdGl2ZU5hdihlLnRhcmdldCk7XHJcbiAgICBkaXNwbGF5Q29udGFjdCgpO1xyXG4gIH0pXHJcblxyXG4gIHVsLmFwcGVuZENoaWxkKGhvbWVOYXYpO1xyXG4gIHVsLmFwcGVuZENoaWxkKG1lbnVOYXYpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNvbnRhY3ROYXYpO1xyXG5cclxuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5jb25zdCBtYWluRWxlbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmNvbnN0IGZvb3RlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBgQ29weXJpZ2h0ICZjb3B5OyAyMDIxIC0gbWFoZXNhMTBgO1xyXG5cclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcblxyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlXZWJzaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCgpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5FbGVtZW50KCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCgpKTtcclxuXHJcbiAgZGlzcGxheUhvbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZGlzcGxheVdlYnNpdGUsIHNldEFjdGl2ZU5hdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheVdlYnNpdGUgfSBmcm9tICcuL3dlYnNpdGUuanMnO1xyXG5cclxuZGlzcGxheVdlYnNpdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=