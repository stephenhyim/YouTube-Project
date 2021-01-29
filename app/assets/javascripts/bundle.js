/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/youtube.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/actions/session_actions.js":
/*!*********************************************!*\
  !*** ./frontend/actions/session_actions.js ***!
  \*********************************************/
/*! exports provided: RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS, receiveCurrentUser, logoutCurrentUser, receiveSessionErrors, removeSessionErrors, signup, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CURRENT_USER", function() { return RECEIVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_CURRENT_USER", function() { return LOGOUT_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SESSION_ERRORS", function() { return RECEIVE_SESSION_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SESSION_ERRORS", function() { return REMOVE_SESSION_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveCurrentUser", function() { return receiveCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutCurrentUser", function() { return logoutCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSessionErrors", function() { return receiveSessionErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSessionErrors", function() { return removeSessionErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/session_api_util */ "./frontend/util/session_api_util.js");

var RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
var LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
var RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
var REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
var receiveCurrentUser = function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};
var logoutCurrentUser = function logoutCurrentUser() {
  return {
    type: LOGOUT_CURRENT_USER
  };
};
var receiveSessionErrors = function receiveSessionErrors(errors) {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};
var removeSessionErrors = function removeSessionErrors() {
  return {
    type: REMOVE_SESSION_ERRORS
  };
};
var signup = function signup(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["signup"](user).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }, function (err) {
      return dispatch(receiveSessionErrors(err.responseJSON));
    });
  };
};
var login = function login(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["login"](user).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }, function (err) {
      return dispatch(receiveSessionErrors(err.responseJSON));
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["logout"]().then(function (user) {
      return dispatch(logoutCurrentUser(user));
    }, function (err) {
      return dispatch(receiveSessionErrors(err.responseJSON));
    });
  };
};

/***/ }),

/***/ "./frontend/components/app.jsx":
/*!*************************************!*\
  !*** ./frontend/components/app.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/route_util */ "./frontend/util/route_util.jsx");
/* harmony import */ var _top_nav_bar_top_nav_bar_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top_nav_bar/top_nav_bar_container */ "./frontend/components/top_nav_bar/top_nav_bar_container.js");
/* harmony import */ var _landing_page_landing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing_page/landing_page */ "./frontend/components/landing_page/landing_page.jsx");
/* harmony import */ var _session_signup_form_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session/signup_form_container */ "./frontend/components/session/signup_form_container.js");
/* harmony import */ var _session_login_form_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session/login_form_container */ "./frontend/components/session/login_form_container.js");










var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/",
    component: _landing_page_landing_page__WEBPACK_IMPORTED_MODULE_5__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_3__["AuthRoute"], {
    exact: true,
    path: "/login",
    component: _session_login_form_container__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_3__["AuthRoute"], {
    exact: true,
    path: "/signup",
    component: _session_signup_form_container__WEBPACK_IMPORTED_MODULE_6__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./frontend/components/landing_page/landing_page.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/landing_page/landing_page.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/route_util */ "./frontend/util/route_util.jsx");
/* harmony import */ var _top_nav_bar_top_nav_bar_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top_nav_bar/top_nav_bar_container */ "./frontend/components/top_nav_bar/top_nav_bar_container.js");
/* harmony import */ var _left_nav_bar_left_nav_bar_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../left_nav_bar/left_nav_bar_container */ "./frontend/components/left_nav_bar/left_nav_bar_container.js");
/* harmony import */ var _videos_video_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../videos/video_index */ "./frontend/components/videos/video_index.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var LandingPage = /*#__PURE__*/function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  var _super = _createSuper(LandingPage);

  function LandingPage(props) {
    _classCallCheck(this, LandingPage);

    return _super.call(this, props);
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "landing-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_nav_bar_top_nav_bar_container__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_left_nav_bar_left_nav_bar_container__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_videos_video_index__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
    }
  }]);

  return LandingPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./frontend/components/left_nav_bar/left_nav_bar.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/left_nav_bar/left_nav_bar.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var LeftNavBar = function LeftNavBar(_ref) {
  var currentUser = _ref.currentUser;
  // debugger
  var display = currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-nav-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-group1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "left-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-home"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "home-link",
    to: "/"
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "left-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-book-open"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "library-link",
    to: "/"
  }, "Library")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "left-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-thumbs-up"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "liked-videos-link",
    to: "/"
  }, "Liked videos")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-nav-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-group1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "left-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-home"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "home-link",
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "left-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-book-open"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "library-link",
    to: "/"
  }, "Library"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-group2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sign in to like videos, comment, and subscribe.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "signin-btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "signin-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-user"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "left-signin-link",
    to: "/login"
  }, "SIGN IN")))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, display));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LeftNavBar));

/***/ }),

/***/ "./frontend/components/left_nav_bar/left_nav_bar_container.js":
/*!********************************************************************!*\
  !*** ./frontend/components/left_nav_bar/left_nav_bar_container.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _left_nav_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./left_nav_bar */ "./frontend/components/left_nav_bar/left_nav_bar.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");





var mSTP = function mSTP(state, ownProps) {
  // debugger
  return {
    currentUser: state.session.id
  };
};

var mDTP = function mDTP(dispatch) {
  return {
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["login"])(user));
    },
    signup: function signup(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["signup"])(user));
    },
    logout: function logout(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["logout"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP, mDTP)(_left_nav_bar__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/root.jsx":
/*!**************************************!*\
  !*** ./frontend/components/root.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./frontend/components/app.jsx");





var Root = function Root(_ref) {
  var store = _ref.store;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./frontend/components/session/login_form.jsx":
/*!****************************************************!*\
  !*** ./frontend/components/session/login_form.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // import SignupForm2 from './signup_form2';

var LoginForm = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _super.call(this, props);
    _this.guestLogin = _this.guestLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginForm, [{
    key: "guestLogin",
    value: function guestLogin(e) {
      e.preventDefault();
      var guest = {
        email: 'guest@email.com',
        password: 'guestpassword'
      };
      this.props.login(guest);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.errors.map(function (error, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: "error-".concat(i)
        }, error);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      // debugger
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-test"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "google-logo",
        src: window.logo
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "signin-words"
      }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "signin-words2"
      }, "to continue to YouTube")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-email-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "login-form-one-email",
        placeholder: "Email",
        type: "text",
        value: this.props.values.email,
        onChange: this.props.update('email')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-errors"
      }, this.renderErrors())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "guest-login-button-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "guest-login-button",
        onClick: this.guestLogin
      }, "Guest Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-bottom-buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-form-one-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "create-account-button-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "create-account-button",
        to: "/signup"
      }, "Create account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-next-button-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-next-button",
        onClick: this.props.nextStep
      }, "Next")))))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // export default SignupForm;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LoginForm));

/***/ }),

/***/ "./frontend/components/session/login_form2.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/session/login_form2.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // import SignupForm2 from './signup_form2';

var LoginForm2 = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginForm2, _React$Component);

  var _super = _createSuper(LoginForm2);

  function LoginForm2() {
    _classCallCheck(this, LoginForm2);

    return _super.apply(this, arguments);
  }

  _createClass(LoginForm2, [{
    key: "renderErrors",
    value: function renderErrors() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.errors.map(function (error, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: "error-".concat(i)
        }, error);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      // debugger
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-test"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "google-logo",
        src: window.logo
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "login2-header"
      }, " Hello ", this.props.firstname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "login2-header2"
      }, this.props.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-password-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "login2-form-two-password",
        placeholder: "Enter your password",
        type: "password",
        value: this.props.password,
        onChange: this.props.update('password')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-errors"
      }, this.renderErrors())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-bottom-buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "forgot-pw-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "forgot-pw"
      }, "Forgot password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login2-form-two-next-button-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "login2-form-two-next-button"
      }, "Next"))))));
    }
  }]);

  return LoginForm2;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LoginForm2));

/***/ }),

/***/ "./frontend/components/session/login_form_container.js":
/*!*************************************************************!*\
  !*** ./frontend/components/session/login_form_container.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _login_form_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login_form_parent */ "./frontend/components/session/login_form_parent.jsx");






var mSTP = function mSTP(state, ownProps) {
  return {
    errors: state.errors.session,
    formType: 'Sign in'
  };
};

var mDTP = function mDTP(dispatch) {
  return {
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["login"])(user));
    },
    removeSessionErrors: function removeSessionErrors() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["removeSessionErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mSTP, mDTP)(_login_form_parent__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./frontend/components/session/login_form_parent.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/session/login_form_parent.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_form */ "./frontend/components/session/login_form.jsx");
/* harmony import */ var _login_form2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login_form2 */ "./frontend/components/session/login_form2.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var LoginFormParent = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginFormParent, _React$Component);

  var _super = _createSuper(LoginFormParent);

  function LoginFormParent(props) {
    var _this;

    _classCallCheck(this, LoginFormParent);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      password: '',
      step: 1
    };
    _this.nextStep = _this.nextStep.bind(_assertThisInitialized(_this));
    _this.prevStep = _this.prevStep.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginFormParent, [{
    key: "nextStep",
    value: function nextStep() {
      var step = this.state.step;
      this.setState({
        step: step + 1
      });
    }
  }, {
    key: "prevStep",
    value: function prevStep() {
      var step = this.state.step;
      this.setState({
        step: step - 1
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var user = Object.assign({}, this.state);
      this.props.login(user);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.removeSessionErrors();
    }
  }, {
    key: "render",
    value: function render() {
      var step = this.state.step;
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      var values = {
        email: email,
        password: password
      };
      var formpage;

      switch (step) {
        case 1:
          formpage =
          /*#__PURE__*/
          // <h1>SignUpForm1</h1>
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
            nextStep: this.nextStep,
            update: this.update,
            values: values // {...values} - look into this option for future
            ,
            errors: this.props.errors,
            login: this.props.login,
            removeSessionErrors: this.props.removeSessionErrors
          });
          break;

        case 2:
          formpage =
          /*#__PURE__*/
          // <h1>SignUpForm2</h1>
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_form2__WEBPACK_IMPORTED_MODULE_3__["default"] // updatedBdayForm = {updatedBdayForm}
          , {
            email: email,
            password: password // birthdate = {birthdate}
            // month = {month}
            // day = {day}
            // year = {year}
            // gender = {gender}
            ,
            prevStep: this.prevStep,
            update: this.update,
            login: this.props.login,
            errors: this.props.errors,
            removeSessionErrors: this.props.removeSessionErrors
          });
          break;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, formpage);
    }
  }]);

  return LoginFormParent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LoginFormParent));

/***/ }),

/***/ "./frontend/components/session/signup_form.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/session/signup_form.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // import SignupForm2 from './signup_form2';

var SignupForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  var _super = _createSuper(SignupForm);

  function SignupForm() {
    _classCallCheck(this, SignupForm);

    return _super.apply(this, arguments);
  }

  _createClass(SignupForm, [{
    key: "renderErrors",
    value: function renderErrors() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.errors.map(function (error, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: "error-".concat(i)
        }, error);
      }));
    } // need to target errors for specific fields

  }, {
    key: "render",
    value: function render() {
      // debugger
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup-form-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup-form-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "google-logo",
        src: window.logo
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Create your Google Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "to continue to YouTube")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "signupform-name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform-firstname"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "signup-firstname",
        placeholder: "First name",
        type: "text",
        value: this.props.values.firstname,
        onChange: this.props.update('firstname')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform-lastname"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "signup-lastname",
        placeholder: "Last name",
        type: "text",
        value: this.props.values.lastname,
        onChange: this.props.update('lastname')
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "email-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform-email"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _defineProperty({
        className: "signup-email",
        type: "text",
        placeholder: "Your email address",
        value: this.props.values.email,
        onChange: this.props.update('email')
      }, "className", "login-input")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupfrom-errors"
      }, this.renderErrors()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "signupform-pw-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform-pw"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "signup-pw",
        placeholder: "Password",
        type: "password",
        value: this.props.values.password,
        onChange: this.props.update('password')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupfrom-pw-confirm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "signup-pw-confirm",
        placeholder: "Confirm",
        type: "password",
        value: this.props.values.confirmPassword,
        onChange: this.props.update('confirmPassword')
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform-buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "login-btn",
        to: "/login"
      }, "Sign in instead")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signin-next-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signin-next-button",
        onClick: this.props.nextStep
      }, "Next"))))));
    }
  }]);

  return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // export default SignupForm;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SignupForm)); //on submit have some logic that checks the confirm password and password match
// if true drop the confirm pw field to persist to the db

/***/ }),

/***/ "./frontend/components/session/signup_form2.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/session/signup_form2.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // import SignupForm2 from './signup_form2';

var SignupForm2 = /*#__PURE__*/function (_React$Component) {
  _inherits(SignupForm2, _React$Component);

  var _super = _createSuper(SignupForm2);

  function SignupForm2() {
    _classCallCheck(this, SignupForm2);

    return _super.apply(this, arguments);
  }

  _createClass(SignupForm2, [{
    key: "renderErrors",
    // updatedBDayForm(){
    //   return {
    //     firstname: this.props.firstname,
    //     lastname: this.props.lastname,
    //     email: this.props.email,
    //     password: this.props.password,
    //     birthdate: `${this.props.year}-${this.props.month}-${this.props.day}`,
    //     gender: this.props.gender
    //   }
    // }
    value: function renderErrors() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.errors.map(function (error, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: "error-".concat(i)
        }, error);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      // debugger
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup2-form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup2-form-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup2-form-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "google-logo",
        src: window.logo
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.props.firstname, ", welcome to Google"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, this.props.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup2-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform-bday"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "signup-bday",
        placeholder: "Your birthday",
        type: "text",
        value: this.props.birthdate,
        onChange: this.props.update('birthdate')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform2-errors"
      }, this.renderErrors()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform-gender",
        htmlFor: "gender"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "signup-gender",
        placeholder: "Gender",
        type: "text",
        value: this.props.gender,
        onChange: this.props.update('gender')
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform2-buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform-back-btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signup-back",
        onClick: this.props.prevStep
      }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "signupform2-next-btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "signup2-next-button"
      }, "Next"))))));
    }
  }]);

  return SignupForm2;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SignupForm2));

/***/ }),

/***/ "./frontend/components/session/signup_form_container.js":
/*!**************************************************************!*\
  !*** ./frontend/components/session/signup_form_container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup_form */ "./frontend/components/session/signup_form.jsx");
/* harmony import */ var _signup_form_parent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup_form_parent */ "./frontend/components/session/signup_form_parent.jsx");







var mSTP = function mSTP(state, ownProps) {
  return {
    errors: state.errors.session,
    formType: 'Sign Up'
  };
};

var mDTP = function mDTP(dispatch) {
  // debugger
  return {
    signup: function signup(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["signup"])(user));
    },
    removeSessionErrors: function removeSessionErrors() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["removeSessionErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mSTP, mDTP)(_signup_form_parent__WEBPACK_IMPORTED_MODULE_5__["default"])); //connect combining into one object to send as props

/***/ }),

/***/ "./frontend/components/session/signup_form_parent.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/session/signup_form_parent.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup_form */ "./frontend/components/session/signup_form.jsx");
/* harmony import */ var _signup_form2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup_form2 */ "./frontend/components/session/signup_form2.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SignupFormParent = /*#__PURE__*/function (_React$Component) {
  _inherits(SignupFormParent, _React$Component);

  var _super = _createSuper(SignupFormParent);

  function SignupFormParent(props) {
    var _this;

    _classCallCheck(this, SignupFormParent);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
      month: '',
      day: '',
      year: '',
      birthdate: '',
      gender: '',
      step: 1
    };
    _this.nextStep = _this.nextStep.bind(_assertThisInitialized(_this));
    _this.prevStep = _this.prevStep.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SignupFormParent, [{
    key: "nextStep",
    value: function nextStep() {
      var step = this.state.step;
      this.setState({
        step: step + 1
      });
    }
  }, {
    key: "prevStep",
    value: function prevStep() {
      var step = this.state.step;
      this.setState({
        step: step - 1
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var user = Object.assign({}, this.state);
      this.props.signup(user);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.removeSessionErrors();
    }
  }, {
    key: "render",
    value: function render() {
      var step = this.state.step;
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password,
          confirmPassword = _this$state.confirmPassword,
          firstname = _this$state.firstname,
          lastname = _this$state.lastname,
          birthdate = _this$state.birthdate,
          month = _this$state.month,
          day = _this$state.day,
          year = _this$state.year,
          gender = _this$state.gender;
      var values = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        birthdate: birthdate,
        month: month,
        day: day,
        year: year,
        gender: gender
      };
      var formpage;

      switch (step) {
        case 1:
          formpage =
          /*#__PURE__*/
          // <h1>SignUpForm1</h1>
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
            nextStep: this.nextStep,
            update: this.update,
            values: values // {...values} - look into this option for future
            ,
            errors: this.props.errors,
            removeSessionErrors: this.props.removeSessionErrors
          });
          break;

        case 2:
          formpage =
          /*#__PURE__*/
          // <h1>SignUpForm2</h1>
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup_form2__WEBPACK_IMPORTED_MODULE_3__["default"] // updatedBdayForm = {updatedBdayForm}
          , {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password // birthdate = {birthdate}
            // month = {month}
            // day = {day}
            // year = {year}
            // gender = {gender}
            ,
            prevStep: this.prevStep,
            handleSubmit: this.handleSubmit,
            update: this.update,
            signup: this.props.signup,
            errors: this.props.errors,
            removeSessionErrors: this.props.removeSessionErrors
          });
          break;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, formpage);
    }
  }]);

  return SignupFormParent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SignupFormParent));

/***/ }),

/***/ "./frontend/components/top_nav_bar/top_nav_bar.jsx":
/*!*********************************************************!*\
  !*** ./frontend/components/top_nav_bar/top_nav_bar.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

 //destructuring currentUser and logout from below

var TopNavBar = function TopNavBar(_ref) {
  var currentUser = _ref.currentUser,
      logout = _ref.logout;
  var display = currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-top-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-bars"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "top-nav-youtube-icon",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-youtube"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center-top-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-bar-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "search-bar",
    type: "text",
    placeholder: "Search"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-top-nav-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-icon-container-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-video"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-user"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return logout(currentUser);
    }
  }, "Log Out")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-top-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-bars"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-youtube"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center-top-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-bar-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "search-bar",
    type: "text",
    placeholder: "Search"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-top-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "signin-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-user"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "signin-btn",
    to: "/login"
  }, "SIGN IN")))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-nav-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "top-nav-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, display))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(TopNavBar));

/***/ }),

/***/ "./frontend/components/top_nav_bar/top_nav_bar_container.js":
/*!******************************************************************!*\
  !*** ./frontend/components/top_nav_bar/top_nav_bar_container.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _top_nav_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_nav_bar */ "./frontend/components/top_nav_bar/top_nav_bar.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");





var mSTP = function mSTP(state, ownProps) {
  return {
    currentUser: state.session.id
  };
};

var mDTP = function mDTP(dispatch) {
  return {
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["login"])(user));
    },
    signup: function signup(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["signup"])(user));
    },
    logout: function logout(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_3__["logout"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP, mDTP)(_top_nav_bar__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/videos/video_index.jsx":
/*!****************************************************!*\
  !*** ./frontend/components/videos/video_index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var VideoIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(VideoIndex, _React$Component);

  var _super = _createSuper(VideoIndex);

  function VideoIndex(props) {
    _classCallCheck(this, VideoIndex);

    return _super.call(this, props);
  }

  _createClass(VideoIndex, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "video-main-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "videos-index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "video-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "video-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "video-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "video-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "video-thumbnail",
        src: window.videothumbnail
      }))))) // <div className = 'video-main-container'>
      //     <div className = 'video-index'>
      //         <div className = 'video-row'></div>
      //             <div className = 'video-thumbnail'></div>
      //             <div className = 'video-description-container'>
      //                 <div className = 'video-icon-container'>
      //                     <img src ></img>
      //                 </div>
      //             </div>
      //             <div className='video-text-container'>
      //                 <div className='video-title'></div>
      //                 <div className='video-info-container'>
      //                     <div className='video-author'></div>
      //                     <div className='video-views'></div>
      //                     <div className='video-uploaded'></div>
      //                 </div>
      //             </div>
      //         <div className = 'video-row'></div>
      //     </div>
      // </div>
      ;
    }
  }]);

  return VideoIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (VideoIndex);

/***/ }),

/***/ "./frontend/reducers/entities_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/entities_reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users_reducer */ "./frontend/reducers/users_reducer.js");


var entitiesReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  users: _users_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (entitiesReducer);

/***/ }),

/***/ "./frontend/reducers/errors_reducer.js":
/*!*********************************************!*\
  !*** ./frontend/reducers/errors_reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_errors_reducer */ "./frontend/reducers/session_errors_reducer.js");


var errorsReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (errorsReducer);

/***/ }),

/***/ "./frontend/reducers/root_reducer.js":
/*!*******************************************!*\
  !*** ./frontend/reducers/root_reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities_reducer */ "./frontend/reducers/entities_reducer.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_reducer */ "./frontend/reducers/session_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors_reducer */ "./frontend/reducers/errors_reducer.js");




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  entities: _entities_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./frontend/reducers/session_errors_reducer.js":
/*!*****************************************************!*\
  !*** ./frontend/reducers/session_errors_reducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SESSION_ERRORS"]:
      return action.errors;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return [];

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_SESSION_ERRORS"]:
      return [];

    default:
      return state;
  }
});

/***/ }),

/***/ "./frontend/reducers/session_reducer.js":
/*!**********************************************!*\
  !*** ./frontend/reducers/session_reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");


var _nullUser = Object.freeze({
  id: null
});

var sessionReducer = function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullUser;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return {
        id: action.currentUser.id
      };

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CURRENT_USER"]:
      return _nullUser;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sessionReducer);

/***/ }),

/***/ "./frontend/reducers/users_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/users_reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");


var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = Object.assign({}, state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return nextState[action.currentUser.id] = action.currentUser;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (usersReducer);

/***/ }),

/***/ "./frontend/store/store.js":
/*!*********************************!*\
  !*** ./frontend/store/store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/root_reducer */ "./frontend/reducers/root_reducer.js");





var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./frontend/util/route_util.jsx":
/*!**************************************!*\
  !*** ./frontend/util/route_util.jsx ***!
  \**************************************/
/*! exports provided: AuthRoute, ProtectedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedRoute", function() { return ProtectedRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var mSTP = function mSTP(state, ownProps) {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

var Auth = function Auth(_ref) {
  var Component = _ref.component,
      path = _ref.path,
      loggedIn = _ref.loggedIn,
      exact = _ref.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: path,
    exact: exact,
    render: function render(props) {
      return !loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/"
      });
    }
  });
};

var Protected = function Protected(_ref2) {
  var Component = _ref2.component,
      path = _ref2.path,
      loggedIn = _ref2.loggedIn,
      exact = _ref2.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: path,
    exact: exact,
    render: function render(props) {
      return loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/login"
      });
    }
  });
};

var AuthRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP)(Auth));
var ProtectedRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mSTP)(Protected));

/***/ }),

/***/ "./frontend/util/session_api_util.js":
/*!*******************************************!*\
  !*** ./frontend/util/session_api_util.js ***!
  \*******************************************/
/*! exports provided: login, signup, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
var login = function login(user) {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user: user
    }
  });
};
var signup = function signup(user) {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: user
    }
  });
};
var logout = function logout() {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

/***/ }),

/***/ "./frontend/youtube.jsx":
/*!******************************!*\
  !*** ./frontend/youtube.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store */ "./frontend/store/store.js");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/root */ "./frontend/components/root.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import {login, signup, logout } from './util/session_api_util'



document.addEventListener('DOMContentLoaded', function () {
  var store; // debugger

  if (window.currentUser) {
    var _window = window,
        currentUser = _window.currentUser;
    var id = currentUser.id;
    var preloadedState = {
      entities: {
        users: _defineProperty({}, id, currentUser)
      },
      session: {
        id: id
      }
    };
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])(preloadedState);
    delete window.currentUser;
  } else {
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } // debugger


  var root = document.getElementById('root'); // JUST FOR TESTING
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;

  window.getState = store.getState;
  window.dispatch = store.dispatch; // TESTING ENDS

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_root__WEBPACK_IMPORTED_MODULE_3__["default"], {
    store: store
  }), root);
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,u=i(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(u[s]=n[s]);if(r){l=r(n);for(var f=0;f<l.length;f++)a.call(n,l[f])&&(u[l[f]]=n[l[f]])}}return u}},function(e,t,n){(function(e){!function(t){"use strict";function n(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function a(e,t){a.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function l(e,t,n){l.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function u(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function c(e){var t=void 0===e?"undefined":k(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function s(e,t,n,r,f,d,p){p=p||[];var h=(f=f||[]).slice(0);if(void 0!==d){if(r){if("function"==typeof r&&r(h,d))return;if("object"===(void 0===r?"undefined":k(r))){if(r.prefilter&&r.prefilter(h,d))return;if(r.normalize){var m=r.normalize(h,d,e,t);m&&(e=m[0],t=m[1])}}}h.push(d)}"regexp"===c(e)&&"regexp"===c(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":k(e),y=void 0===t?"undefined":k(t),g="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),b="undefined"!==y||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!g&&b)n(new a(h,t));else if(!b&&g)n(new i(h,e));else if(c(e)!==c(t))n(new o(h,e,t));else if("date"===c(e)&&e-t!=0)n(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter((function(t){return t.lhs===e})).length)e!==t&&n(new o(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?n(new l(h,w,new i(void 0,e[w]))):s(e[w],t[w],n,r,h,w,p);for(;w<t.length;)n(new l(h,w,new a(void 0,t[w++])))}else{var E=Object.keys(e),S=Object.keys(t);E.forEach((function(o,a){var i=S.indexOf(o);i>=0?(s(e[o],t[o],n,r,h,o,p),S=u(S,i)):s(e[o],void 0,n,r,h,o,p)})),S.forEach((function(e){s(void 0,t[e],n,r,h,e,p)}))}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||n(new o(h,e,t)))}function f(e,t,n,r){return r=r||[],s(e,t,(function(e){e&&r.push(e)}),n),r.length?r:void 0}function d(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,a=n.path?n.path.length-1:0;++o<a;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var o,a=t[n],i=r.path.length-1;for(o=0;o<i;o++)a=a[r.path[o]];switch(r.kind){case"A":e(a[r.path[o]],r.index,r.item);break;case"D":delete a[r.path[o]];break;case"E":case"N":a[r.path[o]]=r.rhs}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":t=u(t,n);break;case"E":case"N":t[n]=r.rhs}return t}(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function p(e){return"color: "+C[e].color+"; font-weight: bold"}function h(e,t,n,r){var o=f(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}o?o.forEach((function(e){var t=e.kind,r=function(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,a=e.index,i=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+a+"]",i];default:return[]}}(e);n.log.apply(n,["%c "+C[t].text,p(t)].concat(x(r)))})):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}function m(e,t,n,r){switch(void 0===e?"undefined":k(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,x(n)):e[r];case"function":return e(t);default:return e}}function v(e,t){var n=t.logger,r=t.actionTransformer,o=t.titleFormatter,a=void 0===o?function(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var a=["action"];return a.push("%c"+String(e.type)),t&&a.push("%c@ "+r),n&&a.push("%c(in "+o.toFixed(2)+" ms)"),a.join(" ")}}(t):o,i=t.collapsed,l=t.colors,u=t.level,c=t.diff,s=void 0===t.titleFormatter;e.forEach((function(o,f){var d=o.started,p=o.startedTime,v=o.action,y=o.prevState,g=o.error,b=o.took,w=o.nextState,S=e[f+1];S&&(w=S.prevState,b=S.started-d);var k=r(v),x="function"==typeof i?i((function(){return w}),v,o):i,O=E(p),C=l.title?"color: "+l.title(k)+";":"",P=["color: gray; font-weight: lighter;"];P.push(C),t.timestamp&&P.push("color: gray; font-weight: lighter;"),t.duration&&P.push("color: gray; font-weight: lighter;");var _=a(k,O,b);try{x?l.title&&s?n.groupCollapsed.apply(n,["%c "+_].concat(P)):n.groupCollapsed(_):l.title&&s?n.group.apply(n,["%c "+_].concat(P)):n.group(_)}catch(e){n.log(_)}var N=m(u,k,[y],"prevState"),T=m(u,k,[k],"action"),R=m(u,k,[g,y],"error"),j=m(u,k,[w],"nextState");if(N)if(l.prevState){var L="color: "+l.prevState(y)+"; font-weight: bold";n[N]("%c prev state",L,y)}else n[N]("prev state",y);if(T)if(l.action){var M="color: "+l.action(k)+"; font-weight: bold";n[T]("%c action    ",M,k)}else n[T]("action    ",k);if(g&&R)if(l.error){var D="color: "+l.error(g,y)+"; font-weight: bold;";n[R]("%c error     ",D,g)}else n[R]("error     ",g);if(j)if(l.nextState){var z="color: "+l.nextState(w)+"; font-weight: bold";n[j]("%c next state",z,w)}else n[j]("next state",w);c&&h(y,w,n,x);try{n.groupEnd()}catch(e){n.log("—— log end ——")}}))}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},P,e),n=t.logger,r=t.stateTransformer,o=t.errorTransformer,a=t.predicate,i=t.logErrors,l=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var n=e.getState;return function(e){return function(c){if("function"==typeof a&&!a(n,c))return e(c);var s={};u.push(s),s.started=S.now(),s.startedTime=new Date,s.prevState=r(n()),s.action=c;var f=void 0;if(i)try{f=e(c)}catch(e){s.error=o(e)}else f=e(c);s.took=S.now()-s.started,s.nextState=r(n());var d=t.diff&&"function"==typeof l?l(n,c):t.diff;if(v(u,Object.assign({},t,{diff:d})),u.length=0,s.error)throw s.error;return f}}}}var g,b,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},E=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},S="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},O=[];g="object"===(void 0===e?"undefined":k(e))&&e?e:"undefined"!=typeof window?window:{},(b=g.DeepDiff)&&O.push((function(){void 0!==b&&g.DeepDiff===f&&(g.DeepDiff=b,b=void 0)})),n(o,r),n(a,r),n(i,r),n(l,r),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:s,enumerable:!0},applyDiff:{value:function(e,t,n){e&&t&&s(e,t,(function(r){n&&!n(e,t,r)||d(e,t,r)}))},enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:function(e,t,n){if(e&&t&&n&&n.kind){var r,o,a=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===a[n.path[r]]&&(a[n.path[r]]={}),a=a[n.path[r]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var o,a=t[n],i=r.path.length-1;for(o=0;o<i;o++)a=a[r.path[o]];switch(r.kind){case"A":e(a[r.path[o]],r.index,r.item);break;case"D":case"E":a[r.path[o]]=r.lhs;break;case"N":delete a[r.path[o]]}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":case"E":t[n]=r.lhs;break;case"N":t=u(t,n)}return t}(a[n.path[r]],n.index,n.item);break;case"D":case"E":a[n.path[r]]=n.lhs;break;case"N":delete a[n.path[r]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return O&&(O.forEach((function(e){e()})),O=null),f},enumerable:!0}});var C={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},P={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?y()({dispatch:t,getState:n}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=P,t.createLogger=y,t.logger=_,t.default=_,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,n(7))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(11),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,l=60110,u=60112;t.Suspense=60113;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),l=f("react.context"),u=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),s=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=g.prototype=new y;b.constructor=g,r(b,v.prototype),b.isPureReactComponent=!0;var w={current:null},E=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===r?"."+C(u,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),P(i,t,n,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=r+C(l=e[c],c);u+=P(l,t,n,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),c=0;!(l=e.next()).done;)u+=P(l=l.value,t,n,s=r+C(l,c++),i);else if("object"===l)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function _(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function R(){var e=T.current;if(null===e)throw Error(p(321));return e}var j={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:_,forEach:function(e,t,n){_(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return _(e,(function(){t++})),t},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},t.Component=v,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var a=r({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)E.call(t,s)&&!S.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},function(e,t,n){"use strict";
/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),o=n(11),a=n(16);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(i(227));var l=new Set,u={};function c(e,t){s(e,t),s(e+"Capture",t)}function s(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p=Object.prototype.hasOwnProperty,h={},m={};function v(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){y[e]=new v(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){y[e]=new v(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){y[e]=new v(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){y[e]=new v(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){y[e]=new v(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)}));var g=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function w(e,t,n,r){var o=y.hasOwnProperty(t)?y[t]:null;(null!==o?0===o.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!p.call(m,e)||!p.call(h,e)&&(d.test(e)?m[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(g,b);y[t]=new v(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(g,b);y[t]=new v(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(g,b);y[t]=new v(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)})),y.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)}));var E=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,S=60103,k=60106,x=60107,O=60108,C=60114,P=60109,_=60110,N=60112,T=60113,R=60120,j=60115,L=60116,M=60121,D=60128,z=60129,I=60130,A=60131;if("function"==typeof Symbol&&Symbol.for){var U=Symbol.for;S=U("react.element"),k=U("react.portal"),x=U("react.fragment"),O=U("react.strict_mode"),C=U("react.profiler"),P=U("react.provider"),_=U("react.context"),N=U("react.forward_ref"),T=U("react.suspense"),R=U("react.suspense_list"),j=U("react.memo"),L=U("react.lazy"),M=U("react.block"),U("react.scope"),D=U("react.opaque.id"),z=U("react.debug_trace_mode"),I=U("react.offscreen"),A=U("react.legacy_hidden")}var F,$="function"==typeof Symbol&&Symbol.iterator;function B(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=$&&e[$]||e["@@iterator"])?e:null}function V(e){if(void 0===F)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||""}return"\n"+F+e}var W=!1;function H(e,t){if(!e||W)return"";W=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&"string"==typeof e.stack){for(var o=e.stack.split("\n"),a=r.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l])return"\n"+o[i].replace(" at new "," at ")}while(1<=i&&0<=l);break}}}finally{W=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?V(e):""}function Q(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1);case 11:return e=H(e.type.render,!1);case 22:return e=H(e.type._render,!1);case 1:return e=H(e.type,!0);default:return""}}function q(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case x:return"Fragment";case k:return"Portal";case C:return"Profiler";case O:return"StrictMode";case T:return"Suspense";case R:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case N:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case j:return q(e.type);case M:return q(e._render);case L:t=e._payload,e=e._init;try{return q(e(t))}catch(e){}}return null}function K(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Y(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=Y(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Y(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function J(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e,t){var n=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ee(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=K(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function te(e,t){null!=(t=t.checked)&&w(e,"checked",t,!1)}function ne(e,t){te(e,t);var n=K(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?oe(e,t.type,n):t.hasOwnProperty("defaultValue")&&oe(e,t.type,K(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function re(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function oe(e,t,n){"number"===t&&J(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function ae(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function ie(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+K(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function le(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ue(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:K(n)}}function ce(e,t){var n=K(t.value),r=K(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var fe="http://www.w3.org/1999/xhtml",de="http://www.w3.org/2000/svg";function pe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?pe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var me,ve=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==de||"innerHTML"in e)e.innerHTML=t;else{for((me=me||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function ye(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ge={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];function we(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ge.hasOwnProperty(e)&&ge[e]?(""+t).trim():t+"px"}function Ee(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=we(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(ge).forEach((function(e){be.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ge[t]=ge[e]}))}));var Se=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(e,t){if(t){if(Se[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(i(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Oe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ce=null,Pe=null,_e=null;function Ne(e){if(e=Jr(e)){if("function"!=typeof Ce)throw Error(i(280));var t=e.stateNode;t&&(t=eo(t),Ce(e.stateNode,e.type,t))}}function Te(e){Pe?_e?_e.push(e):_e=[e]:Pe=e}function Re(){if(Pe){var e=Pe,t=_e;if(_e=Pe=null,Ne(e),t)for(e=0;e<t.length;e++)Ne(t[e])}}function je(e,t){return e(t)}function Le(e,t,n,r,o){return e(t,n,r,o)}function Me(){}var De=je,ze=!1,Ie=!1;function Ae(){null===Pe&&null===_e||(Me(),Re())}function Ue(e,t){var n=e.stateNode;if(null===n)return null;var r=eo(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(i(231,t,typeof n));return n}var Fe=!1;if(f)try{var $e={};Object.defineProperty($e,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",$e,$e),window.removeEventListener("test",$e,$e)}catch(e){Fe=!1}function Be(e,t,n,r,o,a,i,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var Ve=!1,We=null,He=!1,Qe=null,qe={onError:function(e){Ve=!0,We=e}};function Ke(e,t,n,r,o,a,i,l,u){Ve=!1,We=null,Be.apply(qe,arguments)}function Ye(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ge(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Xe(e){if(Ye(e)!==e)throw Error(i(188))}function Je(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ye(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Xe(o),e;if(a===r)return Xe(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=a;break}if(u===r){l=!0,r=o,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=o;break}if(u===r){l=!0,r=a,n=o;break}u=u.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Ze(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var et,tt,nt,rt,ot=!1,at=[],it=null,lt=null,ut=null,ct=new Map,st=new Map,ft=[],dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pt(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:o,targetContainers:[r]}}function ht(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":ct.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":st.delete(t.pointerId)}}function mt(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e=pt(t,n,r,o,a),null!==t&&(null!==(t=Jr(t))&&tt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function vt(e){var t=Xr(e.target);if(null!==t){var n=Ye(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ge(n)))return e.blockedOn=t,void rt(e.lanePriority,(function(){a.unstable_runWithPriority(e.priority,(function(){nt(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Jr(n))&&tt(t),e.blockedOn=n,!1;t.shift()}return!0}function gt(e,t,n){yt(e)&&n.delete(t)}function bt(){for(ot=!1;0<at.length;){var e=at[0];if(null!==e.blockedOn){null!==(e=Jr(e.blockedOn))&&et(e);break}for(var t=e.targetContainers;0<t.length;){var n=Jt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&at.shift()}null!==it&&yt(it)&&(it=null),null!==lt&&yt(lt)&&(lt=null),null!==ut&&yt(ut)&&(ut=null),ct.forEach(gt),st.forEach(gt)}function wt(e,t){e.blockedOn===t&&(e.blockedOn=null,ot||(ot=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,bt)))}function Et(e){function t(t){return wt(t,e)}if(0<at.length){wt(at[0],e);for(var n=1;n<at.length;n++){var r=at[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==it&&wt(it,e),null!==lt&&wt(lt,e),null!==ut&&wt(ut,e),ct.forEach(t),st.forEach(t),n=0;n<ft.length;n++)(r=ft[n]).blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&null===(n=ft[0]).blockedOn;)vt(n),null===n.blockedOn&&ft.shift()}function St(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kt={animationend:St("Animation","AnimationEnd"),animationiteration:St("Animation","AnimationIteration"),animationstart:St("Animation","AnimationStart"),transitionend:St("Transition","TransitionEnd")},xt={},Ot={};function Ct(e){if(xt[e])return xt[e];if(!kt[e])return e;var t,n=kt[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ot)return xt[e]=n[t];return e}f&&(Ot=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);var Pt=Ct("animationend"),_t=Ct("animationiteration"),Nt=Ct("animationstart"),Tt=Ct("transitionend"),Rt=new Map,jt=new Map,Lt=["abort","abort",Pt,"animationEnd",_t,"animationIteration",Nt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Tt,"transitionEnd","waiting","waiting"];function Mt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];o="on"+(o[0].toUpperCase()+o.slice(1)),jt.set(r,t),Rt.set(r,o),c(o,[r])}}(0,a.unstable_now)();var Dt=8;function zt(e){if(0!=(1&e))return Dt=15,1;if(0!=(2&e))return Dt=14,2;if(0!=(4&e))return Dt=13,4;var t=24&e;return 0!==t?(Dt=12,t):0!=(32&e)?(Dt=11,32):0!==(t=192&e)?(Dt=10,t):0!=(256&e)?(Dt=9,256):0!==(t=3584&e)?(Dt=8,t):0!=(4096&e)?(Dt=7,4096):0!==(t=4186112&e)?(Dt=6,t):0!==(t=62914560&e)?(Dt=5,t):67108864&e?(Dt=4,67108864):0!=(134217728&e)?(Dt=3,134217728):0!==(t=805306368&e)?(Dt=2,t):0!=(1073741824&e)?(Dt=1,1073741824):(Dt=8,e)}function It(e,t){var n=e.pendingLanes;if(0===n)return Dt=0;var r=0,o=0,a=e.expiredLanes,i=e.suspendedLanes,l=e.pingedLanes;if(0!==a)r=a,o=Dt=15;else if(0!==(a=134217727&n)){var u=a&~i;0!==u?(r=zt(u),o=Dt):0!==(l&=a)&&(r=zt(l),o=Dt)}else 0!==(a=n&~i)?(r=zt(a),o=Dt):0!==l&&(r=zt(l),o=Dt);if(0===r)return 0;if(r=n&((0>(r=31-Vt(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0==(t&i)){if(zt(t),o<=Dt)return t;Dt=o}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-Vt(t)),r|=e[n],t&=~o;return r}function At(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Ut(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Ft(24&~t))?Ut(10,t):e;case 10:return 0===(e=Ft(192&~t))?Ut(8,t):e;case 8:return 0===(e=Ft(3584&~t))&&(0===(e=Ft(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Ft(805306368&~t))&&(t=268435456),t}throw Error(i(358,e))}function Ft(e){return e&-e}function $t(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bt(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-Vt(t)]=n}var Vt=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Wt(e)/Ht|0)|0},Wt=Math.log,Ht=Math.LN2;var Qt=a.unstable_UserBlockingPriority,qt=a.unstable_runWithPriority,Kt=!0;function Yt(e,t,n,r){ze||Me();var o=Xt,a=ze;ze=!0;try{Le(o,e,t,n,r)}finally{(ze=a)||Ae()}}function Gt(e,t,n,r){qt(Qt,Xt.bind(null,e,t,n,r))}function Xt(e,t,n,r){var o;if(Kt)if((o=0==(4&t))&&0<at.length&&-1<dt.indexOf(e))e=pt(null,e,t,n,r),at.push(e);else{var a=Jt(e,t,n,r);if(null===a)o&&ht(e,r);else{if(o){if(-1<dt.indexOf(e))return e=pt(a,e,t,n,r),void at.push(e);if(function(e,t,n,r,o){switch(t){case"focusin":return it=mt(it,e,t,n,r,o),!0;case"dragenter":return lt=mt(lt,e,t,n,r,o),!0;case"mouseover":return ut=mt(ut,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return ct.set(a,mt(ct.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,st.set(a,mt(st.get(a)||null,e,t,n,r,o)),!0}return!1}(a,e,t,n,r))return;ht(e,r)}Tr(e,t,r,null,n)}}}function Jt(e,t,n,r){var o=Oe(r);if(null!==(o=Xr(o))){var a=Ye(o);if(null===a)o=null;else{var i=a.tag;if(13===i){if(null!==(o=Ge(a)))return o;o=null}else if(3===i){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;o=null}else a!==o&&(o=null)}}return Tr(e,t,r,o,n),null}var Zt=null,en=null,tn=null;function nn(){if(tn)return tn;var e,t,n=en,r=n.length,o="value"in Zt?Zt.value:Zt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return tn=o.slice(e,1<t?1-t:void 0)}function rn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function on(){return!0}function an(){return!1}function ln(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?on:an,this.isPropagationStopped=an,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=on)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=on)},persist:function(){},isPersistent:on}),t}var un,cn,sn,fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=ln(fn),pn=o({},fn,{view:0,detail:0}),hn=ln(pn),mn=o({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(un=e.screenX-sn.screenX,cn=e.screenY-sn.screenY):cn=un=0,sn=e),un)},movementY:function(e){return"movementY"in e?e.movementY:cn}}),vn=ln(mn),yn=ln(o({},mn,{dataTransfer:0})),gn=ln(o({},pn,{relatedTarget:0})),bn=ln(o({},fn,{animationName:0,elapsedTime:0,pseudoElement:0})),wn=ln(o({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),En=ln(o({},fn,{data:0})),Sn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function On(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=xn[e])&&!!t[e]}function Cn(){return On}var Pn=ln(o({},pn,{key:function(e){if(e.key){var t=Sn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=rn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?rn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?rn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),_n=ln(o({},mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nn=ln(o({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Tn=ln(o({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=ln(o({},mn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),jn=[9,13,27,32],Ln=f&&"CompositionEvent"in window,Mn=null;f&&"documentMode"in document&&(Mn=document.documentMode);var Dn=f&&"TextEvent"in window&&!Mn,zn=f&&(!Ln||Mn&&8<Mn&&11>=Mn),In=String.fromCharCode(32),An=!1;function Un(e,t){switch(e){case"keyup":return-1!==jn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var $n=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Wn(e,t,n,r){Te(r),0<(t=jr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,Qn=null;function qn(e){xr(e,0)}function Kn(e){if(X(Zr(e)))return e}function Yn(e,t){if("change"===e)return t}var Gn=!1;if(f){var Xn;if(f){var Jn="oninput"in document;if(!Jn){var Zn=document.createElement("div");Zn.setAttribute("oninput","return;"),Jn="function"==typeof Zn.oninput}Xn=Jn}else Xn=!1;Gn=Xn&&(!document.documentMode||9<document.documentMode)}function er(){Hn&&(Hn.detachEvent("onpropertychange",tr),Qn=Hn=null)}function tr(e){if("value"===e.propertyName&&Kn(Qn)){var t=[];if(Wn(t,Qn,e,Oe(e)),e=qn,ze)e(t);else{ze=!0;try{je(e,t)}finally{ze=!1,Ae()}}}}function nr(e,t,n){"focusin"===e?(er(),Qn=n,(Hn=t).attachEvent("onpropertychange",tr)):"focusout"===e&&er()}function rr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Qn)}function or(e,t){if("click"===e)return Kn(t)}function ar(e,t){if("input"===e||"change"===e)return Kn(t)}var ir="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},lr=Object.prototype.hasOwnProperty;function ur(e,t){if(ir(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!lr.call(t,n[r])||!ir(e[n[r]],t[n[r]]))return!1;return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function fr(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=J((e=t.contentWindow).document)}return t}function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var pr=f&&"documentMode"in document&&11>=document.documentMode,hr=null,mr=null,vr=null,yr=!1;function gr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==hr||hr!==J(r)||("selectionStart"in(r=hr)&&dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&ur(vr,r)||(vr=r,0<(r=jr(mr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}Mt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Mt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Mt(Lt,2);for(var br="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),wr=0;wr<br.length;wr++)jt.set(br[wr],0);s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function kr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,l,u,c){if(Ke.apply(this,arguments),Ve){if(!Ve)throw Error(i(198));var s=We;Ve=!1,We=null,He||(He=!0,Qe=s)}}(r,t,void 0,e),e.currentTarget=null}function xr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==a&&o.isPropagationStopped())break e;kr(o,l,c),a=u}else for(i=0;i<r.length;i++){if(u=(l=r[i]).instance,c=l.currentTarget,l=l.listener,u!==a&&o.isPropagationStopped())break e;kr(o,l,c),a=u}}}if(He)throw e=Qe,He=!1,Qe=null,e}function Or(e,t){var n=to(t),r=e+"__bubble";n.has(r)||(Nr(t,e,2,!1),n.add(r))}var Cr="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){e[Cr]||(e[Cr]=!0,l.forEach((function(t){Sr.has(t)||_r(t,!1,e,null),_r(t,!0,e,null)})))}function _r(e,t,n,r){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=n;if("selectionchange"===e&&9!==n.nodeType&&(a=n.ownerDocument),null!==r&&!t&&Sr.has(e)){if("scroll"!==e)return;o|=2,a=r}var i=to(a),l=e+"__"+(t?"capture":"bubble");i.has(l)||(t&&(o|=4),Nr(a,e,o,t),i.add(l))}function Nr(e,t,n,r){var o=jt.get(t);switch(void 0===o?2:o){case 0:o=Yt;break;case 1:o=Gt;break;default:o=Xt}n=o.bind(null,t,n,e),o=void 0,!Fe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Tr(e,t,n,r,o){var a=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=r.return;null!==i;){var u=i.tag;if((3===u||4===u)&&((u=i.stateNode.containerInfo)===o||8===u.nodeType&&u.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=Xr(l)))return;if(5===(u=i.tag)||6===u){r=a=i;continue e}l=l.parentNode}}r=r.return}!function(e,t,n){if(Ie)return e(t,n);Ie=!0;try{De(e,t,n)}finally{Ie=!1,Ae()}}((function(){var r=a,o=Oe(n),i=[];e:{var l=Rt.get(e);if(void 0!==l){var u=dn,c=e;switch(e){case"keypress":if(0===rn(n))break e;case"keydown":case"keyup":u=Pn;break;case"focusin":c="focus",u=gn;break;case"focusout":c="blur",u=gn;break;case"beforeblur":case"afterblur":u=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=vn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=yn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=Nn;break;case Pt:case _t:case Nt:u=bn;break;case Tt:u=Tn;break;case"scroll":u=hn;break;case"wheel":u=Rn;break;case"copy":case"cut":case"paste":u=wn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=_n}var s=0!=(4&t),f=!s&&"scroll"===e,d=s?null!==l?l+"Capture":null:l;s=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==d&&(null!=(m=Ue(h,d))&&s.push(Rr(h,m,p)))),f)break;h=h.return}0<s.length&&(l=new u(l,c,null,n,o),i.push({event:l,listeners:s}))}}if(0==(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||0!=(16&t)||!(c=n.relatedTarget||n.fromElement)||!Xr(c)&&!c[Yr])&&(u||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?Xr(c):null)&&(c!==(f=Ye(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(u=null,c=r),u!==c)){if(s=vn,m="onMouseLeave",d="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(s=_n,m="onPointerLeave",d="onPointerEnter",h="pointer"),f=null==u?l:Zr(u),p=null==c?l:Zr(c),(l=new s(m,h+"leave",u,n,o)).target=f,l.relatedTarget=p,m=null,Xr(o)===r&&((s=new s(d,h+"enter",c,n,o)).target=p,s.relatedTarget=f,m=s),f=m,u&&c)e:{for(d=c,h=0,p=s=u;p;p=Lr(p))h++;for(p=0,m=d;m;m=Lr(m))p++;for(;0<h-p;)s=Lr(s),h--;for(;0<p-h;)d=Lr(d),p--;for(;h--;){if(s===d||null!==d&&s===d.alternate)break e;s=Lr(s),d=Lr(d)}s=null}else s=null;null!==u&&Mr(i,l,u,s,!1),null!==c&&null!==f&&Mr(i,f,c,s,!0)}if("select"===(u=(l=r?Zr(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var v=Yn;else if(Vn(l))if(Gn)v=ar;else{v=rr;var y=nr}else(u=l.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(v=or);switch(v&&(v=v(e,r))?Wn(i,v,n,o):(y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&oe(l,"number",l.value)),y=r?Zr(r):window,e){case"focusin":(Vn(y)||"true"===y.contentEditable)&&(hr=y,mr=r,vr=null);break;case"focusout":vr=mr=hr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,gr(i,n,o);break;case"selectionchange":if(pr)break;case"keydown":case"keyup":gr(i,n,o)}var g;if(Ln)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else $n?Un(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(zn&&"ko"!==n.locale&&($n||"onCompositionStart"!==b?"onCompositionEnd"===b&&$n&&(g=nn()):(en="value"in(Zt=o)?Zt.value:Zt.textContent,$n=!0)),0<(y=jr(r,b)).length&&(b=new En(b,e,null,n,o),i.push({event:b,listeners:y}),g?b.data=g:null!==(g=Fn(n))&&(b.data=g))),(g=Dn?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(An=!0,In);case"textInput":return(e=t.data)===In&&An?null:e;default:return null}}(e,n):function(e,t){if($n)return"compositionend"===e||!Ln&&Un(e,t)?(e=nn(),tn=en=Zt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zn&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))&&(0<(r=jr(r,"onBeforeInput")).length&&(o=new En("onBeforeInput","beforeinput",null,n,o),i.push({event:o,listeners:r}),o.data=g))}xr(i,t)}))}function Rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ue(e,n))&&r.unshift(Rr(e,a,o)),null!=(a=Ue(e,t))&&r.push(Rr(e,a,o))),e=e.return}return r}function Lr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Mr(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(null!==u&&u===r)break;5===l.tag&&null!==c&&(l=c,o?null!=(u=Ue(n,a))&&i.unshift(Rr(n,u,l)):o||null!=(u=Ue(n,a))&&i.push(Rr(n,u,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}function Dr(){}var zr=null,Ir=null;function Ar(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Ur(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Fr="function"==typeof setTimeout?setTimeout:void 0,$r="function"==typeof clearTimeout?clearTimeout:void 0;function Br(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Vr(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Wr(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Hr=0;var Qr=Math.random().toString(36).slice(2),qr="__reactFiber$"+Qr,Kr="__reactProps$"+Qr,Yr="__reactContainer$"+Qr,Gr="__reactEvents$"+Qr;function Xr(e){var t=e[qr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yr]||n[qr]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Wr(e);null!==e;){if(n=e[qr])return n;e=Wr(e)}return t}n=(e=n).parentNode}return null}function Jr(e){return!(e=e[qr]||e[Yr])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Zr(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function eo(e){return e[Kr]||null}function to(e){var t=e[Gr];return void 0===t&&(t=e[Gr]=new Set),t}var no=[],ro=-1;function oo(e){return{current:e}}function ao(e){0>ro||(e.current=no[ro],no[ro]=null,ro--)}function io(e,t){ro++,no[ro]=e.current,e.current=t}var lo={},uo=oo(lo),co=oo(!1),so=lo;function fo(e,t){var n=e.type.contextTypes;if(!n)return lo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function po(e){return null!=(e=e.childContextTypes)}function ho(){ao(co),ao(uo)}function mo(e,t,n){if(uo.current!==lo)throw Error(i(168));io(uo,t),io(co,n)}function vo(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in e))throw Error(i(108,q(t)||"Unknown",a));return o({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||lo,so=uo.current,io(uo,e),io(co,co.current),!0}function go(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=vo(e,t,so),r.__reactInternalMemoizedMergedChildContext=e,ao(co),ao(uo),io(uo,e)):ao(co),io(co,n)}var bo=null,wo=null,Eo=a.unstable_runWithPriority,So=a.unstable_scheduleCallback,ko=a.unstable_cancelCallback,xo=a.unstable_shouldYield,Oo=a.unstable_requestPaint,Co=a.unstable_now,Po=a.unstable_getCurrentPriorityLevel,_o=a.unstable_ImmediatePriority,No=a.unstable_UserBlockingPriority,To=a.unstable_NormalPriority,Ro=a.unstable_LowPriority,jo=a.unstable_IdlePriority,Lo={},Mo=void 0!==Oo?Oo:function(){},Do=null,zo=null,Io=!1,Ao=Co(),Uo=1e4>Ao?Co:function(){return Co()-Ao};function Fo(){switch(Po()){case _o:return 99;case No:return 98;case To:return 97;case Ro:return 96;case jo:return 95;default:throw Error(i(332))}}function $o(e){switch(e){case 99:return _o;case 98:return No;case 97:return To;case 96:return Ro;case 95:return jo;default:throw Error(i(332))}}function Bo(e,t){return e=$o(e),Eo(e,t)}function Vo(e,t,n){return e=$o(e),So(e,t,n)}function Wo(){if(null!==zo){var e=zo;zo=null,ko(e)}Ho()}function Ho(){if(!Io&&null!==Do){Io=!0;var e=0;try{var t=Do;Bo(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Do=null}catch(t){throw null!==Do&&(Do=Do.slice(e+1)),So(_o,Wo),t}finally{Io=!1}}}var Qo=E.ReactCurrentBatchConfig;function qo(e,t){if(e&&e.defaultProps){for(var n in t=o({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Ko=oo(null),Yo=null,Go=null,Xo=null;function Jo(){Xo=Go=Yo=null}function Zo(e){var t=Ko.current;ao(Ko),e.type._context._currentValue=t}function ea(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function ta(e,t){Yo=e,Xo=Go=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ji=!0),e.firstContext=null)}function na(e,t){if(Xo!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Xo=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Go){if(null===Yo)throw Error(i(308));Go=t,Yo.dependencies={lanes:0,firstContext:t,responders:null}}else Go=Go.next=t;return e._currentValue}var ra=!1;function oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function aa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ia(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function la(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ua(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var a=e.updateQueue;ra=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,u=a.shared.pending;if(null!==u){a.shared.pending=null;var c=u,s=c.next;c.next=null,null===l?i=s:l.next=s,l=c;var f=e.alternate;if(null!==f){var d=(f=f.updateQueue).lastBaseUpdate;d!==l&&(null===d?f.firstBaseUpdate=s:d.next=s,f.lastBaseUpdate=c)}}if(null!==i){for(d=a.baseState,l=0,f=s=c=null;;){u=i.lane;var p=i.eventTime;if((r&u)===u){null!==f&&(f=f.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var h=e,m=i;switch(u=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,u);break e}d=h;break e;case 3:h.flags=-4097&h.flags|64;case 0:if(null==(u="function"==typeof(h=m.payload)?h.call(p,d,u):h))break e;d=o({},d,u);break e;case 2:ra=!0}}null!==i.callback&&(e.flags|=32,null===(u=a.effects)?a.effects=[i]:u.push(i))}else p={eventTime:p,lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===f?(s=f=p,c=d):f=f.next=p,l|=u;if(null===(i=i.next)){if(null===(u=a.shared.pending))break;i=u.next,u.next=null,a.lastBaseUpdate=u,a.shared.pending=null}}null===f&&(c=d),a.baseState=c,a.firstBaseUpdate=s,a.lastBaseUpdate=f,Ml|=l,e.lanes=l,e.memoizedState=d}}function sa(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!=typeof o)throw Error(i(191,o));o.call(r)}}}var fa=(new r.Component).refs;function da(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:o({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var pa={isMounted:function(e){return!!(e=e._reactInternals)&&Ye(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=au(),o=iu(e),a=ia(r,o);a.payload=t,null!=n&&(a.callback=n),la(e,a),lu(e,o,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=au(),o=iu(e),a=ia(r,o);a.tag=1,a.payload=t,null!=n&&(a.callback=n),la(e,a),lu(e,o,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=au(),r=iu(e),o=ia(n,r);o.tag=2,null!=t&&(o.callback=t),la(e,o),lu(e,r,n)}};function ha(e,t,n,r,o,a,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!ur(n,r)||!ur(o,a))}function ma(e,t,n){var r=!1,o=lo,a=t.contextType;return"object"==typeof a&&null!==a?a=na(a):(o=po(t)?so:uo.current,a=(r=null!=(r=t.contextTypes))?fo(e,o):lo),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=pa,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function va(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pa.enqueueReplaceState(t,t.state,null)}function ya(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=fa,oa(e);var a=t.contextType;"object"==typeof a&&null!==a?o.context=na(a):(a=po(t)?so:uo.current,o.context=fo(e,a)),ca(e,n,o,r),o.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(da(e,t,a,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&pa.enqueueReplaceState(o,o.state,null),ca(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4)}var ga=Array.isArray;function ba(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=r.refs;t===fa&&(t=r.refs={}),null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function wa(e,t){if("textarea"!==e.type)throw Error(i(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Ea(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Uu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function l(t){return e&&null===t.alternate&&(t.flags=2),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=Vu(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){return null!==t&&t.elementType===n.type?((r=o(t,n.props)).ref=ba(e,t,n),r.return=e,r):((r=Fu(n.type,n.key,n.props,null,e.mode,r)).ref=ba(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Wu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function f(e,t,n,r,a){return null===t||7!==t.tag?((t=$u(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Vu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case S:return(n=Fu(t.type,t.key,t.props,null,e.mode,n)).ref=ba(e,null,t),n.return=e,n;case k:return(t=Wu(t,e.mode,n)).return=e,t}if(ga(t)||B(t))return(t=$u(t,e.mode,n,null)).return=e,t;wa(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==o?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case S:return n.key===o?n.type===x?f(e,t,n.props.children,r,o):c(e,t,n,r):null;case k:return n.key===o?s(e,t,n,r):null}if(ga(n)||B(n))return null!==o?null:f(e,t,n,r,null);wa(e,n)}return null}function h(e,t,n,r,o){if("string"==typeof r||"number"==typeof r)return u(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case S:return e=e.get(null===r.key?n:r.key)||null,r.type===x?f(t,e,r.props.children,o,r.key):c(t,e,r,o);case k:return s(t,e=e.get(null===r.key?n:r.key)||null,r,o)}if(ga(r)||B(r))return f(t,e=e.get(n)||null,r,o,null);wa(t,r)}return null}function m(o,i,l,u){for(var c=null,s=null,f=i,m=i=0,v=null;null!==f&&m<l.length;m++){f.index>m?(v=f,f=null):v=f.sibling;var y=p(o,f,l[m],u);if(null===y){null===f&&(f=v);break}e&&f&&null===y.alternate&&t(o,f),i=a(y,i,m),null===s?c=y:s.sibling=y,s=y,f=v}if(m===l.length)return n(o,f),c;if(null===f){for(;m<l.length;m++)null!==(f=d(o,l[m],u))&&(i=a(f,i,m),null===s?c=f:s.sibling=f,s=f);return c}for(f=r(o,f);m<l.length;m++)null!==(v=h(f,o,m,l[m],u))&&(e&&null!==v.alternate&&f.delete(null===v.key?m:v.key),i=a(v,i,m),null===s?c=v:s.sibling=v,s=v);return e&&f.forEach((function(e){return t(o,e)})),c}function v(o,l,u,c){var s=B(u);if("function"!=typeof s)throw Error(i(150));if(null==(u=s.call(u)))throw Error(i(151));for(var f=s=null,m=l,v=l=0,y=null,g=u.next();null!==m&&!g.done;v++,g=u.next()){m.index>v?(y=m,m=null):y=m.sibling;var b=p(o,m,g.value,c);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(o,m),l=a(b,l,v),null===f?s=b:f.sibling=b,f=b,m=y}if(g.done)return n(o,m),s;if(null===m){for(;!g.done;v++,g=u.next())null!==(g=d(o,g.value,c))&&(l=a(g,l,v),null===f?s=g:f.sibling=g,f=g);return s}for(m=r(o,m);!g.done;v++,g=u.next())null!==(g=h(m,o,v,g.value,c))&&(e&&null!==g.alternate&&m.delete(null===g.key?v:g.key),l=a(g,l,v),null===f?s=g:f.sibling=g,f=g);return e&&m.forEach((function(e){return t(o,e)})),s}return function(e,r,a,u){var c="object"==typeof a&&null!==a&&a.type===x&&null===a.key;c&&(a=a.props.children);var s="object"==typeof a&&null!==a;if(s)switch(a.$$typeof){case S:e:{for(s=a.key,c=r;null!==c;){if(c.key===s){switch(c.tag){case 7:if(a.type===x){n(e,c.sibling),(r=o(c,a.props.children)).return=e,e=r;break e}break;default:if(c.elementType===a.type){n(e,c.sibling),(r=o(c,a.props)).ref=ba(e,c,a),r.return=e,e=r;break e}}n(e,c);break}t(e,c),c=c.sibling}a.type===x?((r=$u(a.props.children,e.mode,u,a.key)).return=e,e=r):((u=Fu(a.type,a.key,a.props,null,e.mode,u)).ref=ba(e,r,a),u.return=e,e=u)}return l(e);case k:e:{for(c=a.key;null!==r;){if(r.key===c){if(4===r.tag&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),(r=o(r,a.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Wu(a,e.mode,u)).return=e,e=r}return l(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==r&&6===r.tag?(n(e,r.sibling),(r=o(r,a)).return=e,e=r):(n(e,r),(r=Vu(a,e.mode,u)).return=e,e=r),l(e);if(ga(a))return m(e,r,a,u);if(B(a))return v(e,r,a,u);if(s&&wa(e,a),void 0===a&&!c)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(i(152,q(e.type)||"Component"))}return n(e,r)}}var Sa=Ea(!0),ka=Ea(!1),xa={},Oa=oo(xa),Ca=oo(xa),Pa=oo(xa);function _a(e){if(e===xa)throw Error(i(174));return e}function Na(e,t){switch(io(Pa,t),io(Ca,e),io(Oa,xa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:he(null,"");break;default:t=he(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ao(Oa),io(Oa,t)}function Ta(){ao(Oa),ao(Ca),ao(Pa)}function Ra(e){_a(Pa.current);var t=_a(Oa.current),n=he(t,e.type);t!==n&&(io(Ca,e),io(Oa,n))}function ja(e){Ca.current===e&&(ao(Oa),ao(Ca))}var La=oo(0);function Ma(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Da=null,za=null,Ia=!1;function Aa(e,t){var n=Iu(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ua(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Fa(e){if(Ia){var t=za;if(t){var n=t;if(!Ua(e,t)){if(!(t=Vr(n.nextSibling))||!Ua(e,t))return e.flags=-1025&e.flags|2,Ia=!1,void(Da=e);Aa(Da,n)}Da=e,za=Vr(t.firstChild)}else e.flags=-1025&e.flags|2,Ia=!1,Da=e}}function $a(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Da=e}function Ba(e){if(e!==Da)return!1;if(!Ia)return $a(e),Ia=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Ur(t,e.memoizedProps))for(t=za;t;)Aa(e,t),t=Vr(t.nextSibling);if($a(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){za=Vr(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}za=null}}else za=Da?Vr(e.stateNode.nextSibling):null;return!0}function Va(){za=Da=null,Ia=!1}var Wa=[];function Ha(){for(var e=0;e<Wa.length;e++)Wa[e]._workInProgressVersionPrimary=null;Wa.length=0}var Qa=E.ReactCurrentDispatcher,qa=E.ReactCurrentBatchConfig,Ka=0,Ya=null,Ga=null,Xa=null,Ja=!1,Za=!1;function ei(){throw Error(i(321))}function ti(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ir(e[n],t[n]))return!1;return!0}function ni(e,t,n,r,o,a){if(Ka=a,Ya=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qa.current=null===e||null===e.memoizedState?_i:Ni,e=n(r,o),Za){a=0;do{if(Za=!1,!(25>a))throw Error(i(301));a+=1,Xa=Ga=null,t.updateQueue=null,Qa.current=Ti,e=n(r,o)}while(Za)}if(Qa.current=Pi,t=null!==Ga&&null!==Ga.next,Ka=0,Xa=Ga=Ya=null,Ja=!1,t)throw Error(i(300));return e}function ri(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Xa?Ya.memoizedState=Xa=e:Xa=Xa.next=e,Xa}function oi(){if(null===Ga){var e=Ya.alternate;e=null!==e?e.memoizedState:null}else e=Ga.next;var t=null===Xa?Ya.memoizedState:Xa.next;if(null!==t)Xa=t,Ga=e;else{if(null===e)throw Error(i(310));e={memoizedState:(Ga=e).memoizedState,baseState:Ga.baseState,baseQueue:Ga.baseQueue,queue:Ga.queue,next:null},null===Xa?Ya.memoizedState=Xa=e:Xa=Xa.next=e}return Xa}function ai(e,t){return"function"==typeof t?t(e):t}function ii(e){var t=oi(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=Ga,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(null!==o){o=o.next,r=r.baseState;var u=l=a=null,c=o;do{var s=c.lane;if((Ka&s)===s)null!==u&&(u=u.next={lane:0,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),r=c.eagerReducer===e?c.eagerState:e(r,c.action);else{var f={lane:s,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};null===u?(l=u=f,a=r):u=u.next=f,Ya.lanes|=s,Ml|=s}c=c.next}while(null!==c&&c!==o);null===u?a=r:u.next=l,ir(r,t.memoizedState)||(ji=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function li(e){var t=oi(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);ir(a,t.memoizedState)||(ji=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ui(e,t,n){var r=t._getVersion;r=r(t._source);var o=t._workInProgressVersionPrimary;if(null!==o?e=o===r:(e=e.mutableReadLanes,(e=(Ka&e)===e)&&(t._workInProgressVersionPrimary=r,Wa.push(t))),e)return n(t._source);throw Wa.push(t),Error(i(350))}function ci(e,t,n,r){var o=Cl;if(null===o)throw Error(i(349));var a=t._getVersion,l=a(t._source),u=Qa.current,c=u.useState((function(){return ui(o,t,n)})),s=c[1],f=c[0];c=Xa;var d=e.memoizedState,p=d.refs,h=p.getSnapshot,m=d.source;d=d.subscribe;var v=Ya;return e.memoizedState={refs:p,source:t,subscribe:r},u.useEffect((function(){p.getSnapshot=n,p.setSnapshot=s;var e=a(t._source);if(!ir(l,e)){e=n(t._source),ir(f,e)||(s(e),e=iu(v),o.mutableReadLanes|=e&o.pendingLanes),e=o.mutableReadLanes,o.entangledLanes|=e;for(var r=o.entanglements,i=e;0<i;){var u=31-Vt(i),c=1<<u;r[u]|=e,i&=~c}}}),[n,t,r]),u.useEffect((function(){return r(t._source,(function(){var e=p.getSnapshot,n=p.setSnapshot;try{n(e(t._source));var r=iu(v);o.mutableReadLanes|=r&o.pendingLanes}catch(e){n((function(){throw e}))}}))}),[t,r]),ir(h,n)&&ir(m,t)&&ir(d,r)||((e={pending:null,dispatch:null,lastRenderedReducer:ai,lastRenderedState:f}).dispatch=s=Ci.bind(null,Ya,e),c.queue=e,c.baseQueue=null,f=ui(o,t,n),c.memoizedState=c.baseState=f),f}function si(e,t,n){return ci(oi(),e,t,n)}function fi(e){var t=ri();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e}).dispatch=Ci.bind(null,Ya,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Ya.updateQueue)?(t={lastEffect:null},Ya.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function pi(e){return e={current:e},ri().memoizedState=e}function hi(){return oi().memoizedState}function mi(e,t,n,r){var o=ri();Ya.flags|=e,o.memoizedState=di(1|t,n,void 0,void 0===r?null:r)}function vi(e,t,n,r){var o=oi();r=void 0===r?null:r;var a=void 0;if(null!==Ga){var i=Ga.memoizedState;if(a=i.destroy,null!==r&&ti(r,i.deps))return void di(t,n,a,r)}Ya.flags|=e,o.memoizedState=di(1|t,n,a,r)}function yi(e,t){return mi(516,4,e,t)}function gi(e,t){return vi(516,4,e,t)}function bi(e,t){return vi(4,2,e,t)}function wi(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ei(e,t,n){return n=null!=n?n.concat([e]):null,vi(4,2,wi.bind(null,t,e),n)}function Si(){}function ki(e,t){var n=oi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ti(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xi(e,t){var n=oi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ti(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oi(e,t){var n=Fo();Bo(98>n?98:n,(function(){e(!0)})),Bo(97<n?97:n,(function(){var n=qa.transition;qa.transition=1;try{e(!1),t()}finally{qa.transition=n}}))}function Ci(e,t,n){var r=au(),o=iu(e),a={lane:o,action:n,eagerReducer:null,eagerState:null,next:null},i=t.pending;if(null===i?a.next=a:(a.next=i.next,i.next=a),t.pending=a,i=e.alternate,e===Ya||null!==i&&i===Ya)Za=Ja=!0;else{if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var l=t.lastRenderedState,u=i(l,n);if(a.eagerReducer=i,a.eagerState=u,ir(u,l))return}catch(e){}lu(e,o,r)}}var Pi={readContext:na,useCallback:ei,useContext:ei,useEffect:ei,useImperativeHandle:ei,useLayoutEffect:ei,useMemo:ei,useReducer:ei,useRef:ei,useState:ei,useDebugValue:ei,useDeferredValue:ei,useTransition:ei,useMutableSource:ei,useOpaqueIdentifier:ei,unstable_isNewReconciler:!1},_i={readContext:na,useCallback:function(e,t){return ri().memoizedState=[e,void 0===t?null:t],e},useContext:na,useEffect:yi,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,mi(4,2,wi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mi(4,2,e,t)},useMemo:function(e,t){var n=ri();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ri();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Ci.bind(null,Ya,e),[r.memoizedState,e]},useRef:pi,useState:fi,useDebugValue:Si,useDeferredValue:function(e){var t=fi(e),n=t[0],r=t[1];return yi((function(){var t=qa.transition;qa.transition=1;try{r(e)}finally{qa.transition=t}}),[e]),n},useTransition:function(){var e=fi(!1),t=e[0];return pi(e=Oi.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=ri();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},ci(r,e,t,n)},useOpaqueIdentifier:function(){if(Ia){var e=!1,t=function(e){return{$$typeof:D,toString:e,valueOf:e}}((function(){throw e||(e=!0,n("r:"+(Hr++).toString(36))),Error(i(355))})),n=fi(t)[1];return 0==(2&Ya.mode)&&(Ya.flags|=516,di(5,(function(){n("r:"+(Hr++).toString(36))}),void 0,null)),t}return fi(t="r:"+(Hr++).toString(36)),t},unstable_isNewReconciler:!1},Ni={readContext:na,useCallback:ki,useContext:na,useEffect:gi,useImperativeHandle:Ei,useLayoutEffect:bi,useMemo:xi,useReducer:ii,useRef:hi,useState:function(){return ii(ai)},useDebugValue:Si,useDeferredValue:function(e){var t=ii(ai),n=t[0],r=t[1];return gi((function(){var t=qa.transition;qa.transition=1;try{r(e)}finally{qa.transition=t}}),[e]),n},useTransition:function(){var e=ii(ai)[0];return[hi().current,e]},useMutableSource:si,useOpaqueIdentifier:function(){return ii(ai)[0]},unstable_isNewReconciler:!1},Ti={readContext:na,useCallback:ki,useContext:na,useEffect:gi,useImperativeHandle:Ei,useLayoutEffect:bi,useMemo:xi,useReducer:li,useRef:hi,useState:function(){return li(ai)},useDebugValue:Si,useDeferredValue:function(e){var t=li(ai),n=t[0],r=t[1];return gi((function(){var t=qa.transition;qa.transition=1;try{r(e)}finally{qa.transition=t}}),[e]),n},useTransition:function(){var e=li(ai)[0];return[hi().current,e]},useMutableSource:si,useOpaqueIdentifier:function(){return li(ai)[0]},unstable_isNewReconciler:!1},Ri=E.ReactCurrentOwner,ji=!1;function Li(e,t,n,r){t.child=null===e?ka(t,null,n,r):Sa(t,e.child,n,r)}function Mi(e,t,n,r,o){n=n.render;var a=t.ref;return ta(t,o),r=ni(e,t,n,r,a,o),null===e||ji?(t.flags|=1,Li(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,el(e,t,o))}function Di(e,t,n,r,o,a){if(null===e){var i=n.type;return"function"!=typeof i||Au(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Fu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,zi(e,t,i,r,o,a))}return i=e.child,0==(o&a)&&(o=i.memoizedProps,(n=null!==(n=n.compare)?n:ur)(o,r)&&e.ref===t.ref)?el(e,t,a):(t.flags|=1,(e=Uu(i,r)).ref=t.ref,e.return=t,t.child=e)}function zi(e,t,n,r,o,a){if(null!==e&&ur(e.memoizedProps,r)&&e.ref===t.ref){if(ji=!1,0==(a&o))return t.lanes=e.lanes,el(e,t,a);0!=(16384&e.flags)&&(ji=!0)}return Ui(e,t,n,r,a)}function Ii(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0==(4&t.mode))t.memoizedState={baseLanes:0},mu(t,n);else{if(0==(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},mu(t,e),null;t.memoizedState={baseLanes:0},mu(t,null!==a?a.baseLanes:n)}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,mu(t,r);return Li(e,t,o,n),t.child}function Ai(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function Ui(e,t,n,r,o){var a=po(n)?so:uo.current;return a=fo(t,a),ta(t,o),n=ni(e,t,n,r,a,o),null===e||ji?(t.flags|=1,Li(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,el(e,t,o))}function Fi(e,t,n,r,o){if(po(n)){var a=!0;yo(t)}else a=!1;if(ta(t,o),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),ma(t,n,r),ya(t,n,r,o),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,c=n.contextType;"object"==typeof c&&null!==c?c=na(c):c=fo(t,c=po(n)?so:uo.current);var s=n.getDerivedStateFromProps,f="function"==typeof s||"function"==typeof i.getSnapshotBeforeUpdate;f||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==r||u!==c)&&va(t,i,r,c),ra=!1;var d=t.memoizedState;i.state=d,ca(t,r,i,o),u=t.memoizedState,l!==r||d!==u||co.current||ra?("function"==typeof s&&(da(t,n,s,r),u=t.memoizedState),(l=ra||ha(t,n,l,r,d,u,c))?(f||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(t.flags|=4)):("function"==typeof i.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=l):("function"==typeof i.componentDidMount&&(t.flags|=4),r=!1)}else{i=t.stateNode,aa(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:qo(t.type,l),i.props=c,f=t.pendingProps,d=i.context,"object"==typeof(u=n.contextType)&&null!==u?u=na(u):u=fo(t,u=po(n)?so:uo.current);var p=n.getDerivedStateFromProps;(s="function"==typeof p||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(l!==f||d!==u)&&va(t,i,r,u),ra=!1,d=t.memoizedState,i.state=d,ca(t,r,i,o);var h=t.memoizedState;l!==f||d!==h||co.current||ra?("function"==typeof p&&(da(t,n,p,r),h=t.memoizedState),(c=ra||ha(t,n,c,r,d,h,u))?(s||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,u),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,u)),"function"==typeof i.componentDidUpdate&&(t.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=u,r=c):("function"!=typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),r=!1)}return $i(e,t,n,r,a,o)}function $i(e,t,n,r,o,a){Ai(e,t);var i=0!=(64&t.flags);if(!r&&!i)return o&&go(t,n,!1),el(e,t,a);r=t.stateNode,Ri.current=t;var l=i&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=Sa(t,e.child,null,a),t.child=Sa(t,null,l,a)):Li(e,t,l,a),t.memoizedState=r.state,o&&go(t,n,!0),t.child}function Bi(e){var t=e.stateNode;t.pendingContext?mo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&mo(0,t.context,!1),Na(e,t.containerInfo)}var Vi,Wi,Hi,Qi={dehydrated:null,retryLane:0};function qi(e,t,n){var r,o=t.pendingProps,a=La.current,i=!1;return(r=0!=(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!=(2&a)),r?(i=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(a|=1),io(La,1&a),null===e?(void 0!==o.fallback&&Fa(t),e=o.children,a=o.fallback,i?(e=Ki(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Qi,e):"number"==typeof o.unstable_expectedLoadTime?(e=Ki(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Qi,t.lanes=33554432,e):((n=Bu({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,i?(o=Gi(e,t,o.children,o.fallback,n),i=t.child,a=e.child.memoizedState,i.memoizedState=null===a?{baseLanes:n}:{baseLanes:a.baseLanes|n},i.childLanes=e.childLanes&~n,t.memoizedState=Qi,o):(n=Yi(e,t,o.children,n),t.memoizedState=null,n))}function Ki(e,t,n,r){var o=e.mode,a=e.child;return t={mode:"hidden",children:t},0==(2&o)&&null!==a?(a.childLanes=0,a.pendingProps=t):a=Bu(t,o,0,null),n=$u(n,o,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function Yi(e,t,n,r){var o=e.child;return e=o.sibling,n=Uu(o,{mode:"visible",children:n}),0==(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Gi(e,t,n,r,o){var a=t.mode,i=e.child;e=i.sibling;var l={mode:"hidden",children:n};return 0==(2&a)&&t.child!==i?((n=t.child).childLanes=0,n.pendingProps=l,null!==(i=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=i,i.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Uu(i,l),null!==e?r=Uu(e,r):(r=$u(r,a,o,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Xi(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),ea(e.return,t)}function Ji(e,t,n,r,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o,lastEffect:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o,i.lastEffect=a)}function Zi(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Li(e,t,r.children,n),0!=(2&(r=La.current)))r=1&r|2,t.flags|=64;else{if(null!==e&&0!=(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Xi(e,n);else if(19===e.tag)Xi(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(io(La,r),0==(2&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===Ma(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ji(t,!1,o,n,a,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===Ma(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ji(t,!0,n,null,a,t.lastEffect);break;case"together":Ji(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function el(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ml|=t.lanes,0!=(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Uu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Uu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function tl(e,t){if(!Ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return po(t.type)&&ho(),null;case 3:return Ta(),ao(co),ao(uo),Ha(),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Ba(t)?t.flags|=4:r.hydrate||(t.flags|=256)),null;case 5:ja(t);var a=_a(Pa.current);if(n=t.type,null!==e&&null!=t.stateNode)Wi(e,t,n,r),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error(i(166));return null}if(e=_a(Oa.current),Ba(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[qr]=t,r[Kr]=l,n){case"dialog":Or("cancel",r),Or("close",r);break;case"iframe":case"object":case"embed":Or("load",r);break;case"video":case"audio":for(e=0;e<Er.length;e++)Or(Er[e],r);break;case"source":Or("error",r);break;case"img":case"image":case"link":Or("error",r),Or("load",r);break;case"details":Or("toggle",r);break;case"input":ee(r,l),Or("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Or("invalid",r);break;case"textarea":ue(r,l),Or("invalid",r)}for(var c in ke(n,l),e=null,l)l.hasOwnProperty(c)&&(a=l[c],"children"===c?"string"==typeof a?r.textContent!==a&&(e=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(e=["children",""+a]):u.hasOwnProperty(c)&&null!=a&&"onScroll"===c&&Or("scroll",r));switch(n){case"input":G(r),re(r,l,!0);break;case"textarea":G(r),se(r);break;case"select":case"option":break;default:"function"==typeof l.onClick&&(r.onclick=Dr)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(c=9===a.nodeType?a:a.ownerDocument,e===fe&&(e=pe(n)),e===fe?"script"===n?((e=c.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[qr]=t,e[Kr]=r,Vi(e,t),t.stateNode=e,c=xe(n,r),n){case"dialog":Or("cancel",e),Or("close",e),a=r;break;case"iframe":case"object":case"embed":Or("load",e),a=r;break;case"video":case"audio":for(a=0;a<Er.length;a++)Or(Er[a],e);a=r;break;case"source":Or("error",e),a=r;break;case"img":case"image":case"link":Or("error",e),Or("load",e),a=r;break;case"details":Or("toggle",e),a=r;break;case"input":ee(e,r),a=Z(e,r),Or("invalid",e);break;case"option":a=ae(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=o({},r,{value:void 0}),Or("invalid",e);break;case"textarea":ue(e,r),a=le(e,r),Or("invalid",e);break;default:a=r}ke(n,a);var s=a;for(l in s)if(s.hasOwnProperty(l)){var f=s[l];"style"===l?Ee(e,f):"dangerouslySetInnerHTML"===l?null!=(f=f?f.__html:void 0)&&ve(e,f):"children"===l?"string"==typeof f?("textarea"!==n||""!==f)&&ye(e,f):"number"==typeof f&&ye(e,""+f):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(u.hasOwnProperty(l)?null!=f&&"onScroll"===l&&Or("scroll",e):null!=f&&w(e,l,f,c))}switch(n){case"input":G(e),re(e,r,!1);break;case"textarea":G(e),se(e);break;case"option":null!=r.value&&e.setAttribute("value",""+K(r.value));break;case"select":e.multiple=!!r.multiple,null!=(l=r.value)?ie(e,!!r.multiple,l,!1):null!=r.defaultValue&&ie(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=Dr)}Ar(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Hi(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(i(166));n=_a(Pa.current),_a(Oa.current),Ba(t)?(r=t.stateNode,n=t.memoizedProps,r[qr]=t,r.nodeValue!==n&&(t.flags|=4)):((r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[qr]=t,t.stateNode=r)}return null;case 13:return ao(La),r=t.memoizedState,0!=(64&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&Ba(t):n=null!==e.memoizedState,r&&!n&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&La.current)?0===Rl&&(Rl=3):(0!==Rl&&3!==Rl||(Rl=4),null===Cl||0==(134217727&Ml)&&0==(134217727&Dl)||fu(Cl,_l))),(r||n)&&(t.flags|=4),null);case 4:return Ta(),null===e&&Pr(t.stateNode.containerInfo),null;case 10:return Zo(t),null;case 17:return po(t.type)&&ho(),null;case 19:if(ao(La),null===(r=t.memoizedState))return null;if(l=0!=(64&t.flags),null===(c=r.rendering))if(l)tl(r,!1);else{if(0!==Rl||null!==e&&0!=(64&e.flags))for(e=t.child;null!==e;){if(null!==(c=Ma(e))){for(t.flags|=64,tl(r,!1),null!==(l=c.updateQueue)&&(t.updateQueue=l,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)e=r,(l=n).flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,null===(c=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return io(La,1&La.current|2),t.child}e=e.sibling}null!==r.tail&&Uo()>Ul&&(t.flags|=64,l=!0,tl(r,!1),t.lanes=33554432)}else{if(!l)if(null!==(e=Ma(c))){if(t.flags|=64,l=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),tl(r,!0),null===r.tail&&"hidden"===r.tailMode&&!c.alternate&&!Ia)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Uo()-r.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=64,l=!0,tl(r,!1),t.lanes=33554432);r.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=r.last)?n.sibling=c:t.child=c,r.last=c)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Uo(),n.sibling=null,t=La.current,io(La,l?1&t|2:1&t),n):null;case 23:case 24:return vu(),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error(i(156,t.tag))}function rl(e){switch(e.tag){case 1:po(e.type)&&ho();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(Ta(),ao(co),ao(uo),Ha(),0!=(64&(t=e.flags)))throw Error(i(285));return e.flags=-4097&t|64,e;case 5:return ja(e),null;case 13:return ao(La),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return ao(La),null;case 4:return Ta(),null;case 10:return Zo(e),null;case 23:case 24:return vu(),null;default:return null}}function ol(e,t){try{var n="",r=t;do{n+=Q(r),r=r.return}while(r);var o=n}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o}}function al(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}Vi=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Wi=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,_a(Oa.current);var i,l=null;switch(n){case"input":a=Z(e,a),r=Z(e,r),l=[];break;case"option":a=ae(e,a),r=ae(e,r),l=[];break;case"select":a=o({},a,{value:void 0}),r=o({},r,{value:void 0}),l=[];break;case"textarea":a=le(e,a),r=le(e,r),l=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=Dr)}for(f in ke(n,r),n=null,a)if(!r.hasOwnProperty(f)&&a.hasOwnProperty(f)&&null!=a[f])if("style"===f){var c=a[f];for(i in c)c.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==f&&"children"!==f&&"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(u.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var s=r[f];if(c=null!=a?a[f]:void 0,r.hasOwnProperty(f)&&s!==c&&(null!=s||null!=c))if("style"===f)if(c){for(i in c)!c.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&c[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(f,n)),n=s;else"dangerouslySetInnerHTML"===f?(s=s?s.__html:void 0,c=c?c.__html:void 0,null!=s&&c!==s&&(l=l||[]).push(f,s)):"children"===f?"string"!=typeof s&&"number"!=typeof s||(l=l||[]).push(f,""+s):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&(u.hasOwnProperty(f)?(null!=s&&"onScroll"===f&&Or("scroll",e),l||c===s||(l=[])):"object"==typeof s&&null!==s&&s.$$typeof===D?s.toString():(l=l||[]).push(f,s))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}},Hi=function(e,t,n,r){n!==r&&(t.flags|=4)};var il="function"==typeof WeakMap?WeakMap:Map;function ll(e,t,n){(n=ia(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vl||(Vl=!0,Wl=r),al(0,t)},n}function ul(e,t,n){(n=ia(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return al(0,t),r(o)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Hl?Hl=new Set([this]):Hl.add(this),al(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var cl="function"==typeof WeakSet?WeakSet:Set;function sl(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Lu(e,t)}else t.current=null}function fl(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:qo(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&Br(t.stateNode.containerInfo));case 5:case 6:case 4:case 17:return}throw Error(i(163))}function dl(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3==(3&e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var o=e;r=o.next,0!=(4&(o=o.tag))&&0!=(1&o)&&(Tu(n,e),Nu(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:qo(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&sa(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}sa(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&Ar(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Et(n)))));case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(i(163))}function pl(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"==typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var o=n.memoizedProps.style;o=null!=o&&o.hasOwnProperty("display")?o.display:null,r.style.display=we("display",o)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function hl(e,t){if(wo&&"function"==typeof wo.onCommitFiberUnmount)try{wo.onCommitFiberUnmount(bo,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,o=r.destroy;if(r=r.tag,void 0!==o)if(0!=(4&r))Tu(t,n);else{r=t;try{o()}catch(e){Lu(r,e)}}n=n.next}while(n!==e)}break;case 1:if(sl(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Lu(t,e)}break;case 5:sl(t);break;case 4:gl(e,t)}}function ml(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function vl(e){return 5===e.tag||3===e.tag||4===e.tag}function yl(e){e:{for(var t=e.return;null!==t;){if(vl(t))break e;t=t.return}throw Error(i(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(i(161))}16&n.flags&&(ye(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||vl(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?function e(t,n,r){var o=t.tag,a=5===o||6===o;if(a)t=a?t.stateNode:t.stateNode.instance,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!==(r=r._reactRootContainer)&&void 0!==r||null!==n.onclick||(n.onclick=Dr));else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t):function e(t,n,r){var o=t.tag,a=5===o||6===o;if(a)t=a?t.stateNode:t.stateNode.instance,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t)}function gl(e,t){for(var n,r,o=t,a=!1;;){if(!a){a=o.return;e:for(;;){if(null===a)throw Error(i(160));switch(n=a.stateNode,a.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}a=a.return}a=!0}if(5===o.tag||6===o.tag){e:for(var l=e,u=o,c=u;;)if(hl(l,c),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===u)break e;for(;null===c.sibling;){if(null===c.return||c.return===u)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}r?(l=n,u=o.stateNode,8===l.nodeType?l.parentNode.removeChild(u):l.removeChild(u)):n.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){n=o.stateNode.containerInfo,r=!0,o.child.return=o,o=o.child;continue}}else if(hl(e,o),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(a=!1)}o.sibling.return=o.return,o=o.sibling}}function bl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{3==(3&r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var o=null!==e?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(n[Kr]=r,"input"===e&&"radio"===r.type&&null!=r.name&&te(n,r),xe(e,o),t=xe(e,r),o=0;o<a.length;o+=2){var l=a[o],u=a[o+1];"style"===l?Ee(n,u):"dangerouslySetInnerHTML"===l?ve(n,u):"children"===l?ye(n,u):w(n,l,u,t)}switch(e){case"input":ne(n,r);break;case"textarea":ce(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(a=r.value)?ie(n,!!r.multiple,a,!1):e!==!!r.multiple&&(null!=r.defaultValue?ie(n,!!r.multiple,r.defaultValue,!0):ie(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(i(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,Et(n.containerInfo)));case 12:return;case 13:return null!==t.memoizedState&&(Al=Uo(),pl(t.child,!0)),void wl(t);case 19:return void wl(t);case 17:return;case 23:case 24:return void pl(t,null!==t.memoizedState)}throw Error(i(163))}function wl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new cl),t.forEach((function(t){var r=Du.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function El(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Sl=Math.ceil,kl=E.ReactCurrentDispatcher,xl=E.ReactCurrentOwner,Ol=0,Cl=null,Pl=null,_l=0,Nl=0,Tl=oo(0),Rl=0,jl=null,Ll=0,Ml=0,Dl=0,zl=0,Il=null,Al=0,Ul=1/0;function Fl(){Ul=Uo()+500}var $l,Bl=null,Vl=!1,Wl=null,Hl=null,Ql=!1,ql=null,Kl=90,Yl=[],Gl=[],Xl=null,Jl=0,Zl=null,eu=-1,tu=0,nu=0,ru=null,ou=!1;function au(){return 0!=(48&Ol)?Uo():-1!==eu?eu:eu=Uo()}function iu(e){if(0==(2&(e=e.mode)))return 1;if(0==(4&e))return 99===Fo()?1:2;if(0===tu&&(tu=Ll),0!==Qo.transition){0!==nu&&(nu=null!==Il?Il.pendingLanes:0),e=tu;var t=4186112&~nu;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Fo(),0!=(4&Ol)&&98===e?e=Ut(12,tu):e=Ut(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),tu),e}function lu(e,t,n){if(50<Jl)throw Jl=0,Zl=null,Error(i(185));if(null===(e=uu(e,t)))return null;Bt(e,t,n),e===Cl&&(Dl|=t,4===Rl&&fu(e,_l));var r=Fo();1===t?0!=(8&Ol)&&0==(48&Ol)?du(e):(cu(e,n),0===Ol&&(Fl(),Wo())):(0==(4&Ol)||98!==r&&99!==r||(null===Xl?Xl=new Set([e]):Xl.add(e)),cu(e,n)),Il=e}function uu(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function cu(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Vt(l),c=1<<u,s=a[u];if(-1===s){if(0==(c&r)||0!=(c&o)){s=t,zt(c);var f=Dt;a[u]=10<=f?s+250:6<=f?s+5e3:-1}}else s<=t&&(e.expiredLanes|=c);l&=~c}if(r=It(e,e===Cl?_l:0),t=Dt,0===r)null!==n&&(n!==Lo&&ko(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==Lo&&ko(n)}15===t?(n=du.bind(null,e),null===Do?(Do=[n],zo=So(_o,Ho)):Do.push(n),n=Lo):14===t?n=Vo(99,du.bind(null,e)):n=Vo(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(i(358,e))}}(t),su.bind(null,e)),e.callbackPriority=t,e.callbackNode=n}}function su(e){if(eu=-1,nu=tu=0,0!=(48&Ol))throw Error(i(327));var t=e.callbackNode;if(_u()&&e.callbackNode!==t)return null;var n=It(e,e===Cl?_l:0);if(0===n)return null;var r=n,o=Ol;Ol|=16;var a=bu();for(Cl===e&&_l===r||(Fl(),yu(e,r));;)try{Su();break}catch(t){gu(e,t)}if(Jo(),kl.current=a,Ol=o,null!==Pl?r=0:(Cl=null,_l=0,r=Rl),0!=(Ll&Dl))yu(e,0);else if(0!==r){if(2===r&&(Ol|=64,e.hydrate&&(e.hydrate=!1,Br(e.containerInfo)),0!==(n=At(e))&&(r=wu(e,n))),1===r)throw t=jl,yu(e,0),fu(e,n),cu(e,Uo()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Ou(e);break;case 3:if(fu(e,n),(62914560&n)===n&&10<(r=Al+500-Uo())){if(0!==It(e,0))break;if(((o=e.suspendedLanes)&n)!==n){au(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fr(Ou.bind(null,e),r);break}Ou(e);break;case 4:if(fu(e,n),(4186112&n)===n)break;for(r=e.eventTimes,o=-1;0<n;){var l=31-Vt(n);a=1<<l,(l=r[l])>o&&(o=l),n&=~a}if(n=o,10<(n=(120>(n=Uo()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Sl(n/1960))-n)){e.timeoutHandle=Fr(Ou.bind(null,e),n);break}Ou(e);break;case 5:Ou(e);break;default:throw Error(i(329))}}return cu(e,Uo()),e.callbackNode===t?su.bind(null,e):null}function fu(e,t){for(t&=~zl,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if(0!=(48&Ol))throw Error(i(327));if(_u(),e===Cl&&0!=(e.expiredLanes&_l)){var t=_l,n=wu(e,t);0!=(Ll&Dl)&&(n=wu(e,t=It(e,t)))}else n=wu(e,t=It(e,0));if(0!==e.tag&&2===n&&(Ol|=64,e.hydrate&&(e.hydrate=!1,Br(e.containerInfo)),0!==(t=At(e))&&(n=wu(e,t))),1===n)throw n=jl,yu(e,0),fu(e,t),cu(e,Uo()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ou(e),cu(e,Uo()),null}function pu(e,t){var n=Ol;Ol|=1;try{return e(t)}finally{0===(Ol=n)&&(Fl(),Wo())}}function hu(e,t){var n=Ol;Ol&=-2,Ol|=8;try{return e(t)}finally{0===(Ol=n)&&(Fl(),Wo())}}function mu(e,t){io(Tl,Nl),Nl|=t,Ll|=t}function vu(){Nl=Tl.current,ao(Tl)}function yu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,$r(n)),null!==Pl)for(n=Pl.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&ho();break;case 3:Ta(),ao(co),ao(uo),Ha();break;case 5:ja(r);break;case 4:Ta();break;case 13:case 19:ao(La);break;case 10:Zo(r);break;case 23:case 24:vu()}n=n.return}Cl=e,Pl=Uu(e.current,null),_l=Nl=Ll=t,Rl=0,jl=null,zl=Dl=Ml=0}function gu(e,t){for(;;){var n=Pl;try{if(Jo(),Qa.current=Pi,Ja){for(var r=Ya.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}Ja=!1}if(Ka=0,Xa=Ga=Ya=null,Za=!1,xl.current=null,null===n||null===n.return){Rl=1,jl=t,Pl=null;break}e:{var a=e,i=n.return,l=n,u=t;if(t=_l,l.flags|=2048,l.firstEffect=l.lastEffect=null,null!==u&&"object"==typeof u&&"function"==typeof u.then){var c=u;if(0==(2&l.mode)){var s=l.alternate;s?(l.updateQueue=s.updateQueue,l.memoizedState=s.memoizedState,l.lanes=s.lanes):(l.updateQueue=null,l.memoizedState=null)}var f=0!=(1&La.current),d=i;do{var p;if(p=13===d.tag){var h=d.memoizedState;if(null!==h)p=null!==h.dehydrated;else{var m=d.memoizedProps;p=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!f)}}if(p){var v=d.updateQueue;if(null===v){var y=new Set;y.add(c),d.updateQueue=y}else v.add(c);if(0==(2&d.mode)){if(d.flags|=64,l.flags|=16384,l.flags&=-2981,1===l.tag)if(null===l.alternate)l.tag=17;else{var g=ia(-1,1);g.tag=2,la(l,g)}l.lanes|=1;break e}u=void 0,l=t;var b=a.pingCache;if(null===b?(b=a.pingCache=new il,u=new Set,b.set(c,u)):void 0===(u=b.get(c))&&(u=new Set,b.set(c,u)),!u.has(l)){u.add(l);var w=Mu.bind(null,a,c,l);c.then(w,w)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(null!==d);u=Error((q(l.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==Rl&&(Rl=2),u=ol(u,l),d=i;do{switch(d.tag){case 3:a=u,d.flags|=4096,t&=-t,d.lanes|=t,ua(d,ll(0,a,t));break e;case 1:a=u;var E=d.type,S=d.stateNode;if(0==(64&d.flags)&&("function"==typeof E.getDerivedStateFromError||null!==S&&"function"==typeof S.componentDidCatch&&(null===Hl||!Hl.has(S)))){d.flags|=4096,t&=-t,d.lanes|=t,ua(d,ul(d,a,t));break e}}d=d.return}while(null!==d)}xu(n)}catch(e){t=e,Pl===n&&null!==n&&(Pl=n=n.return);continue}break}}function bu(){var e=kl.current;return kl.current=Pi,null===e?Pi:e}function wu(e,t){var n=Ol;Ol|=16;var r=bu();for(Cl===e&&_l===t||yu(e,t);;)try{Eu();break}catch(t){gu(e,t)}if(Jo(),Ol=n,kl.current=r,null!==Pl)throw Error(i(261));return Cl=null,_l=0,Rl}function Eu(){for(;null!==Pl;)ku(Pl)}function Su(){for(;null!==Pl&&!xo();)ku(Pl)}function ku(e){var t=$l(e.alternate,e,Nl);e.memoizedProps=e.pendingProps,null===t?xu(e):Pl=t,xl.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(2048&t.flags)){if(null!==(n=nl(n,t,Nl)))return void(Pl=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||0!=(1073741824&Nl)||0==(4&n.mode)){for(var r=0,o=n.child;null!==o;)r|=o.lanes|o.childLanes,o=o.sibling;n.childLanes=r}null!==e&&0==(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(n=rl(t)))return n.flags&=2047,void(Pl=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(Pl=t);Pl=t=e}while(null!==t);0===Rl&&(Rl=5)}function Ou(e){var t=Fo();return Bo(99,Cu.bind(null,e,t)),null}function Cu(e,t){do{_u()}while(null!==ql);if(0!=(48&Ol))throw Error(i(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null;var r=n.lanes|n.childLanes,o=r,a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var l=e.eventTimes,u=e.expirationTimes;0<a;){var c=31-Vt(a),s=1<<c;o[c]=0,l[c]=-1,u[c]=-1,a&=~s}if(null!==Xl&&0==(24&r)&&Xl.has(e)&&Xl.delete(e),e===Cl&&(Pl=Cl=null,_l=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(o=Ol,Ol|=32,xl.current=null,zr=Kt,dr(l=fr())){if("selectionStart"in l)u={start:l.selectionStart,end:l.selectionEnd};else e:if(u=(u=l.ownerDocument)&&u.defaultView||window,(s=u.getSelection&&u.getSelection())&&0!==s.rangeCount){u=s.anchorNode,a=s.anchorOffset,c=s.focusNode,s=s.focusOffset;try{u.nodeType,c.nodeType}catch(e){u=null;break e}var f=0,d=-1,p=-1,h=0,m=0,v=l,y=null;t:for(;;){for(var g;v!==u||0!==a&&3!==v.nodeType||(d=f+a),v!==c||0!==s&&3!==v.nodeType||(p=f+s),3===v.nodeType&&(f+=v.nodeValue.length),null!==(g=v.firstChild);)y=v,v=g;for(;;){if(v===l)break t;if(y===u&&++h===a&&(d=f),y===c&&++m===s&&(p=f),null!==(g=v.nextSibling))break;y=(v=y).parentNode}v=g}u=-1===d||-1===p?null:{start:d,end:p}}else u=null;u=u||{start:0,end:0}}else u=null;Ir={focusedElem:l,selectionRange:u},Kt=!1,ru=null,ou=!1,Bl=r;do{try{Pu()}catch(e){if(null===Bl)throw Error(i(330));Lu(Bl,e),Bl=Bl.nextEffect}}while(null!==Bl);ru=null,Bl=r;do{try{for(l=e;null!==Bl;){var b=Bl.flags;if(16&b&&ye(Bl.stateNode,""),128&b){var w=Bl.alternate;if(null!==w){var E=w.ref;null!==E&&("function"==typeof E?E(null):E.current=null)}}switch(1038&b){case 2:yl(Bl),Bl.flags&=-3;break;case 6:yl(Bl),Bl.flags&=-3,bl(Bl.alternate,Bl);break;case 1024:Bl.flags&=-1025;break;case 1028:Bl.flags&=-1025,bl(Bl.alternate,Bl);break;case 4:bl(Bl.alternate,Bl);break;case 8:gl(l,u=Bl);var S=u.alternate;ml(u),null!==S&&ml(S)}Bl=Bl.nextEffect}}catch(e){if(null===Bl)throw Error(i(330));Lu(Bl,e),Bl=Bl.nextEffect}}while(null!==Bl);if(E=Ir,w=fr(),b=E.focusedElem,l=E.selectionRange,w!==b&&b&&b.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(b.ownerDocument.documentElement,b)){null!==l&&dr(b)&&(w=l.start,void 0===(E=l.end)&&(E=w),"selectionStart"in b?(b.selectionStart=w,b.selectionEnd=Math.min(E,b.value.length)):(E=(w=b.ownerDocument||document)&&w.defaultView||window).getSelection&&(E=E.getSelection(),u=b.textContent.length,S=Math.min(l.start,u),l=void 0===l.end?S:Math.min(l.end,u),!E.extend&&S>l&&(u=l,l=S,S=u),u=sr(b,S),a=sr(b,l),u&&a&&(1!==E.rangeCount||E.anchorNode!==u.node||E.anchorOffset!==u.offset||E.focusNode!==a.node||E.focusOffset!==a.offset)&&((w=w.createRange()).setStart(u.node,u.offset),E.removeAllRanges(),S>l?(E.addRange(w),E.extend(a.node,a.offset)):(w.setEnd(a.node,a.offset),E.addRange(w))))),w=[];for(E=b;E=E.parentNode;)1===E.nodeType&&w.push({element:E,left:E.scrollLeft,top:E.scrollTop});for("function"==typeof b.focus&&b.focus(),b=0;b<w.length;b++)(E=w[b]).element.scrollLeft=E.left,E.element.scrollTop=E.top}Kt=!!zr,Ir=zr=null,e.current=n,Bl=r;do{try{for(b=e;null!==Bl;){var k=Bl.flags;if(36&k&&dl(b,Bl.alternate,Bl),128&k){w=void 0;var x=Bl.ref;if(null!==x){var O=Bl.stateNode;switch(Bl.tag){case 5:w=O;break;default:w=O}"function"==typeof x?x(w):x.current=w}}Bl=Bl.nextEffect}}catch(e){if(null===Bl)throw Error(i(330));Lu(Bl,e),Bl=Bl.nextEffect}}while(null!==Bl);Bl=null,Mo(),Ol=o}else e.current=n;if(Ql)Ql=!1,ql=e,Kl=t;else for(Bl=r;null!==Bl;)t=Bl.nextEffect,Bl.nextEffect=null,8&Bl.flags&&((k=Bl).sibling=null,k.stateNode=null),Bl=t;if(0===(r=e.pendingLanes)&&(Hl=null),1===r?e===Zl?Jl++:(Jl=0,Zl=e):Jl=0,n=n.stateNode,wo&&"function"==typeof wo.onCommitFiberRoot)try{wo.onCommitFiberRoot(bo,n,void 0,64==(64&n.current.flags))}catch(e){}if(cu(e,Uo()),Vl)throw Vl=!1,e=Wl,Wl=null,e;return 0!=(8&Ol)||Wo(),null}function Pu(){for(;null!==Bl;){var e=Bl.alternate;ou||null===ru||(0!=(8&Bl.flags)?Ze(Bl,ru)&&(ou=!0):13===Bl.tag&&El(e,Bl)&&Ze(Bl,ru)&&(ou=!0));var t=Bl.flags;0!=(256&t)&&fl(e,Bl),0==(512&t)||Ql||(Ql=!0,Vo(97,(function(){return _u(),null}))),Bl=Bl.nextEffect}}function _u(){if(90!==Kl){var e=97<Kl?97:Kl;return Kl=90,Bo(e,Ru)}return!1}function Nu(e,t){Yl.push(t,e),Ql||(Ql=!0,Vo(97,(function(){return _u(),null})))}function Tu(e,t){Gl.push(t,e),Ql||(Ql=!0,Vo(97,(function(){return _u(),null})))}function Ru(){if(null===ql)return!1;var e=ql;if(ql=null,0!=(48&Ol))throw Error(i(331));var t=Ol;Ol|=32;var n=Gl;Gl=[];for(var r=0;r<n.length;r+=2){var o=n[r],a=n[r+1],l=o.destroy;if(o.destroy=void 0,"function"==typeof l)try{l()}catch(e){if(null===a)throw Error(i(330));Lu(a,e)}}for(n=Yl,Yl=[],r=0;r<n.length;r+=2){o=n[r],a=n[r+1];try{var u=o.create;o.destroy=u()}catch(e){if(null===a)throw Error(i(330));Lu(a,e)}}for(u=e.current.firstEffect;null!==u;)e=u.nextEffect,u.nextEffect=null,8&u.flags&&(u.sibling=null,u.stateNode=null),u=e;return Ol=t,Wo(),!0}function ju(e,t,n){la(e,t=ll(0,t=ol(n,t),1)),t=au(),null!==(e=uu(e,1))&&(Bt(e,1,t),cu(e,t))}function Lu(e,t){if(3===e.tag)ju(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){ju(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Hl||!Hl.has(r))){var o=ul(n,e=ol(t,e),1);if(la(n,o),o=au(),null!==(n=uu(n,1)))Bt(n,1,o),cu(n,o);else if("function"==typeof r.componentDidCatch&&(null===Hl||!Hl.has(r)))try{r.componentDidCatch(t,e)}catch(e){}break}}n=n.return}}function Mu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=au(),e.pingedLanes|=e.suspendedLanes&n,Cl===e&&(_l&n)===n&&(4===Rl||3===Rl&&(62914560&_l)===_l&&500>Uo()-Al?yu(e,0):zl|=n),cu(e,t)}function Du(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(0==(2&(t=e.mode))?t=1:0==(4&t)?t=99===Fo()?1:2:(0===tu&&(tu=Ll),0===(t=Ft(62914560&~tu))&&(t=4194304))),n=au(),null!==(e=uu(e,t))&&(Bt(e,t,n),cu(e,n))}function zu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Iu(e,t,n,r){return new zu(e,t,n,r)}function Au(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Uu(e,t){var n=e.alternate;return null===n?((n=Iu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fu(e,t,n,r,o,a){var l=2;if(r=e,"function"==typeof e)Au(e)&&(l=1);else if("string"==typeof e)l=5;else e:switch(e){case x:return $u(n.children,o,a,t);case z:l=8,o|=16;break;case O:l=8,o|=1;break;case C:return(e=Iu(12,n,t,8|o)).elementType=C,e.type=C,e.lanes=a,e;case T:return(e=Iu(13,n,t,o)).type=T,e.elementType=T,e.lanes=a,e;case R:return(e=Iu(19,n,t,o)).elementType=R,e.lanes=a,e;case I:return Bu(n,o,a,t);case A:return(e=Iu(24,n,t,o)).elementType=A,e.lanes=a,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case P:l=10;break e;case _:l=9;break e;case N:l=11;break e;case j:l=14;break e;case L:l=16,r=null;break e;case M:l=22;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Iu(l,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function $u(e,t,n,r){return(e=Iu(7,e,r,t)).lanes=n,e}function Bu(e,t,n,r){return(e=Iu(23,e,r,t)).elementType=I,e.lanes=n,e}function Vu(e,t,n){return(e=Iu(6,e,null,t)).lanes=n,e}function Wu(e,t,n){return(t=Iu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hu(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=$t(0),this.expirationTimes=$t(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$t(0),this.mutableSourceEagerHydrationData=null}function Qu(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e,t,n,r){var o=t.current,a=au(),l=iu(o);e:if(n){t:{if(Ye(n=n._reactInternals)!==n||1!==n.tag)throw Error(i(170));var u=n;do{switch(u.tag){case 3:u=u.stateNode.context;break t;case 1:if(po(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break t}}u=u.return}while(null!==u);throw Error(i(171))}if(1===n.tag){var c=n.type;if(po(c)){n=vo(n,c,u);break e}}n=u}else n=lo;return null===t.context?t.context=n:t.pendingContext=n,(t=ia(a,l)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),la(o,t),lu(o,l,a),l}function Ku(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Yu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gu(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}function Xu(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new Hu(e,t,null!=n&&!0===n.hydrate),t=Iu(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,oa(t),e[Yr]=n.current,Pr(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var o=(t=r[e])._getVersion;o=o(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=n}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a._internalRoot;if("function"==typeof o){var l=o;o=function(){var e=Ku(i);l.call(e)}}qu(t,i,e,o)}else{if(a=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Xu(e,0,t?{hydrate:!0}:void 0)}(n,r),i=a._internalRoot,"function"==typeof o){var u=o;o=function(){var e=Ku(i);u.call(e)}}hu((function(){qu(t,i,e,o)}))}return Ku(i)}function ec(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Ju(t))throw Error(i(200));return Qu(e,t,null,n)}$l=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||co.current)ji=!0;else{if(0==(n&r)){switch(ji=!1,t.tag){case 3:Bi(t),Va();break;case 5:Ra(t);break;case 1:po(t.type)&&yo(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var o=t.type._context;io(Ko,o._currentValue),o._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!=(n&t.child.childLanes)?qi(e,t,n):(io(La,1&La.current),null!==(t=el(e,t,n))?t.sibling:null);io(La,1&La.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(64&e.flags)){if(r)return Zi(e,t,n);t.flags|=64}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),io(La,La.current),r)break;return null;case 23:case 24:return t.lanes=0,Ii(e,t,n)}return el(e,t,n)}ji=0!=(16384&e.flags)}else ji=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=fo(t,uo.current),ta(t,n),o=ni(null,t,r,e,o,n),t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,po(r)){var a=!0;yo(t)}else a=!1;t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,oa(t);var l=r.getDerivedStateFromProps;"function"==typeof l&&da(t,r,l,e),o.updater=pa,t.stateNode=o,o._reactInternals=t,ya(t,r,e,n),t=$i(null,t,r,!0,a,n)}else t.tag=0,Li(null,t,o,n),t=t.child;return t;case 16:o=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=(a=o._init)(o._payload),t.type=o,a=t.tag=function(e){if("function"==typeof e)return Au(e)?1:0;if(null!=e){if((e=e.$$typeof)===N)return 11;if(e===j)return 14}return 2}(o),e=qo(o,e),a){case 0:t=Ui(null,t,o,e,n);break e;case 1:t=Fi(null,t,o,e,n);break e;case 11:t=Mi(null,t,o,e,n);break e;case 14:t=Di(null,t,o,qo(o.type,e),r,n);break e}throw Error(i(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,Ui(e,t,r,o=t.elementType===r?o:qo(r,o),n);case 1:return r=t.type,o=t.pendingProps,Fi(e,t,r,o=t.elementType===r?o:qo(r,o),n);case 3:if(Bi(t),r=t.updateQueue,null===e||null===r)throw Error(i(282));if(r=t.pendingProps,o=null!==(o=t.memoizedState)?o.element:null,aa(e,t),ca(t,r,null,n),(r=t.memoizedState.element)===o)Va(),t=el(e,t,n);else{if((a=(o=t.stateNode).hydrate)&&(za=Vr(t.stateNode.containerInfo.firstChild),Da=t,a=Ia=!0),a){if(null!=(e=o.mutableSourceEagerHydrationData))for(o=0;o<e.length;o+=2)(a=e[o])._workInProgressVersionPrimary=e[o+1],Wa.push(a);for(n=ka(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else Li(e,t,r,n),Va();t=t.child}return t;case 5:return Ra(t),null===e&&Fa(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,Ur(r,o)?l=null:null!==a&&Ur(r,a)&&(t.flags|=16),Ai(e,t),Li(e,t,l,n),t.child;case 6:return null===e&&Fa(t),null;case 13:return qi(e,t,n);case 4:return Na(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Sa(t,null,r,n):Li(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,Mi(e,t,r,o=t.elementType===r?o:qo(r,o),n);case 7:return Li(e,t,t.pendingProps,n),t.child;case 8:case 12:return Li(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value;var u=t.type._context;if(io(Ko,u._currentValue),u._currentValue=a,null!==l)if(u=l.value,0===(a=ir(u,a)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(u,a):1073741823))){if(l.children===o.children&&!co.current){t=el(e,t,n);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var c=u.dependencies;if(null!==c){l=u.child;for(var s=c.firstContext;null!==s;){if(s.context===r&&0!=(s.observedBits&a)){1===u.tag&&((s=ia(-1,n&-n)).tag=2,la(u,s)),u.lanes|=n,null!==(s=u.alternate)&&(s.lanes|=n),ea(u.return,n),c.lanes|=n;break}s=s.next}}else l=10===u.tag&&u.type===t.type?null:u.child;if(null!==l)l.return=u;else for(l=u;null!==l;){if(l===t){l=null;break}if(null!==(u=l.sibling)){u.return=l.return,l=u;break}l=l.return}u=l}Li(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=(a=t.pendingProps).children,ta(t,n),r=r(o=na(o,a.unstable_observedBits)),t.flags|=1,Li(e,t,r,n),t.child;case 14:return a=qo(o=t.type,t.pendingProps),Di(e,t,o,a=qo(o.type,a),r,n);case 15:return zi(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qo(r,o),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,po(r)?(e=!0,yo(t)):e=!1,ta(t,n),ma(t,r,o),ya(t,r,o,n),$i(null,t,r,!0,e,n);case 19:return Zi(e,t,n);case 23:case 24:return Ii(e,t,n)}throw Error(i(156,t.tag))},Xu.prototype.render=function(e){qu(e,this._internalRoot,null,null)},Xu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;qu(null,e,null,(function(){t[Yr]=null}))},et=function(e){13===e.tag&&(lu(e,4,au()),Gu(e,4))},tt=function(e){13===e.tag&&(lu(e,67108864,au()),Gu(e,67108864))},nt=function(e){if(13===e.tag){var t=au(),n=iu(e);lu(e,n,t),Gu(e,n)}},rt=function(e,t){return t()},Ce=function(e,t,n){switch(t){case"input":if(ne(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=eo(r);if(!o)throw Error(i(90));X(r),ne(r,o)}}}break;case"textarea":ce(e,n);break;case"select":null!=(t=n.value)&&ie(e,!!n.multiple,t,!1)}},je=pu,Le=function(e,t,n,r,o){var a=Ol;Ol|=4;try{return Bo(98,e.bind(null,t,n,r,o))}finally{0===(Ol=a)&&(Fl(),Wo())}},Me=function(){0==(49&Ol)&&(function(){if(null!==Xl){var e=Xl;Xl=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,cu(e,Uo())}))}Wo()}(),_u())},De=function(e,t){var n=Ol;Ol|=2;try{return e(t)}finally{0===(Ol=n)&&(Fl(),Wo())}};var tc={Events:[Jr,Zr,eo,Te,Re,_u,{current:!1}]},nc={findFiberByHostInstance:Xr,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Je(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{bo=oc.inject(rc),wo=oc}catch(e){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,t.createPortal=ec,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(i(188));throw Error(i(268,Object.keys(e)))}return e=null===(e=Je(t))?null:e.stateNode},t.flushSync=function(e,t){var n=Ol;if(0!=(48&n))return e(t);Ol|=1;try{if(e)return Bo(99,e.bind(null,t))}finally{Ol=n,Wo()}},t.hydrate=function(e,t,n){if(!Ju(t))throw Error(i(200));return Zu(null,e,t,!0,n)},t.render=function(e,t,n){if(!Ju(t))throw Error(i(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Ju(e))throw Error(i(40));return!!e._reactRootContainer&&(hu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[Yr]=null}))})),!0)},t.unstable_batchedUpdates=pu,t.unstable_createPortal=function(e,t){return ec(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ju(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zu(e,t,n,!1,r)},t.version="17.0.1"},function(e,t,n){"use strict";e.exports=n(17)},function(e,t,n){"use strict";
/** @license React v0.20.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,o,a,i;if("object"==typeof performance&&"function"==typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,f=null,d=function(){if(null!==s)try{var e=t.unstable_now();s(!0,e),s=null}catch(e){throw setTimeout(d,0),e}};r=function(e){null!==s?setTimeout(r,0,e):(s=e,setTimeout(d,0))},o=function(e,t){f=setTimeout(e,t)},a=function(){clearTimeout(f)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,y=null,g=-1,b=5,w=0;t.unstable_shouldYield=function(){return t.unstable_now()>=w},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<e?Math.floor(1e3/e):5};var E=new MessageChannel,S=E.port2;E.port1.onmessage=function(){if(null!==y){var e=t.unstable_now();w=e+b;try{y(!0,e)?S.postMessage(null):(v=!1,y=null)}catch(e){throw S.postMessage(null),e}}else v=!1},r=function(e){y=e,v||(v=!0,S.postMessage(null))},o=function(e,n){g=p((function(){e(t.unstable_now())}),n)},a=function(){h(g),g=-1}}function k(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<C(o,t)))break e;e[r]=t,e[n]=o,n=r}}function x(e){return void 0===(e=e[0])?null:e}function O(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var a=2*(r+1)-1,i=e[a],l=a+1,u=e[l];if(void 0!==i&&0>C(i,n))void 0!==u&&0>C(u,i)?(e[r]=u,e[l]=n,r=l):(e[r]=i,e[a]=n,r=a);else{if(!(void 0!==u&&0>C(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}return null}function C(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var P=[],_=[],N=1,T=null,R=3,j=!1,L=!1,M=!1;function D(e){for(var t=x(_);null!==t;){if(null===t.callback)O(_);else{if(!(t.startTime<=e))break;O(_),t.sortIndex=t.expirationTime,k(P,t)}t=x(_)}}function z(e){if(M=!1,D(e),!L)if(null!==x(P))L=!0,r(I);else{var t=x(_);null!==t&&o(z,t.startTime-e)}}function I(e,n){L=!1,M&&(M=!1,a()),j=!0;var r=R;try{for(D(n),T=x(P);null!==T&&(!(T.expirationTime>n)||e&&!t.unstable_shouldYield());){var i=T.callback;if("function"==typeof i){T.callback=null,R=T.priorityLevel;var l=i(T.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?T.callback=l:T===x(P)&&O(P),D(n)}else O(P);T=x(P)}if(null!==T)var u=!0;else{var c=x(_);null!==c&&o(z,c.startTime-n),u=!1}return u}finally{T=null,R=r,j=!1}}var A=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){L||j||(L=!0,r(I))},t.unstable_getCurrentPriorityLevel=function(){return R},t.unstable_getFirstCallbackNode=function(){return x(P)},t.unstable_next=function(e){switch(R){case 1:case 2:case 3:var t=3;break;default:t=R}var n=R;R=t;try{return e()}finally{R=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=A,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=R;R=e;try{return t()}finally{R=n}},t.unstable_scheduleCallback=function(e,n,i){var l=t.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?l+i:l:i=l,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:N++,callback:n,priorityLevel:e,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>l?(e.sortIndex=i,k(_,e),null===x(P)&&e===x(_)&&(M?a():M=!0,o(z,i-l))):(e.sortIndex=u,k(P,e),L||j||(L=!0,r(I))),e},t.unstable_wrapCallback=function(e){var t=R;return function(){var n=R;R=t;try{return e.apply(this,arguments)}finally{R=n}}}},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";var r=n(20);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case i:case u:case l:case h:return e;default:switch(e=e&&e.$$typeof){case s:case p:case y:case v:case c:return e;default:return t}}case a:return t}}}function k(e){return S(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=s,t.ContextProvider=c,t.Element=o,t.ForwardRef=p,t.Fragment=i,t.Lazy=y,t.Memo=v,t.Portal=a,t.Profiler=u,t.StrictMode=l,t.Suspense=h,t.isAsyncMode=function(e){return k(e)||S(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return S(e)===s},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return S(e)===p},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===y},t.isMemo=function(e){return S(e)===v},t.isPortal=function(e){return S(e)===a},t.isProfiler=function(e){return S(e)===u},t.isStrictMode=function(e){return S(e)===l},t.isSuspense=function(e){return S(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===u||e===l||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===c||e.$$typeof===s||e.$$typeof===p||e.$$typeof===b||e.$$typeof===w||e.$$typeof===E||e.$$typeof===g)},t.typeOf=S},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(8),u=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+u(),REPLACE:"@@redux/REPLACE"+u(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+u()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function f(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(f)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,a=t,i=[],u=i,d=!1;function p(){u===i&&(u=i.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function m(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),u.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=u.indexOf(e);u.splice(n,1),i=null}}}function v(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,a=o(a,e)}finally{d=!1}for(var t=i=u,n=0;n<t.length;n++){(0,t[n])()}return e}function y(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,v({type:c.REPLACE})}function g(){var e,t=m;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[l.a]=function(){return this},e}return v({type:c.INIT}),(r={dispatch:v,subscribe:m,getState:h,replaceReducer:y})[l.a]=g,r}function d(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function p(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var a,i=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:c.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:c.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+c.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){a=e}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},l=0;l<i.length;l++){var u=i[l],c=n[u],s=e[u],f=c(s,t);if(void 0===f){var p=d(u,t);throw new Error(p)}o[u]=f,r=r||f!==s}return(r=r||i.length!==Object.keys(e).length)?o:e}}function h(e,t){return function(){return t(e.apply(this,arguments))}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=t.map((function(e){return e(o)}));return y({},n,{dispatch:r=g.apply(void 0,a)(n.dispatch)})}}}function w(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}var E=w();E.withExtraArgument=w;var S=E,k=n(12),x=n.n(k),O=function(e){return{type:"RECEIVE_CURRENT_USER",currentUser:e}},C=function(e){return{type:"RECEIVE_SESSION_ERRORS",errors:e}},P=function(e){return function(t){return function(e){return $.ajax({method:"POST",url:"/api/users",data:{user:e}})}(e).then((function(e){return t(O(e))}),(function(e){return t(C(e.responseJSON))}))}},_=function(e){return function(t){return function(e){return $.ajax({method:"POST",url:"/api/session",data:{user:e}})}(e).then((function(e){return t(O(e))}),(function(e){return t(C(e.responseJSON))}))}},N=function(){return function(e){return $.ajax({method:"DELETE",url:"/api/session"}).then((function(t){return e({type:"LOGOUT_CURRENT_USER"})}),(function(t){return e(C(t.responseJSON))}))}},T=p({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;Object.freeze(e);var n=Object.assign({},e);switch(t.type){case"RECEIVE_CURRENT_USER":return n[t.currentUser.id]=t.currentUser;default:return e}}}),R=Object.freeze({id:null}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_CURRENT_USER":return{id:t.currentUser.id};case"LOGOUT_CURRENT_USER":return R;default:return e}},L=p({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_SESSION_ERRORS":return t.errors;case"RECEIVE_CURRENT_USER":case"REMOVE_SESSION_ERRORS":return[];default:return e}}}),M=p({entities:T,session:j,errors:L}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f(M,e,b(S,x.a))},z=(n(2),o.a.createContext(null));var I=function(e){e()},A={notify:function(){}};function U(){var e=I,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var F=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=A,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=U())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=A)},e}();var B=function(e){var t=e.store,n=e.context,a=e.children,i=Object(r.useMemo)((function(){var e=new F(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),l=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){var e=i.subscription;return e.trySubscribe(),l!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,l]);var u=n||z;return o.a.createElement(u.Provider,{value:i},a)};function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var H=n(3),Q=n.n(H),q=n(5),K="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,Y=[],G=[null,null];function X(e,t){var n=e[1];return[t.payload,n+1]}function J(e,t,n){K((function(){return e.apply(void 0,t)}),n)}function Z(e,t,n,r,o,a,i){e.current=r,t.current=o,n.current=!1,a.current&&(a.current=null,i())}function ee(e,t,n,r,o,a,i,l,u,c){if(e){var s=!1,f=null,d=function(){if(!s){var e,n,d=t.getState();try{e=r(d,o.current)}catch(e){n=e,f=e}n||(f=null),e===a.current?i.current||u():(a.current=e,l.current=e,i.current=!0,c({type:"STORE_UPDATED",payload:{error:n}}))}};n.onStateChange=d,n.trySubscribe(),d();return function(){if(s=!0,n.tryUnsubscribe(),n.onStateChange=null,f)throw f}}}var te=function(){return[null,0]};function ne(e,t){void 0===t&&(t={});var n=t,a=n.getDisplayName,i=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,l=n.methodName,u=void 0===l?"connectAdvanced":l,c=n.renderCountProp,s=void 0===c?void 0:c,f=n.shouldHandleStateChanges,d=void 0===f||f,p=n.storeKey,h=void 0===p?"store":p,m=(n.withRef,n.forwardRef),v=void 0!==m&&m,y=n.context,g=void 0===y?z:y,b=W(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),w=g;return function(t){var n=t.displayName||t.name||"Component",a=i(n),l=V({},b,{getDisplayName:i,methodName:u,renderCountProp:s,shouldHandleStateChanges:d,storeKey:h,displayName:a,wrappedComponentName:n,WrappedComponent:t}),c=b.pure;var f=c?r.useMemo:function(e){return e()};function p(n){var a=Object(r.useMemo)((function(){var e=n.reactReduxForwardedRef,t=W(n,["reactReduxForwardedRef"]);return[n.context,e,t]}),[n]),i=a[0],u=a[1],c=a[2],s=Object(r.useMemo)((function(){return i&&i.Consumer&&Object(q.isContextConsumer)(o.a.createElement(i.Consumer,null))?i:w}),[i,w]),p=Object(r.useContext)(s),h=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(p)&&Boolean(p.store);var m=h?n.store:p.store,v=Object(r.useMemo)((function(){return function(t){return e(t.dispatch,l)}(m)}),[m]),y=Object(r.useMemo)((function(){if(!d)return G;var e=new F(m,h?null:p.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[m,h,p]),g=y[0],b=y[1],E=Object(r.useMemo)((function(){return h?p:V({},p,{subscription:g})}),[h,p,g]),S=Object(r.useReducer)(X,Y,te),k=S[0][0],x=S[1];if(k&&k.error)throw k.error;var O=Object(r.useRef)(),C=Object(r.useRef)(c),P=Object(r.useRef)(),_=Object(r.useRef)(!1),N=f((function(){return P.current&&c===C.current?P.current:v(m.getState(),c)}),[m,k,c]);J(Z,[C,O,_,c,N,P,b]),J(ee,[d,m,g,v,C,O,_,P,b,x],[m,g,v]);var T=Object(r.useMemo)((function(){return o.a.createElement(t,V({},N,{ref:u}))}),[u,t,N]);return Object(r.useMemo)((function(){return d?o.a.createElement(s.Provider,{value:E},T):T}),[s,T,E])}var m=c?o.a.memo(p):p;if(m.WrappedComponent=t,m.displayName=a,v){var y=o.a.forwardRef((function(e,t){return o.a.createElement(m,V({},e,{reactReduxForwardedRef:t}))}));return y.displayName=a,y.WrappedComponent=t,Q()(y,t)}return Q()(m,t)}}function re(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function oe(e,t){if(re(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!re(e[n[o]],t[n[o]]))return!1;return!0}function ae(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function ie(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function le(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=ie(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=ie(o),o=r(t,n)),o},r}}var ue=[function(e){return"function"==typeof e?le(e):void 0},function(e){return e?void 0:ae((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?ae((function(t){return function(e,t){if("function"==typeof e)return h(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=h(o,t))}return n}(e,t)})):void 0}];var ce=[function(e){return"function"==typeof e?le(e):void 0},function(e){return e?void 0:ae((function(){return{}}))}];function se(e,t,n){return V({},n,e,t)}var fe=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,a=n.areMergedPropsEqual,i=!1;return function(t,n,l){var u=e(t,n,l);return i?o&&a(u,r)||(r=u):(i=!0,r=u),r}}}(e):void 0},function(e){return e?void 0:function(){return se}}];function de(e,t,n,r){return function(o,a){return n(e(o,a),t(r,a),a)}}function pe(e,t,n,r,o){var a,i,l,u,c,s=o.areStatesEqual,f=o.areOwnPropsEqual,d=o.areStatePropsEqual,p=!1;function h(o,p){var h,m,v=!f(p,i),y=!s(o,a);return a=o,i=p,v&&y?(l=e(a,i),t.dependsOnOwnProps&&(u=t(r,i)),c=n(l,u,i)):v?(e.dependsOnOwnProps&&(l=e(a,i)),t.dependsOnOwnProps&&(u=t(r,i)),c=n(l,u,i)):y?(h=e(a,i),m=!d(h,l),l=h,m&&(c=n(l,u,i)),c):c}return function(o,s){return p?h(o,s):(l=e(a=o,i=s),u=t(r,i),c=n(l,u,i),p=!0,c)}}function he(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,a=W(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=n(e,a),l=r(e,a),u=o(e,a);return(a.pure?pe:de)(i,l,u,e,a)}function me(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function ve(e,t){return e===t}function ye(e){var t=void 0===e?{}:e,n=t.connectHOC,r=void 0===n?ne:n,o=t.mapStateToPropsFactories,a=void 0===o?ce:o,i=t.mapDispatchToPropsFactories,l=void 0===i?ue:i,u=t.mergePropsFactories,c=void 0===u?fe:u,s=t.selectorFactory,f=void 0===s?he:s;return function(e,t,n,o){void 0===o&&(o={});var i=o,u=i.pure,s=void 0===u||u,d=i.areStatesEqual,p=void 0===d?ve:d,h=i.areOwnPropsEqual,m=void 0===h?oe:h,v=i.areStatePropsEqual,y=void 0===v?oe:v,g=i.areMergedPropsEqual,b=void 0===g?oe:g,w=W(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),E=me(e,a,"mapStateToProps"),S=me(t,l,"mapDispatchToProps"),k=me(n,c,"mergeProps");return r(f,V({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:E,initMapDispatchToProps:S,initMergeProps:k,pure:s,areStatesEqual:p,areOwnPropsEqual:m,areStatePropsEqual:y,areMergedPropsEqual:b},w))}}var ge=ye();var be;be=a.unstable_batchedUpdates,I=be;var we=n(1);function Ee(e){return"/"===e.charAt(0)}function Se(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var ke=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],a=e&&Ee(e),i=t&&Ee(t),l=a||i;if(e&&Ee(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var c=0,s=o.length;s>=0;s--){var f=o[s];"."===f?Se(o,s):".."===f?(Se(o,s),c++):c&&(Se(o,s),c--)}if(!l)for(;c--;c)o.unshift("..");!l||""===o[0]||o[0]&&Ee(o[0])||o.unshift("");var d=o.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d};function xe(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}var Oe=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every((function(t,r){return e(t,n[r])}));if("object"==typeof t||"object"==typeof n){var r=xe(t),o=xe(n);return r!==t||o!==n?e(r,o):Object.keys(Object.assign({},t,n)).every((function(r){return e(t[r],n[r])}))}return!1};var Ce=function(e,t){if(!e)throw new Error("Invariant failed")};function Pe(e){return"/"===e.charAt(0)?e:"/"+e}function _e(e){return"/"===e.charAt(0)?e.substr(1):e}function Ne(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function Te(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function Re(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function je(e,t,n,r){var o;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=V({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=ke(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function Le(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var Me=!("undefined"==typeof window||!window.document||!window.document.createElement);function De(e,t){t(window.confirm(e))}function ze(){try{return window.history.state||{}}catch(e){return{}}}function Ie(e){void 0===e&&(e={}),Me||Ce(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),a=e,i=a.forceRefresh,l=void 0!==i&&i,u=a.getUserConfirmation,c=void 0===u?De:u,s=a.keyLength,f=void 0===s?6:s,d=e.basename?Te(Pe(e.basename)):"";function p(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return d&&(a=Ne(a,d)),je(a,r,n)}function h(){return Math.random().toString(36).substr(2,f)}var m=Le();function v(e){V(_,e),_.length=n.length,m.notifyListeners(_.location,_.action)}function y(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||w(p(e.state))}function g(){w(p(ze()))}var b=!1;function w(e){if(b)b=!1,v();else{m.confirmTransitionTo(e,"POP",c,(function(t){t?v({action:"POP",location:e}):function(e){var t=_.location,n=S.indexOf(t.key);-1===n&&(n=0);var r=S.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(b=!0,x(o))}(e)}))}}var E=p(ze()),S=[E.key];function k(e){return d+Re(e)}function x(e){n.go(e)}var O=0;function C(e){1===(O+=e)&&1===e?(window.addEventListener("popstate",y),o&&window.addEventListener("hashchange",g)):0===O&&(window.removeEventListener("popstate",y),o&&window.removeEventListener("hashchange",g))}var P=!1;var _={length:n.length,action:"POP",location:E,createHref:k,push:function(e,t){var o=je(e,t,h(),_.location);m.confirmTransitionTo(o,"PUSH",c,(function(e){if(e){var t=k(o),a=o.key,i=o.state;if(r)if(n.pushState({key:a,state:i},null,t),l)window.location.href=t;else{var u=S.indexOf(_.location.key),c=S.slice(0,u+1);c.push(o.key),S=c,v({action:"PUSH",location:o})}else window.location.href=t}}))},replace:function(e,t){var o=je(e,t,h(),_.location);m.confirmTransitionTo(o,"REPLACE",c,(function(e){if(e){var t=k(o),a=o.key,i=o.state;if(r)if(n.replaceState({key:a,state:i},null,t),l)window.location.replace(t);else{var u=S.indexOf(_.location.key);-1!==u&&(S[u]=o.key),v({action:"REPLACE",location:o})}else window.location.replace(t)}}))},go:x,goBack:function(){x(-1)},goForward:function(){x(1)},block:function(e){void 0===e&&(e=!1);var t=m.setPrompt(e);return P||(C(1),P=!0),function(){return P&&(P=!1,C(-1)),t()}},listen:function(e){var t=m.appendListener(e);return C(1),function(){C(-1),t()}}};return _}var Ae={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+_e(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:_e,decodePath:Pe},slash:{encodePath:Pe,decodePath:Pe}};function Ue(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function Fe(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function $e(e){window.location.replace(Ue(window.location.href)+"#"+e)}function Be(e){void 0===e&&(e={}),Me||Ce(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),r=n.getUserConfirmation,o=void 0===r?De:r,a=n.hashType,i=void 0===a?"slash":a,l=e.basename?Te(Pe(e.basename)):"",u=Ae[i],c=u.encodePath,s=u.decodePath;function f(){var e=s(Fe());return l&&(e=Ne(e,l)),je(e)}var d=Le();function p(e){V(O,e),O.length=t.length,d.notifyListeners(O.location,O.action)}var h=!1,m=null;function v(){var e,t,n=Fe(),r=c(n);if(n!==r)$e(r);else{var a=f(),i=O.location;if(!h&&(t=a,(e=i).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(m===Re(a))return;m=null,function(e){if(h)h=!1,p();else{d.confirmTransitionTo(e,"POP",o,(function(t){t?p({action:"POP",location:e}):function(e){var t=O.location,n=w.lastIndexOf(Re(t));-1===n&&(n=0);var r=w.lastIndexOf(Re(e));-1===r&&(r=0);var o=n-r;o&&(h=!0,E(o))}(e)}))}}(a)}}var y=Fe(),g=c(y);y!==g&&$e(g);var b=f(),w=[Re(b)];function E(e){t.go(e)}var S=0;function k(e){1===(S+=e)&&1===e?window.addEventListener("hashchange",v):0===S&&window.removeEventListener("hashchange",v)}var x=!1;var O={length:t.length,action:"POP",location:b,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=Ue(window.location.href)),n+"#"+c(l+Re(e))},push:function(e,t){var n=je(e,void 0,void 0,O.location);d.confirmTransitionTo(n,"PUSH",o,(function(e){if(e){var t=Re(n),r=c(l+t);if(Fe()!==r){m=t,function(e){window.location.hash=e}(r);var o=w.lastIndexOf(Re(O.location)),a=w.slice(0,o+1);a.push(t),w=a,p({action:"PUSH",location:n})}else p()}}))},replace:function(e,t){var n=je(e,void 0,void 0,O.location);d.confirmTransitionTo(n,"REPLACE",o,(function(e){if(e){var t=Re(n),r=c(l+t);Fe()!==r&&(m=t,$e(r));var o=w.indexOf(Re(O.location));-1!==o&&(w[o]=t),p({action:"REPLACE",location:n})}}))},go:E,goBack:function(){E(-1)},goForward:function(){E(1)},block:function(e){void 0===e&&(e=!1);var t=d.setPrompt(e);return x||(k(1),x=!0),function(){return x&&(x=!1,k(-1)),t()}},listen:function(e){var t=d.appendListener(e);return k(1),function(){k(-1),t()}}};return O}function Ve(e,t,n){return Math.min(Math.max(e,t),n)}function We(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,a=t.initialIndex,i=void 0===a?0:a,l=t.keyLength,u=void 0===l?6:l,c=Le();function s(e){V(v,e),v.length=v.entries.length,c.notifyListeners(v.location,v.action)}function f(){return Math.random().toString(36).substr(2,u)}var d=Ve(i,0,o.length-1),p=o.map((function(e){return je(e,void 0,"string"==typeof e?f():e.key||f())})),h=Re;function m(e){var t=Ve(v.index+e,0,v.entries.length-1),r=v.entries[t];c.confirmTransitionTo(r,"POP",n,(function(e){e?s({action:"POP",location:r,index:t}):s()}))}var v={length:p.length,action:"POP",location:p[d],index:d,entries:p,createHref:h,push:function(e,t){var r=je(e,t,f(),v.location);c.confirmTransitionTo(r,"PUSH",n,(function(e){if(e){var t=v.index+1,n=v.entries.slice(0);n.length>t?n.splice(t,n.length-t,r):n.push(r),s({action:"PUSH",location:r,index:t,entries:n})}}))},replace:function(e,t){var r=je(e,t,f(),v.location);c.confirmTransitionTo(r,"REPLACE",n,(function(e){e&&(v.entries[v.index]=r,s({action:"REPLACE",location:r}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(e){var t=v.index+e;return t>=0&&t<v.entries.length},block:function(e){return void 0===e&&(e=!1),c.setPrompt(e)},listen:function(e){return c.appendListener(e)}};return v}var He=n(9),Qe=n(10),qe=n.n(Qe),Ke=function(e){var t=Object(He.a)();return t.displayName=e,t}("Router-History"),Ye=function(e){var t=Object(He.a)();return t.displayName=e,t}("Router"),Ge=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}Object(we.a)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.a.createElement(Ye.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.a.createElement(Ke.Provider,{children:this.props.children||null,value:this.props.history}))},t}(o.a.Component);o.a.Component;var Xe=function(e){function t(){return e.apply(this,arguments)||this}Object(we.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},t}(o.a.Component);var Je={},Ze=0;function et(e,t){return void 0===e&&(e="/"),void 0===t&&(t={}),"/"===e?e:function(e){if(Je[e])return Je[e];var t=qe.a.compile(e);return Ze<1e4&&(Je[e]=t,Ze++),t}(e)(t,{pretty:!0})}function tt(e){var t=e.computedMatch,n=e.to,r=e.push,a=void 0!==r&&r;return o.a.createElement(Ye.Consumer,null,(function(e){e||Ce(!1);var r=e.history,i=e.staticContext,l=a?r.push:r.replace,u=je(t?"string"==typeof n?et(n,t.params):V({},n,{pathname:et(n.pathname,t.params)}):n);return i?(l(u),null):o.a.createElement(Xe,{onMount:function(){l(u)},onUpdate:function(e,t){var n,r,o=je(t.to);n=o,r=V({},u,{key:o.key}),n.pathname===r.pathname&&n.search===r.search&&n.hash===r.hash&&n.key===r.key&&Oe(n.state,r.state)||l(u)},to:n})}))}var nt={},rt=0;function ot(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,l=void 0!==i&&i,u=n.sensitive,c=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=nt[n]||(nt[n]={});if(r[e])return r[e];var o=[],a={regexp:qe()(e,o,t),keys:o};return rt<1e4&&(r[e]=a,rt++),a}(n,{end:a,strict:l,sensitive:c}),o=r.regexp,i=r.keys,u=o.exec(e);if(!u)return null;var s=u[0],f=u.slice(1),d=e===s;return a&&!d?null:{path:n,url:"/"===n&&""===s?"/":s,isExact:d,params:i.reduce((function(e,t,n){return e[t.name]=f[n],e}),{})}}),null)}var at=function(e){function t(){return e.apply(this,arguments)||this}return Object(we.a)(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(Ye.Consumer,null,(function(t){t||Ce(!1);var n=e.props.location||t.location,r=V({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?ot(n.pathname,e.props):t.match}),a=e.props,i=a.children,l=a.component,u=a.render;return Array.isArray(i)&&0===i.length&&(i=null),o.a.createElement(Ye.Provider,{value:r},r.match?i?"function"==typeof i?i(r):i:l?o.a.createElement(l,r):u?u(r):null:"function"==typeof i?i(r):null)}))},t}(o.a.Component);function it(e){return"/"===e.charAt(0)?e:"/"+e}function lt(e,t){if(!e)return t;var n=it(e);return 0!==t.pathname.indexOf(n)?t:V({},t,{pathname:t.pathname.substr(n.length)})}function ut(e){return"string"==typeof e?e:Re(e)}function ct(e){return function(){Ce(!1)}}function st(){}o.a.Component;var ft=function(e){function t(){return e.apply(this,arguments)||this}return Object(we.a)(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(Ye.Consumer,null,(function(t){t||Ce(!1);var n,r,a=e.props.location||t.location;return o.a.Children.forEach(e.props.children,(function(e){if(null==r&&o.a.isValidElement(e)){n=e;var i=e.props.path||e.props.from;r=i?ot(a.pathname,V({},e.props,{path:i})):t.match}})),r?o.a.cloneElement(n,{location:a,computedMatch:r}):null}))},t}(o.a.Component);function dt(e){var t="withRouter("+(e.displayName||e.name)+")",n=function(t){var n=t.wrappedComponentRef,r=W(t,["wrappedComponentRef"]);return o.a.createElement(Ye.Consumer,null,(function(t){return t||Ce(!1),o.a.createElement(e,V({},r,t,{ref:n}))}))};return n.displayName=t,n.WrappedComponent=e,Q()(n,e)}o.a.useContext;o.a.Component;var pt=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=Be(t.props),t}return Object(we.a)(t,e),t.prototype.render=function(){return o.a.createElement(Ge,{history:this.history,children:this.props.children})},t}(o.a.Component);var ht=function(e,t){return"function"==typeof e?e(t):e},mt=function(e,t){return"string"==typeof e?je(e,null,null,t):e},vt=function(e){return e},yt=o.a.forwardRef;void 0===yt&&(yt=vt);var gt=yt((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,i=W(e,["innerRef","navigate","onClick"]),l=i.target,u=V({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=vt!==yt&&t||n,o.a.createElement("a",u)}));var bt=yt((function(e,t){var n=e.component,r=void 0===n?gt:n,a=e.replace,i=e.to,l=e.innerRef,u=W(e,["component","replace","to","innerRef"]);return o.a.createElement(Ye.Consumer,null,(function(e){e||Ce(!1);var n=e.history,c=mt(ht(i,e.location),e.location),s=c?n.createHref(c):"",f=V({},u,{href:s,navigate:function(){var t=ht(i,e.location);(a?n.replace:n.push)(t)}});return vt!==yt?f.ref=t||l:f.innerRef=l,o.a.createElement(r,f)}))})),wt=function(e){return e},Et=o.a.forwardRef;void 0===Et&&(Et=wt);Et((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,a=e.activeClassName,i=void 0===a?"active":a,l=e.activeStyle,u=e.className,c=e.exact,s=e.isActive,f=e.location,d=e.sensitive,p=e.strict,h=e.style,m=e.to,v=e.innerRef,y=W(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(Ye.Consumer,null,(function(e){e||Ce(!1);var n=f||e.location,a=mt(ht(m,n),n),g=a.pathname,b=g&&g.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),w=b?ot(n.pathname,{path:b,exact:c,sensitive:d,strict:p}):null,E=!!(s?s(w,n):w),S=E?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(u,i):u,k=E?V({},h,{},l):h,x=V({"aria-current":E&&r||null,className:S,style:k,to:a},y);return wt!==Et?x.ref=t||v:x.innerRef=v,o.a.createElement(bt,x)}))}));var St=function(e,t){return{loggedIn:Boolean(e.session.id)}},kt=dt(ge(St)((function(e){var t=e.component,n=e.path,r=e.loggedIn,a=e.exact;return o.a.createElement(at,{path:n,exact:a,render:function(e){return r?o.a.createElement(tt,{to:"/"}):o.a.createElement(t,e)}})}))),xt=(dt(ge(St)((function(e){var t=e.component,n=e.path,r=e.loggedIn,a=e.exact;return o.a.createElement(at,{path:n,exact:a,render:function(e){return r?o.a.createElement(t,e):o.a.createElement(tt,{to:"/login"})}})}))),dt((function(e){var t=e.currentUser,n=e.logout,r=t?o.a.createElement("div",{className:"top-nav-container"},o.a.createElement("div",{className:"left-top-nav"},o.a.createElement("i",{className:"fas fa-bars"}),o.a.createElement(bt,{to:"/"},o.a.createElement("i",{className:"fab fa-youtube"}))),o.a.createElement("div",{className:"center-top-nav"},o.a.createElement("div",{className:"search-bar-container"},o.a.createElement("ul",null,o.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Search"})),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("i",{className:"fas fa-search"}))))),o.a.createElement("div",{className:"right-top-nav-login"},o.a.createElement("div",{className:"right-icon-container-login"},o.a.createElement("ul",null,o.a.createElement("i",{className:"fas fa-video"}))),o.a.createElement("div",{className:"avatar"},o.a.createElement("ul",null,o.a.createElement("i",{className:"fas fa-user"})),o.a.createElement("button",{onClick:function(){return n(t)}},"Log Out")))):o.a.createElement("div",{className:"top-nav-container"},o.a.createElement("div",{className:"left-top-nav"},o.a.createElement("i",{className:"fas fa-bars"}),o.a.createElement(bt,{to:"/"},o.a.createElement("i",{className:"fab fa-youtube"}))),o.a.createElement("div",{className:"center-top-nav"},o.a.createElement("div",{className:"search-bar-container"},o.a.createElement("ul",null,o.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Search"})),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("i",{className:"fas fa-search"}))))),o.a.createElement("div",{className:"right-top-nav"},o.a.createElement("div",{className:"signin-container"},o.a.createElement("ul",null,o.a.createElement("i",{className:"fas fa-user"})),o.a.createElement("ul",null,o.a.createElement(bt,{className:"signin-btn",to:"/login"},"SIGN IN")))));return o.a.createElement("header",null,o.a.createElement("div",{className:"top-nav-bar"},o.a.createElement("ul",{className:"top-nav-links"},o.a.createElement("li",null,r))))}))),Ot=ge((function(e,t){return{currentUser:e.session.id}}),(function(e){return{login:function(t){return e(_(t))},signup:function(t){return e(P(t))},logout:function(t){return e(N())}}}))(xt),Ct=dt((function(e){var t=e.currentUser?o.a.createElement("div",{className:"left-nav-bar"},o.a.createElement("div",{className:"left-group1"},o.a.createElement("div",{className:"left-home"},o.a.createElement("ul",{className:"left-icons"},o.a.createElement("i",{className:"fas fa-home"}),o.a.createElement(bt,{className:"home-link",to:"/"},"Home"))),o.a.createElement("ul",{className:"left-icons"},o.a.createElement("i",{className:"fas fa-book-open"}),o.a.createElement(bt,{className:"library-link",to:"/"},"Library")),o.a.createElement("ul",{className:"left-icons"},o.a.createElement("i",{className:"fas fa-thumbs-up"}),o.a.createElement(bt,{className:"liked-videos-link",to:"/"},"Liked videos")))):o.a.createElement("div",{className:"left-nav-bar"},o.a.createElement("div",{className:"left-group1"},o.a.createElement("ul",{className:"left-icons"},o.a.createElement("i",{className:"fas fa-home"}),o.a.createElement(bt,{className:"home-link",to:"/"},"Home")),o.a.createElement("ul",{className:"left-icons"},o.a.createElement("i",{className:"fas fa-book-open"}),o.a.createElement(bt,{className:"library-link",to:"/"},"Library"))),o.a.createElement("div",{className:"left-group2"},o.a.createElement("ul",null,o.a.createElement("p",null,"Sign in to like videos, comment, and subscribe.")),o.a.createElement("div",{className:"signin-btn-container"},o.a.createElement("ul",{className:"signin-btn"},o.a.createElement("i",{className:"fas fa-user"}),o.a.createElement(bt,{className:"left-signin-link",to:"/login"},"SIGN IN")))));return o.a.createElement("div",null,o.a.createElement("div",null,t))})),Pt=ge((function(e,t){return{currentUser:e.session.id}}),(function(e){return{login:function(t){return e(_(t))},signup:function(t){return e(P(t))},logout:function(t){return e(N())}}}))(Ct);function _t(e){return(_t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Nt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tt(e,t){return(Tt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Rt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Lt(e);if(t){var o=Lt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return jt(this,n)}}function jt(e,t){return!t||"object"!==_t(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Lt(e){return(Lt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Mt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Tt(e,t)}(i,e);var t,n,r,a=Rt(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a.call(this,e)}return t=i,(n=[{key:"render",value:function(){return o.a.createElement("div",{className:"video-main-container"},o.a.createElement("div",{className:"videos-index"},o.a.createElement("div",{className:"video-row"},o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail}))),o.a.createElement("div",{className:"video-row"},o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail}))),o.a.createElement("div",{className:"video-row"},o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail}))),o.a.createElement("div",{className:"video-row"},o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})),o.a.createElement("ul",{className:"video"},o.a.createElement("img",{className:"video-thumbnail",src:window.videothumbnail})))))}}])&&Nt(t.prototype,n),r&&Nt(t,r),i}(o.a.Component);function Dt(e){return(Dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function zt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function It(e,t){return(It=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function At(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Ft(e);if(t){var o=Ft(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ut(this,n)}}function Ut(e,t){return!t||"object"!==Dt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ft(e){return(Ft=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $t=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&It(e,t)}(i,e);var t,n,r,a=At(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a.call(this,e)}return t=i,(n=[{key:"render",value:function(){return o.a.createElement("div",{className:"landing-page"},o.a.createElement(Ot,null),o.a.createElement("div",{className:"main-container"},o.a.createElement(Pt,null),o.a.createElement(Mt,null)))}}])&&zt(t.prototype,n),r&&zt(t,r),i}(o.a.Component);function Bt(e){return(Bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Vt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ht(e,t){return(Ht=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Kt(e);if(t){var o=Kt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return qt(this,n)}}function qt(e,t){return!t||"object"!==Bt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Kt(e){return(Kt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Yt=dt(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ht(e,t)}(i,e);var t,n,r,a=Qt(i);function i(){return Vt(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"renderErrors",value:function(){return o.a.createElement("ul",null,this.props.errors.map((function(e,t){return o.a.createElement("li",{key:"error-".concat(t)},e)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"signup-form-container"},o.a.createElement("h2",null,"Google Logo Placeholder"),o.a.createElement("h2",null,"Create your Google Account"),o.a.createElement("h4",null,"to continue to YouTube"),o.a.createElement("div",{className:"signup-form-box"},this.renderErrors(),o.a.createElement("div",{className:"signup-form"},o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{placeholder:"First Name",type:"text",value:this.props.values.firstname,onChange:this.props.update("firstname")})),o.a.createElement("label",null,o.a.createElement("input",{placeholder:"Last Name",type:"text",value:this.props.values.lastname,onChange:this.props.update("lastname")})),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{type:"text",placeholder:"Your email address",value:this.props.values.email,onChange:this.props.update("email"),className:"login-input"})),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{placeholder:"Password",type:"password",value:this.props.values.password,onChange:this.props.update("password")})),o.a.createElement("label",null,o.a.createElement("input",{placeholder:"Confirm",type:"password",value:this.props.values.confirmPassword,onChange:this.props.update("confirmPassword")})),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement(bt,{to:"/login"},"Sign in instead"),o.a.createElement("div",{onClick:this.props.nextStep,className:"signin-next-button"},"Next")))))}}])&&Wt(t.prototype,n),r&&Wt(t,r),i}(o.a.Component));function Gt(e){return(Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Zt(e,t){return(Zt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function en(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=nn(e);if(t){var o=nn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return tn(this,n)}}function tn(e,t){return!t||"object"!==Gt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function nn(e){return(nn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var rn=dt(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Zt(e,t)}(i,e);var t,n,r,a=en(i);function i(){return Xt(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"renderErrors",value:function(){return o.a.createElement("ul",null,this.props.errors.map((function(e,t){return o.a.createElement("li",{key:"error-".concat(t)},e)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"signup-form-container"},o.a.createElement("h2",null,"Google Logo Placeholder"),o.a.createElement("h2",null,this.props.firstname,", welcome to Google"),o.a.createElement("h4",null,this.props.email),o.a.createElement("div",{className:"signup-form-box"},this.renderErrors(),o.a.createElement("div",{className:"signup-form"},o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{placeholder:"Your birthday",type:"text",value:this.props.birthdate,onChange:this.props.update("birthdate")})),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"gender"},o.a.createElement("input",{placeholder:"Gender",type:"text",value:this.props.gender,onChange:this.props.update("gender")})),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("div",{className:"signin-div",onClick:this.props.prevStep},"Back"),o.a.createElement("button",{className:"signin-next-button"},"Next")))))}}])&&Jt(t.prototype,n),r&&Jt(t,r),i}(o.a.Component));function on(e){return(on="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function an(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ln(e,t){return(ln=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function un(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=fn(e);if(t){var o=fn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return cn(this,n)}}function cn(e,t){return!t||"object"!==on(t)&&"function"!=typeof t?sn(e):t}function sn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fn(e){return(fn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var dn=dt(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ln(e,t)}(i,e);var t,n,r,a=un(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={email:"",password:"",confirmPassword:"",firstname:"",lastname:"",month:"",day:"",year:"",birthdate:"",gender:"",step:1},t.nextStep=t.nextStep.bind(sn(t)),t.prevStep=t.prevStep.bind(sn(t)),t.update=t.update.bind(sn(t)),t.handleSubmit=t.handleSubmit.bind(sn(t)),t}return t=i,(n=[{key:"nextStep",value:function(){var e=this.state.step;this.setState({step:e+1})}},{key:"prevStep",value:function(){var e=this.state.step;this.setState({step:e-1})}},{key:"update",value:function(e){var t=this;return function(n){return t.setState((r={},o=e,a=n.currentTarget.value,o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r));var r,o,a}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Object.assign({},this.state);this.props.signup(t)}},{key:"componentWillUnmount",value:function(){this.props.removeSessionErrors()}},{key:"render",value:function(){var e,t=this.state.step,n=this.state,r=n.email,a=n.password,i=(n.confirmPassword,n.firstname),l=n.lastname,u={email:r,password:a,firstname:i,lastname:l,birthdate:n.birthdate,month:n.month,day:n.day,year:n.year,gender:n.gender};switch(t){case 1:e=o.a.createElement(Yt,{nextStep:this.nextStep,update:this.update,values:u,errors:this.props.errors,removeSessionErrors:this.props.removeSessionErrors});break;case 2:e=o.a.createElement(rn,{firstname:i,lastname:l,email:r,password:a,prevStep:this.prevStep,handleSubmit:this.handleSubmit,update:this.update,signup:this.props.signup,errors:this.props.errors,removeSessionErrors:this.props.removeSessionErrors})}return o.a.createElement("form",{onSubmit:this.handleSubmit},e)}}])&&an(t.prototype,n),r&&an(t,r),i}(o.a.Component)),pn=ge((function(e,t){return{errors:e.errors.session,formType:"Sign Up"}}),(function(e){return{signup:function(t){return e(P(t))},removeSessionErrors:function(){return e({type:"REMOVE_SESSION_ERRORS"})}}}))(dn);function hn(e){return(hn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function mn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vn(e,t){return(vn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function yn(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=wn(e);if(t){var o=wn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return gn(this,n)}}function gn(e,t){return!t||"object"!==hn(t)&&"function"!=typeof t?bn(e):t}function bn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wn(e){return(wn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var En=dt(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&vn(e,t)}(i,e);var t,n,r,a=yn(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).guestLogin=t.guestLogin.bind(bn(t)),t}return t=i,(n=[{key:"guestLogin",value:function(e){e.preventDefault(),this.props.login({email:"guest@email.com",password:"guestpassword"})}},{key:"renderErrors",value:function(){return o.a.createElement("ul",null,this.props.errors.map((function(e,t){return o.a.createElement("li",{key:"error-".concat(t)},e)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"login-form-one-container"},o.a.createElement("div",{className:"login-form-one-top"},o.a.createElement("img",{className:"google-logo",src:window.logo}),o.a.createElement("h1",{className:"signin-words"},"Sign in"),o.a.createElement("h4",{className:"signin-words2"},"to continue to YouTube")),o.a.createElement("div",{className:"login-form-one-main"},o.a.createElement("div",{className:"login-form-one-input"},o.a.createElement("label",{className:"login-form-one-email-container"},o.a.createElement("input",{className:"login-form-one-email",placeholder:"Email",type:"text",value:this.props.values.email,onChange:this.props.update("email")})),o.a.createElement("div",{className:"login-form-one-errors"},this.renderErrors())),o.a.createElement("div",{className:"guest-login-button-container"},o.a.createElement("button",{className:"guest-login-button",onClick:this.guestLogin},"Guest Login")),o.a.createElement("div",{className:"login-form-one-bottom-buttons"},o.a.createElement("span",{className:"login-form-one-button"},o.a.createElement(bt,{className:"create-account-button",to:"/signup"},"Create account"),o.a.createElement("div",{className:"login-next-button-container"},o.a.createElement("div",{className:"login-next-button",onClick:this.props.nextStep},"Next"))))))}}])&&mn(t.prototype,n),r&&mn(t,r),i}(o.a.Component));function Sn(e){return(Sn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function kn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function On(e,t){return(On=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Cn(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_n(e);if(t){var o=_n(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Pn(this,n)}}function Pn(e,t){return!t||"object"!==Sn(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _n(e){return(_n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Nn=dt(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&On(e,t)}(i,e);var t,n,r,a=Cn(i);function i(){return kn(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"renderErrors",value:function(){return o.a.createElement("ul",null,this.props.errors.map((function(e,t){return o.a.createElement("li",{key:"error-".concat(t)},e)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"login-form-two-container"},o.a.createElement("div",{className:"login-form-two-top"},o.a.createElement("img",{className:"google-logo",src:window.logo}),o.a.createElement("h1",null," Hi ",this.props.firstname),o.a.createElement("h4",null,this.props.email)),o.a.createElement("div",{className:"login-form-two-main"},o.a.createElement("div",{className:"login-form-two-input"},o.a.createElement("div",{className:"signup-form"},o.a.createElement("label",{className:"login-form-two-container"},o.a.createElement("input",{className:"login-form-two-password",placeholder:"Enter your password",type:"password",value:this.props.password,onChange:this.props.update("password")})),o.a.createElement("div",{className:"login-form-two-errors"},this.renderErrors())),o.a.createElement("span",null,o.a.createElement("button",null,"Forgot password?"),o.a.createElement("button",{className:"login-next-button"},"Next")))))}}])&&xn(t.prototype,n),r&&xn(t,r),i}(o.a.Component));function Tn(e){return(Tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Rn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jn(e,t){return(jn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ln(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=zn(e);if(t){var o=zn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Mn(this,n)}}function Mn(e,t){return!t||"object"!==Tn(t)&&"function"!=typeof t?Dn(e):t}function Dn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zn(e){return(zn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var In=dt(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jn(e,t)}(i,e);var t,n,r,a=Ln(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={email:"",password:"",step:1},t.nextStep=t.nextStep.bind(Dn(t)),t.prevStep=t.prevStep.bind(Dn(t)),t.update=t.update.bind(Dn(t)),t.handleSubmit=t.handleSubmit.bind(Dn(t)),t}return t=i,(n=[{key:"nextStep",value:function(){var e=this.state.step;this.setState({step:e+1})}},{key:"prevStep",value:function(){var e=this.state.step;this.setState({step:e-1})}},{key:"update",value:function(e){var t=this;return function(n){return t.setState((r={},o=e,a=n.currentTarget.value,o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r));var r,o,a}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Object.assign({},this.state);this.props.login(t)}},{key:"componentWillUnmount",value:function(){this.props.removeSessionErrors()}},{key:"render",value:function(){var e,t=this.state.step,n=this.state,r=n.email,a=n.password,i={email:r,password:a};switch(t){case 1:e=o.a.createElement(En,{nextStep:this.nextStep,update:this.update,values:i,errors:this.props.errors,login:this.props.login,removeSessionErrors:this.props.removeSessionErrors});break;case 2:e=o.a.createElement(Nn,{email:r,password:a,prevStep:this.prevStep,update:this.update,login:this.props.login,errors:this.props.errors,removeSessionErrors:this.props.removeSessionErrors})}return o.a.createElement("form",{onSubmit:this.handleSubmit},e)}}])&&Rn(t.prototype,n),r&&Rn(t,r),i}(o.a.Component)),An=ge((function(e,t){return{errors:e.errors.session,formType:"Sign in"}}),(function(e){return{login:function(t){return e(_(t))},removeSessionErrors:function(){return e({type:"REMOVE_SESSION_ERRORS"})}}}))(In),Un=function(){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement(at,{exact:!0,path:"/",component:$t})),o.a.createElement(ft,null,o.a.createElement(kt,{exact:!0,path:"/login",component:An}),o.a.createElement(kt,{exact:!0,path:"/signup",component:pn})))},Fn=function(e){var t=e.store;return o.a.createElement(B,{store:t},o.a.createElement(pt,null,o.a.createElement(Un,null)))};document.addEventListener("DOMContentLoaded",(function(){var e,t,n,r;if(window.currentUser){var a=window.currentUser,l=a.id,u={entities:{users:(t={},n=l,r=a,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)},session:{id:l}};e=D(u),delete window.currentUser}else e=D();var c=document.getElementById("root");window.getState=e.getState,window.dispatch=e.dispatch,i.a.render(o.a.createElement(Fn,{store:e}),c)}))}]);
//# sourceMappingURL=bundle.js.map