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
                var nonTerminalNodeVerifies = false;
                var nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(), nonTerminalNodeBRuleNameMetaArgumentRuleName = nonTerminalNodeBRuleName === _ruleNames.META_ARGUMENT_RULE_NAME;
                if (nonTerminalNodeBRuleNameMetaArgumentRuleName) {
                    var metaArgumentNodeB = nonTerminalNodeB, metaArgumentChildNodeB = metaArgumentChildNodeNodeQuery(metaArgumentNodeB);
                    nonTerminalNodeB = metaArgumentChildNodeB; ///
                    nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
                } else {
                    var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName1 = nonTerminalNodeB.getRuleName(), nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameStatementRuleName = nonTerminalNodeBRuleName1 === _ruleNames.STATEMENT_RULE_NAME;
                    if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
                        var metastatementNodeA = nonTerminalNodeA, statementNodeB = nonTerminalNodeB, statementNodeVerifies = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions);
                        if (statementNodeVerifies) {
                            nonTerminalNodeVerifies = true; ///
                        } else {
                            var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nodesA = nonTerminalNodeAChildNodes, nodesB = nonTerminalNodeBChildNodes, nodesMatch = this.verifyNodes(nodesA, nodesB, substitutions);
                            nonTerminalNodeVerifies = nodesMatch; ///
                        }
                    } else if (nonTerminalNodeBRuleName1 === nonTerminalNodeARuleName) {
                        nonTerminalNodeVerifies = _get(_getPrototypeOf(StatementForMetavariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    }
                }
                return nonTerminalNodeVerifies;
            }
        },
        {
            key: "verifyStatementNode",
            value: function verifyStatementNode(metastatementNodeA, statementNodeB, substitutions) {
                var statementNodeVerifies = false;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metavariableNodeVerifies = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions);
                    statementNodeVerifies = metavariableNodeVerifies; ///
                }
                return statementNodeVerifies;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions) {
                var metavariableNodeVerifies;
                var metavariableNameA = (0, _query.metavariableNameFromMetavariableNode)(metavariableNodeA), substitution = substitutions.find(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName === metavariableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var statementNode = statementNodeB, substitutionNodesMatch = substitution.verifyStatementNode(statementNode);
                    metavariableNodeVerifies = substitutionNodesMatch; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var metavariableName = metavariableNameA, statementNode1 = statementNodeB, statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNameAndStatementNode(metavariableName, statementNode1), substitution1 = statementForMetavariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    metavariableNodeVerifies = true;
                }
                return metavariableNodeVerifies;
            }
        }
    ]);
    return StatementForMetavariableVerifier;
}(_verifier.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoJy9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSEnKSxcbiAgICAgIG1ldGFBcmd1bWVudENoaWxkTm9kZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFBcmd1bWVudC8qIScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhQXJndW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FKTtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhQXJndW1lbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgIG1ldGFBcmd1bWVudENoaWxkTm9kZUIgPSBtZXRhQXJndW1lbnRDaGlsZE5vZGVOb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZUIpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YUFyZ3VtZW50Q2hpbGROb2RlQjsgIC8vL1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IFNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lICYmIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50Tm9kZVZlcmlmaWVzKSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IHRoaXMudmVyaWZ5Tm9kZXMobm9kZXNBLCBub2Rlc0IsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSBub2Rlc01hdGNoOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllcyA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllcztcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBzdWJzdGl0dXRpb24udmVyaWZ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVzID0gc3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNyZWF0ZVN1YnN0aXR1dGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgIGlmIChjcmVhdGVTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lQSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZXM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhQXJndW1lbnRDaGlsZE5vZGVOb2RlUXVlcnkiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllcyIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YUFyZ3VtZW50UnVsZU5hbWUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsIm1ldGFBcmd1bWVudE5vZGVCIiwibWV0YUFyZ3VtZW50Q2hpbGROb2RlQiIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlVmVyaWZpZXMiLCJ2ZXJpZnlTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwidmVyaWZ5Tm9kZXMiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwiY3JlYXRlU3Vic3RpdHV0aW9ucyIsImNvbnN0cnVjdG9yIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsIlZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozs2REFWQTs2RUFDNEI7cUJBRXZCO3lCQUU0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDbENDLGlDQUFpQ0QsSUFBQUEsZ0JBQVMsRUFBQztBQUVsQyxJQUFBLEFBQU1GLGlEQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRTtnQkFDdkUsSUFBSUMsMEJBQTBCLEtBQUs7Z0JBRW5DLElBQU1DLDJCQUEyQkgsaUJBQWlCSSxXQUFXLElBQ3ZE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