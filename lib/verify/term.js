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
                            var constructorTypeName = (0, _query.typeNameFromTypeNode)(constructorTypeNode), constructorType = context.findTypeByTypeName(constructorTypeName), firstType = (0, _array.first)(types), termType = firstType, type = constructorType, termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
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
    var constructorTermNode = constructor.getTermNode(), nodeA = termNode, nodeB = constructorTermNode, nodeVerified = termVerifier.verifyNode(nodeA, nodeB, context), termVerifiedAgainstConstructor = nodeVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIFRlcm1WZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGUubWF0Y2goY29uc3RydWN0b3JUZXJtaW5hbE5vZGUpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JSdWxlTmFtZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgaWYgKHJ1bGVOYW1lID09PSBjb25zdHJ1Y3RvclJ1bGVOYW1lKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSA9IGNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckNoaWxkTm9kZXMgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGVzID0gY29uc3RydWN0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2RlcywgY29uc3RydWN0b3JOb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50U3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoYXJndW1lbnROb2RlKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlICR7YXJndW1lbnRTdHJpbmd9IGFyZ3VtZW50IHNob3VsZCBiZSBhIHRlcm0sIG5vdCBhIHR5cGVgLCBhcmd1bWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yVHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yQXJndW1lbnROb2RlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmIChjb25zdHJ1Y3RvclRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9kZShub2RlLCBjb25zdHJ1Y3Rvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gbm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdG9yVHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoY29uc3RydWN0b3JUeXBlTm9kZSksXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoY29uc3RydWN0b3JUeXBlTmFtZSksXG4gICAgICAgICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gY29uc3RydWN0b3JUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgdGVybVZlcmlmaWVyID0gbmV3IFRlcm1WZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGlmICghdGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgIHRlcm1WZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzKSB7XG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGBWZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCksXG4gICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JzLmZpbmQoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgY29uc3RydWN0b3IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChjb25zdHJ1Y3RvciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIGNvbnN0cnVjdG9yLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub2RlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZXIudmVyaWZ5Tm9kZShub2RlQSwgbm9kZUIsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybSIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIlRlcm1WZXJpZmllciIsInZlcmlmeVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnN0cnVjdG9yVGVybWluYWxOb2RlIiwiY29udGV4dCIsInRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWF0Y2hlcyIsIm1hdGNoIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb25zdHJ1Y3RvclJ1bGVOYW1lIiwiQVJHVU1FTlRfUlVMRV9OQU1FIiwiYXJndW1lbnROb2RlIiwiY29uc3RydWN0b3JBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeUFyZ3VtZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29uc3RydWN0b3JDaGlsZE5vZGVzIiwibm9kZXMiLCJjb25zdHJ1Y3Rvck5vZGVzIiwibm9kZXNWZXJpZmllZCIsInZlcmlmeU5vZGVzIiwidHlwZU5vZGUiLCJhcmd1bWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwidGVybU5vZGUiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiY29uc3RydWN0b3JUeXBlTm9kZSIsIm5vZGUiLCJjb25zdHJ1Y3Rvck5vZGUiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlIiwidHlwZXMiLCJ0ZXJtVmVyaWZpZWQiLCJjb25zdHJ1Y3RvclR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJjb25zdHJ1Y3RvclR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVmVyaWZpZXIiLCJ0ZXJtVmVyaWZpZXIiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZXMiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0VHlwZSIsInB1c2giLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwiZGVidWciLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsImZpbmQiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IiLCJnZXRUZXJtTm9kZSIsIm5vZGVBIiwibm9kZUIiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEyR0EsT0FtQ0M7ZUFuQ3VCQTs7SUFxQ1JDLDZCQUE2QjtlQUE3QkE7O0lBdUJBQyw0QkFBNEI7ZUFBNUJBOztJQVVBQyxvQkFBb0I7ZUFBcEJBOzs7K0RBL0tLO3FCQUVDO3lCQUNhO3FCQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RSxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsSUFB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