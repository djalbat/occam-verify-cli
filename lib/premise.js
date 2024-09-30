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
var _proofStep = /*#__PURE__*/ _interop_require_default(require("./proofStep"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _array = require("./utilities/array");
var _assignments = require("./utilities/assignments");
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/premise/unqualifiedStatement"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion!"), subproofAssertionStatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofSuppositionStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement/statement!"), subproofLastProofStepStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!");
var Premise = /*#__PURE__*/ function() {
    function Premise(unqualifiedStatement) {
        _class_call_check(this, Premise);
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Premise, [
        {
            key: "getUnqualifiedStatement",
            value: function getUnqualifiedStatement() {
                return this.unqualifiedStatement;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.unqualifiedStatement.getString();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.unqualifiedStatement.getStatement();
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
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var premiseString = this.getString(); ///
                if (this.unqualifiedStatement !== null) {
                    localContext.trace("Verifying the '".concat(premiseString, "' premise..."));
                    var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                    if (unqualifiedStatementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                        if (assignmentsAssigned) {
                            var proofStep = _proofStep.default.fromUnqualifiedStatement(this.unqualifiedStatement);
                            localContext.addProofStep(proofStep);
                            verified = true;
                        }
                    }
                    if (verified) {
                        localContext.debug("...verified the '".concat(premiseString, "' premise."));
                    }
                } else {
                    localContext.debug("The '".concat(premiseString, "' premise cannot be verified because it is nonsense."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(premiseNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), premise = new Premise(unqualifiedStatement);
                return premise;
            }
        }
    ]);
    return Premise;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZTdGVwIGZyb20gXCIuL3Byb29mU3RlcFwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJlbWlzZS91bnF1YWxpZmllZFN0YXRlbWVudFwiKSxcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mQXNzZXJ0aW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudC9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb24vbGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudHxxdWFsaWZpZWRTdGF0ZW1lbnQvc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudE5vZGVCLCAgLy8vXG4gICAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZUEgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlQSk7ICAvLy9cblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZUEgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0EgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlQSksICAvLy9cbiAgICAgICAgICAgICAgc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzQiA9IHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZUIpLCAvLy9cbiAgICAgICAgICAgICAgc3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZUIgPSBzdWJwcm9vZkxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlQiksIC8vL1xuICAgICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzQiA9IFtcbiAgICAgICAgICAgICAgICAuLi5zdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNCLFxuICAgICAgICAgICAgICAgIHN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVCXG4gICAgICAgICAgICAgIF07XG5cbiAgICAgICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0EsIHN1YnByb29mU3RhdGVtZW50Tm9kZXNCLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlQSwgc3VicHJvb2ZTdGF0ZW1lbnROb2RlQikgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGVBID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQuYWRkUHJvb2ZTdGVwKHByb29mU3RlcCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KHByZW1pc2VOb2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcmVtaXNlXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsInN1YnByb29mTGFzdFByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwidW5pZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZk5vZGVCIiwic3VicHJvb2ZVbmlmaWVkIiwic3RhdGVtZW50Tm9kZUEiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVBIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2Rlc0EiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNCIiwic3VicHJvb2ZMYXN0UHJvb2ZTdGVwU3RhdGVtZW50Tm9kZUIiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzQiIsIm1hdGNoIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlQSIsInN1YnByb29mU3RhdGVtZW50Tm9kZUIiLCJ2ZXJpZnkiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInByZW1pc2VTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInByb29mU3RlcCIsIlByb29mU3RlcCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsImRlYnVnIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInByZW1pc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OztnRUFkQztnRUFDTztrRUFDSTtxQkFFWDsyQkFDWTtxQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsZ0NBQWdDQyxJQUFBQSxnQkFBUyxFQUFDLGtDQUMxQ0MsNkJBQTZCRCxJQUFBQSxnQkFBUyxFQUFDLGtDQUN2Q0UsdUNBQXVDQyxJQUFBQSxpQkFBVSxFQUFDLGlDQUNsREMseUNBQXlDRCxJQUFBQSxpQkFBVSxFQUFDLDBEQUNwREUsMENBQTBDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRTNDLElBQUEsQUFBTUYsd0JBQU47YUFBTUEsUUFDUFEsb0JBQW9CO2dDQURiUjtRQUVqQixJQUFJLENBQUNRLG9CQUFvQixHQUFHQTs7a0JBRlhSOztZQUtuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxvQkFBb0I7WUFDbEM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNGLG9CQUFvQixDQUFDRSxTQUFTO1lBQUk7OztZQUU1REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ0gsb0JBQW9CLENBQUNHLFlBQVk7WUFBSTs7O1lBRWxFQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYTtnQkFDeEUsSUFBSUMsbUJBQW1CO2dCQUV2QixJ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