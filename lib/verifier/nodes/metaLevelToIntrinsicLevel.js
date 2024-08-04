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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
                    var substitutionNodeA = substitutionNodeQuery(metastatementNodeA);
                    if (substitutionNodeA !== null) {
                        var substitutionNode = substitutionNodeA, termForVariableSubstitution = _termForVariable.default.fromSubstitutionNodeAndSubstitutions(substitutionNode, substitutions), substitution = termForVariableSubstitution; ///
                        substitutions = [
                            substitution
                        ].concat(_to_consumable_array(substitutions));
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9ub2Rlc1ZlcmlmaWVyL2ludHJpbnNpY2xldmVsXCI7XG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi92YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudFwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHN3aXRjaCAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgICAgICBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsIC8vL1xuICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRlcm1Ob2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgTUVUQV9BUkdVTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhQXJndW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YUFyZ3VtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gc3RhdGVtZW50Tm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhQXJndW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YUFyZ3VtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YUFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IHN0YXRlbWVudE5vZGVRdWVyeShtZXRhQXJndW1lbnROb2RlQiksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgIGlmICgobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpICYmIChzdGF0ZW1lbnROb2RlQiAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVBID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlQSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXG4gICAgICAgICAgc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIC4uLnN1YnN0aXR1dGlvbnNcbiAgICAgICAgXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIG1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhQXJndW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGVBID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOb2RlQW5kU3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBzdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHN0YXRlbWVudE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG1ldGFzdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHN0YXRlbWVudE5vZGVWZXJpZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZSh0ZXJtTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgc3dpdGNoIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlQSk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub25UZXJtaW5hbE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICB0ZXJtTm9kZVZlcmlmaWVkID0gdmFyaWFibGVOb2RlVmVyaWZpZWQ7IC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIucHJvdG90eXBlLCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXJNaXhpbnMpO1xuXG5jb25zdCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciA9IG5ldyBNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJNZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsIm1ldGFBcmd1bWVudE5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZUEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIk1FVEFfQVJHVU1FTlRfUlVMRV9OQU1FIiwibWV0YUFyZ3VtZW50Tm9kZUIiLCJ2ZXJpZnlNZXRhQXJndW1lbnROb2RlIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVBIiwic3Vic3RpdHV0aW9uTm9kZUEiLCJzdWJzdGl0dXRpb25Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmQiLCJzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZUEiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ2YXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwidmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZU5vZGUiLCJOb2Rlc1ZlcmlmaWVyIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyTWl4aW5zIiwibWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtNQTs7O2VBQUE7Ozs0REFoTXlCOzREQUNDO3NFQUNjO3FFQUNNOytFQUNHO3FCQUV2Qjt5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