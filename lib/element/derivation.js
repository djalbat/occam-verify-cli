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
const _default = (0, _elements.define)(class Derivation extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, subproofOrProofAssertions){
        super(context, string, node, lineIndex);
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
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static name = "Derivation";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Rlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVyaXZhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXREZXJpdmF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZGVyaXZhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZGVyaXZhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBjb25zdCBsYXN0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gbGFzdCh0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpLFxuICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvbiA9IGxhc3RTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sICAvLy9cbiAgICAgICAgICBsYXN0U3RlcCA9IGxhc3RQcm9vZkFzc2VydGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTdGVwO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICB2ZXJpZmllcyA9IGF3YWl0IGFzeW5jRXZlcnkodGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBhc3luYyAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVyaXZhdGlvblwiO1xufSk7XG5cbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiRGVyaXZhdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0RGVyaXZhdGlvbk5vZGUiLCJnZXROb2RlIiwiZGVyaXZhdGlvbk5vZGUiLCJnZXRMYXN0U3RlcCIsImxhc3RTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0U3RlcCIsInZlcmlmeSIsInZlcmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVmVyaWZpZXMiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsImdldFN0cmluZyIsImdldExpbmVJbmRleCIsImpzb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyQkFSK0I7Z0NBQ2dCOzBCQUV4QjtBQUV2QixNQUFNLEVBQUVBLElBQUksRUFBRSxHQUFHQyx5QkFBYyxFQUN6QixFQUFFQyxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLHlCQUF5QixDQUFFO1FBQ3ZFLEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7SUFDbkM7SUFFQUMsK0JBQStCO1FBQzdCLE9BQU8sSUFBSSxDQUFDRCx5QkFBeUI7SUFDdkM7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxpQkFBaUJOLE1BQU8sR0FBRztRQUVqQyxPQUFPTTtJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNQywrQkFBK0JqQixLQUFLLElBQUksQ0FBQ1cseUJBQXlCLEdBQ2xFTyxxQkFBcUJELDhCQUNyQkUsV0FBV0Qsb0JBQXFCLEdBQUc7UUFFekMsT0FBT0M7SUFDVDtJQUVBLE1BQU1DLE9BQU9iLE9BQU8sRUFBRTtRQUNwQixJQUFJYztRQUVKQSxXQUFXLE1BQU1uQixXQUFXLElBQUksQ0FBQ1MseUJBQXlCLEVBQUUsT0FBT1c7WUFDakUsTUFBTUMsbUNBQW1DLE1BQU1ELHlCQUF5QkYsTUFBTSxDQUFDYjtZQUUvRSxJQUFJZ0Isa0NBQWtDO2dCQUNwQ2hCLFFBQVFpQixpQkFBaUI7Z0JBRXpCakIsUUFBUWtCLDJCQUEyQixDQUFDSDtnQkFFcEMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFLLFNBQVM7UUFDUCxNQUFNbEIsU0FBUyxJQUFJLENBQUNtQixTQUFTLElBQ3ZCakIsWUFBWSxJQUFJLENBQUNrQixZQUFZLElBQzdCQyxPQUFPO1lBQ0xyQjtZQUNBRTtRQUNGO1FBRU4sT0FBT21CO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLGFBQWE7QUFDN0IifQ==