(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("deque", [], factory);
	else if(typeof exports === 'object')
		exports["deque"] = factory();
	else
		root["deque"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createHierarchicalMenu = exports.createMultirange = exports.tables = exports.configureFormValidation = exports.createProgressBar = exports.createTabpanel = exports.createSlider = exports.createMenu = exports.createTree = exports.createRadioGroup = exports.checkbox = exports.button = exports.initializeLink = exports.createDialogTooltip = exports.createTooltip = exports.createExpander = exports.createDialog = exports.createPredictiveText = exports.createAlert = undefined;
	
	var _index = __webpack_require__(33);
	
	var content = _interopRequireWildcard(_index);
	
	__webpack_require__(95);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// so, this is a big pain in the butt, but we need a separate entry
	// for the drop-in library (webpack-compiled stuff in output/)
	// and for the module library (babel-compiled stuff in lib/)
	// because of the way the CSS works.
	
	// webpack wants us to import the LESS into our javascript, as we
	// do above - but if we do this in babel, it craps out in any
	// project importing it, since the LESS file is no longer available.
	
	// so this file is an additional abstraction that's here to allow
	// webpack to include what it needs without corrupting the modular
	// library build.
	var createAlert = exports.createAlert = content.createAlert;
	var createPredictiveText = exports.createPredictiveText = content.createPredictiveText;
	var createDialog = exports.createDialog = content.createDialog;
	var createExpander = exports.createExpander = content.createExpander;
	var createTooltip = exports.createTooltip = content.createTooltip;
	var createDialogTooltip = exports.createDialogTooltip = content.createDialogTooltip;
	var initializeLink = exports.initializeLink = content.initializeLink;
	var button = exports.button = content.button;
	var checkbox = exports.checkbox = content.checkbox;
	var createRadioGroup = exports.createRadioGroup = content.createRadioGroup;
	var createTree = exports.createTree = content.createTree;
	var createMenu = exports.createMenu = content.createMenu;
	var createSlider = exports.createSlider = content.createSlider;
	var createTabpanel = exports.createTabpanel = content.createTabpanel;
	var createProgressBar = exports.createProgressBar = content.createProgressBar;
	var configureFormValidation = exports.configureFormValidation = content.configureFormValidation;
	var tables = exports.tables = content.tables;
	var createMultirange = exports.createMultirange = content.createMultirange;
	var createHierarchicalMenu = exports.createHierarchicalMenu = content.createHierarchicalMenu;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tables = exports.createHierarchicalMenu = exports.createSlider = exports.configureFormValidation = exports.createProgressBar = exports.createTabpanel = exports.createMultirange = exports.createMenu = exports.createTree = exports.createRadioGroup = exports.checkbox = exports.button = exports.initializeLink = exports.createDialogTooltip = exports.createTooltip = exports.createExpander = exports.createDialog = exports.createPredictiveText = exports.createAlert = undefined;
	
	var _alert = __webpack_require__(34);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _dialog = __webpack_require__(35);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _tooltip = __webpack_require__(41);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _tooltipDialog = __webpack_require__(45);
	
	var _tooltipDialog2 = _interopRequireDefault(_tooltipDialog);
	
	var _link = __webpack_require__(46);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _button = __webpack_require__(47);
	
	var button = _interopRequireWildcard(_button);
	
	var _checkbox = __webpack_require__(48);
	
	var checkbox = _interopRequireWildcard(_checkbox);
	
	var _radio = __webpack_require__(49);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _tree = __webpack_require__(50);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _menu = __webpack_require__(55);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _multirange = __webpack_require__(67);
	
	var _multirange2 = _interopRequireDefault(_multirange);
	
	var _predictiveText = __webpack_require__(69);
	
	var _predictiveText2 = _interopRequireDefault(_predictiveText);
	
	var _tabpanel = __webpack_require__(73);
	
	var _tabpanel2 = _interopRequireDefault(_tabpanel);
	
	var _progressBar = __webpack_require__(76);
	
	var _progressBar2 = _interopRequireDefault(_progressBar);
	
	var _expander = __webpack_require__(77);
	
	var _expander2 = _interopRequireDefault(_expander);
	
	var _formValidation = __webpack_require__(80);
	
	var _formValidation2 = _interopRequireDefault(_formValidation);
	
	var _sortableTable = __webpack_require__(89);
	
	var _sortableTable2 = _interopRequireDefault(_sortableTable);
	
	var _collapsingTable = __webpack_require__(90);
	
	var collapsingTable = _interopRequireWildcard(_collapsingTable);
	
	var _slider = __webpack_require__(91);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _hierarchicalMenu = __webpack_require__(92);
	
	var _hierarchicalMenu2 = _interopRequireDefault(_hierarchicalMenu);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!('remove' in Element.prototype)) {
	  Element.prototype.remove = function () {
	    if (this.parentNode) {
	      this.parentNode.removeChild(this);
	    }
	  };
	}
	
	var tables = {
	  createSortableTable: _sortableTable2.default,
	  makeTableResponsive: collapsingTable.makeTableResponsive
	};
	
	exports.createAlert = _alert2.default;
	exports.createPredictiveText = _predictiveText2.default;
	exports.createDialog = _dialog2.default;
	exports.createExpander = _expander2.default;
	exports.createTooltip = _tooltip2.default;
	exports.createDialogTooltip = _tooltipDialog2.default;
	exports.initializeLink = _link2.default;
	exports.button = button;
	exports.checkbox = checkbox;
	exports.createRadioGroup = _radio2.default;
	exports.createTree = _tree2.default;
	exports.createMenu = _menu2.default;
	exports.createMultirange = _multirange2.default;
	exports.createTabpanel = _tabpanel2.default;
	exports.createProgressBar = _progressBar2.default;
	exports.configureFormValidation = _formValidation2.default;
	exports.createSlider = _slider2.default;
	exports.createHierarchicalMenu = _hierarchicalMenu2.default;
	exports.tables = tables;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createAlert;
	/*
	To Do:
	
	- move the code that adds role="alert" and other aria-live
	properties into this file, so that it's not part of the
	page-specific instantiation script.
	- move the code that allows for auto-removal of the alert
	message into this file; let it be a parameter in the
	call to the function
	*/
	
	/* @alert */
	function createAlert(message) {
	  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var timeout = arguments[2];
	
	
	  var output = document.createElement('div');
	
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	
	  output.innerHTML = message;
	  if (timeout) {
	    setTimeout(function () {
	      if (output.parentElement) {
	        output.remove();
	      }
	    }, timeout);
	  }
	
	  return output;
	}
	
	function createHTMLAlert(element, alertRegion, timeout) {
	  //var alertBox = alertRegion.querySelector('#'+id);
	  //alertBox.classList.add('deque-show-block');
	
	  //eslint-disable-next-line no-console
	  //console.log(element);
	  //eslint-disable-next-line no-console
	  //console.log(alertRegion);
	  //eslint-disable-next-line no-console
	  //console.log(timeout);
	
	  clearAlerts(alertRegion);
	
	  //eslint-disable-next-line no-console
	  if (element.getAttribute('data-id')) {
	    var alertBox = '<div  id="' + element.getAttribute('data-id') + '" class="' + element.getAttribute('data-reference-class') + '">' + element.getAttribute('data-html') + '</div>';
	    document.getElementById('deque-alert').innerHTML += alertBox;
	  }
	
	  var activeElementList = alertRegion.querySelectorAll('div:not(.dequ-hidden)');
	  if (activeElementList) {
	    if (activeElementList.length > 0) {
	      [].slice.call(activeElementList).forEach(function (eachChildElement) {
	        if (eachChildElement.getAttribute('data-msg')) {
	          eachChildElement.innerHTML = eachChildElement.getAttribute('data-msg');
	        }
	        //eslint-disable-next-line no-console
	        //console.log(eachChildElement.innerHTML);
	      });
	    }
	  }
	
	  if (timeout) {
	    setTimeout(function () {
	      //alertBox.classList.add('deque-hidden');
	      //alertBox.classList.remove('deque-show-block');
	      //document.getElementById('deque-alert').innerHTML = '';
	
	      //document.getElementById(element.getAttribute('data-id')).classList.add('deque-hidden');
	      //document.getElementById(element.getAttribute('data-id')).classList.remove('deque-show-block');
	
	      var activeElementList = alertRegion.querySelectorAll('div:not(.dequ-hidden)');
	      if (activeElementList) {
	        if (activeElementList.length > 0) {
	          [].slice.call(activeElementList).forEach(function (eachChildElement) {
	            if (eachChildElement.getAttribute('data-msg')) {
	              eachChildElement.innerHTML = eachChildElement.getAttribute('data-msg');
	            }
	            eachChildElement.classList.add('deque-hidden');
	            eachChildElement.classList.remove('deque-show-block');
	            eachChildElement.innerHTML = '';
	            //eslint-disable-next-line no-console
	            //console.log(eachChildElement.innerHTML);
	          });
	        }
	      }
	    }, timeout);
	  }
	}
	
	function activateAllAlerts() {
	  var alerts = document.querySelectorAll('.deque-alert-group');
	
	  for (var i = 0; i < alerts.length; i++) {
	    var useTimeoutInput = alerts[i].querySelector('#useTimeoutInput');
	    var buttons = alerts[i].querySelectorAll('.deque-button');
	    var alertRegion = alerts[i].querySelector('.deque-alert');
	    var alertBoxes = alertRegion.querySelectorAll('div');
	
	    for (var k = 0; k < alertBoxes.length; k++) {
	      alertBoxes[k].classList.add('deque-hidden');
	      //eslint-disable-next-line no-console
	      //console.log(alertBoxes[k]);
	      alertBoxes[k].setAttribute('data-msg', alertBoxes[k].innerHTML);
	      alertBoxes[k].innerHTML = '';
	    }
	
	    for (var j = 0; j < buttons.length; j++) {
	      buttons[j].addEventListener('click', showAlertMessage.bind(null, buttons[j], useTimeoutInput, alertRegion));
	    }
	  }
	}
	
	function showAlertMessage(id, useTimeoutInput, alertRegion) {
	  var useTimeout;
	  if (useTimeoutInput) {
	    if (useTimeoutInput.getAttribute('type') == 'checkbox') {
	      useTimeout = useTimeoutInput.checked;
	    } else {
	      useTimeout = true;
	    }
	  } else {
	    useTimeout = false;
	  }
	
	  clearAlerts(alertRegion);
	  if (useTimeout) {
	    var timeoutValue = useTimeoutInput.getAttribute('value');
	    if (timeoutValue) {
	      createHTMLAlert(id, alertRegion, timeoutValue);
	    } else {
	      createHTMLAlert(id, alertRegion, 5000);
	    }
	  } else {
	    createHTMLAlert(id, alertRegion);
	  }
	}
	
	function clearAlerts(alertRegion) {
	  var alertBoxes = alertRegion.querySelectorAll('div');
	  for (var k = 0; k < alertBoxes.length; k++) {
	    alertBoxes[k].classList.remove('deque-show-block');
	    alertBoxes[k].innerHTML = '';
	    alertBoxes[k].classList.add('deque-hidden');
	  }
	  //document.getElementById('deque-alert').innerHTML = '';
	}
	
	activateAllAlerts();
	
	/* end @alert */

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createDialog;
	
	var _focusUtils = __webpack_require__(36);
	
	var _buttonBar = __webpack_require__(39);
	
	var _lightboxScreen = __webpack_require__(40);
	
	/* @dialog */
	
	//import {createContentArea} from './components/contentArea';
	function createDialog(id, role) {
	  var screen = (0, _lightboxScreen.createScreen)();
	  var alert = document.getElementById(id);
	  var dialogButtons = alert.querySelector('.deque-dialog-buttons');
	  var buttons = dialogButtons.querySelectorAll('button');
	  for (var x = 0; x < buttons.length; x++) {
	    buttons[x].addEventListener('click', hide);
	  }
	
	  // close button
	  var xButton = document.createElement('span');
	
	  function setInitialFocus(config) {
	    if (!config.isAlert) {
	      var target = (0, _focusUtils.getFirstFocusableChild)(alert);
	      if (target.classList.contains('deque-dialog-button-close')) {
	        target = (0, _focusUtils.getNextFocusableChild)(alert, target);
	      }
	
	      if (target) {
	        return target.focus();
	      }
	    }
	
	    if (config.isAlert && config.isDetail) {
	      //return content.focus();
	    }
	
	    if (buttonBar.getFirstButton()) {}
	    //return buttonBar.getFirstButton().focus();
	
	
	    //alert.focus();
	    if (alert.querySelector('.deque-dialog-screen').classList.contains('imageMagnifier')) {
	      alert.querySelector('.deque-dialog-content').focus();
	    } else {
	      alert.querySelector('.deque-dialog-screen').focus();
	    }
	
	    alert.querySelector('.deque-dialog-heading').focus();
	  }
	
	  function reset() {
	    clearClasses();
	    screen.clear();
	  }
	
	  function addClasses(classes) {
	    if (classes.isArray) {
	      classes.forEach(function (item) {
	        return alert.classList.add(item);
	      });
	    } else {
	      alert.classList.add(classes);
	    }
	  }
	
	  function clearClasses() {
	    var toRemove = [];
	    for (var i = 0; i < alert.classList.length; i++) {
	      toRemove.push(alert.classList[i]);
	    }
	
	    toRemove.forEach(function (c) {
	      alert.classList.remove(c);
	    });
	
	    addClasses(role);
	  }
	
	  function setRole(role) {
	    alert.setAttribute('role', role);
	  }
	
	  function hideCloseButton() {
	    xButton.classList.add('deque-hidden');
	  }
	
	  function showCloseButton() {
	    xButton.classList.remove('deque-hidden');
	  }
	
	  //var content = createContentArea(alert);
	
	  var returnFocusTo;
	
	  xButton.addEventListener('click', handleEscape);
	
	  var buttonBar = alert.querySelector('.deque-dialog-buttons');
	  buttonBar = (0, _buttonBar.createButtonBar)(buttonBar);
	
	  function show(config) {
	    if (config.classes) {
	      addClasses(config.classes);
	    }
	
	    if (config.describedby) {
	      //alert.setAttribute('aria-describedby', config.describedby);
	    }
	
	    if (config.labelledby) {
	      //alert.setAttribute('aria-labelledby', config.labelledby);
	    }
	
	    if (config.hideCloseButton) {
	      hideCloseButton();
	    } else {
	      showCloseButton();
	    }
	
	    if (config.wrapperID) {
	      document.getElementById(config.wrapperID).setAttribute('aria-hidden', 'true');
	    }
	
	    config.isAlert ? setRole('alertdialog') : setRole('dialog');
	    screen.show();
	    document.body.appendChild(alert);
	    alert.setAttribute('aria-hidden', 'false');
	    alert.classList.remove('deque-hidden');
	    alert.classList.add('deque-show-block');
	
	    if (alert.querySelector('.deque-dialog-screen').classList.contains('imageMagnifier')) {
	      alert.querySelector('.deque-dialog-content').setAttribute('tabindex', '0');
	    } else {
	      alert.querySelector('.deque-dialog-screen').setAttribute('tabindex', '0');
	    }
	
	    setInitialFocus(config);
	  }
	
	  function hide() {
	    if (alert.hasAttribute('aria-describedby')) {
	      alert.removeAttribute('aria-describedby');
	    }
	
	    reset();
	    alert.setAttribute('aria-hidden', 'true');
	    alert.classList.add('deque-hidden');
	
	    returnFocusTo.focus();
	  }
	
	  function handleEscape() {
	    hide();
	  }
	
	  function keyUpHandler(e) {
	    if (e.which === 27) {
	      handleEscape();
	      e.stopPropagation();
	    }
	  }
	
	  alert.addEventListener('keyup', keyUpHandler);
	
	  (0, _focusUtils.initTabTrap)(alert);
	
	  return function (triggerElement, config) {
	    returnFocusTo = triggerElement;
	    // make sure we never end up with a case where a non-alert box is treated
	    // as a simple alert.
	    if (!config.isAlert) {
	      config.isDetail = true;
	    }
	
	    show(config);
	  };
	}
	
	var activateHander = false;
	
	var activateDequeDialogButtonClickHandlers = function activateDequeDialogButtonClickHandlers() {
	  var bodyChilds = document.body.children;
	  //var dequeDialogMessageAlert = document.querySelector('.deque-dialog-message-alert') || null;
	  //var dequeDialogMessage = document.querySelector('.deque-dialog-message') || null;
	  //var dequeDialogAlert = document.querySelector('.deque-dialog-alert') || null;
	  //var dequeDialog = document.querySelector('.deque-dialog') || null;
	  var dequeDialogBackgroundLayer = document.querySelectorAll('.deque-dialog-screen-wrapper') || null;
	  var dequeDialogCloseButton = document.querySelectorAll('.deque-dialog-button-cancel') || null;
	
	  var ariaHiddenList = null;
	  var ariaHiddenFalseList = null;
	  var ariaHiddenTrueList = null;
	  var triggerNode = null;
	
	  var dequeJsAria = 'deque-js-aria';
	  var dequeJsAriaTrue = 'deque-js-aria-true';
	  var dequeJsAriaFalse = 'deque-js-aria-false';
	
	  /*
	  var triggerList = [document.querySelector('#deque-dialog-message-alert-trigger'), document.querySelector('#deque-dialog-message-trigger'), document.querySelector('#deque-dialog-alert-trigger'), document.querySelector('#deque-dialog-trigger')];
	  */
	
	  if (document.querySelector('#deque-dialog-message-alert-trigger') || document.querySelector('#deque-dialog-message-trigger') || document.querySelector('#deque-dialog-alert-trigger') || document.querySelector('#deque-dialog-trigger')) {
	    [].slice.call(document.querySelectorAll('#deque-dialog-message-alert-trigger, #deque-dialog-message-trigger, #deque-dialog-alert-trigger, #deque-dialog-trigger')).forEach(function (triggerBtn) {
	      triggerBtn.addEventListener('click', function (e) {
	        triggerNode = e.currentTarget;
	
	        [].slice.call(bodyChilds).forEach(function (node) {
	          //if(node != dequeDialogMessageAlert && node != dequeDialogMessage && node != dequeDialogAlert && node != dequeDialog && (node.nodeName).toLowerCase() != 'link' && (node.nodeName).toLowerCase() != 'script') {
	          if (node.getAttribute('data-id') != triggerNode.getAttribute('data-id')) {
	            var nodeAriaHidden = node.getAttribute('aria-hidden');
	            if (!(node.classList.contains(dequeJsAria) || node.classList.contains(dequeJsAriaTrue) || node.classList.contains(dequeJsAriaFalse))) {
	              if (!nodeAriaHidden) {
	                node.classList.add(dequeJsAria);
	              } else if (nodeAriaHidden == 'true') {
	                node.classList.add(dequeJsAriaTrue);
	              } else if (nodeAriaHidden == 'false') {
	                node.classList.add(dequeJsAriaFalse);
	              }
	            }
	          }
	          //}
	        });
	
	        var allAriaHiddenList = document.querySelectorAll('.' + dequeJsAria + ', .' + dequeJsAriaTrue + ', .' + dequeJsAriaFalse);
	        [].slice.call(allAriaHiddenList).forEach(function (ariaNode) {
	          ariaNode.setAttribute('aria-hidden', 'true');
	        });
	
	        ariaHiddenList = document.querySelectorAll('.' + dequeJsAria);
	        ariaHiddenFalseList = document.querySelectorAll('.' + dequeJsAriaFalse);
	        ariaHiddenTrueList = document.querySelectorAll('.' + dequeJsAriaTrue);
	      });
	    });
	
	    setTimeout(function () {
	
	      if (document.querySelector('.deque-dialog-screen').classList.contains('imageMagnifier')) {
	        document.querySelector('.deque-dialog-content').setAttribute('tabindex', '0');
	        document.querySelector('.deque-dialog-content').focus();
	      } else {
	        document.querySelector('.deque-dialog-screen').setAttribute('tabindex', '0');
	        document.querySelector('.deque-dialog-screen').focus();
	      }
	    }, 1000);
	  }
	
	  var dequeCloseBtnList = document.querySelectorAll('.deque-dialog-button-close');
	
	  if (dequeCloseBtnList.length > 0) {
	    [].slice.call(dequeCloseBtnList).forEach(function (btn) {
	      btn.addEventListener('click', function () {
	        if (ariaHiddenList) {
	          [].slice.call(ariaHiddenList).forEach(function (ariaNode) {
	            ariaNode.removeAttribute('aria-hidden');
	            ariaNode.classList.remove(dequeJsAria);
	          });
	        }
	
	        if (ariaHiddenFalseList) {
	          [].slice.call(ariaHiddenFalseList).forEach(function (ariaNode) {
	            ariaNode.setAttribute('aria-hidden', 'false');
	            ariaNode.classList.remove(dequeJsAriaFalse);
	          });
	        }
	
	        if (ariaHiddenTrueList) {
	          [].slice.call(ariaHiddenTrueList).forEach(function (ariaNode) {
	            ariaNode.setAttribute('aria-hidden', 'true');
	            ariaNode.classList.remove(dequeJsAriaTrue);
	          });
	        }
	      });
	    });
	  }
	
	  var dequeSubmitBtnList = document.querySelectorAll('.deque-dialog-button-submit');
	  if (dequeSubmitBtnList.length > 0) {
	    [].slice.call(dequeSubmitBtnList).forEach(function (btn) {
	      btn.addEventListener('click', function (e) {
	        e.preventDefault();
	        if (ariaHiddenList) {
	          [].slice.call(ariaHiddenList).forEach(function (ariaNode) {
	            ariaNode.removeAttribute('aria-hidden');
	            ariaNode.classList.remove(dequeJsAria);
	          });
	        }
	
	        if (ariaHiddenFalseList) {
	          [].slice.call(ariaHiddenFalseList).forEach(function (ariaNode) {
	            ariaNode.setAttribute('aria-hidden', 'false');
	            ariaNode.classList.remove(dequeJsAriaFalse);
	          });
	        }
	
	        if (ariaHiddenTrueList) {
	          [].slice.call(ariaHiddenTrueList).forEach(function (ariaNode) {
	            ariaNode.setAttribute('aria-hidden', 'true');
	            ariaNode.classList.remove(dequeJsAriaTrue);
	          });
	        }
	
	        if (dequeActiveDialogButton) {
	          dequeActiveDialogButton.focus();
	        }
	      });
	    });
	  }
	
	  /* closing popup on keypress (ESC, etc.,)  and on clicking of background black layer */
	  var KEY_CONFIG = {
	    27: 'ESC'
	    //16: 'SHIFT'
	  };
	
	  document.body.addEventListener('keydown', function (e) {
	    for (var key in KEY_CONFIG) {
	      if (key == e.keyCode) {
	        inPageCloseAction();
	      }
	    }
	  });
	
	  var inPageCloseAction = function inPageCloseAction(bgLayer) {
	    if (bgLayer) {
	      bgLayer.parentNode.querySelector('.deque-dialog-button-close').click(); /* code to close the popup */
	    } else {
	      [].slice.call(document.querySelectorAll('.deque-dialog-button-close')).forEach(function (btnClose) {
	        btnClose.click();
	      });
	    }
	    [].slice.call(dequeCloseBtnList).forEach(function (closeBtn) {
	      closeBtn.click();
	    });
	
	    if (triggerNode) {
	      triggerNode.focus(); /* code  to retain focus to the trigger button */
	    }
	  };
	
	  if (dequeDialogBackgroundLayer) {
	    [].slice.call(dequeDialogBackgroundLayer).forEach(function (bgLayer) {
	      bgLayer.addEventListener('click', function () {
	        inPageCloseAction(bgLayer);
	      });
	    });
	  }
	
	  if (dequeDialogCloseButton) {
	    [].slice.call(dequeDialogCloseButton).forEach(function (clsBtn) {
	      clsBtn.addEventListener('click', function () {
	        inPageCloseAction(clsBtn);
	      });
	    });
	  }
	};
	
	var dequeActiveDialogButton = null;
	
	/*
	* activateAllDialogs(): This method has 4 types of Dialogs.
	* Simple Dialogs, Dialog Alerts, Dialog Messages and Dialog Messages Alerts
	* 1. Looks for all instances of respective classes and loops them over 
	* with all details like description, headings and stores them in config class.
	* 2. For each button click, it gets the value of aria-control and creates and shows the respective dialog based on the config values.
	*/
	function activateAllDialogs() {
	
	  //activate all simple Dialogs
	  var dialogs = document.querySelectorAll('.deque-dialog');
	
	  for (var i = 0; i < dialogs.length; i++) {
	    dialogs[i].classList.add('deque-hidden');
	
	    var dialogDataId = '_' + dialogs[i].getAttribute('data-id');
	    //dialogs[i].setAttribute('id', dialogs[i].getAttribute('id') + dialogDataId);
	    document.querySelector('button[data-id="' + dialogs[i].getAttribute('data-id') + '"]').setAttribute('aria-controls', dialogs[i].getAttribute('id'));
	
	    var dialogHeadingElement = dialogs[i].querySelector('.deque-dialog-heading');
	    dialogHeadingElement.setAttribute('id', dialogHeadingElement.getAttribute('id') + dialogDataId);
	
	    var dialogDescriptionElement = dialogs[i].querySelector('.deque-dialog-description');
	    dialogDescriptionElement.setAttribute('id', dialogDescriptionElement.getAttribute('id') + dialogDataId);
	
	    var dialogDescription;
	    var dialogLabel;
	
	    var configDialog = {
	      describedby: dialogDescription,
	      labelledby: dialogLabel,
	      isAlert: false
	    };
	
	    var triggerDialog = document.getElementsByClassName('deque-dialog-trigger deque-button');
	
	    triggerDialog[i].addEventListener('click', function (event) {
	      event.preventDefault();
	      dequeActiveDialogButton = triggerDialog[i];
	      var attributeDialog = this.getAttribute('aria-controls');
	      var showDialog = createDialog(attributeDialog, 'deque-dialog');
	
	      var dequeDialogWidgetElement = document.querySelectorAll('.deque-dialog[data-id="' + event.currentTarget.getAttribute('data-id') + '"]')[0];
	      if (dequeDialogWidgetElement.querySelector('.deque-dialog-heading')) {
	        configDialog.describedby = dequeDialogWidgetElement.querySelector('.deque-dialog-heading').getAttribute('id');
	      } else {
	        configDialog.describedby = '';
	      }
	      if (dequeDialogWidgetElement.querySelector('.deque-dialog-description')) {
	        configDialog.labelledby = dequeDialogWidgetElement.querySelector('.deque-dialog-description').getAttribute('id');
	      } else {
	        configDialog.labelledby = '';
	      }
	
	      if (dequeDialogWidgetElement.querySelector('#nameInput')) {
	        var nameInputElement = dequeDialogWidgetElement.querySelector('#nameInput');
	        var labelInputElement = dequeDialogWidgetElement.querySelector('label[for=' + nameInputElement.getAttribute('id') + ']');
	        var modifiedNameInputElementId = nameInputElement.getAttribute('id') + '_' + event.currentTarget.getAttribute('data-id');
	        labelInputElement.setAttribute('for', modifiedNameInputElementId);
	        nameInputElement.setAttribute('id', modifiedNameInputElementId);
	      }
	
	      if (dequeDialogWidgetElement.querySelector('#lastNameInput')) {
	        var lastNameInputElement = dequeDialogWidgetElement.querySelector('#lastNameInput');
	        var labelLastInputElement = dequeDialogWidgetElement.querySelector('label[for=' + lastNameInputElement.getAttribute('id') + ']');
	        var modifiedLastNameInputElementId = lastNameInputElement.getAttribute('id') + '_' + event.currentTarget.getAttribute('data-id');
	        labelLastInputElement.setAttribute('for', modifiedLastNameInputElementId);
	        lastNameInputElement.setAttribute('id', modifiedLastNameInputElementId);
	      }
	
	      showDialog(this, configDialog);
	    });
	  }
	
	  //activate all dialog alerts  
	  var dialogAlerts = document.querySelectorAll('.deque-dialog-alert');
	  for (var j = 0; j < dialogAlerts.length; j++) {
	    dialogAlerts[j].classList.add('deque-hidden');
	
	    dialogDataId = '_' + dialogAlerts[j].getAttribute('data-id');
	    dialogAlerts[j].setAttribute('id', dialogAlerts[j].getAttribute('id') + dialogDataId);
	    document.querySelector('button[data-id="' + dialogAlerts[j].getAttribute('data-id') + '"]').setAttribute('aria-controls', dialogAlerts[j].getAttribute('id'));
	
	    dialogHeadingElement = dialogAlerts[j].querySelector('.deque-dialog-heading');
	    dialogHeadingElement.setAttribute('id', dialogHeadingElement.getAttribute('id') + dialogDataId);
	
	    //dialogDescriptionElement = dialogAlerts[j].querySelector('.deque-dialog-description');
	    //dialogDescriptionElement.setAttribute('id', dialogDescriptionElement.getAttribute('id') + dialogDataId); 
	
	
	    var dialogAlertDescription;
	    var dialogAlertLabel;
	
	    var configDialogAlert = {
	      describedby: dialogAlertDescription,
	      labelledby: dialogAlertLabel,
	      isAlert: true
	    };
	
	    var triggerDialogAlert = document.getElementsByClassName('deque-dialog-alert-trigger deque-button');
	
	    triggerDialogAlert[j].addEventListener('click', function (event) {
	      event.preventDefault();
	      dequeActiveDialogButton = triggerDialogAlert[i];
	      var attributeDialogAlert = this.getAttribute('aria-controls');
	      var showDialogAlert = createDialog(attributeDialogAlert, 'deque-dialog-alert');
	      var dequeDialogWidgetElement = document.querySelectorAll('.deque-dialog-alert[data-id="' + event.currentTarget.getAttribute('data-id') + '"]')[0];
	      if (dequeDialogWidgetElement.querySelector('.deque-dialog-heading')) {
	        configDialogAlert.describedby = dequeDialogWidgetElement.querySelector('.deque-dialog-heading').getAttribute('id');
	      } else {
	        configDialogAlert.describedby = '';
	      }
	      if (dequeDialogWidgetElement.querySelector('.deque-dialog-description')) {
	        configDialogAlert.labelledby = dequeDialogWidgetElement.querySelector('.deque-dialog-description').getAttribute('id');
	      } else {
	        configDialogAlert.labelledby = '';
	      }
	
	      showDialogAlert(this, configDialogAlert);
	    });
	  }
	
	  //activate all dialog messages
	  var dialogMessages = document.querySelectorAll('.deque-dialog-message');
	  for (var k = 0; k < dialogMessages.length; k++) {
	    dialogMessages[k].classList.add('deque-hidden');
	
	    dialogDataId = '_' + dialogMessages[k].getAttribute('data-id');
	    dialogMessages[k].setAttribute('id', dialogMessages[k].getAttribute('id') + dialogDataId);
	    document.querySelector('button[data-id="' + dialogMessages[k].getAttribute('data-id') + '"]').setAttribute('aria-controls', dialogMessages[k].getAttribute('id'));
	
	    dialogHeadingElement = dialogMessages[k].querySelector('.deque-dialog-heading');
	    dialogHeadingElement.setAttribute('id', dialogHeadingElement.getAttribute('id') + dialogDataId);
	
	    dialogDescriptionElement = dialogMessages[k].querySelector('.deque-dialog-description');
	    dialogDescriptionElement.setAttribute('id', dialogDescriptionElement.getAttribute('id') + dialogDataId);
	
	    var dialogMessageDescription;
	    var dialogMessageLabel;
	
	    var configDialogMessage = {
	      describedby: dialogMessageDescription,
	      labelledby: dialogMessageLabel,
	      isAlert: false
	    };
	
	    var triggerDialogMessage = document.getElementsByClassName('deque-dialog-message-trigger deque-button');
	
	    triggerDialogMessage[k].addEventListener('click', function (event) {
	      event.preventDefault();
	      dequeActiveDialogButton = triggerDialogMessage[i];
	      var attributeDialogMessage = this.getAttribute('aria-controls');
	      var showDialogMessage = createDialog(attributeDialogMessage, 'deque-dialog-message');
	      var dequeDialogWidgetElement = document.querySelectorAll('.deque-dialog-message[data-id="' + event.currentTarget.getAttribute('data-id') + '"]')[0];
	      if (dequeDialogWidgetElement.querySelector('.deque-dialog-heading')) {
	        configDialogMessage.describedby = dequeDialogWidgetElement.querySelector('.deque-dialog-heading').getAttribute('id');
	      } else {
	        configDialogMessage.describedby = '';
	      }
	      if (dequeDialogWidgetElement.querySelector('.deque-dialog-description')) {
	        configDialogMessage.labelledby = dequeDialogWidgetElement.querySelector('.deque-dialog-description').getAttribute('id');
	      } else {
	        configDialogMessage.labelledby = '';
	      }
	      showDialogMessage(this, configDialogMessage);
	    });
	  }
	
	  //activate all dialog message alerts
	  var dialogMessageAlerts = document.querySelectorAll('.deque-dialog-message-alert');
	  for (var l = 0; l < dialogMessageAlerts.length; l++) {
	    dialogMessageAlerts[l].classList.add('deque-hidden');
	
	    dialogDataId = '_' + dialogMessageAlerts[l].getAttribute('data-id');
	    dialogMessageAlerts[l].setAttribute('id', dialogMessageAlerts[l].getAttribute('id') + dialogDataId);
	    document.querySelector('button[data-id="' + dialogMessageAlerts[l].getAttribute('data-id') + '"]').setAttribute('aria-controls', dialogMessageAlerts[l].getAttribute('id'));
	
	    dialogHeadingElement = dialogMessageAlerts[l].querySelector('.deque-dialog-heading');
	    dialogHeadingElement.setAttribute('id', dialogHeadingElement.getAttribute('id') + dialogDataId);
	
	    dialogDescriptionElement = dialogMessageAlerts[l].querySelector('.deque-dialog-description');
	    dialogDescriptionElement.setAttribute('id', dialogDescriptionElement.getAttribute('id') + dialogDataId);
	
	    var dialogMessageAlertDescription;
	    var dialogMessageAlertLabel;
	
	    var configDialogMessageAlert = {
	      describedby: dialogMessageAlertDescription,
	      labelledby: dialogMessageAlertLabel,
	      isAlert: true
	    };
	
	    var triggerDialogMessageAlert = document.getElementsByClassName('deque-dialog-message-alert-trigger deque-button');
	
	    triggerDialogMessageAlert[l].addEventListener('click', function (event) {
	      event.preventDefault();
	      dequeActiveDialogButton = triggerDialogMessageAlert[i];
	      var attributeDialogMessageAlert = this.getAttribute('aria-controls');
	      var showDialogMessageAlert = createDialog(attributeDialogMessageAlert, 'deque-dialog-message-alert');
	
	      var dequeDialogWidgetElement = document.querySelectorAll('.deque-dialog-message-alert[data-id="' + event.currentTarget.getAttribute('data-id') + '"]')[0];
	      if (dequeDialogWidgetElement.querySelector('.deque-dialog-heading')) {
	        configDialogMessageAlert.describedby = dequeDialogWidgetElement.querySelector('.deque-dialog-heading').getAttribute('id');
	      } else {
	        configDialogMessageAlert.describedby = '';
	      }
	      if (dequeDialogWidgetElement.querySelector('.deque-dialog-description')) {
	        configDialogMessageAlert.labelledby = dequeDialogWidgetElement.querySelector('.deque-dialog-description').getAttribute('id');
	      } else {
	        configDialogMessageAlert.labelledby = '';
	      }
	      showDialogMessageAlert(this, configDialogMessageAlert);
	    });
	  }
	
	  if (!activateHander) {
	    activateDequeDialogButtonClickHandlers();
	    activateHander = true;
	  }
	}
	
	window.onload = function () {
	  activateAllDialogs();
	};
	
	/* end @dialog */

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getFirstFocusableChild = getFirstFocusableChild;
	exports.getNextFocusableChild = getNextFocusableChild;
	exports.getLastFocusableChild = getLastFocusableChild;
	exports.initTabTrap = initTabTrap;
	
	var _selectionUtils = __webpack_require__(37);
	
	/* @focusUtils */
	var focusableQuery = 'input:not([tabindex^="-"]), select:not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), object:not([tabindex^="-"]), [href]:not([tabindex^="-"]), [tabindex]:not([tabindex^="-"]):not(.tabtrap)';
	
	function getFirstFocusableChild(element) {
	  return element.querySelector(focusableQuery);
	}
	
	function getNextFocusableChild(element, current) {
	  var all = (0, _selectionUtils.queryAll)(focusableQuery);
	  var targetReturnIndex = all.indexOf(current) + 1;
	
	  if (targetReturnIndex <= all.length - 1) {
	    return all[targetReturnIndex];
	  }
	
	  return null;
	}
	
	function getLastFocusableChild(element) {
	  var all = element.querySelectorAll(focusableQuery);
	  return all[all.length - 1];
	}
	
	function initTabTrap(element) {
	  function createTrap() {
	    var trap = document.createElement('div');
	    trap.classList.add('tabtrap');
	    trap.setAttribute('tabindex', '0');
	
	    return trap;
	  }
	
	  function applyTraps(element, firstTrap, lastTrap) {
	    firstTrap.addEventListener('focus', function () {
	      getLastFocusableChild(element).focus();
	    });
	
	    lastTrap.addEventListener('focus', function () {
	      getFirstFocusableChild(element).focus();
	    });
	
	    element.insertBefore(firstTrap, element.firstChild);
	    element.appendChild(lastTrap);
	  }
	
	  var firstTrap = createTrap();
	  var lastTrap = createTrap();
	
	  applyTraps(element, firstTrap, lastTrap);
	}
	/* end @focusUtils */

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.queryAll = queryAll;
	
	var _collectionUtils = __webpack_require__(38);
	
	/* @selectionUtils */
	function queryAll(selector, context) {
	  context = context || document;
	  return (0, _collectionUtils.toArray)(context.querySelectorAll(selector));
	}
	/* end @selectionUtils */

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArray = toArray;
	/* @collectionUtils */
	function toArray(arraylike) {
	  return Array.prototype.slice.call(arraylike);
	}
	/* end @collectionUtils */

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createButtonBar = createButtonBar;
	/* @dialog-buttonBar */
	function getFirstButton(buttonBar) {
	  return buttonBar.children[0] || null;
	}
	
	function getLastButton(buttonBar) {
	  var buttons = buttonBar.children;
	  return buttons[buttons.length - 1] || null;
	}
	
	function initializeButtonBar(buttonBar, config, hide) {
	  formatButtons(config, hide).forEach(function (button, index, buttons) {
	    buttonBar.appendChild(button.button);
	
	    if (index < buttons.length - 1) {
	      var space = document.createElement('span');
	      space.innerHTML = '';
	      buttonBar.appendChild(space);
	    }
	  });
	}
	
	function formatButtons(config, hide) {
	  return config.map(function (buttonConfig) {
	    var button;
	
	    if (buttonConfig.markup) {
	      var wrapper = document.createElement('div');
	      wrapper.innerHTML = buttonConfig.markup;
	      button = wrapper.querySelector('button');
	      wrapper = null;
	    } else {
	      button = document.createElement('button');
	      button.innerText = buttonConfig.label;
	    }
	
	    if (buttonConfig.classes) {
	      buttonConfig.classes.forEach(function (c) {
	        return button.classList.add(c);
	      });
	    }
	
	    var handler = function handler() {
	      if (buttonConfig.preClose) {
	        buttonConfig.preClose();
	      }
	
	      hide();
	
	      if (buttonConfig.postClose) {
	        buttonConfig.postClose();
	      }
	    };
	
	    button.addEventListener('click', handler);
	
	    return {
	      button: button,
	      handler: handler
	    };
	  });
	}
	
	function createButtonBar(buttonBar) {
	  //  var buttonBar = alert.querySelector('.deque-dialog-buttons');
	
	  buttonBar.getFirstButton = getFirstButton.bind(null, buttonBar);
	  buttonBar.getLastButton = getLastButton.bind(null, buttonBar);
	  // buttonBar.clear = clearButtons.bind(null, buttonBar);
	  buttonBar.initialize = initializeButtonBar.bind(null, buttonBar);
	
	  return buttonBar;
	}
	/* end @dialog-buttonBar */

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createScreen = createScreen;
	/* @dialog-lightboxScreen */
	function clearScreen(screen) {
	  screen.remove();
	}
	
	function showScreen(screen) {
	  document.body.appendChild(screen);
	}
	
	function createScreen() {
	  var screen = document.createElement('div');
	  // screen.classList.add('deque-dialog-screen');
	  screen.show = showScreen.bind(null, screen);
	  screen.clear = clearScreen.bind(null, screen);
	
	  return screen;
	}
	/* end @dialog-lightboxScreen */

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTooltip;
	
	var _guidUtils = __webpack_require__(42);
	
	var _keyboardUtils = __webpack_require__(43);
	
	var _noclobberUtils = __webpack_require__(44);
	
	/* @tooltip */
	function createTooltip(trigger) {
	  var tipText = trigger.getAttribute('data-deque-tooltip');
	  var tipID = (0, _guidUtils.generateGuid)();
	
	  /* wrap the element (trigger) in a container */
	  var tipWrapper = document.createElement('span');
	  tipWrapper.classList.add('deque-tooltip-wrapper');
	  trigger.parentNode.insertBefore(tipWrapper, trigger);
	  /* move element into the wrapper */
	  tipWrapper.appendChild(trigger);
	
	  /* create tooltip */
	  var tip = document.createElement('span');
	  tip.setAttribute('role', 'tooltip');
	  tip.id = tipID;
	  tip.classList.add('deque-tooltip');
	
	  tip.innerHTML = '<span aria-label="Tooltip :"></span>' + tipText;
	  /* move tooltip into the wrapper */
	  tipWrapper.appendChild(tip);
	
	  /* carry over CSS values */
	  var triggerStyle = window.getComputedStyle(trigger);
	  var triggerCSS = [];
	  triggerCSS['display'] = triggerStyle.getPropertyValue('display');
	
	  function getTriggerPosition() {
	    /* get element's size and position */
	    var triggerPosition = [];
	    triggerPosition['width'] = trigger.offsetWidth;
	    triggerPosition['height'] = trigger.offsetHeight;
	    return triggerPosition;
	  }
	
	  function getTooltipPosition(triggerPosition) {
	    /* get/set positioning preferences */
	    var triggerPositionPref = trigger.getAttribute('data-deque-tooltip-position');
	
	    /* get tooltip dimensions */
	    var tipStyle = window.getComputedStyle(tip);
	    var tipCSS = [];
	    tipCSS['width'] = tipStyle.getPropertyValue('width');
	    tipCSS['width'] = tipCSS['width'].replace('px', '');
	    tipCSS['width'] = Number(tipCSS['width']);
	    tipCSS['height'] = tipStyle.getPropertyValue('height');
	    tipCSS['height'] = tipCSS['height'].replace('px', '');
	    tipCSS['height'] = Number(tipCSS['height']);
	
	    /*triggerPositionPref is currently not being used in the code,
	    but the idea is that developers could specify where the 
	    tooltip should be placed: top, right, bottom, left, or top-right */
	    if (triggerPositionPref == 'right') {
	      tip.style.left = '5px';
	      // put other calculations here
	    }
	    if (triggerPositionPref == 'top') {
	      // put calculations here
	    } else {
	      var newLeft = triggerPosition['width'] - 10;
	      //var newTop = tipCSS['height'] + 5;
	      tip.style.left = newLeft - 10 + 'px';
	      //tip.style.top = '-' + (newTop) + 'px';
	      tip.style.bottom = '120%';
	    }
	  }
	
	  (0, _noclobberUtils.noClobber)(trigger, 'aria-describedby', tipID);
	
	  var causes = {
	    INITIAL: 'initial',
	    FOCUS: 'focus',
	    MOUSE: 'mouse',
	    ESCAPE: 'escape'
	  };
	
	  var currentCause = causes.INITIAL;
	
	  function showTip(cause) {
	    if (currentCause === causes.FOCUS) {
	      // prevents 'MOUSE' cause from replacing 'FOCUS' cause.
	      return;
	    }
	
	    tip.classList.remove('deque-hidden');
	    tip.setAttribute('aria-hidden', 'false');
	
	    currentCause = cause;
	
	    var p = getTriggerPosition();
	    getTooltipPosition(p);
	    /* For some reason, the position is incorrectly 
	    calculated on inline elements the first time the
	    getTooltipPosition function runs, so it has to run
	    twice. Possible bug in the script's logic? */
	    getTooltipPosition(p);
	  }
	
	  function hideTip(cause) {
	    if (cause === causes.ESCAPE || currentCause === cause) {
	      tip.classList.add('deque-hidden');
	      tip.setAttribute('aria-hidden', 'true');
	      currentCause = '';
	    }
	  }
	
	  function escapeHandler() {
	    hideTip(causes.ESCAPE);
	  }
	
	  var cancelElementEscape = (0, _keyboardUtils.onElementEscape)(document.body, escapeHandler);
	
	  var focusHandler = showTip.bind(null, causes.FOCUS);
	  var blurHandler = hideTip.bind(null, causes.FOCUS);
	  var overHandler = showTip.bind(null, causes.MOUSE);
	  var outHandler = hideTip.bind(null, causes.MOUSE);
	
	  trigger.addEventListener('focus', focusHandler);
	  trigger.addEventListener('blur', blurHandler);
	  trigger.addEventListener('mouseover', overHandler);
	  trigger.addEventListener('mouseout', outHandler);
	
	  /*// eslint-disable-next-line no-console
	  console.log(trigger);
	  // eslint-disable-next-line no-console
	  console.log(trigger.parentNode.querySelector('.deque-tooltip'));*/
	
	  if (trigger.parentNode.querySelector('.deque-tooltip')) {
	    trigger.parentNode.querySelector('.deque-tooltip').addEventListener('mouseover', overHandler);
	    trigger.parentNode.querySelector('.deque-tooltip').addEventListener('mouseout', outHandler);
	  }
	
	  hideTip(causes.INITIAL);
	
	  return function disableTooltip() {
	    hideTip(causes.ESCAPE);
	
	    cancelElementEscape();
	
	    try {
	      tip.remove();
	    } catch (err) {
	      /*no op*/
	    }
	
	    trigger.removeEventListener('focus', focusHandler);
	    trigger.removeEventListener('blur', blurHandler);
	    trigger.removeEventListener('mouseover', overHandler);
	    trigger.removeEventListener('mouseout', outHandler);
	    trigger.removeAttribute('aria-describedby');
	  };
	}
	
	function initializeAllTooltips() {
	  var itemsToTip = document.querySelectorAll('[data-deque-tooltip]');
	  for (var i = 0; i < itemsToTip.length; i++) {
	    createTooltip(itemsToTip[i]);
	  }
	}
	
	initializeAllTooltips();
	/* end @tooltip */

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateGuid = generateGuid;
	/* @guidUtils */
	/*
	  note - not a true guid. I prepend 'g' because 
	  the ID of an element cannot start with a numeral
	*/
	
	function generateGuid() {
	  var S4 = function S4() {
	    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	  };
	  return 'g' + (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
	}
	/* end @guidUtils */

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.onElementEnter = onElementEnter;
	exports.onElementEscape = onElementEscape;
	exports.onElementSpace = onElementSpace;
	exports.onElementLeft = onElementLeft;
	exports.onElementRight = onElementRight;
	exports.onElementUp = onElementUp;
	exports.onElementDown = onElementDown;
	exports.onElementHome = onElementHome;
	exports.onElementEnd = onElementEnd;
	exports.onElementPageUp = onElementPageUp;
	exports.onElementPageDown = onElementPageDown;
	exports.onElementF10 = onElementF10;
	exports.isAlphaNumeric = isAlphaNumeric;
	exports.onElementCharacter = onElementCharacter;
	exports.trapEnter = trapEnter;
	/* @keyboardUtils */
	var KEYS = exports.KEYS = {
	  BACKSPACE: 8,
	  TAB: 9,
	  ENTER: 13,
	  SHIFT: 16,
	  CTRL: 17,
	  ALT: 18,
	  ESCAPE: 27,
	  SPACE: 32,
	  LEFT: 37,
	  RIGHT: 39,
	  UP: 38,
	  DOWN: 40,
	  F10: 121,
	  HOME: 36,
	  END: 35,
	  PAGE_UP: 33,
	  PAGE_DOWN: 34
	};
	
	function bindElementToEventValue(element, eventName, testValue, handler) {
	  function localHandler(e) {
	    if (e.which === testValue) {
	      handler(e);
	    }
	  }
	
	  element.addEventListener(eventName, localHandler);
	  return function () {
	    element.removeEventListener(eventName, localHandler);
	  };
	}
	
	function bindElementToKeypressValue(element, testValue, handler) {
	  return bindElementToEventValue(element, 'keypress', testValue, handler);
	}
	
	function bindElementToKeydownValue(element, testValue, handler) {
	  return bindElementToEventValue(element, 'keydown', testValue, handler);
	}
	
	function onElementEnter(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.ENTER, handler);
	}
	
	function onElementEscape(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.ESCAPE, handler);
	}
	
	function onElementSpace(element, handler) {
	  return bindElementToKeypressValue(element, KEYS.SPACE, handler);
	}
	
	function onElementLeft(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.LEFT, handler);
	}
	
	function onElementRight(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.RIGHT, handler);
	}
	
	function onElementUp(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.UP, handler);
	}
	
	function onElementDown(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.DOWN, handler);
	}
	
	function onElementHome(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.HOME, handler);
	}
	
	function onElementEnd(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.END, handler);
	}
	
	function onElementPageUp(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.PAGE_UP, handler);
	}
	
	function onElementPageDown(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.PAGE_DOWN, handler);
	}
	
	function onElementF10(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.F10, handler);
	}
	
	function isAlphaNumeric(charCode) {
	  return charCode >= 48 && charCode <= 90 /* numbers, uppercase letters */
	  || charCode >= 97 && charCode <= 122 /* lowercase letters */;
	}
	
	function onElementCharacter(element, handler) {
	  function localHandler(e) {
	    var charCode = e.which;
	    if (isAlphaNumeric(charCode)) {
	      handler(e);
	    }
	  }
	
	  element.addEventListener('keypress', localHandler);
	  return function () {
	    element.removeEventListener('keypress', localHandler);
	  };
	}
	
	function trapEnter(element) {
	  onElementEnter(element, function (e) {
	    e.stopPropagation();
	    e.preventDefault();
	  });
	}
	/* end @keyboardUtils */

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noClobber = noClobber;
	/* @noclobberUtils */
	
	/* Whitespace RegExp. */
	
	var whitespace = /\s+/;
	
	/**
	 * Add `attr=val` without clobbering an existing value.
	 * @param  {Element}  element [Element object]
	 * @param  {String}   attr    [Attribute to update]
	 * @param  {Array}    ids     [rest parameters of ids to add]
	 */
	function noClobber(element, attr) {
	  var current = element.getAttribute(attr);
	  // if there is no value, just add the new one
	
	  for (var _len = arguments.length, ids = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    ids[_key - 2] = arguments[_key];
	  }
	
	  if (!current) {
	    return element.setAttribute(attr, ids.join(' '));
	  }
	
	  // remove "extra" whitespace, then split by any whitespace
	  var parts = current.trim().split(whitespace);
	
	  ids.map(function (val) {
	    if (!~parts.indexOf(val)) {
	      parts.push(val);
	    }
	  });
	
	  // set new val
	  return element.setAttribute(attr, parts.join(' '));
	}
	
	/* end @noclobberUtils */

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createDialogTooltip;
	
	var _focusUtils = __webpack_require__(36);
	
	var _guidUtils = __webpack_require__(42);
	
	var _keyboardUtils = __webpack_require__(43);
	
	/* @tooltip-dialog */
	function createDialogTooltip(trigger, _ref) {
	  var contentID = _ref.contentID,
	      submitID = _ref.submitID,
	      cancelID = _ref.cancelID,
	      onCancel = _ref.onCancel,
	      onSubmit = _ref.onSubmit,
	      onOpen = _ref.onOpen,
	      label = _ref.label,
	      position = _ref.position;
	
	  var content = document.getElementById(contentID);
	  var tipID = (0, _guidUtils.generateGuid)();
	  var tip = document.createElement('div');
	
	  if (!position) {
	    position = getTipPosition;
	  }
	
	  tip.setAttribute('aria-label', label);
	
	  tip.setAttribute('role', 'dialog');
	  tip.id = tipID;
	
	  // see tooltip/style.less for tooltip style.
	  tip.classList.add('deque');
	  tip.classList.add('tooltip');
	
	  tip.appendChild(content);
	  content.classList.remove('hidden');
	
	  trigger.parentElement.insertBefore(tip, trigger);
	  trigger.parentElement.insertBefore(trigger, tip);
	
	  var submitButton = submitID ? document.getElementById(submitID) : null;
	  var cancelButton = cancelID ? document.getElementById(cancelID) : null;
	
	  function submit() {
	    onSubmit && onSubmit();
	    hideTip();
	  }
	
	  function cancel(returnFocus) {
	    onCancel && onCancel();
	    hideTip();
	    if (returnFocus) {
	      trigger.focus();
	    }
	  }
	
	  function showTip() {
	    document.addEventListener('mousedown', cancel);
	    onOpen && onOpen();
	    trigger.setAttribute('aria-describedby', tip.id);
	    tip.classList.remove('hidden');
	    tip.setAttribute('aria-hidden', 'false');
	
	    (0, _focusUtils.getFirstFocusableChild)(tip).focus();
	  }
	
	  function hideTip() {
	    document.removeEventListener('mousedown', cancel);
	    tip.classList.add('hidden');
	    tip.setAttribute('aria-hidden', 'true');
	    trigger.removeAttribute('aria-describedby');
	  }
	
	  trigger.addEventListener('click', function () {
	    if (tip.classList.contains('hidden')) {
	      showTip();
	    } else {
	      hideTip();
	    }
	  });
	
	  tip.addEventListener('mousedown', function (e) {
	    e.stopPropagation();
	  });
	
	  var cancelBodyListener = (0, _keyboardUtils.onElementEscape)(document.body, cancel.bind({}, true));
	
	  if (submitButton) {
	    submitButton.addEventListener('click', submit);
	  }
	
	  if (cancelButton) {
	    cancelButton.addEventListener('click', cancel);
	  }
	
	  function getTipPosition(trigger, tip) {
	
	    var triggerBounds = trigger.getClientRects()[0];
	    var tipBounds = tip.getClientRects()[0];
	
	    return {
	      left: triggerBounds.left + triggerBounds.width + 10,
	      top: triggerBounds.top + triggerBounds.height / 2 - tipBounds.height / 2
	    };
	  }
	
	  hideTip();
	  (0, _focusUtils.initTabTrap)(tip);
	
	  return function disableTooltip() {
	    trigger.removeEventListener('focus', showTip);
	    cancelBodyListener();
	    hideTip();
	    if (tip.parentNode) {
	      tip.parentNode.removeChild(tip);
	    }
	  };
	}
	/* end @tooltip-dialog */

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initializeLink;
	
	var _keyboardUtils = __webpack_require__(43);
	
	/* @link */
	function initializeLink(element) {
	
	  if (element.tagName.toLowerCase() === 'a') {
	    return;
	  }
	  var targetURL;
	  element.classList.add('deque');
	
	  if (element.getAttribute('href')) {
	    targetURL = element.getAttribute('href');
	  } else if (element.getAttribute('data-href')) {
	    targetURL = element.getAttribute('data-href');
	  } else {
	    return;
	  }
	
	  function navigateToLink(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var dataTarget = element.getAttribute('data-target');
	    if (dataTarget) {
	      window.open(targetURL, dataTarget);
	    } else {
	      window.location.href = targetURL;
	    }
	  }
	
	  element.setAttribute('tabindex', 0);
	  element.setAttribute('role', 'link');
	  element.addEventListener('click', navigateToLink);
	  (0, _keyboardUtils.onElementEnter)(element, navigateToLink);
	  (0, _keyboardUtils.onElementF10)(element, function (e) {
	    if (e.shiftKey) {
	      if (window.CustomEvent) {
	        try {
	          element.dispatchEvent(new CustomEvent('contextmenu'));
	        } catch (e) {
	          return;
	        }
	      } else if (document.createEvent) {
	        var ev = document.createEvent('HTMLEvents');
	        ev.initEvent('contextmenu', true, false);
	        element.dispatchEvent(ev);
	      } else {
	        // Internet Explorer
	        element.fireEvent('oncontextmenu');
	      }
	    }
	  });
	}
	
	function initializeAllLinks() {
	  var links = document.querySelectorAll('.deque-link-aria');
	  for (var i = 0; i < links.length; i++) {
	    initializeLink(links[i]);
	  }
	}
	
	initializeAllLinks();
	/* end @link */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initializeButton = initializeButton;
	exports.initializeToggleButton = initializeToggleButton;
	
	var _keyboardUtils = __webpack_require__(43);
	
	/* @button */
	function bindElementToInputs(element, behavior) {
	  if (element.tagName.toUpperCase() !== 'BUTTON') {
	    (0, _keyboardUtils.onElementSpace)(element, function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      behavior(e);
	    });
	
	    (0, _keyboardUtils.onElementEnter)(element, function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      behavior(e);
	    });
	  }
	
	  element.addEventListener('click', behavior);
	}
	
	function assignRoleIfNecessary(element) {
	  if (element.tagName.toLowerCase() !== 'button') {
	    element.setAttribute('role', 'button');
	    element.setAttribute('tabindex', '0');
	  }
	}
	
	function initializeIcon(element) {
	  var icon = document.createElement('span');
	  icon.setAttribute('aria-hidden', true);
	  icon.classList.add('pressed-on-icon');
	  element.insertBefore(icon, element.firstChild);
	}
	
	function initializeButton(element, behavior) {
	  assignRoleIfNecessary(element);
	  bindElementToInputs(element, behavior);
	}
	
	function initializeToggleButton(element, toggleFunction) {
	  var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  assignRoleIfNecessary(element);
	  element.setAttribute('aria-pressed', initialState);
	  initializeIcon(element);
	
	  if (!toggleFunction) {
	    throw new Error('You must provide a toggle function to a toggle button. It should return \'true\' when the button should have a \'pressed\' state, and \'false\' otherwise.');
	  }
	
	  function toggle(e) {
	    var toggledOn = toggleFunction(e);
	    element.setAttribute('aria-pressed', toggledOn ? 'true' : 'false');
	  }
	
	  bindElementToInputs(element, toggle);
	}
	/* end @button */

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggle = toggle;
	exports.isToggledOn = isToggledOn;
	exports.replaceSpace = replaceSpace;
	exports.buildCheckboxTristate = buildCheckboxTristate;
	exports.checkboxEvent = checkboxEvent;
	exports.setCheckboxData = setCheckboxData;
	exports.toggleOn = toggleOn;
	exports.toggleOff = toggleOff;
	exports.toggleMixed = toggleMixed;
	exports.createSingleCheckbox = createSingleCheckbox;
	exports.createSingleCheckboxForRadio = createSingleCheckboxForRadio;
	exports.createCheckboxGroup = createCheckboxGroup;
	
	var _keyboardUtils = __webpack_require__(43);
	
	/* @checkbox */
	/*
	
	TO DO:
	
	- Throw an error if the label is missing
	*/
	
	function toggle(element) {
	  if (isToggledOn(element)) {
	    toggleOff(element);
	  } else {
	    toggleOn(element);
	  }
	}
	
	function isToggledOn(element) {
	  return getCheckboxData(element) === 'true';
	}
	
	function replaceSpace(str) {
	  return str.replace(/ /g, '_').toLowerCase();
	}
	
	function buildCheckboxTristate() {
	  var _customCheckboxTristateWidgets = document.querySelectorAll('.custom-checkbox-widget');
	  var _instanceChkTristateCount = 0;
	  if (_customCheckboxTristateWidgets.length > 0) {
	    [].slice.call(_customCheckboxTristateWidgets).forEach(function (_eachCustomWidget) {
	      var _dataConfig = {
	        groupTitle: _eachCustomWidget.getAttribute('data-group-title'),
	        groupOptionTitle: _eachCustomWidget.getAttribute('data-group-option-title'),
	        options: _eachCustomWidget.getAttribute('data-options'),
	        delimiter: _eachCustomWidget.getAttribute('data-delimiter') || ','
	      };
	
	      if (_dataConfig.options) {
	        _dataConfig.options = _dataConfig.options.split(_dataConfig.delimiter);
	      }
	
	      var _id = 'instance_' + _instanceChkTristateCount + '_' + replaceSpace(_dataConfig.groupTitle);
	
	      var _elementControl = '<div class="custom-checkbox" id="' + _id + '" role="group" aria-labelledby="group-header' + _id + '">';
	      _elementControl += '<div class="checkbox-group-heading" id="group-header' + _id + '">' + _dataConfig.groupTitle + '</div>';
	      _elementControl += '<div role="checkbox" name="parent-checkbox[]" data-childs="' + _id + '_childs" class="parent-checkbox checkbox-holder" \
	                                              aria-labelledby="' + _id + replaceSpace(_dataConfig.groupOptionTitle) + '" tabindex="0"> \
	                                              <span class="checkbox-indicator"></span> \
	                                              <span class="checkbox-label" id="' + _id + replaceSpace(_dataConfig.groupOptionTitle) + '">' + _dataConfig.groupOptionTitle + '</span> \
	                                          </div> \
	                                          <div class="child-checkbox-list" data-group="' + _id + '">';
	
	      for (var _elementOptionIndex in _dataConfig.options) {
	        _elementControl += '<div role="checkbox" name="child-checkbox[]" class="child-checkbox checkbox-holder ' + _id + '_childs" aria-labelledby="' + _id + replaceSpace(_dataConfig.options[_elementOptionIndex]) + '" tabindex="0"> \
	                                                  <span class="checkbox-indicator"></span> \
	                                                  <span class="checkbox-label" id="' + _id + replaceSpace(_dataConfig.options[_elementOptionIndex]) + '">' + _dataConfig.options[_elementOptionIndex] + '</span> \
	                                              </div>';
	      }
	
	      _elementControl += '</div></div>';
	
	      _eachCustomWidget.innerHTML = _elementControl;
	      _instanceChkTristateCount++;
	    });
	
	    var parentCheckboxElements = document.querySelectorAll('.parent-checkbox');
	    [].slice.call(parentCheckboxElements).forEach(function (eachParent) {
	      eachParent.addEventListener('click', checkboxEvent);
	      eachParent.addEventListener('keyup', checkboxEvent);
	    });
	    var childElements = document.querySelectorAll('.child-checkbox');
	    [].slice.call(childElements).forEach(function (eachChildElement) {
	      eachChildElement.addEventListener('click', checkboxEvent);
	      eachChildElement.addEventListener('keyup', checkboxEvent);
	    });
	  }
	}
	
	buildCheckboxTristate();
	
	function checkboxEvent(event) {
	  if (event.keyCode == 13 || event.keyCode == 32 || !event.keyCode) {
	    var element = event.currentTarget;
	    if (element.getAttribute('aria-checked') == 'true') {
	      element.setAttribute('aria-checked', 'false');
	      element.classList.remove('active');
	    } else {
	      element.setAttribute('aria-checked', 'true');
	      element.classList.add('active');
	    }
	
	    if (element.getAttribute('data-childs')) {
	      var childElements = document.querySelectorAll('.' + element.getAttribute('data-childs'));
	      [].slice.call(childElements).forEach(function (eachChildElement) {
	        if (element.classList.contains('parent-checkbox')) {
	          eachChildElement.setAttribute('aria-checked', element.getAttribute('aria-checked'));
	        }
	      });
	    }
	
	    var parentElement = document.querySelector('#' + element.parentElement.getAttribute('data-group'));
	    if (parentElement) {
	      var innerParent = parentElement.querySelector('.parent-checkbox');
	      if (innerParent) {
	        var checkboxCounter = parentElement.querySelectorAll('.child-checkbox[aria-checked="true"]').length;
	        var _childElements = parentElement.querySelectorAll('.child-checkbox');
	        if (checkboxCounter == 0) {
	          innerParent.setAttribute('aria-checked', 'false');
	        } else if (checkboxCounter < _childElements.length) {
	          innerParent.setAttribute('aria-checked', 'mixed');
	        } else if (checkboxCounter == _childElements.length) {
	          innerParent.setAttribute('aria-checked', 'true');
	        }
	      }
	    }
	  }
	}
	
	function setCheckboxData(element, value) {
	  element.setAttribute('aria-checked', value);
	  var dataElement = document.getElementById('checkboxTristateData[' + element.getAttribute('aria-labelledby') + ']');
	  if (dataElement) dataElement.value = value;
	}
	
	function getCheckboxData(element) {
	  var dataElement = document.getElementById('checkboxTristateData[' + element.getAttribute('aria-labelledby') + ']');
	  return dataElement ? dataElement.value : null;
	}
	
	function toggleOn(element) {
	  setCheckboxData(element, 'true');
	}
	
	function toggleOff(element) {
	  setCheckboxData(element, 'false');
	}
	
	function toggleMixed(element) {
	  setCheckboxData(element, 'mixed');
	}
	function createSingleCheckbox(checkbox, isChecked) {
	  var onChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	
	  checkbox.setAttribute('tabindex', '0');
	  checkbox.setAttribute('role', 'checkbox');
	  var indicator = document.createElement('span');
	  indicator.classList.add('deque-checkbox-indicator');
	
	  checkbox.appendChild(indicator);
	
	  var labelText = checkbox.getAttribute('aria-labelledby');
	  var label = document.getElementById(labelText);
	  //label.setAttribute('aria-hidden', 'true'); // prevents double readout
	  label.classList.add('deque-checkbox-label');
	
	  var hiddenCheckbox = document.createElement('input');
	  hiddenCheckbox.type = 'hidden';
	  hiddenCheckbox.name = 'checkboxTristateData[' + labelText + ']';
	  hiddenCheckbox.id = 'checkboxTristateData[' + labelText + ']';
	  hiddenCheckbox.classList.add('deque-checkbox-data');
	
	  checkbox.appendChild(hiddenCheckbox);
	
	  /*checkbox.addEventListener('focus', function () {
	    var allCheckboxElements = document.querySelectorAll('.deque-checkbox-tristate-parent');
	    [].slice.call(allCheckboxElements).forEach(element => {
	      element.setAttribute('aria-hidden', 'true');
	    });
	  });*/
	
	  if (isChecked) {
	    toggleOn(checkbox);
	  } else {
	    toggleOff(checkbox);
	  }
	
	  function changeHandler(e) {
	    e.stopPropagation();
	    e.preventDefault();
	    toggle(checkbox);
	    broadcastChange();
	  }
	
	  function broadcastChange() {
	    onChange({ element: checkbox, isToggledOn: isToggledOn(label) });
	  }
	
	  checkbox.parentNode.addEventListener('click', changeHandler);
	  (0, _keyboardUtils.onElementSpace)(checkbox, changeHandler);
	  (0, _keyboardUtils.onElementEnter)(checkbox, changeHandler);
	
	  checkbox.parentNode.addEventListener('focus', function () {
	    checkbox.classList.add('deque-checkbox-focused');
	  });
	
	  checkbox.parentNode.addEventListener('blur', function () {
	    checkbox.classList.remove('deque-checkbox-focused');
	  });
	
	  return checkbox;
	}
	
	function createSingleCheckboxForRadio(checkbox, checkboxLabel, isChecked) {
	  var onChange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
	
	
	  checkbox.setAttribute('tabindex', '0');
	  checkbox.setAttribute('role', 'checkbox');
	
	  var indicator = document.createElement('span');
	  indicator.classList.add('deque-checkbox-indicator');
	
	  checkbox.appendChild(indicator);
	
	  var labelText = checkbox.getAttribute('aria-labelledby');
	  var label = document.getElementById(labelText);
	  //label.setAttribute('aria-hidden', 'true'); // prevents double readout
	  label.classList.add('deque-checkbox-label');
	
	  var hiddenRadio = document.createElement('input');
	  hiddenRadio.type = 'hidden';
	  hiddenRadio.name = 'checkboxTristateData[' + labelText + ']';
	  hiddenRadio.id = 'checkboxTristateData[' + labelText + ']';
	  hiddenRadio.classList.add('deque-checkbox-radio-data');
	  checkbox.appendChild(hiddenRadio);
	  checkbox.appendChild(label);
	
	  if (isChecked) {
	    toggleOn(checkbox);
	  } else {
	    toggleOff(checkbox);
	  }
	
	  function changeHandler(e) {
	    e.stopPropagation();
	    e.preventDefault();
	    toggle(checkbox);
	    broadcastChange();
	  }
	
	  function broadcastChange() {
	    onChange({ element: checkbox, isToggledOn: isToggledOn(label) });
	  }
	
	  checkbox.addEventListener('click', changeHandler);
	  checkbox.addEventListener('keydown', changeHandler);
	
	  checkboxLabel.addEventListener('click', changeHandler);
	  (0, _keyboardUtils.onElementSpace)(checkbox, changeHandler);
	
	  checkbox.addEventListener('focus', function () {
	    checkbox.classList.add('deque-radio-focused');
	  });
	
	  checkbox.addEventListener('blur', function () {
	    checkbox.classList.remove('deque-radio-focused');
	  });
	
	  return checkbox;
	}
	
	function createCheckboxGroup(parent, children) {
	  var onChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
	
	
	  parent = createSingleCheckbox(parent, false, function (e) {
	    onChange(e);
	    rootClicked(getCorrectRootState());
	  });
	
	  children = Array.prototype.slice.call(children);
	
	  children = children.map(function (child) {
	    return createSingleCheckbox(child, false, function () {
	      if (onChange) {
	        onChange(child);
	      }
	      setCorrectRootState();
	    });
	  });
	
	  var rootClickHandlers = {
	    'true': function _true() {
	      children.forEach(toggleOff);
	      toggleOff(parent);
	    },
	    'false': function _false() {
	      children.forEach(toggleOn);
	      toggleOn(parent);
	    },
	    'mixed': function mixed() {
	      children.forEach(toggleOn);
	      toggleOn(parent);
	    }
	  };
	
	  function rootClicked(rootState) {
	    rootClickHandlers[rootState]();
	  }
	
	  function getCorrectRootState() {
	    if (children.every(isToggledOn)) {
	      return 'true';
	    } else if (children.every(function (child) {
	      return !isToggledOn(child);
	    })) {
	      return 'false';
	    } else {
	      return 'mixed';
	    }
	  }
	
	  var leafClickHandlers = {
	    'true': function _true() {
	      return toggleOn(parent);
	    },
	    'false': function _false() {
	      return toggleOff(parent);
	    },
	    'mixed': function mixed() {
	      return toggleMixed(parent);
	    }
	  };
	
	  function setCorrectRootState() {
	    leafClickHandlers[getCorrectRootState()]();
	  }
	}
	
	function activateAllCheckboxes() {
	  var checkboxes = document.querySelectorAll('.deque-checkbox-aria');
	  for (var i = 0; i < checkboxes.length; i++) {
	    var childNode = checkboxes[i].querySelector('.deque-checkbox-data');
	    if (!checkboxes[i].contains(childNode)) {
	      createSingleCheckbox(checkboxes[i], false);
	    }
	  }
	
	  var tristates = document.querySelectorAll('.deque-checkbox-tristate-group');
	  for (var j = 0; j < tristates.length; j++) {
	    var parentGroup = tristates[j].querySelector('.deque-checkbox-tristate-parent');
	    var parent = parentGroup.querySelector('.deque-checkbox-tristate');
	    var childrenGroup = tristates[j].querySelector('.deque-checkbox-tristate-children');
	    var children = childrenGroup.querySelectorAll('.deque-checkbox-tristate');
	    childNode = childrenGroup.querySelector('.deque-checkbox-data');
	    if (!childrenGroup.contains(childNode)) {
	      createCheckboxGroup(parent, children);
	    }
	  }
	}
	
	activateAllCheckboxes();
	
	/* end @checkbox */

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createRadioGroup;
	
	var _keyboardUtils = __webpack_require__(43);
	
	var _checkbox = __webpack_require__(48);
	
	/* @radio */
	function createRadioGroup(group, label, buttons, onChange) {
	  var radioGroup = group.querySelector('#radioGroup');
	  radioGroup.setAttribute('role', 'radiogroup');
	
	  var currentFocus = 0;
	
	  buttons = Array.prototype.slice.call(buttons); //convert from a HTMLCollection to a javascript array to be able to do the .map function
	  buttons = buttons.map(function (button) {
	    var labelText = button.getAttribute('aria-labelledby');
	    var label = document.getElementById(labelText);
	
	    setUniqueToggle(button);
	    return (0, _checkbox.createSingleCheckboxForRadio)(button, label, false, function (e) {
	      // note that we are ignoring e.isToggledOn - we are using checkboxes
	      // to implement radio buttons, so we don't toggle it on click. We manually
	      // override the toggle state by calling toggleOn() or toggleOff() explicitly.
	      setUniqueToggle(e.element);
	
	      if (onChange) {
	        onChange(button);
	      }
	    });
	  });
	
	  buttons.forEach(function (button) {
	    button.addEventListener('focus', handleFocus);
	    button.addEventListener('keydown', handleKeydown);
	    button.setAttribute('role', 'radio');
	    //button.setAttribute('tabindex', '-1');
	    var indicator = button.querySelector('.deque-checkbox-indicator');
	    indicator.classList.remove('deque-checkbox-indicator');
	    indicator.classList.add('deque-radio-indicator');
	
	    var labelText = button.getAttribute('aria-labelledby');
	    var label = document.getElementById(labelText);
	    label.classList.remove('deque-checkbox-label');
	    label.classList.add('deque-radio-label');
	  });
	
	  buttons[0].setAttribute('tabindex', '0');
	
	  function handleFocus(e) {
	    var currentParent = e.currentTarget.parentNode.parentNode;
	    var ua = window.navigator.userAgent;
	    var msie = ua.indexOf('Trident/');
	    var msedge = ua.indexOf('Edge');
	    if (msie > 0 || msedge > 0) {
	      if (currentParent.nodeName.toLowerCase() == 'FIELDSET'.toLowerCase()) {
	        if (!currentParent.querySelector('legend').getAttribute('id')) {
	          currentParent.querySelector('legend').setAttribute('id', 'deque-fieldset-radio-group');
	        }
	        if (!e.currentTarget.getAttribute('aria-describedby')) {
	          e.currentTarget.setAttribute('aria-describedby', currentParent.querySelector('legend').getAttribute('id'));
	        }
	      }
	    }
	    var index = e.target.id.split('_')[1];
	    currentFocus = parseInt(index);
	    buttons[currentFocus].click();
	  }
	
	  function handleKeydown(e) {
	    var key = e.which;
	    if (key === _keyboardUtils.KEYS.RIGHT || key === _keyboardUtils.KEYS.DOWN) {
	      focusNext(e);
	    } else if (key === _keyboardUtils.KEYS.LEFT || key === _keyboardUtils.KEYS.UP) {
	      focusPrev(e);
	    }
	
	    if (key == _keyboardUtils.KEYS.TAB) {
	      var parentElement = null;
	      parentElement = buttons[currentFocus].parentNode.parentNode;
	      if (e.shiftKey) {
	        try {
	          if (parentElement.previousSibling.previousSibling.querySelectorAll('.deque-radio')[0]) {
	            if (parentElement.previousSibling.previousSibling.querySelector('.deque-radio[aria-checked="true"]')) {
	              parentElement.previousSibling.previousSibling.querySelector('.deque-radio[aria-checked="true"]').setAttribute('tabindex', '0');
	              parentElement.previousSibling.previousSibling.querySelector('.deque-radio[aria-checked="true"]').focus();
	            } else {
	              parentElement.previousSibling.previousSibling.querySelectorAll('.deque-radio')[0].setAttribute('tabindex', '0');
	              parentElement.previousSibling.previousSibling.querySelectorAll('.deque-radio')[0].focus();
	            }
	          } else {
	            parentElement.previousSibling.previousSibling.setAttribute('tabindex', '0');
	            parentElement.previousSibling.previousSibling.focus();
	          }
	        } catch (e) {
	          //error log
	        }
	      } else {
	        try {
	          if (parentElement.nextSibling.nextSibling.querySelectorAll('.deque-radio')[0]) {
	            e.currentTarget.setAttribute('tabindex', '0');
	            if (parentElement.nextSibling.nextSibling.querySelector('.deque-radio[aria-checked="true"]')) {
	              parentElement.nextSibling.nextSibling.querySelector('.deque-radio[aria-checked="true"]').setAttribute('tabindex', '0');
	              parentElement.nextSibling.nextSibling.querySelector('.deque-radio[aria-checked="true"]').focus();
	            } else {
	              parentElement.nextSibling.nextSibling.querySelectorAll('.deque-radio')[0].setAttribute('tabindex', '0');
	              parentElement.nextSibling.nextSibling.querySelectorAll('.deque-radio')[0].focus();
	            }
	          } else {
	            parentElement.nextSibling.nextSibling.setAttribute('tabindex', '0');
	            parentElement.nextSibling.nextSibling.focus();
	          }
	        } catch (e) {
	          //error log
	        }
	      }
	    }
	  }
	
	  function setUniqueToggle(button) {
	    buttons.forEach(function (b) {
	      b === button ? (0, _checkbox.toggleOn)(b) : (0, _checkbox.toggleOff)(b);
	      b.setAttribute('tabindex', b === button ? '0' : '-1');
	    });
	  }
	
	  function focusPrev(e) {
	    if (buttons[currentFocus - 1]) {
	      buttons[--currentFocus].focus();
	    }
	    buttons[currentFocus].click();
	
	    e.preventDefault();
	  }
	
	  function focusNext(e) {
	    if (buttons[currentFocus + 1]) {
	      buttons[++currentFocus].focus();
	    }
	    buttons[currentFocus].click();
	
	    e.preventDefault();
	  }
	}
	
	function activateAllRadios() {
	  var radios = document.querySelectorAll('.deque-radio-group');
	  for (var x = 0; x < radios.length; x++) {
	    var label = radios[x].querySelector('.deque-radio-group-label');
	    var buttons = radios[x].querySelectorAll('.deque-radio');
	    if (!radios[x].querySelector('#radioGroup').hasAttribute('role')) {
	      createRadioGroup(radios[x], label, buttons);
	    }
	  }
	}
	activateAllRadios();
	/* end @radio */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTree;
	
	var _NodeUtils = __webpack_require__(51);
	
	var _noSelection = __webpack_require__(52);
	
	var _noSelection2 = _interopRequireDefault(_noSelection);
	
	var _singleSelection = __webpack_require__(53);
	
	var _singleSelection2 = _interopRequireDefault(_singleSelection);
	
	var _multiSelection = __webpack_require__(54);
	
	var _multiSelection2 = _interopRequireDefault(_multiSelection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* @tree */
	var behaviors = {
	  default: _noSelection2.default,
	  single: _singleSelection2.default,
	  multi: _multiSelection2.default
	};
	
	function createTree(config, treeGroup) {
	
	  var treeRoot = treeGroup.querySelector('[role="tree"]');
	
	  if (config.selectStyle === 'multi') {
	    treeRoot.setAttribute('aria-multiselectable', 'true');
	  }
	
	  var treeItems = treeGroup.querySelectorAll('[role="treeitem"]');
	  for (var x = 0; x < treeItems.length; x++) {
	    treeItems[x].setAttribute('tabindex', '-1');
	    var behavior = behaviors[config.selectStyle] || behaviors.default;
	    behavior(treeItems[x]);
	    if (x === 0) {
	      (0, _NodeUtils.focusOnNode)(treeItems[x]);
	      if (config.selectStyle) {
	        (0, _NodeUtils.selectNode)(treeItems[x]);
	      }
	    }
	    if (treeItems[x].children) {
	      treeItems[x].setAttribute('aria-expanded', 'false');
	    }
	  }
	}
	/* end @tree */

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasChildren = hasChildren;
	exports.isOpen = isOpen;
	exports.getRootNode = getRootNode;
	exports.getVisibleNodes = getVisibleNodes;
	exports.getPreviousVisibleNode = getPreviousVisibleNode;
	exports.getNextVisibleNode = getNextVisibleNode;
	exports.focusOnNode = focusOnNode;
	exports.closeNode = closeNode;
	exports.openNode = openNode;
	exports.getFirstChild = getFirstChild;
	exports.getParent = getParent;
	exports.getNextSibling = getNextSibling;
	exports.getPreviousSibling = getPreviousSibling;
	exports.selectNode = selectNode;
	exports.addNodeToSelection = addNodeToSelection;
	exports.isSelected = isSelected;
	exports.toggleNodeSelection = toggleNodeSelection;
	
	var _selectionUtils = __webpack_require__(37);
	
	/* used only internally */
	function getNextNodeInSequence(node, sequence) {
	  var returnNextOne = false;
	  return sequence.reduce(function (acc, val) {
	    if (acc) {
	      return acc;
	    }
	    if (returnNextOne) {
	      return val;
	    }
	    if (node === val) {
	      returnNextOne = true;
	    }
	  }, null) || node;
	} /* @tree-NodeUtils */
	
	
	function getAllTreeNodes(treeID) {
	  return (0, _selectionUtils.queryAll)('#' + treeID + ' [role="treeitem"]');
	}
	
	/* public API starts here */
	
	function hasChildren(node) {
	  return node.hasAttribute('aria-expanded');
	}
	
	function isOpen(node) {
	  return node.getAttribute('aria-expanded') === 'true';
	}
	
	function getRootNode(treeID) {
	  return document.querySelector('#' + treeID + ' > ul > [role=\'treeitem\']');
	}
	
	function getVisibleNodes(treeID) {
	  return (0, _selectionUtils.queryAll)('#' + treeID + ' > ul > [role=\'treeitem\'], #' + treeID + ' [aria-expanded=\'true\'] > ul > [role=\'treeitem\']');
	}
	
	function getPreviousVisibleNode(node) {
	  var treeID = node.getAttribute('data-tree-root');
	  var nodes = getVisibleNodes(treeID);
	
	  return getNextNodeInSequence(node, nodes.reverse()) || node;
	}
	
	function getNextVisibleNode(node) {
	  var treeID = node.getAttribute('data-tree-root');
	  var nodes = getVisibleNodes(treeID);
	  return getNextNodeInSequence(node, nodes) || node;
	}
	
	function focusOnNode(node) {
	  var treeID = node.getAttribute('data-tree-root');
	
	  getAllTreeNodes(treeID).forEach(function (item) {
	    item.setAttribute('tabindex', '-1');
	  });
	
	  node.setAttribute('tabindex', '0');
	  node.focus();
	  return node;
	}
	
	function closeNode(node) {
	  node.setAttribute('aria-expanded', 'false');
	  return node;
	}
	
	function openNode(node) {
	  node.setAttribute('aria-expanded', 'true');
	  return node;
	}
	
	function getFirstChild(node) {
	  return node.querySelector('[role="treeitem"]') || node;
	}
	
	function getParent(node) {
	  if (node.parentNode.parentNode.getAttribute('role') === 'treeitem') {
	    return node.parentNode.parentNode;
	  }
	
	  return node;
	}
	
	function getNextSibling(node) {
	  return node.nextElementSibling || node;
	}
	
	function getPreviousSibling(node) {
	  return node.previousSibling || node;
	}
	
	function selectNode(node, multimode) {
	  var treeID = node.getAttribute('data-tree-root');
	
	  getAllTreeNodes(treeID).forEach(function (item) {
	    if (node === item) {
	      item.setAttribute('aria-selected', 'true');
	    } else if (multimode) {
	      item.setAttribute('aria-selected', 'false');
	    } else {
	      item.removeAttribute('aria-selected');
	    }
	  });
	
	  node.setAttribute('aria-selected', 'true');
	  return node;
	}
	
	function addNodeToSelection(node) {
	  node.setAttribute('aria-selected', 'true');
	}
	
	function isSelected(node) {
	  return node.getAttribute('aria-selected') === 'true';
	}
	
	function toggleNodeSelection(node, multimode) {
	  if (node.getAttribute('aria-selected') === 'true') {
	    if (multimode) {
	      node.setAttribute('aria-selected', 'false');
	    } else {
	      node.removeAttribute('aria-selected');
	    }
	  } else {
	    node.setAttribute('aria-selected', 'true');
	  }
	}
	/* end @tree-NodeUtils */

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyLogic;
	
	var _keyboardUtils = __webpack_require__(43);
	
	var KeyboardUtils = _interopRequireWildcard(_keyboardUtils);
	
	var _NodeUtils = __webpack_require__(51);
	
	var NodeUtils = _interopRequireWildcard(_NodeUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @tree-selectionModes-noSelection */
	function applyLogic(node) {
	  node.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    NodeUtils.focusOnNode(node);
	
	    if (NodeUtils.isOpen(node)) {
	      NodeUtils.closeNode(node);
	    } else if (NodeUtils.hasChildren(node)) {
	      NodeUtils.openNode(node);
	    }
	  });
	
	  KeyboardUtils.onElementEnter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var activateable = void 0;
	    for (var i = 0; i < node.children.length; i++) {
	      var item = node.children[i];
	      if (item.tagName === 'A' || item.tagName === 'BUTTON') {
	        activateable = item;
	        break;
	      }
	    }
	
	    if (activateable) {
	      var click = new MouseEvent('click');
	      activateable.dispatchEvent(click);
	    }
	  });
	
	  KeyboardUtils.onElementCharacter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var character = String.fromCharCode(e.which).toUpperCase();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	
	    var thisFound = false;
	    var target = nodes.filter(function (item) {
	      // discard 'previous' nodes:
	      if (thisFound) {
	        return true;
	      }
	      if (item === node) {
	        thisFound = true;
	      }
	      return false;
	    }).reduce(function (acc, val) {
	      // grab next one starting with char
	      if (acc) {
	        return acc;
	      }
	      if (val.innerText.charAt(0).toUpperCase() === character) {
	        return val;
	      }
	    }, null);
	
	    if (target) {
	      NodeUtils.focusOnNode(target);
	    }
	  });
	
	  KeyboardUtils.onElementHome(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var target = NodeUtils.getRootNode(node.getAttribute('data-tree-root'));
	    NodeUtils.focusOnNode(target);
	  });
	
	  KeyboardUtils.onElementEnd(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	    var target = nodes.reverse()[0];
	    NodeUtils.focusOnNode(target);
	  });
	
	  KeyboardUtils.onElementDown(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getNextVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	  });
	
	  KeyboardUtils.onElementUp(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getPreviousVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	  });
	
	  KeyboardUtils.onElementRight(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (NodeUtils.hasChildren(node) && !NodeUtils.isOpen(node)) {
	      NodeUtils.openNode(node);
	    } else {
	      var child = NodeUtils.getFirstChild(node);
	      NodeUtils.focusOnNode(child);
	    }
	  });
	
	  KeyboardUtils.onElementLeft(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (!NodeUtils.hasChildren(node) || !NodeUtils.isOpen(node)) {
	      var parent = NodeUtils.getParent(node);
	      NodeUtils.focusOnNode(parent);
	
	      return parent;
	    }
	
	    return NodeUtils.closeNode(node);
	  });
	}
	/* end @tree-selectionModes-noSelection */

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyLogic;
	
	var _keyboardUtils = __webpack_require__(43);
	
	var KeyboardUtils = _interopRequireWildcard(_keyboardUtils);
	
	var _NodeUtils = __webpack_require__(51);
	
	var NodeUtils = _interopRequireWildcard(_NodeUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @tree-selectionModes-singleSelection */
	function applyLogic(node) {
	  node.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    NodeUtils.focusOnNode(node);
	    NodeUtils.selectNode(node);
	
	    if (NodeUtils.isOpen(node)) {
	      NodeUtils.closeNode(node);
	    } else if (NodeUtils.hasChildren(node)) {
	      NodeUtils.openNode(node);
	    }
	  });
	
	  KeyboardUtils.onElementEnter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var activateable = void 0;
	    for (var i = 0; i < node.children.length; i++) {
	      var item = node.children[i];
	      if (item.tagName === 'A' || item.tagName === 'BUTTON') {
	        activateable = item;
	        break;
	      }
	    }
	
	    if (activateable) {
	      var click = new MouseEvent('click');
	      activateable.dispatchEvent(click);
	    }
	  });
	
	  KeyboardUtils.onElementSpace(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    if (e.ctrlKey) {
	      NodeUtils.toggleNodeSelection(node);
	    }
	  });
	
	  KeyboardUtils.onElementCharacter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var character = String.fromCharCode(e.which).toUpperCase();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	
	    var thisFound = false;
	    var target = nodes.filter(function (item) {
	      // discard 'previous' nodes:
	      if (thisFound) {
	        return true;
	      }
	      if (item === node) {
	        thisFound = true;
	      }
	      return false;
	    }).reduce(function (acc, val) {
	      // grab next one starting with char
	      if (acc) {
	        return acc;
	      }
	      if (val.innerText.charAt(0).toUpperCase() === character) {
	        return val;
	      }
	    }, null);
	
	    if (target) {
	      NodeUtils.focusOnNode(target);
	      NodeUtils.selectNode(target);
	    }
	  });
	
	  KeyboardUtils.onElementHome(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var target = NodeUtils.getRootNode(node.getAttribute('data-tree-root'));
	    NodeUtils.focusOnNode(target);
	    NodeUtils.selectNode(target);
	  });
	
	  KeyboardUtils.onElementEnd(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	    var target = nodes.reverse()[0];
	    NodeUtils.focusOnNode(target);
	    NodeUtils.selectNode(target);
	  });
	
	  KeyboardUtils.onElementDown(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getNextVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	
	    if (!e.ctrlKey) {
	      NodeUtils.selectNode(sibling);
	    }
	  });
	
	  KeyboardUtils.onElementUp(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getPreviousVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	
	    if (!e.ctrlKey) {
	      NodeUtils.selectNode(sibling);
	    }
	  });
	
	  KeyboardUtils.onElementRight(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (NodeUtils.hasChildren(node) && !NodeUtils.isOpen(node)) {
	      NodeUtils.openNode(node);
	    } else {
	      var child = NodeUtils.getFirstChild(node);
	      NodeUtils.focusOnNode(child);
	
	      if (!e.ctrlKey) {
	        NodeUtils.selectNode(child);
	      }
	    }
	  });
	
	  KeyboardUtils.onElementLeft(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (!NodeUtils.hasChildren(node) || !NodeUtils.isOpen(node)) {
	      var parent = NodeUtils.getParent(node);
	      NodeUtils.focusOnNode(parent);
	
	      if (!e.ctrlKey) {
	        NodeUtils.selectNode(parent);
	      }
	
	      return parent;
	    }
	
	    return NodeUtils.closeNode(node);
	  });
	}
	/* end @tree-selectionModes-singleSelection */

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyLogic;
	
	var _keyboardUtils = __webpack_require__(43);
	
	var KeyboardUtils = _interopRequireWildcard(_keyboardUtils);
	
	var _NodeUtils = __webpack_require__(51);
	
	var NodeUtils = _interopRequireWildcard(_NodeUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @tree-selectionModes-multiSelection */
	var shifting = false;
	
	function onDocKey(e) {
	  shifting = e.shiftKey;
	}
	
	function applyLogic(node) {
	  node.setAttribute('aria-selected', 'false');
	
	  document.removeEventListener('keydown', onDocKey);
	  document.removeEventListener('keyup', onDocKey);
	  document.addEventListener('keydown', onDocKey);
	  document.addEventListener('keyup', onDocKey);
	
	  node.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var method = shifting ? 'addNodeToSelection' : 'selectNode';
	
	    if (NodeUtils.isOpen(node)) {
	      NodeUtils.closeNode(node);
	    } else if (NodeUtils.hasChildren(node)) {
	      NodeUtils.openNode(node);
	    }
	
	    NodeUtils.focusOnNode(node);
	    NodeUtils[method](node, true);
	  });
	
	  KeyboardUtils.onElementEnter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var activateable = void 0;
	    for (var i = 0; i < node.children.length; i++) {
	      var item = node.children[i];
	      if (item.tagName === 'A' || item.tagName === 'BUTTON') {
	        activateable = item;
	        break;
	      }
	    }
	
	    if (activateable) {
	      activateable.click();
	    }
	  });
	
	  KeyboardUtils.onElementSpace(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    if (e.ctrlKey) {
	      NodeUtils.toggleNodeSelection(node, true);
	    }
	  });
	
	  KeyboardUtils.onElementCharacter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var character = String.fromCharCode(e.which).toUpperCase();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	
	    var thisFound = false;
	    var target = nodes.filter(function (item) {
	      // discard 'previous' nodes:
	      if (thisFound) {
	        return true;
	      }
	      if (item === node) {
	        thisFound = true;
	      }
	      return false;
	    }).reduce(function (acc, val) {
	      // grab next one starting with char
	      if (acc) {
	        return acc;
	      }
	      if (val.innerText.charAt(0).toUpperCase() === character) {
	        return val;
	      }
	    }, null);
	
	    if (target) {
	      NodeUtils.focusOnNode(target);
	      NodeUtils.selectNode(target, true);
	    }
	  });
	
	  KeyboardUtils.onElementHome(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var target = NodeUtils.getRootNode(node.getAttribute('data-tree-root'));
	    NodeUtils.focusOnNode(target);
	
	    if (e.shiftKey) {
	      var current = NodeUtils.getPreviousVisibleNode(node);
	      if (current.getAttribute('aria-selected') === node.getAttribute('aria-selected')) {
	        NodeUtils.toggleNodeSelection(node, true);
	      }
	
	      while (current !== target) {
	        NodeUtils.toggleNodeSelection(current, true);
	        current = NodeUtils.getPreviousVisibleNode(current);
	      }
	
	      NodeUtils.toggleNodeSelection(target, true);
	    } else {
	      NodeUtils.selectNode(target, true);
	    }
	  });
	
	  KeyboardUtils.onElementEnd(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	    var target = nodes.reverse()[0];
	    NodeUtils.focusOnNode(target);
	
	    if (e.shiftKey) {
	      var current = NodeUtils.getNextVisibleNode(node);
	
	      if (current.getAttribute('aria-selected') === node.getAttribute('aria-selected')) {
	        NodeUtils.toggleNodeSelection(node, true);
	      }
	
	      while (current !== target) {
	        NodeUtils.toggleNodeSelection(current, true);
	        current = NodeUtils.getNextVisibleNode(current);
	      }
	
	      NodeUtils.toggleNodeSelection(target, true);
	    } else {
	      NodeUtils.selectNode(target, true);
	    }
	  });
	
	  KeyboardUtils.onElementDown(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getNextVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	
	    if (e.ctrlKey) {
	      return;
	    }
	    if (e.shiftKey) {
	      if (sibling.getAttribute('aria-selected') === node.getAttribute('aria-selected')) {
	        return NodeUtils.toggleNodeSelection(node, true);
	      }
	      return NodeUtils.toggleNodeSelection(sibling, true);
	    }
	
	    NodeUtils.selectNode(sibling, true);
	  });
	
	  KeyboardUtils.onElementUp(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getPreviousVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	
	    if (e.ctrlKey) {
	      return;
	    }
	    if (e.shiftKey) {
	      if (sibling.getAttribute('aria-selected') === node.getAttribute('aria-selected')) {
	        return NodeUtils.toggleNodeSelection(node, true);
	      }
	
	      return NodeUtils.toggleNodeSelection(sibling, true);
	    }
	
	    NodeUtils.selectNode(sibling, true);
	  });
	
	  KeyboardUtils.onElementRight(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (NodeUtils.hasChildren(node) && !NodeUtils.isOpen(node)) {
	      NodeUtils.openNode(node);
	    } else {
	      var child = NodeUtils.getFirstChild(node);
	      NodeUtils.focusOnNode(child);
	
	      if (e.ctrlKey) {
	        return;
	      }
	      if (e.shiftKey) {
	        return NodeUtils.addNodeToSelection(child);
	      }
	
	      NodeUtils.selectNode(child, true);
	    }
	  });
	
	  KeyboardUtils.onElementLeft(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (!NodeUtils.hasChildren(node) || !NodeUtils.isOpen(node)) {
	      var parent = NodeUtils.getParent(node);
	      NodeUtils.focusOnNode(parent);
	
	      if (e.ctrlKey) {
	        return;
	      }
	      if (e.shiftKey) {
	        return NodeUtils.addNodeToSelection(parent);
	      }
	
	      return NodeUtils.selectNode(parent, true);
	    }
	
	    return NodeUtils.closeNode(node);
	  });
	}
	/* end @tree-selectionModes-multiSelection */

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createMenu;
	
	var _navigationLogic = __webpack_require__(56);
	
	var _navigationLogic2 = _interopRequireDefault(_navigationLogic);
	
	var _buildMenuItem = __webpack_require__(60);
	
	var _buildMenuItem2 = _interopRequireDefault(_buildMenuItem);
	
	var _containerUtils = __webpack_require__(63);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* @menu */
	function setOrientation(menu, _ref) {
	  var _ref$orientation = _ref.orientation,
	      orientation = _ref$orientation === undefined ? 'horizontal' : _ref$orientation;
	
	  if (orientation === 'horizontal') {
	    menu.classList.add('horizontal');
	    menu.setAttribute('aria-orientation', 'horizontal');
	  }
	
	  if (orientation === 'vertical') {
	    menu.classList.add('vertical');
	    menu.setAttribute('aria-orientation', 'vertical');
	  }
	
	  return menu;
	}
	
	function setRole(menu, _ref2) {
	  var trigger = _ref2.trigger;
	
	  if (trigger) {
	    trigger.setAttribute('aria-haspopup', 'true');
	    menu.setAttribute('role', 'menu');
	    menu.classList.add('hidden');
	
	    trigger.addEventListener('click', function () {
	      menu.classList.remove('hidden');
	    });
	
	    return menu;
	  }
	
	  menu.setAttribute('role', 'menubar');
	  return menu;
	}
	
	function createMenu(container, data, config) {
	  var menu = document.createElement('ul');
	  menu.classList.add('deque');
	  setRole(menu, config);
	  setOrientation(menu, config);
	
	  container.appendChild(menu);
	
	  var currentRadioGroup = null;
	  var currentCheckboxGroup = null;
	
	  data.map(function (item) {
	    return (0, _buildMenuItem2.default)(item, config);
	  }).forEach(function (li) {
	    var itemRole = li.getAttribute('role');
	    var dataGroup = li.getAttribute('data-group');
	    if (itemRole === 'menuitemcheckbox' && dataGroup) {
	      var groupName = dataGroup;
	
	      if (!currentCheckboxGroup || currentCheckboxGroup.getAttribute('group-name') !== groupName) {
	        currentCheckboxGroup = (0, _containerUtils.createFieldset)(groupName);
	        currentCheckboxGroup.setAttribute('group-name', groupName);
	        menu.appendChild(currentCheckboxGroup);
	      }
	
	      return currentCheckboxGroup.appendChild(li);
	    } else {
	      currentCheckboxGroup = null;
	    }
	
	    if (itemRole === 'menuitemradio') {
	      var _groupName = li.getAttribute('data-group');
	
	      if (!currentRadioGroup || currentRadioGroup.getAttribute('group-name') !== _groupName) {
	        currentRadioGroup = (0, _containerUtils.createFieldset)(_groupName);
	        currentRadioGroup.setAttribute('group-name', _groupName);
	        menu.appendChild(currentRadioGroup);
	      }
	
	      return currentRadioGroup.appendChild(li);
	    } else {
	      currentRadioGroup = null;
	    }
	
	    menu.appendChild(li);
	  });
	
	  (0, _navigationLogic2.default)(menu, config);
	
	  var firstChild = menu.querySelector('li');
	  firstChild.setAttribute('tabindex', '0');
	}
	/* end @menu */

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyNavigationLogic;
	
	var _keyboardUtils = __webpack_require__(43);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	var _menuItemUtils = __webpack_require__(57);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _vertical = __webpack_require__(58);
	
	var vertical = _interopRequireWildcard(_vertical);
	
	var _horizontal = __webpack_require__(59);
	
	var horizontal = _interopRequireWildcard(_horizontal);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var keyHandlers = { vertical: vertical, horizontal: horizontal };
	
	function getLatestParentItem(node) {
	  var role = node.getAttribute('role') || '';
	  if (role.indexOf('menuitem') === 0) {
	    return node;
	  }
	
	  var parent = node.parentElement;
	  if (!parent) {
	    return null;
	  }
	  if (node === parent) {
	    return null;
	  }
	
	  return getLatestParentItem(parent);
	}
	
	function applyNavigationLogic(menu, _ref) {
	  var _ref$orientation = _ref.orientation,
	      orientation = _ref$orientation === undefined ? 'vertical' : _ref$orientation,
	      _ref$wrap = _ref.wrap,
	      wrap = _ref$wrap === undefined ? false : _ref$wrap;
	
	  if (orientation !== 'vertical' && orientation !== 'horizontal') {
	    throw new Error('orientation must be either `vertical` or `horizontal`');
	  }
	
	  menu.addEventListener('click', function (e) {
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	    mu.setFocus(target);
	  });
	
	  kb.onElementUp(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].up(target, wrap);
	  });
	
	  kb.onElementDown(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].down(target, wrap);
	  });
	
	  kb.onElementLeft(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].left(target, wrap);
	  });
	
	  kb.onElementRight(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].right(target, wrap);
	  });
	
	  kb.onElementHome(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].home(target, wrap);
	  });
	
	  kb.onElementEnd(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].end(target, wrap);
	  });
	
	  kb.onElementCharacter(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    var char = String.fromCharCode(e.which);
	    keyHandlers[orientation].char(target, char);
	  });
	}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.finishInteraction = finishInteraction;
	exports.getMenuFromItem = getMenuFromItem;
	exports.getAllItemsInMenu = getAllItemsInMenu;
	exports.hasChildren = hasChildren;
	exports.isOpen = isOpen;
	exports.openSubmenu = openSubmenu;
	exports.closeSubmenu = closeSubmenu;
	exports.setFocus = setFocus;
	exports.getParent = getParent;
	exports.getFirstChild = getFirstChild;
	exports.getFirstSibling = getFirstSibling;
	exports.getPreviousSibling = getPreviousSibling;
	exports.getNextSibling = getNextSibling;
	exports.getLastSibling = getLastSibling;
	exports.getFirstMenuItem = getFirstMenuItem;
	exports.getLastMenuItem = getLastMenuItem;
	exports.getPreviousSiblingWhere = getPreviousSiblingWhere;
	exports.getNextSiblingWhere = getNextSiblingWhere;
	/* @menu-menuItemUtils */
	function finishInteraction(menuitem) {
	  var menu = getMenuFromItem(menuitem);
	  if (menu) {
	    var role = menu.getAttribute('role');
	
	    getAllItemsInMenu(menu).forEach(closeSubmenu);
	
	    if (role === 'menu') {
	      menu.classList.add('hidden');
	    }
	  }
	}
	
	// given some menu item, return the entire menu.
	function getMenuFromItem(menuitem) {
	  var parentItem = getParent(menuitem);
	
	  while (1) {
	    var newParent = getParent(parentItem);
	
	    // this will always be true eventually
	    if (parentItem === newParent) {
	      break;
	    }
	    parentItem = newParent;
	  }
	
	  var maybeParent = parentItem.parentElement;
	  var role = maybeParent.getAttribute('role');
	  if (role === 'menu' || role === 'menubar') {
	    return maybeParent;
	  }
	
	  return null;
	}
	
	function getAllItemsInMenu(menu) {
	  var output = [];
	
	  var result = menu.querySelectorAll('[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]');
	  for (var i = 0; i < result.length; i++) {
	    output.push(result[i]);
	  }
	
	  return output;
	}
	
	function hasChildren(menuitem) {
	  return !!menuitem.querySelector('ul');
	}
	
	function isOpen(menuitem) {
	  return hasChildren(menuitem) && menuitem.classList.contains('menu-open');
	}
	
	function openSubmenu(menuitem) {
	  if (!hasChildren(menuitem)) {
	    return;
	  }
	
	  menuitem.classList.add('menu-open');
	  menuitem.setAttribute('aria-expanded', 'true');
	  var firstChild = getFirstChild(menuitem);
	  setFocus(firstChild);
	}
	
	function closeSubmenu(menuitem) {
	  if (!hasChildren(menuitem) || !isOpen(menuitem)) {
	    return;
	  }
	
	  menuitem.classList.remove('menu-open');
	  menuitem.setAttribute('aria-expanded', 'false');
	  setFocus(menuitem);
	}
	
	function setFocus(menuitem) {
	  var rootMenu = getMenuFromItem(menuitem);
	
	  var allMenuItems = getAllItemsInMenu(rootMenu);
	  allMenuItems.forEach(function (item) {
	    if (item === menuitem) {
	      item.setAttribute('tabindex', '0');
	      item.focus();
	    } else {
	      item.setAttribute('tabindex', '-1');
	    }
	
	    // close all submenus that aren't ancestors of the item
	    var isParent = item.contains(menuitem);
	    if (!isParent && hasChildren(item)) {
	      item.classList.remove('menu-open');
	    }
	  });
	}
	
	function getParent(menuitem) {
	  var parentCandidate = menuitem.parentElement.parentElement;
	
	  if (menuitem.parentElement.tagName.toUpperCase() === 'FIELDSET') {
	    parentCandidate = menuitem.parentElement.parentElement.parentElement;
	  }
	
	  if (parentCandidate.getAttribute('role') === 'menuitem') {
	    return parentCandidate;
	  }
	
	  return menuitem;
	}
	
	function getFirstChild(menuitem) {
	  return menuitem.querySelector('ul li:not([role="separator"])') || menuitem;
	}
	
	function getFirstSibling(menuitem) {
	  return menuitem.parentElement.children[0];
	}
	
	function getPreviousSibling(menuitem) {
	  var prev = menuitem.previousElementSibling;
	  while (prev && prev.getAttribute('role') === 'separator') {
	    prev = prev.previousElementSibling;
	  }
	
	  return prev || menuitem;
	}
	
	function getNextSibling(menuitem) {
	  var next = menuitem.nextElementSibling;
	  while (next && next.getAttribute('role') === 'separator') {
	    next = next.nextElementSibling;
	  }
	  return next || menuitem;
	}
	
	function getLastSibling(menuitem) {
	  var parentMenu = menuitem.parentElement;
	  var childrenOfParent = parentMenu.children;
	  return childrenOfParent[childrenOfParent.length - 1];
	}
	
	function getFirstMenuItem(menuitem) {
	  return getMenuFromItem(menuitem).children[0];
	}
	
	function getLastMenuItem(menuitem) {
	  var items = getMenuFromItem(menuitem).children;
	  return items[items.length - 1];
	}
	
	function getPreviousSiblingWhere(menuitem, predicate) {
	  var prev = getPreviousSibling(menuitem);
	  if (prev === menuitem) {
	    return predicate(prev) ? prev : null;
	  }
	
	  return predicate(prev) ? prev : getPreviousSiblingWhere(prev, predicate);
	}
	
	function getNextSiblingWhere(menuitem, predicate) {
	  var next = getNextSibling(menuitem);
	  if (next === menuitem) {
	    return predicate(next) ? next : null;
	  }
	
	  return predicate(next) ? next : getNextSiblingWhere(next, predicate);
	}
	/* end @menu-menuItemUtils */

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.up = up;
	exports.down = down;
	exports.right = right;
	exports.left = left;
	exports.home = home;
	exports.end = end;
	exports.char = char;
	
	var _menuItemUtils = __webpack_require__(57);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function up(node, wraps) {
	  var target = mu.getPreviousSibling(node);
	
	  if (node === target && wraps) {
	    target = mu.getLastSibling(node);
	  }
	
	  mu.setFocus(target);
	}
	
	function down(node, wraps) {
	  var target = mu.getNextSibling(node);
	  if (target === node && wraps) {
	    target = mu.getFirstSibling(node);
	  }
	
	  mu.setFocus(target);
	}
	
	function right(node) {
	  if (mu.hasChildren(node) && !mu.isOpen(node)) {
	    return mu.openSubmenu(node);
	  }
	
	  var parent = mu.getParent(node);
	  if (node === parent) {
	    return;
	  }
	
	  var aunt = mu.getNextSiblingWhere(parent, function (item) {
	    return mu.hasChildren(item);
	  });
	  if (aunt && aunt !== parent) {
	    mu.closeSubmenu(parent);
	    mu.openSubmenu(aunt);
	  }
	}
	
	function left(node) {
	  var parent = mu.getParent(node);
	  if (node === parent) {
	    return;
	  }
	  // always close the parent, if this is a subnode
	  mu.closeSubmenu(parent);
	
	  // if parent has a previous sibling that has children, open it.
	  var uncle = mu.getPreviousSiblingWhere(parent, function (item) {
	    return mu.hasChildren(item);
	  });
	
	  if (uncle && uncle !== parent) {
	    mu.openSubmenu(uncle);
	  }
	}
	
	function home(node, wraps) {
	  if (wraps) {
	    return;
	  }
	
	  var target = mu.getFirstMenuItem(node);
	  mu.setFocus(target);
	}
	
	function end(node, wraps) {
	  if (wraps) {
	    return;
	  }
	
	  mu.setFocus(mu.getLastMenuItem(node));
	}
	
	function char(node, letter) {
	  var target = mu.getNextSiblingWhere(node, function (item) {
	    return item.textContent.charAt(0).toUpperCase() === letter.toUpperCase();
	  });
	
	  if (target) {
	    mu.setFocus(target);
	  }
	}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.up = up;
	exports.down = down;
	exports.left = left;
	exports.right = right;
	exports.home = home;
	exports.end = end;
	exports.char = char;
	
	var _menuItemUtils = __webpack_require__(57);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function up(node) {
	  var parent = mu.getParent(node);
	  if (node === parent) {
	    return;
	  }
	  // always close the parent, if this is a subnode
	  mu.closeSubmenu(parent);
	
	  // if parent has a previous sibling that has children, open it.
	  var uncle = mu.getPreviousSiblingWhere(parent, function (item) {
	    return mu.hasChildren(item);
	  });
	
	  if (uncle && uncle !== parent) {
	    mu.openSubmenu(uncle);
	  }
	}
	
	function down(node) {
	  if (mu.hasChildren(node) && !mu.isOpen(node)) {
	    return mu.openSubmenu(node);
	  }
	
	  var parent = mu.getParent(node);
	  if (node === parent) {
	    return;
	  }
	
	  var aunt = mu.getNextSiblingWhere(parent, function (item) {
	    return mu.hasChildren(item);
	  });
	  if (aunt && aunt !== parent) {
	    mu.closeSubmenu(parent);
	    mu.openSubmenu(aunt);
	  }
	}
	
	function left(node, wraps) {
	  var target = mu.getPreviousSibling(node);
	
	  if (node === target && wraps) {
	    target = mu.getLastSibling(node);
	  }
	
	  mu.setFocus(target);
	}
	
	function right(node, wraps) {
	  var target = mu.getNextSibling(node);
	  if (target === node && wraps) {
	    target = mu.getFirstSibling(node);
	  }
	
	  mu.setFocus(target);
	}
	
	function home(node, wraps) {
	  if (wraps) {
	    return;
	  }
	
	  var target = mu.getFirstMenuItem(node);
	  mu.setFocus(target);
	}
	
	function end(node, wraps) {
	  if (wraps) {
	    return;
	  }
	
	  mu.setFocus(mu.getLastMenuItem(node));
	}
	
	function char(node, letter) {
	  var target = mu.getNextSiblingWhere(node, function (item) {
	    return item.textContent.charAt(0).toUpperCase() === letter.toUpperCase();
	  });
	
	  if (target) {
	    mu.setFocus(target);
	  }
	}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = buildMenuItem;
	
	var _item = __webpack_require__(61);
	
	var itemFactory = _interopRequireWildcard(_item);
	
	var _submenu = __webpack_require__(62);
	
	var submenuFactory = _interopRequireWildcard(_submenu);
	
	var _radio = __webpack_require__(64);
	
	var radioFactory = _interopRequireWildcard(_radio);
	
	var _checkbox = __webpack_require__(65);
	
	var checkboxFactory = _interopRequireWildcard(_checkbox);
	
	var _separator = __webpack_require__(66);
	
	var separatorFactory = _interopRequireWildcard(_separator);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var builders = {
	  item: itemFactory.build,
	  separator: separatorFactory.build,
	  checkbox: checkboxFactory.build,
	  radio: radioFactory.build,
	  submenu: submenuFactory.build
	}; /* @menu-buildMenuItem */
	function buildMenuItem(data, config) {
	  var output = builders[data.type](data, config);
	  if (data.classes) {
	    data.classes.forEach(function (c) {
	      output.classList.add(c);
	    });
	  }
	
	  if (data.disabled) {
	    output.setAttribute('aria-disabled', 'true');
	  }
	
	  return output;
	}
	/* end @menu-buildMenuItem */

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activate = activate;
	exports.build = build;
	
	var _menuItemUtils = __webpack_require__(57);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _keyboardUtils = __webpack_require__(43);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @menu-itemFactories-item */
	function activate(item, handler, e) {
	  if (item.getAttribute('aria-disabled') === 'true') {
	    return;
	  }
	
	  mu.finishInteraction(item);
	
	  if (handler) {
	    handler(e);
	  }
	}
	
	function build(data) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'menuitem');
	
	  if (data.label) {
	    output.innerText = data.label;
	  } else if (data.markup) {
	    output.innerHTML = data.markup;
	  }
	
	  var boundActionHandler = activate.bind(null, output, data.handler);
	  output.addEventListener('click', boundActionHandler);
	  kb.onElementEnter(output, boundActionHandler);
	
	  return output;
	}
	/* end @menu-itemFactories-item */

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activate = activate;
	exports.build = build;
	
	var _menuItemUtils = __webpack_require__(57);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _keyboardUtils = __webpack_require__(43);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	var _buildMenuItem = __webpack_require__(60);
	
	var _buildMenuItem2 = _interopRequireDefault(_buildMenuItem);
	
	var _containerUtils = __webpack_require__(63);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @menu-itemFactories-submenu */
	function activate(item) {
	  if (item.getAttribute('aria-disabled') === 'true') {
	    return;
	  }
	
	  if (mu.isOpen(item)) {
	    mu.closeSubmenu(item);
	  } else {
	    mu.openSubmenu(item);
	  }
	}
	
	function build(data, config) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'menuitem');
	  output.setAttribute('aria-haspopup', 'true');
	  output.setAttribute('aria-expanded', 'false');
	
	  if (data.label) {
	    output.innerText = data.label;
	  } else if (data.markup) {
	    output.innerHTML = data.markup;
	  }
	
	  var currentRadioGroup = null;
	  var currentCheckboxGroup = null;
	
	  var submenu = document.createElement('ul');
	  data.children.map(function (item) {
	    return (0, _buildMenuItem2.default)(item, config);
	  }).forEach(function (li) {
	    var itemRole = li.getAttribute('role');
	    var dataGroup = li.getAttribute('data-group');
	    if (itemRole === 'menuitemcheckbox' && dataGroup) {
	      var groupName = dataGroup;
	
	      if (!currentCheckboxGroup || currentCheckboxGroup.getAttribute('group-name') !== groupName) {
	        currentCheckboxGroup = (0, _containerUtils.createFieldset)(groupName);
	        currentCheckboxGroup.setAttribute('group-name', groupName);
	        submenu.appendChild(currentCheckboxGroup);
	      }
	
	      return currentCheckboxGroup.appendChild(li);
	    } else {
	      currentCheckboxGroup = null;
	    }
	
	    if (itemRole === 'menuitemradio') {
	      var _groupName = li.getAttribute('data-group');
	
	      if (!currentRadioGroup || currentRadioGroup.getAttribute('group-name') !== _groupName) {
	        currentRadioGroup = (0, _containerUtils.createFieldset)(_groupName);
	        currentRadioGroup.setAttribute('group-name', _groupName);
	        submenu.appendChild(currentRadioGroup);
	      }
	
	      return currentRadioGroup.appendChild(li);
	    } else {
	      currentRadioGroup = null;
	    }
	
	    submenu.appendChild(li);
	  });
	
	  var boundActivation = activate.bind(null, output);
	
	  output.addEventListener('click', boundActivation);
	  kb.onElementEnter(output, boundActivation);
	
	  kb.onElementEscape(submenu, function () {
	    mu.closeSubmenu(output);
	  });
	
	  var indicator = document.createElement('div');
	  indicator.classList.add('indicator');
	  output.appendChild(indicator);
	
	  output.appendChild(submenu);
	  return output;
	}
	/* end @menu-itemFactories-submenu */

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.elementIsChildOfElement = elementIsChildOfElement;
	exports.createFieldset = createFieldset;
	exports.createLiveRegion = createLiveRegion;
	
	var _guidUtils = __webpack_require__(42);
	
	/* @containerUtils */
	function elementIsChildOfElement(child, potentialParent) {
	  while (child) {
	    if (child === potentialParent) {
	      return true;
	    }
	
	    child = child.parentNode;
	  }
	
	  return false;
	}
	
	function createFieldset(label) {
	  var fieldset = document.createElement('fieldset');
	  var legend = document.createElement('legend');
	  legend.classList.add('legend'); // for easy lookup regardless of mode
	  legend.id = (0, _guidUtils.generateGuid)();
	  legend.innerText = label;
	  fieldset.appendChild(legend);
	  return fieldset;
	}
	
	function createLiveRegion() {
	  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'polite';
	  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	  var output = document.createElement('span');
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	  output.id = (0, _guidUtils.generateGuid)();
	  output.setAttribute('aria-live', level);
	  output.classList.add('deque-visuallyhidden');
	  output.innerText = '';
	  output.notify = function (text) {
	    // TODO: Clean this up...no need to extend the element prototype
	    while (output.firstChild) {
	      output.removeChild(output.firstChild);
	    }
	    var msg = document.createElement('div');
	    msg.innerHTML = text;
	    output.appendChild(msg);
	  };
	
	  return output;
	}
	/* end @containerUtils */

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activate = activate;
	exports.build = build;
	
	var _menuItemUtils = __webpack_require__(57);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _keyboardUtils = __webpack_require__(43);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @menu-itemFactories-radio */
	function activate(item, e) {
	  e.stopPropagation();
	  e.preventDefault();
	
	  if (item.getAttribute('aria-disabled') === 'true') {
	    return;
	  }
	
	  var groupName = item.getAttribute('data-group');
	  var query = '[data-group="' + groupName + '"]';
	  var radioGroupMembers = document.querySelectorAll(query);
	
	  for (var i = 0; i < radioGroupMembers.length; i++) {
	    var target = radioGroupMembers[i];
	    if (target !== item) {
	      target.setAttribute('aria-checked', 'false');
	      target.querySelector('input').checked = false;
	    } else {
	      target.setAttribute('aria-checked', 'true');
	      target.querySelector('input').checked = true;
	    }
	  }
	
	  mu.finishInteraction(item);
	}
	
	function build(data) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'menuitemradio');
	
	  var label = document.createElement('label');
	  var radio = document.createElement('input');
	  radio.setAttribute('type', 'radio');
	  radio.name = data.radioGroup;
	  label.innerText = data.label;
	  label.appendChild(radio);
	  output.appendChild(label);
	
	  output.setAttribute('data-group', data.radioGroup);
	
	  radio.setAttribute('tabindex', '-1');
	  radio.setAttribute('style', 'pointer-events: none;');
	  radio.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	  });
	  radio.addEventListener('keypress', function (e) {
	    e.preventDefault();
	  });
	
	  var boundActivation = activate.bind(null, output);
	
	  output.setAttribute('aria-checked', 'false');
	  output.addEventListener('click', boundActivation);
	  kb.onElementEnter(output, boundActivation);
	  kb.onElementSpace(output, boundActivation);
	
	  return output;
	}
	/* end @menu-itemFactories-radio */

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activate = activate;
	exports.build = build;
	
	var _menuItemUtils = __webpack_require__(57);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _keyboardUtils = __webpack_require__(43);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @menu-itemFactories-checkbox */
	function activate(item, e) {
	  e.stopPropagation();
	  e.preventDefault();
	
	  if (item.getAttribute('aria-disabled') === 'true') {
	    return;
	  }
	
	  var wasChecked = item.getAttribute('aria-checked') === 'true';
	  var checkbox = item.querySelector('[type="checkbox"]');
	  checkbox.checked = !wasChecked;
	  item.setAttribute('aria-checked', !wasChecked);
	  mu.finishInteraction(item);
	}
	
	function build(data) {
	  var output = document.createElement('li');
	  var label = document.createElement('label');
	  var checkbox = document.createElement('input');
	  checkbox.setAttribute('type', 'checkbox');
	  label.innerText = data.label;
	  label.appendChild(checkbox);
	  output.appendChild(label);
	  output.setAttribute('role', 'menuitemcheckbox');
	
	  if (data.groupName) {
	    output.setAttribute('data-group', data.groupName);
	  }
	
	  var boundActivation = activate.bind(null, output);
	
	  checkbox.setAttribute('tabindex', '-1');
	  checkbox.setAttribute('style', 'pointer-events: none;');
	  checkbox.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	  });
	  checkbox.addEventListener('keypress', function (e) {
	    e.preventDefault();
	  });
	
	  output.addEventListener('click', boundActivation);
	  kb.onElementEnter(output, boundActivation);
	  kb.onElementSpace(output, boundActivation);
	
	  if (data.checked) {
	    checkbox.checked = true;
	    output.setAttribute('aria-checked', 'true');
	  } else {
	    output.setAttribute('aria-checked', 'false');
	  }
	
	  return output;
	}
	/* end @menu-itemFactories-checkbox */

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	/* @menu-itemFactories-separator */
	function build(data, config) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'separator');
	  output.setAttribute('aria-orientation', config.orientation);
	
	  return output;
	}
	/* end @menu-itemFactories-separator */

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createMultirange;
	
	var _thumb = __webpack_require__(68);
	
	var _keyboardUtils = __webpack_require__(43);
	
	/* @slider-multirange */
	function createMultirange(slider, thumbs, minValue, maxValue, orientation) {
	  var reverse = false;
	
	  if (reverse) {
	    thumbs.forEach(function (t) {
	      return t.stepSize *= -1;
	    });
	  }
	
	  var pixels = 200;
	
	  if (orientation === null) {
	    orientation = 'horizontal';
	  }
	
	  if (isNaN(minValue) || isNaN(maxValue)) {
	    throw new Error('min, max, initial values must all be numbers. StepSize must be a number.');
	  }
	
	  if (orientation !== 'horizontal' && orientation !== 'vertical') {
	    throw new Error('orientation must be either "horizontal" or "vertical", or blank (defaults to horizontal)');
	  }
	
	  if (orientation === 'vertical') {
	    var shouldSetOrient = function shouldSetOrient() {
	      // eslint-disable-line no-inner-declarations
	      // Internet Explorer 6-11
	      var isIE = false || !!document.documentMode; //@cc_on!@
	      // Edge 20+
	      var isEdge = !isIE && !!window.StyleMedia;
	      // Firefox 1.0+
	      var isFirefox = typeof InstallTrigger !== 'undefined';
	
	      return isIE || isEdge || isFirefox;
	    };
	
	    if (shouldSetOrient() === true) {
	      slider.setAttribute('orient', 'vertical');
	    }
	  }
	
	  // the rest of this code is only relevant if there is
	  // more than one thumb.
	
	  //slider.style.height = orientation === 'horizontal' ? '2px' : pixels + 'px';
	  //slider.style.width = orientation === 'horizontal' ? pixels + 'px' : '2px';
	
	  var inputs = slider.querySelectorAll('input');
	  var minValueInput = inputs[0];
	  var maxValueInput = inputs[1];
	
	  var thumbObjects = slider.querySelectorAll('button');
	  thumbObjects = Array.prototype.slice.call(thumbObjects);
	
	  for (var i = 0; i < thumbs.length; i++) {
	    (0, _thumb.createThumbControl)(thumbObjects[i], thumbs[i], minValue, maxValue, pixels, orientation);
	  }
	
	  thumbObjects.forEach(function (t, i) {
	    if (i === 0) {
	      bindInputToThumb(minValueInput, t, minValue, maxValue);
	    } else if (i === 1) {
	      bindInputToThumb(maxValueInput, t, minValue, maxValue);
	    }
	  });
	}
	
	function bindInputToThumb(input, thumb, min, max) {
	  input.addEventListener('blur', updateThumb);
	
	  (0, _keyboardUtils.onElementEnter)(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    updateThumb();
	  });
	
	  function updateThumb() {
	    var val = input.value;
	    if (thumb.textParser) {
	      val = thumb.textParser(val);
	    }
	
	    val = parseFloat(val);
	    if (!isNaN(val) && val <= max && val >= min && val != thumb.getAttribute('aria-valuenow')) {
	      thumb.setValue(val);
	    }
	  }
	
	  thumb.addEventListener('change', updateTextInput);
	
	  function updateTextInput() {
	    if (thumb.textParser) {
	      input.value = thumb.getAttribute('aria-valuetext');
	    } else {
	      input.value = thumb.getAttribute('aria-valuenow');
	    }
	  }
	
	  updateTextInput();
	}
	/* end @slider-multirange */

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createThumbControl = createThumbControl;
	
	var _keyboardUtils = __webpack_require__(43);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function createThumbControl(thumbObject, thumb, minValue, maxValue, pixels, orientation) {
	  if (orientation !== 'horizontal' && orientation !== 'vertical') {
	    throw new Error('Orientation must be either \'horizontal\' or \'vertical\'');
	  }
	
	  if (isNaN(thumb.stepSize)) {
	    throw new Error('Step size must be a number.');
	  }
	
	  if (isNaN(thumb.initialValue)) {
	    throw new Error('initial value must be a number.');
	  }
	
	  if (thumb.initialValue < minValue || thumb.initialValue > maxValue) {
	    throw new Error('initial value must be between min and max, inclusive.');
	  }
	
	  adjustAppearance(thumb.initialValue);
	  var valueText = thumb.labelFromValue(thumb.initialValue);
	  if (valueText !== thumb.initialValue) {
	    thumbObject.setAttribute('aria-valuetext', valueText);
	  }
	  // output.style.position = 'absolute';
	  // output.style.height = '10px';
	  // if (orientation === 'horizontal') {
	  //   output.style.top = '-7px';
	  // } else {
	  //   output.style.left = '-2px';
	  // }
	  //
	  // output.style.width = '10px';
	  // output.style.marginLeft = '-5px';
	
	  function setValueAttributes(value) {
	    var valueText = thumb.labelFromValue(value);
	    thumbObject.setAttribute('aria-valuenow', value);
	    if (valueText !== value) {
	      thumbObject.setAttribute('aria-valuetext', valueText);
	    } else {
	      thumbObject.removeAttribute('aria-valuetext');
	    }
	
	    var e;
	
	    try {
	      e = new CustomEvent('change', { 'bubbles': true, 'cancelable': true });
	    } catch (error) {
	      // hi IE, you're great. Let's go for a walk.
	      e = document.createEvent('CustomEvent');
	      e.initCustomEvent('change', true, true, {});
	    }
	
	    thumbObject.dispatchEvent(e);
	  }
	
	  function getPercentage(val) {
	    var range = maxValue - minValue;
	    var normalizedValue = val - minValue;
	    var percent = normalizedValue / range;
	    return percent;
	  }
	
	  // this should round to the nearest value that is
	  // an integer factor of the stepSize.
	  // when using keyboard, you always move up/down
	  // by either 1 or 10 times the stepSize; when using
	  // a mouse, though, the dragging is more analog - so
	  // you might get floating point values that are
	  // outside of the allowable range. This fixes that.
	  function normalize(v) {
	    var range = {
	      low: Math.floor(v / thumb.stepSize) * thumb.stepSize,
	      high: Math.ceil(v / thumb.stepSize) * thumb.stepSize
	    };
	
	    var lowDelta = range.low - v;
	    var highDelta = range.high - v;
	
	    if (Math.abs(lowDelta) <= Math.abs(highDelta)) {
	      return range.low;
	    }
	
	    return range.high;
	  }
	
	  function adjustValue(pixelPosition) {
	    var range = maxValue - minValue;
	    var percent = pixelPosition / pixels;
	    var oldValue = parseFloat(thumbObject.getAttribute('aria-valuenow'));
	    var newValue = minValue + range * percent;
	
	    newValue = normalize(newValue);
	
	    if (newValue !== oldValue) {
	      setValueAttributes(newValue);
	    }
	  }
	
	  function adjustAppearance(value) {
	    var offset = pixels * getPercentage(value);
	    if (orientation === 'horizontal') {
	      thumbObject.style.left = offset + 'px';
	    } else {
	      thumbObject.style.bottom = offset - 7 + 'px';
	    }
	  }
	
	  function applyDelta(delta) {
	    var oldValue = thumbObject.getAttribute('aria-valuenow');
	    var newValue = parseFloat(oldValue) + parseFloat(delta);
	    while (newValue < minValue) {
	      newValue++;
	    }
	
	    while (newValue > maxValue) {
	      newValue--;
	    }
	
	    if (newValue !== oldValue) {
	      setValueAttributes(newValue);
	      adjustAppearance(newValue);
	    }
	  }
	
	  kb.onElementRight(thumbObject, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(thumb.stepSize);
	  });
	
	  kb.onElementUp(thumbObject, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(thumb.stepSize);
	  });
	
	  kb.onElementLeft(thumbObject, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-thumb.stepSize);
	  });
	
	  kb.onElementDown(thumbObject, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-thumb.stepSize);
	  });
	
	  kb.onElementPageUp(thumbObject, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(10 * thumb.stepSize);
	  });
	
	  kb.onElementPageDown(thumbObject, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-10 * thumb.stepSize);
	  });
	
	  thumbObject.addEventListener('mousedown', function () {
	    startDrag();
	  });
	
	  function startDrag() {
	    thumbObject.classList.add('dragging');
	    document.body.addEventListener('mousemove', onDrag);
	    document.body.addEventListener('mouseup', stopDrag);
	  }
	
	  function getPoint(e) {
	    var x = e.clientX - thumbObject.parentElement.getBoundingClientRect().left;
	    var y = e.clientY - thumbObject.parentElement.getBoundingClientRect().top;
	
	    return { x: x, y: y };
	  }
	
	  function onDrag(e) {
	    var _getPoint = getPoint(e),
	        x = _getPoint.x,
	        y = _getPoint.y;
	
	    var targetValue = orientation === 'horizontal' ? x - 10 : pixels - y;
	
	    while (targetValue < 0) {
	      targetValue++;
	    }
	
	    while (targetValue > pixels) {
	      targetValue--;
	    }
	
	    if (orientation === 'horizontal') {
	      thumbObject.style.left = targetValue + 'px';
	    } else {
	      thumbObject.style.bottom = targetValue - 7 + 'px';
	    }
	
	    adjustValue(targetValue);
	  }
	
	  function stopDrag() {
	    thumbObject.classList.remove('dragging');
	    document.body.removeEventListener('mousemove', onDrag);
	    document.body.removeEventListener('mouseup', stopDrag);
	
	    var finalValue = thumbObject.getAttribute('aria-valuenow');
	
	    adjustAppearance(parseFloat(finalValue));
	  }
	
	  adjustAppearance(thumb.initialValue);
	
	  thumbObject.setValue = function (v) {
	    var value = normalize(v);
	    setValueAttributes(value);
	    adjustAppearance(value);
	  };
	}
	/*
	export function createThumbControl(min, max, pixels, orientation, {label, initialValue = min, stepSize = 1, classes = [], labelFromValue = (v) => v, textParser}) {
	  if (orientation !== 'horizontal' && orientation !== 'vertical') {
	    throw new Error('Orientation must be either \'horizontal\' or \'vertical\'');
	  }
	
	  if (isNaN(stepSize)) {
	    throw new Error('Step size must be a number.');
	  }
	
	  if(!Array.isArray(classes)) {
	    throw new Error('Classes must be provided as an array.');
	  }
	
	  if (isNaN(initialValue)) {
	    throw new Error('initial value must be a number.');
	  }
	
	  if (initialValue < min || initialValue > max) {
	    throw new Error('initial value must be between min and max, inclusive.');
	  }
	
	  let output = document.createElement('button');
	  output.classList.add('thumb');
	  output.setAttribute('role', 'slider');
	  output.setAttribute('aria-valuemin', min);
	  output.setAttribute('aria-valuemax', max);
	
	  output.setAttribute('aria-orientation', orientation);
	
	  if (label) {
	    output.setAttribute('aria-label', label);
	  }
	
	  adjustAppearance(initialValue);
	  output.setAttribute('aria-valuenow', initialValue);
	  let valueText = labelFromValue(initialValue);
	  if (valueText !== initialValue) {
	    output.setAttribute('aria-valuetext', valueText);
	  }
	  output.setAttribute('data-increment', stepSize);
	  classes.forEach(c => output.classList.add(c));
	
	  // output.style.position = 'absolute';
	  // output.style.height = '10px';
	  // if (orientation === 'horizontal') {
	  //   output.style.top = '-7px';
	  // } else {
	  //   output.style.left = '-2px';
	  // }
	  //
	  // output.style.width = '10px';
	  // output.style.marginLeft = '-5px';
	
	  function setValueAttributes(value) {
	    let valueText = labelFromValue(value);
	    output.setAttribute('aria-valuenow', value);
	    if (valueText !== value) {
	      output.setAttribute('aria-valuetext', valueText);
	    } else {
	      output.removeAttribute('aria-valuetext');
	    }
	
	    var e;
	
	    try {
	      e = new CustomEvent('change', {'bubbles':true, 'cancelable':true});
	    } catch(error) {
	      // hi IE, you're great. Let's go for a walk.
	      e = document.createEvent('CustomEvent');
	      e.initCustomEvent('change', true, true, {});
	    }
	
	    output.dispatchEvent(e);
	  }
	
	  let range = max - min;
	  function getPercentage(val) {
	    let normalizedValue = val - min;
	    let percent = normalizedValue / range;
	    return percent;
	  }
	
	  // this should round to the nearest value that is
	  // an integer factor of the stepSize.
	  // when using keyboard, you always move up/down
	  // by either 1 or 10 times the stepSize; when using
	  // a mouse, though, the dragging is more analog - so
	  // you might get floating point values that are
	  // outside of the allowable range. This fixes that.
	  function normalize(v) {
	    let range = {
	      low: Math.floor(v / stepSize) * stepSize,
	      high: Math.ceil(v / stepSize) * stepSize
	    };
	
	    let lowDelta = range.low - v;
	    let highDelta = range.high - v;
	
	    if (Math.abs(lowDelta) <= Math.abs(highDelta)) {
	      return range.low;
	    }
	
	    return range.high;
	  }
	
	  function adjustValue(pixelPosition) {
	    let percent = pixelPosition / pixels;
	    let oldValue = parseFloat(output.getAttribute('aria-valuenow'));
	    let newValue = min + (range * percent);
	
	    newValue = normalize(newValue);
	
	    if (newValue !== oldValue) {
	      setValueAttributes(newValue);
	    }
	  }
	
	  function adjustAppearance(value) {
	    let offset = pixels * getPercentage(value);
	    if (orientation === 'horizontal') {
	      output.style.left = offset + 'px';
	    } else {
	      output.style.bottom = (offset - 7) + 'px';
	    }
	
	  }
	
	  function applyDelta(delta) {
	    let oldValue = output.getAttribute('aria-valuenow');
	    let newValue = parseFloat(oldValue) + delta;
	    while(newValue < min) {
	      newValue++;
	    }
	
	    while(newValue > max) {
	      newValue--;
	    }
	
	    if (newValue !== oldValue) {
	      setValueAttributes(newValue);
	      adjustAppearance(newValue);
	    }
	  }
	
	  kb.onElementRight(output, (e) => {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(stepSize);
	  });
	
	  kb.onElementUp(output, (e) => {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(stepSize);
	  });
	
	  kb.onElementLeft(output, (e) => {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-stepSize);
	  });
	
	  kb.onElementDown(output, (e) => {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-stepSize);
	  });
	
	  kb.onElementPageUp(output, (e) => {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(10 * stepSize);
	  });
	
	  kb.onElementPageDown(output, (e) => {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-10 * stepSize);
	  });
	
	  output.addEventListener('mousedown', () => {
	    startDrag();
	  });
	
	  function startDrag() {
	    output.classList.add('dragging');
	    document.body.addEventListener('mousemove', onDrag);
	    document.body.addEventListener('mouseup', stopDrag);
	  }
	
	  function getPoint(e) {
	    let x = e.clientX - output.parentElement.getBoundingClientRect().left;
	    let y = e.clientY - output.parentElement.getBoundingClientRect().top;
	
	    return {x, y};
	  }
	
	  function onDrag(e) {
	    let {x, y} = getPoint(e);
	    let targetValue = (orientation === 'horizontal') ? x - 10: pixels - y;
	
	    while(targetValue < 0) {
	      targetValue++;
	    }
	
	    while(targetValue > pixels) {
	      targetValue--;
	    }
	
	    if (orientation === 'horizontal') {
	      output.style.left = targetValue + 'px';
	    } else {
	      output.style.bottom = (targetValue - 7) + 'px';
	    }
	
	    adjustValue(targetValue);
	  }
	
	  function stopDrag() {
	    output.classList.remove('dragging');
	    document.body.removeEventListener('mousemove', onDrag);
	    document.body.removeEventListener('mouseup', stopDrag);
	
	    let finalValue = output.getAttribute('aria-valuenow');
	
	    adjustAppearance(parseFloat(finalValue));
	  }
	
	  adjustAppearance(initialValue);
	
	  output.setValue = (v) => {
	    let value = normalize(v);
	    setValueAttributes(value);
	    adjustAppearance(value);
	  };
	
	  output.textParser = textParser;
	
	  return output;
	}
	*/
	/* end @multirange-thumb */
	/* @multirange-thumb */

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPredictiveText;
	
	var _dataValidator = __webpack_require__(70);
	
	var _formatter = __webpack_require__(71);
	
	var _guidUtils = __webpack_require__(42);
	
	var _keyboardUtils = __webpack_require__(43);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	var _navigation = __webpack_require__(72);
	
	var nav = _interopRequireWildcard(_navigation);
	
	var _containerUtils = __webpack_require__(63);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @predictive-text */
	function createPredictiveText(data) {
	  if (!data) {
	    throw new Error('data must be provided');
	  }
	  if (!(0, _dataValidator.validateData)(data)) {
	    throw new Error('data format invalid. Must either be an array of strings or an array of objects with a "label" field.');
	  }
	
	  var output = document.createElement('div');
	  output.classList.add('deque-predictive-text-combobox');
	
	  var input = document.createElement('input');
	  var hintId = (0, _guidUtils.generateGuid)();
	  var selectedHintClone = null;
	  var selectedHintCloneIndex = null;
	  // this prevents the browsers from helpfully suggesting
	  // their own predictive text feedback.
	  input.setAttribute('autocomplete', 'off');
	  input.setAttribute('type', 'text');
	  input.setAttribute('role', 'combobox');
	  input.setAttribute('aria-expanded', 'false');
	  input.setAttribute('aria-autocomplete', 'list');
	  input.setAttribute('aria-owns', hintId);
	
	  var hints = document.createElement('ul');
	  hints.id = hintId;
	  hints.classList.add('deque-predictive-text-hints');
	  hints.setAttribute('role', 'listbox');
	
	  var live = document.createElement('p');
	  live.classList.add('visuallyhidden');
	
	  var notificationTimeout = void 0;
	
	  function immediateNotification() {
	    var highlight = hints.querySelector('.deque-predictive-text-hint.highlight');
	    if (highlight) {
	      var indexPositionText = null;
	      var hintList = hints.querySelectorAll('li');
	      var hintListLength = hintList.length;
	      for (var i = 0; i < hintListLength; i++) {
	        if (hintList[i].innerText == highlight.innerText) {
	          indexPositionText = 'Option ' + (i + 1);
	          selectedHintCloneIndex = indexPositionText;
	        }
	      }
	      notify(live, indexPositionText + ' ' + highlight.innerText);
	    }
	  }
	
	  function prepareNotification() {
	    if (notificationTimeout) {
	      clearTimeout(notificationTimeout);
	      notificationTimeout = null;
	    }
	
	    var filteredOptions = hints.children;
	    if (filteredOptions.length === 0) {
	      return;
	    }
	
	    notificationTimeout = setTimeout(function () {
	      if (filteredOptions.length != 0) {
	        var isAre = filteredOptions.length === 1 ? 'is' : 'are';
	        var optionText = filteredOptions.length === 1 ? 'option' : 'options';
	
	        var message = 'There ' + isAre + ' currently ' + filteredOptions.length + ' ' + optionText + ' starting with ' + input.value.split('').join('') + '. Press down arrow to select an option';
	
	        var ua = window.navigator.userAgent;
	        var msie = ua.indexOf('Trident/');
	        if (msie > 0) {
	          message = 'There ' + isAre + ' currently ' + filteredOptions.length + ' ' + optionText + ' starting with ' + input.value.split('').join('') + '. Press up arrow and press down arrow two times to select an option';
	        }
	        var highlight = hints.querySelector('.deque-predictive-text-highlight');
	        if (highlight) {
	          message += ' Press down arrow for options, or Press enter to select ' + highlight.innerText;
	        }
	        notify(live, message);
	      }
	    }, 1200);
	  }
	
	  function showOptions() {
	    var filteredOptions = input.value.length > 0 ? filter(data, input.value) : data;
	    if (renderOptions(hints, filteredOptions)) {
	      input.setAttribute('aria-expanded', 'true');
	      hints.className = 'deque-predictive-text-hints expanded';
	      prepareNotification();
	      //let message = ' Press down arrow to select an option';
	      //notify(live, message);
	    } else {
	      hints.className = 'deque-predictive-text-hints collapsed';
	    }
	  }
	
	  input.addEventListener('input', function (e) {
	    if (input.value.length > 0 && e.currentTarget.value != '') {
	      showOptions();
	    } else {
	      input.setAttribute('aria-expanded', 'false');
	      hints.className += ' collapsed';
	      nav.clearList(hints);
	      input.blur();
	      input.focus();
	      input.select();
	    }
	  });
	
	  input.addEventListener('keyup', function (e) {
	    e.currentTarget.parentNode.parentNode.parentNode.querySelector('.feedback-holder').innerHTML = '';
	  });
	
	  kb.onElementSpace(input, function (e) {
	    if (e.ctrlKey && e.altKey) {
	      e.preventDefault();
	      e.stopPropagation();
	      showOptions();
	    }
	  });
	
	  kb.onElementUp(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    if (hints.children.length === 0) {
	      return showOptions();
	    }
	
	    nav.highlightPrev(hints);
	    var highlighted = hints.querySelector('[aria-selected="true"]');
	    if (highlighted) {
	      selectedHintClone = highlighted.innerHTML;
	      input.setAttribute('aria-activedescendant', highlighted.id);
	    }
	    immediateNotification();
	  });
	
	  kb.onElementDown(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (hints.children.length === 0) {
	      return showOptions();
	    }
	    nav.highlightNext(hints);
	    var highlighted = hints.querySelector('[aria-selected="true"]');
	    if (highlighted) {
	      selectedHintClone = highlighted.innerHTML;
	      input.setAttribute('aria-activedescendant', highlighted.id);
	    }
	    immediateNotification();
	  });
	
	  kb.onElementEnter(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    nav.confirmValue(input, hints);
	    if (input.value == selectedHintClone) {
	      notify(live, selectedHintCloneIndex + ' ' + input.value + ' selected');
	    }
	
	    input.setAttribute('aria-expanded', 'false');
	    hints.className += ' collapsed';
	    nav.clearList(hints);
	    clearTimeout(notificationTimeout);
	    input.focus();
	    input.select();
	    setTimeout(function () {
	      input.selectionStart = input.selectionEnd = 10000;
	    }, 0);
	  });
	
	  document.body.addEventListener('click', function (e) {
	    var clickTarget = e.target;
	    if (!(0, _containerUtils.elementIsChildOfElement)(clickTarget, output)) {
	      nav.clearList(hints);
	      input.setAttribute('aria-expanded', 'false');
	      hints.className = 'deque-predictive-text-hints collapsed';
	    }
	  });
	
	  /*
	  document.querySelector('.deque-predictive-text .deque-button').addEventListener('focus', function(e){
	    console.log(e.currentTarget);
	  });
	  
	  document.body.addEventListener('focusin', (e) => {
	    let focusTarget = e.target;
	    if (!elementIsChildOfElement(focusTarget, output)) {
	      nav.clearList(hints);
	    }
	  });
	  */
	
	  kb.onElementEscape(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    if (hints.children.length > 0) {
	      nav.clearList(hints);
	      input.setAttribute('aria-expanded', 'false');
	      hints.className = 'deque-predictive-text-hints collapsed';
	      clearTimeout(notificationTimeout);
	    } else {
	      input.value = '';
	      selectedHintClone = null;
	    }
	  });
	
	  hints.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    nav.confirmValue(input, hints);
	    nav.clearList(hints);
	    input.setAttribute('aria-expanded', 'false');
	    hints.className = 'deque-predictive-text-hints collapsed';
	    input.focus();
	    if (selectedHintClone == input.value) {
	      notify(live, selectedHintCloneIndex + ' ' + input.value + ' selected');
	    }
	    clearTimeout(notificationTimeout);
	  });
	
	  live.classList.add('live-update-region');
	  live.setAttribute('aria-live', 'polite');
	
	  output.appendChild(input);
	  output.appendChild(hints);
	  document.body.appendChild(live);
	
	  output.getInputElement = function () {
	    return input;
	  };
	
	  return output;
	}
	
	function renderOptions(list, options) {
	  list.innerHTML = '';
	  options.map(function (item) {
	    return (0, _formatter.createHint)(list, item);
	  }).forEach(function (item) {
	    return list.appendChild(item);
	  });
	
	  var firstItem = list.querySelector('li');
	  if (firstItem) {
	    //firstItem.classList.add('deque-predictive-text-highlight');
	    return true;
	  }
	}
	
	function filter(data, prompt) {
	  if (prompt.length === 0) {
	    return [];
	  }
	  return data.filter(function (str) {
	    return str.toLowerCase().indexOf(prompt.toLowerCase()) === 0;
	  });
	}
	
	var clearNotificationTimeout = void 0;
	function notify(live, message) {
	  if (clearNotificationTimeout) {
	    clearTimeout(clearNotificationTimeout);
	    clearNotificationTimeout = null;
	  }
	
	  live.innerText = message;
	  clearNotificationTimeout = setTimeout(function () {
	    live.innerText = '';
	  }, 6000);
	}
	/* end @predictive-text */

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateData = validateData;
	/* @predictive-text-dataValidator */
	function isString(v) {
	  return v && typeof v === 'string';
	}
	
	function isValidObject(v) {
	  return v && typeof v.label === 'string';
	}
	
	function validateData(data) {
	  if (!Array.isArray(data)) {
	    return false;
	  }
	  if (data.length === 0) {
	    return false;
	  }
	
	  return data.every(isString) || data.every(isValidObject);
	}
	/* end @predictive-text-dataValidator */

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createHint = createHint;
	
	var _navigation = __webpack_require__(72);
	
	var _guidUtils = __webpack_require__(42);
	
	/* @predictive-text-formatter */
	function createHint(list, item) {
	  if (item.label) {
	    return wrapItem(list, item);
	  }
	
	  return wrapString(list, item);
	}
	
	function wrapItem(list, item) {
	  var output = wrapString(list, item.label);
	  output.classList.add('complex_item');
	  output.$item = item;
	
	  return output;
	}
	
	function wrapString(list, string) {
	  var output = document.createElement('li');
	  output.id = (0, _guidUtils.generateGuid)();
	  output.innerText = string;
	  output.classList.add('deque-predictive-text-hint');
	  output.setAttribute('role', 'option');
	
	  output.addEventListener('mouseover', function () {
	    (0, _navigation.setHighlight)(list, output);
	  });
	
	  return output;
	}
	/* end @predictive-text-formatter */

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setHighlight = setHighlight;
	exports.highlightNext = highlightNext;
	exports.highlightPrev = highlightPrev;
	exports.clearList = clearList;
	exports.confirmValue = confirmValue;
	/* @predictive-text-navigation */
	function setHighlight(list, item) {
	  var allItems = list.querySelectorAll('li');
	  for (var i = 0; i < allItems.length; i++) {
	    if (item === allItems[i]) {
	      allItems[i].classList.add('highlight');
	      allItems[i].setAttribute('aria-selected', 'true');
	    } else {
	      allItems[i].classList.remove('highlight');
	      allItems[i].setAttribute('aria-selected', 'false');
	    }
	  }
	}
	
	function highlightNext(list) {
	  if (list.children.length === 0) {
	    return;
	  }
	
	  var target = void 0;
	  var current = list.querySelector('.highlight');
	  if (!current) {
	    target = list.querySelector('li');
	    return setHighlight(list, target);
	  }
	
	  target = current.nextElementSibling;
	  if (!target) {
	    target = list.querySelector('li');
	  }
	
	  setHighlight(list, target);
	}
	
	function highlightPrev(list) {
	  if (list.children.length === 0) {
	    return;
	  }
	
	  var target = void 0;
	  var current = list.querySelector('.highlight');
	  if (!current) {
	    target = list.querySelector('li');
	    return setHighlight(list, target);
	  }
	
	  target = current.previousElementSibling;
	  if (!target) {
	    var children = list.querySelectorAll('li');
	    target = children[children.length - 1];
	  }
	
	  setHighlight(list, target);
	}
	
	function clearList(list) {
	  if (list) {
	    list.innerHTML = '';
	  }
	}
	
	function confirmValue(input, list) {
	  var li = list.querySelector('.highlight');
	  if (li) {
	    input.value = li.innerText;
	  }
	}
	/* end @predictive-text-navigation */

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTabpanel;
	
	var _tabstopUtils = __webpack_require__(74);
	
	var _carouselControls = __webpack_require__(75);
	
	var _containerUtils = __webpack_require__(63);
	
	/* @tabpanel */
	function createTabpanel(widget, config) {
	
	  var widgetTablist = widget.querySelector('[role=tablist]');
	  widgetTablist.classList.add('deque-tabpanel-tablist');
	
	  var pause = widget.querySelector('.deque-tabpanel-button-bar');
	  if (pause && !pause.classList.contains('hidden')) {
	    pause.click();
	  }
	
	  function initializeTabs(widget) {
	    var tabs = widget.querySelectorAll('[role=tab]');
	    for (var i = 0; i < tabs.length; i++) {
	      tabs[i].classList.add('deque-tabpanel-tab');
	      if (i == 0) {
	        tabs[i].setAttribute('aria-selected', 'true');
	        tabs[i].setAttribute('tabindex', '0');
	      } else {
	        tabs[i].setAttribute('aria-selected', 'false');
	        tabs[i].setAttribute('tabindex', '-1');
	      }
	    }
	    return tabs;
	  }
	  var tabs = initializeTabs(widget);
	
	  function initializePanels(widget) {
	    var panels = widget.querySelectorAll('[role=tabpanel]');
	    for (var i = 0; i < panels.length; i++) {
	      panels[i].classList.add('deque-tabpanel-tabpanel');
	      if (i != 0) {
	        panels[i].classList.add('deque-hidden');
	      }
	    }
	    return panels;
	  }
	  var panels = initializePanels(widget);
	
	  // create a live region to toss tab-panel-related announcements into
	  var region = (0, _containerUtils.createLiveRegion)();
	  document.body.appendChild(region);
	
	  var autoplayControls;
	  var autoplayConfig;
	  if (config.autoplay) {
	    autoplayConfig = {
	      onPlay: function onPlay() {},
	      onPause: function onPause() {},
	      onNext: function onNext() {
	        var nextTab = getNext(getCurrentTab(tabs));
	        selectTab(nextTab, tabs, panels);
	        region.notify(nextTab.innerText + 'tab');
	      },
	      onPrevious: function onPrevious() {
	        var previousTab = getPrev(getCurrentTab(tabs));
	        selectTab(previousTab, tabs, panels);
	        region.notify(previousTab.innerText + 'tab');
	      }
	    };
	
	    autoplayControls = (0, _carouselControls.activateCarouselControls)(widget, region, autoplayConfig, config.autoplay || 3000);
	  }
	
	  function selectTab(selectedTab, tabs, panels) {
	    var selectedTabLabeledBy = selectedTab.getAttribute('aria-controls');
	
	    for (var i = 0; i < panels.length; i++) {
	      if (panels[i].id === selectedTabLabeledBy) {
	        panels[i].classList.remove('deque-hidden');
	      } else {
	        panels[i].classList.add('deque-hidden');
	      }
	    }
	
	    for (var j = 0; j < tabs.length; j++) {
	      if (tabs[j].getAttribute('aria-controls') === selectedTabLabeledBy) {
	        tabs[j].setAttribute('tabindex', '0');
	        tabs[j].setAttribute('aria-selected', 'true');
	      } else {
	        tabs[j].setAttribute('tabindex', '-1');
	        tabs[j].setAttribute('aria-selected', 'false');
	      }
	    }
	  }
	
	  function applyNavigationLogic(tabs, panels, _ref) {
	    var autoselect = _ref.autoselect,
	        vertical = _ref.vertical;
	
	
	    var tabstopConfig = {
	      onSpace: function onSpace(item) {
	        var selectedTabLabeledBy = item.getAttribute('aria-controls');
	        for (var i = 0; i < panels.length; i++) {
	          if (panels[i].id === selectedTabLabeledBy) {
	            panels[i].classList.remove('deque-hidden');
	          } else {
	            panels[i].classList.add('deque-hidden');
	          }
	        }
	      },
	      onClick: function onClick(item) {
	        var selectedTabLabeledBy = item.getAttribute('aria-controls');
	        for (var i = 0; i < panels.length; i++) {
	          if (panels[i].id === selectedTabLabeledBy) {
	            panels[i].classList.remove('deque-hidden');
	          } else {
	            panels[i].classList.add('deque-hidden');
	          }
	        }
	      },
	      select: selectTab,
	      useAriaSelected: true,
	      autoselect: autoselect
	    };
	
	    if (vertical) {
	      tabstopConfig.onUp = function (item) {
	        if (autoplayControls) {
	          autoplayControls.pause();
	        }
	
	        return getPrev(item);
	      };
	
	      tabstopConfig.onDown = function (item) {
	        if (autoplayControls) {
	          autoplayControls.pause();
	        }
	
	        return getNext(item);
	      };
	    } else {
	      tabstopConfig.onLeft = function (item) {
	        if (autoplayControls) {
	          autoplayControls.pause();
	        }
	
	        return getPrev(item);
	      };
	
	      tabstopConfig.onRight = function (item) {
	        if (autoplayControls) {
	          autoplayControls.pause();
	        }
	
	        return getNext(item);
	      };
	    }
	
	    (0, _tabstopUtils.createSingleTabstopStructure)(tabs, panels, tabstopConfig);
	  }
	
	  applyNavigationLogic(tabs, panels, config);
	
	  function getCurrentTab(tabs) {
	    for (var i = 0; i < tabs.length; i++) {
	      if (tabs[i].getAttribute('tabindex') === '0') {
	        return tabs[i];
	      }
	    }
	  }
	
	  function getPrev(item) {
	    var output = item.previousElementSibling || tabs[tabs.length - 1];
	    return output;
	  }
	
	  function getNext(item) {
	    var output = item.nextElementSibling || tabs[0];
	    return output;
	  }
	}
	
	function initializeAllTabpanels() {
	  var widgets = document.querySelectorAll('.deque-tabpanel');
	  var config;
	
	  for (var i = 0; i < widgets.length; i++) {
	    if (widgets[i].id == 'carousel') {
	      config = {
	        autoselect: true,
	        autoplay: 3000
	      };
	    } else {
	      config = {
	        autoselect: true,
	        autoplay: false
	      };
	    }
	    createTabpanel(widgets[i], config);
	  }
	}
	
	initializeAllTabpanels();
	/* end @tabpanel */

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createSingleTabstopStructure = createSingleTabstopStructure;
	
	var _keyboardUtils = __webpack_require__(43);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @tabstopUtils */
	function createSingleTabstopStructure(tabsNL, panels, config) {
	  var tabs = Array.prototype.slice.call(tabsNL);
	  tabs.forEach(function (tab) {
	    tab.addEventListener('focus', function () {
	      if (config.onFocus) {
	        config.onFocus(tab);
	      }
	    });
	
	    if (!config.select) {
	      config.select = function () {};
	    }
	
	    if (config.onClick) {
	      tab.addEventListener('click', function () {
	        config.onClick(tab);
	        config.select(tab, tabs, panels);
	      });
	    }
	
	    if (config.onSpace) {
	      kb.onElementSpace(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        config.onSpace(tab);
	        config.select(tab, tabs, panels);
	      });
	    }
	
	    if (config.onLeft) {
	      kb.onElementLeft(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	
	        var target = config.onLeft(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	
	    if (config.onRight) {
	      kb.onElementRight(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onRight(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	
	    if (config.onUp) {
	      kb.onElementUp(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onUp(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	
	    if (config.onDown) {
	      kb.onElementDown(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onDown(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	
	    if (config.onHome) {
	      kb.onElementHome(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onHome(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	
	    if (config.onEnd) {
	      kb.onElementEnd(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onEnd(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	
	    if (config.onPageUp) {
	      kb.onElementPageUp(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onPageUp(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	
	    if (config.onPageDown) {
	      kb.onElementPageDown(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onPageDown(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	
	    if (config.onCharacter) {
	      kb.onElementCharacter(tab, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onCharacter(tab);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target, tabs, panels);
	          }
	        }
	      });
	    }
	  });
	}
	/* end @tabstopUtils */

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.buildCarouselControls = buildCarouselControls;
	exports.activateCarouselControls = activateCarouselControls;
	
	var _containerUtils = __webpack_require__(63);
	
	/* @tabpanel-carouselControls */
	function createButton(label) {
	  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	  var output = document.createElement('button');
	  output.innerText = label;
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	  return output;
	}
	
	function buildCarouselControls(_ref) {
	  var onPlay = _ref.onPlay,
	      onPause = _ref.onPause,
	      onNext = _ref.onNext,
	      onPrevious = _ref.onPrevious;
	  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
	
	  var output = document.createElement('div');
	  output.className = 'output-wrap';
	  var prevButton = createButton('prev', ['prev']);
	  var playButton = createButton('play', ['play', 'hidden']);
	  var pauseButton = createButton('pause', ['pause']);
	  var nextButton = createButton('next', ['next']);
	
	  // create a live region to toss tab-panel-related announcements into
	  var region = (0, _containerUtils.createLiveRegion)();
	  document.body.appendChild(region);
	
	  var playInterval = void 0,
	      called = false;
	
	  var startPlaying = function startPlaying() {
	    if (playInterval) {
	      stopPlaying();
	    }
	    playInterval = setInterval(next, duration);
	    playButton.classList.add('hidden');
	    pauseButton.classList.remove('hidden');
	    pauseButton.focus();
	    if (onPlay) {
	      onPlay();
	    }
	    region.notify('Carousel playing');
	  };
	
	  var stopPlaying = function stopPlaying() {
	    clearInterval(playInterval);
	    playInterval = null;
	    playButton.classList.remove('hidden');
	    if (called) {
	      playButton.focus();
	    }
	    pauseButton.classList.add('hidden');
	    if (onPause) {
	      onPause();
	    }
	    called = true;
	    region.notify('Carousel paused');
	  };
	
	  var next = function next() {
	    if (onNext) {
	      onNext();
	    }
	  };
	
	  var prev = function prev() {
	    if (onPrevious) {
	      onPrevious();
	    }
	  };
	
	  nextButton.addEventListener('click', next);
	  prevButton.addEventListener('click', prev);
	  playButton.addEventListener('click', startPlaying);
	  pauseButton.addEventListener('click', stopPlaying);
	
	  output.appendChild(prevButton);
	  output.appendChild(playButton);
	  output.appendChild(pauseButton);
	  output.appendChild(nextButton);
	
	  startPlaying();
	
	  output.start = startPlaying;
	  output.pause = stopPlaying;
	  output.prev = prev;
	  output.next = next;
	  return output;
	}
	
	function activateCarouselControls(widget, region, _ref2) {
	  var onPlay = _ref2.onPlay,
	      onPause = _ref2.onPause,
	      onNext = _ref2.onNext,
	      onPrevious = _ref2.onPrevious;
	  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2000;
	
	  var output = widget.querySelector('.deque-tabpanel-button-bar');
	  var buttons = output.querySelectorAll('.deque-button');
	  var prevButton;
	  var playButton;
	  var pauseButton;
	  var nextButton;
	
	  for (var i = 0; i < buttons.length; i++) {
	    if (buttons[i].id == 'prevButton') {
	      prevButton = buttons[i];
	    } else if (buttons[i].id == 'playButton') {
	      playButton = buttons[i];
	    } else if (buttons[i].id == 'pauseButton') {
	      pauseButton = buttons[i];
	    } else if (buttons[i].id == 'nextButton') {
	      nextButton = buttons[i];
	    }
	  }
	
	  playButton.classList.add('deque-hidden');
	  playButton.classList.remove('deque-button');
	
	  var playInterval = false;
	
	  var startPlaying = function startPlaying() {
	    if (playInterval) {
	      stopPlaying();
	    }
	    playInterval = setInterval(next, duration);
	    playButton.classList.add('deque-hidden');
	    playButton.classList.remove('deque-button');
	    pauseButton.classList.remove('deque-hidden');
	    pauseButton.classList.add('deque-button');
	    pauseButton.focus();
	    if (onPlay) {
	      onPlay();
	    }
	    region.notify('Carousel playing');
	  };
	
	  var stopPlaying = function stopPlaying() {
	    clearInterval(playInterval);
	    playInterval = null;
	    playButton.classList.remove('deque-hidden');
	    playButton.classList.add('deque-button');
	    playButton.focus();
	    pauseButton.classList.add('deque-hidden');
	    pauseButton.classList.remove('deque-button');
	    if (onPause) {
	      onPause();
	    }
	
	    region.notify('Carousel paused');
	  };
	
	  var next = function next() {
	    if (onNext) {
	      onNext();
	    }
	  };
	
	  var prev = function prev() {
	    if (onPrevious) {
	      onPrevious();
	    }
	  };
	
	  nextButton.addEventListener('click', next);
	  prevButton.addEventListener('click', prev);
	  playButton.addEventListener('click', startPlaying);
	  pauseButton.addEventListener('click', stopPlaying);
	
	  startPlaying();
	
	  output.start = startPlaying;
	  output.pause = stopPlaying;
	  output.prev = prev;
	  output.next = next;
	  return output;
	}
	/* end @tabpanel-carouselControls */

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createProgressBar;
	/*
	TO DO:
	- add "Start Progressbar" button to bounded and
	unbounded progressbar in the HTML, and give them
	functionality in the page-specific JS initialization code
	- add "Reset" button to unbounded progressbar
	- separate the labeling (aria-label) and description
	(aria-describedby) from the JS. Put it in the initial
	HTML markup instead.
	*/
	
	/* @progressbar */
	function createProgressBar(progressBar, _ref) {
	  var _ref$bounded = _ref.bounded,
	      bounded = _ref$bounded === undefined ? false : _ref$bounded;
	
	  if (bounded) {
	    var minValue = progressBar.getAttribute('aria-valuemin');
	    var maxValue = progressBar.getAttribute('aria-valuemax');
	    progressBar.setAttribute('value-now', minValue);
	    progressBar.setAttribute('max', maxValue);
	    progressBar.setValue = function (v) {
	      if (v < minValue) {
	        v = minValue;
	      }
	
	      if (v > maxValue) {
	        v = maxValue;
	      }
	
	      var percent = parseInt(v / maxValue * 100);
	
	      progressBar.innerText = percent + '%';
	      progressBar.setAttribute('aria-valuenow', v);
	      progressBar.setAttribute('value-now', v);
	      progressBar.setAttribute('value', v);
	    };
	    progressBar.setValue(minValue);
	  }
	  return progressBar;
	}
	/* end @progressbar */

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createExpander;
	
	var _isDetailsSupported = __webpack_require__(78);
	
	var _isIOS = __webpack_require__(79);
	
	var _isIOS2 = _interopRequireDefault(_isIOS);
	
	var _keyboardUtils = __webpack_require__(43);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* @expander */
	function createExpander(container) {
	  var containerTag = container.tagName;
	  if (containerTag == 'DETAILS') {
	    if ((0, _isDetailsSupported.isDetailsSupported)() && !(0, _isIOS2.default)()) {
	      return html5Version(container);
	    } else {
	      return html4Version(container);
	    }
	  } else {
	    return html4Version(container);
	  }
	}
	
	function html5Version(container) {
	  var summary = container.querySelector('.deque-expander-summary');
	  if (summary.hasAttribute('aria-expanded')) {
	    return false;
	  }
	
	  summary.setAttribute('tabindex', '0');
	  summary.setAttribute('aria-expanded', 'false');
	
	  container.classList.add('deque-expander');
	  if (container.hasAttribute('open')) {
	    summary.setAttribute('aria-expanded', 'true');
	    container.setAttribute('open');
	  } else {
	    summary.setAttribute('aria-expanded', 'false');
	    container.removeAttribute('open');
	  }
	
	  // it would seem that browsers treat the <summary>
	  // element as if it were a button, i.e. automagically
	  // treat space and enter as 'click' events.
	  summary.setAttribute('role', 'button');
	  summary.setAttribute('aria-expanded', 'false');
	
	  function setOpenStatus() {
	    if (container.hasAttribute('open')) {
	      summary.setAttribute('aria-expanded', 'true');
	    } else {
	      summary.setAttribute('aria-expanded', 'false');
	    }
	  }
	
	  summary.addEventListener('click', function () {
	    setTimeout(setOpenStatus);
	  });
	}
	
	function html4Version(container) {
	  var containerTag = container.tagName;
	  var summary = container.querySelector('.deque-expander-summary');
	  if (summary.hasAttribute('aria-expanded')) {
	    return false;
	  }
	
	  if (containerTag == 'DETAILS') {
	    /* convert summary element to div */
	    var newSummary = document.createElement('div');
	    var summaryNodes = [],
	        summaryValues = []; //collects the names and values of the summary attributes into two arrays
	    for (var att, i = 0, atts = summary.attributes, n = atts.length; i < n; i++) {
	      att = atts[i];
	      summaryNodes.push(att.nodeName);
	      summaryValues.push(att.nodeValue);
	    }
	    for (var x = 0; x < summaryNodes.length; x++) {
	      newSummary.setAttribute(summaryNodes[x], summaryValues[x]); //puts the summary attributes onto the newly created div
	    }
	    newSummary.classList.add('deque-expander-summary');
	    newSummary.innerHTML = summary.innerHTML;
	    summary.parentNode.replaceChild(newSummary, summary);
	
	    /* convert details element to div */
	    var newContainer = document.createElement('div');
	    var detailsNodes = [],
	        detailsValues = []; //collects the names and values of the details attributes into two arrays
	    for (var attContainer, j = 0, attsContainer = container.attributes, m = attsContainer.length; j < m; j++) {
	      attContainer = attsContainer[j];
	      detailsNodes.push(attContainer.nodeName);
	      detailsValues.push(attContainer.nodeValue);
	    }
	    for (var y = 0; y < detailsNodes.length; y++) {
	      newContainer.setAttribute(detailsNodes[y], detailsValues[y]); //puts the details attributes onto the newly created div
	    }
	    newContainer.classList.add('deque-expander');
	    newContainer.innerHTML = container.innerHTML;
	    container.parentNode.replaceChild(newContainer, container);
	    container = newContainer;
	    summary = container.querySelector('.deque-expander-summary');
	  }
	  summary.setAttribute('tabindex', '0');
	  summary.setAttribute('aria-expanded', 'false');
	  summary.setAttribute('role', 'button');
	
	  var content = container.querySelector('.deque-expander-content');
	  content.classList.add('deque-hidden');
	
	  function toggle(e) {
	    var ua = window.navigator.userAgent;
	    var msie = ua.indexOf('Trident/');
	    var msedge = ua.indexOf('Edge');
	    if (msie > 0 || msedge > 0) {
	      window.onkeydown = function (e) {
	        return !(e.keyCode == 32);
	      };
	    }
	
	    e.stopPropagation();
	    e.preventDefault();
	    content.classList.toggle('deque-hidden');
	    if (content.classList.contains('deque-hidden')) {
	      summary.setAttribute('aria-expanded', 'false');
	    } else {
	      summary.setAttribute('aria-expanded', 'true');
	    }
	  }
	
	  (0, _keyboardUtils.onElementEnter)(summary, toggle);
	  (0, _keyboardUtils.onElementSpace)(summary, toggle);
	  summary.addEventListener('click', toggle);
	  summary.addEventListener('keyup', function (e) {
	    if (e.keyCode == 32) {
	      //toggle(e);
	    }
	  });
	}
	
	function activateAllExpanders() {
	  var expanders = document.querySelectorAll('.deque-expander');
	  for (var i = 0; i < expanders.length; i++) {
	    if (expanders[i]) {
	      if (expanders[i].querySelector('summary')) {
	        if (!expanders[i].querySelector('summary').hasAttribute('aria-expanded')) {
	          createExpander(expanders[i]);
	        }
	      }
	
	      if (expanders[i].querySelector('.deque-expander-summary')) {
	        if (!expanders[i].querySelector('.deque-expander-summary').hasAttribute('aria-expanded')) {
	          createExpander(expanders[i]);
	        }
	      }
	
	      /*
	      if(!(expanders[i].querySelector('summary').hasAttribute('aria-expanded')) || !(expanders[i].querySelector('.deque-expander-summary').hasAttribute('aria-expanded'))) {
	        console.log('iam in in');
	        createExpander(expanders[i]);
	      }
	      */
	    }
	  }
	}
	
	activateAllExpanders();
	/* end @expander */

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isDetailsSupported = isDetailsSupported;
	/* @expander-isDetailsSupported */
	function isDetailsSupported() {
	  var el = document.createElement('details');
	  var diff;
	
	  // return early if possible; thanks @aFarkas!
	  if (!('open' in el)) {
	    return false;
	  }
	
	  document.body.appendChild(el);
	  el.innerHTML = '<summary>a</summary>b';
	  diff = el.offsetHeight;
	  el.open = true;
	  diff = diff != el.offsetHeight;
	
	  document.body.removeChild(el);
	
	  return diff;
	}
	/* end @expander-isDetailsSupported */

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* @expander-isIOS */
	exports.default = function () {
	  return (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
	  );
	};
	/* end @expander-isIOS */

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = configureFormValidation;
	
	var _selectionUtils = __webpack_require__(37);
	
	var _default = __webpack_require__(81);
	
	var defaultValidators = _interopRequireWildcard(_default);
	
	var _validation = __webpack_require__(82);
	
	var _tooltip = __webpack_require__(41);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _password = __webpack_require__(83);
	
	var _text = __webpack_require__(86);
	
	var _feedbackArea = __webpack_require__(88);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @formValidation */
	var FEEDBACK_TYPES = {
	  TOP: 'top',
	  INLINE: 'inline'
	};
	
	function configureFormValidation(form, config) {
	  form.classList.add('deque');
	  form.setAttribute('novalidate', 'true');
	
	  var feedbackType = form.getAttribute('data-feedback-type') || FEEDBACK_TYPES.TOP;
	
	  var feedbackArea = (0, _feedbackArea.createFeedbackArea)();
	  form.insertBefore(feedbackArea, form.children[0]);
	
	  var passwordInputs = (0, _selectionUtils.queryAll)('[type="password"]', form);
	  if (config.passwordEvaluator && passwordInputs.length > 0) {
	    (0, _password.wireupPasswordEvaluator)(passwordInputs, config.passwordEvaluator, function (message, id, classes) {
	      feedbackArea.logNotification(message, id, classes);
	    });
	  }
	
	  var maxcharsInputs = (0, _selectionUtils.queryAll)('[maxlength]', form);
	
	  if (maxcharsInputs.length > 0) {
	    (0, _text.wireupMaxLengthNotifications)(maxcharsInputs, function (message, id, classes) {
	      feedbackArea.logNotification(message, id, classes);
	    });
	  }
	
	  var validators = _extends({}, config, defaultValidators);
	
	  function notifySuccess() {
	    feedbackArea.clear();
	    feedbackArea.logNotification('Form submission successful', 'successReport', ['success']);
	    // Below was added by Paul:
	    var errors = document.getElementsByClassName('errorExplanationOuterWrapper');
	    for (var i = 0; i < errors.length; i++) {
	      errors[i].parentNode.removeChild(errors[i]);
	    }
	  }
	
	  function notifyFailure(errors) {
	    feedbackArea.clear();
	    if (feedbackType === FEEDBACK_TYPES.TOP) {
	      /* the code below was added by Paul Bohman */
	      var plural = 'is';
	      var s = '';
	      if (errors.length > 1) {
	        plural = 'are';
	        s = 's';
	      }
	      feedbackArea.logNotification('<h4><strong>Error:</strong> There ' + plural + ' ' + errors.length + ' problem' + s + ' to fix in this form</h4>');
	      errors.forEach(function (m) {
	        return feedbackArea.logNotification(m, null, ['error']);
	      });
	      var inputs = document.getElementsByTagName('input');
	      for (var i = 0; i < inputs.length; ++i) {
	        var thisInput = inputs[i];
	        if (thisInput.getAttribute('aria-invalid')) {
	          var failedRequire = thisInput.getAttribute('data-validate-failed-require');
	          var failedPattern = thisInput.getAttribute('data-validate-failed-pattern');
	          var describedByOriginal = thisInput.getAttribute('aria-describedby');
	          var inputId = thisInput.id;
	          if (failedRequire || failedPattern) {
	            var descId = 'errorExplanation-' + inputId;
	            var describedBy = descId;
	            if (describedByOriginal) {
	              describedByOriginal = describedByOriginal.replace(descId, '').trim();
	              describedBy = (describedByOriginal + ' ' + descId).trim();
	            }
	            if (describedBy) {
	              thisInput.setAttribute('aria-describedby', describedBy);
	            }
	            if (failedRequire) {
	              failedRequire = '<span class="errorExplanation required">' + failedRequire + '</span>';
	            } else {
	              failedRequire = '';
	            }
	            if (failedPattern) {
	              failedPattern = '<span class="errorExplanation pattern">' + failedPattern + '</span>';
	            } else {
	              failedPattern = '';
	            }
	            var el = document.createElement('span');
	            el.className = 'errorExplanationOuterWrapper';
	            el.innerHTML = '<span class="errorExplanationWrapper icon message hidden" id="' + descId + '"><span class="deque glyph exclamation-triangle" aria-hidden="true"></span> ' + failedRequire + ' ' + failedPattern + '</span>';
	            if (thisInput.parentNode.querySelector('.errorExplanationOuterWrapper') == null) {
	              thisInput.parentNode.insertBefore(el, thisInput.nextSibling);
	            }
	          }
	        }
	      }
	    } else if (feedbackType === FEEDBACK_TYPES.INLINE) {
	      /* the code below was added by Paul Bohman
	       TO DO:
	          - we need to allow the option to put the error messages after the inputs and make them always invisible. When this option is chosen, the tooltips will not be available.
	              it will either be 1) visible always or 2) tooltip
	      */
	
	      inputs = document.getElementsByTagName('input');
	      for (var index = 0; i < inputs.length; index++) {
	        thisInput = inputs[i];
	        if (thisInput.getAttribute('aria-invalid')) {
	          el = document.createElement('span');
	          el.className = 'errorExplanationOuterWrapper';
	          el.innerHTML = '<span class="errorExplanationWrapper icon"><span class="fa fa-exclamation-triangle" aria-hidden="true"></span></span>';
	          thisInput.parentNode.insertBefore(el, thisInput.nextSibling);
	        }
	      }
	    }
	    /* end paul's added code */
	  }
	
	  form.addEventListener('submit', function (e) {
	    var inputs = (0, _selectionUtils.queryAll)('[data-validate]', form);
	    inputs.forEach(function (i) {
	      var validate = (0, _validation.getValidationFunction)(validators, i);
	
	      i.classList.remove('invalid');
	      i.removeAttribute('aria-invalid');
	      if (!validate()) {
	        i.classList.add('invalid');
	        i.setAttribute('aria-invalid', 'true');
	      }
	    });
	
	    var validated = inputs.every(function (i) {
	      return !i.classList.contains('invalid');
	    });
	
	    if (!validated) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      var invalidInputs = inputs.filter(function (i) {
	        return i.classList.contains('invalid');
	      });
	      var errors = (0, _validation.getValidationErrors)(invalidInputs, feedbackType === FEEDBACK_TYPES.INLINE);
	      notifyFailure(errors);
	      if (feedbackType === FEEDBACK_TYPES.TOP) {
	        var header = feedbackArea.querySelector('h4');
	        header.setAttribute('tabindex', '-1');
	        header.focus();
	      } else {
	        clearTooltips(form);
	        initTooltips(form);
	        form.querySelector('.invalid').focus();
	      }
	    } else {
	      notifySuccess();
	      clearTooltips(form);
	    }
	  });
	}
	
	function initTooltips(form) {
	  (0, _selectionUtils.queryAll)('[data-tooltip]', form).forEach(function (i) {
	    i.cancelTooltip = (0, _tooltip2.default)(i);
	  });
	}
	
	function clearTooltips(form) {
	  (0, _selectionUtils.queryAll)('[data-tooltip]', form).forEach(function (i) {
	    if (i.cancelTooltip) {
	      i.cancelTooltip();
	    }
	  });
	}
	/* end @formValidation */

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.required = required;
	exports.maxChars = maxChars;
	exports.isEmail = isEmail;
	exports.pattern = pattern;
	exports.isNumeric = isNumeric;
	exports.passwordStrength = passwordStrength;
	/* @formValidation-validators-default */
	function required(input) {
	  var val = !!input.value;
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-required') || 'failed to provide a required value.';
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-require', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-require');
	  }
	
	  return val;
	}
	
	function maxChars(input) {
	  var threshold = input.getAttribute('maxlength');
	
	  if (!threshold) {
	    throw new Error('The maxChars validator needs a maxlength attribute to test against.');
	  }
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-maxchars') || 'Value length exceeds threshold of ' + threshold;
	
	  var val = input.value.length <= threshold;
	  if (!val) {
	    input.setAttribute('data-validate-failed-max_chars', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-max_chars');
	  }
	
	  return val;
	}
	
	function isEmail(input) {
	  var val = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(input.value);
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-is_email') || 'value must be a valid email address';
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-is_email', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-is_email');
	  }
	
	  return val;
	}
	
	function pattern(input) {
	  var pattern = input.getAttribute('pattern');
	  if (!pattern) {
	    throw new Error('The pattern validator requires a pattern attribute to test against.');
	  }
	
	  var regExp = new RegExp(pattern);
	  var val = regExp.test(input.value);
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-pattern') || 'Value did not match pattern <' + pattern + '>';
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-pattern', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-pattern');
	  }
	
	  return val;
	}
	
	function isNumeric(input) {
	  var val = !isNaN(parseFloat(input.value));
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-is_numeric') || 'input is not a numeric value';
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-is_numeric', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-is_numeric');
	  }
	
	  return val;
	}
	
	function passwordStrength(input) {
	  var threshold = parseInt(input.getAttribute('data-validate-password-strength'));
	  if (!threshold || threshold < 0 || threshold > 4 || isNaN(threshold)) {
	    throw new Error('Using the password strength validator requires you to specify "data-validate-password-strenght" with a value between 0-4');
	  }
	
	  var qualityMeterId = input.getAttribute('aria-describedby');
	  if (!qualityMeterId) {
	    throw new Error('Your input should be `aria-describedby` a password quality feedback component. If not, did you pass in a `passwordEvaluator` function into your config?');
	  }
	
	  var qualityMeter = document.getElementById(qualityMeterId);
	  if (!qualityMeter) {
	    throw new Error('Your input should be `aria-describedby` a password quality feedback component. If not, did you pass in a `passwordEvaluator` function into your config?');
	  }
	
	  var quality = parseInt(qualityMeter.getAttribute('data-password-quality'));
	
	  if (isNaN(quality) || quality < 0 || quality > 4) {
	    throw new Error('Unable to read password quality from quality meter.');
	  }
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-password_strength') || 'Your password quality is ' + (quality + 1) + '/5 but needs to be at least ' + (threshold + 1) + '/5';
	
	  var val = quality >= threshold;
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-password_strength', errorMessage);
	  }
	
	  return val;
	}
	/* end @formValidation-validators-default */

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getValidationFunction = getValidationFunction;
	exports.getValidationErrors = getValidationErrors;
	
	var _collectionUtils = __webpack_require__(38);
	
	/* @form-validation */
	function getValidationFunction(validators, item) {
	  return item.getAttribute('data-validate').split(' ').map(function (validatorName) {
	    if (validators[validatorName]) {
	      return validators[validatorName].bind(null, item);
	    }
	
	    throw new Error('no validator defined for ' + validatorName);
	  }).reduce(function (f, v) {
	    return f.bind(null, v);
	  }, function () {
	    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	      funcs[_key] = arguments[_key];
	    }
	
	    return funcs.every(function (v) {
	      return v();
	    });
	  });
	}
	
	function getValidationErrors(inputs, appendTooltips) {
	  return inputs.map(function (input) {
	    var specifier = input.id || input.name;
	    var label = document.querySelector('[for=' + specifier + ']');
	    if (label) {
	      label = label.innerText;
	    } else {
	      label = 'An input';
	    }
	
	    var output = (0, _collectionUtils.toArray)(input.attributes).filter(function (a) {
	      return a.name.indexOf('data-validate-failed-') === 0;
	    }).map(function (a) {
	      return '<strong>' + label + ' </strong>: ' + a.value;
	    });
	
	    if (appendTooltips) {
	      var tt = output[0].split('</strong>: ')[1];
	      input.setAttribute('data-tooltip', tt);
	    }
	
	    return output;
	  }).reduce(function (acc, val) {
	    return acc.concat(val);
	  }, []);
	}
	/* end @form-validation */

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wireupPasswordEvaluator = wireupPasswordEvaluator;
	
	var _passwordEvaluation = __webpack_require__(84);
	
	var _formUtils = __webpack_require__(85);
	
	var _noclobberUtils = __webpack_require__(44);
	
	/* @formValidation-password */
	function wireupPasswordEvaluator(inputs, evaluator) {
	  var ratings = ['unacceptable', 'poor', 'ok', 'good', 'great'];
	
	  var timeout = void 0;
	  function queueNotification(input, score, sendNotification) {
	    if (timeout) {
	      clearTimeout(timeout);
	      timeout = null;
	    }
	
	    timeout = setTimeout(function () {
	      var label = (0, _formUtils.getLabel)(input);
	      var rating = ratings[score];
	      sendNotification('The password you\'ve entered for ' + label + ' is ' + rating + '.');
	    }, 2000);
	  }
	
	  if (evaluator && typeof evaluator === 'function') {
	    // this function should return a value between '0' and '4'.
	    // 0 means it's a really weak password, like 'password'
	    // 4 means it's a really good password
	    inputs.forEach(function (i) {
	      var passwordEvaluation = (0, _passwordEvaluation.createPasswordEvaluation)();
	      i.parentElement.insertBefore(passwordEvaluation, i);
	      i.parentElement.insertBefore(i, passwordEvaluation);
	      (0, _noclobberUtils.noClobber)(i, 'aria-describedby', passwordEvaluation.id);
	      i.addEventListener('input', function () {
	        var score = evaluator(i.value);
	        passwordEvaluation.update(score, ratings);
	        queueNotification(i, score, passwordEvaluation.notify);
	      });
	
	      var initialScore = evaluator(i.value);
	      passwordEvaluation.update(initialScore, ratings);
	    });
	  }
	}
	/* end @formValidation-password */

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPasswordEvaluation = createPasswordEvaluation;
	
	var _guidUtils = __webpack_require__(42);
	
	var _containerUtils = __webpack_require__(63);
	
	/* @formValidation-passwordEvaluation */
	function createLevelIndicator(level) {
	  var output = document.createElement('div');
	  output.classList.add('password_level');
	  output.classList.add('level' + level);
	
	  var indicator = document.createElement('img');
	  indicator.setAttribute('alt', '');
	  indicator.setAttribute('role', 'presentation');
	  output.appendChild(indicator);
	  return output;
	}
	
	function createPasswordEvaluation() {
	  var output = document.createElement('div');
	  output.id = (0, _guidUtils.generateGuid)();
	  /* altered by Paul Bohman
	  	TO DO:
	  		- This whole section needs to be altered so that it does not use images at all
	  		- we just need to create an inner container that can be set to red, orange, yellow, green, with different widths
	  		- also, we need to put real text on the screen, not ::before and ::after text for the password strength indicator
	  output.setAttribute('role', 'img');
	  */
	  output.classList.add('passwordEvaluation');
	  var level0 = createLevelIndicator(0);
	  var level1 = createLevelIndicator(1);
	  var level2 = createLevelIndicator(2);
	  var level3 = createLevelIndicator(3);
	  var level4 = createLevelIndicator(4);
	
	  output.appendChild(level0);
	  output.appendChild(level1);
	  output.appendChild(level2);
	  output.appendChild(level3);
	  output.appendChild(level4);
	  /* altered by Paul Bohman
	  let levelIndicators = [level0, level1, level2, level3, level4];
	  */
	  var alert = (0, _containerUtils.createLiveRegion)('polite');
	
	  output.update = function (score, ratings) {
	    output.setAttribute('data-password-quality', score);
	    output.setAttribute('aria-label', 'Password quality is ' + ratings[score]);
	    /* altered by Paul Bohman
	    levelIndicators.forEach(li => {
	      li.querySelector('img').setAttribute('src', `images/pw${score}.png`);
	    });
	    */
	  };
	
	  output.setAttribute('aria-describedby', alert.id);
	
	  // adding to body, as per Paul B's request
	  document.body.appendChild(alert);
	  var emptyInterval;
	  output.notify = function (text) {
	    alert.innerText = text;
	    if (emptyInterval) {
	      clearInterval(emptyInterval);
	    }
	
	    emptyInterval = setTimeout(function () {
	      alert.innerText = '';
	      emptyInterval = null;
	    }, 5000);
	  };
	
	  return output;
	}
	/* end @formValidation-passwordEvaluation */

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLabel = getLabel;
	/* @formUtils */
	function getLabel(input) {
	  if (input.hasAttribute('aria-label')) {
	    return input.getAttribute('aria-label');
	  }
	
	  var name = input.id || input.name;
	  if (!name) {
	    return 'unlabeled input';
	  }
	
	  var labelElement = document.querySelector('[for=' + name + ']');
	  var label = void 0;
	  if (labelElement) {
	    label = labelElement.innerText;
	  } else {
	    label = 'unlabeled input';
	  }
	
	  return label;
	}
	/* end @formUtils */

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wireupMaxLengthNotifications = wireupMaxLengthNotifications;
	
	var _charsRemaining = __webpack_require__(87);
	
	var _formUtils = __webpack_require__(85);
	
	/* @formValidation-text */
	function wireupMaxLengthNotifications(inputs) {
	
	  var timeout = void 0;
	  function queueNotification(input, sendNotification) {
	    if (timeout) {
	      clearTimeout(timeout);
	      timeout = null;
	    }
	
	    timeout = setTimeout(function () {
	      var label = (0, _formUtils.getLabel)(input);
	      var charCount = input.value.length;
	      var maxChars = parseInt(input.getAttribute('maxlength'));
	      var remaining = maxChars - charCount;
	
	      sendNotification(label + ': You\'ve used ' + charCount + ' out of ' + maxChars + ' characters and have ' + remaining + ' left.');
	    }, 500);
	  }
	
	  inputs.forEach(function (i) {
	    var maxChars = parseInt(i.getAttribute('maxlength'));
	    var feedback = (0, _charsRemaining.createCharsRemaining)(i);
	    i.setAttribute('aria-describedby', feedback.id);
	    i.addEventListener('input', function (e) {
	      var charCount = i.value.length;
	      if (charCount >= maxChars) {
	        e.preventDefault();
	        feedback.notify((0, _formUtils.getLabel)(i) + ': You\'ve used all ' + maxChars + ' characters available to this input.');
	      }
	
	      feedback.update(charCount, maxChars);
	    });
	
	    i.addEventListener('keyup', postUpdate);
	    i.addEventListener('paste', postUpdate);
	
	    // the notification queue gets invoked here, not on input,
	    // in case the form starts with this field populated. You
	    // don't want to get a dozen notifications from pre-pop'd
	    // inputs on page load.
	    function postUpdate() {
	      if (charCount > maxChars) {
	        i.value = i.value.substr(0, maxChars - 1);
	      }
	
	      var charCount = i.value.length;
	      feedback.update(charCount, maxChars);
	      queueNotification(i, feedback.notify);
	    }
	
	    i.parentElement.insertBefore(feedback, i);
	    i.parentElement.insertBefore(i, feedback);
	  });
	}
	/* end @formValidation-text */

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createCharsRemaining = createCharsRemaining;
	
	var _guidUtils = __webpack_require__(42);
	
	/* @formValidation-charsRemaining */
	function createCharsRemaining() {
	  var output = document.createElement('div');
	  output.id = (0, _guidUtils.generateGuid)();
	  var span = document.createElement('span');
	  output.appendChild(span);
	
	  output.classList.add('chars-remaining');
	  output.update = function (current, max) {
	    var newText = '(' + current + '/' + max + ')';
	    if (span.innerText === newText) {
	      return;
	    }
	
	    span.innerText = newText;
	  };
	
	  var alert = document.createElement('span');
	  alert.id = (0, _guidUtils.generateGuid)();
	  alert.setAttribute('aria-live', 'polite');
	  alert.setAttribute('role', 'log');
	  alert.setAttribute('aria-atomic', false);
	  alert.setAttribute('aria-relevant', 'additions');
	  alert.classList.add('visuallyhidden');
	  output.setAttribute('aria-describedby', alert.id);
	
	  // as per Paul B's request, live update region gets shunted to the
	  // end of the document so as not to confuse anyone.
	  document.body.appendChild(alert);
	
	  output.notify = function (text) {
	    alert.innerText = text;
	  };
	
	  return output;
	}
	/* end @formValidation-charsRemaining */

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createFeedbackArea = createFeedbackArea;
	/* @formValidation-feedbackArea */
	function createFeedbackArea() {
	  var output = document.createElement('div');
	  output.classList.add('feedback-holder');
	  output.setAttribute('role', 'alert');
	
	  output.clear = function () {
	    output.innerHTML = '';
	  };
	
	  output.clearID = function (id) {
	    if (!id) {
	      return;
	    }
	    var existing = output.querySelector('#' + id);
	    if (existing) {
	      output.removeChild(existing);
	    }
	  };
	
	  output.logNotification = function (message, id) {
	    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	    output.clearID(id);
	    var container = document.createElement('p');
	    container.innerHTML = message;
	    classes.forEach(function (c) {
	      return container.classList.add(c);
	    });
	    output.appendChild(container);
	  };
	
	  return output;
	}
	/* end @formValidation-feedbackArea */

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSortableTable;
	/* @table-sortable */
	function createSortableTable(tableGroup) {
	  var table = tableGroup.querySelector('table');
	  var headerGroup = table.querySelector('thead');
	  var headerRow = headerGroup.querySelector('tr');
	  var headers = headerRow.querySelectorAll('th');
	  var rowGroup = table.querySelector('tbody');
	  var rows = rowGroup.querySelectorAll('tr');
	  var captionElement = table.querySelector('caption');
	  var caption = captionElement.innerText;
	
	  var liveRegion = tableGroup.querySelector('#liveRegion');
	  var readCaptions = liveRegion.getAttribute('readCaptions');
	  if (readCaptions === null) {
	    readCaptions = false;
	  }
	  liveRegion.classList.add('deque-visuallyhidden');
	  liveRegion.notify = function (text) {
	    liveRegion.innerHTML = text;
	  };
	
	  var sortOrder = null;
	  var sortDirection = -1;
	
	  function getSortHeader() {
	    if (sortOrder === null) {
	      return null;
	    }
	    return headerRow.children[sortOrder];
	  }
	
	  function getSortLabel() {
	    var header = getSortHeader();
	    if (!header) {
	      return null;
	    }
	    return header.innerText;
	  }
	
	  function getSortDirection() {
	    return sortDirection > 0 ? 'ascending' : 'descending';
	  }
	
	  function getSortInfo() {
	    if (sortOrder === null) {
	      return 'unsorted';
	    }
	
	    return 'sorted by ' + getSortLabel() + ', ' + getSortDirection();
	  }
	
	  function renderSorting() {
	    updateCaption();
	    updateAriaSort();
	    updateLiveRegion();
	  }
	
	  function updateAriaSort() {
	    for (var i = 0; i < headerRow.children.length; i++) {
	      var child = headerRow.children[i];
	
	      if (sortOrder !== null && i === Math.abs(sortOrder)) {
	        var direction = getSortDirection();
	        child.setAttribute('aria-sort', direction);
	      } else {
	        child.removeAttribute('aria-sort');
	      }
	    }
	  }
	
	  function updateCaption() {
	    var captionText = caption + ', ' + getSortInfo();
	    captionElement.innerText = captionText;
	  }
	
	  function updateLiveRegion() {
	    if (readCaptions) {
	      var captionText = 'Table ' + caption + ' is now ' + getSortInfo();
	      liveRegion.notify(captionText);
	    }
	  }
	
	  rows = Array.prototype.slice.call(rows);
	  var isValid = rows.every(function (row) {
	    return row.children.length === headers.length;
	  });
	
	  if (!isValid) {
	    throw new Error('Each row must be the same length as the headers row.');
	  }
	
	  headers = Array.prototype.slice.call(headers);
	  [].slice.call(headers).forEach(function (header, i) {
	    createHeaderCell(header, function (e) {
	      e.preventDefault();
	      rows = sortByIndex(rows, i);
	      table.renderData(rows);
	    });
	  });
	
	  table.renderData = function (rows) {
	    rowGroup.innerHTML = toHTML(rows);
	    renderSorting();
	  };
	
	  table.renderData(rows);
	
	  function sortByIndex(rows, index) {
	    rows = tableGroup.querySelectorAll('tbody tr');
	    rows = [].slice.call(rows);
	
	    if (sortOrder === index) {
	      sortDirection = -sortDirection;
	      return rows.reverse();
	    } else {
	      sortOrder = index;
	      return rows.sort(function (a, b) {
	        a = Array.prototype.slice.call(a.children);
	        b = Array.prototype.slice.call(b.children);
	        var aVal = null;
	        var bVal = null;
	
	        if (a[index]) {
	          aVal = a[index].innerText;
	        }
	
	        if (b[index]) {
	          bVal = b[index].innerText;
	        }
	
	        if (!isNaN(parseInt(aVal)) && !isNaN(parseInt(bVal))) {
	          if (parseInt(aVal) < parseInt(bVal)) {
	            return -1;
	          }
	          if (parseInt(aVal) > parseInt(bVal)) {
	            return 1;
	          }
	          return 0;
	        } else {
	          if (aVal < bVal) {
	            return -1;
	          }
	          if (aVal > bVal) {
	            return 1;
	          }
	          return 0;
	        }
	      });
	    }
	  }
	
	  var firstOne = table.querySelector('.sortableColumnLabel');
	  if (firstOne) {
	    firstOne.click();
	  } // give the table a default sort...
	}
	
	function createHeaderCell(header, handler) {
	  var button = header.querySelector('button');
	  button.setAttribute('tabindex', '0');
	
	  button.addEventListener('click', handler);
	}
	
	function toHTML(rows) {
	  return rows.map(function (row) {
	    row = Array.prototype.slice.call(row.children);
	    return '<tr role="row">\n    ' + row.map(function (item, index) {
	      if (index === 0) {
	        return '<th scope="row" role="rowheader">' + item.innerText + '</th>';
	      }
	      return '<td role="gridcell">' + item.innerText + '</td>';
	    }).join('') + '</tr>';
	  }).join('');
	}
	
	function activateAllSortableTables() {
	  var sortableTables = document.querySelectorAll('.deque-table-sortable-group');
	  for (var i = 0; i < sortableTables.length; i++) {
	    createSortableTable(sortableTables[i]);
	  }
	}
	
	activateAllSortableTables();
	/* end @table-sortable */

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeTableResponsive = makeTableResponsive;
	exports.collapseTableToList = collapseTableToList;
	
	var _selectionUtils = __webpack_require__(37);
	
	/* @table-collapsing */
	function getTableName(table) {
	  var caption = table.querySelector('caption');
	  if (caption) {
	    return caption.innerText;
	  }
	
	  return table.getAttribute('aria-label') || 'unnamed table';
	}
	
	function makeTableResponsive(table) {
	  var labelDetails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var inflectionPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
	
	  var resizeTimeout;
	
	  function resizeThrottler() {
	    // ignore resize events as long as an handleResponsiveLogic execution is in the queue
	    if (!resizeTimeout) {
	      resizeTimeout = setTimeout(function () {
	        resizeTimeout = null;
	        handleResponsiveLogic();
	
	        // The handleResponsiveLogic will execute at a rate of 15fps
	      }, 66);
	    }
	  }
	
	  function handleResponsiveLogic() {
	    // handle the resize event
	    if (window.innerWidth < inflectionPoint) {
	      renderAsList();
	    } else {
	      renderAsTable();
	    }
	  }
	
	  var list = void 0;
	  var wrapper = document.createElement('div');
	  wrapper.classList.add('responsive-table-wrapper');
	
	  var notificationRegion = document.createElement('div');
	  notificationRegion.setAttribute('role', 'alert');
	  notificationRegion.setAttribute('aria-live', 'polite');
	  notificationRegion.classList.add('visuallyhidden');
	  wrapper.appendChild(notificationRegion);
	
	  function notify(message) {
	    notificationRegion.innerText = message;
	  }
	
	  var tableParent = table.parentElement;
	
	  tableParent.insertBefore(wrapper, table);
	  wrapper.appendChild(table);
	
	  function renderAsList() {
	    if (!list) {
	      var focusID = document.activeElement.id;
	      list = collapseTableToList(table, labelDetails);
	      wrapper.appendChild(list);
	      wrapper.removeChild(table);
	      notify('The data for ' + getTableName(table) + ' is now being rendered as a list.');
	      if (focusID) {
	        var focusTarget = document.querySelector('#' + focusID);
	        if (focusTarget) {
	          focusTarget.focus();
	        }
	      }
	    }
	  }
	
	  function renderAsTable() {
	    if (list) {
	      var focusID = document.activeElement.id;
	      wrapper.removeChild(list);
	      wrapper.appendChild(table);
	      list = null;
	      notify('The data for ' + getTableName(table) + ' is now being rendered as a table.');
	
	      if (focusID) {
	        var focusTarget = document.querySelector('#' + focusID);
	        if (focusTarget) {
	          focusTarget.focus();
	        }
	      }
	    }
	  }
	
	  window.addEventListener('resize', resizeThrottler);
	  handleResponsiveLogic();
	  return table;
	}
	
	function collapseTableToList(table, _ref) {
	  var _ref$labelColumns = _ref.labelColumns,
	      labelColumns = _ref$labelColumns === undefined ? [] : _ref$labelColumns,
	      _ref$labelFunction = _ref.labelFunction,
	      labelFunction = _ref$labelFunction === undefined ? function () {
	    return 'Row:';
	  } : _ref$labelFunction;
	
	  var output = document.createElement('div');
	  output.classList.add('deque');
	  output.classList.add('responsive-table-list-holder');
	
	  var caption = document.createElement('h3');
	  caption.innerText = getTableName(table);
	  output.appendChild(caption);
	
	  var headers = (0, _selectionUtils.queryAll)('th', table);
	  var rows = (0, _selectionUtils.queryAll)('tbody tr', table);
	
	  var list = document.createElement('ul');
	  list.classList.add('collapsed-table');
	  list.setAttribute('data-num-columns', headers.length);
	
	  rows.reduce(function (list, row) {
	    var labelData = [];
	    labelColumns.forEach(function (i) {
	      labelData.push(row.children[i]);
	    });
	
	    var header = labelFunction.apply(null, labelData);
	    var li = document.createElement('li');
	    var label = document.createElement('span');
	    label.classList.add('collapsed-table-header');
	    label.innerHTML = header.outerHTML ? header.outerHTML : header;
	    li.appendChild(label);
	
	    var sublist = document.createElement('ul');
	    sublist.classList.add('collapsed-table-content');
	
	    (0, _selectionUtils.queryAll)('th, td', row).forEach(function (cell, index) {
	      var contentColumns = [];
	      if (labelColumns.indexOf(index) === -1) {
	        contentColumns.push({ cell: cell, label: headers[index].innerHTML });
	      }
	
	      if (contentColumns.length > 0) {
	
	        contentColumns.forEach(function (datum) {
	          var item = document.createElement('li');
	
	          item.setAttribute('data-table-column-index', index);
	
	          var labelSpan = document.createElement('span');
	          labelSpan.innerHTML = datum.label;
	          item.appendChild(labelSpan);
	
	          var content = document.createElement('div');
	          content.innerHTML = datum.cell.innerHTML;
	          item.appendChild(content);
	          sublist.appendChild(item);
	        });
	      }
	      // preserves focus
	
	      list.appendChild(li);
	    });
	
	    if (sublist.children.length > 0) {
	      li.appendChild(sublist);
	    }
	
	    return list;
	  }, list);
	
	  output.appendChild(list);
	  return output;
	}
	/* end @table-collapsing */

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSlider;
	/* @slider */
	function createSlider(slider, output, initialContent) {
	  var minValue = slider.getAttribute('min');
	  var initialValue = initialContent;
	  var maxValue = slider.getAttribute('max');
	  var stepSize = slider.getAttribute('step');
	  var orientation = slider.getAttribute('aria-orientation');
	
	  if (orientation === null) {
	    orientation = 'horizontal';
	  }
	
	  if (isNaN(minValue) || isNaN(maxValue) || isNaN(initialValue) || isNaN(stepSize)) {
	    throw new Error('min, max, initial values must all be numbers. StepSize must be a number.');
	  }
	
	  if (orientation !== 'horizontal' && orientation !== 'vertical') {
	    throw new Error('orientation must be either "horizontal" or "vertical", or blank (defaults to horizontal)');
	  }
	
	  if (orientation === 'vertical') {
	    var shouldSetOrient = function shouldSetOrient() {
	      // eslint-disable-line no-inner-declarations
	      // Internet Explorer 6-11
	      var isIE = /*@cc_on!@*/false || !!document.documentMode;
	      // Edge 20+
	      var isEdge = !isIE && !!window.StyleMedia;
	      // Firefox 1.0+
	      var isFirefox = typeof InstallTrigger !== 'undefined';
	
	      return isIE || isEdge || isFirefox;
	    };
	
	    if (shouldSetOrient() === true) {
	      slider.setAttribute('orient', 'vertical');
	    }
	  }
	
	  if (output) {
	    output.innerText = slider.value;
	    var triggerEventOutput = function triggerEventOutput() {
	      slider.setAttribute('aria-valuetext', slider.value);
	      output.innerText = slider.value;
	    };
	    slider.addEventListener('change', triggerEventOutput, false);
	    slider.addEventListener('input', triggerEventOutput, false);
	  }
	  slider.setAttribute('aria-valuetext', slider.value);
	}
	
	function activateAllSliders() {
	  var sliders = document.querySelectorAll('.deque-slider');
	  for (var i = 0; i < sliders.length; i++) {
	    var slider = sliders[i].querySelector('.deque-slider-widget');
	    var output = sliders[i].querySelector('span');
	    var initialContent = output.innerText;
	    createSlider(slider, output, initialContent);
	  }
	}
	
	activateAllSliders();
	/* end @slider */

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createHierarchicalMenu;
	
	var _NodeUtils = __webpack_require__(93);
	
	var nu = _interopRequireWildcard(_NodeUtils);
	
	var _behavior = __webpack_require__(94);
	
	var _behavior2 = _interopRequireDefault(_behavior);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/* @menu-hierarchical */
	function activateBranch(branch) {
	  branch.setAttribute('aria-expanded', 'false');
	
	  branch.addEventListener('click', function () {
	    if (nu.isOpen(branch)) {
	      nu.closeNode(branch);
	      return true;
	    } else {
	      nu.openNode(branch);
	      return false;
	    }
	  });
	}
	
	function createHierarchicalMenu(hierarchicalMenu) {
	  var holder = hierarchicalMenu.querySelector('#navigationRoot');
	  var branches = hierarchicalMenu.querySelectorAll('button');
	
	  for (var i = 0; i < branches.length; i++) {
	    activateBranch(branches[i]);
	  }
	
	  (0, _behavior2.default)(holder);
	}
	
	function activateAllhierarchicalMenus() {
	  var hierarchicalMenus = document.querySelectorAll('.deque-hierarchical-menu-group');
	
	  for (var i = 0; i < hierarchicalMenus.length; i++) {
	    createHierarchicalMenu(hierarchicalMenus[i]);
	  }
	}
	
	activateAllhierarchicalMenus();
	/* end @menu-hierarchical */

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isOpen = isOpen;
	exports.closeNode = closeNode;
	exports.openNode = openNode;
	exports.setFocus = setFocus;
	exports.getNextVisibleNode = getNextVisibleNode;
	exports.getPreviousVisibleNode = getPreviousVisibleNode;
	exports.isVisible = isVisible;
	/* @hierarchicalMenu-NodeUtils */
	function isOpen(node) {
	  return node.getAttribute('aria-expanded') === 'true';
	}
	
	function closeNode(node) {
	  node.setAttribute('aria-expanded', 'false');
	  return node;
	}
	
	function openNode(node) {
	  node.setAttribute('aria-expanded', 'true');
	  return node;
	}
	
	function setFocus(nodes, toFocus) {
	  nodes.forEach(function (n) {
	    if (n === toFocus) {
	      n.tabIndex = 0;
	      n.focus();
	    } else {
	      n.tabIndex = -1;
	    }
	  });
	}
	
	function getNextVisibleNode(items, node) {
	  var visibles = items.filter(function (item) {
	    return isVisible(item, true, true);
	  });
	  var idx = visibles.indexOf(node);
	  return visibles[idx + 1];
	}
	
	function getPreviousVisibleNode(items, node) {
	  var visibles = items.filter(function (item) {
	    return isVisible(item, true, true);
	  });
	  var idx = visibles.indexOf(node);
	  return visibles[idx - 1];
	}
	
	function isVisible(el, screenReader, recursed) {
	  var style = void 0;
	  var nodeName = el.nodeName.toUpperCase();
	  var parent = el.parentNode;
	
	  // 9 === Node.DOCUMENT
	  if (el.nodeType === 9) {
	    return true;
	  }
	
	  style = window.getComputedStyle(el, null);
	  if (style === null) {
	    return false;
	  }
	
	  var isDisplayNone = style.getPropertyValue('display') === 'none';
	  var isInvisibleTag = nodeName.toUpperCase() === 'STYLE' || nodeName.toUpperCase() === 'SCRIPT';
	  var srHidden = screenReader && el.getAttribute('aria-hidden') === 'true';
	  var isInvisible = !recursed && style.getPropertyValue('visibility') === 'hidden';
	
	  if (isDisplayNone || isInvisibleTag || srHidden || isInvisible) {
	    return false;
	  }
	
	  if (parent) {
	    return isVisible(parent, screenReader, true);
	  }
	
	  return false;
	}
	/* end @hierarchicalMenu-NodeUtils */

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyLogic;
	
	var _keyboardUtils = __webpack_require__(43);
	
	var KeyboardUtils = _interopRequireWildcard(_keyboardUtils);
	
	var _NodeUtils = __webpack_require__(93);
	
	var NodeUtils = _interopRequireWildcard(_NodeUtils);
	
	var _selectionUtils = __webpack_require__(37);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function applyLogic(holder) {
	  var treeItems = (0, _selectionUtils.queryAll)('ul > li > [data-menu-id]', holder);
	
	  treeItems.forEach(function (node, i) {
	    // setup tabindicies - initially, only the first top-level is 0
	    node.tabIndex = i === 0 ? 0 : -1;
	
	    // events
	    KeyboardUtils.onElementRight(node, function (e) {
	      e.preventDefault();
	      if (!NodeUtils.isOpen(node) && node.hasAttribute('aria-expanded')) {
	        node.click();
	      }
	    });
	
	    KeyboardUtils.onElementDown(node, function (e) {
	      e.preventDefault();
	      var next = NodeUtils.getNextVisibleNode(treeItems, node);
	      if (next) {
	        NodeUtils.setFocus(treeItems, next);
	      }
	    });
	
	    KeyboardUtils.onElementUp(node, function (e) {
	      e.preventDefault();
	      var prev = NodeUtils.getPreviousVisibleNode(treeItems, node);
	      if (prev) {
	        NodeUtils.setFocus(treeItems, prev);
	      }
	    });
	
	    KeyboardUtils.onElementLeft(node, function (e) {
	      e.preventDefault();
	      // if it is an expanded tree item, just collapse it (keeping focus on node)
	      if (NodeUtils.isOpen(node)) {
	        return node.click();
	      }
	
	      // attempt to focus the parent menu
	      var parentId = node.getAttribute('data-parent-id');
	      var parentTreeItem = parentId && document.getElementById(parentId);
	
	      if (parentTreeItem) {
	        NodeUtils.setFocus(treeItems, parentTreeItem);
	      }
	    });
	  });
	}
	/* end @hierarchicalMenu-behavior */
	/* @hierarchicalMenu-behavior */

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjODliNjU4MDRkMTAzOTBkNmE3NSIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5RW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hbGVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvZm9jdXNVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3V0aWxzL3NlbGVjdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvY29sbGVjdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2cvY29tcG9uZW50cy9idXR0b25CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZy9jb21wb25lbnRzL2xpZ2h0Ym94U2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy90b29sdGlwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvZ3VpZFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMva2V5Ym9hcmRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3V0aWxzL25vY2xvYmJlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b29sdGlwRGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrYm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlZS9Ob2RlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWUvc2VsZWN0aW9uTW9kZXMvbm9TZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWUvc2VsZWN0aW9uTW9kZXMvc2luZ2xlU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy90cmVlL3NlbGVjdGlvbk1vZGVzL211bHRpU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L25hdmlnYXRpb25Mb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51SXRlbVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L25hdmlnYXRpb24vdmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvbmF2aWdhdGlvbi9ob3Jpem9udGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L2J1aWxkTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvaXRlbUZhY3Rvcmllcy9pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L2l0ZW1GYWN0b3JpZXMvc3VibWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3V0aWxzL2NvbnRhaW5lclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L2l0ZW1GYWN0b3JpZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvaXRlbUZhY3Rvcmllcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9pdGVtRmFjdG9yaWVzL3NlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlyYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlyYW5nZS90aHVtYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlZGljdGl2ZS10ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVkaWN0aXZlLXRleHQvdXRpbHMvZGF0YVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlZGljdGl2ZS10ZXh0L3V0aWxzL2Zvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlZGljdGl2ZS10ZXh0L3V0aWxzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnBhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvdGFic3RvcFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJwYW5lbC9jYXJvdXNlbENvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9ncmVzc0Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhwYW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cGFuZGVyL2lzRGV0YWlsc1N1cHBvcnRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhwYW5kZXIvaXNJT1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1WYWxpZGF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVmFsaWRhdGlvbi92YWxpZGF0b3JzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1WYWxpZGF0aW9uL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1WYWxpZGF0aW9uL2JlaGF2aW9yL3Bhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVmFsaWRhdGlvbi9jb21wb25lbnRzL3Bhc3N3b3JkRXZhbHVhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3V0aWxzL2Zvcm1VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybVZhbGlkYXRpb24vYmVoYXZpb3IvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybVZhbGlkYXRpb24vY29tcG9uZW50cy9jaGFyc1JlbWFpbmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybVZhbGlkYXRpb24vY29tcG9uZW50cy9mZWVkYmFja0FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvcnRhYmxlVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxhcHNpbmdUYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9oaWVyYXJjaGljYWxNZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9oaWVyYXJjaGljYWxNZW51L05vZGVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGllcmFyY2hpY2FsTWVudS9iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgubGVzcyJdLCJuYW1lcyI6WyJjb250ZW50IiwiY3JlYXRlQWxlcnQiLCJjcmVhdGVQcmVkaWN0aXZlVGV4dCIsImNyZWF0ZURpYWxvZyIsImNyZWF0ZUV4cGFuZGVyIiwiY3JlYXRlVG9vbHRpcCIsImNyZWF0ZURpYWxvZ1Rvb2x0aXAiLCJpbml0aWFsaXplTGluayIsImJ1dHRvbiIsImNoZWNrYm94IiwiY3JlYXRlUmFkaW9Hcm91cCIsImNyZWF0ZVRyZWUiLCJjcmVhdGVNZW51IiwiY3JlYXRlU2xpZGVyIiwiY3JlYXRlVGFicGFuZWwiLCJjcmVhdGVQcm9ncmVzc0JhciIsImNvbmZpZ3VyZUZvcm1WYWxpZGF0aW9uIiwidGFibGVzIiwiY3JlYXRlTXVsdGlyYW5nZSIsImNyZWF0ZUhpZXJhcmNoaWNhbE1lbnUiLCJjb2xsYXBzaW5nVGFibGUiLCJFbGVtZW50IiwicHJvdG90eXBlIiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlU29ydGFibGVUYWJsZSIsIm1ha2VUYWJsZVJlc3BvbnNpdmUiLCJtZXNzYWdlIiwiY2xhc3NlcyIsInRpbWVvdXQiLCJvdXRwdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwiYyIsImlubmVySFRNTCIsInNldFRpbWVvdXQiLCJwYXJlbnRFbGVtZW50IiwiY3JlYXRlSFRNTEFsZXJ0IiwiZWxlbWVudCIsImFsZXJ0UmVnaW9uIiwiY2xlYXJBbGVydHMiLCJnZXRBdHRyaWJ1dGUiLCJhbGVydEJveCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZlRWxlbWVudExpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2xpY2UiLCJjYWxsIiwiZWFjaENoaWxkRWxlbWVudCIsImFjdGl2YXRlQWxsQWxlcnRzIiwiYWxlcnRzIiwiaSIsInVzZVRpbWVvdXRJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25zIiwiYWxlcnRCb3hlcyIsImsiLCJzZXRBdHRyaWJ1dGUiLCJqIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dBbGVydE1lc3NhZ2UiLCJiaW5kIiwiaWQiLCJ1c2VUaW1lb3V0IiwiY2hlY2tlZCIsInRpbWVvdXRWYWx1ZSIsInJvbGUiLCJzY3JlZW4iLCJhbGVydCIsImRpYWxvZ0J1dHRvbnMiLCJ4IiwiaGlkZSIsInhCdXR0b24iLCJzZXRJbml0aWFsRm9jdXMiLCJjb25maWciLCJpc0FsZXJ0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJmb2N1cyIsImlzRGV0YWlsIiwiYnV0dG9uQmFyIiwiZ2V0Rmlyc3RCdXR0b24iLCJyZXNldCIsImNsZWFyQ2xhc3NlcyIsImNsZWFyIiwiYWRkQ2xhc3NlcyIsImlzQXJyYXkiLCJpdGVtIiwidG9SZW1vdmUiLCJwdXNoIiwic2V0Um9sZSIsImhpZGVDbG9zZUJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsInJldHVybkZvY3VzVG8iLCJoYW5kbGVFc2NhcGUiLCJzaG93IiwiZGVzY3JpYmVkYnkiLCJsYWJlbGxlZGJ5Iiwid3JhcHBlcklEIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwia2V5VXBIYW5kbGVyIiwiZSIsIndoaWNoIiwic3RvcFByb3BhZ2F0aW9uIiwidHJpZ2dlckVsZW1lbnQiLCJhY3RpdmF0ZUhhbmRlciIsImFjdGl2YXRlRGVxdWVEaWFsb2dCdXR0b25DbGlja0hhbmRsZXJzIiwiYm9keUNoaWxkcyIsImNoaWxkcmVuIiwiZGVxdWVEaWFsb2dCYWNrZ3JvdW5kTGF5ZXIiLCJkZXF1ZURpYWxvZ0Nsb3NlQnV0dG9uIiwiYXJpYUhpZGRlbkxpc3QiLCJhcmlhSGlkZGVuRmFsc2VMaXN0IiwiYXJpYUhpZGRlblRydWVMaXN0IiwidHJpZ2dlck5vZGUiLCJkZXF1ZUpzQXJpYSIsImRlcXVlSnNBcmlhVHJ1ZSIsImRlcXVlSnNBcmlhRmFsc2UiLCJ0cmlnZ2VyQnRuIiwiY3VycmVudFRhcmdldCIsIm5vZGUiLCJub2RlQXJpYUhpZGRlbiIsImFsbEFyaWFIaWRkZW5MaXN0IiwiYXJpYU5vZGUiLCJkZXF1ZUNsb3NlQnRuTGlzdCIsImJ0biIsImRlcXVlU3VibWl0QnRuTGlzdCIsInByZXZlbnREZWZhdWx0IiwiZGVxdWVBY3RpdmVEaWFsb2dCdXR0b24iLCJLRVlfQ09ORklHIiwia2V5Iiwia2V5Q29kZSIsImluUGFnZUNsb3NlQWN0aW9uIiwiYmdMYXllciIsImNsaWNrIiwiYnRuQ2xvc2UiLCJjbG9zZUJ0biIsImNsc0J0biIsImFjdGl2YXRlQWxsRGlhbG9ncyIsImRpYWxvZ3MiLCJkaWFsb2dEYXRhSWQiLCJkaWFsb2dIZWFkaW5nRWxlbWVudCIsImRpYWxvZ0Rlc2NyaXB0aW9uRWxlbWVudCIsImRpYWxvZ0Rlc2NyaXB0aW9uIiwiZGlhbG9nTGFiZWwiLCJjb25maWdEaWFsb2ciLCJ0cmlnZ2VyRGlhbG9nIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImV2ZW50IiwiYXR0cmlidXRlRGlhbG9nIiwic2hvd0RpYWxvZyIsImRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudCIsIm5hbWVJbnB1dEVsZW1lbnQiLCJsYWJlbElucHV0RWxlbWVudCIsIm1vZGlmaWVkTmFtZUlucHV0RWxlbWVudElkIiwibGFzdE5hbWVJbnB1dEVsZW1lbnQiLCJsYWJlbExhc3RJbnB1dEVsZW1lbnQiLCJtb2RpZmllZExhc3ROYW1lSW5wdXRFbGVtZW50SWQiLCJkaWFsb2dBbGVydHMiLCJkaWFsb2dBbGVydERlc2NyaXB0aW9uIiwiZGlhbG9nQWxlcnRMYWJlbCIsImNvbmZpZ0RpYWxvZ0FsZXJ0IiwidHJpZ2dlckRpYWxvZ0FsZXJ0IiwiYXR0cmlidXRlRGlhbG9nQWxlcnQiLCJzaG93RGlhbG9nQWxlcnQiLCJkaWFsb2dNZXNzYWdlcyIsImRpYWxvZ01lc3NhZ2VEZXNjcmlwdGlvbiIsImRpYWxvZ01lc3NhZ2VMYWJlbCIsImNvbmZpZ0RpYWxvZ01lc3NhZ2UiLCJ0cmlnZ2VyRGlhbG9nTWVzc2FnZSIsImF0dHJpYnV0ZURpYWxvZ01lc3NhZ2UiLCJzaG93RGlhbG9nTWVzc2FnZSIsImRpYWxvZ01lc3NhZ2VBbGVydHMiLCJsIiwiZGlhbG9nTWVzc2FnZUFsZXJ0RGVzY3JpcHRpb24iLCJkaWFsb2dNZXNzYWdlQWxlcnRMYWJlbCIsImNvbmZpZ0RpYWxvZ01lc3NhZ2VBbGVydCIsInRyaWdnZXJEaWFsb2dNZXNzYWdlQWxlcnQiLCJhdHRyaWJ1dGVEaWFsb2dNZXNzYWdlQWxlcnQiLCJzaG93RGlhbG9nTWVzc2FnZUFsZXJ0Iiwid2luZG93Iiwib25sb2FkIiwiZ2V0Rmlyc3RGb2N1c2FibGVDaGlsZCIsImdldE5leHRGb2N1c2FibGVDaGlsZCIsImdldExhc3RGb2N1c2FibGVDaGlsZCIsImluaXRUYWJUcmFwIiwiZm9jdXNhYmxlUXVlcnkiLCJjdXJyZW50IiwiYWxsIiwidGFyZ2V0UmV0dXJuSW5kZXgiLCJpbmRleE9mIiwiY3JlYXRlVHJhcCIsInRyYXAiLCJhcHBseVRyYXBzIiwiZmlyc3RUcmFwIiwibGFzdFRyYXAiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwicXVlcnlBbGwiLCJzZWxlY3RvciIsImNvbnRleHQiLCJ0b0FycmF5IiwiYXJyYXlsaWtlIiwiQXJyYXkiLCJjcmVhdGVCdXR0b25CYXIiLCJnZXRMYXN0QnV0dG9uIiwiaW5pdGlhbGl6ZUJ1dHRvbkJhciIsImZvcm1hdEJ1dHRvbnMiLCJpbmRleCIsInNwYWNlIiwibWFwIiwiYnV0dG9uQ29uZmlnIiwibWFya3VwIiwid3JhcHBlciIsImlubmVyVGV4dCIsImxhYmVsIiwiaGFuZGxlciIsInByZUNsb3NlIiwicG9zdENsb3NlIiwiaW5pdGlhbGl6ZSIsImNyZWF0ZVNjcmVlbiIsImNsZWFyU2NyZWVuIiwic2hvd1NjcmVlbiIsInRyaWdnZXIiLCJ0aXBUZXh0IiwidGlwSUQiLCJ0aXBXcmFwcGVyIiwidGlwIiwidHJpZ2dlclN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyaWdnZXJDU1MiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZ2V0VHJpZ2dlclBvc2l0aW9uIiwidHJpZ2dlclBvc2l0aW9uIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRUb29sdGlwUG9zaXRpb24iLCJ0cmlnZ2VyUG9zaXRpb25QcmVmIiwidGlwU3R5bGUiLCJ0aXBDU1MiLCJyZXBsYWNlIiwiTnVtYmVyIiwic3R5bGUiLCJsZWZ0IiwibmV3TGVmdCIsImJvdHRvbSIsImNhdXNlcyIsIklOSVRJQUwiLCJGT0NVUyIsIk1PVVNFIiwiRVNDQVBFIiwiY3VycmVudENhdXNlIiwic2hvd1RpcCIsImNhdXNlIiwicCIsImhpZGVUaXAiLCJlc2NhcGVIYW5kbGVyIiwiY2FuY2VsRWxlbWVudEVzY2FwZSIsImZvY3VzSGFuZGxlciIsImJsdXJIYW5kbGVyIiwib3ZlckhhbmRsZXIiLCJvdXRIYW5kbGVyIiwiZGlzYWJsZVRvb2x0aXAiLCJlcnIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZUFsbFRvb2x0aXBzIiwiaXRlbXNUb1RpcCIsImdlbmVyYXRlR3VpZCIsIlM0IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwib25FbGVtZW50RW50ZXIiLCJvbkVsZW1lbnRFc2NhcGUiLCJvbkVsZW1lbnRTcGFjZSIsIm9uRWxlbWVudExlZnQiLCJvbkVsZW1lbnRSaWdodCIsIm9uRWxlbWVudFVwIiwib25FbGVtZW50RG93biIsIm9uRWxlbWVudEhvbWUiLCJvbkVsZW1lbnRFbmQiLCJvbkVsZW1lbnRQYWdlVXAiLCJvbkVsZW1lbnRQYWdlRG93biIsIm9uRWxlbWVudEYxMCIsImlzQWxwaGFOdW1lcmljIiwib25FbGVtZW50Q2hhcmFjdGVyIiwidHJhcEVudGVyIiwiS0VZUyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiU1BBQ0UiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJGMTAiLCJIT01FIiwiRU5EIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsImJpbmRFbGVtZW50VG9FdmVudFZhbHVlIiwiZXZlbnROYW1lIiwidGVzdFZhbHVlIiwibG9jYWxIYW5kbGVyIiwiYmluZEVsZW1lbnRUb0tleXByZXNzVmFsdWUiLCJiaW5kRWxlbWVudFRvS2V5ZG93blZhbHVlIiwiY2hhckNvZGUiLCJub0Nsb2JiZXIiLCJ3aGl0ZXNwYWNlIiwiYXR0ciIsImlkcyIsImpvaW4iLCJwYXJ0cyIsInRyaW0iLCJzcGxpdCIsInZhbCIsImNvbnRlbnRJRCIsInN1Ym1pdElEIiwiY2FuY2VsSUQiLCJvbkNhbmNlbCIsIm9uU3VibWl0Iiwib25PcGVuIiwicG9zaXRpb24iLCJnZXRUaXBQb3NpdGlvbiIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInN1Ym1pdCIsImNhbmNlbCIsInJldHVybkZvY3VzIiwiY2FuY2VsQm9keUxpc3RlbmVyIiwidHJpZ2dlckJvdW5kcyIsImdldENsaWVudFJlY3RzIiwidGlwQm91bmRzIiwid2lkdGgiLCJ0b3AiLCJoZWlnaHQiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJ0YXJnZXRVUkwiLCJuYXZpZ2F0ZVRvTGluayIsImRhdGFUYXJnZXQiLCJvcGVuIiwibG9jYXRpb24iLCJocmVmIiwic2hpZnRLZXkiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVFdmVudCIsImV2IiwiaW5pdEV2ZW50IiwiZmlyZUV2ZW50IiwiaW5pdGlhbGl6ZUFsbExpbmtzIiwibGlua3MiLCJpbml0aWFsaXplQnV0dG9uIiwiaW5pdGlhbGl6ZVRvZ2dsZUJ1dHRvbiIsImJpbmRFbGVtZW50VG9JbnB1dHMiLCJiZWhhdmlvciIsInRvVXBwZXJDYXNlIiwiYXNzaWduUm9sZUlmTmVjZXNzYXJ5IiwiaW5pdGlhbGl6ZUljb24iLCJpY29uIiwidG9nZ2xlRnVuY3Rpb24iLCJpbml0aWFsU3RhdGUiLCJFcnJvciIsInRvZ2dsZSIsInRvZ2dsZWRPbiIsImlzVG9nZ2xlZE9uIiwicmVwbGFjZVNwYWNlIiwiYnVpbGRDaGVja2JveFRyaXN0YXRlIiwiY2hlY2tib3hFdmVudCIsInNldENoZWNrYm94RGF0YSIsInRvZ2dsZU9uIiwidG9nZ2xlT2ZmIiwidG9nZ2xlTWl4ZWQiLCJjcmVhdGVTaW5nbGVDaGVja2JveCIsImNyZWF0ZVNpbmdsZUNoZWNrYm94Rm9yUmFkaW8iLCJjcmVhdGVDaGVja2JveEdyb3VwIiwiZ2V0Q2hlY2tib3hEYXRhIiwic3RyIiwiX2N1c3RvbUNoZWNrYm94VHJpc3RhdGVXaWRnZXRzIiwiX2luc3RhbmNlQ2hrVHJpc3RhdGVDb3VudCIsIl9lYWNoQ3VzdG9tV2lkZ2V0IiwiX2RhdGFDb25maWciLCJncm91cFRpdGxlIiwiZ3JvdXBPcHRpb25UaXRsZSIsIm9wdGlvbnMiLCJkZWxpbWl0ZXIiLCJfaWQiLCJfZWxlbWVudENvbnRyb2wiLCJfZWxlbWVudE9wdGlvbkluZGV4IiwicGFyZW50Q2hlY2tib3hFbGVtZW50cyIsImVhY2hQYXJlbnQiLCJjaGlsZEVsZW1lbnRzIiwiaW5uZXJQYXJlbnQiLCJjaGVja2JveENvdW50ZXIiLCJ2YWx1ZSIsImRhdGFFbGVtZW50IiwiaXNDaGVja2VkIiwib25DaGFuZ2UiLCJpbmRpY2F0b3IiLCJsYWJlbFRleHQiLCJoaWRkZW5DaGVja2JveCIsInR5cGUiLCJuYW1lIiwiY2hhbmdlSGFuZGxlciIsImJyb2FkY2FzdENoYW5nZSIsImNoZWNrYm94TGFiZWwiLCJoaWRkZW5SYWRpbyIsInBhcmVudCIsInJvb3RDbGlja2VkIiwiZ2V0Q29ycmVjdFJvb3RTdGF0ZSIsImNoaWxkIiwic2V0Q29ycmVjdFJvb3RTdGF0ZSIsInJvb3RDbGlja0hhbmRsZXJzIiwicm9vdFN0YXRlIiwiZXZlcnkiLCJsZWFmQ2xpY2tIYW5kbGVycyIsImFjdGl2YXRlQWxsQ2hlY2tib3hlcyIsImNoZWNrYm94ZXMiLCJjaGlsZE5vZGUiLCJ0cmlzdGF0ZXMiLCJwYXJlbnRHcm91cCIsImNoaWxkcmVuR3JvdXAiLCJncm91cCIsInJhZGlvR3JvdXAiLCJjdXJyZW50Rm9jdXMiLCJzZXRVbmlxdWVUb2dnbGUiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUtleWRvd24iLCJjdXJyZW50UGFyZW50IiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwibXNlZGdlIiwibm9kZU5hbWUiLCJwYXJzZUludCIsImZvY3VzTmV4dCIsImZvY3VzUHJldiIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiYiIsImFjdGl2YXRlQWxsUmFkaW9zIiwicmFkaW9zIiwiYmVoYXZpb3JzIiwiZGVmYXVsdCIsIm5vU2VsZWN0QmVoYXZpb3IiLCJzaW5nbGUiLCJzaW5nbGVTZWxlY3RCZWhhdmlvciIsIm11bHRpIiwibXVsdGlTZWxlY3RCZWhhdmlvciIsInRyZWVHcm91cCIsInRyZWVSb290Iiwic2VsZWN0U3R5bGUiLCJ0cmVlSXRlbXMiLCJoYXNDaGlsZHJlbiIsImlzT3BlbiIsImdldFJvb3ROb2RlIiwiZ2V0VmlzaWJsZU5vZGVzIiwiZ2V0UHJldmlvdXNWaXNpYmxlTm9kZSIsImdldE5leHRWaXNpYmxlTm9kZSIsImZvY3VzT25Ob2RlIiwiY2xvc2VOb2RlIiwib3Blbk5vZGUiLCJnZXRGaXJzdENoaWxkIiwiZ2V0UGFyZW50IiwiZ2V0TmV4dFNpYmxpbmciLCJnZXRQcmV2aW91c1NpYmxpbmciLCJzZWxlY3ROb2RlIiwiYWRkTm9kZVRvU2VsZWN0aW9uIiwiaXNTZWxlY3RlZCIsInRvZ2dsZU5vZGVTZWxlY3Rpb24iLCJnZXROZXh0Tm9kZUluU2VxdWVuY2UiLCJzZXF1ZW5jZSIsInJldHVybk5leHRPbmUiLCJyZWR1Y2UiLCJhY2MiLCJnZXRBbGxUcmVlTm9kZXMiLCJ0cmVlSUQiLCJub2RlcyIsInJldmVyc2UiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtdWx0aW1vZGUiLCJhcHBseUxvZ2ljIiwiS2V5Ym9hcmRVdGlscyIsIk5vZGVVdGlscyIsImFjdGl2YXRlYWJsZSIsIk1vdXNlRXZlbnQiLCJjaGFyYWN0ZXIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ0aGlzRm91bmQiLCJmaWx0ZXIiLCJjaGFyQXQiLCJzaWJsaW5nIiwiY3RybEtleSIsInNoaWZ0aW5nIiwib25Eb2NLZXkiLCJtZXRob2QiLCJzZXRPcmllbnRhdGlvbiIsIm1lbnUiLCJvcmllbnRhdGlvbiIsImNvbnRhaW5lciIsImRhdGEiLCJjdXJyZW50UmFkaW9Hcm91cCIsImN1cnJlbnRDaGVja2JveEdyb3VwIiwiaXRlbVJvbGUiLCJsaSIsImRhdGFHcm91cCIsImdyb3VwTmFtZSIsImFwcGx5TmF2aWdhdGlvbkxvZ2ljIiwia2IiLCJtdSIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImtleUhhbmRsZXJzIiwiZ2V0TGF0ZXN0UGFyZW50SXRlbSIsIndyYXAiLCJzZXRGb2N1cyIsInVwIiwiZG93biIsInJpZ2h0IiwiaG9tZSIsImVuZCIsImNoYXIiLCJmaW5pc2hJbnRlcmFjdGlvbiIsImdldE1lbnVGcm9tSXRlbSIsImdldEFsbEl0ZW1zSW5NZW51Iiwib3BlblN1Ym1lbnUiLCJjbG9zZVN1Ym1lbnUiLCJnZXRGaXJzdFNpYmxpbmciLCJnZXRMYXN0U2libGluZyIsImdldEZpcnN0TWVudUl0ZW0iLCJnZXRMYXN0TWVudUl0ZW0iLCJnZXRQcmV2aW91c1NpYmxpbmdXaGVyZSIsImdldE5leHRTaWJsaW5nV2hlcmUiLCJtZW51aXRlbSIsInBhcmVudEl0ZW0iLCJuZXdQYXJlbnQiLCJtYXliZVBhcmVudCIsInJlc3VsdCIsInJvb3RNZW51IiwiYWxsTWVudUl0ZW1zIiwiaXNQYXJlbnQiLCJwYXJlbnRDYW5kaWRhdGUiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJwYXJlbnRNZW51IiwiY2hpbGRyZW5PZlBhcmVudCIsIml0ZW1zIiwicHJlZGljYXRlIiwid3JhcHMiLCJhdW50IiwidW5jbGUiLCJsZXR0ZXIiLCJ0ZXh0Q29udGVudCIsImJ1aWxkTWVudUl0ZW0iLCJpdGVtRmFjdG9yeSIsInN1Ym1lbnVGYWN0b3J5IiwicmFkaW9GYWN0b3J5IiwiY2hlY2tib3hGYWN0b3J5Iiwic2VwYXJhdG9yRmFjdG9yeSIsImJ1aWxkZXJzIiwiYnVpbGQiLCJzZXBhcmF0b3IiLCJyYWRpbyIsInN1Ym1lbnUiLCJkaXNhYmxlZCIsImFjdGl2YXRlIiwiYm91bmRBY3Rpb25IYW5kbGVyIiwiYm91bmRBY3RpdmF0aW9uIiwiZWxlbWVudElzQ2hpbGRPZkVsZW1lbnQiLCJjcmVhdGVGaWVsZHNldCIsImNyZWF0ZUxpdmVSZWdpb24iLCJwb3RlbnRpYWxQYXJlbnQiLCJmaWVsZHNldCIsImxlZ2VuZCIsImxldmVsIiwibm90aWZ5IiwidGV4dCIsIm1zZyIsInF1ZXJ5IiwicmFkaW9Hcm91cE1lbWJlcnMiLCJ3YXNDaGVja2VkIiwic2xpZGVyIiwidGh1bWJzIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsInQiLCJzdGVwU2l6ZSIsInBpeGVscyIsImlzTmFOIiwic2hvdWxkU2V0T3JpZW50IiwiaXNJRSIsImRvY3VtZW50TW9kZSIsImlzRWRnZSIsIlN0eWxlTWVkaWEiLCJpc0ZpcmVmb3giLCJJbnN0YWxsVHJpZ2dlciIsImlucHV0cyIsIm1pblZhbHVlSW5wdXQiLCJtYXhWYWx1ZUlucHV0IiwidGh1bWJPYmplY3RzIiwiYmluZElucHV0VG9UaHVtYiIsImlucHV0IiwidGh1bWIiLCJtaW4iLCJtYXgiLCJ1cGRhdGVUaHVtYiIsInRleHRQYXJzZXIiLCJwYXJzZUZsb2F0Iiwic2V0VmFsdWUiLCJ1cGRhdGVUZXh0SW5wdXQiLCJjcmVhdGVUaHVtYkNvbnRyb2wiLCJ0aHVtYk9iamVjdCIsImluaXRpYWxWYWx1ZSIsImFkanVzdEFwcGVhcmFuY2UiLCJ2YWx1ZVRleHQiLCJsYWJlbEZyb21WYWx1ZSIsInNldFZhbHVlQXR0cmlidXRlcyIsImVycm9yIiwiaW5pdEN1c3RvbUV2ZW50IiwiZ2V0UGVyY2VudGFnZSIsInJhbmdlIiwibm9ybWFsaXplZFZhbHVlIiwicGVyY2VudCIsIm5vcm1hbGl6ZSIsInYiLCJsb3ciLCJmbG9vciIsImhpZ2giLCJjZWlsIiwibG93RGVsdGEiLCJoaWdoRGVsdGEiLCJhYnMiLCJhZGp1c3RWYWx1ZSIsInBpeGVsUG9zaXRpb24iLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwib2Zmc2V0IiwiYXBwbHlEZWx0YSIsImRlbHRhIiwic3RhcnREcmFnIiwib25EcmFnIiwic3RvcERyYWciLCJnZXRQb2ludCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiY2xpZW50WSIsInRhcmdldFZhbHVlIiwiZmluYWxWYWx1ZSIsIm5hdiIsImhpbnRJZCIsInNlbGVjdGVkSGludENsb25lIiwic2VsZWN0ZWRIaW50Q2xvbmVJbmRleCIsImhpbnRzIiwibGl2ZSIsIm5vdGlmaWNhdGlvblRpbWVvdXQiLCJpbW1lZGlhdGVOb3RpZmljYXRpb24iLCJoaWdobGlnaHQiLCJpbmRleFBvc2l0aW9uVGV4dCIsImhpbnRMaXN0IiwiaGludExpc3RMZW5ndGgiLCJwcmVwYXJlTm90aWZpY2F0aW9uIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWRPcHRpb25zIiwiaXNBcmUiLCJvcHRpb25UZXh0Iiwic2hvd09wdGlvbnMiLCJyZW5kZXJPcHRpb25zIiwiY2xhc3NOYW1lIiwiY2xlYXJMaXN0IiwiYmx1ciIsInNlbGVjdCIsImFsdEtleSIsImhpZ2hsaWdodFByZXYiLCJoaWdobGlnaHRlZCIsImhpZ2hsaWdodE5leHQiLCJjb25maXJtVmFsdWUiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsImNsaWNrVGFyZ2V0IiwiZ2V0SW5wdXRFbGVtZW50IiwibGlzdCIsImZpcnN0SXRlbSIsInByb21wdCIsImNsZWFyTm90aWZpY2F0aW9uVGltZW91dCIsInZhbGlkYXRlRGF0YSIsImlzU3RyaW5nIiwiaXNWYWxpZE9iamVjdCIsImNyZWF0ZUhpbnQiLCJ3cmFwSXRlbSIsIndyYXBTdHJpbmciLCIkaXRlbSIsInN0cmluZyIsInNldEhpZ2hsaWdodCIsImFsbEl0ZW1zIiwid2lkZ2V0Iiwid2lkZ2V0VGFibGlzdCIsInBhdXNlIiwiaW5pdGlhbGl6ZVRhYnMiLCJ0YWJzIiwiaW5pdGlhbGl6ZVBhbmVscyIsInBhbmVscyIsInJlZ2lvbiIsImF1dG9wbGF5Q29udHJvbHMiLCJhdXRvcGxheUNvbmZpZyIsImF1dG9wbGF5Iiwib25QbGF5Iiwib25QYXVzZSIsIm9uTmV4dCIsIm5leHRUYWIiLCJnZXROZXh0IiwiZ2V0Q3VycmVudFRhYiIsInNlbGVjdFRhYiIsIm9uUHJldmlvdXMiLCJwcmV2aW91c1RhYiIsImdldFByZXYiLCJzZWxlY3RlZFRhYiIsInNlbGVjdGVkVGFiTGFiZWxlZEJ5IiwiYXV0b3NlbGVjdCIsInRhYnN0b3BDb25maWciLCJvblNwYWNlIiwib25DbGljayIsInVzZUFyaWFTZWxlY3RlZCIsIm9uVXAiLCJvbkRvd24iLCJvbkxlZnQiLCJvblJpZ2h0IiwiaW5pdGlhbGl6ZUFsbFRhYnBhbmVscyIsIndpZGdldHMiLCJjcmVhdGVTaW5nbGVUYWJzdG9wU3RydWN0dXJlIiwidGFic05MIiwidGFiIiwib25Gb2N1cyIsIm9uSG9tZSIsIm9uRW5kIiwib25QYWdlVXAiLCJvblBhZ2VEb3duIiwib25DaGFyYWN0ZXIiLCJidWlsZENhcm91c2VsQ29udHJvbHMiLCJhY3RpdmF0ZUNhcm91c2VsQ29udHJvbHMiLCJjcmVhdGVCdXR0b24iLCJkdXJhdGlvbiIsInByZXZCdXR0b24iLCJwbGF5QnV0dG9uIiwicGF1c2VCdXR0b24iLCJuZXh0QnV0dG9uIiwicGxheUludGVydmFsIiwiY2FsbGVkIiwic3RhcnRQbGF5aW5nIiwic3RvcFBsYXlpbmciLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdGFydCIsInByb2dyZXNzQmFyIiwiYm91bmRlZCIsImNvbnRhaW5lclRhZyIsImh0bWw1VmVyc2lvbiIsImh0bWw0VmVyc2lvbiIsInN1bW1hcnkiLCJzZXRPcGVuU3RhdHVzIiwibmV3U3VtbWFyeSIsInN1bW1hcnlOb2RlcyIsInN1bW1hcnlWYWx1ZXMiLCJhdHQiLCJhdHRzIiwiYXR0cmlidXRlcyIsIm4iLCJub2RlVmFsdWUiLCJyZXBsYWNlQ2hpbGQiLCJuZXdDb250YWluZXIiLCJkZXRhaWxzTm9kZXMiLCJkZXRhaWxzVmFsdWVzIiwiYXR0Q29udGFpbmVyIiwiYXR0c0NvbnRhaW5lciIsIm0iLCJvbmtleWRvd24iLCJhY3RpdmF0ZUFsbEV4cGFuZGVycyIsImV4cGFuZGVycyIsImlzRGV0YWlsc1N1cHBvcnRlZCIsImVsIiwiZGlmZiIsInRlc3QiLCJNU1N0cmVhbSIsImRlZmF1bHRWYWxpZGF0b3JzIiwiRkVFREJBQ0tfVFlQRVMiLCJUT1AiLCJJTkxJTkUiLCJmb3JtIiwiZmVlZGJhY2tUeXBlIiwiZmVlZGJhY2tBcmVhIiwicGFzc3dvcmRJbnB1dHMiLCJwYXNzd29yZEV2YWx1YXRvciIsImxvZ05vdGlmaWNhdGlvbiIsIm1heGNoYXJzSW5wdXRzIiwidmFsaWRhdG9ycyIsIm5vdGlmeVN1Y2Nlc3MiLCJlcnJvcnMiLCJub3RpZnlGYWlsdXJlIiwicGx1cmFsIiwicyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidGhpc0lucHV0IiwiZmFpbGVkUmVxdWlyZSIsImZhaWxlZFBhdHRlcm4iLCJkZXNjcmliZWRCeU9yaWdpbmFsIiwiaW5wdXRJZCIsImRlc2NJZCIsImRlc2NyaWJlZEJ5IiwidmFsaWRhdGUiLCJ2YWxpZGF0ZWQiLCJpbnZhbGlkSW5wdXRzIiwiaGVhZGVyIiwiY2xlYXJUb29sdGlwcyIsImluaXRUb29sdGlwcyIsImNhbmNlbFRvb2x0aXAiLCJyZXF1aXJlZCIsIm1heENoYXJzIiwiaXNFbWFpbCIsInBhdHRlcm4iLCJpc051bWVyaWMiLCJwYXNzd29yZFN0cmVuZ3RoIiwiZXJyb3JNZXNzYWdlIiwidGhyZXNob2xkIiwicmVnRXhwIiwiUmVnRXhwIiwicXVhbGl0eU1ldGVySWQiLCJxdWFsaXR5TWV0ZXIiLCJxdWFsaXR5IiwiZ2V0VmFsaWRhdGlvbkZ1bmN0aW9uIiwiZ2V0VmFsaWRhdGlvbkVycm9ycyIsInZhbGlkYXRvck5hbWUiLCJmIiwiZnVuY3MiLCJhcHBlbmRUb29sdGlwcyIsInNwZWNpZmllciIsImEiLCJ0dCIsImNvbmNhdCIsIndpcmV1cFBhc3N3b3JkRXZhbHVhdG9yIiwiZXZhbHVhdG9yIiwicmF0aW5ncyIsInF1ZXVlTm90aWZpY2F0aW9uIiwic2NvcmUiLCJzZW5kTm90aWZpY2F0aW9uIiwicmF0aW5nIiwicGFzc3dvcmRFdmFsdWF0aW9uIiwidXBkYXRlIiwiaW5pdGlhbFNjb3JlIiwiY3JlYXRlUGFzc3dvcmRFdmFsdWF0aW9uIiwiY3JlYXRlTGV2ZWxJbmRpY2F0b3IiLCJsZXZlbDAiLCJsZXZlbDEiLCJsZXZlbDIiLCJsZXZlbDMiLCJsZXZlbDQiLCJlbXB0eUludGVydmFsIiwiZ2V0TGFiZWwiLCJsYWJlbEVsZW1lbnQiLCJ3aXJldXBNYXhMZW5ndGhOb3RpZmljYXRpb25zIiwiY2hhckNvdW50IiwicmVtYWluaW5nIiwiZmVlZGJhY2siLCJwb3N0VXBkYXRlIiwic3Vic3RyIiwiY3JlYXRlQ2hhcnNSZW1haW5pbmciLCJzcGFuIiwibmV3VGV4dCIsImNyZWF0ZUZlZWRiYWNrQXJlYSIsImNsZWFySUQiLCJleGlzdGluZyIsInRhYmxlR3JvdXAiLCJ0YWJsZSIsImhlYWRlckdyb3VwIiwiaGVhZGVyUm93IiwiaGVhZGVycyIsInJvd0dyb3VwIiwicm93cyIsImNhcHRpb25FbGVtZW50IiwiY2FwdGlvbiIsImxpdmVSZWdpb24iLCJyZWFkQ2FwdGlvbnMiLCJzb3J0T3JkZXIiLCJzb3J0RGlyZWN0aW9uIiwiZ2V0U29ydEhlYWRlciIsImdldFNvcnRMYWJlbCIsImdldFNvcnREaXJlY3Rpb24iLCJnZXRTb3J0SW5mbyIsInJlbmRlclNvcnRpbmciLCJ1cGRhdGVDYXB0aW9uIiwidXBkYXRlQXJpYVNvcnQiLCJ1cGRhdGVMaXZlUmVnaW9uIiwiZGlyZWN0aW9uIiwiY2FwdGlvblRleHQiLCJpc1ZhbGlkIiwicm93IiwiY3JlYXRlSGVhZGVyQ2VsbCIsInNvcnRCeUluZGV4IiwicmVuZGVyRGF0YSIsInRvSFRNTCIsInNvcnQiLCJhVmFsIiwiYlZhbCIsImZpcnN0T25lIiwiYWN0aXZhdGVBbGxTb3J0YWJsZVRhYmxlcyIsInNvcnRhYmxlVGFibGVzIiwiY29sbGFwc2VUYWJsZVRvTGlzdCIsImdldFRhYmxlTmFtZSIsImxhYmVsRGV0YWlscyIsImluZmxlY3Rpb25Qb2ludCIsInJlc2l6ZVRpbWVvdXQiLCJyZXNpemVUaHJvdHRsZXIiLCJoYW5kbGVSZXNwb25zaXZlTG9naWMiLCJpbm5lcldpZHRoIiwicmVuZGVyQXNMaXN0IiwicmVuZGVyQXNUYWJsZSIsIm5vdGlmaWNhdGlvblJlZ2lvbiIsInRhYmxlUGFyZW50IiwiZm9jdXNJRCIsImFjdGl2ZUVsZW1lbnQiLCJmb2N1c1RhcmdldCIsImxhYmVsQ29sdW1ucyIsImxhYmVsRnVuY3Rpb24iLCJsYWJlbERhdGEiLCJhcHBseSIsIm91dGVySFRNTCIsInN1Ymxpc3QiLCJjZWxsIiwiY29udGVudENvbHVtbnMiLCJsYWJlbFNwYW4iLCJkYXR1bSIsImluaXRpYWxDb250ZW50IiwidHJpZ2dlckV2ZW50T3V0cHV0IiwiYWN0aXZhdGVBbGxTbGlkZXJzIiwic2xpZGVycyIsIm51IiwiYWN0aXZhdGVCcmFuY2giLCJicmFuY2giLCJoaWVyYXJjaGljYWxNZW51IiwiaG9sZGVyIiwiYnJhbmNoZXMiLCJhY3RpdmF0ZUFsbGhpZXJhcmNoaWNhbE1lbnVzIiwiaGllcmFyY2hpY2FsTWVudXMiLCJpc1Zpc2libGUiLCJ0b0ZvY3VzIiwidGFiSW5kZXgiLCJ2aXNpYmxlcyIsImlkeCIsInNjcmVlblJlYWRlciIsInJlY3Vyc2VkIiwibm9kZVR5cGUiLCJpc0Rpc3BsYXlOb25lIiwiaXNJbnZpc2libGVUYWciLCJzckhpZGRl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LFdBQUk4YSxJQUFKLEVBQVU7QUFDUjVELG1CQUFVaUMsUUFBVixDQUFtQmhFLFNBQW5CLEVBQThCMkYsSUFBOUI7QUFDRDtBQUNGLE1BTkQ7O0FBUUE3RCxtQkFBY3JOLGFBQWQsQ0FBNEI1SixJQUE1QixFQUFrQyxVQUFVbkIsQ0FBVixFQUFhO0FBQzdDQSxTQUFFMEIsY0FBRjtBQUNBO0FBQ0EsV0FBSTJXLFVBQVU3QixNQUFWLENBQWlCclYsSUFBakIsQ0FBSixFQUE0QjtBQUFFLGdCQUFPQSxLQUFLYyxLQUFMLEVBQVA7QUFBc0I7O0FBRXBEO0FBQ0EsV0FBSTZ6QixXQUFXMzBCLEtBQUtuRixZQUFMLENBQWtCLGdCQUFsQixDQUFmO0FBQ0EsV0FBSSs1QixpQkFBaUJELFlBQVkzNkIsU0FBU2UsY0FBVCxDQUF3QjQ1QixRQUF4QixDQUFqQzs7QUFFQSxXQUFJQyxjQUFKLEVBQW9CO0FBQ2xCMWQsbUJBQVVpQyxRQUFWLENBQW1CaEUsU0FBbkIsRUFBOEJ5ZixjQUE5QjtBQUNEO0FBQ0YsTUFaRDtBQWFELElBekNEO0FBMENEO0FBQ0Q7QUFuREEsaUM7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6ImRlcXVlLXdpZGdldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRlcXVlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRlcXVlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRlcXVlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4OWI2NTgwNGQxMDM5MGQ2YTc1IiwiaW1wb3J0ICogYXMgY29udGVudCBmcm9tICcuL3NyYy9pbmRleC5qcyc7XG5pbXBvcnQgJy4vc3JjL2luZGV4Lmxlc3MnO1xuXG4vLyBzbywgdGhpcyBpcyBhIGJpZyBwYWluIGluIHRoZSBidXR0LCBidXQgd2UgbmVlZCBhIHNlcGFyYXRlIGVudHJ5XG4vLyBmb3IgdGhlIGRyb3AtaW4gbGlicmFyeSAod2VicGFjay1jb21waWxlZCBzdHVmZiBpbiBvdXRwdXQvKVxuLy8gYW5kIGZvciB0aGUgbW9kdWxlIGxpYnJhcnkgKGJhYmVsLWNvbXBpbGVkIHN0dWZmIGluIGxpYi8pXG4vLyBiZWNhdXNlIG9mIHRoZSB3YXkgdGhlIENTUyB3b3Jrcy5cblxuLy8gd2VicGFjayB3YW50cyB1cyB0byBpbXBvcnQgdGhlIExFU1MgaW50byBvdXIgamF2YXNjcmlwdCwgYXMgd2Vcbi8vIGRvIGFib3ZlIC0gYnV0IGlmIHdlIGRvIHRoaXMgaW4gYmFiZWwsIGl0IGNyYXBzIG91dCBpbiBhbnlcbi8vIHByb2plY3QgaW1wb3J0aW5nIGl0LCBzaW5jZSB0aGUgTEVTUyBmaWxlIGlzIG5vIGxvbmdlciBhdmFpbGFibGUuXG5cbi8vIHNvIHRoaXMgZmlsZSBpcyBhbiBhZGRpdGlvbmFsIGFic3RyYWN0aW9uIHRoYXQncyBoZXJlIHRvIGFsbG93XG4vLyB3ZWJwYWNrIHRvIGluY2x1ZGUgd2hhdCBpdCBuZWVkcyB3aXRob3V0IGNvcnJ1cHRpbmcgdGhlIG1vZHVsYXJcbi8vIGxpYnJhcnkgYnVpbGQuXG5leHBvcnQgY29uc3QgY3JlYXRlQWxlcnQgPSBjb250ZW50LmNyZWF0ZUFsZXJ0O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVByZWRpY3RpdmVUZXh0ID0gY29udGVudC5jcmVhdGVQcmVkaWN0aXZlVGV4dDtcbmV4cG9ydCBjb25zdCBjcmVhdGVEaWFsb2cgPSBjb250ZW50LmNyZWF0ZURpYWxvZztcbmV4cG9ydCBjb25zdCBjcmVhdGVFeHBhbmRlciA9IGNvbnRlbnQuY3JlYXRlRXhwYW5kZXI7XG5leHBvcnQgY29uc3QgY3JlYXRlVG9vbHRpcCA9IGNvbnRlbnQuY3JlYXRlVG9vbHRpcDtcbmV4cG9ydCBjb25zdCBjcmVhdGVEaWFsb2dUb29sdGlwID0gY29udGVudC5jcmVhdGVEaWFsb2dUb29sdGlwO1xuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMaW5rID0gY29udGVudC5pbml0aWFsaXplTGluaztcbmV4cG9ydCBjb25zdCBidXR0b24gPSBjb250ZW50LmJ1dHRvbjtcbmV4cG9ydCBjb25zdCBjaGVja2JveCA9IGNvbnRlbnQuY2hlY2tib3g7XG5leHBvcnQgY29uc3QgY3JlYXRlUmFkaW9Hcm91cCA9IGNvbnRlbnQuY3JlYXRlUmFkaW9Hcm91cDtcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmVlID0gY29udGVudC5jcmVhdGVUcmVlO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnUgPSBjb250ZW50LmNyZWF0ZU1lbnU7XG5leHBvcnQgY29uc3QgY3JlYXRlU2xpZGVyID0gY29udGVudC5jcmVhdGVTbGlkZXI7XG5leHBvcnQgY29uc3QgY3JlYXRlVGFicGFuZWwgPSBjb250ZW50LmNyZWF0ZVRhYnBhbmVsO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2dyZXNzQmFyID0gY29udGVudC5jcmVhdGVQcm9ncmVzc0JhcjtcbmV4cG9ydCBjb25zdCBjb25maWd1cmVGb3JtVmFsaWRhdGlvbiA9IGNvbnRlbnQuY29uZmlndXJlRm9ybVZhbGlkYXRpb247XG5leHBvcnQgY29uc3QgdGFibGVzID0gY29udGVudC50YWJsZXM7XG5leHBvcnQgY29uc3QgY3JlYXRlTXVsdGlyYW5nZSA9IGNvbnRlbnQuY3JlYXRlTXVsdGlyYW5nZTtcbmV4cG9ydCBjb25zdCBjcmVhdGVIaWVyYXJjaGljYWxNZW51ID0gY29udGVudC5jcmVhdGVIaWVyYXJjaGljYWxNZW51O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGlicmFyeUVudHJ5LmpzIiwiaW1wb3J0IGNyZWF0ZUFsZXJ0IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IGNyZWF0ZURpYWxvZyBmcm9tICcuL2RpYWxvZyc7XG5pbXBvcnQgY3JlYXRlVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IGNyZWF0ZURpYWxvZ1Rvb2x0aXAgZnJvbSAnLi90b29sdGlwRGlhbG9nJztcbmltcG9ydCBpbml0aWFsaXplTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0ICogYXMgYnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCAqIGFzIGNoZWNrYm94IGZyb20gJy4vY2hlY2tib3gnO1xuaW1wb3J0IGNyZWF0ZVJhZGlvR3JvdXAgZnJvbSAnLi9yYWRpbyc7XG5pbXBvcnQgY3JlYXRlVHJlZSBmcm9tICcuL3RyZWUnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjcmVhdGVNdWx0aXJhbmdlIGZyb20gJy4vbXVsdGlyYW5nZSc7XG5pbXBvcnQgY3JlYXRlUHJlZGljdGl2ZVRleHQgZnJvbSAnLi9wcmVkaWN0aXZlLXRleHQnO1xuaW1wb3J0IGNyZWF0ZVRhYnBhbmVsIGZyb20gJy4vdGFicGFuZWwnO1xuaW1wb3J0IGNyZWF0ZVByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3NCYXInO1xuaW1wb3J0IGNyZWF0ZUV4cGFuZGVyIGZyb20gJy4vZXhwYW5kZXInO1xuaW1wb3J0IGNvbmZpZ3VyZUZvcm1WYWxpZGF0aW9uIGZyb20gJy4vZm9ybVZhbGlkYXRpb24nO1xuaW1wb3J0IGNyZWF0ZVNvcnRhYmxlVGFibGUgZnJvbSAnLi9zb3J0YWJsZVRhYmxlJztcbmltcG9ydCAqIGFzIGNvbGxhcHNpbmdUYWJsZSBmcm9tICcuL2NvbGxhcHNpbmdUYWJsZSc7XG5pbXBvcnQgY3JlYXRlU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCBjcmVhdGVIaWVyYXJjaGljYWxNZW51IGZyb20gJy4vaGllcmFyY2hpY2FsTWVudSc7XG5cbmlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgdGFibGVzID0ge1xuICBjcmVhdGVTb3J0YWJsZVRhYmxlLFxuICBtYWtlVGFibGVSZXNwb25zaXZlOiBjb2xsYXBzaW5nVGFibGUubWFrZVRhYmxlUmVzcG9uc2l2ZVxufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlQWxlcnQsXG4gIGNyZWF0ZVByZWRpY3RpdmVUZXh0LFxuICBjcmVhdGVEaWFsb2csXG4gIGNyZWF0ZUV4cGFuZGVyLFxuICBjcmVhdGVUb29sdGlwLFxuICBjcmVhdGVEaWFsb2dUb29sdGlwLFxuICBpbml0aWFsaXplTGluayxcbiAgYnV0dG9uLFxuICBjaGVja2JveCxcbiAgY3JlYXRlUmFkaW9Hcm91cCxcbiAgY3JlYXRlVHJlZSxcbiAgY3JlYXRlTWVudSxcbiAgY3JlYXRlTXVsdGlyYW5nZSxcbiAgY3JlYXRlVGFicGFuZWwsXG4gIGNyZWF0ZVByb2dyZXNzQmFyLFxuICBjb25maWd1cmVGb3JtVmFsaWRhdGlvbixcbiAgY3JlYXRlU2xpZGVyLFxuICBjcmVhdGVIaWVyYXJjaGljYWxNZW51LFxuICB0YWJsZXNcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKlxuVG8gRG86XG5cbi0gbW92ZSB0aGUgY29kZSB0aGF0IGFkZHMgcm9sZT1cImFsZXJ0XCIgYW5kIG90aGVyIGFyaWEtbGl2ZVxucHJvcGVydGllcyBpbnRvIHRoaXMgZmlsZSwgc28gdGhhdCBpdCdzIG5vdCBwYXJ0IG9mIHRoZVxucGFnZS1zcGVjaWZpYyBpbnN0YW50aWF0aW9uIHNjcmlwdC5cbi0gbW92ZSB0aGUgY29kZSB0aGF0IGFsbG93cyBmb3IgYXV0by1yZW1vdmFsIG9mIHRoZSBhbGVydFxubWVzc2FnZSBpbnRvIHRoaXMgZmlsZTsgbGV0IGl0IGJlIGEgcGFyYW1ldGVyIGluIHRoZVxuY2FsbCB0byB0aGUgZnVuY3Rpb25cbiovXG5cbi8qIEBhbGVydCAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWxlcnQobWVzc2FnZSwgY2xhc3NlcyA9IFtdLCB0aW1lb3V0KSB7XG5cbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4gb3V0cHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuXG4gIG91dHB1dC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICBpZiAodGltZW91dCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKG91dHB1dC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIG91dHB1dC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhUTUxBbGVydChlbGVtZW50LCBhbGVydFJlZ2lvbiwgdGltZW91dCkge1xuICAvL3ZhciBhbGVydEJveCA9IGFsZXJ0UmVnaW9uLnF1ZXJ5U2VsZWN0b3IoJyMnK2lkKTtcbiAgLy9hbGVydEJveC5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1zaG93LWJsb2NrJyk7XG5cbiAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAvL2NvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIC8vY29uc29sZS5sb2coYWxlcnRSZWdpb24pO1xuICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIC8vY29uc29sZS5sb2codGltZW91dCk7XG5cbiAgY2xlYXJBbGVydHMoYWxlcnRSZWdpb24pO1xuXG4gIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xuICAgIHZhciBhbGVydEJveCA9ICc8ZGl2ICBpZD1cIicgKyBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpICsgJ1wiIGNsYXNzPVwiJyArIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmVyZW5jZS1jbGFzcycpICsgJ1wiPicgICsgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHRtbCcpICsgJzwvZGl2Pic7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlcXVlLWFsZXJ0JykuaW5uZXJIVE1MICs9IGFsZXJ0Qm94O1xuICB9XG5cbiAgdmFyIGFjdGl2ZUVsZW1lbnRMaXN0ID0gYWxlcnRSZWdpb24ucXVlcnlTZWxlY3RvckFsbCgnZGl2Om5vdCguZGVxdS1oaWRkZW4pJyk7XG4gIGlmKGFjdGl2ZUVsZW1lbnRMaXN0KSB7XG4gICAgaWYoYWN0aXZlRWxlbWVudExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgW10uc2xpY2UuY2FsbChhY3RpdmVFbGVtZW50TGlzdCkuZm9yRWFjaChmdW5jdGlvbihlYWNoQ2hpbGRFbGVtZW50KSB7XG4gICAgICAgIGlmKGVhY2hDaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW1zZycpKSB7XG4gICAgICAgICAgZWFjaENoaWxkRWxlbWVudC5pbm5lckhUTUwgPSBlYWNoQ2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1tc2cnKTtcbiAgICAgICAgfVxuICAgICAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIC8vY29uc29sZS5sb2coZWFjaENoaWxkRWxlbWVudC5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICBpZiAodGltZW91dCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy9hbGVydEJveC5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1oaWRkZW4nKTtcbiAgICAgIC8vYWxlcnRCb3guY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtc2hvdy1ibG9jaycpO1xuICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVxdWUtYWxlcnQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgIFxuICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKS5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1oaWRkZW4nKTtcbiAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkuY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtc2hvdy1ibG9jaycpO1xuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudExpc3QgPSBhbGVydFJlZ2lvbi5xdWVyeVNlbGVjdG9yQWxsKCdkaXY6bm90KC5kZXF1LWhpZGRlbiknKTtcbiAgICAgIGlmKGFjdGl2ZUVsZW1lbnRMaXN0KSB7XG4gICAgICAgIGlmKGFjdGl2ZUVsZW1lbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBbXS5zbGljZS5jYWxsKGFjdGl2ZUVsZW1lbnRMaXN0KS5mb3JFYWNoKGZ1bmN0aW9uKGVhY2hDaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmKGVhY2hDaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW1zZycpKSB7XG4gICAgICAgICAgICAgIGVhY2hDaGlsZEVsZW1lbnQuaW5uZXJIVE1MID0gZWFjaENoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXNnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlYWNoQ2hpbGRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWhpZGRlbicpO1xuICAgICAgICAgICAgZWFjaENoaWxkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkZXF1ZS1zaG93LWJsb2NrJyk7XG4gICAgICAgICAgICBlYWNoQ2hpbGRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlYWNoQ2hpbGRFbGVtZW50LmlubmVySFRNTCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgfSwgdGltZW91dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVBbGxBbGVydHMoKSB7XG4gIHZhciBhbGVydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtYWxlcnQtZ3JvdXAnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsZXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB1c2VUaW1lb3V0SW5wdXQgPSBhbGVydHNbaV0ucXVlcnlTZWxlY3RvcignI3VzZVRpbWVvdXRJbnB1dCcpO1xuICAgIHZhciBidXR0b25zID0gYWxlcnRzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1idXR0b24nKTtcbiAgICB2YXIgYWxlcnRSZWdpb24gPSBhbGVydHNbaV0ucXVlcnlTZWxlY3RvcignLmRlcXVlLWFsZXJ0Jyk7XG4gICAgdmFyIGFsZXJ0Qm94ZXMgPSBhbGVydFJlZ2lvbi5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcblxuICAgIGZvcih2YXIgayA9IDA7IGsgPCBhbGVydEJveGVzLmxlbmd0aDsgaysrKXtcbiAgICAgIGFsZXJ0Qm94ZXNba10uY2xhc3NMaXN0LmFkZCgnZGVxdWUtaGlkZGVuJyk7XG4gICAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAvL2NvbnNvbGUubG9nKGFsZXJ0Qm94ZXNba10pO1xuICAgICAgYWxlcnRCb3hlc1trXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbXNnJywgYWxlcnRCb3hlc1trXS5pbm5lckhUTUwpO1xuICAgICAgYWxlcnRCb3hlc1trXS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBmb3IodmFyIGogPSAwOyBqIDwgYnV0dG9ucy5sZW5ndGg7IGorKyl7XG4gICAgICBidXR0b25zW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsZXJ0TWVzc2FnZS5iaW5kKG51bGwsIGJ1dHRvbnNbal0sIHVzZVRpbWVvdXRJbnB1dCwgYWxlcnRSZWdpb24pKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FsZXJ0TWVzc2FnZShpZCwgdXNlVGltZW91dElucHV0LCBhbGVydFJlZ2lvbikge1xuICB2YXIgdXNlVGltZW91dDtcbiAgaWYodXNlVGltZW91dElucHV0KXtcbiAgICBpZiAodXNlVGltZW91dElucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09ICdjaGVja2JveCcpe1xuICAgICAgdXNlVGltZW91dCA9IHVzZVRpbWVvdXRJbnB1dC5jaGVja2VkO1xuICAgIH1lbHNle1xuICAgICAgdXNlVGltZW91dCA9IHRydWU7XG4gICAgfVxuICB9ZWxzZXtcbiAgICB1c2VUaW1lb3V0ID0gZmFsc2U7XG4gIH1cblxuXG4gIGNsZWFyQWxlcnRzKGFsZXJ0UmVnaW9uKTtcbiAgaWYgKHVzZVRpbWVvdXQpIHtcbiAgICB2YXIgdGltZW91dFZhbHVlID0gdXNlVGltZW91dElucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICBpZiAodGltZW91dFZhbHVlKXtcbiAgICAgIGNyZWF0ZUhUTUxBbGVydChpZCwgYWxlcnRSZWdpb24sIHRpbWVvdXRWYWx1ZSk7XG4gICAgfWVsc2V7XG4gICAgICBjcmVhdGVIVE1MQWxlcnQoaWQsIGFsZXJ0UmVnaW9uLCA1MDAwKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY3JlYXRlSFRNTEFsZXJ0KGlkLCBhbGVydFJlZ2lvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJBbGVydHMoYWxlcnRSZWdpb24pIHtcbiAgdmFyIGFsZXJ0Qm94ZXMgPSBhbGVydFJlZ2lvbi5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcbiAgZm9yKHZhciBrID0gMDsgayA8IGFsZXJ0Qm94ZXMubGVuZ3RoOyBrKyspe1xuICAgIGFsZXJ0Qm94ZXNba10uY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtc2hvdy1ibG9jaycpO1xuICAgIGFsZXJ0Qm94ZXNba10uaW5uZXJIVE1MID0gJyc7XG4gICAgYWxlcnRCb3hlc1trXS5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1oaWRkZW4nKTtcbiAgfVxuICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXF1ZS1hbGVydCcpLmlubmVySFRNTCA9ICcnO1xufVxuXG5hY3RpdmF0ZUFsbEFsZXJ0cygpO1xuXG5cbi8qIGVuZCBAYWxlcnQgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbGVydC9pbmRleC5qcyIsImltcG9ydCB7Z2V0Rmlyc3RGb2N1c2FibGVDaGlsZCwgZ2V0TmV4dEZvY3VzYWJsZUNoaWxkLCBpbml0VGFiVHJhcH0gZnJvbSAnLi4vX3V0aWxzL2ZvY3VzVXRpbHMnO1xuLy9pbXBvcnQge2NyZWF0ZUNvbnRlbnRBcmVhfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudEFyZWEnO1xuaW1wb3J0IHtjcmVhdGVCdXR0b25CYXJ9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b25CYXInO1xuaW1wb3J0IHtjcmVhdGVTY3JlZW59IGZyb20gJy4vY29tcG9uZW50cy9saWdodGJveFNjcmVlbic7XG4vKiBAZGlhbG9nICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEaWFsb2coaWQsIHJvbGUpIFxue1xuICB2YXIgc2NyZWVuID0gY3JlYXRlU2NyZWVuKCk7XG4gIHZhciBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgdmFyIGRpYWxvZ0J1dHRvbnMgPSBhbGVydC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWJ1dHRvbnMnKTtcbiAgdmFyIGJ1dHRvbnMgPSBkaWFsb2dCdXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IGJ1dHRvbnMubGVuZ3RoOyB4Kyspe1xuICAgIGJ1dHRvbnNbeF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlKTtcbiAgfVxuXG4gIC8vIGNsb3NlIGJ1dHRvblxuICB2YXIgeEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBmdW5jdGlvbiBzZXRJbml0aWFsRm9jdXMoY29uZmlnKSB7XG4gICAgaWYgKCFjb25maWcuaXNBbGVydCkge1xuICAgICAgdmFyIHRhcmdldCA9IGdldEZpcnN0Rm9jdXNhYmxlQ2hpbGQoYWxlcnQpO1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlcXVlLWRpYWxvZy1idXR0b24tY2xvc2UnKSkge1xuICAgICAgICB0YXJnZXQgPSBnZXROZXh0Rm9jdXNhYmxlQ2hpbGQoYWxlcnQsIHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWcuaXNBbGVydCAmJiBjb25maWcuaXNEZXRhaWwpIHtcbiAgICAgIC8vcmV0dXJuIGNvbnRlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAoYnV0dG9uQmFyLmdldEZpcnN0QnV0dG9uKCkpIHtcbiAgICAgIC8vcmV0dXJuIGJ1dHRvbkJhci5nZXRGaXJzdEJ1dHRvbigpLmZvY3VzKCk7XG4gICAgfVxuICBcbiAgICAvL2FsZXJ0LmZvY3VzKCk7XG4gICAgaWYoYWxlcnQucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1zY3JlZW4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2ltYWdlTWFnbmlmaWVyJykpIHtcbiAgICAgIGFsZXJ0LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctY29udGVudCcpLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctc2NyZWVuJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBhbGVydC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWhlYWRpbmcnKS5mb2N1cygpO1xuICAgIFxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgY2xlYXJDbGFzc2VzKCk7XG4gICAgc2NyZWVuLmNsZWFyKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3Nlcy5pc0FycmF5KSB7XG4gICAgICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0LmNsYXNzTGlzdC5hZGQoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7XG4gICAgbGV0IHRvUmVtb3ZlID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGVydC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvUmVtb3ZlLnB1c2goYWxlcnQuY2xhc3NMaXN0W2ldKTtcbiAgICB9XG5cbiAgICB0b1JlbW92ZS5mb3JFYWNoKGMgPT4ge1xuICAgICAgYWxlcnQuY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICB9KTtcblxuICAgIGFkZENsYXNzZXMocm9sZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRSb2xlKHJvbGUpIHtcbiAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVDbG9zZUJ1dHRvbigpIHtcbiAgICB4QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWhpZGRlbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Nsb3NlQnV0dG9uKCkge1xuICAgIHhCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtaGlkZGVuJyk7XG4gIH1cblxuICAvL3ZhciBjb250ZW50ID0gY3JlYXRlQ29udGVudEFyZWEoYWxlcnQpO1xuXG4gIHZhciByZXR1cm5Gb2N1c1RvO1xuXG4gIHhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFc2NhcGUpO1xuXG4gIHZhciBidXR0b25CYXIgPSBhbGVydC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWJ1dHRvbnMnKTtcbiAgYnV0dG9uQmFyID0gY3JlYXRlQnV0dG9uQmFyKGJ1dHRvbkJhcik7XG5cbiAgZnVuY3Rpb24gc2hvdyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLmNsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzZXMoY29uZmlnLmNsYXNzZXMpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGVzY3JpYmVkYnkpIHtcbiAgICAgIC8vYWxlcnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgY29uZmlnLmRlc2NyaWJlZGJ5KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmxhYmVsbGVkYnkpIHtcbiAgICAgIC8vYWxlcnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBjb25maWcubGFiZWxsZWRieSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5oaWRlQ2xvc2VCdXR0b24pIHtcbiAgICAgIGhpZGVDbG9zZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93Q2xvc2VCdXR0b24oKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLndyYXBwZXJJRCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLndyYXBwZXJJRCkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgY29uZmlnLmlzQWxlcnQgPyBzZXRSb2xlKCdhbGVydGRpYWxvZycpIDogc2V0Um9sZSgnZGlhbG9nJyk7XG4gICAgc2NyZWVuLnNob3coKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcbiAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgYWxlcnQuY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtaGlkZGVuJyk7XG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnZGVxdWUtc2hvdy1ibG9jaycpO1xuICAgIFxuICAgIGlmKGFsZXJ0LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctc2NyZWVuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZU1hZ25pZmllcicpKSB7XG4gICAgICBhbGVydC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWNvbnRlbnQnKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywnMCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLXNjcmVlbicpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCcwJyk7XG4gICAgfVxuXG4gICAgc2V0SW5pdGlhbEZvY3VzKGNvbmZpZyk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIGlmIChhbGVydC5oYXNBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKSkge1xuICAgICAgYWxlcnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgfVxuXG4gICAgcmVzZXQoKTtcbiAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1oaWRkZW4nKTtcblxuICAgIHJldHVybkZvY3VzVG8uZm9jdXMoKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXNjYXBlKCkge1xuICAgIGhpZGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDI3KSB7XG4gICAgICBoYW5kbGVFc2NhcGUoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgYWxlcnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuXG4gIGluaXRUYWJUcmFwKGFsZXJ0KTtcblxuICByZXR1cm4gZnVuY3Rpb24odHJpZ2dlckVsZW1lbnQsIGNvbmZpZykge1xuICAgIHJldHVybkZvY3VzVG8gPSB0cmlnZ2VyRWxlbWVudDtcbiAgICAvLyBtYWtlIHN1cmUgd2UgbmV2ZXIgZW5kIHVwIHdpdGggYSBjYXNlIHdoZXJlIGEgbm9uLWFsZXJ0IGJveCBpcyB0cmVhdGVkXG4gICAgLy8gYXMgYSBzaW1wbGUgYWxlcnQuXG4gICAgaWYgKCFjb25maWcuaXNBbGVydCkge1xuICAgICAgY29uZmlnLmlzRGV0YWlsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzaG93KGNvbmZpZyk7XG4gIH07XG59XG5cbnZhciBhY3RpdmF0ZUhhbmRlciA9IGZhbHNlO1xuXG52YXIgYWN0aXZhdGVEZXF1ZURpYWxvZ0J1dHRvbkNsaWNrSGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJvZHlDaGlsZHMgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuO1xuICAvL3ZhciBkZXF1ZURpYWxvZ01lc3NhZ2VBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctbWVzc2FnZS1hbGVydCcpIHx8IG51bGw7XG4gIC8vdmFyIGRlcXVlRGlhbG9nTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctbWVzc2FnZScpIHx8IG51bGw7XG4gIC8vdmFyIGRlcXVlRGlhbG9nQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWFsZXJ0JykgfHwgbnVsbDtcbiAgLy92YXIgZGVxdWVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nJykgfHwgbnVsbDtcbiAgdmFyIGRlcXVlRGlhbG9nQmFja2dyb3VuZExheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLWRpYWxvZy1zY3JlZW4td3JhcHBlcicpIHx8IG51bGw7XG4gIHZhciBkZXF1ZURpYWxvZ0Nsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLWRpYWxvZy1idXR0b24tY2FuY2VsJykgfHwgbnVsbDtcblxuICB2YXIgYXJpYUhpZGRlbkxpc3QgPSBudWxsO1xuICB2YXIgYXJpYUhpZGRlbkZhbHNlTGlzdCA9IG51bGw7XG4gIHZhciBhcmlhSGlkZGVuVHJ1ZUxpc3QgPSBudWxsO1xuICB2YXIgdHJpZ2dlck5vZGUgPSBudWxsO1xuICBcbiAgdmFyIGRlcXVlSnNBcmlhID0gJ2RlcXVlLWpzLWFyaWEnO1xuICB2YXIgZGVxdWVKc0FyaWFUcnVlID0gJ2RlcXVlLWpzLWFyaWEtdHJ1ZSc7XG4gIHZhciBkZXF1ZUpzQXJpYUZhbHNlID0gJ2RlcXVlLWpzLWFyaWEtZmFsc2UnO1xuXG4gIC8qXG4gIHZhciB0cmlnZ2VyTGlzdCA9IFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVxdWUtZGlhbG9nLW1lc3NhZ2UtYWxlcnQtdHJpZ2dlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVxdWUtZGlhbG9nLW1lc3NhZ2UtdHJpZ2dlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVxdWUtZGlhbG9nLWFsZXJ0LXRyaWdnZXInKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlcXVlLWRpYWxvZy10cmlnZ2VyJyldO1xuICAqL1xuICBcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlcXVlLWRpYWxvZy1tZXNzYWdlLWFsZXJ0LXRyaWdnZXInKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVxdWUtZGlhbG9nLW1lc3NhZ2UtdHJpZ2dlcicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXF1ZS1kaWFsb2ctYWxlcnQtdHJpZ2dlcicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXF1ZS1kaWFsb2ctdHJpZ2dlcicpKSB7XG4gICAgW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGVxdWUtZGlhbG9nLW1lc3NhZ2UtYWxlcnQtdHJpZ2dlciwgI2RlcXVlLWRpYWxvZy1tZXNzYWdlLXRyaWdnZXIsICNkZXF1ZS1kaWFsb2ctYWxlcnQtdHJpZ2dlciwgI2RlcXVlLWRpYWxvZy10cmlnZ2VyJykpLmZvckVhY2goIGZ1bmN0aW9uKHRyaWdnZXJCdG4pIHtcbiAgICAgIHRyaWdnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdHJpZ2dlck5vZGUgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgW10uc2xpY2UuY2FsbChib2R5Q2hpbGRzKS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAvL2lmKG5vZGUgIT0gZGVxdWVEaWFsb2dNZXNzYWdlQWxlcnQgJiYgbm9kZSAhPSBkZXF1ZURpYWxvZ01lc3NhZ2UgJiYgbm9kZSAhPSBkZXF1ZURpYWxvZ0FsZXJ0ICYmIG5vZGUgIT0gZGVxdWVEaWFsb2cgJiYgKG5vZGUubm9kZU5hbWUpLnRvTG93ZXJDYXNlKCkgIT0gJ2xpbmsnICYmIChub2RlLm5vZGVOYW1lKS50b0xvd2VyQ2FzZSgpICE9ICdzY3JpcHQnKSB7XG4gICAgICAgICAgaWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSAhPSB0cmlnZ2VyTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgeyAgXG4gICAgICAgICAgICB2YXIgbm9kZUFyaWFIaWRkZW4gPSBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIGlmKCEobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoZGVxdWVKc0FyaWEpIHx8IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGRlcXVlSnNBcmlhVHJ1ZSkgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoZGVxdWVKc0FyaWFGYWxzZSkpKSB7XG4gICAgICAgICAgICAgIGlmKCFub2RlQXJpYUhpZGRlbikge1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChkZXF1ZUpzQXJpYSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZihub2RlQXJpYUhpZGRlbiA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoZGVxdWVKc0FyaWFUcnVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKG5vZGVBcmlhSGlkZGVuID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoZGVxdWVKc0FyaWFGYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy99XG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgICAgICB2YXIgYWxsQXJpYUhpZGRlbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGRlcXVlSnNBcmlhICsgJywgLicgKyBkZXF1ZUpzQXJpYVRydWUgKyAnLCAuJyArIGRlcXVlSnNBcmlhRmFsc2UpO1xuICAgICAgICBbXS5zbGljZS5jYWxsKGFsbEFyaWFIaWRkZW5MaXN0KS5mb3JFYWNoKCBmdW5jdGlvbihhcmlhTm9kZSkge1xuICAgICAgICAgIGFyaWFOb2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCd0cnVlJyk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgYXJpYUhpZGRlbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGRlcXVlSnNBcmlhKTtcbiAgICAgICAgYXJpYUhpZGRlbkZhbHNlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgZGVxdWVKc0FyaWFGYWxzZSk7XG4gICAgICAgIGFyaWFIaWRkZW5UcnVlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgZGVxdWVKc0FyaWFUcnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICAgXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cbiAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctc2NyZWVuJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZU1hZ25pZmllcicpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctY29udGVudCcpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWNvbnRlbnQnKS5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1zY3JlZW4nKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1zY3JlZW4nKS5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHZhciBkZXF1ZUNsb3NlQnRuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1kaWFsb2ctYnV0dG9uLWNsb3NlJyk7XG4gIFxuICBpZihkZXF1ZUNsb3NlQnRuTGlzdC5sZW5ndGggPiAwICkge1xuICAgIFtdLnNsaWNlLmNhbGwoZGVxdWVDbG9zZUJ0bkxpc3QpLmZvckVhY2goZnVuY3Rpb24oYnRuKSB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoYXJpYUhpZGRlbkxpc3QpIHtcbiAgICAgICAgICBbXS5zbGljZS5jYWxsKGFyaWFIaWRkZW5MaXN0KS5mb3JFYWNoKGZ1bmN0aW9uKGFyaWFOb2RlKSB7XG4gICAgICAgICAgICBhcmlhTm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICBhcmlhTm9kZS5jbGFzc0xpc3QucmVtb3ZlKGRlcXVlSnNBcmlhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGFyaWFIaWRkZW5GYWxzZUxpc3QpIHtcbiAgICAgICAgICBbXS5zbGljZS5jYWxsKGFyaWFIaWRkZW5GYWxzZUxpc3QpLmZvckVhY2goIGZ1bmN0aW9uKGFyaWFOb2RlKSB7XG4gICAgICAgICAgICBhcmlhTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywnZmFsc2UnKTtcbiAgICAgICAgICAgIGFyaWFOb2RlLmNsYXNzTGlzdC5yZW1vdmUoZGVxdWVKc0FyaWFGYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgaWYoYXJpYUhpZGRlblRydWVMaXN0KSB7XG4gICAgICAgICAgW10uc2xpY2UuY2FsbChhcmlhSGlkZGVuVHJ1ZUxpc3QpLmZvckVhY2goIGZ1bmN0aW9uKGFyaWFOb2RlKSB7XG4gICAgICAgICAgICBhcmlhTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywndHJ1ZScpO1xuICAgICAgICAgICAgYXJpYU5vZGUuY2xhc3NMaXN0LnJlbW92ZShkZXF1ZUpzQXJpYVRydWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcblxuICB2YXIgZGVxdWVTdWJtaXRCdG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLWRpYWxvZy1idXR0b24tc3VibWl0Jyk7XG4gIGlmKGRlcXVlU3VibWl0QnRuTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgW10uc2xpY2UuY2FsbChkZXF1ZVN1Ym1pdEJ0bkxpc3QpLmZvckVhY2goZnVuY3Rpb24oYnRuKXtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihhcmlhSGlkZGVuTGlzdCkge1xuICAgICAgICAgIFtdLnNsaWNlLmNhbGwoYXJpYUhpZGRlbkxpc3QpLmZvckVhY2goZnVuY3Rpb24oYXJpYU5vZGUpIHtcbiAgICAgICAgICAgIGFyaWFOb2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIGFyaWFOb2RlLmNsYXNzTGlzdC5yZW1vdmUoZGVxdWVKc0FyaWEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYXJpYUhpZGRlbkZhbHNlTGlzdCkge1xuICAgICAgICAgIFtdLnNsaWNlLmNhbGwoYXJpYUhpZGRlbkZhbHNlTGlzdCkuZm9yRWFjaCggZnVuY3Rpb24oYXJpYU5vZGUpIHtcbiAgICAgICAgICAgIGFyaWFOb2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCdmYWxzZScpO1xuICAgICAgICAgICAgYXJpYU5vZGUuY2xhc3NMaXN0LnJlbW92ZShkZXF1ZUpzQXJpYUZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBpZihhcmlhSGlkZGVuVHJ1ZUxpc3QpIHtcbiAgICAgICAgICBbXS5zbGljZS5jYWxsKGFyaWFIaWRkZW5UcnVlTGlzdCkuZm9yRWFjaCggZnVuY3Rpb24oYXJpYU5vZGUpIHtcbiAgICAgICAgICAgIGFyaWFOb2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCd0cnVlJyk7XG4gICAgICAgICAgICBhcmlhTm9kZS5jbGFzc0xpc3QucmVtb3ZlKGRlcXVlSnNBcmlhVHJ1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihkZXF1ZUFjdGl2ZURpYWxvZ0J1dHRvbikge1xuICAgICAgICAgIGRlcXVlQWN0aXZlRGlhbG9nQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIFxuICBcbiAgLyogY2xvc2luZyBwb3B1cCBvbiBrZXlwcmVzcyAoRVNDLCBldGMuLCkgIGFuZCBvbiBjbGlja2luZyBvZiBiYWNrZ3JvdW5kIGJsYWNrIGxheWVyICovXG4gIHZhciBLRVlfQ09ORklHID0ge1xuICAgIDI3OiAnRVNDJyxcbiAgICAvLzE2OiAnU0hJRlQnXG4gIH07XG4gICAgICAgICAgXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gS0VZX0NPTkZJRykge1xuICAgICAgaWYgKGtleSA9PSBlLmtleUNvZGUpIHtcbiAgICAgICAgaW5QYWdlQ2xvc2VBY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBcbiAgdmFyIGluUGFnZUNsb3NlQWN0aW9uID0gZnVuY3Rpb24gKGJnTGF5ZXIpIHtcbiAgICBpZihiZ0xheWVyKSB7XG4gICAgICBiZ0xheWVyLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1idXR0b24tY2xvc2UnKS5jbGljaygpOyAvKiBjb2RlIHRvIGNsb3NlIHRoZSBwb3B1cCAqL1xuICAgIH0gZWxzZSB7XG4gICAgICBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1kaWFsb2ctYnV0dG9uLWNsb3NlJykpLmZvckVhY2goIGZ1bmN0aW9uKGJ0bkNsb3NlKSB7XG4gICAgICAgIGJ0bkNsb3NlLmNsaWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgW10uc2xpY2UuY2FsbChkZXF1ZUNsb3NlQnRuTGlzdCkuZm9yRWFjaCggZnVuY3Rpb24oY2xvc2VCdG4pIHtcbiAgICAgIGNsb3NlQnRuLmNsaWNrKCk7XG4gICAgfSk7XG4gICAgXG4gICAgaWYodHJpZ2dlck5vZGUpIHtcbiAgICAgIHRyaWdnZXJOb2RlLmZvY3VzKCk7IC8qIGNvZGUgIHRvIHJldGFpbiBmb2N1cyB0byB0aGUgdHJpZ2dlciBidXR0b24gKi9cbiAgICB9XG4gIH07XG4gIFxuICBpZihkZXF1ZURpYWxvZ0JhY2tncm91bmRMYXllcikge1xuICAgIFtdLnNsaWNlLmNhbGwoZGVxdWVEaWFsb2dCYWNrZ3JvdW5kTGF5ZXIpLmZvckVhY2goZnVuY3Rpb24oYmdMYXllcikge1xuICAgICAgYmdMYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5QYWdlQ2xvc2VBY3Rpb24oYmdMYXllcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKGRlcXVlRGlhbG9nQ2xvc2VCdXR0b24pIHtcbiAgICBbXS5zbGljZS5jYWxsKGRlcXVlRGlhbG9nQ2xvc2VCdXR0b24pLmZvckVhY2goZnVuY3Rpb24oY2xzQnRuKSB7XG4gICAgICBjbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5QYWdlQ2xvc2VBY3Rpb24oY2xzQnRuKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGVxdWVBY3RpdmVEaWFsb2dCdXR0b24gPSBudWxsO1xuXG4vKlxuKiBhY3RpdmF0ZUFsbERpYWxvZ3MoKTogVGhpcyBtZXRob2QgaGFzIDQgdHlwZXMgb2YgRGlhbG9ncy5cbiogU2ltcGxlIERpYWxvZ3MsIERpYWxvZyBBbGVydHMsIERpYWxvZyBNZXNzYWdlcyBhbmQgRGlhbG9nIE1lc3NhZ2VzIEFsZXJ0c1xuKiAxLiBMb29rcyBmb3IgYWxsIGluc3RhbmNlcyBvZiByZXNwZWN0aXZlIGNsYXNzZXMgYW5kIGxvb3BzIHRoZW0gb3ZlciBcbiogd2l0aCBhbGwgZGV0YWlscyBsaWtlIGRlc2NyaXB0aW9uLCBoZWFkaW5ncyBhbmQgc3RvcmVzIHRoZW0gaW4gY29uZmlnIGNsYXNzLlxuKiAyLiBGb3IgZWFjaCBidXR0b24gY2xpY2ssIGl0IGdldHMgdGhlIHZhbHVlIG9mIGFyaWEtY29udHJvbCBhbmQgY3JlYXRlcyBhbmQgc2hvd3MgdGhlIHJlc3BlY3RpdmUgZGlhbG9nIGJhc2VkIG9uIHRoZSBjb25maWcgdmFsdWVzLlxuKi9cbmZ1bmN0aW9uIGFjdGl2YXRlQWxsRGlhbG9ncygpe1xuICBcbiAgLy9hY3RpdmF0ZSBhbGwgc2ltcGxlIERpYWxvZ3NcbiAgdmFyIGRpYWxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtZGlhbG9nJyk7XG4gXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGlhbG9ncy5sZW5ndGg7IGkrKykge1xuICAgIGRpYWxvZ3NbaV0uY2xhc3NMaXN0LmFkZCgnZGVxdWUtaGlkZGVuJyk7XG5cbiAgICB2YXIgZGlhbG9nRGF0YUlkID0gJ18nICsgZGlhbG9nc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAvL2RpYWxvZ3NbaV0uc2V0QXR0cmlidXRlKCdpZCcsIGRpYWxvZ3NbaV0uZ2V0QXR0cmlidXRlKCdpZCcpICsgZGlhbG9nRGF0YUlkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1pZD1cIicgKyBkaWFsb2dzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpICsgJ1wiXScpLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGRpYWxvZ3NbaV0uZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICBcbiAgICB2YXIgZGlhbG9nSGVhZGluZ0VsZW1lbnQgPSBkaWFsb2dzW2ldLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctaGVhZGluZycpO1xuICAgIGRpYWxvZ0hlYWRpbmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBkaWFsb2dIZWFkaW5nRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykgKyBkaWFsb2dEYXRhSWQpO1xuXG4gICAgdmFyIGRpYWxvZ0Rlc2NyaXB0aW9uRWxlbWVudCA9IGRpYWxvZ3NbaV0ucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1kZXNjcmlwdGlvbicpO1xuICAgIGRpYWxvZ0Rlc2NyaXB0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZGlhbG9nRGVzY3JpcHRpb25FbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSArIGRpYWxvZ0RhdGFJZCk7IFxuXG4gICAgdmFyIGRpYWxvZ0Rlc2NyaXB0aW9uOyAgXG4gICAgdmFyIGRpYWxvZ0xhYmVsO1xuXG4gICAgdmFyIGNvbmZpZ0RpYWxvZyA9IHtcbiAgICAgIGRlc2NyaWJlZGJ5OiBkaWFsb2dEZXNjcmlwdGlvbixcbiAgICAgIGxhYmVsbGVkYnk6IGRpYWxvZ0xhYmVsLFxuICAgICAgaXNBbGVydDogZmFsc2VcbiAgICB9O1xuXG4gICAgdmFyIHRyaWdnZXJEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXF1ZS1kaWFsb2ctdHJpZ2dlciBkZXF1ZS1idXR0b24nKTtcblxuICAgIHRyaWdnZXJEaWFsb2dbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRlcXVlQWN0aXZlRGlhbG9nQnV0dG9uID0gdHJpZ2dlckRpYWxvZ1tpXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVEaWFsb2cgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgdmFyIHNob3dEaWFsb2cgPSBjcmVhdGVEaWFsb2coYXR0cmlidXRlRGlhbG9nLCAnZGVxdWUtZGlhbG9nJyk7XG5cbiAgICAgIHZhciBkZXF1ZURpYWxvZ1dpZGdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtZGlhbG9nW2RhdGEtaWQ9XCInICsgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSArICdcIl0nKVswXTtcbiAgICAgIGlmKGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWhlYWRpbmcnKSkge1xuICAgICAgICBjb25maWdEaWFsb2cuZGVzY3JpYmVkYnkgID0gZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctaGVhZGluZycpLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0RpYWxvZy5kZXNjcmliZWRieSA9ICcnO1xuICAgICAgfVxuICAgICAgaWYoZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctZGVzY3JpcHRpb24nKSkge1xuICAgICAgICBjb25maWdEaWFsb2cubGFiZWxsZWRieSA9IGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWRlc2NyaXB0aW9uJykuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnRGlhbG9nLmxhYmVsbGVkYnkgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYoZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lSW5wdXQnKSkge1xuICAgICAgICB2YXIgbmFtZUlucHV0RWxlbWVudCA9IGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUlucHV0Jyk7XG4gICAgICAgIHZhciBsYWJlbElucHV0RWxlbWVudCA9IGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9JyArIG5hbWVJbnB1dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpICsgJ10nKTtcbiAgICAgICAgdmFyIG1vZGlmaWVkTmFtZUlucHV0RWxlbWVudElkID0gbmFtZUlucHV0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykgKyAnXycgKyBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBsYWJlbElucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIG1vZGlmaWVkTmFtZUlucHV0RWxlbWVudElkKTtcbiAgICAgICAgbmFtZUlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgbW9kaWZpZWROYW1lSW5wdXRFbGVtZW50SWQpO1xuICAgICAgfVxuXG4gICAgICBcbiAgICAgIGlmKGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdE5hbWVJbnB1dCcpKSB7XG4gICAgICAgIHZhciBsYXN0TmFtZUlucHV0RWxlbWVudCA9IGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdE5hbWVJbnB1dCcpO1xuICAgICAgICB2YXIgbGFiZWxMYXN0SW5wdXRFbGVtZW50ID0gZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj0nICsgbGFzdE5hbWVJbnB1dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpICsgJ10nKTtcbiAgICAgICAgdmFyIG1vZGlmaWVkTGFzdE5hbWVJbnB1dEVsZW1lbnRJZCA9IGxhc3ROYW1lSW5wdXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSArICdfJyArIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGxhYmVsTGFzdElucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIG1vZGlmaWVkTGFzdE5hbWVJbnB1dEVsZW1lbnRJZCk7XG4gICAgICAgIGxhc3ROYW1lSW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBtb2RpZmllZExhc3ROYW1lSW5wdXRFbGVtZW50SWQpO1xuICAgICAgfVxuXG5cbiAgICAgIHNob3dEaWFsb2codGhpcywgY29uZmlnRGlhbG9nKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vYWN0aXZhdGUgYWxsIGRpYWxvZyBhbGVydHMgIFxuICB2YXIgZGlhbG9nQWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLWRpYWxvZy1hbGVydCcpO1xuICBmb3IgKHZhciBqID0gMDsgaiA8IGRpYWxvZ0FsZXJ0cy5sZW5ndGg7IGorKykge1xuICAgIGRpYWxvZ0FsZXJ0c1tqXS5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1oaWRkZW4nKTtcblxuICAgIGRpYWxvZ0RhdGFJZCA9ICdfJyArIGRpYWxvZ0FsZXJ0c1tqXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBkaWFsb2dBbGVydHNbal0uc2V0QXR0cmlidXRlKCdpZCcsIGRpYWxvZ0FsZXJ0c1tqXS5nZXRBdHRyaWJ1dGUoJ2lkJykgKyBkaWFsb2dEYXRhSWQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWlkPVwiJyArIGRpYWxvZ0FsZXJ0c1tqXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSArICdcIl0nKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBkaWFsb2dBbGVydHNbal0uZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICBcbiAgICBkaWFsb2dIZWFkaW5nRWxlbWVudCA9IGRpYWxvZ0FsZXJ0c1tqXS5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWhlYWRpbmcnKTtcbiAgICBkaWFsb2dIZWFkaW5nRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZGlhbG9nSGVhZGluZ0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpICsgZGlhbG9nRGF0YUlkKTtcblxuICAgIC8vZGlhbG9nRGVzY3JpcHRpb25FbGVtZW50ID0gZGlhbG9nQWxlcnRzW2pdLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctZGVzY3JpcHRpb24nKTtcbiAgICAvL2RpYWxvZ0Rlc2NyaXB0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZGlhbG9nRGVzY3JpcHRpb25FbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSArIGRpYWxvZ0RhdGFJZCk7IFxuXG5cbiAgICB2YXIgZGlhbG9nQWxlcnREZXNjcmlwdGlvbjtcbiAgICB2YXIgZGlhbG9nQWxlcnRMYWJlbDtcblxuICAgIHZhciBjb25maWdEaWFsb2dBbGVydCA9IHtcbiAgICAgIGRlc2NyaWJlZGJ5OiBkaWFsb2dBbGVydERlc2NyaXB0aW9uLFxuICAgICAgbGFiZWxsZWRieTogZGlhbG9nQWxlcnRMYWJlbCxcbiAgICAgIGlzQWxlcnQ6IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIHRyaWdnZXJEaWFsb2dBbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlcXVlLWRpYWxvZy1hbGVydC10cmlnZ2VyIGRlcXVlLWJ1dHRvbicpO1xuXG4gICAgdHJpZ2dlckRpYWxvZ0FsZXJ0W2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkZXF1ZUFjdGl2ZURpYWxvZ0J1dHRvbiA9IHRyaWdnZXJEaWFsb2dBbGVydFtpXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVEaWFsb2dBbGVydCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICB2YXIgc2hvd0RpYWxvZ0FsZXJ0ID0gY3JlYXRlRGlhbG9nKGF0dHJpYnV0ZURpYWxvZ0FsZXJ0LCAnZGVxdWUtZGlhbG9nLWFsZXJ0Jyk7XG4gICAgICB2YXIgZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLWRpYWxvZy1hbGVydFtkYXRhLWlkPVwiJyArIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgKyAnXCJdJylbMF07XG4gICAgICBpZihkZXF1ZURpYWxvZ1dpZGdldEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1oZWFkaW5nJykpIHtcbiAgICAgICAgY29uZmlnRGlhbG9nQWxlcnQuZGVzY3JpYmVkYnkgID0gZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctaGVhZGluZycpLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZ0RpYWxvZ0FsZXJ0LmRlc2NyaWJlZGJ5ICA9ICcnO1xuICAgICAgfVxuICAgICAgaWYoZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctZGVzY3JpcHRpb24nKSkge1xuICAgICAgICBjb25maWdEaWFsb2dBbGVydC5sYWJlbGxlZGJ5ID0gZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctZGVzY3JpcHRpb24nKS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWdEaWFsb2dBbGVydC5sYWJlbGxlZGJ5ID0gJyc7XG4gICAgICB9XG5cblxuICAgICAgc2hvd0RpYWxvZ0FsZXJ0KHRoaXMsIGNvbmZpZ0RpYWxvZ0FsZXJ0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vYWN0aXZhdGUgYWxsIGRpYWxvZyBtZXNzYWdlc1xuICB2YXIgZGlhbG9nTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtZGlhbG9nLW1lc3NhZ2UnKTtcbiAgZm9yICh2YXIgayA9IDA7IGsgPCBkaWFsb2dNZXNzYWdlcy5sZW5ndGg7IGsrKykge1xuICAgIGRpYWxvZ01lc3NhZ2VzW2tdLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWhpZGRlbicpO1xuXG4gICAgZGlhbG9nRGF0YUlkID0gJ18nICsgZGlhbG9nTWVzc2FnZXNba10uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgZGlhbG9nTWVzc2FnZXNba10uc2V0QXR0cmlidXRlKCdpZCcsIGRpYWxvZ01lc3NhZ2VzW2tdLmdldEF0dHJpYnV0ZSgnaWQnKSArIGRpYWxvZ0RhdGFJZCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtaWQ9XCInICsgZGlhbG9nTWVzc2FnZXNba10uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgKyAnXCJdJykuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgZGlhbG9nTWVzc2FnZXNba10uZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICBcbiAgICBkaWFsb2dIZWFkaW5nRWxlbWVudCA9IGRpYWxvZ01lc3NhZ2VzW2tdLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctaGVhZGluZycpO1xuICAgIGRpYWxvZ0hlYWRpbmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBkaWFsb2dIZWFkaW5nRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykgKyBkaWFsb2dEYXRhSWQpO1xuXG4gICAgZGlhbG9nRGVzY3JpcHRpb25FbGVtZW50ID0gZGlhbG9nTWVzc2FnZXNba10ucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1kZXNjcmlwdGlvbicpO1xuICAgIGRpYWxvZ0Rlc2NyaXB0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZGlhbG9nRGVzY3JpcHRpb25FbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSArIGRpYWxvZ0RhdGFJZCk7IFxuXG4gICAgdmFyIGRpYWxvZ01lc3NhZ2VEZXNjcmlwdGlvbjtcbiAgICB2YXIgZGlhbG9nTWVzc2FnZUxhYmVsO1xuICBcbiAgICB2YXIgY29uZmlnRGlhbG9nTWVzc2FnZSA9IHtcbiAgICAgIGRlc2NyaWJlZGJ5OiBkaWFsb2dNZXNzYWdlRGVzY3JpcHRpb24sXG4gICAgICBsYWJlbGxlZGJ5OiBkaWFsb2dNZXNzYWdlTGFiZWwsXG4gICAgICBpc0FsZXJ0OiBmYWxzZVxuICAgIH07XG5cbiAgICB2YXIgdHJpZ2dlckRpYWxvZ01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXF1ZS1kaWFsb2ctbWVzc2FnZS10cmlnZ2VyIGRlcXVlLWJ1dHRvbicpO1xuXG4gICAgdHJpZ2dlckRpYWxvZ01lc3NhZ2Vba10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRlcXVlQWN0aXZlRGlhbG9nQnV0dG9uID0gdHJpZ2dlckRpYWxvZ01lc3NhZ2VbaV07XG4gICAgICB2YXIgYXR0cmlidXRlRGlhbG9nTWVzc2FnZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICB2YXIgc2hvd0RpYWxvZ01lc3NhZ2UgPSBjcmVhdGVEaWFsb2coYXR0cmlidXRlRGlhbG9nTWVzc2FnZSwgJ2RlcXVlLWRpYWxvZy1tZXNzYWdlJyk7XG4gICAgICB2YXIgZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLWRpYWxvZy1tZXNzYWdlW2RhdGEtaWQ9XCInICsgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSArICdcIl0nKVswXTtcbiAgICAgIGlmKGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWhlYWRpbmcnKSkge1xuICAgICAgICBjb25maWdEaWFsb2dNZXNzYWdlLmRlc2NyaWJlZGJ5ICA9IGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWhlYWRpbmcnKS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWdEaWFsb2dNZXNzYWdlLmRlc2NyaWJlZGJ5ID0gJyc7XG4gICAgICB9XG4gICAgICBpZihkZXF1ZURpYWxvZ1dpZGdldEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1kZXNjcmlwdGlvbicpKSB7XG4gICAgICAgIGNvbmZpZ0RpYWxvZ01lc3NhZ2UubGFiZWxsZWRieSA9IGRlcXVlRGlhbG9nV2lkZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWRlc2NyaXB0aW9uJykuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnRGlhbG9nTWVzc2FnZS5sYWJlbGxlZGJ5ID0gJyc7XG4gICAgICB9XG4gICAgICBzaG93RGlhbG9nTWVzc2FnZSh0aGlzLCBjb25maWdEaWFsb2dNZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vYWN0aXZhdGUgYWxsIGRpYWxvZyBtZXNzYWdlIGFsZXJ0c1xuICB2YXIgZGlhbG9nTWVzc2FnZUFsZXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1kaWFsb2ctbWVzc2FnZS1hbGVydCcpO1xuICBmb3IgKHZhciBsID0gMDsgbCA8IGRpYWxvZ01lc3NhZ2VBbGVydHMubGVuZ3RoOyBsKyspIHtcbiAgICBkaWFsb2dNZXNzYWdlQWxlcnRzW2xdLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWhpZGRlbicpO1xuXG4gICAgZGlhbG9nRGF0YUlkID0gJ18nICsgZGlhbG9nTWVzc2FnZUFsZXJ0c1tsXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBkaWFsb2dNZXNzYWdlQWxlcnRzW2xdLnNldEF0dHJpYnV0ZSgnaWQnLCBkaWFsb2dNZXNzYWdlQWxlcnRzW2xdLmdldEF0dHJpYnV0ZSgnaWQnKSArIGRpYWxvZ0RhdGFJZCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtaWQ9XCInICsgZGlhbG9nTWVzc2FnZUFsZXJ0c1tsXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSArICdcIl0nKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBkaWFsb2dNZXNzYWdlQWxlcnRzW2xdLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgXG4gICAgZGlhbG9nSGVhZGluZ0VsZW1lbnQgPSBkaWFsb2dNZXNzYWdlQWxlcnRzW2xdLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctaGVhZGluZycpO1xuICAgIGRpYWxvZ0hlYWRpbmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBkaWFsb2dIZWFkaW5nRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykgKyBkaWFsb2dEYXRhSWQpO1xuXG4gICAgZGlhbG9nRGVzY3JpcHRpb25FbGVtZW50ID0gZGlhbG9nTWVzc2FnZUFsZXJ0c1tsXS5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZGlhbG9nLWRlc2NyaXB0aW9uJyk7XG4gICAgZGlhbG9nRGVzY3JpcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBkaWFsb2dEZXNjcmlwdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpICsgZGlhbG9nRGF0YUlkKTsgXG5cbiAgICB2YXIgZGlhbG9nTWVzc2FnZUFsZXJ0RGVzY3JpcHRpb247XG4gICAgdmFyIGRpYWxvZ01lc3NhZ2VBbGVydExhYmVsO1xuXG4gICAgdmFyIGNvbmZpZ0RpYWxvZ01lc3NhZ2VBbGVydCA9IHtcbiAgICAgIGRlc2NyaWJlZGJ5OiBkaWFsb2dNZXNzYWdlQWxlcnREZXNjcmlwdGlvbixcbiAgICAgIGxhYmVsbGVkYnk6IGRpYWxvZ01lc3NhZ2VBbGVydExhYmVsLFxuICAgICAgaXNBbGVydDogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgdHJpZ2dlckRpYWxvZ01lc3NhZ2VBbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlcXVlLWRpYWxvZy1tZXNzYWdlLWFsZXJ0LXRyaWdnZXIgZGVxdWUtYnV0dG9uJyk7XG5cbiAgICB0cmlnZ2VyRGlhbG9nTWVzc2FnZUFsZXJ0W2xdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkZXF1ZUFjdGl2ZURpYWxvZ0J1dHRvbiA9IHRyaWdnZXJEaWFsb2dNZXNzYWdlQWxlcnRbaV07XG4gICAgICB2YXIgYXR0cmlidXRlRGlhbG9nTWVzc2FnZUFsZXJ0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIHZhciBzaG93RGlhbG9nTWVzc2FnZUFsZXJ0ID0gY3JlYXRlRGlhbG9nKGF0dHJpYnV0ZURpYWxvZ01lc3NhZ2VBbGVydCwgJ2RlcXVlLWRpYWxvZy1tZXNzYWdlLWFsZXJ0Jyk7XG5cbiAgICAgIHZhciBkZXF1ZURpYWxvZ1dpZGdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtZGlhbG9nLW1lc3NhZ2UtYWxlcnRbZGF0YS1pZD1cIicgKyBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpICsgJ1wiXScpWzBdO1xuICAgICAgaWYoZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctaGVhZGluZycpKSB7XG4gICAgICAgIGNvbmZpZ0RpYWxvZ01lc3NhZ2VBbGVydC5kZXNjcmliZWRieSAgPSBkZXF1ZURpYWxvZ1dpZGdldEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1oZWFkaW5nJykuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnRGlhbG9nTWVzc2FnZUFsZXJ0LmRlc2NyaWJlZGJ5ID0gJyc7XG4gICAgICB9XG4gICAgICBpZihkZXF1ZURpYWxvZ1dpZGdldEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1kZXNjcmlwdGlvbicpKSB7XG4gICAgICAgIGNvbmZpZ0RpYWxvZ01lc3NhZ2VBbGVydC5sYWJlbGxlZGJ5ID0gZGVxdWVEaWFsb2dXaWRnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1kaWFsb2ctZGVzY3JpcHRpb24nKS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWdEaWFsb2dNZXNzYWdlQWxlcnQubGFiZWxsZWRieSA9ICcnO1xuICAgICAgfVxuICAgICAgc2hvd0RpYWxvZ01lc3NhZ2VBbGVydCh0aGlzLCBjb25maWdEaWFsb2dNZXNzYWdlQWxlcnQpO1xuICAgIH0pO1xuXG4gIH1cblxuICBpZighYWN0aXZhdGVIYW5kZXIpIHtcbiAgICBhY3RpdmF0ZURlcXVlRGlhbG9nQnV0dG9uQ2xpY2tIYW5kbGVycygpO1xuICAgIGFjdGl2YXRlSGFuZGVyID0gdHJ1ZTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgYWN0aXZhdGVBbGxEaWFsb2dzKCk7XG59O1xuXG4vKiBlbmQgQGRpYWxvZyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWxvZy9pbmRleC5qcyIsImltcG9ydCB7cXVlcnlBbGx9IGZyb20gJy4vc2VsZWN0aW9uVXRpbHMnO1xuLyogQGZvY3VzVXRpbHMgKi9cbnZhciBmb2N1c2FibGVRdWVyeSA9ICdpbnB1dDpub3QoW3RhYmluZGV4Xj1cIi1cIl0pLCBzZWxlY3Q6bm90KFt0YWJpbmRleF49XCItXCJdKSwgdGV4dGFyZWE6bm90KFt0YWJpbmRleF49XCItXCJdKSwgYnV0dG9uOm5vdChbdGFiaW5kZXhePVwiLVwiXSksIG9iamVjdDpub3QoW3RhYmluZGV4Xj1cIi1cIl0pLCBbaHJlZl06bm90KFt0YWJpbmRleF49XCItXCJdKSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdCgudGFidHJhcCknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RGb2N1c2FibGVDaGlsZChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoZm9jdXNhYmxlUXVlcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dEZvY3VzYWJsZUNoaWxkKGVsZW1lbnQsIGN1cnJlbnQpIHtcbiAgdmFyIGFsbCA9IHF1ZXJ5QWxsKGZvY3VzYWJsZVF1ZXJ5KTtcbiAgbGV0IHRhcmdldFJldHVybkluZGV4ID0gYWxsLmluZGV4T2YoY3VycmVudCkgKyAxO1xuXG4gIGlmICh0YXJnZXRSZXR1cm5JbmRleCA8PSBhbGwubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiBhbGxbdGFyZ2V0UmV0dXJuSW5kZXhdO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0Rm9jdXNhYmxlQ2hpbGQoZWxlbWVudCkge1xuICB2YXIgYWxsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZVF1ZXJ5KTtcbiAgcmV0dXJuIGFsbFthbGwubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VGFiVHJhcChlbGVtZW50KSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZVRyYXAoKSB7XG4gICAgdmFyIHRyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFwLmNsYXNzTGlzdC5hZGQoJ3RhYnRyYXAnKTtcbiAgICB0cmFwLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVRyYXBzKGVsZW1lbnQsIGZpcnN0VHJhcCwgbGFzdFRyYXApIHtcbiAgICBmaXJzdFRyYXAuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgIGdldExhc3RGb2N1c2FibGVDaGlsZChlbGVtZW50KS5mb2N1cygpO1xuICAgIH0pO1xuXG4gICAgbGFzdFRyYXAuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgIGdldEZpcnN0Rm9jdXNhYmxlQ2hpbGQoZWxlbWVudCkuZm9jdXMoKTtcbiAgICB9KTtcblxuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKGZpcnN0VHJhcCwgZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxhc3RUcmFwKTtcbiAgfVxuXG4gIHZhciBmaXJzdFRyYXAgPSBjcmVhdGVUcmFwKCk7XG4gIHZhciBsYXN0VHJhcCA9IGNyZWF0ZVRyYXAoKTtcblxuICBhcHBseVRyYXBzKGVsZW1lbnQsIGZpcnN0VHJhcCwgbGFzdFRyYXApO1xufVxuLyogZW5kIEBmb2N1c1V0aWxzICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX3V0aWxzL2ZvY3VzVXRpbHMuanMiLCJpbXBvcnQge3RvQXJyYXl9IGZyb20gJy4vY29sbGVjdGlvblV0aWxzJztcbi8qIEBzZWxlY3Rpb25VdGlscyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuICByZXR1cm4gdG9BcnJheShjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbi8qIGVuZCBAc2VsZWN0aW9uVXRpbHMgKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX3V0aWxzL3NlbGVjdGlvblV0aWxzLmpzIiwiLyogQGNvbGxlY3Rpb25VdGlscyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkoYXJyYXlsaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheWxpa2UpO1xufVxuLyogZW5kIEBjb2xsZWN0aW9uVXRpbHMgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fdXRpbHMvY29sbGVjdGlvblV0aWxzLmpzIiwiLyogQGRpYWxvZy1idXR0b25CYXIgKi9cbmZ1bmN0aW9uIGdldEZpcnN0QnV0dG9uKGJ1dHRvbkJhcikge1xuICByZXR1cm4gYnV0dG9uQmFyLmNoaWxkcmVuWzBdIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RCdXR0b24oYnV0dG9uQmFyKSB7XG4gIHZhciBidXR0b25zID0gYnV0dG9uQmFyLmNoaWxkcmVuO1xuICByZXR1cm4gYnV0dG9uc1tidXR0b25zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25CYXIoYnV0dG9uQmFyLCBjb25maWcsIGhpZGUpIHtcbiAgZm9ybWF0QnV0dG9ucyhjb25maWcsIGhpZGUpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgsIGJ1dHRvbnMpIHtcbiAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoYnV0dG9uLmJ1dHRvbik7XG5cbiAgICBpZiAoaW5kZXggPCBidXR0b25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHZhciBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xuICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRCdXR0b25zKGNvbmZpZywgaGlkZSkge1xuICByZXR1cm4gY29uZmlnLm1hcChmdW5jdGlvbihidXR0b25Db25maWcpIHtcbiAgICB2YXIgYnV0dG9uO1xuXG4gICAgaWYgKGJ1dHRvbkNvbmZpZy5tYXJrdXApIHtcbiAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB3cmFwcGVyLmlubmVySFRNTCA9IGJ1dHRvbkNvbmZpZy5tYXJrdXA7XG4gICAgICBidXR0b24gPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgd3JhcHBlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IGJ1dHRvbkNvbmZpZy5sYWJlbDtcbiAgICB9XG5cbiAgICBpZiAoYnV0dG9uQ29uZmlnLmNsYXNzZXMpIHtcbiAgICAgIGJ1dHRvbkNvbmZpZy5jbGFzc2VzLmZvckVhY2goYyA9PiBidXR0b24uY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChidXR0b25Db25maWcucHJlQ2xvc2UpIHtcbiAgICAgICAgYnV0dG9uQ29uZmlnLnByZUNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGhpZGUoKTtcblxuICAgICAgaWYgKGJ1dHRvbkNvbmZpZy5wb3N0Q2xvc2UpIHtcbiAgICAgICAgYnV0dG9uQ29uZmlnLnBvc3RDbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcblxuICAgIHJldHVybiB7XG4gICAgICBidXR0b246IGJ1dHRvbixcbiAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkJhcihidXR0b25CYXIpIHtcbi8vICB2YXIgYnV0dG9uQmFyID0gYWxlcnQucXVlcnlTZWxlY3RvcignLmRlcXVlLWRpYWxvZy1idXR0b25zJyk7XG5cbiAgYnV0dG9uQmFyLmdldEZpcnN0QnV0dG9uID0gZ2V0Rmlyc3RCdXR0b24uYmluZChudWxsLCBidXR0b25CYXIpO1xuICBidXR0b25CYXIuZ2V0TGFzdEJ1dHRvbiA9IGdldExhc3RCdXR0b24uYmluZChudWxsLCBidXR0b25CYXIpO1xuXHQvLyBidXR0b25CYXIuY2xlYXIgPSBjbGVhckJ1dHRvbnMuYmluZChudWxsLCBidXR0b25CYXIpO1xuICBidXR0b25CYXIuaW5pdGlhbGl6ZSA9IGluaXRpYWxpemVCdXR0b25CYXIuYmluZChudWxsLCBidXR0b25CYXIpO1xuXG4gIHJldHVybiBidXR0b25CYXI7XG59XG4vKiBlbmQgQGRpYWxvZy1idXR0b25CYXIgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFsb2cvY29tcG9uZW50cy9idXR0b25CYXIuanMiLCIvKiBAZGlhbG9nLWxpZ2h0Ym94U2NyZWVuICovXG5mdW5jdGlvbiBjbGVhclNjcmVlbihzY3JlZW4pIHtcbiAgc2NyZWVuLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzaG93U2NyZWVuKHNjcmVlbikge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmVlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY3JlZW4oKSB7XG4gIHZhciBzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWRpYWxvZy1zY3JlZW4nKTtcbiAgc2NyZWVuLnNob3cgPSBzaG93U2NyZWVuLmJpbmQobnVsbCwgc2NyZWVuKTtcbiAgc2NyZWVuLmNsZWFyID0gY2xlYXJTY3JlZW4uYmluZChudWxsLCBzY3JlZW4pO1xuXG4gIHJldHVybiBzY3JlZW47XG59XG4vKiBlbmQgQGRpYWxvZy1saWdodGJveFNjcmVlbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWxvZy9jb21wb25lbnRzL2xpZ2h0Ym94U2NyZWVuLmpzIiwiaW1wb3J0IHtnZW5lcmF0ZUd1aWR9IGZyb20gJy4uL191dGlscy9ndWlkVXRpbHMnO1xuaW1wb3J0IHtvbkVsZW1lbnRFc2NhcGV9IGZyb20gJy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcbmltcG9ydCB7bm9DbG9iYmVyfSBmcm9tICcuLi9fdXRpbHMvbm9jbG9iYmVyVXRpbHMnO1xuXG4vKiBAdG9vbHRpcCAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9vbHRpcCh0cmlnZ2VyKSB7XG4gIHZhciB0aXBUZXh0ID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVxdWUtdG9vbHRpcCcpO1xuICB2YXIgdGlwSUQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgXG4gIC8qIHdyYXAgdGhlIGVsZW1lbnQgKHRyaWdnZXIpIGluIGEgY29udGFpbmVyICovXG4gIHZhciB0aXBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLXRvb2x0aXAtd3JhcHBlcicpO1xuICB0cmlnZ2VyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRpcFdyYXBwZXIsIHRyaWdnZXIpO1xuICAvKiBtb3ZlIGVsZW1lbnQgaW50byB0aGUgd3JhcHBlciAqL1xuICB0aXBXcmFwcGVyLmFwcGVuZENoaWxkKHRyaWdnZXIpO1xuICBcbiAgLyogY3JlYXRlIHRvb2x0aXAgKi9cbiAgdmFyIHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGlwLnNldEF0dHJpYnV0ZSgncm9sZScsICd0b29sdGlwJyk7XG4gIHRpcC5pZCA9IHRpcElEO1xuICB0aXAuY2xhc3NMaXN0LmFkZCgnZGVxdWUtdG9vbHRpcCcpO1xuICBcbiAgdGlwLmlubmVySFRNTCA9ICc8c3BhbiBhcmlhLWxhYmVsPVwiVG9vbHRpcCA6XCI+PC9zcGFuPicgKyB0aXBUZXh0O1xuICAvKiBtb3ZlIHRvb2x0aXAgaW50byB0aGUgd3JhcHBlciAqL1xuICB0aXBXcmFwcGVyLmFwcGVuZENoaWxkKHRpcCk7XG4gIFxuICAvKiBjYXJyeSBvdmVyIENTUyB2YWx1ZXMgKi9cbiAgdmFyIHRyaWdnZXJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRyaWdnZXIpO1xuICB2YXIgdHJpZ2dlckNTUyA9IFtdO1xuICB0cmlnZ2VyQ1NTWydkaXNwbGF5J10gPSB0cmlnZ2VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpO1xuICBcbiAgZnVuY3Rpb24gZ2V0VHJpZ2dlclBvc2l0aW9uKCkge1xuICAgIC8qIGdldCBlbGVtZW50J3Mgc2l6ZSBhbmQgcG9zaXRpb24gKi9cbiAgICB2YXIgdHJpZ2dlclBvc2l0aW9uID0gW107XG4gICAgdHJpZ2dlclBvc2l0aW9uWyd3aWR0aCddID0gdHJpZ2dlci5vZmZzZXRXaWR0aDtcbiAgICB0cmlnZ2VyUG9zaXRpb25bJ2hlaWdodCddID0gdHJpZ2dlci5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuIHRyaWdnZXJQb3NpdGlvbjtcbiAgfVxuICBcbiAgXG4gIGZ1bmN0aW9uIGdldFRvb2x0aXBQb3NpdGlvbih0cmlnZ2VyUG9zaXRpb24pIHtcbiAgICAvKiBnZXQvc2V0IHBvc2l0aW9uaW5nIHByZWZlcmVuY2VzICovXG4gICAgdmFyIHRyaWdnZXJQb3NpdGlvblByZWYgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnZGF0YS1kZXF1ZS10b29sdGlwLXBvc2l0aW9uJyk7XG5cbiAgICAvKiBnZXQgdG9vbHRpcCBkaW1lbnNpb25zICovXG4gICAgdmFyIHRpcFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGlwKTtcbiAgICB2YXIgdGlwQ1NTID0gW107XG4gICAgdGlwQ1NTWyd3aWR0aCddID0gdGlwU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKTtcbiAgICB0aXBDU1NbJ3dpZHRoJ10gPSB0aXBDU1NbJ3dpZHRoJ10ucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgdGlwQ1NTWyd3aWR0aCddID0gTnVtYmVyKHRpcENTU1snd2lkdGgnXSk7XG4gICAgdGlwQ1NTWydoZWlnaHQnXSA9IHRpcFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpO1xuICAgIHRpcENTU1snaGVpZ2h0J10gPSB0aXBDU1NbJ2hlaWdodCddLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIHRpcENTU1snaGVpZ2h0J10gPSBOdW1iZXIodGlwQ1NTWydoZWlnaHQnXSk7XG4gICAgXG4gICAgLyp0cmlnZ2VyUG9zaXRpb25QcmVmIGlzIGN1cnJlbnRseSBub3QgYmVpbmcgdXNlZCBpbiB0aGUgY29kZSxcbiAgICBidXQgdGhlIGlkZWEgaXMgdGhhdCBkZXZlbG9wZXJzIGNvdWxkIHNwZWNpZnkgd2hlcmUgdGhlIFxuICAgIHRvb2x0aXAgc2hvdWxkIGJlIHBsYWNlZDogdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBvciB0b3AtcmlnaHQgKi9cbiAgICBpZiAodHJpZ2dlclBvc2l0aW9uUHJlZiA9PSAncmlnaHQnKSB7XG4gICAgICB0aXAuc3R5bGUubGVmdCA9ICc1cHgnO1xuICAgICAgLy8gcHV0IG90aGVyIGNhbGN1bGF0aW9ucyBoZXJlXG4gICAgfVxuICAgIGlmICh0cmlnZ2VyUG9zaXRpb25QcmVmID09ICd0b3AnKSB7XG4gICAgICAvLyBwdXQgY2FsY3VsYXRpb25zIGhlcmVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmV3TGVmdCA9IHRyaWdnZXJQb3NpdGlvblsnd2lkdGgnXSAtIDEwO1xuICAgICAgLy92YXIgbmV3VG9wID0gdGlwQ1NTWydoZWlnaHQnXSArIDU7XG4gICAgICB0aXAuc3R5bGUubGVmdCA9IChuZXdMZWZ0IC0gMTApICsgJ3B4JztcbiAgICAgIC8vdGlwLnN0eWxlLnRvcCA9ICctJyArIChuZXdUb3ApICsgJ3B4JztcbiAgICAgIHRpcC5zdHlsZS5ib3R0b20gPSAnMTIwJSc7XG4gICAgfVxuICB9ICBcbiAgXG4gIG5vQ2xvYmJlcih0cmlnZ2VyLCAnYXJpYS1kZXNjcmliZWRieScsIHRpcElEKTtcblxuICB2YXIgY2F1c2VzID0ge1xuICAgIElOSVRJQUw6ICdpbml0aWFsJyxcbiAgICBGT0NVUzogJ2ZvY3VzJyxcbiAgICBNT1VTRTogJ21vdXNlJyxcbiAgICBFU0NBUEU6ICdlc2NhcGUnXG4gIH07XG5cbiAgdmFyIGN1cnJlbnRDYXVzZSA9IGNhdXNlcy5JTklUSUFMO1xuXG4gIGZ1bmN0aW9uIHNob3dUaXAoY2F1c2UpIHtcbiAgICBpZiAoY3VycmVudENhdXNlID09PSBjYXVzZXMuRk9DVVMpIHtcbiAgICAgIC8vIHByZXZlbnRzICdNT1VTRScgY2F1c2UgZnJvbSByZXBsYWNpbmcgJ0ZPQ1VTJyBjYXVzZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtaGlkZGVuJyk7XG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgIGN1cnJlbnRDYXVzZSA9IGNhdXNlO1xuICAgIFxuICAgIHZhciBwID0gZ2V0VHJpZ2dlclBvc2l0aW9uKCk7XG4gICAgZ2V0VG9vbHRpcFBvc2l0aW9uKHApO1xuICAgIC8qIEZvciBzb21lIHJlYXNvbiwgdGhlIHBvc2l0aW9uIGlzIGluY29ycmVjdGx5IFxuICAgIGNhbGN1bGF0ZWQgb24gaW5saW5lIGVsZW1lbnRzIHRoZSBmaXJzdCB0aW1lIHRoZVxuICAgIGdldFRvb2x0aXBQb3NpdGlvbiBmdW5jdGlvbiBydW5zLCBzbyBpdCBoYXMgdG8gcnVuXG4gICAgdHdpY2UuIFBvc3NpYmxlIGJ1ZyBpbiB0aGUgc2NyaXB0J3MgbG9naWM/ICovXG4gICAgZ2V0VG9vbHRpcFBvc2l0aW9uKHApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRpcChjYXVzZSkge1xuICAgIGlmIChjYXVzZSA9PT0gY2F1c2VzLkVTQ0FQRSB8fCBjdXJyZW50Q2F1c2UgPT09IGNhdXNlKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZCgnZGVxdWUtaGlkZGVuJyk7XG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBjdXJyZW50Q2F1c2UgPSAnJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVIYW5kbGVyKCkge1xuICAgIGhpZGVUaXAoY2F1c2VzLkVTQ0FQRSk7XG4gIH1cblxuICBjb25zdCBjYW5jZWxFbGVtZW50RXNjYXBlID0gb25FbGVtZW50RXNjYXBlKGRvY3VtZW50LmJvZHksIGVzY2FwZUhhbmRsZXIpO1xuXG4gIGNvbnN0IGZvY3VzSGFuZGxlciA9IHNob3dUaXAuYmluZChudWxsLCBjYXVzZXMuRk9DVVMpO1xuICBjb25zdCBibHVySGFuZGxlciA9IGhpZGVUaXAuYmluZChudWxsLCBjYXVzZXMuRk9DVVMpO1xuICBjb25zdCBvdmVySGFuZGxlciA9IHNob3dUaXAuYmluZChudWxsLCBjYXVzZXMuTU9VU0UpO1xuICBjb25zdCBvdXRIYW5kbGVyID0gaGlkZVRpcC5iaW5kKG51bGwsIGNhdXNlcy5NT1VTRSk7XG5cbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzSGFuZGxlcik7XG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJIYW5kbGVyKTtcbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBvdmVySGFuZGxlcik7XG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvdXRIYW5kbGVyKTtcblxuICAvKi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUubG9nKHRyaWdnZXIpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmxvZyh0cmlnZ2VyLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmRlcXVlLXRvb2x0aXAnKSk7Ki9cblxuICBpZih0cmlnZ2VyLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmRlcXVlLXRvb2x0aXAnKSkge1xuICAgIHRyaWdnZXIucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtdG9vbHRpcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG92ZXJIYW5kbGVyKTtcbiAgICB0cmlnZ2VyLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmRlcXVlLXRvb2x0aXAnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG91dEhhbmRsZXIpO1xuICB9XG5cblxuICBoaWRlVGlwKGNhdXNlcy5JTklUSUFMKTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGlzYWJsZVRvb2x0aXAoKSB7XG4gICAgaGlkZVRpcChjYXVzZXMuRVNDQVBFKTtcblxuICAgIGNhbmNlbEVsZW1lbnRFc2NhcGUoKTtcblxuICAgIHRyeSB7XG4gICAgICB0aXAucmVtb3ZlKCk7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIC8qbm8gb3AqL1xuICAgIH1cblxuICAgIHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0hhbmRsZXIpO1xuICAgIHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJIYW5kbGVyKTtcbiAgICB0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG92ZXJIYW5kbGVyKTtcbiAgICB0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb3V0SGFuZGxlcik7XG4gICAgdHJpZ2dlci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFsbFRvb2x0aXBzKCkge1xuICB2YXIgaXRlbXNUb1RpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRlcXVlLXRvb2x0aXBdJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNUb1RpcC5sZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZVRvb2x0aXAoaXRlbXNUb1RpcFtpXSk7XG4gIH1cbn1cblxuaW5pdGlhbGl6ZUFsbFRvb2x0aXBzKCk7XG4vKiBlbmQgQHRvb2x0aXAgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b29sdGlwL2luZGV4LmpzIiwiLyogQGd1aWRVdGlscyAqL1xuLypcbiAgbm90ZSAtIG5vdCBhIHRydWUgZ3VpZC4gSSBwcmVwZW5kICdnJyBiZWNhdXNlIFxuICB0aGUgSUQgb2YgYW4gZWxlbWVudCBjYW5ub3Qgc3RhcnQgd2l0aCBhIG51bWVyYWxcbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUd1aWQoKSB7XG4gIHZhciBTNCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gIH07XG4gIHJldHVybiAnZycgKyAoUzQoKStTNCgpKyctJytTNCgpKyctJytTNCgpKyctJytTNCgpKyctJytTNCgpK1M0KCkrUzQoKSk7XG59XG4vKiBlbmQgQGd1aWRVdGlscyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL191dGlscy9ndWlkVXRpbHMuanMiLCIvKiBAa2V5Ym9hcmRVdGlscyAqL1xuZXhwb3J0IGNvbnN0IEtFWVMgPSB7XG4gIEJBQ0tTUEFDRTogOCxcbiAgVEFCOiA5LFxuICBFTlRFUjogMTMsXG4gIFNISUZUOiAxNixcbiAgQ1RSTDogMTcsXG4gIEFMVDogMTgsXG4gIEVTQ0FQRTogMjcsXG4gIFNQQUNFOiAzMixcbiAgTEVGVDogMzcsXG4gIFJJR0hUOiAzOSxcbiAgVVA6IDM4LFxuICBET1dOOiA0MCxcbiAgRjEwOiAxMjEsXG4gIEhPTUU6IDM2LFxuICBFTkQ6IDM1LFxuICBQQUdFX1VQOiAzMyxcbiAgUEFHRV9ET1dOOiAzNFxufTtcblxuZnVuY3Rpb24gYmluZEVsZW1lbnRUb0V2ZW50VmFsdWUoZWxlbWVudCwgZXZlbnROYW1lLCB0ZXN0VmFsdWUsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gbG9jYWxIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS53aGljaCA9PT0gdGVzdFZhbHVlKSB7XG4gICAgICBoYW5kbGVyKGUpO1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxvY2FsSGFuZGxlcik7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbG9jYWxIYW5kbGVyKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRUb0tleXByZXNzVmFsdWUoZWxlbWVudCwgdGVzdFZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBiaW5kRWxlbWVudFRvRXZlbnRWYWx1ZShlbGVtZW50LCAna2V5cHJlc3MnLCB0ZXN0VmFsdWUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudFRvS2V5ZG93blZhbHVlKGVsZW1lbnQsIHRlc3RWYWx1ZSwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0V2ZW50VmFsdWUoZWxlbWVudCwgJ2tleWRvd24nLCB0ZXN0VmFsdWUsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50RW50ZXIoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLkVOVEVSLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRWxlbWVudEVzY2FwZShlbGVtZW50LCBoYW5kbGVyKSB7XG4gIHJldHVybiBiaW5kRWxlbWVudFRvS2V5ZG93blZhbHVlKGVsZW1lbnQsIEtFWVMuRVNDQVBFLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRWxlbWVudFNwYWNlKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGJpbmRFbGVtZW50VG9LZXlwcmVzc1ZhbHVlKGVsZW1lbnQsIEtFWVMuU1BBQ0UsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50TGVmdChlbGVtZW50LCBoYW5kbGVyKSB7XG4gIHJldHVybiBiaW5kRWxlbWVudFRvS2V5ZG93blZhbHVlKGVsZW1lbnQsIEtFWVMuTEVGVCwgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkVsZW1lbnRSaWdodChlbGVtZW50LCBoYW5kbGVyKSB7XG4gIHJldHVybiBiaW5kRWxlbWVudFRvS2V5ZG93blZhbHVlKGVsZW1lbnQsIEtFWVMuUklHSFQsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50VXAoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLlVQLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRWxlbWVudERvd24oZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLkRPV04sIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50SG9tZShlbGVtZW50LCBoYW5kbGVyKSB7XG4gIHJldHVybiBiaW5kRWxlbWVudFRvS2V5ZG93blZhbHVlKGVsZW1lbnQsIEtFWVMuSE9NRSwgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkVsZW1lbnRFbmQoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLkVORCwgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkVsZW1lbnRQYWdlVXAoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLlBBR0VfVVAsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50UGFnZURvd24oZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLlBBR0VfRE9XTiwgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkVsZW1lbnRGMTAoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLkYxMCwgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FscGhhTnVtZXJpYyhjaGFyQ29kZSkge1xuICByZXR1cm4gKGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDkwIC8qIG51bWJlcnMsIHVwcGVyY2FzZSBsZXR0ZXJzICovXG4gICAgfHxcbiAgICBjaGFyQ29kZSA+PSA5NyAmJiBjaGFyQ29kZSA8PSAxMjIgLyogbG93ZXJjYXNlIGxldHRlcnMgKi8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50Q2hhcmFjdGVyKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gbG9jYWxIYW5kbGVyKGUpIHtcbiAgICB2YXIgY2hhckNvZGUgPSBlLndoaWNoO1xuICAgIGlmIChpc0FscGhhTnVtZXJpYyhjaGFyQ29kZSkpIHtcbiAgICAgIGhhbmRsZXIoZSk7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGxvY2FsSGFuZGxlcik7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGxvY2FsSGFuZGxlcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFwRW50ZXIoZWxlbWVudCkge1xuICBvbkVsZW1lbnRFbnRlcihlbGVtZW50LCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cbi8qIGVuZCBAa2V5Ym9hcmRVdGlscyAqL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fdXRpbHMva2V5Ym9hcmRVdGlscy5qcyIsIi8qIEBub2Nsb2JiZXJVdGlscyAqL1xuXG4gLyogV2hpdGVzcGFjZSBSZWdFeHAuICovXG5cbnZhciB3aGl0ZXNwYWNlID0gL1xccysvO1xuXG4vKipcbiAqIEFkZCBgYXR0cj12YWxgIHdpdGhvdXQgY2xvYmJlcmluZyBhbiBleGlzdGluZyB2YWx1ZS5cbiAqIEBwYXJhbSAge0VsZW1lbnR9ICBlbGVtZW50IFtFbGVtZW50IG9iamVjdF1cbiAqIEBwYXJhbSAge1N0cmluZ30gICBhdHRyICAgIFtBdHRyaWJ1dGUgdG8gdXBkYXRlXVxuICogQHBhcmFtICB7QXJyYXl9ICAgIGlkcyAgICAgW3Jlc3QgcGFyYW1ldGVycyBvZiBpZHMgdG8gYWRkXVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9DbG9iYmVyKGVsZW1lbnQsIGF0dHIsIC4uLmlkcykge1xuICB2YXIgY3VycmVudCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAvLyBpZiB0aGVyZSBpcyBubyB2YWx1ZSwganVzdCBhZGQgdGhlIG5ldyBvbmVcbiAgaWYgKCFjdXJyZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGlkcy5qb2luKCcgJykpO1xuICB9XG5cbiAgLy8gcmVtb3ZlIFwiZXh0cmFcIiB3aGl0ZXNwYWNlLCB0aGVuIHNwbGl0IGJ5IGFueSB3aGl0ZXNwYWNlXG4gIHZhciBwYXJ0cyA9IGN1cnJlbnQudHJpbSgpLnNwbGl0KHdoaXRlc3BhY2UpO1xuXG4gIGlkcy5tYXAoZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKCF+cGFydHMuaW5kZXhPZih2YWwpKSB7XG4gICAgICBwYXJ0cy5wdXNoKHZhbCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzZXQgbmV3IHZhbFxuICByZXR1cm4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgcGFydHMuam9pbignICcpKTtcbn1cblxuLyogZW5kIEBub2Nsb2JiZXJVdGlscyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL191dGlscy9ub2Nsb2JiZXJVdGlscy5qcyIsImltcG9ydCB7Z2V0Rmlyc3RGb2N1c2FibGVDaGlsZCwgaW5pdFRhYlRyYXB9IGZyb20gJy4uL191dGlscy9mb2N1c1V0aWxzJztcbmltcG9ydCB7Z2VuZXJhdGVHdWlkfSBmcm9tICcuLi9fdXRpbHMvZ3VpZFV0aWxzJztcbmltcG9ydCB7b25FbGVtZW50RXNjYXBlfSBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5cbi8qIEB0b29sdGlwLWRpYWxvZyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGlhbG9nVG9vbHRpcCh0cmlnZ2VyLCB7Y29udGVudElELCBzdWJtaXRJRCwgY2FuY2VsSUQsIG9uQ2FuY2VsLCBvblN1Ym1pdCwgb25PcGVuLCBsYWJlbCwgcG9zaXRpb259KSB7XG4gIHZhciBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElEKTtcbiAgdmFyIHRpcElEID0gZ2VuZXJhdGVHdWlkKCk7XG4gIHZhciB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24gPSBnZXRUaXBQb3NpdGlvbjtcbiAgfVxuXG4gIHRpcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG5cbiAgdGlwLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgdGlwLmlkID0gdGlwSUQ7XG5cbiAgLy8gc2VlIHRvb2x0aXAvc3R5bGUubGVzcyBmb3IgdG9vbHRpcCBzdHlsZS5cbiAgdGlwLmNsYXNzTGlzdC5hZGQoJ2RlcXVlJyk7XG4gIHRpcC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJyk7XG5cbiAgdGlwLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIHRyaWdnZXIucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGlwLCB0cmlnZ2VyKTtcbiAgdHJpZ2dlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh0cmlnZ2VyLCB0aXApO1xuXG4gIHZhciBzdWJtaXRCdXR0b24gPSBzdWJtaXRJRCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN1Ym1pdElEKSA6IG51bGw7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBjYW5jZWxJRCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbmNlbElEKSA6IG51bGw7XG5cbiAgZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIG9uU3VibWl0ICYmIG9uU3VibWl0KCk7XG4gICAgaGlkZVRpcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKHJldHVybkZvY3VzKSB7XG4gICAgb25DYW5jZWwgJiYgb25DYW5jZWwoKTtcbiAgICBoaWRlVGlwKCk7XG4gICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICB0cmlnZ2VyLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1RpcCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWwpO1xuICAgIG9uT3BlbiAmJiBvbk9wZW4oKTtcbiAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5pZCk7XG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICBnZXRGaXJzdEZvY3VzYWJsZUNoaWxkKHRpcCkuZm9jdXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVUaXAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FuY2VsKTtcbiAgICB0aXAuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIHRyaWdnZXIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gIH1cblxuICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgc2hvd1RpcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlVGlwKCk7XG4gICAgfVxuICB9KTtcblxuICB0aXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbEJvZHlMaXN0ZW5lciA9IG9uRWxlbWVudEVzY2FwZShkb2N1bWVudC5ib2R5LCBjYW5jZWwuYmluZCh7fSwgdHJ1ZSkpO1xuXG4gIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXQpO1xuICB9XG5cbiAgaWYgKGNhbmNlbEJ1dHRvbikge1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUaXBQb3NpdGlvbih0cmlnZ2VyLCB0aXApIHtcblxuICAgIHZhciB0cmlnZ2VyQm91bmRzID0gdHJpZ2dlci5nZXRDbGllbnRSZWN0cygpWzBdO1xuICAgIHZhciB0aXBCb3VuZHMgPSB0aXAuZ2V0Q2xpZW50UmVjdHMoKVswXTtcblxuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiB0cmlnZ2VyQm91bmRzLmxlZnQgKyB0cmlnZ2VyQm91bmRzLndpZHRoICsgMTAsXG4gICAgICB0b3A6IHRyaWdnZXJCb3VuZHMudG9wICsgKHRyaWdnZXJCb3VuZHMuaGVpZ2h0IC8gMikgLSAodGlwQm91bmRzLmhlaWdodCAvIDIpXG4gICAgfTtcbiAgfVxuXG4gIGhpZGVUaXAoKTtcbiAgaW5pdFRhYlRyYXAodGlwKTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGlzYWJsZVRvb2x0aXAoKSB7XG4gICAgdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHNob3dUaXApO1xuICAgIGNhbmNlbEJvZHlMaXN0ZW5lcigpO1xuICAgIGhpZGVUaXAoKTtcbiAgICBpZiAodGlwLnBhcmVudE5vZGUpIHtcbiAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcCk7XG4gICAgfVxuICB9O1xufVxuLyogZW5kIEB0b29sdGlwLWRpYWxvZyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rvb2x0aXBEaWFsb2cvaW5kZXguanMiLCJpbXBvcnQgeyBvbkVsZW1lbnRFbnRlciwgb25FbGVtZW50RjEwIH0gZnJvbSAnLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuLyogQGxpbmsgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVMaW5rKGVsZW1lbnQpIHtcblxuICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJykge1xuICAgIHJldHVybjsgfVxuICB2YXIgdGFyZ2V0VVJMO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlcXVlJyk7XG5cbiAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykpIHtcbiAgICB0YXJnZXRVUkwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKSkge1xuICAgIHRhcmdldFVSTCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBuYXZpZ2F0ZVRvTGluayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIGRhdGFUYXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgICBpZiAoZGF0YVRhcmdldCkge1xuICAgICAgd2luZG93Lm9wZW4odGFyZ2V0VVJMLCBkYXRhVGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRVUkw7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpbmsnKTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdmlnYXRlVG9MaW5rKTtcbiAgb25FbGVtZW50RW50ZXIoZWxlbWVudCwgbmF2aWdhdGVUb0xpbmspO1xuICBvbkVsZW1lbnRGMTAoZWxlbWVudCwgKGUpID0+IHtcbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRleHRtZW51JykpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICB2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgICBldi5pbml0RXZlbnQoJ2NvbnRleHRtZW51JywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgfSBlbHNlIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcbiAgICAgICAgZWxlbWVudC5maXJlRXZlbnQoJ29uY29udGV4dG1lbnUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQWxsTGlua3MoKSB7XG4gIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1saW5rLWFyaWEnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGluaXRpYWxpemVMaW5rKGxpbmtzW2ldKTtcbiAgfVxufVxuXG5pbml0aWFsaXplQWxsTGlua3MoKTtcbi8qIGVuZCBAbGluayAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpbmsvaW5kZXguanMiLCJpbXBvcnQgeyBvbkVsZW1lbnRFbnRlciwgb25FbGVtZW50U3BhY2UgfSBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG4vKiBAYnV0dG9uICovXG5mdW5jdGlvbiBiaW5kRWxlbWVudFRvSW5wdXRzKGVsZW1lbnQsIGJlaGF2aW9yKSB7XG4gIGlmIChlbGVtZW50LnRhZ05hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0JVVFRPTicpIHtcbiAgICBvbkVsZW1lbnRTcGFjZShlbGVtZW50LCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgYmVoYXZpb3IoZSk7XG4gICAgfSk7XG5cbiAgICBvbkVsZW1lbnRFbnRlcihlbGVtZW50LCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgYmVoYXZpb3IoZSk7XG4gICAgfSk7XG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmVoYXZpb3IpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Sb2xlSWZOZWNlc3NhcnkoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdidXR0b24nKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplSWNvbihlbGVtZW50KSB7XG4gIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkLW9uLWljb24nKTtcbiAgZWxlbWVudC5pbnNlcnRCZWZvcmUoaWNvbiwgZWxlbWVudC5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b24oZWxlbWVudCwgYmVoYXZpb3IpIHtcbiAgYXNzaWduUm9sZUlmTmVjZXNzYXJ5KGVsZW1lbnQpO1xuICBiaW5kRWxlbWVudFRvSW5wdXRzKGVsZW1lbnQsIGJlaGF2aW9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUb2dnbGVCdXR0b24oZWxlbWVudCwgdG9nZ2xlRnVuY3Rpb24sIGluaXRpYWxTdGF0ZSA9IGZhbHNlKSB7XG4gIGFzc2lnblJvbGVJZk5lY2Vzc2FyeShlbGVtZW50KTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGluaXRpYWxTdGF0ZSk7XG4gIGluaXRpYWxpemVJY29uKGVsZW1lbnQpO1xuXG4gIGlmICghdG9nZ2xlRnVuY3Rpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYSB0b2dnbGUgZnVuY3Rpb24gdG8gYSB0b2dnbGUgYnV0dG9uLiBJdCBzaG91bGQgcmV0dXJuIFxcJ3RydWVcXCcgd2hlbiB0aGUgYnV0dG9uIHNob3VsZCBoYXZlIGEgXFwncHJlc3NlZFxcJyBzdGF0ZSwgYW5kIFxcJ2ZhbHNlXFwnIG90aGVyd2lzZS4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgdmFyIHRvZ2dsZWRPbiA9IHRvZ2dsZUZ1bmN0aW9uKGUpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCB0b2dnbGVkT24gPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgfVxuXG4gIGJpbmRFbGVtZW50VG9JbnB1dHMoZWxlbWVudCwgdG9nZ2xlKTtcbn1cbi8qIGVuZCBAYnV0dG9uICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL2luZGV4LmpzIiwiLypcblxuVE8gRE86XG5cbi0gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIGxhYmVsIGlzIG1pc3NpbmdcbiovXG5cbmltcG9ydCB7IG9uRWxlbWVudFNwYWNlIH0gZnJvbSAnLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuaW1wb3J0IHsgb25FbGVtZW50RW50ZXIgfSBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5cbi8qIEBjaGVja2JveCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShlbGVtZW50KSB7XG4gIGlmIChpc1RvZ2dsZWRPbihlbGVtZW50KSkge1xuICAgIHRvZ2dsZU9mZihlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB0b2dnbGVPbihlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb2dnbGVkT24oZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q2hlY2tib3hEYXRhKGVsZW1lbnQpID09PSAndHJ1ZSc7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTcGFjZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8gL2csICdfJykudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2hlY2tib3hUcmlzdGF0ZSgpIHtcbiAgbGV0IF9jdXN0b21DaGVja2JveFRyaXN0YXRlV2lkZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tY2hlY2tib3gtd2lkZ2V0Jyk7XG4gIGxldCBfaW5zdGFuY2VDaGtUcmlzdGF0ZUNvdW50ID0gMDtcbiAgaWYgKF9jdXN0b21DaGVja2JveFRyaXN0YXRlV2lkZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgW10uc2xpY2UuY2FsbChfY3VzdG9tQ2hlY2tib3hUcmlzdGF0ZVdpZGdldHMpLmZvckVhY2goZnVuY3Rpb24gKF9lYWNoQ3VzdG9tV2lkZ2V0KSB7XG4gICAgICBsZXQgX2RhdGFDb25maWcgPSB7XG4gICAgICAgIGdyb3VwVGl0bGU6IF9lYWNoQ3VzdG9tV2lkZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1ncm91cC10aXRsZScpLFxuICAgICAgICBncm91cE9wdGlvblRpdGxlOiBfZWFjaEN1c3RvbVdpZGdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAtb3B0aW9uLXRpdGxlJyksXG4gICAgICAgIG9wdGlvbnM6IF9lYWNoQ3VzdG9tV2lkZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb25zJyksXG4gICAgICAgIGRlbGltaXRlcjogX2VhY2hDdXN0b21XaWRnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlbGltaXRlcicpIHx8ICcsJyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChfZGF0YUNvbmZpZy5vcHRpb25zKSB7XG4gICAgICAgIF9kYXRhQ29uZmlnLm9wdGlvbnMgPSBfZGF0YUNvbmZpZy5vcHRpb25zLnNwbGl0KF9kYXRhQ29uZmlnLmRlbGltaXRlcik7XG4gICAgICB9XG5cbiAgICAgIGxldCBfaWQgPSAnaW5zdGFuY2VfJyArIF9pbnN0YW5jZUNoa1RyaXN0YXRlQ291bnQgKyAnXycgKyByZXBsYWNlU3BhY2UoX2RhdGFDb25maWcuZ3JvdXBUaXRsZSk7XG5cbiAgICAgIGxldCBfZWxlbWVudENvbnRyb2wgPSAnPGRpdiBjbGFzcz1cImN1c3RvbS1jaGVja2JveFwiIGlkPVwiJyArIF9pZCArICdcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsbGVkYnk9XCJncm91cC1oZWFkZXInICsgX2lkICsgJ1wiPic7XG4gICAgICBfZWxlbWVudENvbnRyb2wgKz0gJzxkaXYgY2xhc3M9XCJjaGVja2JveC1ncm91cC1oZWFkaW5nXCIgaWQ9XCJncm91cC1oZWFkZXInICsgX2lkICsgJ1wiPicgKyBfZGF0YUNvbmZpZy5ncm91cFRpdGxlICtcbiAgICAgICAgJzwvZGl2Pic7XG4gICAgICBfZWxlbWVudENvbnRyb2wgKz0gJzxkaXYgcm9sZT1cImNoZWNrYm94XCIgbmFtZT1cInBhcmVudC1jaGVja2JveFtdXCIgZGF0YS1jaGlsZHM9XCInICsgX2lkICsgJ19jaGlsZHNcIiBjbGFzcz1cInBhcmVudC1jaGVja2JveCBjaGVja2JveC1ob2xkZXJcIiBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIicgKyBfaWQgKyByZXBsYWNlU3BhY2UoX2RhdGFDb25maWcuZ3JvdXBPcHRpb25UaXRsZSkgKyAnXCIgdGFiaW5kZXg9XCIwXCI+IFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveC1pbmRpY2F0b3JcIj48L3NwYW4+IFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveC1sYWJlbFwiIGlkPVwiJyArIF9pZCArIHJlcGxhY2VTcGFjZShfZGF0YUNvbmZpZy5ncm91cE9wdGlvblRpdGxlKSArICdcIj4nICsgX2RhdGFDb25maWcuZ3JvdXBPcHRpb25UaXRsZSArICc8L3NwYW4+IFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZC1jaGVja2JveC1saXN0XCIgZGF0YS1ncm91cD1cIicgKyBfaWQgKyAnXCI+JztcblxuICAgICAgZm9yIChsZXQgX2VsZW1lbnRPcHRpb25JbmRleCBpbiBfZGF0YUNvbmZpZy5vcHRpb25zKSB7XG4gICAgICAgIF9lbGVtZW50Q29udHJvbCArPSAnPGRpdiByb2xlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hpbGQtY2hlY2tib3hbXVwiIGNsYXNzPVwiY2hpbGQtY2hlY2tib3ggY2hlY2tib3gtaG9sZGVyICcgKyBfaWQgKyAnX2NoaWxkc1wiIGFyaWEtbGFiZWxsZWRieT1cIicgKyBfaWQgKyByZXBsYWNlU3BhY2UoX2RhdGFDb25maWcub3B0aW9uc1tfZWxlbWVudE9wdGlvbkluZGV4XSkgKyAnXCIgdGFiaW5kZXg9XCIwXCI+IFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2tib3gtaW5kaWNhdG9yXCI+PC9zcGFuPiBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrYm94LWxhYmVsXCIgaWQ9XCInICsgX2lkICsgcmVwbGFjZVNwYWNlKF9kYXRhQ29uZmlnLm9wdGlvbnNbX2VsZW1lbnRPcHRpb25JbmRleF0pICsgJ1wiPicgKyBfZGF0YUNvbmZpZy5vcHRpb25zW19lbGVtZW50T3B0aW9uSW5kZXhdICsgJzwvc3Bhbj4gXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgfVxuXG5cbiAgICAgIF9lbGVtZW50Q29udHJvbCArPSAnPC9kaXY+PC9kaXY+JztcblxuXG4gICAgICBfZWFjaEN1c3RvbVdpZGdldC5pbm5lckhUTUwgPSBfZWxlbWVudENvbnRyb2w7XG4gICAgICBfaW5zdGFuY2VDaGtUcmlzdGF0ZUNvdW50Kys7XG4gICAgfSk7XG5cbiAgICB2YXIgcGFyZW50Q2hlY2tib3hFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJlbnQtY2hlY2tib3gnKTtcbiAgICBbXS5zbGljZS5jYWxsKHBhcmVudENoZWNrYm94RWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKGVhY2hQYXJlbnQpIHtcbiAgICAgIGVhY2hQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja2JveEV2ZW50KTtcbiAgICAgIGVhY2hQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjaGVja2JveEV2ZW50KTtcbiAgICB9KTtcbiAgICBsZXQgY2hpbGRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGlsZC1jaGVja2JveCcpO1xuICAgIFtdLnNsaWNlLmNhbGwoY2hpbGRFbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZWFjaENoaWxkRWxlbWVudCkge1xuICAgICAgZWFjaENoaWxkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrYm94RXZlbnQpO1xuICAgICAgZWFjaENoaWxkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNoZWNrYm94RXZlbnQpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG5idWlsZENoZWNrYm94VHJpc3RhdGUoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrYm94RXZlbnQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PSAzMiB8fCAhZXZlbnQua2V5Q29kZSkge1xuICAgIGxldCBlbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcpID09ICd0cnVlJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICd0cnVlJyk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNoaWxkcycpKSB7XG4gICAgICBsZXQgY2hpbGRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hpbGRzJykpO1xuICAgICAgW10uc2xpY2UuY2FsbChjaGlsZEVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChlYWNoQ2hpbGRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGFyZW50LWNoZWNrYm94JykpIHtcbiAgICAgICAgICBlYWNoQ2hpbGRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnKSk7XG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGxldCBpbm5lclBhcmVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmVudC1jaGVja2JveCcpO1xuICAgICAgaWYgKGlubmVyUGFyZW50KSB7XG4gICAgICAgIGxldCBjaGVja2JveENvdW50ZXIgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGlsZC1jaGVja2JveFthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJykubGVuZ3RoO1xuICAgICAgICBsZXQgY2hpbGRFbGVtZW50cyA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoaWxkLWNoZWNrYm94Jyk7XG4gICAgICAgIGlmIChjaGVja2JveENvdW50ZXIgPT0gMCkge1xuICAgICAgICAgIGlubmVyUGFyZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tib3hDb3VudGVyIDwgY2hpbGRFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpbm5lclBhcmVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdtaXhlZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrYm94Q291bnRlciA9PSBjaGlsZEVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGlubmVyUGFyZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2hlY2tib3hEYXRhKGVsZW1lbnQsIHZhbHVlKSB7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCB2YWx1ZSk7XG4gIHZhciBkYXRhRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2JveFRyaXN0YXRlRGF0YVsnICsgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScpICsgJ10nKTtcbiAgaWYgKGRhdGFFbGVtZW50KSBkYXRhRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRDaGVja2JveERhdGEoZWxlbWVudCkge1xuICB2YXIgZGF0YUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tib3hUcmlzdGF0ZURhdGFbJyArIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknKSArICddJyk7XG4gIHJldHVybiAoZGF0YUVsZW1lbnQgPyBkYXRhRWxlbWVudC52YWx1ZSA6IG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlT24oZWxlbWVudCkge1xuICBzZXRDaGVja2JveERhdGEoZWxlbWVudCwgJ3RydWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU9mZihlbGVtZW50KSB7XG4gIHNldENoZWNrYm94RGF0YShlbGVtZW50LCAnZmFsc2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1peGVkKGVsZW1lbnQpIHtcbiAgc2V0Q2hlY2tib3hEYXRhKGVsZW1lbnQsICdtaXhlZCcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbmdsZUNoZWNrYm94KGNoZWNrYm94LCBpc0NoZWNrZWQsIG9uQ2hhbmdlID0gKCkgPT4geyB9KSB7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnY2hlY2tib3gnKTtcbiAgdmFyIGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWNoZWNrYm94LWluZGljYXRvcicpO1xuXG4gIGNoZWNrYm94LmFwcGVuZENoaWxkKGluZGljYXRvcik7XG5cbiAgdmFyIGxhYmVsVGV4dCA9IGNoZWNrYm94LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gIHZhciBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsVGV4dCk7XG4gIC8vbGFiZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7IC8vIHByZXZlbnRzIGRvdWJsZSByZWFkb3V0XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWNoZWNrYm94LWxhYmVsJyk7XG5cbiAgdmFyIGhpZGRlbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaGlkZGVuQ2hlY2tib3gudHlwZSA9ICdoaWRkZW4nO1xuICBoaWRkZW5DaGVja2JveC5uYW1lID0gJ2NoZWNrYm94VHJpc3RhdGVEYXRhWycgKyBsYWJlbFRleHQgKyAnXSc7XG4gIGhpZGRlbkNoZWNrYm94LmlkID0gJ2NoZWNrYm94VHJpc3RhdGVEYXRhWycgKyBsYWJlbFRleHQgKyAnXSc7XG4gIGhpZGRlbkNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWNoZWNrYm94LWRhdGEnKTtcblxuICBjaGVja2JveC5hcHBlbmRDaGlsZChoaWRkZW5DaGVja2JveCk7XG5cbiAgLypjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWxsQ2hlY2tib3hFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1jaGVja2JveC10cmlzdGF0ZS1wYXJlbnQnKTtcbiAgICBbXS5zbGljZS5jYWxsKGFsbENoZWNrYm94RWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH0pO1xuICB9KTsqL1xuXG4gIGlmIChpc0NoZWNrZWQpIHtcbiAgICB0b2dnbGVPbihjaGVja2JveCk7XG4gIH0gZWxzZSB7XG4gICAgdG9nZ2xlT2ZmKGNoZWNrYm94KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUhhbmRsZXIoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZShjaGVja2JveCk7XG4gICAgYnJvYWRjYXN0Q2hhbmdlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RDaGFuZ2UoKSB7XG4gICAgb25DaGFuZ2UoeyBlbGVtZW50OiBjaGVja2JveCwgaXNUb2dnbGVkT246IGlzVG9nZ2xlZE9uKGxhYmVsKSB9KTtcbiAgfVxuXG4gIGNoZWNrYm94LnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VIYW5kbGVyKTtcbiAgb25FbGVtZW50U3BhY2UoY2hlY2tib3gsIGNoYW5nZUhhbmRsZXIpO1xuICBvbkVsZW1lbnRFbnRlcihjaGVja2JveCwgY2hhbmdlSGFuZGxlcik7XG5cbiAgY2hlY2tib3gucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1jaGVja2JveC1mb2N1c2VkJyk7XG4gIH0pO1xuXG4gIGNoZWNrYm94LnBhcmVudE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKCdkZXF1ZS1jaGVja2JveC1mb2N1c2VkJyk7XG4gIH0pO1xuXG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbmdsZUNoZWNrYm94Rm9yUmFkaW8oY2hlY2tib3gsIGNoZWNrYm94TGFiZWwsIGlzQ2hlY2tlZCwgb25DaGFuZ2UgPSAoKSA9PiB7IH0pIHtcblxuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdyb2xlJywgJ2NoZWNrYm94Jyk7XG5cbiAgdmFyIGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWNoZWNrYm94LWluZGljYXRvcicpO1xuXG4gIGNoZWNrYm94LmFwcGVuZENoaWxkKGluZGljYXRvcik7XG5cbiAgdmFyIGxhYmVsVGV4dCA9IGNoZWNrYm94LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gIHZhciBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsVGV4dCk7XG4gIC8vbGFiZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7IC8vIHByZXZlbnRzIGRvdWJsZSByZWFkb3V0XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWNoZWNrYm94LWxhYmVsJyk7XG5cbiAgdmFyIGhpZGRlblJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaGlkZGVuUmFkaW8udHlwZSA9ICdoaWRkZW4nO1xuICBoaWRkZW5SYWRpby5uYW1lID0gJ2NoZWNrYm94VHJpc3RhdGVEYXRhWycgKyBsYWJlbFRleHQgKyAnXSc7XG4gIGhpZGRlblJhZGlvLmlkID0gJ2NoZWNrYm94VHJpc3RhdGVEYXRhWycgKyBsYWJlbFRleHQgKyAnXSc7XG4gIGhpZGRlblJhZGlvLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWNoZWNrYm94LXJhZGlvLWRhdGEnKTtcbiAgY2hlY2tib3guYXBwZW5kQ2hpbGQoaGlkZGVuUmFkaW8pO1xuICBjaGVja2JveC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgaWYgKGlzQ2hlY2tlZCkge1xuICAgIHRvZ2dsZU9uKGNoZWNrYm94KTtcbiAgfSBlbHNlIHtcbiAgICB0b2dnbGVPZmYoY2hlY2tib3gpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlSGFuZGxlcihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlKGNoZWNrYm94KTtcbiAgICBicm9hZGNhc3RDaGFuZ2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJyb2FkY2FzdENoYW5nZSgpIHtcbiAgICBvbkNoYW5nZSh7IGVsZW1lbnQ6IGNoZWNrYm94LCBpc1RvZ2dsZWRPbjogaXNUb2dnbGVkT24obGFiZWwpIH0pO1xuICB9XG5cbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VIYW5kbGVyKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoYW5nZUhhbmRsZXIpO1xuXG4gIGNoZWNrYm94TGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VIYW5kbGVyKTtcbiAgb25FbGVtZW50U3BhY2UoY2hlY2tib3gsIGNoYW5nZUhhbmRsZXIpO1xuXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2RlcXVlLXJhZGlvLWZvY3VzZWQnKTtcbiAgfSk7XG5cbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKCdkZXF1ZS1yYWRpby1mb2N1c2VkJyk7XG4gIH0pO1xuXG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94R3JvdXAocGFyZW50LCBjaGlsZHJlbiwgb25DaGFuZ2UgPSAoKSA9PiB7IH0pIHtcblxuICBwYXJlbnQgPSBjcmVhdGVTaW5nbGVDaGVja2JveChwYXJlbnQsIGZhbHNlLCAoZSkgPT4ge1xuICAgIG9uQ2hhbmdlKGUpO1xuICAgIHJvb3RDbGlja2VkKGdldENvcnJlY3RSb290U3RhdGUoKSk7XG4gIH0pO1xuXG4gIGNoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVTaW5nbGVDaGVja2JveChjaGlsZCwgZmFsc2UsICgpID0+IHtcbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZShjaGlsZCk7XG4gICAgICB9XG4gICAgICBzZXRDb3JyZWN0Um9vdFN0YXRlKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGxldCByb290Q2xpY2tIYW5kbGVycyA9IHtcbiAgICAndHJ1ZSc6ICgpID0+IHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2godG9nZ2xlT2ZmKTtcbiAgICAgIHRvZ2dsZU9mZihwYXJlbnQpO1xuICAgIH0sXG4gICAgJ2ZhbHNlJzogKCkgPT4ge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaCh0b2dnbGVPbik7XG4gICAgICB0b2dnbGVPbihwYXJlbnQpO1xuICAgIH0sXG4gICAgJ21peGVkJzogKCkgPT4ge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaCh0b2dnbGVPbik7XG4gICAgICB0b2dnbGVPbihwYXJlbnQpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByb290Q2xpY2tlZChyb290U3RhdGUpIHtcbiAgICByb290Q2xpY2tIYW5kbGVyc1tyb290U3RhdGVdKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb3JyZWN0Um9vdFN0YXRlKCkge1xuICAgIGlmIChjaGlsZHJlbi5ldmVyeShpc1RvZ2dsZWRPbikpIHtcbiAgICAgIHJldHVybiAndHJ1ZSc7XG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbi5ldmVyeSgoY2hpbGQpID0+ICFpc1RvZ2dsZWRPbihjaGlsZCkpKSB7XG4gICAgICByZXR1cm4gJ2ZhbHNlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdtaXhlZCc7XG4gICAgfVxuICB9XG5cbiAgbGV0IGxlYWZDbGlja0hhbmRsZXJzID0ge1xuICAgICd0cnVlJzogKCkgPT4gdG9nZ2xlT24ocGFyZW50KSxcbiAgICAnZmFsc2UnOiAoKSA9PiB0b2dnbGVPZmYocGFyZW50KSxcbiAgICAnbWl4ZWQnOiAoKSA9PiB0b2dnbGVNaXhlZChwYXJlbnQpXG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0Q29ycmVjdFJvb3RTdGF0ZSgpIHtcbiAgICBsZWFmQ2xpY2tIYW5kbGVyc1tnZXRDb3JyZWN0Um9vdFN0YXRlKCldKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVBbGxDaGVja2JveGVzKCkge1xuICB2YXIgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1jaGVja2JveC1hcmlhJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGlsZE5vZGUgPSBjaGVja2JveGVzW2ldLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1jaGVja2JveC1kYXRhJyk7XG4gICAgaWYgKCFjaGVja2JveGVzW2ldLmNvbnRhaW5zKGNoaWxkTm9kZSkpIHtcbiAgICAgIGNyZWF0ZVNpbmdsZUNoZWNrYm94KGNoZWNrYm94ZXNbaV0sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdHJpc3RhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLWNoZWNrYm94LXRyaXN0YXRlLWdyb3VwJyk7XG4gIGZvciAodmFyIGogPSAwOyBqIDwgdHJpc3RhdGVzLmxlbmd0aDsgaisrKSB7XG4gICAgdmFyIHBhcmVudEdyb3VwID0gdHJpc3RhdGVzW2pdLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1jaGVja2JveC10cmlzdGF0ZS1wYXJlbnQnKTtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50R3JvdXAucXVlcnlTZWxlY3RvcignLmRlcXVlLWNoZWNrYm94LXRyaXN0YXRlJyk7XG4gICAgdmFyIGNoaWxkcmVuR3JvdXAgPSB0cmlzdGF0ZXNbal0ucXVlcnlTZWxlY3RvcignLmRlcXVlLWNoZWNrYm94LXRyaXN0YXRlLWNoaWxkcmVuJyk7XG4gICAgdmFyIGNoaWxkcmVuID0gY2hpbGRyZW5Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtY2hlY2tib3gtdHJpc3RhdGUnKTtcbiAgICBjaGlsZE5vZGUgPSBjaGlsZHJlbkdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1jaGVja2JveC1kYXRhJyk7XG4gICAgaWYgKCFjaGlsZHJlbkdyb3VwLmNvbnRhaW5zKGNoaWxkTm9kZSkpIHtcbiAgICAgIGNyZWF0ZUNoZWNrYm94R3JvdXAocGFyZW50LCBjaGlsZHJlbik7XG4gICAgfVxuICB9XG59XG5cbmFjdGl2YXRlQWxsQ2hlY2tib3hlcygpO1xuXG4vKiBlbmQgQGNoZWNrYm94ICovXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoZWNrYm94L2luZGV4LmpzIiwiaW1wb3J0IHtLRVlTfSBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5pbXBvcnQge2NyZWF0ZVNpbmdsZUNoZWNrYm94Rm9yUmFkaW8sIHRvZ2dsZU9mZiwgdG9nZ2xlT259IGZyb20gJy4uL2NoZWNrYm94Jztcbi8qIEByYWRpbyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmFkaW9Hcm91cChncm91cCwgbGFiZWwsIGJ1dHRvbnMsIG9uQ2hhbmdlKSB7XG4gIHZhciByYWRpb0dyb3VwID0gZ3JvdXAucXVlcnlTZWxlY3RvcignI3JhZGlvR3JvdXAnKTtcbiAgcmFkaW9Hcm91cC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncmFkaW9ncm91cCcpO1xuXG4gIHZhciBjdXJyZW50Rm9jdXMgPSAwO1xuXG4gIGJ1dHRvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChidXR0b25zKTsgLy9jb252ZXJ0IGZyb20gYSBIVE1MQ29sbGVjdGlvbiB0byBhIGphdmFzY3JpcHQgYXJyYXkgdG8gYmUgYWJsZSB0byBkbyB0aGUgLm1hcCBmdW5jdGlvblxuICBidXR0b25zID0gYnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4ge1xuICAgIHZhciBsYWJlbFRleHQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknKTtcbiAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbFRleHQpO1xuXG4gICAgc2V0VW5pcXVlVG9nZ2xlKGJ1dHRvbik7XG4gICAgcmV0dXJuIGNyZWF0ZVNpbmdsZUNoZWNrYm94Rm9yUmFkaW8oYnV0dG9uLCBsYWJlbCwgZmFsc2UsIChlKSA9PiB7XG4gICAgICAvLyBub3RlIHRoYXQgd2UgYXJlIGlnbm9yaW5nIGUuaXNUb2dnbGVkT24gLSB3ZSBhcmUgdXNpbmcgY2hlY2tib3hlc1xuICAgICAgLy8gdG8gaW1wbGVtZW50IHJhZGlvIGJ1dHRvbnMsIHNvIHdlIGRvbid0IHRvZ2dsZSBpdCBvbiBjbGljay4gV2UgbWFudWFsbHlcbiAgICAgIC8vIG92ZXJyaWRlIHRoZSB0b2dnbGUgc3RhdGUgYnkgY2FsbGluZyB0b2dnbGVPbigpIG9yIHRvZ2dsZU9mZigpIGV4cGxpY2l0bHkuXG4gICAgICBzZXRVbmlxdWVUb2dnbGUoZS5lbGVtZW50KTtcblxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKGJ1dHRvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5ZG93bik7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdyYWRpbycpO1xuICAgIC8vYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB2YXIgaW5kaWNhdG9yID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1jaGVja2JveC1pbmRpY2F0b3InKTtcbiAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtY2hlY2tib3gtaW5kaWNhdG9yJyk7XG4gICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLXJhZGlvLWluZGljYXRvcicpO1xuXG4gICAgdmFyIGxhYmVsVGV4dCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScpO1xuICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsVGV4dCk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtY2hlY2tib3gtbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1yYWRpby1sYWJlbCcpO1xuICB9KTtcblxuICBidXR0b25zWzBdLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gIFxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGUpIHtcbiAgICB2YXIgY3VycmVudFBhcmVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIG1zaWUgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuICAgIHZhciBtc2VkZ2UgPSB1YS5pbmRleE9mKCdFZGdlJyk7XG4gICAgaWYobXNpZSA+IDAgfHwgbXNlZGdlID4gMCkge1xuICAgICAgaWYoY3VycmVudFBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICgnRklFTERTRVQnKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGlmKCFjdXJyZW50UGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2xlZ2VuZCcpLmdldEF0dHJpYnV0ZSgnaWQnKSkge1xuICAgICAgICAgIGN1cnJlbnRQYXJlbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJykuc2V0QXR0cmlidXRlKCdpZCcsICdkZXF1ZS1maWVsZHNldC1yYWRpby1ncm91cCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JykpIHtcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgY3VycmVudFBhcmVudC5xdWVyeVNlbGVjdG9yKCdsZWdlbmQnKS5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkLnNwbGl0KCdfJylbMV07XG4gICAgY3VycmVudEZvY3VzID0gcGFyc2VJbnQoaW5kZXgpO1xuICAgIGJ1dHRvbnNbY3VycmVudEZvY3VzXS5jbGljaygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5ZG93bihlKSB7XG4gICAgdmFyIGtleSA9IGUud2hpY2g7XG4gICAgaWYoa2V5ID09PSBLRVlTLlJJR0hUIHx8IGtleSA9PT0gS0VZUy5ET1dOKSB7XG4gICAgICBmb2N1c05leHQoZSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuTEVGVCB8fCBrZXkgPT09IEtFWVMuVVApIHtcbiAgICAgIGZvY3VzUHJldihlKTtcbiAgICB9XG5cbiAgICBpZihrZXkgPT0gS0VZUy5UQUIpIHtcbiAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gbnVsbDtcbiAgICAgIHBhcmVudEVsZW1lbnQgPSBidXR0b25zW2N1cnJlbnRGb2N1c10ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgaWYoZS5zaGlmdEtleSkge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgaWYocGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1yYWRpbycpWzBdKSB7XG4gICAgICAgICAgICBpZihwYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvcignLmRlcXVlLXJhZGlvW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nKSkge1xuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvcignLmRlcXVlLXJhZGlvW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1yYWRpb1thcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtcmFkaW8nKVswXS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1yYWRpbycpWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgLy9lcnJvciBsb2dcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGlmKHBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLXJhZGlvJylbMF0pIHtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIGlmKHBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcignLmRlcXVlLXJhZGlvW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nKSkge1xuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1yYWRpb1thcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJykuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcignLmRlcXVlLXJhZGlvW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nKS5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5uZXh0U2libGluZy5uZXh0U2libGluZy5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtcmFkaW8nKVswXS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5uZXh0U2libGluZy5uZXh0U2libGluZy5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtcmFkaW8nKVswXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5uZXh0U2libGluZy5uZXh0U2libGluZy5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgLy9lcnJvciBsb2dcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFVuaXF1ZVRvZ2dsZShidXR0b24pIHtcbiAgICBidXR0b25zLmZvckVhY2goYiA9PiB7XG4gICAgICAoYiA9PT0gYnV0dG9uKSA/IHRvZ2dsZU9uKGIpIDogdG9nZ2xlT2ZmKGIpO1xuICAgICAgYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgKGIgPT09IGJ1dHRvbikgPyAnMCcgOiAnLTEnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvY3VzUHJldihlKSB7XG4gICAgaWYgKGJ1dHRvbnNbY3VycmVudEZvY3VzIC0gMV0pIHtcbiAgICAgIGJ1dHRvbnNbLS1jdXJyZW50Rm9jdXNdLmZvY3VzKCk7XG4gICAgfVxuICAgIGJ1dHRvbnNbY3VycmVudEZvY3VzXS5jbGljaygpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9jdXNOZXh0KGUpIHtcbiAgICBpZiAoYnV0dG9uc1tjdXJyZW50Rm9jdXMgKyAxXSkge1xuICAgICAgYnV0dG9uc1srK2N1cnJlbnRGb2N1c10uZm9jdXMoKTtcbiAgICB9XG4gICAgYnV0dG9uc1tjdXJyZW50Rm9jdXNdLmNsaWNrKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUFsbFJhZGlvcygpe1xuICB2YXIgcmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLXJhZGlvLWdyb3VwJyk7XG4gIGZvciAodmFyIHggPSAwOyB4IDwgcmFkaW9zLmxlbmd0aDsgeCsrKXtcbiAgICB2YXIgbGFiZWwgPSByYWRpb3NbeF0ucXVlcnlTZWxlY3RvcignLmRlcXVlLXJhZGlvLWdyb3VwLWxhYmVsJyk7XG4gICAgdmFyIGJ1dHRvbnMgPSByYWRpb3NbeF0ucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLXJhZGlvJyk7XG4gICAgaWYoIXJhZGlvc1t4XS5xdWVyeVNlbGVjdG9yKCcjcmFkaW9Hcm91cCcpLmhhc0F0dHJpYnV0ZSgncm9sZScpKSB7XG4gICAgICBjcmVhdGVSYWRpb0dyb3VwKHJhZGlvc1t4XSwgbGFiZWwsIGJ1dHRvbnMpO1xuICAgIH1cbiAgfVxufVxuYWN0aXZhdGVBbGxSYWRpb3MoKTtcbi8qIGVuZCBAcmFkaW8gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYWRpby9pbmRleC5qcyIsImltcG9ydCB7Zm9jdXNPbk5vZGUsIHNlbGVjdE5vZGV9IGZyb20gJy4vTm9kZVV0aWxzLmpzJztcbmltcG9ydCBub1NlbGVjdEJlaGF2aW9yIGZyb20gJy4vc2VsZWN0aW9uTW9kZXMvbm9TZWxlY3Rpb24nO1xuaW1wb3J0IHNpbmdsZVNlbGVjdEJlaGF2aW9yIGZyb20gJy4vc2VsZWN0aW9uTW9kZXMvc2luZ2xlU2VsZWN0aW9uJztcbmltcG9ydCBtdWx0aVNlbGVjdEJlaGF2aW9yIGZyb20gJy4vc2VsZWN0aW9uTW9kZXMvbXVsdGlTZWxlY3Rpb24nO1xuXG4vKiBAdHJlZSAqL1xuY29uc3QgYmVoYXZpb3JzID0ge1xuICBkZWZhdWx0OiBub1NlbGVjdEJlaGF2aW9yLFxuICBzaW5nbGU6IHNpbmdsZVNlbGVjdEJlaGF2aW9yLFxuICBtdWx0aTogbXVsdGlTZWxlY3RCZWhhdmlvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVHJlZShjb25maWcsIHRyZWVHcm91cCl7XG5cbiAgdmFyIHRyZWVSb290ID0gdHJlZUdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidHJlZVwiXScpO1xuXG4gIGlmIChjb25maWcuc2VsZWN0U3R5bGUgPT09ICdtdWx0aScpIHtcbiAgICB0cmVlUm9vdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ3RydWUnKTtcbiAgfVxuXG4gIHZhciB0cmVlSXRlbXMgPSB0cmVlR3JvdXAucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0cmVlaXRlbVwiXScpO1xuICBmb3IodmFyIHg9MDsgeCA8IHRyZWVJdGVtcy5sZW5ndGg7IHgrKyl7XG4gICAgdHJlZUl0ZW1zW3hdLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICBsZXQgYmVoYXZpb3IgPSBiZWhhdmlvcnNbY29uZmlnLnNlbGVjdFN0eWxlXSB8fCBiZWhhdmlvcnMuZGVmYXVsdDtcbiAgICBiZWhhdmlvcih0cmVlSXRlbXNbeF0pO1xuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICBmb2N1c09uTm9kZSh0cmVlSXRlbXNbeF0pO1xuICAgICAgaWYgKGNvbmZpZy5zZWxlY3RTdHlsZSkge1xuICAgICAgICBzZWxlY3ROb2RlKHRyZWVJdGVtc1t4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0cmVlSXRlbXNbeF0uY2hpbGRyZW4pIHtcbiAgICAgIHRyZWVJdGVtc1t4XS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG4gIH1cbn1cbi8qIGVuZCBAdHJlZSAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyZWUvaW5kZXguanMiLCIvKiBAdHJlZS1Ob2RlVXRpbHMgKi9cbmltcG9ydCB7cXVlcnlBbGx9IGZyb20gJy4uL191dGlscy9zZWxlY3Rpb25VdGlscyc7XG5cbi8qIHVzZWQgb25seSBpbnRlcm5hbGx5ICovXG5mdW5jdGlvbiBnZXROZXh0Tm9kZUluU2VxdWVuY2Uobm9kZSwgc2VxdWVuY2UpIHtcbiAgdmFyIHJldHVybk5leHRPbmUgPSBmYWxzZTtcbiAgcmV0dXJuIHNlcXVlbmNlLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICBpZiAoYWNjKSB7IHJldHVybiBhY2M7IH1cbiAgICBpZiAocmV0dXJuTmV4dE9uZSkgeyByZXR1cm4gdmFsOyB9XG4gICAgaWYgKG5vZGUgPT09IHZhbCkgeyByZXR1cm5OZXh0T25lID0gdHJ1ZTsgfVxuICB9LCBudWxsKSB8fCBub2RlO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxUcmVlTm9kZXModHJlZUlEKSB7XG4gIHJldHVybiBxdWVyeUFsbChgIyR7dHJlZUlEfSBbcm9sZT1cInRyZWVpdGVtXCJdYCk7XG59XG5cbi8qIHB1YmxpYyBBUEkgc3RhcnRzIGhlcmUgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NoaWxkcmVuKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW4obm9kZSkge1xuICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdE5vZGUodHJlZUlEKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0cmVlSUR9ID4gdWwgPiBbcm9sZT0ndHJlZWl0ZW0nXWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlzaWJsZU5vZGVzKHRyZWVJRCkge1xuICByZXR1cm4gcXVlcnlBbGwoXG4gICAgYCMke3RyZWVJRH0gPiB1bCA+IFtyb2xlPSd0cmVlaXRlbSddLCAjJHt0cmVlSUR9IFthcmlhLWV4cGFuZGVkPSd0cnVlJ10gPiB1bCA+IFtyb2xlPSd0cmVlaXRlbSddYFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNWaXNpYmxlTm9kZShub2RlKSB7XG4gIHZhciB0cmVlSUQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10cmVlLXJvb3QnKTtcbiAgdmFyIG5vZGVzID0gZ2V0VmlzaWJsZU5vZGVzKHRyZWVJRCk7XG5cbiAgcmV0dXJuIGdldE5leHROb2RlSW5TZXF1ZW5jZShub2RlLCBub2Rlcy5yZXZlcnNlKCkpIHx8IG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0VmlzaWJsZU5vZGUobm9kZSkge1xuICB2YXIgdHJlZUlEID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290Jyk7XG4gIHZhciBub2RlcyA9IGdldFZpc2libGVOb2Rlcyh0cmVlSUQpO1xuICByZXR1cm4gZ2V0TmV4dE5vZGVJblNlcXVlbmNlKG5vZGUsIG5vZGVzKSB8fCBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNPbk5vZGUobm9kZSkge1xuICB2YXIgdHJlZUlEID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290Jyk7XG5cbiAgZ2V0QWxsVHJlZU5vZGVzKHRyZWVJRCkuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgfSk7XG5cbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgbm9kZS5mb2N1cygpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTm9kZShub2RlKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk5vZGUobm9kZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RDaGlsZChub2RlKSB7XG4gIHJldHVybiBub2RlLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidHJlZWl0ZW1cIl0nKSB8fCBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50KG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndHJlZWl0ZW0nKSB7XG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U2libGluZyhub2RlKSB7XG4gIHJldHVybiBub2RlLm5leHRFbGVtZW50U2libGluZyB8fCBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNTaWJsaW5nKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUucHJldmlvdXNTaWJsaW5nIHx8IG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3ROb2RlKG5vZGUsIG11bHRpbW9kZSkge1xuICB2YXIgdHJlZUlEID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290Jyk7XG5cbiAgZ2V0QWxsVHJlZU5vZGVzKHRyZWVJRCkuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAobm9kZSA9PT0gaXRlbSkge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSBpZiAobXVsdGltb2RlKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGVUb1NlbGVjdGlvbihub2RlKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VsZWN0ZWQobm9kZSkge1xuICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTm9kZVNlbGVjdGlvbihub2RlLCBtdWx0aW1vZGUpIHtcbiAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykgPT09ICd0cnVlJykge1xuICAgIGlmIChtdWx0aW1vZGUpIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgfVxufVxuLyogZW5kIEB0cmVlLU5vZGVVdGlscyAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyZWUvTm9kZVV0aWxzLmpzIiwiLyogQHRyZWUtc2VsZWN0aW9uTW9kZXMtbm9TZWxlY3Rpb24gKi9cbmltcG9ydCAqIGFzIEtleWJvYXJkVXRpbHMgZnJvbSAnLi4vLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuaW1wb3J0ICogYXMgTm9kZVV0aWxzIGZyb20gJy4uL05vZGVVdGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5TG9naWMobm9kZSkge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShub2RlKTtcblxuICAgIGlmIChOb2RlVXRpbHMuaXNPcGVuKG5vZGUpKSB7XG4gICAgICBOb2RlVXRpbHMuY2xvc2VOb2RlKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoTm9kZVV0aWxzLmhhc0NoaWxkcmVuKG5vZGUpKSB7XG4gICAgICBOb2RlVXRpbHMub3Blbk5vZGUobm9kZSk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudEVudGVyKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBsZXQgYWN0aXZhdGVhYmxlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGl0ZW0udGFnTmFtZSA9PT0gJ0EnIHx8IGl0ZW0udGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgYWN0aXZhdGVhYmxlID0gaXRlbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2YXRlYWJsZSkge1xuICAgICAgbGV0IGNsaWNrID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJyk7XG4gICAgICBhY3RpdmF0ZWFibGUuZGlzcGF0Y2hFdmVudChjbGljayk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudENoYXJhY3Rlcihub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdmFyIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9VcHBlckNhc2UoKTtcbiAgICB2YXIgbm9kZXMgPSBOb2RlVXRpbHMuZ2V0VmlzaWJsZU5vZGVzKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyZWUtcm9vdCcpKTtcblxuICAgIHZhciB0aGlzRm91bmQgPSBmYWxzZTtcbiAgICB2YXIgdGFyZ2V0ID0gbm9kZXMuZmlsdGVyKGl0ZW0gPT4geyAgICAgICAgICAgLy8gZGlzY2FyZCAncHJldmlvdXMnIG5vZGVzOlxuICAgICAgaWYgKHRoaXNGb3VuZCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgaWYgKGl0ZW0gPT09IG5vZGUpIHsgdGhpc0ZvdW5kID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLnJlZHVjZSgoYWNjLCB2YWwpID0+IHsgICAgICAgICAgICAgICAgICAgICAvLyBncmFiIG5leHQgb25lIHN0YXJ0aW5nIHdpdGggY2hhclxuICAgICAgaWYgKGFjYykgeyByZXR1cm4gYWNjOyB9XG4gICAgICBpZiAodmFsLmlubmVyVGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgfSwgbnVsbCk7XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUodGFyZ2V0KTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50SG9tZShub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCB0YXJnZXQgPSBOb2RlVXRpbHMuZ2V0Um9vdE5vZGUobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290JykpO1xuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZSh0YXJnZXQpO1xuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudEVuZChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBub2RlcyA9IE5vZGVVdGlscy5nZXRWaXNpYmxlTm9kZXMobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290JykpO1xuICAgIHZhciB0YXJnZXQgPSBub2Rlcy5yZXZlcnNlKClbMF07XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHRhcmdldCk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RG93bihub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBzaWJsaW5nID0gTm9kZVV0aWxzLmdldE5leHRWaXNpYmxlTm9kZShub2RlKTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUoc2libGluZyk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50VXAobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB2YXIgc2libGluZyA9IE5vZGVVdGlscy5nZXRQcmV2aW91c1Zpc2libGVOb2RlKG5vZGUpO1xuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShzaWJsaW5nKTtcbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRSaWdodChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKE5vZGVVdGlscy5oYXNDaGlsZHJlbihub2RlKSAmJiAhTm9kZVV0aWxzLmlzT3Blbihub2RlKSkge1xuICAgICAgTm9kZVV0aWxzLm9wZW5Ob2RlKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSBOb2RlVXRpbHMuZ2V0Rmlyc3RDaGlsZChub2RlKTtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudExlZnQobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghTm9kZVV0aWxzLmhhc0NoaWxkcmVuKG5vZGUpIHx8ICFOb2RlVXRpbHMuaXNPcGVuKG5vZGUpKSB7XG4gICAgICB2YXIgcGFyZW50ID0gTm9kZVV0aWxzLmdldFBhcmVudChub2RlKTtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShwYXJlbnQpO1xuXG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBOb2RlVXRpbHMuY2xvc2VOb2RlKG5vZGUpO1xuICB9KTtcbn1cbi8qIGVuZCBAdHJlZS1zZWxlY3Rpb25Nb2Rlcy1ub1NlbGVjdGlvbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyZWUvc2VsZWN0aW9uTW9kZXMvbm9TZWxlY3Rpb24uanMiLCIvKiBAdHJlZS1zZWxlY3Rpb25Nb2Rlcy1zaW5nbGVTZWxlY3Rpb24gKi9cbmltcG9ydCAqIGFzIEtleWJvYXJkVXRpbHMgZnJvbSAnLi4vLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuaW1wb3J0ICogYXMgTm9kZVV0aWxzIGZyb20gJy4uL05vZGVVdGlscyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlMb2dpYyhub2RlKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKG5vZGUpO1xuICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKG5vZGUpO1xuXG4gICAgaWYgKE5vZGVVdGlscy5pc09wZW4obm9kZSkpIHtcbiAgICAgIE5vZGVVdGlscy5jbG9zZU5vZGUobm9kZSk7XG4gICAgfSBlbHNlIGlmIChOb2RlVXRpbHMuaGFzQ2hpbGRyZW4obm9kZSkpIHtcbiAgICAgIE5vZGVVdGlscy5vcGVuTm9kZShub2RlKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RW50ZXIobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGxldCBhY3RpdmF0ZWFibGU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXRlbS50YWdOYW1lID09PSAnQScgfHwgaXRlbS50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgICAgICBhY3RpdmF0ZWFibGUgPSBpdGVtO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZhdGVhYmxlKSB7XG4gICAgICBsZXQgY2xpY2sgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snKTtcbiAgICAgIGFjdGl2YXRlYWJsZS5kaXNwYXRjaEV2ZW50KGNsaWNrKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50U3BhY2Uobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbihub2RlKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50Q2hhcmFjdGVyKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB2YXIgY2hhcmFjdGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciBub2RlcyA9IE5vZGVVdGlscy5nZXRWaXNpYmxlTm9kZXMobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290JykpO1xuXG4gICAgdmFyIHRoaXNGb3VuZCA9IGZhbHNlO1xuICAgIHZhciB0YXJnZXQgPSBub2Rlcy5maWx0ZXIoaXRlbSA9PiB7ICAgICAgICAgICAvLyBkaXNjYXJkICdwcmV2aW91cycgbm9kZXM6XG4gICAgICBpZiAodGhpc0ZvdW5kKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICBpZiAoaXRlbSA9PT0gbm9kZSkgeyB0aGlzRm91bmQgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkucmVkdWNlKChhY2MsIHZhbCkgPT4geyAgICAgICAgICAgICAgICAgICAgIC8vIGdyYWIgbmV4dCBvbmUgc3RhcnRpbmcgd2l0aCBjaGFyXG4gICAgICBpZiAoYWNjKSB7IHJldHVybiBhY2M7IH1cbiAgICAgIGlmICh2YWwuaW5uZXJUZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICB9LCBudWxsKTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZSh0YXJnZXQpO1xuICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUodGFyZ2V0KTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50SG9tZShub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCB0YXJnZXQgPSBOb2RlVXRpbHMuZ2V0Um9vdE5vZGUobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290JykpO1xuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZSh0YXJnZXQpO1xuICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHRhcmdldCk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RW5kKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIG5vZGVzID0gTm9kZVV0aWxzLmdldFZpc2libGVOb2Rlcyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10cmVlLXJvb3QnKSk7XG4gICAgdmFyIHRhcmdldCA9IG5vZGVzLnJldmVyc2UoKVswXTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUodGFyZ2V0KTtcbiAgICBOb2RlVXRpbHMuc2VsZWN0Tm9kZSh0YXJnZXQpO1xuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudERvd24obm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB2YXIgc2libGluZyA9IE5vZGVVdGlscy5nZXROZXh0VmlzaWJsZU5vZGUobm9kZSk7XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHNpYmxpbmcpO1xuXG4gICAgaWYgKCFlLmN0cmxLZXkpIHtcbiAgICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHNpYmxpbmcpO1xuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRVcChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBzaWJsaW5nID0gTm9kZVV0aWxzLmdldFByZXZpb3VzVmlzaWJsZU5vZGUobm9kZSk7XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHNpYmxpbmcpO1xuXG4gICAgaWYgKCFlLmN0cmxLZXkpIHtcbiAgICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHNpYmxpbmcpO1xuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRSaWdodChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKE5vZGVVdGlscy5oYXNDaGlsZHJlbihub2RlKSAmJiAhTm9kZVV0aWxzLmlzT3Blbihub2RlKSkge1xuICAgICAgTm9kZVV0aWxzLm9wZW5Ob2RlKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSBOb2RlVXRpbHMuZ2V0Rmlyc3RDaGlsZChub2RlKTtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShjaGlsZCk7XG5cbiAgICAgIGlmICghZS5jdHJsS2V5KSB7XG4gICAgICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50TGVmdChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCFOb2RlVXRpbHMuaGFzQ2hpbGRyZW4obm9kZSkgfHwgIU5vZGVVdGlscy5pc09wZW4obm9kZSkpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBOb2RlVXRpbHMuZ2V0UGFyZW50KG5vZGUpO1xuICAgICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHBhcmVudCk7XG5cbiAgICAgIGlmICghZS5jdHJsS2V5KSB7XG4gICAgICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5vZGVVdGlscy5jbG9zZU5vZGUobm9kZSk7XG4gIH0pO1xufVxuLyogZW5kIEB0cmVlLXNlbGVjdGlvbk1vZGVzLXNpbmdsZVNlbGVjdGlvbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyZWUvc2VsZWN0aW9uTW9kZXMvc2luZ2xlU2VsZWN0aW9uLmpzIiwiLyogQHRyZWUtc2VsZWN0aW9uTW9kZXMtbXVsdGlTZWxlY3Rpb24gKi9cbmltcG9ydCAqIGFzIEtleWJvYXJkVXRpbHMgZnJvbSAnLi4vLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuaW1wb3J0ICogYXMgTm9kZVV0aWxzIGZyb20gJy4uL05vZGVVdGlscyc7XG5sZXQgc2hpZnRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gb25Eb2NLZXkoZSkge1xuICBzaGlmdGluZyA9IGUuc2hpZnRLZXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5TG9naWMobm9kZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkRvY0tleSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25Eb2NLZXkpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Eb2NLZXkpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uRG9jS2V5KTtcblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHZhciBtZXRob2QgPSBzaGlmdGluZyA/ICdhZGROb2RlVG9TZWxlY3Rpb24nIDogJ3NlbGVjdE5vZGUnO1xuXG4gICAgaWYgKE5vZGVVdGlscy5pc09wZW4obm9kZSkpIHtcbiAgICAgIE5vZGVVdGlscy5jbG9zZU5vZGUobm9kZSk7XG4gICAgfSBlbHNlIGlmIChOb2RlVXRpbHMuaGFzQ2hpbGRyZW4obm9kZSkpIHtcbiAgICAgIE5vZGVVdGlscy5vcGVuTm9kZShub2RlKTtcbiAgICB9XG5cbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUobm9kZSk7XG4gICAgTm9kZVV0aWxzW21ldGhvZF0obm9kZSwgdHJ1ZSk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RW50ZXIobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGxldCBhY3RpdmF0ZWFibGU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXRlbS50YWdOYW1lID09PSAnQScgfHwgaXRlbS50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgICAgICBhY3RpdmF0ZWFibGUgPSBpdGVtO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZhdGVhYmxlKSB7XG4gICAgICBhY3RpdmF0ZWFibGUuY2xpY2soKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50U3BhY2Uobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbihub2RlLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50Q2hhcmFjdGVyKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB2YXIgY2hhcmFjdGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciBub2RlcyA9IE5vZGVVdGlscy5nZXRWaXNpYmxlTm9kZXMobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290JykpO1xuXG4gICAgdmFyIHRoaXNGb3VuZCA9IGZhbHNlO1xuICAgIHZhciB0YXJnZXQgPSBub2Rlcy5maWx0ZXIoaXRlbSA9PiB7ICAgICAgICAgICAvLyBkaXNjYXJkICdwcmV2aW91cycgbm9kZXM6XG4gICAgICBpZiAodGhpc0ZvdW5kKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICBpZiAoaXRlbSA9PT0gbm9kZSkgeyB0aGlzRm91bmQgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkucmVkdWNlKChhY2MsIHZhbCkgPT4geyAgICAgICAgICAgICAgICAgICAgIC8vIGdyYWIgbmV4dCBvbmUgc3RhcnRpbmcgd2l0aCBjaGFyXG4gICAgICBpZiAoYWNjKSB7IHJldHVybiBhY2M7IH1cbiAgICAgIGlmICh2YWwuaW5uZXJUZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICB9LCBudWxsKTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZSh0YXJnZXQpO1xuICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUodGFyZ2V0LCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50SG9tZShub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCB0YXJnZXQgPSBOb2RlVXRpbHMuZ2V0Um9vdE5vZGUobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290JykpO1xuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZSh0YXJnZXQpO1xuXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gTm9kZVV0aWxzLmdldFByZXZpb3VzVmlzaWJsZU5vZGUobm9kZSk7XG4gICAgICBpZiAoY3VycmVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSkge1xuICAgICAgICBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbihub2RlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IHRhcmdldCkge1xuICAgICAgICBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbihjdXJyZW50LCB0cnVlKTtcbiAgICAgICAgY3VycmVudCA9IE5vZGVVdGlscy5nZXRQcmV2aW91c1Zpc2libGVOb2RlKGN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbih0YXJnZXQsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBOb2RlVXRpbHMuc2VsZWN0Tm9kZSh0YXJnZXQsIHRydWUpO1xuICAgIH1cblxuXG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RW5kKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIG5vZGVzID0gTm9kZVV0aWxzLmdldFZpc2libGVOb2Rlcyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10cmVlLXJvb3QnKSk7XG4gICAgdmFyIHRhcmdldCA9IG5vZGVzLnJldmVyc2UoKVswXTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUodGFyZ2V0KTtcblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICB2YXIgY3VycmVudCA9IE5vZGVVdGlscy5nZXROZXh0VmlzaWJsZU5vZGUobm9kZSk7XG5cbiAgICAgIGlmIChjdXJyZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpID09PSBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpKSB7XG4gICAgICAgIE5vZGVVdGlscy50b2dnbGVOb2RlU2VsZWN0aW9uKG5vZGUsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAoY3VycmVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIE5vZGVVdGlscy50b2dnbGVOb2RlU2VsZWN0aW9uKGN1cnJlbnQsIHRydWUpO1xuICAgICAgICBjdXJyZW50ID0gTm9kZVV0aWxzLmdldE5leHRWaXNpYmxlTm9kZShjdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgTm9kZVV0aWxzLnRvZ2dsZU5vZGVTZWxlY3Rpb24odGFyZ2V0LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUodGFyZ2V0LCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RG93bihub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBzaWJsaW5nID0gTm9kZVV0aWxzLmdldE5leHRWaXNpYmxlTm9kZShub2RlKTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUoc2libGluZyk7XG5cbiAgICBpZiAoZS5jdHJsS2V5KSB7IHJldHVybjsgfVxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICBpZiAoc2libGluZy5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSkge1xuICAgICAgICByZXR1cm4gTm9kZVV0aWxzLnRvZ2dsZU5vZGVTZWxlY3Rpb24obm9kZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTm9kZVV0aWxzLnRvZ2dsZU5vZGVTZWxlY3Rpb24oc2libGluZywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUoc2libGluZywgdHJ1ZSk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50VXAobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB2YXIgc2libGluZyA9IE5vZGVVdGlscy5nZXRQcmV2aW91c1Zpc2libGVOb2RlKG5vZGUpO1xuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShzaWJsaW5nKTtcblxuICAgIGlmIChlLmN0cmxLZXkpIHsgcmV0dXJuOyB9XG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIGlmIChzaWJsaW5nLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpID09PSBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpKSB7XG4gICAgICAgIHJldHVybiBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbihub2RlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5vZGVVdGlscy50b2dnbGVOb2RlU2VsZWN0aW9uKHNpYmxpbmcsIHRydWUpO1xuICAgIH1cblxuICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHNpYmxpbmcsIHRydWUpO1xuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudFJpZ2h0KG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoTm9kZVV0aWxzLmhhc0NoaWxkcmVuKG5vZGUpICYmICFOb2RlVXRpbHMuaXNPcGVuKG5vZGUpKSB7XG4gICAgICBOb2RlVXRpbHMub3Blbk5vZGUobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGlsZCA9IE5vZGVVdGlscy5nZXRGaXJzdENoaWxkKG5vZGUpO1xuICAgICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKGNoaWxkKTtcblxuICAgICAgaWYgKGUuY3RybEtleSkgeyByZXR1cm47IH1cbiAgICAgIGlmIChlLnNoaWZ0S2V5KSB7IHJldHVybiBOb2RlVXRpbHMuYWRkTm9kZVRvU2VsZWN0aW9uKGNoaWxkKTsgfVxuXG4gICAgICBOb2RlVXRpbHMuc2VsZWN0Tm9kZShjaGlsZCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudExlZnQobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghTm9kZVV0aWxzLmhhc0NoaWxkcmVuKG5vZGUpIHx8ICFOb2RlVXRpbHMuaXNPcGVuKG5vZGUpKSB7XG4gICAgICB2YXIgcGFyZW50ID0gTm9kZVV0aWxzLmdldFBhcmVudChub2RlKTtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShwYXJlbnQpO1xuXG4gICAgICBpZiAoZS5jdHJsS2V5KSB7IHJldHVybjsgfVxuICAgICAgaWYgKGUuc2hpZnRLZXkpIHsgcmV0dXJuIE5vZGVVdGlscy5hZGROb2RlVG9TZWxlY3Rpb24ocGFyZW50KTsgfVxuXG4gICAgICByZXR1cm4gTm9kZVV0aWxzLnNlbGVjdE5vZGUocGFyZW50LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTm9kZVV0aWxzLmNsb3NlTm9kZShub2RlKTtcbiAgfSk7XG59XG4vKiBlbmQgQHRyZWUtc2VsZWN0aW9uTW9kZXMtbXVsdGlTZWxlY3Rpb24gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmVlL3NlbGVjdGlvbk1vZGVzL211bHRpU2VsZWN0aW9uLmpzIiwiaW1wb3J0IGFwcGx5TmF2aWdhdGlvbkxvZ2ljIGZyb20gJy4vbmF2aWdhdGlvbkxvZ2ljJztcbmltcG9ydCBidWlsZE1lbnVJdGVtIGZyb20gJy4vYnVpbGRNZW51SXRlbSc7XG5pbXBvcnQge2NyZWF0ZUZpZWxkc2V0fSBmcm9tICcuLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuLyogQG1lbnUgKi9cbmZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG1lbnUsIHtvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJ30pIHtcbiAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1vcmllbnRhdGlvbicsICdob3Jpem9udGFsJyk7XG4gIH1cblxuICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtb3JpZW50YXRpb24nLCAndmVydGljYWwnKTtcbiAgfVxuXG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBzZXRSb2xlKG1lbnUsIHt0cmlnZ2VyfSkge1xuICBpZiAodHJpZ2dlcikge1xuICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgJ3RydWUnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgncm9sZScsICdtZW51Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnU7XG4gIH1cblxuICBtZW51LnNldEF0dHJpYnV0ZSgncm9sZScsICdtZW51YmFyJyk7XG4gIHJldHVybiBtZW51O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KGNvbnRhaW5lciwgZGF0YSwgY29uZmlnKSB7XG4gIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBzZXRSb2xlKG1lbnUsIGNvbmZpZyk7XG4gIHNldE9yaWVudGF0aW9uKG1lbnUsIGNvbmZpZyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG5cbiAgbGV0IGN1cnJlbnRSYWRpb0dyb3VwID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRDaGVja2JveEdyb3VwID0gbnVsbDtcblxuICBkYXRhXG4gICAgLm1hcChpdGVtID0+IGJ1aWxkTWVudUl0ZW0oaXRlbSwgY29uZmlnKSlcbiAgICAuZm9yRWFjaChsaSA9PiB7XG4gICAgICBsZXQgaXRlbVJvbGUgPSBsaS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgIGxldCBkYXRhR3JvdXAgPSBsaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnKTtcbiAgICAgIGlmIChpdGVtUm9sZSA9PT0gJ21lbnVpdGVtY2hlY2tib3gnICYmIGRhdGFHcm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lID0gZGF0YUdyb3VwO1xuXG4gICAgICAgIGlmICghY3VycmVudENoZWNrYm94R3JvdXAgfHwgKGN1cnJlbnRDaGVja2JveEdyb3VwLmdldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScpICE9PSBncm91cE5hbWUpKSB7XG4gICAgICAgICAgY3VycmVudENoZWNrYm94R3JvdXAgPSBjcmVhdGVGaWVsZHNldChncm91cE5hbWUpO1xuICAgICAgICAgIGN1cnJlbnRDaGVja2JveEdyb3VwLnNldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScsIGdyb3VwTmFtZSk7XG4gICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChjdXJyZW50Q2hlY2tib3hHcm91cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudENoZWNrYm94R3JvdXAuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudENoZWNrYm94R3JvdXAgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVJvbGUgPT09ICdtZW51aXRlbXJhZGlvJykge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lID0gbGkuZ2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJyk7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50UmFkaW9Hcm91cCB8fCAoY3VycmVudFJhZGlvR3JvdXAuZ2V0QXR0cmlidXRlKCdncm91cC1uYW1lJykgIT09IGdyb3VwTmFtZSkpIHtcbiAgICAgICAgICBjdXJyZW50UmFkaW9Hcm91cCA9IGNyZWF0ZUZpZWxkc2V0KGdyb3VwTmFtZSk7XG4gICAgICAgICAgY3VycmVudFJhZGlvR3JvdXAuc2V0QXR0cmlidXRlKCdncm91cC1uYW1lJywgZ3JvdXBOYW1lKTtcbiAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGN1cnJlbnRSYWRpb0dyb3VwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyZW50UmFkaW9Hcm91cC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50UmFkaW9Hcm91cCA9IG51bGw7XG4gICAgICB9XG5cblxuICAgICAgbWVudS5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG5cbiAgYXBwbHlOYXZpZ2F0aW9uTG9naWMobWVudSwgY29uZmlnKTtcblxuICBsZXQgZmlyc3RDaGlsZCA9IG1lbnUucXVlcnlTZWxlY3RvcignbGknKTtcbiAgZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbn1cbi8qIGVuZCBAbWVudSAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lbnUvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBrYiBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscy5qcyc7XG5pbXBvcnQgKiBhcyBtdSBmcm9tICcuL21lbnVJdGVtVXRpbHMnO1xuaW1wb3J0ICogYXMgdmVydGljYWwgZnJvbSAnLi9uYXZpZ2F0aW9uL3ZlcnRpY2FsJztcbmltcG9ydCAqIGFzIGhvcml6b250YWwgZnJvbSAnLi9uYXZpZ2F0aW9uL2hvcml6b250YWwnO1xuXG5jb25zdCBrZXlIYW5kbGVycyA9IHt2ZXJ0aWNhbCwgaG9yaXpvbnRhbH07XG5cbmZ1bmN0aW9uIGdldExhdGVzdFBhcmVudEl0ZW0obm9kZSkge1xuICBjb25zdCByb2xlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSB8fCAnJztcbiAgaWYgKHJvbGUuaW5kZXhPZignbWVudWl0ZW0nKSA9PT0gMCkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgaWYgKCFwYXJlbnQpIHsgcmV0dXJuIG51bGw7IH1cbiAgaWYgKG5vZGUgPT09IHBhcmVudCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHJldHVybiBnZXRMYXRlc3RQYXJlbnRJdGVtKHBhcmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5TmF2aWdhdGlvbkxvZ2ljKG1lbnUsIHtvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCcsIHdyYXAgPSBmYWxzZX0pIHtcbiAgaWYgKG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnICYmIG9yaWVudGF0aW9uICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29yaWVudGF0aW9uIG11c3QgYmUgZWl0aGVyIGB2ZXJ0aWNhbGAgb3IgYGhvcml6b250YWxgJyk7XG4gIH1cblxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRMYXRlc3RQYXJlbnRJdGVtKGUudGFyZ2V0KTtcbiAgICBpZiAoIXRhcmdldCkgeyByZXR1cm47IH1cbiAgICBtdS5zZXRGb2N1cyh0YXJnZXQpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRVcChtZW51LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TGF0ZXN0UGFyZW50SXRlbShlLnRhcmdldCk7XG4gICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG5cbiAgICBrZXlIYW5kbGVyc1tvcmllbnRhdGlvbl0udXAodGFyZ2V0LCB3cmFwKTtcbiAgfSk7XG5cbiAga2Iub25FbGVtZW50RG93bihtZW51LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TGF0ZXN0UGFyZW50SXRlbShlLnRhcmdldCk7XG4gICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG5cbiAgICBrZXlIYW5kbGVyc1tvcmllbnRhdGlvbl0uZG93bih0YXJnZXQsIHdyYXApO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRMZWZ0KG1lbnUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRMYXRlc3RQYXJlbnRJdGVtKGUudGFyZ2V0KTtcbiAgICBpZiAoIXRhcmdldCkgeyByZXR1cm47IH1cblxuICAgIGtleUhhbmRsZXJzW29yaWVudGF0aW9uXS5sZWZ0KHRhcmdldCwgd3JhcCk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudFJpZ2h0KG1lbnUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRMYXRlc3RQYXJlbnRJdGVtKGUudGFyZ2V0KTtcbiAgICBpZiAoIXRhcmdldCkgeyByZXR1cm47IH1cblxuICAgIGtleUhhbmRsZXJzW29yaWVudGF0aW9uXS5yaWdodCh0YXJnZXQsIHdyYXApO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRIb21lKG1lbnUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRMYXRlc3RQYXJlbnRJdGVtKGUudGFyZ2V0KTtcbiAgICBpZiAoIXRhcmdldCkgeyByZXR1cm47IH1cblxuICAgIGtleUhhbmRsZXJzW29yaWVudGF0aW9uXS5ob21lKHRhcmdldCwgd3JhcCk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudEVuZChtZW51LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TGF0ZXN0UGFyZW50SXRlbShlLnRhcmdldCk7XG4gICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG5cbiAgICBrZXlIYW5kbGVyc1tvcmllbnRhdGlvbl0uZW5kKHRhcmdldCwgd3JhcCk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudENoYXJhY3RlcihtZW51LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TGF0ZXN0UGFyZW50SXRlbShlLnRhcmdldCk7XG4gICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG5cbiAgICBsZXQgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XG4gICAga2V5SGFuZGxlcnNbb3JpZW50YXRpb25dLmNoYXIodGFyZ2V0LCBjaGFyKTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lbnUvbmF2aWdhdGlvbkxvZ2ljLmpzIiwiLyogQG1lbnUtbWVudUl0ZW1VdGlscyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaEludGVyYWN0aW9uKG1lbnVpdGVtKSB7XG4gIGxldCBtZW51ID0gZ2V0TWVudUZyb21JdGVtKG1lbnVpdGVtKTtcbiAgaWYgKG1lbnUpIHtcbiAgICBsZXQgcm9sZSA9IG1lbnUuZ2V0QXR0cmlidXRlKCdyb2xlJyk7XG5cbiAgICBnZXRBbGxJdGVtc0luTWVudShtZW51KS5mb3JFYWNoKGNsb3NlU3VibWVudSk7XG5cbiAgICBpZiAocm9sZSA9PT0gJ21lbnUnKSB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBnaXZlbiBzb21lIG1lbnUgaXRlbSwgcmV0dXJuIHRoZSBlbnRpcmUgbWVudS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51RnJvbUl0ZW0obWVudWl0ZW0pIHtcbiAgbGV0IHBhcmVudEl0ZW0gPSBnZXRQYXJlbnQobWVudWl0ZW0pO1xuXG4gIHdoaWxlKDEpIHtcbiAgICBsZXQgbmV3UGFyZW50ID0gZ2V0UGFyZW50KHBhcmVudEl0ZW0pO1xuXG4gICAgLy8gdGhpcyB3aWxsIGFsd2F5cyBiZSB0cnVlIGV2ZW50dWFsbHlcbiAgICBpZiAocGFyZW50SXRlbSA9PT0gbmV3UGFyZW50KSB7IGJyZWFrOyB9XG4gICAgcGFyZW50SXRlbSA9IG5ld1BhcmVudDtcbiAgfVxuXG4gIGxldCBtYXliZVBhcmVudCA9IHBhcmVudEl0ZW0ucGFyZW50RWxlbWVudDtcbiAgY29uc3Qgcm9sZSA9IG1heWJlUGFyZW50LmdldEF0dHJpYnV0ZSgncm9sZScpO1xuICBpZiAoIHJvbGUgPT09ICdtZW51JyB8fCByb2xlID09PSAnbWVudWJhcicpIHtcbiAgICByZXR1cm4gbWF5YmVQYXJlbnQ7XG4gIH1cblxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsSXRlbXNJbk1lbnUobWVudSkge1xuICBsZXQgb3V0cHV0ID0gW107XG5cbiAgbGV0IHJlc3VsdCA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJtZW51aXRlbVwiXSwgW3JvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJdLCBbcm9sZT1cIm1lbnVpdGVtcmFkaW9cIl0nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXQucHVzaChyZXN1bHRbaV0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NoaWxkcmVuKG1lbnVpdGVtKSB7XG4gIHJldHVybiAhIW1lbnVpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW4obWVudWl0ZW0pIHtcbiAgcmV0dXJuIGhhc0NoaWxkcmVuKG1lbnVpdGVtKSAmJiBtZW51aXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtb3BlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblN1Ym1lbnUobWVudWl0ZW0pIHtcbiAgaWYgKCFoYXNDaGlsZHJlbihtZW51aXRlbSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtZW51aXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LW9wZW4nKTtcbiAgbWVudWl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgbGV0IGZpcnN0Q2hpbGQgPSBnZXRGaXJzdENoaWxkKG1lbnVpdGVtKTtcbiAgc2V0Rm9jdXMoZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVN1Ym1lbnUobWVudWl0ZW0pIHtcbiAgaWYgKCFoYXNDaGlsZHJlbihtZW51aXRlbSkgfHwgIWlzT3BlbihtZW51aXRlbSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtZW51aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcbiAgbWVudWl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gIHNldEZvY3VzKG1lbnVpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZvY3VzKG1lbnVpdGVtKSB7XG4gIGxldCByb290TWVudSA9IGdldE1lbnVGcm9tSXRlbShtZW51aXRlbSk7XG5cbiAgbGV0IGFsbE1lbnVJdGVtcyA9IGdldEFsbEl0ZW1zSW5NZW51KHJvb3RNZW51KTtcbiAgYWxsTWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG1lbnVpdGVtKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgaXRlbS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9XG5cbiAgICAvLyBjbG9zZSBhbGwgc3VibWVudXMgdGhhdCBhcmVuJ3QgYW5jZXN0b3JzIG9mIHRoZSBpdGVtXG4gICAgbGV0IGlzUGFyZW50ID0gaXRlbS5jb250YWlucyhtZW51aXRlbSk7XG4gICAgaWYgKCFpc1BhcmVudCAmJiBoYXNDaGlsZHJlbihpdGVtKSkge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcbiAgICB9XG5cbiAgfSk7XG5cblxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnQobWVudWl0ZW0pIHtcbiAgbGV0IHBhcmVudENhbmRpZGF0ZSA9IG1lbnVpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICBpZiAobWVudWl0ZW0ucGFyZW50RWxlbWVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdGSUVMRFNFVCcpIHtcbiAgICBwYXJlbnRDYW5kaWRhdGUgPSBtZW51aXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGlmIChwYXJlbnRDYW5kaWRhdGUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdtZW51aXRlbScpIHtcbiAgICByZXR1cm4gcGFyZW50Q2FuZGlkYXRlO1xuICB9XG5cbiAgcmV0dXJuIG1lbnVpdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RDaGlsZChtZW51aXRlbSkge1xuICByZXR1cm4gbWVudWl0ZW0ucXVlcnlTZWxlY3RvcigndWwgbGk6bm90KFtyb2xlPVwic2VwYXJhdG9yXCJdKScpIHx8IG1lbnVpdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RTaWJsaW5nKG1lbnVpdGVtKSB7XG4gIHJldHVybiBtZW51aXRlbS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNTaWJsaW5nKG1lbnVpdGVtKSB7XG4gIGxldCBwcmV2ID0gbWVudWl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgd2hpbGUocHJldiAmJiBwcmV2LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnc2VwYXJhdG9yJykge1xuICAgIHByZXYgPSBwcmV2LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gcHJldiB8fCBtZW51aXRlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKG1lbnVpdGVtKSB7XG4gIGxldCBuZXh0ID0gbWVudWl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB3aGlsZSAobmV4dCAmJiBuZXh0LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnc2VwYXJhdG9yJykge1xuICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgfVxuICByZXR1cm4gbmV4dCB8fCBtZW51aXRlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RTaWJsaW5nKG1lbnVpdGVtKSB7XG4gIGxldCBwYXJlbnRNZW51ID0gbWVudWl0ZW0ucGFyZW50RWxlbWVudDtcbiAgbGV0IGNoaWxkcmVuT2ZQYXJlbnQgPSBwYXJlbnRNZW51LmNoaWxkcmVuO1xuICByZXR1cm4gY2hpbGRyZW5PZlBhcmVudFtjaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RNZW51SXRlbShtZW51aXRlbSkge1xuICByZXR1cm4gZ2V0TWVudUZyb21JdGVtKG1lbnVpdGVtKS5jaGlsZHJlblswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RNZW51SXRlbShtZW51aXRlbSkge1xuICBsZXQgaXRlbXMgPSBnZXRNZW51RnJvbUl0ZW0obWVudWl0ZW0pLmNoaWxkcmVuO1xuICByZXR1cm4gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aW91c1NpYmxpbmdXaGVyZShtZW51aXRlbSwgcHJlZGljYXRlKSB7XG4gIGxldCBwcmV2ID0gZ2V0UHJldmlvdXNTaWJsaW5nKG1lbnVpdGVtKTtcbiAgaWYgKHByZXYgPT09IG1lbnVpdGVtKSB7XG4gICAgcmV0dXJuIHByZWRpY2F0ZShwcmV2KSA/IHByZXYgOiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHByZWRpY2F0ZShwcmV2KSA/IHByZXYgOiBnZXRQcmV2aW91c1NpYmxpbmdXaGVyZShwcmV2LCBwcmVkaWNhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmdXaGVyZShtZW51aXRlbSwgcHJlZGljYXRlKSB7XG4gIGxldCBuZXh0ID0gZ2V0TmV4dFNpYmxpbmcobWVudWl0ZW0pO1xuICBpZiAobmV4dCA9PT0gbWVudWl0ZW0pIHtcbiAgICByZXR1cm4gcHJlZGljYXRlKG5leHQpID8gbmV4dCA6IG51bGw7XG4gIH1cblxuICByZXR1cm4gcHJlZGljYXRlKG5leHQpID8gbmV4dCA6IGdldE5leHRTaWJsaW5nV2hlcmUobmV4dCwgcHJlZGljYXRlKTtcbn1cbi8qIGVuZCBAbWVudS1tZW51SXRlbVV0aWxzICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9tZW51SXRlbVV0aWxzLmpzIiwiaW1wb3J0ICogYXMgbXUgZnJvbSAnLi4vbWVudUl0ZW1VdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cChub2RlLCB3cmFwcykge1xuICBsZXQgdGFyZ2V0ID0gbXUuZ2V0UHJldmlvdXNTaWJsaW5nKG5vZGUpO1xuXG4gIGlmIChub2RlID09PSB0YXJnZXQgJiYgd3JhcHMpIHtcbiAgICB0YXJnZXQgPSBtdS5nZXRMYXN0U2libGluZyhub2RlKTtcbiAgfVxuXG4gIG11LnNldEZvY3VzKHRhcmdldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3duKG5vZGUsIHdyYXBzKSB7XG4gIGxldCB0YXJnZXQgPSBtdS5nZXROZXh0U2libGluZyhub2RlKTtcbiAgaWYgKHRhcmdldCA9PT0gbm9kZSAmJiB3cmFwcykge1xuICAgIHRhcmdldCA9IG11LmdldEZpcnN0U2libGluZyhub2RlKTtcbiAgfVxuXG4gIG11LnNldEZvY3VzKHRhcmdldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodChub2RlKSB7XG4gIGlmKG11Lmhhc0NoaWxkcmVuKG5vZGUpICYmICFtdS5pc09wZW4obm9kZSkpIHtcbiAgICByZXR1cm4gbXUub3BlblN1Ym1lbnUobm9kZSk7XG4gIH1cblxuICBsZXQgcGFyZW50ID0gbXUuZ2V0UGFyZW50KG5vZGUpO1xuICBpZiAobm9kZSA9PT0gcGFyZW50KSB7IHJldHVybjsgfVxuXG4gIGxldCBhdW50ID0gbXUuZ2V0TmV4dFNpYmxpbmdXaGVyZShwYXJlbnQsIChpdGVtKSA9PiBtdS5oYXNDaGlsZHJlbihpdGVtKSk7XG4gIGlmIChhdW50ICYmIGF1bnQgIT09IHBhcmVudCkge1xuICAgIG11LmNsb3NlU3VibWVudShwYXJlbnQpO1xuICAgIG11Lm9wZW5TdWJtZW51KGF1bnQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0KG5vZGUpIHtcbiAgbGV0IHBhcmVudCA9IG11LmdldFBhcmVudChub2RlKTtcbiAgaWYgKG5vZGUgPT09IHBhcmVudCkgeyByZXR1cm47IH1cbiAgLy8gYWx3YXlzIGNsb3NlIHRoZSBwYXJlbnQsIGlmIHRoaXMgaXMgYSBzdWJub2RlXG4gIG11LmNsb3NlU3VibWVudShwYXJlbnQpO1xuXG4gIC8vIGlmIHBhcmVudCBoYXMgYSBwcmV2aW91cyBzaWJsaW5nIHRoYXQgaGFzIGNoaWxkcmVuLCBvcGVuIGl0LlxuICBsZXQgdW5jbGUgPSBtdS5nZXRQcmV2aW91c1NpYmxpbmdXaGVyZShwYXJlbnQsIChpdGVtKSA9PiBtdS5oYXNDaGlsZHJlbihpdGVtKSk7XG5cbiAgaWYgKHVuY2xlICYmIHVuY2xlICE9PSBwYXJlbnQpIHtcbiAgICBtdS5vcGVuU3VibWVudSh1bmNsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWUobm9kZSwgd3JhcHMpIHtcbiAgaWYgKHdyYXBzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHRhcmdldCA9IG11LmdldEZpcnN0TWVudUl0ZW0obm9kZSk7XG4gIG11LnNldEZvY3VzKHRhcmdldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmQobm9kZSwgd3JhcHMpIHtcbiAgaWYgKHdyYXBzKSB7IHJldHVybjsgfVxuXG4gIG11LnNldEZvY3VzKG11LmdldExhc3RNZW51SXRlbShub2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFyKG5vZGUsIGxldHRlcikge1xuICBsZXQgdGFyZ2V0ID0gbXUuZ2V0TmV4dFNpYmxpbmdXaGVyZShub2RlLCAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtXG4gICAgICAudGV4dENvbnRlbnRcbiAgICAgIC5jaGFyQXQoMClcbiAgICAgIC50b1VwcGVyQ2FzZSgpID09PSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG5cbiAgaWYgKHRhcmdldCkgeyBtdS5zZXRGb2N1cyh0YXJnZXQpOyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9uYXZpZ2F0aW9uL3ZlcnRpY2FsLmpzIiwiaW1wb3J0ICogYXMgbXUgZnJvbSAnLi4vbWVudUl0ZW1VdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cChub2RlKSB7XG4gIGxldCBwYXJlbnQgPSBtdS5nZXRQYXJlbnQobm9kZSk7XG4gIGlmIChub2RlID09PSBwYXJlbnQpIHsgcmV0dXJuOyB9XG4gIC8vIGFsd2F5cyBjbG9zZSB0aGUgcGFyZW50LCBpZiB0aGlzIGlzIGEgc3Vibm9kZVxuICBtdS5jbG9zZVN1Ym1lbnUocGFyZW50KTtcblxuICAvLyBpZiBwYXJlbnQgaGFzIGEgcHJldmlvdXMgc2libGluZyB0aGF0IGhhcyBjaGlsZHJlbiwgb3BlbiBpdC5cbiAgbGV0IHVuY2xlID0gbXUuZ2V0UHJldmlvdXNTaWJsaW5nV2hlcmUocGFyZW50LCAoaXRlbSkgPT4gbXUuaGFzQ2hpbGRyZW4oaXRlbSkpO1xuXG4gIGlmICh1bmNsZSAmJiB1bmNsZSAhPT0gcGFyZW50KSB7XG4gICAgbXUub3BlblN1Ym1lbnUodW5jbGUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3duKG5vZGUpIHtcbiAgaWYobXUuaGFzQ2hpbGRyZW4obm9kZSkgJiYgIW11LmlzT3Blbihub2RlKSkge1xuICAgIHJldHVybiBtdS5vcGVuU3VibWVudShub2RlKTtcbiAgfVxuXG4gIGxldCBwYXJlbnQgPSBtdS5nZXRQYXJlbnQobm9kZSk7XG4gIGlmIChub2RlID09PSBwYXJlbnQpIHsgcmV0dXJuOyB9XG5cbiAgbGV0IGF1bnQgPSBtdS5nZXROZXh0U2libGluZ1doZXJlKHBhcmVudCwgKGl0ZW0pID0+IG11Lmhhc0NoaWxkcmVuKGl0ZW0pKTtcbiAgaWYgKGF1bnQgJiYgYXVudCAhPT0gcGFyZW50KSB7XG4gICAgbXUuY2xvc2VTdWJtZW51KHBhcmVudCk7XG4gICAgbXUub3BlblN1Ym1lbnUoYXVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnQobm9kZSwgd3JhcHMpIHtcbiAgbGV0IHRhcmdldCA9IG11LmdldFByZXZpb3VzU2libGluZyhub2RlKTtcblxuICBpZiAobm9kZSA9PT0gdGFyZ2V0ICYmIHdyYXBzKSB7XG4gICAgdGFyZ2V0ID0gbXUuZ2V0TGFzdFNpYmxpbmcobm9kZSk7XG4gIH1cblxuICBtdS5zZXRGb2N1cyh0YXJnZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHQobm9kZSwgd3JhcHMpIHtcbiAgbGV0IHRhcmdldCA9IG11LmdldE5leHRTaWJsaW5nKG5vZGUpO1xuICBpZiAodGFyZ2V0ID09PSBub2RlICYmIHdyYXBzKSB7XG4gICAgdGFyZ2V0ID0gbXUuZ2V0Rmlyc3RTaWJsaW5nKG5vZGUpO1xuICB9XG5cbiAgbXUuc2V0Rm9jdXModGFyZ2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWUobm9kZSwgd3JhcHMpIHtcbiAgaWYgKHdyYXBzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHRhcmdldCA9IG11LmdldEZpcnN0TWVudUl0ZW0obm9kZSk7XG4gIG11LnNldEZvY3VzKHRhcmdldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmQobm9kZSwgd3JhcHMpIHtcbiAgaWYgKHdyYXBzKSB7IHJldHVybjsgfVxuXG4gIG11LnNldEZvY3VzKG11LmdldExhc3RNZW51SXRlbShub2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFyKG5vZGUsIGxldHRlcikge1xuICBsZXQgdGFyZ2V0ID0gbXUuZ2V0TmV4dFNpYmxpbmdXaGVyZShub2RlLCAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtXG4gICAgICAudGV4dENvbnRlbnRcbiAgICAgIC5jaGFyQXQoMClcbiAgICAgIC50b1VwcGVyQ2FzZSgpID09PSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG5cbiAgaWYgKHRhcmdldCkgeyBtdS5zZXRGb2N1cyh0YXJnZXQpOyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9uYXZpZ2F0aW9uL2hvcml6b250YWwuanMiLCIvKiBAbWVudS1idWlsZE1lbnVJdGVtICovXG5pbXBvcnQgKiBhcyBpdGVtRmFjdG9yeSBmcm9tICcuL2l0ZW1GYWN0b3JpZXMvaXRlbSc7XG5pbXBvcnQgKiBhcyBzdWJtZW51RmFjdG9yeSBmcm9tICcuL2l0ZW1GYWN0b3JpZXMvc3VibWVudSc7XG5pbXBvcnQgKiBhcyByYWRpb0ZhY3RvcnkgZnJvbSAnLi9pdGVtRmFjdG9yaWVzL3JhZGlvJztcbmltcG9ydCAqIGFzIGNoZWNrYm94RmFjdG9yeSBmcm9tICcuL2l0ZW1GYWN0b3JpZXMvY2hlY2tib3gnO1xuaW1wb3J0ICogYXMgc2VwYXJhdG9yRmFjdG9yeSBmcm9tICcuL2l0ZW1GYWN0b3JpZXMvc2VwYXJhdG9yJztcblxubGV0IGJ1aWxkZXJzID0ge1xuICBpdGVtOiBpdGVtRmFjdG9yeS5idWlsZCxcbiAgc2VwYXJhdG9yOiBzZXBhcmF0b3JGYWN0b3J5LmJ1aWxkLFxuICBjaGVja2JveDogY2hlY2tib3hGYWN0b3J5LmJ1aWxkLFxuICByYWRpbzogcmFkaW9GYWN0b3J5LmJ1aWxkLFxuICBzdWJtZW51OiBzdWJtZW51RmFjdG9yeS5idWlsZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNZW51SXRlbShkYXRhLCBjb25maWcpIHtcbiAgbGV0IG91dHB1dCA9IGJ1aWxkZXJzW2RhdGEudHlwZV0oZGF0YSwgY29uZmlnKTtcbiAgaWYgKGRhdGEuY2xhc3Nlcykge1xuICAgIGRhdGEuY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZGF0YS5kaXNhYmxlZCkge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qIGVuZCBAbWVudS1idWlsZE1lbnVJdGVtICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9idWlsZE1lbnVJdGVtLmpzIiwiLyogQG1lbnUtaXRlbUZhY3Rvcmllcy1pdGVtICovXG5pbXBvcnQgKiBhcyBtdSBmcm9tICcuLi9tZW51SXRlbVV0aWxzJztcbmltcG9ydCAqIGFzIGtiIGZyb20gJy4uLy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGl0ZW0sIGhhbmRsZXIsIGUpIHtcbiAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG11LmZpbmlzaEludGVyYWN0aW9uKGl0ZW0pO1xuXG4gIGlmKGhhbmRsZXIpIHtcbiAgICBoYW5kbGVyKGUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZChkYXRhKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ21lbnVpdGVtJyk7XG5cbiAgaWYgKGRhdGEubGFiZWwpIHtcbiAgICBvdXRwdXQuaW5uZXJUZXh0ID0gZGF0YS5sYWJlbDtcbiAgfSBlbHNlIGlmIChkYXRhLm1hcmt1cCkge1xuICAgIG91dHB1dC5pbm5lckhUTUwgPSBkYXRhLm1hcmt1cDtcbiAgfVxuXG4gIGxldCBib3VuZEFjdGlvbkhhbmRsZXIgPSBhY3RpdmF0ZS5iaW5kKG51bGwsIG91dHB1dCwgZGF0YS5oYW5kbGVyKTtcbiAgb3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm91bmRBY3Rpb25IYW5kbGVyKTtcbiAga2Iub25FbGVtZW50RW50ZXIob3V0cHV0LCBib3VuZEFjdGlvbkhhbmRsZXIpO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKiBlbmQgQG1lbnUtaXRlbUZhY3Rvcmllcy1pdGVtICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9pdGVtRmFjdG9yaWVzL2l0ZW0uanMiLCIvKiBAbWVudS1pdGVtRmFjdG9yaWVzLXN1Ym1lbnUgKi9cbmltcG9ydCAqIGFzIG11IGZyb20gJy4uL21lbnVJdGVtVXRpbHMnO1xuaW1wb3J0ICogYXMga2IgZnJvbSAnLi4vLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuaW1wb3J0IGJ1aWxkTWVudUl0ZW0gZnJvbSAnLi4vYnVpbGRNZW51SXRlbSc7XG5pbXBvcnQge2NyZWF0ZUZpZWxkc2V0fSBmcm9tICcuLi8uLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaXRlbSkge1xuICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG11LmlzT3BlbihpdGVtKSkge1xuICAgIG11LmNsb3NlU3VibWVudShpdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBtdS5vcGVuU3VibWVudShpdGVtKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQoZGF0YSwgY29uZmlnKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ21lbnVpdGVtJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgaWYgKGRhdGEubGFiZWwpIHtcbiAgICBvdXRwdXQuaW5uZXJUZXh0ID0gZGF0YS5sYWJlbDtcbiAgfSBlbHNlIGlmIChkYXRhLm1hcmt1cCkge1xuICAgIG91dHB1dC5pbm5lckhUTUwgPSBkYXRhLm1hcmt1cDtcbiAgfVxuXG4gIGxldCBjdXJyZW50UmFkaW9Hcm91cCA9IG51bGw7XG4gIGxldCBjdXJyZW50Q2hlY2tib3hHcm91cCA9IG51bGw7XG5cbiAgbGV0IHN1Ym1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBkYXRhLmNoaWxkcmVuXG4gICAgLm1hcChpdGVtID0+IGJ1aWxkTWVudUl0ZW0oaXRlbSwgY29uZmlnKSlcbiAgICAuZm9yRWFjaChsaSA9PiB7XG4gICAgICBsZXQgaXRlbVJvbGUgPSBsaS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgIGxldCBkYXRhR3JvdXAgPSBsaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnKTtcbiAgICAgIGlmIChpdGVtUm9sZSA9PT0gJ21lbnVpdGVtY2hlY2tib3gnICYmIGRhdGFHcm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lID0gZGF0YUdyb3VwO1xuXG4gICAgICAgIGlmICghY3VycmVudENoZWNrYm94R3JvdXAgfHwgKGN1cnJlbnRDaGVja2JveEdyb3VwLmdldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScpICE9PSBncm91cE5hbWUpKSB7XG4gICAgICAgICAgY3VycmVudENoZWNrYm94R3JvdXAgPSBjcmVhdGVGaWVsZHNldChncm91cE5hbWUpO1xuICAgICAgICAgIGN1cnJlbnRDaGVja2JveEdyb3VwLnNldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScsIGdyb3VwTmFtZSk7XG4gICAgICAgICAgc3VibWVudS5hcHBlbmRDaGlsZChjdXJyZW50Q2hlY2tib3hHcm91cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudENoZWNrYm94R3JvdXAuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudENoZWNrYm94R3JvdXAgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVJvbGUgPT09ICdtZW51aXRlbXJhZGlvJykge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lID0gbGkuZ2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJyk7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50UmFkaW9Hcm91cCB8fCAoY3VycmVudFJhZGlvR3JvdXAuZ2V0QXR0cmlidXRlKCdncm91cC1uYW1lJykgIT09IGdyb3VwTmFtZSkpIHtcbiAgICAgICAgICBjdXJyZW50UmFkaW9Hcm91cCA9IGNyZWF0ZUZpZWxkc2V0KGdyb3VwTmFtZSk7XG4gICAgICAgICAgY3VycmVudFJhZGlvR3JvdXAuc2V0QXR0cmlidXRlKCdncm91cC1uYW1lJywgZ3JvdXBOYW1lKTtcbiAgICAgICAgICBzdWJtZW51LmFwcGVuZENoaWxkKGN1cnJlbnRSYWRpb0dyb3VwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyZW50UmFkaW9Hcm91cC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50UmFkaW9Hcm91cCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN1Ym1lbnUuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuXG4gIGxldCBib3VuZEFjdGl2YXRpb24gPSBhY3RpdmF0ZS5iaW5kKG51bGwsIG91dHB1dCk7XG5cbiAgb3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm91bmRBY3RpdmF0aW9uKTtcbiAga2Iub25FbGVtZW50RW50ZXIob3V0cHV0LCBib3VuZEFjdGl2YXRpb24pO1xuXG4gIGtiLm9uRWxlbWVudEVzY2FwZShzdWJtZW51LCAoKSA9PiB7XG4gICAgbXUuY2xvc2VTdWJtZW51KG91dHB1dCk7XG4gIH0pO1xuXG4gIGxldCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcblxuICBvdXRwdXQuYXBwZW5kQ2hpbGQoc3VibWVudSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKiBlbmQgQG1lbnUtaXRlbUZhY3Rvcmllcy1zdWJtZW51ICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9pdGVtRmFjdG9yaWVzL3N1Ym1lbnUuanMiLCJpbXBvcnQge2dlbmVyYXRlR3VpZH0gZnJvbSAnLi9ndWlkVXRpbHMnO1xuLyogQGNvbnRhaW5lclV0aWxzICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudElzQ2hpbGRPZkVsZW1lbnQoY2hpbGQsIHBvdGVudGlhbFBhcmVudCkge1xuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgPT09IHBvdGVudGlhbFBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY2hpbGQgPSBjaGlsZC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmllbGRzZXQobGFiZWwpIHtcbiAgdmFyIGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgdmFyIGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnbGVnZW5kJyk7IC8vIGZvciBlYXN5IGxvb2t1cCByZWdhcmRsZXNzIG9mIG1vZGVcbiAgbGVnZW5kLmlkID0gZ2VuZXJhdGVHdWlkKCk7XG4gIGxlZ2VuZC5pbm5lclRleHQgPSBsYWJlbDtcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcbiAgcmV0dXJuIGZpZWxkc2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGl2ZVJlZ2lvbihsZXZlbCA9ICdwb2xpdGUnLCBjbGFzc2VzID0gW10pIHtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjbGFzc2VzLmZvckVhY2goYyA9PiBvdXRwdXQuY2xhc3NMaXN0LmFkZChjKSk7XG4gIG91dHB1dC5pZCA9IGdlbmVyYXRlR3VpZCgpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBsZXZlbCk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkZXF1ZS12aXN1YWxseWhpZGRlbicpO1xuICBvdXRwdXQuaW5uZXJUZXh0ID0gJyc7XG4gIG91dHB1dC5ub3RpZnkgPSBmdW5jdGlvbih0ZXh0KSB7IC8vIFRPRE86IENsZWFuIHRoaXMgdXAuLi5ubyBuZWVkIHRvIGV4dGVuZCB0aGUgZWxlbWVudCBwcm90b3R5cGVcbiAgICB3aGlsZSAob3V0cHV0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIG91dHB1dC5yZW1vdmVDaGlsZChvdXRwdXQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1zZy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChtc2cpO1xuXG4gIH07XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qIGVuZCBAY29udGFpbmVyVXRpbHMgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fdXRpbHMvY29udGFpbmVyVXRpbHMuanMiLCIvKiBAbWVudS1pdGVtRmFjdG9yaWVzLXJhZGlvICovXG5pbXBvcnQgKiBhcyBtdSBmcm9tICcuLi9tZW51SXRlbVV0aWxzJztcbmltcG9ydCAqIGFzIGtiIGZyb20gJy4uLy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGl0ZW0sIGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZ3JvdXBOYW1lID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnKTtcbiAgbGV0IHF1ZXJ5ID0gYFtkYXRhLWdyb3VwPVwiJHtncm91cE5hbWV9XCJdYDtcbiAgbGV0IHJhZGlvR3JvdXBNZW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb0dyb3VwTWVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0YXJnZXQgPSByYWRpb0dyb3VwTWVtYmVyc1tpXTtcbiAgICBpZiAodGFyZ2V0ICE9PSBpdGVtKSB7XG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ3RydWUnKTtcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG11LmZpbmlzaEludGVyYWN0aW9uKGl0ZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQoZGF0YSkge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdtZW51aXRlbXJhZGlvJyk7XG5cbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGV0IHJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIHJhZGlvLm5hbWUgPSBkYXRhLnJhZGlvR3JvdXA7XG4gIGxhYmVsLmlubmVyVGV4dCA9IGRhdGEubGFiZWw7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHJhZGlvKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJywgZGF0YS5yYWRpb0dyb3VwKTtcblxuXG4gIHJhZGlvLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgcmFkaW8uc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb2ludGVyLWV2ZW50czogbm9uZTsnKTtcbiAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgY29uc3QgYm91bmRBY3RpdmF0aW9uID0gYWN0aXZhdGUuYmluZChudWxsLCBvdXRwdXQpO1xuXG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xuICBvdXRwdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib3VuZEFjdGl2YXRpb24pO1xuICBrYi5vbkVsZW1lbnRFbnRlcihvdXRwdXQsIGJvdW5kQWN0aXZhdGlvbik7XG4gIGtiLm9uRWxlbWVudFNwYWNlKG91dHB1dCwgYm91bmRBY3RpdmF0aW9uKTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyogZW5kIEBtZW51LWl0ZW1GYWN0b3JpZXMtcmFkaW8gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZW51L2l0ZW1GYWN0b3JpZXMvcmFkaW8uanMiLCIvKiBAbWVudS1pdGVtRmFjdG9yaWVzLWNoZWNrYm94ICovXG5pbXBvcnQgKiBhcyBtdSBmcm9tICcuLi9tZW51SXRlbVV0aWxzJztcbmltcG9ydCAqIGFzIGtiIGZyb20gJy4uLy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGl0ZW0sIGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgd2FzQ2hlY2tlZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKSA9PT0gJ3RydWUnO1xuICBsZXQgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgY2hlY2tib3guY2hlY2tlZCA9ICF3YXNDaGVja2VkO1xuICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgIXdhc0NoZWNrZWQpO1xuICBtdS5maW5pc2hJbnRlcmFjdGlvbihpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkKGRhdGEpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBsYWJlbC5pbm5lclRleHQgPSBkYXRhLmxhYmVsO1xuICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWVudWl0ZW1jaGVja2JveCcpO1xuXG4gIGlmIChkYXRhLmdyb3VwTmFtZSkge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnLCBkYXRhLmdyb3VwTmFtZSk7XG4gIH1cblxuICBsZXQgYm91bmRBY3RpdmF0aW9uID0gYWN0aXZhdGUuYmluZChudWxsLCBvdXRwdXQpO1xuXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb2ludGVyLWV2ZW50czogbm9uZTsnKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgb3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm91bmRBY3RpdmF0aW9uKTtcbiAga2Iub25FbGVtZW50RW50ZXIob3V0cHV0LCBib3VuZEFjdGl2YXRpb24pO1xuICBrYi5vbkVsZW1lbnRTcGFjZShvdXRwdXQsIGJvdW5kQWN0aXZhdGlvbik7XG5cbiAgaWYgKGRhdGEuY2hlY2tlZCkge1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICd0cnVlJyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyogZW5kIEBtZW51LWl0ZW1GYWN0b3JpZXMtY2hlY2tib3ggKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZW51L2l0ZW1GYWN0b3JpZXMvY2hlY2tib3guanMiLCIvKiBAbWVudS1pdGVtRmFjdG9yaWVzLXNlcGFyYXRvciAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkKGRhdGEsIGNvbmZpZykge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdzZXBhcmF0b3InKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1vcmllbnRhdGlvbicsIGNvbmZpZy5vcmllbnRhdGlvbik7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qIGVuZCBAbWVudS1pdGVtRmFjdG9yaWVzLXNlcGFyYXRvciAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lbnUvaXRlbUZhY3Rvcmllcy9zZXBhcmF0b3IuanMiLCJpbXBvcnQge2NyZWF0ZVRodW1iQ29udHJvbH0gZnJvbSAnLi90aHVtYic7XG5pbXBvcnQge29uRWxlbWVudEVudGVyfSBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG4vKiBAc2xpZGVyLW11bHRpcmFuZ2UgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU11bHRpcmFuZ2Uoc2xpZGVyLCB0aHVtYnMsIG1pblZhbHVlLCBtYXhWYWx1ZSwgb3JpZW50YXRpb24pIHtcbiAgdmFyIHJldmVyc2UgPSBmYWxzZTtcblxuICBpZiAocmV2ZXJzZSkge1xuICAgIHRodW1icy5mb3JFYWNoKHQgPT4gdC5zdGVwU2l6ZSAqPSAtMSk7XG4gIH1cblxuICB2YXIgcGl4ZWxzID0gMjAwO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gbnVsbCl7XG4gICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBpZiAoaXNOYU4obWluVmFsdWUpIHx8IGlzTmFOKG1heFZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWluLCBtYXgsIGluaXRpYWwgdmFsdWVzIG11c3QgYWxsIGJlIG51bWJlcnMuIFN0ZXBTaXplIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gIH1cblxuICBpZiAob3JpZW50YXRpb24gIT09ICdob3Jpem9udGFsJyAmJiBvcmllbnRhdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgIHRocm93IG5ldyBFcnJvcignb3JpZW50YXRpb24gbXVzdCBiZSBlaXRoZXIgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLCBvciBibGFuayAoZGVmYXVsdHMgdG8gaG9yaXpvbnRhbCknKTtcbiAgfVxuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIGZ1bmN0aW9uIHNob3VsZFNldE9yaWVudCgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcbiAgICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYtMTFcbiAgICAgIHZhciBpc0lFID0gZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7Ly9AY2Nfb24hQFxuICAgICAgLy8gRWRnZSAyMCtcbiAgICAgIHZhciBpc0VkZ2UgPSAhaXNJRSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhO1xuICAgICAgLy8gRmlyZWZveCAxLjArXG4gICAgICB2YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcblxuICAgICAgcmV0dXJuIGlzSUUgfHwgaXNFZGdlIHx8IGlzRmlyZWZveDtcbiAgICB9XG4gICAgaWYoc2hvdWxkU2V0T3JpZW50KCkgPT09IHRydWUpe1xuICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnb3JpZW50JywgJ3ZlcnRpY2FsJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gdGhlIHJlc3Qgb2YgdGhpcyBjb2RlIGlzIG9ubHkgcmVsZXZhbnQgaWYgdGhlcmUgaXNcbiAgLy8gbW9yZSB0aGFuIG9uZSB0aHVtYi5cblxuICAvL3NsaWRlci5zdHlsZS5oZWlnaHQgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJzJweCcgOiBwaXhlbHMgKyAncHgnO1xuICAvL3NsaWRlci5zdHlsZS53aWR0aCA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBwaXhlbHMgKyAncHgnIDogJzJweCc7XG5cbiAgdmFyIGlucHV0cyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICB2YXIgbWluVmFsdWVJbnB1dCA9IGlucHV0c1swXTtcbiAgdmFyIG1heFZhbHVlSW5wdXQgPSBpbnB1dHNbMV07XG5cbiAgdmFyIHRodW1iT2JqZWN0cyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgdGh1bWJPYmplY3RzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGh1bWJPYmplY3RzKTtcblxuICBmb3IgKHZhciBpPTA7IGkgPCB0aHVtYnMubGVuZ3RoOyBpKyspe1xuICAgIGNyZWF0ZVRodW1iQ29udHJvbCh0aHVtYk9iamVjdHNbaV0sIHRodW1ic1tpXSwgbWluVmFsdWUsIG1heFZhbHVlLCBwaXhlbHMsIG9yaWVudGF0aW9uKTtcbiAgfVxuXG4gIHRodW1iT2JqZWN0cy5mb3JFYWNoKCh0LCBpKSA9PiB7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGJpbmRJbnB1dFRvVGh1bWIobWluVmFsdWVJbnB1dCwgdCwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgIGJpbmRJbnB1dFRvVGh1bWIobWF4VmFsdWVJbnB1dCwgdCwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBiaW5kSW5wdXRUb1RodW1iKGlucHV0LCB0aHVtYiwgbWluLCBtYXgpIHtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHVwZGF0ZVRodW1iKTtcblxuICBvbkVsZW1lbnRFbnRlcihpbnB1dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB1cGRhdGVUaHVtYigpO1xuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVUaHVtYigpIHtcbiAgICBsZXQgdmFsID0gaW5wdXQudmFsdWU7XG4gICAgaWYgKHRodW1iLnRleHRQYXJzZXIpIHtcbiAgICAgIHZhbCA9IHRodW1iLnRleHRQYXJzZXIodmFsKTtcbiAgICB9XG5cbiAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgaWYgKCFpc05hTih2YWwpICYmIHZhbCA8PSBtYXggJiYgdmFsID49IG1pbiAmJiB2YWwgIT0gdGh1bWIuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JykpIHtcbiAgICAgIHRodW1iLnNldFZhbHVlKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgdGh1bWIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlVGV4dElucHV0KTtcblxuICBmdW5jdGlvbiB1cGRhdGVUZXh0SW5wdXQoKSB7XG4gICAgaWYgKHRodW1iLnRleHRQYXJzZXIpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gdGh1bWIuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVldGV4dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHRodW1iLmdldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRleHRJbnB1dCgpO1xufVxuLyogZW5kIEBzbGlkZXItbXVsdGlyYW5nZSAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL211bHRpcmFuZ2UvaW5kZXguanMiLCIvKiBAbXVsdGlyYW5nZS10aHVtYiAqL1xuaW1wb3J0ICogYXMga2IgZnJvbSAnLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGh1bWJDb250cm9sKHRodW1iT2JqZWN0LCB0aHVtYiwgbWluVmFsdWUsIG1heFZhbHVlLCBwaXhlbHMsIG9yaWVudGF0aW9uKSB7XG4gIGlmIChvcmllbnRhdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPcmllbnRhdGlvbiBtdXN0IGJlIGVpdGhlciBcXCdob3Jpem9udGFsXFwnIG9yIFxcJ3ZlcnRpY2FsXFwnJyk7XG4gIH1cblxuICBpZiAoaXNOYU4odGh1bWIuc3RlcFNpemUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdGVwIHNpemUgbXVzdCBiZSBhIG51bWJlci4nKTtcbiAgfVxuXG4gIGlmIChpc05hTih0aHVtYi5pbml0aWFsVmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbml0aWFsIHZhbHVlIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gIH1cblxuICBpZiAodGh1bWIuaW5pdGlhbFZhbHVlIDwgbWluVmFsdWUgfHwgdGh1bWIuaW5pdGlhbFZhbHVlID4gbWF4VmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luaXRpYWwgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LCBpbmNsdXNpdmUuJyk7XG4gIH1cblxuICBhZGp1c3RBcHBlYXJhbmNlKHRodW1iLmluaXRpYWxWYWx1ZSk7XG4gIGxldCB2YWx1ZVRleHQgPSB0aHVtYi5sYWJlbEZyb21WYWx1ZSh0aHVtYi5pbml0aWFsVmFsdWUpO1xuICBpZiAodmFsdWVUZXh0ICE9PSB0aHVtYi5pbml0aWFsVmFsdWUpIHtcbiAgICB0aHVtYk9iamVjdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0JywgdmFsdWVUZXh0KTtcbiAgfVxuICAvLyBvdXRwdXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAvLyBvdXRwdXQuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xuICAvLyBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAvLyAgIG91dHB1dC5zdHlsZS50b3AgPSAnLTdweCc7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgb3V0cHV0LnN0eWxlLmxlZnQgPSAnLTJweCc7XG4gIC8vIH1cbiAgLy9cbiAgLy8gb3V0cHV0LnN0eWxlLndpZHRoID0gJzEwcHgnO1xuICAvLyBvdXRwdXQuc3R5bGUubWFyZ2luTGVmdCA9ICctNXB4JztcblxuICBmdW5jdGlvbiBzZXRWYWx1ZUF0dHJpYnV0ZXModmFsdWUpIHtcbiAgICBsZXQgdmFsdWVUZXh0ID0gdGh1bWIubGFiZWxGcm9tVmFsdWUodmFsdWUpO1xuICAgIHRodW1iT2JqZWN0LnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHZhbHVlKTtcbiAgICBpZiAodmFsdWVUZXh0ICE9PSB2YWx1ZSkge1xuICAgICAgdGh1bWJPYmplY3Quc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVldGV4dCcsIHZhbHVlVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRodW1iT2JqZWN0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS12YWx1ZXRleHQnKTtcbiAgICB9XG5cbiAgICB2YXIgZTtcblxuICAgIHRyeSB7XG4gICAgICBlID0gbmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7J2J1YmJsZXMnOnRydWUsICdjYW5jZWxhYmxlJzp0cnVlfSk7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgLy8gaGkgSUUsIHlvdSdyZSBncmVhdC4gTGV0J3MgZ28gZm9yIGEgd2Fsay5cbiAgICAgIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGUuaW5pdEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlLCB7fSk7XG4gICAgfVxuXG4gICAgdGh1bWJPYmplY3QuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZ2V0UGVyY2VudGFnZSh2YWwpIHtcbiAgICBsZXQgcmFuZ2UgPSBtYXhWYWx1ZSAtIG1pblZhbHVlO1xuICAgIGxldCBub3JtYWxpemVkVmFsdWUgPSB2YWwgLSBtaW5WYWx1ZTtcbiAgICBsZXQgcGVyY2VudCA9IG5vcm1hbGl6ZWRWYWx1ZSAvIHJhbmdlO1xuICAgIHJldHVybiBwZXJjZW50O1xuICB9XG5cbiAgLy8gdGhpcyBzaG91bGQgcm91bmQgdG8gdGhlIG5lYXJlc3QgdmFsdWUgdGhhdCBpc1xuICAvLyBhbiBpbnRlZ2VyIGZhY3RvciBvZiB0aGUgc3RlcFNpemUuXG4gIC8vIHdoZW4gdXNpbmcga2V5Ym9hcmQsIHlvdSBhbHdheXMgbW92ZSB1cC9kb3duXG4gIC8vIGJ5IGVpdGhlciAxIG9yIDEwIHRpbWVzIHRoZSBzdGVwU2l6ZTsgd2hlbiB1c2luZ1xuICAvLyBhIG1vdXNlLCB0aG91Z2gsIHRoZSBkcmFnZ2luZyBpcyBtb3JlIGFuYWxvZyAtIHNvXG4gIC8vIHlvdSBtaWdodCBnZXQgZmxvYXRpbmcgcG9pbnQgdmFsdWVzIHRoYXQgYXJlXG4gIC8vIG91dHNpZGUgb2YgdGhlIGFsbG93YWJsZSByYW5nZS4gVGhpcyBmaXhlcyB0aGF0LlxuICBmdW5jdGlvbiBub3JtYWxpemUodikge1xuICAgIGxldCByYW5nZSA9IHtcbiAgICAgIGxvdzogTWF0aC5mbG9vcih2IC8gdGh1bWIuc3RlcFNpemUpICogdGh1bWIuc3RlcFNpemUsXG4gICAgICBoaWdoOiBNYXRoLmNlaWwodiAvIHRodW1iLnN0ZXBTaXplKSAqIHRodW1iLnN0ZXBTaXplXG4gICAgfTtcblxuICAgIGxldCBsb3dEZWx0YSA9IHJhbmdlLmxvdyAtIHY7XG4gICAgbGV0IGhpZ2hEZWx0YSA9IHJhbmdlLmhpZ2ggLSB2O1xuXG4gICAgaWYgKE1hdGguYWJzKGxvd0RlbHRhKSA8PSBNYXRoLmFicyhoaWdoRGVsdGEpKSB7XG4gICAgICByZXR1cm4gcmFuZ2UubG93O1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZS5oaWdoO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0VmFsdWUocGl4ZWxQb3NpdGlvbikge1xuICAgIGxldCByYW5nZSA9IG1heFZhbHVlIC0gbWluVmFsdWU7XG4gICAgbGV0IHBlcmNlbnQgPSBwaXhlbFBvc2l0aW9uIC8gcGl4ZWxzO1xuICAgIGxldCBvbGRWYWx1ZSA9IHBhcnNlRmxvYXQodGh1bWJPYmplY3QuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JykpO1xuICAgIGxldCBuZXdWYWx1ZSA9IG1pblZhbHVlICsgKHJhbmdlICogcGVyY2VudCk7XG5cbiAgICBuZXdWYWx1ZSA9IG5vcm1hbGl6ZShuZXdWYWx1ZSk7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZUF0dHJpYnV0ZXMobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkanVzdEFwcGVhcmFuY2UodmFsdWUpIHtcbiAgICBsZXQgb2Zmc2V0ID0gcGl4ZWxzICogZ2V0UGVyY2VudGFnZSh2YWx1ZSk7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRodW1iT2JqZWN0LnN0eWxlLmxlZnQgPSBvZmZzZXQgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHVtYk9iamVjdC5zdHlsZS5ib3R0b20gPSAob2Zmc2V0IC0gNykgKyAncHgnO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlEZWx0YShkZWx0YSkge1xuICAgIGxldCBvbGRWYWx1ZSA9IHRodW1iT2JqZWN0LmdldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycpO1xuICAgIGxldCBuZXdWYWx1ZSA9IHBhcnNlRmxvYXQob2xkVmFsdWUpICsgcGFyc2VGbG9hdChkZWx0YSk7XG4gICAgd2hpbGUobmV3VmFsdWUgPCBtaW5WYWx1ZSkge1xuICAgICAgbmV3VmFsdWUrKztcbiAgICB9XG5cbiAgICB3aGlsZShuZXdWYWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgICBuZXdWYWx1ZS0tO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHNldFZhbHVlQXR0cmlidXRlcyhuZXdWYWx1ZSk7XG4gICAgICBhZGp1c3RBcHBlYXJhbmNlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBrYi5vbkVsZW1lbnRSaWdodCh0aHVtYk9iamVjdCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhcHBseURlbHRhKHRodW1iLnN0ZXBTaXplKTtcbiAgfSk7XG5cbiAga2Iub25FbGVtZW50VXAodGh1bWJPYmplY3QsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYXBwbHlEZWx0YSh0aHVtYi5zdGVwU2l6ZSk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudExlZnQodGh1bWJPYmplY3QsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYXBwbHlEZWx0YSgtdGh1bWIuc3RlcFNpemUpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnREb3duKHRodW1iT2JqZWN0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFwcGx5RGVsdGEoLXRodW1iLnN0ZXBTaXplKTtcbiAgfSk7XG5cbiAga2Iub25FbGVtZW50UGFnZVVwKHRodW1iT2JqZWN0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFwcGx5RGVsdGEoMTAgKiB0aHVtYi5zdGVwU2l6ZSk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudFBhZ2VEb3duKHRodW1iT2JqZWN0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFwcGx5RGVsdGEoLTEwICogdGh1bWIuc3RlcFNpemUpO1xuICB9KTtcblxuICB0aHVtYk9iamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgc3RhcnREcmFnKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhZygpIHtcbiAgICB0aHVtYk9iamVjdC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25EcmFnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wRHJhZyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQb2ludChlKSB7XG4gICAgbGV0IHggPSBlLmNsaWVudFggLSB0aHVtYk9iamVjdC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgbGV0IHkgPSBlLmNsaWVudFkgLSB0aHVtYk9iamVjdC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgIHJldHVybiB7eCwgeX07XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWcoZSkge1xuICAgIGxldCB7eCwgeX0gPSBnZXRQb2ludChlKTtcbiAgICBsZXQgdGFyZ2V0VmFsdWUgPSAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykgPyB4IC0gMTA6IHBpeGVscyAtIHk7XG5cbiAgICB3aGlsZSh0YXJnZXRWYWx1ZSA8IDApIHtcbiAgICAgIHRhcmdldFZhbHVlKys7XG4gICAgfVxuXG4gICAgd2hpbGUodGFyZ2V0VmFsdWUgPiBwaXhlbHMpIHtcbiAgICAgIHRhcmdldFZhbHVlLS07XG4gICAgfVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRodW1iT2JqZWN0LnN0eWxlLmxlZnQgPSB0YXJnZXRWYWx1ZSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRodW1iT2JqZWN0LnN0eWxlLmJvdHRvbSA9ICh0YXJnZXRWYWx1ZSAtIDcpICsgJ3B4JztcbiAgICB9XG5cbiAgICBhZGp1c3RWYWx1ZSh0YXJnZXRWYWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wRHJhZygpIHtcbiAgICB0aHVtYk9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25EcmFnKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wRHJhZyk7XG5cbiAgICBsZXQgZmluYWxWYWx1ZSA9IHRodW1iT2JqZWN0LmdldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycpO1xuXG4gICAgYWRqdXN0QXBwZWFyYW5jZShwYXJzZUZsb2F0KGZpbmFsVmFsdWUpKTtcbiAgfVxuXG4gIGFkanVzdEFwcGVhcmFuY2UodGh1bWIuaW5pdGlhbFZhbHVlKTtcblxuICB0aHVtYk9iamVjdC5zZXRWYWx1ZSA9ICh2KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gbm9ybWFsaXplKHYpO1xuICAgIHNldFZhbHVlQXR0cmlidXRlcyh2YWx1ZSk7XG4gICAgYWRqdXN0QXBwZWFyYW5jZSh2YWx1ZSk7XG4gIH07XG5cbn1cbi8qXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGh1bWJDb250cm9sKG1pbiwgbWF4LCBwaXhlbHMsIG9yaWVudGF0aW9uLCB7bGFiZWwsIGluaXRpYWxWYWx1ZSA9IG1pbiwgc3RlcFNpemUgPSAxLCBjbGFzc2VzID0gW10sIGxhYmVsRnJvbVZhbHVlID0gKHYpID0+IHYsIHRleHRQYXJzZXJ9KSB7XG4gIGlmIChvcmllbnRhdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPcmllbnRhdGlvbiBtdXN0IGJlIGVpdGhlciBcXCdob3Jpem9udGFsXFwnIG9yIFxcJ3ZlcnRpY2FsXFwnJyk7XG4gIH1cblxuICBpZiAoaXNOYU4oc3RlcFNpemUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdGVwIHNpemUgbXVzdCBiZSBhIG51bWJlci4nKTtcbiAgfVxuXG4gIGlmKCFBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzc2VzIG11c3QgYmUgcHJvdmlkZWQgYXMgYW4gYXJyYXkuJyk7XG4gIH1cblxuICBpZiAoaXNOYU4oaW5pdGlhbFZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW5pdGlhbCB2YWx1ZSBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICB9XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA8IG1pbiB8fCBpbml0aWFsVmFsdWUgPiBtYXgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luaXRpYWwgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIG1pbiBhbmQgbWF4LCBpbmNsdXNpdmUuJyk7XG4gIH1cblxuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCd0aHVtYicpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3NsaWRlcicpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWluJywgbWluKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW1heCcsIG1heCk7XG5cbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1vcmllbnRhdGlvbicsIG9yaWVudGF0aW9uKTtcblxuICBpZiAobGFiZWwpIHtcbiAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICB9XG5cbiAgYWRqdXN0QXBwZWFyYW5jZShpbml0aWFsVmFsdWUpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgaW5pdGlhbFZhbHVlKTtcbiAgbGV0IHZhbHVlVGV4dCA9IGxhYmVsRnJvbVZhbHVlKGluaXRpYWxWYWx1ZSk7XG4gIGlmICh2YWx1ZVRleHQgIT09IGluaXRpYWxWYWx1ZSkge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0JywgdmFsdWVUZXh0KTtcbiAgfVxuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdkYXRhLWluY3JlbWVudCcsIHN0ZXBTaXplKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4gb3V0cHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuXG4gIC8vIG91dHB1dC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIC8vIG91dHB1dC5zdHlsZS5oZWlnaHQgPSAnMTBweCc7XG4gIC8vIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gIC8vICAgb3V0cHV0LnN0eWxlLnRvcCA9ICctN3B4JztcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBvdXRwdXQuc3R5bGUubGVmdCA9ICctMnB4JztcbiAgLy8gfVxuICAvL1xuICAvLyBvdXRwdXQuc3R5bGUud2lkdGggPSAnMTBweCc7XG4gIC8vIG91dHB1dC5zdHlsZS5tYXJnaW5MZWZ0ID0gJy01cHgnO1xuXG4gIGZ1bmN0aW9uIHNldFZhbHVlQXR0cmlidXRlcyh2YWx1ZSkge1xuICAgIGxldCB2YWx1ZVRleHQgPSBsYWJlbEZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHZhbHVlKTtcbiAgICBpZiAodmFsdWVUZXh0ICE9PSB2YWx1ZSkge1xuICAgICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZXRleHQnLCB2YWx1ZVRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXZhbHVldGV4dCcpO1xuICAgIH1cblxuICAgIHZhciBlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHsnYnViYmxlcyc6dHJ1ZSwgJ2NhbmNlbGFibGUnOnRydWV9KTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAvLyBoaSBJRSwgeW91J3JlIGdyZWF0LiBMZXQncyBnbyBmb3IgYSB3YWxrLlxuICAgICAgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZS5pbml0Q3VzdG9tRXZlbnQoJ2NoYW5nZScsIHRydWUsIHRydWUsIHt9KTtcbiAgICB9XG5cbiAgICBvdXRwdXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIGxldCByYW5nZSA9IG1heCAtIG1pbjtcbiAgZnVuY3Rpb24gZ2V0UGVyY2VudGFnZSh2YWwpIHtcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0gdmFsIC0gbWluO1xuICAgIGxldCBwZXJjZW50ID0gbm9ybWFsaXplZFZhbHVlIC8gcmFuZ2U7XG4gICAgcmV0dXJuIHBlcmNlbnQ7XG4gIH1cblxuICAvLyB0aGlzIHNob3VsZCByb3VuZCB0byB0aGUgbmVhcmVzdCB2YWx1ZSB0aGF0IGlzXG4gIC8vIGFuIGludGVnZXIgZmFjdG9yIG9mIHRoZSBzdGVwU2l6ZS5cbiAgLy8gd2hlbiB1c2luZyBrZXlib2FyZCwgeW91IGFsd2F5cyBtb3ZlIHVwL2Rvd25cbiAgLy8gYnkgZWl0aGVyIDEgb3IgMTAgdGltZXMgdGhlIHN0ZXBTaXplOyB3aGVuIHVzaW5nXG4gIC8vIGEgbW91c2UsIHRob3VnaCwgdGhlIGRyYWdnaW5nIGlzIG1vcmUgYW5hbG9nIC0gc29cbiAgLy8geW91IG1pZ2h0IGdldCBmbG9hdGluZyBwb2ludCB2YWx1ZXMgdGhhdCBhcmVcbiAgLy8gb3V0c2lkZSBvZiB0aGUgYWxsb3dhYmxlIHJhbmdlLiBUaGlzIGZpeGVzIHRoYXQuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2KSB7XG4gICAgbGV0IHJhbmdlID0ge1xuICAgICAgbG93OiBNYXRoLmZsb29yKHYgLyBzdGVwU2l6ZSkgKiBzdGVwU2l6ZSxcbiAgICAgIGhpZ2g6IE1hdGguY2VpbCh2IC8gc3RlcFNpemUpICogc3RlcFNpemVcbiAgICB9O1xuXG4gICAgbGV0IGxvd0RlbHRhID0gcmFuZ2UubG93IC0gdjtcbiAgICBsZXQgaGlnaERlbHRhID0gcmFuZ2UuaGlnaCAtIHY7XG5cbiAgICBpZiAoTWF0aC5hYnMobG93RGVsdGEpIDw9IE1hdGguYWJzKGhpZ2hEZWx0YSkpIHtcbiAgICAgIHJldHVybiByYW5nZS5sb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlLmhpZ2g7XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RWYWx1ZShwaXhlbFBvc2l0aW9uKSB7XG4gICAgbGV0IHBlcmNlbnQgPSBwaXhlbFBvc2l0aW9uIC8gcGl4ZWxzO1xuICAgIGxldCBvbGRWYWx1ZSA9IHBhcnNlRmxvYXQob3V0cHV0LmdldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycpKTtcbiAgICBsZXQgbmV3VmFsdWUgPSBtaW4gKyAocmFuZ2UgKiBwZXJjZW50KTtcblxuICAgIG5ld1ZhbHVlID0gbm9ybWFsaXplKG5ld1ZhbHVlKTtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHNldFZhbHVlQXR0cmlidXRlcyhuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0QXBwZWFyYW5jZSh2YWx1ZSkge1xuICAgIGxldCBvZmZzZXQgPSBwaXhlbHMgKiBnZXRQZXJjZW50YWdlKHZhbHVlKTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3V0cHV0LnN0eWxlLmxlZnQgPSBvZmZzZXQgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQuc3R5bGUuYm90dG9tID0gKG9mZnNldCAtIDcpICsgJ3B4JztcbiAgICB9XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5RGVsdGEoZGVsdGEpIHtcbiAgICBsZXQgb2xkVmFsdWUgPSBvdXRwdXQuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93Jyk7XG4gICAgbGV0IG5ld1ZhbHVlID0gcGFyc2VGbG9hdChvbGRWYWx1ZSkgKyBkZWx0YTtcbiAgICB3aGlsZShuZXdWYWx1ZSA8IG1pbikge1xuICAgICAgbmV3VmFsdWUrKztcbiAgICB9XG5cbiAgICB3aGlsZShuZXdWYWx1ZSA+IG1heCkge1xuICAgICAgbmV3VmFsdWUtLTtcbiAgICB9XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZUF0dHJpYnV0ZXMobmV3VmFsdWUpO1xuICAgICAgYWRqdXN0QXBwZWFyYW5jZShuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAga2Iub25FbGVtZW50UmlnaHQob3V0cHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFwcGx5RGVsdGEoc3RlcFNpemUpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRVcChvdXRwdXQsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYXBwbHlEZWx0YShzdGVwU2l6ZSk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudExlZnQob3V0cHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFwcGx5RGVsdGEoLXN0ZXBTaXplKTtcbiAgfSk7XG5cbiAga2Iub25FbGVtZW50RG93bihvdXRwdXQsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYXBwbHlEZWx0YSgtc3RlcFNpemUpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRQYWdlVXAob3V0cHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFwcGx5RGVsdGEoMTAgKiBzdGVwU2l6ZSk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudFBhZ2VEb3duKG91dHB1dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhcHBseURlbHRhKC0xMCAqIHN0ZXBTaXplKTtcbiAgfSk7XG5cbiAgb3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICBzdGFydERyYWcoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc3RhcnREcmFnKCkge1xuICAgIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25EcmFnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wRHJhZyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQb2ludChlKSB7XG4gICAgbGV0IHggPSBlLmNsaWVudFggLSBvdXRwdXQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIGxldCB5ID0gZS5jbGllbnRZIC0gb3V0cHV0LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgcmV0dXJuIHt4LCB5fTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgbGV0IHt4LCB5fSA9IGdldFBvaW50KGUpO1xuICAgIGxldCB0YXJnZXRWYWx1ZSA9IChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSA/IHggLSAxMDogcGl4ZWxzIC0geTtcblxuICAgIHdoaWxlKHRhcmdldFZhbHVlIDwgMCkge1xuICAgICAgdGFyZ2V0VmFsdWUrKztcbiAgICB9XG5cbiAgICB3aGlsZSh0YXJnZXRWYWx1ZSA+IHBpeGVscykge1xuICAgICAgdGFyZ2V0VmFsdWUtLTtcbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgb3V0cHV0LnN0eWxlLmxlZnQgPSB0YXJnZXRWYWx1ZSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5zdHlsZS5ib3R0b20gPSAodGFyZ2V0VmFsdWUgLSA3KSArICdweCc7XG4gICAgfVxuXG4gICAgYWRqdXN0VmFsdWUodGFyZ2V0VmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcERyYWcoKSB7XG4gICAgb3V0cHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRyYWcpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BEcmFnKTtcblxuICAgIGxldCBmaW5hbFZhbHVlID0gb3V0cHV0LmdldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycpO1xuXG4gICAgYWRqdXN0QXBwZWFyYW5jZShwYXJzZUZsb2F0KGZpbmFsVmFsdWUpKTtcbiAgfVxuXG4gIGFkanVzdEFwcGVhcmFuY2UoaW5pdGlhbFZhbHVlKTtcblxuICBvdXRwdXQuc2V0VmFsdWUgPSAodikgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG5vcm1hbGl6ZSh2KTtcbiAgICBzZXRWYWx1ZUF0dHJpYnV0ZXModmFsdWUpO1xuICAgIGFkanVzdEFwcGVhcmFuY2UodmFsdWUpO1xuICB9O1xuXG4gIG91dHB1dC50ZXh0UGFyc2VyID0gdGV4dFBhcnNlcjtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuKi9cbi8qIGVuZCBAbXVsdGlyYW5nZS10aHVtYiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL211bHRpcmFuZ2UvdGh1bWIuanMiLCJpbXBvcnQge3ZhbGlkYXRlRGF0YX0gZnJvbSAnLi91dGlscy9kYXRhVmFsaWRhdG9yJztcbmltcG9ydCB7Y3JlYXRlSGludH0gZnJvbSAnLi91dGlscy9mb3JtYXR0ZXInO1xuaW1wb3J0IHtnZW5lcmF0ZUd1aWR9IGZyb20gJy4uL191dGlscy9ndWlkVXRpbHMuanMnO1xuaW1wb3J0ICogYXMga2IgZnJvbSAnLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuaW1wb3J0ICogYXMgbmF2IGZyb20gJy4vdXRpbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQge2VsZW1lbnRJc0NoaWxkT2ZFbGVtZW50fSBmcm9tICcuLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuLyogQHByZWRpY3RpdmUtdGV4dCAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJlZGljdGl2ZVRleHQoZGF0YSkge1xuICBpZiAoIWRhdGEpIHsgdGhyb3cgbmV3IEVycm9yKCdkYXRhIG11c3QgYmUgcHJvdmlkZWQnKTsgfVxuICBpZiAoIXZhbGlkYXRlRGF0YShkYXRhKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgZm9ybWF0IGludmFsaWQuIE11c3QgZWl0aGVyIGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGEgXCJsYWJlbFwiIGZpZWxkLicpOyB9XG5cbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnZGVxdWUtcHJlZGljdGl2ZS10ZXh0LWNvbWJvYm94Jyk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbGV0IGhpbnRJZCA9IGdlbmVyYXRlR3VpZCgpO1xuICBsZXQgc2VsZWN0ZWRIaW50Q2xvbmUgPSBudWxsO1xuICBsZXQgc2VsZWN0ZWRIaW50Q2xvbmVJbmRleCA9IG51bGw7XG4gIC8vIHRoaXMgcHJldmVudHMgdGhlIGJyb3dzZXJzIGZyb20gaGVscGZ1bGx5IHN1Z2dlc3RpbmdcbiAgLy8gdGhlaXIgb3duIHByZWRpY3RpdmUgdGV4dCBmZWVkYmFjay5cbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdjb21ib2JveCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWF1dG9jb21wbGV0ZScsICdsaXN0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1vd25zJywgaGludElkKTtcblxuICBsZXQgaGludHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBoaW50cy5pZCA9IGhpbnRJZDtcbiAgaGludHMuY2xhc3NMaXN0LmFkZCgnZGVxdWUtcHJlZGljdGl2ZS10ZXh0LWhpbnRzJyk7XG4gIGhpbnRzLnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG5cbiAgbGV0IGxpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxpdmUuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHloaWRkZW4nKTtcblxuICBsZXQgbm90aWZpY2F0aW9uVGltZW91dDtcblxuICBmdW5jdGlvbiBpbW1lZGlhdGVOb3RpZmljYXRpb24oKSB7XG4gICAgbGV0IGhpZ2hsaWdodCA9IGhpbnRzLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1wcmVkaWN0aXZlLXRleHQtaGludC5oaWdobGlnaHQnKTtcbiAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICBsZXQgaW5kZXhQb3NpdGlvblRleHQgPSBudWxsO1xuICAgICAgbGV0IGhpbnRMaXN0ID0gaGludHMucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICAgIGxldCBoaW50TGlzdExlbmd0aCA9IGhpbnRMaXN0Lmxlbmd0aDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGk8aGludExpc3RMZW5ndGg7IGkrKykge1xuICAgICAgICBpZihoaW50TGlzdFtpXS5pbm5lclRleHQgPT0gaGlnaGxpZ2h0LmlubmVyVGV4dCkge1xuICAgICAgICAgIGluZGV4UG9zaXRpb25UZXh0ID0gJ09wdGlvbiAnICsgKGkgKyAxKTtcbiAgICAgICAgICBzZWxlY3RlZEhpbnRDbG9uZUluZGV4ID0gaW5kZXhQb3NpdGlvblRleHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vdGlmeShsaXZlLCBpbmRleFBvc2l0aW9uVGV4dCArICcgJyArIGhpZ2hsaWdodC5pbm5lclRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVOb3RpZmljYXRpb24oKSB7XG4gICAgaWYgKG5vdGlmaWNhdGlvblRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub3RpZmljYXRpb25UaW1lb3V0KTtcbiAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSBoaW50cy5jaGlsZHJlbjtcbiAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgIG5vdGlmaWNhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoICE9IDApIHsgXG4gICAgICAgIGNvbnN0IGlzQXJlID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMSA/ICdpcycgOiAnYXJlJztcbiAgICAgICAgY29uc3Qgb3B0aW9uVGV4dCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDEgPyAnb3B0aW9uJyA6ICdvcHRpb25zJztcbiAgICAgICAgXG4gICAgICAgIGxldCBtZXNzYWdlID0gYFRoZXJlICR7aXNBcmV9IGN1cnJlbnRseSAke2ZpbHRlcmVkT3B0aW9ucy5sZW5ndGh9ICR7b3B0aW9uVGV4dH0gc3RhcnRpbmcgd2l0aCAke2lucHV0LnZhbHVlLnNwbGl0KCcnKS5qb2luKCcnKX0uIFByZXNzIGRvd24gYXJyb3cgdG8gc2VsZWN0IGFuIG9wdGlvbmA7XG4gICAgICAgIFxuICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgdmFyIG1zaWUgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuICAgICAgICBpZihtc2llID4gMCkge1xuICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlcmUgJHtpc0FyZX0gY3VycmVudGx5ICR7ZmlsdGVyZWRPcHRpb25zLmxlbmd0aH0gJHtvcHRpb25UZXh0fSBzdGFydGluZyB3aXRoICR7aW5wdXQudmFsdWUuc3BsaXQoJycpLmpvaW4oJycpfS4gUHJlc3MgdXAgYXJyb3cgYW5kIHByZXNzIGRvd24gYXJyb3cgdHdvIHRpbWVzIHRvIHNlbGVjdCBhbiBvcHRpb25gO1xuICAgICAgICB9IFxuICAgICAgICBsZXQgaGlnaGxpZ2h0ID0gaGludHMucXVlcnlTZWxlY3RvcignLmRlcXVlLXByZWRpY3RpdmUtdGV4dC1oaWdobGlnaHQnKTtcbiAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gYCBQcmVzcyBkb3duIGFycm93IGZvciBvcHRpb25zLCBvciBQcmVzcyBlbnRlciB0byBzZWxlY3QgJHtoaWdobGlnaHQuaW5uZXJUZXh0fWA7XG4gICAgICAgIH1cbiAgICAgICAgbm90aWZ5KGxpdmUsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0sIDEyMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd09wdGlvbnMoKSB7XG4gICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IGlucHV0LnZhbHVlLmxlbmd0aCA+IDAgPyBmaWx0ZXIoZGF0YSwgaW5wdXQudmFsdWUpIDogZGF0YTtcbiAgICBpZiAocmVuZGVyT3B0aW9ucyhoaW50cywgZmlsdGVyZWRPcHRpb25zKSkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIGhpbnRzLmNsYXNzTmFtZSA9ICdkZXF1ZS1wcmVkaWN0aXZlLXRleHQtaGludHMgZXhwYW5kZWQnO1xuICAgICAgcHJlcGFyZU5vdGlmaWNhdGlvbigpOyAgXG4gICAgICAvL2xldCBtZXNzYWdlID0gJyBQcmVzcyBkb3duIGFycm93IHRvIHNlbGVjdCBhbiBvcHRpb24nO1xuICAgICAgLy9ub3RpZnkobGl2ZSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpbnRzLmNsYXNzTmFtZSA9ICdkZXF1ZS1wcmVkaWN0aXZlLXRleHQtaGludHMgY29sbGFwc2VkJztcbiAgICB9XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDAgJiYgZS5jdXJyZW50VGFyZ2V0LnZhbHVlICE9ICcnKSB7XG4gICAgICBzaG93T3B0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIGhpbnRzLmNsYXNzTmFtZSArPSAnIGNvbGxhcHNlZCc7XG4gICAgICBuYXYuY2xlYXJMaXN0KGhpbnRzKTtcbiAgICAgIGlucHV0LmJsdXIoKTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrLWhvbGRlcicpLmlubmVySFRNTCA9ICcnO1xuICB9KTtcblxuXG4gIGtiLm9uRWxlbWVudFNwYWNlKGlucHV0LCAoZSkgPT4ge1xuICAgIGlmIChlLmN0cmxLZXkgJiYgZS5hbHRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzaG93T3B0aW9ucygpOyBcbiAgICB9XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudFVwKGlucHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChoaW50cy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBzaG93T3B0aW9ucygpO1xuICAgIH1cblxuICAgIG5hdi5oaWdobGlnaHRQcmV2KGhpbnRzKTtcbiAgICBsZXQgaGlnaGxpZ2h0ZWQgPSBoaW50cy5xdWVyeVNlbGVjdG9yKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtcbiAgICBpZiAoaGlnaGxpZ2h0ZWQpIHtcbiAgICAgIHNlbGVjdGVkSGludENsb25lID0gaGlnaGxpZ2h0ZWQuaW5uZXJIVE1MO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBoaWdobGlnaHRlZC5pZCk7XG4gICAgfVxuICAgIGltbWVkaWF0ZU5vdGlmaWNhdGlvbigpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnREb3duKGlucHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGhpbnRzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNob3dPcHRpb25zKCk7XG4gICAgfVxuICAgIG5hdi5oaWdobGlnaHROZXh0KGhpbnRzKTtcbiAgICBsZXQgaGlnaGxpZ2h0ZWQgPSBoaW50cy5xdWVyeVNlbGVjdG9yKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtcbiAgICBpZiAoaGlnaGxpZ2h0ZWQpIHtcbiAgICAgIHNlbGVjdGVkSGludENsb25lID0gaGlnaGxpZ2h0ZWQuaW5uZXJIVE1MO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBoaWdobGlnaHRlZC5pZCk7XG4gICAgfVxuICAgIGltbWVkaWF0ZU5vdGlmaWNhdGlvbigpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRFbnRlcihpbnB1dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBuYXYuY29uZmlybVZhbHVlKGlucHV0LCBoaW50cyk7XG4gICAgaWYoaW5wdXQudmFsdWUgPT0gc2VsZWN0ZWRIaW50Q2xvbmUpIHtcbiAgICAgIG5vdGlmeShsaXZlLCBzZWxlY3RlZEhpbnRDbG9uZUluZGV4ICsgJyAnICsgaW5wdXQudmFsdWUrICcgc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgaGludHMuY2xhc3NOYW1lICs9ICcgY29sbGFwc2VkJztcbiAgICBuYXYuY2xlYXJMaXN0KGhpbnRzKTtcbiAgICBjbGVhclRpbWVvdXQobm90aWZpY2F0aW9uVGltZW91dCk7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uRW5kID0gMTAwMDA7IH0sIDApO1xuICB9KTtcblxuICBcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IGNsaWNrVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCFlbGVtZW50SXNDaGlsZE9mRWxlbWVudChjbGlja1RhcmdldCwgb3V0cHV0KSkge1xuICAgICAgbmF2LmNsZWFyTGlzdChoaW50cyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIGhpbnRzLmNsYXNzTmFtZSA9ICdkZXF1ZS1wcmVkaWN0aXZlLXRleHQtaGludHMgY29sbGFwc2VkJztcbiAgICB9XG4gIH0pO1xuICBcbiAgLypcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlcXVlLXByZWRpY3RpdmUtdGV4dCAuZGVxdWUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbihlKXtcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpO1xuICB9KTtcbiAgXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChlKSA9PiB7XG4gICAgbGV0IGZvY3VzVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCFlbGVtZW50SXNDaGlsZE9mRWxlbWVudChmb2N1c1RhcmdldCwgb3V0cHV0KSkge1xuICAgICAgbmF2LmNsZWFyTGlzdChoaW50cyk7XG4gICAgfVxuICB9KTtcbiAgKi9cblxuXG4gIGtiLm9uRWxlbWVudEVzY2FwZShpbnB1dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoaGludHMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbmF2LmNsZWFyTGlzdChoaW50cyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIGhpbnRzLmNsYXNzTmFtZSA9ICdkZXF1ZS1wcmVkaWN0aXZlLXRleHQtaGludHMgY29sbGFwc2VkJztcbiAgICAgIGNsZWFyVGltZW91dChub3RpZmljYXRpb25UaW1lb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHNlbGVjdGVkSGludENsb25lID0gbnVsbDtcbiAgICB9XG5cbiAgfSk7XG5cbiAgaGludHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG5hdi5jb25maXJtVmFsdWUoaW5wdXQsIGhpbnRzKTtcbiAgICBuYXYuY2xlYXJMaXN0KGhpbnRzKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICBoaW50cy5jbGFzc05hbWUgPSAnZGVxdWUtcHJlZGljdGl2ZS10ZXh0LWhpbnRzIGNvbGxhcHNlZCc7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBpZihzZWxlY3RlZEhpbnRDbG9uZSA9PSBpbnB1dC52YWx1ZSkge1xuICAgICAgbm90aWZ5KGxpdmUsIHNlbGVjdGVkSGludENsb25lSW5kZXggKyAnICcgKyBpbnB1dC52YWx1ZSsgJyBzZWxlY3RlZCcpO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQobm90aWZpY2F0aW9uVGltZW91dCk7XG4gIH0pO1xuXG4gIGxpdmUuY2xhc3NMaXN0LmFkZCgnbGl2ZS11cGRhdGUtcmVnaW9uJyk7XG4gIGxpdmUuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG5cbiAgb3V0cHV0LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGhpbnRzKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaXZlKTtcblxuICBvdXRwdXQuZ2V0SW5wdXRFbGVtZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiByZW5kZXJPcHRpb25zKGxpc3QsIG9wdGlvbnMpIHtcbiAgbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgb3B0aW9uc1xuICAgIC5tYXAoaXRlbSA9PiBjcmVhdGVIaW50KGxpc3QsIGl0ZW0pKVxuICAgIC5mb3JFYWNoKGl0ZW0gPT4gbGlzdC5hcHBlbmRDaGlsZChpdGVtKSk7XG5cblxuICBsZXQgZmlyc3RJdGVtID0gbGlzdC5xdWVyeVNlbGVjdG9yKCdsaScpO1xuICBpZiAoZmlyc3RJdGVtKSB7XG4gICAgLy9maXJzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZGVxdWUtcHJlZGljdGl2ZS10ZXh0LWhpZ2hsaWdodCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihkYXRhLCBwcm9tcHQpIHtcbiAgaWYgKHByb21wdC5sZW5ndGggPT09IDApIHsgcmV0dXJuIFtdOyB9XG4gIHJldHVybiBkYXRhLmZpbHRlcihzdHIgPT4gc3RyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcm9tcHQudG9Mb3dlckNhc2UoKSkgPT09IDApO1xufVxuXG5sZXQgY2xlYXJOb3RpZmljYXRpb25UaW1lb3V0O1xuZnVuY3Rpb24gbm90aWZ5KGxpdmUsIG1lc3NhZ2UpIHtcbiAgaWYgKGNsZWFyTm90aWZpY2F0aW9uVGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dChjbGVhck5vdGlmaWNhdGlvblRpbWVvdXQpO1xuICAgIGNsZWFyTm90aWZpY2F0aW9uVGltZW91dCA9IG51bGw7XG4gIH1cblxuICBsaXZlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIGNsZWFyTm90aWZpY2F0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxpdmUuaW5uZXJUZXh0ID0gJyc7XG4gIH0sIDYwMDApO1xufVxuLyogZW5kIEBwcmVkaWN0aXZlLXRleHQgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcmVkaWN0aXZlLXRleHQvaW5kZXguanMiLCIvKiBAcHJlZGljdGl2ZS10ZXh0LWRhdGFWYWxpZGF0b3IgKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHYpIHtcbiAgcmV0dXJuIHYgJiYgdHlwZW9mIHYgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkT2JqZWN0KHYpIHtcbiAgcmV0dXJuIHYgJiYgdHlwZW9mIHYubGFiZWwgPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVEYXRhKGRhdGEpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcmV0dXJuIGRhdGEuZXZlcnkoaXNTdHJpbmcpIHx8IGRhdGEuZXZlcnkoaXNWYWxpZE9iamVjdCk7XG59XG4vKiBlbmQgQHByZWRpY3RpdmUtdGV4dC1kYXRhVmFsaWRhdG9yICovXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ByZWRpY3RpdmUtdGV4dC91dGlscy9kYXRhVmFsaWRhdG9yLmpzIiwiaW1wb3J0IHtzZXRIaWdobGlnaHR9IGZyb20gJy4vbmF2aWdhdGlvbic7XG5pbXBvcnQge2dlbmVyYXRlR3VpZH0gZnJvbSAnLi4vLi4vX3V0aWxzL2d1aWRVdGlscy5qcyc7XG4vKiBAcHJlZGljdGl2ZS10ZXh0LWZvcm1hdHRlciAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhpbnQobGlzdCwgaXRlbSkge1xuICBpZiAoaXRlbS5sYWJlbCkge1xuICAgIHJldHVybiB3cmFwSXRlbShsaXN0LCBpdGVtKTtcbiAgfVxuXG4gIHJldHVybiB3cmFwU3RyaW5nKGxpc3QsIGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB3cmFwSXRlbShsaXN0LCBpdGVtKSB7XG4gIGxldCBvdXRwdXQgPSB3cmFwU3RyaW5nKGxpc3QsIGl0ZW0ubGFiZWwpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnY29tcGxleF9pdGVtJyk7XG4gIG91dHB1dC4kaXRlbSA9IGl0ZW07XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gd3JhcFN0cmluZyhsaXN0LCBzdHJpbmcpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG91dHB1dC5pZCA9IGdlbmVyYXRlR3VpZCgpO1xuICBvdXRwdXQuaW5uZXJUZXh0ID0gc3RyaW5nO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnZGVxdWUtcHJlZGljdGl2ZS10ZXh0LWhpbnQnKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcblxuICBvdXRwdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgIHNldEhpZ2hsaWdodChsaXN0LCBvdXRwdXQpO1xuICB9KTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyogZW5kIEBwcmVkaWN0aXZlLXRleHQtZm9ybWF0dGVyICovXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ByZWRpY3RpdmUtdGV4dC91dGlscy9mb3JtYXR0ZXIuanMiLCIvKiBAcHJlZGljdGl2ZS10ZXh0LW5hdmlnYXRpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRIaWdobGlnaHQobGlzdCwgaXRlbSkge1xuICBsZXQgYWxsSXRlbXMgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXRlbSA9PT0gYWxsSXRlbXNbaV0pIHtcbiAgICAgIGFsbEl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgICAgYWxsSXRlbXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxsSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICBhbGxJdGVtc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodE5leHQobGlzdCkge1xuICBpZiAobGlzdC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgbGV0IHRhcmdldDtcbiAgbGV0IGN1cnJlbnQgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKTtcbiAgaWYgKCFjdXJyZW50KSB7XG4gICAgdGFyZ2V0ID0gbGlzdC5xdWVyeVNlbGVjdG9yKCdsaScpO1xuICAgIHJldHVybiBzZXRIaWdobGlnaHQobGlzdCwgdGFyZ2V0KTtcbiAgfVxuXG4gIHRhcmdldCA9IGN1cnJlbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRhcmdldCA9IGxpc3QucXVlcnlTZWxlY3RvcignbGknKTtcbiAgfVxuXG4gIHNldEhpZ2hsaWdodChsaXN0LCB0YXJnZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0UHJldihsaXN0KSB7XG4gIGlmIChsaXN0LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICBsZXQgdGFyZ2V0O1xuICBsZXQgY3VycmVudCA9IGxpc3QucXVlcnlTZWxlY3RvcignLmhpZ2hsaWdodCcpO1xuICBpZiAoIWN1cnJlbnQpIHtcbiAgICB0YXJnZXQgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gICAgcmV0dXJuIHNldEhpZ2hsaWdodChsaXN0LCB0YXJnZXQpO1xuICB9XG5cbiAgdGFyZ2V0ID0gY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICBpZiAoIXRhcmdldCkge1xuICAgIGxldCBjaGlsZHJlbiA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICB0YXJnZXQgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIHNldEhpZ2hsaWdodChsaXN0LCB0YXJnZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJMaXN0KGxpc3QpIHtcbiAgaWYgKGxpc3QpIHtcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtVmFsdWUoaW5wdXQsIGxpc3QpIHtcbiAgbGV0IGxpID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcuaGlnaGxpZ2h0Jyk7XG4gIGlmIChsaSkge1xuICAgIGlucHV0LnZhbHVlID0gbGkuaW5uZXJUZXh0O1xuICB9XG59XG4vKiBlbmQgQHByZWRpY3RpdmUtdGV4dC1uYXZpZ2F0aW9uICovXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ByZWRpY3RpdmUtdGV4dC91dGlscy9uYXZpZ2F0aW9uLmpzIiwiaW1wb3J0IHtjcmVhdGVTaW5nbGVUYWJzdG9wU3RydWN0dXJlfSBmcm9tICcuLi9fdXRpbHMvdGFic3RvcFV0aWxzJztcbmltcG9ydCB7YWN0aXZhdGVDYXJvdXNlbENvbnRyb2xzfSBmcm9tICcuL2Nhcm91c2VsQ29udHJvbHMnO1xuaW1wb3J0IHtjcmVhdGVMaXZlUmVnaW9ufSBmcm9tICcuLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuXG4vKiBAdGFicGFuZWwgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhYnBhbmVsKHdpZGdldCwgY29uZmlnKSB7XG5cbiAgdmFyIHdpZGdldFRhYmxpc3QgPSB3aWRnZXQucXVlcnlTZWxlY3RvcignW3JvbGU9dGFibGlzdF0nKTtcbiAgd2lkZ2V0VGFibGlzdC5jbGFzc0xpc3QuYWRkKCdkZXF1ZS10YWJwYW5lbC10YWJsaXN0Jyk7XG5cbiAgdmFyIHBhdXNlID0gd2lkZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS10YWJwYW5lbC1idXR0b24tYmFyJyk7XG4gIGlmIChwYXVzZSAmJiAhcGF1c2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgIHBhdXNlLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplVGFicyh3aWRnZXQpIHtcbiAgICB2YXIgdGFicyA9IHdpZGdldC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT10YWJdJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YWJzW2ldLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLXRhYnBhbmVsLXRhYicpO1xuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICB0YWJzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIHRhYnNbaV0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGFic1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgdGFic1tpXS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHRhYnM7XG4gIH1cbiAgdmFyIHRhYnMgPSBpbml0aWFsaXplVGFicyh3aWRnZXQpO1xuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVQYW5lbHMod2lkZ2V0KSB7XG4gICAgdmFyIHBhbmVscyA9IHdpZGdldC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT10YWJwYW5lbF0nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhbmVscy5sZW5ndGg7IGkrKyl7XG4gICAgICBwYW5lbHNbaV0uY2xhc3NMaXN0LmFkZCgnZGVxdWUtdGFicGFuZWwtdGFicGFuZWwnKTtcbiAgICAgIGlmKGkgIT0gMCl7XG4gICAgICAgIHBhbmVsc1tpXS5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhbmVscztcbiAgfVxuICB2YXIgcGFuZWxzID0gaW5pdGlhbGl6ZVBhbmVscyh3aWRnZXQpO1xuXG4gIC8vIGNyZWF0ZSBhIGxpdmUgcmVnaW9uIHRvIHRvc3MgdGFiLXBhbmVsLXJlbGF0ZWQgYW5ub3VuY2VtZW50cyBpbnRvXG4gIGNvbnN0IHJlZ2lvbiA9IGNyZWF0ZUxpdmVSZWdpb24oKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZWdpb24pO1xuXG4gIHZhciBhdXRvcGxheUNvbnRyb2xzO1xuICB2YXIgYXV0b3BsYXlDb25maWc7XG4gIGlmIChjb25maWcuYXV0b3BsYXkpIHtcbiAgICBhdXRvcGxheUNvbmZpZyA9IHtcbiAgICAgIG9uUGxheTogKCkgPT4ge30sXG4gICAgICBvblBhdXNlOiAoKSA9PiB7fSxcbiAgICAgIG9uTmV4dDogKCkgPT4ge1xuICAgICAgICB2YXIgbmV4dFRhYiA9IGdldE5leHQoZ2V0Q3VycmVudFRhYih0YWJzKSk7XG4gICAgICAgIHNlbGVjdFRhYihuZXh0VGFiLCB0YWJzLCBwYW5lbHMpO1xuICAgICAgICByZWdpb24ubm90aWZ5KG5leHRUYWIuaW5uZXJUZXh0ICsgJ3RhYicpO1xuICAgICAgfSxcbiAgICAgIG9uUHJldmlvdXM6ICgpID0+IHtcbiAgICAgICAgdmFyIHByZXZpb3VzVGFiID0gZ2V0UHJldihnZXRDdXJyZW50VGFiKHRhYnMpKTtcbiAgICAgICAgc2VsZWN0VGFiKHByZXZpb3VzVGFiLCB0YWJzLCBwYW5lbHMpO1xuICAgICAgICByZWdpb24ubm90aWZ5KHByZXZpb3VzVGFiLmlubmVyVGV4dCArICd0YWInKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYXV0b3BsYXlDb250cm9scyA9IGFjdGl2YXRlQ2Fyb3VzZWxDb250cm9scyh3aWRnZXQsIHJlZ2lvbiwgYXV0b3BsYXlDb25maWcsIGNvbmZpZy5hdXRvcGxheSB8fCAzMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdFRhYihzZWxlY3RlZFRhYiwgdGFicywgcGFuZWxzKSB7XG4gICAgdmFyIHNlbGVjdGVkVGFiTGFiZWxlZEJ5ID0gc2VsZWN0ZWRUYWIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBhbmVsc1tpXS5pZCA9PT0gc2VsZWN0ZWRUYWJMYWJlbGVkQnkpIHtcbiAgICAgICAgcGFuZWxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2RlcXVlLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWxzW2ldLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGFicy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHRhYnNbal0uZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJykgPT09IHNlbGVjdGVkVGFiTGFiZWxlZEJ5KSB7XG4gICAgICAgIHRhYnNbal0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIHRhYnNbal0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRhYnNbal0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB0YWJzW2pdLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5TmF2aWdhdGlvbkxvZ2ljKHRhYnMsIHBhbmVscywge2F1dG9zZWxlY3QsIHZlcnRpY2FsfSkge1xuXG4gICAgbGV0IHRhYnN0b3BDb25maWcgPSB7XG4gICAgICBvblNwYWNlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFRhYkxhYmVsZWRCeSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFuZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHBhbmVsc1tpXS5pZCA9PT0gc2VsZWN0ZWRUYWJMYWJlbGVkQnkpIHtcbiAgICAgICAgICAgIHBhbmVsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkZXF1ZS1oaWRkZW4nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFuZWxzW2ldLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWhpZGRlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkVGFiTGFiZWxlZEJ5ID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYW5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocGFuZWxzW2ldLmlkID09PSBzZWxlY3RlZFRhYkxhYmVsZWRCeSkge1xuICAgICAgICAgICAgcGFuZWxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2RlcXVlLWhpZGRlbicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYW5lbHNbaV0uY2xhc3NMaXN0LmFkZCgnZGVxdWUtaGlkZGVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VsZWN0OiBzZWxlY3RUYWIsXG4gICAgICB1c2VBcmlhU2VsZWN0ZWQ6IHRydWUsXG4gICAgICBhdXRvc2VsZWN0XG4gICAgfTtcblxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgdGFic3RvcENvbmZpZy5vblVwID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoYXV0b3BsYXlDb250cm9scykge1xuICAgICAgICAgIGF1dG9wbGF5Q29udHJvbHMucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQcmV2KGl0ZW0pO1xuICAgICAgfTtcblxuICAgICAgdGFic3RvcENvbmZpZy5vbkRvd24gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGlmIChhdXRvcGxheUNvbnRyb2xzKSB7XG4gICAgICAgICAgYXV0b3BsYXlDb250cm9scy5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldE5leHQoaXRlbSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzdG9wQ29uZmlnLm9uTGVmdCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGF1dG9wbGF5Q29udHJvbHMpIHtcbiAgICAgICAgICBhdXRvcGxheUNvbnRyb2xzLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UHJldihpdGVtKTtcbiAgICAgIH07XG5cbiAgICAgIHRhYnN0b3BDb25maWcub25SaWdodCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGF1dG9wbGF5Q29udHJvbHMpIHtcbiAgICAgICAgICBhdXRvcGxheUNvbnRyb2xzLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0TmV4dChpdGVtKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlU2luZ2xlVGFic3RvcFN0cnVjdHVyZSh0YWJzLCBwYW5lbHMsIHRhYnN0b3BDb25maWcpO1xuICB9XG5cbiAgYXBwbHlOYXZpZ2F0aW9uTG9naWModGFicywgcGFuZWxzLCBjb25maWcpO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUYWIodGFicyl7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGFic1tpXS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPT09ICcwJyApe1xuICAgICAgICByZXR1cm4gdGFic1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcmV2KGl0ZW0pIHtcbiAgICBsZXQgb3V0cHV0ID0gaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8IHRhYnNbdGFicy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmV4dChpdGVtKSB7XG4gICAgbGV0IG91dHB1dCA9ICBpdGVtLm5leHRFbGVtZW50U2libGluZyB8fCB0YWJzWzBdO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFsbFRhYnBhbmVscygpIHtcbiAgdmFyIHdpZGdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtdGFicGFuZWwnKTtcbiAgdmFyIGNvbmZpZztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHdpZGdldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZih3aWRnZXRzW2ldLmlkID09ICdjYXJvdXNlbCcpe1xuICAgICAgY29uZmlnID0ge1xuICAgICAgICBhdXRvc2VsZWN0OiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogMzAwMFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0ge1xuICAgICAgICBhdXRvc2VsZWN0OiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGNyZWF0ZVRhYnBhbmVsKHdpZGdldHNbaV0sIGNvbmZpZyk7XG4gIH1cbn1cblxuaW5pdGlhbGl6ZUFsbFRhYnBhbmVscygpO1xuLyogZW5kIEB0YWJwYW5lbCAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYnBhbmVsL2luZGV4LmpzIiwiaW1wb3J0ICogYXMga2IgZnJvbSAnLi9rZXlib2FyZFV0aWxzJztcbi8qIEB0YWJzdG9wVXRpbHMgKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaW5nbGVUYWJzdG9wU3RydWN0dXJlKHRhYnNOTCwgcGFuZWxzLCBjb25maWcpIHtcbiAgdmFyIHRhYnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YWJzTkwpO1xuICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlnLm9uRm9jdXMpIHtcbiAgICAgICAgY29uZmlnLm9uRm9jdXModGFiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghY29uZmlnLnNlbGVjdCkge1xuICAgICAgY29uZmlnLnNlbGVjdCA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25DbGljaykge1xuICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25maWcub25DbGljayh0YWIpO1xuICAgICAgICBjb25maWcuc2VsZWN0KHRhYiwgdGFicywgcGFuZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25TcGFjZSkge1xuICAgICAga2Iub25FbGVtZW50U3BhY2UodGFiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbmZpZy5vblNwYWNlKHRhYik7XG4gICAgICAgIGNvbmZpZy5zZWxlY3QodGFiLCB0YWJzLCBwYW5lbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vbkxlZnQpIHtcbiAgICAgIGtiLm9uRWxlbWVudExlZnQodGFiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IHRhcmdldCA9IGNvbmZpZy5vbkxlZnQodGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUmlnaHQpIHtcbiAgICAgIGtiLm9uRWxlbWVudFJpZ2h0KHRhYiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gY29uZmlnLm9uUmlnaHQodGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uVXApIHtcbiAgICAgIGtiLm9uRWxlbWVudFVwKHRhYiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gY29uZmlnLm9uVXAodGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uRG93bikge1xuICAgICAga2Iub25FbGVtZW50RG93bih0YWIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGNvbmZpZy5vbkRvd24odGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uSG9tZSkge1xuICAgICAga2Iub25FbGVtZW50SG9tZSh0YWIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGNvbmZpZy5vbkhvbWUodGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uRW5kKSB7XG4gICAgICBrYi5vbkVsZW1lbnRFbmQodGFiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBjb25maWcub25FbmQodGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUGFnZVVwKSB7XG4gICAgICBrYi5vbkVsZW1lbnRQYWdlVXAodGFiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBjb25maWcub25QYWdlVXAodGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUGFnZURvd24pIHtcbiAgICAgIGtiLm9uRWxlbWVudFBhZ2VEb3duKHRhYiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gY29uZmlnLm9uUGFnZURvd24odGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uQ2hhcmFjdGVyKSB7XG4gICAgICBrYi5vbkVsZW1lbnRDaGFyYWN0ZXIodGFiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBjb25maWcub25DaGFyYWN0ZXIodGFiKTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgIGlmIChjb25maWcuYXV0b3NlbGVjdCkge1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdCh0YXJnZXQsIHRhYnMsIHBhbmVscyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuLyogZW5kIEB0YWJzdG9wVXRpbHMgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fdXRpbHMvdGFic3RvcFV0aWxzLmpzIiwiaW1wb3J0IHtjcmVhdGVMaXZlUmVnaW9ufSBmcm9tICcuLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuLyogQHRhYnBhbmVsLWNhcm91c2VsQ29udHJvbHMgKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihsYWJlbCwgY2xhc3NlcyA9IFtdKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgb3V0cHV0LmlubmVyVGV4dCA9IGxhYmVsO1xuICBjbGFzc2VzLmZvckVhY2goYyA9PiBvdXRwdXQuY2xhc3NMaXN0LmFkZChjKSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENhcm91c2VsQ29udHJvbHMoe29uUGxheSwgb25QYXVzZSwgb25OZXh0LCBvblByZXZpb3VzfSwgZHVyYXRpb24gPSAyMDAwKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3V0cHV0LmNsYXNzTmFtZSA9ICdvdXRwdXQtd3JhcCc7XG4gIGxldCBwcmV2QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdwcmV2JywgWydwcmV2J10pO1xuICBsZXQgcGxheUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncGxheScsIFsncGxheScsICdoaWRkZW4nXSk7XG4gIGxldCBwYXVzZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncGF1c2UnLCBbJ3BhdXNlJ10pO1xuICBsZXQgbmV4dEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignbmV4dCcsIFsnbmV4dCddKTtcblxuICAvLyBjcmVhdGUgYSBsaXZlIHJlZ2lvbiB0byB0b3NzIHRhYi1wYW5lbC1yZWxhdGVkIGFubm91bmNlbWVudHMgaW50b1xuICBjb25zdCByZWdpb24gPSBjcmVhdGVMaXZlUmVnaW9uKCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVnaW9uKTtcblxuICBsZXQgcGxheUludGVydmFsLCBjYWxsZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdGFydFBsYXlpbmcgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXlJbnRlcnZhbCkgeyBzdG9wUGxheWluZygpOyB9XG4gICAgcGxheUludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dCwgZHVyYXRpb24pO1xuICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcGF1c2VCdXR0b24uZm9jdXMoKTtcbiAgICBpZiAob25QbGF5KSB7IG9uUGxheSgpOyB9XG4gICAgcmVnaW9uLm5vdGlmeSgnQ2Fyb3VzZWwgcGxheWluZycpO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BQbGF5aW5nID0gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwocGxheUludGVydmFsKTtcbiAgICBwbGF5SW50ZXJ2YWwgPSBudWxsO1xuICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgaWYgKGNhbGxlZCkgeyBwbGF5QnV0dG9uLmZvY3VzKCk7IH1cbiAgICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBpZiAob25QYXVzZSkgeyBvblBhdXNlKCk7IH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIHJlZ2lvbi5ub3RpZnkoJ0Nhcm91c2VsIHBhdXNlZCcpO1xuICB9O1xuXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgaWYgKG9uTmV4dCkgeyBvbk5leHQoKTsgfVxuICB9O1xuXG4gIGNvbnN0IHByZXYgPSAoKSA9PiB7XG4gICAgaWYgKG9uUHJldmlvdXMpIHsgb25QcmV2aW91cygpOyB9XG4gIH07XG5cbiAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHQpO1xuICBwcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldik7XG4gIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydFBsYXlpbmcpO1xuICBwYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3BQbGF5aW5nKTtcblxuICBvdXRwdXQuYXBwZW5kQ2hpbGQocHJldkJ1dHRvbik7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKHBhdXNlQnV0dG9uKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xuXG4gIHN0YXJ0UGxheWluZygpO1xuXG4gIG91dHB1dC5zdGFydCA9IHN0YXJ0UGxheWluZztcbiAgb3V0cHV0LnBhdXNlID0gc3RvcFBsYXlpbmc7XG4gIG91dHB1dC5wcmV2ID0gcHJldjtcbiAgb3V0cHV0Lm5leHQgPSBuZXh0O1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVDYXJvdXNlbENvbnRyb2xzKHdpZGdldCwgcmVnaW9uLCB7b25QbGF5LCBvblBhdXNlLCBvbk5leHQsIG9uUHJldmlvdXN9LCBkdXJhdGlvbiA9IDIwMDApIHtcbiAgdmFyIG91dHB1dCA9IHdpZGdldC5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtdGFicGFuZWwtYnV0dG9uLWJhcicpO1xuICB2YXIgYnV0dG9ucyA9IG91dHB1dC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtYnV0dG9uJyk7XG4gIHZhciBwcmV2QnV0dG9uO1xuICB2YXIgcGxheUJ1dHRvbjtcbiAgdmFyIHBhdXNlQnV0dG9uO1xuICB2YXIgbmV4dEJ1dHRvbjtcblxuICBmb3IodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKyl7XG4gICAgaWYgKGJ1dHRvbnNbaV0uaWQgPT0gJ3ByZXZCdXR0b24nKXtcbiAgICAgIHByZXZCdXR0b24gPSBidXR0b25zW2ldO1xuICAgIH1lbHNlIGlmKGJ1dHRvbnNbaV0uaWQgPT0gJ3BsYXlCdXR0b24nKXtcbiAgICAgIHBsYXlCdXR0b24gPSBidXR0b25zW2ldO1xuICAgIH1lbHNlIGlmKGJ1dHRvbnNbaV0uaWQgPT0gJ3BhdXNlQnV0dG9uJyl7XG4gICAgICBwYXVzZUJ1dHRvbiA9IGJ1dHRvbnNbaV07XG4gICAgfWVsc2UgaWYoYnV0dG9uc1tpXS5pZCA9PSAnbmV4dEJ1dHRvbicpe1xuICAgICAgbmV4dEJ1dHRvbiA9IGJ1dHRvbnNbaV07XG4gICAgfVxuICB9XG5cbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1oaWRkZW4nKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkZXF1ZS1idXR0b24nKTtcblxuICBsZXQgcGxheUludGVydmFsID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhcnRQbGF5aW5nID0gKCkgPT4ge1xuICAgIGlmIChwbGF5SW50ZXJ2YWwpIHsgc3RvcFBsYXlpbmcoKTsgfVxuICAgIHBsYXlJbnRlcnZhbCA9IHNldEludGVydmFsKG5leHQsIGR1cmF0aW9uKTtcbiAgICBwbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLWhpZGRlbicpO1xuICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtYnV0dG9uJyk7XG4gICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtaGlkZGVuJyk7XG4gICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVxdWUtYnV0dG9uJyk7XG4gICAgcGF1c2VCdXR0b24uZm9jdXMoKTtcbiAgICBpZiAob25QbGF5KSB7IG9uUGxheSgpOyB9XG4gICAgcmVnaW9uLm5vdGlmeSgnQ2Fyb3VzZWwgcGxheWluZycpO1xuICB9O1xuXG4gIGNvbnN0IHN0b3BQbGF5aW5nID0gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwocGxheUludGVydmFsKTtcbiAgICBwbGF5SW50ZXJ2YWwgPSBudWxsO1xuICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtaGlkZGVuJyk7XG4gICAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1idXR0b24nKTtcbiAgICBwbGF5QnV0dG9uLmZvY3VzKCk7XG4gICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVxdWUtaGlkZGVuJyk7XG4gICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGVxdWUtYnV0dG9uJyk7XG4gICAgaWYgKG9uUGF1c2UpIHsgb25QYXVzZSgpOyB9XG5cbiAgICByZWdpb24ubm90aWZ5KCdDYXJvdXNlbCBwYXVzZWQnKTtcbiAgfTtcblxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgIGlmIChvbk5leHQpIHsgb25OZXh0KCk7IH1cbiAgfTtcblxuICBjb25zdCBwcmV2ID0gKCkgPT4ge1xuICAgIGlmIChvblByZXZpb3VzKSB7IG9uUHJldmlvdXMoKTsgfVxuICB9O1xuXG4gIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0KTtcbiAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXYpO1xuICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRQbGF5aW5nKTtcbiAgcGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUGxheWluZyk7XG5cbiAgc3RhcnRQbGF5aW5nKCk7XG5cbiAgb3V0cHV0LnN0YXJ0ID0gc3RhcnRQbGF5aW5nO1xuICBvdXRwdXQucGF1c2UgPSBzdG9wUGxheWluZztcbiAgb3V0cHV0LnByZXYgPSBwcmV2O1xuICBvdXRwdXQubmV4dCA9IG5leHQ7XG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKiBlbmQgQHRhYnBhbmVsLWNhcm91c2VsQ29udHJvbHMgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YWJwYW5lbC9jYXJvdXNlbENvbnRyb2xzLmpzIiwiLypcblRPIERPOlxuLSBhZGQgXCJTdGFydCBQcm9ncmVzc2JhclwiIGJ1dHRvbiB0byBib3VuZGVkIGFuZFxudW5ib3VuZGVkIHByb2dyZXNzYmFyIGluIHRoZSBIVE1MLCBhbmQgZ2l2ZSB0aGVtXG5mdW5jdGlvbmFsaXR5IGluIHRoZSBwYWdlLXNwZWNpZmljIEpTIGluaXRpYWxpemF0aW9uIGNvZGVcbi0gYWRkIFwiUmVzZXRcIiBidXR0b24gdG8gdW5ib3VuZGVkIHByb2dyZXNzYmFyXG4tIHNlcGFyYXRlIHRoZSBsYWJlbGluZyAoYXJpYS1sYWJlbCkgYW5kIGRlc2NyaXB0aW9uXG4oYXJpYS1kZXNjcmliZWRieSkgZnJvbSB0aGUgSlMuIFB1dCBpdCBpbiB0aGUgaW5pdGlhbFxuSFRNTCBtYXJrdXAgaW5zdGVhZC5cbiovXG5cbi8qIEBwcm9ncmVzc2JhciAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NCYXIocHJvZ3Jlc3NCYXIsIHtib3VuZGVkID0gZmFsc2V9KSB7XG4gIGlmIChib3VuZGVkKSB7XG4gICAgdmFyIG1pblZhbHVlID0gcHJvZ3Jlc3NCYXIuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWluJyk7XG4gICAgdmFyIG1heFZhbHVlID0gcHJvZ3Jlc3NCYXIuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWF4Jyk7XG4gICAgcHJvZ3Jlc3NCYXIuc2V0QXR0cmlidXRlKCd2YWx1ZS1ub3cnLCBtaW5WYWx1ZSk7XG4gICAgcHJvZ3Jlc3NCYXIuc2V0QXR0cmlidXRlKCdtYXgnLCBtYXhWYWx1ZSk7XG4gICAgcHJvZ3Jlc3NCYXIuc2V0VmFsdWUgPSBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAodiA8IG1pblZhbHVlKSB7XG4gICAgICAgIHYgPSBtaW5WYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHYgPiBtYXhWYWx1ZSkge1xuICAgICAgICB2ID0gbWF4VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwZXJjZW50ID0gcGFyc2VJbnQoKHYgLyBtYXhWYWx1ZSkgKiAxMDApO1xuXG4gICAgICBwcm9ncmVzc0Jhci5pbm5lclRleHQgPSBwZXJjZW50ICsgJyUnO1xuICAgICAgcHJvZ3Jlc3NCYXIuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93Jywgdik7XG4gICAgICBwcm9ncmVzc0Jhci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlLW5vdycsIHYpO1xuICAgICAgcHJvZ3Jlc3NCYXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHYpO1xuICAgIH07XG4gICAgcHJvZ3Jlc3NCYXIuc2V0VmFsdWUobWluVmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9ncmVzc0Jhcjtcbn1cbi8qIGVuZCBAcHJvZ3Jlc3NiYXIgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9ncmVzc0Jhci9pbmRleC5qcyIsImltcG9ydCB7aXNEZXRhaWxzU3VwcG9ydGVkfSBmcm9tICcuL2lzRGV0YWlsc1N1cHBvcnRlZCc7XG5pbXBvcnQgaXNJT1MgZnJvbSAnLi9pc0lPUyc7XG5pbXBvcnQge29uRWxlbWVudFNwYWNlLCBvbkVsZW1lbnRFbnRlcn0gZnJvbSAnLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuLyogQGV4cGFuZGVyICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFeHBhbmRlcihjb250YWluZXIpIHtcbiAgdmFyIGNvbnRhaW5lclRhZyA9IGNvbnRhaW5lci50YWdOYW1lO1xuICBpZiAoY29udGFpbmVyVGFnID09ICdERVRBSUxTJykge1xuICAgIGlmIChpc0RldGFpbHNTdXBwb3J0ZWQoKSAmJiAhaXNJT1MoKSkge1xuICAgICAgcmV0dXJuIGh0bWw1VmVyc2lvbihjb250YWluZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sNFZlcnNpb24oY29udGFpbmVyKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGh0bWw0VmVyc2lvbihjb250YWluZXIpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gaHRtbDVWZXJzaW9uKGNvbnRhaW5lcikge1xuICB2YXIgc3VtbWFyeSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZXhwYW5kZXItc3VtbWFyeScpO1xuICBpZihzdW1tYXJ5Lmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCdmYWxzZScpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1leHBhbmRlcicpO1xuICBpZiAoY29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpKSB7XG4gICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgfSBlbHNlIHtcbiAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgfVxuXG4gIC8vIGl0IHdvdWxkIHNlZW0gdGhhdCBicm93c2VycyB0cmVhdCB0aGUgPHN1bW1hcnk+XG4gIC8vIGVsZW1lbnQgYXMgaWYgaXQgd2VyZSBhIGJ1dHRvbiwgaS5lLiBhdXRvbWFnaWNhbGx5XG4gIC8vIHRyZWF0IHNwYWNlIGFuZCBlbnRlciBhcyAnY2xpY2snIGV2ZW50cy5cbiAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgZnVuY3Rpb24gc2V0T3BlblN0YXR1cygpIHtcbiAgICBpZiAoY29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpKSB7XG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxuICB9XG5cbiAgc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KHNldE9wZW5TdGF0dXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaHRtbDRWZXJzaW9uKGNvbnRhaW5lcikge1xuICB2YXIgY29udGFpbmVyVGFnID0gY29udGFpbmVyLnRhZ05hbWU7XG4gIHZhciBzdW1tYXJ5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZXF1ZS1leHBhbmRlci1zdW1tYXJ5Jyk7XG4gIGlmKHN1bW1hcnkuaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoY29udGFpbmVyVGFnID09ICdERVRBSUxTJykge1xuICAgIC8qIGNvbnZlcnQgc3VtbWFyeSBlbGVtZW50IHRvIGRpdiAqL1xuICAgIHZhciBuZXdTdW1tYXJ5ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBzdW1tYXJ5Tm9kZXM9W10sIHN1bW1hcnlWYWx1ZXM9W107ICAvL2NvbGxlY3RzIHRoZSBuYW1lcyBhbmQgdmFsdWVzIG9mIHRoZSBzdW1tYXJ5IGF0dHJpYnV0ZXMgaW50byB0d28gYXJyYXlzXG4gICAgZm9yICh2YXIgYXR0LCBpID0gMCwgYXR0cyA9IHN1bW1hcnkuYXR0cmlidXRlcywgbiA9IGF0dHMubGVuZ3RoOyBpIDwgbjsgaSsrKXtcbiAgICAgIGF0dCA9IGF0dHNbaV07XG4gICAgICBzdW1tYXJ5Tm9kZXMucHVzaChhdHQubm9kZU5hbWUpO1xuICAgICAgc3VtbWFyeVZhbHVlcy5wdXNoKGF0dC5ub2RlVmFsdWUpO1xuICAgIH1cbiAgICBmb3IodmFyIHggPSAwOyB4IDwgc3VtbWFyeU5vZGVzLmxlbmd0aDsgeCsrKXtcbiAgICAgIG5ld1N1bW1hcnkuc2V0QXR0cmlidXRlKHN1bW1hcnlOb2Rlc1t4XSwgc3VtbWFyeVZhbHVlc1t4XSk7IC8vcHV0cyB0aGUgc3VtbWFyeSBhdHRyaWJ1dGVzIG9udG8gdGhlIG5ld2x5IGNyZWF0ZWQgZGl2XG4gICAgfVxuICAgIG5ld1N1bW1hcnkuY2xhc3NMaXN0LmFkZCgnZGVxdWUtZXhwYW5kZXItc3VtbWFyeScpO1xuICAgIG5ld1N1bW1hcnkuaW5uZXJIVE1MID0gc3VtbWFyeS5pbm5lckhUTUw7XG4gICAgc3VtbWFyeS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTdW1tYXJ5LCBzdW1tYXJ5KTtcblxuICAgIC8qIGNvbnZlcnQgZGV0YWlscyBlbGVtZW50IHRvIGRpdiAqL1xuICAgIHZhciBuZXdDb250YWluZXIgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGRldGFpbHNOb2Rlcz1bXSwgZGV0YWlsc1ZhbHVlcz1bXTsgIC8vY29sbGVjdHMgdGhlIG5hbWVzIGFuZCB2YWx1ZXMgb2YgdGhlIGRldGFpbHMgYXR0cmlidXRlcyBpbnRvIHR3byBhcnJheXNcbiAgICBmb3IgKHZhciBhdHRDb250YWluZXIsIGogPSAwLCBhdHRzQ29udGFpbmVyID0gY29udGFpbmVyLmF0dHJpYnV0ZXMsIG0gPSBhdHRzQ29udGFpbmVyLmxlbmd0aDsgaiA8IG07IGorKyl7XG4gICAgICBhdHRDb250YWluZXIgPSBhdHRzQ29udGFpbmVyW2pdO1xuICAgICAgZGV0YWlsc05vZGVzLnB1c2goYXR0Q29udGFpbmVyLm5vZGVOYW1lKTtcbiAgICAgIGRldGFpbHNWYWx1ZXMucHVzaChhdHRDb250YWluZXIubm9kZVZhbHVlKTtcbiAgICB9XG4gICAgZm9yKHZhciB5ID0gMDsgeSA8IGRldGFpbHNOb2Rlcy5sZW5ndGg7IHkrKyl7XG4gICAgICBuZXdDb250YWluZXIuc2V0QXR0cmlidXRlKGRldGFpbHNOb2Rlc1t5XSwgZGV0YWlsc1ZhbHVlc1t5XSk7IC8vcHV0cyB0aGUgZGV0YWlscyBhdHRyaWJ1dGVzIG9udG8gdGhlIG5ld2x5IGNyZWF0ZWQgZGl2XG4gICAgfVxuICAgIG5ld0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1leHBhbmRlcicpO1xuICAgIG5ld0NvbnRhaW5lci5pbm5lckhUTUwgPSBjb250YWluZXIuaW5uZXJIVE1MO1xuICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdDb250YWluZXIsIGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyID0gbmV3Q29udGFpbmVyO1xuICAgIHN1bW1hcnkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlcXVlLWV4cGFuZGVyLXN1bW1hcnknKTtcbiAgfVxuICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJyk7XG4gIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdyb2xlJywnYnV0dG9uJyk7XG5cbiAgdmFyIGNvbnRlbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlcXVlLWV4cGFuZGVyLWNvbnRlbnQnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdkZXF1ZS1oaWRkZW4nKTtcblxuICBcblxuICBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHZhciBtc2llID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcbiAgICB2YXIgbXNlZGdlID0gdWEuaW5kZXhPZignRWRnZScpO1xuICAgIGlmKG1zaWUgPiAwIHx8IG1zZWRnZSA+IDApIHtcbiAgICAgIHdpbmRvdy5vbmtleWRvd24gPSBmdW5jdGlvbihlKSB7IFxuICAgICAgICByZXR1cm4gIShlLmtleUNvZGUgPT0gMzIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2RlcXVlLWhpZGRlbicpO1xuICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnZGVxdWUtaGlkZGVuJykpIHtcbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB9XG4gIH1cblxuICBvbkVsZW1lbnRFbnRlcihzdW1tYXJ5LCB0b2dnbGUpO1xuICBvbkVsZW1lbnRTcGFjZShzdW1tYXJ5LCB0b2dnbGUpO1xuICBzdW1tYXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcbiAgc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpe1xuICAgIGlmKGUua2V5Q29kZSA9PSAzMikge1xuICAgICAgLy90b2dnbGUoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVBbGxFeHBhbmRlcnMoKSB7XG4gIHZhciBleHBhbmRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtZXhwYW5kZXInKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBhbmRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZihleHBhbmRlcnNbaV0pIHtcbiAgICAgIGlmKGV4cGFuZGVyc1tpXS5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5JykpIHtcbiAgICAgICAgaWYoIShleHBhbmRlcnNbaV0ucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpKSl7XG4gICAgICAgICAgY3JlYXRlRXhwYW5kZXIoZXhwYW5kZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihleHBhbmRlcnNbaV0ucXVlcnlTZWxlY3RvcignLmRlcXVlLWV4cGFuZGVyLXN1bW1hcnknKSkge1xuICAgICAgICBpZighKGV4cGFuZGVyc1tpXS5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZXhwYW5kZXItc3VtbWFyeScpLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpKSl7XG4gICAgICAgICAgY3JlYXRlRXhwYW5kZXIoZXhwYW5kZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgaWYoIShleHBhbmRlcnNbaV0ucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpKSB8fCAhKGV4cGFuZGVyc1tpXS5xdWVyeVNlbGVjdG9yKCcuZGVxdWUtZXhwYW5kZXItc3VtbWFyeScpLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaWFtIGluIGluJyk7XG4gICAgICAgIGNyZWF0ZUV4cGFuZGVyKGV4cGFuZGVyc1tpXSk7XG4gICAgICB9XG4gICAgICAqL1xuICAgIH1cbiAgfVxufVxuXG5hY3RpdmF0ZUFsbEV4cGFuZGVycygpO1xuLyogZW5kIEBleHBhbmRlciAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V4cGFuZGVyL2luZGV4LmpzIiwiLyogQGV4cGFuZGVyLWlzRGV0YWlsc1N1cHBvcnRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGV0YWlsc1N1cHBvcnRlZCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGV0YWlscycpO1xuICB2YXIgZGlmZjtcblxuICAvLyByZXR1cm4gZWFybHkgaWYgcG9zc2libGU7IHRoYW5rcyBAYUZhcmthcyFcbiAgaWYgKCEoJ29wZW4nIGluIGVsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICBlbC5pbm5lckhUTUwgPSAnPHN1bW1hcnk+YTwvc3VtbWFyeT5iJztcbiAgZGlmZiA9IGVsLm9mZnNldEhlaWdodDtcbiAgZWwub3BlbiA9IHRydWU7XG4gIGRpZmYgPSBkaWZmICE9IGVsLm9mZnNldEhlaWdodDtcblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcblxuICByZXR1cm4gZGlmZjtcbn1cbi8qIGVuZCBAZXhwYW5kZXItaXNEZXRhaWxzU3VwcG9ydGVkICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhwYW5kZXIvaXNEZXRhaWxzU3VwcG9ydGVkLmpzIiwiLyogQGV4cGFuZGVyLWlzSU9TICovXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xufTtcbi8qIGVuZCBAZXhwYW5kZXItaXNJT1MgKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhwYW5kZXIvaXNJT1MuanMiLCJpbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJy4uL191dGlscy9zZWxlY3Rpb25VdGlscyc7XG5pbXBvcnQgKiBhcyBkZWZhdWx0VmFsaWRhdG9ycyBmcm9tICcuL3ZhbGlkYXRvcnMvZGVmYXVsdCc7XG5pbXBvcnQge2dldFZhbGlkYXRpb25GdW5jdGlvbiwgZ2V0VmFsaWRhdGlvbkVycm9yc30gZnJvbSAnLi92YWxpZGF0aW9uJztcbmltcG9ydCBjcmVhdGVUb29sdGlwIGZyb20gJy4uL3Rvb2x0aXAnO1xuaW1wb3J0IHt3aXJldXBQYXNzd29yZEV2YWx1YXRvcn0gZnJvbSAnLi9iZWhhdmlvci9wYXNzd29yZCc7XG5pbXBvcnQge3dpcmV1cE1heExlbmd0aE5vdGlmaWNhdGlvbnN9IGZyb20gJy4vYmVoYXZpb3IvdGV4dCc7XG5pbXBvcnQge2NyZWF0ZUZlZWRiYWNrQXJlYX0gZnJvbSAnLi9jb21wb25lbnRzL2ZlZWRiYWNrQXJlYSc7XG4vKiBAZm9ybVZhbGlkYXRpb24gKi9cbmNvbnN0IEZFRURCQUNLX1RZUEVTID0ge1xuICBUT1A6ICd0b3AnLFxuICBJTkxJTkU6ICdpbmxpbmUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVGb3JtVmFsaWRhdGlvbihmb3JtLCBjb25maWcpIHtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsICd0cnVlJyk7XG5cbiAgbGV0IGZlZWRiYWNrVHlwZSA9IGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWZlZWRiYWNrLXR5cGUnKSB8fCBGRUVEQkFDS19UWVBFUy5UT1A7XG5cbiAgbGV0IGZlZWRiYWNrQXJlYSA9IGNyZWF0ZUZlZWRiYWNrQXJlYSgpO1xuICBmb3JtLmluc2VydEJlZm9yZShmZWVkYmFja0FyZWEsIGZvcm0uY2hpbGRyZW5bMF0pO1xuXG4gIGxldCBwYXNzd29yZElucHV0cyA9IHF1ZXJ5QWxsKCdbdHlwZT1cInBhc3N3b3JkXCJdJywgZm9ybSk7XG4gIGlmIChjb25maWcucGFzc3dvcmRFdmFsdWF0b3IgJiYgcGFzc3dvcmRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgIHdpcmV1cFBhc3N3b3JkRXZhbHVhdG9yKHBhc3N3b3JkSW5wdXRzLCBjb25maWcucGFzc3dvcmRFdmFsdWF0b3IsIGZ1bmN0aW9uKG1lc3NhZ2UsIGlkLCBjbGFzc2VzKSB7XG4gICAgICBmZWVkYmFja0FyZWEubG9nTm90aWZpY2F0aW9uKG1lc3NhZ2UsIGlkLCBjbGFzc2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBtYXhjaGFyc0lucHV0cyA9IHF1ZXJ5QWxsKCdbbWF4bGVuZ3RoXScsIGZvcm0pO1xuXG4gIGlmIChtYXhjaGFyc0lucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgd2lyZXVwTWF4TGVuZ3RoTm90aWZpY2F0aW9ucyhtYXhjaGFyc0lucHV0cywgZnVuY3Rpb24obWVzc2FnZSwgaWQsIGNsYXNzZXMpIHtcbiAgICAgIGZlZWRiYWNrQXJlYS5sb2dOb3RpZmljYXRpb24obWVzc2FnZSwgaWQsIGNsYXNzZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IHZhbGlkYXRvcnMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIGRlZmF1bHRWYWxpZGF0b3JzKTtcblxuICBmdW5jdGlvbiBub3RpZnlTdWNjZXNzKCkge1xuICAgIGZlZWRiYWNrQXJlYS5jbGVhcigpO1xuICAgIGZlZWRiYWNrQXJlYS5sb2dOb3RpZmljYXRpb24oJ0Zvcm0gc3VibWlzc2lvbiBzdWNjZXNzZnVsJywgJ3N1Y2Nlc3NSZXBvcnQnLCBbJ3N1Y2Nlc3MnXSk7XG4gICAgLy8gQmVsb3cgd2FzIGFkZGVkIGJ5IFBhdWw6XG4gICAgdmFyIGVycm9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Vycm9yRXhwbGFuYXRpb25PdXRlcldyYXBwZXInKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgZXJyb3JzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXJyb3JzW2ldKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlGYWlsdXJlKGVycm9ycykge1xuICAgIGZlZWRiYWNrQXJlYS5jbGVhcigpO1xuICAgIGlmIChmZWVkYmFja1R5cGUgPT09IEZFRURCQUNLX1RZUEVTLlRPUCkge1xuICAgICAgLyogdGhlIGNvZGUgYmVsb3cgd2FzIGFkZGVkIGJ5IFBhdWwgQm9obWFuICovXG4gICAgICB2YXIgcGx1cmFsID0gJ2lzJztcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGx1cmFsID0gJ2FyZSc7XG4gICAgICAgIHMgPSAncyc7XG4gICAgICB9XG4gICAgICBmZWVkYmFja0FyZWEubG9nTm90aWZpY2F0aW9uKCc8aDQ+PHN0cm9uZz5FcnJvcjo8L3N0cm9uZz4gVGhlcmUgJyArIHBsdXJhbCArICcgJyArIGVycm9ycy5sZW5ndGggKyAnIHByb2JsZW0nICsgcyArICcgdG8gZml4IGluIHRoaXMgZm9ybTwvaDQ+Jyk7XG4gICAgICBlcnJvcnMuZm9yRWFjaChtID0+IGZlZWRiYWNrQXJlYS5sb2dOb3RpZmljYXRpb24obSwgbnVsbCwgWydlcnJvciddKSk7XG4gICAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgdGhpc0lucHV0ID0gaW5wdXRzW2ldO1xuICAgICAgICBpZiAodGhpc0lucHV0LmdldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJykpIHtcbiAgICAgICAgICB2YXIgZmFpbGVkUmVxdWlyZSA9IHRoaXNJbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLXJlcXVpcmUnKTtcbiAgICAgICAgICB2YXIgZmFpbGVkUGF0dGVybiA9IHRoaXNJbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLXBhdHRlcm4nKTtcbiAgICAgICAgICB2YXIgZGVzY3JpYmVkQnlPcmlnaW5hbCA9IHRoaXNJbnB1dC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgICAgICB2YXIgaW5wdXRJZCA9IHRoaXNJbnB1dC5pZDtcbiAgICAgICAgICBpZiAoZmFpbGVkUmVxdWlyZSB8fCBmYWlsZWRQYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgZGVzY0lkID0gJ2Vycm9yRXhwbGFuYXRpb24tJyArIGlucHV0SWQ7XG4gICAgICAgICAgICB2YXIgZGVzY3JpYmVkQnkgPSBkZXNjSWQ7XG4gICAgICAgICAgICBpZihkZXNjcmliZWRCeU9yaWdpbmFsKSB7XG4gICAgICAgICAgICAgIGRlc2NyaWJlZEJ5T3JpZ2luYWwgPSBkZXNjcmliZWRCeU9yaWdpbmFsLnJlcGxhY2UoZGVzY0lkLCcnKS50cmltKCk7XG4gICAgICAgICAgICAgIGRlc2NyaWJlZEJ5ID0gKGRlc2NyaWJlZEJ5T3JpZ2luYWwgKyAnICcgKyBkZXNjSWQpLnRyaW0oKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZihkZXNjcmliZWRCeSkge1xuICAgICAgICAgICAgICB0aGlzSW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY3JpYmVkQnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZhaWxlZFJlcXVpcmUpIHtcbiAgICAgICAgICAgICAgZmFpbGVkUmVxdWlyZSA9ICc8c3BhbiBjbGFzcz1cImVycm9yRXhwbGFuYXRpb24gcmVxdWlyZWRcIj4nICsgZmFpbGVkUmVxdWlyZSArICc8L3NwYW4+JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZhaWxlZFJlcXVpcmUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmYWlsZWRQYXR0ZXJuKSB7XG4gICAgICAgICAgICAgIGZhaWxlZFBhdHRlcm4gPSAnPHNwYW4gY2xhc3M9XCJlcnJvckV4cGxhbmF0aW9uIHBhdHRlcm5cIj4nICsgZmFpbGVkUGF0dGVybiArICc8L3NwYW4+JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZhaWxlZFBhdHRlcm4gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICdlcnJvckV4cGxhbmF0aW9uT3V0ZXJXcmFwcGVyJztcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImVycm9yRXhwbGFuYXRpb25XcmFwcGVyIGljb24gbWVzc2FnZSBoaWRkZW5cIiBpZD1cIicgKyBkZXNjSWQgKyAnXCI+PHNwYW4gY2xhc3M9XCJkZXF1ZSBnbHlwaCBleGNsYW1hdGlvbi10cmlhbmdsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4gJyArIGZhaWxlZFJlcXVpcmUgKyAnICcgKyBmYWlsZWRQYXR0ZXJuICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgaWYodGhpc0lucHV0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmVycm9yRXhwbGFuYXRpb25PdXRlcldyYXBwZXInKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXNJbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgdGhpc0lucHV0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZlZWRiYWNrVHlwZSA9PT0gRkVFREJBQ0tfVFlQRVMuSU5MSU5FKSB7XG4gICAgICAvKiB0aGUgY29kZSBiZWxvdyB3YXMgYWRkZWQgYnkgUGF1bCBCb2htYW5cblx0XHQgICAgIFRPIERPOlxuXHRcdFx0ICAgICAgIC0gd2UgbmVlZCB0byBhbGxvdyB0aGUgb3B0aW9uIHRvIHB1dCB0aGUgZXJyb3IgbWVzc2FnZXMgYWZ0ZXIgdGhlIGlucHV0cyBhbmQgbWFrZSB0aGVtIGFsd2F5cyBpbnZpc2libGUuIFdoZW4gdGhpcyBvcHRpb24gaXMgY2hvc2VuLCB0aGUgdG9vbHRpcHMgd2lsbCBub3QgYmUgYXZhaWxhYmxlLlxuXHRcdFx0ICAgICAgICAgICBpdCB3aWxsIGVpdGhlciBiZSAxKSB2aXNpYmxlIGFsd2F5cyBvciAyKSB0b29sdGlwXG4gICAgICAqL1xuXG4gICAgICBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdGhpc0lucHV0ID0gaW5wdXRzW2ldO1xuICAgICAgICBpZiAodGhpc0lucHV0LmdldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJykpIHtcbiAgICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgPSAnZXJyb3JFeHBsYW5hdGlvbk91dGVyV3JhcHBlcic7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZXJyb3JFeHBsYW5hdGlvbldyYXBwZXIgaWNvblwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PC9zcGFuPic7XG4gICAgICAgICAgdGhpc0lucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzSW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qIGVuZCBwYXVsJ3MgYWRkZWQgY29kZSAqL1xuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGxldCBpbnB1dHMgPSBxdWVyeUFsbCgnW2RhdGEtdmFsaWRhdGVdJywgZm9ybSk7XG4gICAgaW5wdXRzXG4gICAgICAuZm9yRWFjaChpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSBnZXRWYWxpZGF0aW9uRnVuY3Rpb24odmFsaWRhdG9ycywgaSk7XG5cbiAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgIGkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgpKSB7XG4gICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgbGV0IHZhbGlkYXRlZCA9IGlucHV0cy5ldmVyeShpID0+ICFpLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKTtcblxuICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBsZXQgaW52YWxpZElucHV0cyA9IGlucHV0cy5maWx0ZXIoaSA9PiBpLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKTtcbiAgICAgIGxldCBlcnJvcnMgPSBnZXRWYWxpZGF0aW9uRXJyb3JzKGludmFsaWRJbnB1dHMsIGZlZWRiYWNrVHlwZSA9PT0gRkVFREJBQ0tfVFlQRVMuSU5MSU5FKTtcbiAgICAgIG5vdGlmeUZhaWx1cmUoZXJyb3JzKTtcbiAgICAgIGlmIChmZWVkYmFja1R5cGUgPT09IEZFRURCQUNLX1RZUEVTLlRPUCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBmZWVkYmFja0FyZWEucXVlcnlTZWxlY3RvcignaDQnKTtcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgaGVhZGVyLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhclRvb2x0aXBzKGZvcm0pO1xuICAgICAgICBpbml0VG9vbHRpcHMoZm9ybSk7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLmludmFsaWQnKS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub3RpZnlTdWNjZXNzKCk7XG4gICAgICBjbGVhclRvb2x0aXBzKGZvcm0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRUb29sdGlwcyhmb3JtKSB7XG4gIHF1ZXJ5QWxsKCdbZGF0YS10b29sdGlwXScsIGZvcm0pXG4gICAgLmZvckVhY2goaSA9PiB7XG4gICAgICBpLmNhbmNlbFRvb2x0aXAgPSBjcmVhdGVUb29sdGlwKGkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclRvb2x0aXBzKGZvcm0pIHtcbiAgcXVlcnlBbGwoJ1tkYXRhLXRvb2x0aXBdJywgZm9ybSlcbiAgICAuZm9yRWFjaChpID0+IHtcbiAgICAgIGlmIChpLmNhbmNlbFRvb2x0aXApIHtcbiAgICAgICAgaS5jYW5jZWxUb29sdGlwKCk7XG4gICAgICB9XG4gICAgfSk7XG59XG4vKiBlbmQgQGZvcm1WYWxpZGF0aW9uICovXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zvcm1WYWxpZGF0aW9uL2luZGV4LmpzIiwiLyogQGZvcm1WYWxpZGF0aW9uLXZhbGlkYXRvcnMtZGVmYXVsdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkKGlucHV0KSB7XG4gIGNvbnN0IHZhbCA9ICEhaW5wdXQudmFsdWU7XG5cbiAgbGV0IGVycm9yTWVzc2FnZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1lcnJvcm1lc3NhZ2UtcmVxdWlyZWQnKSB8fCAnZmFpbGVkIHRvIHByb3ZpZGUgYSByZXF1aXJlZCB2YWx1ZS4nO1xuXG4gIGlmICghdmFsKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC1yZXF1aXJlJywgZXJyb3JNZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLXJlcXVpcmUnKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhDaGFycyhpbnB1dCkge1xuICBjb25zdCB0aHJlc2hvbGQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcpO1xuXG4gIGlmICghdGhyZXNob2xkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbWF4Q2hhcnMgdmFsaWRhdG9yIG5lZWRzIGEgbWF4bGVuZ3RoIGF0dHJpYnV0ZSB0byB0ZXN0IGFnYWluc3QuJyk7XG4gIH1cblxuICBsZXQgZXJyb3JNZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWVycm9ybWVzc2FnZS1tYXhjaGFycycpIHx8ICdWYWx1ZSBsZW5ndGggZXhjZWVkcyB0aHJlc2hvbGQgb2YgJyArIHRocmVzaG9sZDtcblxuICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZS5sZW5ndGggPD0gdGhyZXNob2xkO1xuICBpZiAoIXZhbCkge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1mYWlsZWQtbWF4X2NoYXJzJywgZXJyb3JNZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLW1heF9jaGFycycpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWwoaW5wdXQpIHtcbiAgY29uc3QgdmFsID0gL14oW2EtekEtWjAtOV9cXC1cXC5dKylAKFthLXpBLVowLTlfXFwtXFwuXSspXFwuKFthLXpBLVpdezIsNX0pJC8udGVzdChpbnB1dC52YWx1ZSk7XG5cbiAgbGV0IGVycm9yTWVzc2FnZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1lcnJvcm1lc3NhZ2UtaXNfZW1haWwnKSB8fCAndmFsdWUgbXVzdCBiZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuXG4gIGlmICghdmFsKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC1pc19lbWFpbCcsIGVycm9yTWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC1pc19lbWFpbCcpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdHRlcm4oaW5wdXQpIHtcbiAgbGV0IHBhdHRlcm4gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nKTtcbiAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGF0dGVybiB2YWxpZGF0b3IgcmVxdWlyZXMgYSBwYXR0ZXJuIGF0dHJpYnV0ZSB0byB0ZXN0IGFnYWluc3QuJyk7XG4gIH1cblxuICBsZXQgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgY29uc3QgdmFsID0gcmVnRXhwLnRlc3QoaW5wdXQudmFsdWUpO1xuXG4gIGxldCBlcnJvck1lc3NhZ2UgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZXJyb3JtZXNzYWdlLXBhdHRlcm4nKSB8fCAnVmFsdWUgZGlkIG5vdCBtYXRjaCBwYXR0ZXJuIDwnICsgcGF0dGVybiArICc+JztcblxuICBpZiAoIXZhbCkge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1mYWlsZWQtcGF0dGVybicsIGVycm9yTWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC1wYXR0ZXJuJyk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljKGlucHV0KSB7XG4gIGNvbnN0IHZhbCA9ICFpc05hTihwYXJzZUZsb2F0KGlucHV0LnZhbHVlKSk7XG5cbiAgbGV0IGVycm9yTWVzc2FnZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1lcnJvcm1lc3NhZ2UtaXNfbnVtZXJpYycpIHx8ICdpbnB1dCBpcyBub3QgYSBudW1lcmljIHZhbHVlJztcblxuICBpZiAoIXZhbCkge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1mYWlsZWQtaXNfbnVtZXJpYycsIGVycm9yTWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC1pc19udW1lcmljJyk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzc3dvcmRTdHJlbmd0aChpbnB1dCkge1xuICBjb25zdCB0aHJlc2hvbGQgPSBwYXJzZUludChpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtcGFzc3dvcmQtc3RyZW5ndGgnKSk7XG4gIGlmICghdGhyZXNob2xkIHx8IHRocmVzaG9sZCA8IDAgfHwgdGhyZXNob2xkID4gNCB8fCBpc05hTih0aHJlc2hvbGQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVc2luZyB0aGUgcGFzc3dvcmQgc3RyZW5ndGggdmFsaWRhdG9yIHJlcXVpcmVzIHlvdSB0byBzcGVjaWZ5IFwiZGF0YS12YWxpZGF0ZS1wYXNzd29yZC1zdHJlbmdodFwiIHdpdGggYSB2YWx1ZSBiZXR3ZWVuIDAtNCcpO1xuICB9XG5cbiAgY29uc3QgcXVhbGl0eU1ldGVySWQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgaWYgKCFxdWFsaXR5TWV0ZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91ciBpbnB1dCBzaG91bGQgYmUgYGFyaWEtZGVzY3JpYmVkYnlgIGEgcGFzc3dvcmQgcXVhbGl0eSBmZWVkYmFjayBjb21wb25lbnQuIElmIG5vdCwgZGlkIHlvdSBwYXNzIGluIGEgYHBhc3N3b3JkRXZhbHVhdG9yYCBmdW5jdGlvbiBpbnRvIHlvdXIgY29uZmlnPycpO1xuICB9XG5cbiAgY29uc3QgcXVhbGl0eU1ldGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocXVhbGl0eU1ldGVySWQpO1xuICBpZiAoIXF1YWxpdHlNZXRlcikge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91ciBpbnB1dCBzaG91bGQgYmUgYGFyaWEtZGVzY3JpYmVkYnlgIGEgcGFzc3dvcmQgcXVhbGl0eSBmZWVkYmFjayBjb21wb25lbnQuIElmIG5vdCwgZGlkIHlvdSBwYXNzIGluIGEgYHBhc3N3b3JkRXZhbHVhdG9yYCBmdW5jdGlvbiBpbnRvIHlvdXIgY29uZmlnPycpO1xuICB9XG5cbiAgY29uc3QgcXVhbGl0eSA9IHBhcnNlSW50KHF1YWxpdHlNZXRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFzc3dvcmQtcXVhbGl0eScpKTtcblxuICBpZiAoaXNOYU4ocXVhbGl0eSkgfHwgcXVhbGl0eSA8IDAgfHwgcXVhbGl0eSA+IDQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byByZWFkIHBhc3N3b3JkIHF1YWxpdHkgZnJvbSBxdWFsaXR5IG1ldGVyLicpO1xuICB9XG5cbiAgbGV0IGVycm9yTWVzc2FnZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1lcnJvcm1lc3NhZ2UtcGFzc3dvcmRfc3RyZW5ndGgnKSB8fCBgWW91ciBwYXNzd29yZCBxdWFsaXR5IGlzICR7cXVhbGl0eSArIDF9LzUgYnV0IG5lZWRzIHRvIGJlIGF0IGxlYXN0ICR7dGhyZXNob2xkICsgMX0vNWA7XG5cbiAgY29uc3QgdmFsID0gcXVhbGl0eSA+PSB0aHJlc2hvbGQ7XG5cbiAgaWYgKCF2YWwpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLXBhc3N3b3JkX3N0cmVuZ3RoJywgZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG4vKiBlbmQgQGZvcm1WYWxpZGF0aW9uLXZhbGlkYXRvcnMtZGVmYXVsdCAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zvcm1WYWxpZGF0aW9uL3ZhbGlkYXRvcnMvZGVmYXVsdC5qcyIsImltcG9ydCB7dG9BcnJheX0gZnJvbSAnLi4vX3V0aWxzL2NvbGxlY3Rpb25VdGlscyc7XG4vKiBAZm9ybS12YWxpZGF0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkZ1bmN0aW9uKHZhbGlkYXRvcnMsIGl0ZW0pIHtcbiAgcmV0dXJuIGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJylcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAodmFsaWRhdG9yTmFtZSA9PiB7XG4gICAgICBpZiAodmFsaWRhdG9yc1t2YWxpZGF0b3JOYW1lXSkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9yc1t2YWxpZGF0b3JOYW1lXS5iaW5kKG51bGwsIGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHZhbGlkYXRvciBkZWZpbmVkIGZvciAnICsgdmFsaWRhdG9yTmFtZSk7XG4gICAgfSlcbiAgICAucmVkdWNlKFxuICAgICAgKGYsIHYpID0+IGYuYmluZChudWxsLCB2KSxcbiAgICAgICguLi5mdW5jcykgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3MuZXZlcnkodiA9PiB2KCkpOyB9XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25FcnJvcnMoaW5wdXRzLCBhcHBlbmRUb29sdGlwcykge1xuICByZXR1cm4gaW5wdXRzLm1hcChpbnB1dCA9PiB7XG4gICAgbGV0IHNwZWNpZmllciA9IGlucHV0LmlkIHx8IGlucHV0Lm5hbWU7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj0nICsgc3BlY2lmaWVyICsgJ10nKTtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGxhYmVsID0gbGFiZWwuaW5uZXJUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbCA9ICdBbiBpbnB1dCc7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0cHV0ID0gdG9BcnJheShpbnB1dC5hdHRyaWJ1dGVzKVxuICAgICAgLmZpbHRlcihhID0+IGEubmFtZS5pbmRleE9mKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC0nKSA9PT0gMClcbiAgICAgIC5tYXAoYSA9PiAnPHN0cm9uZz4nICsgbGFiZWwgKyAnIDwvc3Ryb25nPjogJyArIGEudmFsdWUpO1xuXG4gICAgaWYgKGFwcGVuZFRvb2x0aXBzKSB7XG4gICAgICB2YXIgdHQgPSBvdXRwdXRbMF0uc3BsaXQoJzwvc3Ryb25nPjogJylbMV07XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcsIHR0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9KVxuICAucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHZhbCk7XG4gIH0sIFtdKTtcbn1cbi8qIGVuZCBAZm9ybS12YWxpZGF0aW9uICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9ybVZhbGlkYXRpb24vdmFsaWRhdGlvbi5qcyIsImltcG9ydCB7Y3JlYXRlUGFzc3dvcmRFdmFsdWF0aW9ufSBmcm9tICcuLi9jb21wb25lbnRzL3Bhc3N3b3JkRXZhbHVhdGlvbic7XG5pbXBvcnQge2dldExhYmVsfSBmcm9tICcuLi8uLi9fdXRpbHMvZm9ybVV0aWxzJztcbmltcG9ydCB7bm9DbG9iYmVyfSBmcm9tICcuLi8uLi9fdXRpbHMvbm9jbG9iYmVyVXRpbHMnO1xuLyogQGZvcm1WYWxpZGF0aW9uLXBhc3N3b3JkICovXG5leHBvcnQgZnVuY3Rpb24gd2lyZXVwUGFzc3dvcmRFdmFsdWF0b3IoaW5wdXRzLCBldmFsdWF0b3IpIHtcbiAgY29uc3QgcmF0aW5ncyA9IFsndW5hY2NlcHRhYmxlJywgJ3Bvb3InLCAnb2snLCAnZ29vZCcsICdncmVhdCddO1xuXG4gIGxldCB0aW1lb3V0O1xuICBmdW5jdGlvbiBxdWV1ZU5vdGlmaWNhdGlvbihpbnB1dCwgc2NvcmUsIHNlbmROb3RpZmljYXRpb24pIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBnZXRMYWJlbChpbnB1dCk7XG4gICAgICBsZXQgcmF0aW5nID0gcmF0aW5nc1tzY29yZV07XG4gICAgICBzZW5kTm90aWZpY2F0aW9uKGBUaGUgcGFzc3dvcmQgeW91J3ZlIGVudGVyZWQgZm9yICR7bGFiZWx9IGlzICR7cmF0aW5nfS5gKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIGlmKGV2YWx1YXRvciAmJiB0eXBlb2YgZXZhbHVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgdmFsdWUgYmV0d2VlbiAnMCcgYW5kICc0Jy5cbiAgICAvLyAwIG1lYW5zIGl0J3MgYSByZWFsbHkgd2VhayBwYXNzd29yZCwgbGlrZSAncGFzc3dvcmQnXG4gICAgLy8gNCBtZWFucyBpdCdzIGEgcmVhbGx5IGdvb2QgcGFzc3dvcmRcbiAgICBpbnB1dHNcbiAgICAuZm9yRWFjaChpID0+IHtcbiAgICAgIGxldCBwYXNzd29yZEV2YWx1YXRpb24gPSBjcmVhdGVQYXNzd29yZEV2YWx1YXRpb24oKTtcbiAgICAgIGkucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUocGFzc3dvcmRFdmFsdWF0aW9uLCBpKTtcbiAgICAgIGkucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoaSwgcGFzc3dvcmRFdmFsdWF0aW9uKTtcbiAgICAgIG5vQ2xvYmJlcihpLCAnYXJpYS1kZXNjcmliZWRieScsIHBhc3N3b3JkRXZhbHVhdGlvbi5pZCk7XG4gICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBsZXQgc2NvcmUgPSBldmFsdWF0b3IoaS52YWx1ZSk7XG4gICAgICAgIHBhc3N3b3JkRXZhbHVhdGlvbi51cGRhdGUoc2NvcmUsIHJhdGluZ3MpO1xuICAgICAgICBxdWV1ZU5vdGlmaWNhdGlvbihpLCBzY29yZSwgcGFzc3dvcmRFdmFsdWF0aW9uLm5vdGlmeSk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IGluaXRpYWxTY29yZSA9IGV2YWx1YXRvcihpLnZhbHVlKTtcbiAgICAgIHBhc3N3b3JkRXZhbHVhdGlvbi51cGRhdGUoaW5pdGlhbFNjb3JlLCByYXRpbmdzKTtcbiAgICB9KTtcbiAgfVxufVxuLyogZW5kIEBmb3JtVmFsaWRhdGlvbi1wYXNzd29yZCAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zvcm1WYWxpZGF0aW9uL2JlaGF2aW9yL3Bhc3N3b3JkLmpzIiwiaW1wb3J0IHtnZW5lcmF0ZUd1aWR9IGZyb20gJy4uLy4uL191dGlscy9ndWlkVXRpbHMnO1xuaW1wb3J0IHtjcmVhdGVMaXZlUmVnaW9ufSBmcm9tICcuLi8uLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuLyogQGZvcm1WYWxpZGF0aW9uLXBhc3N3b3JkRXZhbHVhdGlvbiAqL1xuZnVuY3Rpb24gY3JlYXRlTGV2ZWxJbmRpY2F0b3IobGV2ZWwpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgncGFzc3dvcmRfbGV2ZWwnKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoYGxldmVsJHtsZXZlbH1gKTtcblxuICBsZXQgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcbiAgaW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGluZGljYXRvcik7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXNzd29yZEV2YWx1YXRpb24oKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3V0cHV0LmlkID0gZ2VuZXJhdGVHdWlkKCk7XG4gIC8qIGFsdGVyZWQgYnkgUGF1bCBCb2htYW5cblx0XHRcdFRPIERPOlxuXHRcdFx0XHQtIFRoaXMgd2hvbGUgc2VjdGlvbiBuZWVkcyB0byBiZSBhbHRlcmVkIHNvIHRoYXQgaXQgZG9lcyBub3QgdXNlIGltYWdlcyBhdCBhbGxcblx0XHRcdFx0LSB3ZSBqdXN0IG5lZWQgdG8gY3JlYXRlIGFuIGlubmVyIGNvbnRhaW5lciB0aGF0IGNhbiBiZSBzZXQgdG8gcmVkLCBvcmFuZ2UsIHllbGxvdywgZ3JlZW4sIHdpdGggZGlmZmVyZW50IHdpZHRoc1xuXHRcdFx0XHQtIGFsc28sIHdlIG5lZWQgdG8gcHV0IHJlYWwgdGV4dCBvbiB0aGUgc2NyZWVuLCBub3QgOjpiZWZvcmUgYW5kIDo6YWZ0ZXIgdGV4dCBmb3IgdGhlIHBhc3N3b3JkIHN0cmVuZ3RoIGluZGljYXRvclxuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2ltZycpO1xuICAqL1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgncGFzc3dvcmRFdmFsdWF0aW9uJyk7XG4gIGxldCBsZXZlbDAgPSBjcmVhdGVMZXZlbEluZGljYXRvcigwKTtcbiAgbGV0IGxldmVsMSA9IGNyZWF0ZUxldmVsSW5kaWNhdG9yKDEpO1xuICBsZXQgbGV2ZWwyID0gY3JlYXRlTGV2ZWxJbmRpY2F0b3IoMik7XG4gIGxldCBsZXZlbDMgPSBjcmVhdGVMZXZlbEluZGljYXRvcigzKTtcbiAgbGV0IGxldmVsNCA9IGNyZWF0ZUxldmVsSW5kaWNhdG9yKDQpO1xuXG4gIG91dHB1dC5hcHBlbmRDaGlsZChsZXZlbDApO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQobGV2ZWwxKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGxldmVsMik7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChsZXZlbDMpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQobGV2ZWw0KTtcbiAgLyogYWx0ZXJlZCBieSBQYXVsIEJvaG1hblxuICBsZXQgbGV2ZWxJbmRpY2F0b3JzID0gW2xldmVsMCwgbGV2ZWwxLCBsZXZlbDIsIGxldmVsMywgbGV2ZWw0XTtcbiAgKi9cbiAgY29uc3QgYWxlcnQgPSBjcmVhdGVMaXZlUmVnaW9uKCdwb2xpdGUnKTtcblxuICBvdXRwdXQudXBkYXRlID0gZnVuY3Rpb24oc2NvcmUsIHJhdGluZ3MpIHtcbiAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdkYXRhLXBhc3N3b3JkLXF1YWxpdHknLCBzY29yZSk7XG4gICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdQYXNzd29yZCBxdWFsaXR5IGlzICcgKyByYXRpbmdzW3Njb3JlXSk7XG4gICAgLyogYWx0ZXJlZCBieSBQYXVsIEJvaG1hblxuICAgIGxldmVsSW5kaWNhdG9ycy5mb3JFYWNoKGxpID0+IHtcbiAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgYGltYWdlcy9wdyR7c2NvcmV9LnBuZ2ApO1xuICAgIH0pO1xuICAgICovXG4gIH07XG5cbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGFsZXJ0LmlkKTtcblxuICAvLyBhZGRpbmcgdG8gYm9keSwgYXMgcGVyIFBhdWwgQidzIHJlcXVlc3RcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG4gIHZhciBlbXB0eUludGVydmFsO1xuICBvdXRwdXQubm90aWZ5ID0gZnVuY3Rpb24odGV4dCkge1xuICAgIGFsZXJ0LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgaWYgKGVtcHR5SW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZW1wdHlJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgZW1wdHlJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWxlcnQuaW5uZXJUZXh0ID0gJyc7XG4gICAgICBlbXB0eUludGVydmFsID0gbnVsbDtcbiAgICB9LCA1MDAwKTtcbiAgfTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyogZW5kIEBmb3JtVmFsaWRhdGlvbi1wYXNzd29yZEV2YWx1YXRpb24gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mb3JtVmFsaWRhdGlvbi9jb21wb25lbnRzL3Bhc3N3b3JkRXZhbHVhdGlvbi5qcyIsIi8qIEBmb3JtVXRpbHMgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbChpbnB1dCkge1xuICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICByZXR1cm4gaW5wdXQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gIH1cblxuICBsZXQgbmFtZSA9IGlucHV0LmlkIHx8IGlucHV0Lm5hbWU7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiAndW5sYWJlbGVkIGlucHV0JztcbiAgfVxuXG4gIGxldCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPScgKyBuYW1lICsgJ10nKTtcbiAgbGV0IGxhYmVsO1xuICBpZiAobGFiZWxFbGVtZW50KSB7XG4gICAgbGFiZWwgPSBsYWJlbEVsZW1lbnQuaW5uZXJUZXh0O1xuICB9IGVsc2Uge1xuICAgIGxhYmVsID0gJ3VubGFiZWxlZCBpbnB1dCc7XG4gIH1cblxuICByZXR1cm4gbGFiZWw7XG59XG4vKiBlbmQgQGZvcm1VdGlscyAqL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fdXRpbHMvZm9ybVV0aWxzLmpzIiwiaW1wb3J0IHtjcmVhdGVDaGFyc1JlbWFpbmluZ30gZnJvbSAnLi4vY29tcG9uZW50cy9jaGFyc1JlbWFpbmluZyc7XG5pbXBvcnQge2dldExhYmVsfSBmcm9tICcuLi8uLi9fdXRpbHMvZm9ybVV0aWxzJztcbi8qIEBmb3JtVmFsaWRhdGlvbi10ZXh0ICovXG5leHBvcnQgZnVuY3Rpb24gd2lyZXVwTWF4TGVuZ3RoTm90aWZpY2F0aW9ucyhpbnB1dHMpIHtcblxuICBsZXQgdGltZW91dDtcbiAgZnVuY3Rpb24gcXVldWVOb3RpZmljYXRpb24oaW5wdXQsIHNlbmROb3RpZmljYXRpb24pIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBnZXRMYWJlbChpbnB1dCk7XG4gICAgICBjb25zdCBjaGFyQ291bnQgPSBpbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBtYXhDaGFycyA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJykpO1xuICAgICAgY29uc3QgcmVtYWluaW5nID0gbWF4Q2hhcnMgLSBjaGFyQ291bnQ7XG5cbiAgICAgIHNlbmROb3RpZmljYXRpb24oYCR7bGFiZWx9OiBZb3UndmUgdXNlZCAke2NoYXJDb3VudH0gb3V0IG9mICR7bWF4Q2hhcnN9IGNoYXJhY3RlcnMgYW5kIGhhdmUgJHtyZW1haW5pbmd9IGxlZnQuYCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGlucHV0cy5mb3JFYWNoKGkgPT4ge1xuICAgIGNvbnN0IG1heENoYXJzID0gcGFyc2VJbnQoaS5nZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcpKTtcbiAgICBjb25zdCBmZWVkYmFjayA9IGNyZWF0ZUNoYXJzUmVtYWluaW5nKGkpO1xuICAgIGkuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZmVlZGJhY2suaWQpO1xuICAgIGkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgbGV0IGNoYXJDb3VudCA9IGkudmFsdWUubGVuZ3RoO1xuICAgICAgaWYgKGNoYXJDb3VudCA+PSBtYXhDaGFycykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZlZWRiYWNrLm5vdGlmeShgJHtnZXRMYWJlbChpKX06IFlvdSd2ZSB1c2VkIGFsbCAke21heENoYXJzfSBjaGFyYWN0ZXJzIGF2YWlsYWJsZSB0byB0aGlzIGlucHV0LmApO1xuICAgICAgfVxuXG4gICAgICBmZWVkYmFjay51cGRhdGUoY2hhckNvdW50LCBtYXhDaGFycyk7XG4gICAgfSk7XG5cbiAgICBpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcG9zdFVwZGF0ZSk7XG4gICAgaS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHBvc3RVcGRhdGUpO1xuXG4gICAgLy8gdGhlIG5vdGlmaWNhdGlvbiBxdWV1ZSBnZXRzIGludm9rZWQgaGVyZSwgbm90IG9uIGlucHV0LFxuICAgIC8vIGluIGNhc2UgdGhlIGZvcm0gc3RhcnRzIHdpdGggdGhpcyBmaWVsZCBwb3B1bGF0ZWQuIFlvdVxuICAgIC8vIGRvbid0IHdhbnQgdG8gZ2V0IGEgZG96ZW4gbm90aWZpY2F0aW9ucyBmcm9tIHByZS1wb3AnZFxuICAgIC8vIGlucHV0cyBvbiBwYWdlIGxvYWQuXG4gICAgZnVuY3Rpb24gcG9zdFVwZGF0ZSgpIHtcbiAgICAgIGlmIChjaGFyQ291bnQgPiBtYXhDaGFycykge1xuICAgICAgICBpLnZhbHVlID0gaS52YWx1ZS5zdWJzdHIoMCwgbWF4Q2hhcnMgLSAxKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hhckNvdW50ID0gaS52YWx1ZS5sZW5ndGg7XG4gICAgICBmZWVkYmFjay51cGRhdGUoY2hhckNvdW50LCBtYXhDaGFycyk7XG4gICAgICBxdWV1ZU5vdGlmaWNhdGlvbihpLCBmZWVkYmFjay5ub3RpZnkpO1xuICAgIH1cblxuICAgIGkucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZmVlZGJhY2ssIGkpO1xuICAgIGkucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoaSwgZmVlZGJhY2spO1xuICB9KTtcbn1cbi8qIGVuZCBAZm9ybVZhbGlkYXRpb24tdGV4dCAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zvcm1WYWxpZGF0aW9uL2JlaGF2aW9yL3RleHQuanMiLCJpbXBvcnQge2dlbmVyYXRlR3VpZH0gZnJvbSAnLi4vLi4vX3V0aWxzL2d1aWRVdGlscyc7XG4vKiBAZm9ybVZhbGlkYXRpb24tY2hhcnNSZW1haW5pbmcgKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFyc1JlbWFpbmluZygpIHtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dHB1dC5pZCA9IGdlbmVyYXRlR3VpZCgpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2NoYXJzLXJlbWFpbmluZycpO1xuICBvdXRwdXQudXBkYXRlID0gZnVuY3Rpb24oY3VycmVudCwgbWF4KSB7XG4gICAgbGV0IG5ld1RleHQgPSBgKCR7Y3VycmVudH0vJHttYXh9KWA7XG4gICAgaWYgKHNwYW4uaW5uZXJUZXh0ID09PSBuZXdUZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3Bhbi5pbm5lclRleHQgPSBuZXdUZXh0O1xuICB9O1xuXG4gIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBhbGVydC5pZCA9IGdlbmVyYXRlR3VpZCgpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xvZycpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXRvbWljJywgZmFsc2UpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVsZXZhbnQnLCAnYWRkaXRpb25zJyk7XG4gIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5aGlkZGVuJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBhbGVydC5pZCk7XG5cbiAgLy8gYXMgcGVyIFBhdWwgQidzIHJlcXVlc3QsIGxpdmUgdXBkYXRlIHJlZ2lvbiBnZXRzIHNodW50ZWQgdG8gdGhlXG4gIC8vIGVuZCBvZiB0aGUgZG9jdW1lbnQgc28gYXMgbm90IHRvIGNvbmZ1c2UgYW55b25lLlxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcblxuICBvdXRwdXQubm90aWZ5ID0gZnVuY3Rpb24odGV4dCkge1xuICAgIGFsZXJ0LmlubmVyVGV4dCA9IHRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qIGVuZCBAZm9ybVZhbGlkYXRpb24tY2hhcnNSZW1haW5pbmcgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mb3JtVmFsaWRhdGlvbi9jb21wb25lbnRzL2NoYXJzUmVtYWluaW5nLmpzIiwiLyogQGZvcm1WYWxpZGF0aW9uLWZlZWRiYWNrQXJlYSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZlZWRiYWNrQXJlYSgpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnZmVlZGJhY2staG9sZGVyJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYWxlcnQnKTtcblxuICBvdXRwdXQuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICBvdXRwdXQuaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgb3V0cHV0LmNsZWFySUQgPSBmdW5jdGlvbihpZCkge1xuICAgIGlmICghaWQpIHsgcmV0dXJuOyB9XG4gICAgbGV0IGV4aXN0aW5nID0gb3V0cHV0LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWQpO1xuICAgIGlmIChleGlzdGluZykge1xuICAgICAgb3V0cHV0LnJlbW92ZUNoaWxkKGV4aXN0aW5nKTtcbiAgICB9XG4gIH07XG5cbiAgb3V0cHV0LmxvZ05vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGlkLCBjbGFzc2VzID0gW10pIHtcbiAgICBvdXRwdXQuY2xlYXJJRChpZCk7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICBjbGFzc2VzLmZvckVhY2goYyA9PiBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgb3V0cHV0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH07XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qIGVuZCBAZm9ybVZhbGlkYXRpb24tZmVlZGJhY2tBcmVhICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9ybVZhbGlkYXRpb24vY29tcG9uZW50cy9mZWVkYmFja0FyZWEuanMiLCIvKiBAdGFibGUtc29ydGFibGUgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNvcnRhYmxlVGFibGUodGFibGVHcm91cCkge1xuICB2YXIgdGFibGUgPSB0YWJsZUdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gIHZhciBoZWFkZXJHcm91cCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJyk7XG4gIHZhciBoZWFkZXJSb3cgPSBoZWFkZXJHcm91cC5xdWVyeVNlbGVjdG9yKCd0cicpO1xuICB2YXIgaGVhZGVycyA9IGhlYWRlclJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0aCcpO1xuICB2YXIgcm93R3JvdXAgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuICB2YXIgcm93cyA9IHJvd0dyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJyk7XG4gIHZhciBjYXB0aW9uRWxlbWVudCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ2NhcHRpb24nKTtcbiAgdmFyIGNhcHRpb24gPSBjYXB0aW9uRWxlbWVudC5pbm5lclRleHQ7XG5cblxuICB2YXIgbGl2ZVJlZ2lvbiA9IHRhYmxlR3JvdXAucXVlcnlTZWxlY3RvcignI2xpdmVSZWdpb24nKTtcbiAgdmFyIHJlYWRDYXB0aW9ucyA9IGxpdmVSZWdpb24uZ2V0QXR0cmlidXRlKCdyZWFkQ2FwdGlvbnMnKTtcbiAgaWYocmVhZENhcHRpb25zID09PSBudWxsKXtcbiAgICByZWFkQ2FwdGlvbnMgPSBmYWxzZTtcbiAgfVxuICBsaXZlUmVnaW9uLmNsYXNzTGlzdC5hZGQoJ2RlcXVlLXZpc3VhbGx5aGlkZGVuJyk7XG4gIGxpdmVSZWdpb24ubm90aWZ5ID0gZnVuY3Rpb24odGV4dCkge1xuICAgIGxpdmVSZWdpb24uaW5uZXJIVE1MID0gdGV4dDtcbiAgfTtcblxuICBsZXQgc29ydE9yZGVyID0gbnVsbDtcbiAgbGV0IHNvcnREaXJlY3Rpb24gPSAtMTtcblxuICBmdW5jdGlvbiBnZXRTb3J0SGVhZGVyKCkge1xuICAgIGlmIChzb3J0T3JkZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gaGVhZGVyUm93LmNoaWxkcmVuW3NvcnRPcmRlcl07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTb3J0TGFiZWwoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZ2V0U29ydEhlYWRlcigpO1xuICAgIGlmICghaGVhZGVyKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuIGhlYWRlci5pbm5lclRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTb3J0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBzb3J0RGlyZWN0aW9uID4gMCA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U29ydEluZm8oKSB7XG4gICAgaWYgKHNvcnRPcmRlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICd1bnNvcnRlZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBzb3J0ZWQgYnkgJHtnZXRTb3J0TGFiZWwoKX0sICR7Z2V0U29ydERpcmVjdGlvbigpfWA7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJTb3J0aW5nKCkge1xuICAgIHVwZGF0ZUNhcHRpb24oKTtcbiAgICB1cGRhdGVBcmlhU29ydCgpO1xuICAgIHVwZGF0ZUxpdmVSZWdpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFyaWFTb3J0KCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVyUm93LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhlYWRlclJvdy5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBpID09PSBNYXRoLmFicyhzb3J0T3JkZXIpKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBnZXRTb3J0RGlyZWN0aW9uKCk7XG4gICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1zb3J0JywgZGlyZWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zb3J0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2FwdGlvbigpIHtcbiAgICBsZXQgY2FwdGlvblRleHQgPSBgJHtjYXB0aW9ufSwgJHtnZXRTb3J0SW5mbygpfWA7XG4gICAgY2FwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gY2FwdGlvblRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMaXZlUmVnaW9uKCkge1xuICAgIGlmIChyZWFkQ2FwdGlvbnMpIHtcbiAgICAgIGxldCBjYXB0aW9uVGV4dCA9IGBUYWJsZSAke2NhcHRpb259IGlzIG5vdyAke2dldFNvcnRJbmZvKCl9YDtcbiAgICAgIGxpdmVSZWdpb24ubm90aWZ5KGNhcHRpb25UZXh0KTtcbiAgICB9XG4gIH1cbiBcbiAgcm93cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd3MpO1xuICBjb25zdCBpc1ZhbGlkID0gcm93cy5ldmVyeShyb3cgPT4gcm93LmNoaWxkcmVuLmxlbmd0aCA9PT0gaGVhZGVycy5sZW5ndGgpO1xuXG4gIGlmICghaXNWYWxpZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRWFjaCByb3cgbXVzdCBiZSB0aGUgc2FtZSBsZW5ndGggYXMgdGhlIGhlYWRlcnMgcm93LicpO1xuICB9XG5cbiAgXG4gIGhlYWRlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChoZWFkZXJzKTtcbiAgW10uc2xpY2UuY2FsbChoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlciwgaSkge1xuICAgIGNyZWF0ZUhlYWRlckNlbGwoaGVhZGVyLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcm93cyA9IHNvcnRCeUluZGV4KHJvd3MsIGkpO1xuICAgICAgdGFibGUucmVuZGVyRGF0YShyb3dzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdGFibGUucmVuZGVyRGF0YSA9IGZ1bmN0aW9uKHJvd3MpIHtcbiAgICByb3dHcm91cC5pbm5lckhUTUwgPSB0b0hUTUwocm93cyk7XG4gICAgcmVuZGVyU29ydGluZygpO1xuICB9O1xuXG4gIHRhYmxlLnJlbmRlckRhdGEocm93cyk7XG5cblxuICBmdW5jdGlvbiBzb3J0QnlJbmRleChyb3dzLCBpbmRleCkge1xuICAgIHJvd3MgPSB0YWJsZUdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XG4gICAgcm93cyA9IFtdLnNsaWNlLmNhbGwocm93cyk7XG5cbiAgICBpZiAoc29ydE9yZGVyID09PSBpbmRleCkge1xuICAgICAgc29ydERpcmVjdGlvbiA9IC1zb3J0RGlyZWN0aW9uO1xuICAgICAgcmV0dXJuIHJvd3MucmV2ZXJzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0T3JkZXIgPSBpbmRleDtcbiAgICAgIHJldHVybiByb3dzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEuY2hpbGRyZW4pO1xuICAgICAgICBiID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYi5jaGlsZHJlbik7XG4gICAgICAgIGxldCBhVmFsID0gbnVsbDtcbiAgICAgICAgbGV0IGJWYWwgPSBudWxsO1xuXG4gICAgICAgIGlmKGFbaW5kZXhdKSB7XG4gICAgICAgICAgYVZhbCA9IGFbaW5kZXhdLmlubmVyVGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJbaW5kZXhdKSB7XG4gICAgICAgICAgYlZhbCA9IGJbaW5kZXhdLmlubmVyVGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoYVZhbCkpICYmICFpc05hTihwYXJzZUludChiVmFsKSkpIHtcbiAgICAgICAgICBpZiAocGFyc2VJbnQoYVZhbCkgPCBwYXJzZUludChiVmFsKSkgeyByZXR1cm4gLTE7IH1cbiAgICAgICAgICBpZiAocGFyc2VJbnQoYVZhbCkgPiBwYXJzZUludChiVmFsKSkgeyByZXR1cm4gMTsgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBpZiAoYVZhbCA8IGJWYWwpIHsgcmV0dXJuIC0xOyB9XG4gICAgICAgICAgaWYgKGFWYWwgPiBiVmFsKSB7IHJldHVybiAxOyB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGxldCBmaXJzdE9uZSA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5zb3J0YWJsZUNvbHVtbkxhYmVsJyk7XG4gIGlmIChmaXJzdE9uZSkgeyBmaXJzdE9uZS5jbGljaygpOyB9IC8vIGdpdmUgdGhlIHRhYmxlIGEgZGVmYXVsdCBzb3J0Li4uXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyQ2VsbChoZWFkZXIsIGhhbmRsZXIpIHtcbiAgdmFyIGJ1dHRvbiA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiB0b0hUTUwocm93cykge1xuICByZXR1cm4gcm93cy5tYXAoKHJvdykgPT4ge1xuICAgIHJvdyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvdy5jaGlsZHJlbik7XG4gICAgcmV0dXJuIGA8dHIgcm9sZT1cInJvd1wiPlxuICAgICR7cm93Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYDx0aCBzY29wZT1cInJvd1wiIHJvbGU9XCJyb3doZWFkZXJcIj4ke2l0ZW0uaW5uZXJUZXh0fTwvdGg+YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgPHRkIHJvbGU9XCJncmlkY2VsbFwiPiR7aXRlbS5pbm5lclRleHR9PC90ZD5gO1xuICAgIH0pLmpvaW4oJycpfTwvdHI+YDtcbiAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlQWxsU29ydGFibGVUYWJsZXMoKXtcbiAgdmFyIHNvcnRhYmxlVGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlcXVlLXRhYmxlLXNvcnRhYmxlLWdyb3VwJyk7XG4gIGZvcih2YXIgaT0wOyBpPHNvcnRhYmxlVGFibGVzLmxlbmd0aDsgaSsrKXtcbiAgICBjcmVhdGVTb3J0YWJsZVRhYmxlKHNvcnRhYmxlVGFibGVzW2ldKTtcbiAgfVxufVxuXG5hY3RpdmF0ZUFsbFNvcnRhYmxlVGFibGVzKCk7XG4vKiBlbmQgQHRhYmxlLXNvcnRhYmxlICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc29ydGFibGVUYWJsZS9pbmRleC5qcyIsImltcG9ydCB7cXVlcnlBbGx9IGZyb20gJy4uL191dGlscy9zZWxlY3Rpb25VdGlscyc7XG4vKiBAdGFibGUtY29sbGFwc2luZyAqL1xuZnVuY3Rpb24gZ2V0VGFibGVOYW1lKHRhYmxlKSB7XG4gIGNvbnN0IGNhcHRpb24gPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCdjYXB0aW9uJyk7XG4gIGlmIChjYXB0aW9uKSB7XG4gICAgcmV0dXJuIGNhcHRpb24uaW5uZXJUZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRhYmxlLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICd1bm5hbWVkIHRhYmxlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUYWJsZVJlc3BvbnNpdmUodGFibGUsIGxhYmVsRGV0YWlscyA9IHt9LCBpbmZsZWN0aW9uUG9pbnQgPSAzMDApIHtcbiAgdmFyIHJlc2l6ZVRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gcmVzaXplVGhyb3R0bGVyKCkge1xuICAgIC8vIGlnbm9yZSByZXNpemUgZXZlbnRzIGFzIGxvbmcgYXMgYW4gaGFuZGxlUmVzcG9uc2l2ZUxvZ2ljIGV4ZWN1dGlvbiBpcyBpbiB0aGUgcXVldWVcbiAgICBpZiAoIXJlc2l6ZVRpbWVvdXQpIHtcbiAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNpemVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2l2ZUxvZ2ljKCk7XG5cbiAgICAgICAgLy8gVGhlIGhhbmRsZVJlc3BvbnNpdmVMb2dpYyB3aWxsIGV4ZWN1dGUgYXQgYSByYXRlIG9mIDE1ZnBzXG4gICAgICB9LCA2Nik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2l2ZUxvZ2ljKCkge1xuICAgIC8vIGhhbmRsZSB0aGUgcmVzaXplIGV2ZW50XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgaW5mbGVjdGlvblBvaW50KSB7XG4gICAgICByZW5kZXJBc0xpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyQXNUYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBsaXN0O1xuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Jlc3BvbnNpdmUtdGFibGUtd3JhcHBlcicpO1xuXG4gIGxldCBub3RpZmljYXRpb25SZWdpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90aWZpY2F0aW9uUmVnaW9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdhbGVydCcpO1xuICBub3RpZmljYXRpb25SZWdpb24uc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gIG5vdGlmaWNhdGlvblJlZ2lvbi5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseWhpZGRlbicpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvblJlZ2lvbik7XG5cbiAgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UpIHtcbiAgICBub3RpZmljYXRpb25SZWdpb24uaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgfVxuXG4gIGxldCB0YWJsZVBhcmVudCA9IHRhYmxlLnBhcmVudEVsZW1lbnQ7XG5cbiAgdGFibGVQYXJlbnQuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRhYmxlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQXNMaXN0KCkge1xuICAgIGlmICghbGlzdCkge1xuICAgICAgbGV0IGZvY3VzSUQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkO1xuICAgICAgbGlzdCA9IGNvbGxhcHNlVGFibGVUb0xpc3QodGFibGUsIGxhYmVsRGV0YWlscyk7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh0YWJsZSk7XG4gICAgICBub3RpZnkoJ1RoZSBkYXRhIGZvciAnICsgZ2V0VGFibGVOYW1lKHRhYmxlKSArICcgaXMgbm93IGJlaW5nIHJlbmRlcmVkIGFzIGEgbGlzdC4nKTtcbiAgICAgIGlmIChmb2N1c0lEKSB7XG4gICAgICAgIGxldCBmb2N1c1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2ZvY3VzSUR9YCk7XG4gICAgICAgIGlmIChmb2N1c1RhcmdldCkge1xuICAgICAgICAgIGZvY3VzVGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJBc1RhYmxlKCkge1xuICAgIGlmIChsaXN0KSB7XG4gICAgICBsZXQgZm9jdXNJRCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQ7XG4gICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGxpc3QpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgICBsaXN0ID0gbnVsbDtcbiAgICAgIG5vdGlmeSgnVGhlIGRhdGEgZm9yICcgKyBnZXRUYWJsZU5hbWUodGFibGUpICsgJyBpcyBub3cgYmVpbmcgcmVuZGVyZWQgYXMgYSB0YWJsZS4nKTtcblxuICAgICAgaWYgKGZvY3VzSUQpIHtcbiAgICAgICAgbGV0IGZvY3VzVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9jdXNJRH1gKTtcbiAgICAgICAgaWYgKGZvY3VzVGFyZ2V0KSB7XG4gICAgICAgICAgZm9jdXNUYXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVUaHJvdHRsZXIpO1xuICBoYW5kbGVSZXNwb25zaXZlTG9naWMoKTtcbiAgcmV0dXJuIHRhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VUYWJsZVRvTGlzdCh0YWJsZSwge2xhYmVsQ29sdW1ucyA9IFtdLCBsYWJlbEZ1bmN0aW9uID0gKCkgPT4gJ1JvdzonfSkge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgncmVzcG9uc2l2ZS10YWJsZS1saXN0LWhvbGRlcicpO1xuXG4gIGNvbnN0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjYXB0aW9uLmlubmVyVGV4dCA9IGdldFRhYmxlTmFtZSh0YWJsZSk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChjYXB0aW9uKTtcblxuICBsZXQgaGVhZGVycyA9IHF1ZXJ5QWxsKCd0aCcsIHRhYmxlKTtcbiAgbGV0IHJvd3MgPSBxdWVyeUFsbCgndGJvZHkgdHInLCB0YWJsZSk7XG5cbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZC10YWJsZScpO1xuICBsaXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1udW0tY29sdW1ucycsIGhlYWRlcnMubGVuZ3RoKTtcblxuICByb3dzLnJlZHVjZSgobGlzdCwgcm93KSA9PiB7XG4gICAgbGV0IGxhYmVsRGF0YSA9IFtdO1xuICAgIGxhYmVsQ29sdW1ucy5mb3JFYWNoKGkgPT4ge1xuICAgICAgbGFiZWxEYXRhLnB1c2gocm93LmNoaWxkcmVuW2ldKTtcbiAgICB9KTtcblxuICAgIGxldCBoZWFkZXIgPSBsYWJlbEZ1bmN0aW9uLmFwcGx5KG51bGwsIGxhYmVsRGF0YSk7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkLXRhYmxlLWhlYWRlcicpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGhlYWRlci5vdXRlckhUTUwgPyBoZWFkZXIub3V0ZXJIVE1MIDogaGVhZGVyO1xuICAgIGxpLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIGxldCBzdWJsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzdWJsaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZC10YWJsZS1jb250ZW50Jyk7XG5cbiAgICBxdWVyeUFsbCgndGgsIHRkJywgcm93KS5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGNvbnRlbnRDb2x1bW5zID0gW107XG4gICAgICBpZiAobGFiZWxDb2x1bW5zLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBjb250ZW50Q29sdW1ucy5wdXNoKHtjZWxsLCBsYWJlbDogaGVhZGVyc1tpbmRleF0uaW5uZXJIVE1MfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZW50Q29sdW1ucy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgY29udGVudENvbHVtbnMuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFibGUtY29sdW1uLWluZGV4JywgaW5kZXgpO1xuXG4gICAgICAgICAgbGV0IGxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBsYWJlbFNwYW4uaW5uZXJIVE1MID0gZGF0dW0ubGFiZWw7XG4gICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChsYWJlbFNwYW4pO1xuXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGRhdHVtLmNlbGwuaW5uZXJIVE1MO1xuICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgc3VibGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBwcmVzZXJ2ZXMgZm9jdXNcblxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc3VibGlzdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBsaS5hcHBlbmRDaGlsZChzdWJsaXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfSwgbGlzdCk7XG5cbiAgb3V0cHV0LmFwcGVuZENoaWxkKGxpc3QpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuLyogZW5kIEB0YWJsZS1jb2xsYXBzaW5nICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29sbGFwc2luZ1RhYmxlL2luZGV4LmpzIiwiLyogQHNsaWRlciAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2xpZGVyKHNsaWRlciwgb3V0cHV0LCBpbml0aWFsQ29udGVudCkge1xuICB2YXIgbWluVmFsdWUgPSBzbGlkZXIuZ2V0QXR0cmlidXRlKCdtaW4nKTtcbiAgdmFyIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxDb250ZW50O1xuICB2YXIgbWF4VmFsdWUgPSBzbGlkZXIuZ2V0QXR0cmlidXRlKCdtYXgnKTtcbiAgdmFyIHN0ZXBTaXplID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnc3RlcCcpO1xuICB2YXIgb3JpZW50YXRpb24gPSBzbGlkZXIuZ2V0QXR0cmlidXRlKCdhcmlhLW9yaWVudGF0aW9uJyk7XG5cbiAgaWYgKG9yaWVudGF0aW9uID09PSBudWxsKXtcbiAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgfVxuXG4gIGlmIChpc05hTihtaW5WYWx1ZSkgfHwgaXNOYU4obWF4VmFsdWUpIHx8IGlzTmFOKGluaXRpYWxWYWx1ZSkgfHwgaXNOYU4oc3RlcFNpemUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaW4sIG1heCwgaW5pdGlhbCB2YWx1ZXMgbXVzdCBhbGwgYmUgbnVtYmVycy4gU3RlcFNpemUgbXVzdCBiZSBhIG51bWJlci4nKTtcbiAgfVxuXG4gIGlmIChvcmllbnRhdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdvcmllbnRhdGlvbiBtdXN0IGJlIGVpdGhlciBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIsIG9yIGJsYW5rIChkZWZhdWx0cyB0byBob3Jpem9udGFsKScpO1xuICB9XG5cbiAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZnVuY3Rpb24gc2hvdWxkU2V0T3JpZW50KCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNi0xMVxuICAgICAgdmFyIGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgICAgIC8vIEVkZ2UgMjArXG4gICAgICB2YXIgaXNFZGdlID0gIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYTtcbiAgICAgIC8vIEZpcmVmb3ggMS4wK1xuICAgICAgdmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAgIHJldHVybiBpc0lFIHx8IGlzRWRnZSB8fCBpc0ZpcmVmb3g7XG4gICAgfVxuICAgIGlmKHNob3VsZFNldE9yaWVudCgpID09PSB0cnVlKXtcbiAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ29yaWVudCcsICd2ZXJ0aWNhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvdXRwdXQpIHtcbiAgICBvdXRwdXQuaW5uZXJUZXh0ID0gc2xpZGVyLnZhbHVlO1xuICAgIHZhciB0cmlnZ2VyRXZlbnRPdXRwdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0Jywgc2xpZGVyLnZhbHVlKTtcbiAgICAgIG91dHB1dC5pbm5lclRleHQgPSBzbGlkZXIudmFsdWU7XG4gICAgfTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdHJpZ2dlckV2ZW50T3V0cHV0LCBmYWxzZSk7XG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdHJpZ2dlckV2ZW50T3V0cHV0LCBmYWxzZSk7XG4gIH1cbiAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZXRleHQnLCBzbGlkZXIudmFsdWUpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUFsbFNsaWRlcnMoKXtcbiAgdmFyIHNsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVxdWUtc2xpZGVyJyk7XG4gIGZvcih2YXIgaT0wOyBpIDwgc2xpZGVycy5sZW5ndGg7IGkrKyl7XG4gICAgdmFyIHNsaWRlciA9IHNsaWRlcnNbaV0ucXVlcnlTZWxlY3RvcignLmRlcXVlLXNsaWRlci13aWRnZXQnKTtcbiAgICB2YXIgb3V0cHV0ID0gc2xpZGVyc1tpXS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgdmFyIGluaXRpYWxDb250ZW50ID0gb3V0cHV0LmlubmVyVGV4dDtcbiAgICBjcmVhdGVTbGlkZXIoc2xpZGVyLCBvdXRwdXQsIGluaXRpYWxDb250ZW50KTtcbiAgfVxufVxuXG5hY3RpdmF0ZUFsbFNsaWRlcnMoKTtcbi8qIGVuZCBAc2xpZGVyICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2xpZGVyL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgbnUgZnJvbSAnLi9Ob2RlVXRpbHMnO1xuaW1wb3J0IGFwcGx5TG9naWMgZnJvbSAnLi9iZWhhdmlvcic7XG4vKiBAbWVudS1oaWVyYXJjaGljYWwgKi9cbmZ1bmN0aW9uIGFjdGl2YXRlQnJhbmNoKGJyYW5jaCkge1xuICBicmFuY2guc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgYnJhbmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChudS5pc09wZW4oYnJhbmNoKSkge1xuICAgICAgbnUuY2xvc2VOb2RlKGJyYW5jaCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbnUub3Blbk5vZGUoYnJhbmNoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIaWVyYXJjaGljYWxNZW51KGhpZXJhcmNoaWNhbE1lbnUpIHtcbiAgdmFyIGhvbGRlciA9IGhpZXJhcmNoaWNhbE1lbnUucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb25Sb290Jyk7XG4gIHZhciBicmFuY2hlcyA9IGhpZXJhcmNoaWNhbE1lbnUucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbiAgZm9yKHZhciBpPTA7IGkgPCBicmFuY2hlcy5sZW5ndGg7IGkrKyl7XG4gICAgYWN0aXZhdGVCcmFuY2goYnJhbmNoZXNbaV0pO1xuICB9XG5cbiAgYXBwbHlMb2dpYyhob2xkZXIpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUFsbGhpZXJhcmNoaWNhbE1lbnVzKCl7XG4gIHZhciBoaWVyYXJjaGljYWxNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXF1ZS1oaWVyYXJjaGljYWwtbWVudS1ncm91cCcpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGllcmFyY2hpY2FsTWVudXMubGVuZ3RoOyBpKyspe1xuICAgIGNyZWF0ZUhpZXJhcmNoaWNhbE1lbnUoaGllcmFyY2hpY2FsTWVudXNbaV0pO1xuICB9XG59XG5cbmFjdGl2YXRlQWxsaGllcmFyY2hpY2FsTWVudXMoKTtcbi8qIGVuZCBAbWVudS1oaWVyYXJjaGljYWwgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oaWVyYXJjaGljYWxNZW51L2luZGV4LmpzIiwiLyogQGhpZXJhcmNoaWNhbE1lbnUtTm9kZVV0aWxzICovXG5leHBvcnQgZnVuY3Rpb24gaXNPcGVuKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTm9kZShub2RlKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk5vZGUobm9kZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9jdXMobm9kZXMsIHRvRm9jdXMpIHtcbiAgbm9kZXMuZm9yRWFjaCgobikgPT4ge1xuICAgIGlmIChuID09PSB0b0ZvY3VzKSB7XG4gICAgICBuLnRhYkluZGV4ID0gMDtcbiAgICAgIG4uZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbi50YWJJbmRleCA9IC0xO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0VmlzaWJsZU5vZGUoaXRlbXMsIG5vZGUpIHtcbiAgY29uc3QgdmlzaWJsZXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gaXNWaXNpYmxlKGl0ZW0sIHRydWUsIHRydWUpO1xuICB9KTtcbiAgY29uc3QgaWR4ID0gdmlzaWJsZXMuaW5kZXhPZihub2RlKTtcbiAgcmV0dXJuIHZpc2libGVzW2lkeCArIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNWaXNpYmxlTm9kZShpdGVtcywgbm9kZSkge1xuICBjb25zdCB2aXNpYmxlcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpc1Zpc2libGUoaXRlbSwgdHJ1ZSwgdHJ1ZSk7XG4gIH0pO1xuICBjb25zdCBpZHggPSB2aXNpYmxlcy5pbmRleE9mKG5vZGUpO1xuICByZXR1cm4gdmlzaWJsZXNbaWR4IC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Zpc2libGUoZWwsIHNjcmVlblJlYWRlciwgcmVjdXJzZWQpIHtcbiAgbGV0IHN0eWxlO1xuICBjb25zdCBub2RlTmFtZSA9IGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG4gIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG5cbiAgLy8gOSA9PT0gTm9kZS5ET0NVTUVOVFxuICBpZiAoZWwubm9kZVR5cGUgPT09IDkpIHsgcmV0dXJuIHRydWU7IH1cblxuICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcbiAgaWYgKHN0eWxlID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGNvbnN0IGlzRGlzcGxheU5vbmUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJztcbiAgY29uc3QgaXNJbnZpc2libGVUYWcgPSBub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU1RZTEUnIHx8IG5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnO1xuICBjb25zdCBzckhpZGRlbiA9IHNjcmVlblJlYWRlciAmJiBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJztcbiAgY29uc3QgaXNJbnZpc2libGUgPSAhcmVjdXJzZWQgJiYgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJztcblxuICBpZiAoaXNEaXNwbGF5Tm9uZSB8fCBpc0ludmlzaWJsZVRhZyB8fCBzckhpZGRlbiB8fCBpc0ludmlzaWJsZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICByZXR1cm4gaXNWaXNpYmxlKHBhcmVudCwgc2NyZWVuUmVhZGVyLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qIGVuZCBAaGllcmFyY2hpY2FsTWVudS1Ob2RlVXRpbHMgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oaWVyYXJjaGljYWxNZW51L05vZGVVdGlscy5qcyIsIi8qIEBoaWVyYXJjaGljYWxNZW51LWJlaGF2aW9yICovXG5pbXBvcnQgKiBhcyBLZXlib2FyZFV0aWxzIGZyb20gJy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcbmltcG9ydCAqIGFzIE5vZGVVdGlscyBmcm9tICcuL05vZGVVdGlscyc7XG5pbXBvcnQge3F1ZXJ5QWxsfSBmcm9tICcuLi9fdXRpbHMvc2VsZWN0aW9uVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseUxvZ2ljKGhvbGRlcikge1xuICB2YXIgdHJlZUl0ZW1zID0gcXVlcnlBbGwoJ3VsID4gbGkgPiBbZGF0YS1tZW51LWlkXScsIGhvbGRlcik7XG5cbiAgdHJlZUl0ZW1zLmZvckVhY2goKG5vZGUsIGkpID0+IHtcbiAgICAvLyBzZXR1cCB0YWJpbmRpY2llcyAtIGluaXRpYWxseSwgb25seSB0aGUgZmlyc3QgdG9wLWxldmVsIGlzIDBcbiAgICBub2RlLnRhYkluZGV4ID0gaSA9PT0gMCA/IDAgOiAtMTtcblxuICAgIC8vIGV2ZW50c1xuICAgIEtleWJvYXJkVXRpbHMub25FbGVtZW50UmlnaHQobm9kZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghTm9kZVV0aWxzLmlzT3Blbihub2RlKSAmJiBub2RlLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpKSB7XG4gICAgICAgIG5vZGUuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIEtleWJvYXJkVXRpbHMub25FbGVtZW50RG93bihub2RlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmV4dCA9IE5vZGVVdGlscy5nZXROZXh0VmlzaWJsZU5vZGUodHJlZUl0ZW1zLCBub2RlKTtcbiAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgIE5vZGVVdGlscy5zZXRGb2N1cyh0cmVlSXRlbXMsIG5leHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRVcChub2RlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcHJldiA9IE5vZGVVdGlscy5nZXRQcmV2aW91c1Zpc2libGVOb2RlKHRyZWVJdGVtcywgbm9kZSk7XG4gICAgICBpZiAocHJldikge1xuICAgICAgICBOb2RlVXRpbHMuc2V0Rm9jdXModHJlZUl0ZW1zLCBwcmV2KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIEtleWJvYXJkVXRpbHMub25FbGVtZW50TGVmdChub2RlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gaWYgaXQgaXMgYW4gZXhwYW5kZWQgdHJlZSBpdGVtLCBqdXN0IGNvbGxhcHNlIGl0IChrZWVwaW5nIGZvY3VzIG9uIG5vZGUpXG4gICAgICBpZiAoTm9kZVV0aWxzLmlzT3Blbihub2RlKSkgeyByZXR1cm4gbm9kZS5jbGljaygpOyB9XG5cbiAgICAgIC8vIGF0dGVtcHQgdG8gZm9jdXMgdGhlIHBhcmVudCBtZW51XG4gICAgICB2YXIgcGFyZW50SWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQtaWQnKTtcbiAgICAgIHZhciBwYXJlbnRUcmVlSXRlbSA9IHBhcmVudElkICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKTtcblxuICAgICAgaWYgKHBhcmVudFRyZWVJdGVtKSB7XG4gICAgICAgIE5vZGVVdGlscy5zZXRGb2N1cyh0cmVlSXRlbXMsIHBhcmVudFRyZWVJdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4vKiBlbmQgQGhpZXJhcmNoaWNhbE1lbnUtYmVoYXZpb3IgKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oaWVyYXJjaGljYWxNZW51L2JlaGF2aW9yLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9