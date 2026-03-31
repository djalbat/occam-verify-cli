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
    constructor(context, string, node, lineIndex, suppositions, subDerivation){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLnN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldFN1YkRlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFN1YnByb29mTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldExhc3RTdGVwKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGxhc3RTdGVwID0gdGhpcy5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5zdXBwb3NpdGlvblN0YXRlbWVudHMsXG4gICAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdGVwKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvU3RlcCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGVwO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3ViRGVyaXZhdGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gc3VwcG9zaXRpb247ICAvLy8vXG5cbiAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNWZXJpZnk7XG5cbiAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3ViRGVyaXZhdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJEZXJpdmF0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKVxuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICBjb25zdCBzdWJwcm9vZiA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJwcm9vZlwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlN1YnByb29mIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4Iiwic3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvbiIsImdldFN1cHBvc2l0aW9ucyIsImdldFN1YkRlcml2YXRpb24iLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZOb2RlIiwiZ2V0TGFzdFN0ZXAiLCJnZXRTdGF0ZW1lbnRzIiwibGFzdFN0ZXAiLCJzdXBwb3NpdGlvblN0YXRlbWVudHMiLCJtYXAiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwiY29tcGFyZVN0ZXAiLCJzdGVwIiwiY29tcGFyZXNUb1N0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImVuY2xvc2UiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJzdWJEZXJpdmF0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdWJEZXJpdmF0aW9uIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInN1YnByb29mU3RyaW5nIiwiZ2V0U3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJzdWJwcm9vZiIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVArQzswQkFFeEI7eUJBQ0M7QUFFeEIsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFB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