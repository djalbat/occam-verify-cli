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
var _local = /*#__PURE__*/ _interop_require_default(require("../../context/local"));
var _query = require("../../utilities/query");
var _dom = require("../../dom");
var _assertion = require("../../utilities/assertion");
var _substitutions = require("../../utilities/substitutions");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _ContainedAssertion;
var containedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/containedAssertion");
var _default = (0, _dom.domAssigned)((_ContainedAssertion = /*#__PURE__*/ function() {
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
                    var Term = dom.Term, Frame = dom.Frame, Statement = dom.Statement, node = containedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), term = Term.fromContainedAssertionNode(containedAssertionNode, context), frame = Frame.fromContainedAssertionNode(containedAssertionNode, context), statement = Statement.fromContainedAssertionNode(containedAssertionNode, context), containedAssertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), negated = containedAssertionNegated; ///
                    containedAssertion = new ContainedAssertion(string, node, tokens, term, frame, negated, statement);
                }
                return containedAssertion;
            }
        }
    ]);
    return ContainedAssertion;
}(), _define_property(_ContainedAssertion, "name", "ContainedAssertion"), _ContainedAssertion));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5cbmNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvY29udGFpbmVkQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb250YWluZWRBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnModGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSB2ZXJpZmllZFdoZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB0ZXJtVmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgZnJhbWVWZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUZyYW1lKHRoaXMuZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZCB8fCBmcmFtZVZlcmlmaWVkIHx8IHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSBmcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy5mcmFtZSwgdGhpcy5zdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb250YWluZWRBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIEZyYW1lLCBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25OZWdhdGVkOyAgLy8vXG5cbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50LmlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIHRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICF0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnQuaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiBmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIWZyYW1lQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xufVxuIl0sIm5hbWVzIjpbImNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ0ZXJtVmVyaWZpZWQiLCJmcmFtZVZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidmVyaWZ5RnJhbWUiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJGcmFtZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsIm5hbWUiLCJ0ZXJtQ29udGFpbmVkIiwiaXNUZXJtQ29udGFpbmVkIiwiZnJhbWVDb250YWluZWQiLCJpc0ZyYW1lQ29udGFpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozs0REFUeUI7cUJBRUM7bUJBQ0U7eUJBQ087NkJBQ2tGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckgsSUFBTUEsOEJBQThCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTlDLFdBQWVDLElBQUFBLGdCQUFXLHVDQUFDO2FBQU1DLG1CQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUztnQ0FEbENQO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FB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