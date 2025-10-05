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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgIEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgIEpVREdFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBURVJNX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUZXJtTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZXMgPSB0aGlzLmdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldEZyYW1lTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVOb2RlcyA9IHRoaXMuZ2V0RGVzY2VuZGFudE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlcztcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGU7XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSlVER0VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gREVGSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfU1VCU1RJVFVUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJTdGF0ZW1lbnROb2RlKCkge1xuICAgIGxldCBzaW5ndWxhclN0YXRlbWVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJNZXRhQXJndW1lbnROb2RlID0gdGhpcy5nZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNpbmd1bGFyU3RhdGVtZW50Tm9kZSA9IHNpbmd1bGFyTWV0YUFyZ3VtZW50Tm9kZS5nZXRTaW5ndWxhclN0YXRlbWVudE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyVE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzaW5ndWxhck1ldGFBcmd1bWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0YXRlbWVudE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudE5vZGUiLCJnZXRUZXJtTm9kZXMiLCJydWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGVzIiwiZ2V0RGVzY2VuZGFudE5vZGVzQnlSdWxlTmFtZSIsImdldEZyYW1lTm9kZXMiLCJGUkFNRV9SVUxFX05BTUUiLCJmcmFtZU5vZGVzIiwiZ2V0RXF1YWxpdHlOb2RlIiwiRVFVQUxJVFlfUlVMRV9OQU1FIiwiZXF1YWxpdHlOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRKdWRnZW1lbnROb2RlIiwiSlVER0VNRU5UX1JVTEVfTkFNRSIsImp1ZGdlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsIlRZUEVfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiVEVSTV9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGUkFNRV9TVUJTVElUVVRJT05fUlVMRV9OQU1FIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU1VCUFJPT0ZfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRTaW5ndWxhclN0YXRlbWVudE5vZGUiLCJzaW5ndWxhclN0YXRlbWVudE5vZGUiLCJzaW5ndWxhck1ldGFBcmd1bWVudE5vZGUiLCJnZXRTaW5ndWxhck1ldGFBcmd1bWVudE5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQ09OVEFJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsIlNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FIiwic2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyVE5vZGVCeVJ1bGVOYW1lIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiU1RBVEVNRU5UX1NVQlNUSVRVVElPTl9SVUxFX05BTUUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7a0VBbEJPO3lCQWdCcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxZQUFZLElBQUksQ0FBQ0MsNEJBQTRCLENBQUNIO2dCQUVwRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDBCQUFlLEVBQzFCQyxhQUFhLElBQUksQ0FBQ0gsNEJBQTRCLENBQUNIO2dCQUVyRCxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdRLDZCQUFrQixFQUM3QkMsZUFBZSxJQUFJLENBQUNDLGlCQUFpQixDQUFDVjtnQkFFNUMsT0FBT1M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWCxXQUFXWSw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNILGlCQUFpQixDQUFDVjtnQkFFN0MsT0FBT2E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNZCxXQUFXZSxpQ0FBc0IsRUFDakNDLG1CQUFtQixJQUFJLENBQUNOLGlCQUFpQixDQUFDVjtnQkFFaEQsT0FBT2dCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWpCLFdBQVdrQixtQ0FBd0IsRUFDbkNDLG9CQUFvQixJQUFJLENBQUNULGlCQUFpQixDQUFDVjtnQkFFakQsT0FBT21CO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXBCLFdBQVdxQixzQ0FBMkIsRUFDdENDLHVCQUF1QixJQUFJLENBQUNaLGlCQUFpQixDQUFDVjtnQkFFcEQsT0FBT3NCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXZCLFdBQVd3QixzQ0FBMkIsRUFDdENDLHVCQUF1QixJQUFJLENBQUNmLGlCQUFpQixDQUFDVjtnQkFFcEQsT0FBT3lCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTFCLFdBQVcyQix1Q0FBNEIsRUFDdkNDLHdCQUF3QixJQUFJLENBQUNsQixpQkFBaUIsQ0FBQ1Y7Z0JBRXJELE9BQU80QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU03QixXQUFXOEIsdUNBQTRCLEVBQ3ZDQyx3QkFBd0IsSUFBSSxDQUFDckIsaUJBQWlCLENBQUNWO2dCQUVyRCxPQUFPK0I7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEMsV0FBV2lDLHVDQUE0QixFQUN2Q0Msd0JBQXdCLElBQUksQ0FBQ3hCLGlCQUFpQixDQUFDVjtnQkFFckQsT0FBT2tDO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsd0JBQXdCO2dCQUU1QixJQUFNQywyQkFBMkIsSUFBSSxDQUFDQywyQkFBMkI7Z0JBRWpFLElBQUlELDZCQUE2QixNQUFNO29CQUNyQ0Qsd0JBQXdCQyx5QkFBeUJGLHdCQUF3QjtnQkFDM0U7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdkMsV0FBV3dDLHdDQUE2QixFQUN4Q0MseUJBQXlCLElBQUksQ0FBQy9CLGlCQUFpQixDQUFDVjtnQkFFdEQsT0FBT3lDO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTFDLFdBQVcyQyx3Q0FBNkIsRUFDeENDLHlCQUF5QixJQUFJLENBQUNsQyxpQkFBaUIsQ0FBQ1Y7Z0JBRXRELE9BQU80QztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU03QyxXQUFXZSxpQ0FBc0IsRUFDakMrQiwyQkFBMkIsSUFBSSxDQUFDQywwQkFBMEIsQ0FBQy9DO2dCQUVqRSxPQUFPOEM7WUFDVDs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdEMsV0FBV2dELGtDQUF1QixFQUNsQ1gsMkJBQTJCLElBQUksQ0FBQzNCLGlCQUFpQixDQUFDVjtnQkFFeEQsT0FBT3FDO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWpELFdBQVdrRCwyQ0FBZ0MsRUFDM0NDLDRCQUE0QixJQUFJLENBQUN6QyxpQkFBaUIsQ0FBQ1Y7Z0JBRXpELE9BQU9tRDtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ3BELFFBQVEsRUFBRXFELFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQTdIN0l0RCxlQTZINkpFLFVBQVVxRCxZQUFZQyxTQUFTQztZQUFhOzs7V0E3SHpNekQ7RUFBc0IwRCxvQkFBZSJ9