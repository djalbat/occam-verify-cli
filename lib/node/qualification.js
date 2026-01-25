"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QualificationNode;
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
var QualificationNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(QualificationNode, NonTerminalNode);
    function QualificationNode() {
        _class_call_check(this, QualificationNode);
        return _call_super(this, QualificationNode, arguments);
    }
    _create_class(QualificationNode, [
        {
            key: "getReferenceNode",
            value: function getReferenceNode() {
                var ruleName = _ruleNames.REFERENCE_RULE_NAME, referenceNode = this.getNodeByRuleName(ruleName);
                return referenceNode;
            }
        },
        {
            key: "getSatisfiedAssertionNode",
            value: function getSatisfiedAssertionNode() {
                var ruleName = _ruleNames.SATISFIES_ASSERTION_RULE_NAME, satisfiedAssertionNode = this.getNodeByRuleName(ruleName);
                return satisfiedAssertionNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(QualificationNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return QualificationNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3F1YWxpZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgUkVGRVJFTkNFX1JVTEVfTkFNRSwgU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YWxpZmljYXRpb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJFRkVSRU5DRV9SVUxFX05BTUUsXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFF1YWxpZmljYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJRdWFsaWZpY2F0aW9uTm9kZSIsImdldFJlZmVyZW5jZU5vZGUiLCJydWxlTmFtZSIsIlJFRkVSRU5DRV9SVUxFX05BTUUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiU0FUSVNGSUVTX0FTU0VSVElPTl9SVUxFX05BTUUiLCJzYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKVzt5QkFFbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyw4QkFBbUIsRUFDOUJDLGdCQUFnQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyx3Q0FBNkIsRUFDeENDLHlCQUF5QixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFdEQsT0FBT007WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNQLFFBQVEsRUFBRVEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsNEJBQWUsQ0FBQ0osMENBQTBDLENBZjdJVCxtQkFlaUtFLFVBQVVRLFlBQVlDLFNBQVNDO1lBQWE7OztXQWY3TVo7RUFBMEJhLDRCQUFlIn0=