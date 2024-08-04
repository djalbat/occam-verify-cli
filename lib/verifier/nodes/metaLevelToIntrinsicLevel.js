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
var _intrinsiclevel = /*#__PURE__*/ _interop_require_default(require("../../mixins/nodesVerifier/intrinsiclevel"));
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
var termNodeQuery = (0, _query.nodeQuery)("/substitution/term!"), variableNodeQuery = (0, _query.nodeQuery)("/*/variable!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement"), metavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/metastatement/substitution!");
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
                    var substitutionNode = substitutionNodeQuery(metastatementNodeA);
                    if (substitutionNode !== null) {
                        var variableNode = variableNodeQuery(substitutionNode), variable = fileContextA.findVariableByVariableNode(variableNode);
                        if (variable !== null) {
                            var termNode = termNodeQuery(substitutionNode);
                            debugger;
                        }
                    } else {
                        var metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                        metaArgumentNodeVerified = metavariableNodeVerified; ///
                    }
                }
                return metaArgumentNodeVerified;
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
                    var statementNode = statementNodeB, statementNodeMatches = substitution.matchStatementNode(statementNode);
                    metavariableNodeVerified = statementNodeMatches; ///
                } else {
                    var metavariableNode = metavariableNodeA, statementNode1 = statementNodeB, statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode1), substitution1 = statementForMetavariableSubstitution; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9ub2Rlc1ZlcmlmaWVyL2ludHJpbnNpY2xldmVsXCI7XG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi92YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudFwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhQXJndW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YUFyZ3VtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhQXJndW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YUFyZ3VtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IHN0YXRlbWVudE5vZGVRdWVyeShtZXRhQXJndW1lbnROb2RlQiksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgIGlmICgobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpICYmIChzdGF0ZW1lbnROb2RlQiAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gZmlsZUNvbnRleHRBLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICAgICAgZGVidWdnZXJcblxuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG1ldGFzdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlQSk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIucHJvdG90eXBlLCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMpO1xuXG5jb25zdCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciA9IG5ldyBNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsIm1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZUEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZUIiLCJ2ZXJpZnlNZXRhQXJndW1lbnROb2RlIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVBIiwic3Vic3RpdHV0aW9uTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSIsInB1c2giLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmFyaWFibGVOb2RlQSIsInRlcm1Ob2RlQiIsInZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVOb2RlIiwiTm9kZXNWZXJpZmllciIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllck1peGlucyIsIm1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtTUE7OztlQUFBOzs7NERBak15Qjs0REFDQztxRUFDb0I7K0VBQ0c7cUJBRXZCO3lCQUM0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRHLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxpQkFDOUJFLHFC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