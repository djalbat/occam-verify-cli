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
var FrameNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(FrameNode, NonTerminalNode);
    function FrameNode() {
        _class_call_check(this, FrameNode);
        return _call_super(this, FrameNode, arguments);
    }
    _create_class(FrameNode, [
        {
            key: "isSingular",
            value: function isSingular() {
                var singular = false;
                var singularAssumptionNode = this.getSingularAssumptionNode();
                if (singularAssumptionNode !== null) {
                    singular = singularAssumptionNode.isSingular();
                }
                return singular;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                var metavariableNode = this.getMetavariableNode();
                if (metavariableNode !== null) {
                    metavariableName = metavariableNode.getMetavariableName();
                }
                return metavariableName;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var singularMetavariableNode = this.getSingularMetavariableNode(), metavariableNode = singularMetavariableNode; ///
                return metavariableNode;
            }
        },
        {
            key: "getSingularMetavariableNode",
            value: function getSingularMetavariableNode() {
                var singularMetavariableNode = null;
                var singularAssumptionNode = this.getSingularAssumptionNode();
                if (singularAssumptionNode !== null) {
                    var metavariableNode = singularAssumptionNode.getMetavariableNode();
                    singularMetavariableNode = metavariableNode; ///
                }
                return singularMetavariableNode;
            }
        },
        {
            key: "getAssumptionNodes",
            value: function getAssumptionNodes() {
                var ruleName = _ruleNames.ASSUMPTION_RULE_NAME, declarationNodes = this.getNodesByRuleName(ruleName);
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
            key: "getSingularAssumptionNode",
            value: function getSingularAssumptionNode() {
                var ruleName = _ruleNames.ASSUMPTION_RULE_NAME, singularAssumptionNode = this.getSingularNodeByRuleName(ruleName);
                return singularAssumptionNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return FrameNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IEFTU1VNUFRJT05fUlVMRV9OQU1FLCBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1Npbmd1bGFyKCkge1xuICAgIGxldCBzaW5ndWxhciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJBc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJBc3N1bXB0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyQXNzdW1wdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNpbmd1bGFyID0gc2luZ3VsYXJBc3N1bXB0aW9uTm9kZS5pc1Npbmd1bGFyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXJBc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJBc3N1bXB0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHNpbmd1bGFyQXNzdW1wdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzaW5ndWxhckFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBBU1NVTVBUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZXM7XG4gIH1cblxuICBnZXRTaW5ndWxhckFzc3VtcHRpb25Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQVNTVU1QVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgc2luZ3VsYXJBc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJOb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXJBc3N1bXB0aW9uTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRnJhbWVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFtZU5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJzaW5ndWxhckFzc3VtcHRpb25Ob2RlIiwiZ2V0U2luZ3VsYXJBc3N1bXB0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJydWxlTmFtZSIsIkFTU1VNUFRJT05fUlVMRV9OQU1FIiwiZGVjbGFyYXRpb25Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGVzIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiZ2V0U2luZ3VsYXJOb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7OEJBSlc7eUJBRTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBRTdELElBQUlELDJCQUEyQixNQUFNO29CQUNuQ0QsV0FBV0MsdUJBQXVCRixVQUFVO2dCQUM5QztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsbUJBQW1CO2dCQUVqRCxJQUFJRCxxQkFBcUIsTUFBTTtvQkFDN0JELG1CQUFtQkMsaUJBQWlCRixtQkFBbUI7Z0JBQ3pEO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsMkJBQTJCLElBQzNESCxtQkFBbUJFLDBCQUEyQixHQUFHO2dCQUV2RCxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELDJCQUEyQjtnQkFFL0IsSUFBTU4seUJBQXlCLElBQUksQ0FBQ0MseUJBQXlCO2dCQUU3RCxJQUFJRCwyQkFBMkIsTUFBTTtvQkFDbkMsSUFBTUksbUJBQW1CSix1QkFBdUJLLG1CQUFtQjtvQkFFbkVDLDJCQUEyQkYsa0JBQW1CLEdBQUc7Z0JBQ25EO2dCQUVBLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsK0JBQW9CLEVBQy9CQyxtQkFBbUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssaUNBQXNCLEVBQ2pDQyxvQkFBb0IsSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQ0g7Z0JBRWxELE9BQU9NO1lBQ1Q7OztZQUVBZCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVEsV0FBV0MsK0JBQW9CLEVBQy9CVix5QkFBeUIsSUFBSSxDQUFDZ0IseUJBQXlCLENBQUNQO2dCQUU5RCxPQUFPVDtZQUNUOzs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNSLFFBQVEsRUFBRVMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsK0JBQWUsQ0FBQ0osMENBQTBDLENBbkU3SXBCLFdBbUV5SlksVUFBVVMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBbkVyTXZCO0VBQWtCd0IsK0JBQWUifQ==