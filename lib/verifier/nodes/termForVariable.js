"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableNodesVerifier;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/termForVariable"));
var _array = require("../../utilities/array");
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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var TermForVariableNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(TermForVariableNodesVerifier, NodesVerifier);
    var _super = _create_super(TermForVariableNodesVerifier);
    function TermForVariableNodesVerifier() {
        _class_call_check(this, TermForVariableNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(TermForVariableNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    var nonTerminalNodeARuleNameTermRuleName = nonTerminalNodeARuleName === _ruleNames.TERM_RULE_NAME, nonTerminalNodeBRuleNameTermRuleName = nonTerminalNodeBRuleName === _ruleNames.TERM_RULE_NAME;
                    if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
                        var termNodeA = nonTerminalNodeA, termNodeB = nonTerminalNodeB, termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                        if (termNodeVerified) {
                            nonTerminalNodeVerified = true; ///
                        } else {
                            nonTerminalNodeVerified = _get(_get_prototype_of(TermForVariableNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                        }
                    } else {
                        nonTerminalNodeVerified = _get(_get_prototype_of(TermForVariableNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var termNodeVerified = false;
                var variableNodeA = variableNodeQuery(termNodeA);
                if (variableNodeA !== null) {
                    var variableVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                    termNodeVerified = variableVerified; ///
                }
                return termNodeVerified;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var variableVerified = false;
                var variableNameA = (0, _query.variableNameFromVariableNode)(variableNodeA), substitution = substitutions.find(function(substitution) {
                    var variableName = substitution.getVariableName();
                    if (variableName === variableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var termNode = termNodeB, substitutionNodesVerified = substitution.matchTermNode(termNode);
                    if (substitutionNodesVerified) {
                        var verifiedAhead = verifyAhead();
                        variableVerified = verifiedAhead; ///
                    }
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var variableName = variableNameA, localContext = localContextA, variable = localContext.findVariableByVariableName(variableName);
                        if (variable !== null) {
                            var terms = [], context = localContextB, termNode1 = termNodeB, termVerified = (0, _term.default)(termNode1, terms, context, function() {
                                var verifiedAhead = false;
                                var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                                if (variableTypeEqualToOrSuperTypeOfTermType) {
                                    var termForVariableSubstitution = _termForVariable.default.fromVariableNameAndTermNode(variableName, termNode1), substitution = termForVariableSubstitution; ///
                                    substitutions.push(substitution);
                                    verifiedAhead = verifyAhead();
                                    if (!verifiedAhead) {
                                        substitutions.pop();
                                    }
                                }
                                return verifiedAhead;
                            });
                            variableVerified = termVerified; ///
                        }
                    }
                }
                return variableVerified;
            }
        }
    ]);
    return TermForVariableNodesVerifier;
}(_nodes.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtRm9yVmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL3Rlcm0vdmFyaWFibGUhJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBURVJNX1JVTEVfTkFNRSksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBURVJNX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVUZXJtUnVsZU5hbWUgJiYgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lVGVybVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICh0ZXJtTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybU5vZGUodGVybU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1Ob2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZUEpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHZhcmlhYmxlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lQSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZSA9PT0gdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllZCA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjcmVhdGVTdWJzdGl0dXRpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoY3JlYXRlU3Vic3RpdHV0aW9ucykge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0QSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0QiwgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTmFtZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTmFtZSwgdGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWVBIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJ2YXJpYWJsZU5hbWUiLCJnZXRWYXJpYWJsZU5hbWUiLCJ0ZXJtTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZWQiLCJtYXRjaFRlcm1Ob2RlIiwidmVyaWZpZWRBaGVhZCIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJjb25zdHJ1Y3RvciIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ0ZXJtcyIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVmFyaWFibGVOYW1lQW5kVGVybU5vZGUiLCJwdXNoIiwicG9wIiwiTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEU7NERBQ0c7c0VBQ2M7cUJBRWxCO3FCQUNJO3lCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHL0IsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsNkNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdC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