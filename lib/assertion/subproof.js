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
var _metaLevel1 = /*#__PURE__*/ _interop_require_default(require("../verifier/metaLevel"));
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
    function SubproofAssertion(string, statements) {
        _class_call_check(this, SubproofAssertion);
        this.string = string;
        this.statements = statements;
    }
    _create_class(SubproofAssertion, [
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
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var subproofAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(subproofAssertionString, "' subproof assertion..."));
                var verifiedWhenStated = false, verifiedWhenDerived = false;
                if (stated) {
                    verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
                } else {
                    verifiedWhenDerived = this.verifyWhenDerived(localContext);
                }
                if (verifiedWhenStated || verifiedWhenDerived) {
                    assignments = null; ///
                    stated = true; ///
                    var subproofAssertionNode = this.node; ///
                    verified = _metaLevel1.default.verify(subproofAssertionNode, assignments, stated, localContext);
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(subproofAssertionString, "' subproof assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(localContext) {
                var verifiedWhenStated;
                var subproofAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(subproofAssertionString, "' stated subproof assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(subproofAssertionString, "' stated subproof assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(localContext) {
                var derivedSubproofAssertionVerified;
                var subproofAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(subproofAssertionString, "' derived subproof assertion..."));
                derivedSubproofAssertionVerified = false;
                localContext.debug("The '".concat(subproofAssertionString, "' derived subproof assertion cannot be verified."));
                return derivedSubproofAssertionVerified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, fileContext, localContext) {
                var subproofUnified;
                var subproofString = subproof.getString(), subproofStatements = subproof.getStatements(), subproofAssertionString = this.string; ///
                localContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                subproofUnified = (0, _array.match)(this.statements, subproofStatements, function(statement, subproofStatement) {
                    var statementNode = statement.getNode(), subproofStatementNode = subproofStatement.getNode(), nodeA = statementNode, nodeB = subproofStatementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
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
            key: "fromStatement",
            value: function fromStatement(statement, fileContext) {
                var subproofAssertion = null;
                var statementNode = statement.getNode(), subproofAssertionNode = subproofAssertionNodeQuery(statementNode);
                if (subproofAssertionNode !== null) {
                    var Statement = _shim.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statementString = statement.getString(), localContext = _local.default.fromFileContext(fileContext), statements = statementNodes.map(function(statementNode) {
                        var _$statement = Statement.fromStatementNode(statementNode, localContext);
                        return _$statement;
                    }), string = statementString; ///
                    subproofAssertion = new SubproofAssertion(string, statements);
                }
                return subproofAssertion;
            }
        },
        {
            key: "fromSubproofAssertionNode",
            value: function fromSubproofAssertionNode(subproofAssertionNode, localContext) {
                var Statement = _shim.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statements = statementNodes.map(function(statementNode) {
                    var statement = Statement.fromStatementNode(statementNode, localContext);
                    return statement;
                }), string = stringFromStatements(statements), subproofAssertion = new SubproofAssertion(string, statements);
                return subproofAssertion;
            }
        }
    ]);
    return SubproofAssertion;
}();
function stringFromStatements(statements) {
    var frontStatements = (0, _array.front)(statements), lastStatement = (0, _array.last)(statements), frontStatementsString = statementsStringFromStatements(frontStatements), lastStatementString = lastStatement.getString(), string = "[".concat(frontStatementsString, "] ... ").concat(lastStatementString);
    return string;
}
function statementsStringFromStatements(statements) {
    var statementsString = statements.reduce(function(statementsString, statement) {
        var statementString = statement.getString();
        statementsString = statementsString !== null ? "".concat(statementsString, ", ").concat(statementString) : statementString; ///
        return statementsString;
    }, null);
    return statementsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IGZyb250LCBsYXN0LCBtYXRjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhdGVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHRoaXMubm9kZTsgIC8vL1xuXG4gICAgICB2ZXJpZmllZCA9IG1ldGFMZXZlbFZlcmlmaWVyLnZlcmlmeShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24gY2Fubm90IGJlIHZlcmlmaWVkLmApO1xuXG4gICAgcmV0dXJuIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaCh0aGlzLnN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlQiA9IHN1YnByb29mU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmc7IC8vL1xuXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIHN0YXRlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cyksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBzdGF0ZW1lbnRzKTtcblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IGZyb250U3RhdGVtZW50cyA9IGZyb250KHN0YXRlbWVudHMpLFxuICAgICAgICBsYXN0U3RhdGVtZW50ID0gbGFzdChzdGF0ZW1lbnRzKSxcbiAgICAgICAgZnJvbnRTdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzKGZyb250U3RhdGVtZW50cyksXG4gICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJvbnRTdGF0ZW1lbnRzU3RyaW5nfV0gLi4uICR7bGFzdFN0YXRlbWVudFN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IHN0YXRlbWVudHNTdHJpbmcgPSBzdGF0ZW1lbnRzLnJlZHVjZSgoc3RhdGVtZW50c1N0cmluZywgc3RhdGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3RhdGVtZW50c1N0cmluZyA9IChzdGF0ZW1lbnRzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtzdGF0ZW1lbnRzU3RyaW5nfSwgJHtzdGF0ZW1lbnRTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3RhdGVtZW50c1N0cmluZ1xufSJdLCJuYW1lcyI6WyJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdHJpbmciLCJzdGF0ZW1lbnRzIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50cyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIm5vZGUiLCJtZXRhTGV2ZWxWZXJpZmllciIsImRlYnVnIiwiZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsIm1hdGNoIiwic3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJmcm9tU3RhdGVtZW50Iiwic3VicHJvb2ZBc3NlcnRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJtYXAiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdHJpbmdGcm9tU3RhdGVtZW50cyIsImZyb250U3RhdGVtZW50cyIsImZyb250IiwibGFzdFN0YXRlbWVudCIsImxhc3QiLCJmcm9udFN0YXRlbWVudHNTdHJpbmciLCJzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMiLCJsYXN0U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50c1N0cmluZyIsInJlZHVj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