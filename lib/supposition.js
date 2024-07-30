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
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/intrinsicLevel"));
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
                        subproofNodeMatches = (0, _array.match)(subproofAssertionStatementNodes, subproofStatementNodes, function(subproofAssertionStatementNode, subproofStatementNode) {
                            var nonTerminalNodeA = subproofAssertionStatementNode, nonTerminalNodeB = subproofStatementNode, localContextA = localContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _intrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, localContextA = localContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _intrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbFwiO1xuXG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mQXNzZXJ0aW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3VicHJvb2ZTdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHN1YnByb29mTm9kZU1hdGNoZXMgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzLCBzdWJwcm9vZlN0YXRlbWVudE5vZGVzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCBzdWJwcm9vZlN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN1YnByb29mU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IHN0YXRlbWVudExvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gc3RhdGVtZW50TG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1cHBvc2l0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkiLCJzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJtYXRjaFN1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJzdWJwcm9vZk5vZGVNYXRjaGVzIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlcyIsInN1YnByb29mU3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibWF0Y2giLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyJdLCJtYXBwaW5n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