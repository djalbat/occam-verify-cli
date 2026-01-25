"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelMetaAssertionNode;
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
var TopLevelMetaAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TopLevelMetaAssertionNode, NonTerminalNode);
    function TopLevelMetaAssertionNode() {
        _class_call_check(this, TopLevelMetaAssertionNode);
        return _call_super(this, TopLevelMetaAssertionNode, arguments);
    }
    _create_class(TopLevelMetaAssertionNode, [
        {
            key: "getBodyNode",
            value: function getBodyNode() {
                var bodyRuleName = this.constructor.bodyRuleName, ruleName = bodyRuleName, axiomBodyNode = this.getNodeByRuleName(ruleName);
                return axiomBodyNode;
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
            key: "getProofNode",
            value: function getProofNode() {
                var bodyNode = this.getBodyNode(), proofNode = bodyNode.getProofNode();
                return proofNode;
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
    return TopLevelMetaAssertionNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0Qm9keU5vZGUoKSB7XG4gICAgY29uc3QgeyBib2R5UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcnVsZU5hbWUgPSBib2R5UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbUJvZHlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gYXhpb21Cb2R5Tm9kZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZSgpIHtcbiAgICBjb25zdCBoZWFkZXJOb2RlID0gdGhpcy5nZXRIZWFkZXJOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlID0gaGVhZGVyTm9kZS5nZXRMYWJlbE5vZGUoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGU7XG4gIH1cblxuICBnZXRQcm9vZk5vZGUoKSB7XG4gICAgY29uc3QgYm9keU5vZGUgPSB0aGlzLmdldEJvZHlOb2RlKCksXG4gICAgICAgICAgcHJvb2ZOb2RlID0gYm9keU5vZGUuZ2V0UHJvb2ZOb2RlKCk7XG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0SGVhZGVyTm9kZSgpIHtcbiAgICBjb25zdCB7IGhlYWRlclJ1bGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHJ1bGVOYW1lID0gaGVhZGVyUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBoZWFkZXJOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gaGVhZGVyTm9kZTtcbiAgfVxuXG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3QgYm9keU5vZGUgPSB0aGlzLmdldEJvZHlOb2RlKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IGJvZHlOb2RlLmdldERlZHVjdGlvbk5vZGUoKTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBib2R5Tm9kZSA9IHRoaXMuZ2V0Qm9keU5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gYm9keU5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSIsImdldEJvZHlOb2RlIiwiYm9keVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJheGlvbUJvZHlOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRMYWJlbE5vZGUiLCJoZWFkZXJOb2RlIiwiZ2V0SGVhZGVyTm9kZSIsImxhYmVsTm9kZSIsImdldFByb29mTm9kZSIsImJvZHlOb2RlIiwicHJvb2ZOb2RlIiwiaGVhZGVyUnVsZU5hbWUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJCQUZXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxlQUFpQixJQUFJLENBQUMsV0FBVyxDQUFqQ0EsY0FDRkMsV0FBV0QsY0FDWEUsZ0JBQWdCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNGO2dCQUU3QyxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxZQUFZRixXQUFXRCxZQUFZO2dCQUV6QyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDVixXQUFXLElBQzNCVyxZQUFZRCxTQUFTRCxZQUFZO2dCQUV2QyxPQUFPRTtZQUNUOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUssaUJBQW1CLElBQUksQ0FBQyxXQUFXLENBQW5DQSxnQkFDRlYsV0FBV1UsZ0JBQ1hOLGFBQWEsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ0Y7Z0JBRTFDLE9BQU9JO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsV0FBVyxJQUFJLENBQUNWLFdBQVcsSUFDM0JjLGdCQUFnQkosU0FBU0csZ0JBQWdCO2dCQUUvQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLFdBQVcsSUFBSSxDQUFDVixXQUFXLElBQzNCZ0IsbUJBQW1CTixTQUFTSyxtQkFBbUI7Z0JBRXJELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxLQUFLLEVBQUVoQixRQUFRLEVBQUVpQixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw0QkFBZSxDQUFDTCwwQ0FBMEMsQ0FBQ0MsT0FBT2hCLFVBQVVpQixZQUFZQyxTQUFTQztZQUFhOzs7V0E3Q3hNdEI7RUFBa0N1Qiw0QkFBZSJ9