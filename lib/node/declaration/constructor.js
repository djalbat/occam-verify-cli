"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ConstructorDeclarationNode;
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
var ConstructorDeclarationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ConstructorDeclarationNode, NonTerminalNode);
    function ConstructorDeclarationNode() {
        _class_call_check(this, ConstructorDeclarationNode);
        return _call_super(this, ConstructorDeclarationNode, arguments);
    }
    _create_class(ConstructorDeclarationNode, [
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
            key: "getTermNode",
            value: function getTermNode() {
                var ruleName = _ruleNames.TERM_RULE_NAME, termNode = this.getNodeByRuleName(ruleName);
                return termNode;
            }
        },
        {
            key: "getTypeNode",
            value: function getTypeNode() {
                var ruleName = _ruleNames.TYPE_RULE_NAME, typeNode = this.getNodeByRuleName(ruleName);
                return typeNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorDeclarationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ConstructorDeclarationNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMTFkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgVFlQRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWxseSA9IChjb250ZW50ID09PSBQUk9WSVNJT05BTExZKTtcblxuICAgICAgICBpZiAoY29udGVudFByb3Zpc2lvbmFsbHkpIHtcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJpc1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWwiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRQcm92aXNpb25hbGx5IiwiUFJPVklTSU9OQUxMWSIsImdldFRlcm1Ob2RlIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRUeXBlTm9kZSIsIlRZUEVfUlVMRV9OQU1FIiwidHlwZU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2tFQUxPO3lCQUVFO3lCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsY0FBYztnQkFFbEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0M7b0JBQ2xCLElBQU1DLHdCQUF3QkQsVUFBVUUsY0FBYztvQkFFdEQsSUFBSUQsdUJBQXVCO3dCQUN6QixJQUFNRSxlQUFlSCxXQUNmSSxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDQyx1QkFBd0JGLFlBQVlHLHdCQUFhO3dCQUV2RCxJQUFJRCxzQkFBc0I7NEJBQ3hCUixjQUFjOzRCQUVkLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFeEMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFeEMsT0FBT007WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNQLFFBQVEsRUFBRVEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBckM3SXBCLDRCQXFDMEthLFVBQVVRLFlBQVlDLFNBQVNDO1lBQWE7OztXQXJDdE52QjtFQUFtQ3dCLG9CQUFlIn0=