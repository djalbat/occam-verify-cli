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
    toJSON() {
        const json = super.toJSON();
        return json;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzaWduYXR1cmUsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbk5vZGU7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkgeyByZXR1cm4gdGhpcy5zaWduYXR1cmUuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIHNhdGlzZmllc0Fzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlU2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IGFzc2VydGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU2lnbmF0dXJlKGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICAgIHNpZ25hdHVyZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpbm8ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcHRTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXB0U3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSA9IGF4aW9tLmNvbXBhcmVTaWduYXR1cmUodGhpcy5zaWduYXR1cmUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNCID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQSA9IHN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGUgPSBzdWJzdGl0dXRpb25zQS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnNCKTtcblxuICAgICAgICAgIGlmICghc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0FTdHJpbmcgPSBzdWJzdGl0dXRpb25zQS5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0JTdHJpbmcgPSBzdWJzdGl0dXRpb25zQi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUSGUgc2lnbmF0dXJlJ3MgJHtzdWJzdGl0dXRpb25zQlN0cmluZ30gc3Vic3RpdHV0aW9ucyBkbyBub3QgY29ycmVsYXRlIHdpdGggdGhlIHVuaWZpY2F0aW9uJ3MgJHtzdWJzdGl0dXRpb25zQVN0cmluZ30gc3Vic3RpdHV0aW9ucy5gKTtcblxuICAgICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwdFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gc3VwZXIudG9KU09OKCk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTYXRpc2ZpZXNBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGVwLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzaWduYXR1cmUiLCJyZWZlcmVuY2UiLCJnZXRTaWduYXR1cmUiLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwidmFsaWRhdGUiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJzaWduYXR1cmVWZXJpZmllcyIsInZhbGlkYXRlU2lnbmF0dXJlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInNpZ25hdHVyZVZhbGlkYXRlcyIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdGVwdFN0cmluZyIsInNhdGlzZmlhYmxlIiwiYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlIiwiY29tcGFyZVNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnNCIiwic3Vic3RpdHV0aW9uc0EiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlIiwic3Vic3RpdHV0aW9uc0FTdHJpbmciLCJhc1N0cmluZyIsInN1YnN0aXR1dGlvbnNCU3RyaW5nIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImZyb21TdGVwIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2tFQVBzQjswQkFFQzt5QkFDSzs2QkFDa0I7eUJBQ2tGOzs7Ozs7TUFFaEksV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLGtCQUFTO0lBQzlELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUU7UUFDbEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsNEJBQTRCO1FBQzFCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyx5QkFBeUJSLE1BQU8sR0FBRztRQUV6QyxPQUFPUTtJQUNUO0lBRUFDLHFCQUFxQkMsY0FBYSxFQUFFWixPQUFPLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ0ksU0FBUyxDQUFDTyxvQkFBb0IsQ0FBQ0MsZ0JBQWVaO0lBQVU7SUFFbkhhLHVCQUF1QkQsY0FBYSxFQUFFWixPQUFPLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ0ksU0FBUyxDQUFDUyxzQkFBc0IsQ0FBQ0QsZ0JBQWVaO0lBQVU7SUFFdkhjLFNBQVNkLE9BQU8sRUFBRTtRQUNoQixJQUFJZSxxQkFBcUI7UUFFekIsTUFBTUMsMkJBQTJCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFdERqQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHlCQUF5Qix3QkFBd0IsQ0FBQztRQUVuRixNQUFNRyxpQkFBaUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ3BCO1FBRS9DLElBQUltQixnQkFBZ0I7WUFDbEJKLHFCQUFxQkksZ0JBQWdCLEdBQUc7WUFFeENuQixRQUFRcUIsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFTCx5QkFBeUIsZ0RBQWdELENBQUM7UUFDckcsT0FBTztZQUNMLElBQUlNLFlBQVk7WUFFaEIsTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MsaUJBQWlCLENBQUN4QjtZQUVqRCxJQUFJdUIsbUJBQW1CO2dCQUNyQixNQUFNRSxvQkFBb0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQzFCO2dCQUVqRCxJQUFJeUIsbUJBQW1CO29CQUNyQkgsWUFBWTtnQkFDZDtnQkFFQUEsWUFBWTtZQUNkO1lBRUEsSUFBSUEsV0FBVztnQkFDYixNQUFNSyxZQUFZLElBQUksRUFBRSxHQUFHO2dCQUUzQloscUJBQXFCWSxXQUFXLEdBQUc7Z0JBRW5DM0IsUUFBUTRCLFlBQVksQ0FBQ2I7Z0JBRXJCZixRQUFRcUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLHlCQUF5QixzQkFBc0IsQ0FBQztZQUNyRjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBUyxrQkFBa0J4QixPQUFPLEVBQUU7UUFDekIsSUFBSTZCLHFCQUFxQjtRQUV6QixNQUFNekIsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ1UsUUFBUSxDQUFDZDtRQUUxQyxJQUFJSSxjQUFjLE1BQU07WUFDdEJ5QixxQkFBcUI7UUFDdkI7UUFFQSxPQUFPQTtJQUNUO0lBRUFILGtCQUFrQjFCLE9BQU8sRUFBRTtRQUN6QixJQUFJeUIsb0JBQW9CO1FBRXhCLE1BQU1LLGtCQUFrQixJQUFJLENBQUN6QixTQUFTLENBQUNZLFNBQVMsSUFDMUNELDJCQUEyQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRXZEakIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix5QkFBeUIseUJBQXlCLEVBQUVjLGdCQUFnQixjQUFjLENBQUM7UUFFcEgsTUFBTUMsUUFBUS9CLFFBQVFnQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMzQixTQUFTO1FBRXpELElBQUkwQixVQUFVLE1BQU07WUFDbEIsTUFBTUUsbUJBQW1CRixNQUFNRyxhQUFhO1lBRTVDLElBQUlELGtCQUFrQjtnQkFDcEJSLG9CQUFvQjtZQUN0QjtRQUNGO1FBRUEsSUFBSUEsbUJBQW1CO1lBQ3JCekIsUUFBUXFCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTCx5QkFBeUIseUJBQXlCLEVBQUVjLGdCQUFnQixZQUFZLENBQUM7UUFDdEg7UUFFQSxPQUFPTDtJQUNUO0lBRUFVLHNDQUFzQ0MsSUFBSSxFQUFFQyx5QkFBeUIsRUFBRXJDLE9BQU8sRUFBRTtRQUM5RSxJQUFJc0Msd0NBQXdDO1FBRTVDLE1BQU1DLGNBQWNILEtBQUtuQixTQUFTLElBQzVCRCwyQkFBMkIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV0RGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVxQixZQUFZLGlCQUFpQixFQUFFdkIseUJBQXlCLHdCQUF3QixDQUFDO1FBRWhILElBQUksQ0FBQ1osU0FBUyxDQUFDVSxRQUFRLENBQUNkO1FBRXhCLE1BQU0rQixRQUFRL0IsUUFBUWdDLG9CQUFvQixDQUFDLElBQUksQ0FBQzNCLFNBQVMsR0FDbkRtQyxjQUFjVCxNQUFNRyxhQUFhO1FBRXZDLElBQUlNLGFBQWE7WUFDZixNQUFNQywyQkFBMkJWLE1BQU1XLGdCQUFnQixDQUFDLElBQUksQ0FBQ3RDLFNBQVMsRUFBRUo7WUFFeEUsSUFBSXlDLDBCQUEwQjtnQkFDNUIsTUFBTUUsaUJBQWlCL0IsZUFBZSxHQUFHO2dCQUV6QzBCLHdDQUF3Q0gsc0NBQXNDQyxNQUFNQywyQkFBMkJyQztnQkFFL0csSUFBSXNDLHVDQUF1QztvQkFDekMsTUFBTU0saUJBQWlCaEMsZUFDakJpQyx5QkFBeUJELGVBQWUvQixzQkFBc0IsQ0FBQzhCO29CQUVyRSxJQUFJLENBQUNFLHdCQUF3Qjt3QkFDM0IsTUFBTUMsdUJBQXVCRixlQUFlRyxRQUFRLElBQzlDQyx1QkFBdUJMLGVBQWVJLFFBQVE7d0JBRXBEL0MsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFOEIscUJBQXFCLHVEQUF1RCxFQUFFRixxQkFBcUIsZUFBZSxDQUFDO3dCQUVwSlIsd0NBQXdDO29CQUMxQztnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxJQUFJQSx1Q0FBdUM7WUFDekN0QyxRQUFRcUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVrQixZQUFZLGlCQUFpQixFQUFFdkIseUJBQXlCLHNCQUFzQixDQUFDO1FBQ2xIO1FBRUEsT0FBT3NCO0lBQ1Q7SUFFQVcsU0FBUztRQUNQLE1BQU1DLE9BQU8sS0FBSyxDQUFDRDtRQUVuQixPQUFPQztJQUNUO0lBRUEsT0FBT0MsT0FBTyxxQkFBcUI7SUFFbkMsT0FBT0MsU0FBU0YsSUFBSSxFQUFFbEQsT0FBTyxFQUFFO1FBQzdCLElBQUllLHFCQUFxQjtRQUV6QixNQUFNLEVBQUVvQyxJQUFJLEVBQUUsR0FBR0Q7UUFFakIsSUFBSSxJQUFJLENBQUNDLElBQUksS0FBS0EsTUFBTTtZQUN0QkUsSUFBQUEsb0JBQVcsRUFBQyxDQUFDckQ7Z0JBQWEsTUFBTSxFQUFFQyxNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHK0MsTUFDaERJLHVCQUF1QkMsSUFBQUEsMENBQTZCLEVBQUN0RCxRQUFRRCxVQUM3REUsT0FBT29ELHNCQUNQbEQsWUFBWW9ELElBQUFBLDZDQUFvQyxFQUFDRixzQkFBc0J0RCxVQUN2RUssWUFBWW9ELElBQUFBLDZDQUFvQyxFQUFDSCxzQkFBc0J0RDtnQkFFN0VBLFVBQVU7Z0JBRVZlLHFCQUFxQixJQUFJakIsbUJBQW1CRSxTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQyxXQUFXQztZQUMzRixHQUFHTDtRQUNMO1FBRUEsT0FBT2U7SUFDVDtJQUVBLE9BQU8yQyxTQUFTdEIsSUFBSSxFQUFFcEMsT0FBTyxFQUFFO1FBQzdCLE1BQU0yRCxnQkFBZ0J2QixLQUFLd0IsZ0JBQWdCLElBQ3pDN0MscUJBQXFCOEMsSUFBQUEsNENBQW1DLEVBQUNGLGVBQWUzRDtRQUUxRSxPQUFPZTtJQUNUO0lBRUEsT0FBTytDLGNBQWNDLFNBQVMsRUFBRS9ELE9BQU8sRUFBRTtRQUN2QyxNQUFNMkQsZ0JBQWdCSSxVQUFVdEQsT0FBTyxJQUNqQ00scUJBQXFCOEMsSUFBQUEsNENBQW1DLEVBQUNGLGVBQWUzRDtRQUU5RSxPQUFPZTtJQUNUO0FBQ0YifQ==