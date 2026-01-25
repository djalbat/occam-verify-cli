"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DeductionNode;
    }
});
var _occamfurtle = require("occam-furtle");
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
var DeductionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DeductionNode, NonTerminalNode);
    function DeductionNode() {
        _class_call_check(this, DeductionNode);
        return _call_super(this, DeductionNode, arguments);
    }
    _create_class(DeductionNode, [
        {
            key: "getNonsenseNode",
            value: function getNonsenseNode() {
                var ruleName = _ruleNames.NONSENSE_RULE_NAME, nonsenseNode = this.getNodeByRuleName(ruleName);
                return nonsenseNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var ruleName = _ruleNames.STATEMENT_RULE_NAME, statementNode = this.getNodeByRuleName(ruleName);
                return statementNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DeductionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return DeductionNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgeyBOT05TRU5TRV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZHVjdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXROb25zZW5zZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBOT05TRU5TRV9SVUxFX05BTUUsXG4gICAgICAgICAgbm9uc2Vuc2VOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbm9uc2Vuc2VOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKERlZHVjdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlZHVjdGlvbk5vZGUiLCJnZXROb25zZW5zZU5vZGUiLCJydWxlTmFtZSIsIk5PTlNFTlNFX1JVTEVfTkFNRSIsIm5vbnNlbnNlTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJzdGF0ZW1lbnROb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKVzt5QkFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyw2QkFBa0IsRUFDN0JDLGVBQWUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRTVDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssOEJBQW1CLEVBQzlCQyxnQkFBZ0IsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7Z0JBRTdDLE9BQU9NO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDUCxRQUFRLEVBQUVRLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLDRCQUFlLENBQUNKLDBDQUEwQyxDQWY3SVQsZUFlNkpFLFVBQVVRLFlBQVlDLFNBQVNDO1lBQWE7OztXQWZ6TVo7RUFBc0JhLDRCQUFlIn0=