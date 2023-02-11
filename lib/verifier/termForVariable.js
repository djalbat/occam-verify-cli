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
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
var _term = require("../verify/term");
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
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    var nonTerminalNodeARuleNameTermRuleName = nonTerminalNodeARuleName === _ruleNames.TERM_RULE_NAME, nonTerminalNodeBRuleNameTermRuleName = nonTerminalNodeBRuleName === _ruleNames.TERM_RULE_NAME;
                    if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
                        var termNodeA = nonTerminalNodeA, termNodeB = nonTerminalNodeB, termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, proofContextA, proofContextB);
                        if (termNodeVerified) {
                            nonTerminalNodeVerified = true; ///
                        } else {
                            nonTerminalNodeVerified = _get(_getPrototypeOf(TermForVariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB);
                        }
                    } else {
                        nonTerminalNodeVerified = _get(_getPrototypeOf(TermForVariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB);
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNodeA, termNodeB, substitutions, proofContextA, proofContextB) {
                var termNodeVerified = false;
                var variableNodeA = variableNodeQuery(termNodeA);
                if (variableNodeA !== null) {
                    var variableVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, proofContextA, proofContextB);
                    termNodeVerified = variableVerified; ///
                }
                return termNodeVerified;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNodeB, termNodeB, substitutions, proofContextA, proofContextB) {
                var variableVerified;
                var variableNameA = (0, _query.variableNameFromVariableNode)(variableNodeB), substitution = substitutions.find(function(substitution) {
                    var variableName = substitution.getVariableName();
                    if (variableName === variableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var termNode = termNodeB, substitutionNodesVerified = substitution.matchTermNode(termNode);
                    variableVerified = substitutionNodesVerified; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var variableName = variableNameA, proofContext = proofContextA, variable = proofContext.findVariableByVariableName(variableName);
                        if (variable !== null) {
                            var types = [], context = proofContextB, termNode1 = termNodeB, termVerified = (0, _term.verifyTermAgainstConstructors)(termNodeB, types, context);
                            if (termVerified) {
                                var firstType = (0, _array.first)(types), termType = firstType, variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                                if (variableTypeEqualToOrSuperTypeOfTermType) {
                                    var termForVariableSubstitution = _termForVariable.default.fromVariableNameAndTermNode(variableName, termNode1), substitution1 = termForVariableSubstitution; ///
                                    substitutions.push(substitution1);
                                    variableVerified = true;
                                }
                            }
                        }
                    }
                }
                return variableVerified;
            }
        }
    ]);
    return TermForVariableVerifier;
}(_verifier.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci90ZXJtRm9yVmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyB9IGZyb20gXCIuLi92ZXJpZnkvdGVybVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL3Rlcm0vdmFyaWFibGUhJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0QSwgcHJvb2ZDb250ZXh0Qikge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVGVybVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lVGVybVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVGVybVJ1bGVOYW1lICYmIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVRlcm1SdWxlTmFtZSkge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybU5vZGUodGVybU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dEEsIHByb29mQ29udGV4dEIpO1xuXG4gICAgICAgIGlmICh0ZXJtTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0QSwgcHJvb2ZDb250ZXh0Qik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dEEsIHByb29mQ29udGV4dEIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHRBLCBwcm9vZkNvbnRleHRCKSB7XG4gICAgbGV0IHRlcm1Ob2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZUEpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dEEsIHByb29mQ29udGV4dEIpO1xuXG4gICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdmFyaWFibGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Ob2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQiwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHRBLCBwcm9vZkNvbnRleHRCKSB7XG4gICAgbGV0IHZhcmlhYmxlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWVBID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVCKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lID09PSB2YXJpYWJsZU5hbWVBKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25Ob2Rlc1ZlcmlmaWVkID0gc3Vic3RpdHV0aW9uLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gc3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNyZWF0ZVN1YnN0aXR1dGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgIGlmIChjcmVhdGVTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUEsIC8vL1xuICAgICAgICAgICAgICBwcm9vZkNvbnRleHQgPSBwcm9vZkNvbnRleHRBLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGUgPSBwcm9vZkNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBwcm9vZkNvbnRleHRCLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGVCLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IGZpcnN0VHlwZSxcbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB2YXJpYWJsZVR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVmFyaWFibGVOYW1lQW5kVGVybU5vZGUodmFyaWFibGVOYW1lLCB0ZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICAgICAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlRlcm1Gb3JWYXJpYWJsZVZlcmlmaWVyIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJwcm9vZkNvbnRleHRBIiwicHJvb2ZDb250ZXh0QiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVRlcm1SdWxlTmFtZSIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlQiIsInZhcmlhYmxlTmFtZUEiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInZhcmlhYmxlTmFtZSIsImdldFZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllZCIsIm1hdGNoVGVybU5vZGUiLCJjcmVhdGVTdWJzdGl0dXRpb25zIiwiY29uc3RydWN0b3IiLCJwcm9vZkNvbnRleHQiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidHlwZXMiLCJjb250ZXh0IiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9u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