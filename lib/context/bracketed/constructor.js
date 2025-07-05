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
var _term = /*#__PURE__*/ _interop_require_default(require("../../context/partial/term"));
var _typeNames = require("../../typeNames");
var _nominal = require("../../utilities/nominal");
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
                var string = "(".concat(_typeNames.BASE_TYPE_NAME, ")"), lexer = _nominal.nominalLexer, parser = _nominal.nominalParser, termPartialContext = _term.default.fromStringLexerAndParser(string, lexer, parser), context = termPartialContext, constructorBracketedContext = _bracketted.default.fromString(ConstructorBracketedContext, string, context);
                return constructorBracketedContext;
            }
        }
    ]);
    return ConstructorBracketedContext;
}(_bracketted.default);
var constructorBracketedContext = ConstructorBracketedContext.fromNothing();
var _default = constructorBracketedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2JyYWNrZXRlZC9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvYnJhY2tldHRlZFwiO1xuaW1wb3J0IFRlcm1QYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsL3Rlcm1cIjtcblxuaW1wb3J0IHsgQkFTRV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vLi4vdHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub21pbmFsTGV4ZXIsIG5vbWluYWxQYXJzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vbWluYWxcIjtcblxuY2xhc3MgQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IGV4dGVuZHMgQnJhY2tldGVkQ29udGV4dCB7XG4gIGdldEJyYWNrZXRlZFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBicmFja2V0ZWRUZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBicmFja2V0ZWRUZXJtTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgKCR7QkFTRV9UWVBFX05BTUV9KWAsXG4gICAgICAgICAgbGV4ZXIgPSBub21pbmFsTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG5vbWluYWxQYXJzZXIsIC8vL1xuICAgICAgICAgIHRlcm1QYXJ0aWFsQ29udGV4dCA9IFRlcm1QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGVybVBhcnRpYWxDb250ZXh0LFxuICAgICAgICAgIGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCA9IEJyYWNrZXRlZENvbnRleHQuZnJvbVN0cmluZyhDb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQsIHN0cmluZywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0O1xuICB9XG59XG5cbmNvbnN0IGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCA9IENvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQ7XG4iXSwibmFtZXMiOlsiQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0IiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZnJvbU5vdGhpbmciLCJzdHJpbmciLCJCQVNFX1RZUEVfTkFNRSIsImxleGVyIiwibm9taW5hbExleGVyIiwicGFyc2VyIiwibm9taW5hbFBhcnNlciIsInRlcm1QYXJ0aWFsQ29udGV4dCIsIlRlcm1QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImNvbnRleHQiLCJjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQiLCJCcmFja2V0ZWRDb250ZXh0IiwiZnJvbVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBQTs7O2lFQTVCNkI7MkRBQ0U7eUJBRUE7dUJBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBQSxBQUFNQSw0Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLG9CQUFvQkYsTUFBTyxHQUFHO2dCQUVwQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLFNBQVMsQUFBQyxJQUFrQixPQUFmQyx5QkFBYyxFQUFDLE1BQzVCQyxRQUFRQyxxQkFBWSxFQUNwQkMsU0FBU0Msc0JBQWEsRUFDdEJDLHFCQUFxQkMsYUFBa0IsQ0FBQ0Msd0JBQXdCLENBQUNSLFFBQVFFLE9BQU9FLFNBQ2hGSyxVQUFVSCxvQkFDVkksOEJBQThCQyxtQkFBZ0IsQ0FBQ0MsVUFBVSxDQWQ3RGxCLDZCQWMyRk0sUUFBUVM7Z0JBRXJHLE9BQU9DO1lBQ1Q7OztXQWpCSWhCO0VBQW9DaUIsbUJBQWdCO0FBb0IxRCxJQUFNRCw4QkFBOEJoQiw0QkFBNEJLLFdBQVc7SUFFM0UsV0FBZVcifQ==