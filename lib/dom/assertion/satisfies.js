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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../../substitutions"));
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
                var termsString = termsStringFromTerms(this.terms), substitutionsString = substitutions.asString();
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the ").concat(termsString, " terms..."));
                var termsMatch = substitutions.matchTerms(this.terms);
                substitutionsMatch = termsMatch; ///
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the ").concat(termsString, " terms."));
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
                var termsString = termsStringFromTerms(this.terms);
                context.trace("Verifying the ".concat(termsString, " terms..."));
                termsVerified = this.terms.every(function(term) {
                    var termVerified = term.verify(context, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    return termVerified;
                });
                if (termsVerified) {
                    context.debug("...verified the ".concat(termsString, " terms."));
                }
                return termsVerified;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerified = false;
                var referenceString = this.reference.getString();
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                var axiom = context.findAxiomByReference(this.reference, context);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        referenceVerified = true;
                    }
                }
                if (referenceVerified) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return referenceVerified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var statementString = statement.getString(), satisfiesAssertionString = this.string;
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var axiom = context.findAxiomByReference(this.reference), substitutions = _substitutions.default.fromNothing();
                statementUnified = axiom.unifyStatement(statement, substitutions, context);
                if (statementUnified) {
                    var substitutionsMatch = this.matchSubstitutions(substitutions, context);
                    statementUnified = substitutionsMatch; ///
                }
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return statementUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTYXRpc2ZpZXNBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybXMsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJHt0ZXJtc1N0cmluZ30gdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zTWF0Y2ggPSBzdWJzdGl0dXRpb25zLm1hdGNoVGVybXModGhpcy50ZXJtcyk7XG5cbiAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSB0ZXJtc01hdGNoOyAgLy8vXG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3Rlcm1zU3RyaW5nfSB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc01hdGNoO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSByZWZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zKHRoaXMudGVybXMpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAke3Rlcm1zU3RyaW5nfSB0ZXJtcy4uLmApO1xuXG4gICAgdGVybXNWZXJpZmllZCA9IHRoaXMudGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJHt0ZXJtc1N0cmluZ30gdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IGF4aW9tLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJzdGl0dXRpb25zTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2F0aXNmaWVzQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm1zLCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0ZXJtcykge1xuICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zLnJlZHVjZSgodGVybXNTdHJpbmcsIHRlcm0pID0+IHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIHRlcm1zU3RyaW5nID0gKHRlcm1zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgYCcke3Rlcm1TdHJpbmd9J2AgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICBgJHt0ZXJtc1N0cmluZ30sICcke3Rlcm1TdHJpbmd9J2A7XG5cbiAgICByZXR1cm4gdGVybXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiB0ZXJtc1N0cmluZztcbn1cblxuZnVuY3Rpb24gdGVybXNGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFRlcm0gfSA9IGRvbSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHRlcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlNhdGlzZmllc0Fzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtcyIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRUZXJtcyIsImdldFJlZmVyZW5jZSIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uc01hdGNoIiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsInRyYWNlIiwidGVybXNNYXRjaCIsIm1hdGNoVGVybXMiLCJkZWJ1ZyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJyZWZlcmVuY2VWZXJpZmllZCIsInZlcmlmeVJlZmVyZW5jZSIsImV2ZXJ5IiwidGVybSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsIlJlZmVyZW5jZSIsImRvbSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsInRlcm1zRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJmcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJyZWR1Y2UiLCJ0ZXJtU3RyaW5nIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwibWFwIiwidGVybU5vZGUiLCJUZXJtIiwiZnJvbVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0VBSVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFCLFdBQWVBLElBQUFBLGdCQUFXLHVDQUFDO2FBQU1DLG1CQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTO2dDQURuQkw7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFNBQVM7WUFDdkI7OztZQUVBTSxLQUFBQTttQkFBQUEs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