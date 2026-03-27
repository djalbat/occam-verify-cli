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
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _context = require("../utilities/context");
const { asyncEvery } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Subproof extends _occamlanguages.Element {
    constructor(context, string, node, suppositions, subDerivation){
        super(context, string, node);
        this.suppositions = suppositions;
        this.subDerivation = subDerivation;
    }
    getSuppositions() {
        return this.suppositions;
    }
    getSubDerivation() {
        return this.subDerivation;
    }
    getSubproofNode() {
        const node = this.getNode(), subproofNode = node; ///
        return subproofNode;
    }
    getLastStep() {
        return this.subDerivation.getLastStep();
    }
    getStatements() {
        const lastStep = this.getLastStep(), suppositionStatements = this.suppositions.map((supposition)=>{
            const suppositionStatement = supposition.getStatement();
            return suppositionStatement;
        }), lastStepStatement = lastStep.getStatement(), statements = [
            ...suppositionStatements,
            lastStepStatement
        ];
        return statements;
    }
    isProofAssertion() {
        const proofAssertion = false;
        return proofAssertion;
    }
    compareStep(step, context) {
        const comparesToStep = false;
        return comparesToStep;
    }
    async verify(context) {
        let verifies = false;
        await (0, _context.enclose)(async (context)=>{
            const suppositionsVerify = await this.verifySuppositions(context);
            if (suppositionsVerify) {
                const subDerivationVerifies = await this.verifySubDerivation(context);
                if (subDerivationVerifies) {
                    verifies = true;
                }
            }
        }, context);
        return verifies;
    }
    async verifySupposition(supposition, context) {
        const suppositionVerifies = await supposition.verify(context);
        if (suppositionVerifies) {
            const subproofOrProofAssertion = supposition; ////
            context.assignAssignments(context);
            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
        }
        return suppositionVerifies;
    }
    async verifySuppositions(context) {
        let suppositionsVerify;
        suppositionsVerify = await asyncEvery(this.suppositions, async (supposition)=>{
            const suppositionVerifies = await this.verifySupposition(supposition, context);
            if (suppositionVerifies) {
                return true;
            }
        });
        return suppositionsVerify;
    }
    async verifySubDerivation(context) {
        const subDerivationVerifies = await this.subDerivation.verify(context);
        return subDerivationVerifies;
    }
    unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
        let unifiesWithSatisfiesAssertion = false;
        const subproofString = this.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
        context.trace(`Unifying the '${subproofString}' subproof with the '${satisfiesAssertionString}' satisfies assertion...`);
        const reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
        if (axiom !== null) {
            const axiomSatisfiable = axiom.isSatisfiable();
            if (axiomSatisfiable) {
                const subproof = this, statementUnifies = axiom.unifySubproof(subproof, context);
                if (statementUnifies) {
                    const substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                    if (substitutionsCompare) {
                        unifiesWithSatisfiesAssertion = true;
                    }
                }
            }
        }
        if (unifiesWithSatisfiesAssertion) {
            context.debug(`...unified the '${subproofString}' subproof with the '${satisfiesAssertionString}' satisfies assertion.`);
        }
        return unifiesWithSatisfiesAssertion;
    }
    static name = "Subproof";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7IHJldHVybiB0aGlzLnN1YkRlcml2YXRpb24uZ2V0TGFzdFN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgbGFzdFN0ZXAgPSB0aGlzLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uU3RhdGVtZW50O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50XG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgaXNQcm9vZkFzc2VydGlvbigpIHtcbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9TdGVwID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0ZXA7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdWJEZXJpdmF0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cyhjb250ZXh0KTtcblxuICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdWJEZXJpdmF0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEZXJpdmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnN1YkRlcml2YXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YkRlcml2YXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXhpb20udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29tcGFyZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU3VicHJvb2YiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdXBwb3NpdGlvbnMiLCJzdWJEZXJpdmF0aW9uIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbiIsImdldFN1YnByb29mTm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZk5vZGUiLCJnZXRMYXN0U3RlcCIsImdldFN0YXRlbWVudHMiLCJsYXN0U3RlcCIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0U3RlcFN0YXRlbWVudCIsInN0YXRlbWVudHMiLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJjb21wYXJlU3RlcCIsInN0ZXAiLCJjb21wYXJlc1RvU3RlcCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZW5jbG9zZSIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb25WZXJpZmllcyIsInZlcmlmeVN1YkRlcml2YXRpb24iLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJnZXRTdHJpbmciLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInN1YnByb29mIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJzdWJzdGl0dXRpb25zQ29tcGFyZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUCtDOzBCQUV4Qjt5QkFDQztBQUV4QixNQUFNLEVBQUVBLFVBQVUsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFNUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxDQUFFO1FBQzlELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFF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