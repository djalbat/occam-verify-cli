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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../../substitutions"));
var _json = require("../../utilities/json");
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
    function SatisfiesAssertion(string, node, tokens, signature, reference) {
        _class_call_check(this, SatisfiesAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.signature = signature;
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
            key: "getSignature",
            value: function getSignature() {
                return this.signature;
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
                debugger;
                // const termsString = termsStringFromTerms(this.terms),
                //       substitutionsString = substitutions.asString();
                //
                // context.trace(`Matching the '${substitutionsString}' substitutions against the ${termsString} terms...`);
                //
                // const termsMatch = substitutions.matchTerms(this.terms);
                //
                // substitutionsMatch = termsMatch;  ///
                //
                // if (substitutionsMatch) {
                //   context.debug(`...matched the '${substitutionsString}' substitutions against the ${termsString} terms.`);
                // }
                return substitutionsMatch;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var satisfiesAssertionString = this.string; ///
                context.trace("Verifying the '".concat(satisfiesAssertionString, "' satisfies assertion..."));
                var signatureVerified = this.verifySignature(assignments, stated, context);
                if (signatureVerified) {
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
            key: "verifySignature",
            value: function verifySignature(assignments, stated, context) {
                var signatureVerified = this.signature.verify(context);
                return signatureVerified;
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
                var statementUnified = false;
                var statementString = statement.getString(), satisfiesAssertionString = this.string;
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                this.signature.verify(context);
                var substitutions;
                var axiom = context.findAxiomByReference(this.reference), fileContext = axiom.getFileContext(), localContext = _local.default.fromFileContext(fileContext);
                substitutions = _substitutions.default.fromNothing();
                var generalContext = localContext, specificContext = context, signatureMatches = axiom.matchSignature(this.signature, substitutions, generalContext, specificContext);
                if (signatureMatches) {
                    var substitutionsB = substitutions; ///
                    substitutions = _substitutions.default.fromNothing();
                    statementUnified = axiom.unifyStatement(statement, substitutions, generalContext, specificContext);
                    if (statementUnified) {
                        var substitutionsA = substitutions, substitutionsMatch = substitutionsB.matchSubstitutions(substitutionsA);
                        if (!substitutionsMatch) {
                            statementUnified = false;
                        }
                    }
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
                    var Reference = _dom.default.Reference, node = satisfiesAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = Reference.fromSatisfiesAssertionNode(satisfiesAssertionNode, context);
                    satisfiesAssertion = new SatisfiesAssertion(string, node, tokens, signature, reference);
                }
                return satisfiesAssertion;
            }
        }
    ]);
    return SatisfiesAssertion;
}(), _define_property(_SatisfiesAssertion, "name", "SatisfiesAssertion"), _SatisfiesAssertion));
function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var Signature = _dom.default.Signature, signatureNode = satisfiesAssertionNode.getSignatureNode(), signature = Signature.fromSignatureNode(signatureNode, context);
    return signature;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHtzdGF0ZW1lbnRGcm9tSlNPTn0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBzaWduYXR1cmUsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgZGVidWdnZXJcblxuICAgIC8vIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXModGhpcy50ZXJtcyksXG4gICAgLy8gICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcbiAgICAvL1xuICAgIC8vIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAke3Rlcm1zU3RyaW5nfSB0ZXJtcy4uLmApO1xuICAgIC8vXG4gICAgLy8gY29uc3QgdGVybXNNYXRjaCA9IHN1YnN0aXR1dGlvbnMubWF0Y2hUZXJtcyh0aGlzLnRlcm1zKTtcbiAgICAvL1xuICAgIC8vIHN1YnN0aXR1dGlvbnNNYXRjaCA9IHRlcm1zTWF0Y2g7ICAvLy9cbiAgICAvL1xuICAgIC8vIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAvLyAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICR7dGVybXNTdHJpbmd9IHRlcm1zLmApO1xuICAgIC8vIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMudmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHJlZmVyZW5jZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZWQgPSB0aGlzLnNpZ25hdHVyZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBheGlvbS5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZU1hdGNoZXMgPSBheGlvbS5tYXRjaFNpZ25hdHVyZSh0aGlzLnNpZ25hdHVyZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlTWF0Y2hlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0IgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGF4aW9tLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNNYXRjaCA9IHN1YnN0aXR1dGlvbnNCLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zQSk7XG5cbiAgICAgICAgaWYgKCFzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2F0aXNmaWVzQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2Vucywgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBkb20sXG4gICAgICAgIHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKSxcbiAgICAgICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwic2lnbmF0dXJlIiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFNpZ25hdHVyZSIsImdldFJlZmVyZW5jZSIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uc01hdGNoIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZWQiLCJ2ZXJpZnlTaWduYXR1cmUiLCJyZWZlcmVuY2VWZXJpZmllZCIsInZlcmlmeVJlZmVyZW5jZSIsImRlYnVnIiwicmVmZXJlbmNlU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic2lnbmF0dXJlTWF0Y2hlcyIsIm1hdGNoU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9uc0IiLCJzdWJzdGl0dXRpb25zQSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwic2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJmcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImZyb21TaWduYXR1cmVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7NERBSVM7b0VBQ0M7b0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDLFdBQWVBLElBQUFBLGdCQUFXLHVDQUFDO2FBQU1DLG1CQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQUR2Qkw7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFB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