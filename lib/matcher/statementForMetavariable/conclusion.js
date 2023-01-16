"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conclusionStatementForMetavariableMatcher", {
    enumerable: true,
    get: function() {
        return conclusionStatementForMetavariableMatcher;
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
var ConclusionStatementForMetavariableMatcher = /*#__PURE__*/ function(StatementForMetavariableMatcher) {
    _inherits(ConclusionStatementForMetavariableMatcher, StatementForMetavariableMatcher);
    var _super = _createSuper(ConclusionStatementForMetavariableMatcher);
    function ConclusionStatementForMetavariableMatcher() {
        _classCallCheck(this, ConclusionStatementForMetavariableMatcher);
        return _super.apply(this, arguments);
    }
    return ConclusionStatementForMetavariableMatcher;
}(_statementForMetavariable.default);
_defineProperty(ConclusionStatementForMetavariableMatcher, "createSubstitutions", false);
var conclusionStatementForMetavariableMatcher = new ConclusionStatementForMetavariableMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRjaGVyL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciBmcm9tIFwiLi4vLi4vbWF0Y2hlci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuY2xhc3MgQ29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIgZXh0ZW5kcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIHtcbiAgc3RhdGljIGNyZWF0ZVN1YnN0aXR1dGlvbnMgPSBmYWxzZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyID0gbmV3IENvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsiY29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIiLCJDb25jbHVzaW9uU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIiLCJjcmVhdGVTdWJzdGl0dXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRYUE7OztlQUFBQTs7OzZFQU4rQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLElBQUEsQUFBTUMsMERBSUgsQUFKSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7V0FBQUE7RUFBa0RDLGlDQUErQjtBQUNyRixnQkFESUQsMkNBQ0dFLHVCQUFzQixLQUFLO0FBRzdCLElBQU1ILDRDQUE0QyxJQUFJQyJ9