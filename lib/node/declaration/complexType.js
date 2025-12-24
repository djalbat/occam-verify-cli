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
var _declaration = /*#__PURE__*/ _interop_require_default(require("../../node/declaration"));
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
var ComplexTypeDeclarationNode = /*#__PURE__*/ function(DeclarationNode) {
    _inherits(ComplexTypeDeclarationNode, DeclarationNode);
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
            key: "getNominalTypeName",
            value: function getNominalTypeName() {
                var typeNode = this.getTypeNode(), nominalTypeName = typeNode.getNominalTypeName();
                return nominalTypeName;
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
                return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(ComplexTypeDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ComplexTypeDeclarationNode;
}(_declaration.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9SVUxFX05BTUUsIFRZUEVTX1JVTEVfTkFNRSwgUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIERlY2xhcmF0aW9uTm9kZSB7XG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKTtcblxuICAgICAgICBpZiAoY29udGVudFByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgcHJlZml4ZWQgPSB0eXBlTm9kZS5pc1ByZWZpeGVkKCk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cblxuICBnZXRUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHR5cGVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFU19SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZXNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZXNOb2RlO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlTm9kZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZU5vZGVzID0gW107XG5cbiAgICBjb25zdCB0eXBlc05vZGUgPSB0aGlzLmdldFR5cGVzTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZU5vZGVzID0gdHlwZXNOb2RlLmdldFR5cGVOb2RlcygpO1xuXG4gICAgICBzdXBlclR5cGVOb2RlcyA9IHR5cGVOb2RlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU5vZGVzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeE5hbWUoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBST1BFUlRZX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gRGVjbGFyYXRpb25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWwiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRQcm92aXNpb25hbCIsIlBST1ZJU0lPTkFMIiwiaXNQcmVmaXhlZCIsInR5cGVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJwcmVmaXhlZCIsImdldFR5cGVOYW1lIiwidHlwZU5hbWUiLCJydWxlTmFtZSIsIlRZUEVfUlVMRV9OQU1FIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRUeXBlc05vZGUiLCJUWVBFU19SVUxFX05BTUUiLCJ0eXBlc05vZGUiLCJnZXRTdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGVzIiwidHlwZU5vZGVzIiwiZ2V0VHlwZU5vZGVzIiwiZ2V0VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsIlBST1BFUlRZX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIkRlY2xhcmF0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE87eUJBRUE7eUJBQ29EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpFLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxjQUFjO2dCQUVsQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsd0JBQXdCRCxVQUFVRSxjQUFjO29CQUV0RCxJQUFJRCx1QkFBdUI7d0JBQ3pCLElBQU1FLGVBQWVILFdBQ2ZJLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHFCQUFzQkYsWUFBWUcsc0JBQVc7d0JBRW5ELElBQUlELG9CQUFvQjs0QkFDdEJSLGNBQWM7NEJBRWQsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxXQUFXRixTQUFTRCxVQUFVO2dCQUVwQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCRyxXQUFXSixTQUFTRyxXQUFXO2dCQUVyQyxPQUFPQztZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1JLFdBQVdDLHlCQUFjLEVBQ3pCTixXQUFXLElBQUksQ0FBQ08saUJBQWlCLENBQUNGO2dCQUV4QyxPQUFPTDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILFdBQVdJLDBCQUFlLEVBQzFCQyxZQUFZLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNGO2dCQUV6QyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGlCQUFpQixFQUFFO2dCQUV2QixJQUFNRixZQUFZLElBQUksQ0FBQ0YsWUFBWTtnQkFFbkMsSUFBSUUsY0FBYyxNQUFNO29CQUN0QixJQUFNRyxZQUFZSCxVQUFVSSxZQUFZO29CQUV4Q0YsaUJBQWlCQyxXQUFXLEdBQUc7Z0JBQ2pDO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWYsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JlLGlCQUFpQmhCLFNBQVNlLGlCQUFpQjtnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNakIsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JpQixrQkFBa0JsQixTQUFTaUIsa0JBQWtCO2dCQUVuRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLFdBQVdlLHlDQUE4QixFQUN6Q0MsMkJBQTJCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNqQjtnQkFFekQsT0FBT2dCO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDbEIsUUFBUSxFQUFFbUIsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBdEY3SXBDLDRCQXNGMEtrQixVQUFVbUIsWUFBWUMsU0FBU0M7WUFBYTs7O1dBdEZ0TnZDO0VBQW1Dd0Msb0JBQWUifQ==