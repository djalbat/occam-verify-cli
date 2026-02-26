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
const _necessary = require("necessary");
const _occamlanguages = require("occam-languages");
const _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
const _elements = require("../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { last } = _necessary.arrayUtilities, { asyncEvery } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Derivation extends _occamlanguages.Element {
    constructor(context, string, node, subproofOrProofAssertions){
        super(context, string, node);
        this.subproofOrProofAssertions = subproofOrProofAssertions;
    }
    getSubproofOrProofAssertions() {
        return this.subproofOrProofAssertions;
    }
    getDerivationNode() {
        const node = this.getNode(), derivationNode = node; ///
        return derivationNode;
    }
    getLastProofAssertion() {
        const lastSubproofOrProofAssertion = last(this.subproofOrProofAssertions), lastProofAssertion = lastSubproofOrProofAssertion; ///
        return lastProofAssertion;
    }
    async verify(context) {
        let verifies;
        verifies = await asyncEvery(this.subproofOrProofAssertions, async (subproofOrProofAssertion)=>{
            const subproofOrProofAssertionVerifies = await subproofOrProofAssertion.verify(context);
            if (subproofOrProofAssertionVerifies) {
                context.assignAssignments();
                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                return true;
            }
        });
        return verifies;
    }
    static name = "Derivation";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBEZXJpdmF0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0RGVyaXZhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlcml2YXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcml2YXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkge1xuICAgIGNvbnN0IGxhc3RTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBsYXN0KHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyksXG4gICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uID0gbGFzdFN1YnByb29mT3JQcm9vZkFzc2VydGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RQcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgdmVyaWZpZXMgPSBhd2FpdCBhc3luY0V2ZXJ5KHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgYXN5bmMgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblZlcmlmaWVzID0gYXdhaXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlcml2YXRpb25cIjtcbn0pO1xuXG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIkRlcml2YXRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldERlcml2YXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlcml2YXRpb25Ob2RlIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwibGFzdFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvbiIsInZlcmlmeSIsInZlcmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVmVyaWZpZXMiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJCQVYrQjtnQ0FDZ0I7K0RBRWpCOzBCQUVQOzs7Ozs7QUFFdkIsTUFBTSxFQUFFQSxJQUFJLEVBQUUsR0FBR0MseUJBQWMsRUFDekIsRUFBRUMsVUFBVSxFQUFFLEdBQUdDLHFDQUFxQjtNQUU1QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMseUJBQXlCLENBQUU7UUFDNUQsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLHlCQUF5QixHQUFHQTtJQUNuQztJQUVBQywrQkFBK0I7UUFDN0IsT0FBTyxJQUFJLENBQUNELHlCQUF5QjtJQUN2QztJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGlCQUFpQkwsTUFBTyxHQUFHO1FBRWpDLE9BQU9LO0lBQ1Q7SUFFQUMsd0JBQXdCO1FBQ3RCLE1BQU1DLCtCQUErQmhCLEtBQUssSUFBSSxDQUFDVSx5QkFBeUIsR0FDbEVPLHFCQUFxQkQsOEJBQStCLEdBQUc7UUFFN0QsT0FBT0M7SUFDVDtJQUVBLE1BQU1DLE9BQU9YLE9BQU8sRUFBRTtRQUNwQixJQUFJWTtRQUVKQSxXQUFXLE1BQU1qQixXQUFXLElBQUksQ0FBQ1EseUJBQXlCLEVBQUUsT0FBT1U7WUFDakUsTUFBTUMsbUNBQW1DLE1BQU1ELHlCQUF5QkYsTUFBTSxDQUFDWDtZQUUvRSxJQUFJYyxrQ0FBa0M7Z0JBQ3BDZCxRQUFRZSxpQkFBaUI7Z0JBRXpCZixRQUFRZ0IsMkJBQTJCLENBQUNIO2dCQUVwQyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPSyxPQUFPLGFBQWE7QUFDN0IifQ==