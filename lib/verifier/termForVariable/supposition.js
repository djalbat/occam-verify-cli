"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "suppositionTermForVariableVerifier", {
    enumerable: true,
    get: function() {
        return suppositionTermForVariableVerifier;
    }
});
var _termForVariable = /*#__PURE__*/ _interopRequireDefault(require("../../verifier/termForVariable"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var SuppositionTermForVariableVerifier = /*#__PURE__*/ function(TermForVariableVerifier) {
    _inherits(SuppositionTermForVariableVerifier, TermForVariableVerifier);
    var _super = _createSuper(SuppositionTermForVariableVerifier);
    function SuppositionTermForVariableVerifier() {
        _classCallCheck(this, SuppositionTermForVariableVerifier);
        return _super.apply(this, arguments);
    }
    return SuppositionTermForVariableVerifier;
}(_termForVariable.default);
_defineProperty(SuppositionTermForVariableVerifier, "createSubstitutions", true);
var suppositionTermForVariableVerifier = new SuppositionTermForVariableVerifier();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci90ZXJtRm9yVmFyaWFibGUvc3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtRm9yVmFyaWFibGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvdGVybUZvclZhcmlhYmxlXCI7XG5cbmNsYXNzIFN1cHBvc2l0aW9uVGVybUZvclZhcmlhYmxlVmVyaWZpZXIgZXh0ZW5kcyBUZXJtRm9yVmFyaWFibGVWZXJpZmllciB7XG4gIHN0YXRpYyBjcmVhdGVTdWJzdGl0dXRpb25zID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHN1cHBvc2l0aW9uVGVybUZvclZhcmlhYmxlVmVyaWZpZXIgPSBuZXcgU3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVWZXJpZmllcigpO1xuIl0sIm5hbWVzIjpbInN1cHBvc2l0aW9uVGVybUZvclZhcmlhYmxlVmVyaWZpZXIiLCJTdXBwb3NpdGlvblRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIiwiVGVybUZvclZhcmlhYmxlVmVyaWZpZXIiLCJjcmVhdGVTdWJzdGl0dXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRYUE7OztlQUFBQTs7O29FQU51Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUMsbURBSUgsQUFKSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7V0FBQUE7RUFBMkNDLHdCQUF1QjtBQUN0RSxnQkFESUQsb0NBQ0dFLHVCQUFzQixJQUFJO0FBRzVCLElBQU1ILHFDQUFxQyxJQUFJQyJ9