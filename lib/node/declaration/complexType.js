"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ComplexTypeDeclarationNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _constants = require("../../constants");
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
var ComplexTypeDeclarationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ComplexTypeDeclarationNode, NonTerminalNode);
    function ComplexTypeDeclarationNode() {
        _class_call_check(this, ComplexTypeDeclarationNode);
        return _call_super(this, ComplexTypeDeclarationNode, arguments);
    }
    _create_class(ComplexTypeDeclarationNode, [
        {
            key: "getTypeName",
            value: function getTypeName() {
                var typeName = null;
                this.someChildNode(function(childNode) {
                    var childNodeTypeNode = (0, _node.isNodeTypeNode)(childNode);
                    if (childNodeTypeNode) {
                        var typeNode = childNode; ///
                        typeName = typeNode.getTypeName();
                        return true;
                    }
                });
                return typeName;
            }
        },
        {
            key: "getTypesNode",
            value: function getTypesNode() {
                var typesNode = this.findChildNode(function(childNode) {
                    var childNodeTypesNode = (0, _node.isNodeTypesNode)(childNode);
                    if (childNodeTypesNode) {
                        return true;
                    }
                }) || null;
                return typesNode;
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                var provisional = false;
                this.someChildNode(function(childNode) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, content = terminalNode.getContent(), contentProvisional = content === _constants.PROVISIONAL;
                        if (contentProvisional) {
                            provisional = true;
                            return true;
                        }
                    }
                });
                return provisional;
            }
        },
        {
            key: "getSuperTypeNodes",
            value: function getSuperTypeNodes() {
                var superTypeNodes = [];
                var typesNode = this.getTypesNode();
                if (typesNode !== null) {
                    var typeNodes = typesNode.getTypeNodes();
                    superTypeNodes = typeNodes; ///
                }
                return superTypeNodes;
            }
        },
        {
            key: "getPropertyDeclarationNodes",
            value: function getPropertyDeclarationNodes() {
                var propertyDeclarationNodes = this.filterChildNode(function(childNode) {
                    var childNodePropertyDeclarationNode = (0, _node.isNodePropertyDeclarationNode)(childNode);
                    if (childNodePropertyDeclarationNode) {
                        return true;
                    }
                });
                return propertyDeclarationNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(ComplexTypeDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ComplexTypeDeclarationNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNOb2RlVHlwZU5vZGUsIGlzTm9kZVR5cGVzTm9kZSwgaXNOb2RlUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWUgPSBudWxsO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVR5cGVOb2RlID0gaXNOb2RlVHlwZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lO1xuICB9XG5cbiAgZ2V0VHlwZXNOb2RlKCkge1xuICAgIGNvbnN0IHR5cGVzTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUeXBlc05vZGUgPSBpc05vZGVUeXBlc05vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVzTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGVzTm9kZTtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKTtcblxuICAgICAgICBpZiAoY29udGVudFByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZU5vZGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVOb2RlcyA9IFtdO1xuXG4gICAgY29uc3QgdHlwZXNOb2RlID0gdGhpcy5nZXRUeXBlc05vZGUoKTtcblxuICAgIGlmICh0eXBlc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlcyA9IHR5cGVzTm9kZS5nZXRUeXBlTm9kZXMoKTtcblxuICAgICAgc3VwZXJUeXBlTm9kZXMgPSB0eXBlTm9kZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVOb2RlcztcbiAgfVxuXG4gIGdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSA9IGlzTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImdldFR5cGVOYW1lIiwidHlwZU5hbWUiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVHlwZU5vZGUiLCJpc05vZGVUeXBlTm9kZSIsInR5cGVOb2RlIiwiZ2V0VHlwZXNOb2RlIiwidHlwZXNOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZVR5cGVzTm9kZSIsImlzTm9kZVR5cGVzTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbCIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWwiLCJQUk9WSVNJT05BTCIsImdldFN1cGVyVHlwZU5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJ0eXBlTm9kZXMiLCJnZXRUeXBlTm9kZXMiLCJnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMiLCJmaWx0ZXJDaGlsZE5vZGUiLCJjaGlsZE5vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImlzTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2tFQUxPO3lCQUVBO29CQUNtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsb0JBQW9CQyxJQUFBQSxvQkFBYyxFQUFDRjtvQkFFekMsSUFBSUMsbUJBQW1CO3dCQUNyQixJQUFNRSxXQUFXSCxXQUFZLEdBQUc7d0JBRWhDRixXQUFXSyxTQUFTTixXQUFXO3dCQUUvQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDTjtvQkFDcEMsSUFBTU8scUJBQXFCQyxJQUFBQSxxQkFBZSxFQUFDUjtvQkFFM0MsSUFBSU8sb0JBQW9CO3dCQUN0QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxjQUFjO2dCQUVsQixJQUFJLENBQUNYLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTVcsd0JBQXdCWCxVQUFVWSxjQUFjO29CQUV0RCxJQUFJRCx1QkFBdUI7d0JBQ3pCLElBQU1FLGVBQWViLFdBQ2ZjLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHFCQUFzQkYsWUFBWUcsc0JBQVc7d0JBRW5ELElBQUlELG9CQUFvQjs0QkFDdEJOLGNBQWM7NEJBRWQsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGlCQUFpQixFQUFFO2dCQUV2QixJQUFNZCxZQUFZLElBQUksQ0FBQ0QsWUFBWTtnQkFFbkMsSUFBSUMsY0FBYyxNQUFNO29CQUN0QixJQUFNZSxZQUFZZixVQUFVZ0IsWUFBWTtvQkFFeENGLGlCQUFpQkMsV0FBVyxHQUFHO2dCQUNqQztnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDJCQUEyQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDeEI7b0JBQ3JELElBQU15QixtQ0FBbUNDLElBQUFBLG1DQUE2QixFQUFDMUI7b0JBRXZFLElBQUl5QixrQ0FBa0M7d0JBQ3BDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0wsMENBQTBDLENBL0U3SS9CLDRCQStFMEtnQyxVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0EvRXRObkM7RUFBbUNvQyxvQkFBZSJ9