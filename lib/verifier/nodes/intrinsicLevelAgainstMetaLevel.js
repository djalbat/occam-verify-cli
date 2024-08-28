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
                        nodeQueryA: statementNodeQuery,
                        nodeQueryB: statementNodeQuery,
                        verifyNodes: function(nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) {
                            var nonTerminalNodeVerified;
                            var statementNodeB = nodeB, statementNodeA = nodeA, statementNodeVerifiedAgainstStatementNode = _this.verifyStatementNodeAgainstStatementNode(statementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead);
                            nonTerminalNodeVerified = statementNodeVerifiedAgainstStatementNode; ///
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
                var nonTerminalNodeA = metastatementStatementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
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
            key: "verifyStatementNodeAgainstStatementNode",
            value: function verifyStatementNodeAgainstStatementNode(statementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var statementVerifiedAgainstStatement;
                var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeVerified = _intrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                statementVerifiedAgainstStatement = nonTerminalNodeVerified; ////
                return statementVerifiedAgainstStatement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuaW1wb3J0IHZlcmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbFwiO1xuaW1wb3J0IHZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3ZlcmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZlcmlmeU5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJpZmllclwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudCFcIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFBcmd1bWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9zdWJzdGl0dXRpb25cIik7XG5cbmNsYXNzIEludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5TWFwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeShub25UZXJtaW5hbE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5QjogbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSA9IG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlUXVlcnkobm9uVGVybWluYWxOb2RlQSksXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUIsIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSA9IG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlUXVlcnkobm9uVGVybWluYWxOb2RlQSksXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID1cblxuICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgIHRoaXMudmVyaWZ5U3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeUE6IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgICAgdmVyaWZ5Tm9kZXM6IChub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUgPVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5QTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgICB2ZXJpZnlOb2RlczogKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpID0+IHtcbiAgICAgICAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG5cbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZSA9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5VmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IG5vZGVzVmVyaWZpZWQgPSB2ZXJpZnlOb2Rlcyhub2RlUXVlcnlNYXBzLCBub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBZ2FpbnN0TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUIsIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZClcblxuICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgbWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUIsIG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHZlcmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQobWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpXG5cbiAgICBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0TWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gdmVyaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZClcblxuICAgIG1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIG1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhc3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnROb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGVOb2RlQWdhaW5zdFRlcm1Ob2RlKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVZlcmlmaWVkQWdhaW5zdFRlcm0gPSB2ZXJpZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFRlcm1Ob2RlID0gdmFyaWFibGVWZXJpZmllZEFnYWluc3RUZXJtOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlVmVyaWZpZWRBZ2FpbnN0VGVybU5vZGU7XG4gIH1cbn1cblxuY29uc3QgaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciA9IG5ldyBJbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJJbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibm9kZVF1ZXJ5TWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidmVyaWZ5Tm9kZXMiLCJub2RlQSIsIm5vZGVCIiwibWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVCIiwibWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBIiwibWV0YXN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RNZXRhc3RhdGVtZW50U3RhdGVtZW50Tm9kZSIsInZlcmlmeU1ldGFzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQWdhaW5zdE1ldGFzdGF0ZW1lbnRTdGF0ZW1lbnROb2RlIiwibWV0YUFyZ3VtZW50U3RhdGVtZW50Tm9kZUIiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdE1ldGFBcmd1bWVudFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RNZXRhQXJndW1lbnRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZUIiLCJtZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVBIiwibWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnROb2RlIiwidmVyaWZ5TWV0YXN0YXRlbWVudFN0YXRlbWVudE5vZGVBZ2FpbnN0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlTdGF0ZW1lbnROb2RlQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZUFnYWluc3RTdGF0ZW1lbnROb2RlIiwidGVybU5vZGVCIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVWZXJpZmllZEFnYWluc3RUZXJtTm9kZSIsInZlcmlmeVZhcmlhYmxlTm9kZUFnYWluc3RUZXJtTm9kZSIsIm5vZGVzVmVyaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50Iiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCIsImludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVWZXJpZmllZEFnYWluc3RUZXJtIiwidmVyaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSIsIk5vZGVzVmVyaWZpZXIiLCJpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyUEE7OztlQUFBOzs7NERBelAwQjswRUFDWTtxRUFDRTttRkFDTztxQkFFckI7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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