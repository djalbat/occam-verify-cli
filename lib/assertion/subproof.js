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
                subproofUnified = match(this.statements, subproofStatements, function(statement, subproofStatement) {
                    var statementNode = statement.getNode(), subproofStatementNode = subproofStatement.getNode(), nodeA = statementNode, nodeB = subproofStatementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutionA, substitutions, localContextA, localContextB);
                    if (unifiedAtMetaLevel) {
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
                    var Statement = _shim.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statement = Statement.fromStatementNode(statementNode, fileContext), statementString = statement.getString(), localContext = _local.default.fromFileContext(fileContext), statements = statementNodes.map(function(statementNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgbWV0YUxldmVsVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZnJvbnQsIGxhc3QsIG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkQXRNZXRhTGV2ZWwgPSBtZXRhTGV2ZWxWZXJpZmllci52ZXJpZnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHZlcmlmaWVkQXRNZXRhTGV2ZWw7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgc3VicHJvb2YgYXNzZXJ0aW9uIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2godGhpcy5zdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9uQSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmICh1bmlmaWVkQXRNZXRhTGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nOyAvLy9cblxuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRzKHN0YXRlbWVudHMpO1xuXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IGZyb250U3RhdGVtZW50cyA9IGZyb250KHN0YXRlbWVudHMpLFxuICAgICAgICBsYXN0U3RhdGVtZW50ID0gbGFzdChzdGF0ZW1lbnRzKSxcbiAgICAgICAgZnJvbnRTdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzKGZyb250U3RhdGVtZW50cyksXG4gICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJvbnRTdGF0ZW1lbnRzU3RyaW5nfV0gLi4uICR7bGFzdFN0YXRlbWVudFN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IHN0YXRlbWVudHNTdHJpbmcgPSBzdGF0ZW1lbnRzLnJlZHVjZSgoc3RhdGVtZW50c1N0cmluZywgc3RhdGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3RhdGVtZW50c1N0cmluZyA9IChzdGF0ZW1lbnRzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtzdGF0ZW1lbnRzU3RyaW5nfSwgJHtzdGF0ZW1lbnRTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3RhdGVtZW50c1N0cmluZ1xufSJdLCJuYW1lcyI6WyJTdWJwcm9vZkFzc2VydGlvbiIsImZyb250IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwibWF0Y2giLCJzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudHMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3RhdGVtZW50cyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInZlcmlmaWVkQXRNZXRhTGV2ZWwiLCJtZXRhTGV2ZWxWZXJpZmllciIsImRlYnVnIiwiZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsInN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbkEiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50U3RyaW5nIiwibWFwIiwiZnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRzIiwiZnJvbnRTdGF0ZW1lbnRzIiwibGFzdFN0YXRlbWVudCIsImZyb250U3RhdGVtZW50c1N0cmluZyIsInN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyIsImxhc3RTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRzU3RyaW5nIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7eUJBZFU7MkRBRWQ7NERBQ1E7Z0VBQ0k7aUVBQ0M7cUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBUUMsUUFBdUJDLHlCQUFjLENBQXJDRCxPQUFPRSxPQUFnQkQseUJBQWMsQ0FBOUJDLE1BQU1DLFFBQVVGLHlCQUFjLENBQXhCRTtBQUVyQixJQUFNQyxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUMsaUNBQ2pDQyw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUM7QUFFOUIsSUFBQSxBQUFNUixrQ0FBTjthQUFNQSxrQkFDUFMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRGpCWDtRQUVqQixJQUFJLENBQUNTLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tC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