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
                var typeNode = typeNodeQuery(argumentNode);
                if (typeNode !== null) {
                    var argumentString = context.nodeAsString(argumentNode);
                    context.error("The '".concat(argumentString, "' argument should be a term, not a type"), argumentNode);
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
                            if (termTypeEqualToOrSubTypeOfType) {
                                var termString = context.nodeAsString(termNode);
                                context.trace("The '".concat(termTypeName, "' type of the '").concat(termString, "' term is equal to or a sub-type of the '").concat(constructorTypeName, "' type in the constructor."), argumentNode);
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
    var termVerified;
    var termString = context.nodeAsString(termNode);
    context.debug("Verifying the '".concat(termString, "' term..."), termNode);
    var verifyTermFunctions = [
        verifyTermAsVariableEx,
        verifyTermAgainstConstructors
    ];
    termVerified = verifyTermFunctions.some(function(verifyTermFunction) {
        var termVerified = verifyTermFunction(termNode, types, context);
        if (termVerified) {
            return true;
        }
    });
    if (termVerified) {
        var firstType = (0, _array.first)(types), type = firstType, typeName = type.getName();
        context.debug("Verified the '".concat(termString, "' term, which has type '").concat(typeName, "'."), termNode);
    }
    return termVerified;
}
function verifyTermAgainstConstructors(termNode, types, context) {
    var termVerifiedAgainstConstructors;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term against constructors..."), termNode);
    var constructors = context.getConstructors();
    termVerifiedAgainstConstructors = constructors.some(function(constructor) {
        var termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, types, constructor, context);
        if (termVerifiedAgainstConstructor) {
            return true;
        }
    });
    return termVerifiedAgainstConstructors;
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
function verifyTermAgainstConstructor(termNode, types, constructor, context) {
    var termVerifiedAgainstConstructor = false;
    var termString = context.nodeAsString(termNode), constructorString = constructor.getString();
    context.trace("Verifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeVerified = termVerifier.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context);
    if (nodeVerified) {
        var type = constructor.getType();
        types.push(type);
        termVerifiedAgainstConstructor = true;
    }
    return termVerifiedAgainstConstructor;
}
function verifyTermAsVariableEx(termNode, types, context) {
    var termVerifiedAsVariable;
    var variables = [];
    termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);
    if (termVerifiedAsVariable) {
        var firstVariable = (0, _array.first)(variables), variable = firstVariable, type = variable.getType();
        types.push(type);
    }
    return termVerifiedAsVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIFRlcm1WZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGUubWF0Y2goY29uc3RydWN0b3JUZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JSdWxlTmFtZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBjb25zdHJ1Y3RvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckNoaWxkTm9kZXMgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGVzID0gY29uc3RydWN0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2RlcywgY29uc3RydWN0b3JOb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZWAsIGFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JBcmd1bWVudE5vZGUpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JBcmd1bWVudE5vZGUpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdG9yVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGUsIGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShjb25zdHJ1Y3RvclR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvclR5cGUgPSAoY29uc3RydWN0b3JUeXBlTmFtZSA9PT0gT0JKRUNUX1RZUEVfTkFNRSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGNvbnN0cnVjdG9yVHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGNvbnN0cnVjdG9yVHlwZSk7XG5cbiAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dGVybVR5cGVOYW1lfScgdHlwZSBvZiB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7Y29uc3RydWN0b3JUeXBlTmFtZX0nIHR5cGUgaW4gdGhlIGNvbnN0cnVjdG9yLmAsIGFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRlcm1WZXJpZmllciA9IG5ldyBUZXJtVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZDtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5VGVybUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlUZXJtQXNWYXJpYWJsZUV4LFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzXG4gIF07XG5cbiAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlUZXJtRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgVmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLCB3aGljaCBoYXMgdHlwZSAnJHt0eXBlTmFtZX0nLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgY29uc3RydWN0b3JzLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVzLCBjb25zdHJ1Y3RvciwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVzLCBjb25zdHJ1Y3RvciwgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybVZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5OZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0KTtcblxuICBpZiAobm9kZVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGVFeCh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm0iLCJ0ZXJtVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIlRlcm1WZXJpZmllciIsInZlcmlmeVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnN0cnVjdG9yVGVybWluYWxOb2RlIiwiY29udGV4dCIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWF0Y2hlcyIsIm1hdGNoIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb25zdHJ1Y3RvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29uc3RydWN0b3JBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29uc3RydWN0b3JDaGlsZE5vZGVzIiwibm9kZXMiLCJjb25zdHJ1Y3Rvck5vZGVzIiwibm9kZXNWZXJpZmllZCIsInZlcmlmeU5vZGVzIiwidHlwZU5vZGUiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwidGVybU5vZGUiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiY29uc3RydWN0b3JUeXBlTm9kZSIsIm5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWQiLCJjb25zdHJ1Y3RvclR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidGVybVR5cGVOYW1lIiwiZ2V0TmFtZSIsImNvbnN0cnVjdG9yVHlwZSIsIk9CSkVDVF9UWVBFX05BTUUiLCJvYmplY3RUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJWZXJpZmllciIsImRlYnVnIiwidmVyaWZ5VGVybUZ1bmN0aW9ucyIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlRXgiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwidHlwZSIsInR5cGVOYW1lIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvciIsInZhcmlhYmxlcyIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJwdXNoIiwiY29uc3RydWN0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJnZXRUZXJtTm9kZSIsIm5vblRlcm1pbmFsTk5kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZ2V0VHlwZSIsImZpcnN0VmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1IQSxPQTZCQztlQTdCdUJBOztJQUZYQyxZQUFZO2VBQVpBOztJQWlDR0MsNkJBQTZCO2VBQTdCQTs7SUFvQkFDLG9CQUFvQjtlQUFwQkE7OzsrREFwS0s7cUJBRUM7b0JBQ0s7eUJBQ007eUJBQ0U7cUJBQzJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxJQUFBLEFBQU1HLDZCQW1HSCxBQW5HSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxZQUFZLEVBQUVDLHVCQUF1QixFQUFFQyxPQUFPO2dCQUMvRCxJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQU1DLFVBQVVKLGFBQWFLLEtBQUssQ0FBQ0o7Z0JBRW5DLElBQUlHLFNBQVM7b0JBQ1hELHVCQUF1QjtnQkFDekI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGVBQWUsRUFBRUMsMEJBQTBCLEVBQUVO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