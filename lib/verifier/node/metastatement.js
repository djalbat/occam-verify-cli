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
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
var _ruleNames = require("../../ruleNames");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var MetastatementNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(MetastatementNodeVerifier, NodeVerifier);
    var _super = _create_super(MetastatementNodeVerifier);
    function MetastatementNodeVerifier() {
        _class_call_check(this, MetastatementNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(MetastatementNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead) {
                var nonTerminalNodeVerified;
                var ruleName = nonTerminalNode.getRuleName(); ///
                switch(ruleName){
                    case _ruleNames.METAVARIABLE_RULE_NAME:
                        {
                            var metavariableNode = nonTerminalNode, metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext, verifyAhead), metavariableNodeVerified = metavariableVerified; ///
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetastatementNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, localMetaContext, verifyAhead);
                            break;
                        }
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return MetastatementNodeVerifier;
}(_node.default);
var metastatementNodeVerifier = new MetastatementNodeVerifier();
var _default = metastatementNodeVerifier;
function verifyMetavariable(metavariableNode, localMetaContext, verifyAhead) {
    var metavariableVerified;
    var metavariableString = localMetaContext.nodeAsString(metavariableNode);
    localMetaContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode);
    if (metavariablePresent) {
        var verifiedAhead = verifyAhead();
        metavariableVerified = verifiedAhead; ///
    }
    if (metavariableVerified) {
        localMetaContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFWQVJJQUJMRV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIgPSBuZXcgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyO1xuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsTWV0YUNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJNZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCIsIk5vZGVWZXJpZmllciIsIm1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwiZGVidWciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0NBOzs7ZUFBQTs7OzJEQWxDeUI7eUJBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVztnQkFDbEUsSUFBSUM7Z0JBRUosSUFBTUMsV0FBV0osZ0JBQWdCSyxXQUFXLElBQUksR0FBRztnQkFFbkQsT0FBUUQ7b0JBQ04sS0FBS0UsaUNBQXNCO3dCQUFFOzRCQUMzQixJQUFNQyxtQkFBbUJQLGlCQUNuQlEsdUJBQXVCQyxtQkFBbUJGLGtCQUFrQk4sa0JBQWtCQyxjQUM5RVEsMkJBQTJCRixzQkFBdUIsR0FBRzs0QkFFM0RMLDBCQUEwQk8sMEJBQTBCLEdBQUc7NEJBRXZEO3dCQUNGO29CQUVBO3dCQUFTOzRCQUNQUCwwQkFBMEIsdUJBbEI1Qkwsc0NBa0JrQ0MseUJBQU4sSUFBSyxhQUF1QkMsaUJBQWlCQyxrQkFBa0JDOzRCQUV6Rjt3QkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0F6QklMO0VBQWtDYSxhQUFZO0FBNEJwRCxJQUFNQyw0QkFBNEIsSUFBSWQ7SUFFdEMsV0FBZWM7QUFFZixTQUFTSCxtQkFBbUJGLGdCQUFnQixFQUFFTixnQkFBZ0IsRUFBRUMsV0FBVztJQUN6RSxJQUFJTTtJQUVKLElBQU1LLHFCQUFxQlosaUJBQWlCYSxZQUFZLENBQUNQO0lBRXpETixpQkFBaUJjLEtBQUssQ0FBQyxBQUFDLGtCQUFvQyxPQUFuQkYsb0JBQW1CLHNCQUFvQk47SUFFaEYsSUFBTVMsc0JBQXNCZixpQkFBaUJnQix1Q0FBdUMsQ0FBQ1Y7SUFFckYsSUFBSVMscUJBQXFCO1FBQ3ZCLElBQU1FLGdCQUFnQmhCO1FBRXRCTSx1QkFBdUJVLGVBQWUsR0FBRztJQUMzQztJQUVBLElBQUlWLHNCQUFzQjtRQUN4QlAsaUJBQWlCa0IsS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CTixvQkFBbUIsb0JBQWtCTjtJQUNsRjtJQUVBLE9BQU9DO0FBQ1QifQ==