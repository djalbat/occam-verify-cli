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
    compareStatement(statement, context) {
        const statementUnifies = false;
        return statementUnifies;
    }
    async verify(context) {
        let verifies = false;
        await (0, _context.asyncRestrict)(async (context)=>{
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
        const reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXN5bmNSZXN0cmljdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7IHJldHVybiB0aGlzLnN1YkRlcml2YXRpb24uZ2V0TGFzdFN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgbGFzdFN0ZXAgPSB0aGlzLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uU3RhdGVtZW50O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50XG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgaXNQcm9vZkFzc2VydGlvbigpIHtcbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCBhc3luY1Jlc3RyaWN0KGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBzdWJEZXJpdmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVN1YkRlcml2YXRpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVmVyaWZ5O1xuXG4gICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1YkRlcml2YXRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuc3ViRGVyaXZhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3ViRGVyaXZhdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYClcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2YgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdWJwcm9vZiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mTm9kZSIsImdldExhc3RTdGVwIiwiZ2V0U3RhdGVtZW50cyIsImxhc3RTdGVwIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJhc3luY1Jlc3RyaWN0Iiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvblZlcmlmaWVzIiwidmVyaWZ5U3ViRGVyaXZhdGlvbiIsInZlcmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsImdldFN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInRyYWNlIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwic3VicHJvb2YiLCJ1bmlmeVN1YnByb29mIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVArQzswQkFFeEI7eUJBQ087QUFFOUIsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsQ0FB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