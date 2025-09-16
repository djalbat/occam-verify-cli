"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetavariableNode;
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
var MetavariableNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MetavariableNode, NonTerminalNode);
    function MetavariableNode() {
        _class_call_check(this, MetavariableNode);
        return _call_super(this, MetavariableNode, arguments);
    }
    _create_class(MetavariableNode, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                var termNode = null;
                var argumentNode = this.getArgumentNode();
                if (argumentNode !== null) {
                    termNode = argumentNode.getTermNode();
                }
                return termNode;
            }
        },
        {
            key: "getTypeNode",
            value: function getTypeNode() {
                var typeNode = null;
                var argumentNode = this.getArgumentNode();
                if (argumentNode !== null) {
                    typeNode = argumentNode.getTypeNode();
                }
                return typeNode;
            }
        },
        {
            key: "getArgumentNode",
            value: function getArgumentNode() {
                var ruleName = _ruleNames.ARGUMENT_RULE_NAME, argumentNode = this.getNodeByRuleName(ruleName);
                return argumentNode;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metaVariableName;
                this.someChildNode(function(childNode) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, content = terminalNode.getContent();
                        metaVariableName = content; ///
                        return true;
                    }
                });
                return metaVariableName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(MetavariableNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return MetavariableNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBBUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF2YXJpYWJsZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBsZXQgdGVybU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgYXJndW1lbnROb2RlID0gdGhpcy5nZXRBcmd1bWVudE5vZGUoKTtcblxuICAgIGlmIChhcmd1bWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRlcm1Ob2RlID0gYXJndW1lbnROb2RlLmdldFRlcm1Ob2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgbGV0IHR5cGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IHRoaXMuZ2V0QXJndW1lbnROb2RlKCk7XG5cbiAgICBpZiAoYXJndW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICB0eXBlTm9kZSA9IGFyZ3VtZW50Tm9kZS5nZXRUeXBlTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldEFyZ3VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEFSR1VNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICBhcmd1bWVudE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBhcmd1bWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGxldCBtZXRhVmFyaWFibGVOYW1lO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIG1ldGFWYXJpYWJsZU5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhVmFyaWFibGVOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShNZXRhdmFyaWFibGVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VGVybU5vZGUiLCJ0ZXJtTm9kZSIsImFyZ3VtZW50Tm9kZSIsImdldEFyZ3VtZW50Tm9kZSIsImdldFR5cGVOb2RlIiwidHlwZU5vZGUiLCJydWxlTmFtZSIsIkFSR1VNRU5UX1JVTEVfTkFNRSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGFWYXJpYWJsZU5hbWUiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSk87eUJBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXpDLElBQUlELGlCQUFpQixNQUFNO29CQUN6QkQsV0FBV0MsYUFBYUYsV0FBVztnQkFDckM7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1ILGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUV6QyxJQUFJRCxpQkFBaUIsTUFBTTtvQkFDekJHLFdBQVdILGFBQWFFLFdBQVc7Z0JBQ3JDO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUcsV0FBV0MsNkJBQWtCLEVBQzdCTCxlQUFlLElBQUksQ0FBQ00saUJBQWlCLENBQUNGO2dCQUU1QyxPQUFPSjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDO29CQUNsQixJQUFNQyx3QkFBd0JELFVBQVVFLGNBQWM7b0JBRXRELElBQUlELHVCQUF1Qjt3QkFDekIsSUFBTUUsZUFBZUgsV0FDZkksVUFBVUQsYUFBYUUsVUFBVTt3QkFFdkNQLG1CQUFtQk0sU0FBUyxHQUFHO3dCQUUvQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9OO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDWixRQUFRLEVBQUVhLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQW5EN0luQixrQkFtRGdLTyxVQUFVYSxZQUFZQyxTQUFTQztZQUFhOzs7V0FuRDVNdEI7RUFBeUJ1QixvQkFBZSJ9