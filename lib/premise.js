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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./context/local/metaLevel"));
var _metaLevel1 = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./context/local/intrinsicLevel"));
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
                    var intrinsicLevelLocalContext = _intrinsicLevel.default.fromFileContext(fileContext), nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, localContextA = intrinsicLevelLocalContext, localContextB = localContext, nonTerminalNodeVerified = _intrinsicLevelAgainstMetaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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
                            var metaLevelLocalContext = _metaLevel.default.fromFileContext(fileContext), nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = subproofStatementNode, localContextA = metaLevelLocalContext, localContextB = localContext, nonTerminalNodeVerified = _intrinsicLevelAgainstMetaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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
                            var metaLevelLocalContext = _metaLevel.default.fromFileContext(fileContext), nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, localContextA = metaLevelLocalContext, localContextB = localContext, nonTerminalNodeVerified = _metaLevel1.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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
                            var metaLevelLocalContext = _metaLevel.default.fromFileContext(fileContext), nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, localContextA = metaLevelLocalContext, localContextB = localContext, nonTerminalNodeVerified = _metaLevel1.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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
                    var metaLevelLocalContext = _metaLevel.default.fromFileContext(fileContext), nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, localContextA = metaLevelLocalContext, localContextB = localContext, nonTerminalNodeVerified = _metaLevel1.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YUxldmVsTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWwvbWV0YUxldmVsXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxcIjtcbmltcG9ydCBJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsL2ludHJpbnNpY0xldmVsXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcsIG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudCEvc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL2xhc3RQcm9vZlN0ZXAvdW5xdWFsaWZpZWRTdGF0ZW1lbnR8cXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2YvcHJlbWlzZS91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQhL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhU3VwcG9zaXRpb24vdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IS9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZkxhc3RSdWxlUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlU3VicHJvb2YvcnVsZVN1YkRlcml2YXRpb24vbGFzdFJ1bGVQcm9vZlN0ZXAvdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0YXByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVN1YnByb29mL21ldGFTdWJEZXJpdmF0aW9uL2xhc3RNZXRhcHJvb2ZTdGVwL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudHxxdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnRub2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRub2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCA9IEludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBpbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXNTdWJwcm9vZk5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICAgIHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgbWF0Y2hlc1N1YnByb29mTm9kZSA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLCBzdWJwcm9vZlN0YXRlbWVudE5vZGVzLCAoc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgc3VicHJvb2ZTdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YUxldmVsTG9jYWxDb250ZXh0ID0gTWV0YUxldmVsTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gbWV0YUxldmVsTG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgbWF0Y2hSdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc1J1bGVTdWJwcm9vZk5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzID0gcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBydWxlU3VicHJvb2ZMYXN0UnVsZVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlID0gcnVsZVN1YnByb29mTGFzdFJ1bGVQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgICAgLi4ucnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgICBydWxlU3VicHJvb2ZMYXN0UnVsZVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1hdGNoZXNSdWxlU3VicHJvb2ZOb2RlID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcywgKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YUxldmVsTG9jYWxDb250ZXh0ID0gTWV0YUxldmVsTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBtZXRhTGV2ZWxMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNSdWxlU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc01ldGFTdWJwcm9vZk5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YVN1YnByb29mTGFzdE1ldGFwcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFTdWJwcm9vZkxhc3RNZXRhcHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAgIC4uLm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0YXByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1hdGNoZXNNZXRhU3VicHJvb2ZOb2RlID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMsIG1ldGFTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcywgKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YUxldmVsTG9jYWxDb250ZXh0ID0gTWV0YUxldmVsTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBtZXRhTGV2ZWxMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhTGV2ZWxMb2NhbENvbnRleHQgPSBNZXRhTGV2ZWxMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBtZXRhTGV2ZWxMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubWV0YXN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50bm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQsIHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyhtZXRhc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwibWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJydWxlU3VicHJvb2ZMYXN0UnVsZVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhU3VicHJvb2ZMYXN0TWV0YXByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRub2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0IiwibWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJpbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCIsIkludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJtYXRjaFN1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsIm1hdGNoZXNTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMiLCJzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlcyIsInN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzIiwibWF0Y2giLCJzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlIiwibWV0YUxldmVsTG9jYWxDb250ZXh0IiwiTWV0YUxldmVsTG9jYWxDb250ZXh0IiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwicnVsZVN1YnByb29mTm9kZSIsIm1hdGNoZXNSdWxlU3VicHJvb2ZOb2RlIiwicnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJwcm9vZkxhc3RSdWxlUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGUiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWF0Y2hlc01ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhU3VicHJvb2ZMYXN0TWV0YXByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhc3RhdGVtZW50Iiwic3RhdGVtZW50IiwianNvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwicHJlbWlzZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7Z0VBbkJhO2lFQUNDO3FFQUNJO3FGQUNpQjtxQkFFbEM7c0JBQ087cUJBQ1M7b0JBQ3FEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRixJQUFNQyw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUMsc0NBQ3ZDQyx5Q0FBeUNDLElBQUFBLGlCQUFVLEVBQUMsMkRBQ3BEQywwQ0FBMENILElBQUFBLGdCQUFTLEVBQUMsNkZBQ3BESSwyQ0FBMkNGLElBQUFBLGlCQUFVLEVBQUMscUNBQ3RERyw2Q0FBNkNILElBQUFBLGlCQUFVLEVBQUMsbUVBQ3hESSxxREFBcURKLElBQUFBLGlCQUFVLEVBQUMsMkVBQ2hFSyxzREFBc0RQLElBQUFBLGdCQUFTLEVBQUMscUhBQ2hFUSxzREFBc0RSLElBQUFBLGdCQUFTLEVBQUM7QUFFdkQsSUFBQSxBQUFNRix3QkFBRCxBQUFMO2FBQU1BLFFBQ1BXLGlCQUFpQixFQUFFQyxhQUFhO2dDQUR6Qlo7UUFFakIsSUFBSSxDQUFDVyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDRSxhQUFhLEdBQUdEOztrQkFISlo7O1lBTW5CYyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGlCQUFpQjtZQUMvQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJKLGFBQWEsRUFBRUssYUFBYSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7Z0JBQ3hFLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBSSxJQUFJLENBQUNULGlCQUFpQixLQUFLLE1BQU07b0JBQ25DLElBQU1VLDZCQUE2QkMsdUJBQTBCLENBQUNDLGVBQWUsQ0FBQ0wsY0FDeEVNLG1CQUFtQixJQUFJLENBQUNiLGlCQUFpQixFQUN6Q2MsbUJBQW1CYixlQUNuQmMsZ0JBQWdCTCw0QkFDaEJNLGdCQUFnQlIsY0FDaEJTLDBCQUEwQkMsdUNBQTJDLENBQUNDLHFCQUFxQixDQUFDTixrQkFBa0JDLGtCQUFrQlIsZUFBZVMsZUFBZUMsZUFBZTt3QkFDM0ssSUFBTUksZ0JBQWdCO3dCQUV0QixPQUFPQTtvQkFDVDtvQkFFTlgsdUJBQXVCUSx5QkFBeUIsR0FBRztnQkFDckQ7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRWhCLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxZQUFZO2dCQUN0RSxJQUFJZSxzQkFBc0I7Z0JBRTFCLElBQUksSUFBSSxDQUFDdkIsaUJBQWlCLEtBQUssTUFBTTtvQkFDbkMsSUFBTXdCLHdCQUF3QmxDLDJCQUEyQixJQUFJLENBQUNVLGlCQUFpQjtvQkFFL0UsSUFBSXdCLDBCQUEwQixNQUFNO3dCQUNsQyxJQUFNQyxvQ0FBb0NqQyx1Q0FBdUM4QixlQUMzRUkscUNBQXFDaEMsd0NBQXdDNEIsZUFDN0VLLHlCQUF5QixBQUN2QixxQkFBR0YsMENBRG9COzRCQUV2QkM7eUJBQ0QsR0FDREUsc0NBQXNDakMseUNBQXlDNkI7d0JBRXJGRCxzQkFBc0JNLElBQUFBLFlBQUssRUFBQ0QscUNBQXFDRCx3QkFBd0IsU0FBQ0csb0NBQW9DQzs0QkFDNUgsSUFBTUMsd0JBQXdCQyxrQkFBcUIsQ0FBQ3JCLGVBQWUsQ0FBQ0wsY0FDOURNLG1CQUFtQmlCLG9DQUNuQmhCLG1CQUFtQmlCLHVCQUNuQmhCLGdCQUFnQmlCLHVCQUNoQmhCLGdCQUFnQlIsY0FDaEJTLDBCQUEwQkMsdUNBQTJDLENBQUNDLHFCQUFxQixDQUFDTixrQkFBa0JDLGtCQUFrQlIsZUFBZVMsZUFBZUMsZUFBZTtnQ0FDM0ssSUFBTUksZ0JBQWdCO2dDQUV0QixPQUFPQTs0QkFDVDs0QkFFTixJQUFJSCx5QkFBeUI7Z0NBQzNCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT007WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFN0IsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7Z0JBQzlFLElBQUk0QiwwQkFBMEI7Z0JBRTlCLElBQUksSUFBSSxDQUFDcEMsaUJBQWlCLEtBQUssTUFBTTtvQkFDbkMsSUFBTXdCLHdCQUF3QmxDLDJCQUEyQixJQUFJLENBQUNVLGlCQUFpQjtvQkFFL0UsSUFBSXdCLDBCQUEwQixNQUFNO3dCQUNsQyxJQUFNYSx3Q0FBd0N6QywyQ0FBMkN1QyxtQkFDbkZHLGlEQUFpRHhDLG9EQUFvRHFDLG1CQUNyR0ksaUNBQWlDLEFBQy9CLHFCQUFHRiw4Q0FENEI7NEJBRS9CQzt5QkFDRCxHQUNEVixzQ0FBc0NqQyx5Q0FBeUM2Qjt3QkFFckZZLDBCQUEwQlAsSUFBQUEsWUFBSyxFQUFDRCxxQ0FBcUNXLGdDQUFnQyxTQUFDVCxvQ0FBb0NVOzRCQUN4SSxJQUFNUix3QkFBd0JDLGtCQUFxQixDQUFDckIsZUFBZSxDQUFDTCxjQUM5RE0sbUJBQW1CaUIsb0NBQ25CaEIsbUJBQW1CMEIsK0JBQ25CekIsZ0JBQWdCaUIsdUJBQ2hCaEIsZ0JBQWdCUixjQUNoQlMsMEJBQTBCd0IsbUJBQXNCLENBQUN0QixxQkFBcUIsQ0FBQ04sa0JBQWtCQyxrQkFBa0JSLGVBQWVTLGVBQWVDLGVBQWU7Z0NBQ3RKLElBQU1JLGdCQUFnQjtnQ0FFdEIsT0FBT0E7NEJBQ1Q7NEJBRU4sSUFBSUgseUJBQXlCO2dDQUMzQixPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9tQjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVyQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsWUFBWTtnQkFDOUUsSUFBSW9DLDBCQUEwQjtnQkFFOUIsSUFBSSxJQUFJLENBQUM1QyxpQkFBaUIsS0FBSyxNQUFNO29CQUNuQyxJQUFNd0Isd0JBQXdCbEMsMkJBQTJCLElBQUksQ0FBQ1UsaUJBQWlCO29CQUUvRSxJQUFJd0IsMEJBQTBCLE1BQU07d0JBQ2xDLElBQU1xQixnREFBZ0RoRCxtREFBbUQ4QyxtQkFDbkdHLGlEQUFpRC9DLG9EQUFvRDRDLG1CQUNyR0ksaUNBQWlDLEFBQy9CLHFCQUFHRixzREFENEI7NEJBRS9CQzt5QkFDRCxHQUNEbEIsc0NBQXNDakMseUNBQXlDNkI7d0JBRXJGb0IsMEJBQTBCZixJQUFBQSxZQUFLLEVBQUNELHFDQUFxQ21CLGdDQUFnQyxTQUFDakIsb0NBQW9DVTs0QkFDeEksSUFBTVIsd0JBQXdCQyxrQkFBcUIsQ0FBQ3JCLGVBQWUsQ0FBQ0wsY0FDOURNLG1CQUFtQmlCLG9DQUNuQmhCLG1CQUFtQjBCLCtCQUNuQnpCLGdCQUFnQmlCLHVCQUNoQmhCLGdCQUFnQlIsY0FDaEJTLDBCQUEwQndCLG1CQUFzQixDQUFDdEIscUJBQXFCLENBQUNOLGtCQUFrQkMsa0JBQWtCUixlQUFlUyxlQUFlQyxlQUFlO2dDQUN0SixJQUFNSSxnQkFBZ0I7Z0NBRXRCLE9BQU9BOzRCQUNUOzRCQUVOLElBQUlILHlCQUF5QjtnQ0FDM0IsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPMkI7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJoRCxpQkFBaUIsRUFBRU0sYUFBYSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7Z0JBQ2hGLElBQUl5QywyQkFBMkI7Z0JBRS9CLElBQUksSUFBSSxDQUFDakQsaUJBQWlCLEtBQUssTUFBTTtvQkFDbkMsSUFBTWdDLHdCQUF3QkMsa0JBQXFCLENBQUNyQixlQUFlLENBQUNMLGNBQzlETSxtQkFBbUIsSUFBSSxDQUFDYixpQkFBaUIsRUFDekNjLG1CQUFtQmQsbUJBQ25CZSxnQkFBZ0JpQix1QkFDaEJoQixnQkFBZ0JSLGNBQ2hCUywwQkFBMEJ3QixtQkFBc0IsQ0FBQ3RCLHFCQUFxQixDQUFDTixrQkFBa0JDLGtCQUFrQlIsZUFBZVMsZUFBZUMsZUFBZTt3QkFDdEosSUFBTUksZ0JBQWdCO3dCQUV0QixPQUFPQTtvQkFDVDtvQkFFTjZCLDJCQUEyQmhDLHlCQUF5QixHQUFHO2dCQUN6RDtnQkFFQSxPQUFPZ0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNyRCxpQkFBaUIsRUFBRW1ELFNBQzNERyxrQkFBa0JELElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDbkQsYUFBYSxFQUFFaUQsU0FDbkRJLGdCQUFnQkgscUJBQ2hCSSxZQUFZRixpQkFDWkcsT0FBTztvQkFDTEYsZUFBQUE7b0JBQ0FDLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCekQsYUFBYTtnQkFDcEMsSUFBTUQsb0JBQW9CLE1BQ3BCMkQsVUFBVSxJQXRMQ3RFLFFBc0xXVyxtQkFBbUJDO2dCQUUvQyxPQUFPMEQ7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQjVELGlCQUFpQjtnQkFDNUMsSUFBTUMsZ0JBQWdCLE1BQ2hCMEQsVUFBVSxJQTdMQ3RFLFFBNkxXVyxtQkFBbUJDO2dCQUUvQyxPQUFPMEQ7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkosSUFBSSxFQUFFbEQsV0FBVztnQkFDN0MsSUFBUWdELGdCQUE2QkUsS0FBN0JGLGVBQWVDLFlBQWNDLEtBQWRELFdBQ2pCSixzQkFBc0JHLGVBQ3RCRCxrQkFBa0JFLFdBQ2xCTSxRQUFRdkQsWUFBWXdELFFBQVEsSUFDNUJDLFNBQVN6RCxZQUFZMEQsU0FBUyxJQUM5QmpFLG9CQUFvQmtFLElBQUFBLDhDQUF3QyxFQUFDZCxxQkFBcUJVLE9BQU9FLFNBQ3pGL0QsZ0JBQWdCa0UsSUFBQUEsc0NBQWdDLEVBQUNiLGlCQUFpQlEsT0FBT0UsU0FDekVMLFVBQVUsSUExTUN0RSxRQTBNV1csbUJBQW1CQztnQkFFL0MsT0FBTzBEO1lBQ1Q7OztXQTdNbUJ0RSJ9