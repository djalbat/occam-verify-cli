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
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/termForVariable"));
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
var metavariableNodeQuery = (0, _query.nodeQuery)('/metastatement/metavariable!'), metaArgumentChildNodeNodeQuery = (0, _query.nodeQuery)('/metaArgument/*!');
var MetaLevelToIntrinsicLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(MetaLevelToIntrinsicLevelNodesVerifier, NodesVerifier);
    var _super = _create_super(MetaLevelToIntrinsicLevelNodesVerifier);
    function MetaLevelToIntrinsicLevelNodesVerifier() {
        _class_call_check(this, MetaLevelToIntrinsicLevelNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(MetaLevelToIntrinsicLevelNodesVerifier, [
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
                        nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelToIntrinsicLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContext);
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
    return MetaLevelToIntrinsicLevelNodesVerifier;
}(_nodes.default);
var metaLevelToIntrinsicLevelNodesVerifier = new MetaLevelToIntrinsicLevelNodesVerifier();
var _default = metaLevelToIntrinsicLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoJy9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSEnKSxcbiAgICAgIG1ldGFBcmd1bWVudENoaWxkTm9kZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFBcmd1bWVudC8qIScpO1xuXG5jbGFzcyBNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhQXJndW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FKTtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhQXJndW1lbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgIG1ldGFBcmd1bWVudENoaWxkTm9kZUIgPSBtZXRhQXJndW1lbnRDaGlsZE5vZGVOb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZUIpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YUFyZ3VtZW50Q2hpbGROb2RlQjsgIC8vL1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSAmJiBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnROb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7ICAvLy9cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSkge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgbWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgPSBuZXcgTWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YUFyZ3VtZW50Q2hpbGROb2RlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YUFyZ3VtZW50UnVsZU5hbWUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsIm1ldGFBcmd1bWVudE5vZGVCIiwibWV0YUFyZ3VtZW50Q2hpbGROb2RlQiIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsIk5vZGVzVmVyaWZpZXIiLCJtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUdBOzs7ZUFBQTs7OzREQXJHMEI7c0VBQ2M7K0VBQ1M7cUJBRXZCO3lCQUM0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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