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
                context.trace("Verifying the '".concat(argumentString, "' argument against the '").concat(constructorArgumentString, "' constructor."));
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
        context.trace("...verified.", termNode);
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
            context.trace("...verified.", termNode);
        }
    }
    return termVerifiedAsVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIFRlcm1WZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGUubWF0Y2goY29uc3RydWN0b3JUZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JSdWxlTmFtZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBjb25zdHJ1Y3RvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckNoaWxkTm9kZXMgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGVzID0gY29uc3RydWN0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2RlcywgY29uc3RydWN0b3JOb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQgYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JBcmd1bWVudFN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZWAsIGFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JBcmd1bWVudE5vZGUpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JBcmd1bWVudE5vZGUpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdG9yVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGUsIGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShjb25zdHJ1Y3RvclR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvclR5cGUgPSAoY29uc3RydWN0b3JUeXBlTmFtZSA9PT0gT0JKRUNUX1RZUEVfTkFNRSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGNvbnN0cnVjdG9yVHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGNvbnN0cnVjdG9yVHlwZSk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgdHlwZSBvZiB0aGUgdGVybSBpcyAnJHt0ZXJtVHlwZU5hbWV9JyBhbmQgdGhlIHR5cGUgb2YgdGhlIGNvbnN0cnVjdG9yIGlzICcke2NvbnN0cnVjdG9yVHlwZU5hbWV9Jy5gLCBhcmd1bWVudE5vZGUpO1xuXG4gICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdGVybVZlcmlmaWVyID0gbmV3IFRlcm1WZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGlmICghdGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgIHRlcm1WZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzKSB7XG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IGNvbnN0cnVjdG9ycy4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycygpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9ycy5maW5kKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIGNvbnN0cnVjdG9yLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoY29uc3RydWN0b3IgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkLmAsIHRlcm1Ob2RlKTtcblxuICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCBjb25zdHJ1Y3RvciwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtIiwidGVybVZlcmlmaWVyIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiVGVybVZlcmlmaWVyIiwidmVyaWZ5VGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29uc3RydWN0b3JUZXJtaW5hbE5vZGUiLCJjb250ZXh0IiwidGVybWluYWxOb2RlVmVyaWZpZWQiLCJtYXRjaGVzIiwibWF0Y2giLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImNvbnN0cnVjdG9yUnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJhcmd1bWVudE5vZGUiLCJjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5QXJndW1lbnROb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjb25zdHJ1Y3RvckNoaWxkTm9kZXMiLCJub2RlcyIsImNvbnN0cnVjdG9yTm9kZXMiLCJub2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Tm9kZXMiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImNvbnN0cnVjdG9yQXJndW1lbnRTdHJpbmciLCJ0cmFjZSIsInR5cGVOb2RlIiwiZXJyb3IiLCJ0ZXJtTm9kZSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJjb25zdHJ1Y3RvclR5cGVOb2RlIiwibm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vZGUiLCJ0eXBlcyIsInRlcm1WZXJpZmllZCIsImNvbnN0cnVjdG9yVHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsImZpcnN0VHlwZSIsImZpcnN0IiwidGVybVR5cGUiLCJ0ZXJtVHlwZU5hbWUiLCJnZXROYW1lIiwiY29uc3RydWN0b3JUeXBlIiwiT0JKRUNUX1RZUEVfTkFNRSIsIm9iamVjdFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlZlcmlmaWVyIiwidGVybVN0cmluZyIsImRlYnVnIiwidmFyaWFibGVzIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJ2YXJpYWJsZSIsInR5cGUiLCJnZXRUeXBlIiwicHVzaCIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsImZpbmQiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclN0cmluZyIsImdldFN0cmluZyIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFzSEEsT0FtQ0M7ZUFuQ3VCQTs7SUFGWEMsWUFBWTtlQUFaQTs7SUFvRUdDLDRCQUE0QjtlQUE1QkE7O0lBN0JBQyw2QkFBNkI7ZUFBN0JBOztJQTRDQUMsb0JBQW9CO2VBQXBCQTs7OytEQXJNSztxQkFFQztvQkFDSzt5QkFDTTt5QkFDRTtxQkFDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLElBQUEsQUFBTUcsNkJBc0dILEFBdEdIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFlBQVksRUFBRUMsdUJBQXVCLEVBQUVDLE9BQU87Z0JBQy9ELElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTUMsVUFBVUosYUFBYUssS0FBSyxDQUFDSjtnQkFFbkMsSUFBSUcsU0FBUztvQkFDWEQsdUJBQXVCO2dCQUN6QjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZUFBZSxFQUFFQywwQkFBMEIs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