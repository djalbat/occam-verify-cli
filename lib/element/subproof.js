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
    getLastProofAssertion() {
        return this.subDerivation.getLastProofAssertion();
    }
    getStatements() {
        const lastProofAssertion = this.getLastProofAssertion(), suppositionStatements = this.suppositions.map((supposition)=>{
            const suppositionStatement = supposition.getStatement();
            return suppositionStatement;
        }), lastProofAssertionStatement = lastProofAssertion.getStatement(), statements = [
            ...suppositionStatements,
            lastProofAssertionStatement
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
        await (0, _context.asyncScope)(async (context)=>{
            const suppositionsVerify = await asyncEvery(this.suppositions, async (supposition)=>{
                const suppositionVerifies = await supposition.verify(context);
                if (suppositionVerifies) {
                    const subproofOrProofAssertion = supposition; ////
                    context.assignAssignments(context);
                    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                    return true;
                }
            });
            if (suppositionsVerify) {
                const subDerivationVerifies = await this.subDerivation.verify(context);
                if (subDerivationVerifies) {
                    verifies = true;
                }
            }
        }, context);
        return verifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXN5bmNTY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RQcm9vZkFzc2VydGlvbigpOyB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZBc3NlcnRpb24gPSB0aGlzLmdldExhc3RQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoY29udGV4dCk7XG5cbiAgICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuc3ViRGVyaXZhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYClcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2YgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdWJwcm9vZiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mTm9kZSIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImdldFN0YXRlbWVudHMiLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudHMiLCJtYXAiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJhc3luY1Njb3BlIiwic3VwcG9zaXRpb25zVmVyaWZ5Iiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3ViRGVyaXZhdGlvblZlcmlmaWVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdWJwcm9vZlN0cmluZyIsImdldFN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInRyYWNlIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwic3VicHJvb2YiLCJ1bmlmeVN1YnByb29mIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVArQzswQkFFeEI7eUJBQ0k7QUFFM0IsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsQ0FBRTtRQUM5RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO0lBQzFCO0lBRUFHLG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYTtJQUMzQjtJQUVBRyxrQkFBa0I7UUFDaEIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGVBQWVQLE1BQU8sR0FBRztRQUUvQixPQUFPTztJQUNUO0lBRUFDLHdCQUF3QjtRQUFFLE9BQU8sSUFBSSxDQUFDTixhQUFhLENBQUNNLHFCQUFxQjtJQUFJO0lBRTdFQyxnQkFBZ0I7UUFDZCxNQUFNQyxxQkFBcUIsSUFBSSxDQUFDRixxQkFBcUIsSUFDL0NHLHdCQUF3QixJQUFJLENBQUNWLFlBQVksQ0FBQ1csR0FBRyxDQUFDLENBQUNDO1lBQzdDLE1BQU1DLHVCQUF1QkQsWUFBWUUsWUFBWTtZQUVyRCxPQUFPRDtRQUNULElBQ0FFLDhCQUE4Qk4sbUJBQW1CSyxZQUFZLElBQzdERSxhQUFhO2VBQ1JOO1lBQ0hLO1NBQ0Q7UUFFUCxPQUFPQztJQUNUO0lBRUFDLG1CQUFtQjtRQUNqQixNQUFNQyxpQkFBaUI7UUFFdkIsT0FBT0E7SUFDVDtJQUVBQyxpQkFBaUJDLFNBQVMsRUFBRXZCLE9BQU8sRUFBRTtRQUNuQyxNQUFNd0IsbUJBQW1CO1FBRXpCLE9BQU9BO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPekIsT0FBTyxFQUFFO1FBQ3BCLElBQUkwQixXQUFXO1FBRWYsTUFBTUMsSUFBQUEsbUJBQVUsRUFBQyxPQUFPM0I7WUFDdEIsTUFBTTRCLHFCQUFxQixNQUFNakMsV0FBVyxJQUFJLENBQUNRLFlBQVksRUFBRSxPQUFPWTtnQkFDcEUsTUFBTWMsc0JBQXNCLE1BQU1kLFlBQVlVLE1BQU0sQ0FBQ3pCO2dCQUVyRCxJQUFJNkIscUJBQXFCO29CQUN2QixNQUFNQywyQkFBMkJmLGFBQWMsSUFBSTtvQkFFbkRmLFFBQVErQixpQkFBaUIsQ0FBQy9CO29CQUUxQkEsUUFBUWdDLDJCQUEyQixDQUFDRjtvQkFFcEMsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSUYsb0JBQW9CO2dCQUN0QixNQUFNSyx3QkFBd0IsTUFBTSxJQUFJLENBQUM3QixhQUFhLENBQUNxQixNQUFNLENBQUN6QjtnQkFFOUQsSUFBSWlDLHVCQUF1QjtvQkFDekJQLFdBQVc7Z0JBQ2I7WUFDRjtRQUNGLEdBQUcxQjtRQUVILE9BQU8wQjtJQUNUO0lBRUFRLDRCQUE0QkMsa0JBQWtCLEVBQUVuQyxPQUFPLEVBQUU7UUFDdkQsSUFBSW9DLGdDQUFnQztRQUVwQyxNQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxTQUFTLElBQy9CQywyQkFBMkJKLG1CQUFtQkcsU0FBUztRQUU3RHRDLFFBQVF3QyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVILGVBQWUscUJBQXFCLEVBQUVFLHlCQUF5Qix3QkFBd0IsQ0FBQztRQUV2SCxNQUFNRSxZQUFZTixtQkFBbUJPLFlBQVksSUFDM0NDLFFBQVEzQyxRQUFRNEMsb0JBQW9CLENBQUNIO1FBRTNDLElBQUlFLFVBQVUsTUFBTTtZQUNsQixNQUFNRSxtQkFBbUJGLE1BQU1HLGFBQWE7WUFFNUMsSUFBSUQsa0JBQWtCO2dCQUNwQixNQUFNRSxXQUFXLElBQUksRUFDZnZCLG1CQUFtQm1CLE1BQU1LLGFBQWEsQ0FBQ0QsVUFBVS9DO2dCQUV2RCxJQUFJd0Isa0JBQWtCO29CQUNwQixNQUFNeUIsdUJBQXVCZCxtQkFBbUJlLG9CQUFvQixDQUFDQyxlQUFlbkQ7b0JBRXBGLElBQUlpRCxzQkFBc0I7d0JBQ3hCYixnQ0FBZ0M7b0JBQ2xDO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBLElBQUlBLCtCQUErQjtZQUNqQ3BDLFFBQVFvRCxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRWYsZUFBZSxxQkFBcUIsRUFBRUUseUJBQXlCLHNCQUFzQixDQUFDO1FBQ3pIO1FBRUEsT0FBT0g7SUFDVDtJQUVBLE9BQU9pQixPQUFPLFdBQVc7QUFDM0IifQ==