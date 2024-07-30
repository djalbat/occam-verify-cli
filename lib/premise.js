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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
var _metaLevelToIntrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevelToIntrinsicLevel"));
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
                        subproofNodeMatches = (0, _array.match)(ruleSubproofAssertionMetastatementNodes, subproofStatementNodes, function(ruleSubproofAssertionMetastatementNode, subproofStatementNode) {
                            var nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = subproofStatementNode, fileContextA = fileContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _metaLevelToIntrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, function() {
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
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, fileContextA = fileContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _metaLevelToIntrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchRuleSubproofNode",
            value: function matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, metastatementLocalMetaContext) {
                var ruleSubproofNodeMatches = false;
                var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (ruleSubproofAssertionNode !== null) {
                    var ruleSubproofPremiseMetastatement = ruleSubproofPremiseMetastatementQuery(ruleSubproofNode), ruleSubproofSubDerivationLastMetastatement = ruleSubproofSubDerivationLastMetastatementQuery(ruleSubproofNode), ruleSubproofMetastatementNodes = _to_consumable_array(ruleSubproofPremiseMetastatement).concat([
                        ruleSubproofSubDerivationLastMetastatement
                    ]), ruleSubproofMetastatementNodesLength = ruleSubproofMetastatementNodes.length, ruleSubproofAssertionMetastatementNodes = ruleSubproofAssertionMetastatementNodesQuery(ruleSubproofAssertionNode), ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (ruleSubproofMetastatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        ruleSubproofNodeMatches = (0, _array.match)(ruleSubproofAssertionMetastatementNodes, ruleSubproofMetastatementNodes, function(ruleSubproofAssertionMetastatementNode, ruleSubproofMetastatementNode) {
                            var nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, fileContextA = fileContext, localMetaContextB = metastatementLocalMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, function() {
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
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementLocalMetaContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, localMetaContextB = metastatementLocalMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsXCI7XG5cbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9ydWxlU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3ByZW1pc2UvdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IS9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudCEvc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvbi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnRbLTFdL3N0YXRlbWVudCFcIiksXG4gICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBydWxlU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnRRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlU3VicHJvb2YvcnVsZVN1YkRlcml2YXRpb24vcXVhbGlmaWVkTWV0YXN0YXRlbWVudHx1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRbLTFdL21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGUgPSBzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5zdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXNMZW5ndGggPSBzdWJwcm9vZlN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IG1hdGNoKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcywgc3VicHJvb2ZTdGF0ZW1lbnROb2RlcywgKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBzdWJwcm9vZlN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IHN0YXRlbWVudExvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsVG9JbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBzdGF0ZW1lbnRMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZVN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnQgPSBydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudFF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50ID0gcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50UXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50LFxuICAgICAgICAgICAgICBydWxlU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgcnVsZVN1YnByb29mTm9kZU1hdGNoZXMgPSBtYXRjaChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcywgKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHRCID0gbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QiA9IG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubWV0YXN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudCA9IG1ldGFzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsInN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudFF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50TG9jYWxDb250ZXh0Iiwic3VicHJvb2ZOb2RlTWF0Y2hlcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyIsInN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsInN1YnByb29mU3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJtYXRjaCIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZk5vZGUiLCJydWxlU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQiLCJydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudCIsInJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudCIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlIiwibG9jYWxNZXRhQ29udGV4dEIiLCJtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInByZW1pc2UiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBaUJxQkE7OztnRUFmYztnRkFDZ0I7cUJBRTdCO3NCQUNPO3FCQUNTO29CQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBTUMsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLDBDQUMzQ0Msd0NBQXdDQyxJQUFBQSxpQkFBVSxFQUFDLG1FQUNuREMseUNBQXlDRCxJQUFBQSxpQkFBVSxFQUFDLDJEQUNwREUsOENBQThDSixJQUFBQSxnQkFBUyxFQUFDLG1GQUN4REssK0NBQStDSCxJQUFBQSxpQkFBVSxFQUFDLHlDQUMxREksa0RBQWtETixJQUFBQSxnQkFBUyxFQUFDO0FBRW5ELElBQUEsQUFBTUYsd0JBQUQsQUFBTDthQUFNQSxRQUNQUyxpQkFBaUI7Z0NBRFZUO1FBRWpCLElBQUksQ0FBQ1MsaUJBQWlCLEdBQUdBOztrQkFGUlQ7O1lBS25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLHFCQUFxQjtnQkFDL0UsSUFBSUMsc0JBQXNCO2dCQUUxQixJQUFNQyx3QkFBd0JoQiwrQkFBK0IsSUFBSSxDQUFDUSxpQkFBaUI7Z0JBRW5GLElBQUlRLDBCQUEwQixNQUFNO29CQUNsQyxJQUFNQyxvQ0FBb0NiLHVDQUF1Q08sZUFDM0VPLHlDQUF5Q2IsNENBQTRDTSxlQUNyRlEseUJBQXlCLEFBQ3ZCLHFCQUFHRiwwQ0FEb0I7d0JBRXZCQztxQkFDRCxHQUNERSwwQ0FBMENkLDZDQUE2Q1Usd0JBQ3ZGSywrQkFBK0JGLHVCQUF1QkcsTUFBTSxFQUM1REMsZ0RBQWdESCx3Q0FBd0NFLE1BQU07b0JBRXBHLElBQUlELGlDQUFpQ0UsK0NBQStDO3dCQUNsRlIsc0JBQXNCUyxJQUFBQSxZQUFLLEVBQUNKLHlDQUF5Q0Qsd0JBQXdCLFNBQUNNLHdDQUF3Q0M7NEJBQ3BJLElBQU1DLG1CQUFtQkYsd0NBQ25CRyxtQkFBbUJGLHVCQUNuQkcsZUFBZWhCLGFBQ2ZpQixnQkFBZ0JoQix1QkFDaEJpQiwwQkFBMEJDLGtDQUFzQyxDQUFDQyxxQkFBcUIsQ0FBQ04sa0JBQWtCQyxrQkFBa0JoQixlQUFlaUIsY0FBY0MsZUFBZTtnQ0FDckssSUFBTUksZ0JBQWdCO2dDQUV0QixPQUFPQTs0QkFDVDs0QkFFTixJQUFJSCx5QkFBeUI7Z0NBQzNCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT2hCO1lBQ1Q7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsYUFBYSxFQUFFeEIsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLHFCQUFxQjtnQkFDakYsSUFBTWEsbUJBQW1CLElBQUksQ0FBQ25CLGlCQUFpQixFQUN6Q29CLG1CQUFtQlEsZUFDbkJQLGVBQWVoQixhQUNmaUIsZ0JBQWdCaEIsdUJBQ2hCaUIsMEJBQTBCQyxrQ0FBc0MsQ0FBQ0MscUJBQXFCLENBQUNOLGtCQUFrQkMsa0JBQWtCaEIsZUFBZWlCLGNBQWNDLGVBQWU7b0JBQ3JLLElBQU1JLGdCQUFnQjtvQkFFdEIsT0FBT0E7Z0JBQ1QsSUFDQUcsdUJBQXVCTix5QkFBeUIsR0FBRztnQkFFekQsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFM0IsYUFBYSxFQUFFQyxXQUFXLEVBQUUyQiw2QkFBNkI7Z0JBQy9GLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsNEJBQTRCMUMsK0JBQStCLElBQUksQ0FBQ1EsaUJBQWlCO2dCQUV2RixJQUFJa0MsOEJBQThCLE1BQU07b0JBQ3RDLElBQU1DLG1DQUFtQ3pDLHNDQUFzQ3FDLG1CQUN6RUssNkNBQTZDckMsZ0RBQWdEZ0MsbUJBQzdGTSxpQ0FBaUMsQUFDL0IscUJBQUdGLHlDQUQ0Qjt3QkFFL0JDO3FCQUNELEdBQ0RFLHVDQUF1Q0QsK0JBQStCdkIsTUFBTSxFQUM1RUYsMENBQTBDZCw2Q0FBNkNvQyw0QkFDdkZuQixnREFBZ0RILHdDQUF3Q0UsTUFBTTtvQkFFcEcsSUFBSXdCLHlDQUF5Q3ZCLCtDQUErQzt3QkFDMUZrQiwwQkFBMEJqQixJQUFBQSxZQUFLLEVBQUNKLHlDQUF5Q3lCLGdDQUFnQyxTQUFDcEIsd0NBQXdDc0I7NEJBQ2hKLElBQU1wQixtQkFBbUJGLHdDQUNuQkcsbUJBQW1CbUIsK0JBQ25CbEIsZUFBZWhCLGFBQ2ZtQyxvQkFBb0JSLCtCQUNwQlQsMEJBQTBCa0Isa0JBQXNCLENBQUNoQixxQkFBcUIsQ0FBQ04sa0JBQWtCQyxrQkFBa0JoQixlQUFlaUIsY0FBY21CLG1CQUFtQjtnQ0FDekosSUFBTWQsZ0JBQWdCO2dDQUV0QixPQUFPQTs0QkFDVDs0QkFFTixJQUFJSCx5QkFBeUI7Z0NBQzNCLE9BQU87NEJBQ1Q7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT1U7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUIxQyxpQkFBaUIsRUFBRUksYUFBYSxFQUFFQyxXQUFXLEVBQUUyQiw2QkFBNkI7Z0JBQ2pHLElBQU1iLG1CQUFtQixJQUFJLENBQUNuQixpQkFBaUIsRUFDekNvQixtQkFBbUJwQixtQkFDbkJxQixlQUFlaEIsYUFDZm1DLG9CQUFvQlIsK0JBQ3BCVCwwQkFBMEJrQixrQkFBc0IsQ0FBQ2hCLHFCQUFxQixDQUFDTixrQkFBa0JDLGtCQUFrQmhCLGVBQWVpQixjQUFjbUIsbUJBQW1CO29CQUN6SixJQUFNZCxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNULElBQ0FpQiwyQkFBMkJwQix5QkFBeUIsR0FBRztnQkFFN0QsT0FBT29CO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDL0MsaUJBQWlCLEVBQUU2QyxTQUMzREcsZ0JBQWdCRixxQkFDaEJHLE9BQU87b0JBQ0xELGVBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCRCxJQUFJLEVBQUU1QyxXQUFXO2dCQUM3QyxJQUFNLEFBQUUyQyxnQkFBa0JDLEtBQWxCRCxlQUNGRixzQkFBc0JFLGVBQ3RCRyxRQUFROUMsWUFBWStDLFFBQVEsSUFDNUJDLFNBQVNoRCxZQUFZaUQsU0FBUyxJQUM5QnRELG9CQUFvQnVELElBQUFBLDhDQUF3QyxFQUFDVCxxQkFBcUJLLE9BQU9FLFNBQ3pGRyxVQUFVLElBbklDakUsUUFtSVdTO2dCQUU1QixPQUFPd0Q7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQnpELGlCQUFpQjtnQkFDNUMsSUFBTXdELFVBQVUsSUF6SUNqRSxRQXlJV1M7Z0JBRTVCLE9BQU93RDtZQUNUOzs7V0E1SW1CakUifQ==