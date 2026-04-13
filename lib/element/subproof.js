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
    static name = "Subproof";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnByb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN1YnByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLnN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldFN1YkRlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFN1YnByb29mTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VicHJvb2ZOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldExhc3RTdGVwKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RTdGVwKCk7IH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGNvbnN0IGxhc3RTdGVwID0gdGhpcy5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5zdXBwb3NpdGlvblN0YXRlbWVudHMsXG4gICAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdGVwKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvU3RlcCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGVwO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3ViRGVyaXZhdGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3ViRGVyaXZhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gc3VwcG9zaXRpb247ICAvLy8vXG5cbiAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNWZXJpZnk7XG5cbiAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3ViRGVyaXZhdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGVyaXZhdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5zdWJEZXJpdmF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJEZXJpdmF0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VicHJvb2ZcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdWJwcm9vZiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInN1cHBvc2l0aW9ucyIsInN1YkRlcml2YXRpb24iLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0Tm9kZSIsInN1YnByb29mTm9kZSIsImdldExhc3RTdGVwIiwiZ2V0U3RhdGVtZW50cyIsImxhc3RTdGVwIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RTdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50cyIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsImNvbXBhcmVTdGVwIiwic3RlcCIsImNvbXBhcmVzVG9TdGVwIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJlbmNsb3NlIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvblZlcmlmaWVzIiwidmVyaWZ5U3ViRGVyaXZhdGlvbiIsInZlcmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZP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