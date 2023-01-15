"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubstitutionMatcher;
    }
});
var _substitution = /*#__PURE__*/ _interopRequireDefault(require("../substitution"));
var _generic = /*#__PURE__*/ _interopRequireDefault(require("../matcher/generic"));
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
var SubstitutionMatcher = /*#__PURE__*/ function(GenericMatcher) {
    _inherits(SubstitutionMatcher, GenericMatcher);
    var _super = _createSuper(SubstitutionMatcher);
    function SubstitutionMatcher() {
        _classCallCheck(this, SubstitutionMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(SubstitutionMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(SubstitutionMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    if (!nonTerminalNodeMatches) {
                        var nonTerminalNodeBuleNameStatementRuleName = nonTerminalNodeBRuleName === _ruleNames.STATEMENT_RULE_NAME;
                        if (nonTerminalNodeBuleNameStatementRuleName) {
                            var statementNodeA = nonTerminalNodeA, statementNodeB = nonTerminalNodeB, statementNodeMatches = this.matchStatementNode(statementNodeA, statementNodeB, substitutions);
                            nonTerminalNodeMatches = statementNodeMatches; ///
                        }
                    }
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
                        var variableName = variableNameA, statementNode1 = statementNodeB, substitution1 = _substitution.default.fromVariableNameAndStatementNode(variableName, statementNode1);
                        substitutions.push(substitution1);
                    }
                    variableMatches = true;
                }
                return variableMatches;
            }
        }
    ]);
    return SubstitutionMatcher;
}(_generic.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL3N1YnN0aXR1dGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5pbXBvcnQgR2VuZXJpY01hdGNoZXIgZnJvbSBcIi4uL21hdGNoZXIvZ2VuZXJpY1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBWQVJJQUJMRV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbk1hdGNoZXIgZXh0ZW5kcyBHZW5lcmljTWF0Y2hlciB7XG4gIG1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIW5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVCdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlc0xlbmd0aCA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlID0gZmlyc3Qobm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgY2hpbGROb2RlQSA9IGZpcnN0Tm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZUFOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IGNoaWxkTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVWYXJpYWJsZVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gVkFSSUFCTEVfUlVMRV9OQU1FKTtcblxuICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVNYXRjaGVzID0gdGhpcy5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHZhcmlhYmxlTWF0Y2hlczsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVCLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB2YXJpYWJsZU1hdGNoZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWVBID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVCKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lID09PSB2YXJpYWJsZU5hbWVBKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIHZhcmlhYmxlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBjcmVhdGVTdWJzdGl0dXRpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoY3JlYXRlU3Vic3RpdHV0aW9ucykge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gU3Vic3RpdHV0aW9uLmZyb21WYXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlKHZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG4gICAgICB9XG5cbiAgICAgIHZhcmlhYmxlTWF0Y2hlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlTWF0Y2hlcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb25NYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlIiwiZmlyc3QiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSIsIlZBUklBQkxFX1JVTEVfTkFNRSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5hbWVBIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJ2YXJpYWJsZU5hbWUiLCJnZXRWYXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJjb25zdHJ1Y3RvciIsIlN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsIkdlbmVyaWNNYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztpRUFQSTs0REFDRTtxQkFFTDtxQkFDdUI7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFBLEFBQU1BLG9DQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRTtnQkFDdEUsSUFBSUMseUJBQXlCLEtBQUs7Z0JBRWxDLElBQU1DLDJCQUEyQkosaUJBQWlCSyxXQUFXLElBQ3ZEQywyQkFBMkJMLGlCQUFpQkksV0FBVztnQkFFN0QsSUFBSUQsNkJBQTZCRSwwQkFBMEI7b0JBQ3pESCx5QkFBeUIscUJBUlZMLGdDQVFnQkMsd0JBQU4sSUFBSyxhQUFzQkMsa0JBQWtCQyxrQkFBa0JDO29CQUV4RixJQUFJLENBQUNDLHdCQUF3Qjt3QkFDM0IsSUFBTUksMkNBQTRDRCw2QkFBNkJFLDhCQUFtQjt3QkFFbEcsSUFBSUQsMENBQTBDOzRCQUM1QyxJQUFNRSxpQkFBaUJULGtCQUNqQlUsaUJBQWlCVCxrQkFDakJVLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDSCxnQkFBZ0JDLGdCQUFnQlI7NEJBRXJGQyx5QkFBeUJRLHNCQUFzQixHQUFHO3dCQUNwRCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPUjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkgsY0FBYyxFQUFFQyxjQUFjLEVBQUVSLGFBQWEsRUFBRTtnQkFDaEUsSUFBSVMsdUJBQXVCLEtBQUs7Z0JBRWhDLElBQU1YLG1CQUFtQlMsZ0JBQ25CSSw2QkFBNkJiLGlCQUFpQmMsYUFBYSxJQUMzREMsbUNBQW1DRiwyQkFBMkJHLE1BQU07Z0JBRTFFLElBQUlELHFDQUFxQyxHQUFHO29CQUMxQyxJQUFNRSxpQ0FBaUNDLElBQUFBLFlBQUssRUFBQ0wsNkJBQ3ZDTSxhQUFhRixnQ0FDYkcsNEJBQTRCRCxXQUFXRSxpQkFBaUI7b0JBRTlELElBQUlELDJCQUEyQjt3QkFDN0IsSUFBTXBCLG9CQUFtQm1CLFlBQ25CZiwyQkFBMkJKLGtCQUFpQkssV0FBVyxJQUN2RGlCLDJDQUE0Q2xCLDZCQUE2Qm1CLDZCQUFrQjt3QkFFakcsSUFBSUQsMENBQTBDOzRCQUM1QyxJQUFNRSxnQkFBZ0J4QixtQkFDaEJ5QixrQkFBa0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0YsZUFBZWQsZ0JBQWdCUjs0QkFFOUVTLHVCQUF1QmMsaUJBQWlCLEdBQUc7d0JBQzdDLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9kO1lBQ1Q7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxhQUFhLEVBQUVqQixjQUFjLEVBQUVSLGFBQWEsRUFBRTtnQkFDOUQsSUFBSXVCO2dCQUVKLElBQU1HLGdCQUFnQkMsSUFBQUEsbUNBQTRCLEVBQUNGLGdCQUM3Q0csZUFBZTVCLGNBQWM2QixJQUFJLENBQUMsU0FBQ0QsY0FBaUI7b0JBQ2xELElBQU1FLGVBQWVGLGFBQWFHLGVBQWU7b0JBRWpELElBQUlELGlCQUFpQkosZUFBZTt3QkFDbEMsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsTUFBTSxJQUFJO2dCQUVoQixJQUFJRSxpQkFBaUIsSUFBSSxFQUFFO29CQUN6QixJQUFNSSxnQkFBZ0J4QixnQkFDaEJ5Qix5QkFBeUJMLGFBQWFsQixrQkFBa0IsQ0FBQ3NCO29CQUUvRFQsa0JBQWtCVSx3QkFBeUIsR0FBRztnQkFDaEQsT0FBTztvQkFDTCxJQUFNLEFBQUVDLHNCQUF3QixJQUFJLENBQUNDLFdBQVcsQ0FBeENEO29CQUVSLElBQUlBLHFCQUFxQjt3QkFDdkIsSUFBTUosZUFBZUosZUFDZk0saUJBQWdCeEIsZ0JBQ2hCb0IsZ0JBQWVRLHFCQUFZLENBQUNDLGdDQUFnQyxDQUFDUCxjQUFjRTt3QkFFakZoQyxjQUFjc0MsSUFBSSxDQUFDVjtvQkFDckIsQ0FBQztvQkFFREwsa0JBQWtCLElBQUk7Z0JBQ3hCLENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1dBdkZtQjNCO0VBQTRCMkMsZ0JBQWMifQ==