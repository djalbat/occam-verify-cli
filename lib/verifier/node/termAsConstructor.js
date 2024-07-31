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
                    case _ruleNames.ARGUMENT_RULE_NAME:
                        {
                            var argumentNode = nonTerminalNode, argumentVerified = verifyArgument(argumentNode, fileContext, verifyAhead), argumentNodeVerified = argumentVerified; ///
                            nonTerminalNodeVerified = argumentNodeVerified; ///
                            break;
                        }
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var termNode = nonTerminalNode, standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, fileContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                            nonTerminalNodeVerified = termNodeVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3Rlcm1Bc0NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZVZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2RlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVUeXBlIH0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90eXBlXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGFuZGFsb25lVGVybSB9IGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90eXBlXCIpLFxuICAgICAgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtXCIpO1xuXG5jbGFzcyBUZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciBleHRlbmRzIE5vZGVWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50VmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIgPSBuZXcgVGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXI7XG5cbmZ1bmN0aW9uIHZlcmlmeUFyZ3VtZW50KGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBhcmd1bWVudFZlcmlmaWVkO1xuXG4gIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKGFyZ3VtZW50Tm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudC4uLmAsIGFyZ3VtZW50Tm9kZSk7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpO1xuXG4gIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUeXBlVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVHlwZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGFyZ3VtZW50VmVyaWZpZWQgPSBzdGFuZGFsb25lVHlwZVZlcmlmaWVkOyAvLy9cbiAgfVxuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGFyZ3VtZW50VmVyaWZpZWQgPSBzdGFuZGFsb25lVGVybVZlcmlmaWVkOyAgLy8vXG4gIH1cblxuICBpZiAoYXJndW1lbnRWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudC5gLCBhcmd1bWVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJUZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImZpbGVDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudFZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnQiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGUiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJ0ZXJtTm9kZVZlcmlmaWVkIiwiTm9kZVZlcmlmaWVyIiwidGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5vZGUiLCJzdGFuZGFsb25lVHlwZVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVR5cGUiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0RBOzs7ZUFBQTs7OzJEQWxEeUI7cUJBRUM7b0JBQ1c7b0JBQ0E7eUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRSw4Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXO2dCQUM3RCxJQUFJQztnQkFFSixJQUFNQyxXQUFXSixnQkFBZ0JLLFdBQVc7Z0JBRTVDLE9BQVFEO29CQUNOLEtBQUtFLDZCQUFrQjt3QkFBRTs0QkFDdkIsSUFBTUMsZUFBZVAsaUJBQ2ZRLG1CQUFtQkMsZUFBZUYsY0FBY04sYUFBYUMsY0FDN0RRLHVCQUF1QkYsa0JBQW1CLEdBQUc7NEJBRW5ETCwwQkFBMEJPLHNCQUFzQixHQUFHOzRCQUVuRDt3QkFDRjtvQkFFQSxLQUFLQyx5QkFBYzt3QkFBRTs0QkFDbkIsSUFBTUMsV0FBV1osaUJBQ1hhLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNGLFVBQVVYLGFBQWFDLGNBQ3JFYSxtQkFBbUJGLHdCQUF5QixHQUFHOzRCQUVyRFYsMEJBQTBCWSxrQkFBa0IsR0FBRzs0QkFFL0M7d0JBQ0Y7b0JBRUE7d0JBQVM7NEJBQ1BaLDBCQUEwQix1QkE1QjVCTCwwQ0E0QmtDQyx5QkFBTixJQUFLLGFBQXVCQyxpQkFBaUJDLGFBQWFDOzRCQUVwRjt3QkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7V0FuQ0lMO0VBQXNDa0IsYUFBWTtBQXNDeEQsSUFBTUMsZ0NBQWdDLElBQUluQjtJQUUxQyxXQUFlbUI7QUFFZixTQUFTUixlQUFlRixZQUFZLEVBQUVOLFdBQVcsRUFBRUMsV0FBVztJQUM1RCxJQUFJTTtJQUVKLElBQU1VLGlCQUFpQmpCLFlBQVlrQixZQUFZLENBQUNaO0lBRWhETixZQUFZbUIsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLGtCQUFnQlg7SUFFbkUsSUFBTWMsV0FBVzFCLGNBQWNZLGVBQ3pCSyxXQUFXZixjQUFjVTtJQUUvQixJQUFJYyxhQUFhLE1BQU07UUFDckIsSUFBTUMseUJBQXlCQyxJQUFBQSwwQkFBb0IsRUFBQ0YsVUFBVXBCLGFBQWFDO1FBRTNFTSxtQkFBbUJjLHdCQUF3QixHQUFHO0lBQ2hEO0lBRUEsSUFBSVYsYUFBYSxNQUFNO1FBQ3JCLElBQU1DLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNGLFVBQVVYLGFBQWFDO1FBRTNFTSxtQkFBbUJLLHdCQUF5QixHQUFHO0lBQ2pEO0lBRUEsSUFBSUwsa0JBQWtCO1FBQ3BCUCxZQUFZdUIsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZOLGdCQUFlLGdCQUFjWDtJQUNyRTtJQUVBLE9BQU9DO0FBQ1QifQ==