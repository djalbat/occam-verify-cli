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
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContext) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(), nonTerminalNodeBRuleNameMetaArgumentRuleName = nonTerminalNodeBRuleName === _ruleNames.META_ARGUMENT_RULE_NAME;
                if (nonTerminalNodeBRuleNameMetaArgumentRuleName) {
                    var metaArgumentNodeB = nonTerminalNodeB, metaArgumentChildNodeB = metaArgumentChildNodeNodeQuery(metaArgumentNodeB);
                    nonTerminalNodeB = metaArgumentChildNodeB; ///
                    nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContext);
                } else {
                    var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName1 = nonTerminalNodeB.getRuleName(), nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameStatementRuleName = nonTerminalNodeBRuleName1 === _ruleNames.STATEMENT_RULE_NAME;
                    if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
                        var metastatementNodeA = nonTerminalNodeA, statementNodeB = nonTerminalNodeB, statementNodeVerified = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, proofContext);
                        if (statementNodeVerified) {
                            nonTerminalNodeVerified = true; ///
                        } else {
                            var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesMatch = this.verifyNodes(nodesA, nodesB, substitutions, proofContext);
                            nonTerminalNodeVerified = nodesMatch; ///
                        }
                    } else if (nonTerminalNodeBRuleName1 === nonTerminalNodeARuleName) {
                        nonTerminalNodeVerified = _get(_getPrototypeOf(StatementForMetavariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContext);
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyStatementNode",
            value: function verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, proofContext) {
                var statementNodeVerified = false;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, proofContext);
                    statementNodeVerified = metavariableNodeVerified; ///
                }
                return statementNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, proofContext) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoJy9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSEnKSxcbiAgICAgIG1ldGFBcmd1bWVudENoaWxkTm9kZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFBcmd1bWVudC8qIScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFBcmd1bWVudFJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFBcmd1bWVudFJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBtZXRhQXJndW1lbnROb2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsIC8vL1xuICAgICAgICAgICAgbWV0YUFyZ3VtZW50Q2hpbGROb2RlQiA9IG1ldGFBcmd1bWVudENoaWxkTm9kZU5vZGVRdWVyeShtZXRhQXJndW1lbnROb2RlQik7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhQXJndW1lbnRDaGlsZE5vZGVCOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSAmJiBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50Tm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IHRoaXMudmVyaWZ5Tm9kZXMobm9kZXNBLCBub2Rlc0IsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzTWF0Y2g7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSkge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBwcm9vZkNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZUEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY3JlYXRlU3Vic3RpdHV0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGNyZWF0ZVN1YnN0aXR1dGlvbnMpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOYW1lQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG4gICAgICB9XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFBcmd1bWVudENoaWxkTm9kZU5vZGVRdWVyeSIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsInByb29mQ29udGV4dCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhQXJndW1lbnRSdWxlTmFtZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZUIiLCJtZXRhQXJndW1lbnRDaGlsZE5vZGVCIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudE5vZGVWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJ2ZXJpZnlOb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyIsImNvbnN0cnVjdG9yIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsIlZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozs2REFWQTs2RUFDNEI7cUJBRXZCO3lCQUU0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDbENDLGlDQUFpQ0QsSUFBQUEsZ0JBQVMsRUFBQztBQUVsQyxJQUFBLEFBQU1GLGlEQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7Oztp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