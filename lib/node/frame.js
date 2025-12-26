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
            key: "getAssumptionNodes",
            value: function getAssumptionNodes() {
                var ruleName = _ruleNames.ASSUMPTION_RULE_NAME, declarationNodes = this.getNodesByRuleName(ruleName);
                return declarationNodes;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                var singular = this.isSingular();
                if (singular) {
                    var singularMetavariableNode = this.getSingularMetavariableNode();
                    metavariableName = singularMetavariableNode.getMetavariableName();
                }
                return metavariableName;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuaW1wb3J0IHsgQVNTVU1QVElPTl9SVUxFX05BTUUsIE1FVEFWQVJJQUJMRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgbGV0IHNpbmd1bGFyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhckFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRTaW5ndWxhckFzc3VtcHRpb25Ob2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJBc3N1bXB0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2luZ3VsYXIgPSBzaW5ndWxhckFzc3VtcHRpb25Ob2RlLmlzU2luZ3VsYXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBBU1NVTVBUSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVzO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJBc3N1bXB0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEFTU1VNUFRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHNpbmd1bGFyQXNzdW1wdGlvbk5vZGUgPSB0aGlzLmdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyQXNzdW1wdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgbGV0IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhckFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRTaW5ndWxhckFzc3VtcHRpb25Ob2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJBc3N1bXB0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyQXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRnJhbWVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFtZU5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJzaW5ndWxhckFzc3VtcHRpb25Ob2RlIiwiZ2V0U2luZ3VsYXJBc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlcyIsInJ1bGVOYW1lIiwiQVNTVU1QVElPTl9SVUxFX05BTUUiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsIk1FVEFWQVJJQUJMRV9SVUxFX05BTUUiLCJtZXRhdmFyaWFibGVOb2RlcyIsImdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0VBSk87eUJBRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQUEsQUFBTUEsMEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLHlCQUF5QjtnQkFFN0QsSUFBSUQsMkJBQTJCLE1BQU07b0JBQ25DRCxXQUFXQyx1QkFBdUJGLFVBQVU7Z0JBQzlDO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsK0JBQW9CLEVBQy9CQyxtQkFBbUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0g7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNVCxXQUFXLElBQUksQ0FBQ0QsVUFBVTtnQkFFaEMsSUFBSUMsVUFBVTtvQkFDWixJQUFNVSwyQkFBMkIsSUFBSSxDQUFDQywyQkFBMkI7b0JBRWpFRixtQkFBbUJDLHlCQUF5QkYsbUJBQW1CO2dCQUNqRTtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLFdBQVdTLGlDQUFzQixFQUNqQ0Msb0JBQW9CLElBQUksQ0FBQ1Asa0JBQWtCLENBQUNIO2dCQUVsRCxPQUFPVTtZQUNUOzs7WUFFQVosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLFdBQVdDLCtCQUFvQixFQUMvQkoseUJBQXlCLElBQUksQ0FBQ2MseUJBQXlCLENBQUNYO2dCQUU5RCxPQUFPSDtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELDJCQUEyQjtnQkFFL0IsSUFBTVQseUJBQXlCLElBQUksQ0FBQ0MseUJBQXlCO2dCQUU3RCxJQUFJRCwyQkFBMkIsTUFBTTtvQkFDbkMsSUFBTWUsbUJBQW1CZix1QkFBdUJnQixtQkFBbUI7b0JBRW5FUCwyQkFBMkJNLGtCQUFtQixHQUFHO2dCQUNuRDtnQkFFQSxPQUFPTjtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2QsUUFBUSxFQUFFZSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDSiwwQ0FBMEMsQ0E5RDdJcEIsV0E4RHlKTSxVQUFVZSxZQUFZQyxTQUFTQztZQUFhOzs7V0E5RHJNdkI7RUFBa0J3Qix3QkFBZSJ9