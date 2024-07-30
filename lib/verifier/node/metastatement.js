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
                    case _ruleNames.VARIABLE_RULE_NAME:
                        {
                            var variableNode = nonTerminalNode, variableVerified = verifyVariable(variableNode, localMetaContext, verifyAhead), variableNodeVerified = variableVerified; ///
                            nonTerminalNodeVerified = variableNodeVerified; ///
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
function verifyVariable(variableNode, localMetaContext, verifyAhead) {
    var variableVerified;
    var variableString = localMetaContext.nodeAsString(variableNode);
    localMetaContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variablePresent = localMetaContext.isVariablePresentByVariableNode(variableNode);
    if (variablePresent) {
        var verifiedAhead = verifyAhead();
        variableVerified = verifiedAhead; ///
    }
    if (variableVerified) {
        localMetaContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgVkFSSUFCTEVfUlVMRV9OQU1FLCBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jbGFzcyBNZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIGV4dGVuZHMgTm9kZVZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgTUVUQVZBUklBQkxFX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBWQVJJQUJMRV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciA9IG5ldyBNZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXI7XG5cbmZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxNZXRhQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gbG9jYWxNZXRhQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkO1xuXG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gbG9jYWxNZXRhQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKTtcblxuICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlUHJlc2VudCA9IGxvY2FsTWV0YUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlIiwidmFyaWFibGVOb2RlVmVyaWZpZWQiLCJOb2RlVmVyaWZpZXIiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwidmVyaWZpZWRBaGVhZCIsImRlYnVnIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4Q0E7OztlQUFBOzs7MkRBNUN5Qjt5QkFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFBLEFBQU1BLDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVztnQkFDbEUsSUFBSUM7Z0JBRUosSUFBTUMsV0FBV0osZ0JBQWdCSyxXQUFXLElBQUksR0FBRztnQkFFbkQsT0FBUUQ7b0JBQ04sS0FBS0UsaUNBQXNCO3dCQUFFOzRCQUMzQixJQUFNQyxtQkFBbUJQLGlCQUNuQlEsdUJBQXVCQyxtQkFBbUJGLGtCQUFrQk4sa0JBQWtCQyxjQUM5RVEsMkJBQTJCRixzQkFBdUIsR0FBRzs0QkFFM0RMLDBCQUEwQk8sMEJBQTBCLEdBQUc7NEJBRXZEO3dCQUNGO29CQUVBLEtBQUtDLDZCQUFrQjt3QkFBRTs0QkFDdkIsSUFBTUMsZUFBZVosaUJBQ2ZhLG1CQUFtQkMsZUFBZUYsY0FBY1gsa0JBQWtCQyxjQUNsRWEsdUJBQXVCRixrQkFBbUIsR0FBRzs0QkFFbkRWLDBCQUEwQlksc0JBQXNCLEdBQUc7NEJBRW5EO3dCQUNGO29CQUVBO3dCQUFTOzRCQUNQWiwwQkFBMEIsdUJBNUI1Qkwsc0NBNEJrQ0MseUJBQU4sSUFBSyxhQUF1QkMsaUJBQWlCQyxrQkFBa0JDOzRCQUV6Rjt3QkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0FuQ0lMO0VBQWtDa0IsYUFBWTtBQXNDcEQsSUFBTUMsNEJBQTRCLElBQUluQjtJQUV0QyxXQUFlbUI7QUFFZixTQUFTUixtQkFBbUJGLGdCQUFnQixFQUFFTixnQkFBZ0IsRUFBRUMsV0FBVztJQUN6RSxJQUFJTTtJQUVKLElBQU1VLHFCQUFxQmpCLGlCQUFpQmtCLFlBQVksQ0FBQ1o7SUFFekROLGlCQUFpQm1CLEtBQUssQ0FBQyxBQUFDLGtCQUFvQyxPQUFuQkYsb0JBQW1CLHNCQUFvQlg7SUFFaEYsSUFBTWMsc0JBQXNCcEIsaUJBQWlCcUIsdUNBQXVDLENBQUNmO0lBRXJGLElBQUljLHFCQUFxQjtRQUN2QixJQUFNRSxnQkFBZ0JyQjtRQUV0Qk0sdUJBQXVCZSxlQUFlLEdBQUc7SUFDM0M7SUFFQSxJQUFJZixzQkFBc0I7UUFDeEJQLGlCQUFpQnVCLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQk4sb0JBQW1CLG9CQUFrQlg7SUFDbEY7SUFFQSxPQUFPQztBQUNUO0FBRUEsU0FBU00sZUFBZUYsWUFBWSxFQUFFWCxnQkFBZ0IsRUFBRUMsV0FBVztJQUNqRSxJQUFJVztJQUVKLElBQU1ZLGlCQUFpQnhCLGlCQUFpQmtCLFlBQVksQ0FBQ1A7SUFFckRYLGlCQUFpQm1CLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmSyxnQkFBZSxrQkFBZ0JiO0lBRXhFLElBQU1jLGtCQUFrQnpCLGlCQUFpQjBCLCtCQUErQixDQUFDZjtJQUV6RSxJQUFJYyxpQkFBaUI7UUFDbkIsSUFBTUgsZ0JBQWdCckI7UUFFdEJXLG1CQUFtQlUsZUFBZSxHQUFHO0lBQ3ZDO0lBRUEsSUFBSVYsa0JBQWtCO1FBQ3BCWixpQkFBaUJ1QixLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkMsZ0JBQWUsZ0JBQWNiO0lBQzFFO0lBRUEsT0FBT0M7QUFDVCJ9