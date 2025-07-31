"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinedAssertionNode;
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
var DefinedAssertionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinedAssertionNode, NonTerminalNode);
    function DefinedAssertionNode() {
        _class_call_check(this, DefinedAssertionNode);
        return _call_super(this, DefinedAssertionNode, arguments);
    }
    _create_class(DefinedAssertionNode, [
        {
            key: "isNegated",
            value: function isNegated() {
                var negated = false;
                this.someChildNode(function(childNode) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, content = terminalNode.getContent(), contentUndefined = content === _constants.UNDEFINED;
                        if (contentUndefined) {
                            negated = true;
                            return true;
                        }
                    }
                });
                return negated;
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
            key: "getFrameNode",
            value: function getFrameNode() {
                var ruleName = _ruleNames.FRAME_RULE_NAME, frameNode = this.getNodeByRuleName(ruleName);
                return frameNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(DefinedAssertionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return DefinedAssertionNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEZSQU1FX1JVTEVfTkFNRSwgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluZWRBc3NlcnRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNOZWdhdGVkKCkge1xuICAgIGxldCBuZWdhdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIGNvbnRlbnRVbmRlZmluZWQgPSAoY29udGVudCA9PT0gVU5ERUZJTkVEKTtcblxuICAgICAgICBpZiAoY29udGVudFVuZGVmaW5lZCkge1xuICAgICAgICAgIG5lZ2F0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRGVmaW5lZEFzc2VydGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlZmluZWRBc3NlcnRpb25Ob2RlIiwiaXNOZWdhdGVkIiwibmVnYXRlZCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFVuZGVmaW5lZCIsIlVOREVGSU5FRCIsImdldFRlcm1Ob2RlIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRGcmFtZU5vZGUiLCJGUkFNRV9SVUxFX05BTUUiLCJmcmFtZU5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2tFQUxPO3lCQUVGO3lCQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsVUFBVTtnQkFFZCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsd0JBQXdCRCxVQUFVRSxjQUFjO29CQUV0RCxJQUFJRCx1QkFBdUI7d0JBQ3pCLElBQU1FLGVBQWVILFdBQ2ZJLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLG1CQUFvQkYsWUFBWUcsb0JBQVM7d0JBRS9DLElBQUlELGtCQUFrQjs0QkFDcEJSLFVBQVU7NEJBRVYsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxXQUFXLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO2dCQUV4QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLFdBQVdLLDBCQUFlLEVBQzFCQyxZQUFZLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNIO2dCQUV6QyxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1AsUUFBUSxFQUFFUSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxvQkFBZSxDQUFDSiwwQ0FBMEMsQ0FyQzdJcEIsc0JBcUNvS2EsVUFBVVEsWUFBWUMsU0FBU0M7WUFBYTs7O1dBckNoTnZCO0VBQTZCd0Isb0JBQWUifQ==