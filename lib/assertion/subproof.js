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
                    }), node = subproofAssertionNode, string = statementString; ///
                    subproofAssertion = new SubproofAssertion(string, node, statements);
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
                }), node = subproofAssertionNode, string = stringFromStatements(statements), subproofAssertion = new SubproofAssertion(string, node, statements);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbWV0YUxldmVsXCI7XG5cbmltcG9ydCB7IGZyb250LCBsYXN0LCBtYXRjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSB0aGlzLm5vZGU7ICAvLy9cblxuICAgICAgdmVyaWZpZWQgPSBtZXRhTGV2ZWxWZXJpZmllci52ZXJpZnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgc3VicHJvb2YgYXNzZXJ0aW9uIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2godGhpcy5zdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICB1bmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmc7IC8vL1xuXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cyksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IGZyb250U3RhdGVtZW50cyA9IGZyb250KHN0YXRlbWVudHMpLFxuICAgICAgICBsYXN0U3RhdGVtZW50ID0gbGFzdChzdGF0ZW1lbnRzKSxcbiAgICAgICAgZnJvbnRTdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzKGZyb250U3RhdGVtZW50cyksXG4gICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJvbnRTdGF0ZW1lbnRzU3RyaW5nfV0gLi4uICR7bGFzdFN0YXRlbWVudFN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IHN0YXRlbWVudHNTdHJpbmcgPSBzdGF0ZW1lbnRzLnJlZHVjZSgoc3RhdGVtZW50c1N0cmluZywgc3RhdGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3RhdGVtZW50c1N0cmluZyA9IChzdGF0ZW1lbnRzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtzdGF0ZW1lbnRzU3RyaW5nfSwgJHtzdGF0ZW1lbnRTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3RhdGVtZW50c1N0cmluZ1xufSJdLCJuYW1lcyI6WyJTdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50cyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdGF0ZW1lbnRzIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwibWV0YUxldmVsVmVyaWZpZXIiLCJkZWJ1ZyIsImRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJtYXRjaCIsInN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJmcm9tU3RhdGVtZW50Iiwic3VicHJvb2ZBc3NlcnRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJtYXAiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdHJpbmdGcm9tU3RhdGVtZW50cyIsImZyb250U3RhdGVtZW50cyIsImZyb250IiwibGFzdFN0YXRlbWVudCIsImxhc3QiLCJmcm9udFN0YXRlbWVudHNTdHJpbmciLCJzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMiLCJsYXN0U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50c1N0cmluZyIsInJlZHVjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEo7NERBQ1E7Z0VBQ0k7aUVBQ0M7cUJBRUs7cUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDLGlDQUNqQ0MsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTlCLElBQUEsQUFBTUosa0NBQU47YUFBTUEsa0JBQ1BLLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURqQlA7UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFKRFA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0JBQ3RDLElBQUlDO2dCQUVKLElBQU1DLDBCQUEwQixJQUFJLENBQUNYLE1BQU0sRUFBRyxHQUFHO2dCQUVqRFMsYUFBYUcsS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRCx5QkFBd0I7Z0JBRTdELElBQUlFLHFCQUFxQixPQUNyQkMsc0JBQXNCO2dCQUUxQixJQUFJTixRQUFRO29CQUNWSyxxQkFBcUIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ047Z0JBQzdDLE9BQU87b0JBQ0xLLHNCQUFzQixJQUFJLENBQUNFLGlCQUFpQixDQUFDUDtnQkFDL0M7Z0JBRUEsSUFBSUksc0JBQXNCQyxxQkFBcUI7b0JBQzdDUCxjQUFjLE1BQU0sR0FBRztvQkFFdkJDLFNBQVMsTUFBTyxHQUFHO29CQUVuQixJQUFNUyx3QkFBd0IsSUFBSSxDQUFDaEIsSUFBSSxFQUFHLEdBQUc7b0JBRTdDUyxXQUFXUSxtQkFBaUIsQ0FBQ1osTUFBTSxDQUFDVyx1QkFBdUJWLGFBQWFDLFFBQVFDO2dCQUNsRjtnQkFFQSxJQUFJQyxVQUFVO29CQUNaRCxhQUFhVSxLQUFLLENBQUMsQUFBQyxvQkFBMkMsT0FBeEJSLHlCQUF3QjtnQkFDakU7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJOLFlBQVk7Z0JBQzNCLElBQUlJO2dCQUVKLElBQU1GLDBCQUEwQixJQUFJLENBQUNYLE1BQU0sRUFBRyxHQUFHO2dCQUVqRFMsYUFBYUcsS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRCx5QkFBd0I7Z0JBRTdERSxxQkFBcUI7Z0JBRXJCLElBQUlBLG9CQUFvQjtvQkFDdEJKLGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUEyQyxPQUF4QlIseUJBQXdCO2dCQUNqRTtnQkFFQSxPQUFPRTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlAsWUFBWTtnQkFDNUIsSUFBSVc7Z0JBRUosSUFBTVQsMEJBQTBCLElBQUksQ0FBQ1gsTUFBTSxFQUFHLEdBQUc7Z0JBRWpEUyxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBeUMsT0FBeEJELHlCQUF3QjtnQkFFN0RTLG1DQUFtQztnQkFFbkNYLGFBQWFVLEtBQUssQ0FBQyxBQUFDLFFBQStCLE9BQXhCUix5QkFBd0I7Z0JBRW5ELE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRWYsWUFBWTtnQkFDOUQsSUFBSWdCO2dCQUVKLElBQU1DLGlCQUFpQkosU0FBU25CLFNBQVMsSUFDbkN3QixxQkFBcUJMLFNBQVNqQixhQUFhLElBQzNDTSwwQkFBMEIsSUFBSSxDQUFDWCxNQUFNLEVBQUcsR0FBRztnQkFFakRTLGFBQWFHLEtBQUssQ0FBQyxBQUFDLGlCQUFzREQsT0FBdENlLGdCQUFlLHlCQUErQyxPQUF4QmYseUJBQXdCO2dCQUVsR2Msa0JBQWtCRyxJQUFBQSxZQUFLLEVBQUMsSUFBSSxDQUFDMUIsVUFBVSxFQUFFeUIsb0JBQW9CLFNBQUNFLFdBQVdDO29CQUN2RSxJQUFNQyxnQkFBZ0JGLFVBQVV6QixPQUFPLElBQ2pDNEIsd0JBQXdCRixrQkFBa0IxQixPQUFPLElBQ2pENkIsUUFBUUYsZUFDUkcsUUFBUUYsdUJBQ1JHLGVBQWVYLGFBQ2ZZLGdCQUFnQkMsY0FBWSxDQUFDQyxlQUFlLENBQUNILGVBQzdDSSxnQkFBZ0I5QixjQUNoQitCLFVBQVVDLGtCQUFnQixDQUFDQyxLQUFLLENBQUNULE9BQU9DLE9BQU9YLGVBQWVhLGVBQWVHO29CQUVuRixJQUFJQyxTQUFTO3dCQUNYLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSWYsaUJBQWlCO29CQUNuQmhCLGFBQWFVLEtBQUssQ0FBQyxBQUFDLG1CQUF3RFIsT0FBdENlLGdCQUFlLHlCQUErQyxPQUF4QmYseUJBQXdCO2dCQUN0RztnQkFFQSxPQUFPYztZQUNUOzs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjZCxTQUFTLEVBQUVMLFdBQVc7Z0JBQ3pDLElBQUlvQixvQkFBb0I7Z0JBRXhCLElBQU1iLGdCQUFnQkYsVUFBVXpCLE9BQU8sSUFDakNhLHdCQUF3Qm5CLDJCQUEyQmlDO2dCQUV6RCxJQUFJZCwwQkFBMEIsTUFBTTtvQkFDbEMsSUFBTSxBQUFFNEIsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsaUJBQWlCbkQsb0JBQW9CcUIsd0JBQ3JDK0Isa0JBQWtCbkIsVUFBVTFCLFNBQVMsSUFDckNNLGVBQWU0QixjQUFZLENBQUNDLGVBQWUsQ0FBQ2QsY0FDNUN0QixhQUFhNkMsZUFBZUUsR0FBRyxDQUFDLFNBQUNsQjt3QkFDL0IsSUFBTUYsY0FBWWdCLFVBQVVLLGlCQUFpQixDQUFDbkIsZUFBZXRCO3dCQUU3RCxPQUFPb0I7b0JBQ1QsSUFDQTVCLE9BQU9nQix1QkFDUGpCLFNBQVNnRCxpQkFBaUIsR0FBRztvQkFFbkNKLG9CQUFvQixJQXBJTGpELGtCQW9JMkJLLFFBQVFDLE1BQU1DO2dCQUMxRDtnQkFFQSxPQUFPMEM7WUFDVDs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQmxDLHFCQUFxQixFQUFFUixZQUFZO2dCQUNsRSxJQUFNLEFBQUVvQyxZQUFjQyxhQUFJLENBQWxCRCxXQUNGRSxpQkFBaUJuRCxvQkFBb0JxQix3QkFDckNmLGFBQWE2QyxlQUFlRSxHQUFHLENBQUMsU0FBQ2xCO29CQUMvQixJQUFNRixZQUFZZ0IsVUFBVUssaUJBQWlCLENBQUNuQixlQUFldEI7b0JBRTdELE9BQU9vQjtnQkFDVCxJQUNBNUIsT0FBT2dCLHVCQUNQakIsU0FBU29ELHFCQUFxQmxELGFBQzlCMEMsb0JBQW9CLElBcEpUakQsa0JBb0orQkssUUFBUUMsTUFBTUM7Z0JBRTlELE9BQU8wQztZQUNUOzs7V0F2Sm1CakQ7O0FBMEpyQixTQUFTeUQscUJBQXFCbEQsVUFBVTtJQUN0QyxJQUFNbUQsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNwRCxhQUN4QnFELGdCQUFnQkMsSUFBQUEsV0FBSSxFQUFDdEQsYUFDckJ1RCx3QkFBd0JDLCtCQUErQkwsa0JBQ3ZETSxzQkFBc0JKLGNBQWNwRCxTQUFTLElBQzdDSCxTQUFTLEFBQUMsSUFBaUMyRCxPQUE5QkYsdUJBQXNCLFVBQTRCLE9BQXBCRTtJQUVqRCxPQUFPM0Q7QUFDVDtBQUVBLFNBQVMwRCwrQkFBK0J4RCxVQUFVO0lBQ2hELElBQU0wRCxtQkFBbUIxRCxXQUFXMkQsTUFBTSxDQUFDLFNBQUNELGtCQUFrQi9CO1FBQzVELElBQU1tQixrQkFBa0JuQixVQUFVMUIsU0FBUztRQUUzQ3lELG1CQUFtQixBQUFDQSxxQkFBcUIsT0FDckIsQUFBQyxHQUF1QlosT0FBckJZLGtCQUFpQixNQUFvQixPQUFoQlosbUJBQ3JCQSxpQkFBa0IsR0FBRztRQUU1QyxPQUFPWTtJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUIn0=