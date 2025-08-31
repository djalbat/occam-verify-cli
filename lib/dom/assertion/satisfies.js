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
            key: "compareSubstitutions",
            value: function compareSubstitutions(substitutions, context) {
                return this.signature.compareSubstitutions(substitutions, context);
            }
        },
        {
            key: "correlateSubstitutions",
            value: function correlateSubstitutions(substitutions, context) {
                return this.signature.correlateSubstitutions(substitutions, context);
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var satisfiesAssertionString = this.string; ///
                context.trace("Verifying the '".concat(satisfiesAssertionString, "' satisfies assertion..."));
                var signatureVerifies = this.verifySignature(assignments, stated, context);
                if (signatureVerifies) {
                    var referenceVerifies = this.verifyReference(assignments, stated, context);
                    verifies = referenceVerifies; ///
                }
                if (verifies) {
                    context.debug("...verified the '".concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifySignature",
            value: function verifySignature(assignments, stated, context) {
                var signatureVerifies = this.signature.verify(context);
                return signatureVerifies;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerifies = false;
                var referenceString = this.reference.getString();
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                var axiom = context.findAxiomByReference(this.reference, context);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        referenceVerifies = true;
                    }
                }
                if (referenceVerifies) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
                }
                return referenceVerifies;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
                var statementUnifies = false;
                var statementString = statement.getString(), satisfiesAssertionString = this.string; ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                this.signature.verify(context);
                var axiom = context.findAxiomByReference(this.reference), satisfiable = axiom.isSatisfiable();
                if (satisfiable) {
                    var substitutions;
                    substitutions = _substitutions.default.fromNothing();
                    var signatureMatches = axiom.matchSignature(this.signature, substitutions, context);
                    if (signatureMatches) {
                        var substitutionsB = substitutions; ///
                        substitutions = _substitutions.default.fromNothing();
                        statementUnifies = axiom.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
                        if (statementUnifies) {
                            var substitutionsA = substitutions, substitutionsMatch = substitutionsA.correlateSubstitutions(substitutionsB);
                            if (!substitutionsMatch) {
                                var substitutionsAString = substitutionsA.asString(), substitutionsBString = substitutionsB.asString();
                                context.trace("THe signature's ".concat(substitutionsBString, " substitutions do not correlate with the unification's ").concat(substitutionsAString, " substitutions."));
                                statementUnifies = false;
                            }
                        }
                    }
                }
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return statementUnifies;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var satisfiesAssertion = null;
                var satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();
                if (satisfiesAssertionNode !== null) {
                    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
                }
                return satisfiesAssertion;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var satisfiesAssertion = null;
                var satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();
                if (satisfiesAssertionNode !== null) {
                    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
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
function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var Reference = _dom.default.Reference, SatisfiesAssertion = _dom.default.SatisfiesAssertion, node = satisfiesAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = Reference.fromSatisfiesAssertionNode(satisfiesAssertionNode, context), satisfiesAssertion = new SatisfiesAssertion(string, node, tokens, signature, reference);
    return satisfiesAssertion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTYXRpc2ZpZXNBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucywgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVNpZ25hdHVyZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmVWZXJpZmllcykge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSByZWZlcmVuY2VWZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy5zaWduYXR1cmUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlTWF0Y2hlcyA9IGF4aW9tLm1hdGNoU2lnbmF0dXJlKHRoaXMuc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0IgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc01hdGNoID0gc3Vic3RpdHV0aW9uc0EuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zQik7XG5cbiAgICAgICAgICBpZiAoIXN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0FTdHJpbmcgPSBzdWJzdGl0dXRpb25zQS5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0JTdHJpbmcgPSBzdWJzdGl0dXRpb25zQi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUSGUgc2lnbmF0dXJlJ3MgJHtzdWJzdGl0dXRpb25zQlN0cmluZ30gc3Vic3RpdHV0aW9ucyBkbyBub3QgY29ycmVsYXRlIHdpdGggdGhlIHVuaWZpY2F0aW9uJ3MgJHtzdWJzdGl0dXRpb25zQVN0cmluZ30gc3Vic3RpdHV0aW9ucy5gKTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTYXRpc2ZpZXNBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RlcE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBkb20sXG4gICAgICAgIHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKSxcbiAgICAgICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmZ1bmN0aW9uIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UsIFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInNpZ25hdHVyZSIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRTaWduYXR1cmUiLCJnZXRSZWZlcmVuY2UiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmVyaWZ5U2lnbmF0dXJlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJkZWJ1ZyIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudCIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic2F0aXNmaWFibGUiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzaWduYXR1cmVNYXRjaGVzIiwibWF0Y2hTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zQiIsInN1YnN0aXR1dGlvbnNBIiwic3Vic3RpdHV0aW9uc01hdGNoIiwic3Vic3RpdHV0aW9uc0FTdHJpbmciLCJhc1N0cmluZyIsInN1YnN0aXR1dGlvbnNCU3RyaW5nIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibmFtZSIsInNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiU2lnbmF0dXJlIiwiZG9tIiwic2lnbmF0dXJlTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJmcm9tU2lnbmF0dXJlTm9kZSIsIlJlZmVyZW5jZSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7b0VBSVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFCLFdBQWVBLElBQUFBLGdCQUFXLHVDQUFDO2FBQU1DLG1CQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQUR2Qkw7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxTQUFTO1lBQ3ZCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxTQUFTO1lBQ3ZCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDVCxTQUFTLENBQUNPLG9CQUFvQixDQUFDQyxlQUFlQztZQUFVOzs7WUFFbkhDLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJGLGFBQWEsRUFBRUMsT0FBTztnQkFBSSxPQUFPLElBQUksQ0FBQ1QsU0FBUyxDQUFDVSxzQkFBc0IsQ0FBQ0YsZUFBZUM7WUFBVTs7O1lBRXZIRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVKLE9BQU87Z0JBQ2pDLElBQUlLLFdBQVc7Z0JBRWYsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ2xCLE1BQU0sRUFBRSxHQUFHO2dCQUVqRFksUUFBUU8sS0FBSyxDQUFDLEFBQUMsa0JBQTBDLE9BQXpCRCwwQkFBeUI7Z0JBRXpELElBQU1FLG9CQUFvQixJQUFJLENBQUNDLGVBQWUsQ0FBQ04sYUFBYUMsUUFBUUo7Z0JBRXBFLElBQUlRLG1CQUFtQjtvQkFDckIsSUFBTUUsb0JBQW9CLElBQUksQ0FBQ0MsZUFBZSxDQUFDUixhQUFhQyxRQUFRSjtvQkFFcEVLLFdBQVdLLG1CQUFtQixHQUFHO2dCQUNuQztnQkFFQSxJQUFJTCxVQUFVO29CQUNaTCxRQUFRWSxLQUFLLENBQUMsQUFBQyxvQkFBNEMsT0FBekJOLDBCQUF5QjtnQkFDN0Q7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JOLFdBQVcsRUFBRUMsTUFBTSxFQUFFSixPQUFPO2dCQUMxQyxJQUFNUSxvQkFBb0IsSUFBSSxDQUFDakIsU0FBUyxDQUFDVyxNQUFNLENBQUNGO2dCQUVoRCxPQUFPUTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQlIsV0FBVyxFQUFFQyxNQUFNLEVBQUVKLE9BQU87Z0JBQzFDLElBQUlVLG9CQUFvQjtnQkFFeEIsSUFBTUcsa0JBQWtCLElBQUksQ0FBQ3JCLFNBQVMsQ0FBQ0MsU0FBUztnQkFFaERPLFFBQVFPLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQk0saUJBQWdCO2dCQUVoRCxJQUFNQyxRQUFRZCxRQUFRZSxvQkFBb0IsQ0FBQyxJQUFJLENBQUN2QixTQUFTLEVBQUVRO2dCQUUzRCxJQUFJYyxVQUFVLE1BQU07b0JBQ2xCLElBQU1FLG1CQUFtQkYsTUFBTUcsYUFBYTtvQkFFNUMsSUFBSUQsa0JBQWtCO3dCQUNwQk4sb0JBQW9CO29CQUN0QjtnQkFDRjtnQkFFQSxJQUFJQSxtQkFBbUI7b0JBQ3JCVixRQUFRWSxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJDLGlCQUFnQjtnQkFDcEQ7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0NDLFNBQVMsRUFBRUMsZ0JBQWdCLEVBQUVwQixPQUFPO2dCQUNwRSxJQUFJcUIsbUJBQW1CO2dCQUV2QixJQUFNQyxrQkFBa0JILFVBQVUxQixTQUFTLElBQ3JDYSwyQkFBMkIsSUFBSSxDQUFDbEIsTUFBTSxFQUFFLEdBQUc7Z0JBRWpEWSxRQUFRTyxLQUFLLENBQUMsQUFBQyxpQkFBd0RELE9BQXhDZ0IsaUJBQWdCLDBCQUFpRCxPQUF6QmhCLDBCQUF5QjtnQkFFaEcsSUFBSSxDQUFDZixTQUFTLENBQUNXLE1BQU0sQ0FBQ0Y7Z0JBRXRCLElBQU1jLFFBQVFkLFFBQVFlLG9CQUFvQixDQUFDLElBQUksQ0FBQ3ZCLFNBQVMsR0FDbkQrQixjQUFjVCxNQUFNRyxhQUFhO2dCQUV2QyxJQUFJTSxhQUFhO29CQUNmLElBQUl4QjtvQkFFSkEsZ0JBQWdCeUIsc0JBQWEsQ0FBQ0MsV0FBVztvQkFFekMsSUFBTUMsbUJBQW1CWixNQUFNYSxjQUFjLENBQUMsSUFBSSxDQUFDcEMsU0FBUyxFQUFFUSxlQUFlQztvQkFFN0UsSUFBSTBCLGtCQUFrQjt3QkFDcEIsSUFBTUUsaUJBQWlCN0IsZUFBZSxHQUFHO3dCQUV6Q0EsZ0JBQWdCeUIsc0JBQWEsQ0FBQ0MsV0FBVzt3QkFFekNKLG1CQUFtQlAsTUFBTUksaUNBQWlDLENBQUNDLFdBQVdDLGtCQUFrQnJCLGVBQWVDO3dCQUV2RyxJQUFJcUIsa0JBQWtCOzRCQUNwQixJQUFNUSxpQkFBaUI5QixlQUNqQitCLHFCQUFxQkQsZUFBZTVCLHNCQUFzQixDQUFDMkI7NEJBRWpFLElBQUksQ0FBQ0Usb0JBQW9CO2dDQUN2QixJQUFNQyx1QkFBdUJGLGVBQWVHLFFBQVEsSUFDOUNDLHVCQUF1QkwsZUFBZUksUUFBUTtnQ0FFcERoQyxRQUFRTyxLQUFLLENBQUMsQUFBQyxtQkFBZ0d3QixPQUE5RUUsc0JBQXFCLDJEQUE4RSxPQUFyQkYsc0JBQXFCO2dDQUVwSVYsbUJBQW1COzRCQUNyQjt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxrQkFBa0I7b0JBQ3BCckIsUUFBUVksS0FBSyxDQUFDLEFBQUMsbUJBQTBETixPQUF4Q2dCLGlCQUFnQiwwQkFBaUQsT0FBekJoQiwwQkFBeUI7Z0JBQ3BHO2dCQUVBLE9BQU9lO1lBQ1Q7Ozs7WUFJT2EsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFbkMsT0FBTztnQkFDbkMsSUFBSW9DLHFCQUFxQjtnQkFFekIsSUFBTUMseUJBQXlCRixTQUFTRyx5QkFBeUI7Z0JBRWpFLElBQUlELDJCQUEyQixNQUFNO29CQUNuQ0QscUJBQXFCRyw2Q0FBNkNGLHdCQUF3QnJDO2dCQUM1RjtnQkFFQSxPQUFPb0M7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFekMsT0FBTztnQkFDN0MsSUFBSW9DLHFCQUFxQjtnQkFFekIsSUFBTUMseUJBQXlCSSxjQUFjSCx5QkFBeUI7Z0JBRXRFLElBQUlELDJCQUEyQixNQUFNO29CQUNuQ0QscUJBQXFCRyw2Q0FBNkNGLHdCQUF3QnJDO2dCQUM1RjtnQkFFQSxPQUFPb0M7WUFDVDs7OztLQXhCQSxzQ0FBT00sUUFBTztBQTJCaEIsU0FBU0Msb0NBQW9DTixzQkFBc0IsRUFBRXJDLE9BQU87SUFDMUUsSUFBTSxBQUFFNEMsWUFBY0MsWUFBRyxDQUFqQkQsV0FDRkUsZ0JBQWdCVCx1QkFBdUJVLGdCQUFnQixJQUN2RHhELFlBQVlxRCxVQUFVSSxpQkFBaUIsQ0FBQ0YsZUFBZTlDO0lBRTdELE9BQU9UO0FBQ1Q7QUFFQSxTQUFTZ0QsNkNBQTZDRixzQkFBc0IsRUFBRXJDLE9BQU87SUFDbkYsSUFBUWlELFlBQWtDSixZQUFHLENBQXJDSSxXQUFXOUQscUJBQXVCMEQsWUFBRyxDQUExQjFELG9CQUNiRSxPQUFPZ0Qsd0JBQ1BqRCxTQUFTWSxRQUFRa0QsWUFBWSxDQUFDN0QsT0FDOUJDLFNBQVNVLFFBQVFtRCxZQUFZLENBQUM5RCxPQUM5QkUsWUFBWW9ELG9DQUFvQ04sd0JBQXdCckMsVUFDeEVSLFlBQVl5RCxVQUFVRywwQkFBMEIsQ0FBQ2Ysd0JBQXdCckMsVUFDekVvQyxxQkFBcUIsSUFBSWpELG1CQUFtQkMsUUFBUUMsTUFBTUMsUUFBUUMsV0FBV0M7SUFFbkYsT0FBTzRDO0FBQ1QifQ==