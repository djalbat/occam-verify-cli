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
var _assertion = require("../utilities/assertion");
var _substitutions = require("../utilities/substitutions");
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
var ContainedAssertion = /*#__PURE__*/ function() {
    function ContainedAssertion(string, node, term, frame, negated, statement) {
        _class_call_check(this, ContainedAssertion);
        this.string = string;
        this.node = node;
        this.term = term;
        this.frame = frame;
        this.negated = negated;
        this.statement = statement;
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
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "resolve",
            value: function resolve(substitutions, localContext) {
                var resolved;
                var containedAssertionString = this.string; ///
                localContext.trace("Resolving the '".concat(containedAssertionString, "' contained assertion..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, substitutions), verifiedWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, localContext);
                resolved = verifiedWhenDerived; ///
                if (resolved) {
                    localContext.debug("...resolved the '".concat(containedAssertionString, "' contained assertion."));
                }
                return resolved;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."));
                stated = true; ///
                assignments = null; ///
                var termVerified = false, frameVerified = false, statementVerified = false;
                if (this.term !== null) {
                    termVerified = this.term.verify(localContext, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                }
                if (this.frame !== null) {
                    frameVerified = this.frame.verify(assignments, stated, localContext);
                }
                if (this.statement !== null) {
                    statementVerified = this.statement.verify(assignments, stated, localContext);
                }
                if (termVerified || frameVerified || statementVerified) {
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
            value: function verifyWhenDerived1(localContext) {
                var verifiedWhenDerived;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' derived contained assertion..."));
                verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.statement, this.negated, localContext);
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
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, Statement = _shim.default.Statement, node = containedAssertionNode, string = localContext.nodeAsString(node), term = Term.fromContainedAssertionNode(containedAssertionNode, localContext), frame = Frame.fromContainedAssertionNode(containedAssertionNode, localContext), statement = Statement.fromContainedAssertionNode(containedAssertionNode, localContext), containedAssertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), negated = containedAssertionNegated; ///
                    containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
                }
                return containedAssertion;
            }
        }
    ]);
    return ContainedAssertion;
}();
function verifyWhenDerived(term, frame, statement, negated, localContext) {
    var verifiedWhenDerived = false;
    if (term !== null) {
        var variable = term.getVariable(localContext);
        if (variable !== null) {
            var variableContained = statement.isVariableContained(variable, localContext);
            if (!negated && variableContained) {
                verifiedWhenDerived = true;
            }
            if (negated && !variableContained) {
                verifiedWhenDerived = true;
            }
        }
    }
    if (frame !== null) {
        var metavariable = frame.getMetavariable(localContext);
        if (metavariable !== null) {
            var metavariableContained = statement.isMetavariableContained(metavariable, localContext);
            if (!negated && metavariableContained) {
                verifiedWhenDerived = true;
            }
            if (negated && !metavariableContained) {
                verifiedWhenDerived = true;
            }
        }
    }
    return verifiedWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2VydGlvblwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucywgZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZWRBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCByZXNvbHZlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgcmVzb2x2ZWQgPSB2ZXJpZmllZFdoZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGxldCB0ZXJtVmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgZnJhbWVWZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWVWZXJpZmllZCA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmVyaWZpZWQgfHwgZnJhbWVWZXJpZmllZCB8fCBzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy5mcmFtZSwgdGhpcy5zdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSwgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQ7ICAvLy9cblxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gbmV3IENvbnRhaW5lZEFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgbmVnYXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRlcm0uZ2V0VmFyaWFibGUobG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVDb250YWluZWQgPSBzdGF0ZW1lbnQuaXNWYXJpYWJsZUNvbnRhaW5lZCh2YXJpYWJsZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIHZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhdmFyaWFibGVDb250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVDb250YWluZWQgPSBzdGF0ZW1lbnQuaXNNZXRhdmFyaWFibGVDb250YWluZWQobWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgbWV0YXZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhbWV0YXZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lZEFzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsImdldFN0YXRlbWVudCIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwicmVzb2x2ZWQiLCJjb250YWluZWRBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInRlcm1WZXJpZmllZCIsImZyYW1lVmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiVGVybSIsInNoaW0iLCJGcmFtZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyIsImNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwidmFyaWFibGVDb250YWluZWQiLCJpc1ZhcmlhYmxlQ29udGFpbmVkIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQ29udGFpbmVkIiwiaXNNZXRhdmFyaWFibGVDb250YWluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxKO3lCQUVrQjs2QkFDa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEcsSUFBQSxBQUFNQSxtQ0FBTjthQUFNQSxtQkFDUEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7Z0NBRHRDTjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQVBBTjs7WUFVbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtn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