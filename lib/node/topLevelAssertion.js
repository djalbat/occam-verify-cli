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
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
var _constants = require("../constants");
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
var TopLevelAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TopLevelAssertionNode, NonTerminalNode);
    function TopLevelAssertionNode() {
        _class_call_check(this, TopLevelAssertionNode);
        return _call_super(this, TopLevelAssertionNode, arguments);
    }
    _create_class(TopLevelAssertionNode, [
        {
            key: "isSatisfiable",
            value: function isSatisfiable() {
                var satisfiable = false;
                this.someChildNode(function(childNode, index) {
                    var terminalNode = childNode, content = terminalNode.getContent(), contentSatisfiable = content === _constants.SATISFIABLE;
                    if (contentSatisfiable) {
                        satisfiable = true;
                    }
                    if (index === 0) {
                        return true;
                    }
                });
                return satisfiable;
            }
        },
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var labelNodes = [];
                var parenthesisedLabelsNode = this.getParenthesisedLabelsNode();
                if (parenthesisedLabelsNode !== null) {
                    labelNodes = parenthesisedLabelsNode.getLabelNodes();
                }
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
                    var childNodeSuppositionNode = (0, _node.isNodeSuppositionNode)(childNode);
                    if (childNodeSuppositionNode) {
                        return true;
                    }
                });
                return suppositionNodes;
            }
        },
        {
            key: "getParenthesisedLabelsNode",
            value: function getParenthesisedLabelsNode() {
                var parenthesisedLabelsNode = this.findChildNode(function(childNode) {
                    var childNodeParenthesisedLabelNode = (0, _node.isNodeParenthesisedLabelsNode)(childNode);
                    if (childNodeParenthesisedLabelNode) {
                        return true;
                    }
                }) || null;
                return parenthesisedLabelsNode;
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
    return TopLevelAssertionNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFNBVElTRklBQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNOb2RlUHJvb2ZOb2RlLFxuICAgICAgICAgaXNOb2RlRGVkdWN0aW9uTm9kZSxcbiAgICAgICAgIGlzTm9kZVN1cHBvc2l0aW9uTm9kZSxcbiAgICAgICAgIGlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzU2F0aXNmaWFibGUoKSB7XG4gICAgbGV0IHNhdGlzZmlhYmxlID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgY29udGVudFNhdGlzZmlhYmxlID0gKGNvbnRlbnQgPT09IFNBVElTRklBQkxFKTtcblxuICAgICAgaWYgKGNvbnRlbnRTYXRpc2ZpYWJsZSkge1xuICAgICAgICBzYXRpc2ZpYWJsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZXMoKSB7XG4gICAgbGV0IGxhYmVsTm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gdGhpcy5nZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSgpO1xuXG4gICAgaWYgKHBhcmVudGhlc2lzZWRMYWJlbHNOb2RlICE9PSBudWxsKSB7XG4gICAgICBsYWJlbE5vZGVzID0gcGFyZW50aGVzaXNlZExhYmVsc05vZGUuZ2V0TGFiZWxOb2RlcygpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbE5vZGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHByb29mTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5PZGVQcm9vZk5vZGUgPSBpc05vZGVQcm9vZk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTk9kZVByb29mTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb29mTm9kZTtcbiAgfVxuXG4gIGdldERlZHVjdGlvbk5vZGUoKSB7XG4gICAgY29uc3QgZGVkdWN0aW9uTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5PZGVEZWR1Y3Rpb25Ob2RlID0gaXNOb2RlRGVkdWN0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROT2RlRGVkdWN0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVTdXBwb3NpdGlvbk5vZGUgPSBpc05vZGVTdXBwb3NpdGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVN1cHBvc2l0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGVzO1xuICB9XG5cbiAgZ2V0UGFyZW50aGVzaXNlZExhYmVsc05vZGUoKSB7XG4gICAgY29uc3QgcGFyZW50aGVzaXNlZExhYmVsc05vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyZW50aGVzaXNlZExhYmVsTm9kZSA9IGlzTm9kZVBhcmVudGhlc2lzZWRMYWJlbHNOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJlbnRoZXNpc2VkTGFiZWxOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyZW50aGVzaXNlZExhYmVsc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNhdGlzZmlhYmxlIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U2F0aXNmaWFibGUiLCJTQVRJU0ZJQUJMRSIsImdldExhYmVsTm9kZXMiLCJsYWJlbE5vZGVzIiwicGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSIsImdldFByb29mTm9kZSIsInByb29mTm9kZSIsImZpbmRDaGlsZE5vZGUiLCJjaGlsZE5PZGVQcm9vZk5vZGUiLCJpc05vZGVQcm9vZk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsImNoaWxkTk9kZURlZHVjdGlvbk5vZGUiLCJpc05vZGVEZWR1Y3Rpb25Ob2RlIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZXMiLCJmaWx0ZXJDaGlsZE5vZGUiLCJjaGlsZE5vZGVTdXBwb3NpdGlvbk5vZGUiLCJpc05vZGVTdXBwb3NpdGlvbk5vZGUiLCJjaGlsZE5vZGVQYXJlbnRoZXNpc2VkTGFiZWxOb2RlIiwiaXNOb2RlUGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztrRUFSTzt5QkFFQTtvQkFJa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGNBQWM7Z0JBRWxCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDLFdBQVdDO29CQUM3QixJQUFNQyxlQUFlRixXQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDQyxxQkFBc0JGLFlBQVlHLHNCQUFXO29CQUVuRCxJQUFJRCxvQkFBb0I7d0JBQ3RCUCxjQUFjO29CQUNoQjtvQkFFQSxJQUFJRyxVQUFVLEdBQUc7d0JBQ2YsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGFBQWEsRUFBRTtnQkFFbkIsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ0MsMEJBQTBCO2dCQUUvRCxJQUFJRCw0QkFBNEIsTUFBTTtvQkFDcENELGFBQWFDLHdCQUF3QkYsYUFBYTtnQkFDcEQ7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNiO29CQUNwQyxJQUFNYyxxQkFBcUJDLElBQUFBLHFCQUFlLEVBQUNmO29CQUUzQyxJQUFJYyxvQkFBb0I7d0JBQ3RCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNKLGFBQWEsQ0FBQyxTQUFDYjtvQkFDeEMsSUFBTWtCLHlCQUF5QkMsSUFBQUEseUJBQW1CLEVBQUNuQjtvQkFFbkQsSUFBSWtCLHdCQUF3Qjt3QkFDMUIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUN0QjtvQkFDN0MsSUFBTXVCLDJCQUEyQkMsSUFBQUEsMkJBQXFCLEVBQUN4QjtvQkFFdkQsSUFBSXVCLDBCQUEwQjt3QkFDNUIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQVgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELDBCQUEwQixJQUFJLENBQUNJLGFBQWEsQ0FBQyxTQUFDYjtvQkFDbEQsSUFBTXlCLGtDQUFrQ0MsSUFBQUEsbUNBQTZCLEVBQUMxQjtvQkFFdEUsSUFBSXlCLGlDQUFpQzt3QkFDbkMsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9oQjtZQUNUOzs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDTiwwQ0FBMEMsQ0FBQ0MsT0FBT0MsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBakZ4TXBDO0VBQThCcUMsb0JBQWUifQ==