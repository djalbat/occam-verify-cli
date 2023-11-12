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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../../combinator"));
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _node = /*#__PURE__*/ _interop_require_default(require("../../verifier/node"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../../verify/statement"));
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
var StatementAsCombinatorNodeVerifier = /*#__PURE__*/ function(NodeVerifier) {
    _inherits(StatementAsCombinatorNodeVerifier, NodeVerifier);
    var _super = _create_super(StatementAsCombinatorNodeVerifier);
    function StatementAsCombinatorNodeVerifier() {
        _class_call_check(this, StatementAsCombinatorNodeVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(StatementAsCombinatorNodeVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
                var nonTerminalNodeVerified;
                var ruleName = nonTerminalNode.getRuleName();
                switch(ruleName){
                    case _ruleNames.TYPE_RULE_NAME:
                        {
                            var typeNode = nonTerminalNode, typeVerified = verifyType(typeNode, fileContext, verifyAhead), typeNodeVerified = typeVerified; ///
                            nonTerminalNodeVerified = typeNodeVerified; ///
                            break;
                        }
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var termNode = nonTerminalNode, standaloneTermVerified = verifyStandaloneTerm(termNode, fileContext, verifyAhead), termNodeVerified = standaloneTermVerified; ///
                            nonTerminalNodeVerified = termNodeVerified; ///
                            break;
                        }
                    case _ruleNames.STATEMENT_RULE_NAME:
                        {
                            var statementNode = nonTerminalNode, standaloneStatementVerified = verifyStandaloneStatement(statementNode, fileContext, verifyAhead), statementNodeVerified = standaloneStatementVerified; ///
                            nonTerminalNodeVerified = statementNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(StatementAsCombinatorNodeVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNode, fileContext, verifyAhead); ///
                            break;
                        }
                }
                return nonTerminalNodeVerified;
            }
        }
    ]);
    return StatementAsCombinatorNodeVerifier;
}(_node.default);
var statementAsCombinatorNodeVerifier = new StatementAsCombinatorNodeVerifier();
var _default = statementAsCombinatorNodeVerifier;
function verifyType(typeNode, fileContext, verifyAhead) {
    var typeVerified = false;
    var typeString = fileContext.nodeAsString(typeNode);
    fileContext.trace("Verifying the '".concat(typeString, "' type..."));
    var typeName = (0, _query.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
    if (!typePresent) {
        fileContext.info("The type '".concat(typeName, "' not present."), typeNode);
    } else {
        typeVerified = true;
    }
    if (typeVerified) {
        fileContext.debug("...verified the '".concat(typeString, "' type."));
    }
    return typeVerified;
}
function verifyStandaloneTerm(termNode, fileContext, verifyAhead) {
    var standaloneTermVerified;
    var termString = fileContext.nodeAsString(termNode);
    fileContext.trace("Verifying the '".concat(termString, "' standalone term..."));
    var types = [], context = fileContext, termVerified = (0, _term.default)(termNode, types, context, verifyAhead);
    standaloneTermVerified = termVerified; ///
    if (standaloneTermVerified) {
        fileContext.debug("...verified the '".concat(termString, "' standalone term."));
    }
    return standaloneTermVerified;
}
function verifyStandaloneStatement(statementNode, fileContext, verifyAhead) {
    var standaloneStatementVerified;
    var statementString = fileContext.nodeAsString(statementNode);
    fileContext.trace("Verifying the '".concat(statementString, "' standalone statement..."));
    var context = fileContext, derived = false, assignments = [], statementVerified = (0, _statement.default)(statementNode, assignments, derived, context, verifyAhead);
    if (statementVerified) {
        var tokens = fileContext.getTokens(), combinator = _combinator.default.fromStatementNodeAndTokens(statementNode, tokens);
        fileContext.addCombinator(combinator);
        standaloneStatementVerified = true;
    }
    if (standaloneStatementVerified) {
        fileContext.debug("...verified the '".concat(statementString, "' standalone statement."));
    }
    return standaloneStatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2RlL3N0YXRlbWVudEFzQ29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uLy4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IE5vZGVWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZVwiO1xuaW1wb3J0IHZlcmlmeVN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFRZUEVfUlVMRV9OQU1FLCBURVJNX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgU3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyIGV4dGVuZHMgTm9kZVZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICB0eXBlVmVyaWZpZWQgPSB2ZXJpZnlUeXBlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB0eXBlTm9kZVZlcmlmaWVkID0gdHlwZVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0eXBlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkOyAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBmaWxlQ29udGV4dCwgdmVyaWZ5QWhlYWQpOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxufVxuXG5jb25zdCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JOb2RlVmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlbWVudEFzQ29tYmluYXRvck5vZGVWZXJpZmllcjtcblxuZnVuY3Rpb24gdmVyaWZ5VHlwZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVGhlIHR5cGUgJyR7dHlwZU5hbWV9JyBub3QgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLi4uYCk7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lVGVybVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLmApO1xuICB9XG5cbiAgcmV0dXJuIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHN0YXRlbWVudE5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YW5kYWxvbmUgc3RhdGVtZW50Li4uYCk7XG5cbiAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgIGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBmaWxlQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyhzdGF0ZW1lbnROb2RlLCB0b2tlbnMpO1xuXG4gICAgZmlsZUNvbnRleHQuYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKTtcblxuICAgIHN0YW5kYWxvbmVTdGF0ZW1lbnRWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICBpZiAoc3RhbmRhbG9uZVN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGFuZGFsb25lIHN0YXRlbWVudC5gKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIlRZUEVfUlVMRV9OQU1FIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwidHlwZU5vZGVWZXJpZmllZCIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGUiLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJ0ZXJtTm9kZVZlcmlmaWVkIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGUiLCJzdGFuZGFsb25lU3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwiTm9kZVZlcmlmaWVyIiwic3RhdGVtZW50QXNDb21iaW5hdG9yTm9kZVZlcmlmaWVyIiwidHlwZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJpbmZvIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidHlwZXMiLCJjb250ZXh0IiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInN0YXRlbWVudFN0cmluZyIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29tYmluYXRvciIsIkNvbWJpbmF0b3IiLCJmcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyIsImFkZENvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZEQTs7O2VBQUE7OztpRUEzRHVCOzJEQUNBOzJEQUNFO2dFQUNHO3FCQUVTO3lCQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQUEsQUFBTUEsa0RBaURILEFBakRIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXO2dCQUM3RCxJQUFJQztnQkFFSixJQUFNQyxXQUFXSixnQkFBZ0JLLFdBQVc7Z0JBRTVDLE9BQVFEO29CQUNOLEtBQUtFLHlCQUFj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