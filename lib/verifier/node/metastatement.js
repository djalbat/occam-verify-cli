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
var _query = require("../../utilities/query");
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
            value: function verifyNonTerminalNode(nonTerminalNode, metaproofContext, verifyAhead) {
                var nonTerminalNodeVerified;
                var ruleName = nonTerminalNode.getRuleName(); ///
                switch(ruleName){
                    case _ruleNames.METAVARIABLE_RULE_NAME:
                        {
                            var metavariableNode = nonTerminalNode, metavariableVerified = verifyMetavariable(metavariableNode, metaproofContext, verifyAhead), metavariableNodeVerified = metavariableVerified; ///
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetastatementNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, metaproofContext, verifyAhead);
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
function verifyMetavariable(metavariableNode, metaproofContext, verifyAhead) {
    var metavariableVerified;
    var metavariableString = metaproofContext.nodeAsString(metavariableNode);
    metaproofContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariableName = (0, _query.metavariableNameFromMetavariableNode)(metavariableNode), metavariablePresent = metaproofContext.isMetavariablePresentByMetavariableName(metavariableName);
    if (metavariablePresent) {
        var verifiedAhead = verifyAhead();
        metavariableVerified = verifiedAhead; ///
    }
    if (metavariableVerified) {
        metaproofContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY2xhc3MgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIG1ldGFwcm9vZkNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFWQVJJQUJMRV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFwcm9vZkNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBtZXRhcHJvb2ZDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIgPSBuZXcgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyO1xuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXByb29mQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGFwcm9vZkNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIG1ldGFwcm9vZkNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IG1ldGFwcm9vZkNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbWV0YXByb29mQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJNZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWV0YXByb29mQ29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCIsIk5vZGVWZXJpZmllciIsIm1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidmVyaWZpZWRBaGVhZCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQ0E7OztlQUFBOzs7MkRBbkN5Qjt5QkFFYztxQkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJELElBQUEsQUFBTUEsMENBNEJILEFBNUJIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUVDLFdBQVc7Z0JBQ2xFLElBQUlDO2dCQUVKLElBQU1DLFdBQVdKLGdCQUFnQkssV0FBVyxJQUFJLEdBQUc7Z0JBRW5ELE9BQVFEO29CQUNOLEtBQUtFLGlDQUFzQjt3QkFBRTs0QkFDM0IsSUFBTUMsbUJBQW1CUCxpQkFDbkJRLHVCQUF1QkMsbUJBQW1CRixrQkFBa0JOLGtCQUFrQkMsY0FDOUVRLDJCQUEyQkYsc0JBQXVCLEdBQUc7NEJBRTNETCwwQkFBMEJPLDBCQUEwQixHQUFHOzRCQUV2RDt3QkFDRjtvQkFFQTt3QkFBUzs0QkFDUFAsMEJBQTBCLHVCQWxCNUJMLHNDQWtCa0NDLHlCQUFOLElBQUssYUFBdUJDLGlCQUFpQkMsa0JBQWtCQzs0QkFFekY7d0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0M7WUFDVDs7O1dBekJJTDtFQUFrQ2EsYUFBWTtBQTRCcEQsSUFBTUMsNEJBQTRCLElBQUlkO0lBRXRDLFdBQWVjO0FBRWYsU0FBU0gsbUJBQW1CRixnQkFBZ0IsRUFBRU4sZ0JBQWdCLEVBQUVDLFdBQVc7SUFDekUsSUFBSU07SUFFSixJQUFNSyxxQkFBcUJaLGlCQUFpQmEsWUFBWSxDQUFDUDtJQUV6RE4saUJBQWlCYyxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJGLG9CQUFtQixzQkFBb0JOO0lBRWhGLElBQU1TLG1CQUFtQkMsSUFBQUEsMkNBQW9DLEVBQUNWLG1CQUN4RFcsc0JBQXNCakIsaUJBQWlCa0IsdUNBQXVDLENBQUNIO0lBRXJGLElBQUlFLHFCQUFxQjtRQUN2QixJQUFNRSxnQkFBZ0JsQjtRQUV0Qk0sdUJBQXVCWSxlQUFlLEdBQUc7SUFDM0M7SUFFQSxJQUFJWixzQkFBc0I7UUFDeEJQLGlCQUFpQm9CLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQlIsb0JBQW1CLG9CQUFrQk47SUFDbEY7SUFFQSxPQUFPQztBQUNUIn0=