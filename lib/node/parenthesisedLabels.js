"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParenthesisedLabelsNode;
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
var ParenthesisedLabelsNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ParenthesisedLabelsNode, NonTerminalNode);
    function ParenthesisedLabelsNode() {
        _class_call_check(this, ParenthesisedLabelsNode);
        return _call_super(this, ParenthesisedLabelsNode, arguments);
    }
    _create_class(ParenthesisedLabelsNode, [
        {
            key: "getLabelNodes",
            value: function getLabelNodes() {
                var labelsNode = this.getLabelsNode(), labelNodes = labelsNode.getLabelNodes();
                return labelNodes;
            }
        },
        {
            key: "getLabelsNode",
            value: function getLabelsNode() {
                var ruleName = _ruleNames.LABELS_RULE_NAME, labelsNode = this.getNodeByRuleName(ruleName);
                return labelsNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamfurtle.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParenthesisedLabelsNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ParenthesisedLabelsNode;
}(_occamfurtle.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BhcmVudGhlc2lzZWRMYWJlbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgTEFCRUxTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyZW50aGVzaXNlZExhYmVsc05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRMYWJlbE5vZGVzKCkge1xuICAgIGNvbnN0IGxhYmVsc05vZGUgPSB0aGlzLmdldExhYmVsc05vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxzTm9kZS5nZXRMYWJlbE5vZGVzKCk7XG5cbiAgICByZXR1cm4gbGFiZWxOb2RlcztcbiAgfVxuXG4gIGdldExhYmVsc05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBMQUJFTFNfUlVMRV9OQU1FLFxuICAgICAgICAgIGxhYmVsc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBsYWJlbHNOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShQYXJlbnRoZXNpc2VkTGFiZWxzTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUGFyZW50aGVzaXNlZExhYmVsc05vZGUiLCJnZXRMYWJlbE5vZGVzIiwibGFiZWxzTm9kZSIsImdldExhYmVsc05vZGUiLCJsYWJlbE5vZGVzIiwicnVsZU5hbWUiLCJMQUJFTFNfUlVMRV9OQU1FIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJCQUpXO3lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGFBQWFGLFdBQVdELGFBQWE7Z0JBRTNDLE9BQU9HO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsV0FBV0MsMkJBQWdCLEVBQzNCSixhQUFhLElBQUksQ0FBQ0ssaUJBQWlCLENBQUNGO2dCQUUxQyxPQUFPSDtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0gsUUFBUSxFQUFFSSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyw0QkFBZSxDQUFDSiwwQ0FBMEMsQ0FmN0lSLHlCQWV1S0ssVUFBVUksWUFBWUMsU0FBU0M7WUFBYTs7O1dBZm5OWDtFQUFnQ1ksNEJBQWUifQ==