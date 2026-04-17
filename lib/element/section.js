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
    constructor(context, string, node, breakPoint, hypotheses, topLevelAssertion){
        super(context, string, node, breakPoint);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQge2VuY2xvc2V9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBoeXBvdGhlc2VzLCB0b3BMZXZlbEFzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICAgIHRoaXMudG9wTGV2ZWxBc3NlcnRpb24gPSB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFRvcExldmVsQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U2VjdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNlY3Rpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc2VjdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNlY3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLi4uYCk7XG5cbiAgICBhd2FpdCBlbmNsb3NlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgICBpZiAoaHlwb3RoZXNlc1ZlcmlmeSkge1xuICAgICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudG9wTGV2ZWxBc3NlcnRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy50b3BMZXZlbEFzc2VydGlvbi5zZXRIeXBvdGhlc2VzKHRoaXMuaHlwb3RoZXNlcyk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUh5cG90aGVzZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNWZXJpZnkgPSBhd2FpdCBhc3luY0V2ZXJ5KHRoaXMuaHlwb3RoZXNlcywgYXN5bmMgKGh5cG90aGVzaXMpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90aGVzaXNWZXJpZmllcyA9IGF3YWl0IGh5cG90aGVzaXMudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoaHlwb3RoZXNpc1ZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlNlY3Rpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwiaHlwb3RoZXNlcyIsInRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0SHlwb3RoZXNlcyIsImdldFRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0U2VjdGlvbk5vZGUiLCJnZXROb2RlIiwic2VjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic2VjdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZW5jbG9zZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwiYXNzaWduQXNzaWdubWVudHMiLCJ0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzIiwic2V0SHlwb3RoZXNlcyIsImRlYnVnIiwiaHlwb3RoZXNpcyIsImh5cG90aGVzaXNWZXJpZmllcyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVArQzswQkFFeEI7eUJBQ0Q7QUFFdEIsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0JBQWdCQyx1QkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCLENBQUU7UUFDNUUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7SUFDM0I7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7SUFDL0I7SUFFQUcsaUJBQWlCO1FBQ2YsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLGNBQWNSLE1BQU0sR0FBRztRQUU3QixPQUFPUTtJQUNUO0lBRUEsTUFBTUMsT0FBT1gsT0FBTyxFQUFFO1FBQ3BCLElBQUlZLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDYjtRQUVqQixNQUFNYyxnQkFBZ0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU1Q2YsUUFBUWdCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsY0FBYyxZQUFZLENBQUM7UUFFM0QsTUFBTUcsSUFBQUEsZ0JBQU8sRUFBQyxPQUFPakI7WUFDbkIsTUFBTWtCLG1CQUFtQixNQUFNLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNuQjtZQUVyRCxJQUFJa0Isa0JBQWtCO2dCQUNwQmxCLFFBQVFvQixpQkFBaUI7Z0JBRXpCLE1BQU1DLDRCQUE0QixNQUFNLElBQUksQ0FBQ2hCLGlCQUFpQixDQUFDTSxNQUFNLENBQUNYO2dCQUV0RSxJQUFJcUIsMkJBQTJCO29CQUM3QixJQUFJLENBQUNoQixpQkFBaUIsQ0FBQ2lCLGFBQWEsQ0FBQyxJQUFJLENBQUNsQixVQUFVO29CQUVwRFEsV0FBVztnQkFDYjtZQUNGO1FBQ0YsR0FBR1o7UUFFSCxJQUFJWSxVQUFVO1lBQ1paLFFBQVF1QixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVQsY0FBYyxVQUFVLENBQUM7UUFDN0Q7UUFFQSxPQUFPRjtJQUNUO0lBRUEsTUFBTU8saUJBQWlCbkIsT0FBTyxFQUFFO1FBQzlCLE1BQU1rQixtQkFBbUIsTUFBTXZCLFdBQVcsSUFBSSxDQUFDUyxVQUFVLEVBQUUsT0FBT29CO1lBQ2hFLE1BQU1DLHFCQUFxQixNQUFNRCxXQUFXYixNQUFNLENBQUNYO1lBRW5ELElBQUl5QixvQkFBb0I7Z0JBQ3RCLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT1A7SUFDVDtJQUVBLE9BQU9RLE9BQU8sVUFBVTtBQUMxQiJ9