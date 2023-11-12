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
    context.debug("Verifying the '".concat(termString, "' term."), termNode);
    var verifyTermFunctions = [
        verifyTermAsStandaloneVariable,
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
    context.trace("Verifying the '".concat(termString, "' term against constructors."), termNode);
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
    context.trace("Verifying the '".concat(termString, "' term as a variable."), termNode);
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
function verifyTermAsStandaloneVariable(termNode, types, context, verifyAhead) {
    var termVerifiedAsStandaloneVariable = false;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term as a standalone variable."), termNode);
    var variables = [], termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context, verifyAhead);
    if (termVerifiedAsVariable) {
        var firstVariable = (0, _array.first)(variables), variable = firstVariable, type = variable.getType();
        types.push(type);
        termVerifiedAsStandaloneVariable = true;
    }
    return termVerifiedAsStandaloneVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IEFSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3R5cGUhXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmNsYXNzIFRlcm1WZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JUZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlLm1hdGNoKGNvbnN0cnVjdG9yVGVybWluYWxOb2RlKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB0ZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvclJ1bGVOYW1lID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IGNvbnN0cnVjdG9yUnVsZU5hbWUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSBBUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCBhcmd1bWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yQXJndW1lbnROb2RlID0gY29uc3RydWN0b3JOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlBcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBhcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvckNoaWxkTm9kZXMgPSBjb25zdHJ1Y3Rvck5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGVzID0gY29uc3RydWN0b3JDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2RlcywgY29uc3RydWN0b3JOb2RlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29uc3RydWN0b3JBcmd1bWVudE5vZGUsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJndW1lbnRTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhhcmd1bWVudE5vZGUpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgJyR7YXJndW1lbnRTdHJpbmd9JyBhcmd1bWVudCBzaG91bGQgYmUgYSB0ZXJtLCBub3QgYSB0eXBlYCwgYXJndW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShjb25zdHJ1Y3RvckFyZ3VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vZGUobm9kZSwgY29uc3RydWN0b3JOb2RlLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgYXJndW1lbnROb2RlVmVyaWZpZWQgPSBub2RlVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3JUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUoY29uc3RydWN0b3JUeXBlTm9kZSksXG4gICAgICAgICAgICAgICAgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVHlwZU5hbWUgPSB0ZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JUeXBlID0gKGNvbnN0cnVjdG9yVHlwZU5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShjb25zdHJ1Y3RvclR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihjb25zdHJ1Y3RvclR5cGUpO1xuXG4gICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUgb2YgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke2NvbnN0cnVjdG9yVHlwZU5hbWV9JyB0eXBlIGluIHRoZSBjb25zdHJ1Y3Rvci5gLCBhcmd1bWVudE5vZGUpO1xuXG4gICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0ZXJtVmVyaWZpZXIgPSBuZXcgVGVybVZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdmVyaWZ5VGVybUZ1bmN0aW9ucyA9IFtcbiAgICB2ZXJpZnlUZXJtQXNTdGFuZGFsb25lVmFyaWFibGUsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnNcbiAgXTtcblxuICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbih0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICB0eXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgVmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLCB3aGljaCBoYXMgdHlwZSAnJHt0eXBlTmFtZX0nLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IGNvbnN0cnVjdG9ycy5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JzID0gY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLnNvbWUoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZXMsIGNvbnN0cnVjdG9yLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVzLCBjb25zdHJ1Y3RvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOTmRlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1WZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOTmRlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gIGlmIChub2RlVmVyaWZpZWQpIHtcbiAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgdHlwZXMucHVzaCh0eXBlKTtcblxuICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNTdGFuZGFsb25lVmFyaWFibGUodGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBzdGFuZGFsb25lIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICB0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybSIsInRlcm1WZXJpZmllciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiVGVybVZlcmlmaWVyIiwidmVyaWZ5VGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29uc3RydWN0b3JUZXJtaW5hbE5vZGUiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1hdGNoZXMiLCJtYXRjaCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNvbnN0cnVjdG9yTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiY29uc3RydWN0b3JSdWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImFyZ3VtZW50Tm9kZSIsImNvbnN0cnVjdG9yQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlBcmd1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNvbnN0cnVjdG9yQ2hpbGROb2RlcyIsIm5vZGVzIiwiY29uc3RydWN0b3JOb2RlcyIsIm5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlOb2RlcyIsInR5cGVOb2RlIiwiYXJndW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlcnJvciIsInRlcm1Ob2RlIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImNvbnN0cnVjdG9yVHlwZU5vZGUiLCJub2RlIiwiY29uc3RydWN0b3JOb2RlIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9kZSIsInR5cGVzIiwidGVybVZlcmlmaWVkIiwiY29uc3RydWN0b3JUeXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlTmFtZSIsImdldE5hbWUiLCJjb25zdHJ1Y3RvclR5cGUiLCJPQkpFQ1RfVFlQRV9OQU1FIiwib2JqZWN0VHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidGVybVN0cmluZyIsInRyYWNlIiwiVmVyaWZpZXIiLCJkZWJ1ZyIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNTdGFuZGFsb25lVmFyaWFibGUiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwidHlwZSIsInR5cGVOYW1lIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmaWVkQWhlYWQiLCJ2YXJpYWJsZXMiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwicHVzaCIsImNvbnN0cnVjdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybU5vZGUiLCJub25UZXJtaW5hbE5OZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImdldFR5cGUiLCJ0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1IQSxP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