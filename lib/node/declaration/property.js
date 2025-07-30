"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PropertyDeclarationNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _node = require("../../utilities/node");
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
var PropertyDeclarationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PropertyDeclarationNode, NonTerminalNode);
    function PropertyDeclarationNode() {
        _class_call_check(this, PropertyDeclarationNode);
        return _call_super(this, PropertyDeclarationNode, arguments);
    }
    _create_class(PropertyDeclarationNode, [
        {
            key: "getTypeNode",
            value: function getTypeNode() {
                var typeNode = this.findChildNode(function(childNode) {
                    var childNodeTypeNode = (0, _node.isNodeTypeNode)(childNode);
                    if (childNodeTypeNode) {
                        return true;
                    }
                }) || null;
                return typeNode;
            }
        },
        {
            key: "getPropertyNode",
            value: function getPropertyNode() {
                var propertyNode = this.findChildNode(function(childNode) {
                    var childNodePropertyNode = (0, _node.isNodePropertyNode)(childNode);
                    if (childNodePropertyNode) {
                        return true;
                    }
                }) || null;
                return propertyNode;
            }
        },
        {
            key: "getPropertyName",
            value: function getPropertyName() {
                var propertyNode = this.getPropertyNode(), propertyName = propertyNode.getPropertyName();
                return propertyName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(PropertyDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return PropertyDeclarationNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGlzTm9kZVR5cGVOb2RlLCBpc05vZGVQcm9wZXJ0eU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlTm9kZSgpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUeXBlTm9kZSA9IGlzTm9kZVR5cGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUeXBlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlOb2RlKCkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQcm9wZXJ0eU5vZGUgPSBpc05vZGVQcm9wZXJ0eU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVByb3BlcnR5Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5Tm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5TmFtZSgpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5vZGUgPSB0aGlzLmdldFByb3BlcnR5Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eU5hbWUoKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImdldFR5cGVOb2RlIiwidHlwZU5vZGUiLCJmaW5kQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVHlwZU5vZGUiLCJpc05vZGVUeXBlTm9kZSIsImdldFByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZSIsImNoaWxkTm9kZVByb3BlcnR5Tm9kZSIsImlzTm9kZVByb3BlcnR5Tm9kZSIsImdldFByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTztvQkFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ25DLElBQU1DLG9CQUFvQkMsSUFBQUEsb0JBQWMsRUFBQ0Y7b0JBRXpDLElBQUlDLG1CQUFtQjt3QkFDckIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNMLGFBQWEsQ0FBQyxTQUFDQztvQkFDdkMsSUFBTUssd0JBQXdCQyxJQUFBQSx3QkFBa0IsRUFBQ047b0JBRWpELElBQUlLLHVCQUF1Qjt3QkFDekIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsZUFBZSxJQUFJLENBQUNELGVBQWUsSUFDbkNLLGVBQWVKLGFBQWFHLGVBQWU7Z0JBRWpELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNMLDBDQUEwQyxDQWhDN0liLHlCQWdDdUtjLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQWhDbk5qQjtFQUFnQ2tCLG9CQUFlIn0=