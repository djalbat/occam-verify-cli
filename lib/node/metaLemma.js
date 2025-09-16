"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemmaNode;
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
var MetaLemmaNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MetaLemmaNode, NonTerminalNode);
    function MetaLemmaNode() {
        _class_call_check(this, MetaLemmaNode);
        return _call_super(this, MetaLemmaNode, arguments);
    }
    _create_class(MetaLemmaNode, [
        {
            key: "getMetaLemmaBodyNode",
            value: function getMetaLemmaBodyNode() {
                var ruleName = _ruleNames.META_LEMMA_BODY_RULE_NAME, metaLemmaBodyNode = this.getNodeByRuleName(ruleName);
                return metaLemmaBodyNode;
            }
        },
        {
            key: "getMetaLemmaHeaderNode",
            value: function getMetaLemmaHeaderNode() {
                var ruleName = _ruleNames.META_LEMMA_HEADER_RULE_NAME, metaLemmaHeaderNode = this.getNodeByRuleName(ruleName);
                return metaLemmaHeaderNode;
            }
        },
        {
            key: "getLabelNode",
            value: function getLabelNode() {
                var metaLemmaHeaderNode = this.getMetaLemmaHeaderNode(), labelNode = metaLemmaHeaderNode.getLabelNode();
                return labelNode;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var metaLemmaBodyNode = this.getMetaLemmaBodyNode(), suppositionNodes = metaLemmaBodyNode.getSuppositionNodes();
                return suppositionNodes;
            }
        },
        {
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var metaLemmaBodyNode = this.getMetaLemmaBodyNode(), deductionNode = metaLemmaBodyNode.getDeductionNode();
                return deductionNode;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var metaLemmaBodyNode = this.getMetaLemmaBodyNode(), proofNode = metaLemmaBodyNode.getProofNode();
                return proofNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(MetaLemmaNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return MetaLemmaNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ldGFMZW1tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBNRVRBX0xFTU1BX0JPRFlfUlVMRV9OQU1FLCBNRVRBX0xFTU1BX0hFQURFUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFMZW1tYU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRNZXRhTGVtbWFCb2R5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFfTEVNTUFfQk9EWV9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YUxlbW1hQm9keU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFCb2R5Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFMZW1tYUhlYWRlck5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBX0xFTU1BX0hFQURFUl9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YUxlbW1hSGVhZGVyTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYUhlYWRlck5vZGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hSGVhZGVyTm9kZSA9IHRoaXMuZ2V0TWV0YUxlbW1hSGVhZGVyTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IG1ldGFMZW1tYUhlYWRlck5vZGUuZ2V0TGFiZWxOb2RlKCk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFCb2R5Tm9kZSA9IHRoaXMuZ2V0TWV0YUxlbW1hQm9keU5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YUxlbW1hQm9keU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG1ldGFMZW1tYUJvZHlOb2RlID0gdGhpcy5nZXRNZXRhTGVtbWFCb2R5Tm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBtZXRhTGVtbWFCb2R5Tm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFCb2R5Tm9kZSA9IHRoaXMuZ2V0TWV0YUxlbW1hQm9keU5vZGUoKSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBtZXRhTGVtbWFCb2R5Tm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKE1ldGFMZW1tYU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYU5vZGUiLCJnZXRNZXRhTGVtbWFCb2R5Tm9kZSIsInJ1bGVOYW1lIiwiTUVUQV9MRU1NQV9CT0RZX1JVTEVfTkFNRSIsIm1ldGFMZW1tYUJvZHlOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRNZXRhTGVtbWFIZWFkZXJOb2RlIiwiTUVUQV9MRU1NQV9IRUFERVJfUlVMRV9OQU1FIiwibWV0YUxlbW1hSGVhZGVyTm9kZSIsImdldExhYmVsTm9kZSIsImxhYmVsTm9kZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpPO3lCQUUyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0Msb0NBQXlCLEVBQ3BDQyxvQkFBb0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssc0NBQTJCLEVBQ3RDQyxzQkFBc0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7Z0JBRW5ELE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsc0JBQXNCLElBQUksQ0FBQ0Ysc0JBQXNCLElBQ2pESSxZQUFZRixvQkFBb0JDLFlBQVk7Z0JBRWxELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsb0JBQW9CLElBQUksQ0FBQ0gsb0JBQW9CLElBQzdDVyxtQkFBbUJSLGtCQUFrQk8sbUJBQW1CO2dCQUU5RCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULG9CQUFvQixJQUFJLENBQUNILG9CQUFvQixJQUM3Q2EsZ0JBQWdCVixrQkFBa0JTLGdCQUFnQjtnQkFFeEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWCxvQkFBb0IsSUFBSSxDQUFDSCxvQkFBb0IsSUFDN0NlLFlBQVlaLGtCQUFrQlcsWUFBWTtnQkFFaEQsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNmLFFBQVEsRUFBRWdCLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQTNDN0lqQixlQTJDNkpFLFVBQVVnQixZQUFZQyxTQUFTQztZQUFhOzs7V0EzQ3pNcEI7RUFBc0JxQixvQkFBZSJ9