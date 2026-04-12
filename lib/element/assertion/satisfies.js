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
const _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
const _elements = require("../../elements");
const _context = require("../../utilities/context");
const _instantiate = require("../../process/instantiate");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class SatisfiesAssertion extends _assertion.default {
    constructor(context, string, node, lineIndex, signature, reference){
        super(context, string, node, lineIndex);
        this.signature = signature;
        this.reference = reference;
    }
    getSignature() {
        return this.signature;
    }
    getReference() {
        return this.reference;
    }
    getSatisfiesAssertionNode() {
        const node = this.getNode(), satisfiesAssertionNode = node; ///
        return satisfiesAssertionNode;
    }
    compareSubstitutions(substitutions1, context) {
        return this.signature.compareSubstitutions(substitutions1, context);
    }
    correlateSubstitutions(substitutions1, context) {
        return this.signature.correlateSubstitutions(substitutions1, context);
    }
    validate(context) {
        let satisfiesAssertion = null;
        const satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertion...`);
        let validates = true;
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            validates = true;
            satisfiesAssertion = validAssertion; ///
            context.debug(`...the '${satisfiesAssertionString}' satisfies satisfiesAssertion is already valid.`);
        } else {
            const signatureVerifies = this.validateSignature(context);
            if (signatureVerifies) {
                const referenceVerifies = this.validateReference(context);
                if (referenceVerifies) {
                    validates = true;
                }
                validates = true;
            }
            if (validates) {
                const assertion = this; ///
                satisfiesAssertion = assertion; ///
                context.addAssertion(satisfiesAssertion);
            }
        }
        if (validates) {
            context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertion.`);
        }
        return satisfiesAssertion;
    }
    validateSignature(context) {
        let signatureValidates = false;
        const satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertion's signature...`);
        const signature = this.signature.validate(context);
        if (signature !== null) {
            this.signature = signature;
            signatureValidates = true;
        }
        if (signatureValidates) {
            context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertion's signature.`);
        }
        return signatureValidates;
    }
    validateReference(context) {
        let referenceVerifies = false;
        const satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertino's reference...`);
        const reference = this.reference.validate(context);
        if (reference !== null) {
            const axiom = context.findAxiomByReference(reference);
            if (axiom !== null) {
                const satisfiable = axiom.isSatisfiable();
                if (satisfiable) {
                    const signatureUnifies = axiom.unifySignature(this.signature, context);
                    if (signatureUnifies) {
                        this.reference = reference;
                        referenceVerifies = true;
                    }
                } else {
                    const axiomString = axiom.getString();
                    context.debug(`The '${axiomString}' axiom is not satisfiable.`);
                }
            } else {
                const referencdString = reference.getString();
                context.debug(`There is no axiom for the '${referencdString}' reference.`);
            }
        }
        if (referenceVerifies) {
            context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertino's reference.`);
        }
        return referenceVerifies;
    }
    unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context) {
        let stepAndSubproofOrProofAssertionsUnify = false;
        const steptString = step.getString(), satisfiesAssertionString = this.getString(); ///
        context.trace(`Unifying the '${steptString}' step with the '${satisfiesAssertionString}' satisfies assertion...`);
        this.signature.validate(context);
        const axiom = context.findAxiomByReference(this.reference), satisfiable = axiom.isSatisfiable();
        if (satisfiable) {
            const axiomComparesToSignature = axiom.compareSignature(this.signature, context);
            if (axiomComparesToSignature) {
                const substitutionsB = substitutions; ///
                stepAndSubproofOrProofAssertionsUnify = unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);
                if (stepAndSubproofOrProofAssertionsUnify) {
                    const substitutionsA = substitutions, substitutionsCorrelate = substitutionsA.correlateSubstitutions(substitutionsB);
                    if (!substitutionsCorrelate) {
                        const substitutionsAString = substitutionsA.asString(), substitutionsBString = substitutionsB.asString();
                        context.trace(`THe signature's ${substitutionsBString} substitutions do not correlate with the unification's ${substitutionsAString} substitutions.`);
                        stepAndSubproofOrProofAssertionsUnify = false;
                    }
                }
            }
        }
        if (stepAndSubproofOrProofAssertionsUnify) {
            context.debug(`...unified the '${steptString}' step with the '${satisfiesAssertionString}' satisfies assertion.`);
        }
        return stepAndSubproofOrProofAssertionsUnify;
    }
    static name = "SatisfiesAssertion";
    static fromJSON(json, context) {
        let satisfiesAssertion = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, definedAssertionNode = (0, _instantiate.instantiateSatisfiesAssertion)(string, context), node = definedAssertionNode, signature = (0, _element.signatureFromJSatisfiesAssertionNode)(definedAssertionNode, context), reference = (0, _element.referenceFromJSatisfiesAssertionNode)(definedAssertionNode, context);
                context = null;
                satisfiesAssertion = new SatisfiesAssertion(context, string, node, lineIndex, signature, reference);
            }, context);
        }
        return satisfiesAssertion;
    }
    static fromStep(step, context) {
        const statementNode = step.getStatementNode(), satisfiesAssertion = (0, _element.satisfiesAssertionFromStatementNode)(statementNode, context);
        return satisfiesAssertion;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), satisfiesAssertion = (0, _element.satisfiesAssertionFromStatementNode)(statementNode, context);
        return satisfiesAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzaWduYXR1cmUsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbk5vZGU7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkgeyByZXR1cm4gdGhpcy5zaWduYXR1cmUuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgc2F0aXNmaWVzQXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBhc3NlcnRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uJ3Mgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuXG4gICAgICBzaWduYXR1cmVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaWduYXR1cmVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbidzIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZVVuaWZpZXMgPSBheGlvbS51bmlmeVNpZ25hdHVyZSh0aGlzLnNpZ25hdHVyZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2lnbmF0dXJlVW5pZmllcykge1xuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGlzIG5vdCBzYXRpc2ZpYWJsZS5gKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZlcmVuY2RTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8gYXhpb20gZm9yIHRoZSAnJHtyZWZlcmVuY2RTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpbm8ncyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXB0U3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwdFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdGhpcy5zaWduYXR1cmUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUgPSBheGlvbS5jb21wYXJlU2lnbmF0dXJlKHRoaXMuc2lnbmF0dXJlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQiA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgICAgIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0EgPSBzdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQ29ycmVsYXRlID0gc3Vic3RpdHV0aW9uc0EuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zQik7XG5cbiAgICAgICAgICBpZiAoIXN1YnN0aXR1dGlvbnNDb3JyZWxhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBU3RyaW5nID0gc3Vic3RpdHV0aW9uc0EuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNCU3RyaW5nID0gc3Vic3RpdHV0aW9uc0IuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFjZShgVEhlIHNpZ25hdHVyZSdzICR7c3Vic3RpdHV0aW9uc0JTdHJpbmd9IHN1YnN0aXR1dGlvbnMgZG8gbm90IGNvcnJlbGF0ZSB3aXRoIHRoZSB1bmlmaWNhdGlvbidzICR7c3Vic3RpdHV0aW9uc0FTdHJpbmd9IHN1YnN0aXR1dGlvbnMuYCk7XG5cbiAgICAgICAgICAgIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcHRTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2F0aXNmaWVzQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc2lnbmF0dXJlLCByZWZlcmVuY2UpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RlcChzdGVwLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInNpZ25hdHVyZSIsInJlZmVyZW5jZSIsImdldFNpZ25hdHVyZSIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ2YWxpZGF0ZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmFsaWRhdGVTaWduYXR1cmUiLCJyZWZlcmVuY2VWZXJpZmllcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwic2lnbmF0dXJlVmFsaWRhdGVzIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsInNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZVVuaWZpZXMiLCJ1bmlmeVNpZ25hdHVyZSIsImF4aW9tU3RyaW5nIiwicmVmZXJlbmNkU3RyaW5nIiwidW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXAiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN0ZXB0U3RyaW5nIiwiYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlIiwiY29tcGFyZVNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnNCIiwic3Vic3RpdHV0aW9uc0EiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlIiwic3Vic3RpdHV0aW9uc0FTdHJpbmciLCJhc1N0cmluZyIsInN1YnN0aXR1dGlvbnNCU3RyaW5nIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImluc3RhbnRpYXRlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImZyb21TdGVwIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2tFQVBzQjswQkFFQzt5QkFDSzs2QkFDa0I7eUJBQ2tGOzs7Ozs7TUFFaEksV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLGtCQUFTO0lBQzlELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUU7UUFDbEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsNEJBQTRCO1FBQzFCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyx5QkFBeUJSLE1BQU8sR0FBRztRQUV6QyxPQUFPUTtJQUNUO0lBRUFDLHFCQUFxQkMsY0FBYSxFQUFFWixP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