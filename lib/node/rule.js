"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNode;
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
var RuleNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RuleNode, NonTerminalNode);
    function RuleNode() {
        _class_call_check(this, RuleNode);
        return _call_super(this, RuleNode, arguments);
    }
    _create_class(RuleNode, [
        {
            key: "getProofNode",
            value: function getProofNode() {
                var ruleBodyNode = this.getRuleBodyNode(), proofNode = ruleBodyNode.getProofNode();
                return proofNode;
            }
        },
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var ruleHeaderNode = this.getRuleHeaderNode(), labelNodes = ruleHeaderNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getPremiseNodes",
            value: function getPremiseNodes() {
                var ruleBodyNode = this.getRuleBodyNode(), premiseNodes = ruleBodyNode.getPremiseNodes();
                return premiseNodes;
            }
        },
        {
            key: "getConclusionNode",
            value: function getConclusionNode() {
                var ruleBodyNode = this.getRuleBodyNode(), conclusionNode = ruleBodyNode.getConclusionNode();
                return conclusionNode;
            }
        },
        {
            key: "getRuleBodyNode",
            value: function getRuleBodyNode() {
                var ruleName = _ruleNames.RULE_BODY_RULE_NAME, ruleBodyNode = this.getNodeByRuleName(ruleName);
                return ruleBodyNode;
            }
        },
        {
            key: "getRuleHeaderNode",
            value: function getRuleHeaderNode() {
                var ruleName = _ruleNames.RULE_HEADER_RULE_NAME, ruleHeaderNode = this.getNodeByRuleName(ruleName);
                return ruleHeaderNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return RuleNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBSVUxFX0JPRFlfUlVMRV9OQU1FLCBSVUxFX0hFQURFUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVCb2R5Tm9kZSA9IHRoaXMuZ2V0UnVsZUJvZHlOb2RlKCksXG4gICAgICAgICAgcHJvb2ZOb2RlID0gcnVsZUJvZHlOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gICAgcmV0dXJuIHByb29mTm9kZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZUhlYWRlck5vZGUgPSB0aGlzLmdldFJ1bGVIZWFkZXJOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IHJ1bGVIZWFkZXJOb2RlLmdldExhYmVsTm9kZXMoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZU5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVCb2R5Tm9kZSA9IHRoaXMuZ2V0UnVsZUJvZHlOb2RlKCksXG4gICAgICAgICAgcHJlbWlzZU5vZGVzID0gcnVsZUJvZHlOb2RlLmdldFByZW1pc2VOb2RlcygpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VOb2RlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVCb2R5Tm9kZSA9IHRoaXMuZ2V0UnVsZUJvZHlOb2RlKCksXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBydWxlQm9keU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uTm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVCb2R5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJVTEVfQk9EWV9SVUxFX05BTUUsXG4gICAgICAgICAgcnVsZUJvZHlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcnVsZUJvZHlOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZUhlYWRlck5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBSVUxFX0hFQURFUl9SVUxFX05BTUUsXG4gICAgICAgICAgcnVsZUhlYWRlck5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBydWxlSGVhZGVyTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUnVsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOb2RlIiwiZ2V0UHJvb2ZOb2RlIiwicnVsZUJvZHlOb2RlIiwiZ2V0UnVsZUJvZHlOb2RlIiwicHJvb2ZOb2RlIiwiZ2V0TGFiZWxOb2RlcyIsInJ1bGVIZWFkZXJOb2RlIiwiZ2V0UnVsZUhlYWRlck5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0UHJlbWlzZU5vZGVzIiwicHJlbWlzZU5vZGVzIiwiZ2V0Q29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uTm9kZSIsInJ1bGVOYW1lIiwiUlVMRV9CT0RZX1JVTEVfTkFNRSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiUlVMRV9IRUFERVJfUlVMRV9OQU1FIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzRUFKTzt5QkFFK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxZQUFZRixhQUFhRCxZQUFZO2dCQUUzQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsYUFBYUYsZUFBZUQsYUFBYTtnQkFFL0MsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ08sZUFBZVIsYUFBYU8sZUFBZTtnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ1MsaUJBQWlCVixhQUFhUyxpQkFBaUI7Z0JBRXJELE9BQU9DO1lBQ1Q7OztZQUVBVCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVUsV0FBV0MsOEJBQW1CLEVBQzlCWixlQUFlLElBQUksQ0FBQ2EsaUJBQWlCLENBQUNGO2dCQUU1QyxPQUFPWDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1NLFdBQVdHLGdDQUFxQixFQUNoQ1YsaUJBQWlCLElBQUksQ0FBQ1MsaUJBQWlCLENBQUNGO2dCQUU5QyxPQUFPUDtZQUNUOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDSiwwQ0FBMEMsQ0EzQzdJakIsVUEyQ3dKYSxVQUFVSyxZQUFZQyxTQUFTQztZQUFhOzs7V0EzQ3BNcEI7RUFBaUJxQix3QkFBZSJ9