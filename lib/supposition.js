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
            value: function unifyStatement(statementNode, substitutions, fileContext, localContext) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var nodeA = this.statementNode, nodeB = statementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    statementUnified = unified; ///
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproofNode, substitutions, fileContext, localContext) {
                var subproofUnified = false;
                if (this.statementNode !== null) {
                    var subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);
                    if (subproofAssertionNode !== null) {
                        var fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode), subproofLastProofStepStatementNode = subproofLastProofStepStatementNodeQuery(subproofNode), subproofStatementNodes = _to_consumable_array(subproofSuppositionStatementNodes).concat([
                            subproofLastProofStepStatementNode
                        ]), subproofAssertionStatementNodes = subproofAssertionStatementNodesQuery(subproofAssertionNode);
                        subproofUnified = (0, _array.match)(subproofAssertionStatementNodes, subproofStatementNodes, function(subproofAssertionStatementNode, subproofStatementNode) {
                            var nodeA = subproofAssertionStatementNode, nodeB = subproofStatementNode, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdXBwb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mQXNzZXJ0aW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb24vbGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudHxxdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5zdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgICAgc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAgIC4uLnN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgICBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzLCBzdWJwcm9vZlN0YXRlbWVudE5vZGVzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCBzdWJwcm9vZlN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlQSA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1cHBvc2l0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkiLCJzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2ZOb2RlIiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzIiwic3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZXMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzIiwibWF0Y2giLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGUiLCJ0b0pTT04iLCJ0b2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OzREQWJJO2dFQUNJO3FCQUVQO3NCQUNPO3FCQUNTO29CQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNQyw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUMsa0NBQ3ZDQyx1Q0FBdUNDLElBQUFBLGlCQUFVLEVBQUMsaUNBQ2xEQyx5Q0FBeUNELElBQUFBLGlCQUFVLEVBQUMsMERBQ3BERSwwQ0FBMENKLElBQUFBLGdCQUFTLEVBQUM7QUFFM0MsSUFBQSxBQUFNRiw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BPLGFBQWE7Z0NBRE5QO1FBRWpCLElBQUksQ0FBQ08sYUFBYSxHQUFHQTs7a0JBRkpQOztZQUtuQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLGFBQWEsRUFBRUcsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7Z0JBQ3BFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBSSxJQUFJLENBQUNOLGFBQWEsS0FBSyxNQUFNO29CQUMvQixJQUFNTyxRQUFRLElBQUksQ0FBQ1AsYUFBYSxFQUMxQlEsUUFBUVIsZUFDUlMsZUFBZUwsYUFDZk0sZ0JBQWdCQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ0gsZUFDN0NJLGdCQUFnQlIsY0FDaEJTLFVBQVVDLGtCQUFnQixDQUFDQyxLQUFLLENBQUNULE9BQU9DLE9BQU9MLGVBQWVPLGVBQWVHO29CQUVuRlAsbUJBQW1CUSxTQUFTLEdBQUc7Z0JBQ2pDO2dCQUVBLE9BQU9SO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsWUFBWSxFQUFFZixhQUFhLEVBQUVDLFdBQVcsRUFBRUMsWUFBWTtnQkFDbEUsSUFBSWMsa0JBQWtCO2dCQUV0QixJQUFJLElBQUksQ0FBQ25CLGFBQWEsS0FBSyxNQUFNO29CQUMvQixJQUFNb0Isd0JBQXdCMUIsMkJBQTJCLElBQUksQ0FBQ00sYUFBYTtvQkFFM0UsSUFBSW9CLDBCQUEwQixNQUFNO3dCQUNsQyxJQUFNWCxlQUFlTCxhQUNmTSxnQkFBZ0JDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDSCxlQUM3Q0ksZ0JBQWdCUixjQUNoQmdCLG9DQUFvQ3ZCLHVDQUF1Q29CLGVBQzNFSSxxQ0FBcUN2Qix3Q0FBd0NtQixlQUM3RUsseUJBQXlCLEFBQ3ZCLHFCQUFHRiwwQ0FEb0I7NEJBRXZCQzt5QkFDRCxHQUNERSxrQ0FBa0M1QixxQ0FBcUN3Qjt3QkFFN0VELGtCQUFrQk0sSUFBQUEsWUFBSyxFQUFDRCxpQ0FBaUNELHdCQUF3QixTQUFDRyxnQ0FBZ0NDOzRCQUNoSCxJQUFNcEIsUUFBUW1CLGdDQUNSbEIsUUFBUW1CLHVCQUNSYixVQUFVQyxrQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDVCxPQUFPQyxPQUFPTCxlQUFlTyxlQUFlRzs0QkFFbkYsSUFBSUMsU0FBUztnQ0FDWCxPQUFPOzRCQUNUO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDL0IsYUFBYSxFQUFFNkIsU0FDbkRHLFlBQVlGLGlCQUNaRyxPQUFPO29CQUNMRCxXQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmxDLGFBQWE7Z0JBQ3BDLElBQU1tQyxjQUFjLElBdEVIMUMsWUFzRW1CTztnQkFFcEMsT0FBT21DO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILElBQUksRUFBRTdCLFdBQVc7Z0JBQzdDLElBQU0sQUFBRTRCLFlBQWNDLEtBQWRELFdBQ0ZGLGtCQUFrQkUsV0FDbEJLLFFBQVFqQyxZQUFZa0MsUUFBUSxJQUM1QkMsU0FBU25DLFlBQVlvQyxTQUFTLElBQzlCeEMsZ0JBQWdCeUMsSUFBQUEsc0NBQWdDLEVBQUNYLGlCQUFpQk8sT0FBT0UsU0FDekVKLGNBQWMsSUFqRkgxQyxZQWlGbUJPO2dCQUVwQyxPQUFPbUM7WUFDVDs7O1dBcEZtQjFDIn0=