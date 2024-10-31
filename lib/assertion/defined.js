"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinedAssertion;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _query = require("../utilities/query");
var _assertion = require("../utilities/assertion");
var _name = require("../utilities/name");
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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), definedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/definedAssertion");
var DefinedAssertion = /*#__PURE__*/ function() {
    function DefinedAssertion(string, node, term, frame, negated) {
        _class_call_check(this, DefinedAssertion);
        this.string = string;
        this.node = node;
        this.term = term;
        this.frame = frame;
        this.negated = negated;
    }
    _create_class(DefinedAssertion, [
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
            key: "resolve",
            value: function resolve(substitutions, context) {
                var resolved;
                var definedAssertionString = this.string; ///
                context.trace("Resolving the '".concat(definedAssertionString, "' defined assertion..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions), verifiedWhenDerived = verifyWhenDerived(term, frame, this.negated, context);
                resolved = verifiedWhenDerived; ///
                if (resolved) {
                    context.debug("...resolved the '".concat(definedAssertionString, "' defined assertion."));
                }
                return resolved;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var definedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."));
                var termVerified = false, frameVerified = false;
                if (this.term !== null) {
                    termVerified = this.term.verify(context, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                }
                if (this.frame !== null) {
                    frameVerified = this.verifyFrame(this.frame, assignments, stated, context);
                }
                if (termVerified || frameVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true;
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(definedAssertionString, "' defined assertion."));
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
            key: "verifyWhenStated",
            value: function verifyWhenStated(context) {
                var verifiedWhenStated;
                var definedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(definedAssertionString, "' stated defined assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(definedAssertionString, "' stated defined assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived1(context) {
                var verifiedWhenDerived;
                var definedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(definedAssertionString, "' derived defined assertion..."));
                verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, context);
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(definedAssertionString, "' derived defined assertion."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var definedAssertion = null;
                var definedAssertionNode = definedAssertionNodeQuery(statementNode);
                if (definedAssertionNode !== null) {
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, node = definedAssertionNode, string = context.nodeAsString(node), term = Term.fromDefinedAssertionNode(definedAssertionNode, context), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context), definedAssertionNegated = (0, _assertion.isAssertionNegated)(definedAssertionNode), negated = definedAssertionNegated; ///
                    definedAssertion = new DefinedAssertion(string, node, term, frame, negated);
                }
                return definedAssertion;
            }
        }
    ]);
    return DefinedAssertion;
}();
function verifyWhenDerived(term, frame, negated, context) {
    var verifiedWhenDerived = false;
    if (term !== null) {
        var termNode = term.getNode(), variableNode = variableNodeQuery(termNode), variableName = (0, _name.variableNameFromVariableNode)(variableNode), generalContext = context, variableDefined = generalContext.isVariableDefinedByVariableName(variableName);
        if (!negated && variableDefined) {
            verifiedWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiedWhenDerived = true;
        }
    }
    if (frame !== null) {
        var frameNode = frame.getNode(), metavariableNode = metavariableNodeQuery(frameNode), metavariableDefined = context.isMetavariableDefinedByMetavariableNode(metavariableNode);
        if (!negated && metavariableDefined) {
            verifiedWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            verifiedWhenDerived = true;
        }
    }
    return verifiedWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vZGVmaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZGVmaW5lZEFzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5lZEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZT0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIHJlc29sdmVkID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgbGV0IHRlcm1WZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICBmcmFtZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mcmFtZSE9PSBudWxsKSB7XG4gICAgICBmcmFtZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlGcmFtZSh0aGlzLmZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkIHx8IGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSBmcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIEZyYW1lIH0gPSBzaGltLFxuICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5lZ2F0ZWQ7ICAvLy9cblxuICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBnZW5lcmFsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhbWUhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVEZWZpbmVkQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIG1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICFtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbn0iXSwibmFtZXMiOlsiRGVmaW5lZEFzc2VydGlvbiIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGVRdWVyeSIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInJlc29sdmVkIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInRlcm1WZXJpZmllZCIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidmVyaWZ5RnJhbWUiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiVGVybSIsInNoaW0iLCJGcmFtZSIsIm5vZGVBc1N0cmluZyIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwiZ2VuZXJhbENvbnRleHQiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZEJ5VmFyaWFibGVOYW1lIiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJEQVhKO3FCQUVTO3lCQUNTO29CQUNVOzZCQUNnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RSxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzlCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUMseUJBQ2xDRSw0QkFBNEJGLElBQUFBLGdCQUFTLEVBQUM7QUFFN0IsSUFBQSxBQUFNRixpQ0FBTjthQUFNQSxpQkFDUEssTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPO2dDQUQzQlQ7UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUVBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFORVQ7O1lBU25C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