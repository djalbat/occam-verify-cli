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
var _bracketted = /*#__PURE__*/ _interop_require_default(require("../../context/bracketted"));
var _term = /*#__PURE__*/ _interop_require_default(require("../../nodeAndTokens/term"));
var _typeNames = require("../../typeNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ConstructorBracketedContext = /*#__PURE__*/ function(BracketedContext) {
    _inherits(ConstructorBracketedContext, BracketedContext);
    function ConstructorBracketedContext() {
        _class_call_check(this, ConstructorBracketedContext);
        return _call_super(this, ConstructorBracketedContext, arguments);
    }
    _create_class(ConstructorBracketedContext, [
        {
            key: "getBracketedTermNode",
            value: function getBracketedTermNode() {
                var node = this.getNode(), bracketedTermNode = node; ///
                return bracketedTermNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var string = "(".concat(_typeNames.OBJECT_TYPE_NAME, ")"), NodeAndTokens = _term.default, constructorBracketedContext = _bracketted.default.fromStringAndNodeAndTokens(ConstructorBracketedContext, string, NodeAndTokens);
                return constructorBracketedContext;
            }
        }
    ]);
    return ConstructorBracketedContext;
}(_bracketted.default);
var constructorBracketedContext = ConstructorBracketedContext.fromNothing();
var _default = constructorBracketedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2JyYWNrZXRlZC9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvYnJhY2tldHRlZFwiO1xuaW1wb3J0IFRlcm1Ob2RlQW5kVG9rZW5zIGZyb20gXCIuLi8uLi9ub2RlQW5kVG9rZW5zL3Rlcm1cIjtcblxuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi8uLi90eXBlTmFtZXNcIjtcblxuY2xhc3MgQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IGV4dGVuZHMgQnJhY2tldGVkQ29udGV4dCB7XG4gIGdldEJyYWNrZXRlZFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBicmFja2V0ZWRUZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBicmFja2V0ZWRUZXJtTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgKCR7T0JKRUNUX1RZUEVfTkFNRX0pYCxcbiAgICAgICAgICBOb2RlQW5kVG9rZW5zID0gVGVybU5vZGVBbmRUb2tlbnMsXG4gICAgICAgICAgY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0ID0gQnJhY2tldGVkQ29udGV4dC5mcm9tU3RyaW5nQW5kTm9kZUFuZFRva2VucyhDb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQsIHN0cmluZywgTm9kZUFuZFRva2Vucyk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0O1xuICB9XG59XG5cbmNvbnN0IGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCA9IENvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQ7XG4iXSwibmFtZXMiOlsiQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZnJvbU5vdGhpbmciLCJzdHJpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIiwiTm9kZUFuZFRva2VucyIsIlRlcm1Ob2RlQW5kVG9rZW5zIiwiY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IiwiQnJhY2tldGVkQ29udGV4dCIsImZyb21TdHJpbmdBbmROb2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7aUVBeEI2QjsyREFDQzt5QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFBLEFBQU1BLDRDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxvQkFBb0JGLE1BQU8sR0FBRztnQkFFcEMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxTQUFTLEFBQUMsSUFBb0IsT0FBakJDLDJCQUFnQixFQUFDLE1BQzlCQyxnQkFBZ0JDLGFBQWlCLEVBQ2pDQyw4QkFBOEJDLG1CQUFnQixDQUFDQywwQkFBMEIsQ0FYN0VaLDZCQVcyR00sUUFBUUU7Z0JBRXJILE9BQU9FO1lBQ1Q7OztXQWRJVjtFQUFvQ1csbUJBQWdCO0FBaUIxRCxJQUFNRCw4QkFBOEJWLDRCQUE0QkssV0FBVztJQUUzRSxXQUFlSyJ9