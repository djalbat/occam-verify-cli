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
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
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
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var ruleName = _ruleNames.METAVARIABLE_RULE_NAME, metavariableNode = this.getNodeByRuleName(ruleName);
                return metavariableNode;
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
                var ruleName = _ruleNames.METAVARIABLE_RULE_NAME, singularMetavariableNode = this.getSingularTNodeByRuleName(ruleName);
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
            key: "getReferenceSubstitutionNode",
            value: function getReferenceSubstitutionNode() {
                var ruleName = _ruleNames.REFERENCE_SUBSTITUTION_RULE_NAME, referenceSubstitutionNode = this.getNodeByRuleName(ruleName);
                return referenceSubstitutionNode;
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
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return StatementNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgIEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgIEpVREdFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgUkVGRVJFTkNFX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVEFURU1FTlRfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFRlcm1Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IHRoaXMuZ2V0RGVzY2VuZGFudE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZSQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgICBmcmFtZU5vZGVzID0gdGhpcy5nZXREZXNjZW5kYW50Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRVFVQUxJVFlfUlVMRV9OQU1FLFxuICAgICAgICAgIGVxdWFsaXR5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZTtcbiAgfVxuXG4gIGdldEp1ZGdlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBKVURHRU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9TVUJTVElUVVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9TVUJTVElUVVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNVQlBST09GX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPUEVSVFlfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhclN0YXRlbWVudE5vZGUoKSB7XG4gICAgbGV0IHNpbmd1bGFyU3RhdGVtZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2luZ3VsYXJTdGF0ZW1lbnROb2RlID0gc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlLmdldFNpbmd1bGFyU3RhdGVtZW50Tm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhclN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQ09OVEFJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJUTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgIHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBSRUZFUkVOQ0VfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNUQVRFTUVOVF9TVUJTVElUVVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdGF0ZW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnROb2RlIiwiZ2V0VGVybU5vZGVzIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlcyIsImdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUiLCJnZXRGcmFtZU5vZGVzIiwiRlJBTUVfUlVMRV9OQU1FIiwiZnJhbWVOb2RlcyIsImdldEVxdWFsaXR5Tm9kZSIsIkVRVUFMSVRZX1JVTEVfTkFNRSIsImVxdWFsaXR5Tm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsIkpVREdFTUVOVF9SVUxFX05BTUUiLCJqdWRnZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIk1FVEFWQVJJQUJMRV9SVUxFX05BTUUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0VHlwZUFzc2VydGlvbk5vZGUiLCJUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiREVGSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlRFUk1fU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRlJBTUVfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlNVQlBST09GX0FTU0VSVElPTl9SVUxFX05BTUUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0U2luZ3VsYXJTdGF0ZW1lbnROb2RlIiwic2luZ3VsYXJTdGF0ZW1lbnROb2RlIiwic2luZ3VsYXJNZXRhQXJndW1lbnROb2RlIiwiZ2V0U2luZ3VsYXJNZXRhQXJndW1lbnROb2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclROb2RlQnlSdWxlTmFtZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwiZ2V0UmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlJFRkVSRU5DRV9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsImdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJTVEFURU1FTlRfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBcUJxQkE7OztrRUFuQk87eUJBaUJxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lB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