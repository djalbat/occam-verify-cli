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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), statementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement"), metavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!");
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
                    var metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, localContextB, verifyAhead);
                    metaArgumentNodeVerified = metavariableNodeVerified; ///
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
                var nonTerminalNodeA = metastatementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = _get(_get_prototype_of(MetaLevelToIntrinsicLevelNodesVerifier.prototype), "verifyChildNodes", this).call(this, childNodesA, childNodesB, substitutions, fileContextA, localContextB, verifyAhead);
                statementNodeVerified = childNodesVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9ub2Rlc1ZlcmlmaWVyL2ludHJpbnNpY2xldmVsXCI7XG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnRcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgICAgY2FzZSBNRVRBX0FSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBtZXRhQXJndW1lbnROb2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsIC8vL1xuICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFBcmd1bWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhQXJndW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCA9IG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG5vblRlcm1pbmFsTm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFBcmd1bWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhQXJndW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFBcmd1bWVudE5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgaWYgKChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkgJiYgKHN0YXRlbWVudE5vZGVCICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhc3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybU5vZGUodGVybU5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1Ob2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZUEpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZU5vZGVBICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybU5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyLnByb3RvdHlwZSwgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyTWl4aW5zKTtcblxuY29uc3QgbWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgPSBuZXcgTWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsIm1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZVZlcmlmaWVkIiwidmVyaWZ5VGVybU5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwiTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUiLCJtZXRhQXJndW1lbnROb2RlQiIsInZlcmlmeU1ldGFBcmd1bWVudE5vZGUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnROb2RlVmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGVOb2RlQSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZUFuZFN0YXRlbWVudE5vZGUiLCJwdXNoIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInZhcmlhYmxlTm9kZUEiLCJ0ZXJtTm9kZUIiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZU5vZGUiLCJOb2Rlc1ZlcmlmaWVyIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyTWl4aW5zIiwibWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlLQTs7O2VBQUE7Ozs0REF2S3lCOzREQUNDO3FFQUNvQjsrRUFDRztxQkFFdkI7eUJBQzRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLDRCQUMvQkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUcsdURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQy9HLElBQUlDO2dCQUVKLElBQU1DLDJCQUEyQlAsaUJBQWlCUSxXQUFXO2dCQUU3RCxP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