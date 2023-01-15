"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "suppositionMatcher", {
    enumerable: true,
    get: function() {
        return suppositionMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("../matcher"));
var _substitution = /*#__PURE__*/ _interopRequireDefault(require("../substitution"));
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
var SuppositionMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(SuppositionMatcher, Matcher);
    var _super = _createSuper(SuppositionMatcher);
    function SuppositionMatcher() {
        _classCallCheck(this, SuppositionMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(SuppositionMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions) {
                var nonTerminalNodeMatches = false;
                var ruleName = nonTerminalNode.getRuleName(), suppositionRuleName = suppositionNonTerminalNode.getRuleName(); ///
                if (ruleName === suppositionRuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(SuppositionMatcher.prototype), "matchNonTerminalNode", this).call(this, suppositionNonTerminalNode, nonTerminalNode, substitutions);
                    if (!nonTerminalNodeMatches) {
                        var ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME;
                        if (ruleNameStatementRuleName) {
                            var statementNode = nonTerminalNode, suppositionStatementNode = suppositionNonTerminalNode, statementNodeMatches = this.matchStatementNode(suppositionStatementNode, statementNode, substitutions);
                            nonTerminalNodeMatches = statementNodeMatches; ///
                        }
                    }
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(suppositionStatementNode, statementNode, substitutions) {
                var statementNodeMatches = false;
                var suppositionNonTerminalNode = suppositionStatementNode, suppositionChildNodes = suppositionNonTerminalNode.getChildNodes(), suppositionChildNodesLength = suppositionChildNodes.length;
                if (suppositionChildNodesLength === 1) {
                    var firstSuppositionChildNode = (0, _array.first)(suppositionChildNodes), suppositionChildNode = firstSuppositionChildNode, suppositionChildNodeNonTerminalNode = suppositionChildNode.isNonTerminalNode();
                    if (suppositionChildNodeNonTerminalNode) {
                        var suppositionNonTerminalChildNode = suppositionChildNode, suppositionNonTerminalChildNodeRuleName = suppositionNonTerminalChildNode.getRuleName(), suppositionNonTerminalChildNodeRuleNameVariableRuleName = suppositionNonTerminalChildNodeRuleName === _ruleNames.VARIABLE_RULE_NAME;
                        if (suppositionNonTerminalChildNodeRuleNameVariableRuleName) {
                            var suppositionVariableNode = suppositionNonTerminalChildNode, nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes, variableMatches = this.matchVariable(suppositionVariableNode, nodes, substitutions);
                            statementNodeMatches = variableMatches; ///
                        }
                    }
                }
                return statementNodeMatches;
            }
        },
        {
            key: "matchVariable",
            value: function matchVariable(suppositionVariableNode, nodes, substitutions) {
                var variableMatches;
                var suppositionVariableName = (0, _query.variableNameFromVariableNode)(suppositionVariableNode), substitution = substitutions.find(function(substitution) {
                    var variableName = substitution.getVariableName();
                    if (variableName === suppositionVariableName) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var substitutionNodesMatch = substitution.matchNodes(nodes);
                    variableMatches = substitutionNodesMatch; ///
                } else {
                    var variableName = suppositionVariableName, substitution1 = _substitution.default.fromVariableNameAndNodes(variableName, nodes);
                    substitutions.push(substitution1);
                    variableMatches = true;
                }
                return variableMatches;
            }
        }
    ]);
    return SuppositionMatcher;
}(_matcher.default);
var suppositionMatcher = new SuppositionMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFZBUklBQkxFX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgU3VwcG9zaXRpb25NYXRjaGVyIGV4dGVuZHMgTWF0Y2hlciB7XG4gIG1hdGNoTm9uVGVybWluYWxOb2RlKHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblJ1bGVOYW1lID0gc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICBpZiAocnVsZU5hbWUgPT09IHN1cHBvc2l0aW9uUnVsZU5hbWUpIHtcbiAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFub25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3RhdGVtZW50Tm9kZShzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25Ob25UZXJtaW5hbE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbkNoaWxkTm9kZXMgPSBzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25DaGlsZE5vZGVzTGVuZ3RoID0gc3VwcG9zaXRpb25DaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbkNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwcG9zaXRpb25DaGlsZE5vZGUgPSBmaXJzdChzdXBwb3NpdGlvbkNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25DaGlsZE5vZGUgPSBmaXJzdFN1cHBvc2l0aW9uQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbkNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IHN1cHBvc2l0aW9uQ2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbkNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbk5vblRlcm1pbmFsQ2hpbGROb2RlID0gc3VwcG9zaXRpb25DaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID0gc3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbk5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVWYXJpYWJsZVJ1bGVOYW1lID0gKHN1cHBvc2l0aW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gVkFSSUFCTEVfUlVMRV9OQU1FKTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmFyaWFibGVOb2RlID0gc3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlTWF0Y2hlcyA9IHRoaXMubWF0Y2hWYXJpYWJsZShzdXBwb3NpdGlvblZhcmlhYmxlTm9kZSwgbm9kZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB2YXJpYWJsZU1hdGNoZXM7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZShzdXBwb3NpdGlvblZhcmlhYmxlTm9kZSwgbm9kZXMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdmFyaWFibGVNYXRjaGVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25WYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHN1cHBvc2l0aW9uVmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lID09PSBzdXBwb3NpdGlvblZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaE5vZGVzKG5vZGVzKTtcblxuICAgICAgdmFyaWFibGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBzdXBwb3NpdGlvblZhcmlhYmxlTmFtZSwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTmFtZUFuZE5vZGVzKHZhcmlhYmxlTmFtZSwgbm9kZXMpO1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgdmFyaWFibGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVNYXRjaGVzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdXBwb3NpdGlvbk1hdGNoZXIgPSBuZXcgU3VwcG9zaXRpb25NYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsic3VwcG9zaXRpb25NYXRjaGVyIiwiU3VwcG9zaXRpb25NYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJzdXBwb3NpdGlvbk5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInN1cHBvc2l0aW9uUnVsZU5hbWUiLCJydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzdXBwb3NpdGlvbkNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN1cHBvc2l0aW9uQ2hpbGROb2RlIiwiZmlyc3QiLCJzdXBwb3NpdGlvbkNoaWxkTm9kZSIsInN1cHBvc2l0aW9uQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJzdXBwb3NpdGlvbk5vblRlcm1pbmFsQ2hpbGROb2RlIiwic3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lIiwic3VwcG9zaXRpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lVmFyaWFibGVSdWxlTmFtZSIsIlZBUklBQkxFX1JVTEVfTkFNRSIsInN1cHBvc2l0aW9uVmFyaWFibGVOb2RlIiwiY2hpbGROb2RlcyIsIm5vZGVzIiwidmFyaWFibGVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZSIsInN1cHBvc2l0aW9uVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJ2YXJpYWJsZU5hbWUiLCJnZXRWYXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsIlN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5hbWVBbmROb2RlcyIsInB1c2giLCJNYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnR2FBOzs7ZUFBQUE7Ozs0REE5Rk87aUVBQ0s7cUJBRUg7cUJBQ3VCO3lCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBQSxBQUFNQyxtQ0F1RkgsQUF2Rkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsMEJBQTBCLEVBQUVDLGVBQWUsRUFBRUMsYUFBYSxFQUFFO2dCQUMvRSxJQUFJQyx5QkFBeUIsS0FBSztnQkFFbEMsSUFBTUMsV0FBV0gsZ0JBQWdCSSxXQUFXLElBQ3RDQyxzQkFBc0JOLDJCQUEyQkssV0FBVyxJQUFJLEdBQUc7Z0JBRXpFLElBQUlELGFBQWFFLHFCQUFxQjtvQkFDcENILHlCQUF5QixxQkFSekJMLCtCQVErQkMsd0JBQU4sSUFBSyxhQUFzQkMsNEJBQTRCQyxpQkFBaUJDO29CQUVqRyxJQUFJLENBQUNDLHdCQUF3Qjt3QkFDM0IsSUFBTUksNEJBQTZCSCxhQUFhSSw4QkFBbUI7d0JBRW5FLElBQUlELDJCQUEyQjs0QkFDN0IsSUFBTUUsZ0JBQWdCUixpQkFDaEJTLDJCQUEyQlYsNEJBQzNCVyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0YsMEJBQTBCRCxlQUFlUDs0QkFFOUZDLHlCQUF5QlEsc0JBQXNCLEdBQUc7d0JBQ3BELENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9SO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CRix3QkFBd0IsRUFBRUQsYUFBYSxFQUFFUCxhQUFhLEVBQUU7Z0JBQ3pFLElBQUlTLHVCQUF1QixLQUFLO2dCQUVoQyxJQUFNWCw2QkFBNkJVLDBCQUM3Qkcsd0JBQXdCYiwyQkFBMkJjLGFBQWEsSUFDaEVDLDhCQUE4QkYsc0JBQXNCRyxNQUFNO2dCQUVoRSxJQUFJRCxnQ0FBZ0MsR0FBRztvQkFDckMsSUFBTUUsNEJBQTRCQyxJQUFBQSxZQUFLLEVBQUNMLHdCQUNsQ00sdUJBQXVCRiwyQkFDdkJHLHNDQUFzQ0QscUJBQXFCRSxpQkFBaUI7b0JBRWxGLElBQUlELHFDQUFxQzt3QkFDdkMsSUFBTUUsa0NBQWtDSCxzQkFDbENJLDBDQUEwQ0QsZ0NBQWdDakIsV0FBVyxJQUNyRm1CLDBEQUEyREQsNENBQTRDRSw2QkFBa0I7d0JBRS9ILElBQUlELHlEQUF5RDs0QkFDM0QsSUFBTUUsMEJBQTBCSixpQ0FDMUJyQixrQkFBa0JRLGVBQ2xCa0IsYUFBYTFCLGdCQUFnQmEsYUFBYSxJQUMxQ2MsUUFBUUQsWUFDUkUsa0JBQWtCLElBQUksQ0FBQ0MsYUFBYSxDQUFDSix5QkFBeUJFLE9BQU8xQjs0QkFFM0VTLHVCQUF1QmtCLGlCQUFpQixHQUFHO3dCQUM3QyxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPbEI7WUFDVDs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0osdUJBQXVCLEVBQUVFLEtBQUssRUFBRTFCLGFBQWEsRUFBRTtnQkFDM0QsSUFBSTJCO2dCQUVKLElBQU1FLDBCQUEwQkMsSUFBQUEsbUNBQTRCLEVBQUNOLDBCQUN2RE8sZUFBZS9CLGNBQWNnQyxJQUFJLENBQUMsU0FBQ0QsY0FBaUI7b0JBQ2xELElBQU1FLGVBQWVGLGFBQWFHLGVBQWU7b0JBRWpELElBQUlELGlCQUFpQkoseUJBQXlCO3dCQUM1QyxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxNQUFNLElBQUk7Z0JBRWhCLElBQUlFLGlCQUFpQixJQUFJLEVBQUU7b0JBQ3pCLElBQU1JLHlCQUF5QkosYUFBYUssVUFBVSxDQUFDVjtvQkFFdkRDLGtCQUFrQlEsd0JBQXlCLEdBQUc7Z0JBQ2hELE9BQU87b0JBQ0wsSUFBTUYsZUFBZUoseUJBQ2ZFLGdCQUFlTSxxQkFBWSxDQUFDQyx3QkFBd0IsQ0FBQ0wsY0FBY1A7b0JBRXpFMUIsY0FBY3VDLElBQUksQ0FBQ1I7b0JBRW5CSixrQkFBa0IsSUFBSTtnQkFDeEIsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7V0FwRkkvQjtFQUEyQjRDLGdCQUFPO0FBdUZqQyxJQUFNN0MscUJBQXFCLElBQUlDIn0=