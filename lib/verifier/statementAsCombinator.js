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
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _type = /*#__PURE__*/ _interop_require_default(require("../verify/type"));
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../verify/statement"));
var _query = require("../utilities/query");
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
function _define_property(obj, key, value) {
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), typeNodeQuery = (0, _query.nodeQuery)("/type!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!");
var StatementAsCombinatorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(StatementAsCombinatorVerifier, Verifier);
    function StatementAsCombinatorVerifier() {
        _class_call_check(this, StatementAsCombinatorVerifier);
        return _call_super(this, StatementAsCombinatorVerifier, arguments);
    }
    _create_class(StatementAsCombinatorVerifier, [
        {
            key: "verify",
            value: function verify(statementNode, fileContext) {
                var statementVerifiedAsCombinator;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = this.verifyChildNodes(childNodes, fileContext);
                statementVerifiedAsCombinator = childNodesVerified; ///
                return statementVerifiedAsCombinator;
            }
        }
    ]);
    return StatementAsCombinatorVerifier;
}(_verifier.default);
_define_property(StatementAsCombinatorVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, localContext) {
            var derived = false, assignments = [], statementVerified = (0, _statement.default)(statementNode, assignments, derived, localContext);
            return statementVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, localContext) {
            var terms = [], termVerified = (0, _term.default)(termNode, terms, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, localContext) {
            var typeVerified = (0, _type.default)(typeNode, localContext);
            return typeVerified;
        }
    }
]);
var statementAsCombinatorVerifier = new StatementAsCombinatorVerifier();
var _default = statementAsCombinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB2ZXJpZnlUeXBlIGZyb20gXCIuLi92ZXJpZnkvdHlwZVwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgdmVyaWZ5U3RhdGVtZW50IGZyb20gXCIuLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKTtcblxuY2xhc3MgU3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvcjtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZEFzQ29tYmluYXRvciA9IGNoaWxkTm9kZXNWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgdmVyaWZ5OiAodHlwZU5vZGUsIGxvY2FsQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciA9IG5ldyBTdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIlN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5Iiwic3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJWZXJpZmllciIsIm1hcHMiLCJsb2NhbENvbnRleHQiLCJkZXJpdmVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsInRlcm1Ob2RlIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsInR5cGVOb2RlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErREE7OztlQUFBOzs7K0RBN0RxQjsyREFDRTsyREFDQTtnRUFDSztxQkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsV0FDMUJFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1HLDhDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRUMsV0FBVztnQkFDL0IsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUg7Z0JBRTdEQyxnQ0FBZ0NJLG9CQUFxQixHQUFHO2dCQUV4RCxPQUFPSjtZQUNUOzs7V0FYSUo7RUFBc0NVLGlCQUFRO0FBYWxELGlCQWJJViwrQkFhR1csUUFBTztJQUNaO1FBQ0VkLFdBQVdFO1FBQ1hFLFFBQVEsU0FBQ0MsZUFBZVU7WUFDdEIsSUFBTUMsVUFBVSxPQUNWQyxjQUFjLEVBQUUsRUFDaEJDLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ2QsZUFBZVksYUFBYUQsU0FBU0Q7WUFFL0UsT0FBT0c7UUFDVDtJQUNGO0lBQ0E7UUFDRWxCLFdBQVdEO1FBQ1hLLFFBQVEsU0FBQ2dCLFVBQVVMO1lBQ2pCLElBQU1NLFFBQVEsRUFBRSxFQUNWQyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNILFVBQVVDLE9BQU9OLGNBQWM7Z0JBQ3ZELElBQU1TLGdCQUFnQjtnQkFFdEIsT0FBT0E7WUFDVDtZQUVOLE9BQU9GO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V0QixXQUFXQztRQUNYRyxRQUFRLFNBQUNxQixVQUFVVjtZQUNqQixJQUFNVyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNGLFVBQVVWO1lBRTFDLE9BQU9XO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTUUsZ0NBQWdDLElBQUl6QjtJQUUxQyxXQUFleUIifQ==