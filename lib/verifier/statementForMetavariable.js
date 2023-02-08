"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementForMetavariableVerifier;
    }
});
var _verifier = /*#__PURE__*/ _interopRequireDefault(require("../verifier"));
var _statementForMetavariable = /*#__PURE__*/ _interopRequireDefault(require("../substitution/statementForMetavariable"));
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
var metavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!"), metaArgumentChildNodeNodeQuery = (0, _query.nodeQuery)("/metaArgument/*!");
var StatementForMetavariableVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(StatementForMetavariableVerifier, Verifier);
    var _super = _createSuper(StatementForMetavariableVerifier);
    function StatementForMetavariableVerifier() {
        _classCallCheck(this, StatementForMetavariableVerifier);
        return _super.apply(this, arguments);
    }
    _createClass(StatementForMetavariableVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(), nonTerminalNodeBRuleNameMetaArgumentRuleName = nonTerminalNodeBRuleName === _ruleNames.META_ARGUMENT_RULE_NAME;
                if (nonTerminalNodeBRuleNameMetaArgumentRuleName) {
                    var metaArgumentNodeB = nonTerminalNodeB, metaArgumentChildNodeB = metaArgumentChildNodeNodeQuery(metaArgumentNodeB);
                    nonTerminalNodeB = metaArgumentChildNodeB; ///
                    nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
                } else {
                    var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName1 = nonTerminalNodeB.getRuleName(), nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameStatementRuleName = nonTerminalNodeBRuleName1 === _ruleNames.STATEMENT_RULE_NAME;
                    if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
                        var metastatementNodeA = nonTerminalNodeA, statementNodeB = nonTerminalNodeB, statementNodeVerified = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions);
                        if (statementNodeVerified) {
                            nonTerminalNodeVerified = true; ///
                        } else {
                            var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesMatch = this.verifyNodes(nodesA, nodesB, substitutions);
                            nonTerminalNodeVerified = nodesMatch; ///
                        }
                    } else if (nonTerminalNodeBRuleName1 === nonTerminalNodeARuleName) {
                        nonTerminalNodeVerified = _get(_getPrototypeOf(StatementForMetavariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyStatementNode",
            value: function verifyStatementNode(metastatementNodeA, statementNodeB, substitutions) {
                var statementNodeVerified = false;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions);
                    statementNodeVerified = metavariableNodeVerified; ///
                }
                return statementNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions) {
                var metavariableNodeVerified;
                var metavariableNameA = (0, _query.metavariableNameFromMetavariableNode)(metavariableNodeA), substitution = substitutions.find(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName === metavariableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var statementNode = statementNodeB, statementNodeMatches = substitution.matchStatementNode(statementNode);
                    metavariableNodeVerified = statementNodeMatches; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var metavariableName = metavariableNameA, statementNode1 = statementNodeB, statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNameAndStatementNode(metavariableName, statementNode1), substitution1 = statementForMetavariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    metavariableNodeVerified = true;
                }
                return metavariableNodeVerified;
            }
        }
    ]);
    return StatementForMetavariableVerifier;
}(_verifier.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoJy9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSEnKSxcbiAgICAgIG1ldGFBcmd1bWVudENoaWxkTm9kZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFBcmd1bWVudC8qIScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhQXJndW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FKTtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhQXJndW1lbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgIG1ldGFBcmd1bWVudENoaWxkTm9kZUIgPSBtZXRhQXJndW1lbnRDaGlsZE5vZGVOb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZUIpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YUFyZ3VtZW50Q2hpbGROb2RlQjsgIC8vL1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lICYmIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50Tm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IHRoaXMudmVyaWZ5Tm9kZXMobm9kZXNBLCBub2Rlc0IsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc01hdGNoOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjcmVhdGVTdWJzdGl0dXRpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoY3JlYXRlU3Vic3RpdHV0aW9ucykge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUEsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YUFyZ3VtZW50Q2hpbGROb2RlTm9kZVF1ZXJ5IiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFBcmd1bWVudFJ1bGVOYW1lIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlQiIsIm1ldGFBcmd1bWVudENoaWxkTm9kZUIiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsInZlcmlmeU5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJjcmVhdGVTdWJzdGl0dXRpb25zIiwiY29uc3RydWN0b3IiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUiLCJwdXNoIiwiVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzZEQVZBOzZFQUM0QjtxQkFFdkI7eUJBRTREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLGlDQUNsQ0MsaUNBQWlDRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWxDLElBQUEsQUFBTUYsaURBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO2dCQUN2RSxJQUFJQywwQkFBMEIsS0FBSztnQkFFbkMsSUFBTUMsMkJBQTJCSCxpQkFB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