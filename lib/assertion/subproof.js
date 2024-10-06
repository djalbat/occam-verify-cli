"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubproofAssertion;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../unifier/metaLevel"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
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
var statementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion");
var SubproofAssertion = /*#__PURE__*/ function() {
    function SubproofAssertion(fileContext, string, statements) {
        _class_call_check(this, SubproofAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.statements = statements;
    }
    _create_class(SubproofAssertion, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                return this.statements;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, localContext) {
                var _this = this;
                var subproofUnified;
                var subproofString = subproof.getString(), subproofStatements = subproof.getStatements(), subproofAssertionString = this.string; ///
                localContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                subproofUnified = (0, _array.match)(this.statements, subproofStatements, function(statement, subproofStatement) {
                    var statementNode = statement.getNode(), subproofStatementNode = subproofStatement.getNode(), nodeA = statementNode, nodeB = subproofStatementNode, fileContextA = _this.fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    if (unified) {
                        return true;
                    }
                });
                if (subproofUnified) {
                    localContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                }
                return subproofUnified;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, fileContext) {
                var subproofAssertion = null;
                var subproofAssertionNode = subproofAssertionNodeQuery(statementNode);
                if (subproofAssertionNode !== null) {
                    var Statement = _shim.default.Statement, node = subproofAssertionNode, string = fileContext.nodeAsString(node), localContext = _local.default.fromFileContext(fileContext), statementNodes = statementNodesQuery(subproofAssertionNode), statements = statementNodes.map(function(statementNode) {
                        var statement = Statement.fromStatementNode(statementNode, localContext);
                        return statement;
                    });
                    subproofAssertion = new SubproofAssertion(fileContext, string, statements);
                }
                return subproofAssertion;
            }
        }
    ]);
    return SubproofAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N1YnByb29mQXNzZXJ0aW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJwcm9vZkFzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VicHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBzdGF0ZW1lbnRzKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2godGhpcy5zdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0QSA9IHRoaXMuZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCBzdGF0ZW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cbn0iXSwibmFtZXMiOlsiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJzdGF0ZW1lbnRzIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnRzIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInN1YnByb29mVW5pZmllZCIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsIm1hdGNoIiwic3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJkZWJ1ZyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTdGF0ZW1lbnQiLCJzaGltIiwibm9k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