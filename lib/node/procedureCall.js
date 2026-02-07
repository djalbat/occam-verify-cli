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
var _occamlanguages = require("occam-languages");
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
            key: "getProcedureName",
            value: function getProcedureName() {
                var procedureReferenceNode = this.getProcedureReferenceNode(), procedureName = procedureReferenceNode.getProcedureName();
                return procedureName;
            }
        },
        {
            key: "getParameterNodes",
            value: function getParameterNodes() {
                var ruleName = _ruleNames.PARAMETER_RULE_NAME, parameterNodes = this.getNodesByRuleName(ruleName);
                return parameterNodes;
            }
        },
        {
            key: "getProcedureReferenceNode",
            value: function getProcedureReferenceNode() {
                var ruleName = _ruleNames.PROCEDURE_REFERENCE_RULE_NAME, procedureReferenceNode = this.getNodeByRuleName(ruleName);
                return procedureReferenceNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureCallNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ProcedureCallNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgUEFSQU1FVEVSX1JVTEVfTkFNRSwgUFJPQ0VEVVJFX1JFRkVSRU5DRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2NlZHVyZUNhbGxOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gdGhpcy5nZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgICAgcHJvY2VkdXJlTmFtZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUuZ2V0UHJvY2VkdXJlTmFtZSgpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZU5hbWU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBBUkFNRVRFUl9SVUxFX05BTUUsXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTm9kZXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPQ0VEVVJFX1JFRkVSRU5DRV9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFByb2NlZHVyZUNhbGxOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9jZWR1cmVDYWxsTm9kZSIsImdldFByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInByb2NlZHVyZU5hbWUiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsInJ1bGVOYW1lIiwiUEFSQU1FVEVSX1JVTEVfTkFNRSIsInBhcmFtZXRlck5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiUFJPQ0VEVVJFX1JFRkVSRU5DRV9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7OEJBSlc7eUJBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMseUJBQXlCLElBQUksQ0FBQ0MseUJBQXlCLElBQ3ZEQyxnQkFBZ0JGLHVCQUF1QkQsZ0JBQWdCO2dCQUU3RCxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDhCQUFtQixFQUM5QkMsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUUvQyxPQUFPRTtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1HLFdBQVdJLHdDQUE2QixFQUN4Q1IseUJBQXlCLElBQUksQ0FBQ1MsaUJBQWlCLENBQUNMO2dCQUV0RCxPQUFPSjtZQUNUOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ04sUUFBUSxFQUFFTyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQywrQkFBZSxDQUFDSiwwQ0FBMEMsQ0F0QjdJWixtQkFzQmlLTSxVQUFVTyxZQUFZQyxTQUFTQztZQUFhOzs7V0F0QjdNZjtFQUEwQmdCLCtCQUFlIn0=