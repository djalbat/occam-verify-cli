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
    getLastStep() {
        const lastSubproofOrProofAssertion = last(this.subproofOrProofAssertions), lastProofAssertion = lastSubproofOrProofAssertion, lastStep = lastProofAssertion; ///
        return lastStep;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBEZXJpdmF0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0RGVyaXZhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlcml2YXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcml2YXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGxhc3QodGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb24gPSBsYXN0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCAgLy8vXG4gICAgICAgICAgbGFzdFN0ZXAgPSBsYXN0UHJvb2ZBc3NlcnRpb247ICAvLy9cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgdmVyaWZpZXMgPSBhd2FpdCBhc3luY0V2ZXJ5KHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgYXN5bmMgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblZlcmlmaWVzID0gYXdhaXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlcml2YXRpb25cIjtcbn0pO1xuXG4iXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIkRlcml2YXRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldERlcml2YXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlcml2YXRpb25Ob2RlIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwibGFzdFByb29mQXNzZXJ0aW9uIiwibGFzdFN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblZlcmlmaWVzIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyQkFWK0I7Z0NBQ2dCOytEQUVqQjswQkFFUDs7Ozs7O0FBRXZCLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUdDLHlCQUFjLEVBQ3pCLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFNUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLHlCQUF5QixDQUFFO1FBQzVELEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7SUFDbkM7SUFFQUMsK0JBQStCO1FBQzdCLE9BQU8sSUFBSSxDQUFDRCx5QkFBeUI7SUFDdkM7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxpQkFBaUJMLE1BQU8sR0FBRztRQUVqQyxPQUFPSztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNQywrQkFBK0JoQixLQUFLLElBQUksQ0FBQ1UseUJBQXlCLEdBQ2xFTyxxQkFBcUJELDhCQUNyQkUsV0FBV0Qsb0JBQXFCLEdBQUc7UUFFekMsT0FBT0M7SUFDVDtJQUVBLE1BQU1DLE9BQU9aLE9BQU8sRUFBRTtRQUNwQixJQUFJYTtRQUVKQSxXQUFXLE1BQU1sQixXQUFXLElBQUksQ0FBQ1EseUJBQXlCLEVBQUUsT0FBT1c7WUFDakUsTUFBTUMsbUNBQW1DLE1BQU1ELHlCQUF5QkYsTUFBTSxDQUFDWjtZQUUvRSxJQUFJZSxrQ0FBa0M7Z0JBQ3BDZixRQUFRZ0IsaUJBQWlCO2dCQUV6QmhCLFFBQVFpQiwyQkFBMkIsQ0FBQ0g7Z0JBRXBDLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9LLE9BQU8sYUFBYTtBQUM3QiJ9