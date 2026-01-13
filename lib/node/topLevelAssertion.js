"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelAssertionNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
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
var TopLevelAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TopLevelAssertionNode, NonTerminalNode);
    function TopLevelAssertionNode() {
        _class_call_check(this, TopLevelAssertionNode);
        return _call_super(this, TopLevelAssertionNode, arguments);
    }
    _create_class(TopLevelAssertionNode, [
        {
            key: "getBodyNode",
            value: function getBodyNode() {
                var bodyRuleName = this.constructor.bodyRuleName, ruleName = bodyRuleName, axiomBodyNode = this.getNodeByRuleName(ruleName);
                return axiomBodyNode;
            }
        },
        {
            key: "getHeaderNode",
            value: function getHeaderNode() {
                var headerRuleName = this.constructor.headerRuleName, ruleName = headerRuleName, headerNode = this.getNodeByRuleName(ruleName);
                return headerNode;
            }
        },
        {
            key: "getSignatureNode",
            value: function getSignatureNode() {
                var headerNode = this.getHeaderNode(), signatureNode = headerNode.getSignatureNode();
                return signatureNode;
            }
        },
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var headerNode = this.getHeaderNode(), labelNodes = headerNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var bodyNode = this.getBodyNode(), proofNode = bodyNode.getProofNode();
                return proofNode;
            }
        },
        {
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var bodyNode = this.getBodyNode(), deductionNode = bodyNode.getDeductionNode();
                return deductionNode;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var bodyNode = this.getBodyNode(), suppositionNodes = bodyNode.getSuppositionNodes();
                return suppositionNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TopLevelAssertionNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0Qm9keU5vZGUoKSB7XG4gICAgY29uc3QgeyBib2R5UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcnVsZU5hbWUgPSBib2R5UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbUJvZHlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gYXhpb21Cb2R5Tm9kZTtcbiAgfVxuXG4gIGdldEhlYWRlck5vZGUoKSB7XG4gICAgY29uc3QgeyBoZWFkZXJSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBydWxlTmFtZSA9IGhlYWRlclJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgaGVhZGVyTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGhlYWRlck5vZGU7XG4gIH1cblxuICBnZXRTaWduYXR1cmVOb2RlKCkge1xuICAgIGNvbnN0IGhlYWRlck5vZGUgPSB0aGlzLmdldEhlYWRlck5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gaGVhZGVyTm9kZS5nZXRTaWduYXR1cmVOb2RlKCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTm9kZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZXMoKSB7XG4gICAgY29uc3QgaGVhZGVyTm9kZSA9IHRoaXMuZ2V0SGVhZGVyTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBoZWFkZXJOb2RlLmdldExhYmVsTm9kZXMoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IGJvZHlOb2RlID0gdGhpcy5nZXRCb2R5Tm9kZSgpLFxuICAgICAgICAgIHByb29mTm9kZSA9IGJvZHlOb2RlLmdldFByb29mTm9kZSgpO1xuXG4gICAgcmV0dXJuIHByb29mTm9kZTtcbiAgfVxuXG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3QgYm9keU5vZGUgPSB0aGlzLmdldEJvZHlOb2RlKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IGJvZHlOb2RlLmdldERlZHVjdGlvbk5vZGUoKTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBib2R5Tm9kZSA9IHRoaXMuZ2V0Qm9keU5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gYm9keU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiZ2V0Qm9keU5vZGUiLCJib2R5UnVsZU5hbWUiLCJydWxlTmFtZSIsImF4aW9tQm9keU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEhlYWRlck5vZGUiLCJoZWFkZXJSdWxlTmFtZSIsImhlYWRlck5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlTm9kZSIsImdldExhYmVsTm9kZXMiLCJsYWJlbE5vZGVzIiwiZ2V0UHJvb2ZOb2RlIiwiYm9keU5vZGUiLCJwcm9vZk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3NFQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsZUFBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBakNBLGNBQ0ZDLFdBQVdELGNBQ1hFLGdCQUFnQixJQUFJLENBQUNDLGlCQUFpQixDQUFDRjtnQkFFN0MsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLGlCQUFtQixJQUFJLENBQUMsV0FBVyxDQUFuQ0EsZ0JBQ0ZKLFdBQVdJLGdCQUNYQyxhQUFhLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNGO2dCQUUxQyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELGFBQWEsSUFBSSxDQUFDRixhQUFhLElBQy9CSSxnQkFBZ0JGLFdBQVdDLGdCQUFnQjtnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxhQUFhLElBQUksQ0FBQ0YsYUFBYSxJQUMvQk0sYUFBYUosV0FBV0csYUFBYTtnQkFFM0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ2IsV0FBVyxJQUMzQmMsWUFBWUQsU0FBU0QsWUFBWTtnQkFFdkMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixXQUFXLElBQUksQ0FBQ2IsV0FBVyxJQUMzQmdCLGdCQUFnQkgsU0FBU0UsZ0JBQWdCO2dCQUUvQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVcsSUFBSSxDQUFDYixXQUFXLElBQzNCa0IsbUJBQW1CTCxTQUFTSSxtQkFBbUI7Z0JBRXJELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUVsQixRQUFRLEVBQUVtQixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDTCwwQ0FBMEMsQ0FBQ0MsT0FBT2xCLFVBQVVtQixZQUFZQyxTQUFTQztZQUFhOzs7V0FwRHhNeEI7RUFBOEJ5Qix3QkFBZSJ9