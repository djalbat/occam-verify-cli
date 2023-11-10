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
        var firstType = (0, _array.first)(types), type1 = firstType, typeName = type1.getName();
        context.debug("Verified the '".concat(termString, "' term, which has type '").concat(typeName, "'."), termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIFRlcm1WZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGUubWF0Y2goY29uc3RydWN0b3JUZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JSdWxlTmFtZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBjb25zdHJ1Y3RvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckNoaWxkTm9kZXMgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGVzID0gY29uc3RydWN0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2RlcywgY29uc3RydWN0b3JOb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICcke2FyZ3VtZW50U3RyaW5nfScgYXJndW1lbnQgc2hvdWxkIGJlIGEgdGVybSwgbm90IGEgdHlwZWAsIGFyZ3VtZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoY29uc3RydWN0b3JBcmd1bWVudE5vZGUpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JBcmd1bWVudE5vZGUpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdG9yVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yTm9kZSA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2RlKG5vZGUsIGNvbnN0cnVjdG9yTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZShjb25zdHJ1Y3RvclR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgdGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvclR5cGUgPSAoY29uc3RydWN0b3JUeXBlTmFtZSA9PT0gT0JKRUNUX1RZUEVfTkFNRSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKGNvbnN0cnVjdG9yVHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKGNvbnN0cnVjdG9yVHlwZSk7XG5cbiAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dGVybVR5cGVOYW1lfScgdHlwZSBvZiB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7Y29uc3RydWN0b3JUeXBlTmFtZX0nIHR5cGUgaW4gdGhlIGNvbnN0cnVjdG9yLmAsIGFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRlcm1WZXJpZmllciA9IG5ldyBUZXJtVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBpZiAoIXRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycykge1xuICAgICAgdGVybVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgIHR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0sIHdoaWNoIGhhcyB0eXBlICcke3R5cGVOYW1lfScuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IGNvbnN0cnVjdG9ycy4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycygpLFxuICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9ycy5maW5kKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIGNvbnN0cnVjdG9yLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoY29uc3RydWN0b3IgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcblxuICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCBjb25zdHJ1Y3RvciwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybSIsInRlcm1WZXJpZmllciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIlRlcm1WZXJpZmllciIsInZlcmlmeVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnN0cnVjdG9yVGVybWluYWxOb2RlIiwiY29udGV4dCIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWF0Y2hlcyIsIm1hdGNoIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb25zdHJ1Y3RvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29uc3RydWN0b3JBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29uc3RydWN0b3JDaGlsZE5vZGVzIiwibm9kZXMiLCJjb25zdHJ1Y3Rvck5vZGVzIiwibm9kZXNWZXJpZmllZCIsInZlcmlmeU5vZGVzIiwidHlwZU5vZGUiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwidGVybU5vZGUiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiY29uc3RydWN0b3JUeXBlTm9kZSIsIm5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWQiLCJjb25zdHJ1Y3RvclR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidGVybVR5cGVOYW1lIiwiZ2V0TmFtZSIsImNvbnN0cnVjdG9yVHlwZSIsIk9CSkVDVF9UWVBFX05BTUUiLCJvYmplY3RUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJWZXJpZmllciIsImRlYnVnIiwidmFyaWFibGVzIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJ2YXJpYWJsZSIsInR5cGUiLCJnZXRUeXBlIiwicHVzaCIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJ0eXBlTmFtZSIsImNvbnN0cnVjdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yIiwiZmluZCIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybU5vZGUiLCJub25UZXJtaW5hbE5OZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1IQSxPQXVDQztlQXZDdUJBOztJQUZYQyxZQUFZO2VBQVpBOztJQXNFR0MsNEJBQTRCO2VBQTVCQTs7SUEzQkFDLDZCQUE2QjtlQUE3QkE7O0lBMENBQyxvQkFBb0I7ZUFBcEJBOzs7K0RBcE1LO3FCQUVDO29CQUNLO3lCQUNNO3lCQUNFO3FCQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RSxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsSUFBQSxBQUFNRyw2QkFtR0gsQUFuR0g7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsWUFBWSxFQUFFQyx1QkFBdUIsRUFBRUMsT0FBTztnQkFDL0QsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFNQyxVQUFVSixhQUFhSyxLQUFLLENBQUNKO2dCQUVuQyxJQUFJRyxTQUFTO29CQUNYRCx1QkFBdUI7Z0JBQ3pCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxlQUFlLEVBQUVDLDBCQUEwQixFQUFFTixPQUFPO2dCQUN4RSxJQUFJTywwQkFBMEI7Z0JBRTlCLElBQU1DLFdBQVdILGdCQUFnQkksV0FBVyxJQUN0Q0Msc0JBQXNCSiwyQkFBMkJHLFdBQVcsSUFBSSxHQUFHO2dCQUV6RSxJQUFJRCxhQUFhRSxxQkFBcUI7b0JBQ3BDLE9BQVFGO3dCQUNOLEtB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