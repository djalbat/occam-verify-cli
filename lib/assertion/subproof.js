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
var _statement = /*#__PURE__*/ _interop_require_default(require("../statement"));
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
                    var node = subproofAssertionNode, string = fileContext.nodeAsString(node), localContext = _local.default.fromFileContext(fileContext), statementNodes = statementNodesQuery(subproofAssertionNode), statements = statementNodes.map(function(statementNode) {
                        var statement = _statement.default.fromStatementNode(statementNode, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSBcIi4uL3N0YXRlbWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgc3RhdGVtZW50cykge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZDtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnRzID0gc3VicHJvb2YuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIHN1YnByb29mVW5pZmllZCA9IG1hdGNoKHRoaXMuc3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3RhdGVtZW50LCBzdWJwcm9vZlN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGUgPSBzdWJwcm9vZlN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBub2RlQSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmaWxlQ29udGV4dEEgPSB0aGlzLmZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHN0YXRlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxufSJdLCJuYW1lcyI6WyJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInN0YXRlbWVudHMiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudHMiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibWF0Y2giLCJzdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImRlYnVnIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnROb2RlcyIsIm1hcCIsIlN0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