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
    constructor(context, string, node, lineIndex, derivation){
        super(context, string, node, lineIndex);
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
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static name = "Proof";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVuY2xvc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBkZXJpdmF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5kZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldERlcml2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFByb29mTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvb2ZOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7IHJldHVybiB0aGlzLmRlcml2YXRpb24uZ2V0TGFzdFN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0U3RlcCA9IHRoaXMuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICBsYXN0U3RlcFN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IGxhc3RTdGVwU3RhdGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCBlbmNsb3NlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBkZXJpdmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlcml2YXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVyaXZhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhc3RTdGVwID0gY29udGV4dC5nZXRMYXN0U3RlcCgpO1xuXG4gICAgICAgIGlmIChsYXN0U3RlcCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHByb29mID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgcHJvb2ZTdGF0ZW1lbnQgPSBwcm9vZi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSBwcm9vZlN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KTtcblxuICAgICAgICAgIGlmIChwcm9vZlN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9vZlwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvb2YiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJkZXJpdmF0aW9uIiwiZ2V0RGVyaXZhdGlvbiIsImdldFByb29mTm9kZSIsImdldE5vZGUiLCJwcm9vZk5vZGUiLCJnZXRMYXN0U3RlcCIsImdldFN0YXRlbWVudCIsImxhc3RTdGVwIiwibGFzdFN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImVuY2xvc2UiLCJkZXJpdmF0aW9uVmVyaWZpZXMiLCJwcm9vZiIsInByb29mU3RhdGVtZW50IiwicHJvb2ZTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwidG9KU09OIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dDQUx3QjswQkFFRDt5QkFDQztNQUV4QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxDQUFFO1FBQ3hELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLGVBQWU7UUFDYixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsWUFBWU4sTUFBTSxHQUFHO1FBRTNCLE9BQU9NO0lBQ1Q7SUFFQUMsY0FBYztRQUFFLE9BQU8sSUFBSSxDQUFDTCxVQUFVLENBQUNLLFdBQVc7SUFBSTtJQUV0REMsZUFBZTtRQUNiLE1BQU1DLFdBQVcsSUFBSSxDQUFDRixXQUFXLElBQzNCRyxvQkFBb0JELFNBQVNELFlBQVksSUFDekNHLFlBQVlELG1CQUFtQixHQUFHO1FBRXhDLE9BQU9DO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPRCxTQUFTLEVBQUViLE9BQU8sRUFBRTtRQUMvQixJQUFJZSxXQUFXO1FBRWYsTUFBTUMsSUFBQUEsZ0JBQU8sRUFBQyxPQUFPaEI7WUFDbkIsTUFBTWlCLHFCQUFxQixNQUFNLElBQUksQ0FBQ2IsVUFBVSxDQUFDVSxNQUFNLENBQUNkO1lBRXhELElBQUlpQixvQkFBb0I7Z0JBQ3RCLE1BQU1OLFdBQVdYLFFBQVFTLFdBQVc7Z0JBRXBDLElBQUlFLGFBQWEsTUFBTTtvQkFDckIsTUFBTU8sUUFBUSxJQUFJLEVBQ1pDLGlCQUFpQkQsTUFBTVIsWUFBWSxJQUNuQ1UsaUNBQWlDRCxlQUFlRSxTQUFTLENBQUNSO29CQUVoRSxJQUFJTyxnQ0FBZ0M7d0JBQ2xDTCxXQUFXO29CQUNiO2dCQUNGO1lBQ0Y7UUFDRixHQUFHZjtRQUVILE9BQU9lO0lBQ1Q7SUFFQU8sU0FBUztRQUNQLE1BQU1yQixTQUFTLElBQUksQ0FBQ3NCLFNBQVMsSUFDdkJwQixZQUFZLElBQUksQ0FBQ3FCLFlBQVksSUFDN0JDLE9BQU87WUFDTHhCO1lBQ0FFO1FBQ0Y7UUFFTixPQUFPc0I7SUFDVDtJQUVBLE9BQU9DLE9BQU8sUUFBUTtBQUN4QiJ9