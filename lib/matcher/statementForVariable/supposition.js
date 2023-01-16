"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "suppositionStatementForVariableMatcher", {
    enumerable: true,
    get: function() {
        return suppositionStatementForVariableMatcher;
    }
});
var _statementForVariable = /*#__PURE__*/ _interopRequireDefault(require("../../matcher/statementForVariable"));
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
var SuppositionStatementForVariableMatcher = /*#__PURE__*/ function(StatementForVariableMatcher) {
    _inherits(SuppositionStatementForVariableMatcher, StatementForVariableMatcher);
    var _super = _createSuper(SuppositionStatementForVariableMatcher);
    function SuppositionStatementForVariableMatcher() {
        _classCallCheck(this, SuppositionStatementForVariableMatcher);
        return _super.apply(this, arguments);
    }
    return SuppositionStatementForVariableMatcher;
}(_statementForVariable.default);
_defineProperty(SuppositionStatementForVariableMatcher, "createSubstitutions", true);
var suppositionStatementForVariableMatcher = new SuppositionStatementForVariableMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL3N0YXRlbWVudEZvclZhcmlhYmxlL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50Rm9yVmFyaWFibGVNYXRjaGVyIGZyb20gXCIuLi8uLi9tYXRjaGVyL3N0YXRlbWVudEZvclZhcmlhYmxlXCI7XG5cbmNsYXNzIFN1cHBvc2l0aW9uU3RhdGVtZW50Rm9yVmFyaWFibGVNYXRjaGVyIGV4dGVuZHMgU3RhdGVtZW50Rm9yVmFyaWFibGVNYXRjaGVyIHtcbiAgc3RhdGljIGNyZWF0ZVN1YnN0aXR1dGlvbnMgPSB0cnVlO1xufVxuXG5leHBvcnQgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnRGb3JWYXJpYWJsZU1hdGNoZXIgPSBuZXcgU3VwcG9zaXRpb25TdGF0ZW1lbnRGb3JWYXJpYWJsZU1hdGNoZXIoKTtcbiJdLCJuYW1lcyI6WyJzdXBwb3NpdGlvblN0YXRlbWVudEZvclZhcmlhYmxlTWF0Y2hlciIsIlN1cHBvc2l0aW9uU3RhdGVtZW50Rm9yVmFyaWFibGVNYXRjaGVyIiwiU3RhdGVtZW50Rm9yVmFyaWFibGVNYXRjaGVyIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7Ozt5RUFOMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1DLHVEQUlILEFBSkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O1dBQUFBO0VBQStDQyw2QkFBMkI7QUFDOUUsZ0JBRElELHdDQUNHRSx1QkFBc0IsSUFBSTtBQUc1QixJQUFNSCx5Q0FBeUMsSUFBSUMifQ==