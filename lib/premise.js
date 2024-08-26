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
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/subproofAssertion!"), ruleSubproofPremiseMetastatementQuery = (0, _query.nodesQuery)("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"), subproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/metastatement"), ruleSubproofSubDerivationLastMetastatementQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
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
            value: function matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, metastatementLocalMetaContext) {
                var ruleSubproofNodeMatches = false;
                var subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);
                if (subproofAssertionNode !== null) {
                    var ruleSubproofPremiseMetastatement = ruleSubproofPremiseMetastatementQuery(ruleSubproofNode), ruleSubproofSubDerivationLastMetastatement = ruleSubproofSubDerivationLastMetastatementQuery(ruleSubproofNode), ruleSubproofMetastatementNodes = _to_consumable_array(ruleSubproofPremiseMetastatement).concat([
                        ruleSubproofSubDerivationLastMetastatement
                    ]), ruleSubproofMetastatementNodesLength = ruleSubproofMetastatementNodes.length, subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode), subproofAssertionMetastatementNodesLength = subproofAssertionMetastatementNodes.length;
                    if (ruleSubproofMetastatementNodesLength === subproofAssertionMetastatementNodesLength) {
                        ruleSubproofNodeMatches = (0, _array.match)(subproofAssertionMetastatementNodes, ruleSubproofMetastatementNodes, function(subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) {
                            var nonTerminalNodeA = subproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localMetaContextB = metastatementLocalMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, function() {
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
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localMetaContextB = metastatementLocalMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuL3ZlcmlmaWVyL25vZGVzL21ldGFMZXZlbFwiO1xuaW1wb3J0IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50UXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZi9wcmVtaXNlL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudCEvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50UXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVN1YnByb29mL3J1bGVTdWJEZXJpdmF0aW9uL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Wy0xXS9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gc3RhdGVtZW50TG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBpbnRyaW5zaWNMZXZlbEFnYWluc3RNZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFJ1bGVTdWJwcm9vZk5vZGUocnVsZVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgbGV0IHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50ID0gcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeShydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudCA9IHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudFF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5ydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudCxcbiAgICAgICAgICAgICAgcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcywgKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHRCID0gbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QiA9IG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBtZXRhc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyhtZXRhc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJlbWlzZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50UXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudExvY2FsQ29udGV4dCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsImludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZk5vZGUiLCJydWxlU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQiLCJydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50IiwicnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50IiwicnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzIiwicnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsIm1hdGNoIiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlIiwibG9jYWxNZXRhQ29udGV4dEIiLCJtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInByZW1pc2UiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7Ozs0REFkSTtnRUFDVTtxRkFDcUI7cUJBRWxDO3NCQUNPO3FCQUNTO29CQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBTUMsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDLHNDQUN2Q0Msd0NBQXdDQyxJQUFBQSxpQkFBVSxFQUFDLG1FQUNuREMsMkNBQTJDRCxJQUFBQSxpQkFBVSxFQUFDLHFDQUN0REUsa0RBQWtESixJQUFBQSxnQkFBUyxFQUFDO0FBRW5ELElBQUEsQUFBTUYsd0JBQUQsQUFBTDthQUFNQSxRQUNQTyxpQkFBaUI7Z0NBRFZQO1FBRWpCLElBQUksQ0FBQ08saUJBQWlCLEdBQUdBOztrQkFGUlA7O1lBS25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLHFCQUFxQjtnQkFDakYsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1AsaUJBQWlCLEVBQ3pDUSxtQkFBbUJMLGVBQ25CTSxlQUFlSixhQUNmSyxnQkFBZ0JDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDSCxlQUM3Q0ksZ0JBQWdCUCx1QkFDaEJRLDBCQUEwQkMsdUNBQTJDLENBQUNDLHFCQUFxQixDQUFDVCxrQkFBa0JDLGtCQUFrQkosZUFBZU0sZUFBZUcsZUFBZTtvQkFDM0ssSUFBTUksZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVCxJQUNBQyx1QkFBdUJKLHlCQUF5QixHQUFHO2dCQUV6RCxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVoQixhQUFhLEVBQUVDLFdBQVcsRUFBRWdCLDZCQUE2QjtnQkFDL0YsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyx3QkFBd0I3QiwyQkFBMkIsSUFBSSxDQUFDTSxpQkFBaUI7Z0JBRS9FLElBQUl1QiwwQkFBMEIsTUFBTTtvQkFDbEMsSUFBTUMsbUNBQW1DNUIsc0NBQXNDd0IsbUJBQ3pFSyw2Q0FBNkMxQixnREFBZ0RxQixtQkFDN0ZNLGlDQUFpQyxBQUMvQixxQkFBR0YseUNBRDRCO3dCQUUvQkM7cUJBQ0QsR0FDREUsdUNBQXVDRCwrQkFBK0JFLE1BQU0sRUFDNUVDLHNDQUFzQy9CLHlDQUF5Q3lCLHdCQUMvRU8sNENBQTRDRCxvQ0FBb0NELE1BQU07b0JBRTVGLElBQUlELHlDQUF5Q0csMkNBQTJDO3dCQUN0RlIsMEJBQTBCUyxJQUFBQSxZQUFLLEVBQUNGLHFDQUFxQ0gsZ0NBQWdDLFNBQUNNLG9DQUFvQ0M7NEJBQ3hJLElBQU0xQixtQkFBbUJ5QixvQ0FDbkJ4QixtQkFBbUJ5QiwrQkFDbkJ4QixlQUFlSixhQUNmSyxnQkFBZ0JDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDSCxlQUM3Q3lCLG9CQUFvQmIsK0JBQ3BCUCwwQkFBMEJxQixrQkFBc0IsQ0FBQ25CLHFCQUFxQixDQUFDVCxrQkFBa0JDLGtCQUFrQkosZUFBZU0sZUFBZXdCLG1CQUFtQjtnQ0FDMUosSUFBTWpCLGdCQUFnQjtnQ0FFdEIsT0FBT0E7NEJBQ1Q7NEJBRU4sSUFBSUgseUJBQXlCO2dDQUMzQixPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9RO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCcEMsaUJBQWlCLEVBQUVJLGFBQWEsRUFBRUMsV0FBVyxFQUFFZ0IsNkJBQTZCO2dCQUNqRyxJQUFNZCxtQkFBbUIsSUFBSSxDQUFDUCxpQkFBaUIsRUFDekNRLG1CQUFtQlIsbUJBQ25CUyxlQUFlSixhQUNmSyxnQkFBZ0JDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDSCxlQUM3Q3lCLG9CQUFvQmIsK0JBQ3BCUCwwQkFBMEJxQixrQkFBc0IsQ0FBQ25CLHFCQUFxQixDQUFDVCxrQkFBa0JDLGtCQUFrQkosZUFBZU0sZUFBZXdCLG1CQUFtQjtvQkFDMUosSUFBTWpCLGdCQUFnQjtvQkFFdEIsT0FBT0E7Z0JBQ1QsSUFDQW9CLDJCQUEyQnZCLHlCQUF5QixHQUFHO2dCQUU3RCxPQUFPdUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUN6QyxpQkFBaUIsRUFBRXVDLFNBQzNERyxnQkFBZ0JGLHFCQUNoQkcsT0FBTztvQkFDTEQsZUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJELElBQUksRUFBRXRDLFdBQVc7Z0JBQzdDLElBQU0sQUFBRXFDLGdCQUFrQkMsS0FBbEJELGVBQ0ZGLHNCQUFzQkUsZUFDdEJHLFFBQVF4QyxZQUFZeUMsUUFBUSxJQUM1QkMsU0FBUzFDLFlBQVkyQyxTQUFTLElBQzlCaEQsb0JBQW9CaUQsSUFBQUEsOENBQXdDLEVBQUNULHFCQUFxQkssT0FBT0UsU0FDekZHLFVBQVUsSUFoR0N6RCxRQWdHV087Z0JBRTVCLE9BQU9rRDtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCbkQsaUJBQWlCO2dCQUM1QyxJQUFNa0QsVUFBVSxJQXRHQ3pELFFBc0dXTztnQkFFNUIsT0FBT2tEO1lBQ1Q7OztXQXpHbUJ6RCJ9