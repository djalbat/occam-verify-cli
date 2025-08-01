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
                var ruleName = _ruleNames.TERM_RULE_NAME, termNodes = this.getNodeByRuleName(ruleName);
                return termNodes;
            }
        },
        {
            key: "getFrameNodes",
            value: function getFrameNodes() {
                var ruleName = _ruleNames.FRAME_RULE_NAME, frameNodes = this.getNodeByRuleName(ruleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgIEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgIEpVREdFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgUkVGRVJFTkNFX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTVEFURU1FTlRfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFRlcm1Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldEZyYW1lTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVOb2RlcyA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZXM7XG4gIH1cblxuICBnZXRFcXVhbGl0eU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBFUVVBTElUWV9SVUxFX05BTUUsXG4gICAgICAgICAgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlOb2RlO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEpVREdFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyU3RhdGVtZW50Tm9kZSgpIHtcbiAgICBsZXQgc2luZ3VsYXJTdGF0ZW1lbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJNZXRhQXJndW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBzaW5ndWxhclN0YXRlbWVudE5vZGUgPSBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUuZ2V0U2luZ3VsYXJTdGF0ZW1lbnROb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05UQUlORURfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRTaW5ndWxhclROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJNZXRhQXJndW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJFRkVSRU5DRV9TVUJTVElUVVRJT05fUlVMRV9OQU1FLFxuICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0YXRlbWVudE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudE5vZGUiLCJnZXRUZXJtTm9kZXMiLCJydWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGVzIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRGcmFtZU5vZGVzIiwiRlJBTUVfUlVMRV9OQU1FIiwiZnJhbWVOb2RlcyIsImdldEVxdWFsaXR5Tm9kZSIsIkVRVUFMSVRZX1JVTEVfTkFNRSIsImVxdWFsaXR5Tm9kZSIsImdldEp1ZGdlbWVudE5vZGUiLCJKVURHRU1FTlRfUlVMRV9OQU1FIiwianVkZ2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldFR5cGVBc3NlcnRpb25Ob2RlIiwiVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FIiwidHlwZUFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkRFRklORURfQVNTRVJUSU9OX1JVTEVfTkFNRSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsIkZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiUFJPUEVSVFlfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFNpbmd1bGFyU3RhdGVtZW50Tm9kZSIsInNpbmd1bGFyU3RhdGVtZW50Tm9kZSIsInNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSIsImdldFNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJDT05UQUlORURfQVNTRVJUSU9OX1JVTEVfTkFNRSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUiLCJzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwic2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJUTm9kZUJ5UnVsZU5hbWUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsImdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJSRUZFUkVOQ0VfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7a0VBbkJPO3lCQWlCcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxZQUFZLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUV6QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDBCQUFlLEVBQzFCQyxhQUFhLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUUxQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdRLDZCQUFrQixFQUM3QkMsZUFBZSxJQUFJLENBQUNOLGlCQUFpQixDQUFDSDtnQkFFNUMsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixXQUFXVyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNULGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT1k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYixXQUFXYyxpQ0FBc0IsRUFDakNDLG1CQUFtQixJQUFJLENBQUNaLGlCQUFpQixDQUFDSDtnQkFFaEQsT0FBT2U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsV0FBV2lCLG1DQUF3QixFQUNuQ0Msb0JBQW9CLElBQUksQ0FBQ2YsaUJBQWlCLENBQUNIO2dCQUVqRCxPQUFPa0I7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbkIsV0FBV29CLHNDQUEyQixFQUN0Q0MsdUJBQXVCLElBQUksQ0FBQ2xCLGlCQUFpQixDQUFDSDtnQkFFcEQsT0FBT3FCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXRCLFdBQVd1QixzQ0FBMkIsRUFDdENDLHVCQUF1QixJQUFJLENBQUNyQixpQkFBaUIsQ0FBQ0g7Z0JBRXBELE9BQU93QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU16QixXQUFXMEIsdUNBQTRCLEVBQ3ZDQyx3QkFBd0IsSUFBSSxDQUFDeEIsaUJBQWlCLENBQUNIO2dCQUVyRCxPQUFPMkI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNUIsV0FBVzZCLHVDQUE0QixFQUN2Q0Msd0JBQXdCLElBQUksQ0FBQzNCLGlCQUFpQixDQUFDSDtnQkFFckQsT0FBTzhCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTS9CLFdBQVdnQyx1Q0FBNEIsRUFDdkNDLHdCQUF3QixJQUFJLENBQUM5QixpQkFBaUIsQ0FBQ0g7Z0JBRXJELE9BQU9pQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHdCQUF3QjtnQkFFNUIsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsMkJBQTJCO2dCQUVqRSxJQUFJRCw2QkFBNkIsTUFBTTtvQkFDckNELHdCQUF3QkMseUJBQXlCRix3QkFBd0I7Z0JBQzNFO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXRDLFdBQVd1Qyx3Q0FBNkIsRUFDeENDLHlCQUF5QixJQUFJLENBQUNyQyxpQkFBaUIsQ0FBQ0g7Z0JBRXRELE9BQU93QztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU16QyxXQUFXMEMsd0NBQTZCLEVBQ3hDQyx5QkFBeUIsSUFBSSxDQUFDeEMsaUJBQWlCLENBQUNIO2dCQUV0RCxPQUFPMkM7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNUMsV0FBV2MsaUNBQXNCLEVBQ2pDK0IsMkJBQTJCLElBQUksQ0FBQ0MsMEJBQTBCLENBQUM5QztnQkFFakUsT0FBTzZDO1lBQ1Q7OztZQUVBUixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXJDLFdBQVcrQyxrQ0FBdUIsRUFDbENYLDJCQUEyQixJQUFJLENBQUNqQyxpQkFBaUIsQ0FBQ0g7Z0JBRXhELE9BQU9vQztZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1oRCxXQUFXaUQsMkNBQWdDLEVBQy9DQyw0QkFBNEIsSUFBSSxDQUFDL0MsaUJBQWlCLENBQUNIO2dCQUVyRCxPQUFPa0Q7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbkQsV0FBV29ELDJDQUFnQyxFQUMzQ0MsNEJBQTRCLElBQUksQ0FBQ2xELGlCQUFpQixDQUFDSDtnQkFFekQsT0FBT3FEO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDdEQsUUFBUSxFQUFFdUQsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBcEk3SXhELGVBb0k2SkUsVUFBVXVELFlBQVlDLFNBQVNDO1lBQWE7OztXQXBJek0zRDtFQUFzQjRELG9CQUFlIn0=