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
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _local = /*#__PURE__*/ _interop_require_default(require("../../context/local"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/termForVariable"));
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
                            var termNodeA = nonTerminalNodeA, termNodeVerified = this.verifyTermNode(termNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, verifyAhead);
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
                            var termNode = termNodeQuery(substitutionNode), terms = [], context = fileContextA, termVerified = (0, _term.default)(termNode, terms, context, function() {});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuaW1wb3J0IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllck1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL25vZGVzVmVyaWZpZXIvaW50cmluc2ljbGV2ZWxcIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50XCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3N1YnN0aXR1dGlvbiFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdGVybU5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgLy8vXG4gICAgICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YUFyZ3VtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFBcmd1bWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YUFyZ3VtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFBcmd1bWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlUXVlcnkobWV0YUFyZ3VtZW50Tm9kZUIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAoKG1ldGF2YXJpYWJsZU5vZGVBICE9PSBudWxsKSAmJiAoc3RhdGVtZW50Tm9kZUIgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IGZpbGVDb250ZXh0QS5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgICAgICB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dEEsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHN1cGVyLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGVBKTtcblxuICAgICAgICBpZiAodmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB2YXJpYWJsZU5vZGVWZXJpZmllZDsgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRlcm1Ob2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Ob2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllci5wcm90b3R5cGUsIGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllck1peGlucyk7XG5cbmNvbnN0IG1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyID0gbmV3IE1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIk1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5vZGVBIiwibWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRSIsIm1ldGFBcmd1bWVudE5vZGVCIiwidmVyaWZ5TWV0YUFyZ3VtZW50Tm9kZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudE5vZGVWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQSIsInN1YnN0aXR1dGlvbk5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ0ZXJtcyIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ2YXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwibG9jYWxDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVOb2RlIiwiTm9kZXNWZXJpZmllciIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllck1peGlucyIsIm1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7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