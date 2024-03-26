"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    verifyArgument: function() {
        return verifyArgument;
    }
});
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
var _query = require("../../utilities/query");
var _type = require("../../verify/type");
var _term = require("../../verify/term");
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
var typeNodeQuery = (0, _query.nodeQuery)("/argument/type"), termNodeQuery = (0, _query.nodeQuery)("/argument/term");
var TermAsConstructorNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(TermAsConstructorNodeVerifier, NodeVerifier);
    var _super = _create_super(TermAsConstructorNodeVerifier);
    function TermAsConstructorNodeVerifier() {
        _class_call_check(this, TermAsConstructorNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(TermAsConstructorNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
                var nonTerminalNodeVerified;
                var ruleName = nonTerminalNode.getRuleName();
                switch(ruleName){
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var termNode = nonTerminalNode, standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, fileContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                            nonTerminalNodeVerified = termNodeVerified; ///
                            break;
                        }
                    case _ruleNames.ARGUMENT_RULE_NAME:
                        {
                            var argumentNode = nonTerminalNode, argumentVerified = verifyArgument(argumentNode, fileContext, verifyAhead), argumentNodeVerified = argumentVerified; ///
                            nonTerminalNodeVerified = argumentNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(TermAsConstructorNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, fileContext, verifyAhead);
                            break;
                        }
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return TermAsConstructorNodeVerifier;
}(_node.default);
var termAsConstructorNodeVerifier = new TermAsConstructorNodeVerifier();
var _default = termAsConstructorNodeVerifier;
function verifyArgument(argumentNode, fileContext, verifyAhead) {
    var argumentVerified;
    var argumentString = fileContext.nodeAsString(argumentNode);
    fileContext.trace("Verifying the '".concat(argumentString, "' argument..."), argumentNode);
    var typeNode = typeNodeQuery(argumentNode), termNode = termNodeQuery(argumentNode);
    if (typeNode !== null) {
        var standaloneTypeVerified = (0, _type.verifyStandaloneType)(typeNode, fileContext, verifyAhead);
        argumentVerified = standaloneTypeVerified; ///
    }
    if (termNode !== null) {
        var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, fileContext, verifyAhead);
        argumentVerified = standaloneTermVerified; ///
    }
    if (argumentVerified) {
        fileContext.debug("...verified the '".concat(argumentString, "' argument."), argumentNode);
    }
    return argumentVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3Rlcm1Bc0NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZVZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2RlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90eXBlXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVGVybSB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpLFxuICAgICAgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtXCIpO1xuXG5jbGFzcyBUZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gYXJndW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIgPSBuZXcgVGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgYXJndW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQuLi5gLCBhcmd1bWVudE5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lVHlwZVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVR5cGUodHlwZU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBhcmd1bWVudFZlcmlmaWVkID0gc3RhbmRhbG9uZVR5cGVWZXJpZmllZDsgLy8vXG4gIH1cblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBhcmd1bWVudFZlcmlmaWVkID0gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDsgIC8vL1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50VmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQuYCwgYXJndW1lbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBhcmd1bWVudFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUFyZ3VtZW50IiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJUZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImZpbGVDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwidGVybU5vZGVWZXJpZmllZCIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsIk5vZGVWZXJpZmllciIsInRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInR5cGVOb2RlIiwic3RhbmRhbG9uZVR5cGVWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVUeXBlIiwiZGVidWciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW9EQSxPQUE2QztlQUE3Qzs7SUFFZ0JBLGNBQWM7ZUFBZEE7OzsyREFwRFM7cUJBRUM7b0JBQ1c7b0JBQ0E7eUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSw4Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXO2dCQUM3RCxJQUFJQztnQkFFSixJQUFNQyxXQUFXSixnQkFBZ0JLLFdBQVc7Z0JBRTVDLE9BQVFEO29CQUNOLEtBQUtFLHlCQUFjO3dCQUFFOzRCQUNuQixJQUFNQyxXQUFXUCxpQkFDWFEseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ0YsVUFBVU4sYUFBYUMsY0FDckVRLG1CQUFtQkYsd0JBQXlCLEdBQUc7NEJBRXJETCwwQkFBMEJPLGtCQUFrQixHQUFHOzRCQUUvQzt3QkFDRjtvQkFFQSxLQUFLQyw2QkFBa0I7d0JBQUU7NEJBQ3ZCLElBQU1DLGVBQWVaLGlCQUNmYSxtQkFBbUJuQixlQUFla0IsY0FBY1gsYUFBYUMsY0FDN0RZLHVCQUF1QkQsa0JBQW1CLEdBQUc7NEJBRW5EViwwQkFBMEJXLHNCQUFzQixHQUFHOzRCQUVuRDt3QkFDRjtvQkFFQTt3QkFBUzs0QkFDUFgsMEJBQTBCLHVCQTVCNUJMLDBDQTRCa0NDLHlCQUFOLElBQUssYUFBdUJDLGlCQUFpQkMsYUFBYUM7NEJBRXBGO3dCQUNGO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQW5DSUw7RUFBc0NpQixhQUFZO0FBc0N4RCxJQUFNQyxnQ0FBZ0MsSUFBSWxCO0lBRTFDLFdBQWVrQjtBQUVSLFNBQVN0QixlQUFla0IsWUFBWSxFQUFFWCxXQUFXLEVBQUVDLFdBQVc7SUFDbkUsSUFBSVc7SUFFSixJQUFNSSxpQkFBaUJoQixZQUFZaUIsWUFBWSxDQUFDTjtJQUVoRFgsWUFBWWtCLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSxrQkFBZ0JMO0lBRW5FLElBQU1RLFdBQVd6QixjQUFjaUIsZUFDekJMLFdBQVdWLGNBQWNlO0lBRS9CLElBQUlRLGFBQWEsTUFBTTtRQUNyQixJQUFNQyx5QkFBeUJDLElBQUFBLDBCQUFvQixFQUFDRixVQUFVbkIsYUFBYUM7UUFFM0VXLG1CQUFtQlEsd0JBQXdCLEdBQUc7SUFDaEQ7SUFFQSxJQUFJZCxhQUFhLE1BQU07UUFDckIsSUFBTUMseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ0YsVUFBVU4sYUFBYUM7UUFFM0VXLG1CQUFtQkwsd0JBQXlCLEdBQUc7SUFDakQ7SUFFQSxJQUFJSyxrQkFBa0I7UUFDcEJaLFlBQVlzQixLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZk4sZ0JBQWUsZ0JBQWNMO0lBQ3JFO0lBRUEsT0FBT0M7QUFDVCJ9