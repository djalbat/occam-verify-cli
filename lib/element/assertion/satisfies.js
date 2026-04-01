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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzaWduYXR1cmUsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbk5vZGU7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkgeyByZXR1cm4gdGhpcy5zaWduYXR1cmUuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIHNhdGlzZmllc0Fzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlU2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IGFzc2VydGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU2lnbmF0dXJlKGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICAgIHNpZ25hdHVyZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpbm8ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcHRTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXB0U3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSA9IGF4aW9tLmNvbXBhcmVTaWduYXR1cmUodGhpcy5zaWduYXR1cmUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNCID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQSA9IHN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGUgPSBzdWJzdGl0dXRpb25zQS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnNCKTtcblxuICAgICAgICAgIGlmICghc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0FTdHJpbmcgPSBzdWJzdGl0dXRpb25zQS5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0JTdHJpbmcgPSBzdWJzdGl0dXRpb25zQi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUSGUgc2lnbmF0dXJlJ3MgJHtzdWJzdGl0dXRpb25zQlN0cmluZ30gc3Vic3RpdHV0aW9ucyBkbyBub3QgY29ycmVsYXRlIHdpdGggdGhlIHVuaWZpY2F0aW9uJ3MgJHtzdWJzdGl0dXRpb25zQVN0cmluZ30gc3Vic3RpdHV0aW9ucy5gKTtcblxuICAgICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwdFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTYXRpc2ZpZXNBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBuZXcgU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGVwKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RlcC5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4Iiwic2lnbmF0dXJlIiwicmVmZXJlbmNlIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInZhbGlkYXRlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2YWxpZGF0ZVNpZ25hdHVyZSIsInJlZmVyZW5jZVZlcmlmaWVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJzaWduYXR1cmVWYWxpZGF0ZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5Iiwic3RlcHRTdHJpbmciLCJzYXRpc2ZpYWJsZSIsImF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSIsImNvbXBhcmVTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zQiIsInN1YnN0aXR1dGlvbnNBIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSIsInN1YnN0aXR1dGlvbnNBU3RyaW5nIiwiYXNTdHJpbmciLCJzdWJzdGl0dXRpb25zQlN0cmluZyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJpbnN0YW50aWF0ZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24iLCJzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJmcm9tU3RlcCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztrRUFQc0I7MEJBRUM7eUJBQ0s7NkJBQ2tCO3lCQUNrRjs7Ozs7O01BRWhJLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMkJBQTJCQyxrQkFBUztJQUM5RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ2xFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLDRCQUE0QjtRQUMxQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMseUJBQXlCUixNQUFPLEdBQUc7UUFFekMsT0FBT1E7SUFDVDtJQUVBQyxxQkFBcUJDLGNBQWEsRUFBRVosT0FBTyxFQUFFO1FBQUUs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