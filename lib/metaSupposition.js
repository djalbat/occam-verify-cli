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
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/subproofAssertion!"), subproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/metastatement"), metaSubproofMetaSuppositionMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/metaSupposition/unqualifiedMetastatement/metastatement!"), metaSubproofLastMetaProofStepMetastatementNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaSubDerivation/lastMetaProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");
var MetaSupposition = /*#__PURE__*/ function() {
    function MetaSupposition(metastatementNode) {
        _class_call_check(this, MetaSupposition);
        this.metastatementNode = metastatementNode;
    }
    _create_class(MetaSupposition, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
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
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var metaSupposition = new MetaSupposition(metastatementNode);
                return metaSupposition;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, metastatementString = metastatement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), metaSupposition = new MetaSupposition(metastatementNode);
                return metaSupposition;
            }
        }
    ]);
    return MetaSupposition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbE1ldGFDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxNZXRhXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1cHBvc2l0aW9uL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZkxhc3RNZXRhUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1YkRlcml2YXRpb24vbGFzdE1ldGFQcm9vZlN0ZXAvdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFTdXBwb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YVN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gbWV0YVN1YnByb29mTWV0YVN1cHBvc2l0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkobWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBtZXRhU3VicHJvb2ZMYXN0TWV0YVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YVN1YnByb29mTGFzdE1ldGFQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KG1ldGFTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5tZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIG1ldGFTdWJwcm9vZkxhc3RNZXRhUHJvb2ZTdGVwTWV0YXN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgbWV0YVN1YnByb29mTm9kZU1hdGNoZXMgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcywgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLCAoc3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QSA9IExvY2FsTWV0YUNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHRCID0gbG9jYWxNZXRhQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVWZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHRBID0gTG9jYWxNZXRhQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0QiA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsTWV0YUNvbnRleHRBLCBsb2NhbE1ldGFDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtZXRhU3VwcG9zaXRpb24gPSBuZXcgTWV0YVN1cHBvc2l0aW9uKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhU3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbWV0YXN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbWV0YVN1cHBvc2l0aW9uID0gbmV3IE1ldGFTdXBwb3NpdGlvbihtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWV0YVN1cHBvc2l0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwibWV0YVN1YnByb29mTGFzdE1ldGFQcm9vZlN0ZXBNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJsb2NhbE1ldGFDb250ZXh0IiwibWV0YVN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhU3VicHJvb2ZMYXN0TWV0YVByb29mU3RlcE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJtYXRjaCIsInN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxNZXRhQ29udGV4dEEiLCJMb2NhbE1ldGFDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxNZXRhQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFTdXBwb3NpdGlvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7Z0VBYlE7Z0VBQ007cUJBRWI7c0JBQ087cUJBQ1M7b0JBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFNQyw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUMsc0NBQ3ZDQywyQ0FBMkNDLElBQUFBLGlCQUFVLEVBQUMscUNBQ3REQyxxREFBcURELElBQUFBLGlCQUFVLEVBQUMsMEVBQ2hFRSxzREFBc0RKLElBQUFBLGdCQUFTLEVBQUM7QUFFdkQsSUFBQSxBQUFNRixnQ0FBRCxBQUFMO2FBQU1BLGdCQUNQTyxpQkFBaUI7Z0NBRFZQO1FBRWpCLElBQUksQ0FBQ08saUJBQWlCLEdBQUdBOztrQkFGUlA7O1lBS25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCO2dCQUNsRixJQUFJQywwQkFBMEI7Z0JBRTlCLElBQU1DLHdCQUF3QmQsMkJBQTJCLElBQUksQ0FBQ00saUJBQWlCO2dCQUUvRSxJQUFJUSwwQkFBMEIsTUFBTTtvQkFDbEMsSUFBTUMsZ0RBQWdEWCxtREFBbURLLG1CQUNuR08saURBQWlEWCxvREFBb0RJLG1CQUNyR1EsaUNBQWlDLEFBQy9CLHFCQUFHRixzREFENEI7d0JBRS9CQztxQkFDRCxHQUNERSxzQ0FBc0NoQix5Q0FBeUNZO29CQUVyRkQsMEJBQTBCTSxJQUFBQSxZQUFLLEVBQUNELHFDQUFxQ0QsZ0NBQWdDLFNBQUNHLG9DQUFvQ0M7d0JBQ3hJLElBQU1DLG1CQUFtQkYsb0NBQ25CRyxtQkFBbUJGLCtCQUNuQkcsZUFBZWIsYUFDZmMsb0JBQW9CQyxrQkFBZ0IsQ0FBQ0MsZUFBZSxDQUFDSCxlQUNyREksb0JBQW9CaEIsa0JBQ3BCaUIsMEJBQTBCQyxrQkFBc0IsQ0FBQ0MscUJBQXFCLENBQUNULGtCQUFrQkMsa0JBQWtCYixlQUFlZSxtQkFBbUJHLG1CQUFtQjs0QkFDOUosSUFBTUksZ0JBQWdCOzRCQUV0QixPQUFPQTt3QkFDVDt3QkFFTixJQUFJSCx5QkFBeUI7NEJBQzNCLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT2hCO1lBQ1Q7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjNCLGlCQUFpQixFQUFFSSxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCO2dCQUNwRixJQUFNVSxtQkFBbUIsSUFBSSxDQUFDaEIsaUJBQWlCLEVBQ3pDaUIsbUJBQW1CakIsbUJBQ25Ca0IsZUFBZWIsYUFDZmMsb0JBQW9CQyxrQkFBZ0IsQ0FBQ0MsZUFBZSxDQUFDSCxlQUNyREksb0JBQW9CaEIsa0JBQ3BCaUIsMEJBQTBCQyxrQkFBc0IsQ0FBQ0MscUJBQXFCLENBQUNULGtCQUFrQkMsa0JBQWtCYixlQUFlZSxtQkFBbUJHLG1CQUFtQjtvQkFDOUosSUFBTUksZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVCxJQUNBRSwyQkFBMkJMLHlCQUF5QixHQUFHO2dCQUU3RCxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2hDLGlCQUFpQixFQUFFOEIsU0FDM0RHLGdCQUFnQkYscUJBQ2hCRyxPQUFPO29CQUNMRCxlQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQm5DLGlCQUFpQjtnQkFDNUMsSUFBTW9DLGtCQUFrQixJQXZFUDNDLGdCQXVFMkJPO2dCQUU1QyxPQUFPb0M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkgsSUFBSSxFQUFFN0IsV0FBVztnQkFDN0MsSUFBTSxBQUFFNEIsZ0JBQWtCQyxLQUFsQkQsZUFDRkYsc0JBQXNCRSxlQUN0QkssUUFBUWpDLFlBQVlrQyxRQUFRLElBQzVCQyxTQUFTbkMsWUFBWW9DLFNBQVMsSUFDOUJ6QyxvQkFBb0IwQyxJQUFBQSw4Q0FBd0MsRUFBQ1gscUJBQXFCTyxPQUFPRSxTQUN6Rkosa0JBQWtCLElBbEZQM0MsZ0JBa0YyQk87Z0JBRTVDLE9BQU9vQztZQUNUOzs7V0FyRm1CM0MifQ==