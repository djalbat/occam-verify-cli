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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var termNodeQuery = (0, _query.nodeQuery)("/term!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), nonTerminalNodeQuery = (0, _query.nodeQuery)("/*"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metastatementNodeQuery = (0, _query.nodeQuery)("/metastatement!"), metaArgumentStatementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), metastatementMetavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!"), metastatementSubstitutionNodeQuery = (0, _query.nodeQuery)("/metastatement/substitution");
var IntrinsicLevelAgainstMetaLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(IntrinsicLevelAgainstMetaLevelNodesVerifier, NodesVerifier);
    function IntrinsicLevelAgainstMetaLevelNodesVerifier() {
        _class_call_check(this, IntrinsicLevelAgainstMetaLevelNodesVerifier);
        return _call_super(this, IntrinsicLevelAgainstMetaLevelNodesVerifier, arguments);
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
                var statementNodeB = metaArgumentStatementNodeB, substitutionNode = metastatementSubstitutionNodeA, metavariableNodeA = metastatementMetavariableNodeA, metavariableVerifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);
                metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode = metavariableVerifiedAgainstStatement; ///
                return metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;
            }
        },
        {
            key: "verifyMetastatementMetavariableNodeAgainstStatementNode",
            value: function verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
                var metastatementMetavariableNodeVerifiedAgainstStatementNode;
                var substitutionNode = metastatementSubstitutionNodeA, metavariableNodeA = metastatementMetavariableNodeA, metavariableVerifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);
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
                var variableNodeA = termVariableNodeA, termVerifiedAgainstVariable = (0, _variableAgainstTerm.default)(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                termVariableNodeVerifiedAgainstTermNode = termVerifiedAgainstVariable; ///
                return termVariableNodeVerifiedAgainstTermNode;
            }
        }
    ]);
    return IntrinsicLevelAgainstMetaLevelNodesVerifier;
}(_nodes.default);
var intrinsicLevelAgainstMetaLevelNodesVerifier = new IntrinsicLevelAgainstMetaLevelNodesVerifier();
var _default = intrinsicLevelAgainstMetaLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L21ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKSxcbiAgICAgIG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEgPSBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZUEpLFxuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCLCBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEgPSBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZUEpLFxuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeVRlcm1WYXJpYWJsZU5vZGVBZ2FpbnN0VGVybU5vZGUodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCOyAvLy9cblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID1cblxuICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpXG5cbiAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpXG5cbiAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG1ldGFzdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHZlcmlmeVRlcm1WYXJpYWJsZU5vZGVBZ2FpbnN0VGVybU5vZGUodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0VmFyaWFibGUgPSB2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID0gdGVybVZlcmlmaWVkQWdhaW5zdFZhcmlhYmxlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuICB9XG59XG5cbmNvbnN0IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgPSBuZXcgSW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVBIiwibm9kZUIiLCJtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSIsIm1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlIiwidGVybU5vZGVCIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ0ZXJtVmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUiLCJ2ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlIiwibG9jYWxNZXRhQ29udGV4dEEiLCJsb2NhbE1ldGFDb250ZXh0QiIsIm5vZGVzVmVyaWZpZWQiLCJzdWJzdGl0dXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50Iiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInZhcmlhYmxlTm9kZUEiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0VmFyaWFibGUiLCJ2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtIiwiTm9kZXNWZXJpZmllciIsImludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZLQTs7O2VBQUE7Ozs0REEzSzBCOzBFQUNZO21GQUNTO3FCQUVyQjt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkUsdUJBQXVCRixJQUFBQSxnQkFBUyxFQUFDLE9BQ2pDRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDSSx5QkFBeUJKLElBQUFBLGdCQUFTLEVBQUMsb0JBQ25DSyxpQ0FBaUNMLElBQUFBLGdCQUFTLEVBQUMsNkJBQzNDTSxxQ0FBcUNOLElBQUFBLGdCQUFTLEVBQUMsaUNBQy9DTyxxQ0FBcUNQLElBQUFBLGdCQUFTLEVBQUM7QUFFckQsSUFBQSxBQUFNUSw0REFBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVD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