"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _ruleNames = require("../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var StatementNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(StatementNode, NonTerminalNode);
    function StatementNode() {
        _class_call_check(this, StatementNode);
        return _call_super(this, StatementNode, arguments);
    }
    _create_class(StatementNode, [
        {
            key: "isSingular",
            value: function isSingular() {
                var singular = false;
                var singularMetavariableNode = this.getSingularMetavariableNode();
                if (singularMetavariableNode !== null) {
                    singular = true;
                }
                return singular;
            }
        },
        {
            key: "getTermNodes",
            value: function getTermNodes() {
                var ruleName = _ruleNames.TERM_RULE_NAME, termNodes = this.getDescendantNodesByRuleName(ruleName);
                return termNodes;
            }
        },
        {
            key: "getFrameNodes",
            value: function getFrameNodes() {
                var ruleName = _ruleNames.FRAME_RULE_NAME, frameNodes = this.getDescendantNodesByRuleName(ruleName);
                return frameNodes;
            }
        },
        {
            key: "getEqualityNode",
            value: function getEqualityNode() {
                var ruleName = _ruleNames.EQUALITY_RULE_NAME, equalityNode = this.getNodeByRuleName(ruleName);
                return equalityNode;
            }
        },
        {
            key: "getJudgementNode",
            value: function getJudgementNode() {
                var ruleName = _ruleNames.JUDGEMENT_RULE_NAME, judgementNode = this.getNodeByRuleName(ruleName);
                return judgementNode;
            }
        },
        {
            key: "getTypeAssertionNode",
            value: function getTypeAssertionNode() {
                var ruleName = _ruleNames.TYPE_ASSERTION_RULE_NAME, typeAssertionNode = this.getNodeByRuleName(ruleName);
                return typeAssertionNode;
            }
        },
        {
            key: "getDefinedAssertionNode",
            value: function getDefinedAssertionNode() {
                var ruleName = _ruleNames.DEFINED_ASSERTION_RULE_NAME, definedAssertionNode = this.getNodeByRuleName(ruleName);
                return definedAssertionNode;
            }
        },
        {
            key: "getTermSubstitutionNode",
            value: function getTermSubstitutionNode() {
                var ruleName = _ruleNames.TERM_SUBSTITUTION_RULE_NAME, termSubstitutionNode = this.getNodeByRuleName(ruleName);
                return termSubstitutionNode;
            }
        },
        {
            key: "getFrameSubstitutionNode",
            value: function getFrameSubstitutionNode() {
                var ruleName = _ruleNames.FRAME_SUBSTITUTION_RULE_NAME, frameSubstitutionNode = this.getNodeByRuleName(ruleName);
                return frameSubstitutionNode;
            }
        },
        {
            key: "getSubproofAssertionNode",
            value: function getSubproofAssertionNode() {
                var ruleName = _ruleNames.SUBPROOF_ASSERTION_RULE_NAME, subproofAssertionNode = this.getNodeByRuleName(ruleName);
                return subproofAssertionNode;
            }
        },
        {
            key: "getPropertyAssertionNode",
            value: function getPropertyAssertionNode() {
                var ruleName = _ruleNames.PROPERTY_ASSERTION_RULE_NAME, propertyAssertionNode = this.getNodeByRuleName(ruleName);
                return propertyAssertionNode;
            }
        },
        {
            key: "getSingularStatementNode",
            value: function getSingularStatementNode() {
                var singularStatementNode = null;
                var singularMetaArgumentNode = this.getSingularMetaArgumentNode();
                if (singularMetaArgumentNode !== null) {
                    singularStatementNode = singularMetaArgumentNode.getSingularStatementNode();
                }
                return singularStatementNode;
            }
        },
        {
            key: "getContainedAssertionNode",
            value: function getContainedAssertionNode() {
                var ruleName = _ruleNames.CONTAINED_ASSERTION_RULE_NAME, containedAssertionNode = this.getNodeByRuleName(ruleName);
                return containedAssertionNode;
            }
        },
        {
            key: "getSatisfiedAssertionNode",
            value: function getSatisfiedAssertionNode() {
                var ruleName = _ruleNames.SATISFIES_ASSERTION_RULE_NAME, satisfiedAssertionNode = this.getNodeByRuleName(ruleName);
                return satisfiedAssertionNode;
            }
        },
        {
            key: "getSingularMetavariableNode",
            value: function getSingularMetavariableNode() {
                var ruleName = _ruleNames.METAVARIABLE_RULE_NAME, singularMetavariableNode = this.getSingularNodeByRuleName(ruleName);
                return singularMetavariableNode;
            }
        },
        {
            key: "getSingularMetaArgumentNode",
            value: function getSingularMetaArgumentNode() {
                var ruleName = _ruleNames.META_ARGUMENT_RULE_NAME, singularMetaArgumentNode = this.getNodeByRuleName(ruleName);
                return singularMetaArgumentNode;
            }
        },
        {
            key: "getStatementSubstitutionNode",
            value: function getStatementSubstitutionNode() {
                var ruleName = _ruleNames.STATEMENT_SUBSTITUTION_RULE_NAME, statementSubstitutionNode = this.getNodeByRuleName(ruleName);
                return statementSubstitutionNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StatementNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgRVFVQUxJVFlfUlVMRV9OQU1FLFxuICAgICAgICAgSlVER0VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgIE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgIFRZUEVfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIERFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFRFUk1fU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgRlJBTUVfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgQ09OVEFJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVEFURU1FTlRfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgbGV0IHNpbmd1bGFyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2luZ3VsYXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IHRoaXMuZ2V0RGVzY2VuZGFudE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZSQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgICBmcmFtZU5vZGVzID0gdGhpcy5nZXREZXNjZW5kYW50Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRVFVQUxJVFlfUlVMRV9OQU1FLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZTtcbiAgfVxuXG4gIGdldEp1ZGdlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBKVURHRU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gREVGSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJTdGF0ZW1lbnROb2RlKCkge1xuICAgIGxldCBzaW5ndWxhclN0YXRlbWVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlID0gdGhpcy5nZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNpbmd1bGFyU3RhdGVtZW50Tm9kZSA9IHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZS5nZXRTaW5ndWxhclN0YXRlbWVudE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVEFURU1FTlRfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoU3RhdGVtZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiU3RhdGVtZW50Tm9kZSIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlcyIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZXMiLCJnZXREZXNjZW5kYW50Tm9kZXNCeVJ1bGVOYW1lIiwiZ2V0RnJhbWVOb2RlcyIsIkZSQU1FX1JVTEVfTkFNRSIsImZyYW1lTm9kZXMiLCJnZXRFcXVhbGl0eU5vZGUiLCJFUVVBTElUWV9SVUxFX05BTUUiLCJlcXVhbGl0eU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEp1ZGdlbWVudE5vZGUiLCJKVURHRU1FTlRfUlVMRV9OQU1FIiwianVkZ2VtZW50Tm9kZSIsImdldFR5cGVBc3NlcnRpb25Ob2RlIiwiVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FIiwidHlwZUFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkRFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIkZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUFJPUEVSVFlfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFNpbmd1bGFyU3RhdGVtZW50Tm9kZSIsInNpbmd1bGFyU3RhdGVtZW50Tm9kZSIsInNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSIsImdldFNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJDT05UQUlORURfQVNTRVJUSU9OX1JVTEVfTkFNRSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUiLCJzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsImdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsImdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTVEFURU1FTlRfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7OztzRUFsQk87eUJBZ0JxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQywyQkFBMkIsSUFBSSxDQUFDQywyQkFBMkI7Z0JBRWpFLElBQUlELDZCQUE2QixNQUFNO29CQUNyQ0QsV0FBVztnQkFDYjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxZQUFZLElBQUksQ0FBQ0MsNEJBQTRCLENBQUNIO2dCQUVwRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDBCQUFlLEVBQzFCQyxhQUFhLElBQUks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