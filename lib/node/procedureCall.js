"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProcedureCallNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../node/nonTerminal"));
var _ruleNames = require("../ruleNames");
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
var ProcedureCallNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ProcedureCallNode, NonTerminalNode);
    function ProcedureCallNode() {
        _class_call_check(this, ProcedureCallNode);
        return _call_super(this, ProcedureCallNode, arguments);
    }
    _create_class(ProcedureCallNode, [
        {
            key: "getReferenceNode",
            value: function getReferenceNode() {
                var ruleName = _ruleNames.REFERENCE_RULE_NAME, referenceNode = this.getNodeByRuleName(ruleName);
                return referenceNode;
            }
        },
        {
            key: "getParameterNodes",
            value: function getParameterNodes() {
                var ruleName = _ruleNames.PARAMETER_RULE_NAME, parameterNodes = this.getNodesByRuleName(ruleName);
                return parameterNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureCallNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ProcedureCallNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgUkVGRVJFTkNFX1JVTEVfTkFNRSwgUEFSQU1FVEVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvY2VkdXJlQ2FsbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUkVGRVJFTkNFX1JVTEVfTkFNRSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlck5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFSQU1FVEVSX1JVTEVfTkFNRSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUHJvY2VkdXJlQ2FsbE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsInJ1bGVOYW1lIiwiUkVGRVJFTkNFX1JVTEVfTkFNRSIsInJlZmVyZW5jZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFBhcmFtZXRlck5vZGVzIiwiUEFSQU1FVEVSX1JVTEVfTkFNRSIsInBhcmFtZXRlck5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDhCQUFtQixFQUM5QkMsZ0JBQWdCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDhCQUFtQixFQUM5QkMsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNQO2dCQUUvQyxPQUFPTTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1IsUUFBUSxFQUFFUyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSiwwQ0FBMEMsQ0FmN0lWLG1CQWVpS0UsVUFBVVMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBZjdNYjtFQUEwQmMsb0JBQWUifQ==