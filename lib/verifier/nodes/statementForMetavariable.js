"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/statementForMetavariable"));
var _query = require("../../utilities/query");
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var metavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!"), metaArgumentChildNodeNodeQuery = (0, _query.nodeQuery)("/metaArgument/*!");
var StatementForMetavariableNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(StatementForMetavariableNodesVerifier, NodesVerifier);
    var _super = _create_super(StatementForMetavariableNodesVerifier);
    function StatementForMetavariableNodesVerifier() {
        _class_call_check(this, StatementForMetavariableNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(StatementForMetavariableNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContext) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(), nonTerminalNodeBRuleNameMetaArgumentRuleName = nonTerminalNodeBRuleName === _ruleNames.META_ARGUMENT_RULE_NAME;
                if (nonTerminalNodeBRuleNameMetaArgumentRuleName) {
                    var metaArgumentNodeB = nonTerminalNodeB, metaArgumentChildNodeB = metaArgumentChildNodeNodeQuery(metaArgumentNodeB);
                    nonTerminalNodeB = metaArgumentChildNodeB; ///
                    nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContext);
                } else {
                    var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName1 = nonTerminalNodeB.getRuleName(), nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameStatementRuleName = nonTerminalNodeBRuleName1 === _ruleNames.STATEMENT_RULE_NAME;
                    if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
                        var metastatementNodeA = nonTerminalNodeA, statementNodeB = nonTerminalNodeB, statementNodeVerified = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContext);
                        if (statementNodeVerified) {
                            nonTerminalNodeVerified = true; ///
                        } else {
                            var nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = this.verifyChildNodes(childNodesA, childNodesB, substitutions, fileContextA, localContext);
                            nonTerminalNodeVerified = childNodesVerified; ///
                        }
                    } else if (nonTerminalNodeBRuleName1 === nonTerminalNodeARuleName) {
                        nonTerminalNodeVerified = _get(_get_prototype_of(StatementForMetavariableNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContext);
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyStatementNode",
            value: function verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContext) {
                var statementNodeVerified = false;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContext);
                    statementNodeVerified = metavariableNodeVerified; ///
                }
                return statementNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContext) {
                var metavariableNodeVerified;
                var substitution = substitutions.find(function(substitution) {
                    var substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);
                    if (substitutionMatchesMetavariableNodeA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var statementNode = statementNodeB, statementNodeMatches = substitution.matchStatementNode(statementNode);
                    metavariableNodeVerified = statementNodeMatches; ///
                } else {
                    var metavariableNode = metavariableNodeA, statementNode1 = statementNodeB, statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode1), substitution1 = statementForMetavariableSubstitution; ///
                    substitutions.push(substitution1);
                    metavariableNodeVerified = true;
                }
                return metavariableNodeVerified;
            }
        }
    ]);
    return StatementForMetavariableNodesVerifier;
}(_nodes.default);
var statementForMetavariableNodesVerifier = new StatementForMetavariableNodesVerifier();
var _default = statementForMetavariableNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFzdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIScpLFxuICAgICAgbWV0YUFyZ3VtZW50Q2hpbGROb2RlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KCcvbWV0YUFyZ3VtZW50LyohJyk7XG5cbmNsYXNzIFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YUFyZ3VtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YUFyZ3VtZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgLy8vXG4gICAgICAgICAgICBtZXRhQXJndW1lbnRDaGlsZE5vZGVCID0gbWV0YUFyZ3VtZW50Q2hpbGROb2RlTm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGVCKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFBcmd1bWVudENoaWxkTm9kZUI7ICAvLy9cblxuICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgJiYgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50Tm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVBICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgPSBuZXcgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFBcmd1bWVudENoaWxkTm9kZU5vZGVRdWVyeSIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YUFyZ3VtZW50UnVsZU5hbWUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsIm1ldGFBcmd1bWVudE5vZGVCIiwibWV0YUFyZ3VtZW50Q2hpbGROb2RlQiIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsIk5vZGVzVmVyaWZpZXIiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzR0E7OztlQUFBOzs7NERBcEcwQjsrRUFDdUI7cUJBRXZCO3lCQUM0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FD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