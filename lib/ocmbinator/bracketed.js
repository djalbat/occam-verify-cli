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
var _metaTypeNames = require("../metaTypeNames");
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
var BracketedCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(BracketedCombinator, Combinator);
    var _super = _createSuper(BracketedCombinator);
    function BracketedCombinator() {
        _classCallCheck(this, BracketedCombinator);
        return _super.apply(this, arguments);
    }
    _createClass(BracketedCombinator, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var statementString = "(".concat(_metaTypeNames.STATEMENT_META_TYPE_NAME, ")"), releaseContext = _combinator1.default, statementNode = (0, _string.statementNodeFromStatementString)(statementString, releaseContext), bracketedCombinator = new BracketedCombinator(statementNode);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);
var bracketedCombinator = BracketedCombinator.fromNothing();
var _default = bracketedCombinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBjb21iaW5hdG9yUmVsZWFzZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcmVsZWFzZS9jb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNsYXNzIEJyYWNrZXRlZENvbWJpbmF0b3IgZXh0ZW5kcyBDb21iaW5hdG9yIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IGAoJHtTVEFURU1FTlRfTUVUQV9UWVBFX05BTUV9KWAsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBjb21iaW5hdG9yUmVsZWFzZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gbmV3IEJyYWNrZXRlZENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxufVxuXG5jb25zdCBicmFja2V0ZWRDb21iaW5hdG9yID0gQnJhY2tldGVkQ29tYmluYXRvci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBicmFja2V0ZWRDb21iaW5hdG9yO1xuIl0sIm5hbWVzIjpbIkJyYWNrZXRlZENvbWJpbmF0b3IiLCJmcm9tTm90aGluZyIsInN0YXRlbWVudFN0cmluZyIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInJlbGVhc2VDb250ZXh0IiwiY29tYmluYXRvclJlbGVhc2VDb250ZXh0Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwiYnJhY2tldGVkQ29tYmluYXRvciIsIkNvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7OzsrREFuQnVCO2dFQUNjOzZCQUVJO3NCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQUEsQUFBTUEsb0NBV0gsQUFYSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjO2dCQUNuQixJQUFNQyxrQkFBa0IsQUFBQyxJQUE0QixPQUF6QkMsdUNBQXdCLEVBQUMsTUFDL0NDLGlCQUFpQkMsb0JBQXdCLEVBQ3pDQyxnQkFBZ0JDLElBQUFBLHdDQUFnQyxFQUFDTCxpQkFBaUJFLGlCQUNsRUksc0JBQXNCLElBTDFCUixvQkFLa0RNO2dCQUVwRCxPQUFPRTtZQUNUOzs7V0FSSVI7RUFBNEJTLG1CQUFVO0FBVzVDLElBQU1ELHNCQUFzQlIsb0JBQW9CQyxXQUFXO0lBRTNELFdBQWVPIn0=