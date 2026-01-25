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
var _occamfurtle = require("occam-furtle");
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
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TopLevelAssertionNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldEJvZHlOb2RlKCkge1xuICAgIGNvbnN0IHsgYm9keVJ1bGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHJ1bGVOYW1lID0gYm9keVJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYXhpb21Cb2R5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGF4aW9tQm9keU5vZGU7XG4gIH1cblxuICBnZXRIZWFkZXJOb2RlKCkge1xuICAgIGNvbnN0IHsgaGVhZGVyUnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcnVsZU5hbWUgPSBoZWFkZXJSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGhlYWRlck5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBoZWFkZXJOb2RlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlTm9kZSgpIHtcbiAgICBjb25zdCBoZWFkZXJOb2RlID0gdGhpcy5nZXRIZWFkZXJOb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGhlYWRlck5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU5vZGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGVzKCkge1xuICAgIGNvbnN0IGhlYWRlck5vZGUgPSB0aGlzLmdldEhlYWRlck5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gaGVhZGVyTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlcztcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBib2R5Tm9kZSA9IHRoaXMuZ2V0Qm9keU5vZGUoKSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBib2R5Tm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IGJvZHlOb2RlID0gdGhpcy5nZXRCb2R5Tm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBib2R5Tm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uTm9kZXMoKSB7XG4gICAgY29uc3QgYm9keU5vZGUgPSB0aGlzLmdldEJvZHlOb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IGJvZHlOb2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uTm9kZSIsImdldEJvZHlOb2RlIiwiYm9keVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJheGlvbUJvZHlOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRIZWFkZXJOb2RlIiwiaGVhZGVyUnVsZU5hbWUiLCJoZWFkZXJOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZU5vZGUiLCJnZXRMYWJlbE5vZGVzIiwibGFiZWxOb2RlcyIsImdldFByb29mTm9kZSIsImJvZHlOb2RlIiwicHJvb2ZOb2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyQkFGVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsZUFBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBakNBLGNBQ0ZDLFdBQVdELGNBQ1hFLGdCQUFnQixJQUFJLENBQUNDLGlCQUFpQixDQUFDRjtnQkFFN0MsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLGlCQUFtQixJQUFJLENBQUMsV0FBVyxDQUFuQ0EsZ0JBQ0ZKLFdBQVdJLGdCQUNYQyxhQUFhLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNGO2dCQUUxQyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELGFBQWEsSUFBSSxDQUFDRixhQUFhLElBQy9CSSxnQkFBZ0JGLFdBQVdDLGdCQUFnQjtnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxhQUFhLElBQUksQ0FBQ0YsYUFBYSxJQUMvQk0sYUFBYUosV0FBV0csYUFBYTtnQkFFM0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ2IsV0FBVyxJQUMzQmMsWUFBWUQsU0FBU0QsWUFBWTtnQkFFdkMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixXQUFXLElBQUksQ0FBQ2IsV0FBVyxJQUMzQmdCLGdCQUFnQkgsU0FBU0UsZ0JBQWdCO2dCQUUvQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVcsSUFBSSxDQUFDYixXQUFXLElBQzNCa0IsbUJBQW1CTCxTQUFTSSxtQkFBbUI7Z0JBRXJELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUVsQixRQUFRLEVBQUVtQixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw0QkFBZSxDQUFDTCwwQ0FBMEMsQ0FBQ0MsT0FBT2xCLFVBQVVtQixZQUFZQyxTQUFTQztZQUFhOzs7V0FwRHhNeEI7RUFBOEJ5Qiw0QkFBZSJ9