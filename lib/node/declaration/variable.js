"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableDeclarationNode;
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
var VariableDeclarationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(VariableDeclarationNode, NonTerminalNode);
    function VariableDeclarationNode() {
        _class_call_check(this, VariableDeclarationNode);
        return _call_super(this, VariableDeclarationNode, arguments);
    }
    _create_class(VariableDeclarationNode, [
        {
            key: "isProvisional",
            value: function isProvisional() {
                var provisional = false;
                this.someChildNode(function(childNode) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, content = terminalNode.getContent(), contentProvisionally = content === _constants.PROVISIONALLY;
                        if (contentProvisionally) {
                            provisional = true;
                            return true;
                        }
                    }
                });
                return provisional;
            }
        },
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
            key: "getVariableNode",
            value: function getVariableNode() {
                var variableNode = this.findChildNode(function(childNode) {
                    var childNodeVariableNode = (0, _node.isNodeVariableNode)(childNode);
                    if (childNodeVariableNode) {
                        return true;
                    }
                }) || null;
                return variableNode;
            }
        },
        {
            key: "getVariableName",
            value: function getVariableName() {
                var variableNode = this.getVariableNode(), variableName = variableNode.getVariableName();
                return variableName;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(VariableDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return VariableDeclarationNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMTFkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc05vZGVUeXBlTm9kZSwgaXNOb2RlVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsbHkgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUxMWSk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRQcm92aXNpb25hbGx5KSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVR5cGVOb2RlID0gaXNOb2RlVHlwZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVZhcmlhYmxlTm9kZSA9IGlzTm9kZVZhcmlhYmxlTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiaXNQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWxseSIsIlBST1ZJU0lPTkFMTFkiLCJnZXRUeXBlTm9kZSIsInR5cGVOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZVR5cGVOb2RlIiwiaXNOb2RlVHlwZU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJjaGlsZE5vZGVWYXJpYWJsZU5vZGUiLCJpc05vZGVWYXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE87eUJBRUU7b0JBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxjQUFjO2dCQUVsQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsd0JBQXdCRCxVQUFVRSxjQUFjO29CQUV0RCxJQUFJRCx1QkFBdUI7d0JBQ3pCLElBQU1FLGVBQWVILFdBQ2ZJLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHVCQUF3QkYsWUFBWUcsd0JBQWE7d0JBRXZELElBQUlELHNCQUFzQjs0QkFDeEJSLGNBQWM7NEJBRWQsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ1Y7b0JBQ25DLElBQU1XLG9CQUFvQkMsSUFBQUEsb0JBQWMsRUFBQ1o7b0JBRXpDLElBQUlXLG1CQUFtQjt3QkFDckIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLE9BQU9GO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNKLGFBQWEsQ0FBQyxTQUFDVjtvQkFDdkMsSUFBTWUsd0JBQXdCQyxJQUFBQSx3QkFBa0IsRUFBQ2hCO29CQUVqRCxJQUFJZSx1QkFBdUI7d0JBQ3pCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILGVBQWUsSUFBSSxDQUFDRCxlQUFlLElBQ25DSyxlQUFlSixhQUFhRyxlQUFlO2dCQUVqRCxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDTCwwQ0FBMEMsQ0F0RDdJdkIseUJBc0R1S3dCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQXREbk4zQjtFQUFnQzRCLG9CQUFlIn0=