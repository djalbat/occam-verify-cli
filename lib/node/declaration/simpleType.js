"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SimpleTypeDeclarationNode;
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
var SimpleTypeDeclarationNode = /*#__PURE__*/ function(DeclarationNode) {
    _inherits(SimpleTypeDeclarationNode, DeclarationNode);
    function SimpleTypeDeclarationNode() {
        _class_call_check(this, SimpleTypeDeclarationNode);
        return _call_super(this, SimpleTypeDeclarationNode, arguments);
    }
    _create_class(SimpleTypeDeclarationNode, [
        {
            key: "isPrefixed",
            value: function isPrefixed() {
                var typeNode = this.getTypeNode(), prefixed = typeNode.isPrefixed();
                return prefixed;
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
            key: "getTypePrefixName",
            value: function getTypePrefixName() {
                var typeNode = this.getTypeNode(), typePrefixName = typeNode.getTypePrefixName();
                return typePrefixName;
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
            key: "getNominalTypeName",
            value: function getNominalTypeName() {
                var typeNode = this.getTypeNode(), nominalTypeName = typeNode.getNominalTypeName();
                return nominalTypeName;
            }
        },
        {
            key: "getTypeName",
            value: function getTypeName() {
                var typeName = null;
                var typeNode = this.getTypeNode();
                if (typeNode !== null) {
                    typeName = typeNode.getTypeName();
                }
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(SimpleTypeDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return SimpleTypeDeclarationNode;
}(_declaration.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgUFJPVklTSU9OQUwgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBUWVBFX1JVTEVfTkFNRSwgVFlQRVNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgRGVjbGFyYXRpb25Ob2RlIHtcbiAgaXNQcmVmaXhlZCgpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICBwcmVmaXhlZCA9IHR5cGVOb2RlLmlzUHJlZml4ZWQoKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKTtcblxuICAgICAgICBpZiAoY29udGVudFByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOYW1lKCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZVByZWZpeE5hbWUoKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZU5vZGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVOb2RlcyA9IFtdO1xuXG4gICAgY29uc3QgdHlwZXNOb2RlID0gdGhpcy5nZXRUeXBlc05vZGUoKTtcblxuICAgIGlmICh0eXBlc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVOb2RlcyA9IHR5cGVzTm9kZS5nZXRUeXBlTm9kZXMoKTtcblxuICAgICAgc3VwZXJUeXBlTm9kZXMgPSB0eXBlTm9kZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVOb2RlcztcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmdldFR5cGVOb2RlKCk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cblxuICBnZXRUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHR5cGVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBnZXRUeXBlc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFU19SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZXNOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZXNOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gRGVjbGFyYXRpb25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cblxuIl0sIm5hbWVzIjpbIlNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJpc1ByZWZpeGVkIiwidHlwZU5vZGUiLCJnZXRUeXBlTm9kZSIsInByZWZpeGVkIiwiaXNQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWwiLCJQUk9WSVNJT05BTCIsImdldFR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRTdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGVzIiwidHlwZXNOb2RlIiwiZ2V0VHlwZXNOb2RlIiwidHlwZU5vZGVzIiwiZ2V0VHlwZU5vZGVzIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInJ1bGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsIlRZUEVTX1JVTEVfTkFNRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIkRlY2xhcmF0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE87eUJBRUE7eUJBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsV0FBV0YsU0FBU0QsVUFBVTtnQkFFcEMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxjQUFjO2dCQUVsQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsd0JBQXdCRCxVQUFVRSxjQUFjO29CQUV0RCxJQUFJRCx1QkFBdUI7d0JBQ3pCLElBQU1FLGVBQWVILFdBQ2ZJLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHFCQUFzQkYsWUFBWUcsc0JBQVc7d0JBRW5ELElBQUlELG9CQUFvQjs0QkFDdEJSLGNBQWM7NEJBRWQsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCYyxpQkFBaUJmLFNBQVNjLGlCQUFpQjtnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxpQkFBaUIsRUFBRTtnQkFFdkIsSUFBTUMsWUFBWSxJQUFJLENBQUNDLFlBQVk7Z0JBRW5DLElBQUlELGNBQWMsTUFBTTtvQkFDdEIsSUFBTUUsWUFBWUYsVUFBVUcsWUFBWTtvQkFFeENKLGlCQUFpQkcsV0FBVyxHQUFHO2dCQUNqQztnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU10QixXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQnNCLGtCQUFrQnZCLFNBQVNzQixrQkFBa0I7Z0JBRW5ELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNekIsV0FBVyxJQUFJLENBQUNDLFdBQVc7Z0JBRWpDLElBQUlELGFBQWEsTUFBTTtvQkFDckJ5QixXQUFXekIsU0FBU3dCLFdBQVc7Z0JBQ2pDO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBeEIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU15QixXQUFXQyx5QkFBYyxFQUN6QjNCLFdBQVcsSUFBSSxDQUFDNEIsaUJBQWlCLENBQUNGO2dCQUV4QyxPQUFPMUI7WUFDVDs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU8sV0FBV0csMEJBQWUsRUFDMUJYLFlBQVksSUFBSSxDQUFDVSxpQkFBaUIsQ0FBQ0Y7Z0JBRXpDLE9BQU9SO1lBQ1Q7Ozs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQXBGN0loQywyQkFvRnlLNEIsVUFBVUssWUFBWUMsU0FBU0M7WUFBYTs7O1dBcEZyTm5DO0VBQWtDb0Msb0JBQWUifQ==