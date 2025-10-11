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
var SimpleTypeDeclarationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SimpleTypeDeclarationNode, NonTerminalNode);
    function SimpleTypeDeclarationNode() {
        _class_call_check(this, SimpleTypeDeclarationNode);
        return _call_super(this, SimpleTypeDeclarationNode, arguments);
    }
    _create_class(SimpleTypeDeclarationNode, [
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(SimpleTypeDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return SimpleTypeDeclarationNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgUFJPVklTSU9OQUwgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBUWVBFX1JVTEVfTkFNRSwgVFlQRVNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWwgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUwpO1xuXG4gICAgICAgIGlmIChjb250ZW50UHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgaXNQcmVmaXhlZCgpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICBwcmVmaXhlZCA9IHR5cGVOb2RlLmlzUHJlZml4ZWQoKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFR5cGVOYW1lKCkge1xuICAgIGxldCB0eXBlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVFlQRV9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVzTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVTX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlc05vZGU7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4TmFtZSgpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVOb2RlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlTm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHR5cGVzTm9kZSA9IHRoaXMuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlTm9kZXMgPSB0eXBlc05vZGUuZ2V0VHlwZU5vZGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZU5vZGVzID0gdHlwZU5vZGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuXG4iXSwibmFtZXMiOlsiU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJpc1ByZWZpeGVkIiwidHlwZU5vZGUiLCJnZXRUeXBlTm9kZSIsInByZWZpeGVkIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInJ1bGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFR5cGVzTm9kZSIsIlRZUEVTX1JVTEVfTkFNRSIsInR5cGVzTm9kZSIsImdldFR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJnZXRTdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGVzIiwidHlwZU5vZGVzIiwiZ2V0VHlwZU5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztrRUFMTzt5QkFFQTt5QkFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGNBQWM7Z0JBRWxCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDO29CQUNsQixJQUFNQyx3QkFBd0JELFVBQVVFLGNBQWM7b0JBRXRELElBQUlELHVCQUF1Qjt3QkFDekIsSUFBTUUsZUFBZUgsV0FDZkksVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MscUJBQXNCRixZQUFZRyxzQkFBVzt3QkFFbkQsSUFBSUQsb0JBQW9COzRCQUN0QlIsY0FBYzs0QkFFZCxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLFdBQVdGLFNBQVNELFVBQVU7Z0JBRXBDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNSixXQUFXLElBQUksQ0FBQ0MsV0FBVztnQkFFakMsSUFBSUQsYUFBYSxNQUFNO29CQUNyQkksV0FBV0osU0FBU0csV0FBVztnQkFDakM7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSSxXQUFXQyx5QkFBYyxFQUN6Qk4sV0FBVyxJQUFJLENBQUNPLGlCQUFpQixDQUFDRjtnQkFFeEMsT0FBT0w7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxXQUFXSSwwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNILGlCQUFpQixDQUFDRjtnQkFFekMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWCxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQlcsaUJBQWlCWixTQUFTVyxpQkFBaUI7Z0JBRWpELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsaUJBQWlCLEVBQUU7Z0JBRXZCLElBQU1KLFlBQVksSUFBSSxDQUFDRixZQUFZO2dCQUVuQyxJQUFJRSxjQUFjLE1BQU07b0JBQ3RCLElBQU1LLFlBQVlMLFVBQVVNLFlBQVk7b0JBRXhDRixpQkFBaUJDLFdBQVcsR0FBRztnQkFDakM7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNaLFFBQVEsRUFBRWEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBN0U3STlCLDJCQTZFeUtrQixVQUFVYSxZQUFZQyxTQUFTQztZQUFhOzs7V0E3RXJOakM7RUFBa0NrQyxvQkFBZSJ9