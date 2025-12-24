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
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
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
            key: "isSimple",
            value: function isSimple() {
                var simple = false;
                var singularAssumptionNode = this.getSingularAssumptionNode();
                if (singularAssumptionNode !== null) {
                    simple = singularAssumptionNode.isSimple();
                }
                return simple;
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
                var ruleName = _ruleNames.ASSUMPTION_RULE_NAME, singularAssumptionNode = this.getSingularTNodeByRuleName(ruleName);
                return singularAssumptionNode;
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
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return FrameNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuaW1wb3J0IHsgQVNTVU1QVElPTl9SVUxFX05BTUUsIE1FVEFWQVJJQUJMRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzU2ltcGxlKCkge1xuICAgIGxldCBzaW1wbGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyQXNzdW1wdGlvbk5vZGUgPSB0aGlzLmdldFNpbmd1bGFyQXNzdW1wdGlvbk5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhckFzc3VtcHRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBzaW1wbGUgPSBzaW5ndWxhckFzc3VtcHRpb25Ob2RlLmlzU2ltcGxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEFTU1VNUFRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25Ob2RlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlcztcbiAgfVxuXG4gIGdldFNpbmd1bGFyQXNzdW1wdGlvbk5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBBU1NVTVBUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBzaW5ndWxhckFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRTaW5ndWxhclROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXJBc3N1bXB0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBsZXQgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyQXNzdW1wdGlvbk5vZGUgPSB0aGlzLmdldFNpbmd1bGFyQXNzdW1wdGlvbk5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhckFzc3VtcHRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2luZ3VsYXJBc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShGcmFtZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkZyYW1lTm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwic2luZ3VsYXJBc3N1bXB0aW9uTm9kZSIsImdldFNpbmd1bGFyQXNzdW1wdGlvbk5vZGUiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJydWxlTmFtZSIsIkFTU1VNUFRJT05fUlVMRV9OQU1FIiwiZGVjbGFyYXRpb25Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGVzIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiZ2V0U2luZ3VsYXJUTm9kZUJ5UnVsZU5hbWUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0VBSk87eUJBRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQUEsQUFBTUEsMEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxTQUFTO2dCQUViLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLHlCQUF5QjtnQkFFN0QsSUFBSUQsMkJBQTJCLE1BQU07b0JBQ25DRCxTQUFTQyx1QkFBdUJGLFFBQVE7Z0JBQzFDO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsK0JBQW9CLEVBQy9CQyxtQkFBbUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0ssaUNBQXNCLEVBQ2pDQyxvQkFBb0IsSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQ0g7Z0JBRWxELE9BQU9NO1lBQ1Q7OztZQUVBUixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsV0FBV0MsK0JBQW9CLEVBQy9CSix5QkFBeUIsSUFBSSxDQUFDVSwwQkFBMEIsQ0FBQ1A7Z0JBRS9ELE9BQU9IO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsMkJBQTJCO2dCQUUvQixJQUFNWix5QkFBeUIsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBRTdELElBQUlELDJCQUEyQixNQUFNO29CQUNuQyxJQUFNYSxtQkFBbUJiLHVCQUF1QmMsbUJBQW1CO29CQUVuRUYsMkJBQTJCQyxrQkFBbUIsR0FBRztnQkFDbkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNaLFFBQVEsRUFBRWEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msd0JBQWUsQ0FBQ0osMENBQTBDLENBaEQ3SWxCLFdBZ0R5Sk0sVUFBVWEsWUFBWUMsU0FBU0M7WUFBYTs7O1dBaERyTXJCO0VBQWtCc0Isd0JBQWUifQ==