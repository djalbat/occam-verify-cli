"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "suppositionSubstitutionMatcher", {
    enumerable: true,
    get: function() {
        return suppositionSubstitutionMatcher;
    }
});
var _substitution = /*#__PURE__*/ _interopRequireDefault(require("../../matcher/substitution"));
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
var SuppositionSubstitutionMatcher = /*#__PURE__*/ function(SubstitutionMatcher) {
    _inherits(SuppositionSubstitutionMatcher, SubstitutionMatcher);
    var _super = _createSuper(SuppositionSubstitutionMatcher);
    function SuppositionSubstitutionMatcher() {
        _classCallCheck(this, SuppositionSubstitutionMatcher);
        return _super.apply(this, arguments);
    }
    return SuppositionSubstitutionMatcher;
}(_substitution.default);
_defineProperty(SuppositionSubstitutionMatcher, "createSubstitutions", true);
var suppositionSubstitutionMatcher = new SuppositionSubstitutionMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL3N1YnN0aXR1dGlvbi9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbk1hdGNoZXIgZnJvbSBcIi4uLy4uL21hdGNoZXIvc3Vic3RpdHV0aW9uXCI7XG5cbmNsYXNzIFN1cHBvc2l0aW9uU3Vic3RpdHV0aW9uTWF0Y2hlciBleHRlbmRzIFN1YnN0aXR1dGlvbk1hdGNoZXIge1xuICBzdGF0aWMgY3JlYXRlU3Vic3RpdHV0aW9ucyA9IHRydWU7XG59XG5cbmV4cG9ydCBjb25zdCBzdXBwb3NpdGlvblN1YnN0aXR1dGlvbk1hdGNoZXIgPSBuZXcgU3VwcG9zaXRpb25TdWJzdGl0dXRpb25NYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsic3VwcG9zaXRpb25TdWJzdGl0dXRpb25NYXRjaGVyIiwiU3VwcG9zaXRpb25TdWJzdGl0dXRpb25NYXRjaGVyIiwiU3Vic3RpdHV0aW9uTWF0Y2hlciIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFhQTs7O2VBQUFBOzs7aUVBTm1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQywrQ0FJSCxBQUpIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztXQUFBQTtFQUF1Q0MscUJBQW1CO0FBQzlELGdCQURJRCxnQ0FDR0UsdUJBQXNCLElBQUk7QUFHNUIsSUFBTUgsaUNBQWlDLElBQUlDIn0=