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
            value: function verifyNonTerminalNode(nonTerminalNode, metaproofContext) {
                var nonTerminalNodeVerified;
                var ruleName = nonTerminalNode.getRuleName(); ///
                switch(ruleName){
                    case _ruleNames.METAVARIABLE_RULE_NAME:
                        {
                            var metavariableNode = nonTerminalNode, metavariableVerified = verifyMetavariable(metavariableNode, metaproofContext), metavariableNodeVerified = metavariableVerified; ///
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetastatementNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, metaproofContext);
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
function verifyMetavariable(metavariableNode, metaproofContext) {
    var metavariableVerified;
    var metavariableString = metaproofContext.nodeAsString(metavariableNode);
    metaproofContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariableName = (0, _query.metavariableNameFromMetavariableNode)(metavariableNode), metavariablePresent = metaproofContext.isMetavariablePresentByMetavariableName(metavariableName);
    metavariableVerified = metavariablePresent;
    if (metavariableVerified) {
        metaproofContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL21ldGFzdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY2xhc3MgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgTUVUQVZBUklBQkxFX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXByb29mQ29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXIgPSBuZXcgTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVyO1xuXG5mdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YXByb29mQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXByb29mQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbWV0YXByb29mQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gbWV0YXByb29mQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVQcmVzZW50O1xuXG4gIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgIG1ldGFwcm9vZkNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiTWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm1ldGFwcm9vZkNvbnRleHQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwiTm9kZVZlcmlmaWVyIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllciIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUNBOzs7ZUFBQTs7OzJEQW5DeUI7eUJBRWM7cUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFBLEFBQU1BLDBDQTRCSCxBQTVCSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLGdCQUFnQjtnQkFDckQsSUFBSUM7Z0JBRUosSUFBTUMsV0FBV0gsZ0JBQWdCSSxXQUFXLElBQUksR0FBRztnQkFFbkQsT0FBUUQ7b0JBQ04sS0FBS0UsaUNBQXNCO3dCQUFFOzRCQUMzQixJQUFNQyxtQkFBbUJOLGlCQUNuQk8sdUJBQXVCQyxtQkFBbUJGLGtCQUFrQkwsbUJBQzVEUSwyQkFBMkJGLHNCQUF1QixHQUFHOzRCQUUzREwsMEJBQTBCTywwQkFBMEIsR0FBRzs0QkFFdkQ7d0JBQ0Y7b0JBRUE7d0JBQVM7NEJBQ1BQLDBCQUEwQix1QkFsQjVCSixzQ0FrQmtDQyx5QkFBTixJQUFLLGFBQXVCQyxpQkFBaUJDOzRCQUV2RTt3QkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0F6QklKO0VBQWtDWSxhQUFZO0FBNEJwRCxJQUFNQyw0QkFBNEIsSUFBSWI7SUFFdEMsV0FBZWE7QUFFZixTQUFTSCxtQkFBbUJGLGdCQUFnQixFQUFFTCxnQkFBZ0I7SUFDNUQsSUFBSU07SUFFSixJQUFNSyxxQkFBcUJYLGlCQUFpQlksWUFBWSxDQUFDUDtJQUV6REwsaUJBQWlCYSxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJGLG9CQUFtQixzQkFBb0JOO0lBRWhGLElBQU1TLG1CQUFtQkMsSUFBQUEsMkNBQW9DLEVBQUNWLG1CQUN4RFcsc0JBQXNCaEIsaUJBQWlCaUIsdUNBQXVDLENBQUNIO0lBRXJGUix1QkFBdUJVO0lBRXZCLElBQUlWLHNCQUFzQjtRQUN4Qk4saUJBQWlCa0IsS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CUCxvQkFBbUIsb0JBQWtCTjtJQUNsRjtJQUVBLE9BQU9DO0FBQ1QifQ==