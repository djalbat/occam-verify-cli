"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetatheoremNode;
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
var MetatheoremNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MetatheoremNode, NonTerminalNode);
    function MetatheoremNode() {
        _class_call_check(this, MetatheoremNode);
        return _call_super(this, MetatheoremNode, arguments);
    }
    _create_class(MetatheoremNode, [
        {
            key: "getMetatheoremBodyNode",
            value: function getMetatheoremBodyNode() {
                var ruleName = _ruleNames.METATHEOREM_BODY_RULE_NAME, metatheoremBodyNode = this.getNodeByRuleName(ruleName);
                return metatheoremBodyNode;
            }
        },
        {
            key: "getMetatheoremHeaderNode",
            value: function getMetatheoremHeaderNode() {
                var ruleName = _ruleNames.METATHEOREM_HEADER_RULE_NAME, metatheoremHeaderNode = this.getNodeByRuleName(ruleName);
                return metatheoremHeaderNode;
            }
        },
        {
            key: "getLabelNode",
            value: function getLabelNode() {
                var metatheoremHeaderNode = this.getMetatheoremHeaderNode(), labelNode = metatheoremHeaderNode.getLabelNode();
                return labelNode;
            }
        },
        {
            key: "getSuppositionNodes",
            value: function getSuppositionNodes() {
                var metatheoremBodyNode = this.getMetatheoremBodyNode(), suppositionNodes = metatheoremBodyNode.getSuppositionNodes();
                return suppositionNodes;
            }
        },
        {
            key: "getConclusionNode",
            value: function getConclusionNode() {
                var metatheoremBodyNode = this.getMetatheoremBodyNode(), conclusionNode = metatheoremBodyNode.getConclusionNode();
                return conclusionNode;
            }
        },
        {
            key: "getProofNode",
            value: function getProofNode() {
                var metatheoremBodyNode = this.getMetatheoremBodyNode(), proofNode = metatheoremBodyNode.getProofNode();
                return proofNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(MetatheoremNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return MetatheoremNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ldGF0aGVvcmVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IE1FVEFUSEVPUkVNX0JPRFlfUlVMRV9OQU1FLCBNRVRBVEhFT1JFTV9IRUFERVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhdGhlb3JlbU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRNZXRhdGhlb3JlbUJvZHlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQVRIRU9SRU1fQk9EWV9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXRoZW9yZW1Cb2R5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtQm9keU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbUhlYWRlck5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBVEhFT1JFTV9IRUFERVJfUlVMRV9OQU1FLFxuICAgICAgICAgIG1ldGF0aGVvcmVtSGVhZGVyTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtSGVhZGVyTm9kZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUhlYWRlck5vZGUgPSB0aGlzLmdldE1ldGF0aGVvcmVtSGVhZGVyTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IG1ldGF0aGVvcmVtSGVhZGVyTm9kZS5nZXRMYWJlbE5vZGUoKTtcblxuICAgIHJldHVybiBsYWJlbE5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtQm9keU5vZGUgPSB0aGlzLmdldE1ldGF0aGVvcmVtQm9keU5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gbWV0YXRoZW9yZW1Cb2R5Tm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb25Ob2RlKCkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtQm9keU5vZGUgPSB0aGlzLmdldE1ldGF0aGVvcmVtQm9keU5vZGUoKSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IG1ldGF0aGVvcmVtQm9keU5vZGUuZ2V0Q29uY2x1c2lvbk5vZGUoKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uTm9kZTtcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbUJvZHlOb2RlID0gdGhpcy5nZXRNZXRhdGhlb3JlbUJvZHlOb2RlKCksXG4gICAgICAgICAgcHJvb2ZOb2RlID0gbWV0YXRoZW9yZW1Cb2R5Tm9kZS5nZXRQcm9vZk5vZGUoKTtcblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKE1ldGF0aGVvcmVtTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTWV0YXRoZW9yZW1Ob2RlIiwiZ2V0TWV0YXRoZW9yZW1Cb2R5Tm9kZSIsInJ1bGVOYW1lIiwiTUVUQVRIRU9SRU1fQk9EWV9SVUxFX05BTUUiLCJtZXRhdGhlb3JlbUJvZHlOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRNZXRhdGhlb3JlbUhlYWRlck5vZGUiLCJNRVRBVEhFT1JFTV9IRUFERVJfUlVMRV9OQU1FIiwibWV0YXRoZW9yZW1IZWFkZXJOb2RlIiwiZ2V0TGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRDb25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Ob2RlIiwiZ2V0UHJvb2ZOb2RlIiwicHJvb2ZOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKTzt5QkFFNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUQsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHFDQUEwQixFQUNyQ0Msc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUVuRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLHVDQUE0QixFQUN2Q0Msd0JBQXdCLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUVyRCxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELHdCQUF3QixJQUFJLENBQUNGLHdCQUF3QixJQUNyREksWUFBWUYsc0JBQXNCQyxZQUFZO2dCQUVwRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLHNCQUFzQixJQUFJLENBQUNILHNCQUFzQixJQUNqRFcsbUJBQW1CUixvQkFBb0JPLG1CQUFtQjtnQkFFaEUsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxzQkFBc0IsSUFBSSxDQUFDSCxzQkFBc0IsSUFDakRhLGlCQUFpQlYsb0JBQW9CUyxpQkFBaUI7Z0JBRTVELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVgsc0JBQXNCLElBQUksQ0FBQ0gsc0JBQXNCLElBQ2pEZSxZQUFZWixvQkFBb0JXLFlBQVk7Z0JBRWxELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDZixRQUFRLEVBQUVnQixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSiwwQ0FBMEMsQ0EzQzdJakIsaUJBMkMrSkUsVUFBVWdCLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNDM01wQjtFQUF3QnFCLG9CQUFlIn0=