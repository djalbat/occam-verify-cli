"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "consequenceTermForVariableVerifier", {
    enumerable: true,
    get: function() {
        return consequenceTermForVariableVerifier;
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
var ConsequenceTermForVariableVerifier = /*#__PURE__*/ function(TermForVariableVerifier) {
    _inherits(ConsequenceTermForVariableVerifier, TermForVariableVerifier);
    var _super = _createSuper(ConsequenceTermForVariableVerifier);
    function ConsequenceTermForVariableVerifier() {
        _classCallCheck(this, ConsequenceTermForVariableVerifier);
        return _super.apply(this, arguments);
    }
    return ConsequenceTermForVariableVerifier;
}(_termForVariable.default);
_defineProperty(ConsequenceTermForVariableVerifier, "createSubstitutions", false);
var consequenceTermForVariableVerifier = new ConsequenceTermForVariableVerifier();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci90ZXJtRm9yVmFyaWFibGUvY29uc2VxdWVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtRm9yVmFyaWFibGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvdGVybUZvclZhcmlhYmxlXCI7XG5cbmNsYXNzIENvbnNlcXVlbmNlVGVybUZvclZhcmlhYmxlVmVyaWZpZXIgZXh0ZW5kcyBUZXJtRm9yVmFyaWFibGVWZXJpZmllciB7XG4gIHN0YXRpYyBjcmVhdGVTdWJzdGl0dXRpb25zID0gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCBjb25zZXF1ZW5jZVRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyID0gbmV3IENvbnNlcXVlbmNlVGVybUZvclZhcmlhYmxlVmVyaWZpZXIoKTtcbiJdLCJuYW1lcyI6WyJjb25zZXF1ZW5jZVRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIiwiQ29uc2VxdWVuY2VUZXJtRm9yVmFyaWFibGVWZXJpZmllciIsIlRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztvRUFOdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1DLG1EQUlILEFBSkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1dBQUFBO0VBQTJDQyx3QkFBdUI7QUFDdEUsZ0JBRElELG9DQUNHRSx1QkFBc0IsS0FBSztBQUc3QixJQUFNSCxxQ0FBcUMsSUFBSUMifQ==