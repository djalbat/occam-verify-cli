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
                var statementString = "Object = Object", releaseContext = _combinator1.default, statementNode = (0, _string.statementNodeFromStatementString)(statementString, releaseContext), equalityCombinator = new EqualityCombinator(statementNode);
                return equalityCombinator;
            }
        }
    ]);
    return EqualityCombinator;
}(_combinator.default);
var equalityCombinator = EqualityCombinator.fromNothing();
var _default = equalityCombinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbWJpbmF0b3JSZWxlYXNlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWxlYXNlL2NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jbGFzcyBFcXVhbGl0eUNvbWJpbmF0b3IgZXh0ZW5kcyBDb21iaW5hdG9yIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IFwiT2JqZWN0ID0gT2JqZWN0XCIsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBDb21iaW5hdG9yUmVsZWFzZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICBlcXVhbGl0eUNvbWJpbmF0b3IgPSBuZXcgRXF1YWxpdHlDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Q29tYmluYXRvcjtcbiAgfVxufVxuXG5jb25zdCBlcXVhbGl0eUNvbWJpbmF0b3IgPSBFcXVhbGl0eUNvbWJpbmF0b3IuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXF1YWxpdHlDb21iaW5hdG9yO1xuIl0sIm5hbWVzIjpbIkVxdWFsaXR5Q29tYmluYXRvciIsImZyb21Ob3RoaW5nIiwic3RhdGVtZW50U3RyaW5nIiwicmVsZWFzZUNvbnRleHQiLCJDb21iaW5hdG9yUmVsZWFzZUNvbnRleHQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciLCJlcXVhbGl0eUNvbWJpbmF0b3IiLCJDb21iaW5hdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQkE7OztlQUFBOzs7K0RBbEJ1QjtnRUFDYztzQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1BLG1DQVdILEFBWEg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTUMsa0JBQWtCLG1CQUNsQkMsaUJBQWlCQyxvQkFBd0IsRUFDekNDLGdCQUFnQkMsSUFBQUEsd0NBQWdDLEVBQUNKLGlCQUFpQkMsaUJBQ2xFSSxxQkFBcUIsSUFMekJQLG1CQUtnREs7Z0JBRWxELE9BQU9FO1lBQ1Q7OztXQVJJUDtFQUEyQlEsbUJBQVU7QUFXM0MsSUFBTUQscUJBQXFCUCxtQkFBbUJDLFdBQVc7SUFFekQsV0FBZU0ifQ==