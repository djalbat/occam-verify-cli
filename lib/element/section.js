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
                context.assignAssignments();
                const topLevelAssertionVerifies = await this.topLevelAssertion.verify(context);
                if (topLevelAssertionVerifies) {
                    this.topLevelAssertion.setHypotheses(this.hypotheses);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQge2VuY2xvc2V9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGh5cG90aGVzZXMsIHRvcExldmVsQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgICB0aGlzLnRvcExldmVsQXNzZXJ0aW9uID0gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBnZXRIeXBvdGhlc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRUb3BMZXZlbEFzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFNlY3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzZWN0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNlY3Rpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzZWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi4uLmApO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5SHlwb3RoZXNlcyhjb250ZXh0KTtcblxuICAgICAgaWYgKGh5cG90aGVzZXNWZXJpZnkpIHtcbiAgICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnRvcExldmVsQXNzZXJ0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcykge1xuICAgICAgICAgIHRoaXMudG9wTGV2ZWxBc3NlcnRpb24uc2V0SHlwb3RoZXNlcyh0aGlzLmh5cG90aGVzZXMpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlIeXBvdGhlc2VzKGNvbnRleHQpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLmh5cG90aGVzZXMsIGFzeW5jIChoeXBvdGhlc2lzKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2lzVmVyaWZpZXMgPSBhd2FpdCBoeXBvdGhlc2lzLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKGh5cG90aGVzaXNWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2VzVmVyaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNlY3Rpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTZWN0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0SHlwb3RoZXNlcyIsImdldFRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0U2VjdGlvbk5vZGUiLCJnZXROb2RlIiwic2VjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic2VjdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZW5jbG9zZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwiYXNzaWduQXNzaWdubWVudHMiLCJ0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzIiwic2V0SHlwb3RoZXNlcyIsImRlYnVnIiwiaHlwb3RoZXNpcyIsImh5cG90aGVzaXNWZXJpZmllcyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVArQzswQkFFeEI7eUJBQ0Q7QUFFdEIsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0JBQWdCQyx1QkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCLENBQUU7UUFDM0UsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7SUFDM0I7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7SUFDL0I7SUFFQUcsaUJBQWlCO1FBQ2YsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLGNBQWNSLE1BQU0sR0FBRztRQUU3QixPQUFPUTtJQUNUO0lBRUEsTUFBTUMsT0FBT1gsT0FBTyxFQUFFO1FBQ3BCLElBQUlZLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDYjtRQUVqQixNQUFNYyxnQkFBZ0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU1Q2YsUUFBUWdCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsY0FBYyxZQUFZLENBQUM7UUFFM0QsTUFBTUcsSUFBQUEsZ0JBQU8sRUFBQyxPQUFPakI7WUFDbkIsTUFBTWtCLG1CQUFtQixNQUFNLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNuQjtZQUVyRCxJQUFJa0Isa0JBQWtCO2dCQUNwQmxCLFFBQVFvQixpQkFBaUI7Z0JBRXpCLE1BQU1DLDRCQUE0QixNQUFNLElBQUksQ0FBQ2hCLGlCQUFpQixDQUFDTSxNQUFNLENBQUNYO2dCQUV0RSxJQUFJcUIsMkJBQTJCO29CQUM3QixJQUFJLENBQUNoQixpQkFBaUIsQ0FBQ2lCLGFBQWEsQ0FBQyxJQUFJLENBQUNsQixVQUFVO29CQUVwRFEsV0FBVztnQkFDYjtZQUNGO1FBQ0YsR0FBR1o7UUFFSCxJQUFJWSxVQUFVO1lBQ1paLFFBQVF1QixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVQsY0FBYyxVQUFVLENBQUM7UUFDN0Q7UUFFQSxPQUFPRjtJQUNUO0lBRUEsTUFBTU8saUJBQWlCbkIsT0FBTyxFQUFFO1FBQzlCLE1BQU1rQixtQkFBbUIsTUFBTXZCLFdBQVcsSUFBSSxDQUFDUyxVQUFVLEVBQUUsT0FBT29CO1lBQ2hFLE1BQU1DLHFCQUFxQixNQUFNRCxXQUFXYixNQUFNLENBQUNYO1lBRW5ELElBQUl5QixvQkFBb0I7Z0JBQ3RCLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT1A7SUFDVDtJQUVBLE9BQU9RLE9BQU8sVUFBVTtBQUMxQiJ9