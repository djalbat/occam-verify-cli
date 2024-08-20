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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metaArgumentStatementNodeQuery = (0, _query.nodeQuery)("/metaArgument/statement!"), metastatementStatementNodeQuery = (0, _query.nodeQuery)("/metastatement/statement!"), metastatementMetavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!"), metastatementSubstitutionNodeQuery = (0, _query.nodeQuery)("/metastatement/substitution");
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
                            var metastatementStatementNodeB = nodeB, metastatementMetavariableNodeA = nodeA, metastatementSubstitutionNodeA = metastatementSubstitutionNodeQuery(nonTerminalNodeA), metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode = _this.verifyMetastatementMetavariableNodeAgainstMetastatementStatementNode(metastatementMetavariableNodeA, metastatementStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode; ///
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
                        nodeQueryA: termVariableNodeQuery,
                        nodeQueryB: termNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var termNodeB = nodeB, termVariableNodeA = nodeA, variableNodeVerifiedAgainstTermNode = _this.verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
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
                var metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;
                var statementNode = metastatementStatementNodeB, metavariableNode = metastatementMetavariableNodeA, substitutionNode = metastatementSubstitutionNodeA, metavariableVerifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);
                metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode = metavariableVerifiedAgainstStatement; ///
                return metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;
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
            key: "verifyMetastatementStatementNodeAgainstStatementNode",
            value: function verifyMetastatementStatementNodeAgainstStatementNode(metastatementStatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var metastatementStatementNodeVerifiedAgainstStatementNode;
                var nonTerminalNodeA = metastatementStatementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeVerified = _get(_get_prototype_of(IntrinsicLevelAgainstMetaLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                metastatementStatementNodeVerifiedAgainstStatementNode = nonTerminalNodeVerified; ///
                return metastatementStatementNodeVerifiedAgainstStatementNode;
            }
        },
        {
            key: "verifyTermVariableNodeAgainstTermNode",
            value: function verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudCBmcm9tIFwiLi4vLi4vdmVyaWZ5L21ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcmlmaWVyXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhQXJndW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU1hcHMgPSBbXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSA9IG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlUXVlcnkobm9uVGVybWluYWxOb2RlQSksXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeShub25UZXJtaW5hbE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnlBOiBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIHZlcmlmeU5vZGVzOiAobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5VGVybVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBub2Rlc1ZlcmlmaWVkID0gdmVyaWZ5Tm9kZXMobm9kZVF1ZXJ5TWFwcywgbm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVCLCBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZClcblxuICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCLCBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKVxuXG4gICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUEsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm0gPSB2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID0gdmFyaWFibGVWZXJpZmllZEFnYWluc3RUZXJtOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7XG4gIH1cbn1cblxuY29uc3QgaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciA9IG5ldyBJbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIm1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub2RlUXVlcnlNYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ2ZXJpZnlOb2RlcyIsIm5vZGVBIiwibm9kZUIiLCJtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUIiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZSIsIm1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCIiwidmVyaWZ5TWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVCIiwibWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVBIiwibWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlIiwidmVyaWZ5TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInRlcm1Ob2RlQiIsInRlcm1WYXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGUiLCJ2ZXJpZnlUZXJtVmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlIiwibm9kZXNWZXJpZmllZCIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCIsInZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0VGVybSIsInZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0iLCJOb2Rlc1ZlcmlmaWVyIiwiaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEpBOzs7ZUFBQTs7OzREQTFKMEI7MEVBQ1k7bUZBQ1M7cUJBRXJCO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsZ0JBQy9CRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDRyxpQ0FBaUNILElBQUFBLGdCQUFTLEVBQUMsNkJBQzNDSSxrQ0FBa0NKLElBQUFBLGdCQUFTLEVBQUMsOEJBQzVDSyxxQ0FBcUNMLElBQUFBLGdCQUFTLEVBQUMsaUNBQy9DTSxxQ0FBcUNOLElBQUFBLGdCQUFTLEVBQUM7QUFFckQsSUFBQSxBQUFNTyw0REFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVzs7Z0JBQ2hILElBQUlDO2dCQUVKLElBQU1DLGdCQUFnQjtvQkFDcEI7d0JBQ0VDLFlBQVlaO3dCQUNaYSxZQUFZZDt3QkFDWmUsYUFBYSxTQUFDQyxPQUFPQyxPQUFPVixlQUFlQyxlQUFlQyxlQUFlQzs0QkFDdkUsSUFBSUM7NEJBRUosSUFBTU8sOEJBQThCRCxPQUM5QkUsaUNBQWlDSCxPQUNqQ0ksaUNBQWlDbEIsbUNBQW1DRyxtQkFDcEVnQix3RUFFRSxNQUFLQyxvRUFBb0UsQ0FBQ0gsZ0NBQWdDRCw2QkFBNkJFLGdDQUFnQ2IsZUFBZUMsZUFBZUMsZUFBZUM7NEJBRTVOQywwQkFBMEJVLHVFQUF3RSxHQUFHOzRCQUVyRyxPQUFPVjt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWVo7d0JBQ1phLFlBQVlmO3dCQUNaZ0IsYUFBYSxTQUFDQyxPQUFPQyxPQUFPVixlQUFlQyxlQUFlQyxlQUFlQzs0QkFDdkUsSUFBSUM7NEJBRUosSUFBTVksNkJBQTZCTixPQUM3QkUsaUNBQWlDSCxPQUNqQ0ksaUNBQWlDbEIsbUNBQW1DRyxtQkFDcEVnQix3RUFFRSxNQUFLRyxtRUFBbUUsQ0FBQ0wsZ0NBQWdDSSw0QkFBNEJILGdDQUFnQ2IsZUFBZUMsZUFBZUMsZUFBZUM7NEJBRTFOQywwQkFBMEJVLHVFQUF3RSxHQUFHOzRCQUVyRyxPQUFPVjt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWWI7d0JBQ1pjLFlBQVlqQjt3QkFDWmtCLGFBQWEsU0FBQ0MsT0FBT0MsT0FBT1YsZUFBZUMsZUFBZUMsZUFBZUM7NEJBQ3ZFLElBQUlDOzRCQUVKLElBQU1jLGlCQUFpQlIsT0FDakJTLDhCQUE4QlYsT0FDOUJXLHlEQUVFLE1BQUtDLG9EQUFvRCxDQUFDRiw2QkFBNkJELGdCQUFnQmxCLGVBQWVDLGVBQWVDLGVBQWVDOzRCQUU1SkMsMEJBQTBCZ0Isd0RBQXdELEdBQUc7NEJBRXJGLE9BQU9oQjt3QkFDVDtvQkFDRjtvQkFDQTt3QkFDRUUsWUFBWWY7d0JBQ1pnQixZQUFZbkI7d0JBQ1pvQixhQUFhLFNBQUNDLE9BQU9DLE9BQU9WLGVBQWVDLGVBQWVDLGVBQWVDOzRCQUN2RSxJQUFJQzs0QkFFSixJQUFNa0IsWUFBWVosT0FDWmEsb0JBQW9CZCxPQUNwQmUsc0NBRUUsTUFBS0MscUNBQXFDLENBQUNGLG1CQUFtQkQsV0FBV3RCLGVBQWVDLGVBQWVDLGVBQWVDOzRCQUU5SEMsMEJBQTBCb0IscUNBQXFDLEdBQUc7NEJBRWxFLE9BQU9wQjt3QkFDVDtvQkFDRjtpQkFDRDtnQkFFRCxJQUFNc0IsZ0JBQWdCbEIsSUFBQUEscUJBQVcsRUFBQ0gsZUFBZVAsa0JBQWtCQyxrQkFBa0JDLGVBQWVDLGVBQWVDLGVBQWVDO2dCQUVsSUMsMEJBQTBCc0IsZ0JBQ0UsT0FDRSx1QkFqRjVCOUIsd0RBaUZrQ0MseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDLGVBQWVDLGVBQWVDLGVBQWVDO2dCQUUzSSxPQUFPQztZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLHFFQUFxRUgsOEJBQThCLEVBQUVELDJCQUEyQixFQUFFRSw4QkFBOEIsRUFBRWIsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVztnQkFDeE4sSUFBSVc7Z0JBRUosSUFBTWEsZ0JBQWdCaEIsNkJBQ2hCaUIsbUJBQW1CaEIsZ0NBQ25CaUIsbUJBQW1CaEIsZ0NBQ25CaUIsdUNBQXVDQyxJQUFBQSxxQ0FBa0MsRUFBQ0gsa0JBQWtCRCxlQUFlRSxrQkFBa0I3QixlQUFlQyxlQUFlQyxlQUFlQztnQkFFaExXLHdFQUF3RWdCLHNDQUFzQyxHQUFHO2dCQUVqSCxPQUFPaEI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvRUFBb0VMLDhCQUE4QixFQUFFSSwwQkFBMEIsRUFBRUgsOEJBQThCLEVBQUViLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQ3ROLElBQUlXO2dCQUVKLElBQU1hLGdCQUFnQlgsNEJBQ2hCWSxtQkFBbUJoQixnQ0FDbkJpQixtQkFBbUJoQixnQ0FDbkJpQix1Q0FBdUNDLElBQUFBLHFDQUFrQyxFQUFDSCxrQkFBa0JELGVBQWVFLGtCQUFrQjdCLGVBQWVDLGVBQWVDLGVBQWVDO2dCQUVoTFcsd0VBQXdFZ0Isc0NBQXNDLEdBQUc7Z0JBRWpILE9BQU9oQjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLHFEQUFxREYsMkJBQTJCLEVBQUVELGNBQWMsRUFBRWxCLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQ3hKLElBQUlpQjtnQkFFSixJQUFNdEIsbUJBQW1CcUIsNkJBQ25CcEIsbUJBQW1CbUIsZ0JBQ25CZCwwQkFBMEIsdUJBckg5QlIsd0RBcUhvQ0MseUJBQU4sSUFBSyxhQUF1QkMsa0JBQWtCQyxrQkFBa0JDLGVBQWVDLGVBQWVDLGVBQWVDO2dCQUU3SWlCLHlEQUF5RGhCLHlCQUF5QixHQUFHO2dCQUVyRixPQUFPZ0I7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxzQ0FBc0NGLGlCQUFpQixFQUFFRCxTQUFTLEVBQUV0QixhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO2dCQUMxSCxJQUFJcUI7Z0JBRUosSUFBTVEsV0FBV1YsV0FDWFcsZUFBZVYsbUJBQ2ZXLDhCQUE4QkMsSUFBQUEsNEJBQXlCLEVBQUNGLGNBQWNELFVBQVVoQyxlQUFlQyxlQUFlQyxlQUFlQztnQkFFbklxQixzQ0FBc0NVLDZCQUE4QixHQUFHO2dCQUV2RSxPQUFPVjtZQUNUOzs7V0F0SUk1QjtFQUFvRHdDLGNBQWE7QUF5SXZFLElBQU1DLDhDQUE4QyxJQUFJekM7SUFFeEQsV0FBZXlDIn0=