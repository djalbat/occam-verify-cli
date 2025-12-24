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
            key: "getProofNode",
            value: function getProofNode() {
                var ruleBodyNode = this.getRuleBodyNode(), proofNode = ruleBodyNode.getProofNode();
                return proofNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBSVUxFX0JPRFlfUlVMRV9OQU1FLCBSVUxFX0hFQURFUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UnVsZUJvZHlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUlVMRV9CT0RZX1JVTEVfTkFNRSxcbiAgICAgICAgICBydWxlQm9keU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBydWxlQm9keU5vZGU7XG4gIH1cblxuICBnZXRSdWxlSGVhZGVyTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJVTEVfSEVBREVSX1JVTEVfTkFNRSxcbiAgICAgICAgICBydWxlSGVhZGVyTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVIZWFkZXJOb2RlO1xuICB9XG5cbiAgZ2V0TGFiZWxOb2RlcygpIHtcbiAgICBjb25zdCBydWxlSGVhZGVyTm9kZSA9IHRoaXMuZ2V0UnVsZUhlYWRlck5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gcnVsZUhlYWRlck5vZGUuZ2V0TGFiZWxOb2RlcygpO1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZXM7XG4gIH1cblxuICBnZXRQcmVtaXNlTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZUJvZHlOb2RlID0gdGhpcy5nZXRSdWxlQm9keU5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBydWxlQm9keU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZU5vZGVzO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZUJvZHlOb2RlID0gdGhpcy5nZXRSdWxlQm9keU5vZGUoKSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IHJ1bGVCb2R5Tm9kZS5nZXRDb25jbHVzaW9uTm9kZSgpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25Ob2RlO1xuICB9XG5cbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVCb2R5Tm9kZSA9IHRoaXMuZ2V0UnVsZUJvZHlOb2RlKCksXG4gICAgICAgICAgcHJvb2ZOb2RlID0gcnVsZUJvZHlOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gICAgcmV0dXJuIHByb29mTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUnVsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOb2RlIiwiZ2V0UnVsZUJvZHlOb2RlIiwicnVsZU5hbWUiLCJSVUxFX0JPRFlfUlVMRV9OQU1FIiwicnVsZUJvZHlOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRSdWxlSGVhZGVyTm9kZSIsIlJVTEVfSEVBREVSX1JVTEVfTkFNRSIsInJ1bGVIZWFkZXJOb2RlIiwiZ2V0TGFiZWxOb2RlcyIsImxhYmVsTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJnZXRDb25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Ob2RlIiwiZ2V0UHJvb2ZOb2RlIiwicHJvb2ZOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzRUFKTzt5QkFFK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDhCQUFtQixFQUM5QkMsZUFBZSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFNUMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyxnQ0FBcUIsRUFDaENDLGlCQUFpQixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFOUMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxpQkFBaUIsSUFBSSxDQUFDRixpQkFBaUIsSUFDdkNJLGFBQWFGLGVBQWVDLGFBQWE7Z0JBRS9DLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsZUFBZSxJQUFJLENBQUNILGVBQWUsSUFDbkNXLGVBQWVSLGFBQWFPLGVBQWU7Z0JBRWpELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsZUFBZSxJQUFJLENBQUNILGVBQWUsSUFDbkNhLGlCQUFpQlYsYUFBYVMsaUJBQWlCO2dCQUVyRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1YLGVBQWUsSUFBSSxDQUFDSCxlQUFlLElBQ25DZSxZQUFZWixhQUFhVyxZQUFZO2dCQUUzQyxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2YsUUFBUSxFQUFFZ0IsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msd0JBQWUsQ0FBQ0osMENBQTBDLENBM0M3SWpCLFVBMkN3SkUsVUFBVWdCLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNDcE1wQjtFQUFpQnFCLHdCQUFlIn0=