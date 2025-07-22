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
                var typeName = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vLi4vbm9kZVwiO1xuXG5pbXBvcnQgeyBQUk9WSVNJT05BTCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzTm9kZVR5cGVOb2RlLCBpc05vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWUgPSBudWxsO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVR5cGVOb2RlID0gaXNOb2RlVHlwZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsOyAvLy9cblxuICAgICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlTm9kZXMoKSB7XG4gICAgY29uc3QgdHlwZU5vZGVzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKHR5cGVOb2RlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUeXBlTm9kZSA9IGlzTm9kZVR5cGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUeXBlTm9kZSkge1xuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIHR5cGVOb2Rlcy5wdXNoKHR5cGVOb2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGVOb2RlcztcbiAgICB9LCBbXSk7XG5cbiAgICB0eXBlTm9kZXMucG9wKCk7XG5cbiAgICBjb25zdCBzdXBlclR5cGVOb2RlcyA9IHR5cGVOb2RlczsgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlTm9kZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXMoKSB7XG4gICAgY29uc3QgcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSA9IGlzTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2Rlcy5wdXNoKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUeXBlTm9kZSIsImlzTm9kZVR5cGVOb2RlIiwidHlwZU5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWwiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJnZXRTdXBlclR5cGVOb2RlcyIsInR5cGVOb2RlcyIsInJlZHVjZUNoaWxkTm9kZSIsInB1c2giLCJwb3AiLCJzdXBlclR5cGVOb2RlcyIsImdldFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyIsImNoaWxkTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiaXNOb2RlUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEo7eUJBRVc7cUJBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsb0JBQW9CQyxJQUFBQSxxQkFBYyxFQUFDRjtvQkFFekMsSUFBSUMsbUJBQW1CO3dCQUNyQixJQUFNRSxXQUFXSCxXQUFZLEdBQUc7d0JBRWhDRixXQUFXSyxTQUFTTixXQUFXO3dCQUUvQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNDLGtCQUFrQixDQUFDLFNBQUNDO29CQUMzQyxJQUFNQyxlQUFlRCxnQkFDZkUsVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MscUJBQXNCRixZQUFZRyxzQkFBVyxFQUM3Q1AsY0FBY00sb0JBQW9CLEdBQUc7b0JBRTNDLE9BQU9OO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxTQUFDRCxXQUFXZDtvQkFDakQsSUFBTUMsb0JBQW9CQyxJQUFBQSxxQkFBYyxFQUFDRjtvQkFFekMsSUFBSUMsbUJBQW1CO3dCQUNyQixJQUFNRSxXQUFXSCxXQUFZLEdBQUc7d0JBRWhDYyxVQUFVRSxJQUFJLENBQUNiO29CQUNqQjtvQkFFQSxPQUFPVztnQkFDVCxHQUFHLEVBQUU7Z0JBRUxBLFVBQVVHLEdBQUc7Z0JBRWIsSUFBTUMsaUJBQWlCSixXQUFXLEdBQUc7Z0JBRXJDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ0wsZUFBZSxDQUFDLFNBQUNLLDBCQUEwQnBCO29CQUMvRSxJQUFNcUIsbUNBQW1DQyxJQUFBQSxvQ0FBNkIsRUFBQ3RCO29CQUV2RSxJQUFJcUIsa0NBQWtDO3dCQUNwQyxJQUFNRSwwQkFBMEJ2QixXQUFZLEdBQUc7d0JBRS9Db0IseUJBQXlCSixJQUFJLENBQUNPO29CQUNoQztvQkFFQSxPQUFPSDtnQkFDVCxHQUFHLEVBQUU7Z0JBRUwsT0FBT0E7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsYUFBSSxDQUFDTCwwQ0FBMEMsQ0FwRWxJNUIsNEJBb0UrSjZCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQXBFM01oQztxQkFBbUNpQyxhQUFJIn0=