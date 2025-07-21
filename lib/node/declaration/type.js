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
var TypeDeclarationNode = /*#__PURE__*/ function(Node) {
    _inherits(TypeDeclarationNode, Node);
    function TypeDeclarationNode() {
        _class_call_check(this, TypeDeclarationNode);
        return _call_super(this, TypeDeclarationNode, arguments);
    }
    _create_class(TypeDeclarationNode, [
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _node.default.fromRuleNameChildNodesOpacityAndPrecedence(TypeDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TypeDeclarationNode;
}(_wrap_native_super(_node.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlIGZyb20gXCIuLi8uLi9ub2RlXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNOb2RlVHlwZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIE5vZGUge1xuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWU7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVHlwZU5vZGUgPSBpc05vZGVUeXBlTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlVHlwZU5vZGUpIHtcbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWwgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUwpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBjb250ZW50UHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRTdXBlclR5cGVOb2RlcygpIHtcbiAgICBjb25zdCB0eXBlTm9kZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgodHlwZU5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVR5cGVOb2RlID0gaXNOb2RlVHlwZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgdHlwZU5vZGVzLnB1c2godHlwZU5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZU5vZGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHR5cGVOb2Rlcy5wb3AoKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gdHlwZU5vZGVzOyAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFR5cGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuXG4iXSwibmFtZXMiOlsiVHlwZURlY2xhcmF0aW9uTm9kZSIsImdldFR5cGVOYW1lIiwidHlwZU5hbWUiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVHlwZU5vZGUiLCJpc05vZGVUeXBlTm9kZSIsInR5cGVOb2RlIiwiaXNQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRQcm92aXNpb25hbCIsIlBST1ZJU0lPTkFMIiwiZ2V0U3VwZXJUeXBlTm9kZXMiLCJ0eXBlTm9kZXMiLCJyZWR1Y2VDaGlsZE5vZGUiLCJwdXNoIiwicG9wIiwic3VwZXJUeXBlTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKO3lCQUVXO3FCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ2xCLElBQU1DLG9CQUFvQkMsSUFBQUEscUJBQWMsRUFBQ0Y7b0JBRXpDLElBQUlDLG1CQUFtQjt3QkFDckIsSUFBTUUsV0FBV0gsV0FBWSxHQUFHO3dCQUVoQ0YsV0FBV0ssU0FBU04sV0FBVzt3QkFFL0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsZUFBZUQsZ0JBQ2ZFLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHFCQUFzQkYsWUFBWUcsc0JBQVcsRUFDN0NQLGNBQWNNLG9CQUFvQixHQUFHO29CQUUzQyxPQUFPTjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDQyxlQUFlLENBQUMsU0FBQ0QsV0FBV2Q7b0JBQ2pELElBQU1DLG9CQUFvQkMsSUFBQUEscUJBQWMsRUFBQ0Y7b0JBRXpDLElBQUlDLG1CQUFtQjt3QkFDckIsSUFBTUUsV0FBV0gsV0FBWSxHQUFHO3dCQUVoQ2MsVUFBVUUsSUFBSSxDQUFDYjtvQkFDakI7b0JBRUEsT0FBT1c7Z0JBQ1QsR0FBRyxFQUFFO2dCQUVMQSxVQUFVRyxHQUFHO2dCQUViLElBQU1DLGlCQUFpQkosV0FBVyxHQUFHO2dCQUVyQyxPQUFPSTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxhQUFJLENBQUNMLDBDQUEwQyxDQXBEbEl2QixxQkFvRHdKd0IsVUFBVUMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBcERwTTNCO3FCQUE0QjRCLGFBQUkifQ==