"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Supposition;
    }
});
var _supposition = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/termForVariable/supposition"));
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
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), subproofAssertionStatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofSuppositionStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement/statement!"), subproofSubDerivationLastStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!");
var Supposition = /*#__PURE__*/ function() {
    function Supposition(statementNode) {
        _class_call_check(this, Supposition);
        this.statementNode = statementNode;
    }
    _create_class(Supposition, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchSubproofNode",
            value: function matchSubproofNode(subproofNode, substitutions, localContext, statementLocalContext) {
                var subproofNodeMatches = false;
                var subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);
                if (subproofAssertionNode !== null) {
                    var subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode), subproofSubDerivationLastStatementNode = subproofSubDerivationLastStatementNodeQuery(subproofNode), subproofStatementNodes = _to_consumable_array(subproofSuppositionStatementNodes).concat([
                        subproofSubDerivationLastStatementNode
                    ]), subproofAssertionStatementNodes = subproofAssertionStatementNodesQuery(subproofAssertionNode), subproofStatementNodesLength = subproofStatementNodes.length, subproofAssertionStatementNodesLength = subproofAssertionStatementNodes.length;
                    if (subproofStatementNodesLength === subproofAssertionStatementNodesLength) {
                        subproofNodeMatches = subproofAssertionStatementNodes.every(function(subproofAssertionStatementNode, index) {
                            var subproofStatementNode = subproofStatementNodes[index], nonTerminalNodeA = subproofAssertionStatementNode, nonTerminalNodeB = subproofStatementNode, localContextA = localContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _supposition.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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
            value: function matchStatementNode(statementNode, substitutions, localContext, statementLocalContext) {
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, localContextA = localContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _supposition.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var statementString = (0, _string.nodeAsString)(this.statementNode, tokens), statement = statementString, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var supposition = new Supposition(statementNode);
                return supposition;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var statement = json.statement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), supposition = new Supposition(statementNode);
                return supposition;
            }
        }
    ]);
    return Supposition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN1cHBvc2l0aW9uVGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy90ZXJtRm9yVmFyaWFibGUvc3VwcG9zaXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mQXNzZXJ0aW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3VicHJvb2ZTdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHN1YnByb29mTm9kZU1hdGNoZXMgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzLmV2ZXJ5KChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdGF0ZW1lbnROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBzdGF0ZW1lbnRMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cHBvc2l0aW9uVGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IHN0YXRlbWVudExvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwcG9zaXRpb25UZXJtRm9yVmFyaWFibGVOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdXBwb3NpdGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwic3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50TG9jYWxDb250ZXh0Iiwic3VicHJvb2ZOb2RlTWF0Y2hlcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyIsInN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlcyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0xlbmd0aCIsImV2ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlIiwiaW5kZXgiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJzdXBwb3NpdGlvblRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJn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