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
var _SatisfiesAssertion;
var termNodesQuery = (0, _query.nodesQuery)("/satisfiesAssertion/term"), satisfiesAssertionNodeQuery = (0, _query.nodeQuery)("/statement/satisfiesAssertion");
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
                var satisfiesAssertionNode = satisfiesAssertionNodeQuery(statementNode);
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
    var termNodes = termNodesQuery(satisfiesAssertionNode), terms = termNodes.map(function(termNode) {
        var Term = _dom.default.Term, term = Term.fromTermNode(termNode, context);
        return term;
    });
    return terms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2F0aXNmaWVzQXNzZXJ0aW9uL3Rlcm1cIiksXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3NhdGlzZmllc0Fzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU2F0aXNmaWVzQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm1zLCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0aGlzLnRlcm1zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uJ3MgJHt0ZXJtc1N0cmluZ30gdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zRXF1YXRlID0gc3Vic3RpdHV0aW9ucy5tYXRjaFRlcm1zKHRoaXMudGVybXMpO1xuXG4gICAgc3Vic3RpdHV0aW9uc01hdGNoID0gdGVybXNFcXVhdGU7ICAvLy9cblxuICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24ncyAke3Rlcm1zU3RyaW5nfSB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc01hdGNoO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSByZWZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbidzICR7dGVybXNTdHJpbmd9IHRlcm1zLi4uYCk7XG5cbiAgICB0ZXJtc1ZlcmlmaWVkID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uJ3MgJHt0ZXJtc1N0cmluZ30gdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICByZWZlcmVuY2VWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2F0aXNmaWVzQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtcywgcmVmZXJlbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGVybXNTdHJpbmdGcm9tVGVybXModGVybXMpIHtcbiAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtcy5yZWR1Y2UoKHRlcm1zU3RyaW5nLCB0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICB0ZXJtc1N0cmluZyA9ICh0ZXJtc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGAnJHt0ZXJtU3RyaW5nfSdgIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgYCR7dGVybXNTdHJpbmd9LCAnJHt0ZXJtU3RyaW5nfSdgO1xuXG4gICAgcmV0dXJuIHRlcm1zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gdGVybXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRlcm1zRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSB0ZXJtTm9kZXNRdWVyeShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm1zIiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFRlcm1zIiwiZ2V0UmVmZXJlbmNlIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtc0VxdWF0ZSIsIm1hdGNoVGVybXMiLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJyZWZlcmVuY2VWZXJpZmllZCIsInZlcmlmeVJlZmVyZW5jZSIsImV2ZXJ5IiwidGVybSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwidGVybXNGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwibmFtZSIsInJlZHVjZSIsInRlcm1TdHJpbmciLCJ0ZXJtTm9kZXMiLCJtYXAiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJmcm9tVGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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