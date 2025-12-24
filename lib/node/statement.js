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
            key: "isSimple",
            value: function isSimple() {
                var simple = false;
                var metavariableNode = this.getMetavariableNode();
                if (metavariableNode !== null) {
                    simple = true;
                }
                return simple;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgRVFVQUxJVFlfUlVMRV9OQU1FLFxuICAgICAgICAgSlVER0VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgIE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgIFRZUEVfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIERFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFRFUk1fU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgRlJBTUVfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgQ09OVEFJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVEFURU1FTlRfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzU2ltcGxlKCkge1xuICAgIGxldCBzaW1wbGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW1wbGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSB0aGlzLmdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldEZyYW1lTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVOb2RlcyA9IHRoaXMuZ2V0RGVzY2VuZGFudE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlcztcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGU7XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSlVER0VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gREVGSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJTdGF0ZW1lbnROb2RlKCkge1xuICAgIGxldCBzaW5ndWxhclN0YXRlbWVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlID0gdGhpcy5nZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNpbmd1bGFyU3RhdGVtZW50Tm9kZSA9IHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZS5nZXRTaW5ndWxhclN0YXRlbWVudE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJNZXRhQXJndW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNUQVRFTUVOVF9TVUJTVElUVVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdGF0ZW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnROb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlcyIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZXMiLCJnZXREZXNjZW5kYW50Tm9kZXNCeVJ1bGVOYW1lIiwiZ2V0RnJhbWVOb2RlcyIsIkZSQU1FX1JVTEVfTkFNRSIsImZyYW1lTm9kZXMiLCJnZXRFcXVhbGl0eU5vZGUiLCJFUVVBTElUWV9SVUxFX05BTUUiLCJlcXVhbGl0eU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEp1ZGdlbWVudE5vZGUiLCJKVURHRU1FTlRfUlVMRV9OQU1FIiwianVkZ2VtZW50Tm9kZSIsIk1FVEFWQVJJQUJMRV9SVUxFX05BTUUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsIlRZUEVfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVEVSTV9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGUkFNRV9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTaW5ndWxhclN0YXRlbWVudE5vZGUiLCJzaW5ndWxhclN0YXRlbWVudE5vZGUiLCJzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUiLCJnZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ09OVEFJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsIlNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FIiwic2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsIlNUQVRFTUVOVF9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3NFQWxCTzt5QkFnQnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxTQUFTO2dCQUViLElBQU1DLG1CQUFtQixJQUFJLENBQUNDLG1CQUFtQjtnQkFFakQsSUFBSUQscUJBQXFCLE1BQU07b0JBQzdCRCxTQUFTO2dCQUNYO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLFlBQVksSUFBSSxDQUFDQyw0QkFBNEIsQ0FBQ0g7Z0JBRXBELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssMEJBQWUsRUFDMUJDLGFBQWEsSUFBSSxDQUFDSCw0QkFBNEIsQ0FBQ0g7Z0JBRXJELE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsV0FBV1EsNkJBQWtCLEVBQzdCQyxlQUFlLElBQUksQ0FBQ0Ms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