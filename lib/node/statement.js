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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3N0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgIEZSQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgIEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgIEpVREdFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgVFlQRV9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgREVGSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgUFJPUEVSVFlfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIFNVQlBST09GX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICBTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VGVybU5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybU5vZGVzID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVzO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZSQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgICBmcmFtZU5vZGVzID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlcztcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVRVUFMSVRZX1JVTEVfTkFNRSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGU7XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSlVER0VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZUFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gREVGSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTVUJQUk9PRl9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBST1BFUlRZX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNBVElTRklFU19BU1NFUlRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdGF0ZW1lbnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnROb2RlIiwiZ2V0VGVybU5vZGVzIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlcyIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0RnJhbWVOb2RlcyIsIkZSQU1FX1JVTEVfTkFNRSIsImZyYW1lTm9kZXMiLCJnZXRFcXVhbGl0eU5vZGUiLCJFUVVBTElUWV9SVUxFX05BTUUiLCJlcXVhbGl0eU5vZGUiLCJnZXRKdWRnZW1lbnROb2RlIiwiSlVER0VNRU5UX1JVTEVfTkFNRSIsImp1ZGdlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsIlRZUEVfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJERUZJTkVEX0FTU0VSVElPTl9SVUxFX05BTUUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlNVQlBST09GX0FTU0VSVElPTl9SVUxFX05BTUUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJQUk9QRVJUWV9BU1NFUlRJT05fUlVMRV9OQU1FIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkNPTlRBSU5FRF9BU1NFUlRJT05fUlVMRV9OQU1FIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJTQVRJU0ZJRVNfQVNTRVJUSU9OX1JVTEVfTkFNRSIsInNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OztrRUFkTzt5QkFZa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxZQUFZLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUV6QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDBCQUFlLEVBQzFCQyxhQUFhLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUUxQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdRLDZCQUFrQixFQUM3QkMsZUFBZSxJQUFJLENBQUNOLGlCQUFpQixDQUFDSDtnQkFFNUMsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixXQUFXVyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNULGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT1k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYixXQUFXYyxpQ0FBc0IsRUFDakNDLG1CQUFtQixJQUFJLENBQUNaLGlCQUFpQixDQUFDSDtnQkFFaEQsT0FBT2U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsV0FBV2lCLG1DQUF3QixFQUNuQ0Msb0JBQW9CLElBQUksQ0FBQ2YsaUJBQWlCLENBQUNIO2dCQUVqRCxPQUFPa0I7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbkIsV0FBV29CLHNDQUEyQixFQUN0Q0MsdUJBQXVCLElBQUksQ0FBQ2xCLGlCQUFpQixDQUFDSDtnQkFFcEQsT0FBT3FCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXRCLFdBQVd1Qix1Q0FBNEIsRUFDdkNDLHdCQUF3QixJQUFJLENBQUNyQixpQkFBaUIsQ0FBQ0g7Z0JBRXJELE9BQU93QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU16QixXQUFXMEIsdUNBQTRCLEVBQ3ZDQyx3QkFBd0IsSUFBSSxDQUFDeEIsaUJBQWlCLENBQUNIO2dCQUVyRCxPQUFPMkI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNUIsV0FBVzZCLHdDQUE2QixFQUN4Q0MseUJBQXlCLElBQUksQ0FBQzNCLGlCQUFpQixDQUFDSDtnQkFFdEQsT0FBTzhCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTS9CLFdBQVdnQyx3Q0FBNkIsRUFDeENDLHlCQUF5QixJQUFJLENBQUM5QixpQkFBaUIsQ0FBQ0g7Z0JBRXRELE9BQU9pQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2xDLFFBQVEsRUFBRW1DLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQTlFN0lwQyxlQThFNkpFLFVBQVVtQyxZQUFZQyxTQUFTQztZQUFhOzs7V0E5RXpNdkM7RUFBc0J3QyxvQkFBZSJ9