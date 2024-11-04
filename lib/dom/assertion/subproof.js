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
var _unification = require("../../utilities/unification");
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
var front = _necessary.arrayUtilities.front, last = _necessary.arrayUtilities.last, match = _necessary.arrayUtilities.match;
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
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified;
                var subproofString = subproof.getString(), subproofAssertionString = this.string; ///
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                var subproofStatements = subproof.getStatements(), subproofAssertionStatements = this.statements; ///
                subproofUnified = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                    var generalStatement = subproofStatement, specificStatement = subproofAssertionStatement, statementUnified = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                    if (statementUnified) {
                        return true;
                    }
                });
                if (subproofUnified) {
                    var substitutionsLength = substitutions.getLength();
                    if (substitutionsLength > 0) {
                        subproofUnified = false;
                    }
                }
                if (subproofUnified) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified;
                var subproofAssertionString = this.string; ///
                context.trace("Verifying the '".concat(subproofAssertionString, "' subproof assertion..."));
                var statementsVerified = this.verifyStatements(assignments, stated, context);
                verified = statementsVerified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZnJvbnQsIGxhc3QsIG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2ZBc3NlcnRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnByb29mQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZDtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnRzID0gc3VicHJvb2YuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3RhdGVtZW50czsgIC8vL1xuXG4gICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudHMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IHN0YXRlbWVudHNWZXJpZmllZDsgIC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50cyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudHNWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50cy5tYXAoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1ZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50Tm9kZXMubWFwKChzdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBub2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZzsgLy8vXG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IHN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnROb2Rlcy5tYXAoKHN0YXRlbWVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gbmV3IFN1YnByb29mQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBmcm9udFN0YXRlbWVudHMgPSBmcm9udChzdGF0ZW1lbnRzKSxcbiAgICAgICAgbGFzdFN0YXRlbWVudCA9IGxhc3Qoc3RhdGVtZW50cyksXG4gICAgICAgIGZyb250U3RhdGVtZW50c1N0cmluZyA9IHN0YXRlbWVudHNTdHJpbmdGcm9tU3RhdGVtZW50cyhmcm9udFN0YXRlbWVudHMpLFxuICAgICAgICBsYXN0U3RhdGVtZW50U3RyaW5nID0gbGFzdFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske2Zyb250U3RhdGVtZW50c1N0cmluZ31dIC4uLiAke2xhc3RTdGF0ZW1lbnRTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRzU3RyaW5nRnJvbVN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICBjb25zdCBzdGF0ZW1lbnRzU3RyaW5nID0gc3RhdGVtZW50cy5yZWR1Y2UoKHN0YXRlbWVudHNTdHJpbmcsIHN0YXRlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHN0YXRlbWVudHNTdHJpbmcgPSAoc3RhdGVtZW50c1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3RhdGVtZW50c1N0cmluZ30sICR7c3RhdGVtZW50U3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50c1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHNTdHJpbmdcbn1cbiJdLCJuYW1lcyI6WyJmcm9udCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsIm1hdGNoIiwic3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU3VicHJvb2ZBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50cyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdGF0ZW1lbnRzIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwic3RhdGVtZW50c1ZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50cyIsIm1hcCIsInN0YXRlbWVudCIsInN0YXRlbWVudFZlcmlmaWVkIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJTdGF0ZW1lbnQiLCJkb20iLCJzdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudFN0cmluZyIsImZyb21TdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdHJpbmdGcm9tU3RhdGVtZW50cyIsIm5hbWUiLCJmcm9udFN0YXRlbWVudHMiLCJsYXN0U3RhdGVtZW50IiwiZnJvbnRTdGF0ZW1lbnRzU3RyaW5nIiwic3RhdGVtZW50c1N0cmluZ0Zyb21TdGF0ZW1lbnRzIiwibGFzdFN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudHNTdHJpbmciLCJyZWR1Y2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7O3lCQWIrQjsyREFFZjsyQkFHZTtxQkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQVFBLFFBQXVCQyx5QkFBYyxDQUFyQ0QsT0FBT0UsT0FBZ0JELHlCQUFjLENBQTlCQyxNQUFNQyxRQUFVRix5QkFBYyxDQUF4QkU7QUFFckIsSUFBTUMsc0JBQXNCQyxJQUFBQSxpQkFBVSxFQUFDLGlDQUNqQ0MsNkJBQTZCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTdDLFdBQWVDLElBQUFBLGdCQUFXLHNDQUFDO2FBQU1DLGtCQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRExIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFV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