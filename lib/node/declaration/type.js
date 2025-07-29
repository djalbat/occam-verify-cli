"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypeDeclarationNode;
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
var TypeDeclarationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TypeDeclarationNode, NonTerminalNode);
    function TypeDeclarationNode() {
        _class_call_check(this, TypeDeclarationNode);
        return _call_super(this, TypeDeclarationNode, arguments);
    }
    _create_class(TypeDeclarationNode, [
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TypeDeclarationNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNOb2RlVHlwZU5vZGUsIGlzTm9kZVR5cGVzTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZU5hbWUoKSB7XG4gICAgbGV0IHR5cGVOYW1lID0gbnVsbDtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUeXBlTm9kZSA9IGlzTm9kZVR5cGVOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUeXBlTm9kZSkge1xuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVzTm9kZSgpIHtcbiAgICBjb25zdCB0eXBlc05vZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVHlwZXNOb2RlID0gaXNOb2RlVHlwZXNOb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUeXBlc05vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlc05vZGU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIGxldCBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSxcbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIGNvbnRlbnRQcm92aXNpb25hbCA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRQcm92aXNpb25hbCkge1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdXBlclR5cGVOb2RlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlTm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHR5cGVzTm9kZSA9IHRoaXMuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlTm9kZXMgPSB0eXBlc05vZGUuZ2V0VHlwZU5vZGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZU5vZGVzID0gdHlwZU5vZGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFR5cGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuXG4iXSwibmFtZXMiOlsiVHlwZURlY2xhcmF0aW9uTm9kZSIsImdldFR5cGVOYW1lIiwidHlwZU5hbWUiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVHlwZU5vZGUiLCJpc05vZGVUeXBlTm9kZSIsInR5cGVOb2RlIiwiZ2V0VHlwZXNOb2RlIiwidHlwZXNOb2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZVR5cGVzTm9kZSIsImlzTm9kZVR5cGVzTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbCIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWwiLCJQUk9WSVNJT05BTCIsImdldFN1cGVyVHlwZU5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJ0eXBlTm9kZXMiLCJnZXRUeXBlTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NEJBTFc7eUJBRUo7b0JBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFBLEFBQU1BLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsb0JBQW9CQyxJQUFBQSxvQkFBYyxFQUFDRjtvQkFFekMsSUFBSUMsbUJBQW1CO3dCQUNyQixJQUFNRSxXQUFXSCxXQUFZLEdBQUc7d0JBRWhDRixXQUFXSyxTQUFTTixXQUFXO3dCQUUvQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDTjtvQkFDcEMsSUFBTU8scUJBQXFCQyxJQUFBQSxxQkFBZSxFQUFDUjtvQkFFM0MsSUFBSU8sb0JBQW9CO3dCQUN0QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxjQUFjO2dCQUVsQixJQUFJLENBQUNYLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTVcsd0JBQXdCWCxVQUFVWSxjQUFjO29CQUV0RCxJQUFJRCx1QkFBdUI7d0JBQ3pCLElBQU1FLGVBQWViLFdBQ2ZjLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHFCQUFzQkYsWUFBWUcsc0JBQVc7d0JBRW5ELElBQUlELG9CQUFvQjs0QkFDdEJOLGNBQWM7NEJBRWQsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGlCQUFpQixFQUFFO2dCQUV2QixJQUFNZCxZQUFZLElBQUksQ0FBQ0QsWUFBWTtnQkFFbkMsSUFBSUMsY0FBYyxNQUFNO29CQUN0QixJQUFNZSxZQUFZZixVQUFVZ0IsWUFBWTtvQkFFeENGLGlCQUFpQkMsV0FBVyxHQUFHO2dCQUNqQztnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw2QkFBZSxDQUFDTCwwQ0FBMEMsQ0FuRTdJMUIscUJBbUVtSzJCLFVBQVVDLFlBQVlDLFNBQVNDO1lBQWE7OztXQW5FL005QjtFQUE0QitCLDZCQUFlIn0=