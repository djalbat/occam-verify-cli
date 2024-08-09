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
var _statementForMetavariable = /*#__PURE__*/ _interop_require_wildcard(require("../../substitution/statementForMetavariable"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
                    var substitutionNodeA = substitutionNodeQuery(metastatementNodeA), metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, substitutionNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                    metaArgumentNodeVerified = metavariableNodeVerified; ///
                }
                return metaArgumentNodeVerified;
            }
        },
        {
            key: "verifyStatementNode",
            value: function verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
                var statementNodeVerified;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var substitutionNodeA = substitutionNodeQuery(metastatementNodeA), metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, substitutionNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                    statementNodeVerified = metavariableNodeVerified; ///
                } else {
                    var nonTerminalNodeA = metastatementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = _get(_get_prototype_of(MetaLevelToIntrinsicLevelNodesVerifier.prototype), "verifyChildNodes", this).call(this, childNodesA, childNodesB, substitutions, fileContextA, localContextB, verifyAhead);
                    statementNodeVerified = childNodesVerified; ///
                }
                return statementNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, substitutionNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead) {
                var metavariableNodeVerified;
                var substitution = substitutions.find(function(substitution) {
                    var substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);
                    if (substitutionMatchesMetavariableNodeA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var statementNode = substitution.getStatementNode(), localContextA = _local.default.fromFileContext(fileContextA);
                    if (substitutionNodeA !== null) {
                        var substitutionNode = substitutionNodeA, termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode), substitution1 = termForVariableSubstitution, statementNodeA = statementNode, statementNodeMatches = (0, _statementForMetavariable.matchStatementNode)(statementNodeA, statementNodeB, substitution1, substitutions, localContextA, localContextB);
                        metavariableNodeVerified = statementNodeMatches; ///
                    } else {
                        var statementNode1 = statementNodeB, statementNodeMatches1 = substitution.matchStatementNode(statementNode1, substitutions, localContextA, localContextB);
                        metavariableNodeVerified = statementNodeMatches1; ///
                    }
                } else {
                    var substitutionNode1 = substitutionNodeA, metavariableNode = metavariableNodeA, statementNode2 = statementNodeB, substitution2 = substitutionFromSubstitutionNodeMetavariableNodeAndStatementNode(substitutionNode1, metavariableNode, statementNode2);
                    substitutions.push(substitution2);
                    metavariableNodeVerified = true;
                }
                return metavariableNodeVerified;
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
function substitutionFromSubstitutionNodeMetavariableNodeAndStatementNode(substitutionNode, metavariableNode, statementNode) {
    var statementForMetavariableSubstitution;
    if (substitutionNode !== null) {
        var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode), substitution = termForVariableSubstitution; ///
        statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeStatementNodeAndSubstitution(metavariableNode, statementNode, substitution);
    } else {
        statementForMetavariableSubstitution = _statementForMetavariable.default.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode);
    }
    var substitution1 = statementForMetavariableSubstitution; ///
    return substitution1;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9ub2Rlc1ZlcmlmaWVyL2ludHJpbnNpY2xldmVsXCI7XG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1hdGNoU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50XCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3N1YnN0aXR1dGlvbiFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdGVybU5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgICAgY2FzZSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBtZXRhQXJndW1lbnROb2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsIC8vL1xuICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFBcmd1bWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhQXJndW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFBcmd1bWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhQXJndW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgaWYgKChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkgJiYgKHN0YXRlbWVudE5vZGVCICE9PSBudWxsKSkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZUEgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgc3Vic3RpdHV0aW9uTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVBICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlQSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZUEpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdWJzdGl0dXRpb25Ob2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG1ldGFzdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdWJzdGl0dXRpb25Ob2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlQSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVBID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlQSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25Ob2RlTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUoc3Vic3RpdHV0aW9uTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlQSk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIucHJvdG90eXBlLCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMpO1xuXG5jb25zdCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciA9IG5ldyBNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcjtcblxuZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbk5vZGVNZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShzdWJzdGl0dXRpb25Ob2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gIGxldCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG5cbiAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTm9kZVN0YXRlbWVudE5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUpO1xuICB9XG5cbiAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIk1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibWV0YXN0YXRlbWVudE5vZGVBIiwibWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlQSIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0ZXJtTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybU5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlQiIsInZlcmlmeU1ldGFBcmd1bWVudE5vZGUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJzdWJzdGl0dXRpb25Ob2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZU5vZGUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25Gcm9tU3Vic3RpdHV0aW9uTm9kZU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsInZhcmlhYmxlTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlTm9kZSIsIk5vZGVzVmVyaWZpZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMiLCJtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlU3RhdGVtZW50Tm9kZUFuZFN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb01BOzs7ZUFBQTs7OzREQWxNeUI7NERBQ0M7c0VBQ2M7cUVBQ007Z0ZBQ0c7cUJBRXZCO3lCQUU0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGlCQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLDRCQUMvQkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDLGlDQUNsQ0csd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUksdURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FB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