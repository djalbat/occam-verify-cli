"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _combinator = /*#__PURE__*/ _interopRequireDefault(require("../combinator"));
var _combinator1 = /*#__PURE__*/ _interopRequireDefault(require("../context/release/combinator"));
var _typeNames = require("../typeNames");
var _string = require("../utilities/string");
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var EqualityCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(EqualityCombinator, Combinator);
    var _super = _createSuper(EqualityCombinator);
    function EqualityCombinator() {
        _classCallCheck(this, EqualityCombinator);
        return _super.apply(this, arguments);
    }
    _createClass(EqualityCombinator, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var statementString = "".concat(_typeNames.OBJECT_TYPE_NAME, " = ").concat(_typeNames.OBJECT_TYPE_NAME), releaseContext = _combinator1.default, statementNode = (0, _string.statementNodeFromStatementString)(statementString, releaseContext), equalityCombinator = new EqualityCombinator(statementNode);
                return equalityCombinator;
            }
        }
    ]);
    return EqualityCombinator;
}(_combinator.default);
var equalityCombinator = EqualityCombinator.fromNothing();
var _default = equalityCombinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbWJpbmF0b3JSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlL2NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY2xhc3MgRXF1YWxpdHlDb21iaW5hdG9yIGV4dGVuZHMgQ29tYmluYXRvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBgJHtPQkpFQ1RfVFlQRV9OQU1FfSA9ICR7T0JKRUNUX1RZUEVfTkFNRX1gLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gQ29tYmluYXRvclJlbGVhc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgZXF1YWxpdHlDb21iaW5hdG9yID0gbmV3IEVxdWFsaXR5Q29tYmluYXRvcihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUNvbWJpbmF0b3I7XG4gIH1cbn1cblxuY29uc3QgZXF1YWxpdHlDb21iaW5hdG9yID0gRXF1YWxpdHlDb21iaW5hdG9yLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsaXR5Q29tYmluYXRvcjtcbiJdLCJuYW1lcyI6WyJFcXVhbGl0eUNvbWJpbmF0b3IiLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFN0cmluZyIsIk9CSkVDVF9UWVBFX05BTUUiLCJyZWxlYXNlQ29udGV4dCIsIkNvbWJpbmF0b3JSZWxlYXNlQ29udGV4dCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyIsImVxdWFsaXR5Q29tYmluYXRvciIsIkNvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7OzsrREFuQnVCO2dFQUNjO3lCQUVKO3NCQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1BLG1DQVdILEFBWEg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTUMsa0JBQWtCLEFBQUMsR0FBd0JDLE9BQXRCQSwyQkFBZ0IsRUFBQyxPQUFzQixPQUFqQkEsMkJBQWdCLEdBQzNEQyxpQkFBaUJDLG9CQUF3QixFQUN6Q0MsZ0JBQWdCQyxJQUFBQSx3Q0FBZ0MsRUFBQ0wsaUJBQWlCRSxpQkFDbEVJLHFCQUFxQixJQUx6QlIsbUJBS2dETTtnQkFFbEQsT0FBT0U7WUFDVDs7O1dBUklSO0VBQTJCUyxtQkFBVTtBQVczQyxJQUFNRCxxQkFBcUJSLG1CQUFtQkMsV0FBVztJQUV6RCxXQUFlTyJ9