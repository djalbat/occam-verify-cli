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
var _localMeta = /*#__PURE__*/ _interop_require_default(require("./context/localMeta"));
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
            value: function matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext) {
                var metaSubproofNodeMatches = false;
                if (this.metastatementNode !== null) {
                    var subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);
                    if (subproofAssertionNode !== null) {
                        var metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode), metaSubproofLastMetpProofStepMetastatementNode = metaSubproofLastMetpProofStepMetastatementNodeQuery(metaSubproofNode), metaSubproofMetastatementNodes = _to_consumable_array(metaSubproofMetaSuppositionMetastatementNodes).concat([
                            metaSubproofLastMetpProofStepMetastatementNode
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
                }
                return metaSubproofNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext) {
                var metastatementNodeMatches = false;
                if (this.metastatementNode !== null) {
                    var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, localMetaContextA = _localMeta.default.fromFileContext(fileContextA), localMetaContextB = localMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    metastatementNodeMatches = nonTerminalNodeVerified; ///
                }
                return metastatementNodeMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbE1ldGFDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxNZXRhXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcsIG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YVN1YnByb29mL21ldGFTdXBwb3NpdGlvbi91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0cFByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVN1YnByb29mL21ldGFTdWJEZXJpdmF0aW9uL2xhc3RNZXRwUHJvb2ZTdGVwL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudHxxdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YVN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YVN1YnByb29mTGFzdE1ldHBQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFTdWJwcm9vZkxhc3RNZXRwUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAgIC4uLm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0cFByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMsIG1ldGFTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlcywgKHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QSA9IExvY2FsTWV0YUNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICAgICAgbG9jYWxNZXRhQ29udGV4dEIgPSBsb2NhbE1ldGFDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbE1ldGFDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QSA9IExvY2FsTWV0YUNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QiA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50LFxuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uID0gbmV3IE1ldGFTdXBwb3NpdGlvbihtZXRhc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbiA9IG5ldyBNZXRhU3VwcG9zaXRpb24obWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50LCBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbiA9IG5ldyBNZXRhU3VwcG9zaXRpb24obWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGFTdXBwb3NpdGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm1ldGFTdWJwcm9vZkxhc3RNZXRwUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJsb2NhbE1ldGFDb250ZXh0IiwibWV0YVN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhU3VicHJvb2ZMYXN0TWV0cFByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJtYXRjaCIsInN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxNZXRhQ29udGV4dEEiLCJMb2NhbE1ldGFDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxNZXRhQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJtZXRhc3RhdGVtZW50Iiwic3RhdGVtZW50IiwianNvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwibWV0YVN1cHBvc2l0aW9uIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O2dFQWJRO2dFQUNNO3FCQUViO3NCQUNPO3FCQUNTO29CQUNxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0YsSUFBTUMsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDLHNDQUN2Q0MsMkNBQTJDQyxJQUFBQSxpQkFBVSxFQUFDLHFDQUN0REMscURBQXFERCxJQUFBQSxpQkFBVSxFQUFDLDBFQUNoRUUsc0RBQXNESixJQUFBQSxnQkFBUyxFQUFDO0FBRXZELElBQUEsQUFBTUYsZ0NBQUQsQUFBTDthQUFNQSxnQkFDUE8saUJBQWlCLEVBQUVDLGFBQWE7Z0NBRHpCUjtRQUVqQixJQUFJLENBQUNPLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKUjs7WUFNbkJTLEtBQUFBO21CQUFBQSxT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