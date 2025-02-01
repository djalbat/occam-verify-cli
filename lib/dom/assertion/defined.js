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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../../context/local"));
var _constants = require("../../constants");
var _query = require("../../utilities/query");
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
var _DefinedAssertion;
var terminalNodesQuery = (0, _query.nodesQuery)("/definedAssertion/@*"), definedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/definedAssertion");
var _default = (0, _dom.domAssigned)((_DefinedAssertion = /*#__PURE__*/ function() {
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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var definedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."));
                var termVerified = this.verifyTerm(assignments, stated, context), frameVerified = this.verifyFrame(assignments, stated, context);
                if (termVerified || frameVerified) {
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
                    context.debug("...verified the '".concat(definedAssertionString, "' defined assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(assignments, stated, context) {
                var termVerified = false;
                if (this.term !== null) {
                    var termString = this.term.getString(), definedAssertionString = this.string; ///
                    context.trace("Verifying the '".concat(definedAssertionString, "' defined assertion's '").concat(termString, "' term..."));
                    termVerified = this.term.verify(context, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    if (termVerified) {
                        context.debug("...verified the '".concat(definedAssertionString, "' defined assertion's '").concat(termString, "' term."));
                    }
                }
                return termVerified;
            }
        },
        {
            key: "verifyFrame",
            value: function verifyFrame(assignments, stated, context) {
                var frameVerified = false;
                if (this.frame !== null) {
                    var frameString = this.frame.getString(), definedAssertionString = this.string; ///
                    context.trace("Verifying the '".concat(definedAssertionString, "' defined assertion's '").concat(frameString, "' frame..."));
                    stated = true; ///
                    assignments = null; ///
                    frameVerified = this.frame.verify(assignments, stated, context);
                    if (frameVerified) {
                        context.debug("...verified the '".concat(definedAssertionString, "' defined assertion's '").concat(frameString, "' frame."));
                    }
                }
                return frameVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
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
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var definedAssertion = null;
                var definedAssertionNode = definedAssertionNodeQuery(statementNode);
                if (definedAssertionNode !== null) {
                    var Term = _dom.default.Term, Frame = _dom.default.Frame, node = definedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), term = Term.fromDefinedAssertionNode(definedAssertionNode, context), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context), negated = isNegated(definedAssertionNode);
                    definedAssertion = new DefinedAssertion(string, node, tokens, term, frame, negated);
                }
                return definedAssertion;
            }
        }
    ]);
    return DefinedAssertion;
}(), _define_property(_DefinedAssertion, "name", "DefinedAssertion"), _DefinedAssertion));
function isNegated(definedAssertionNode) {
    var terminalNodes = terminalNodesQuery(definedAssertionNode), negated = terminalNodes.some(function(terminalNode) {
        var content = terminalNode.getContent(), contentUndefined = content === _constants.UNDEFINED;
        if (contentUndefined) {
            return true;
        }
    });
    return negated;
}
function verifyWhenDerived(term, frame, negated, context) {
    var verifiedWhenDerived = false;
    if (term !== null) {
        var Variable = _dom.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context), generalContext = context, variableDefined = generalContext.isVariableDefined(variable);
        if (!negated && variableDefined) {
            verifiedWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiedWhenDerived = true;
        }
    }
    if (frame !== null) {
        var Metavariable = _dom.default.Metavariable, frameNode = frame.getNode(), metavariable = Metavariable.fromFrameNode(frameNode, context), metavariableDefined = context.isMetavariableDefined(metavariable);
        if (!negated && metavariableDefined) {
            verifiedWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            verifiedWhenDerived = true;
        }
    }
    return verifiedWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RlZmluZWRBc3NlcnRpb24vQCpcIiksXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9kZWZpbmVkQXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBEZWZpbmVkQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWU9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVWZXJpZmllZCA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkIHx8IGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLmZyYW1lLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZyYW1lVmVyaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdGhpcy50b2tlbnMpO1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWZpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgRnJhbWUgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBuZWdhdGVkID0gaXNOZWdhdGVkKGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpc05lZ2F0ZWQoZGVmaW5lZEFzc2VydGlvbk5vZGUpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZXNRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSB0ZXJtaW5hbE5vZGVzLnNvbWUoKHRlcm1pbmFsTm9kZSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgY29udGVudFVuZGVmaW5lZCA9IChjb250ZW50ID09PSBVTkRFRklORUQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnRVbmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBnZW5lcmFsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhbWUhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgbWV0YXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIW1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xufVxuIl0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJEZWZpbmVkQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZnJhbWVWZXJpZmllZCIsInZlcmlmeUZyYW1lIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidGVybVN0cmluZyIsInZlcmlmaWVkQWhlYWQiLCJmcmFtZVN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJGcmFtZSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJ0ZXJtaW5hbE5vZGVzIiwic29tZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFVuZGVmaW5lZCIsIlVOREVGSU5FRCIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImZyb21UZXJtTm9kZSIsImdlbmVyYWxDb250ZXh0IiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCOzREQUNTO3lCQUVDO3FCQUVZOzZCQUN1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0UsSUFBTUEscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLHlCQUNoQ0MsNEJBQTRCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTVDLFdBQWVDLElBQUFBLGdCQUFXLHFDQUFDO2FBQU1DLGlCQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU87Z0NBRHZCTjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFD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