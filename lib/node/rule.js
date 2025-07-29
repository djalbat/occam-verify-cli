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
var _occamparsers = require("occam-parsers");
var _node = require("../utilities/node");
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
var RuleNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RuleNode, NonTerminalNode);
    function RuleNode() {
        _class_call_check(this, RuleNode);
        return _call_super(this, RuleNode, arguments);
    }
    _create_class(RuleNode, [
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var parenthesisedLabelsNode = this.getParenthesisedLabelsNode(), labelNodes = parenthesisedLabelsNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var proofNode = this.findChildNode(function(childNode) {
                    var childNOdeProofNode = (0, _node.isNodeProofNode)(childNode);
                    if (childNOdeProofNode) {
                        return true;
                    }
                }) || null;
                return proofNode;
            }
        },
        {
            key: "getPremiseNodes",
            value: function getPremiseNodes() {
                var premiseNodes = this.filterChildNode(function(childNode) {
                    var childNOdePremiseNode = (0, _node.isNodePremiseNode)(childNode);
                    if (childNOdePremiseNode) {
                        return true;
                    }
                }) || null;
                return premiseNodes;
            }
        },
        {
            key: "getConclusionNode",
            value: function getConclusionNode() {
                var conclusionNode = this.findChildNode(function(childNode) {
                    var childNOdeConclusionNode = (0, _node.isNodeConclusionNode)(childNode);
                    if (childNOdeConclusionNode) {
                        return true;
                    }
                }) || null;
                return conclusionNode;
            }
        },
        {
            key: "getParenthesisedLabelsNode",
            value: function getParenthesisedLabelsNode() {
                var parenthesisedLabelsNode = this.findChildNode(function(childNode) {
                    var childNodeParenthesisedLabelsNode = (0, _node.isNodeParenthesisedLabelsNode)(childNode);
                    if (childNodeParenthesisedLabelsNode) {
                        return true;
                    }
                }) || null;
                return parenthesisedLabelsNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return RuleNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGlzTm9kZVByb29mTm9kZSxcbiAgICAgICAgIGlzTm9kZVByZW1pc2VOb2RlLFxuICAgICAgICAgaXNOb2RlQ29uY2x1c2lvbk5vZGUsXG4gICAgICAgICBpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldExhYmVsTm9kZXMoKSB7XG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmdldFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlLmdldExhYmVsTm9kZXMoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHByb29mTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5PZGVQcm9vZk5vZGUgPSBpc05vZGVQcm9vZk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTk9kZVByb29mTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb29mTm9kZTtcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlcygpIHtcbiAgICBjb25zdCBwcmVtaXNlTm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5PZGVQcmVtaXNlTm9kZSA9IGlzTm9kZVByZW1pc2VOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5PZGVQcmVtaXNlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByZW1pc2VOb2RlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb25Ob2RlKCkge1xuICAgIGNvbnN0IGNvbmNsdXNpb25Ob2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTk9kZUNvbmNsdXNpb25Ob2RlID0gaXNOb2RlQ29uY2x1c2lvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTk9kZUNvbmNsdXNpb25Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbk5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSA9IGlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShSdWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5vZGUiLCJnZXRMYWJlbE5vZGVzIiwicGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRQcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROT2RlUHJvb2ZOb2RlIiwiaXNOb2RlUHJvb2ZOb2RlIiwiZ2V0UHJlbWlzZU5vZGVzIiwicHJlbWlzZU5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiY2hpbGROT2RlUHJlbWlzZU5vZGUiLCJpc05vZGVQcmVtaXNlTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJjaGlsZE5PZGVDb25jbHVzaW9uTm9kZSIsImlzTm9kZUNvbmNsdXNpb25Ob2RlIiwiY2hpbGROb2RlUGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0QkFQVztvQkFLYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDBCQUEwQixJQUFJLENBQUNDLDBCQUEwQixJQUN6REMsYUFBYUYsd0JBQXdCRCxhQUFhO2dCQUV4RCxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ3BDLElBQU1DLHFCQUFxQkMsSUFBQUEscUJBQWUsRUFBQ0Y7b0JBRTNDLElBQUlDLG9CQUFvQjt3QkFDdEIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDTDtvQkFDekMsSUFBTU0sdUJBQXVCQyxJQUFBQSx1QkFBaUIsRUFBQ1A7b0JBRS9DLElBQUlNLHNCQUFzQjt3QkFDeEIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9GO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ1YsYUFBYSxDQUFDLFNBQUNDO29CQUN6QyxJQUFNVSwwQkFBMEJDLElBQUFBLDBCQUFvQixFQUFDWDtvQkFFckQsSUFBSVUseUJBQXlCO3dCQUMzQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Q7WUFDVDs7O1lBRUFkLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCwwQkFBMEIsSUFBSSxDQUFDSyxhQUFhLENBQUMsU0FBQ0M7b0JBQ2xELElBQU1ZLG1DQUFtQ0MsSUFBQUEsbUNBQTZCLEVBQUNiO29CQUV2RSxJQUFJWSxrQ0FBa0M7d0JBQ3BDLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPbEI7WUFDVDs7OztZQUVPb0IsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDZCQUFlLENBQUNMLDBDQUEwQyxDQXhEN0l0QixVQXdEd0p1QixVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0F4RHBNMUI7RUFBaUIyQiw2QkFBZSJ9