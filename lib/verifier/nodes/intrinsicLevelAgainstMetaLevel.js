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
var _variableAgainstTerm = /*#__PURE__*/ _interop_require_default(require("../../verify/variableAgainstTerm"));
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes/intrinsicLevel"));
var _metavariableAgainstStatement = /*#__PURE__*/ _interop_require_default(require("../../verify/metavariableAgainstStatement"));
var _query = require("../../utilities/query");
var _verifier = require("../../utilities/verifier");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metastatementNodeQuery = (0, _query.nodeQuery)("/metastatement!"), metaArgumentStatementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), metastatementMetavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!"), metastatementSubstitutionNodeQuery = (0, _query.nodeQuery)("/metastatement/substitution");
var IntrinsicLevelAgainstMetaLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(IntrinsicLevelAgainstMetaLevelNodesVerifier, NodesVerifier);
    var _super = _create_super(IntrinsicLevelAgainstMetaLevelNodesVerifier);
    function IntrinsicLevelAgainstMetaLevelNodesVerifier() {
        _class_call_check(this, IntrinsicLevelAgainstMetaLevelNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(IntrinsicLevelAgainstMetaLevelNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var _this = this;
                var nonTerminalNodeVerified;
                var nodeQueryMaps = [
                    {
                        nodeQueryA: metastatementMetavariableNodeQuery,
                        nodeQueryB: metaArgumentStatementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metaArgumentStatementNodeB = nodeB, metastatementMetavariableNodeA = nodeA, metastatementSubstitutionNodeA = metastatementSubstitutionNodeQuery(nonTerminalNodeA), metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode = _this.verifyMetastatementMetavariableNodeAgainstMetaArgumentStatementNode(metastatementMetavariableNodeA, metaArgumentStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQueryA: metastatementMetavariableNodeQuery,
                        nodeQueryB: statementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNodeB = nodeB, metastatementMetavariableNodeA = nodeA, metastatementSubstitutionNodeA = metastatementSubstitutionNodeQuery(nonTerminalNodeA), metastatementMetavariableNodeVerifiedAgainstStatementNode = _this.verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstStatementNode; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQueryA: metastatementNodeQuery,
                        nodeQueryB: statementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNodeB = nodeB, metastatementNodeA = nodeA, metastatementNodeVerifiedAgainstStatementNode = _this.verifyMetastatementNodeAgainstStatementNode(metastatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = metastatementNodeVerifiedAgainstStatementNode; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQueryA: termVariableNodeQuery,
                        nodeQueryB: termNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNodeB = nodeB, termVariableNodeA = nodeA, termVariableNodeVerifiedAgainstTermNode = _this.verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = termVariableNodeVerifiedAgainstTermNode; ///
                            return nonTerminalNodeVerified;
                        }
                    },
                    {
                        nodeQueryA: nonTerminalNodeQuery,
                        nodeQueryB: nonTerminalNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var _$nonTerminalNodeA = nodeA, _$nonTerminalNodeB = nodeB; ///
                            nonTerminalNodeVerified = _get(_get_prototype_of(IntrinsicLevelAgainstMetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", _this).call(_this, _$nonTerminalNodeA, _$nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                nonTerminalNodeVerified = nodesVerified; ///
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetastatementMetavariableNodeAgainstMetaArgumentStatementNode",
            value: function verifyMetastatementMetavariableNodeAgainstMetaArgumentStatementNode(metastatementMetavariableNodeA, metaArgumentStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
                var metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;
                var statementNode = metaArgumentStatementNodeB, metavariableNode = metastatementMetavariableNodeA, substitutionNode = metastatementSubstitutionNodeA, metavariableVerifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);
                metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode = metavariableVerifiedAgainstStatement; ///
                return metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;
            }
        },
        {
            key: "verifyMetastatementMetavariableNodeAgainstStatementNode",
            value: function verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
                var metastatementMetavariableNodeVerifiedAgainstStatementNode;
                var statementNode = statementNodeB, metavariableNode = metastatementMetavariableNodeA, substitutionNode = metastatementSubstitutionNodeA, metavariableVerifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);
                metastatementMetavariableNodeVerifiedAgainstStatementNode = metavariableVerifiedAgainstStatement; ///
                return metastatementMetavariableNodeVerifiedAgainstStatementNode;
            }
        },
        {
            key: "verifyMetastatementNodeAgainstStatementNode",
            value: function verifyMetastatementNodeAgainstStatementNode(metastatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var metastatementNodeVerifiedAgainstStatementNode;
                var nonTerminalNodeA = metastatementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = this.verifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB, verifyAhead);
                metastatementNodeVerifiedAgainstStatementNode = childNodesVerified; ///
                return metastatementNodeVerifiedAgainstStatementNode;
            }
        },
        {
            key: "verifyTermVariableNodeAgainstTermNode",
            value: function verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var termVariableNodeVerifiedAgainstTermNode;
                var termNode = termNodeB, variableNode = termVariableNodeA, termVerifiedAgainstVariable = (0, _variableAgainstTerm.default)(variableNode, termNode, substitutions, localContextA, localContextB, verifyAhead);
                termVariableNodeVerifiedAgainstTermNode = termVerifiedAgainstVariable; ///
                return termVariableNodeVerifiedAgainstTermNode;
            }
        }
    ]);
    return IntrinsicLevelAgainstMetaLevelNodesVerifier;
}(_nodes.default);
var intrinsicLevelAgainstMetaLevelNodesVerifier = new IntrinsicLevelAgainstMetaLevelNodesVerifier();
var _default = intrinsicLevelAgainstMetaLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbFwiO1xuaW1wb3J0IHZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeU5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJpZmllclwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudCFcIiksXG4gICAgICBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3N1YnN0aXR1dGlvblwiKTtcblxuY2xhc3MgSW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeShub25UZXJtaW5hbE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeShub25UZXJtaW5hbE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogdGVybU5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgdGVybU5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQjsgLy8vXG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9XG5cbiAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Tm9kZXMobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUIsIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpXG5cbiAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZClcblxuICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdmVyaWZ5VGVybVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RWYXJpYWJsZSA9IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID0gdGVybVZlcmlmaWVkQWdhaW5zdFZhcmlhYmxlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuICB9XG59XG5cbmNvbnN0IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgPSBuZXcgSW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVBIiwibm9kZUIiLCJtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSIsIm1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlIiwidGVybU5vZGVCIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUiLCJ2ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlIiwibG9jYWxNZXRhQ29udGV4dEEiLCJsb2NhbE1ldGFDb250ZXh0QiIsIm5vZGVzVmVyaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50Iiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidGVybVZlcmlmaWVkQWdhaW5zdFZhcmlhYmxlIiwidmVyaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSIsIk5vZGVzVmVyaWZpZXIiLCJpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnTEE7OztlQUFBOzs7NERBOUswQjswRUFDWTtxRUFDRTttRkFDTztxQkFFckI7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDL0JFLHVCQUF1QkYsSUFBQUEsZ0JBQVMsRUFBQyxPQUNqQ0csd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0kseUJBQXlCSixJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0ss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