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
var definedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/definedAssertion");
var DefinedAssertion = /*#__PURE__*/ function() {
    function DefinedAssertion(string, node, tokens, term, frame, negated) {
        _class_call_check(this, DefinedAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
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
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiedIndependently;
                var definedAssertionString = this.string; ///
                context.trace("Unifying the '".concat(definedAssertionString, "' defined assertion independently..."));
                var localContext = _local.default.fromContextAndTokens(context, this.tokens);
                context = localContext; ///
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions, context), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions, context), verifiedWhenDerived = verifyWhenDerived(term, frame, this.negated, context);
                unifiedIndependently = verifiedWhenDerived; ///
                if (unifiedIndependently) {
                    context.debug("...unified the '".concat(definedAssertionString, "' defined assertion independently."));
                }
                return unifiedIndependently;
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
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, node = definedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), term = Term.fromDefinedAssertionNode(definedAssertionNode, context), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context), definedAssertionNegated = (0, _assertion.isAssertionNegated)(definedAssertionNode), negated = definedAssertionNegated; ///
                    definedAssertion = new DefinedAssertion(string, node, tokens, term, frame, negated);
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
        var Variable = _shim.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context), generalContext = context, variableDefined = generalContext.isVariableDefined(variable);
        if (!negated && variableDefined) {
            verifiedWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiedWhenDerived = true;
        }
    }
    if (frame !== null) {
        var Metavariable = _shim.default.Metavariable, frameNode = frame.getNode(), metavariable = Metavariable.fromFrameNode(frameNode, context), metavariableDefined = context.isMetavariableDefined(metavariable);
        if (!negated && metavariableDefined) {
            verifiedWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            verifiedWhenDerived = true;
        }
    }
    return verifiedWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vZGVmaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5jb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9kZWZpbmVkQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbmVkQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWU9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCksXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSB2ZXJpZmllZFdoZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgbGV0IHRlcm1WZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICBmcmFtZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mcmFtZSE9PSBudWxsKSB7XG4gICAgICBmcmFtZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlGcmFtZSh0aGlzLmZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkIHx8IGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IGZyYW1lVmVyaWZpZWQgPSBmcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIEZyYW1lIH0gPSBzaGltLFxuICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZDsgIC8vL1xuXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgY29udGV4dCkge1xuICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGdlbmVyYWxDb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTtcblxuICAgIGlmICghbmVnYXRlZCAmJiB2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFtZSE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgbWV0YXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIW1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xufSJdLCJuYW1lcyI6WyJEZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllZEluZGVwZW5kZW50bHkiLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ0ZXJtVmVyaWZpZWQiLCJmcmFtZVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInZlcmlmeUZyYW1lIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZ5V2hlblN0YXRlZCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJzaGltIiwiRnJhbWUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImZyb21UZXJtTm9kZSIsImdlbmVyYWxDb250ZXh0IiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkRBVEo7NERBQ1E7cUJBRUM7eUJBQ1M7NkJBQzBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdFLElBQU1DLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUU3QixJQUFBLEFBQU1GLGlDQUFOO2FBQU1BLGlCQUNQRyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVB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