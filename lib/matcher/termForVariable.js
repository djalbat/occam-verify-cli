"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("../matcher"));
var _termForVariable = /*#__PURE__*/ _interopRequireDefault(require("../substitution/termForVariable"));
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var TermForVariableMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(TermForVariableMatcher, Matcher);
    var _super = _createSuper(TermForVariableMatcher);
    function TermForVariableMatcher() {
        _classCallCheck(this, TermForVariableMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(TermForVariableMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    var nonTerminalNodeARuleNameTermRuleName = nonTerminalNodeARuleName === _ruleNames.TERM_RULE_NAME, nonTerminalNodeBRuleNameTermRuleName = nonTerminalNodeBRuleName === _ruleNames.TERM_RULE_NAME;
                    if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
                        var termNodeA = nonTerminalNodeA, termNodeB = nonTerminalNodeB, termNodeMatches = this.matchTermNode(termNodeA, termNodeB, substitutions);
                        if (termNodeMatches) {
                            nonTerminalNodeMatches = true; ///
                        } else {
                            nonTerminalNodeMatches = _get(_getPrototypeOf(TermForVariableMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                        }
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(TermForVariableMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    }
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNodeA, termNodeB, substitutions) {
                var termNodeMatches = false;
                var variableNodeA = variableNodeQuery(termNodeA);
                if (variableNodeA !== null) {
                    var variableMatches = this.matchVariableNode(variableNodeA, termNodeB, substitutions);
                    termNodeMatches = variableMatches; ///
                }
                return termNodeMatches;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNodeB, termNodeB, substitutions) {
                var variableMatches;
                var variableNameA = (0, _query.variableNameFromVariableNode)(variableNodeB), substitution = substitutions.find(function(substitution) {
                    var variableName = substitution.getVariableName();
                    if (variableName === variableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var termNode = termNodeB, substitutionNodesMatch = substitution.matchTermNode(termNode);
                    variableMatches = substitutionNodesMatch; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var variableName = variableNameA, termNode1 = termNodeB, termForVariableSubstitution = _termForVariable.default.fromVariableNameAndTermNode(variableName, termNode1), substitution1 = termForVariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    variableMatches = true;
                }
                return variableMatches;
            }
        }
    ]);
    return TermForVariableMatcher;
}(_matcher.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL3Rlcm1Gb3JWYXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hdGNoZXIgZnJvbSBcIi4uL21hdGNoZXJcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL3Rlcm0vdmFyaWFibGUhJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Gb3JWYXJpYWJsZU1hdGNoZXIgZXh0ZW5kcyBNYXRjaGVyIHtcbiAgbWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBURVJNX1JVTEVfTkFNRSksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBURVJNX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVUZXJtUnVsZU5hbWUgJiYgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lVGVybVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0ZXJtTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZUEpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgdGVybU5vZGVNYXRjaGVzID0gdmFyaWFibGVNYXRjaGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQiwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHZhcmlhYmxlTWF0Y2hlcztcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZUEgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUIpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5hbWUgPT09IHZhcmlhYmxlTmFtZUEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBzdWJzdGl0dXRpb24ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIHZhcmlhYmxlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjcmVhdGVTdWJzdGl0dXRpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoY3JlYXRlU3Vic3RpdHV0aW9ucykge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTmFtZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTmFtZSwgdGVybU5vZGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdmFyaWFibGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVNYXRjaGVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlRlcm1Gb3JWYXJpYWJsZU1hdGNoZXIiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1hdGNoTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTmFtZUEiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInZhcmlhYmxlTmFtZSIsImdldFZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJjb25zdHJ1Y3RvciIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5hbWVBbmRUZXJtTm9kZSIsInB1c2giLCJNYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozs0REFURDtvRUFDb0I7cUJBRWQ7eUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcvQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsSUFBQSxBQUFNRix1Q0FBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUU7Z0JBQ3RFLElBQUlDLHlCQUF5QixLQUFLO2dCQUVsQyxJQUFNQywyQkFBMkJKLGlCQUFpQkssV0FBVyxJQUN2REMsMkJBQTJCTCxpQkFBaUJJLFdBQVc7Z0JBRTdELElBQUlDLDZCQUE2QkYsMEJBQTBCO29CQUN6RCxJQUFNRyx1Q0FBd0NILDZCQUE2QkkseUJBQWMsRUFDbkZDLHVDQUF3Q0gsNkJBQTZCRSx5QkFBYztvQkFFekYsSUFBSUQsd0NBQXdDRSxzQ0FBc0M7d0JBQ2hGLElBQU1DLFlBQVlWLGtCQUNaVyxZQUFZVixrQkFDWlcsa0JBQWtCLElBQUksQ0FBQ0MsYUFBYSxDQUFDSCxXQUFXQyxXQUFXVDt3QkFFakUsSUFBSVUsaUJBQWlCOzRCQUNuQlQseUJBQXlCLElBQUksRUFBRyxHQUFHO3dCQUNyQyxPQUFPOzRCQUNMQSx5QkFBeUIscUJBbkJkUCxtQ0FtQm9CRyx3QkFBTixJQUFLLGFBQXNCQyxrQkFBa0JDLGtCQUFrQkM7d0JBQzFGLENBQUM7b0JBQ0gsT0FBTzt3QkFDTEMseUJBQXlCLHFCQXRCWlAsbUNBc0JrQkcsd0JBQU4sSUFBSyxhQUFzQkMsa0JBQWtCQyxrQkFBa0JDO29CQUMxRixDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0M7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjSCxTQUFTLEVBQUVDLFNBQVMsRUFBRVQsYUFBYSxFQUFFO2dCQUNqRCxJQUFJVSxrQkFBa0IsS0FBSztnQkFFM0IsSUFBTUUsZ0JBQWdCakIsa0JBQWtCYTtnQkFFeEMsSUFBSUksa0JBQWtCLElBQUksRUFBRTtvQkFDMUIsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNGLGVBQWVILFdBQVdUO29CQUV6RVUsa0JBQWtCRyxpQkFBaUIsR0FBRztnQkFDeEMsQ0FBQztnQkFFRCxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsYUFBYSxFQUFFTixTQUFTLEVBQUVULGFBQWEsRUFBRTtnQkFDekQsSUFBSWE7Z0JBRUosSUFBTUcsZ0JBQWdCQyxJQUFBQSxtQ0FBNEIsRUFBQ0YsZ0JBQzdDRyxlQUFlbEIsY0FBY21CLElBQUksQ0FBQyxTQUFDRCxjQUFpQjtvQkFDbEQsSUFBTUUsZUFBZUYsYUFBYUcsZUFBZTtvQkFFakQsSUFBSUQsaUJBQWlCSixlQUFlO3dCQUNsQyxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxNQUFNLElBQUk7Z0JBRWhCLElBQUlFLGlCQUFpQixJQUFJLEVBQUU7b0JBQ3pCLElBQU1JLFdBQVdiLFdBQ1hjLHlCQUF5QkwsYUFBYVAsYUFBYSxDQUFDVztvQkFFMURULGtCQUFrQlUsd0JBQXlCLEdBQUc7Z0JBQ2hELE9BQU87b0JBQ0wsSUFBTSxBQUFFQyxzQkFBd0IsSUFBSSxDQUFDQyxXQUFXLENBQXhDRDtvQkFFUixJQUFJQSxxQkFBcUI7d0JBQ3ZCLElBQU1KLGVBQWVKLGVBQ2ZNLFlBQVdiLFdBQ1hpQiw4QkFBOEJDLHdCQUEyQixDQUFDQywyQkFBMkIsQ0FBQ1IsY0FBY0UsWUFDcEdKLGdCQUFlUSw2QkFBOEIsR0FBRzt3QkFFdEQxQixjQUFjNkIsSUFBSSxDQUFDWDtvQkFDckIsQ0FBQztvQkFFREwsa0JBQWtCLElBQUk7Z0JBQ3hCLENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1dBNUVtQm5CO0VBQStCb0MsZ0JBQU8ifQ==