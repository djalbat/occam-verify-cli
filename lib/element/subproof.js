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
                const subproof = this, substitutions = [], statementUnifies = axiom.unifySubproof(subproof, substitutions, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXN5bmNTY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RQcm9vZkFzc2VydGlvbigpOyB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZBc3NlcnRpb24gPSB0aGlzLmdldExhc3RQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoY29udGV4dCk7XG5cbiAgICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuc3ViRGVyaXZhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YkRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYClcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2YgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZlwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlN1YnByb29mIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvbiIsImdldFN1cHBvc2l0aW9ucyIsImdldFN1YkRlcml2YXRpb24iLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZOb2RlIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwiZ2V0U3RhdGVtZW50cyIsImxhc3RQcm9vZkFzc2VydGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwiY29tcGFyZVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImFzeW5jU2NvcGUiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJEZXJpdmF0aW9uVmVyaWZpZXMiLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwiZ2V0U3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmeVN1YnByb29mIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUCtDOzBCQUV4Qjt5QkFDSTtBQUUzQixNQUFNLEVBQUVBLFVBQVUsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFNUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxDQUFFO1FBQzlELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtJQUN2QjtJQUVBQyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7SUFDMUI7SUFFQUcsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDRixhQUFhO0lBQzNCO0lBRUFHLGtCQUFrQjtRQUNoQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsZUFBZVAsTUFBTyxHQUFHO1FBRS9CLE9BQU9PO0lBQ1Q7SUFFQUMsd0JBQXdCO1FBQUUsT0FBTyxJQUFJLENBQUNOLGFBQWEsQ0FBQ00scUJBQXFCO0lBQUk7SUFFN0VDLGdCQUFnQjtRQUNkLE1BQU1DLHFCQUFxQixJQUFJLENBQUNGLHFCQUFxQixJQUMvQ0csd0JBQXdCLElBQUksQ0FBQ1YsWUFBWSxDQUFDVyxHQUFHLENBQUMsQ0FBQ0M7WUFDN0MsTUFBTUMsdUJBQXVCRCxZQUFZRSxZQUFZO1lBRXJELE9BQU9EO1FBQ1QsSUFDQUUsOEJBQThCTixtQkFBbUJLLFlBQVksSUFDN0RFLGFBQWE7ZUFDUk47WUFDSEs7U0FDRDtRQUVQLE9BQU9DO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1DLGlCQUFpQjtRQUV2QixPQUFPQTtJQUNUO0lBRUFDLGlCQUFpQkMsU0FBUyxFQUFFdkIsT0FBTyxFQUFFO1FBQ25DLE1BQU13QixtQkFBbUI7UUFFekIsT0FBT0E7SUFDVDtJQUVBLE1BQU1DLE9BQU96QixPQUFPLEVBQUU7UUFDcEIsSUFBSTBCLFdBQVc7UUFFZixNQUFNQyxJQUFBQSxtQkFBVSxFQUFDLE9BQU8zQjtZQUN0QixNQUFNNEIscUJBQXFCLE1BQU1qQyxXQUFXLElBQUksQ0FBQ1EsWUFBWSxFQUFFLE9BQU9ZO2dCQUNwRSxNQUFNYyxzQkFBc0IsTUFBTWQsWUFBWVUsTUFBTSxDQUFDekI7Z0JBRXJELElBQUk2QixxQkFBcUI7b0JBQ3ZCLE1BQU1DLDJCQUEyQmYsYUFBYyxJQUFJO29CQUVuRGYsUUFBUStCLGlCQUFpQixDQUFDL0I7b0JBRTFCQSxRQUFRZ0MsMkJBQTJCLENBQUNGO29CQUVwQyxPQUFPO2dCQUNUO1lBQ0Y7WUFFQSxJQUFJRixvQkFBb0I7Z0JBQ3RCLE1BQU1LLHdCQUF3QixNQUFNLElBQUksQ0FBQzdCLGFBQWEsQ0FBQ3FCLE1BQU0sQ0FBQ3pCO2dCQUU5RCxJQUFJaUMsdUJBQXVCO29CQUN6QlAsV0FBVztnQkFDYjtZQUNGO1FBQ0YsR0FBRzFCO1FBRUgsT0FBTzBCO0lBQ1Q7SUFFQVEsNEJBQTRCQyxrQkFBa0IsRUFBRW5DLE9BQU8sRUFBRTtRQUN2RCxJQUFJb0MsZ0NBQWdDO1FBRXBDLE1BQU1DLGlCQUFpQixJQUFJLENBQUNDLFNBQVMsSUFDL0JDLDJCQUEyQkosbUJBQW1CRyxTQUFTO1FBRTdEdEMsUUFBUXdDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUgsZUFBZSxxQkFBcUIsRUFBRUUseUJBQXlCLHdCQUF3QixDQUFDO1FBRXZILE1BQU1FLFlBQVlOLG1CQUFtQk8sWUFBWSxJQUMzQ0MsUUFBUTNDLFFBQVE0QyxvQkFBb0IsQ0FBQ0g7UUFFM0MsSUFBSUUsVUFBVSxNQUFNO1lBQ2xCLE1BQU1FLG1CQUFtQkYsTUFBTUcsYUFBYTtZQUU1QyxJQUFJRCxrQkFBa0I7Z0JBQ3BCLE1BQU1FLFdBQVcsSUFBSSxFQUNmQyxnQkFBZ0IsRUFBRSxFQUNsQnhCLG1CQUFtQm1CLE1BQU1NLGFBQWEsQ0FBQ0YsVUFBVUMsZUFBZWhEO2dCQUV0RSxJQUFJd0Isa0JBQWtCO29CQUNwQixNQUFNMEIsdUJBQXVCZixtQkFBbUJnQixvQkFBb0IsQ0FBQ0gsZUFBZWhEO29CQUVwRixJQUFJa0Qsc0JBQXNCO3dCQUN4QmQsZ0NBQWdDO29CQUNsQztnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxJQUFJQSwrQkFBK0I7WUFDakNwQyxRQUFRb0QsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVmLGVBQWUscUJBQXFCLEVBQUVFLHlCQUF5QixzQkFBc0IsQ0FBQztRQUN6SDtRQUVBLE9BQU9IO0lBQ1Q7SUFFQSxPQUFPaUIsT0FBTyxXQUFXO0FBQzNCIn0=