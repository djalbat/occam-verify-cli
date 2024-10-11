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
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var subproofAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(subproofAssertionString, "' subproof assertion..."));
                var verifiedWhenStated = false, verifiedWhenDerived = false;
                if (stated) {
                    verifiedWhenStated = this.verifyWhenStated(localContext);
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
                subproofUnified = (0, _array.match)(this.statements, subproofStatements, function(statement1, subproofStatement) {
                    var statementNode = statement1.getNode(), subproofStatementNode = subproofStatement.getNode(), nodeA = statementNode, nodeB = subproofStatementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
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
                    var Statement = _shim.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statementString = statement.getString(), localContext = _local.default.fromFileContext(fileContext), statements = statementNodes.map(function(statementNode) {
                        var _$statement = Statement.fromStatementNode(statementNode, localContext);
                        return _$statement;
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
                        var statement1 = Statement.fromStatementNode(statementNode, localContext);
                        return statement1;
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
    var frontStatements = (0, _array.front)(statements), lastStatement = (0, _array.last)(statements), frontStatementsString = statementsStringFromStatements(frontStatements), lastStatementString = lastStatement.getString(), string = "[".concat(frontStatementsString, "] ... ").concat(lastStatementString);
    return string;
}
function statementsStringFromStatements(statements) {
    var statementsString = statements.reduce(function(statementsString, statement1) {
        var statementString = statement1.getString();
        statementsString = statementsString !== null ? "".concat(statementsString, ", ").concat(statementString) : statementString; ///
        return statementsString;
    }, null);
    return statementsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IGZyb250LCBsYXN0LCBtYXRjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSB0aGlzLm5vZGU7ICAvLy9cblxuICAgICAgdmVyaWZpZWQgPSBtZXRhTGV2ZWxWZXJpZmllci52ZXJpZnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgc3VicHJvb2YgYXNzZXJ0aW9uIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2godGhpcy5zdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZzsgLy8vXG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKTtcblxuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udChzdGF0ZW1lbnRzKSxcbiAgICAgICAgbGFzdFN0YXRlbWVudCA9IGxhc3Qoc3RhdGVtZW50cyksXG4gICAgICAgIGZyb250U3RhdGVtZW50c1N0cmluZyA9IHN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyhmcm9udFN0YXRlbWVudHMpLFxuICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske2Zyb250U3RhdGVtZW50c1N0cmluZ31dIC4uLiAke2xhc3RTdGF0ZW1lbnRTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50cy5yZWR1Y2UoKHN0YXRlbWVudHNTdHJpbmcsIHN0YXRlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHN0YXRlbWVudHNTdHJpbmcgPSAoc3RhdGVtZW50c1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3RhdGVtZW50c1N0cmluZ30sICR7c3RhdGVtZW50U3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHNTdHJpbmdcbn0iXSwibmFtZXMiOlsiU3VicHJvb2ZBc3NlcnRpb24iLCJzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudHMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3RhdGVtZW50cyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIm1ldGFMZXZlbFZlcmlmaWVyIiwiZGVidWciLCJkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsInN1YnByb29mVW5pZmllZCIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwibWF0Y2giLCJzdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGUiLCJub2RlQSIsIm5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsIlN0YXRlbWVudCIsInNoaW0iLCJzdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudFN0cmluZyIsIm1hcCIsImZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdHJpbmdGcm9tU3RhdGVtZW50cyIsImZyb250U3RhdGVtZW50cyIsImZyb250IiwibGFzdFN0YXRlbWVudCIsImxhc3QiLCJmcm9udFN0YXRlbWVudHNTdHJpbmciLCJzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMiLCJsYXN0U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50c1N0cmluZyIsInJlZHVjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEo7NERBQ1E7Z0VBQ0k7aUVBQ0M7cUJBRUs7cUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDLGlDQUNqQ0MsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTlCLElBQUEsQUFBTUosa0NBQU47YUFBTUEsa0JBQ1BLLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURqQlA7UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFKRFA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0JBQ3RDLElBQUlDO2dCQUVKLElBQU1DLDBCQUEwQixJQUFJLENBQUNYLE1BQU0sRUFBRyxHQUFHO2dCQUVqRFMsYUFBYUcsS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRCx5QkFBd0I7Z0JBRTdELElBQUlFLHFC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