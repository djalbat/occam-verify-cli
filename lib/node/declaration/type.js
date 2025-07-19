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
            key: "getTypeName",
            value: function getTypeName() {
                var typeName;
                this.someChildNode(function(childNode) {
                    var childNodeTypeNode = isNodeTypeNode(childNode);
                    if (childNodeTypeNode) {
                        var typeNode = childNode; ///
                        typeName = typeNode.getName();
                        return true;
                    }
                });
                return typeName;
            }
        },
        {
            key: "getSuperTypeNodes",
            value: function getSuperTypeNodes() {
                var typeNodes = this.reduceChildNode(function(typeNodes, childNode) {
                    var childNodeTypeNode = isNodeTypeNode(childNode);
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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _node.default.fromRuleNameChildNodesAndOpacity(TypeDeclarationNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return TypeDeclarationNode;
}(_wrap_native_super(_node.default));
function isNodeTypeNode(node) {
    var nodeTypeNode = false;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), ruleNameTypeRuleName = ruleName === _ruleNames.TYPE_RULE_NAME;
        if (ruleNameTypeRuleName) {
            nodeTypeNode = true;
        }
    }
    return nodeTypeNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2RlIGZyb20gXCIuLi8uLi9ub2RlXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVEZWNsYXJhdGlvbk5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gY29udGVudFByb3Zpc2lvbmFsOyAvLy9cblxuICAgICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZU5hbWUoKSB7XG4gICAgbGV0IHR5cGVOYW1lO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVR5cGVOb2RlID0gaXNOb2RlVHlwZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROYW1lKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVOb2RlcygpIHtcbiAgICBjb25zdCB0eXBlTm9kZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgodHlwZU5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVR5cGVOb2RlID0gaXNOb2RlVHlwZU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVR5cGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgICAgdHlwZU5vZGVzLnB1c2godHlwZU5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZU5vZGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHR5cGVOb2Rlcy5wb3AoKTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZU5vZGVzID0gdHlwZU5vZGVzOyAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShUeXBlRGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gaXNOb2RlVHlwZU5vZGUobm9kZSkge1xuICBsZXQgbm9kZVR5cGVOb2RlID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWVUeXBlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFRZUEVfUlVMRV9OQU1FKTtcblxuICAgIGlmIChydWxlTmFtZVR5cGVSdWxlTmFtZSkge1xuICAgICAgbm9kZVR5cGVOb2RlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZVR5cGVOb2RlO1xufVxuIl0sIm5hbWVzIjpbIlR5cGVEZWNsYXJhdGlvbk5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWwiLCJmcm9tRmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJnZXRUeXBlTmFtZSIsInR5cGVOYW1lIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVR5cGVOb2RlIiwiaXNOb2RlVHlwZU5vZGUiLCJ0eXBlTm9kZSIsImdldE5hbWUiLCJnZXRTdXBlclR5cGVOb2RlcyIsInR5cGVOb2RlcyIsInJlZHVjZUNoaWxkTm9kZSIsInB1c2giLCJwb3AiLCJzdXBlclR5cGVOb2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk5vZGUiLCJub2RlIiwibm9kZVR5cGVOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZVR5cGVSdWxlTmFtZSIsIlRZUEVfUlVMRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMSjt5QkFFVzt5QkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsZUFBZUQsZ0JBQ2ZFLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHFCQUFzQkYsWUFBWUcsc0JBQVcsRUFDN0NQLGNBQWNNLG9CQUFvQixHQUFHO29CQUUzQyxPQUFPTjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDO29CQUNsQixJQUFNQyxvQkFBb0JDLGVBQWVGO29CQUV6QyxJQUFJQyxtQkFBbUI7d0JBQ3JCLElBQU1FLFdBQVdILFdBQVksR0FBRzt3QkFFaENGLFdBQVdLLFNBQVNDLE9BQU87d0JBRTNCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsZUFBZSxDQUFDLFNBQUNELFdBQVdOO29CQUNqRCxJQUFNQyxvQkFBb0JDLGVBQWVGO29CQUV6QyxJQUFJQyxtQkFBbUI7d0JBQ3JCLElBQU1FLFdBQVdILFdBQVksR0FBRzt3QkFFaENNLFVBQVVFLElBQUksQ0FBQ0w7b0JBQ2pCO29CQUVBLE9BQU9HO2dCQUNULEdBQUcsRUFBRTtnQkFFTEEsVUFBVUcsR0FBRztnQkFFYixJQUFNQyxpQkFBaUJKLFdBQVcsR0FBRztnQkFFckMsT0FBT0k7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGFBQUksQ0FBQ0osZ0NBQWdDLENBcERsR3hCLHFCQW9Ed0h5QixVQUFVQyxZQUFZQztZQUFVOzs7V0FwRHhKM0I7cUJBQTRCNEIsYUFBSTtBQXVEckQsU0FBU2IsZUFBZWMsSUFBSTtJQUMxQixJQUFJQyxlQUFlO0lBRW5CLElBQU1DLHNCQUFzQkYsS0FBS0csaUJBQWlCO0lBRWxELElBQUlELHFCQUFxQjtRQUN2QixJQUFNRSxrQkFBa0JKLE1BQ2xCSixXQUFXUSxnQkFBZ0JDLFdBQVcsSUFDdENDLHVCQUF3QlYsYUFBYVcseUJBQWM7UUFFekQsSUFBSUQsc0JBQXNCO1lBQ3hCTCxlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=