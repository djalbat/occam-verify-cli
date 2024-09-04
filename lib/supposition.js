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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/intrinsicLevel"));
var _array = require("./utilities/array");
var _string = require("./utilities/string");
var _node = require("./utilities/node");
var _query = require("./utilities/query");
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
var subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), subproofAssertionStatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofSuppositionStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement/statement!"), subproofLastProofStepStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!");
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, localContext, statementLocalContext) {
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, localContextA = localContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _intrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), matchesStatementNode = nonTerminalNodeVerified; ///
                return matchesStatementNode;
            }
        },
        {
            key: "matchSubproofNode",
            value: function matchSubproofNode(subproofNode, substitutions, fileContext, localContext) {
                var matchesSubproofNode = false;
                if (this.statementNode !== null) {
                    var subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);
                    if (subproofAssertionNode !== null) {
                        var subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode), subproofLastProofStepStatementNode = subproofLastProofStepStatementNodeQuery(subproofNode), subproofStatementNodes = _to_consumable_array(subproofSuppositionStatementNodes).concat([
                            subproofLastProofStepStatementNode
                        ]), subproofAssertionStatementNodes = subproofAssertionStatementNodesQuery(subproofAssertionNode);
                        matchesSubproofNode = (0, _array.match)(subproofAssertionStatementNodes, subproofStatementNodes, function(subproofAssertionStatementNode, ruleSubproofStatementNode) {
                            var fileContextA = fileContext, nonTerminalNodeA = subproofAssertionStatementNode, nonTerminalNodeB = ruleSubproofStatementNode, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                                var verifiedAhead = true;
                                return verifiedAhead;
                            });
                            if (nonTerminalNodeVerified) {
                                return true;
                            }
                        });
                    }
                }
                return matchesSubproofNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxcIjtcbmltcG9ydCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvaW50cmluc2ljTGV2ZWxcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7bm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5fSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mL3N1cHBvc2l0aW9uL3VucXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIiksXG4gICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvbi9sYXN0UHJvb2ZTdGVwL3VucXVhbGlmaWVkU3RhdGVtZW50fHF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXBwb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IHN0YXRlbWVudExvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gaW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hlc1N0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc1N1YnByb29mTm9kZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICAgIHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlcyA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1hdGNoZXNTdWJwcm9vZk5vZGUgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzLCBzdWJwcm9vZlN0YXRlbWVudE5vZGVzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCBydWxlU3VicHJvb2ZTdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcnVsZVN1YnByb29mU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSwgIC8vL1xuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1N1YnByb29mTm9kZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1cHBvc2l0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkiLCJzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwibWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJtYXRjaFN1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0IiwibWF0Y2hlc1N1YnByb29mTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyIsInN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlcyIsIm1hdGNoIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlIiwicnVsZVN1YnByb29mU3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ0b0pTT04iLCJ0b2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7Ozs0REFkSTtnRUFD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