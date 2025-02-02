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
                var termsEquate = substitutions.equateTerms(this.terms);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZnlpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NhdGlzZnlpbmdBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3NhdGlzZnlpbmdBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNhdGlzZnlpbmdBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybXMsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24ncyAke3Rlcm1zU3RyaW5nfSB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgdGVybXNFcXVhdGUgPSBzdWJzdGl0dXRpb25zLmVxdWF0ZVRlcm1zKHRoaXMudGVybXMpO1xuXG4gICAgc3Vic3RpdHV0aW9uc01hdGNoID0gdGVybXNFcXVhdGU7ICAvLy9cblxuICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NhdGlzZnlpbmdBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2Z5aW5nIGFzc2VydGlvbidzICR7dGVybXNTdHJpbmd9IHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHJlZmVyZW5jZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZlcmlmaWVkO1xuXG4gICAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0aGlzLnRlcm1zKSxcbiAgICAgICAgICBzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24ncyAke3Rlcm1zU3RyaW5nfSB0ZXJtcy4uLmApO1xuXG4gICAgdGVybXNWZXJpZmllZCA9IHRoaXMudGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uJ3MgJHt0ZXJtc1N0cmluZ30gdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZnlpbmcgPSBheGlvbS5pc1NhdGlzZnlpbmcoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmeWluZykge1xuICAgICAgICByZWZlcmVuY2VWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTYXRpc2Z5aW5nQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmeWluZ0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSA9IHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlKHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUoc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzYXRpc2Z5aW5nQXNzZXJ0aW9uID0gbmV3IFNhdGlzZnlpbmdBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm1zLCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2Z5aW5nQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGVybXNTdHJpbmdGcm9tVGVybXModGVybXMpIHtcbiAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtcy5yZWR1Y2UoKHRlcm1zU3RyaW5nLCB0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICB0ZXJtc1N0cmluZyA9ICh0ZXJtc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGAnJHt0ZXJtU3RyaW5nfSdgIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgYCR7dGVybXNTdHJpbmd9LCAnJHt0ZXJtU3RyaW5nfSdgO1xuXG4gICAgcmV0dXJuIHRlcm1zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gdGVybXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRlcm1zRnJvbVNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlKHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHRlcm1Ob2Rlc1F1ZXJ5KHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlNhdGlzZnlpbmdBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybXMiLCJyZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VGVybXMiLCJnZXRSZWZlcmVuY2UiLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbnNNYXRjaCIsInRlcm1zU3RyaW5nIiwidGVybXNTdHJpbmdGcm9tVGVybXMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtc0VxdWF0ZSIsImVxdWF0ZVRlcm1zIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwidGVybXNWZXJpZmllZCIsInZlcmlmeVRlcm1zIiwicmVmZXJlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJldmVyeSIsInRlcm0iLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwicmVmZXJlbmNlU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmeWluZyIsImlzU2F0aXNmeWluZyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInNhdGlzZnlpbmdBc3NlcnRpb24iLCJzYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSIsIlJlZmVyZW5jZSIsImRvbSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsInRlcm1zRnJvbVNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlIiwiZnJvbVNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlIiwibmFtZSIsInJlZHVjZSIsInRlcm1TdHJpbmciLCJ0ZXJtTm9kZXMiLCJtYXAiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJmcm9tVGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Ozs7Ozs7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