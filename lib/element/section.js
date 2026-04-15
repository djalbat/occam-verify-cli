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
const _default = (0, _elements.define)(class Section extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, hypotheses, topLevelAssertion){
        super(context, string, node, lineIndex);
        this.hypotheses = hypotheses;
        this.topLevelAssertion = topLevelAssertion;
    }
    getHypotheses() {
        return this.hypotheses;
    }
    getTopLevelAssertion() {
        return this.topLevelAssertion;
    }
    getSectionNode() {
        const node = this.getNode(), sectionNode = node; ///
        return sectionNode;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const sectionString = this.getString(); ///
        context.trace(`Verifying the '${sectionString}' section...`);
        await (0, _context.enclose)(async (context)=>{
            const hypothesesVerify = await this.verifyHypotheses(context);
            if (hypothesesVerify) {
                this.topLevelAssertion.setHypotheses(this.hypotheses);
                const topLevelAssertionVerifies = await this.topLevelAssertion.verify(context);
                if (topLevelAssertionVerifies) {
                    verifies = true;
                }
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${sectionString}' section.`);
        }
        return verifies;
    }
    async verifyHypotheses(context) {
        const hypothesesVerify = await asyncEvery(this.hypotheses, async (hypothesis)=>{
            const hypothesisVerifies = await hypothesis.verify(context);
            if (hypothesisVerifies) {
                return true;
            }
        });
        return hypothesesVerify;
    }
    static name = "Section";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQge2VuY2xvc2V9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGh5cG90aGVzZXMsIHRvcExldmVsQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgICB0aGlzLnRvcExldmVsQXNzZXJ0aW9uID0gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBnZXRIeXBvdGhlc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRUb3BMZXZlbEFzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFNlY3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzZWN0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNlY3Rpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzZWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi4uLmApO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5SHlwb3RoZXNlcyhjb250ZXh0KTtcblxuICAgICAgaWYgKGh5cG90aGVzZXNWZXJpZnkpIHtcbiAgICAgICAgdGhpcy50b3BMZXZlbEFzc2VydGlvbi5zZXRIeXBvdGhlc2VzKHRoaXMuaHlwb3RoZXNlcyk7XG5cbiAgICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudG9wTGV2ZWxBc3NlcnRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlIeXBvdGhlc2VzKGNvbnRleHQpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLmh5cG90aGVzZXMsIGFzeW5jIChoeXBvdGhlc2lzKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2lzVmVyaWZpZXMgPSBhd2FpdCBoeXBvdGhlc2lzLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKGh5cG90aGVzaXNWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2VzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNlY3Rpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTZWN0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0SHlwb3RoZXNlcyIsImdldFRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0U2VjdGlvbk5vZGUiLCJnZXROb2RlIiwic2VjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic2VjdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZW5jbG9zZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwic2V0SHlwb3RoZXNlcyIsInRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMiLCJkZWJ1ZyIsImh5cG90aGVzaXMiLCJoeXBvdGhlc2lzVmVyaWZpZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQK0M7MEJBRXhCO3lCQUNEO0FBRXRCLE1BQU0sRUFBRUEsVUFBVSxFQUFFLEdBQUdDLHFDQUFxQjtNQUU1QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGdCQUFnQkMsdUJBQU87SUFDakQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQixDQUFFO1FBQzNFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO0lBQzNCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLHVCQUF1QjtRQUNyQixPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO0lBQy9CO0lBRUFHLGlCQUFpQjtRQUNmLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxjQUFjUixNQUFNLEdBQUc7UUFFN0IsT0FBT1E7SUFDVDtJQUVBLE1BQU1DLE9BQU9YLE9BQU8sRUFBRTtRQUNwQixJQUFJWSxXQUFXO1FBRWYsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ2I7UUFFakIsTUFBTWMsZ0JBQWdCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFNUNmLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGNBQWMsWUFBWSxDQUFDO1FBRTNELE1BQU1HLElBQUFBLGdCQUFPLEVBQUMsT0FBT2pCO1lBQ25CLE1BQU1rQixtQkFBbUIsTUFBTSxJQUFJLENBQUNDLGdCQUFnQixDQUFDbkI7WUFFckQsSUFBSWtCLGtCQUFrQjtnQkFDcEIsSUFBSSxDQUFDYixpQkFBaUIsQ0FBQ2UsYUFBYSxDQUFDLElBQUksQ0FBQ2hCLFVBQVU7Z0JBRXBELE1BQU1pQiw0QkFBNEIsTUFBTSxJQUFJLENBQUNoQixpQkFBaUIsQ0FBQ00sTUFBTSxDQUFDWDtnQkFFdEUsSUFBSXFCLDJCQUEyQjtvQkFDN0JULFdBQVc7Z0JBQ2I7WUFDRjtRQUNGLEdBQUdaO1FBRUgsSUFBSVksVUFBVTtZQUNaWixRQUFRc0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVSLGNBQWMsVUFBVSxDQUFDO1FBQzdEO1FBRUEsT0FBT0Y7SUFDVDtJQUVBLE1BQU1PLGlCQUFpQm5CLE9BQU8sRUFBRTtRQUM5QixNQUFNa0IsbUJBQW1CLE1BQU12QixXQUFXLElBQUksQ0FBQ1MsVUFBVSxFQUFFLE9BQU9tQjtZQUNoRSxNQUFNQyxxQkFBcUIsTUFBTUQsV0FBV1osTUFBTSxDQUFDWDtZQUVuRCxJQUFJd0Isb0JBQW9CO2dCQUN0QixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9OO0lBQ1Q7SUFFQSxPQUFPTyxPQUFPLFVBQVU7QUFDMUIifQ==