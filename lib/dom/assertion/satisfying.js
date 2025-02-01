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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZnlpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NhdGlzZnlpbmdBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3NhdGlzZnlpbmdBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNhdGlzZnlpbmdBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybXMsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHJlZmVyZW5jZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZlcmlmaWVkO1xuXG4gICAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtcyh0aGlzLnRlcm1zKSxcbiAgICAgICAgICBzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzYXRpc2Z5aW5nQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmeWluZyBhc3NlcnRpb24ncyAke3Rlcm1zU3RyaW5nfSB0ZXJtcy4uLmApO1xuXG4gICAgdGVybXNWZXJpZmllZCA9IHRoaXMudGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uJ3MgJHt0ZXJtc1N0cmluZ30gdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZnlpbmcgPSBheGlvbS5pc1NhdGlzZnlpbmcoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmeWluZykge1xuICAgICAgICByZWZlcmVuY2VWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmeWluZ0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZnlpbmcgYXNzZXJ0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTYXRpc2Z5aW5nQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmeWluZ0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSA9IHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlKHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUoc2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzYXRpc2Z5aW5nQXNzZXJ0aW9uID0gbmV3IFNhdGlzZnlpbmdBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm1zLCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2Z5aW5nQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGVybXNTdHJpbmdGcm9tVGVybXModGVybXMpIHtcbiAgY29uc3QgdGVybXNTdHJpbmcgPSB0ZXJtcy5yZWR1Y2UoKHRlcm1zU3RyaW5nLCB0ZXJtKSA9PiB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICB0ZXJtc1N0cmluZyA9ICh0ZXJtc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGAnJHt0ZXJtU3RyaW5nfSdgIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgYCR7dGVybXNTdHJpbmd9LCAnJHt0ZXJtU3RyaW5nfSdgO1xuXG4gICAgcmV0dXJuIHRlcm1zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gdGVybXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRlcm1zRnJvbVNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlKHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHRlcm1Ob2Rlc1F1ZXJ5KHNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInNhdGlzZnlpbmdBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlNhdGlzZnlpbmdBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybXMiLCJyZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VGVybXMiLCJnZXRSZWZlcmVuY2UiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInNhdGlzZnlpbmdBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInJlZmVyZW5jZVZlcmlmaWVkIiwidmVyaWZ5UmVmZXJlbmNlIiwiZGVidWciLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zIiwiZXZlcnkiLCJ0ZXJtIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZnlpbmciLCJpc1NhdGlzZnlpbmciLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzYXRpc2Z5aW5nQXNzZXJ0aW9uIiwic2F0aXNmeWluZ0Fzc2VydGlvbk5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJ0ZXJtc0Zyb21TYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSIsImZyb21TYXRpc2Z5aW5nQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJyZWR1Y2UiLCJ0ZXJtU3RyaW5nIiwidGVybU5vZGVzIiwibWFwIiwidGVybU5vZGUiLCJUZXJtIiwiZnJvbVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBR3NCOzs7Ozs7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