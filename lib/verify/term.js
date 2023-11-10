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
        return verifyTerm;
    },
    termVerifier: function() {
        return termVerifier;
    },
    verifyTermAgainstConstructor: function() {
        return verifyTermAgainstConstructor;
    },
    verifyTermAgainstConstructors: function() {
        return verifyTermAgainstConstructors;
    },
    verifyTermAsVariable: function() {
        return verifyTermAsVariable;
    }
});
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _array = require("../utilities/array");
var _type = require("../type");
var _typeNames = require("../typeNames");
var _ruleNames = require("../ruleNames");
var _query = require("../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), typeNodeQuery = (0, _query.nodeQuery)("/argument/type!"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var TermVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(TermVerifier, Verifier);
    var _super = _create_super(TermVerifier);
    function TermVerifier() {
        _class_call_check(this, TermVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(TermVerifier, [
        {
            key: "verifyTerminalNode",
            value: function verifyTerminalNode(terminalNode, constructorTerminalNode, context) {
                var terminalNodeVerified = false;
                var matches = terminalNode.match(constructorTerminalNode);
                if (matches) {
                    terminalNodeVerified = true;
                }
                return terminalNodeVerified;
            }
        },
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context) {
                var nonTerminalNodeVerified = false;
                var ruleName = nonTerminalNode.getRuleName(), constructorRuleName = constructorNonTerminalNode.getRuleName(); ///
                if (ruleName === constructorRuleName) {
                    switch(ruleName){
                        case _ruleNames.ARGUMENT_RULE_NAME:
                            {
                                var argumentNode = nonTerminalNode, constructorArgumentNode = constructorNonTerminalNode, argumentNodeVerified = this.verifyArgumentNode(argumentNode, constructorArgumentNode, context);
                                nonTerminalNodeVerified = argumentNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                var childNodes = nonTerminalNode.getChildNodes(), constructorChildNodes = constructorNonTerminalNode.getChildNodes(), nodes = childNodes, constructorNodes = constructorChildNodes, nodesVerified = this.verifyNodes(nodes, constructorNodes, context);
                                nonTerminalNodeVerified = nodesVerified; ///
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyArgumentNode",
            value: function verifyArgumentNode(argumentNode, constructorArgumentNode, context) {
                var argumentNodeVerified = false;
                var argumentString = context.nodeAsString(argumentNode), constructorArgumentString = context.nodeAsString(constructorArgumentNode);
                context.trace("Verifying the '".concat(argumentString, "' argument against the '").concat(constructorArgumentString, "' constructor."), argumentNode);
                var typeNode = typeNodeQuery(argumentNode);
                if (typeNode !== null) {
                    var argumentString1 = context.nodeAsString(argumentNode);
                    context.error("The '".concat(argumentString1, "' argument should be a term, not a type"), argumentNode);
                } else {
                    var termNode = termNodeQuery(argumentNode), constructorTermNode = termNodeQuery(constructorArgumentNode), constructorTypeNode = typeNodeQuery(constructorArgumentNode);
                    if (false) {
                    ///
                    } else if (constructorTermNode !== null) {
                        var node = termNode, constructorNode = constructorTermNode, nodeVerified = this.verifyNode(node, constructorNode, context);
                        argumentNodeVerified = nodeVerified; ///
                    } else if (constructorTypeNode !== null) {
                        var types = [], termVerified = verifyTerm(termNode, types, context);
                        if (termVerified) {
                            var constructorTypeName = (0, _query.typeNameFromTypeNode)(constructorTypeNode), firstType = (0, _array.first)(types), termType = firstType, termTypeName = termType.getName(), constructorType = constructorTypeName === _typeNames.OBJECT_TYPE_NAME ? _type.objectType : context.findTypeByTypeName(constructorTypeName), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);
                            context.trace("The type of the term is '".concat(termTypeName, "' and the type of the constructor is '").concat(constructorTypeName, "'."), argumentNode);
                            if (termTypeEqualToOrSubTypeOfType) {
                                argumentNodeVerified = true;
                            }
                        }
                    }
                }
                return argumentNodeVerified;
            }
        }
    ]);
    return TermVerifier;
}(_verifier.default);
var termVerifier = new TermVerifier();
function verifyTerm(termNode, types, context) {
    var termVerified = false;
    var termString = context.nodeAsString(termNode);
    context.debug("Verifying the '".concat(termString, "' term..."), termNode);
    if (!termVerified) {
        var variables = [], termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);
        if (termVerifiedAsVariable) {
            var firstVariable = (0, _array.first)(variables), variable = firstVariable, type = variable.getType();
            types.push(type);
            termVerified = true;
        }
    }
    if (!termVerified) {
        var termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, context);
        if (termVerifiedAgainstConstructors) {
            termVerified = true;
        }
    }
    if (termVerified) {
        context.debug("Verified the '".concat(termString, "' term."), termNode);
    }
    return termVerified;
}
function verifyTermAgainstConstructors(termNode, types, context) {
    var termVerifiedAgainstConstructors = false;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term against constructors..."), termNode);
    var constructors = context.getConstructors(), constructor = constructors.find(function(constructor) {
        var termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, constructor, context);
        if (termVerifiedAgainstConstructor) {
            return true;
        }
    }) || null;
    if (constructor !== null) {
        var type = constructor.getType();
        types.push(type);
        termVerifiedAgainstConstructors = true;
    }
    return termVerifiedAgainstConstructors;
}
function verifyTermAgainstConstructor(termNode, constructor, context) {
    var termString = context.nodeAsString(termNode), constructorString = constructor.getString();
    context.trace("Verifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeVerified = termVerifier.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context), termVerifiedAgainstConstructor = nodeVerified; ///
    return termVerifiedAgainstConstructor;
}
function verifyTermAsVariable(termNode, variables, context) {
    var termVerifiedAsVariable = false;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = context.isVariablePresentByVariableName(variableName);
        if (variablePresent) {
            var variable = context.findVariableByVariableName(variableName);
            variables.push(variable);
            termVerifiedAsVariable = true;
        }
    }
    return termVerifiedAsVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIFRlcm1WZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGUubWF0Y2goY29uc3RydWN0b3JUZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JSdWxlTmFtZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBjb25zdHJ1Y3RvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckNoaWxkTm9kZXMgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGVzID0gY29uc3RydWN0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2RlcywgY29uc3RydWN0b3JOb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JBcmd1bWVudFN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudCBzaG91bGQgYmUgYSB0ZXJtLCBub3QgYSB0eXBlYCwgYXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgY29uc3RydWN0b3JOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IG5vZGVWZXJpZmllZDsgIC8vL1xuICAgICAgfSBlbHNlIGlmIChjb25zdHJ1Y3RvclR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgY29uc3RydWN0b3JUeXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKGNvbnN0cnVjdG9yVHlwZU5vZGUpLFxuICAgICAgICAgICAgICAgIGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgICAgICAgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yVHlwZSA9IChjb25zdHJ1Y3RvclR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoY29uc3RydWN0b3JUeXBlTmFtZSksXG4gICAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YoY29uc3RydWN0b3JUeXBlKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSB0eXBlIG9mIHRoZSB0ZXJtIGlzICcke3Rlcm1UeXBlTmFtZX0nIGFuZCB0aGUgdHlwZSBvZiB0aGUgY29uc3RydWN0b3IgaXMgJyR7Y29uc3RydWN0b3JUeXBlTmFtZX0nLmAsIGFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0ZXJtVmVyaWZpZXIgPSBuZXcgVGVybVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gLCB0ZXJtTm9kZSk7XG5cbiAgaWYgKCF0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdHlwZXMucHVzaCh0eXBlKTtcblxuICAgICAgdGVybVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMpIHtcbiAgICAgIHRlcm1WZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYFZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgY29uc3RydWN0b3JzLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JzLmZpbmQoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgY29uc3RydWN0b3IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChjb25zdHJ1Y3RvciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIGNvbnN0cnVjdG9yLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOTmRlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1WZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOTmRlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCksXG4gICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtIiwidGVybVZlcmlmaWVyIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiVGVybVZlcmlmaWVyIiwidmVyaWZ5VGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29uc3RydWN0b3JUZXJtaW5hbE5vZGUiLCJjb250ZXh0IiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJtYXRjaGVzIiwibWF0Y2giLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbnN0cnVjdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjb25zdHJ1Y3RvckNoaWxkTm9kZXMiLCJub2RlcyIsImNvbnN0cnVjdG9yTm9kZXMiLCJub2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Tm9kZXMiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImNvbnN0cnVjdG9yQXJndW1lbnRTdHJpbmciLCJ0cmFjZSIsInR5cGVOb2RlIiwiZXJyb3IiLCJ0ZXJtTm9kZSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJjb25zdHJ1Y3RvclR5cGVOb2RlIiwibm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vZGUiLCJ0eXBlcyIsInRlcm1WZXJpZmllZCIsImNvbnN0cnVjdG9yVHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsImZpcnN0VHlwZSIsImZpcnN0IiwidGVybVR5cGUiLCJ0ZXJtVHlwZU5hbWUiLCJnZXROYW1lIiwiY29uc3RydWN0b3JUeXBlIiwiT0JKRUNUX1RZUEVfTkFNRSIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlZlcmlmaWVyIiwidGVybVN0cmluZyIsImRlYnVnIiwidmFyaWFibGVzIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJ2YXJpYWJsZSIsInR5cGUiLCJnZXRUeXBlIiwicHVzaCIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsImZpbmQiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclN0cmluZyIsImdldFN0cmluZyIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFzSEEsT0FtQ0M7ZUFuQ3VCQTs7SUFGWEMsWUFBWTtlQUFaQTs7SUFrRUdDLDRCQUE0QjtlQUE1QkE7O0lBM0JBQyw2QkFBNkI7ZUFBN0JBOztJQTBDQUMsb0JBQW9CO2VBQXBCQTs7OytEQW5NSztxQkFFQztvQkFDSzt5QkFDTTt5QkFDRTtxQkFDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLElBQUEsQUFBTUcsNkJBc0dILEFBdEdIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFlBQVksRUFBRUMsdUJBQXVCLEVBQUVDLE9BQU87Z0JBQy9ELElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTUMsVUFBVUosYUFBYUssS0FBSyxDQUFDSjtnQkFFbkMsSUFBSUcsU0FBUztvQkFDWEQsdUJBQXVCO2dCQUN6QjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZUFBZSxFQUFFQywwQkFBMEIsRUFBRU4sT0FBTztnQkFDeEUsSUFBSU8sMEJBQTBCO2dCQUU5QixJQUFNQyxXQUFXSCxnQkFBZ0JJLFdBQVcsSUFDdENDLHNCQUFzQkosMkJBQTJC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