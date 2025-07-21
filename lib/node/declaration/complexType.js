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
var _node = /*#__PURE__*/ _interop_require_default(require("../../node"));
var _constants = require("../../constants");
var _node1 = require("../../utilities/node");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ComplexTypeDeclarationNode = /*#__PURE__*/ function(Node) {
    _inherits(ComplexTypeDeclarationNode, Node);
    function ComplexTypeDeclarationNode() {
        _class_call_check(this, ComplexTypeDeclarationNode);
        return _call_super(this, ComplexTypeDeclarationNode, arguments);
    }
    _create_class(ComplexTypeDeclarationNode, [
        {
            key: "getTypeName",
            value: function getTypeName() {
                var typeName;
                this.someChildNode(function(childNode) {
                    var childNodeTypeNode = (0, _node1.isNodeTypeNode)(childNode);
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
            key: "isProvisional",
            value: function isProvisional() {
                var provisional = this.fromFirstChildNode(function(firstChildNode) {
                    var terminalNode = firstChildNode, content = terminalNode.getContent(), contentProvisional = content === _constants.PROVISIONAL, provisional = contentProvisional; ///
                    return provisional;
                });
                return provisional;
            }
        },
        {
            key: "getSuperTypeNodes",
            value: function getSuperTypeNodes() {
                var typeNodes = this.reduceChildNode(function(typeNodes, childNode) {
                    var childNodeTypeNode = (0, _node1.isNodeTypeNode)(childNode);
                    if (childNodeTypeNode) {
                        var typeNode = childNode; ///
                        typeNodes.push(typeNode);
                    }
                    return typeNodes;
                }, []);
                typeNodes.pop();
                var superTypeNodes = typeNodes; ///
                return superTypeNodes;
            }
        },
        {
            key: "getPropertyDeclarationNodes",
            value: function getPropertyDeclarationNodes() {
                var propertyDeclarationNodes = this.reduceChildNode(function(propertyDeclarationNodes, childNode) {
                    var childNodePropertyDeclarationNode = (0, _node1.isNodePropertyDeclarationNode)(childNode);
                    if (childNodePropertyDeclarationNode) {
                        var propertyDeclarationNode = childNode; ///
                        propertyDeclarationNodes.push(propertyDeclarationNode);
                    }
                    return propertyDeclarationNodes;
                }, []);
                return propertyDeclarationNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _node.default.fromRuleNameChildNodesOpacityAndPrecedence(ComplexTypeDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ComplexTypeDeclarationNode;
}(_wrap_native_super(_node.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vbm9kZVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzTm9kZVR5cGVOb2RlLCBpc05vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWU7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVHlwZU5vZGUgPSBpc05vZGVUeXBlTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVHlwZU5vZGUpIHtcbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWwgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUwpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBjb250ZW50UHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdXBlclR5cGVOb2RlcygpIHtcbiAgICBjb25zdCB0eXBlTm9kZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgodHlwZU5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVR5cGVOb2RlID0gaXNOb2RlVHlwZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgdHlwZU5vZGVzLnB1c2godHlwZU5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZU5vZGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHR5cGVOb2Rlcy5wb3AoKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gdHlwZU5vZGVzOyAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVOb2RlcztcbiAgfVxuXG4gIGdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgocHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlID0gaXNOb2RlUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzLnB1c2gocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJnZXRUeXBlTmFtZSIsInR5cGVOYW1lIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVR5cGVOb2RlIiwiaXNOb2RlVHlwZU5vZGUiLCJ0eXBlTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWwiLCJQUk9WSVNJT05BTCIsImdldFN1cGVyVHlwZU5vZGVzIiwidHlwZU5vZGVzIiwicmVkdWNlQ2hpbGROb2RlIiwicHVzaCIsInBvcCIsInN1cGVyVHlwZU5vZGVzIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiY2hpbGROb2RlUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJpc05vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMSjt5QkFFVztxQkFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsb0JBQW9CQyxJQUFBQSxxQkFBYyxFQUFDRjtvQkFFekMsSUFBSUMsbUJBQW1CO3dCQUNyQixJQUFNRSxXQUFXSCxXQUFZLEdBQUc7d0JBRWhDRixXQUFXSyxTQUFTTixXQUFXO3dCQUUvQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUMzQyxJQUFNQyxlQUFlRCxnQkFDZkUsVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MscUJBQXNCRixZQUFZRyxzQkFBVyxFQUM3Q1AsY0FBY00sb0JBQW9CLEdBQUc7b0JBRTNDLE9BQU9OO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDRCxXQUFXZDtvQkFDakQsSUFBTUMsb0JBQW9CQyxJQUFBQSxxQkFBYyxFQUFDRjtvQkFFekMsSUFBSUMsbUJBQW1CO3dCQUNyQixJQUFNRSxXQUFXSCxXQUFZLEdBQUc7d0JBRWhDYyxVQUFVRSxJQUFJLENBQUNiO29CQUNqQjtvQkFFQSxPQUFPVztnQkFDVCxHQUFHLEVBQUU7Z0JBRUxBLFVBQVVHLEdBQUc7Z0JBRWIsSUFBTUMsaUJBQWlCSixXQUFXLEdBQUc7Z0JBRXJDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ0wsZUFBZSxDQUFDLFNBQUNLLDBCQUEwQnBCO29CQUMvRSxJQUFNcUIsbUNBQW1DQyxJQUFBQSxvQ0FBNkIsRUFBQ3RCO29CQUV2RSxJQUFJcUIsa0NBQWtDO3dCQUNwQyxJQUFNRSwwQkFBMEJ2QixXQUFZLEdBQUc7d0JBRS9Db0IseUJBQXlCSixJQUFJLENBQUNPO29CQUNoQztvQkFFQSxPQUFPSDtnQkFDVCxHQUFHLEVBQUU7Z0JBRUwsT0FBT0E7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsYUFBSSxDQUFDTCwwQ0FBMEMsQ0FwRWxJNUIsNEJBb0UrSjZCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQXBFM01oQztxQkFBbUNpQyxhQUFJIn0=