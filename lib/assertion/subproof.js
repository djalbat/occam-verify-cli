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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var subproofAssertion = null;
                var subproofAssertionNode = subproofAssertionNodeQuery(statementNode);
                if (subproofAssertionNode !== null) {
                    var Statement = _shim.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statements = statementNodes.map(function(statementNode) {
                        var statement = Statement.fromStatementNode(statementNode, localContext);
                        return statement;
                    }), string = stringFromStatements(statements);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IGZyb250LCBsYXN0LCBtYXRjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhdGVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHRoaXMubm9kZTsgIC8vL1xuXG4gICAgICB2ZXJpZmllZCA9IG1ldGFMZXZlbFZlcmlmaWVyLnZlcmlmeShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24gY2Fubm90IGJlIHZlcmlmaWVkLmApO1xuXG4gICAgcmV0dXJuIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaCh0aGlzLnN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlQiA9IHN1YnByb29mU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIHN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRzKHN0YXRlbWVudHMpIHtcbiAgY29uc3QgZnJvbnRTdGF0ZW1lbnRzID0gZnJvbnQoc3RhdGVtZW50cyksXG4gICAgICAgIGxhc3RTdGF0ZW1lbnQgPSBsYXN0KHN0YXRlbWVudHMpLFxuICAgICAgICBmcm9udFN0YXRlbWVudHNTdHJpbmcgPSBzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMoZnJvbnRTdGF0ZW1lbnRzKSxcbiAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtmcm9udFN0YXRlbWVudHNTdHJpbmd9XSAuLi4gJHtsYXN0U3RhdGVtZW50U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzKHN0YXRlbWVudHMpIHtcbiAgY29uc3Qgc3RhdGVtZW50c1N0cmluZyA9IHN0YXRlbWVudHMucmVkdWNlKChzdGF0ZW1lbnRzU3RyaW5nLCBzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdGF0ZW1lbnRzU3RyaW5nID0gKHN0YXRlbWVudHNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3N0YXRlbWVudHNTdHJpbmd9LCAke3N0YXRlbWVudFN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzU3RyaW5nXG59Il0sIm5hbWVzIjpbIlN1YnByb29mQXNzZXJ0aW9uIiwic3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZyIsInN0YXRlbWVudHMiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnRzIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwibm9kZSIsIm1ldGFMZXZlbFZlcmlmaWVyIiwiZGVidWciLCJkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsInN1YnByb29mVW5pZmllZCIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwibWF0Y2giLCJzdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50Tm9kZXMiLCJtYXAiLCJzdHJpbmdGcm9tU3RhdGVtZW50cyIsImZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJmcm9udFN0YXRlbWVudHMiLCJmcm9udCIsImxhc3RTdGF0ZW1lbnQiLCJsYXN0IiwiZnJvbnRTdGF0ZW1lbnRzU3RyaW5nIiwic3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzIiwibGFzdFN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudHNTdHJpbmciLCJyZWR1Y2UiLCJzdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJEQVhKOzREQUNRO2dFQUNJO2lFQUNDO3FCQUVLO3FCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQyxpQ0FDakNDLDZCQUE2QkMsSUFBQUEsZ0JBQVMsRUFBQztB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