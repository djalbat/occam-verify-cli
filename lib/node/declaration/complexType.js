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
var _ruleNames = require("../../ruleNames");
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
            key: "isPrefixed",
            value: function isPrefixed() {
                var typeNode = this.getTypeNode(), prefixed = typeNode.isPrefixed();
                return prefixed;
            }
        },
        {
            key: "getTypeName",
            value: function getTypeName() {
                var typeNode = this.getTypeNode(), typeName = typeNode.getTypeName();
                return typeName;
            }
        },
        {
            key: "getTypeNode",
            value: function getTypeNode() {
                var ruleName = _ruleNames.TYPE_RULE_NAME, typeNode = this.getNodeByRuleName(ruleName);
                return typeNode;
            }
        },
        {
            key: "getTypesNode",
            value: function getTypesNode() {
                var ruleName = _ruleNames.TYPES_RULE_NAME, typesNode = this.getNodeByRuleName(ruleName);
                return typesNode;
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
            key: "getTypePrefixName",
            value: function getTypePrefixName() {
                var typeNode = this.getTypeNode(), typePrefixName = typeNode.getTypePrefixName();
                return typePrefixName;
            }
        },
        {
            key: "getPropertyDeclarationNodes",
            value: function getPropertyDeclarationNodes() {
                var ruleName = _ruleNames.PROPERTY_DECLARATION_RULE_NAME, propertyDeclarationNodes = this.getNodesByRuleName(ruleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9SVUxFX05BTUUsIFRZUEVTX1JVTEVfTkFNRSwgUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKTtcblxuICAgICAgICBpZiAoY29udGVudFByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgcHJlZml4ZWQgPSB0eXBlTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cblxuICBnZXRUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHR5cGVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFU19SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZXNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZXNOb2RlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlTm9kZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZU5vZGVzID0gW107XG5cbiAgICBjb25zdCB0eXBlc05vZGUgPSB0aGlzLmdldFR5cGVzTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZU5vZGVzID0gdHlwZXNOb2RlLmdldFR5cGVOb2RlcygpO1xuXG4gICAgICBzdXBlclR5cGVOb2RlcyA9IHR5cGVOb2RlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU5vZGVzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeE5hbWUoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOYW1lO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJpc1ByZWZpeGVkIiwidHlwZU5vZGUiLCJnZXRUeXBlTm9kZSIsInByZWZpeGVkIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInJ1bGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFR5cGVzTm9kZSIsIlRZUEVTX1JVTEVfTkFNRSIsInR5cGVzTm9kZSIsImdldFN1cGVyVHlwZU5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJ0eXBlTm9kZXMiLCJnZXRUeXBlTm9kZXMiLCJnZXRUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztrRUFMTzt5QkFFQTt5QkFDb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakUsSUFBQSxBQUFNQSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGNBQWM7Z0JBRWxCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDO29CQUNsQixJQUFNQyx3QkFBd0JELFVBQVVFLGNBQWM7b0JBRXRELElBQUlELHVCQUF1Qjt3QkFDekIsSUFBTUUsZUFBZUgsV0FDZkksVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MscUJBQXNCRixZQUFZRyxzQkFBVzt3QkFFbkQsSUFBSUQsb0JBQW9COzRCQUN0QlIsY0FBYzs0QkFFZCxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFdBQVdGLFNBQVNELFVBQVU7Z0JBRXBDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JHLFdBQVdKLFNBQVNHLFdBQVc7Z0JBRXJDLE9BQU9DO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUksV0FBV0MseUJBQWMsRUFDekJOLFdBQVcsSUFBSSxDQUFDTyxpQkFBaUIsQ0FBQ0Y7Z0JBRXhDLE9BQU9MO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsV0FBV0ksMEJBQWUsRUFDMUJDLFlBQVksSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0Y7Z0JBRXpDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsaUJBQWlCLEVBQUU7Z0JBRXZCLElBQU1GLFlBQVksSUFBSSxDQUFDRixZQUFZO2dCQUVuQyxJQUFJRSxjQUFjLE1BQU07b0JBQ3RCLElBQU1HLFlBQVlILFVBQVVJLFlBQVk7b0JBRXhDRixpQkFBaUJDLFdBQVcsR0FBRztnQkFDakM7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNZixXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQmUsaUJBQWlCaEIsU0FBU2UsaUJBQWlCO2dCQUVqRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLFdBQVdhLHlDQUE4QixFQUN6Q0MsMkJBQTJCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNmO2dCQUV6RCxPQUFPYztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2hCLFFBQVEsRUFBRWlCLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQS9FN0lsQyw0QkErRTBLa0IsVUFBVWlCLFlBQVlDLFNBQVNDO1lBQWE7OztXQS9FdE5yQztFQUFtQ3NDLG9CQUFlIn0=