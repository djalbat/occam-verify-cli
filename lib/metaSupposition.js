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
var metaSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/metaSubproofAssertion!"), metaSubproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproofAssertion/metastatement"), metaSubproofMetaSuppositionMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/metaSupposition/unqualifiedMetastatement/metastatement!"), metaSubproofSubDerivationLastMetastatementNodeQuery = (0, _query.nodeQuery)("/metaSubproof/metaSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
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
            value: function matchMetaSubproofNode(metaSubproofNode, substitutions, localContext, metastatementLocalContext) {
                var metaSubproofNodeMatches = false;
                var metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(this.metastatementNode);
                if (metaSubproofAssertionNode !== null) {
                    var metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode), metaSubproofSubDerivationLastMetastatementNode = metaSubproofSubDerivationLastMetastatementNodeQuery(metaSubproofNode), metaSubproofMetastatementNodes = _to_consumable_array(metaSubproofMetaSuppositionMetastatementNodes).concat([
                        metaSubproofSubDerivationLastMetastatementNode
                    ]), metaSubproofAssertionMetastatementNodes = metaSubproofAssertionMetastatementNodesQuery(metaSubproofAssertionNode), metaSubproofMetastatementNodesLength = metaSubproofMetastatementNodes.length, metaSubproofAssertionMetastatementNodesLength = metaSubproofAssertionMetastatementNodes.length;
                    if (metaSubproofMetastatementNodesLength === metaSubproofAssertionMetastatementNodesLength) {
                        metaSubproofNodeMatches = (0, _array.match)(metaSubproofAssertionMetastatementNodes, metaSubproofMetastatementNodes, function(metaSubproofAssertionMetastatementNode, metaSubproofMetastatementNode) {
                            var nonTerminalNodeA = metaSubproofAssertionMetastatementNode, nonTerminalNodeB = metaSubproofMetastatementNode, localContextA = localContext, localContextB = metastatementLocalContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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
            value: function matchMetastatementNode(metastatementNode, substitutions, localContext, metastatementLocalContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, localContextA = localContext, localContextB = metastatementLocalContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuL3ZlcmlmaWVyL25vZGVzL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgbWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvbWV0YVN1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1cHBvc2l0aW9uL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhU3VicHJvb2YvbWV0YVN1YkRlcml2YXRpb24vcXVhbGlmaWVkTWV0YXN0YXRlbWVudHx1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRbLTFdL21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGxldCBtZXRhU3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhU3VicHJvb2ZNZXRhU3VwcG9zaXRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShtZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIG1ldGFTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnROb2RlUXVlcnkobWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBtZXRhU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgbWV0YVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCkge1xuICAgICAgICBtZXRhU3VicHJvb2ZOb2RlTWF0Y2hlcyA9IG1hdGNoKG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcywgbWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLCAobWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhU3VicHJvb2ZOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IG1ldGFzdGF0ZW1lbnRMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgbWV0YVN1cHBvc2l0aW9uID0gbmV3IE1ldGFTdXBwb3NpdGlvbihtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGFTdXBwb3NpdGlvbiA9IG5ldyBNZXRhU3VwcG9zaXRpb24obWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFTdXBwb3NpdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGFTdXBwb3NpdGlvbiIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwibWV0YVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwibWV0YXN0YXRlbWVudExvY2FsQ29udGV4dCIsIm1ldGFTdWJwcm9vZk5vZGVNYXRjaGVzIiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIm1ldGFTdWJwcm9vZk1ldGFTdXBwb3NpdGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsIm1ldGFTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJtYXRjaCIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZpZWRBaGVhZCIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtZXRhc3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXN0YXRlbWVudCIsImpzb24iLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3VwcG9zaXRpb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7Z0VBWmM7cUJBRWI7c0JBQ087cUJBQ1M7b0JBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFNQyxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMsMENBQzNDQywrQ0FBK0NDLElBQUFBLGlCQUFVLEVBQUMseUNBQzFEQyxxREFBcURELElBQUFBLGlCQUFVLEVBQUMsMEVBQ2hFRSxzREFBc0RKLElBQUFBLGdCQUFTLEVBQUM7QUFFdkQsSUFBQSxBQUFNRixnQ0FBRCxBQUFMO2FBQU1BLGdCQUNQTyxpQkFB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