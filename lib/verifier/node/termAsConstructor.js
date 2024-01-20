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
    verifyStandaloneTerm: function() {
        return verifyStandaloneTerm;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
var _givenType = /*#__PURE__*/ _interop_require_default(require("../../verify/givenType"));
var _query = require("../../utilities/query");
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
                            var termNode = nonTerminalNode, standaloneTermVerified = verifyStandaloneTerm(termNode, fileContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
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
function verifyStandaloneTerm(termNode, fileContext, verifyAhead) {
    var standaloneTermVerified;
    var termString = fileContext.nodeAsString(termNode);
    fileContext.trace("Verifying the '".concat(termString, "' standalone term..."), termNode);
    var terms = [], context = fileContext, termVerified = (0, _term.default)(termNode, terms, context, verifyAhead);
    standaloneTermVerified = termVerified; ///
    if (standaloneTermVerified) {
        fileContext.debug("...verified the '".concat(termString, "' standalone term."), termNode);
    }
    return standaloneTermVerified;
}
function verifyArgument(argumentNode, fileContext, verifyAhead) {
    var argumentVerified;
    var argumentString = fileContext.nodeAsString(argumentNode);
    fileContext.trace("Verifying the '".concat(argumentString, "' argument..."), argumentNode);
    var typeNode = typeNodeQuery(argumentNode), termNode = termNodeQuery(argumentNode);
    if (typeNode !== null) {
        var types = [], givenTypeVerified = (0, _givenType.default)(typeNode, types, fileContext, verifyAhead);
        argumentVerified = givenTypeVerified; ///
    }
    if (termNode !== null) {
        var standaloneTermVerified = verifyStandaloneTerm(termNode, fileContext, verifyAhead);
        argumentVerified = standaloneTermVerified; ///
    }
    if (argumentVerified) {
        fileContext.debug("...verified the '".concat(argumentString, "' argument."), argumentNode);
    }
    return argumentVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3Rlcm1Bc0NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcbmltcG9ydCB2ZXJpZnlHaXZlblR5cGUgZnJvbSBcIi4uLy4uL3ZlcmlmeS9naXZlblR5cGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpLFxuICAgICAgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtXCIpO1xuXG5jbGFzcyBUZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gYXJndW1lbnRWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIgPSBuZXcgVGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyBzdGFuZGFsb25lIHRlcm0uLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lVGVybVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlBcmd1bWVudChhcmd1bWVudE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgYXJndW1lbnRWZXJpZmllZDtcblxuICBjb25zdCBhcmd1bWVudFN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQuLi5gLCBhcmd1bWVudE5vZGUpO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdLCAvLy9cbiAgICAgICAgICBnaXZlblR5cGVWZXJpZmllZCA9IHZlcmlmeUdpdmVuVHlwZSh0eXBlTm9kZSwgdHlwZXMsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBhcmd1bWVudFZlcmlmaWVkID0gZ2l2ZW5UeXBlVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgYXJndW1lbnRWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cbiAgfVxuXG4gIGlmIChhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50LmAsIGFyZ3VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwiVGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJmaWxlQ29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZSIsInN0YW5kYWxvbmVUZXJtVmVyaWZpZWQiLCJ0ZXJtTm9kZVZlcmlmaWVkIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiYXJndW1lbnRWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50IiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJOb2RlVmVyaWZpZXIiLCJ0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInRlcm1zIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJkZWJ1ZyIsImFyZ3VtZW50U3RyaW5nIiwidHlwZU5vZGUiLCJ0eXBlcyIsImdpdmVuVHlwZVZlcmlmaWVkIiwidmVyaWZ5R2l2ZW5UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFvREEsT0FBNkM7ZUFBN0M7O0lBRWdCQSxvQkFBb0I7ZUFBcEJBOzs7MkRBcERPOzJEQUNFO2dFQUNHO3FCQUVGO3lCQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1FLDhDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZUFBZSxFQUFFQyxXQUFXLEVBQUVDLFdBQVc7Z0JBQzdELElBQUlDO2dCQUVKLElBQU1DLFdBQVdKLGdCQUFnQkssV0FBVztnQkFFNUMsT0FBUUQ7b0JBQ04sS0FBS0UseUJBQWM7d0JBQUU7NEJBQ25CLElBQU1DLFdBQVdQLGlCQUNYUSx5QkFBeUJkLHFCQUFxQmEsVUFBVU4sYUFBYUMsY0FDckVPLG1CQUFtQkQsd0JBQXlCLEdBQUc7NEJBRXJETCwwQkFBMEJNLGtCQUFrQixHQUFHOzRCQUUvQzt3QkFDRjtvQkFFQSxLQUFLQyw2QkFBa0I7d0JBQUU7NEJBQ3ZCLElBQU1DLGVBQWVYLGlCQUNmWSxtQkFBbUJDLGVBQWVGLGNBQWNWLGFBQWFDLGNBQzdEWSx1QkFBdUJGLGtCQUFtQixHQUFHOzRCQUVuRFQsMEJBQTBCVyxzQkFBc0IsR0FBRzs0QkFFbkQ7d0JBQ0Y7b0JBRUE7d0JBQVM7NEJBQ1BYLDBCQUEwQix1QkE1QjVCTCwwQ0E0QmtDQyx5QkFBTixJQUFLLGFBQXVCQyxpQkFBaUJDLGFBQWFDOzRCQUVwRjt3QkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0FuQ0lMO0VBQXNDaUIsYUFBWTtBQXNDeEQsSUFBTUMsZ0NBQWdDLElBQUlsQjtJQUUxQyxXQUFla0I7QUFFUixTQUFTdEIscUJBQXFCYSxRQUFRLEVBQUVOLFdBQVcsRUFBRUMsV0FBVztJQUNyRSxJQUFJTTtJQUVKLElBQU1TLGFBQWFoQixZQUFZaUIsWUFBWSxDQUFDWDtJQUU1Q04sWUFBWWtCLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLHlCQUF1QlY7SUFFdEUsSUFBTWEsUUFBUSxFQUFFLEVBQ1ZDLFVBQVVwQixhQUNWcUIsZUFBZUMsSUFBQUEsYUFBVSxFQUFDaEIsVUFBVWEsT0FBT0MsU0FBU25CO0lBRTFETSx5QkFBeUJjLGNBQWUsR0FBRztJQUUzQyxJQUFJZCx3QkFBd0I7UUFDMUJQLFlBQVl1QixLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFAsWUFBVyx1QkFBcUJWO0lBQ3hFO0lBRUEsT0FBT0M7QUFDVDtBQUVBLFNBQVNLLGVBQWVGLFlBQVksRUFBRVYsV0FBVyxFQUFFQyxXQUFXO0lBQzVELElBQUlVO0lBRUosSUFBTWEsaUJBQWlCeEIsWUFBWWlCLFlBQVksQ0FBQ1A7SUFFaERWLFlBQVlrQixLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZk0sZ0JBQWUsa0JBQWdCZDtJQUVuRSxJQUFNZSxXQUFXL0IsY0FBY2dCLGVBQ3pCSixXQUFXVixjQUFjYztJQUUvQixJQUFJZSxhQUFhLE1BQU07UUFDckIsSUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLG9CQUFvQkMsSUFBQUEsa0JBQWUsRUFBQ0gsVUFBVUMsT0FBTzFCLGFBQWFDO1FBRXhFVSxtQkFBbUJnQixtQkFBbUIsR0FBRztJQUMzQztJQUVBLElBQUlyQixhQUFhLE1BQU07UUFDckIsSUFBTUMseUJBQXlCZCxxQkFBcUJhLFVBQVVOLGFBQWFDO1FBRTNFVSxtQkFBbUJKLHdCQUF5QixHQUFHO0lBQ2pEO0lBRUEsSUFBSUksa0JBQWtCO1FBQ3BCWCxZQUFZdUIsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZDLGdCQUFlLGdCQUFjZDtJQUNyRTtJQUVBLE9BQU9DO0FBQ1QifQ==