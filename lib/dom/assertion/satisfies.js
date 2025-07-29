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
var _SatisfiesAssertion;
var _default = (0, _dom.domAssigned)((_SatisfiesAssertion = /*#__PURE__*/ function() {
    function SatisfiesAssertion(string, node, tokens, terms, reference) {
        _class_call_check(this, SatisfiesAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.terms = terms;
        this.reference = reference;
    }
    _create_class(SatisfiesAssertion, [
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
                var termsString = termsStringFromTerms(this.terms), substitutionsString = substitutions.asString(), satisfiesAssertionString = this.string; ///
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the '").concat(satisfiesAssertionString, "' satisfies assertion's ").concat(termsString, " terms..."));
                var termsEquate = substitutions.matchTerms(this.terms);
                substitutionsMatch = termsEquate; ///
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the '").concat(satisfiesAssertionString, "' satisfies assertion's ").concat(termsString, " terms."));
                }
                return substitutionsMatch;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var satisfiesAssertionString = this.string; ///
                context.trace("Verifying the '".concat(satisfiesAssertionString, "' satisfies assertion..."));
                var termsVerified = this.verifyTerms(assignments, stated, context);
                if (termsVerified) {
                    var referenceVerified = this.verifyReference(assignments, stated, context);
                    verified = referenceVerified; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerms",
            value: function verifyTerms(assignments, stated, context) {
                var termsVerified;
                var termsString = termsStringFromTerms(this.terms), satisfiesAssertionString = this.string; ///
                context.trace("Verifying the '".concat(satisfiesAssertionString, "' satisfies assertion's ").concat(termsString, " terms..."));
                termsVerified = this.terms.every(function(term) {
                    var termVerified = term.verify(context, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    return termVerified;
                });
                if (termsVerified) {
                    context.debug("...verified the '".concat(satisfiesAssertionString, "' satisfies assertion's ").concat(termsString, " terms."));
                }
                return termsVerified;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerified = false;
                var referenceString = this.reference.getString(), satisfiesAssertionString = this.string; ///
                context.trace("Verifying the '".concat(satisfiesAssertionString, "' satisfies assertion's '").concat(referenceString, "' reference..."));
                var axiom = context.findAxiomByReference(this.reference, context);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        referenceVerified = true;
                    }
                }
                if (referenceVerified) {
                    context.debug("...verified the '".concat(satisfiesAssertionString, "' satisfies assertion's '").concat(referenceString, "' reference."));
                }
                return referenceVerified;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var satisfiesAssertion = null;
                var satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();
                if (satisfiesAssertionNode !== null) {
                    var Reference = _dom.default.Reference, node = satisfiesAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), terms = termsFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = Reference.fromSatisfiesAssertionNode(satisfiesAssertionNode, context);
                    satisfiesAssertion = new SatisfiesAssertion(string, node, tokens, terms, reference);
                }
                return satisfiesAssertion;
            }
        }
    ]);
    return SatisfiesAssertion;
}(), _define_property(_SatisfiesAssertion, "name", "SatisfiesAssertion"), _SatisfiesAssertion));
function termsStringFromTerms(terms) {
    var termsString = terms.reduce(function(termsString, term) {
        var termString = term.getString();
        termsString = termsString === null ? "'".concat(termString, "'") : "".concat(termsString, ", '").concat(termString, "'");
        return termsString;
    }, null);
    return termsString;
}
function termsFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var termNodes = satisfiesAssertionNode.getTermNodes(), terms = termNodes.map(function(termNode) {
        var Term = _dom.default.Term, term = Term.fromTermNode(termNode, context);
        return term;
    });
    return terms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTYXRpc2ZpZXNBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybXMsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24ncyAke3Rlcm1zU3RyaW5nfSB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgdGVybXNFcXVhdGUgPSBzdWJzdGl0dXRpb25zLm1hdGNoVGVybXModGhpcy50ZXJtcyk7XG5cbiAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSB0ZXJtc0VxdWF0ZTsgIC8vL1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbidzICR7dGVybXNTdHJpbmd9IHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHJlZmVyZW5jZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWZXJpZmllZDtcblxuICAgIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXModGhpcy50ZXJtcyksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uJ3MgJHt0ZXJtc1N0cmluZ30gdGVybXMuLi5gKTtcblxuICAgIHRlcm1zVmVyaWZpZWQgPSB0aGlzLnRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24ncyAke3Rlcm1zU3RyaW5nfSB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTYXRpc2ZpZXNBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybXMsIHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRlcm1zKSB7XG4gIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMucmVkdWNlKCh0ZXJtc1N0cmluZywgdGVybSkgPT4ge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgdGVybXNTdHJpbmcgPSAodGVybXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBgJyR7dGVybVN0cmluZ30nYCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgIGAke3Rlcm1zU3RyaW5nfSwgJyR7dGVybVN0cmluZ30nYDtcblxuICAgIHJldHVybiB0ZXJtc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHRlcm1zU3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0ZXJtc0Zyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm1zIiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFRlcm1zIiwiZ2V0UmVmZXJlbmNlIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtc0VxdWF0ZSIsIm1hdGNoVGVybXMiLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJyZWZlcmVuY2VWZXJpZmllZCIsInZlcmlmeVJlZmVyZW5jZSIsImV2ZXJ5IiwidGVybSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsIlJlZmVyZW5jZSIsImRvbSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsInRlcm1zRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJmcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJyZWR1Y2UiLCJ0ZXJtU3RyaW5nIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwibWFwIiwidGVybU5vZGUiLCJUZXJtIiwiZnJvbVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQixXQUFlQSxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsU0FBUztnQ0FEbkJMO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsU0FBUyxH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