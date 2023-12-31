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
var _premise = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/statementForMetavariable/premise"));
var _premise1 = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metastatementForMetavariable/premise"));
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
var ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/ruleSubproofAssertion!"), ruleSubproofPremiseMetastatementQuery = (0, _query.nodesQuery)("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"), subproofSuppositionStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement!/statement!"), subproofSubDerivationLastStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"), ruleSubproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproofAssertion/metastatement"), ruleSubproofSubDerivationLastMetastatementQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
var Premise = /*#__PURE__*/ function() {
    function Premise(metastatementNode) {
        _class_call_check(this, Premise);
        this.metastatementNode = metastatementNode;
    }
    _create_class(Premise, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchSubproofNode",
            value: function matchSubproofNode(subproofNode, substitutions, fileContext, statementLocalContext) {
                var subproofNodeMatches = false;
                var subproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (subproofAssertionNode !== null) {
                    var subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode), subproofSubDerivationLastStatementNode = subproofSubDerivationLastStatementNodeQuery(subproofNode), subproofStatementNodes = _to_consumable_array(subproofSuppositionStatementNodes).concat([
                        subproofSubDerivationLastStatementNode
                    ]), ruleSubproofAssertionMetastatementNodes = ruleSubproofAssertionMetastatementNodesQuery(subproofAssertionNode), subproofStatementNodesLength = subproofStatementNodes.length, ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (subproofStatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        subproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every(function(ruleSubproofAssertionMetastatementNode, index) {
                            var subproofStatementNode = subproofStatementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = subproofStatementNode, fileContextA = fileContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _premise.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, function() {
                                var verifiedAhead = true;
                                return verifiedAhead;
                            });
                            if (nonTerminalNodeVerified) {
                                return true;
                            }
                        });
                    }
                }
                return subproofNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, fileContextA = fileContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _premise.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchRuleSubproofNode",
            value: function matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, metastatementMetalocalContext) {
                var ruleSubproofNodeMatches = false;
                var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (ruleSubproofAssertionNode !== null) {
                    var ruleSubproofPremiseMetastatement = ruleSubproofPremiseMetastatementQuery(ruleSubproofNode), ruleSubproofSubDerivationLastMetastatement = ruleSubproofSubDerivationLastMetastatementQuery(ruleSubproofNode), ruleSubproofMetastatementNodes = _to_consumable_array(ruleSubproofPremiseMetastatement).concat([
                        ruleSubproofSubDerivationLastMetastatement
                    ]), ruleSubproofMetastatementNodesLength = ruleSubproofMetastatementNodes.length, ruleSubproofAssertionMetastatementNodes = ruleSubproofAssertionMetastatementNodesQuery(ruleSubproofAssertionNode), ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (ruleSubproofMetastatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        ruleSubproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every(function(ruleSubproofAssertionMetastatementNode, index) {
                            var ruleSubproofMetastatementNode = ruleSubproofMetastatementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, fileContextA = fileContext, metalocalContextB = metastatementMetalocalContext, nonTerminalNodeVerified = _premise1.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metalocalContextB, function() {
                                var verifiedAhead = true;
                                return verifiedAhead;
                            });
                            if (nonTerminalNodeVerified) {
                                return true;
                            }
                        });
                    }
                }
                return ruleSubproofNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementMetalocalContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, metalocalContextB = metastatementMetalocalContext, nonTerminalNodeVerified = _premise1.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metalocalContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), metastatementNodeMatches = nonTerminalNodeVerified; ///
                return metastatementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), metastatement = metastatementString, json = {
                    metastatement: metastatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, metastatementString = metastatement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), premise = new Premise(metastatementNode);
                return premise;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var premise = new Premise(metastatementNode);
                return premise;
            }
        }
    ]);
    return Premise;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcHJlbWlzZVN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlL3ByZW1pc2VcIjtcbmltcG9ydCBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9wcmVtaXNlXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3J1bGVTdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudFF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2YvcHJlbWlzZS91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQhL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uL3VucXVhbGlmaWVkU3RhdGVtZW50IS9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudFF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVTdWJwcm9vZi9ydWxlU3ViRGVyaXZhdGlvbi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFstMV0vbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHN1YnByb29mU3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN1YnByb29mU3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCkge1xuICAgICAgICBzdWJwcm9vZk5vZGVNYXRjaGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudE5vZGUgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IHN0YXRlbWVudExvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gcHJlbWlzZVN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBzdGF0ZW1lbnRMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHByZW1pc2VTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudE1ldGFsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcnVsZVN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnQgPSBydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudFF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50ID0gcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50UXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50LFxuICAgICAgICAgICAgICBydWxlU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgcnVsZVN1YnByb29mTm9kZU1hdGNoZXMgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMuZXZlcnkoKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhbG9jYWxDb250ZXh0QiA9IG1ldGFzdGF0ZW1lbnRNZXRhbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbWV0YWxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudE1ldGFsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICBtZXRhbG9jYWxDb250ZXh0QiA9IG1ldGFzdGF0ZW1lbnRNZXRhbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbWV0YWxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbWV0YXN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByZW1pc2UiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudFF1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwic3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVRdWVyeSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50UXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJzdWJwcm9vZk5vZGVNYXRjaGVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZTdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJpbmRleCIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwicHJlbWlzZVN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwicnVsZVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnRNZXRhbG9jYWxDb250ZXh0IiwicnVsZVN1YnByb29mTm9kZU1hdGNoZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwicnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnQiLCJydWxlU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnQiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFsb2NhbENvbnRleHRCIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVOb2Rlc1ZlcmlmaWVyIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInByZW1pc2UiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7Ozs4REFkb0M7K0RBQ0k7c0JBRWhDO3FCQUNTO29CQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBTUMsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLDBDQUMzQ0Msd0NBQXdDQyxJQUFBQSxpQkFBVSxFQUFDLG1FQUNuREMseUNBQXlDRCxJQUFBQSxpQkFBVSxFQUFDLDJEQUNwREUsOENBQThDSixJQUFBQSxnQkFBUyxFQUFDLG1GQUN4REssK0NBQStDSCxJQUFBQSxpQkFBVSxFQUFDLHlDQUMxREksa0RBQWtETixJQUFBQSxnQkFBUyxFQUFDO0FBRW5ELElBQUEsQUFBTUYsd0JBQUQsQUFBTDthQUFNQSxRQUNQUyxpQkFBaUI7Z0NBRFZUO1FBRWpCLElBQUksQ0FBQ1MsaUJBQWlCLEdBQUdBOztrQkFGUlQ7O1lBS25CVSxLQUFBQTttQkFBQUEsU0FBQUE7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