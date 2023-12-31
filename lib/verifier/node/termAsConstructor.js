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
    },
    verifyType: function() {
        return verifyType;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
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
function verifyType(typeNode, fileContext, verifyAhead) {
    var typeVerified = false;
    var typeString = fileContext.nodeAsString(typeNode);
    fileContext.trace("Verifying the '".concat(typeString, "' type..."), typeNode);
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        fileContext.debug("The type '".concat(typeName, "' is not present."), typeNode);
    } else {
        fileContext.debug("...verified the '".concat(typeString, "' type."), typeNode);
        var verifiedAhead = verifyAhead();
        typeVerified = verifiedAhead; ///
    }
    return typeVerified;
}
function verifyArgument(argumentNode, fileContext, verifyAhead) {
    var argumentVerified;
    var argumentString = fileContext.nodeAsString(argumentNode);
    fileContext.trace("Verifying the '".concat(argumentString, "' argument..."), argumentNode);
    var typeNode = typeNodeQuery(argumentNode), termNode = termNodeQuery(argumentNode);
    if (typeNode !== null) {
        var typeVerified = verifyType(typeNode, fileContext, verifyAhead);
        argumentVerified = typeVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3Rlcm1Bc0NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBOb2RlVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBBUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybVwiKTtcblxuY2xhc3MgVGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIgZXh0ZW5kcyBOb2RlVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBhcmd1bWVudFZlcmlmaWVkID0gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50VmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyID0gbmV3IFRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAoc3RhbmRhbG9uZVRlcm1WZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0eXBlTm9kZSk7XG5cbiAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBpcyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0eXBlTm9kZSk7XG5cbiAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHR5cGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5QXJndW1lbnQoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGFyZ3VtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50Li4uYCwgYXJndW1lbnROb2RlKTtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGFyZ3VtZW50VmVyaWZpZWQgPSB0eXBlVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgYXJndW1lbnRWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cbiAgfVxuXG4gIGlmIChhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHthcmd1bWVudFN0cmluZ30nIGFyZ3VtZW50LmAsIGFyZ3VtZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsInZlcmlmeVR5cGUiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybU5vZGVRdWVyeSIsIlRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGUiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidGVybU5vZGVWZXJpZmllZCIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudCIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwiTm9kZVZlcmlmaWVyIiwidGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0ZXJtcyIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZGVidWciLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllZCIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInZlcmlmaWVkQWhlYWQiLCJhcmd1bWVu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