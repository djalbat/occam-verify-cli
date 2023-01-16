"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementForMetavariableMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("../matcher"));
var _statementForMetavariable = /*#__PURE__*/ _interopRequireDefault(require("../substitution/statementForMetavariable"));
var _array = require("../utilities/array");
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
var StatementForMetavariableMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(StatementForMetavariableMatcher, Matcher);
    var _super = _createSuper(StatementForMetavariableMatcher);
    function StatementForMetavariableMatcher() {
        _classCallCheck(this, StatementForMetavariableMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(StatementForMetavariableMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(), nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameStatementRuleName = nonTerminalNodeBRuleName === STATEMENT_RULE_NAME;
                if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
                    var metastatementNodeA = nonTerminalNodeA, statementNodeB = nonTerminalNodeB, statementNodeMatches = this.matchStatementNode(metastatementNodeA, statementNodeB, substitutions);
                    if (statementNodeMatches) {
                        nonTerminalNodeMatches = true; ///
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(StatementForMetavariableMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    }
                } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(StatementForMetavariableMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(metastatementNodeA, statementNodeB, substitutions) {
                var statementNodeMatches = false;
                var nonTerminalNodeA = metastatementNodeA, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeAChildNodesLength = nonTerminalNodeAChildNodes.length;
                if (nonTerminalNodeAChildNodesLength === 1) {
                    var firstNonTerminalNodeAChildNode = (0, _array.first)(nonTerminalNodeAChildNodes), cChildNodeA = firstNonTerminalNodeAChildNode, cChildNodeANonTerminalNode = cChildNodeA.isNonTerminalNode();
                    if (cChildNodeANonTerminalNode) {
                        var nonTerminalNodeA1 = cChildNodeA, nonTerminalNodeARuleName = nonTerminalNodeA1.getRuleName(), nonTerminalNodeARuleNameMetavariableRuleName = nonTerminalNodeARuleName === _ruleNames.METAVARIABLE_RULE_NAME;
                        if (nonTerminalNodeARuleNameMetavariableRuleName) {
                            var metavariableNodeA = nonTerminalNodeA1, metaVariableNodeMatches = this.matchMetavariableNode(metavariableNodeA, statementNodeB, substitutions);
                            statementNodeMatches = metaVariableNodeMatches; ///
                        }
                    }
                }
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNodeA, statementNodeB, substitutions) {
                var metavariableNodeMatches;
                var metavariableNameA = (0, _query.metavariableNameFromMetavariableNode)(metavariableNodeA), substitution = substitutions.find(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName === metavariableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var statementNode = statementNodeB, substitutionNodesMatch = substitution.matchStatementNode(statementNode);
                    metavariableNodeMatches = substitutionNodesMatch; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var metavariableName = metavariableNameA, statementNode1 = statementNodeB, statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNameAndStatementNode(metavariableName, statementNode1), substitution1 = statementForMetavariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    metavariableNodeMatches = true;
                }
                return metavariableNodeMatches;
            }
        }
    ]);
    return StatementForMetavariableMatcher;
}(_matcher.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hdGNoZXIgZnJvbSBcIi4uL21hdGNoZXJcIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciBleHRlbmRzIE1hdGNoZXIge1xuICBtYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lICYmIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlc0xlbmd0aCA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlID0gZmlyc3Qobm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMpLFxuICAgICAgICBjQ2hpbGROb2RlQSA9IGZpcnN0Tm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICBjQ2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSA9IGNDaGlsZE5vZGVBLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjQ2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gY0NoaWxkTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUpO1xuXG4gICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWV0YVZhcmlhYmxlTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjcmVhdGVTdWJzdGl0dXRpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoY3JlYXRlU3Vic3RpdHV0aW9ucykge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUEsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZSIsImZpcnN0IiwiY0NoaWxkTm9kZUEiLCJjQ2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJjb25zdHJ1Y3RvciIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kU3RhdGVtZW50Tm9kZSIsInB1c2giLCJNYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQRDs2RUFDNkI7cUJBRTNCO3FCQUMrQjt5QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQUEsQUFBTUEsZ0RBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFO2dCQUN0RSxJQUFJQyx5QkFBeUIsS0FBSztnQkFFbEMsSUFBTUMsMkJBQTJCSixpQkFBaUJLLFdBQVcsSUFDdkRDLDJCQUEyQkwsaUJBQWlCSSxXQUFXLElBQ3ZERSxnREFBaURILDZCQUE2Qkksa0NBQXVCLEVBQ3JHQyw0Q0FBNkNILDZCQUE2Qkk7Z0JBRWhGLElBQUlILGlEQUFpREUsMkNBQTJDO29CQUM5RixJQUFNRSxxQkFBcUJYLGtCQUNyQlksaUJBQWlCWCxrQkFDakJZLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDSCxvQkFBb0JDLGdCQUFnQlY7b0JBRXpGLElBQUlXLHNCQUFzQjt3QkFDeEJWLHlCQUF5QixJQUFJLEVBQUcsR0FBRztvQkFDckMsT0FBTzt3QkFDTEEseUJBQXlCLHFCQWpCWkwsNENBaUJrQkMsd0JBQU4sSUFBSyxhQUFzQkMsa0JBQWtCQyxrQkFBa0JDO29CQUMxRixDQUFDO2dCQUNILE9BQU8sSUFBSUksNkJBQTZCRiwwQkFBMEI7b0JBQ2hFRCx5QkFBeUIscUJBcEJWTCw0Q0FvQmdCQyx3QkFBTixJQUFLLGFBQXNCQyxrQkFBa0JDLGtCQUFrQkM7Z0JBQzFGLENBQUM7Z0JBRUQsT0FBT0M7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJILGtCQUFrQixFQUFFQyxjQUFjLEVBQUVWLGFBQWEsRUFBRTtnQkFDcEUsSUFBSVcsdUJBQXVCLEtBQUs7Z0JBRWhDLElBQU1iLG1CQUFtQlcsb0JBQ25CSSw2QkFBNkJmLGlCQUFpQmdCLGFBQWEsSUFDM0RDLG1DQUFtQ0YsMkJBQTJCRyxNQUFNO2dCQUUxRSxJQUFJRCxxQ0FBcUMsR0FBRztvQkFDMUMsSUFBTUUsaUNBQWlDQyxJQUFBQSxZQUFLLEVBQUNMLDZCQUMzQ00sY0FBY0YsZ0NBQ2RHLDZCQUE2QkQsWUFBWUUsaUJBQWlCO29CQUU1RCxJQUFJRCw0QkFBNEI7d0JBQzlCLElBQU10QixvQkFBbUJxQixhQUNuQmpCLDJCQUEyQkosa0JBQWlCSyxXQUFXLElBQ3ZEbUIsK0NBQWdEcEIsNkJBQTZCcUIsaUNBQXNCO3dCQUV6RyxJQUFJRCw4Q0FBOEM7NEJBQ2hELElBQU1FLG9CQUFvQjFCLG1CQUNwQjJCLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDRixtQkFBbUJkLGdCQUFnQlY7NEJBRTlGVyx1QkFBdUJjLHlCQUF5QixHQUFHO3dCQUNyRCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPZDtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkYsaUJBQWlCLEVBQUVkLGNBQWMsRUFBRVYsYUFBYSxFQUFFO2dCQUN0RSxJQUFJMkI7Z0JBRUosSUFBTUMsb0JBQW9CQyxJQUFBQSwyQ0FBb0MsRUFBQ0wsb0JBQ3pETSxlQUFlOUIsY0FBYytCLElBQUksQ0FBQyxTQUFDRCxjQUFpQjtvQkFDbEQsSUFBTUUsbUJBQW1CRixhQUFhRyxtQkFBbUI7b0JBRXpELElBQUlELHFCQUFxQkosbUJBQW1CO3dCQUMxQyxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxNQUFNLElBQUk7Z0JBRWhCLElBQUlFLGlCQUFpQixJQUFJLEVBQUU7b0JBQ3pCLElBQU1JLGdCQUFnQnhCLGdCQUNoQnlCLHlCQUF5QkwsYUFBYWxCLGtCQUFrQixDQUFDc0I7b0JBRS9EUCwwQkFBMEJRLHdCQUF5QixHQUFHO2dCQUN4RCxPQUFPO29CQUNMLElBQU0sQUFBRUMsc0JBQXdCLElBQUksQ0FBQ0MsV0FBVyxDQUF4Q0Q7b0JBRVIsSUFBSUEscUJBQXFCO3dCQUN2QixJQUFNSixtQkFBbUJKLG1CQUNuQk0saUJBQWdCeEIsZ0JBQ2hCNEIsdUNBQXVDQyxpQ0FBb0MsQ0FBQ0Msb0NBQW9DLENBQUNSLGtCQUFrQkUsaUJBQ25JSixnQkFBZVEsc0NBQXVDLEdBQUc7d0JBRS9EdEMsY0FBY3lDLElBQUksQ0FBQ1g7b0JBQ3JCLENBQUM7b0JBRURILDBCQUEwQixJQUFJO2dCQUNoQyxDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7OztXQXhGbUIvQjtFQUF3QzhDLGdCQUFPIn0=