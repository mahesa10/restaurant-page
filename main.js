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
  contactAddr.innerHTML = `<img src="./icons/location.svg"> 99 Nusantara Street, New York`;

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
const homePage = () => {
  const home = document.createElement("div");
  home.setAttribute("id", "home");

  const homeHeader = document.createElement("h1");
  homeHeader.innerHTML = `<span id="resto">Resto</span><span id="nesia">nesia</span>`;

  const homeDesc = document.createElement("p");
  homeDesc.textContent = "Your Favorite Indonesian Restaurant";

  const homeButton = document.createElement("button");
  homeButton.textContent = "Our Menu";

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
/* harmony export */   "displayWebsite": () => (/* binding */ displayWebsite)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




const headerElement = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  
  const homeNav = document.createElement("li");
  homeNav.setAttribute("id", "nav-home");
  homeNav.textContent = "Home";
  homeNav.addEventListener("click", () => {
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  })

  const menuNav = document.createElement("li");
  menuNav.setAttribute("id", "nav-menu");
  menuNav.textContent = "Menu";
  menuNav.addEventListener("click", () => {
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  })

  const contactNav = document.createElement("li");
  contactNav.setAttribute("id", "nav-contact");
  contactNav.textContent = "Contact";
  contactNav.addEventListener("click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQzdFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDMUIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RVO0FBQ0E7QUFDTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWM7QUFDbEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFXO0FBQ2I7QUFDQTs7Ozs7OztVQ2pFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQzlDO0FBQ0EsMkRBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJCb29rIE5vd1wiO1xyXG5cclxuICBjb25zdCBjb250YWN0VGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29udGFjdFRlbC5jbGFzc0xpc3QuYWRkKFwidGVsZXBob25lXCIpO1xyXG4gIGNvbnRhY3RUZWwuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiLi9pY29ucy9waG9uZS5zdmdcIj4gKDk5OSkgOTk5LTk5OTlgO1xyXG5cclxuICBjb25zdCBjb250YWN0QWRkciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvbnRhY3RBZGRyLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xyXG4gIGNvbnRhY3RBZGRyLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIi4vaWNvbnMvbG9jYXRpb24uc3ZnXCI+IDk5IE51c2FudGFyYSBTdHJlZXQsIE5ldyBZb3JrYDtcclxuXHJcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XHJcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFRlbCk7XHJcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEFkZHIpO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XHJcbiAgY29uc3QgZm9ybUlucHV0ID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbFRleHQ6IFwiTmFtZVwiLFxyXG4gICAgICB0eXBlOiBcIm5hbWVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWxUZXh0OiBcIkVtYWlsXCIsXHJcbiAgICAgIHR5cGU6IFwiZW1haWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWxUZXh0OiBcIkRhdGVcIixcclxuICAgICAgdHlwZTogXCJkYXRlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsVGV4dDogXCJUaW1lXCIsXHJcbiAgICAgIHR5cGU6IFwidGltZVwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgZm9ybUlucHV0LmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Hcm91cC5jbGFzc05hbWUgPSBgZm9ybS1ncm91cCBmb3JtLWdyb3VwLSR7aW5wdXQudHlwZX1gXHJcblxyXG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0LnR5cGUpO1xyXG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGlucHV0LmxhYmVsVGV4dDtcclxuICAgIFxyXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBpbnB1dC50eXBlKTtcclxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXQudHlwZSk7XHJcbiAgICBcclxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcclxuICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcclxuICAgIFxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtR3JvdXApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBmb3JtQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcclxuXHJcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcclxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xyXG5cclxuICByZXR1cm4gY29udGFjdERpdjtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250YWN0OyIsImNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xyXG5cclxuICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhvbWVIZWFkZXIuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwicmVzdG9cIj5SZXN0bzwvc3Bhbj48c3BhbiBpZD1cIm5lc2lhXCI+bmVzaWE8L3NwYW4+YDtcclxuXHJcbiAgY29uc3QgaG9tZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBob21lRGVzYy50ZXh0Q29udGVudCA9IFwiWW91ciBGYXZvcml0ZSBJbmRvbmVzaWFuIFJlc3RhdXJhbnRcIjtcclxuXHJcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcclxuXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVEZXNjKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG5cclxuICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lOyIsImNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xyXG5cclxuICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBNZW51XCI7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcblxyXG4gIGNvbnN0IG1lbnVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJlZWYgUmVuZGFuZ1wiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9yZW5kYW5nLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTYXRheVwiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9zYXRheS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRnJpZWQgUmljZVwiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9mcmllZC1yaWNlLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJHYWRvLUdhZG9cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvZ2Fkby1nYWRvLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTb3RvXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcIi4vaW1hZ2VzL3NvdG8uanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1hcnRhYmFrXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcIi4vaW1hZ2VzL21hcnRhYmFrLmpwZWdcIixcclxuICAgIH1cclxuICBdO1xyXG4gIFxyXG4gIG1lbnVzLmZvckVhY2gobWVudSA9PiB7XHJcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcImZvb2QtbWVudVwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1lbnVOYW1lLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XHJcbiAgICBtZW51TmFtZS50ZXh0Q29udGVudCA9IG1lbnUubmFtZTtcclxuXHJcbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1lbnVJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnUuaW1hZ2VVcmwpO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUltZyk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5TWVudSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lbnU7IiwiaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgZGlzcGxheUNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcclxuXHJcbmNvbnN0IGhlYWRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIFxyXG4gIGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgaG9tZU5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1ob21lXCIpO1xyXG4gIGhvbWVOYXYudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBob21lTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkaXNwbGF5SG9tZSgpO1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVudU5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1tZW51XCIpO1xyXG4gIG1lbnVOYXYudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkaXNwbGF5TWVudSgpO1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbnRhY3ROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29udGFjdE5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1jb250YWN0XCIpO1xyXG4gIGNvbnRhY3ROYXYudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBjb250YWN0TmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkaXNwbGF5Q29udGFjdCgpO1xyXG4gIH0pXHJcblxyXG4gIHVsLmFwcGVuZENoaWxkKGhvbWVOYXYpO1xyXG4gIHVsLmFwcGVuZENoaWxkKG1lbnVOYXYpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGNvbnRhY3ROYXYpO1xyXG5cclxuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5jb25zdCBtYWluRWxlbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmNvbnN0IGZvb3RlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBgQ29weXJpZ2h0ICZjb3B5OyAyMDIxIC0gbWFoZXNhMTBgO1xyXG5cclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcblxyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlXZWJzaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCgpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5FbGVtZW50KCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCgpKTtcclxuXHJcbiAgZGlzcGxheUhvbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZGlzcGxheVdlYnNpdGUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc3BsYXlXZWJzaXRlIH0gZnJvbSAnLi93ZWJzaXRlLmpzJztcclxuXHJcbmRpc3BsYXlXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9