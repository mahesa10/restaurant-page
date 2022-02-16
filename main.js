/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homeElement = () => {
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
  main.appendChild(homeElement());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQzFCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RVO0FBQ0E7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFXO0FBQ2YsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFXO0FBQ2YsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVc7QUFDYjtBQUNBOzs7Ozs7O1VDN0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7QUFDOUM7QUFDQSwyREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhvbWVFbGVtZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xyXG5cclxuICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGhvbWVIZWFkZXIuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwicmVzdG9cIj5SZXN0bzwvc3Bhbj48c3BhbiBpZD1cIm5lc2lhXCI+bmVzaWE8L3NwYW4+YDtcclxuXHJcbiAgY29uc3QgaG9tZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBob21lRGVzYy50ZXh0Q29udGVudCA9IFwiWW91ciBGYXZvcml0ZSBJbmRvbmVzaWFuIFJlc3RhdXJhbnRcIjtcclxuXHJcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcclxuXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVEZXNjKTtcclxuICBob21lLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG5cclxuICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheUhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZUVsZW1lbnQoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lOyIsImNvbnN0IG1lbnVFbGVtZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xyXG5cclxuICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBNZW51XCI7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcblxyXG4gIGNvbnN0IG1lbnVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJlZWYgUmVuZGFuZ1wiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9yZW5kYW5nLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTYXRheVwiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9zYXRheS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRnJpZWQgUmljZVwiLFxyXG4gICAgICBpbWFnZVVybDogXCIuL2ltYWdlcy9mcmllZC1yaWNlLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJHYWRvLUdhZG9cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiLi9pbWFnZXMvZ2Fkby1nYWRvLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTb3RvXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcIi4vaW1hZ2VzL3NvdG8uanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1hcnRhYmFrXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcIi4vaW1hZ2VzL21hcnRhYmFrLmpwZWdcIixcclxuICAgIH1cclxuICBdO1xyXG4gIFxyXG4gIG1lbnVzLmZvckVhY2gobWVudSA9PiB7XHJcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcImZvb2QtbWVudVwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIG1lbnVOYW1lLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XHJcbiAgICBtZW51TmFtZS50ZXh0Q29udGVudCA9IG1lbnUubmFtZTtcclxuXHJcbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1lbnVJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1lbnUuaW1hZ2VVcmwpO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUltZyk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5TWVudSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51RWxlbWVudCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lbnU7IiwiaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tICcuL21lbnUuanMnO1xyXG5cclxuY29uc3QgaGVhZGVyRWxlbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgXHJcbiAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBob21lTmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWhvbWVcIik7XHJcbiAgaG9tZU5hdi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gIGhvbWVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRpc3BsYXlIb21lKCk7XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBtZW51TmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LW1lbnVcIik7XHJcbiAgbWVudU5hdi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIG1lbnVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRpc3BsYXlNZW51KCk7XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb250YWN0TmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWNvbnRhY3RcIik7XHJcbiAgY29udGFjdE5hdi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICB1bC5hcHBlbmRDaGlsZChob21lTmF2KTtcclxuICB1bC5hcHBlbmRDaGlsZChtZW51TmF2KTtcclxuICB1bC5hcHBlbmRDaGlsZChjb250YWN0TmF2KTtcclxuXHJcbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuY29uc3QgbWFpbkVsZW1lbnQgPSAoY29udGVudCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuY29uc3QgZm9vdGVyRWxlbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBmb290ZXJUZXh0LmlubmVySFRNTCA9IGBDb3B5cmlnaHQgJmNvcHk7IDIwMjEgLSBtYWhlc2ExMGA7XHJcblxyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxuXHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVdlYnNpdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkVsZW1lbnQoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJFbGVtZW50KCkpO1xyXG5cclxuICBkaXNwbGF5SG9tZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5V2Vic2l0ZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheVdlYnNpdGUgfSBmcm9tICcuL3dlYnNpdGUuanMnO1xyXG5cclxuZGlzcGxheVdlYnNpdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=