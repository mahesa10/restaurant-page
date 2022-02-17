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
  contactTel.innerHTML = `<img src="./icons/phone.svg"> (999) 999-9999`;

  const contactAddr = document.createElement("span");
  contactAddr.classList.add("address");
  contactAddr.innerHTML = `<img src="./icons/location.svg"> 99 Nusantara Street`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNOOEM7QUFDOUM7QUFDQSwyREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xyXG5cclxuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkJvb2sgTm93XCI7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RUZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb250YWN0VGVsLmNsYXNzTGlzdC5hZGQoXCJ0ZWxlcGhvbmVcIik7XHJcbiAgY29udGFjdFRlbC5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIuL2ljb25zL3Bob25lLnN2Z1wiPiAoOTk5KSA5OTktOTk5OWA7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RBZGRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29udGFjdEFkZHIuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XHJcbiAgY29udGFjdEFkZHIuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiLi9pY29ucy9sb2NhdGlvbi5zdmdcIj4gOTkgTnVzYW50YXJhIFN0cmVldGA7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpO1xyXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RUZWwpO1xyXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xyXG4gIGNvbnN0IGZvcm1JbnB1dCA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWxUZXh0OiBcIk5hbWVcIixcclxuICAgICAgdHlwZTogXCJuYW1lXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsVGV4dDogXCJFbWFpbFwiLFxyXG4gICAgICB0eXBlOiBcImVtYWlsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsVGV4dDogXCJEYXRlXCIsXHJcbiAgICAgIHR5cGU6IFwiZGF0ZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbFRleHQ6IFwiVGltZVwiLFxyXG4gICAgICB0eXBlOiBcInRpbWVcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGZvcm1JbnB1dC5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgIGNvbnN0IGZvcm1Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb3JtR3JvdXAuY2xhc3NOYW1lID0gYGZvcm0tZ3JvdXAgZm9ybS1ncm91cC0ke2lucHV0LnR5cGV9YFxyXG5cclxuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBpbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC50eXBlKTtcclxuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dC5sYWJlbFRleHQ7XHJcbiAgICBcclxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXQudHlwZSk7XHJcbiAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0LnR5cGUpO1xyXG4gICAgXHJcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XHJcbiAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XHJcbiAgICBcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZm9ybUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XHJcblxyXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XHJcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3REaXY7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udGFjdDsiLCJpbXBvcnQgZGlzcGxheU1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5cclxuY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XHJcblxyXG4gIGNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaG9tZUhlYWRlci5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9XCJyZXN0b1wiPlJlc3RvPC9zcGFuPjxzcGFuIGlkPVwibmVzaWFcIj5uZXNpYTwvc3Bhbj5gO1xyXG5cclxuICBjb25zdCBob21lRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGhvbWVEZXNjLnRleHRDb250ZW50ID0gXCJZb3VyIEZhdm9yaXRlIEluZG9uZXNpYW4gUmVzdGF1cmFudFwiO1xyXG5cclxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xyXG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1tZW51XCIpO1xyXG4gICAgY29uc3QgYWN0aXZlTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKTtcclxuICAgIGFjdGl2ZU5hdlswXS5jbGFzc05hbWUgPSBhY3RpdmVOYXZbMF0uY2xhc3NOYW1lLnJlcGxhY2UoXCJhY3RpdmVcIiwgXCJcIik7XHJcbiAgICBtZW51TmF2LmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICBkaXNwbGF5TWVudSgpO1xyXG4gIH0pXHJcblxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lRGVzYyk7XHJcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIGhvbWU7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBtYWluLmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZTsiLCJjb25zdCBtZW51UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcclxuXHJcbiAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xyXG5cclxuICBjb25zdCBtZW51cyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCZWVmIFJlbmRhbmdcIixcclxuICAgICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvcmVuZGFuZy5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2F0YXlcIixcclxuICAgICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvc2F0YXkuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZyaWVkIFJpY2VcIixcclxuICAgICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvZnJpZWQtcmljZS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiR2Fkby1HYWRvXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcIi4vaW1hZ2VzL2dhZG8tZ2Fkby5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU290b1wiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9zb3RvLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNYXJ0YWJha1wiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9tYXJ0YWJhay5qcGVnXCIsXHJcbiAgICB9XHJcbiAgXTtcclxuICBcclxuICBtZW51cy5mb3JFYWNoKG1lbnUgPT4ge1xyXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJmb29kLW1lbnVcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IG1lbnVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBtZW51TmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xyXG4gICAgbWVudU5hbWUudGV4dENvbnRlbnQgPSBtZW51Lm5hbWU7XHJcblxyXG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtZW51SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBtZW51LmltYWdlVXJsKTtcclxuXHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVJbWcpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51TmFtZSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheU1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudVBhZ2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZW51OyIsImltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL2hvbWUuanMnO1xyXG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IGRpc3BsYXlDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XHJcblxyXG5jb25zdCBzZXRBY3RpdmVOYXYgPSAodGFyZ2V0KSA9PiB7XHJcbiAgY29uc3QgYWN0aXZlTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKTtcclxuICBhY3RpdmVOYXZbMF0uY2xhc3NOYW1lID0gYWN0aXZlTmF2WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiYWN0aXZlXCIsIFwiXCIpO1xyXG4gIHRhcmdldC5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG59XHJcblxyXG5jb25zdCBoZWFkZXJFbGVtZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBcclxuICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGhvbWVOYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtaG9tZVwiKTtcclxuICBob21lTmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICBob21lTmF2LnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgaG9tZU5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNldEFjdGl2ZU5hdihlLnRhcmdldCk7XHJcbiAgICBkaXNwbGF5SG9tZSgpO1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVudU5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1tZW51XCIpO1xyXG4gIG1lbnVOYXYudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlTmF2KGUudGFyZ2V0KTtcclxuICAgIGRpc3BsYXlNZW51KCk7XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb250YWN0TmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWNvbnRhY3RcIik7XHJcbiAgY29udGFjdE5hdi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gIGNvbnRhY3ROYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVOYXYoZS50YXJnZXQpO1xyXG4gICAgZGlzcGxheUNvbnRhY3QoKTtcclxuICB9KVxyXG5cclxuICB1bC5hcHBlbmRDaGlsZChob21lTmF2KTtcclxuICB1bC5hcHBlbmRDaGlsZChtZW51TmF2KTtcclxuICB1bC5hcHBlbmRDaGlsZChjb250YWN0TmF2KTtcclxuXHJcbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuY29uc3QgbWFpbkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5jb25zdCBmb290ZXJFbGVtZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGZvb3RlclRleHQuaW5uZXJIVE1MID0gYENvcHlyaWdodCAmY29weTsgMjAyMSAtIG1haGVzYTEwYDtcclxuXHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xyXG5cclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5V2Vic2l0ZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRWxlbWVudCgpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckVsZW1lbnQoKSk7XHJcblxyXG4gIGRpc3BsYXlIb21lKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlXZWJzaXRlLCBzZXRBY3RpdmVOYXYgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc3BsYXlXZWJzaXRlIH0gZnJvbSAnLi93ZWJzaXRlLmpzJztcclxuXHJcbmRpc3BsYXlXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9