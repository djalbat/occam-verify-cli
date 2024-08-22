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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metastatementNodeQuery = (0, _query.nodeQuery)("/metastatement!"), metaArgumentStatementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), metastatementStatementNodeQuery = (0, _query.nodeQuery)("/metastatement/statement!"), metastatementMetavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!"), metastatementSubstitutionNodeQuery = (0, _query.nodeQuery)("/metastatement/substitution");
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
                        nodeQueryB: metastatementStatementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var metastatementStatementNodeB = nodeB, metastatementMetavariableNodeA = nodeA, metastatementSubstitutionNodeA = metastatementSubstitutionNodeQuery(nonTerminalNodeA), metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode = _this.verifyMetastatementMetavariableNodeAgainstMetastatementStatementNode(metastatementMetavariableNodeA, metastatementStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode; ///
                            return nonTerminalNodeVerified;
                        }
                    },
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
                        nodeQueryA: metastatementStatementNodeQuery,
                        nodeQueryB: statementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNodeB = nodeB, metastatementStatementNodeA = nodeA, metastatementStatementNodeVerifiedAgainstStatementNode = _this.verifyMetastatementStatementNodeAgainstStatementNode(metastatementStatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = metastatementStatementNodeVerifiedAgainstStatementNode; ///
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
                            var termNodeB = nodeB, termVariableNodeA = nodeA, variableNodeVerifiedAgainstTermNode = _this.verifyVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = variableNodeVerifiedAgainstTermNode; ///
                            return nonTerminalNodeVerified;
                        }
                    }
                ];
                var nodesVerified = (0, _verifier.verifyNodes)(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                nonTerminalNodeVerified = nodesVerified ? true : _get(_get_prototype_of(IntrinsicLevelAgainstMetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetastatementMetavariableNodeAgainstMetastatementStatementNode",
            value: function verifyMetastatementMetavariableNodeAgainstMetastatementStatementNode(metastatementMetavariableNodeA, metastatementStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
                var metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode;
                var statementNode = metastatementStatementNodeB, metavariableNode = metastatementMetavariableNodeA, substitutionNode = metastatementSubstitutionNodeA, metavariableVerifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);
                metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode = metavariableVerifiedAgainstStatement; ///
                return metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode;
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
            key: "verifyMetastatementStatementNodeAgainstStatementNode",
            value: function verifyMetastatementStatementNodeAgainstStatementNode(metastatementStatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var metastatementStatementNodeVerifiedAgainstStatementNode;
                var nonTerminalNodeA = metastatementStatementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeVerified = _get(_get_prototype_of(IntrinsicLevelAgainstMetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                metastatementStatementNodeVerifiedAgainstStatementNode = nonTerminalNodeVerified; ///
                return metastatementStatementNodeVerifiedAgainstStatementNode;
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
            key: "verifyVariableNodeAgainstTermNode",
            value: function verifyVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var variableNodeVerifiedAgainstTermNode;
                var termNode = termNodeB, variableNode = termVariableNodeA, variableVerifiedAgainstTerm = (0, _variableAgainstTerm.default)(variableNode, termNode, substitutions, localContextA, localContextB, verifyAhead);
                variableNodeVerifiedAgainstTermNode = variableVerifiedAgainstTerm; ///
                return variableNodeVerifiedAgainstTermNode;
            }
        }
    ]);
    return IntrinsicLevelAgainstMetaLevelNodesVerifier;
}(_nodes.default);
var intrinsicLevelAgainstMetaLevelNodesVerifier = new IntrinsicLevelAgainstMetaLevelNodesVerifier();
var _default = intrinsicLevelAgainstMetaLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L21ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUFyZ3VtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3N1YnN0aXR1dGlvblwiKTtcblxuY2xhc3MgSW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciBleHRlbmRzIE5vZGVzVmVyaWZpZXIge1xuICB2ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBub2RlUXVlcnlNYXBzID0gW1xuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEgPSBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZUEpLFxuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVCLCBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeShub25UZXJtaW5hbE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeShub25UZXJtaW5hbE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbWV0YXN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudE5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHRlcm1Ob2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlWYXJpYWJsZU5vZGVBZ2FpbnN0VGVybU5vZGUodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgbm9kZXNWZXJpZmllZCA9IHZlcmlmeU5vZGVzKG5vZGVRdWVyeU1hcHMsIG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbm9kZXNWZXJpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKVxuXG4gICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZClcblxuICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKVxuXG4gICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUEsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhc3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZU5vZGVBZ2FpbnN0VGVybU5vZGUodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSA9IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUgPSB2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm07ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZTtcbiAgfVxufVxuXG5jb25zdCBpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyID0gbmV3IEludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVBIiwibm9kZUIiLCJtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUIiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlIiwidmVyaWZ5TWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGUiLCJtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVBIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlIiwidmVyaWZ5TWV0YXN0YXRlbWVudE5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInRlcm1Ob2RlQiIsInRlcm1WYXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUiLCJ2ZXJpZnlWYXJpYWJsZU5vZGVBZ2FpbnN0VGVybU5vZGUiLCJub2Rlc1ZlcmlmaWVkIiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50IiwidmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudCIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSIsInZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0iLCJOb2Rlc1ZlcmlmaWVyIiwiaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNk5BOzs7ZUFBQTs7OzREQTNOMEI7MEVBQ1k7bUZBQ1M7cUJBRXJCO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsZ0JBQy9CRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDRyx5QkFBeUJILElBQUFBLGdCQUFTLEVBQUMsb0JBQ25DSSxpQ0FBaUNKLElBQUFBLGdCQUFTLEVBQUMsNkJBQzNDSyxrQ0FBa0NMLElBQUFBLGdCQUFTLEVBQUMsOEJBQzVDTSxxQ0FBcUNOLElBQUFBLGdCQUFTLEVBQUMsaUNBQy9DTyxxQ0FBcUNQLElBQUFBLGdCQUFTLEVBQUM7QUFFckQsSUFBQSxBQUFNUSw0REFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVzs7Z0JBQ2hILElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlaO3dCQUNaYSxZQUFZZDt3QkFDWmUsYUFBYSxTQUFDQyxPQUFPQyxPQUFPVixlQUFlQyxlQUFlQyxlQUFlQzs0QkFDdkUsSUFBSUM7NEJBRUosSUFBTU8sOEJBQThCRCxPQUM5QkUsaUNBQWlDSCxPQUNqQ0ksaUNBQWlDbEIsbUNBQW1DRyxt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