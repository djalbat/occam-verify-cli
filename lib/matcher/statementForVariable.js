"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementForVariableMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("../matcher"));
var _statementForVariable = /*#__PURE__*/ _interopRequireDefault(require("../substitution/statementForVariable"));
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
var StatementForVariableMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(StatementForVariableMatcher, Matcher);
    var _super = _createSuper(StatementForVariableMatcher);
    function StatementForVariableMatcher() {
        _classCallCheck(this, StatementForVariableMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(StatementForVariableMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(), nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.STATEMENT_RULE_NAME, nonTerminalNodeBRuleNameMetastatementRuleName = nonTerminalNodeBRuleName === _ruleNames.STATEMENT_RULE_NAME;
                if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
                    var statementNodeA = nonTerminalNodeA, statementNodeB = nonTerminalNodeB, statementNodeMatches = this.matchStatementNode(statementNodeA, statementNodeB, substitutions);
                    if (statementNodeMatches) {
                        nonTerminalNodeMatches = true; ///
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(StatementForVariableMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    }
                } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(StatementForVariableMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNodeA, statementNodeB, substitutions) {
                var statementNodeMatches = false;
                var nonTerminalNodeA = statementNodeA, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeAChildNodesLength = nonTerminalNodeAChildNodes.length;
                if (nonTerminalNodeAChildNodesLength === 1) {
                    var firstNonTerminalNodeAChildNode = (0, _array.first)(nonTerminalNodeAChildNodes), childNodeA = firstNonTerminalNodeAChildNode, childNodeANonTerminalNode = childNodeA.isNonTerminalNode();
                    if (childNodeANonTerminalNode) {
                        var nonTerminalNodeA1 = childNodeA, nonTerminalNodeARuleName = nonTerminalNodeA1.getRuleName(), nonTerminalNodeARuleNameVariableRuleName = nonTerminalNodeARuleName === _ruleNames.VARIABLE_RULE_NAME;
                        if (nonTerminalNodeARuleNameVariableRuleName) {
                            var variableNodeA = nonTerminalNodeA1, variableMatches = this.matchVariableNode(variableNodeA, statementNodeB, substitutions);
                            statementNodeMatches = variableMatches; ///
                        }
                    }
                }
                return statementNodeMatches;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNodeB, statementNodeB, substitutions) {
                var variableMatches;
                var variableNameA = (0, _query.variableNameFromVariableNode)(variableNodeB), substitution = substitutions.find(function(substitution) {
                    var variableName = substitution.getVariableName();
                    if (variableName === variableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var statementNode = statementNodeB, substitutionNodesMatch = substitution.matchStatementNode(statementNode);
                    variableMatches = substitutionNodesMatch; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var variableName = variableNameA, statementNode1 = statementNodeB, statementForVariableSubstitution = _statementForVariable.default.fromVariableNameAndStatementNode(variableName, statementNode1), substitution1 = statementForVariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    variableMatches = true;
                }
                return variableMatches;
            }
        }
    ]);
    return StatementForVariableMatcher;
}(_matcher.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL3N0YXRlbWVudEZvclZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuaW1wb3J0IFN0YXRlbWVudEZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVkFSSUFCTEVfUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JWYXJpYWJsZU1hdGNoZXIgZXh0ZW5kcyBNYXRjaGVyIHtcbiAgbWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSAmJiBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXNMZW5ndGggPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZSA9IGZpcnN0KG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZUEgPSBmaXJzdE5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZUFOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGVBLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVBTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBjaGlsZE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IFZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZVZhcmlhYmxlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB2YXJpYWJsZU1hdGNoZXM7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQiwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdmFyaWFibGVNYXRjaGVzO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lQSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQiksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZSA9PT0gdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICB2YXJpYWJsZU1hdGNoZXMgPSBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY3JlYXRlU3Vic3RpdHV0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGNyZWF0ZVN1YnN0aXR1dGlvbnMpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lQSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudEZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUodmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdmFyaWFibGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVNYXRjaGVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlN0YXRlbWVudEZvclZhcmlhYmxlTWF0Y2hlciIsIm1hdGNoTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlIiwiZmlyc3QiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSIsIlZBUklBQkxFX1JVTEVfTkFNRSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5hbWVBIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJ2YXJpYWJsZU5hbWUiLCJnZXRWYXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJjb25zdHJ1Y3RvciIsInN0YXRlbWVudEZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVmFyaWFibGVOYW1lQW5kU3RhdGVtZW50Tm9kZSIsInB1c2giLCJNYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQRDt5RUFDeUI7cUJBRXZCO3FCQUN1Qjt5QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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