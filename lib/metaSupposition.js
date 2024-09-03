"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaSupposition;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
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
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/subproofAssertion!"), subproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/metastatement"), metaSubproofMetaSuppositionMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/metaSupposition/unqualifiedMetastatement/metastatement!"), metaSubproofLastMetpProofStepMetastatementNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaSubDerivation/lastMetpProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");
var MetaSupposition = /*#__PURE__*/ function() {
    function MetaSupposition(metastatementNode, statementNode) {
        _class_call_check(this, MetaSupposition);
        this.metastatementNode = metastatementNode;
        this.statementNode = statementNode;
    }
    _create_class(MetaSupposition, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchMetaSubproofNode",
            value: function matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localContext) {
                var matchesMetaSubproofNode = false;
                if (this.metastatementNode !== null) {
                    var subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);
                    if (subproofAssertionNode !== null) {
                        var metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode), metaSubproofLastMetpProofStepMetastatementNode = metaSubproofLastMetpProofStepMetastatementNodeQuery(metaSubproofNode), metaSubproofMetastatementNodes = _to_consumable_array(metaSubproofMetaSuppositionMetastatementNodes).concat([
                            metaSubproofLastMetpProofStepMetastatementNode
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
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), statementString = (0, _string.nodeAsString)(this.statementNode, tokens), metastatement = metastatementString, statement = statementString, json = {
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
                var metastatementNode = null, metaSupposition = new MetaSupposition(metastatementNode, statementNode);
                return metaSupposition;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var statementNode = null, metaSupposition = new MetaSupposition(metastatementNode, statementNode);
                return metaSupposition;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, statement = json.statement, metastatementString = metastatement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), metaSupposition = new MetaSupposition(metastatementNode, statementNode);
                return metaSupposition;
            }
        }
    ]);
    return MetaSupposition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nLCBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgbWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhU3VwcG9zaXRpb24vdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgbWV0YVN1YnByb29mTGFzdE1ldHBQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFTdWJwcm9vZi9tZXRhU3ViRGVyaXZhdGlvbi9sYXN0TWV0cFByb29mU3RlcC91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnR8cXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YVN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc01ldGFTdWJwcm9vZk5vZGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YVN1YnByb29mTGFzdE1ldHBQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFTdWJwcm9vZkxhc3RNZXRwUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAgIC4uLm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0cFByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1hdGNoZXNNZXRhU3VicHJvb2ZOb2RlID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMsIG1ldGFTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcywgKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLCAgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTWV0YVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50LFxuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uID0gbmV3IE1ldGFTdXBwb3NpdGlvbihtZXRhc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbiA9IG5ldyBNZXRhU3VwcG9zaXRpb24obWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50LCBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbiA9IG5ldyBNZXRhU3VwcG9zaXRpb24obWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGFTdXBwb3NpdGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm1ldGFTdWJwcm9vZkxhc3RNZXRwUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJtYXRjaGVzTWV0YVN1YnByb29mTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsIm1ldGFTdWJwcm9vZkxhc3RNZXRwUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMiLCJzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsIm1hdGNoIiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHRBIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWV0YUxldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIiwidG9KU09OIiwidG9rZW5zIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJtZXRhU3VwcG9zaXRpb24iLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7NERBYkk7Z0VBQ1U7cUJBRWI7c0JBQ087cUJBQ1M7b0JBQ3FEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRixJQUFNQyw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUMsc0NBQ3ZDQywyQ0FBMkNDLElBQUFBLGlCQUFVLEVBQUMscUNBQ3REQyxxREFBcURELElBQUFBLGlCQUFVLEVBQUMsMEVBQ2hFRSxzREFBc0RKLElBQUFBLGdCQUFTLEVBQUM7QUFFdkQsSUFBQSxBQUFNRixnQ0FBRCxBQUFMO2FBQU1BLGdCQUNQTyxpQkFBaUIsRUFBRUMsYUFBYTtnQ0FEekJSO1FBRWpCLElBQUksQ0FBQ08saUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSEpSOztZQU1uQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7WUFDL0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JB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