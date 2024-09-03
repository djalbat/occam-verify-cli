"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Premise;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
var _intrinsicLevelAgainstMetaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/intrinsicLevelAgainstMetaLevel"));
var _array = require("./utilities/array");
var _string = require("./utilities/string");
var _query = require("./utilities/query");
var _node = require("./utilities/node");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/subproofAssertion!"), subproofSuppositionStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement!/statement!"), subproofLastProofStepStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!"), subproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/metastatement"), ruleSubproofPremiseMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"), metaSubproofMetaSuppositionMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/metaSupposition/unqualifiedMetastatement!/metastatement!"), ruleSubproofLastRuleProofStepMetastatementNodeQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation/lastRuleProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!"), metaSubproofLastMetaproofStepMetastatementNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaSubDerivation/lastMetaproofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");
var Premise = /*#__PURE__*/ function() {
    function Premise(metastatementNode, statementNode) {
        _class_call_check(this, Premise);
        this.metastatementNode = metastatementNode;
        this.statementnode = statementNode;
    }
    _create_class(Premise, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementnode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, fileContext, localContext) {
                var matchesStatementNode = false;
                if (this.metastatementNode !== null) {
                    var fileContextA = fileContext, nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, nonTerminalNodeVerified = _intrinsicLevelAgainstMetaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    matchesStatementNode = nonTerminalNodeVerified; ///
                }
                return matchesStatementNode;
            }
        },
        {
            key: "matchSubproofNode",
            value: function matchSubproofNode(subproofNode, substitutions, fileContext, localContext) {
                var matchesSubproofNode = false;
                if (this.metastatementNode !== null) {
                    var subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);
                    if (subproofAssertionNode !== null) {
                        var subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode), subproofLastProofStepStatementNode = subproofLastProofStepStatementNodeQuery(subproofNode), subproofStatementNodes = _to_consumable_array(subproofSuppositionStatementNodes).concat([
                            subproofLastProofStepStatementNode
                        ]), subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);
                        matchesSubproofNode = (0, _array.match)(subproofAssertionMetastatementNodes, subproofStatementNodes, function(subproofAssertionMetastatementNode, subproofStatementNode) {
                            var fileContextA = fileContext, nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = subproofStatementNode, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, nonTerminalNodeVerified = _intrinsicLevelAgainstMetaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                                var verifiedAhead = true;
                                return verifiedAhead;
                            });
                            if (nonTerminalNodeVerified) {
                                return true;
                            }
                        });
                    }
                }
                return matchesSubproofNode;
            }
        },
        {
            key: "matchRuleSubproofNode",
            value: function matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localContext) {
                var matchesRuleSubproofNode = false;
                if (this.metastatementNode !== null) {
                    var subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);
                    if (subproofAssertionNode !== null) {
                        var ruleSubproofPremiseMetastatementNodes = ruleSubproofPremiseMetastatementNodesQuery(ruleSubproofNode), ruleSubproofLastRuleProofStepMetastatementNode = ruleSubproofLastRuleProofStepMetastatementNodeQuery(ruleSubproofNode), ruleSubproofMetastatementNodes = _to_consumable_array(ruleSubproofPremiseMetastatementNodes).concat([
                            ruleSubproofLastRuleProofStepMetastatementNode
                        ]), subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);
                        matchesRuleSubproofNode = (0, _array.match)(subproofAssertionMetastatementNodes, ruleSubproofMetastatementNodes, function(subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) {
                            var fileContextA = fileContext, nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                                var verifiedAhead = true;
                                return verifiedAhead;
                            });
                            if (nonTerminalNodeVerified) {
                                return true;
                            }
                        });
                    }
                }
                return matchesRuleSubproofNode;
            }
        },
        {
            key: "matchMetaSubproofNode",
            value: function matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localContext) {
                var matchesMetaSubproofNode = false;
                if (this.metastatementNode !== null) {
                    var subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);
                    if (subproofAssertionNode !== null) {
                        var metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode), metaSubproofLastMetaproofStepMetastatementNode = metaSubproofLastMetaproofStepMetastatementNodeQuery(metaSubproofNode), metaSubproofMetastatementNodes = _to_consumable_array(metaSubproofMetaSuppositionMetastatementNodes).concat([
                            metaSubproofLastMetaproofStepMetastatementNode
                        ]), subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);
                        matchesMetaSubproofNode = (0, _array.match)(subproofAssertionMetastatementNodes, metaSubproofMetastatementNodes, function(subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) {
                            var fileContextA = fileContext, nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                                var verifiedAhead = true;
                                return verifiedAhead;
                            });
                            if (nonTerminalNodeVerified) {
                                return true;
                            }
                        });
                    }
                }
                return matchesMetaSubproofNode;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext) {
                var matchesMetastatementNode = false;
                if (this.metastatementNode !== null) {
                    var fileContextA = fileContext, nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    matchesMetastatementNode = nonTerminalNodeVerified; ///
                }
                return matchesMetastatementNode;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), statementString = (0, _string.nodeAsString)(this.statementnode, tokens), metastatement = metastatementString, statement = statementString, json = {
                    metastatement: metastatement,
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var metastatementNode = null, premise = new Premise(metastatementNode, statementNode);
                return premise;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var statementNode = null, premise = new Premise(metastatementNode, statementNode);
                return premise;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, statement = json.statement, metastatementString = metastatement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), premise = new Premise(metastatementNode, statementNode);
                return premise;
            }
        }
    ]);
    return Premise;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuL3ZlcmlmaWVyL25vZGVzL21ldGFMZXZlbFwiO1xuaW1wb3J0IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nLCBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnQhL3N0YXRlbWVudCFcIiksXG4gICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvbi9sYXN0UHJvb2ZTdGVwL3VucXVhbGlmaWVkU3RhdGVtZW50fHF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3ByZW1pc2UvdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IS9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1cHBvc2l0aW9uL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudCEvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBydWxlU3VicHJvb2ZMYXN0UnVsZVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVN1YnByb29mL3J1bGVTdWJEZXJpdmF0aW9uL2xhc3RSdWxlUHJvb2ZTdGVwL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudHxxdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YVN1YnByb29mTGFzdE1ldGFwcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhU3ViRGVyaXZhdGlvbi9sYXN0TWV0YXByb29mU3RlcC91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnR8cXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3RhdGVtZW50bm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50bm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIG1hdGNoZXNTdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzU3VicHJvb2ZOb2RlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgICAgc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAgIC4uLnN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1hdGNoZXNTdWJwcm9vZk5vZGUgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcywgc3VicHJvb2ZTdGF0ZW1lbnROb2RlcywgKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHN1YnByb29mU3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgbWF0Y2hSdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc1J1bGVTdWJwcm9vZk5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzID0gcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBydWxlU3VicHJvb2ZMYXN0UnVsZVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlID0gcnVsZVN1YnByb29mTGFzdFJ1bGVQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgICAgLi4ucnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgICBydWxlU3VicHJvb2ZMYXN0UnVsZVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1hdGNoZXNSdWxlU3VicHJvb2ZOb2RlID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcywgKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1J1bGVTdWJwcm9vZk5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzTWV0YVN1YnByb29mTm9kZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0YXByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YVN1YnByb29mTGFzdE1ldGFwcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBtZXRhU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgICAgLi4ubWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICAgIG1ldGFTdWJwcm9vZkxhc3RNZXRhcHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgbWF0Y2hlc01ldGFTdWJwcm9vZk5vZGUgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcywgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLCAoc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTWV0YVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubWV0YXN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50bm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQsIHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyhtZXRhc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwibWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJydWxlU3VicHJvb2ZMYXN0UnVsZVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhU3VicHJvb2ZMYXN0TWV0YXByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRub2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0IiwibWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJmaWxlQ29udGV4dEEiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZpZWRBaGVhZCIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwibWF0Y2hlc1N1YnByb29mTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyIsInN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJtYXRjaCIsInN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGUiLCJtYXRjaFJ1bGVTdWJwcm9vZk5vZGUiLCJydWxlU3VicHJvb2ZOb2RlIiwibWF0Y2hlc1J1bGVTdWJwcm9vZk5vZGUiLCJydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzIiwicnVsZVN1YnByb29mTGFzdFJ1bGVQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YUxldmVsTm9kZXNWZXJpZmllciIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJtYXRjaGVzTWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsIm1ldGFTdWJwcm9vZkxhc3RNZXRhcHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIiwidG9KU09OIiwidG9rZW5zIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJwcmVtaXNlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7Ozs0REFsQkk7Z0VBQ1U7cUZBQ3FCO3FCQUVsQztzQkFDTztxQkFDUztvQkFDcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNGLElBQU1DLDZCQUE2QkMsSUFBQUEsZ0JBQVMsRUFBQyxzQ0FDdkNDLHlDQUF5Q0MsSUFBQUEsaUJBQVUsRUFBQywyREFDcERDLDBD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