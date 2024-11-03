"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _query = require("../../utilities/query");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _SubproofAssertion;
var front = _necessary.arrayUtilities.front, last = _necessary.arrayUtilities.last;
var statementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/statement"), subproofAssertionNodeQuery = (0, _query.nodeQuery)("/statement/subproofAssertion");
var _default = (0, _dom.domAssigned)((_SubproofAssertion = /*#__PURE__*/ function() {
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
            value: function verify(assignments, stated, context) {
                var verified;
                var subproofAssertionString = this.string; ///
                context.trace("Verifying the '".concat(subproofAssertionString, "' subproof assertion..."));
                var statementsVerified = this.verifyStatements(assignments, stated, context);
                if (statementsVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true; ///
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(subproofAssertionString, "' subproof assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyStatements",
            value: function verifyStatements(assignments, stated, context) {
                stated = true; ///
                assignments = null; ///
                var statementsVerified = this.statements.map(function(statement) {
                    var statementVerified = statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        return true;
                    }
                });
                return statementsVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(context) {
                var verifiedWhenStated;
                var subproofAssertionString = this.string; ///
                context.trace("Verifying the '".concat(subproofAssertionString, "' stated subproof assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(subproofAssertionString, "' stated subproof assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var _this = this;
                var derivedSubproofAssertionVerified;
                var subproofAssertionString = this.string; ///
                context.trace("Verifying the '".concat(subproofAssertionString, "' derived subproof assertion..."));
                var proofSteps = context.getProofSteps();
                derivedSubproofAssertionVerified = proofSteps.some(function(proofStep) {
                    var subproofAssertion = _this, subproofAssertionUnified = proofStep.unifySubproofAssertion(subproofAssertion, context);
                    if (subproofAssertionUnified) {
                        return true;
                    }
                });
                if (derivedSubproofAssertionVerified) {
                    context.debug("...verified the '".concat(subproofAssertionString, "' derived subproof assertion."));
                }
                return derivedSubproofAssertionVerified;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var subproofAssertion = null;
                var subproofAssertionNode = subproofAssertionNodeQuery(statementNode);
                if (subproofAssertionNode !== null) {
                    var Statement = _dom.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statement = Statement.fromStatementNode(statementNode, context), statementString = statement.getString(), statements = statementNodes.map(function(statementNode) {
                        var statement = Statement.fromStatementNode(statementNode, context);
                        return statement;
                    }), node = subproofAssertionNode, string = statementString; ///
                    subproofAssertion = new SubproofAssertion(string, node, statements);
                }
                return subproofAssertion;
            }
        },
        {
            key: "fromSubproofAssertionNode",
            value: function fromSubproofAssertionNode(subproofAssertionNode, context) {
                var subproofAssertion = null;
                if (subproofAssertionNode !== null) {
                    var Statement = _dom.default.Statement, statementNodes = statementNodesQuery(subproofAssertionNode), statements = statementNodes.map(function(statementNode) {
                        var statement = Statement.fromStatementNode(statementNode, context);
                        return statement;
                    }), node = subproofAssertionNode, string = stringFromStatements(statements);
                    subproofAssertion = new SubproofAssertion(string, node, statements);
                }
                return subproofAssertion;
            }
        }
    ]);
    return SubproofAssertion;
}(), _define_property(_SubproofAssertion, "name", "SubproofAssertion"), _SubproofAssertion));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGZyb250LCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudHNWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50cyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRzVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudHMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzVmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudHMubWFwKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgZGVyaXZlZFN1YnByb29mQXNzZXJ0aW9uVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBjb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkID0gcHJvb2ZTdGVwcy5zb21lKChwcm9vZlN0ZXApID0+IHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gdGhpcyxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCA9IHByb29mU3RlcC51bmlmeVN1YnByb29mQXNzZXJ0aW9uKHN1YnByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlcml2ZWRTdWJwcm9vZkFzc2VydGlvblZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZzsgLy8vXG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udChzdGF0ZW1lbnRzKSxcbiAgICAgICAgbGFzdFN0YXRlbWVudCA9IGxhc3Qoc3RhdGVtZW50cyksXG4gICAgICAgIGZyb250U3RhdGVtZW50c1N0cmluZyA9IHN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyhmcm9udFN0YXRlbWVudHMpLFxuICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske2Zyb250U3RhdGVtZW50c1N0cmluZ31dIC4uLiAke2xhc3RTdGF0ZW1lbnRTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50cy5yZWR1Y2UoKHN0YXRlbWVudHNTdHJpbmcsIHN0YXRlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHN0YXRlbWVudHNTdHJpbmcgPSAoc3RhdGVtZW50c1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3RhdGVtZW50c1N0cmluZ30sICR7c3RhdGVtZW50U3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHNTdHJpbmdcbn0iXSwibmFtZXMiOlsiZnJvbnQiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTdWJwcm9vZkFzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFN0YXRlbWVudHMiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnRzVmVyaWZpZWQiLCJ2ZXJpZnlTdGF0ZW1lbnRzIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwibWFwIiwic3RhdGVtZW50Iiwic3RhdGVtZW50VmVyaWZpZWQiLCJkZXJpdmVkU3VicHJvb2ZBc3NlcnRpb25WZXJpZmllZCIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZSIsInByb29mU3RlcCIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkIiwidW5pZnlTdWJwcm9vZkFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIlN0YXRlbWVudCIsImRvbSIsInN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50U3RyaW5nIiwiZnJvbVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN0cmluZ0Zyb21TdGF0ZW1lbnRzIiwibmFtZSIsImZyb250U3RhdGVtZW50cyIsImxhc3RTdGF0ZW1lbnQiLCJmcm9udFN0YXRlbWVudHNTdHJpbmciLCJzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMiLCJsYXN0U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50c1N0cmluZyIsInJlZHVjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7eUJBWitCOzJEQUVmO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQVFBLFFBQWdCQyx5QkFBYyxDQUE5QkQsT0FBT0UsT0FBU0QseUJBQWMsQ0FBdkJDO0FBRWYsSUFBTUMsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDLGlDQUNqQ0MsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTdDLFdBQWVDLElBQUFBLGdCQUFXLHNDQUFDO2FBQU1DLGtCQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRExIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9B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