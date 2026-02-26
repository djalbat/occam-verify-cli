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
    getLastProofAssertion() {
        return this.derivation.getLastProofAssertion();
    }
    getStatement() {
        const lastProofAssertion = this.getLastProofAssertion(), lastProofAssertionStatement = lastProofAssertion.getStatement(), statement = lastProofAssertionStatement; ///
        return statement;
    }
    async verify(statement, context) {
        let verifies = false;
        await (0, _context.asyncScope)(async (context)=>{
            const derivationVerifies = await this.derivation.verify(context);
            if (derivationVerifies) {
                const lastProofAssertion = context.getLastProofAssertion();
                if (lastProofAssertion !== null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jU2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZGVyaXZhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmRlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0RGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSB7IHJldHVybiB0aGlzLmRlcml2YXRpb24uZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCk7IH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gdGhpcy5nZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbGFzdFByb29mQXNzZXJ0aW9uU3RhdGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCBhc3luY1Njb3BlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBkZXJpdmF0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlcml2YXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoZGVyaXZhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhc3RQcm9vZkFzc2VydGlvbiA9IGNvbnRleHQuZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCk7XG5cbiAgICAgICAgaWYgKGxhc3RQcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHByb29mID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgcHJvb2ZTdGF0ZW1lbnQgPSBwcm9vZi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSBwcm9vZlN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KTtcblxuICAgICAgICAgIGlmIChwcm9vZlN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9vZlwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvb2YiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJkZXJpdmF0aW9uIiwiZ2V0RGVyaXZhdGlvbiIsImdldFByb29mTm9kZSIsImdldE5vZGUiLCJwcm9vZk5vZGUiLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJnZXRTdGF0ZW1lbnQiLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImFzeW5jU2NvcGUiLCJkZXJpdmF0aW9uVmVyaWZpZXMiLCJwcm9vZiIsInByb29mU3RhdGVtZW50IiwicHJvb2ZTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0NBTHdCOzBCQUVEO3lCQUNJO01BRTNCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQzdDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLGVBQWU7UUFDYixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsWUFBWUwsTUFBTSxHQUFHO1FBRTNCLE9BQU9LO0lBQ1Q7SUFFQUMsd0JBQXdCO1FBQUUsT0FBTyxJQUFJLENBQUNMLFVBQVUsQ0FBQ0sscUJBQXFCO0lBQUk7SUFFMUVDLGVBQWU7UUFDYixNQUFNQyxxQkFBcUIsSUFBSSxDQUFDRixxQkFBcUIsSUFDL0NHLDhCQUE4QkQsbUJBQW1CRCxZQUFZLElBQzdERyxZQUFZRCw2QkFBNkIsR0FBRztRQUVsRCxPQUFPQztJQUNUO0lBRUEsTUFBTUMsT0FBT0QsU0FBUyxFQUFFWixPQUFPLEVBQUU7UUFDL0IsSUFBSWMsV0FBVztRQUVmLE1BQU1DLElBQUFBLG1CQUFVLEVBQUMsT0FBT2Y7WUFDdEIsTUFBTWdCLHFCQUFxQixNQUFNLElBQUksQ0FBQ2IsVUFBVSxDQUFDVSxNQUFNLENBQUNiO1lBRXhELElBQUlnQixvQkFBb0I7Z0JBQ3RCLE1BQU1OLHFCQUFxQlYsUUFBUVEscUJBQXFCO2dCQUV4RCxJQUFJRSx1QkFBdUIsTUFBTTtvQkFDL0IsTUFBTU8sUUFBUSxJQUFJLEVBQ1pDLGlCQUFpQkQsTUFBTVIsWUFBWSxJQUNuQ1UsaUNBQWlDRCxlQUFlRSxTQUFTLENBQUNSO29CQUVoRSxJQUFJTyxnQ0FBZ0M7d0JBQ2xDTCxXQUFXO29CQUNiO2dCQUNGO1lBQ0Y7UUFDRixHQUFHZDtRQUVILE9BQU9jO0lBQ1Q7SUFFQSxPQUFPTyxPQUFPLFFBQVE7QUFDeEIifQ==