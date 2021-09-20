/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n //Some useful func and const\n\nvar gender = document.getElementById('client_gender');\nvar name = document.getElementById('client_name');\nvar country = document.getElementById('client_country');\nvar city = document.getElementById('client_city');\nvar birth = document.getElementById('client_birth');\nvar file = document.getElementById('client_file');\nvar genderList = document.getElementById('client_select_list');\nvar fileInfo = document.getElementById('file-chosen');\nvar form = document.getElementsByClassName('tellUsForm')[0];\nvar valitateBtn = document.getElementById('client_send');\nvar fields = form.getElementsByClassName('inputField');\n\nfunction sizeConvert(size) {\n  var newSize = size / 1024;\n\n  if (newSize > 512) {\n    newSize = newSize / 1024;\n\n    if (newSize > 512) {\n      newSize = newSize / 1024;\n      return \"\".concat(newSize.toFixed(2), \" gb\");\n    } else {\n      return \"\".concat(newSize.toFixed(2), \" mb\");\n    }\n  } else {\n    return \"\".concat(newSize.toFixed(2), \" kb\");\n  }\n}\n\nvar generateError = function generateError(text) {\n  var error = document.createElement('div');\n  error.className = 'error';\n  error.style.color = 'red';\n  error.innerHTML = text;\n  return error;\n}; //End some useful func\n// Start step by step form functionality.\n\n\nvar allVisible = false;\n\nif (window.matchMedia(\"(max-width: 375px)\").matches) {\n  document.getElementsByClassName('tellUsSecondColumn')[0].style.visibility = 'visible';\n  document.getElementsByClassName('tellUsUploadColumn')[0].style.visibility = 'visible';\n  allVisible = true;\n  valitateBtn.removeAttribute('disabled');\n} else {\n  allVisible = false;\n}\n\nvar _iterator = _createForOfIteratorHelper(genderList.getElementsByTagName('li')),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var item = _step.value;\n    item.addEventListener('click', function (event) {\n      gender.value = item.innerText;\n      genderList.style.display = 'none';\n      genderList.style.borderColor = '#8E43ED';\n      gender.style.borderColor = '#8E43ED';\n      item.style.borderColor = '#8E43ED';\n      checkNextStep();\n    });\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\ngender.addEventListener('click', function (event) {\n  if (genderList.style.display === 'none') {\n    genderList.style.display = 'block';\n  } else {\n    genderList.style.display = 'none';\n  }\n});\ngender.addEventListener('blur', function (event) {\n  if (event.relatedTarget !== genderList) {\n    genderList.style.display = 'none';\n  }\n});\nname.addEventListener('change', function (event) {\n  if (name.value.length > 3) {\n    name.style.borderColor = '#8E43ED';\n    checkNextStep();\n  } else {\n    name.style.borderColor = '#D4B1FF';\n    checkNextStep();\n  }\n});\ncountry.addEventListener('change', function (event) {\n  if (country.value.length > 3) {\n    country.style.borderColor = '#8E43ED';\n    checkNextStep();\n  } else {\n    country.style.borderColor = '#D4B1FF';\n    checkNextStep();\n  }\n});\ncity.addEventListener('change', function (event) {\n  if (city.value.length > 3) {\n    city.style.borderColor = '#8E43ED';\n    checkNextStep();\n  } else {\n    city.style.borderColor = '#D4B1FF';\n    checkNextStep();\n  }\n});\nbirth.addEventListener('change', function (event) {\n  if (birth.value.length > 3) {\n    birth.style.borderColor = '#8E43ED';\n    checkNextStep();\n  } else {\n    birth.style.borderColor = '#D4B1FF';\n    checkNextStep();\n  }\n});\n\nfunction checkNextStep() {\n  if (!allVisible) {\n    if (gender.value !== \"\" && name.value.length > 3) {\n      document.getElementsByClassName('tellUsSecondColumn')[0].style.visibility = 'visible';\n    } else {\n      document.getElementsByClassName('tellUsSecondColumn')[0].style.visibility = 'hidden';\n    }\n\n    console.log(gender.value, name.value, country.value, birth.value, city.value);\n\n    if (gender.value !== \"\" && name.value.length > 3 && country.value.length > 3 && birth.value !== \"\" && city.value.length > 3) {\n      document.getElementsByClassName('tellUsUploadColumn')[0].style.visibility = 'visible';\n    } else {\n      document.getElementsByClassName('tellUsUploadColumn')[0].style.visibility = 'hidden';\n      fileInfo.style.visibility = 'hidden';\n    }\n\n    if (gender.value !== \"\" && name.value.length > 3 && country.value.length > 3 && birth.value !== \"\" && city.value.length > 3 && file.value !== \"\") {\n      document.getElementById('client_send').removeAttribute('disabled');\n    } else {\n      document.getElementById('client_send').setAttribute('disabled', 'true');\n    }\n  }\n}\n\nfile.addEventListener('change', function (event) {\n  fileInfo.style.visibility = 'visible';\n  fileInfo.getElementsByClassName('file_icon')[0].style.backgroundImage = \"url(\\\"\".concat(URL.createObjectURL(file.files[0]), \"\\\"\");\n  fileInfo.getElementsByClassName('file_name')[0].innerHTML = file.files[0].name;\n  fileInfo.getElementsByClassName('file_props')[0].innerHTML = \"\".concat(file.files[0].name.split('.')[file.files[0].name.split('.').length - 1].toUpperCase(), \" \").concat(sizeConvert(file.files[0].size));\n  checkNextStep();\n});\nfileInfo.getElementsByTagName('img')[0].addEventListener('click', function (event) {\n  console.log('click');\n  fileInfo.style.visibility = 'hidden';\n  file.value = '';\n  checkNextStep();\n}); // End step by step form functionality.\n// Start form validation functionality\n\nform.addEventListener('submit', function (event) {\n  removeValidation();\n  checkValidation(event);\n  completeForm();\n  event.preventDefault();\n});\n\nfunction completeForm() {\n  document.getElementById('completeFrom').style.display = 'flex';\n  valitateBtn.setAttribute('disabled', 'true');\n}\n\nfunction checkValidation(event) {\n  for (var i = 0; i < fields.length; i++) {\n    if (!fields[i].value) {\n      console.log('field is blank', fields[i]);\n      var error = generateError('Cant be blank');\n      form[i].parentElement.insertBefore(error, fields[i]);\n    }\n  }\n\n  if (form.getElementsByClassName('error')[0] !== undefined) {\n    event.preventDefault();\n  }\n}\n\nvar removeValidation = function removeValidation() {\n  var errors = form.querySelectorAll('.error');\n\n  for (var i = 0; i < errors.length; i++) {\n    errors[i].remove();\n  }\n}; // End form validation\n// Start drag and drop functionality.\n\n\nvar dragBox = document.getElementsByClassName('uploadBox')[0];\ndragBox.addEventListener('drop', function (event) {\n  event.preventDefault();\n  var firstEl = new DataTransfer();\n  firstEl.items.add(event.dataTransfer.files[0]);\n  file.files = firstEl.files;\n  file.dispatchEvent(new Event('change'));\n  dragBox.style.backgroundColor = 'white';\n});\ndragBox.addEventListener('dragenter', function (event) {\n  event.preventDefault();\n  dragBox.style.backgroundColor = '#E0CFF8';\n});\ndragBox.addEventListener('dragleave', function (event) {\n  dragBox.style.backgroundColor = 'white';\n});\ndragBox.addEventListener('dragover', function (event) {\n  event.preventDefault();\n  dragBox.style.backgroundColor = '#E0CFF8';\n}); //End drag and drop\n\n//# sourceURL=webpack://janedoe/./js/script.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/JaneDoeAvatar.png */ \"./img/JaneDoeAvatar.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/dropdownArrow.svg */ \"./img/dropdownArrow.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/deleteIcon.svg */ \"./img/deleteIcon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/complete.svg */ \"./img/complete.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/SliderPhoto.png */ \"./img/SliderPhoto.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en-US\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <title>JaneDoe</title>\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\">\\r\\n</head>\\r\\n<body>\\r\\n<header>\\r\\n    <div class=\\\"header\\\">\\r\\n        <a class=\\\"logo\\\" href=\\\"#\\\">\\r\\n            <div class=\\\"leftLogo\\\"></div>\\r\\n            <div class=\\\"rightLogo\\\"></div>\\r\\n        </a>\\r\\n        <nav>\\r\\n            <ul>\\r\\n                <li>\\r\\n                    <a>\\r\\n                        Jane Doe\\r\\n                    </a>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <a>\\r\\n                        Tell us about yourself\\r\\n                    </a>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <a>\\r\\n                        Slider\\r\\n                    </a>\\r\\n                </li>\\r\\n            </ul>\\r\\n        </nav>\\r\\n    </div>\\r\\n</header>\\r\\n<main>\\r\\n<article>\\r\\n    <section class=\\\"section-profile\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n            <div class=\\\"profileCard\\\">\\r\\n\\r\\n                    <h2>\\r\\n                        Jane Doe\\r\\n                    </h2>\\r\\n                    <div class=\\\"profileCard-meta\\\">\\r\\n                        <div>\\r\\n                            <p class=\\\"cardMeta-Title\\\">Date of birth</p>\\r\\n                            <p class=\\\"cardMeta-Value\\\">21.04.2001</p>\\r\\n                        </div>\\r\\n                       <div>\\r\\n                           <p class=\\\"cardMeta-Title\\\">Gender </p>\\r\\n                           <p  class=\\\"cardMeta-Value\\\">Female</p>\\r\\n                       </div>\\r\\n                       <div>\\r\\n                           <p class=\\\"cardMeta-Title\\\">Country</p>\\r\\n                           <p  class=\\\"cardMeta-Value\\\">Corea</p>\\r\\n                       </div>\\r\\n\\r\\n                    </div>\\r\\n                    <h5>About me</h5>\\r\\n                    <div class=\\\"aboutMe-box\\\">\\r\\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\\r\\n                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\\r\\n                    </div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"decorSquare1\\\"></div>\\r\\n        <div class=\\\"decorSquare2\\\"></div>\\r\\n    </section>\\r\\n    <section class=\\\"section-tellUs\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n            <h2>Tell us about yourself</h2>\\r\\n                <form class=\\\"tellUsForm\\\" lang=\\\"en\\\">\\r\\n                    <div class=\\\"tellUsColumn tellUsFirstColumn\\\">\\r\\n                        <div class=\\\"tellUsInput\\\">\\r\\n                            <label for=\\\"client_name\\\">Your name</label>\\r\\n                            <input class=\\\"inputField\\\" maxlength=\\\"24\\\" id=\\\"client_name\\\" name=\\\"client_name\\\" type=\\\"text\\\" placeholder=\\\"Tell us your name\\\">\\r\\n                        </div>\\r\\n                        <div class=\\\"tellUsInput\\\">\\r\\n                            <label for=\\\"client_gender\\\">Your gender</label>\\r\\n                            <input class=\\\"inputField\\\"  id=\\\"client_gender\\\" name=\\\"client_gender\\\" placeholder=\\\"Choose your gender\\\" readonly required>\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n                            <ul tabindex=\\\"0\\\"  id=\\\"client_select_list\\\" style=\\\"display: none\\\">\\r\\n                                <li value=\\\"male\\\">\\r\\n                                    Male\\r\\n                                </li>\\r\\n                                <li value=\\\"female\\\">\\r\\n                                    Female\\r\\n                                </li>\\r\\n                                <li value=\\\"other\\\">\\r\\n                                    Other\\r\\n                                </li>\\r\\n                            </ul>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div  class=\\\"tellUsColumn tellUsSecondColumn\\\" style=\\\"visibility: hidden\\\">\\r\\n                        <div  class=\\\"tellUsInput\\\">\\r\\n                            <label for=\\\"client_country\\\">Your country</label>\\r\\n                            <input class=\\\"inputField\\\"  id=\\\"client_country\\\" name=\\\"client_country\\\" >\\r\\n                        </div>\\r\\n                        <div  class=\\\"tellUsInput\\\" >\\r\\n                            <label for=\\\"client_city\\\">Your City</label>\\r\\n                            <input class=\\\"inputField\\\"  id=\\\"client_city\\\" name=\\\"client_city\\\" >\\r\\n                        </div>\\r\\n                        <div class=\\\"tellUsInput\\\">\\r\\n                            <label for=\\\"client_birth\\\">Your date of birth</label>\\r\\n                            <input class=\\\"inputField\\\"  id=\\\"client_birth\\\" type=\\\"text\\\" name=\\\"client_birth\\\" placeholder=\\\"dd.mm.yyyy\\\" >\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"tellUsColumn tellUsUploadColumn\\\" style=\\\"visibility: hidden\\\">\\r\\n                        <div class=\\\"uploadBox\\\">\\r\\n                            <p>Proof your identity with some documents</p>\\r\\n                            <label for=\\\"client_file\\\">Add document</label>\\r\\n                        </div>\\r\\n                        <input class=\\\"inputField\\\" id=\\\"client_file\\\" type=\\\"file\\\" >\\r\\n                        <div id=\\\"file-chosen\\\"  style=\\\"visibility: hidden\\\">\\r\\n                            <div class=\\\"file_icon\\\"></div>\\r\\n                            <div class=\\\"file_description\\\">\\r\\n                                <p class=\\\"file_name\\\">File_name_001</p>\\r\\n                                <p class=\\\"file_props\\\">JPG 2,5 mb</p>\\r\\n                            </div>\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n                       </div>\\r\\n                    </div>\\r\\n                    <input disabled id=\\\"client_send\\\" class=\\\"sendBtn\\\" type=\\\"submit\\\" value=\\\"Send info\\\">\\r\\n                    <div id=\\\"completeFrom\\\">\\r\\n                        <div class=\\\"completeBox\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"/>\\r\\n                        </div>\\r\\n                        <p>Completed</p>\\r\\n                    </div>\\r\\n                </form>\\r\\n        </div>\\r\\n        <div class=\\\"decorSquare3\\\"></div>\\r\\n        <div class=\\\"decorSquare4\\\"></div>\\r\\n        <div class=\\\"decorSquare5\\\"></div>\\r\\n        <div class=\\\"decorSquare6\\\"></div>\\r\\n        <div class=\\\"decorSquare7\\\"></div>\\r\\n        <div class=\\\"decorSquare8\\\"></div>\\r\\n    </section>\\r\\n    <section class=\\\"section-slider\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n            <div class=\\\"slider\\\">\\r\\n                <input checked type=\\\"radio\\\"  name=\\\"slider\\\" id=\\\"slide1\\\">\\r\\n                <input type=\\\"radio\\\"  name=\\\"slider\\\" id=\\\"slide2\\\">\\r\\n                <input type=\\\"radio\\\"  name=\\\"slider\\\" id=\\\"slide3\\\">\\r\\n                <div class=\\\"slider-wrapper\\\">\\r\\n                    <div class=\\\"wrapper-inner\\\">\\r\\n\\r\\n\\r\\n                    <div class=\\\"slide\\\">\\r\\n                        <div class=\\\"slide-text\\\">\\r\\n                            <h2>Slide this photo</h2>\\r\\n                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\\r\\n                        </div>\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"/>\\r\\n                    </div>\\r\\n                    <div class=\\\"slide\\\">\\r\\n                        <div class=\\\"slide-text\\\">\\r\\n                            <h2>Slide this photo</h2>\\r\\n                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\\r\\n                        </div>\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"/>\\r\\n                    </div>\\r\\n                    <div class=\\\"slide\\\">\\r\\n                        <div class=\\\"slide-text\\\">\\r\\n                            <h2>Slide this photo</h2>\\r\\n                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\\r\\n                        </div>\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"/>\\r\\n                    </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"slider-controls\\\">\\r\\n                    <label for=\\\"slide1\\\"></label>\\r\\n                    <label for=\\\"slide2\\\"></label>\\r\\n                    <label for=\\\"slide3\\\"></label>\\r\\n                </div>\\r\\n                <div class=\\\"slider-dots\\\">\\r\\n                    <label for=\\\"slide1\\\"></label>\\r\\n                    <label for=\\\"slide2\\\"></label>\\r\\n                    <label for=\\\"slide3\\\"></label>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </section>\\r\\n</article>\\r\\n</main>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://janedoe/./index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://janedoe/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://janedoe/./scss/style.scss?");

/***/ }),

/***/ "./img/JaneDoeAvatar.png":
/*!*******************************!*\
  !*** ./img/JaneDoeAvatar.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74cdb14d8043cff8b829.png\";\n\n//# sourceURL=webpack://janedoe/./img/JaneDoeAvatar.png?");

/***/ }),

/***/ "./img/SliderPhoto.png":
/*!*****************************!*\
  !*** ./img/SliderPhoto.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4d4c76362410e435be0.png\";\n\n//# sourceURL=webpack://janedoe/./img/SliderPhoto.png?");

/***/ }),

/***/ "./img/complete.svg":
/*!**************************!*\
  !*** ./img/complete.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a14db6a57f2408c74d8.svg\";\n\n//# sourceURL=webpack://janedoe/./img/complete.svg?");

/***/ }),

/***/ "./img/deleteIcon.svg":
/*!****************************!*\
  !*** ./img/deleteIcon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"969002af43534720b326.svg\";\n\n//# sourceURL=webpack://janedoe/./img/deleteIcon.svg?");

/***/ }),

/***/ "./img/dropdownArrow.svg":
/*!*******************************!*\
  !*** ./img/dropdownArrow.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e77e5b6d2efb03a87dc.svg\";\n\n//# sourceURL=webpack://janedoe/./img/dropdownArrow.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;