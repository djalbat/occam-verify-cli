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
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
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
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TopLevelMetaAssertionNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBpc05vZGVQcm9vZk5vZGUsIGlzTm9kZVN1cHBvc2l0aW9uTm9kZSwgaXNOb2RlRGVkdWN0aW9uTm9kZSwgaXNOb2RlUGFyZW50aGVzaXNlZExhYmVsTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbE1ldGFBc3NlcnRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0TGFiZWxOb2RlKCkge1xuICAgIGNvbnN0IHBhcmVudGhlc2lzZWRMYWJlbE5vZGUgPSB0aGlzLmdldFBhcmVudGhlc2lzZWRMYWJlbE5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gcGFyZW50aGVzaXNlZExhYmVsTm9kZS5nZXRMYWJlbE5vZGUoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHByb29mTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5PZGVQcm9vZk5vZGUgPSBpc05vZGVQcm9vZk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTk9kZVByb29mTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb29mTm9kZTtcbiAgfVxuXG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5PZGVEZWR1Y3Rpb25Ob2RlID0gaXNOb2RlRGVkdWN0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROT2RlRGVkdWN0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5PZGVTdXBwb3NpdGlvbk5vZGUgPSBpc05vZGVTdXBwb3NpdGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTk9kZVN1cHBvc2l0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBnZXRQYXJlbnRoZXNpc2VkTGFiZWxOb2RlKCkge1xuICAgIGNvbnN0IHBhcmVudGhlc2lzZWRMYWJlbE5vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyZW50aGVzaXNlZExhYmVsTm9kZSA9IGlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVBhcmVudGhlc2lzZWRMYWJlbE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJlbnRoZXNpc2VkTGFiZWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsTWV0YUFzc2VydGlvbk5vZGUiLCJnZXRMYWJlbE5vZGUiLCJwYXJlbnRoZXNpc2VkTGFiZWxOb2RlIiwiZ2V0UGFyZW50aGVzaXNlZExhYmVsTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRQcm9vZk5vZGUiLCJwcm9vZk5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROT2RlUHJvb2ZOb2RlIiwiaXNOb2RlUHJvb2ZOb2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJjaGlsZE5PZGVEZWR1Y3Rpb25Ob2RlIiwiaXNOb2RlRGVkdWN0aW9uTm9kZSIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiY2hpbGROT2RlU3VwcG9zaXRpb25Ob2RlIiwiaXNOb2RlU3VwcG9zaXRpb25Ob2RlIiwiY2hpbGROb2RlUGFyZW50aGVzaXNlZExhYmVsTm9kZSIsImlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTztvQkFFOEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0YsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLHlCQUF5QixJQUN2REMsYUFBYUYsdUJBQXVCRCxZQUFZO2dCQUV0RCxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ3BDLElBQU1DLHFCQUFxQkMsSUFBQUEscUJBQWUsRUFBQ0Y7b0JBRTNDLElBQUlDLG9CQUFvQjt3QkFDdEIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0wsYUFBYSxDQUFDLFNBQUNDO29CQUN4QyxJQUFNSyx5QkFBeUJDLElBQUFBLHlCQUFtQixFQUFDTjtvQkFFbkQsSUFBSUssd0JBQXdCO3dCQUMxQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ1Q7b0JBQzdDLElBQU1VLDJCQUEyQkMsSUFBQUEsMkJBQXFCLEVBQUNYO29CQUV2RCxJQUFJVSwwQkFBMEI7d0JBQzVCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPRjtZQUNUOzs7WUFFQWIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELHlCQUF5QixJQUFJLENBQUNLLGFBQWEsQ0FBQyxTQUFDQztvQkFDakQsSUFBTVksa0NBQWtDQyxJQUFBQSxrQ0FBNEIsRUFBQ2I7b0JBRXJFLElBQUlZLGlDQUFpQzt3QkFDbkMsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9sQjtZQUNUOzs7O1lBRU9vQixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDTiwwQ0FBMEMsQ0FBQ0MsT0FBT0MsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBeER4TTNCO0VBQWtDNEIsb0JBQWUifQ==