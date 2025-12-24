"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemmaMetaTheoremNode;
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
var MetaLemmaMetaTheoremNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MetaLemmaMetaTheoremNode, NonTerminalNode);
    function MetaLemmaMetaTheoremNode() {
        _class_call_check(this, MetaLemmaMetaTheoremNode);
        return _call_super(this, MetaLemmaMetaTheoremNode, arguments);
    }
    _create_class(MetaLemmaMetaTheoremNode, [
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
            key: "getLabelNode",
            value: function getLabelNode() {
                var headerNode = this.getHeaderNode(), labelNode = headerNode.getLabelNode();
                return labelNode;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var bodyNode = this.getBodyNode(), suppositionNodes = bodyNode.getSuppositionNodes();
                return suppositionNodes;
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
            key: "getProofNode",
            value: function getProofNode() {
                var bodyNode = this.getBodyNode(), proofNode = bodyNode.getProofNode();
                return proofNode;
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
    return MetaLemmaMetaTheoremNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ldGFMZW1tYU1ldGFUaGVvcmVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxlbW1hTWV0YVRoZW9yZW1Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0Qm9keU5vZGUoKSB7XG4gICAgY29uc3QgeyBib2R5UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcnVsZU5hbWUgPSBib2R5UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbUJvZHlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gYXhpb21Cb2R5Tm9kZTtcbiAgfVxuXG4gIGdldEhlYWRlck5vZGUoKSB7XG4gICAgY29uc3QgeyBoZWFkZXJSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBydWxlTmFtZSA9IGhlYWRlclJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgaGVhZGVyTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGhlYWRlck5vZGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3QgaGVhZGVyTm9kZSA9IHRoaXMuZ2V0SGVhZGVyTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IGhlYWRlck5vZGUuZ2V0TGFiZWxOb2RlKCk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBib2R5Tm9kZSA9IHRoaXMuZ2V0Qm9keU5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gYm9keU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IGJvZHlOb2RlID0gdGhpcy5nZXRCb2R5Tm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSBib2R5Tm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBib2R5Tm9kZSA9IHRoaXMuZ2V0Qm9keU5vZGUoKSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBib2R5Tm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTWV0YUxlbW1hTWV0YVRoZW9yZW1Ob2RlIiwiZ2V0Qm9keU5vZGUiLCJib2R5UnVsZU5hbWUiLCJydWxlTmFtZSIsImF4aW9tQm9keU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEhlYWRlck5vZGUiLCJoZWFkZXJSdWxlTmFtZSIsImhlYWRlck5vZGUiLCJnZXRMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwiYm9keU5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7c0VBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxlQUFpQixJQUFJLENBQUMsV0FBVyxDQUFqQ0EsY0FDRkMsV0FBV0QsY0FDWEUsZ0JBQWdCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNGO2dCQUU3QyxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsaUJBQW1CLElBQUksQ0FBQyxXQUFXLENBQW5DQSxnQkFDRkosV0FBV0ksZ0JBQ1hDLGFBQWEsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0Y7Z0JBRTFDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsYUFBYSxJQUFJLENBQUNGLGFBQWEsSUFDL0JJLFlBQVlGLFdBQVdDLFlBQVk7Z0JBRXpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNYLFdBQVcsSUFDM0JZLG1CQUFtQkQsU0FBU0QsbUJBQW1CO2dCQUVyRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1GLFdBQVcsSUFBSSxDQUFDWCxXQUFXLElBQzNCYyxnQkFBZ0JILFNBQVNFLGdCQUFnQjtnQkFFL0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXLElBQUksQ0FBQ1gsV0FBVyxJQUMzQmdCLFlBQVlMLFNBQVNJLFlBQVk7Z0JBRXZDLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUVoQixRQUFRLEVBQUVpQixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDTCwwQ0FBMEMsQ0FBQ0MsT0FBT2hCLFVBQVVpQixZQUFZQyxTQUFTQztZQUFhOzs7V0E3Q3hNdEI7RUFBaUN1Qix3QkFBZSJ9