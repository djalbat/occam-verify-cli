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
    constructor(context, string, node, signature, reference){
        super(context, string, node);
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
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            satisfiesAssertion = validAssertion; ///
            context.debug(`...the '${satisfiesAssertionString}' satisfies satisfiesAssertion is already valid.`);
        } else {
            let validates = true;
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
                context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertion.`);
            }
        }
        return satisfiesAssertion;
    }
    validateSignature(context) {
        let signatureValidates = false;
        const signature = this.signature.validate(context);
        if (signature !== null) {
            signatureValidates = true;
        }
        return signatureValidates;
    }
    validateReference(context) {
        let referenceVerifies = false;
        const referenceString = this.reference.getString(), satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference...`);
        const axiom = context.findAxiomByReference(this.reference);
        if (axiom !== null) {
            const axiomSatisfiable = axiom.isSatisfiable();
            if (axiomSatisfiable) {
                referenceVerifies = true;
            }
        }
        if (referenceVerifies) {
            context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference.`);
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
                const { string } = json, definedAssertionNode = (0, _instantiate.instantiateSatisfiesAssertion)(string, context), node = definedAssertionNode, signature = (0, _element.signatureFromJSatisfiesAssertionNode)(definedAssertionNode, context), reference = (0, _element.referenceFromJSatisfiesAssertionNode)(definedAssertionNode, context);
                context = null;
                satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgc2F0aXNmaWVzQXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmFsaWRhdGVTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVWZXJpZmllcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduYXR1cmUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuc2lnbmF0dXJlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZSAhPT0gbnVsbCkge1xuICAgICAgc2lnbmF0dXJlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW5vJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwdFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcHRTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIHRoaXMuc2lnbmF0dXJlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlID0gYXhpb20uY29tcGFyZVNpZ25hdHVyZSh0aGlzLnNpZ25hdHVyZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0IgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSA9IHN1YnN0aXR1dGlvbnNBLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0IpO1xuXG4gICAgICAgICAgaWYgKCFzdWJzdGl0dXRpb25zQ29ycmVsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQVN0cmluZyA9IHN1YnN0aXR1dGlvbnNBLmFzU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQlN0cmluZyA9IHN1YnN0aXR1dGlvbnNCLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRIZSBzaWduYXR1cmUncyAke3N1YnN0aXR1dGlvbnNCU3RyaW5nfSBzdWJzdGl0dXRpb25zIGRvIG5vdCBjb3JyZWxhdGUgd2l0aCB0aGUgdW5pZmljYXRpb24ncyAke3N1YnN0aXR1dGlvbnNBU3RyaW5nfSBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXB0U3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNhdGlzZmllc0Fzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge2NvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGVwKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcC5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic2lnbmF0dXJlIiwicmVmZXJlbmNlIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInZhbGlkYXRlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2YWxpZGF0ZVNpZ25hdHVyZSIsInJlZmVyZW5jZVZlcmlmaWVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJzaWduYXR1cmVWYWxpZGF0ZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5Iiwic3RlcHRTdHJpbmciLCJzYXRpc2ZpYWJsZSIsImF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSIsImNvbXBhcmVTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zQiIsInN1YnN0aXR1dGlvbnNBIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSIsInN1YnN0aXR1dGlvbnNBU3RyaW5nIiwiYXNTdHJpbmciLCJzdWJzdGl0dXRpb25zQlN0cmluZyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJpbnN0YW50aWF0ZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24iLCJzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJmcm9tU3RlcCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztrRUFQc0I7MEJBRUM7eUJBQ0s7NkJBQ2tCO3lCQUNrRjs7Ozs7O01BRWhJLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMkJBQTJCQyxrQkFBUztJQUM5RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyw0QkFBNEI7UUFDMUIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLHlCQUF5QlAsTUFBTyxHQUFHO1FBRXpDLE9BQU9PO0lBQ1Q7SUFFQUMscUJBQXFCQyxjQUFhLEVBQUVYLE9BQU8sRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDRyxTQUFTLENBQUNPLG9CQUFvQixDQUFDQyxnQkFBZVg7SUFBVTtJQUVuSFksdUJBQXVCRCxjQUFhLEVBQUVYLE9BQU8s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