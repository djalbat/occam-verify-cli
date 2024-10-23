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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!");
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
            value: function resolve(substitutions, localContext) {
                var resolved;
                var definedAssertionString = this.string; ///
                localContext.trace("Resolving the '".concat(definedAssertionString, "' defined assertion..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions), verifiedWhenDerived = verifyWhenDerived(term, frame, this.negated, localContext);
                resolved = verifiedWhenDerived; ///
                if (resolved) {
                    localContext.debug("...resolved the '".concat(definedAssertionString, "' defined assertion."));
                }
                return resolved;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var definedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."));
                stated = true; ///
                assignments = null; ///
                var termVerified = false, frameVerified = false;
                if (this.term !== null) {
                    termVerified = this.term.verify(localContext, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                }
                if (this.frame !== null) {
                    frameVerified = this.frame.verify(assignments, stated, localContext);
                }
                if (termVerified || frameVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(localContext);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(localContext);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true;
                    }
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(definedAssertionString, "' defined assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(localContext) {
                var verifiedWhenStated;
                var definedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(definedAssertionString, "' stated defined assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(definedAssertionString, "' stated defined assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived1(localContext) {
                var verifiedWhenDerived;
                var definedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(definedAssertionString, "' derived defined assertion..."));
                verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, localContext);
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(definedAssertionString, "' derived defined assertion."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, localContext) {
                var definedAssertion = null;
                if (definedAssertionNode !== null) {
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, node = definedAssertionNode, string = localContext.nodeAsString(node), term = Term.fromDefinedAssertionNode(definedAssertionNode, localContext), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, localContext), definedAssertionNegated = (0, _assertion.isAssertionNegated)(definedAssertionNode), negated = definedAssertionNegated; ///
                    definedAssertion = new DefinedAssertion(string, node, term, frame, negated);
                }
                return definedAssertion;
            }
        }
    ]);
    return DefinedAssertion;
}();
function verifyWhenDerived(term, frame, negated, localContext) {
    var verifiedWhenDerived = false;
    if (term !== null) {
        var termNode = term.getNode(), variableNode = variableNodeQuery(termNode), variableName = (0, _name.variableNameFromVariableNode)(variableNode), variableDefined = localContext.isVariableDefinedByVariableName(variableName);
        if (!negated && variableDefined) {
            verifiedWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiedWhenDerived = true;
        }
    }
    if (frame !== null) {
        var frameNode = frame.getNode(), metavariableNode = metavariableNodeQuery(frameNode), metavariableDefined = localContext.isMetavariableDefinedByMetavariableNode(metavariableNode);
        if (!negated && metavariableDefined) {
            verifiedWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            verifiedWhenDerived = true;
        }
    }
    return verifiedWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vZGVmaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbmVkQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCByZXNvbHZlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgdGhpcy5uZWdhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgcmVzb2x2ZWQgPSB2ZXJpZmllZFdoZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgbGV0IHRlcm1WZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICBmcmFtZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZyYW1lIT09IG51bGwpIHtcbiAgICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLmZyYW1lLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmVyaWZpZWQgfHwgZnJhbWVWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQobG9jYWxDb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgRnJhbWUgfSA9IHNoaW0sXG4gICAgICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZDsgIC8vL1xuXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhbWUhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc01ldGF2YXJpYWJsZURlZmluZWRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgbWV0YXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIW1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xufSJdLCJuYW1lcyI6WyJEZWZpbmVkQXNzZXJ0aW9uIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInJlc29sdmVkIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInRlcm1WZXJpZmllZCIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZ5V2hlblN0YXRlZCIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbiIsIlRlcm0iLCJzaGltIiwiRnJhbWUiLCJub2RlQXNTdHJpbmciLCJkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkQnlWYXJpYWJsZU5hbWUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZEJ5TWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkRBVko7cUJBRVM7eUJBQ1M7b0JBQ1U7NkJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdFLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDOUJDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLGlDQUFOO2FBQU1BLGlCQUNQSSxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU87Z0NBRDNCUjtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBRUE7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2tCQU5FUjs7WUFTbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsS0FBSztZQUNuQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsT0FBTztZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQ2pDLElBQUlDO2dCQUVK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