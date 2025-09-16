"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LemmaNode;
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
var LemmaNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(LemmaNode, NonTerminalNode);
    function LemmaNode() {
        _class_call_check(this, LemmaNode);
        return _call_super(this, LemmaNode, arguments);
    }
    _create_class(LemmaNode, [
        {
            key: "getLemmaBodyNode",
            value: function getLemmaBodyNode() {
                var ruleName = _ruleNames.LEMMA_BODY_RULE_NAME, lemmaBodyNode = this.getNodeByRuleName(ruleName);
                return lemmaBodyNode;
            }
        },
        {
            key: "getLemmaHeaderNode",
            value: function getLemmaHeaderNode() {
                var ruleName = _ruleNames.LEMMA_HEADER_RULE_NAME, lemmaHeaderNode = this.getNodeByRuleName(ruleName);
                return lemmaHeaderNode;
            }
        },
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var lemmaHeaderNode = this.getLemmaHeaderNode(), labelNodes = lemmaHeaderNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var lemmaBodyNode = this.getLemmaBodyNode(), suppositionNodes = lemmaBodyNode.getSuppositionNodes();
                return suppositionNodes;
            }
        },
        {
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var lemmaBodyNode = this.getLemmaBodyNode(), deductionNode = lemmaBodyNode.getDeductionNode();
                return deductionNode;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var lemmaBodyNode = this.getLemmaBodyNode(), proofNode = lemmaBodyNode.getProofNode();
                return proofNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(LemmaNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return LemmaNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2xlbW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IExFTU1BX0JPRFlfUlVMRV9OQU1FLCBMRU1NQV9IRUFERVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZW1tYU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRMZW1tYUJvZHlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTEVNTUFfQk9EWV9SVUxFX05BTUUsXG4gICAgICAgICAgbGVtbWFCb2R5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGxlbW1hQm9keU5vZGU7XG4gIH1cblxuICBnZXRMZW1tYUhlYWRlck5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBMRU1NQV9IRUFERVJfUlVMRV9OQU1FLFxuICAgICAgICAgIGxlbW1hSGVhZGVyTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGxlbW1hSGVhZGVyTm9kZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZXMoKSB7XG4gICAgY29uc3QgbGVtbWFIZWFkZXJOb2RlID0gdGhpcy5nZXRMZW1tYUhlYWRlck5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGVtbWFIZWFkZXJOb2RlLmdldExhYmVsTm9kZXMoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBsZW1tYUJvZHlOb2RlID0gdGhpcy5nZXRMZW1tYUJvZHlOb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IGxlbW1hQm9keU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IGxlbW1hQm9keU5vZGUgPSB0aGlzLmdldExlbW1hQm9keU5vZGUoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gbGVtbWFCb2R5Tm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBsZW1tYUJvZHlOb2RlID0gdGhpcy5nZXRMZW1tYUJvZHlOb2RlKCksXG4gICAgICAgICAgcHJvb2ZOb2RlID0gbGVtbWFCb2R5Tm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKExlbW1hTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTGVtbWFOb2RlIiwiZ2V0TGVtbWFCb2R5Tm9kZSIsInJ1bGVOYW1lIiwiTEVNTUFfQk9EWV9SVUxFX05BTUUiLCJsZW1tYUJvZHlOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRMZW1tYUhlYWRlck5vZGUiLCJMRU1NQV9IRUFERVJfUlVMRV9OQU1FIiwibGVtbWFIZWFkZXJOb2RlIiwiZ2V0TGFiZWxOb2RlcyIsImxhYmVsTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldERlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiZ2V0UHJvb2ZOb2RlIiwicHJvb2ZOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLCtCQUFvQixFQUMvQkMsZ0JBQWdCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLGlDQUFzQixFQUNqQ0Msa0JBQWtCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUUvQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELGtCQUFrQixJQUFJLENBQUNGLGtCQUFrQixJQUN6Q0ksYUFBYUYsZ0JBQWdCQyxhQUFhO2dCQUVoRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLGdCQUFnQixJQUFJLENBQUNILGdCQUFnQixJQUNyQ1csbUJBQW1CUixjQUFjTyxtQkFBbUI7Z0JBRTFELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsZ0JBQWdCLElBQUksQ0FBQ0gsZ0JBQWdCLElBQ3JDYSxnQkFBZ0JWLGNBQWNTLGdCQUFnQjtnQkFFcEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWCxnQkFBZ0IsSUFBSSxDQUFDSCxnQkFBZ0IsSUFDckNlLFlBQVlaLGNBQWNXLFlBQVk7Z0JBRTVDLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDZixRQUFRLEVBQUVnQixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSiwwQ0FBMEMsQ0EzQzdJakIsV0EyQ3lKRSxVQUFVZ0IsWUFBWUMsU0FBU0M7WUFBYTs7O1dBM0NyTXBCO0VBQWtCcUIsb0JBQWUifQ==