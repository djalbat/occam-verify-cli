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
    termVerifier: function() {
        return termVerifier;
    },
    default: function() {
        return verifyTerm;
    },
    verifyTermAgainstConstructors: function() {
        return verifyTermAgainstConstructors;
    },
    verifyTermAgainstConstructor: function() {
        return verifyTermAgainstConstructor;
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
                var typeNode = typeNodeQuery(argumentNode);
                if (typeNode !== null) {
                    var argumentString = context.nodeAsString(argumentNode);
                    context.error("The ".concat(argumentString, " argument should be a term, not a type"), argumentNode);
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
                            var constructorTypeName = (0, _query.typeNameFromTypeNode)(constructorTypeNode), constructorType = constructorTypeName === _typeNames.OBJECT_TYPE_NAME ? _type.objectType : context.findTypeByTypeName(constructorTypeName), firstType = (0, _array.first)(types), termType = firstType, type = constructorType, termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
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
    context.trace("Verifying the '".concat(termString, "' term..."), termNode);
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
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeVerified = termVerifier.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context), termVerifiedAgainstConstructor = nodeVerified; ///
    return termVerifiedAgainstConstructor;
}
function verifyTermAsVariable(termNode, variables, context) {
    var termVerifiedAsVariable = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIFRlcm1WZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGUubWF0Y2goY29uc3RydWN0b3JUZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JSdWxlTmFtZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBjb25zdHJ1Y3RvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckNoaWxkTm9kZXMgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGVzID0gY29uc3RydWN0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2RlcywgY29uc3RydWN0b3JOb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgLCBhcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yVHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmIChjb25zdHJ1Y3RvclRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZShub2RlLCBjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gbm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdG9yVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoY29uc3RydWN0b3JUeXBlTm9kZSksXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlID0gKGNvbnN0cnVjdG9yVHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShjb25zdHJ1Y3RvclR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSBjb25zdHJ1Y3RvclR5cGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdGVybVZlcmlmaWVyID0gbmV3IFRlcm1WZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGlmICghdGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgIHRlcm1WZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzKSB7XG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JzLmZpbmQoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgY29uc3RydWN0b3IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChjb25zdHJ1Y3RvciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIGNvbnN0cnVjdG9yLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybVZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5OZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0KSxcbiAgICAgICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gbm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuIl0sIm5hbWVzIjpbInRlcm1WZXJpZmllciIsInZlcmlmeVRlcm0iLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJUZXJtVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb25zdHJ1Y3RvclRlcm1pbmFsTm9kZSIsImNvbnRleHQiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1hdGNoZXMiLCJtYXRjaCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY29uc3RydWN0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbnN0cnVjdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNvbnN0cnVjdG9yQ2hpbGROb2RlcyIsIm5vZGVzIiwiY29uc3RydWN0b3JOb2RlcyIsIm5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlcyIsInR5cGVOb2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsInRlcm1Ob2RlIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImNvbnN0cnVjdG9yVHlwZU5vZGUiLCJub2RlIiwiY29uc3RydWN0b3JOb2RlIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwiY29uc3RydWN0b3JUeXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiY29uc3RydWN0b3JUeXBlIiwiT0JKRUNUX1RZUEVfTkFNRSIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVmVyaWZpZXIiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZXMiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0VHlwZSIsInB1c2giLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwiZGVidWciLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsImZpbmQiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IiLCJnZXRUZXJtTm9kZSIsIm5vblRlcm1pbmFsTk5kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSJd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