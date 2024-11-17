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
                var string = "(".concat(_typeNames.OBJECT_TYPE_NAME, ")"), lexer = _nominal.nominalLexer, parser = _nominal.nominalParser, termPartialContext = _term.default.fromStringLexerAndParser(string, lexer, parser), context = termPartialContext, constructorBracketedContext = _bracketted.default.fromString(ConstructorBracketedContext, string, context);
                return constructorBracketedContext;
            }
        }
    ]);
    return ConstructorBracketedContext;
}(_bracketted.default);
var constructorBracketedContext = ConstructorBracketedContext.fromNothing();
var _default = constructorBracketedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2JyYWNrZXRlZC9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvYnJhY2tldHRlZFwiO1xuaW1wb3J0IFRlcm1QYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsL3Rlcm1cIjtcblxuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi8uLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IG5vbWluYWxMZXhlciwgbm9taW5hbFBhcnNlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5jbGFzcyBDb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQgZXh0ZW5kcyBCcmFja2V0ZWRDb250ZXh0IHtcbiAgZ2V0QnJhY2tldGVkVGVybU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZFRlcm1Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAoJHtPQkpFQ1RfVFlQRV9OQU1FfSlgLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICB0ZXJtUGFydGlhbENvbnRleHQgPSBUZXJtUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29udGV4dCA9IHRlcm1QYXJ0aWFsQ29udGV4dCxcbiAgICAgICAgICBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQgPSBCcmFja2V0ZWRDb250ZXh0LmZyb21TdHJpbmcoQ29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0LCBzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dDtcbiAgfVxufVxuXG5jb25zdCBjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQgPSBDb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0b3JCcmFja2V0ZWRDb250ZXh0O1xuIl0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yQnJhY2tldGVkQ29udGV4dCIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImZyb21Ob3RoaW5nIiwic3RyaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSIsImxleGVyIiwibm9taW5hbExleGVyIiwicGFyc2VyIiwibm9taW5hbFBhcnNlciIsInRlcm1QYXJ0aWFsQ29udGV4dCIsIlRlcm1QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImNvbnRleHQiLCJjb25zdHJ1Y3RvckJyYWNrZXRlZENvbnRleHQiLCJCcmFja2V0ZWRDb250ZXh0IiwiZnJvbVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBQTs7O2lFQTVCNkI7MkRBQ0U7eUJBRUU7dUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBQSxBQUFNQSw0Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsb0JBQW9CRixNQUFPLEdBQUc7Z0JBRXBDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsU0FBUyxBQUFDLElBQW9CLE9BQWpCQywyQkFBZ0IsRUFBQyxNQUM5QkMsUUFBUUMscUJBQVksRUFDcEJDLFNBQVNDLHNCQUFhLEVBQ3RCQyxxQkFBcUJDLGFBQWtCLENBQUNDLHdCQUF3QixDQUFDUixRQUFRRSxPQUFPRSxTQUNoRkssVUFBVUgsb0JBQ1ZJLDhCQUE4QkMsbUJBQWdCLENBQUNDLFVBQVUsQ0FkN0RsQiw2QkFjMkZNLFFBQVFTO2dCQUVyRyxPQUFPQztZQUNUOzs7V0FqQkloQjtFQUFvQ2lCLG1CQUFnQjtBQW9CMUQsSUFBTUQsOEJBQThCaEIsNEJBQTRCSyxXQUFXO0lBRTNFLFdBQWVXIn0=