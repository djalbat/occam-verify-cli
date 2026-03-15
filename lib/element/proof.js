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
const _default = (0, _elements.define)(class Proof extends _occamlanguages.Element {
    constructor(context, string, node, derivation){
        super(context, string, node);
        this.derivation = derivation;
    }
    getDerivation() {
        return this.derivation;
    }
    getProofNode() {
        const node = this.getNode(), proofNode = node; ///
        return proofNode;
    }
    getLastStep() {
        return this.derivation.getLastStep();
    }
    getStatement() {
        const lastStep = this.getLastStep(), lastStepStatement = lastStep.getStatement(), statement = lastStepStatement; ///
        return statement;
    }
    async verify(statement, context) {
        let verifies = false;
        await (0, _context.asyncRestrict)(async (context)=>{
            const derivationVerifies = await this.derivation.verify(context);
            if (derivationVerifies) {
                const lastStep = context.getLastStep();
                if (lastStep !== null) {
                    const proof = this, proofStatement = proof.getStatement(), proofStatementEqualToStatement = proofStatement.isEqualTo(statement);
                    if (proofStatementEqualToStatement) {
                        verifies = true;
                    }
                }
            }
        }, context);
        return verifies;
    }
    static name = "Proof";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jUmVzdHJpY3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZGVyaXZhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmRlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0RGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuZGVyaXZhdGlvbi5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RTdGVwID0gdGhpcy5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbGFzdFN0ZXBTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IGFzeW5jUmVzdHJpY3QoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGRlcml2YXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVyaXZhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChkZXJpdmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFzdFN0ZXAgPSBjb250ZXh0LmdldExhc3RTdGVwKCk7XG5cbiAgICAgICAgaWYgKGxhc3RTdGVwICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2YgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBwcm9vZlN0YXRlbWVudCA9IHByb29mLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICAgIHByb29mU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHByb29mU3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKHByb29mU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb29mXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9vZiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImRlcml2YXRpb24iLCJnZXREZXJpdmF0aW9uIiwiZ2V0UHJvb2ZOb2RlIiwiZ2V0Tm9kZSIsInByb29mTm9kZSIsImdldExhc3RTdGVwIiwiZ2V0U3RhdGVtZW50IiwibGFzdFN0ZXAiLCJsYXN0U3RlcFN0YXRlbWVudCIsInN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYXN5bmNSZXN0cmljdCIsImRlcml2YXRpb25WZXJpZmllcyIsInByb29mIiwicHJvb2ZTdGF0ZW1lbnQiLCJwcm9vZlN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnQ0FMd0I7MEJBRUQ7eUJBQ087TUFFOUIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDN0MsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsZUFBZTtRQUNiLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxZQUFZTCxNQUFNLEdBQUc7UUFFM0IsT0FBT0s7SUFDVDtJQUVBQyxjQUFjO1FBQUUsT0FBTyxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ssV0FBVztJQUFJO0lBRXREQyxlQUFlO1FBQ2IsTUFBTUMsV0FBVyxJQUFJLENBQUNGLFdBQVcsSUFDM0JHLG9CQUFvQkQsU0FBU0QsWUFBWSxJQUN6Q0csWUFBWUQsbUJBQW1CLEdBQUc7UUFFeEMsT0FBT0M7SUFDVDtJQUVBLE1BQU1DLE9BQU9ELFNBQVMsRUFBRVosT0FBTyxFQUFFO1FBQy9CLElBQUljLFdBQVc7UUFFZixNQUFNQyxJQUFBQSxzQkFBYSxFQUFDLE9BQU9mO1lBQ3pCLE1BQU1nQixxQkFBcUIsTUFBTSxJQUFJLENBQUNiLFVBQVUsQ0FBQ1UsTUFBTSxDQUFDYjtZQUV4RCxJQUFJZ0Isb0JBQW9CO2dCQUN0QixNQUFNTixXQUFXVixRQUFRUSxXQUFXO2dCQUVwQyxJQUFJRSxhQUFhLE1BQU07b0JBQ3JCLE1BQU1PLFFBQVEsSUFBSSxFQUNaQyxpQkFBaUJELE1BQU1SLFlBQVksSUFDbkNVLGlDQUFpQ0QsZUFBZUUsU0FBUyxDQUFDUjtvQkFFaEUsSUFBSU8sZ0NBQWdDO3dCQUNsQ0wsV0FBVztvQkFDYjtnQkFDRjtZQUNGO1FBQ0YsR0FBR2Q7UUFFSCxPQUFPYztJQUNUO0lBRUEsT0FBT08sT0FBTyxRQUFRO0FBQ3hCIn0=