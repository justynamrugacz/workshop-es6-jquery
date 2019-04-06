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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/BinaryCalculator.js":
/*!********************************!*\
  !*** ./js/BinaryCalculator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BinaryCalculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator2 = __webpack_require__(/*! ./Calculator */ "./js/Calculator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BinaryCalculator = function (_Calculator) {
    _inherits(BinaryCalculator, _Calculator);

    function BinaryCalculator(settings) {
        _classCallCheck(this, BinaryCalculator);

        var _this = _possibleConstructorReturn(this, (BinaryCalculator.__proto__ || Object.getPrototypeOf(BinaryCalculator)).call(this, settings));

        console.log(_this.getName());
        return _this;
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */


    _createClass(BinaryCalculator, [{
        key: "add",
        value: function add(numberX, numberY) {
            var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (var i = numberX.length - 1; i >= 0; i--) {
                var carryBit = numberX[i] + numberY[i] + result[i];
                if (carryBit === 2) {
                    result[i] = 0;
                    result[i - 1] = 1;
                } else if (carryBit === 3) {
                    result[i] = 1;
                    result[i - 1] = 1;
                } else {
                    result[i] = carryBit;
                }
            }
            return result;
        }

        /* Method changing number
        *  @param {jQuery element} root Parent element
        */

    }, {
        key: "changeNumber",
        value: function changeNumber(root) {
            var _this2 = this;

            var activeElement = root.find('.active');
            activeElement.removeClass("active");
            activeElement.siblings().addClass("active");
            root.children(":first-child").slideToggle(function () {
                _this2.checkNumber();
                _this2.updateResult();
            });
        }

        /* Method changing Result
        */

    }, {
        key: "updateResult",
        value: function updateResult() {
            var root = this.$calculatorDOMElement;
            var $resultNumber = root.children(".group-number").children(".result-bit");
            for (var i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
                var valueResult = parseInt($resultNumber.eq(j).find(".active").text());
                if (this.resultNumberArray[i] != valueResult) {
                    var activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
                    activeElement.siblings().addClass("active");
                    $resultNumber.eq(j).children(":first-child").slideToggle();
                }
            }
        }
    }]);

    return BinaryCalculator;
}(_Calculator2.Calculator);

exports.BinaryCalculator = BinaryCalculator;

/***/ }),

/***/ "./js/Calculator.js":
/*!**************************!*\
  !*** ./js/Calculator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* abstract */var Calculator = function () {
    function Calculator(selectorName) {
        _classCallCheck(this, Calculator);

        this.name = selectorName;
        this.$calculatorDOMElement = $(selectorName);

        this.firstNumberArray = [];
        this.secondNumberArray = [];
        this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.initEvents();
    }

    /* Abstract method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */


    _createClass(Calculator, [{
        key: "add",
        value: function add(numberX, numberY) {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
            return [0, 0, 0, 0, 0, 0, 0, 0];
        }

        /* Abstract method changing number
        *  @param {jQuery element} root Parent element
        */

    }, {
        key: "changeNumber",
        value: function changeNumber(root) {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
        }

        /* Abstract method changing Result
        */

    }, {
        key: "updateResult",
        value: function updateResult() {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
        }

        /* Get the name of calculator selector
        *  @return {string}
        */

    }, {
        key: "getName",
        value: function getName() {
            return "Hello I am " + this.name;
        }

        /* Check what number is set in both numbers and add
        *  @return {string}
        */

    }, {
        key: "checkNumber",
        value: function checkNumber() {
            var root = this.$calculatorDOMElement;
            var $firstNumber = root.children(".group-number").children("label:first-child");
            var $secondNumber = root.children(".group-number").children("label:nth-child(2)");
            var $resultNumber = root.children(".group-number").children(".result-bit");

            for (var i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
                this.firstNumberArray[i] = parseInt($firstNumber.eq(j).find('.active').text());
                this.secondNumberArray[i] = parseInt($secondNumber.eq(j).find('.active').text());
                this.resultNumberArray[i] = parseInt($resultNumber.eq(j).find('.active').text());
            }
            this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
        }

        /* Set event click on number
        */

    }, {
        key: "initEvents",
        value: function initEvents() {
            var _this = this;

            this.$calculatorDOMElement.find(".display-number").on('click', function (event) {
                var parentLabel = $(event.target).parent(".display-number");
                _this.changeNumber(parentLabel);
            });
        }
    }]);

    return Calculator;
}();

exports.Calculator = Calculator;

/***/ }),

/***/ "./js/DecCalculator.js":
/*!*****************************!*\
  !*** ./js/DecCalculator.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DecCalculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Calculator2 = __webpack_require__(/*! ./Calculator */ "./js/Calculator.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecCalculator = function (_Calculator) {
    _inherits(DecCalculator, _Calculator);

    function DecCalculator(selectorName) {
        _classCallCheck(this, DecCalculator);

        var _this = _possibleConstructorReturn(this, (DecCalculator.__proto__ || Object.getPrototypeOf(DecCalculator)).call(this, selectorName));

        console.log(_this.getName());

        return _this;
    }

    _createClass(DecCalculator, [{
        key: 'changeNumber',
        value: function changeNumber(root) {
            console.log(root);
            var spanNum = root.children().eq(0);
            spanNum.attr('contenteditable', 'true');
            spanNum.trigger('focus');
        }
    }, {
        key: 'add',
        value: function add(numberX, numberY) {
            var numX = numberX.join('') * 1;
            var numY = numberY.join('') * 1;
            var sum = numX + numY;
            var sumArr = [].concat(_toConsumableArray(sum.toString()));
            var resultArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

            sumArr.reverse().forEach(function (element, index) {
                var indexFromTheEnd = resultArr.length - 1 - index;
                resultArr[indexFromTheEnd] = element * 1;
            });

            return resultArr;
        }
    }, {
        key: 'updateResult',
        value: function updateResult() {
            var resultSpans = this.$calculatorDOMElement.find('.result-bit span');
            for (var i = resultSpans.length - 1, j = 0; i >= 0; i--, j++) {
                resultSpans.eq(i).text(this.resultNumberArray[j]);
            }
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            var _this2 = this;

            _get(DecCalculator.prototype.__proto__ || Object.getPrototypeOf(DecCalculator.prototype), 'initEvents', this).call(this);
            var spanNumberSelector = '.display-number__value--zero';
            // $(spanNumberSelector).on('focusin', function(){
            //     console.log("Saving value " + $(this).val());
            //     $(this).data('val', $(this).text());
            // });
            // $(spanNumberSelector).on('input', function (e) {
            //     if($(e.target).text().length > 1){
            //         $(e.target).text( $(this).data('val'));
            //     }
            // });
            $(spanNumberSelector).on('keyup', function () {
                var max = 9;
                if ($(this).text() > max) {
                    $(this).text(max);
                }
            });
            $(spanNumberSelector).on('keydown', function (e) {

                var key = e.charCode || e.keyCode || 0;
                // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
                // home, end, period, and numpad decimal
                return key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || key >= 35 && key <= 40 || key >= 48 && key <= 57 || key >= 96 && key <= 105;
            });

            $('.operator-bar').find('span').on('click', function () {
                _this2.checkNumber();
                _this2.updateResult();
            });
        }
    }]);

    return DecCalculator;
}(_Calculator2.Calculator);

exports.DecCalculator = DecCalculator;

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BinaryCalculator = __webpack_require__(/*! ./BinaryCalculator */ "./js/BinaryCalculator.js");

var _DecCalculator = __webpack_require__(/*! ./DecCalculator */ "./js/DecCalculator.js");

__webpack_require__(/*! ./style.scss */ "./js/style.scss");

$(document).ready(function () {
    var bitCalc = new _BinaryCalculator.BinaryCalculator(".binary-calculator");
    var decCalc = new _DecCalculator.DecCalculator('.dec-calculator');
});

/***/ }),

/***/ "./js/style.scss":
/*!***********************!*\
  !*** ./js/style.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./js/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./js/style.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./js/style.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background: #C0C0C0; }\n\nh2 {\n  font-family: Tahoma;\n  font-size: 2.6em;\n  text-align: center;\n  color: white;\n  text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.3);\n  padding: 1em;\n  box-sizing: border-box; }\n\n.info {\n  width: 45vw;\n  max-width: 600px;\n  font-family: Tahoma;\n  line-height: 1.4;\n  margin: 0 auto;\n  text-align: center;\n  color: #8D8276; }\n\nsection {\n  margin-bottom: 50px; }\n\n.binary-calculator, .dec-calculator {\n  display: block;\n  width: 950px;\n  height: 255px;\n  position: relative;\n  left: 10vw;\n  margin-top: 15vh; }\n  .binary-calculator .group-number, .dec-calculator .group-number {\n    position: absolute; }\n  .binary-calculator .display-number,\n  .binary-calculator .result-bit, .dec-calculator .display-number,\n  .dec-calculator .result-bit {\n    display: block;\n    width: 85px;\n    height: 85px;\n    position: absolute;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: Arial;\n    font-size: 34px; }\n  .binary-calculator .display-number, .dec-calculator .display-number {\n    cursor: pointer;\n    background: #dadada;\n    border-radius: 10%; }\n    .binary-calculator .display-number:hover, .dec-calculator .display-number:hover {\n      font-size: 42.5px; }\n  .binary-calculator .display-number__value--zero,\n  .binary-calculator .display-number__value--one, .dec-calculator .display-number__value--zero,\n  .dec-calculator .display-number__value--one {\n    display: block;\n    float: left;\n    width: 85px;\n    height: 85px;\n    text-align: center;\n    line-height: 85px; }\n  .binary-calculator .display-number__value--zero,\n  .binary-calculator .display-number__value--one, .dec-calculator .display-number__value--zero,\n  .dec-calculator .display-number__value--one {\n    color: #8D8276; }\n  .binary-calculator .result-bit .display-number__value--zero,\n  .binary-calculator .result-bit .display-number__value--one, .dec-calculator .result-bit .display-number__value--zero,\n  .dec-calculator .result-bit .display-number__value--one {\n    color: white; }\n  .binary-calculator .operator-bar, .dec-calculator .operator-bar {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 5px;\n    background: #545E6E;\n    top: 195px;\n    left: 85px;\n    border-radius: 5px; }\n    .binary-calculator .operator-bar span, .dec-calculator .operator-bar span {\n      font-size: 85px;\n      position: absolute;\n      top: -85px;\n      left: 25px;\n      font-family: Tahoma;\n      color: #545E6E;\n      cursor: pointer; }\n  .binary-calculator .group-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(1) {\n    right: 0px; }\n    .binary-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(1) .result-bit, .dec-calculator .group-number:nth-of-type(1) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(2) {\n    right: 95px; }\n    .binary-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(2) .result-bit, .dec-calculator .group-number:nth-of-type(2) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(3), .dec-calculator .group-number:nth-of-type(3) {\n    right: 190px; }\n    .binary-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(3) .result-bit, .dec-calculator .group-number:nth-of-type(3) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(4), .dec-calculator .group-number:nth-of-type(4) {\n    right: 285px; }\n    .binary-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(4) .result-bit, .dec-calculator .group-number:nth-of-type(4) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(5), .dec-calculator .group-number:nth-of-type(5) {\n    right: 380px; }\n    .binary-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(5) .result-bit, .dec-calculator .group-number:nth-of-type(5) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(6), .dec-calculator .group-number:nth-of-type(6) {\n    right: 475px; }\n    .binary-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(6) .result-bit, .dec-calculator .group-number:nth-of-type(6) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(7), .dec-calculator .group-number:nth-of-type(7) {\n    right: 570px; }\n    .binary-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(7) .result-bit, .dec-calculator .group-number:nth-of-type(7) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(8), .dec-calculator .group-number:nth-of-type(8) {\n    right: 665px; }\n    .binary-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(8) .result-bit, .dec-calculator .group-number:nth-of-type(8) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(9), .dec-calculator .group-number:nth-of-type(9) {\n    right: 760px; }\n    .binary-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(9) .result-bit, .dec-calculator .group-number:nth-of-type(9) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(10), .dec-calculator .group-number:nth-of-type(10) {\n    right: 855px; }\n    .binary-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(10) .result-bit, .dec-calculator .group-number:nth-of-type(10) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(11), .dec-calculator .group-number:nth-of-type(11) {\n    right: 950px; }\n    .binary-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(11) .result-bit, .dec-calculator .group-number:nth-of-type(11) .result-bit {\n      top: 200px; }\n  .binary-calculator .display-17,\n  .binary-calculator .display-18, .dec-calculator .display-17,\n  .dec-calculator .display-18 {\n    visibility: hidden; }\n  .binary-calculator .result-9, .dec-calculator .result-9 {\n    border-bottom: 5px solid #dadada; }\n    .binary-calculator .result-9:after, .dec-calculator .result-9:after {\n      content: 'carry';\n      position: absolute;\n      bottom: 5px;\n      left: 0;\n      text-align: center;\n      font-size: .5em;\n      font-family: Tahoma;\n      width: 100%;\n      color: white; }\n\n.tooltip {\n  display: none; }\n\n.tooltip {\n  background: lightslategrey;\n  border: 2px solid #666666;\n  font-size: 20px;\n  padding: 10px;\n  position: relative;\n  text-align: center;\n  width: 158px;\n  top: -111px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  -moz-box-shadow: 0px 0px 5px #aaa;\n  -webkit-box-shadow: 0px 0px 5px #aaa;\n  box-shadow: 0px 0px 5px #aaa; }\n\n.chatBubbleArrow {\n  border-color: lightslategrey transparent transparent transparent;\n  border-style: solid;\n  border-width: 10px;\n  height: 0px;\n  width: 0px;\n  position: absolute;\n  bottom: -19px;\n  left: 30px; }\n\n.chatBubbleArrowBorder {\n  border-color: #666666 transparent transparent transparent;\n  border-style: solid;\n  border-width: 10px;\n  height: 0;\n  width: 0;\n  position: absolute;\n  bottom: -22px;\n  left: 30px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQmluYXJ5Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL3N0eWxlLnNjc3M/NTkwZSIsIndlYnBhY2s6Ly8vLi9qcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOlsiQmluYXJ5Q2FsY3VsYXRvciIsInNldHRpbmdzIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJudW1iZXJYIiwibnVtYmVyWSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJjYXJyeUJpdCIsInJvb3QiLCJhY3RpdmVFbGVtZW50IiwiZmluZCIsInJlbW92ZUNsYXNzIiwic2libGluZ3MiLCJhZGRDbGFzcyIsImNoaWxkcmVuIiwic2xpZGVUb2dnbGUiLCJjaGVja051bWJlciIsInVwZGF0ZVJlc3VsdCIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsIiRyZXN1bHROdW1iZXIiLCJyZXN1bHROdW1iZXJBcnJheSIsImoiLCJ2YWx1ZVJlc3VsdCIsInBhcnNlSW50IiwiZXEiLCJ0ZXh0IiwiQ2FsY3VsYXRvciIsInNlbGVjdG9yTmFtZSIsIm5hbWUiLCIkIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwiaW5pdEV2ZW50cyIsImVycm9yIiwiJGZpcnN0TnVtYmVyIiwiJHNlY29uZE51bWJlciIsImFkZCIsIm9uIiwiZXZlbnQiLCJwYXJlbnRMYWJlbCIsInRhcmdldCIsInBhcmVudCIsImNoYW5nZU51bWJlciIsIkRlY0NhbGN1bGF0b3IiLCJzcGFuTnVtIiwiYXR0ciIsInRyaWdnZXIiLCJudW1YIiwiam9pbiIsIm51bVkiLCJzdW0iLCJzdW1BcnIiLCJ0b1N0cmluZyIsInJlc3VsdEFyciIsInJldmVyc2UiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiaW5kZXhGcm9tVGhlRW5kIiwicmVzdWx0U3BhbnMiLCJzcGFuTnVtYmVyU2VsZWN0b3IiLCJtYXgiLCJlIiwia2V5IiwiY2hhckNvZGUiLCJrZXlDb2RlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImJpdENhbGMiLCJkZWNDYWxjIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7OztJQUVNQSxnQjs7O0FBQ0YsOEJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx3SUFDWkEs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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9hcHAuanNcIik7XG4iLCJpbXBvcnQgeyBDYWxjdWxhdG9yIH0gZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xyXG5cclxuY2xhc3MgQmluYXJ5Q2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3J7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xyXG4gICAgICAgIHN1cGVyKHNldHRpbmdzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5nZXROYW1lKCkgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZXRob2QgYWRkIG51bWJlcnMgaW4gdHdvIGFycmF5XHJcbiAgICAqICBAcGFyYW0ge2FycmF5fSBudW1iZXJYIEZpcnN0IG51bWJlclxyXG4gICAgKiAgQHBhcmFtIHthcnJheX0gbnVtYmVyWSBTZWNvbmQgbnVtYmVyXHJcbiAgICAqICBAcmV0dXJuIHthcnJheX1cclxuICAgICovXHJcbiAgICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbMCwwLDAsMCwwLDAsMCwwLDBdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IG51bWJlclgubGVuZ3RoIC0gMTsgaSA+PSAwICA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY2FycnlCaXQgPSAgbnVtYmVyWFtpXSArIG51bWJlcllbaV0gKyByZXN1bHRbaV07XHJcbiAgICAgICAgICAgIGlmKCBjYXJyeUJpdCAgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaS0xXSA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FycnlCaXQgPT09IDMgKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IDE7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaS0xXSA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBjYXJyeUJpdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1ldGhvZCBjaGFuZ2luZyBudW1iZXJcclxuICAgICogIEBwYXJhbSB7alF1ZXJ5IGVsZW1lbnR9IHJvb3QgUGFyZW50IGVsZW1lbnRcclxuICAgICovXHJcbiAgICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgICAgIGxldCBhY3RpdmVFbGVtZW50ID0gcm9vdC5maW5kKCcuYWN0aXZlJyk7XHJcbiAgICAgICAgYWN0aXZlRWxlbWVudC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBhY3RpdmVFbGVtZW50LnNpYmxpbmdzKCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgcm9vdC5jaGlsZHJlbihcIjpmaXJzdC1jaGlsZFwiKS5zbGlkZVRvZ2dsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyKCk7XHJcbiAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1ldGhvZCBjaGFuZ2luZyBSZXN1bHRcclxuICAgICovXHJcbiAgICB1cGRhdGVSZXN1bHQoKSB7XHJcbiAgICAgICAgIGxldCByb290ID0gIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50O1xyXG4gICAgICAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QuY2hpbGRyZW4oXCIuZ3JvdXAtbnVtYmVyXCIpLmNoaWxkcmVuKFwiLnJlc3VsdC1iaXRcIik7XHJcbiAgICAgICAgIGZvcihsZXQgaSA9ICB0aGlzLnJlc3VsdE51bWJlckFycmF5Lmxlbmd0aCAtIDEsIGogPSAwOyBpID49IDAgOyBpLS0sIGorKykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVSZXN1bHQgPSBwYXJzZUludCggJHJlc3VsdE51bWJlci5lcShqKS5maW5kKFwiLmFjdGl2ZVwiKS50ZXh0KCkgKTtcclxuICAgICAgICAgICAgaWYoIHRoaXMucmVzdWx0TnVtYmVyQXJyYXlbaV0gIT0gdmFsdWVSZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlRWxlbWVudCA9ICRyZXN1bHROdW1iZXIuZXEoaikuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LnNpYmxpbmdzKCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAkcmVzdWx0TnVtYmVyLmVxKGopLmNoaWxkcmVuKFwiOmZpcnN0LWNoaWxkXCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCaW5hcnlDYWxjdWxhdG9yICB9O1xyXG4iLCIvKiBhYnN0cmFjdCAqLyBjbGFzcyBDYWxjdWxhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xyXG4gICAgICAgICB0aGlzLm5hbWUgPSBzZWxlY3Rvck5hbWU7XHJcbiAgICAgICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50ID0gJChzZWxlY3Rvck5hbWUpO1xyXG5cclxuICAgICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5ID0gW107XHJcbiAgICAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkgPSBbXTtcclxuICAgICAgICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IFswLDAsMCwwLDAsMCwwLDAsMF07XHJcbiAgICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gICB9XHJcblxyXG4gICAvKiBBYnN0cmFjdCBtZXRob2QgYWRkIG51bWJlcnMgaW4gdHdvIGFycmF5XHJcbiAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclggRmlyc3QgbnVtYmVyXHJcbiAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclkgU2Vjb25kIG51bWJlclxyXG4gICAqICBAcmV0dXJuIHthcnJheX1cclxuICAgKi9cclxuICAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3dpbmllbmXFmyB6YWltcGxlbWVudG93YcSHIHTEhSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLiBcIik7XHJcbiAgICAgICByZXR1cm4gWzAsMCwwLDAsMCwwLDAsMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qIEFic3RyYWN0IG1ldGhvZCBjaGFuZ2luZyBudW1iZXJcclxuICAgKiAgQHBhcmFtIHtqUXVlcnkgZWxlbWVudH0gcm9vdCBQYXJlbnQgZWxlbWVudFxyXG4gICAqL1xyXG4gICBjaGFuZ2VOdW1iZXIocm9vdCkge1xyXG4gICAgICAgY29uc29sZS5lcnJvcihcIlBvd2luaWVuZcWbIHphaW1wbGVtZW50b3dhxIcgdMSFIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouIFwiKTtcclxuICAgfVxyXG5cclxuICAgLyogQWJzdHJhY3QgbWV0aG9kIGNoYW5naW5nIFJlc3VsdFxyXG4gICAqL1xyXG4gICB1cGRhdGVSZXN1bHQoKSB7XHJcbiAgICAgICBjb25zb2xlLmVycm9yKFwiUG93aW5pZW5lxZsgemFpbXBsZW1lbnRvd2HEhyB0xIUgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai4gXCIpO1xyXG4gICB9XHJcblxyXG4gICAvKiBHZXQgdGhlIG5hbWUgb2YgY2FsY3VsYXRvciBzZWxlY3RvclxyXG4gICAqICBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgIGdldE5hbWUoKSB7XHJcbiAgICAgICByZXR1cm4gYEhlbGxvIEkgYW0gJHt0aGlzLm5hbWV9YDtcclxuICAgfVxyXG5cclxuICAgLyogQ2hlY2sgd2hhdCBudW1iZXIgaXMgc2V0IGluIGJvdGggbnVtYmVycyBhbmQgYWRkXHJcbiAgICogIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICAgY2hlY2tOdW1iZXIoKSB7XHJcbiAgICAgICBsZXQgcm9vdCA9ICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudDtcclxuICAgICAgIGxldCAkZmlyc3ROdW1iZXIgPSByb290LmNoaWxkcmVuKFwiLmdyb3VwLW51bWJlclwiKS5jaGlsZHJlbihcImxhYmVsOmZpcnN0LWNoaWxkXCIpO1xyXG4gICAgICAgbGV0ICRzZWNvbmROdW1iZXIgPSByb290LmNoaWxkcmVuKFwiLmdyb3VwLW51bWJlclwiKS5jaGlsZHJlbihcImxhYmVsOm50aC1jaGlsZCgyKVwiKTtcclxuICAgICAgIGxldCAkcmVzdWx0TnVtYmVyID0gcm9vdC5jaGlsZHJlbihcIi5ncm91cC1udW1iZXJcIikuY2hpbGRyZW4oXCIucmVzdWx0LWJpdFwiKTtcclxuXHJcbiAgICAgICBmb3IobGV0IGkgPSAkZmlyc3ROdW1iZXIubGVuZ3RoLTEsIGogPSAwOyBpID49IDAgOyBpLS0sIGorKykge1xyXG4gICAgICAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KCAkZmlyc3ROdW1iZXIuZXEoaikuZmluZCgnLmFjdGl2ZScpLnRleHQoKSApO1xyXG4gICAgICAgICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludCggJHNlY29uZE51bWJlci5lcShqKS5maW5kKCcuYWN0aXZlJykudGV4dCgpICk7XHJcbiAgICAgICAgICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KCAkcmVzdWx0TnVtYmVyLmVxKGopLmZpbmQoJy5hY3RpdmUnKS50ZXh0KCkgKTtcclxuICAgICAgIH1cclxuICAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSB0aGlzLmFkZCh0aGlzLmZpcnN0TnVtYmVyQXJyYXksIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkpO1xyXG4gICB9XHJcblxyXG4gICAvKiBTZXQgZXZlbnQgY2xpY2sgb24gbnVtYmVyXHJcbiAgICovXHJcbiAgIGluaXRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQuZmluZChcIi5kaXNwbGF5LW51bWJlclwiKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50TGFiZWwgPSAkKGV2ZW50LnRhcmdldCkucGFyZW50KFwiLmRpc3BsYXktbnVtYmVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZU51bWJlcihwYXJlbnRMYWJlbCk7XHJcbiAgICAgICAgfSlcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDYWxjdWxhdG9yICB9O1xyXG4iLCJcclxuaW1wb3J0IHsgQ2FsY3VsYXRvciB9IGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcclxuXHJcbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xyXG4gICAgICAgIHN1cGVyKHNlbGVjdG9yTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXROYW1lKCkpO1xyXG5cclxuICAgIH1cclxuICAgIGNoYW5nZU51bWJlcihyb290KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocm9vdCk7XHJcbiAgICAgICAgbGV0IHNwYW5OdW0gPSByb290LmNoaWxkcmVuKCkuZXEoMCk7XHJcbiAgICAgICAgc3Bhbk51bS5hdHRyKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpXHJcbiAgICAgICAgc3Bhbk51bS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgfVxyXG4gICAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgICAgICBsZXQgbnVtWCA9IG51bWJlclguam9pbignJykgKiAxO1xyXG4gICAgICAgIGxldCBudW1ZID0gbnVtYmVyWS5qb2luKCcnKSAqIDE7XHJcbiAgICAgICAgbGV0IHN1bSA9IG51bVggKyBudW1ZO1xyXG4gICAgICAgIGxldCBzdW1BcnIgPSBbLi4uc3VtLnRvU3RyaW5nKCldO1xyXG4gICAgICAgIGxldCByZXN1bHRBcnIgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcblxyXG4gICAgICAgIHN1bUFyci5yZXZlcnNlKCkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4RnJvbVRoZUVuZCA9IHJlc3VsdEFyci5sZW5ndGggLSAxIC0gaW5kZXg7XHJcbiAgICAgICAgICAgIHJlc3VsdEFycltpbmRleEZyb21UaGVFbmRdID0gZWxlbWVudCAqIDE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVzdWx0KCkge1xyXG4gICAgICAgIGxldCByZXN1bHRTcGFucyA9IHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LmZpbmQoJy5yZXN1bHQtYml0IHNwYW4nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gcmVzdWx0U3BhbnMubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tICwgaisrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFNwYW5zLmVxKGkpLnRleHQodGhpcy5yZXN1bHROdW1iZXJBcnJheVtqXSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0RXZlbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmluaXRFdmVudHMoKTtcclxuICAgICAgICBjb25zdCBzcGFuTnVtYmVyU2VsZWN0b3IgPSAnLmRpc3BsYXktbnVtYmVyX192YWx1ZS0temVybyc7XHJcbiAgICAgICAgLy8gJChzcGFuTnVtYmVyU2VsZWN0b3IpLm9uKCdmb2N1c2luJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJTYXZpbmcgdmFsdWUgXCIgKyAkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAvLyAgICAgJCh0aGlzKS5kYXRhKCd2YWwnLCAkKHRoaXMpLnRleHQoKSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gJChzcGFuTnVtYmVyU2VsZWN0b3IpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gICAgIGlmKCQoZS50YXJnZXQpLnRleHQoKS5sZW5ndGggPiAxKXtcclxuICAgICAgICAvLyAgICAgICAgICQoZS50YXJnZXQpLnRleHQoICQodGhpcykuZGF0YSgndmFsJykpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgJChzcGFuTnVtYmVyU2VsZWN0b3IpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF4ID0gOTtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykudGV4dCgpID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQobWF4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoc3Bhbk51bWJlclNlbGVjdG9yKS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIga2V5ID0gZS5jaGFyQ29kZSB8fCBlLmtleUNvZGUgfHwgMDtcclxuICAgICAgICAgICAgLy8gYWxsb3cgYmFja3NwYWNlLCB0YWIsIGRlbGV0ZSwgZW50ZXIsIGFycm93cywgbnVtYmVycyBhbmQga2V5cGFkIG51bWJlcnMgT05MWVxyXG4gICAgICAgICAgICAvLyBob21lLCBlbmQsIHBlcmlvZCwgYW5kIG51bXBhZCBkZWNpbWFsXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBrZXkgPT0gOCB8fFxyXG4gICAgICAgICAgICAgICAga2V5ID09IDkgfHxcclxuICAgICAgICAgICAgICAgIGtleSA9PSAxMyB8fFxyXG4gICAgICAgICAgICAgICAga2V5ID09IDQ2IHx8XHJcbiAgICAgICAgICAgICAgICBrZXkgPT0gMTEwIHx8XHJcbiAgICAgICAgICAgICAgICBrZXkgPT0gMTkwIHx8XHJcbiAgICAgICAgICAgICAgICAoa2V5ID49IDM1ICYmIGtleSA8PSA0MCkgfHxcclxuICAgICAgICAgICAgICAgIChrZXkgPj0gNDggJiYga2V5IDw9IDU3KSB8fFxyXG4gICAgICAgICAgICAgICAgKGtleSA+PSA5NiAmJiBrZXkgPD0gMTA1KSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm9wZXJhdG9yLWJhcicpLmZpbmQoJ3NwYW4nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXIoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEZWNDYWxjdWxhdG9yIH07XHJcbiIsImltcG9ydCB7IEJpbmFyeUNhbGN1bGF0b3IgfSBmcm9tIFwiLi9CaW5hcnlDYWxjdWxhdG9yXCI7XHJcbmltcG9ydCB7IERlY0NhbGN1bGF0b3IgfSBmcm9tIFwiLi9EZWNDYWxjdWxhdG9yXCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBiaXRDYWxjID0gbmV3IEJpbmFyeUNhbGN1bGF0b3IoXCIuYmluYXJ5LWNhbGN1bGF0b3JcIik7XHJcbiAgICBjb25zdCBkZWNDYWxjID0gbmV3IERlY0NhbGN1bGF0b3IoJy5kZWMtY2FsY3VsYXRvcicpO1xyXG59KVxyXG5cclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNDMEMwQzA7IH1cXG5cXG5oMiB7XFxuICBmb250LWZhbWlseTogVGFob21hO1xcbiAgZm9udC1zaXplOiAyLjZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5pbmZvIHtcXG4gIHdpZHRoOiA0NXZ3O1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGZvbnQtZmFtaWx5OiBUYWhvbWE7XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzhEODI3NjsgfVxcblxcbnNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxcblxcbi5iaW5hcnktY2FsY3VsYXRvciwgLmRlYy1jYWxjdWxhdG9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDk1MHB4O1xcbiAgaGVpZ2h0OiAyNTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEwdnc7XFxuICBtYXJnaW4tdG9wOiAxNXZoOyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlciwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXIsXFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLnJlc3VsdC1iaXQsIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXIsXFxuICAuZGVjLWNhbGN1bGF0b3IgLnJlc3VsdC1iaXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDg1cHg7XFxuICAgIGhlaWdodDogODVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxuICAgIGZvbnQtc2l6ZTogMzRweDsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5kaXNwbGF5LW51bWJlciwgLmRlYy1jYWxjdWxhdG9yIC5kaXNwbGF5LW51bWJlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogI2RhZGFkYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXI6aG92ZXIsIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXI6aG92ZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogNDIuNXB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0temVybyxcXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXJfX3ZhbHVlLS1vbmUsIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXJfX3ZhbHVlLS16ZXJvLFxcbiAgLmRlYy1jYWxjdWxhdG9yIC5kaXNwbGF5LW51bWJlcl9fdmFsdWUtLW9uZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDg1cHg7XFxuICAgIGhlaWdodDogODVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogODVweDsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5kaXNwbGF5LW51bWJlcl9fdmFsdWUtLXplcm8sXFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0tb25lLCAuZGVjLWNhbGN1bGF0b3IgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0temVybyxcXG4gIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS1udW1iZXJfX3ZhbHVlLS1vbmUge1xcbiAgICBjb2xvcjogIzhEODI3NjsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5yZXN1bHQtYml0IC5kaXNwbGF5LW51bWJlcl9fdmFsdWUtLXplcm8sXFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLnJlc3VsdC1iaXQgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0tb25lLCAuZGVjLWNhbGN1bGF0b3IgLnJlc3VsdC1iaXQgLmRpc3BsYXktbnVtYmVyX192YWx1ZS0temVybyxcXG4gIC5kZWMtY2FsY3VsYXRvciAucmVzdWx0LWJpdCAuZGlzcGxheS1udW1iZXJfX3ZhbHVlLS1vbmUge1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAub3BlcmF0b3ItYmFyLCAuZGVjLWNhbGN1bGF0b3IgLm9wZXJhdG9yLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZDogIzU0NUU2RTtcXG4gICAgdG9wOiAxOTVweDtcXG4gICAgbGVmdDogODVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAub3BlcmF0b3ItYmFyIHNwYW4sIC5kZWMtY2FsY3VsYXRvciAub3BlcmF0b3ItYmFyIHNwYW4ge1xcbiAgICAgIGZvbnQtc2l6ZTogODVweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtODVweDtcXG4gICAgICBsZWZ0OiAyNXB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBUYWhvbWE7XFxuICAgICAgY29sb3I6ICM1NDVFNkU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMSkge1xcbiAgICByaWdodDogMHB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDEpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxKSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRvcDogOTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxKSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMSkgLnJlc3VsdC1iaXQge1xcbiAgICAgIHRvcDogMjAwcHg7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIHJpZ2h0OiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDIpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMikgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMikgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgyKSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRvcDogOTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgyKSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMikgLnJlc3VsdC1iaXQge1xcbiAgICAgIHRvcDogMjAwcHg7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDMpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgzKSB7XFxuICAgIHJpZ2h0OiAxOTBweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgzKSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDMpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDMpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMykgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICB0b3A6IDk1cHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMykgLnJlc3VsdC1iaXQsIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDMpIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg0KSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNCkge1xcbiAgICByaWdodDogMjg1cHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg0KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIHRvcDogMDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg0KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMiksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDQpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgdG9wOiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDQpIC5yZXN1bHQtYml0LCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg0KSAucmVzdWx0LWJpdCB7XFxuICAgICAgdG9wOiAyMDBweDsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDUpIHtcXG4gICAgcmlnaHQ6IDM4MHB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDUpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg1KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRvcDogOTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg1KSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNSkgLnJlc3VsdC1iaXQge1xcbiAgICAgIHRvcDogMjAwcHg7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDYpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg2KSB7XFxuICAgIHJpZ2h0OiA0NzVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg2KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDYpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDYpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNikgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICB0b3A6IDk1cHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNikgLnJlc3VsdC1iaXQsIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDYpIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg3KSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNykge1xcbiAgICByaWdodDogNTcwcHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoNykgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg3KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIHRvcDogMDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg3KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMiksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDcpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgdG9wOiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDcpIC5yZXN1bHQtYml0LCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg3KSAucmVzdWx0LWJpdCB7XFxuICAgICAgdG9wOiAyMDBweDsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOCksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDgpIHtcXG4gICAgcmlnaHQ6IDY2NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDgpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg4KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRvcDogOTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg4KSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOCkgLnJlc3VsdC1iaXQge1xcbiAgICAgIHRvcDogMjAwcHg7IH1cXG4gIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDkpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg5KSB7XFxuICAgIHJpZ2h0OiA3NjBweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSg5KSAuZGlzcGxheS1udW1iZXI6bnRoLW9mLXR5cGUoMSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDkpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDkpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICB0b3A6IDk1cHg7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoOSkgLnJlc3VsdC1iaXQsIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDkpIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMCksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDEwKSB7XFxuICAgIHJpZ2h0OiA4NTVweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMCkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTApIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTApIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgdG9wOiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDEwKSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTApIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMSksIC5kZWMtY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDExKSB7XFxuICAgIHJpZ2h0OiA5NTBweDsgfVxcbiAgICAuYmluYXJ5LWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpLCAuZGVjLWNhbGN1bGF0b3IgLmdyb3VwLW51bWJlcjpudGgtb2YtdHlwZSgxMSkgLmRpc3BsYXktbnVtYmVyOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJpbmFyeS1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTEpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTEpIC5kaXNwbGF5LW51bWJlcjpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgdG9wOiA5NXB4OyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAuZ3JvdXAtbnVtYmVyOm50aC1vZi10eXBlKDExKSAucmVzdWx0LWJpdCwgLmRlYy1jYWxjdWxhdG9yIC5ncm91cC1udW1iZXI6bnRoLW9mLXR5cGUoMTEpIC5yZXN1bHQtYml0IHtcXG4gICAgICB0b3A6IDIwMHB4OyB9XFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmRpc3BsYXktMTcsXFxuICAuYmluYXJ5LWNhbGN1bGF0b3IgLmRpc3BsYXktMTgsIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS0xNyxcXG4gIC5kZWMtY2FsY3VsYXRvciAuZGlzcGxheS0xOCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgLmJpbmFyeS1jYWxjdWxhdG9yIC5yZXN1bHQtOSwgLmRlYy1jYWxjdWxhdG9yIC5yZXN1bHQtOSB7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGFkYWRhOyB9XFxuICAgIC5iaW5hcnktY2FsY3VsYXRvciAucmVzdWx0LTk6YWZ0ZXIsIC5kZWMtY2FsY3VsYXRvciAucmVzdWx0LTk6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6ICdjYXJyeSc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogNXB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogLjVlbTtcXG4gICAgICBmb250LWZhbWlseTogVGFob21hO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi50b29sdGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4udG9vbHRpcCB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JleTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjY2NjY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE1OHB4O1xcbiAgdG9wOiAtMTExcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAjYWFhO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAjYWFhO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2FhYTsgfVxcblxcbi5jaGF0QnViYmxlQXJyb3cge1xcbiAgYm9yZGVyLWNvbG9yOiBsaWdodHNsYXRlZ3JleSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDBweDtcXG4gIHdpZHRoOiAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0xOXB4O1xcbiAgbGVmdDogMzBweDsgfVxcblxcbi5jaGF0QnViYmxlQXJyb3dCb3JkZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjNjY2NjY2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMTBweDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjJweDtcXG4gIGxlZnQ6IDMwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==