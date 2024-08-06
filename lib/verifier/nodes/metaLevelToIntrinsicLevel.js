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
var _local = /*#__PURE__*/ _interop_require_default(require("../../context/local"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/termForVariable"));
var _intrinsiclevel = /*#__PURE__*/ _interop_require_default(require("../../mixins/nodesVerifier/intrinsiclevel"));
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/statementForMetavariable"));
var _query = require("../../utilities/query");
var _ruleNames = require("../../ruleNames");
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./intrinsicLevel"));
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
var variableNodeQuery = (0, _query.nodeQuery)("/*/variable!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement"), metavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/metastatement/substitution!");
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
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
                var nonTerminalNodeVerified;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName();
                switch(nonTerminalNodeARuleName){
                    case _ruleNames.METASTATEMENT_RULE_NAME:
                        {
                            var metastatementNodeA = nonTerminalNodeA, metaArgumentNodeVerified = this.verifyMetastatementNode(metastatementNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = metaArgumentNodeVerified; ///
                            break;
                        }
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var termNodeA = nonTerminalNodeA, localContextA = _local.default.fromFileContext(fileContextA), termNodeVerified = this.verifyTermNode(termNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = termNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelToIntrinsicLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                        }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetastatementNode",
            value: function verifyMetastatementNode(metastatementNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
                var metastatementNodeVerified;
                var nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                switch(nonTerminalNodeBRuleName){
                    case _ruleNames.META_ARGUMENT_RULE_NAME:
                        {
                            var metaArgumentNodeB = nonTerminalNodeB, metaArgumentNodeVerified = this.verifyMetaArgumentNode(metastatementNodeA, metaArgumentNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                            metastatementNodeVerified = metaArgumentNodeVerified; ///
                            break;
                        }
                    case _ruleNames.STATEMENT_RULE_NAME:
                        {
                            var statementNodeB = nonTerminalNodeB, statementNodeVerified = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                            metastatementNodeVerified = statementNodeVerified; ///
                            break;
                        }
                }
                return metastatementNodeVerified;
            }
        },
        {
            key: "verifyMetaArgumentNode",
            value: function verifyMetaArgumentNode(metastatementNodeA, metaArgumentNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
                var metaArgumentNodeVerified = false;
                var statementNodeB = statementNodeQuery(metaArgumentNodeB), metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null && statementNodeB !== null) {
                    var substitutionNodeA = substitutionNodeQuery(metastatementNodeA), metavariableNodeVerified = substitutionNodeA !== null ? this.verifyMetavariableNodeEx(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, fileContextA, localContextB, verifyAhead) : this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                    metaArgumentNodeVerified = metavariableNodeVerified; ///
                }
                return metaArgumentNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNodeEx",
            value: function verifyMetavariableNodeEx(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, fileContextA, localContextB, verifyAhead) {
                var metavariableNodeVerified;
                var substitution = substitutions.find(function(substitution) {
                    var substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);
                    if (substitutionMatchesMetavariableNodeA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var statementNode = substitution.getStatementNode(), localContextA = _local.default.fromFileContext(fileContextA), substitutionNode = substitutionNodeA, termForVariableSubstitution = _termForVariable.default.fromSubstitutionNodeAndSubstitutions(substitutionNode, substitutions);
                    substitution = termForVariableSubstitution; ///
                    var nonTerminalNodeA = statementNode, nonTerminalNodeB = statementNodeB; ///
                    substitutions = [
                        substitution
                    ];
                    var nonTerminalNodeVerified = _intrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                    metavariableNodeVerified = nonTerminalNodeVerified; ///
                } else {
                    var substitutionNode1 = substitutionNodeA, termForVariableSubstitution1 = _termForVariable.default.fromSubstitutionNode(substitutionNode1);
                    substitution = termForVariableSubstitution1; ///
                    var statementNode1 = statementNodeB, metavariableNode = metavariableNodeA, statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeStatementNodeAndSubstitution(metavariableNode, statementNode1, substitution);
                    substitution = statementForMetavariableSubstitution; ///
                    substitutions.push(substitution);
                    metavariableNodeVerified = true;
                }
                return metavariableNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
                var metavariableNodeVerified;
                var substitution = substitutions.find(function(substitution) {
                    var substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);
                    if (substitutionMatchesMetavariableNodeA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var statementNode = statementNodeB, localContextA = _local.default.fromFileContext(fileContextA), statementNodeMatches = substitution.matchStatementNode(statementNode, substitutions, localContextA, localContextB);
                    metavariableNodeVerified = statementNodeMatches; ///
                } else {
                    var statementNode1 = statementNodeB, metavariableNode = metavariableNodeA, statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode1), substitution1 = statementForMetavariableSubstitution; ///
                    substitutions.push(substitution1);
                    metavariableNodeVerified = true;
                }
                return metavariableNodeVerified;
            }
        },
        {
            key: "verifyStatementNode",
            value: function verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
                var statementNodeVerified;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                    statementNodeVerified = metavariableNodeVerified; ///
                } else {
                    var nonTerminalNodeA = metastatementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = _get(_get_prototype_of(MetaLevelToIntrinsicLevelNodesVerifier.prototype), "verifyChildNodes", this).call(this, childNodesA, childNodesB, substitutions, fileContextA, localContextB, verifyAhead);
                    statementNodeVerified = childNodesVerified; ///
                }
                return statementNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
                var termNodeVerified = false;
                var nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                switch(nonTerminalNodeBRuleName){
                    case _ruleNames.TERM_RULE_NAME:
                        {
                            var variableNodeA = variableNodeQuery(termNodeA);
                            if (variableNodeA !== null) {
                                var _$termNodeB = nonTerminalNodeB, localContextA = _local.default.fromFileContext(fileContextA), variableNodeVerified = this.verifyVariableNode(variableNodeA, _$termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                                termNodeVerified = variableNodeVerified; ///
                            } else {
                                var nonTerminalNodeA = termNodeA, _$nonTerminalNodeB = termNodeB, nonTerminalNodeVerified = _get(_get_prototype_of(MetaLevelToIntrinsicLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, _$nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                                termNodeVerified = nonTerminalNodeVerified; ///
                            }
                        }
                }
                return termNodeVerified;
            }
        }
    ]);
    return MetaLevelToIntrinsicLevelNodesVerifier;
}(_nodes.default);
Object.assign(MetaLevelToIntrinsicLevelNodesVerifier.prototype, _intrinsiclevel.default);
var metaLevelToIntrinsicLevelNodesVerifier = new MetaLevelToIntrinsicLevelNodesVerifier();
var _default = metaLevelToIntrinsicLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9ub2Rlc1ZlcmlmaWVyL2ludHJpbnNpY2xldmVsXCI7XG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuL2ludHJpbnNpY0xldmVsXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnRcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvc3Vic3RpdHV0aW9uIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSkge1xuICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB0ZXJtTm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybU5vZGUodGVybU5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YUFyZ3VtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFBcmd1bWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YUFyZ3VtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFBcmd1bWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZUIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAoKG1ldGF2YXJpYWJsZU5vZGVBICE9PSBudWxsKSAmJiAoc3RhdGVtZW50Tm9kZUIgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlQSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZUEpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gKHN1YnN0aXR1dGlvbk5vZGVBICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgIHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZUV4KG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIDpcbiAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlTm9kZUV4KG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuXG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVBLCAvLy9cbiAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZUFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQjsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gWyAvLy9cbiAgICAgICAgc3Vic3RpdHV0aW9uXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlQSwgLy8vXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG1ldGFzdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlQSk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIucHJvdG90eXBlLCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMpO1xuXG5jb25zdCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciA9IG5ldyBNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIk1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5vZGVBIiwibWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlQSIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0ZXJtTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybU5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlQiIsInZlcmlmeU1ldGFBcmd1bWVudE5vZGUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJzdWJzdGl0dXRpb25Ob2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZU5vZGVFeCIsInZlcmlmeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zIiwiaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVTdGF0ZW1lbnROb2RlQW5kU3Vic3RpdHV0aW9uIiwicHVzaCIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInZhcmlhYmxlTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlTm9kZSIsIk5vZGVzVmVyaWZpZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMiLCJtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBME9BOzs7ZUFBQTs7OzREQXhPeUI7NERBQ0M7c0VBQ2M7cUVBQ007K0VBQ0c7cUJBRXZCO3lCQUM0RTtxRUFDOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsaUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsNEJBQy9CRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUMsaUNBQ2xDRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUM7QUFFeEMsSUFBQSxBQUFNSSx1REFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztnQkFDL0csSUFBSUM7Z0JBRUosSUFBTUMsMkJBQTJCUCxpQkFBaUJRLFdBQVc7Z0JBRTdELE9BQVFEO29CQUNOLEtBQUtFLGtDQUF1Qjt3QkFBRTs0QkFDNUIsSUFBTUMscUJBQXFCVixrQkFDckJXLDJCQUEyQixJQUFJLENBQUNDLHVCQUF1QixDQUFDRixvQkFBb0JULGtCQUFrQkMsZUFBZUMsY0FBY0MsZUFBZUM7NEJBRWhKQywwQkFBMEJLLDBC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