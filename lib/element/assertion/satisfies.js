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
            signatureValidates = true;
        }
        if (signatureValidates) {
            context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertion's signature.`);
        }
        return signatureValidates;
    }
    validateReference(context) {
        let referenceVerifies;
        const satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertino's reference...`);
        const reference = this.reference.validate(context);
        if (reference !== null) {}
        // const axiom = context.findAxiomByReference(this.reference);
        //
        // if (axiom !== null) {
        //   const axiomSatisfiable = axiom.isSatisfiable();
        //
        //   if (axiomSatisfiable) {
        //     referenceVerifies = true;
        //   }
        // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzaWduYXR1cmUsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbk5vZGU7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkgeyByZXR1cm4gdGhpcy5zaWduYXR1cmUuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgc2F0aXNmaWVzQXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBhc3NlcnRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uJ3Mgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICAgIHNpZ25hdHVyZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpZ25hdHVyZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uJ3Mgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7fVxuXG4gICAgLy8gY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcbiAgICAvL1xuICAgIC8vIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgIC8vICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAvLyAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW5vJ3MgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwdFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcHRTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIHRoaXMuc2lnbmF0dXJlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlID0gYXhpb20uY29tcGFyZVNpZ25hdHVyZSh0aGlzLnNpZ25hdHVyZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0IgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSA9IHN1YnN0aXR1dGlvbnNBLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0IpO1xuXG4gICAgICAgICAgaWYgKCFzdWJzdGl0dXRpb25zQ29ycmVsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQVN0cmluZyA9IHN1YnN0aXR1dGlvbnNBLmFzU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQlN0cmluZyA9IHN1YnN0aXR1dGlvbnNCLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRIZSBzaWduYXR1cmUncyAke3N1YnN0aXR1dGlvbnNCU3RyaW5nfSBzdWJzdGl0dXRpb25zIGRvIG5vdCBjb3JyZWxhdGUgd2l0aCB0aGUgdW5pZmljYXRpb24ncyAke3N1YnN0aXR1dGlvbnNBU3RyaW5nfSBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXB0U3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNhdGlzZmllc0Fzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGVwLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzaWduYXR1cmUiLCJyZWZlcmVuY2UiLCJnZXRTaWduYXR1cmUiLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwidmFsaWRhdGUiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJzaWduYXR1cmVWZXJpZmllcyIsInZhbGlkYXRlU2lnbmF0dXJlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInNpZ25hdHVyZVZhbGlkYXRlcyIsInVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdGVwdFN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUiLCJjb21wYXJlU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9uc0IiLCJzdWJzdGl0dXRpb25zQSIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGUiLCJzdWJzdGl0dXRpb25zQVN0cmluZyIsImFzU3RyaW5nIiwic3Vic3RpdHV0aW9uc0JTdHJpbmciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiaW5zdGFudGlhdGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImluc3RhbnRpYXRlU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZnJvbVN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7a0VBUHNCOzBCQUVDO3lCQUNLOzZCQUNrQjt5QkFDa0Y7Ozs7OztNQUVoSSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDJCQUEyQkMsa0JBQVM7SUFDOUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFB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