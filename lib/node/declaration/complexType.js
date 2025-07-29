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
var _occamparsers = require("occam-parsers");
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
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ComplexTypeDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ComplexTypeDeclarationNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzTm9kZVR5cGVOb2RlLCBpc05vZGVUeXBlc05vZGUsIGlzTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZU5hbWUoKSB7XG4gICAgbGV0IHR5cGVOYW1lID0gbnVsbDtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUeXBlTm9kZSA9IGlzTm9kZVR5cGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUeXBlTm9kZSkge1xuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVzTm9kZSgpIHtcbiAgICBjb25zdCB0eXBlc05vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVHlwZXNOb2RlID0gaXNOb2RlVHlwZXNOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUeXBlc05vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlc05vZGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIGxldCBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSxcbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIGNvbnRlbnRQcm92aXNpb25hbCA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRQcm92aXNpb25hbCkge1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdXBlclR5cGVOb2RlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlTm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHR5cGVzTm9kZSA9IHRoaXMuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlTm9kZXMgPSB0eXBlc05vZGUuZ2V0VHlwZU5vZGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZU5vZGVzID0gdHlwZU5vZGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlTm9kZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMoKSB7XG4gICAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUgPSBpc05vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlTmFtZSIsInR5cGVOYW1lIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVR5cGVOb2RlIiwiaXNOb2RlVHlwZU5vZGUiLCJ0eXBlTm9kZSIsImdldFR5cGVzTm9kZSIsInR5cGVzTm9kZSIsImZpbmRDaGlsZE5vZGUiLCJjaGlsZE5vZGVUeXBlc05vZGUiLCJpc05vZGVUeXBlc05vZGUiLCJpc1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWwiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJnZXRTdXBlclR5cGVOb2RlcyIsInN1cGVyVHlwZU5vZGVzIiwidHlwZU5vZGVzIiwiZ2V0VHlwZU5vZGVzIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiY2hpbGROb2RlUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJpc05vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs0QkFMVzt5QkFFSjtvQkFDbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhFLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDO29CQUNsQixJQUFNQyxvQkFBb0JDLElBQUFBLG9CQUFjLEVBQUNGO29CQUV6QyxJQUFJQyxtQkFBbUI7d0JBQ3JCLElBQU1FLFdBQVdILFdBQVksR0FBRzt3QkFFaENGLFdBQVdLLFNBQVNOLFdBQVc7d0JBRS9CLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNOO29CQUNwQyxJQUFNTyxxQkFBcUJDLElBQUFBLHFCQUFlLEVBQUNSO29CQUUzQyxJQUFJTyxvQkFBb0I7d0JBQ3RCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFTixPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGNBQWM7Z0JBRWxCLElBQUksQ0FBQ1gsYUFBYSxDQUFDLFNBQUNDO29CQUNsQixJQUFNVyx3QkFBd0JYLFVBQVVZLGNBQWM7b0JBRXRELElBQUlELHVCQUF1Qjt3QkFDekIsSUFBTUUsZUFBZWIsV0FDZmMsVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MscUJBQXNCRixZQUFZRyxzQkFBVzt3QkFFbkQsSUFBSUQsb0JBQW9COzRCQUN0Qk4sY0FBYzs0QkFFZCxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsaUJBQWlCLEVBQUU7Z0JBRXZCLElBQU1kLFlBQVksSUFBSSxDQUFDRCxZQUFZO2dCQUVuQyxJQUFJQyxjQUFjLE1BQU07b0JBQ3RCLElBQU1lLFlBQVlmLFVBQVVnQixZQUFZO29CQUV4Q0YsaUJBQWlCQyxXQUFXLEdBQUc7Z0JBQ2pDO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUN4QjtvQkFDckQsSUFBTXlCLG1DQUFtQ0MsSUFBQUEsbUNBQTZCLEVBQUMxQjtvQkFFdkUsSUFBSXlCLGtDQUFrQzt3QkFDcEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw2QkFBZSxDQUFDTCwwQ0FBMEMsQ0EvRTdJL0IsNEJBK0UwS2dDLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQS9FdE5uQztFQUFtQ29DLDZCQUFlIn0=