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
var TopLevelMetaAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TopLevelMetaAssertionNode, NonTerminalNode);
    function TopLevelMetaAssertionNode() {
        _class_call_check(this, TopLevelMetaAssertionNode);
        return _call_super(this, TopLevelMetaAssertionNode, arguments);
    }
    _create_class(TopLevelMetaAssertionNode, [
        {
            key: "getLabelNode",
            value: function getLabelNode() {
                var parenthesisedLabelNode = this.getParenthesisedLabelNode(), labelNodes = parenthesisedLabelNode.getLabelNode();
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
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var deductionNode = this.findChildNode(function(childNode) {
                    var childNOdeDeductionNode = (0, _node.isNodeDeductionNode)(childNode);
                    if (childNOdeDeductionNode) {
                        return true;
                    }
                }) || null;
                return deductionNode;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var suppositionNodes = this.filterChildNode(function(childNode) {
                    var childNOdeSuppositionNode = (0, _node.isNodeSuppositionNode)(childNode);
                    if (childNOdeSuppositionNode) {
                        return true;
                    }
                }) || null;
                return suppositionNodes;
            }
        },
        {
            key: "getParenthesisedLabelNode",
            value: function getParenthesisedLabelNode() {
                var parenthesisedLabelNode = this.findChildNode(function(childNode) {
                    var childNodeParenthesisedLabelNode = (0, _node.isNodeParenthesisedLabelNode)(childNode);
                    if (childNodeParenthesisedLabelNode) {
                        return true;
                    }
                }) || null;
                return parenthesisedLabelNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TopLevelMetaAssertionNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgaXNOb2RlUHJvb2ZOb2RlLCBpc05vZGVTdXBwb3NpdGlvbk5vZGUsIGlzTm9kZURlZHVjdGlvbk5vZGUsIGlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldExhYmVsTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnRoZXNpc2VkTGFiZWxOb2RlID0gdGhpcy5nZXRQYXJlbnRoZXNpc2VkTGFiZWxOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IHBhcmVudGhlc2lzZWRMYWJlbE5vZGUuZ2V0TGFiZWxOb2RlKCk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlcztcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBwcm9vZk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROT2RlUHJvb2ZOb2RlID0gaXNOb2RlUHJvb2ZOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5PZGVQcm9vZk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROT2RlRGVkdWN0aW9uTm9kZSA9IGlzTm9kZURlZHVjdGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTk9kZURlZHVjdGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbk5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROT2RlU3VwcG9zaXRpb25Ob2RlID0gaXNOb2RlU3VwcG9zaXRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5PZGVTdXBwb3NpdGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGVzO1xuICB9XG5cbiAgZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnRoZXNpc2VkTGFiZWxOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcmVudGhlc2lzZWRMYWJlbE5vZGUgPSBpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJlbnRoZXNpc2VkTGFiZWxOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIiwiZ2V0TGFiZWxOb2RlIiwicGFyZW50aGVzaXNlZExhYmVsTm9kZSIsImdldFBhcmVudGhlc2lzZWRMYWJlbE5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0UHJvb2ZOb2RlIiwicHJvb2ZOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTk9kZVByb29mTm9kZSIsImlzTm9kZVByb29mTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiY2hpbGROT2RlRGVkdWN0aW9uTm9kZSIsImlzTm9kZURlZHVjdGlvbk5vZGUiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlcyIsImZpbHRlckNoaWxkTm9kZSIsImNoaWxkTk9kZVN1cHBvc2l0aW9uTm9kZSIsImlzTm9kZVN1cHBvc2l0aW9uTm9kZSIsImNoaWxkTm9kZVBhcmVudGhlc2lzZWRMYWJlbE5vZGUiLCJpc05vZGVQYXJlbnRoZXNpc2VkTGFiZWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NEJBSlc7b0JBRTBFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRixJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMseUJBQXlCLElBQUksQ0FBQ0MseUJBQXlCLElBQ3ZEQyxhQUFhRix1QkFBdUJELFlBQVk7Z0JBRXRELE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDcEMsSUFBTUMscUJBQXFCQyxJQUFBQSxxQkFBZSxFQUFDRjtvQkFFM0MsSUFBSUMsb0JBQW9CO3dCQUN0QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDTCxhQUFhLENBQUMsU0FBQ0M7b0JBQ3hDLElBQU1LLHlCQUF5QkMsSUFBQUEseUJBQW1CLEVBQUNOO29CQUVuRCxJQUFJSyx3QkFBd0I7d0JBQzFCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDVDtvQkFDN0MsSUFBTVUsMkJBQTJCQyxJQUFBQSwyQkFBcUIsRUFBQ1g7b0JBRXZELElBQUlVLDBCQUEwQjt3QkFDNUIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9GO1lBQ1Q7OztZQUVBYixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQseUJBQXlCLElBQUksQ0FBQ0ssYUFBYSxDQUFDLFNBQUNDO29CQUNqRCxJQUFNWSxrQ0FBa0NDLElBQUFBLGtDQUE0QixFQUFDYjtvQkFFckUsSUFBSVksaUNBQWlDO3dCQUNuQyxPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT2xCO1lBQ1Q7Ozs7WUFFT29CLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDZCQUFlLENBQUNOLDBDQUEwQyxDQUFDQyxPQUFPQyxVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0F4RHhNM0I7RUFBa0M0Qiw2QkFBZSJ9