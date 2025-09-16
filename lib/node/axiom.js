"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AxiomNode;
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
var AxiomNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(AxiomNode, NonTerminalNode);
    function AxiomNode() {
        _class_call_check(this, AxiomNode);
        return _call_super(this, AxiomNode, arguments);
    }
    _create_class(AxiomNode, [
        {
            key: "getAxiomBodyNode",
            value: function getAxiomBodyNode() {
                var ruleName = _ruleNames.AXIOM_BODY_RULE_NAME, axiomBodyNode = this.getNodeByRuleName(ruleName);
                return axiomBodyNode;
            }
        },
        {
            key: "getAxiomHeaderNode",
            value: function getAxiomHeaderNode() {
                var ruleName = _ruleNames.AXIOM_HEADER_RULE_NAME, axiomHeaderNode = this.getNodeByRuleName(ruleName);
                return axiomHeaderNode;
            }
        },
        {
            key: "getSignatureNode",
            value: function getSignatureNode() {
                var axiomHeaderNode = this.getAxiomHeaderNode(), signatureNode = axiomHeaderNode.getSignatureNode();
                return signatureNode;
            }
        },
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var axiomHeaderNode = this.getAxiomHeaderNode(), labelNodes = axiomHeaderNode.getLabelNodes();
                return labelNodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(AxiomNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return AxiomNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IEFYSU9NX0JPRFlfUlVMRV9OQU1FLCBBWElPTV9IRUFERVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRBeGlvbUJvZHlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQVhJT01fQk9EWV9SVUxFX05BTUUsXG4gICAgICAgICAgYXhpb21Cb2R5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGF4aW9tQm9keU5vZGU7XG4gIH1cblxuXG4gIGdldEF4aW9tSGVhZGVyTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEFYSU9NX0hFQURFUl9SVUxFX05BTUUsXG4gICAgICAgICAgYXhpb21IZWFkZXJOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gYXhpb21IZWFkZXJOb2RlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlTm9kZSgpIHtcbiAgICBjb25zdCBheGlvbUhlYWRlck5vZGUgPSB0aGlzLmdldEF4aW9tSGVhZGVyTm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBheGlvbUhlYWRlck5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU5vZGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGVzKCkge1xuICAgIGNvbnN0IGF4aW9tSGVhZGVyTm9kZSA9IHRoaXMuZ2V0QXhpb21IZWFkZXJOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGF4aW9tSGVhZGVyTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQXhpb21Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJBeGlvbU5vZGUiLCJnZXRBeGlvbUJvZHlOb2RlIiwicnVsZU5hbWUiLCJBWElPTV9CT0RZX1JVTEVfTkFNRSIsImF4aW9tQm9keU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEF4aW9tSGVhZGVyTm9kZSIsIkFYSU9NX0hFQURFUl9SVUxFX05BTUUiLCJheGlvbUhlYWRlck5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlTm9kZSIsImdldExhYmVsTm9kZXMiLCJsYWJlbE5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLCtCQUFvQixFQUMvQkMsZ0JBQWdCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFHQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLGlDQUFzQixFQUNqQ0Msa0JBQWtCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUUvQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELGtCQUFrQixJQUFJLENBQUNGLGtCQUFrQixJQUN6Q0ksZ0JBQWdCRixnQkFBZ0JDLGdCQUFnQjtnQkFFdEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxrQkFBa0IsSUFBSSxDQUFDRixrQkFBa0IsSUFDekNNLGFBQWFKLGdCQUFnQkcsYUFBYTtnQkFFaEQsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNYLFFBQVEsRUFBRVksVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBOUI3SWIsV0E4QnlKRSxVQUFVWSxZQUFZQyxTQUFTQztZQUFhOzs7V0E5QnJNaEI7RUFBa0JpQixvQkFBZSJ9