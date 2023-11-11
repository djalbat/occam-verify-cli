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
            value: function verifyTerminalNode(terminalNode, constructorTerminalNode, context, verifyAhead) {
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
            value: function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var ruleName = nonTerminalNode.getRuleName(), constructorRuleName = constructorNonTerminalNode.getRuleName(); ///
                if (ruleName === constructorRuleName) {
                    switch(ruleName){
                        case _ruleNames.ARGUMENT_RULE_NAME:
                            {
                                var argumentNode = nonTerminalNode, constructorArgumentNode = constructorNonTerminalNode, argumentNodeVerified = this.verifyArgumentNode(argumentNode, constructorArgumentNode, context, verifyAhead);
                                nonTerminalNodeVerified = argumentNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                var childNodes = nonTerminalNode.getChildNodes(), constructorChildNodes = constructorNonTerminalNode.getChildNodes(), nodes = childNodes, constructorNodes = constructorChildNodes, nodesVerified = this.verifyNodes(nodes, constructorNodes, context, verifyAhead);
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
            value: function verifyArgumentNode(argumentNode, constructorArgumentNode, context, verifyAhead) {
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
                        var node = termNode, constructorNode = constructorTermNode, nodeVerified = this.verifyNode(node, constructorNode, context, verifyAhead);
                        argumentNodeVerified = nodeVerified; ///
                    } else if (constructorTypeNode !== null) {
                        var types = [], termVerified = verifyTerm(termNode, types, context, verifyAhead);
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
function verifyTerm(termNode, types, context, verifyAhead) {
    var termVerified;
    var termString = context.nodeAsString(termNode);
    context.debug("Verifying the '".concat(termString, "' term..."), termNode);
    var verifyTermFunctions = [
        verifyTermAsVariableEx,
        verifyTermAgainstConstructors
    ];
    termVerified = verifyTermFunctions.some(function(verifyTermFunction) {
        var termVerified = verifyTermFunction(termNode, types, context, verifyAhead);
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
function verifyTermAgainstConstructors(termNode, types, context, verifyAhead) {
    var termVerifiedAgainstConstructors;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term against constructors..."), termNode);
    var constructors = context.getConstructors();
    termVerifiedAgainstConstructors = constructors.some(function(constructor) {
        var termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, types, constructor, context, function() {
            var verifiedAhead = verifyAhead(context);
            return verifiedAhead;
        });
        if (termVerifiedAgainstConstructor) {
            return true;
        }
    });
    return termVerifiedAgainstConstructors;
}
function verifyTermAsVariable(termNode, variables, context, verifyAhead) {
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
function verifyTermAgainstConstructor(termNode, types, constructor, context, verifyAhead) {
    var termVerifiedAgainstConstructor = false;
    var termString = context.nodeAsString(termNode), constructorString = constructor.getString();
    context.trace("Verifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeVerified = termVerifier.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, verifyAhead);
    if (nodeVerified) {
        var type = constructor.getType();
        types.push(type);
        termVerifiedAgainstConstructor = true;
    }
    return termVerifiedAgainstConstructor;
}
function verifyTermAsVariableEx(termNode, types, context, verifyAhead) {
    var termVerifiedAsVariable;
    var variables = [];
    termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context, verifyAhead);
    if (termVerifiedAsVariable) {
        var firstVariable = (0, _array.first)(variables), variable = firstVariable, type = variable.getType();
        types.push(type);
    }
    return termVerifiedAsVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIFRlcm1WZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlLm1hdGNoKGNvbnN0cnVjdG9yVGVybWluYWxOb2RlKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvclJ1bGVOYW1lID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbnN0cnVjdG9yUnVsZU5hbWUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckNoaWxkTm9kZXMgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGVzID0gY29uc3RydWN0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2RlcywgY29uc3RydWN0b3JOb2RlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudCBzaG91bGQgYmUgYSB0ZXJtLCBub3QgYSB0eXBlYCwgYXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgY29uc3RydWN0b3JOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoY29uc3RydWN0b3JUeXBlTm9kZSksXG4gICAgICAgICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlID0gKGNvbnN0cnVjdG9yVHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShjb25zdHJ1Y3RvclR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihjb25zdHJ1Y3RvclR5cGUpO1xuXG4gICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke2NvbnN0cnVjdG9yVHlwZU5hbWV9JyB0eXBlIGluIHRoZSBjb25zdHJ1Y3Rvci5gLCBhcmd1bWVudE5vZGUpO1xuXG4gICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0ZXJtVmVyaWZpZXIgPSBuZXcgVGVybVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlRXgsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnNcbiAgXTtcblxuICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbih0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgVmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLCB3aGljaCBoYXMgdHlwZSAnJHt0eXBlTmFtZX0nLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IGNvbnN0cnVjdG9ycy4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlcywgY29uc3RydWN0b3IsIGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZChjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlcywgY29uc3RydWN0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBpZiAobm9kZVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGVFeCh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xuXG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybSIsInRlcm1WZXJpZmllciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiVGVybVZlcmlmaWVyIiwidmVyaWZ5VGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29uc3RydWN0b3JUZXJtaW5hbE5vZGUiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1hdGNoZXMiLCJtYXRjaCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY29uc3RydWN0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbnN0cnVjdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNvbnN0cnVjdG9yQ2hpbGROb2RlcyIsIm5vZGVzIiwiY29uc3RydWN0b3JOb2RlcyIsIm5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlcyIsInR5cGVOb2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsInRlcm1Ob2RlIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImNvbnN0cnVjdG9yVHlwZU5vZGUiLCJub2RlIiwiY29uc3RydWN0b3JOb2RlIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwiY29uc3RydWN0b3JUeXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlTmFtZSIsImdldE5hbWUiLCJjb25zdHJ1Y3RvclR5cGUiLCJPQkpFQ1RfVFlQRV9OQU1FIiwib2JqZWN0VHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidGVybVN0cmluZyIsInRyYWNlIiwiVmVyaWZpZXIiLCJkZWJ1ZyIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZUV4Iiwic29tZSIsInZlcmlmeVRlcm1GdW5jdGlvbiIsInR5cGUiLCJ0eXBlTmFtZSIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ2ZXJpZmllZEFoZWFkIiwidmFyaWFibGVzIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInB1c2giLCJjb25zdHJ1Y3RvclN0cmluZyIsImdldFN0cmluZyIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJnZXRUeXBlIiwiZmlyc3RWYXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUhBLE9BNkJDO2VBN0J1QkE7O0lBRlhDLFlBQVk7ZUFBWkE7O0lBaUNHQyw2QkFBNkI7ZUFBN0JBOztJQXdCQUMsb0JBQW9CO2VBQXBCQTs7OytEQXhLSztxQkFFQztvQkFDSzt5QkFDTTt5QkFDRTtxQkFDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkUs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