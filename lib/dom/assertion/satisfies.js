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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3NhdGlzZmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vLi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTYXRpc2ZpZXNBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucywgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkgeyByZXR1cm4gdGhpcy5zaWduYXR1cmUuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTaWduYXR1cmUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gcmVmZXJlbmNlVmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMuc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICByZWZlcmVuY2VWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdGhpcy5zaWduYXR1cmUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbnM7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZU1hdGNoZXMgPSBheGlvbS5tYXRjaFNpZ25hdHVyZSh0aGlzLnNpZ25hdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNCID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXhpb20udW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQSA9IHN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNNYXRjaCA9IHN1YnN0aXR1dGlvbnNBLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0IpO1xuXG4gICAgICAgICAgaWYgKCFzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBU3RyaW5nID0gc3Vic3RpdHV0aW9uc0EuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNCU3RyaW5nID0gc3Vic3RpdHV0aW9uc0IuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFjZShgVEhlIHNpZ25hdHVyZSdzICR7c3Vic3RpdHV0aW9uc0JTdHJpbmd9IHN1YnN0aXR1dGlvbnMgZG8gbm90IGNvcnJlbGF0ZSB3aXRoIHRoZSB1bmlmaWNhdGlvbidzICR7c3Vic3RpdHV0aW9uc0FTdHJpbmd9IHN1YnN0aXR1dGlvbnMuYCk7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2F0aXNmaWVzQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2Vucywgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBkb20sXG4gICAgICAgIHNpZ25hdHVyZU5vZGUgPSBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKSxcbiAgICAgICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwic2lnbmF0dXJlIiwicmVmZXJlbmNlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFNpZ25hdHVyZSIsImdldFJlZmVyZW5jZSIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmVyaWZ5U2lnbmF0dXJlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJkZWJ1ZyIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudCIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic2F0aXNmaWFibGUiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzaWduYXR1cmVNYXRjaGVzIiwibWF0Y2hTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zQiIsInN1YnN0aXR1dGlvbnNBIiwic3Vic3RpdHV0aW9uc01hdGNoIiwic3Vic3RpdHV0aW9uc0FTdHJpbmciLCJhc1N0cmluZyIsInN1YnN0aXR1dGlvbnNCU3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImdldFNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJSZWZlcmVuY2UiLCJkb20iLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJzaWduYXR1cmVGcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwibmFtZSIsIlNpZ25hdHVyZSIsInNpZ25hdHVyZU5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiZnJvbVNpZ25hdHVyZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJEQU5nQjtvRUFJVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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