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
var ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/ruleSubproofAssertion!"), ruleSubproofPremiseMetastatementQuery = (0, _query.nodesQuery)("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"), ruleSubproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproofAssertion/metastatement"), ruleSubproofSubDerivationLastMetastatementQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
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
                var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (ruleSubproofAssertionNode !== null) {
                    var ruleSubproofPremiseMetastatement = ruleSubproofPremiseMetastatementQuery(ruleSubproofNode), ruleSubproofSubDerivationLastMetastatement = ruleSubproofSubDerivationLastMetastatementQuery(ruleSubproofNode), ruleSubproofMetastatementNodes = _to_consumable_array(ruleSubproofPremiseMetastatement).concat([
                        ruleSubproofSubDerivationLastMetastatement
                    ]), ruleSubproofMetastatementNodesLength = ruleSubproofMetastatementNodes.length, ruleSubproofAssertionMetastatementNodes = ruleSubproofAssertionMetastatementNodesQuery(ruleSubproofAssertionNode), ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (ruleSubproofMetastatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        ruleSubproofNodeMatches = (0, _array.match)(ruleSubproofAssertionMetastatementNodes, ruleSubproofMetastatementNodes, function(ruleSubproofAssertionMetastatementNode, ruleSubproofMetastatementNode) {
                            var nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localMetaContextB = metastatementLocalMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuL3ZlcmlmaWVyL25vZGVzL21ldGFMZXZlbFwiO1xuaW1wb3J0IGludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9ydWxlU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3ByZW1pc2UvdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IS9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudFF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVTdWJwcm9vZi9ydWxlU3ViRGVyaXZhdGlvbi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFstMV0vbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pc2Uge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IHN0YXRlbWVudExvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gaW50cmluc2ljTGV2ZWxBZ2FpbnN0TWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hSdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGxldCBydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudCA9IHJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50UXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnQgPSBydWxlU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnRRdWVyeShydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4ucnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnQsXG4gICAgICAgICAgICAgIHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCkge1xuICAgICAgICBydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcyA9IG1hdGNoKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcywgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLCAocnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QiA9IG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgbG9jYWxNZXRhQ29udGV4dEIgPSBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbWV0YXN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByZW1pc2UiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudFF1ZXJ5Iiwibm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50UXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudExvY2FsQ29udGV4dCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsImludHJpbnNpY0xldmVsQWdhaW5zdE1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZk5vZGUiLCJydWxlU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQiLCJydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudCIsInJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudCIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCIsIm1hdGNoIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSIsImxvY2FsTWV0YUNvbnRleHRCIiwibWV0YUxldmVsTm9kZXNWZXJpZmllciIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtZXRhc3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXN0YXRlbWVudCIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmciLCJwcmVtaXNlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7NERBZEk7Z0VBQ1U7cUZBQ3FCO3FCQUVsQztzQkFDTztxQkFDUztvQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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