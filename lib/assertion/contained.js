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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
    function ContainedAssertion(string, node, tokens, term, frame, negated, statement) {
        _class_call_check(this, ContainedAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
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
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
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
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiedIndependently;
                var containedAssertionString = this.string; ///
                context.trace("Unifying the '".concat(containedAssertionString, "' contained assertion independently..."));
                var localContext = _local.default.fromContextAndTokens(context, this.tokens);
                context = localContext; ///
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions, context), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions, context), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, substitutions, context), verifiedWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, context);
                unifiedIndependently = verifiedWhenDerived; ///
                if (unifiedIndependently) {
                    context.debug("...unified the '".concat(containedAssertionString, "' contained assertion independently."));
                }
                return unifiedIndependently;
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
            value: function verifyStatement(statement, assignments, stated, context) {
                stated = true; ///
                assignments = null; ///
                var statementVerified = statement.verify(assignments, stated, context);
                return statementVerified;
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
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, Statement = _shim.default.Statement, node = containedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), term = Term.fromContainedAssertionNode(containedAssertionNode, context), frame = Frame.fromContainedAssertionNode(containedAssertionNode, context), statement = Statement.fromContainedAssertionNode(containedAssertionNode, context), containedAssertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), negated = containedAssertionNegated; ///
                    containedAssertion = new ContainedAssertion(string, node, tokens, term, frame, negated, statement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2VydGlvblwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucywgZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5jb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2NvbnRhaW5lZEFzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdGhpcy50b2tlbnMpO1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBsZXQgdGVybVZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgIGZyYW1lVmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm1WZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZyYW1lICE9PSBudWxsKSB7XG4gICAgICBmcmFtZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlGcmFtZSh0aGlzLmZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmVyaWZpZWQgfHwgZnJhbWVWZXJpZmllZCB8fCBzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlGcmFtZShmcmFtZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBjb25zdCBmcmFtZVZlcmlmaWVkID0gZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVkID0gc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMuc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIEZyYW1lLCBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZDsgIC8vL1xuXG4gICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIG5lZ2F0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnQuaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIXRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG59XG4iXSwibmFtZXMiOlsiQ29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ0ZXJtVmVyaWZpZWQiLCJmcmFtZVZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidmVyaWZ5RnJhbWUiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJzaGltIiwiRnJhbWUiLCJTdGF0ZW1lbnQiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJ0ZXJtQ29udGFpbmVkIiwiaXNUZXJtQ29udGFpbmVkIiwiZnJhbWVDb250YWluZWQiLCJpc0ZyYW1lQ29udGFpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyREFUSjs0REFDUTtxQkFFQzt5QkFDUzs2QkFDa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckgsSUFBTUMsOEJBQThCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRS9CLElBQUEsQUFBTUYsbUNBQU47YUFBTUEsbUJBQ1BHLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7Z0NBRDlDVDtRQUVqQixJQUFJLENBQUNHLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQVJBVDs7WUFX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