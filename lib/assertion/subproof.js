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
                var statementsVerified = this.statements.map(function(statement) {
                    var statementVerified = statement.verify(assignments, stated, localContext);
                    if (statementVerified) {
                        return true;
                    }
                });
                if (statementsVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(localContext);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(localContext);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true; ///
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBmcm9udCwgbGFzdCwgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50cztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdGF0ZW1lbnRzOyAgLy8vXG5cbiAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCBzdWJwcm9vZlN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbm9kZUEgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gc3VicHJvb2ZTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHRBKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAodW5pZmllZEF0TWV0YUxldmVsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50c1ZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnRzLm1hcCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN0YXRlbWVudHNWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQobG9jYWxDb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQgPSBwcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSB0aGlzLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gcHJvb2ZTdGVwLnVuaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmc7IC8vL1xuXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnRzKHN0YXRlbWVudHMpIHtcbiAgY29uc3QgZnJvbnRTdGF0ZW1lbnRzID0gZnJvbnQoc3RhdGVtZW50cyksXG4gICAgICAgIGxhc3RTdGF0ZW1lbnQgPSBsYXN0KHN0YXRlbWVudHMpLFxuICAgICAgICBmcm9udFN0YXRlbWVudHNTdHJpbmcgPSBzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMoZnJvbnRTdGF0ZW1lbnRzKSxcbiAgICAgICAgbGFzdFN0YXRlbWVudFN0cmluZyA9IGxhc3RTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtmcm9udFN0YXRlbWVudHNTdHJpbmd9XSAuLi4gJHtsYXN0U3RhdGVtZW50U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzKHN0YXRlbWVudHMpIHtcbiAgY29uc3Qgc3RhdGVtZW50c1N0cmluZyA9IHN0YXRlbWVudHMucmVkdWNlKChzdGF0ZW1lbnRzU3RyaW5nLCBzdGF0ZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdGF0ZW1lbnRzU3RyaW5nID0gKHN0YXRlbWVudHNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3N0YXRlbWVudHNTdHJpbmd9LCAke3N0YXRlbWVudFN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzU3RyaW5nXG59Il0sIm5hbWVzIjpbIlN1YnByb29mQXNzZXJ0aW9uIiwiZnJvbnQiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJtYXRjaCIsInN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50cyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdGF0ZW1lbnRzIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInN0YXRlbWVudHNWZXJpZmllZCIsIm1hcCIsInN0YXRlbWVudCIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lIiwicHJvb2ZTdGVwIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQiLCJ1bmlmeVN1YnByb29mQXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50U3RyaW5nIiwiZnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRzIiwiZnJvbnRTdGF0ZW1lbnRzIiwibGFzdFN0YXRlbWVudCIsImZyb250U3RhdGVtZW50c1N0cmluZyIsInN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRzU3RyaW5nIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7Ozt5QkFiVTsyREFFZDs0REFDUTtnRUFDSTtxQkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFRQyxRQUF1QkMseUJBQWMsQ0FBckNELE9BQU9FLE9BQWdCRCx5QkFBYyxDQUE5QkMsTUFBTUMsUUFBVUYseUJBQWMsQ0FBeEJFO0FBRXJCLElBQU1DLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQyxpQ0FDakNDLDZCQUE2QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUU5QixJQUFBLEFBQU1SLGtDQUFOO2FBQU1BLGtCQUNQUyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEakJYO1FBRWpCLElBQUksQ0FBQ1MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSkRYOztZQU9uQlksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7Z0JBQzlELElBQUlDO2dCQUVKLElB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