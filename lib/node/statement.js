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
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                var singular = this.isSingular();
                if (singular) {
                    var singularMetavariableNode = this.getSingularMetavariableNode();
                    metavariableName = singularMetavariableNode.getMetavariableName();
                }
                return metavariableName;
            }
        },
        {
            key: "getSubstitutionNode",
            value: function getSubstitutionNode() {
                var frameSubstitutionNode = this.getFrameSubstitutionNode(), termSubstitutionNode = this.getTermSubstitutionNode(), substitutionNode = frameSubstitutionNode || termSubstitutionNode;
                return substitutionNode;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgRVFVQUxJVFlfUlVMRV9OQU1FLFxuICAgICAgICAgSlVER0VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgIE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgIFRZUEVfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIERFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFRFUk1fU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgRlJBTUVfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgQ09OVEFJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVEFURU1FTlRfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3Qgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgfHwgdGVybVN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGxldCBzaW5ndWxhciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNpbmd1bGFyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRUZXJtTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSB0aGlzLmdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldEZyYW1lTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVOb2RlcyA9IHRoaXMuZ2V0RGVzY2VuZGFudE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlcztcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGU7XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSlVER0VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyU3RhdGVtZW50Tm9kZSgpIHtcbiAgICBsZXQgc2luZ3VsYXJTdGF0ZW1lbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJNZXRhQXJndW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW5ndWxhclN0YXRlbWVudE5vZGUgPSBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUuZ2V0U2luZ3VsYXJTdGF0ZW1lbnROb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05UQUlORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhck5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0YXRlbWVudE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFRlcm1Ob2RlcyIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZXMiLCJnZXREZXNjZW5kYW50Tm9kZXNCeVJ1bGVOYW1lIiwiZ2V0RnJhbWVOb2RlcyIsIkZSQU1FX1JVTEVfTkFNRSIsImZyYW1lTm9kZXMiLCJnZXRFcXVhbGl0eU5vZGUiLCJFUVVBTElUWV9SVUxFX05BTUUiLCJlcXVhbGl0eU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEp1ZGdlbWVudE5vZGUiLCJKVURHRU1FTlRfUlVMRV9OQU1FIiwianVkZ2VtZW50Tm9kZSIsImdldFR5cGVBc3NlcnRpb25Ob2RlIiwiVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FIiwidHlwZUFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkRFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiVEVSTV9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwiRlJBTUVfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlNVQlBST09GX0FTU0VSVElPTl9SVUxFX05BTUUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0U2luZ3VsYXJTdGF0ZW1lbnROb2RlIiwic2luZ3VsYXJTdGF0ZW1lbnROb2RlIiwic2luZ3VsYXJNZXRhQXJndW1lbnROb2RlIiwiZ2V0U2luZ3VsYXJNZXRhQXJndW1lbnROb2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwiZ2V0U2luZ3VsYXJOb2RlQnlSdWxlTmFtZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsIlNUQVRFTUVOVF9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3NFQWxCTzt5QkFnQnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxVQUFVO2dCQUVoQyxJQUFJRCxVQUFVO29CQUNaLElBQU1FLDJCQUEyQixJQUFJLENBQUNDLDJCQUEyQjtvQkFFakVKLG1CQUFtQkcseUJBQXlCSixtQkFBbUI7Z0JBQ2pFO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsd0JBQXdCLElBQUksQ0FBQ0Msd0JBQXdCLElBQ3JEQyx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUIsSUFDbkRDLG1CQUFvQkoseUJBQXlCRTtnQkFFbkQsT0FBT0U7WUFDVDs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCxXQUFXO2dCQUVmLElBQU1FLDJCQUEyQixJQUFJLENBQUNDLDJCQUEyQjtnQkFFakUsSUFBSUQsNkJBQTZCLE1BQU07b0JBQ3JDRixXQUFXO2dCQUNiO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLFlB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