"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrameNode;
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
var FrameNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(FrameNode, NonTerminalNode);
    function FrameNode() {
        _class_call_check(this, FrameNode);
        return _call_super(this, FrameNode, arguments);
    }
    _create_class(FrameNode, [
        {
            key: "getDeclarationNodes",
            value: function getDeclarationNodes() {
                var ruleName = _ruleNames.DECLARATION_RULE_NAME, declarationNodes = this.getNodesByRuleName(ruleName);
                return declarationNodes;
            }
        },
        {
            key: "getMetavariableNodes",
            value: function getMetavariableNodes() {
                var ruleName = _ruleNames.METAVARIABLE_RULE_NAME, metavariableNodes = this.getNodesByRuleName(ruleName);
                return metavariableNodes;
            }
        },
        {
            key: "getSingularDeclarationNode",
            value: function getSingularDeclarationNode() {
                var ruleName = _ruleNames.DECLARATION_RULE_NAME, singularDeclarationNode = this.getSingularTNodeByRuleName(ruleName);
                return singularDeclarationNode;
            }
        },
        {
            key: "getSingularMetavariableNode",
            value: function getSingularMetavariableNode() {
                var singularMetavariableNode = null;
                var singularDeclarationNode = this.getSingularDeclarationNode();
                if (singularDeclarationNode !== null) {
                    var metavariableNode = singularDeclarationNode.getMetavariableNode();
                    singularMetavariableNode = metavariableNode; ///
                }
                return singularMetavariableNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return FrameNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IERFQ0xBUkFUSU9OX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0RGVjbGFyYXRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFQ0xBUkFUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBnZXRTaW5ndWxhckRlY2xhcmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERFQ0xBUkFUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaW5ndWxhckRlY2xhcmF0aW9uTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJUTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyRGVjbGFyYXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJEZWNsYXJhdGlvbk5vZGUgPSB0aGlzLmdldFNpbmd1bGFyRGVjbGFyYXRpb25Ob2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJEZWNsYXJhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhckRlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShGcmFtZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkZyYW1lTm9kZSIsImdldERlY2xhcmF0aW9uTm9kZXMiLCJydWxlTmFtZSIsIkRFQ0xBUkFUSU9OX1JVTEVfTkFNRSIsImRlY2xhcmF0aW9uTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsIk1FVEFWQVJJQUJMRV9SVUxFX05BTUUiLCJtZXRhdmFyaWFibGVOb2RlcyIsImdldFNpbmd1bGFyRGVjbGFyYXRpb25Ob2RlIiwic2luZ3VsYXJEZWNsYXJhdGlvbk5vZGUiLCJnZXRTaW5ndWxhclROb2RlQnlSdWxlTmFtZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBQSxBQUFNQSwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLGdDQUFxQixFQUNoQ0MsbUJBQW1CLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUVqRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLGlDQUFzQixFQUNqQ0Msb0JBQW9CLElBQUksQ0FBQ0gsa0JBQWtCLENBQUNIO2dCQUVsRCxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVdDLGdDQUFxQixFQUNoQ08sMEJBQTBCLElBQUksQ0FBQ0MsMEJBQTBCLENBQUNUO2dCQUVoRSxPQUFPUTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLDJCQUEyQjtnQkFFL0IsSUFBTUgsMEJBQTBCLElBQUksQ0FBQ0QsMEJBQTBCO2dCQUUvRCxJQUFJQyw0QkFBNEIsTUFBTTtvQkFDcEMsSUFBTUksbUJBQW1CSix3QkFBd0JLLG1CQUFtQjtvQkFFcEVGLDJCQUEyQkMsa0JBQW1CLEdBQUc7Z0JBQ25EO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDZCxRQUFRLEVBQUVlLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG9CQUFlLENBQUNKLDBDQUEwQyxDQXBDN0loQixXQW9DeUpFLFVBQVVlLFlBQVlDLFNBQVNDO1lBQWE7OztXQXBDck1uQjtFQUFrQm9CLG9CQUFlIn0=