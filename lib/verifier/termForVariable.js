"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableVerifier;
    }
});
var _verifier = /*#__PURE__*/ _interopRequireDefault(require("../verifier"));
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
var TermForVariableVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(TermForVariableVerifier, Verifier);
    var _super = _createSuper(TermForVariableVerifier);
    function TermForVariableVerifier() {
        _classCallCheck(this, TermForVariableVerifier);
        return _super.apply(this, arguments);
    }
    _createClass(TermForVariableVerifier, [
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
                            nonTerminalNodeMatches = _get(_getPrototypeOf(TermForVariableVerifier.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                        }
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(TermForVariableVerifier.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
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
    return TermForVariableVerifier;
}(_verifier.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90ZXJtRm9yVmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL3Rlcm0vdmFyaWFibGUhJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICBtYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSAmJiBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSB0cnVlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gc3VwZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRlcm1Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlQSk7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzID0gdGhpcy5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB2YXJpYWJsZU1hdGNoZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVCLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdmFyaWFibGVNYXRjaGVzO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lQSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQiksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZSA9PT0gdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgdmFyaWFibGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNyZWF0ZVN1YnN0aXR1dGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgIGlmIChjcmVhdGVTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUEsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVmFyaWFibGVOYW1lQW5kVGVybU5vZGUodmFyaWFibGVOYW1lLCB0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuXG4gICAgICB2YXJpYWJsZU1hdGNoZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZU1hdGNoZXM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlVmVyaWZpZXIiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1hdGNoTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTmFtZUEiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInZhcmlhYmxlTmFtZSIsImdldFZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJjb25zdHJ1Y3RvciIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5hbWVBbmRUZXJtTm9kZSIsInB1c2giLCJWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NkRBVEE7b0VBQ21CO3FCQUVkO3lCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHL0IsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsd0NBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO2dCQUN0RSxJQUFJQyx5QkFBeUIsS0FBSztnQkFFbEMsSUFBTUMsMkJBQTJCSixpQkFBaUJLLFdBQVcsSUFDdkRDLDJCQUEyQkwsaUJBQWlCSSxXQUFXO2dCQUU3RCxJQUFJQyw2QkFBNkJGLDBCQUEwQjtvQkFDekQsSUFBTUcsdUNBQXdDSCw2QkFBNkJJLHlCQUFjLEVBQ25GQyx1Q0FBd0NILDZCQUE2QkUseUJBQWM7b0JBRXpGLElBQUlELHdDQUF3Q0Usc0NBQXNDO3dCQUNoRixJQUFNQyxZQUFZVixrQkFDWlcsWUFBWVYsa0JBQ1pXLGtCQUFrQixJQUFJLENBQUNDLGFBQWEsQ0FBQ0gsV0FBV0MsV0FBV1Q7d0JBRWpFLElBQUlVLGlCQUFpQjs0QkFDbkJULHlCQUF5QixJQUFJLEVBQUcsR0FBRzt3QkFDckMsT0FBTzs0QkFDTEEseUJBQXlCLHFCQW5CZFAsb0NBbUJvQkcsd0JBQU4sSUFBSyxhQUFzQkMsa0JBQWtCQyxrQkFBa0JDO3dCQUMxRixDQUFDO29CQUNILE9BQU87d0JBQ0xDLHlCQUF5QixxQkF0QlpQLG9DQXNCa0JHLHdCQUFOLElBQUssYUFBc0JDLGtCQUFrQkMsa0JBQWtCQztvQkFDMUYsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9DO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0gsU0FBUyxFQUFFQyxTQUFTLEVBQUVULGFBQWEsRUFBRTtnQkFDakQsSUFBSVUsa0JBQWtCLEtBQUs7Z0JBRTNCLElBQU1FLGdCQUFnQmpCLGtCQUFrQmE7Z0JBRXhDLElBQUlJLGtCQUFrQixJQUFJLEVBQUU7b0JBQzFCLElBQU1DLGtCQUFrQixJQUFJLENBQUNDLGlCQUFpQixDQUFDRixlQUFlSCxXQUFXVDtvQkFFekVVLGtCQUFrQkcsaUJBQWlCLEdBQUc7Z0JBQ3hDLENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLGFBQWEsRUFBRU4sU0FBUyxFQUFFVCxhQUFhLEVBQUU7Z0JBQ3pELElBQUlhO2dCQUVKLElBQU1HLGdCQUFnQkMsSUFBQUEsbUNBQTRCLEVBQUNGLGdCQUM3Q0csZUFBZWxCLGNBQWNtQixJQUFJLENBQUMsU0FBQ0QsY0FBaUI7b0JBQ2xELElBQU1FLGVBQWVGLGFBQWFHLGVBQWU7b0JBRWpELElBQUlELGlCQUFpQkosZUFBZTt3QkFDbEMsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsTUFBTSxJQUFJO2dCQUVoQixJQUFJRSxpQkFBaUIsSUFBSSxFQUFFO29CQUN6QixJQUFNSSxXQUFXYixXQUNYYyx5QkFBeUJMLGFBQWFQLGFBQWEsQ0FBQ1c7b0JBRTFEVCxrQkFBa0JVLHdCQUF5QixHQUFHO2dCQUNoRCxPQUFPO29CQUNMLElBQU0sQUFBRUMsc0JBQXdCLElBQUksQ0FBQ0MsV0FBVyxDQUF4Q0Q7b0JBRVIsSUFBSUEscUJBQXFCO3dCQUN2QixJQUFNSixlQUFlSixlQUNmTSxZQUFXYixXQUNYaUIsOEJBQThCQyx3QkFBMkIsQ0FBQ0MsMkJBQTJCLENBQUNSLGNBQWNFLFlBQ3BHSixnQkFBZVEsNkJBQThCLEdBQUc7d0JBRXREMUIsY0FBYzZCLElBQUksQ0FBQ1g7b0JBQ3JCLENBQUM7b0JBRURMLGtCQUFrQixJQUFJO2dCQUN4QixDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7OztXQTVFbUJuQjtFQUFnQ29DLGlCQUFRIn0=