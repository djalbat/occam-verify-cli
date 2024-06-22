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
var variableNodeQuery = (0, _query.nodeQuery)('/term/variable!');
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
                var substitution = substitutions.find(function(substitution) {
                    var substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);
                    if (substitutionMatchesVariableNodeA) {
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
                    var variableNode = variableNodeA, localContext = localContextA, variable = localContext.findVariableByVariableNode(variableNode);
                    if (variable !== null) {
                        var terms = [], context = localContextB, termNode1 = termNodeB, termVerified = (0, _term.default)(termNode1, terms, context, function() {
                            var verifiedAhead = false;
                            var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                            if (variableTypeEqualToOrSuperTypeOfTermType) {
                                var termForVariableSubstitution = _termForVariable.default.fromVariableNodeAndTermNode(variableNode, termNode1), substitution = termForVariableSubstitution; ///
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
                return variableVerified;
            }
        }
    ]);
    return TermForVariableNodesVerifier;
}(_nodes.default);
var termForVariableNodesVerifier = new TermForVariableNodesVerifier();
var _default = termForVariableNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy90ZXJtRm9yVmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uLy4uL3ZlcmlmaWVyL25vZGVzXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KCcvdGVybS92YXJpYWJsZSEnKTtcblxuY2xhc3MgVGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSAmJiBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgaWYgKHRlcm1Ob2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlQSk7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdmFyaWFibGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Ob2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllZCA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRBLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0QiwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB2YXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSh2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgdGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciA9IG5ldyBUZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJUZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVRlcm1SdWxlTmFtZSIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZWQiLCJtYXRjaFRlcm1Ob2RlIiwidmVyaWZpZWRBaGVhZCIsInZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtcyIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUiLCJwdXNoIiwicG9wIiwiTm9kZXNWZXJpZmllciIsInRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVIQTs7O2VBQUE7OzsyREFySHVCOzREQUNHO3NFQUNjO3FCQUVsQjtxQkFDSTt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxJQUFBLEFBQU1DLDZDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO2dCQUNoSCxJQUFJQywwQkFBMEI7Z0JBRTlCLElBQU1DLDJCQUEyQlAsaUJBQWlCUSxXQUFXLElBQ3ZEQywyQkFBMkJSLGlCQUFpQk8sV0FBVztnQkFFN0QsSUFBSUMsNkJBQTZCRiwwQkFBMEI7b0JBQ3pE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