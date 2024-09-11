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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
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
            key: "unifyStatement",
            value: function unifyStatement(statementNodeB, substitutions, localContextA, localContextB) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var nodeA = this.statementNode, nodeB = statementNodeB, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    statementUnified = unified; ///
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproofNodeB, substitutions, localContextA, localContextB) {
                var subproofUnified = false;
                if (this.statementNode !== null) {
                    var statementNodeA = this.statementNode, subproofAssertionNodeA = subproofAssertionNodeQuery(statementNodeA); ///
                    if (subproofAssertionNodeA !== null) {
                        var subproofAssertionStatementNodesA = subproofAssertionStatementNodesQuery(subproofAssertionNodeA), subproofSuppositionStatementNodesB = subproofSuppositionStatementNodesQuery(subproofNodeB), subproofLastProofStepStatementNodeB = subproofLastProofStepStatementNodeQuery(subproofNodeB), subproofStatementNodesB = _to_consumable_array(subproofSuppositionStatementNodesB).concat([
                            subproofLastProofStepStatementNodeB
                        ]);
                        subproofUnified = (0, _array.match)(subproofAssertionStatementNodesA, subproofStatementNodesB, function(subproofAssertionStatementNodeA, subproofStatementNodeB) {
                            var nodeA = subproofAssertionStatementNodeA, nodeB = subproofStatementNodeB, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                            if (unified) {
                                return true;
                            }
                        });
                    }
                }
                return subproofUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL2xhc3RQcm9vZlN0ZXAvdW5xdWFsaWZpZWRTdGF0ZW1lbnR8cXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZk5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGUsXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZUEpOyAgLy8vXG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGVBICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNBID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZUEpLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc0IgPSBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGVCKSwgLy8vXG4gICAgICAgICAgICAgIHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVCID0gc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZUIpLCAvLy9cbiAgICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2Rlc0IgPSBbXG4gICAgICAgICAgICAgICAgLi4uc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzQixcbiAgICAgICAgICAgICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlQlxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgIHN1YnByb29mVW5pZmllZCA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNBLCBzdWJwcm9vZlN0YXRlbWVudE5vZGVzQiwgKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZUEsIHN1YnByb29mU3RhdGVtZW50Tm9kZUIpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgICBub2RlQiA9IHN1YnByb29mU3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3VwcG9zaXRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsInN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0YXRlbWVudFVuaWZpZWQiLCJub2RlQSIsIm5vZGVCIiwidW5pZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZk5vZGVCIiwic3VicHJvb2ZVbmlmaWVkIiwic3RhdGVtZW50Tm9kZUEiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVBIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0EiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNCIiwic3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZUIiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzQiIsIm1hdGNoIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlQSIsInN1YnByb29mU3RhdGVtZW50Tm9kZUIiLCJ0b0pTT04iLCJ0b2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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