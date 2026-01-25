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
var _occamfurtle = require("occam-furtle");
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
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                var metavariableNode = this.getMetavariableNode();
                if (metavariableNode !== null) {
                    metavariableName = metavariableNode.getMetavariableName();
                }
                return metavariableName;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var singularMetavariableNode = this.getSingularMetavariableNode(), metavariableNode = singularMetavariableNode; ///
                return metavariableNode;
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
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StatementNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgIEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgIEpVREdFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1Npbmd1bGFyKCkge1xuICAgIGxldCBzaW5ndWxhciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNpbmd1bGFyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgfHwgdGVybVN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSB0aGlzLmdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldEZyYW1lTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVOb2RlcyA9IHRoaXMuZ2V0RGVzY2VuZGFudE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlcztcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGU7XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSlVER0VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyU3RhdGVtZW50Tm9kZSgpIHtcbiAgICBsZXQgc2luZ3VsYXJTdGF0ZW1lbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJNZXRhQXJndW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW5ndWxhclN0YXRlbWVudE5vZGUgPSBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUuZ2V0U2luZ3VsYXJTdGF0ZW1lbnROb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05UQUlORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhck5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0YXRlbWVudE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudE5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGVybU5vZGVzIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlcyIsImdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUiLCJnZXRGcmFtZU5vZGVzIiwiRlJBTUVfUlVMRV9OQU1FIiwiZnJhbWVOb2RlcyIsImdldEVxdWFsaXR5Tm9kZSIsIkVRVUFMSVRZX1JVTEVfTkFNRSIsImVxdWFsaXR5Tm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsIkpVREdFTUVOVF9SVUxFX05BTUUiLCJqdWRnZW1lbnROb2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiREVGSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUiLCJGUkFNRV9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTaW5ndWxhclN0YXRlbWVudE5vZGUiLCJzaW5ndWxhclN0YXRlbWVudE5vZGUiLCJzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUiLCJnZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ09OVEFJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsIlNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FIiwic2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsIk1FVEFWQVJJQUJMRV9SVUxFX05BTUUiLCJnZXRTaW5ndWxhck5vZGVCeVJ1bGVOYW1lIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7MkJBbEJXO3lCQWdCaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLDJCQUEyQixJQUFJLENBQUNDLDJCQUEyQjtnQkFFakUsSUFBSUQsNkJBQTZCLE1BQU07b0JBQ3JDRCxXQUFXO2dCQUNiO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxtQkFBbUI7Z0JBRWpELElBQUlELHFCQUFxQixNQUFNO29CQUM3QkQsbUJBQW1CQyxpQkFBaUJGLG1CQUFtQjtnQkFDekQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCwy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