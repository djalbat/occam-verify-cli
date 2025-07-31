"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EqualityNode;
    }
});
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last;
var EqualityNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(EqualityNode, NonTerminalNode);
    function EqualityNode() {
        _class_call_check(this, EqualityNode);
        return _call_super(this, EqualityNode, arguments);
    }
    _create_class(EqualityNode, [
        {
            key: "getTermNodes",
            value: function getTermNodes() {
                var ruleName = _ruleNames.TERM_RULE_NAME, termNodes = this.getNodeByRuleName(ruleName);
                return termNodes;
            }
        },
        {
            key: "getLeftTermNode",
            value: function getLeftTermNode() {
                var termNodes = this.getTermNodes(), firstTermNode = first(termNodes), leftTermNode = firstTermNode; ///
                return leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                var termNodes = this.getTermNodes(), firstTermNode = last(termNodes), rightTermNode = firstTermNode; ///
                return rightTermNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(EqualityNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return EqualityNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFRlcm1Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSB0aGlzLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0VGVybU5vZGUgPSBmaXJzdCh0ZXJtTm9kZXMpLFxuICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGZpcnN0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gdGhpcy5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdFRlcm1Ob2RlID0gbGFzdCh0ZXJtTm9kZXMpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBmaXJzdFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShFcXVhbGl0eU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5Tm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwiZ2V0VGVybU5vZGVzIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlcyIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZmlyc3RUZXJtTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTtrRUFFSDt5QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFRQyxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQztBQUVBLElBQUEsQUFBTUgsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsWUFBWSxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3Qk0sZ0JBQWdCVCxNQUFNTSxZQUN0QkksZUFBZUQsZUFBZSxHQUFHO2dCQUV2QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLFlBQVksSUFBSSxDQUFDSCxZQUFZLElBQzdCTSxnQkFBZ0JQLEtBQUtJLFlBQ3JCTSxnQkFBZ0JILGVBQWUsR0FBRztnQkFFeEMsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNULFFBQVEsRUFBRVUsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0osMENBQTBDLENBeEI3SWQsY0F3QjRKSyxVQUFVVSxZQUFZQyxTQUFTQztZQUFhOzs7V0F4QnhNakI7RUFBcUJrQixvQkFBZSJ9