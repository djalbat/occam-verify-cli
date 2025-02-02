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
var _SatisfyingAssertion;
var termNodesQuery = (0, _query.nodesQuery)("/satisfyingAssertion/term"), satisfyingAssertionNodeQuery = (0, _query.nodeQuery)("/statement/satisfyingAssertion");
var _default = (0, _dom.domAssigned)((_SatisfyingAssertion = /*#__PURE__*/ function() {
    function SatisfyingAssertion(string, node, tokens, terms, reference) {
        _class_call_check(this, SatisfyingAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.terms = terms;
        this.reference = reference;
    }
    _create_class(SatisfyingAssertion, [
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
            key: "getTerms",
            value: function getTerms() {
                return this.terms;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "matchSubstitutions",
            value: function matchSubstitutions(substitutions, context) {
                var substitutionsMatch;
                var termsString = termsStringFromTerms(this.terms), substitutionsString = substitutions.asString(), satisfyingAssertionString = this.string; ///
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the '").concat(satisfyingAssertionString, "' satisfying assertion's ").concat(termsString, " terms..."));
                var termsEquate = substitutions.matchTerms(this.terms);
                substitutionsMatch = termsEquate; ///
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the '").concat(satisfyingAssertionString, "' satisfying assertion's ").concat(termsString, " terms."));
                }
                return substitutionsMatch;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var satisfyingAssertionString = this.string; ///
                context.trace("Verifying the '".concat(satisfyingAssertionString, "' satisfying assertion..."));
                var termsVerified = this.verifyTerms(assignments, stated, context);
                if (termsVerified) {
                    var referenceVerified = this.verifyReference(assignments, stated, context);
                    verified = referenceVerified; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(satisfyingAssertionString, "' satisfying assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerms",
            value: function verifyTerms(assignments, stated, context) {
                var termsVerified;
                var termsString = termsStringFromTerms(this.terms), satisfyingAssertionString = this.string; ///
                context.trace("Verifying the '".concat(satisfyingAssertionString, "' satisfying assertion's ").concat(termsString, " terms..."));
                termsVerified = this.terms.every(function(term) {
                    var termVerified = term.verify(context, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    return termVerified;
                });
                if (termsVerified) {
                    context.debug("...verified the '".concat(satisfyingAssertionString, "' satisfying assertion's ").concat(termsString, " terms."));
                }
                return termsVerified;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerified = false;
                var referenceString = this.reference.getString(), satisfyingAssertionString = this.string; ///
                context.trace("Verifying the '".concat(satisfyingAssertionString, "' satisfying assertion's '").concat(referenceString, "' reference..."));
                var axiom = context.findAxiomByReference(this.reference, context);
                if (axiom !== null) {
                    var axiomSatisfying = axiom.isSatisfying();
                    if (axiomSatisfying) {
                        referenceVerified = true;
                    }
                }
                if (referenceVerified) {
                    context.debug("...verified the '".concat(satisfyingAssertionString, "' satisfying assertion's '").concat(referenceString, "' reference."));
                }
                return referenceVerified;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var satisfyingAssertion = null;
                var satisfyingAssertionNode = satisfyingAssertionNodeQuery(statementNode);
                if (satisfyingAssertionNode !== null) {
                    var Reference = _dom.default.Reference, node = satisfyingAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), terms = termsFromSatisfyingAssertionNode(satisfyingAssertionNode, context), reference = Reference.fromSatisfyingAssertionNode(satisfyingAssertionNode, context);
                    satisfyingAssertion = new SatisfyingAssertion(string, node, tokens, terms, reference);
                }
                return satisfyingAssertion;
            }
        }
    ]);
    return SatisfyingAssertion;
}(), _define_property(_SatisfyingAssertion, "name", "SatisfyingAssertion"), _SatisfyingAssertion));
function termsStringFromTerms(terms) {
    var termsString = terms.reduce(function(termsString, term) {
        var termString = term.getString();
        termsString = termsString === null ? "'".concat(termString, "'") : "".concat(termsString, ", '").concat(termString, "'");
        return termsString;
    }, null);
    return termsString;
}
function termsFromSatisfyingAssertionNode(satisfyingAssertionNode, context) {
    var termNodes = termNodesQuery(satisfyingAssertionNode), terms = termNodes.map(function(termNode) {
        var Term = _dom.default.Term, term = Term.fromTermNode(termNode, context);
        return term;
    });
    return terms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZnlpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NhdGlzZnlpbmdBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3NhdGlzZnlpbmdBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNhdGlzZnlpbmdBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybXMsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24ncyAke3Rlcm1zU3RyaW5nfSB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgdGVybXNFcXVhdGUgPSBzdWJzdGl0dXRpb25zLm1hdGNoVGVybXModGhpcy50ZXJtcyk7XG5cbiAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSB0ZXJtc0VxdWF0ZTsgIC8vL1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uJ3MgJHt0ZXJtc1N0cmluZ30gdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNNYXRjaDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gcmVmZXJlbmNlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NhdGlzZnlpbmdBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2Z5aW5nIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpLFxuICAgICAgICAgIHNhdGlzZnlpbmdBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NhdGlzZnlpbmdBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2Z5aW5nIGFzc2VydGlvbidzICR7dGVybXNTdHJpbmd9IHRlcm1zLi4uYCk7XG5cbiAgICB0ZXJtc1ZlcmlmaWVkID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24ncyAke3Rlcm1zU3RyaW5nfSB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmeWluZyA9IGF4aW9tLmlzU2F0aXNmeWluZygpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2Z5aW5nKSB7XG4gICAgICAgIHJlZmVyZW5jZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNhdGlzZnlpbmdBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzYXRpc2Z5aW5nQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlID0gc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBzYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUoc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21TYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZShzYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHNhdGlzZnlpbmdBc3NlcnRpb24gPSBuZXcgU2F0aXNmeWluZ0Fzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybXMsIHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZnlpbmdBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0ZXJtcykge1xuICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zLnJlZHVjZSgodGVybXNTdHJpbmcsIHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIHRlcm1zU3RyaW5nID0gKHRlcm1zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgYCcke3Rlcm1TdHJpbmd9J2AgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICBgJHt0ZXJtc1N0cmluZ30sICcke3Rlcm1TdHJpbmd9J2A7XG5cbiAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiB0ZXJtc1N0cmluZztcbn1cblxuZnVuY3Rpb24gdGVybXNGcm9tU2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUoc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gdGVybU5vZGVzUXVlcnkoc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0ZXJtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic2F0aXNmeWluZ0Fzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU2F0aXNmeWluZ0Fzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtcyIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRUZXJtcyIsImdldFJlZmVyZW5jZSIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uc01hdGNoIiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsInNhdGlzZnlpbmdBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1zRXF1YXRlIiwibWF0Y2hUZXJtcyIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInJlZmVyZW5jZVZlcmlmaWVkIiwidmVyaWZ5UmVmZXJlbmNlIiwiZXZlcnkiLCJ0ZXJtIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZnlpbmciLCJpc1NhdGlzZnlpbmciLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzYXRpc2Z5aW5nQXNzZXJ0aW9uIiwic2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJ0ZXJtc0Zyb21TYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSIsImZyb21TYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJyZWR1Y2UiLCJ0ZXJtU3RyaW5nIiwidGVybU5vZGVzIiwibWFwIiwidGVybU5vZGUiLCJUZXJtIiwiZnJvbVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBR3NCOzs7Ozs7Ozs7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