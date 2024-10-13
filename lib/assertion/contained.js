"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainedAssertion;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/metaLevel"));
var _query = require("../utilities/query");
var _assertion = require("../utilities/assertion");
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
var statementNodeQuery = (0, _query.nodeQuery)("/containedAssertion/statement");
var ContainedAssertion = /*#__PURE__*/ function() {
    function ContainedAssertion(string, node, term, frame, negated1, statements) {
        _class_call_check(this, ContainedAssertion);
        this.string = string;
        this.node = node;
        this.term = term;
        this.frame = frame;
        this.negated = negated1;
        this.statements = statements;
    }
    _create_class(ContainedAssertion, [
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
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "isNegated",
            value: function isNegated() {
                return this.negated;
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
                var verified = false;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."));
                assignments = null; ///
                stated = true; ///
                var containedAssertionNode = this.node, verifiedAtMetaLevel = _metaLevel.default.verify(containedAssertionNode, assignments, stated, localContext);
                if (verifiedAtMetaLevel) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(localContext);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true;
                    }
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(containedAssertionString, "' contained assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, localContext) {
                var verifiedWhenStated;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' stated contained assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(containedAssertionString, "' stated contained assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(localContext) {
                var verifiedWhenDerived = false;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' derived contained assertion..."));
                if (this.term !== null) {
                    var variable = this.term.getVariable(localContext);
                    if (variable !== null) {
                        var variableContained = this.statement.isVariableContained(variable, localContext);
                        if (!this.negated && variableContained) {
                            verifiedWhenDerived = true;
                        }
                        if (this.negated && !variableContained) {
                            verifiedWhenDerived = true;
                        }
                    }
                }
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(containedAssertionString, "' derived contained assertion."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, localContext) {
                var containedAssertion = null;
                if (containedAssertionNode !== null) {
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, Statement = _shim.default.Statement, term = Term.fromContainedAssertionNode(containedAssertionNode, localContext), frame = Frame.fromContainedAssertionNode(containedAssertionNode, localContext), statementNode = statementNodeQuery(containedAssertionNode), containedAssertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), node = containedAssertionNode, string = localContext.nodeAsString(node), negated1 = containedAssertionNegated, statement = Statement.fromStatementNode(statementNode, localContext);
                    containedAssertion = new ContainedAssertion(string, node, term, frame, negated1, statement);
                }
                return containedAssertion;
            }
        }
    ]);
    return ContainedAssertion;
}();
// const frameMetavariableNodeQuery = nodeQuery("/containedAssertion/frame/metavariable!"),
//       statementMetavariableNodesQuery = nodesQuery("/containedAssertion/statement//metavariable");
function verifyDerivedContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
    var derivedContainedAssertionVerified = false;
    if (!stated) {
        var frameMetavariableNode = frameMetavariableNodeQuery(containedAssertionNode), termVariableNode = termVariableNodeQuery(containedAssertionNode);
        if (false) {
        ///
        } else if (frameMetavariableNode !== null) {
            var statementMetavariableNodes = statementMetavariableNodesQuery(containedAssertionNode), frameMetavariableNodeMatchesStatementMetavariableNode = statementMetavariableNodes.some(function(statementMetavariableNode) {
                var frameMetavariableNodeMatchesStatementMetavariableNode = frameMetavariableNode.match(statementMetavariableNode);
                if (frameMetavariableNodeMatchesStatementMetavariableNode) {
                    return true;
                }
            });
            if (!negated) {
                if (frameMetavariableNodeMatchesStatementMetavariableNode) {
                    derivedContainedAssertionVerified = true;
                }
            }
            if (negated) {
                if (!frameMetavariableNodeMatchesStatementMetavariableNode) {
                    derivedContainedAssertionVerified = true;
                }
            }
        } else if (termVariableNode !== null) {
            var statementVariableNodes = statementVariableNodesQuery(containedAssertionNode), termVariableNodeMatchesStatementVariableNode = statementVariableNodes.some(function(statementVariableNode) {
                var termVariableNodeMatchesStatementVariableNode = termVariableNode.match(statementVariableNode);
                if (termVariableNodeMatchesStatementVariableNode) {
                    return true;
                }
            });
        }
    }
    return derivedContainedAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lZEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudHMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2ZXJpZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVmVyaWZpZXIudmVyaWZ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBdE1ldGFMZXZlbCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMudGVybS5nZXRWYXJpYWJsZShsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVDb250YWluZWQgPSB0aGlzLnN0YXRlbWVudC5pc1ZhcmlhYmxlQ29udGFpbmVkKHZhcmlhYmxlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5uZWdhdGVkICYmIHZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZWdhdGVkICYmICF2YXJpYWJsZUNvbnRhaW5lZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIEZyYW1lLCBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25OZWdhdGVkLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gbmV3IENvbnRhaW5lZEFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cbn1cblxuLy8gY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4vLyAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50Ly9tZXRhdmFyaWFibGVcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeURlcml2ZWRDb250YWluZWRBc3NlcnRpb24oY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIXN0YXRlZCkge1xuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzLnNvbWUoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICBpZiAoIWZyYW1lTWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlcy5zb21lKChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiQ29udGFpbmVkQXNzZXJ0aW9uIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsImdldFN0YXRlbWVudHMiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwidmVyaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlQ29udGFpbmVkIiwic3RhdGVtZW50IiwiaXNWYXJpYWJsZUNvbnRhaW5lZCIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiVGVybSIsInNoaW0iLCJGcmFtZSIsIlN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJjb250YWluZWRBc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwibm9kZUFzU3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlEZXJpdmVkQ29udGFpbmVkQXNzZXJ0aW9uIiwiZGVyaXZlZENvbnRhaW5lZEFzc2VydGlvblZlcmlmaWVkIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlIiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzb21lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoIiwic3RhdGVtZW50VmFyaWFibGVOb2RlcyIsInN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlIiwic3RhdGVtZW50VmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjtnRUFDYTtxQkFFSjt5QkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRixtQ0FBTjthQUFNQSxtQkFDUEcsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFPLEVBQUVDLFVBQVU7Z0NBRHZDUjtRQUVqQixJQUFJLENBQUNHLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQVBEUjs7WUFVbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sTUFBTTtZQUNwQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sSUFBSTtZQUNsQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sSUFBSTtZQUNsQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sS0FBSztZQUNuQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sT0FB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