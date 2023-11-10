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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _equality = /*#__PURE__*/ _interop_require_default(require("../node/statement/combinator/equality"));
var _equality1 = /*#__PURE__*/ _interop_require_default(require("../tokens/statement/combinator/equality"));
var _string = require("../utilities/string");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var EqualityCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(EqualityCombinator, Combinator);
    var _super = _create_super(EqualityCombinator);
    function EqualityCombinator() {
        _class_call_check(this, EqualityCombinator);
        return _super.apply(this, arguments);
    }
    _create_class(EqualityCombinator, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var node = _equality.default, tokens = _equality1.default, string = (0, _string.nodeAsString)(node, tokens), statementNode = node, equalityCombinator = new EqualityCombinator(statementNode, string);
                return equalityCombinator;
            }
        }
    ]);
    return EqualityCombinator;
}(_combinator.default);
var equalityCombinator = EqualityCombinator.fromNothing();
var _default = equalityCombinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IGVxdWFsaXR5Q29tYmluYXRvclN0YXRlbWVudE5vZGUgZnJvbSBcIi4uL25vZGUvc3RhdGVtZW50L2NvbWJpbmF0b3IvZXF1YWxpdHlcIjtcbmltcG9ydCB1bnF1YWxpZmllZEVxdWFsaXR5Q29tYmluYXRvclN0YXRlbWVudFRva2VucyBmcm9tIFwiLi4vdG9rZW5zL3N0YXRlbWVudC9jb21iaW5hdG9yL2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNsYXNzIEVxdWFsaXR5Q29tYmluYXRvciBleHRlbmRzIENvbWJpbmF0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Q29tYmluYXRvclN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSB1bnF1YWxpZmllZEVxdWFsaXR5Q29tYmluYXRvclN0YXRlbWVudFRva2VucywgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5Q29tYmluYXRvciA9IG5ldyBFcXVhbGl0eUNvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbGl0eUNvbWJpbmF0b3I7XG4gIH1cbn1cblxuY29uc3QgZXF1YWxpdHlDb21iaW5hdG9yID0gRXF1YWxpdHlDb21iaW5hdG9yLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsaXR5Q29tYmluYXRvcjtcbiJdLCJuYW1lcyI6WyJFcXVhbGl0eUNvbWJpbmF0b3IiLCJmcm9tTm90aGluZyIsIm5vZGUiLCJlcXVhbGl0eUNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwidG9rZW5zIiwidW5xdWFsaWZpZWRFcXVhbGl0eUNvbWJpbmF0b3JTdGF0ZW1lbnRUb2tlbnMiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwiZXF1YWxpdHlDb21iaW5hdG9yIiwiQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBQTs7O2lFQXBCdUI7K0RBQ3FCO2dFQUNhO3NCQUU1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLG1DQVlILEFBWkg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsaUJBQStCLEVBQ3RDQyxTQUFTQyxrQkFBNEMsRUFDckRDLFNBQVNDLElBQUFBLG9CQUFZLEVBQUNMLE1BQU1FLFNBQzVCSSxnQkFBZ0JOLE1BQ2hCTyxxQkFBcUIsSUFOekJULG1CQU1nRFEsZUFBZUY7Z0JBRWpFLE9BQU9HO1lBQ1Q7OztXQVRJVDtFQUEyQlUsbUJBQVU7QUFZM0MsSUFBTUQscUJBQXFCVCxtQkFBbUJDLFdBQVc7SUFFekQsV0FBZVEifQ==