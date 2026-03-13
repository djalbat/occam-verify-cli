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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXN5bmNSZXN0cmljdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuc3ViRGVyaXZhdGlvbiA9IHN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RQcm9vZkFzc2VydGlvbigpOyB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZBc3NlcnRpb24gPSB0aGlzLmdldExhc3RQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgYXN5bmNSZXN0cmljdChhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdWJEZXJpdmF0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cyhjb250ZXh0KTtcblxuICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdWJEZXJpdmF0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEZXJpdmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnN1YkRlcml2YXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YkRlcml2YXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXhpb20udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29tcGFyZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU3VicHJvb2YiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdXBwb3NpdGlvbnMiLCJzdWJEZXJpdmF0aW9uIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbiIsImdldFN1YnByb29mTm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZk5vZGUiLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJnZXRTdGF0ZW1lbnRzIiwibGFzdFByb29mQXNzZXJ0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN0YXRlbWVudHMiLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInZlcmlmeSIsInZlcmlmaWVzIiwiYXN5bmNSZXN0cmljdCIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb25WZXJpZmllcyIsInZlcmlmeVN1YkRlcml2YXRpb24iLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3VicHJvb2ZTdHJpbmciLCJnZXRTdHJpbmciLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInN1YnByb29mIiwidW5pZnlTdWJwcm9vZiIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQK0M7MEJBRXhCO3lCQUNPO0FBRTlCLE1BQU0sRUFBRUEsVUFBVSxFQUFFLEdBQUdDLHFDQUFxQjtNQUU1QyxXQUFlQyxJQUFBQSxnQkFB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