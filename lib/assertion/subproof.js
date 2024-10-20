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
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../unifier/metaLevel"));
var _metaLevel1 = /*#__PURE__*/ _interop_require_default(require("../verifier/metaLevel"));
var _query = require("../utilities/query");
var _proofStep = /*#__PURE__*/ _interop_require_default(require("../proofStep"));
var _subproof = /*#__PURE__*/ _interop_require_default(require("../subproof"));
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
var front = _necessary.arrayUtilities.front, last = _necessary.arrayUtilities.last, match = _necessary.arrayUtilities.match;
var statementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion");
var SubproofAssertion = /*#__PURE__*/ function() {
    function SubproofAssertion(string, node, statements) {
        _class_call_check(this, SubproofAssertion);
        this.string = string;
        this.node = node;
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
            key: "getNode",
            value: function getNode() {
                return this.node;
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
            value: function unifySubproof(subproof, substitutions, fileContext, localContext) {
                var subproofUnified;
                var subproofString = subproof.getString(), subproofAssertionString = this.string; ///
                localContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                var subproofStatements = subproof.getStatements(), subproofAssertionStatements = this.statements; ///
                subproofUnified = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                    var subproofAssertionStatementNode = subproofAssertionStatement.getNode(), subproofStatementNode = subproofStatement.getNode(), nodeA = subproofAssertionStatementNode, nodeB = subproofStatementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    if (unifiedAtMetaLevel) {
                        return true;
                    }
                });
                if (subproofUnified) {
                    localContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var subproofAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(subproofAssertionString, "' subproof assertion..."));
                stated = true; ///
                assignments = null; ///
                var verifiedWhenStated = false, verifiedWhenDerived = false;
                if (stated) {
                    verifiedWhenStated = this.verifyWhenStated(localContext);
                } else {
                    verifiedWhenDerived = this.verifyWhenDerived(localContext);
                }
                if (verifiedWhenStated || verifiedWhenDerived) {
                    var subproofAssertionNode = this.node, verifiedAtMetaLevel = _metaLevel1.default.verify(subproofAssertionNode, assignments, stated, localContext);
                    verified = verifiedAtMetaLevel; ///
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
                var _this = this;
                var derivedSubproofAssertionVerified;
                var subproofAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(subproofAssertionString, "' derived subproof assertion..."));
                var proofSteps = localContext.getProofSteps();
                derivedSubproofAssertionVerified = proofSteps.some(function(proofStep) {
                    var subproofAssertion = _this, subproofAssertionUnified = proofStep.unifySubproofAssertion(subproofAssertion, localContext);
                    if (subproofAssertionUnified) {
                        return true;
                    }
                });
                if (derivedSubproofAssertionVerified) {
                    localContext.debug("...verified the '".concat(subproofAssertionString, "' derived subproof assertion."));
                }
                return derivedSubproofAssertionVerified;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var subproofAssertion = null;
                var subproofAssertionNode = subproofAssertionNodeQuery(statementNode);
                if (subproofAssertionNode !== null) {
                    var Statement = _shim.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statement = Statement.fromStatementNode(statementNode, localContext), statementString = statement.getString(), statements = statementNodes.map(function(statementNode) {
                        var statement = Statement.fromStatementNode(statementNode, localContext);
                        return statement;
                    }), node = subproofAssertionNode, string = statementString; ///
                    subproofAssertion = new SubproofAssertion(string, node, statements);
                }
                return subproofAssertion;
            }
        },
        {
            key: "fromSubproofAssertionNode",
            value: function fromSubproofAssertionNode(subproofAssertionNode, localContext) {
                var subproofAssertion = null;
                if (subproofAssertionNode !== null) {
                    var Statement = _shim.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statements = statementNodes.map(function(statementNode) {
                        var statement = Statement.fromStatementNode(statementNode, localContext);
                        return statement;
                    }), node = subproofAssertionNode, string = stringFromStatements(statements);
                    subproofAssertion = new SubproofAssertion(string, node, statements);
                }
                return subproofAssertion;
            }
        }
    ]);
    return SubproofAssertion;
}();
function stringFromStatements(statements) {
    var frontStatements = front(statements), lastStatement = last(statements), frontStatementsString = statementsStringFromStatements(frontStatements), lastStatementString = lastStatement.getString(), string = "[".concat(frontStatementsString, "] ... ").concat(lastStatementString);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgbWV0YUxldmVsVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgcHJvb2ZTdGVwIGZyb20gXCIuLi9wcm9vZlN0ZXBcIjtcbmltcG9ydCBzdWJwcm9vZiBmcm9tIFwiLi4vc3VicHJvb2ZcIjtcblxuY29uc3QgeyBmcm9udCwgbGFzdCwgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdGF0ZW1lbnRzOyAgLy8vXG5cbiAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCBzdWJwcm9vZlN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbm9kZUEgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAodW5pZmllZEF0TWV0YUxldmVsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhdGVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQobG9jYWxDb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgdmVyaWZpZWRBdE1ldGFMZXZlbCA9IG1ldGFMZXZlbFZlcmlmaWVyLnZlcmlmeShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRBdE1ldGFMZXZlbDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCA9IHByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IHRoaXMsXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBwcm9vZlN0ZXAudW5pZnlTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZzsgLy8vXG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKTtcblxuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udChzdGF0ZW1lbnRzKSxcbiAgICAgICAgbGFzdFN0YXRlbWVudCA9IGxhc3Qoc3RhdGVtZW50cyksXG4gICAgICAgIGZyb250U3RhdGVtZW50c1N0cmluZyA9IHN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyhmcm9udFN0YXRlbWVudHMpLFxuICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske2Zyb250U3RhdGVtZW50c1N0cmluZ31dIC4uLiAke2xhc3RTdGF0ZW1lbnRTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50cy5yZWR1Y2UoKHN0YXRlbWVudHNTdHJpbmcsIHN0YXRlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHN0YXRlbWVudHNTdHJpbmcgPSAoc3RhdGVtZW50c1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3RhdGVtZW50c1N0cmluZ30sICR7c3RhdGVtZW50U3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHNTdHJpbmdcbn0iXSwibmFtZXMiOlsiU3VicHJvb2ZBc3NlcnRpb24iLCJmcm9udCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsIm1hdGNoIiwic3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFN0YXRlbWVudHMiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50Iiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlIiwibm9kZUEiLCJub2RlQiIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZEF0TWV0YUxldmVsIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInZlcmlmaWVkQXRNZXRhTGV2ZWwiLCJtZXRhTGV2ZWxWZXJpZmllciIsImRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lIiwicHJvb2ZTdGVwIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQiLCJ1bmlmeVN1YnByb29mQXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwibWFwIiwiZnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRzIiwiZnJvbnRTdGF0ZW1lbnRzIiwibGFzdFN0YXRlbWVudCIsImZyb250U3RhdGVtZW50c1N0cmluZyIsInN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRzU3RyaW5nIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWtCcUJBOzs7eUJBaEJVOzJEQUVkOzREQUNRO2dFQUNJO2lFQUNDO3FCQUVRO2dFQUNoQjsrREFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFRQyxRQUF1QkMseUJBQWMsQ0FBckNELE9BQU9FLE9BQWdCRCx5QkFBYyxDQUE5QkMsTUFBTUMsUUFBVUYseUJBQWMsQ0FBeEJFO0FBRXJCLElBQU1DLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQyxpQ0FDakNDLDZCQUE2QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUU5QixJQUFBLEFBQU1SLGtDQUFOO2FBQU1BLGtCQUNQUyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEakJYO1FBRWpCLElBQUksQ0FBQ1MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSkRYOztZQU9uQlksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWND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