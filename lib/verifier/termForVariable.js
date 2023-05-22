"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableVerifier;
    }
});
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../substitution/termForVariable"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
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
var TermForVariableVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(TermForVariableVerifier, Verifier);
    var _super = _create_super(TermForVariableVerifier);
    function TermForVariableVerifier() {
        _class_call_check(this, TermForVariableVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(TermForVariableVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    var nonTerminalNodeARuleNameTermRuleName = nonTerminalNodeARuleName === _ruleNames.TERM_RULE_NAME, nonTerminalNodeBRuleNameTermRuleName = nonTerminalNodeBRuleName === _ruleNames.TERM_RULE_NAME;
                    if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
                        var termNodeA = nonTerminalNodeA, termNodeB = nonTerminalNodeB, termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, proofContextA, proofContextB);
                        if (termNodeVerified) {
                            nonTerminalNodeVerified = true; ///
                        } else {
                            nonTerminalNodeVerified = _get(_get_prototype_of(TermForVariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB);
                        }
                    } else {
                        nonTerminalNodeVerified = _get(_get_prototype_of(TermForVariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB);
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNodeA, termNodeB, substitutions, proofContextA, proofContextB) {
                var termNodeVerified = false;
                var variableNodeA = variableNodeQuery(termNodeA);
                if (variableNodeA !== null) {
                    var variableVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, proofContextA, proofContextB);
                    termNodeVerified = variableVerified; ///
                }
                return termNodeVerified;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNodeA, termNodeB, substitutions, proofContextA, proofContextB) {
                var variableVerified;
                var variableNameA = (0, _query.variableNameFromVariableNode)(variableNodeA), substitution = substitutions.find(function(substitution) {
                    var variableName = substitution.getVariableName();
                    if (variableName === variableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var termNode = termNodeB, substitutionNodesVerified = substitution.matchTermNode(termNode);
                    variableVerified = substitutionNodesVerified; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var variableName = variableNameA, proofContext = proofContextA, variable = proofContext.findVariableByVariableName(variableName);
                        if (variable !== null) {
                            var types = [], context = proofContextB, termNode1 = termNodeB, termVerified = (0, _term.default)(termNode1, types, context);
                            if (termVerified) {
                                var firstType = (0, _array.first)(types), termType = firstType, variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                                if (variableTypeEqualToOrSuperTypeOfTermType) {
                                    var termForVariableSubstitution = _termForVariable.default.fromVariableNameAndTermNode(variableName, termNode1), substitution1 = termForVariableSubstitution; ///
                                    substitutions.push(substitution1);
                                    variableVerified = true;
                                }
                            }
                        }
                    }
                }
                return variableVerified;
            }
        }
    ]);
    return TermForVariableVerifier;
}(_verifier.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90ZXJtRm9yVmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoJy90ZXJtL3ZhcmlhYmxlIScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dEEsIHByb29mQ29udGV4dEIpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSAmJiBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHRBLCBwcm9vZkNvbnRleHRCKTtcblxuICAgICAgICBpZiAodGVybU5vZGVWZXJpZmllZCkge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdHJ1ZTsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dEEsIHByb29mQ29udGV4dEIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHRBLCBwcm9vZkNvbnRleHRCKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0QSwgcHJvb2ZDb250ZXh0Qikge1xuICAgIGxldCB0ZXJtTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGVBKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVBICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHRBLCBwcm9vZkNvbnRleHRCKTtcblxuICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHZhcmlhYmxlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0QSwgcHJvb2ZDb250ZXh0Qikge1xuICAgIGxldCB2YXJpYWJsZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lQSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZSA9PT0gdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllZCA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjcmVhdGVTdWJzdGl0dXRpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoY3JlYXRlU3Vic3RpdHV0aW9ucykge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgcHJvb2ZDb250ZXh0ID0gcHJvb2ZDb250ZXh0QSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gcHJvb2ZDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gcHJvb2ZDb250ZXh0QiwgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gZmlyc3RUeXBlLFxuICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21WYXJpYWJsZU5hbWVBbmRUZXJtTm9kZSh2YXJpYWJsZU5hbWUsIHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlVmVyaWZpZXIiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsInByb29mQ29udGV4dEEiLCJwcm9vZkNvbnRleHRCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWVBIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJ2YXJpYWJsZU5hbWUiLCJnZXRWYXJpYWJsZU5hbWUiLCJ0ZXJtTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZWQiLCJtYXRjaFRlcm1Ob2RlIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyIsImNvbnN0cnVjdG9yIiwicHJvb2ZDb250ZXh0IiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInR5cGVzIiwiY29udGV4dCIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVZhcmlhYmxlTmFtZUFuZFRlcm1Ob2RlIiwicHVzaCIsIlZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFx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