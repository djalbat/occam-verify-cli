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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9SVUxFX05BTUUsIFRZUEVTX1JVTEVfTkFNRSwgUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKTtcblxuICAgICAgICBpZiAoY29udGVudFByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKTtcblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVFlQRV9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVzTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVTX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlc05vZGU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVOb2RlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlTm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHR5cGVzTm9kZSA9IHRoaXMuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlTm9kZXMgPSB0eXBlc05vZGUuZ2V0VHlwZU5vZGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZU5vZGVzID0gdHlwZU5vZGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlTm9kZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9QRVJUWV9ERUNMQVJBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiaXNQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWwiLCJQUk9WSVNJT05BTCIsImdldFR5cGVOYW1lIiwidHlwZU5vZGUiLCJnZXRUeXBlTm9kZSIsInR5cGVOYW1lIiwicnVsZU5hbWUiLCJUWVBFX1JVTEVfTkFNRSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0VHlwZXNOb2RlIiwiVFlQRVNfUlVMRV9OQU1FIiwidHlwZXNOb2RlIiwiZ2V0U3VwZXJUeXBlTm9kZXMiLCJzdXBlclR5cGVOb2RlcyIsInR5cGVOb2RlcyIsImdldFR5cGVOb2RlcyIsImdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsIlBST1BFUlRZX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE87eUJBRUE7eUJBQ29EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpFLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxjQUFjO2dCQUVsQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsd0JBQXdCRCxVQUFVRSxjQUFjO29CQUV0RCxJQUFJRCx1QkFBdUI7d0JBQ3pCLElBQU1FLGVBQWVILFdBQ2ZJLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHFCQUFzQkYsWUFBWUcsc0JBQVc7d0JBRW5ELElBQUlELG9CQUFvQjs0QkFDdEJSLGNBQWM7NEJBRWQsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxXQUFXRixTQUFTRCxXQUFXO2dCQUVyQyxPQUFPRztZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLFdBQVdDLHlCQUFjLEVBQ3pCSixXQUFXLElBQUksQ0FBQ0ssaUJBQWlCLENBQUNGO2dCQUV4QyxPQUFPSDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILFdBQVdJLDBCQUFlLEVBQzFCQyxZQUFZLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNGO2dCQUV6QyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGlCQUFpQixFQUFFO2dCQUV2QixJQUFNRixZQUFZLElBQUksQ0FBQ0YsWUFBWTtnQkFFbkMsSUFBSUUsY0FBYyxNQUFNO29CQUN0QixJQUFNRyxZQUFZSCxVQUFVSSxZQUFZO29CQUV4Q0YsaUJBQWlCQyxXQUFXLEdBQUc7Z0JBQ2pDO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVYsV0FBV1cseUNBQThCLEVBQ3pDQywyQkFBMkIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2I7Z0JBRXpELE9BQU9ZO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDZCxRQUFRLEVBQUVlLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQWpFN0k5Qiw0QkFpRTBLZ0IsVUFBVWUsWUFBWUMsU0FBU0M7WUFBYTs7O1dBakV0TmpDO0VBQW1Da0Msb0JBQWUifQ==