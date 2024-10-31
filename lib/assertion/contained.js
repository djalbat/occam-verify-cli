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
var _query = require("../utilities/query");
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
var containedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/containedAssertion");
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
            value: function resolve(substitutions, context) {
                var resolved;
                var containedAssertionString = this.string; ///
                context.trace("Resolving the '".concat(containedAssertionString, "' contained assertion..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, substitutions), verifiedWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, context);
                resolved = verifiedWhenDerived; ///
                if (resolved) {
                    context.debug("...resolved the '".concat(containedAssertionString, "' contained assertion."));
                }
                return resolved;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var containedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."));
                var termVerified = false, frameVerified = false, statementVerified = false;
                if (this.term !== null) {
                    termVerified = this.term.verify(context, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                }
                if (this.frame !== null) {
                    frameVerified = this.verifyFrame(this.frame, assignments, stated, context);
                }
                if (this.statement !== null) {
                    statementVerified = this.verifyStatement(this.statement, assignments, stated, context);
                }
                if (termVerified || frameVerified || statementVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true;
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(containedAssertionString, "' contained assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyFrame",
            value: function verifyFrame(frame, assignments, stated, context) {
                stated = true; ///
                assignments = null; ///
                var frameVerified = frame.verify(assignments, stated, context);
                return frameVerified;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(statment, assignments, stated, context) {
                stated = true; ///
                assignments = null; ///
                var statmentVerified = statment.verify(assignments, stated, context);
                return statmentVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated;
                var containedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(containedAssertionString, "' stated contained assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(containedAssertionString, "' stated contained assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived1(context) {
                var verifiedWhenDerived;
                var containedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(containedAssertionString, "' derived contained assertion..."));
                verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.statement, this.negated, context);
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(containedAssertionString, "' derived contained assertion."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var containedAssertion = null;
                var containedAssertionNode = containedAssertionNodeQuery(statementNode);
                if (containedAssertionNode !== null) {
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, Statement = _shim.default.Statement, node = containedAssertionNode, string = context.nodeAsString(node), term = Term.fromContainedAssertionNode(containedAssertionNode, context), frame = Frame.fromContainedAssertionNode(containedAssertionNode, context), statement = Statement.fromContainedAssertionNode(containedAssertionNode, context), containedAssertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), negated = containedAssertionNegated; ///
                    containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
                }
                return containedAssertion;
            }
        }
    ]);
    return ContainedAssertion;
}();
function verifyWhenDerived(term, frame, statement, negated, context) {
    var verifiedWhenDerived = false;
    if (statement !== null) {
        if (term !== null) {
            var termContained = statement.isTermContained(term, context);
            if (!negated && termContained) {
                verifiedWhenDerived = true;
            }
            if (negated && !termContained) {
                verifiedWhenDerived = true;
            }
        }
        if (frame !== null) {
            var frameContained = statement.isFrameContained(frame, context);
            if (!negated && frameContained) {
                verifiedWhenDerived = true;
            }
            if (negated && !frameContained) {
                verifiedWhenDerived = true;
            }
        }
    }
    return verifiedWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2VydGlvblwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucywgZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5jb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2NvbnRhaW5lZEFzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIHJlc29sdmVkID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB0ZXJtVmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgZnJhbWVWZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUZyYW1lKHRoaXMuZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZCB8fCBmcmFtZVZlcmlmaWVkIHx8IHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSBmcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChzdGF0bWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBjb25zdCBzdGF0bWVudFZlcmlmaWVkID0gc3RhdG1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRtZW50VmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLnN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSwgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25OZWdhdGVkOyAgLy8vXG5cbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIG5lZ2F0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnQuaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIXRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG59XG4iXSwibmFtZXMiOlsiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0U3RhdGVtZW50IiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwicmVzb2x2ZWQiLCJjb250YWluZWRBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInRlcm1WZXJpZmllZCIsImZyYW1lVmVyaWZpZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJ2ZXJpZnlGcmFtZSIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJzdGF0bWVudCIsInN0YXRtZW50VmVyaWZpZWQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiVGVybSIsInNoaW0iLCJGcmFtZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsInRlcm1Db250YWluZWQiLCJpc1Rlcm1Db250YWluZWQiLCJmcmFtZUNvbnRhaW5lZCIsImlzRnJhbWVDb250YWluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzJEQVJKO3FCQUVTO3lCQUNTOzZCQUNrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVySCxJQUFNQyw4QkFBOEJDLElBQUFBLGdCQUFTLEVBQUM7QUFFL0IsSUFBQSxBQUFNRixtQ0FBTjthQUFNQSxtQkFDUEcsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7Z0NBRHRDUjtRQUVqQixJQUFJLENBQUNHLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQVBBUjs7WUFVbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sTUFBTTtZQUNwQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sSUFBSTtZQUNsQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sSUFBSTtZQUNsQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sS0FBSztZQUNuQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sT0FBTztZQUNyQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sU0FBUztZQUN2Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzVCLElBQUlDO2dCQUVKLElBQU1DLDJCQUEyQixJQUFJLENBQUNoQixNQUFNLEVBQUUsR0FBRztnQkFFakRjLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUEwQyxPQUF6QkQsMEJBQXlCO2dCQUV6RCxJQUFNZCxPQUFPZ0IsSUFBQUEsMkNBQTRCLEVBQUMsSUFBSSxDQUFDaEIsSUFBSSxFQUFFVyxnQkFDL0NWLFFBQVFnQixJQUFBQSw2Q0FBOEIsRUFBQyxJQUFJLENBQUNoQixLQUFLLEVBQUVVLGdCQUNuRFIsWUFBWWUsSUFBQUEscURBQXNDLEVBQUMsSUFBSSxDQUFDZixTQUFTLEVBQUVRLGdCQUNuRVEsc0JBQXNCQyxrQkFBa0JwQixNQUFNQyxPQUFPRSxXQUFXLElBQUksQ0FBQ0QsT0FBTyxFQUFFVTtnQkFFcEZDLFdBQVdNLHFCQUFxQixHQUFHO2dCQUVuQyxJQUFJTixVQUFVO29CQUNaRCxRQUFRUyxLQUFLLENBQUMsQUFBQyxvQkFBNEMsT0FBekJQLDBCQUF5QjtnQkFDN0Q7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRVosT0FBTztnQkFDakMsSUFBSWEsV0FBVztnQkFFZixJQUFNWCwyQkFBMkIsSUFBSSxDQUFDaEIsTUFBTSxFQUFFLEdBQUc7Z0JBRWpEYyxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBMEMsT0FBekJELDBCQUF5QjtnQkFFekQsSUFBSVksZUFBZSxPQUNmQyxnQkFBZ0IsT0FDaEJDLG9CQUFvQjtnQkFFeEIsSUFBSSxJQUFJLENBQUM1QixJQUFJLEtBQUssTUFBTTtvQkFDdEIwQixlQUFlLElBQUksQ0FBQzFCLElBQUksQ0FBQ3NCLE1BQU0sQ0FBQ1YsU0FBUzt3QkFDdkMsSUFBTWlCLGdCQUFnQjt3QkFFdEIsT0FBT0E7b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSSxJQUFJLENBQUM1QixLQUFLLEtBQUssTUFBTTtvQkFDdkIwQixnQkFBZ0IsSUFBSSxDQUFDRyxXQUFXLENBQUMsSUFBSSxDQUFDN0IsS0FBSyxFQUFFc0IsYUFBYUMsUUFBUVo7Z0JBQ3BFO2dCQUVBLElBQUksSUFBSSxDQUFDVCxTQUFTLEtBQUssTUFBTTtvQkFDM0J5QixvQkFBb0IsSUFBSSxDQUFDRyxlQUFlLENBQUMsSUFBSSxDQUFDNUIsU0FBUyxFQUFFb0IsYUFBYUMsUUFBUVo7Z0JBQ2hGO2dCQUVBLElBQUljLGdCQUFnQkMsaUJBQWlCQyxtQkFBbUI7b0JBQ3RELElBQUlJLHFCQUFxQixPQUNyQmIsc0JBQXNCO29CQUUxQixJQUFJSyxRQUFRO3dCQUNWUSxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ1YsYUFBYVg7b0JBQzFELE9BQU87d0JBQ0xPLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDUjtvQkFDL0M7b0JBRUEsSUFBSW9CLHNCQUFzQmIscUJBQXFCO3dCQUM3Q00sV0FBVztvQkFDYjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaYixRQUFRUyxLQUFLLENBQUMsQUFBQyxvQkFBNEMsT0FBekJQLDBCQUF5QjtnQkFDN0Q7Z0JBRUEsT0FBT1c7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZN0IsS0FBSyxFQUFFc0IsV0FBVyxFQUFFQyxNQUFNLEVBQUVaLE9BQU87Z0JBQzdDWSxTQUFTLE1BQU8sR0FBRztnQkFFbkJELGNBQWMsTUFBTSxHQUFHO2dCQUV2QixJQUFNSSxnQkFBZ0IxQixNQUFNcUIsTUFBTSxDQUFDQyxhQUFhQyxRQUFRWjtnQkFFeEQsT0FBT2U7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JHLFFBQVEsRUFBRVgsV0FBVyxFQUFFQyxNQUFNLEVBQUVaLE9BQU87Z0JBQ3BEWSxTQUFTLE1BQU8sR0FBRztnQkFFbkJELGNBQWMsTUFBTSxHQUFHO2dCQUV2QixJQUFNWSxtQkFBbUJELFNBQVNaLE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUVo7Z0JBRTlELE9BQU91QjtZQUNUOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlYsV0FBVyxFQUFFWCxPQUFPO2dCQUNuQyxJQUFJb0I7Z0JBRUosSUFBTWxCLDJCQUEyQixJQUFJLENBQUNoQixNQUFNLEVBQUUsR0FBRztnQkFFakRjLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUEwQyxPQUF6QkQsMEJBQXlCO2dCQUV6RGtCLHFCQUFxQjtnQkFFckIsSUFBSUEsb0JBQW9CO29CQUN0QnBCLFFBQVFTLEtBQUssQ0FBQyxBQUFDLG9CQUE0QyxPQUF6QlAsMEJBQXlCO2dCQUM3RDtnQkFFQSxPQUFPa0I7WUFDVDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBa0JSLE9BQU87Z0JBQ3ZCLElBQUlPO2dCQUVKLElBQU1MLDJCQUEyQixJQUFJLENBQUNoQixNQUFNLEVBQUUsR0FBRztnQkFFakRjLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUEwQyxPQUF6QkQsMEJBQXlCO2dCQUV6REssc0JBQXNCQyxrQkFBa0IsSUFBSSxDQUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0UsU0FBUyxFQUFFLElBQUksQ0FBQ0QsT0FBTyxFQUFFVTtnQkFFN0YsSUFBSU8scUJBQXFCO29CQUN2QlAsUUFBUVMsS0FBSyxDQUFDLEFBQUMsb0JBQTRDLE9BQXpCUCwwQkFBeUI7Z0JBQzdEO2dCQUVBLE9BQU9LO1lBQ1Q7Ozs7WUFFT2lCLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFekIsT0FBTztnQkFDN0MsSUFBSTBCLHFCQUFxQjtnQkFFekIsSUFBTUMseUJBQXlCM0MsNEJBQTRCeUM7Z0JBRTNELElBQUlFLDJCQUEyQixNQUFNO29CQUNuQyxJQUFRQyxPQUEyQkMsYUFBSSxDQUEvQkQsTUFBTUUsUUFBcUJELGFBQUksQ0FBekJDLE9BQU9DLFlBQWNGLGFBQUksQ0FBbEJFLFdBQ2Y1QyxPQUFPd0Msd0JBQ1B6QyxTQUFTYyxRQUFRZ0MsWUFBWSxDQUFDN0MsT0FDOUJDLE9BQU93QyxLQUFLSywwQkFBMEIsQ0FBQ04sd0JBQXdCM0IsVUFDL0RYLFFBQVF5QyxNQUFNRywwQkFBMEIsQ0FBQ04sd0JBQXdCM0IsVUFDakVULFlBQVl3QyxVQUFVRSwwQkFBMEIsQ0FBQ04sd0JBQXdCM0IsVUFDekVrQyw0QkFBNEJDLElBQUFBLDZCQUFrQixFQUFDUix5QkFDL0NyQyxVQUFVNEMsMkJBQTRCLEdBQUc7b0JBRS9DUixxQkFBcUIsSUEzS04zQyxtQkEySzZCRyxRQUFRQyxNQUFNQyxNQUFNQyxPQUFPQyxTQUFTQztnQkFDbEY7Z0JBRUEsT0FBT21DO1lBQ1Q7OztXQS9LbUIzQzs7QUFrTHJCLFNBQVN5QixrQkFBa0JwQixJQUFJLEVBQUVDLEtBQUssRUFBRUUsU0FBUyxFQUFFRCxPQUFPLEVBQUVVLE9BQU87SUFDakUsSUFBSU8sc0JBQXNCO0lBRTFCLElBQUloQixjQUFjLE1BQU07UUFDdEIsSUFBSUgsU0FBUyxNQUFNO1lBQ2pCLElBQU1nRCxnQkFBZ0I3QyxVQUFVOEMsZUFBZSxDQUFDakQsTUFBTVk7WUFFdEQsSUFBSSxDQUFDVixXQUFXOEMsZUFBZTtnQkFDN0I3QixzQkFBc0I7WUFDeEI7WUFFQSxJQUFJakIsV0FBVyxDQUFDOEMsZUFBZTtnQkFDN0I3QixzQkFBc0I7WUFDeEI7UUFDRjtRQUVBLElBQUlsQixVQUFVLE1BQU07WUFDbEIsSUFBTWlELGlCQUFpQi9DLFVBQVVnRCxnQkFBZ0IsQ0FBQ2xELE9BQU9XO1lBRXpELElBQUksQ0FBQ1YsV0FBV2dELGdCQUFnQjtnQkFDOUIvQixzQkFBc0I7WUFDeEI7WUFFQSxJQUFJakIsV0FBVyxDQUFDZ0QsZ0JBQWdCO2dCQUM5Qi9CLHNCQUFzQjtZQUN4QjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=