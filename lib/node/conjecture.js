"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ConjectureNode;
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
var ConjectureNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ConjectureNode, NonTerminalNode);
    function ConjectureNode() {
        _class_call_check(this, ConjectureNode);
        return _call_super(this, ConjectureNode, arguments);
    }
    _create_class(ConjectureNode, [
        {
            key: "getConjectureBodyNode",
            value: function getConjectureBodyNode() {
                var ruleName = _ruleNames.CONJECTURE_BODY_RULE_NAME, conjectureBodyNode = this.getNodeByRuleName(ruleName);
                return conjectureBodyNode;
            }
        },
        {
            key: "getConjectureHeaderNode",
            value: function getConjectureHeaderNode() {
                var ruleName = _ruleNames.CONJECTURE_HEADER_RULE_NAME, conjectureHeaderNode = this.getNodeByRuleName(ruleName);
                return conjectureHeaderNode;
            }
        },
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var conjectureHeaderNode = this.getConjectureHeaderNode(), labelNodes = conjectureHeaderNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var conjectureBodyNode = this.getConjectureBodyNode(), suppositionNodes = conjectureBodyNode.getSuppositionNodes();
                return suppositionNodes;
            }
        },
        {
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var conjectureBodyNode = this.getConjectureBodyNode(), deductionNode = conjectureBodyNode.getDeductionNode();
                return deductionNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(ConjectureNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ConjectureNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2NvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgQ09OSkVDVFVSRV9CT0RZX1JVTEVfTkFNRSwgQ09OSkVDVFVSRV9IRUFERVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25qZWN0dXJlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldENvbmplY3R1cmVCb2R5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTkpFQ1RVUkVfQk9EWV9SVUxFX05BTUUsXG4gICAgICAgICAgY29uamVjdHVyZUJvZHlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZUJvZHlOb2RlO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZUhlYWRlck5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05KRUNUVVJFX0hFQURFUl9SVUxFX05BTUUsXG4gICAgICAgICAgY29uamVjdHVyZUhlYWRlck5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlSGVhZGVyTm9kZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZXMoKSB7XG4gICAgY29uc3QgY29uamVjdHVyZUhlYWRlck5vZGUgPSB0aGlzLmdldENvbmplY3R1cmVIZWFkZXJOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGNvbmplY3R1cmVIZWFkZXJOb2RlLmdldExhYmVsTm9kZXMoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlQm9keU5vZGUgPSB0aGlzLmdldENvbmplY3R1cmVCb2R5Tm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBjb25qZWN0dXJlQm9keU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVCb2R5Tm9kZSA9IHRoaXMuZ2V0Q29uamVjdHVyZUJvZHlOb2RlKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IGNvbmplY3R1cmVCb2R5Tm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ29uamVjdHVyZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbmplY3R1cmVOb2RlIiwiZ2V0Q29uamVjdHVyZUJvZHlOb2RlIiwicnVsZU5hbWUiLCJDT05KRUNUVVJFX0JPRFlfUlVMRV9OQU1FIiwiY29uamVjdHVyZUJvZHlOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRDb25qZWN0dXJlSGVhZGVyTm9kZSIsIkNPTkpFQ1RVUkVfSEVBREVSX1JVTEVfTkFNRSIsImNvbmplY3R1cmVIZWFkZXJOb2RlIiwiZ2V0TGFiZWxOb2RlcyIsImxhYmVsTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldERlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLG9DQUF5QixFQUNwQ0MscUJBQXFCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUVsRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLHNDQUEyQixFQUN0Q0MsdUJBQXVCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUVwRCxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELHVCQUF1QixJQUFJLENBQUNGLHVCQUF1QixJQUNuREksYUFBYUYscUJBQXFCQyxhQUFhO2dCQUVyRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLHFCQUFxQixJQUFJLENBQUNILHFCQUFxQixJQUMvQ1csbUJBQW1CUixtQkFBbUJPLG1CQUFtQjtnQkFFL0QsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxxQkFBcUIsSUFBSSxDQUFDSCxxQkFBcUIsSUFDL0NhLGdCQUFnQlYsbUJBQW1CUyxnQkFBZ0I7Z0JBRXpELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDYixRQUFRLEVBQUVjLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQXBDN0lmLGdCQW9DOEpFLFVBQVVjLFlBQVlDLFNBQVNDO1lBQWE7OztXQXBDMU1sQjtFQUF1Qm1CLG9CQUFlIn0=