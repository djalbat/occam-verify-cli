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
    constructor(context, string, node, breakPoint, derivation){
        super(context, string, node, breakPoint);
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
        await (0, _context.enclose)(async (context)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVuY2xvc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgZGVyaXZhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLmRlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0RGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHsgcmV0dXJuIHRoaXMuZGVyaXZhdGlvbi5nZXRMYXN0U3RlcCgpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RTdGVwID0gdGhpcy5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgIGxhc3RTdGVwU3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbGFzdFN0ZXBTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGRlcml2YXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVyaXZhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChkZXJpdmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFzdFN0ZXAgPSBjb250ZXh0LmdldExhc3RTdGVwKCk7XG5cbiAgICAgICAgaWYgKGxhc3RTdGVwICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2YgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBwcm9vZlN0YXRlbWVudCA9IHByb29mLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICAgIHByb29mU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHByb29mU3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKHByb29mU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb29mXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9vZiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJkZXJpdmF0aW9uIiwiZ2V0RGVyaXZhdGlvbiIsImdldFByb29mTm9kZSIsImdldE5vZGUiLCJwcm9vZk5vZGUiLCJnZXRMYXN0U3RlcCIsImdldFN0YXRlbWVudCIsImxhc3RTdGVwIiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImVuY2xvc2UiLCJkZXJpdmF0aW9uVmVyaWZpZXMiLCJwcm9vZiIsInByb29mU3RhdGVtZW50IiwicHJvb2ZTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0NBTHdCOzBCQUVEO3lCQUNDO01BRXhCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLENBQUU7UUFDekQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNELFVBQVU7SUFDeEI7SUFFQUUsZUFBZTtRQUNiLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxZQUFZTixNQUFNLEdBQUc7UUFFM0IsT0FBT007SUFDVDtJQUVBQyxjQUFjO1FBQUUsT0FBTyxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ssV0FBVztJQUFJO0lBRXREQyxlQUFlO1FBQ2IsTUFBTUMsV0FBVyxJQUFJLENBQUNGLFdBQVcsSUFDM0JHLG9CQUFvQkQsU0FBU0QsWUFBWSxJQUN6Q0csWUFBWUQsbUJBQW1CLEdBQUc7UUFFeEMsT0FBT0M7SUFDVDtJQUVBLE1BQU1DLE9BQU9ELFNBQVMsRUFBRWIsT0FBTyxFQUFFO1FBQy9CLElBQUllLFdBQVc7UUFFZixNQUFNQyxJQUFBQSxnQkFBTyxFQUFDLE9BQU9oQjtZQUNuQixNQUFNaUIscUJBQXFCLE1BQU0sSUFBSSxDQUFDYixVQUFVLENBQUNVLE1BQU0sQ0FBQ2Q7WUFFeEQsSUFBSWlCLG9CQUFvQjtnQkFDdEIsTUFBTU4sV0FBV1gsUUFBUVMsV0FBVztnQkFFcEMsSUFBSUUsYUFBYSxNQUFNO29CQUNyQixNQUFNTyxRQUFRLElBQUksRUFDWkMsaUJBQWlCRCxNQUFNUixZQUFZLElBQ25DVSxpQ0FBaUNELGVBQWVFLFNBQVMsQ0FBQ1I7b0JBRWhFLElBQUlPLGdDQUFnQzt3QkFDbENMLFdBQVc7b0JBQ2I7Z0JBQ0Y7WUFDRjtRQUNGLEdBQUdmO1FBRUgsT0FBT2U7SUFDVDtJQUVBLE9BQU9PLE9BQU8sUUFBUTtBQUN4QiJ9