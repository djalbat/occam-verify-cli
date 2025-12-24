"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SectionNode;
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
var SectionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SectionNode, NonTerminalNode);
    function SectionNode() {
        _class_call_check(this, SectionNode);
        return _call_super(this, SectionNode, arguments);
    }
    _create_class(SectionNode, [
        {
            key: "getAxiomNode",
            value: function getAxiomNode() {
                var ruleName = _ruleNames.AXIOM_RULE_NAME, axiomNode = this.getNodeByRuleName(ruleName);
                return axiomNode;
            }
        },
        {
            key: "getLemmaNode",
            value: function getLemmaNode() {
                var ruleName = _ruleNames.LEMMA_RULE_NAME, lemmaNode = this.getNodeByRuleName(ruleName);
                return lemmaNode;
            }
        },
        {
            key: "getTheoremNode",
            value: function getTheoremNode() {
                var ruleName = _ruleNames.THEOREM_RULE_NAME, theoremNode = this.getNodeByRuleName(ruleName);
                return theoremNode;
            }
        },
        {
            key: "getConjectureNode",
            value: function getConjectureNode() {
                var ruleName = _ruleNames.CONJECTURE_RULE_NAME, conjectureNode = this.getNodeByRuleName(ruleName);
                return conjectureNode;
            }
        },
        {
            key: "getHypothesisNodes",
            value: function getHypothesisNodes() {
                var ruleName = _ruleNames.HYPOTHESIS_RULE_NAME, hypothesisNodes = this.getNodesByRuleName(ruleName);
                return hypothesisNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(SectionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return SectionNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBBWElPTV9SVUxFX05BTUUsIExFTU1BX1JVTEVfTkFNRSwgVEhFT1JFTV9SVUxFX05BTUUsIENPTkpFQ1RVUkVfUlVMRV9OQU1FLCBIWVBPVEhFU0lTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRBeGlvbU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBBWElPTV9SVUxFX05BTUUsXG4gICAgICAgICAgYXhpb21Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gYXhpb21Ob2RlO1xuICB9XG5cbiAgZ2V0TGVtbWFOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTEVNTUFfUlVMRV9OQU1FLFxuICAgICAgICAgIGxlbW1hTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGxlbW1hTm9kZTtcbiAgfVxuXG4gIGdldFRoZW9yZW1Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEhFT1JFTV9SVUxFX05BTUUsXG4gICAgICAgICAgdGhlb3JlbU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0aGVvcmVtTm9kZTtcbiAgfVxuXG4gIGdldENvbmplY3R1cmVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQ09OSkVDVFVSRV9SVUxFX05BTUUsXG4gICAgICAgICAgY29uamVjdHVyZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlTm9kZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzaXNOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEhZUE9USEVTSVNfUlVMRV9OQU1FLFxuICAgICAgICAgIGh5cG90aGVzaXNOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFNlY3Rpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTZWN0aW9uTm9kZSIsImdldEF4aW9tTm9kZSIsInJ1bGVOYW1lIiwiQVhJT01fUlVMRV9OQU1FIiwiYXhpb21Ob2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRMZW1tYU5vZGUiLCJMRU1NQV9SVUxFX05BTUUiLCJsZW1tYU5vZGUiLCJnZXRUaGVvcmVtTm9kZSIsIlRIRU9SRU1fUlVMRV9OQU1FIiwidGhlb3JlbU5vZGUiLCJnZXRDb25qZWN0dXJlTm9kZSIsIkNPTkpFQ1RVUkVfUlVMRV9OQU1FIiwiY29uamVjdHVyZU5vZGUiLCJnZXRIeXBvdGhlc2lzTm9kZXMiLCJIWVBPVEhFU0lTX1JVTEVfTkFNRSIsImh5cG90aGVzaXNOb2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0VBSk87eUJBRW9GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpHLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSw0QkFBaUIsRUFDNUJDLGNBQWMsSUFBSSxDQUFDTixpQkFBaUIsQ0FBQ0g7Z0JBRTNDLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVYsV0FBV1csK0JBQW9CLEVBQy9CQyxpQkFBaUIsSUFBSSxDQUFDVCxpQkFBaUIsQ0FBQ0g7Z0JBRTlDLE9BQU9ZO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWIsV0FBV2MsK0JBQW9CLEVBQy9CQyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2hCO2dCQUVoRCxPQUFPZTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2pCLFFBQVEsRUFBRWtCLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNKLDBDQUEwQyxDQXBDN0luQixhQW9DMkpFLFVBQVVrQixZQUFZQyxTQUFTQztZQUFhOzs7V0FwQ3ZNdEI7RUFBb0J1Qix3QkFBZSJ9