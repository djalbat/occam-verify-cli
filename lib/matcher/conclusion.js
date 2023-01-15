"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conclusionMatcher", {
    enumerable: true,
    get: function() {
        return conclusionMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("../matcher"));
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
var ConclusionMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(ConclusionMatcher, Matcher);
    var _super = _createSuper(ConclusionMatcher);
    function ConclusionMatcher() {
        _classCallCheck(this, ConclusionMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(ConclusionMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, substitutions) {
                var nonTerminalNodeMatches = false;
                var ruleName = nonTerminalNode.getRuleName(), conclusionNonTerminalNodeRuleName = conclusionNonTerminalNode.getRuleName(), ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME, conclusionNonTerminalNodeRuleNameMetastatementRuleName = conclusionNonTerminalNodeRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
                if (ruleNameStatementRuleName && conclusionNonTerminalNodeRuleNameMetastatementRuleName) {
                    var statementNode = nonTerminalNode, conclusionMetastatementNode = conclusionNonTerminalNode, metastatementNodeMatches = this.matchMetastatementNode(conclusionMetastatementNode, statementNode, substitutions);
                    if (metastatementNodeMatches) {
                        nonTerminalNodeMatches = true; ///
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(ConclusionMatcher.prototype), "matchNonTerminalNode", this).call(this, conclusionNonTerminalNode, nonTerminalNode, substitutions);
                    }
                } else if (ruleName === conclusionNonTerminalNodeRuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(ConclusionMatcher.prototype), "matchNonTerminalNode", this).call(this, conclusionNonTerminalNode, nonTerminalNode, substitutions);
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(conclusionMetavariableNode, statementNode, substitutions) {
                var metavariableNodeMatches = true;
                var conclusionMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(conclusionMetavariableNode), substitution = substitutions.find(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName === conclusionMetavariableName) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var substitutionNodesMatch = substitution.matchStatementNode(statementNode);
                    metavariableNodeMatches = substitutionNodesMatch; ///
                }
                return metavariableNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(conclusionMetastatementNode, statementNode, substitutions) {
                var metastatementNodeMatches = false;
                var conclusionNonTerminalNode = conclusionMetastatementNode, conclusionNonTerminalNodeChildNodes = conclusionNonTerminalNode.getChildNodes(), conclusionNonTerminalNodeChildNodesLength = conclusionNonTerminalNodeChildNodes.length;
                if (conclusionNonTerminalNodeChildNodesLength === 1) {
                    var firstConclusionChildNode = (0, _array.first)(conclusionNonTerminalNodeChildNodes), conclusionChildNode = firstConclusionChildNode, conclusionChildNodeNonTerminalNode = conclusionChildNode.isNonTerminalNode();
                    if (conclusionChildNodeNonTerminalNode) {
                        var conclusionNonTerminalChildNode = conclusionChildNode, conclusionNonTerminalChildNodeRuleName = conclusionNonTerminalChildNode.getRuleName(), conclusionNonTerminalChildNodeRuleNameMetavariableRuleName = conclusionNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
                        if (conclusionNonTerminalChildNodeRuleNameMetavariableRuleName) {
                            var conclusionMetavariableNode = conclusionNonTerminalChildNode, metavariableNodeMatches = this.matchMetavariableNode(conclusionMetavariableNode, statementNode, substitutions);
                            metastatementNodeMatches = metavariableNodeMatches; ///
                        }
                    }
                }
                return metastatementNodeMatches;
            }
        }
    ]);
    return ConclusionMatcher;
}(_matcher.default);
var conclusionMatcher = new ConclusionMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL2NvbmNsdXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIENvbmNsdXNpb25NYXRjaGVyIGV4dGVuZHMgTWF0Y2hlciB7XG4gIG1hdGNoTm9uVGVybWluYWxOb2RlKGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBTVEFURU1FTlRfUlVMRV9OQU1FKSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAoY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAocnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSAmJiBjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNvbmNsdXNpb25NZXRhc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShjb25jbHVzaW9uTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSB0cnVlOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnVsZU5hbWUgPT09IGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUoY29uY2x1c2lvbk1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0cnVlO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbk1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUoY29uY2x1c2lvbk1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWUgPT09IGNvbmNsdXNpb25NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShjb25jbHVzaW9uTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlID0gY29uY2x1c2lvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9IGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDb25jbHVzaW9uQ2hpbGROb2RlID0gZmlyc3QoY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgY29uY2x1c2lvbkNoaWxkTm9kZSA9IGZpcnN0Q29uY2x1c2lvbkNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgY29uY2x1c2lvbkNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNvbmNsdXNpb25DaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25DaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgY29uY2x1c2lvbk5vblRlcm1pbmFsQ2hpbGROb2RlID0gY29uY2x1c2lvbkNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb25jbHVzaW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IGNvbmNsdXNpb25Ob25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBjb25jbHVzaW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lID0gKGNvbmNsdXNpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID09PSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FKTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvbk5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25NZXRhdmFyaWFibGVOb2RlID0gY29uY2x1c2lvbk5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShjb25jbHVzaW9uTWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlczsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25jbHVzaW9uTWF0Y2hlciA9IG5ldyBDb25jbHVzaW9uTWF0Y2hlcigpO1xuIl0sIm5hbWVzIjpbImNvbmNsdXNpb25NYXRjaGVyIiwiQ29uY2x1c2lvbk1hdGNoZXIiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsImNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsImNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwic3RhdGVtZW50Tm9kZSIsImNvbmNsdXNpb25NZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb25jbHVzaW9uTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwiY29uY2x1c2lvbk1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENvbmNsdXNpb25DaGlsZE5vZGUiLCJmaXJzdCIsImNvbmNsdXNpb25DaGlsZE5vZGUiLCJjb25jbHVzaW9uQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJjb25jbHVzaW9uTm9uVGVybWluYWxDaGlsZE5vZGUiLCJjb25jbHVzaW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSIsImNvbmNsdXNpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwiTWF0Y2hlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUZhQTs7O2VBQUFBOzs7NERBbkZPO3FCQUVFO3FCQUMrQjt5QkFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRixJQUFBLEFBQU1DLGtDQTZFSCxBQTdFSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyx5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