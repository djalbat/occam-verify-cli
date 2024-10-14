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
                    var statementNode = statement.getNode(), subproofStatementNode = subproofStatement.getNode(), nodeA = statementNode, nodeB = subproofStatementNode, fileContextA = fileContext, localContextA = _local.default.fromFileContext(fileContextA), localContextB = localContext, unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vc3VicHJvb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgbWV0YUxldmVsVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZnJvbnQsIGxhc3QsIG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkQXRNZXRhTGV2ZWwgPSBtZXRhTGV2ZWxWZXJpZmllci52ZXJpZnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHZlcmlmaWVkQXRNZXRhTGV2ZWw7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgc3VicHJvb2YgYXNzZXJ0aW9uIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2godGhpcy5zdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHRBID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmICh1bmlmaWVkQXRNZXRhTGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nOyAvLy9cblxuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBuZXcgU3VicHJvb2ZBc3NlcnRpb24oc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVzID0gc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudE5vZGVzLm1hcCgoc3RhdGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnRzKHN0YXRlbWVudHMpO1xuXG4gICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IG5ldyBTdWJwcm9vZkFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHN0YXRlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IGZyb250U3RhdGVtZW50cyA9IGZyb250KHN0YXRlbWVudHMpLFxuICAgICAgICBsYXN0U3RhdGVtZW50ID0gbGFzdChzdGF0ZW1lbnRzKSxcbiAgICAgICAgZnJvbnRTdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzKGZyb250U3RhdGVtZW50cyksXG4gICAgICAgIGxhc3RTdGF0ZW1lbnRTdHJpbmcgPSBsYXN0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJvbnRTdGF0ZW1lbnRzU3RyaW5nfV0gLi4uICR7bGFzdFN0YXRlbWVudFN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gIGNvbnN0IHN0YXRlbWVudHNTdHJpbmcgPSBzdGF0ZW1lbnRzLnJlZHVjZSgoc3RhdGVtZW50c1N0cmluZywgc3RhdGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3RhdGVtZW50c1N0cmluZyA9IChzdGF0ZW1lbnRzU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtzdGF0ZW1lbnRzU3RyaW5nfSwgJHtzdGF0ZW1lbnRTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3RhdGVtZW50c1N0cmluZ1xufSJdLCJuYW1lcyI6WyJTdWJwcm9vZkFzc2VydGlvbiIsImZyb250IiwiYXJyYXlVdGlsaXRpZXMiLCJsYXN0IiwibWF0Y2giLCJzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudHMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3RhdGVtZW50cyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInZlcmlmaWVkQXRNZXRhTGV2ZWwiLCJtZXRhTGV2ZWxWZXJpZmllciIsImRlYnVnIiwiZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsInN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRBIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJtYXAiLCJmcm9tU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3RyaW5nRnJvbVN0YXRlbWVudHMiLCJmcm9udFN0YXRlbWVudHMiLCJsYXN0U3RhdGVtZW50IiwiZnJvbnRTdGF0ZW1lbnRzU3RyaW5nIiwic3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzIiwibGFzdFN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudHNTdHJpbmciLCJyZWR1Y2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7Ozt5QkFkVTsyREFFZDs0REFDUTtnRUFDSTtpRUFDQztxQkFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFRQyxRQUF1QkMseUJBQWMsQ0FBckNELE9BQU9FLE9BQWdCRCx5QkFBYyxDQUE5QkMsTUFBTUMsUUFBVUYseUJBQWMsQ0FBeEJFO0FBRXJCLElBQU1DLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQyxpQ0FDakNDLDZCQUE2QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUU5QixJQUFBLEFBQU1SLGtDQUFOO2FBQU1BLGtCQUNQUyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEakJYO1FBRWpCLElBQUksQ0FBQ1MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSkRYOztZQU9uQlksS0FBQUE7bUJBQUFBLFNBQUFB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