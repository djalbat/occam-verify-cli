"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "suppositionTermForVariableMatcher", {
    enumerable: true,
    get: function() {
        return suppositionTermForVariableMatcher;
    }
});
var _termForVariable = /*#__PURE__*/ _interopRequireDefault(require("../../matcher/termForVariable"));
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
var SuppositionTermForVariableMatcher = /*#__PURE__*/ function(TermForVariableMatcher) {
    _inherits(SuppositionTermForVariableMatcher, TermForVariableMatcher);
    var _super = _createSuper(SuppositionTermForVariableMatcher);
    function SuppositionTermForVariableMatcher() {
        _classCallCheck(this, SuppositionTermForVariableMatcher);
        return _super.apply(this, arguments);
    }
    return SuppositionTermForVariableMatcher;
}(_termForVariable.default);
_defineProperty(SuppositionTermForVariableMatcher, "createSubstitutions", true);
var suppositionTermForVariableMatcher = new SuppositionTermForVariableMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL3Rlcm1Gb3JWYXJpYWJsZS9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZU1hdGNoZXIgZnJvbSBcIi4uLy4uL21hdGNoZXIvdGVybUZvclZhcmlhYmxlXCI7XG5cbmNsYXNzIFN1cHBvc2l0aW9uVGVybUZvclZhcmlhYmxlTWF0Y2hlciBleHRlbmRzIFRlcm1Gb3JWYXJpYWJsZU1hdGNoZXIge1xuICBzdGF0aWMgY3JlYXRlU3Vic3RpdHV0aW9ucyA9IHRydWU7XG59XG5cbmV4cG9ydCBjb25zdCBzdXBwb3NpdGlvblRlcm1Gb3JWYXJpYWJsZU1hdGNoZXIgPSBuZXcgU3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVNYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsic3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVNYXRjaGVyIiwiU3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVNYXRjaGVyIiwiVGVybUZvclZhcmlhYmxlTWF0Y2hlciIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFhQTs7O2VBQUFBOzs7b0VBTnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQyxrREFJSCxBQUpIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztXQUFBQTtFQUEwQ0Msd0JBQXNCO0FBQ3BFLGdCQURJRCxtQ0FDR0UsdUJBQXNCLElBQUk7QUFHNUIsSUFBTUgsb0NBQW9DLElBQUlDIn0=