"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "premiseStatementForMetavariableMatcher", {
    enumerable: true,
    get: function() {
        return premiseStatementForMetavariableMatcher;
    }
});
var _statementForMetavariable = /*#__PURE__*/ _interopRequireDefault(require("../../matcher/statementForMetavariable"));
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
var PremiseStatementForMetavariableMatcher = /*#__PURE__*/ function(StatementForMetavariableMatcher) {
    _inherits(PremiseStatementForMetavariableMatcher, StatementForMetavariableMatcher);
    var _super = _createSuper(PremiseStatementForMetavariableMatcher);
    function PremiseStatementForMetavariableMatcher() {
        _classCallCheck(this, PremiseStatementForMetavariableMatcher);
        return _super.apply(this, arguments);
    }
    return PremiseStatementForMetavariableMatcher;
}(_statementForMetavariable.default);
_defineProperty(PremiseStatementForMetavariableMatcher, "createSubstitutions", true);
var premiseStatementForMetavariableMatcher = new PremiseStatementForMetavariableMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciBmcm9tIFwiLi4vLi4vbWF0Y2hlci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuY2xhc3MgUHJlbWlzZVN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIgZXh0ZW5kcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIHtcbiAgc3RhdGljIGNyZWF0ZVN1YnN0aXR1dGlvbnMgPSB0cnVlO1xufVxuXG5leHBvcnQgY29uc3QgcHJlbWlzZVN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIgPSBuZXcgUHJlbWlzZVN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIoKTtcbiJdLCJuYW1lcyI6WyJwcmVtaXNlU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciIsIlByZW1pc2VTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFhQTs7O2VBQUFBOzs7NkVBTitCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBQSxBQUFNQyx1REFJSCxBQUpIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztXQUFBQTtFQUErQ0MsaUNBQStCO0FBQ2xGLGdCQURJRCx3Q0FDR0UsdUJBQXNCLElBQUk7QUFHNUIsSUFBTUgseUNBQXlDLElBQUlDIn0=