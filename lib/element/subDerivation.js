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
const _elements = require("../elements");
const { last } = _necessary.arrayUtilities, { asyncEvery } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class SubDerivation extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, subproofOrProofAssertions){
        super(context, string, node, lineIndex);
        this.subproofOrProofAssertions = subproofOrProofAssertions;
    }
    getSubproofOrProofAssertions() {
        return this.subproofOrProofAssertions;
    }
    getSubDerivationNode() {
        const node = this.getNode(), subDerivationNode = node; ///
        return subDerivationNode;
    }
    getLastStep() {
        const lastSubproofOrProofAssertion = last(this.subproofOrProofAssertions), lastProofAssertion = lastSubproofOrProofAssertion, lastStep = lastProofAssertion; ///
        return lastStep;
    }
    async verify(context) {
        let verifies;
        verifies = await asyncEvery(this.subproofOrProofAssertions, async (subproofOrProofAssertion)=>{
            const subproofOrProofAssertionVarifies = await subproofOrProofAssertion.verify(context);
            if (subproofOrProofAssertionVarifies) {
                context.assignAssignments();
                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                return true;
            }
        });
        return verifies;
    }
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static name = "SubDerivation";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YkRlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3ViRGVyaXZhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3ViRGVyaXZhdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJEZXJpdmF0aW9uTm9kZTtcbiAgfVxuXG4gIGdldExhc3RTdGVwKCkge1xuICAgIGNvbnN0IGxhc3RTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBsYXN0KHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyksXG4gICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uID0gbGFzdFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgIC8vL1xuICAgICAgICAgIGxhc3RTdGVwID0gbGFzdFByb29mQXNzZXJ0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFN0ZXA7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIHZlcmlmaWVzID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGFzeW5jIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25WYXJpZmllcyA9IGF3YWl0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25WYXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJEZXJpdmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU3ViRGVyaXZhdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3ViRGVyaXZhdGlvbk5vZGUiLCJnZXROb2RlIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJnZXRMYXN0U3RlcCIsImxhc3RTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0U3RlcCIsInZlcmlmeSIsInZlcmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVmFyaWZpZXMiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsImdldFN0cmluZyIsImdldExpbmVJbmRleCIsImpzb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyQkFSK0I7Z0NBQ2dCOzBCQUV4QjtBQUV2QixNQUFNLEVBQUVBLElBQUksRUFBRSxHQUFHQyx5QkFBYyxFQUN6QixFQUFFQyxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsc0JBQXNCQyx1QkFBTztJQUN2RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLHlCQUF5QixDQUFFO1FBQ3ZFLEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7SUFDbkM7SUFFQUMsK0JBQStCO1FBQzdCLE9BQU8sSUFBSSxDQUFDRCx5QkFBeUI7SUFDdkM7SUFFQUUsdUJBQXVCO1FBQ3JCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxvQkFBb0JOLE1BQU0sR0FBRztRQUVuQyxPQUFPTTtJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNQywrQkFBK0JqQixLQUFLLElBQUksQ0FBQ1cseUJBQXlCLEdBQ2xFTyxxQkFBcUJELDhCQUNyQkUsV0FBV0Qsb0JBQXFCLEdBQUc7UUFFekMsT0FBT0M7SUFDVDtJQUVBLE1BQU1DLE9BQU9iLE9BQU8sRUFBRTtRQUNwQixJQUFJYztRQUVKQSxXQUFXLE1BQU1uQixXQUFXLElBQUksQ0FBQ1MseUJBQXlCLEVBQUUsT0FBT1c7WUFDakUsTUFBTUMsbUNBQW1DLE1BQU1ELHlCQUF5QkYsTUFBTSxDQUFDYjtZQUUvRSxJQUFJZ0Isa0NBQWtDO2dCQUNwQ2hCLFFBQVFpQixpQkFBaUI7Z0JBRXpCakIsUUFBUWtCLDJCQUEyQixDQUFDSDtnQkFFcEMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFLLFNBQVM7UUFDUCxNQUFNbEIsU0FBUyxJQUFJLENBQUNtQixTQUFTLElBQ3ZCakIsWUFBWSxJQUFJLENBQUNrQixZQUFZLElBQzdCQyxPQUFPO1lBQ0xyQjtZQUNBRTtRQUNGO1FBRU4sT0FBT21CO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLGdCQUFnQjtBQUNoQyJ9