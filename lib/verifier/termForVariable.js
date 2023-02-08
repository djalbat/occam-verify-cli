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
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeVerifies = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    var nonTerminalNodeARuleNameTermRuleName = nonTerminalNodeARuleName === _ruleNames.TERM_RULE_NAME, nonTerminalNodeBRuleNameTermRuleName = nonTerminalNodeBRuleName === _ruleNames.TERM_RULE_NAME;
                    if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
                        var termNodeA = nonTerminalNodeA, termNodeB = nonTerminalNodeB, termNodeVerifies = this.verifyTermNode(termNodeA, termNodeB, substitutions);
                        if (termNodeVerifies) {
                            nonTerminalNodeVerifies = true; ///
                        } else {
                            nonTerminalNodeVerifies = _get(_getPrototypeOf(TermForVariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                        }
                    } else {
                        nonTerminalNodeVerifies = _get(_getPrototypeOf(TermForVariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    }
                }
                return nonTerminalNodeVerifies;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNodeA, termNodeB, substitutions) {
                var termNodeVerifies = false;
                var variableNodeA = variableNodeQuery(termNodeA);
                if (variableNodeA !== null) {
                    var variableVerifies = this.verifyVariableNode(variableNodeA, termNodeB, substitutions);
                    termNodeVerifies = variableVerifies; ///
                }
                return termNodeVerifies;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNodeB, termNodeB, substitutions) {
                var variableVerifies;
                var variableNameA = (0, _query.variableNameFromVariableNode)(variableNodeB), substitution = substitutions.find(function(substitution) {
                    var variableName = substitution.getVariableName();
                    if (variableName === variableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var termNode = termNodeB, substitutionNodesVerifies = substitution.matchTermNode(termNode);
                    variableVerifies = substitutionNodesVerifies; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var variableName = variableNameA, termNode1 = termNodeB, termForVariableSubstitution = _termForVariable.default.fromVariableNameAndTermNode(variableName, termNode1), substitution1 = termForVariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    variableVerifies = true;
                }
                return variableVerifies;
            }
        }
    ]);
    return TermForVariableVerifier;
}(_verifier.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90ZXJtRm9yVmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL3Rlcm0vdmFyaWFibGUhJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVGVybVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lVGVybVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVGVybVJ1bGVOYW1lICYmIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVRlcm1SdWxlTmFtZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VGVybU5vZGUodGVybU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmICh0ZXJtTm9kZVZlcmlmaWVzKSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRlcm1Ob2RlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZUEpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICB0ZXJtTm9kZVZlcmlmaWVzID0gdmFyaWFibGVWZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Ob2RlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQiwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHZhcmlhYmxlVmVyaWZpZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWVBID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVCKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lID09PSB2YXJpYWJsZU5hbWVBKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25Ob2Rlc1ZlcmlmaWVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVzID0gc3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNyZWF0ZVN1YnN0aXR1dGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgIGlmIChjcmVhdGVTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUEsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVmFyaWFibGVOYW1lQW5kVGVybU5vZGUodmFyaWFibGVOYW1lLCB0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVWZXJpZmllcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVWZXJpZmllciIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZXMiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidGVybU5vZGVWZXJpZmllcyIsInZlcmlmeVRlcm1Ob2RlIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVCIiwidmFyaWFibGVOYW1lQSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwidmFyaWFibGVOYW1lIiwiZ2V0VmFyaWFibGVOYW1lIiwidGVybU5vZGUiLCJzdWJzdGl0dXRpb25Ob2Rlc1ZlcmlmaWVzIiwibWF0Y2hUZXJtTm9kZSIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJjb25zdHJ1Y3RvciIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5hbWVBbmRUZXJtTm9kZSIsInB1c2giLCJWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NkRBVEE7b0VBQ21CO3FCQUVkO3lCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHL0IsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsd0NBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO2dCQUN2RSxJQUFJQywwQkFBMEIsS0FBSztnQkFFbkMsSUFBTUMsMkJBQTJCSixpQkFBaUJLLFdBQVcsSUFDdkRDLDJCQUEyQkwsaUJBQWlCSSxXQUFXO2dCQUU3RCxJQUFJQyw2QkFBNkJGLDBCQUEwQjtvQkFDekQsSUFBTUcsdUNBQXdDSCw2QkFBNkJJLHlCQUFjLEVBQ25GQyx1Q0FBd0NILDZCQUE2QkUseUJBQWM7b0JBRXpGLElBQUlELHdDQUF3Q0Usc0NBQXNDO3dCQUNoRixJQUFNQyxZQUFZVixrQkFDWlcsWUFBWVYsa0JBQ1pXLG1CQUFtQixJQUFJLENBQUNDLGNBQWMsQ0FBQ0gsV0FBV0MsV0FBV1Q7d0JBRW5FLElBQUlVLGtCQUFrQjs0QkFDcEJULDBCQUEwQixJQUFJLEVBQUcsR0FBRzt3QkFDdEMsT0FBTzs0QkFDTEEsMEJBQTBCLHFCQW5CZlAsb0NBbUJxQkcseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDO3dCQUM1RixDQUFDO29CQUNILE9BQU87d0JBQ0xDLDBCQUEwQixxQkF0QmJQLG9DQXNCbUJHLHlCQUFOLElBQUssYUFBdUJDLGtCQUFrQkMsa0JBQWtCQztvQkFDNUYsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9DO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUgsU0FBUyxFQUFFQyxTQUFTLEVBQUVULGFBQWEsRUFBRTtnQkFDbEQsSUFBSVUsbUJBQW1CLEtBQUs7Z0JBRTVCLElBQU1FLGdCQUFnQmpCLGtCQUFrQmE7Z0JBRXhDLElBQUlJLGtCQUFrQixJQUFJLEVBQUU7b0JBQzFCLElBQU1DLG1CQUFtQixJQUFJLENBQUNDLGtCQUFrQixDQUFDRixlQUFlSCxXQUFXVDtvQkFFM0VVLG1CQUFtQkcsa0JBQWtCLEdBQUc7Z0JBQzFDLENBQUM7Z0JBRUQsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGFBQWEsRUFBRU4sU0FBUyxFQUFFVCxhQUFhLEVBQUU7Z0JBQzFELElBQUlhO2dCQUVKLElBQU1HLGdCQUFnQkMsSUFBQUEsbUNBQTRCLEVBQUNGLGdCQUM3Q0csZUFBZWxCLGNBQWNtQixJQUFJLENBQUMsU0FBQ0QsY0FBaUI7b0JBQ2xELElBQU1FLGVBQWVGLGFBQWFHLGVBQWU7b0JBRWpELElBQUlELGlCQUFpQkosZUFBZTt3QkFDbEMsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsTUFBTSxJQUFJO2dCQUVoQixJQUFJRSxpQkFBaUIsSUFBSSxFQUFFO29CQUN6QixJQUFNSSxXQUFXYixXQUNYYyw0QkFBNEJMLGFBQWFNLGFBQWEsQ0FBQ0Y7b0JBRTdEVCxtQkFBbUJVLDJCQUE0QixHQUFHO2dCQUNwRCxPQUFPO29CQUNMLElBQU0sQUFBRUUsc0JBQXdCLElBQUksQ0FBQ0MsV0FBVyxDQUF4Q0Q7b0JBRVIsSUFBSUEscUJBQXFCO3dCQUN2QixJQUFNTCxlQUFlSixlQUNmTSxZQUFXYixXQUNYa0IsOEJBQThCQyx3QkFBMkIsQ0FBQ0MsMkJBQTJCLENBQUNULGNBQWNFLFlBQ3BHSixnQkFBZVMsNkJBQThCLEdBQUc7d0JBRXREM0IsY0FBYzhCLElBQUksQ0FBQ1o7b0JBQ3JCLENBQUM7b0JBRURMLG1CQUFtQixJQUFJO2dCQUN6QixDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7OztXQTVFbUJuQjtFQUFnQ3FDLGlCQUFRIn0=