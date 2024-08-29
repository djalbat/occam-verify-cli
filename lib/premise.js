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
var _localMeta = /*#__PURE__*/ _interop_require_default(require("./context/localMeta"));
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
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/subproofAssertion!"), subproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/metastatement"), ruleSubproofPremiseMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"), metaSubproofMetaSuppositionMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/metaSupposition/unqualifiedMetastatement!/metastatement!"), ruleSubproofLastRuleProofStepMetastatementNodeQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation/lastRuleProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!"), metaSubproofLastMetaProofStepMetastatementNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaSubDerivation/lastMetaProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = statementLocalContext, nonTerminalNodeVerified = _intrinsicLevelAgainstMetaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchRuleSubproofNode",
            value: function matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localMetaContext) {
                var ruleSubproofNodeMatches = false;
                var subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);
                if (subproofAssertionNode !== null) {
                    var ruleSubproofPremiseMetastatementNodes = ruleSubproofPremiseMetastatementNodesQuery(ruleSubproofNode), ruleSubproofLastRuleProofStepMetastatementNode = ruleSubproofLastRuleProofStepMetastatementNodeQuery(ruleSubproofNode), ruleSubproofMetastatementNodes = _to_consumable_array(ruleSubproofPremiseMetastatementNodes).concat([
                        ruleSubproofLastRuleProofStepMetastatementNode
                    ]), subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);
                    ruleSubproofNodeMatches = (0, _array.match)(subproofAssertionMetastatementNodes, ruleSubproofMetastatementNodes, function(subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) {
                        var nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, fileContextA = fileContext, localMetaContextA = _localMeta.default.fromFileContext(fileContextA), localMetaContextB = localMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, function() {
                            var verifiedAhead = true;
                            return verifiedAhead;
                        });
                        if (nonTerminalNodeVerified) {
                            return true;
                        }
                    });
                }
                return ruleSubproofNodeMatches;
            }
        },
        {
            key: "matchMetaSubproofNode",
            value: function matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext) {
                var metaSubproofNodeMatches = false;
                var subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);
                if (subproofAssertionNode !== null) {
                    var metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode), metaSubproofLastMetaProofStepMetastatementNode = metaSubproofLastMetaProofStepMetastatementNodeQuery(metaSubproofNode), metaSubproofMetastatementNodes = _to_consumable_array(metaSubproofMetaSuppositionMetastatementNodes).concat([
                        metaSubproofLastMetaProofStepMetastatementNode
                    ]), subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);
                    metaSubproofNodeMatches = (0, _array.match)(subproofAssertionMetastatementNodes, metaSubproofMetastatementNodes, function(subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) {
                        var nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, fileContextA = fileContext, localMetaContextA = _localMeta.default.fromFileContext(fileContextA), localMetaContextB = localMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, function() {
                            var verifiedAhead = true;
                            return verifiedAhead;
                        });
                        if (nonTerminalNodeVerified) {
                            return true;
                        }
                    });
                }
                return metaSubproofNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, localMetaContextA = _localMeta.default.fromFileContext(fileContextA), localMetaContextB = localMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBMb2NhbE1ldGFDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxNZXRhXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuL3ZlcmlmaWVyL25vZGVzL2ludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2YvcHJlbWlzZS91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQhL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhU3VwcG9zaXRpb24vdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IS9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZkxhc3RSdWxlUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlU3VicHJvb2YvcnVsZVN1YkRlcml2YXRpb24vbGFzdFJ1bGVQcm9vZlN0ZXAvdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0YVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVN1YnByb29mL21ldGFTdWJEZXJpdmF0aW9uL2xhc3RNZXRhUHJvb2ZTdGVwL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudHxxdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBzdGF0ZW1lbnRMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGxldCBydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzID0gcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mTGFzdFJ1bGVQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZSA9IHJ1bGVTdWJwcm9vZkxhc3RSdWxlUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeShydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4ucnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgcnVsZVN1YnByb29mTGFzdFJ1bGVQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcyA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLCBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMsIChzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHRBID0gTG9jYWxNZXRhQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QiA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YVN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gbWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkobWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0YVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YVN1YnByb29mTGFzdE1ldGFQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5tZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIG1ldGFTdWJwcm9vZkxhc3RNZXRhUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgbWV0YVN1YnByb29mTm9kZU1hdGNoZXMgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcywgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLCAoc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QSA9IExvY2FsTWV0YUNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHRCID0gbG9jYWxNZXRhQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHRBID0gTG9jYWxNZXRhQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QiA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBtZXRhc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyhtZXRhc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJlbWlzZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZkxhc3RSdWxlUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFTdWJwcm9vZkxhc3RNZXRhUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50TG9jYWxDb250ZXh0Iiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoUnVsZVN1YnByb29mTm9kZSIsInJ1bGVTdWJwcm9vZk5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwicnVsZVN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzIiwicnVsZVN1YnByb29mTGFzdFJ1bGVQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcyIsInN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzIiwibWF0Y2giLCJzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwicnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUiLCJsb2NhbE1ldGFDb250ZXh0QSIsIkxvY2FsTWV0YUNvbnRleHQiLCJsb2NhbE1ldGFDb250ZXh0QiIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWV0YVN1YnByb29mTm9kZU1hdGNoZXMiLCJtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhU3VicHJvb2ZMYXN0TWV0YVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInByZW1pc2UiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUJxQkE7Ozs0REFqQkk7Z0VBQ0k7Z0VBQ007cUZBQ3FCO3FCQUVsQztzQkFDTztxQkFDUztvQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQU1DLDZCQUE2QkMsSUFBQUEsZ0JBQVMsRUFBQyxzQ0FDdkNDLDJDQUEyQ0MsSUFBQUEsaUJBQVUsRUFBQyxxQ0FDdERDLDZDQUE2Q0QsSUFBQUEsaUJBQVUsRUFBQyxtRUFDeERFLHFEQUFxREYsSUFBQUEsaUJBQVUsRUFBQywyRUFDaEVHLHNEQUFzREwsSUFBQUEsZ0JBQVMsRUFBQyxxSEFDaEVNLHNEQUFzRE4sSUFBQUEsZ0JBQVMsRUFBQztBQUV2RCxJQUFBLEFBQU1GLHdCQUFELEFBQUw7YUFBTUEsUUFDUFMsaUJBQWlCO2dDQURWVDtRQUVqQixJQUFJLENBQUNTLGlCQUFpQixHQUFHQTs7a0JBRlJUOztZQUtuQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxxQkFBcUI7Z0JBQ2pGLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLGlCQUFpQixFQUN6Q1EsbUJBQW1CTCxlQUNuQk0sZUFBZUosYUFDZkssZ0JBQWdCQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ0gsZUFDN0NJLGdCQUFnQlAsdUJBQ2hCUSwwQkFBMEJDLHVDQUEyQyxDQUFDQyxxQkFBcUIsQ0FBQ1Qsa0JBQWtCQyxrQkFBa0JKLGVBQWVNLGVBQWVHLGVBQWU7b0JBQzNLLElBQU1JLGdCQUFnQjtvQkFFdEIsT0FBT0E7Z0JBQ1Qs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