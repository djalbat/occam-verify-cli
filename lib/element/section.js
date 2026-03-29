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
const _default = (0, _elements.define)(class Section extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, hypotheses, axiom, lemma, theorem, conjecture){
        super(context, string, node, lineIndex);
        this.hypotheses = hypotheses;
        this.axiom = axiom;
        this.lemma = lemma;
        this.theorem = theorem;
        this.conjecture = conjecture;
    }
    getHypotheses() {
        return this.hypotheses;
    }
    getAxiom() {
        return this.axiom;
    }
    getLemma() {
        return this.lemma;
    }
    getTheorem() {
        return this.theorem;
    }
    getConjecture() {
        return this.conjecture;
    }
    getSectionNode() {
        const node = this.getNode(), sectionNode = node; ///
        return sectionNode;
    }
    async verify(context) {
        let verifies = false;
        const sectionString = this.getString(); ///
        context.trace(`Verifying the '${sectionString}' section...`);
        const hypothesesVerify = this.verifyHypotheses();
        if (hypothesesVerify) {
            const topLevelAssertion = this.axiom || this.lemma || this.theorem || this.conjecture, topLevelAssertionVerifies = await topLevelAssertion.verify(context);
            if (topLevelAssertionVerifies) {
                topLevelAssertion.setHypotheses(this.hypotheses);
                verifies = true;
            }
        }
        if (verifies) {
            context.debug(`...verified the '${sectionString}' section.`);
        }
        return verifies;
    }
    verifyHypotheses() {
        const hypothesesVerify = this.hypotheses.every((hypothesis)=>{
            const hypothesisVerifies = hypothesis.verify(this.context);
            if (hypothesisVerifies) {
                return true;
            }
        });
        return hypothesesVerify;
    }
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static name = "Section";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2VjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgICB0aGlzLmF4aW9tID0gYXhpb207XG4gICAgdGhpcy5sZW1tYSA9IGxlbW1hO1xuICAgIHRoaXMudGhlb3JlbSA9IHRoZW9yZW07XG4gICAgdGhpcy5jb25qZWN0dXJlID0gY29uamVjdHVyZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldEF4aW9tKCkge1xuICAgIHJldHVybiB0aGlzLmF4aW9tO1xuICB9XG5cbiAgZ2V0TGVtbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVtbWE7XG4gIH1cblxuICBnZXRUaGVvcmVtKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW9yZW07XG4gIH1cblxuICBnZXRDb25qZWN0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmplY3R1cmU7XG4gIH1cblxuICBnZXRTZWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2VjdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzZWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzZWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi4uLmApO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5SHlwb3RoZXNlcygpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gKHRoaXMuYXhpb20gfHwgdGhpcy5sZW1tYSB8fCB0aGlzLnRoZW9yZW0gfHwgdGhpcy5jb25qZWN0dXJlKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMgPSBhd2FpdCB0b3BMZXZlbEFzc2VydGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uLnNldEh5cG90aGVzZXModGhpcy5oeXBvdGhlc2VzKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5SHlwb3RoZXNlcygpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy5oeXBvdGhlc2VzLmV2ZXJ5KChoeXBvdGhlc2lzKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2lzVmVyaWZpZXMgPSBoeXBvdGhlc2lzLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoaHlwb3RoZXNpc1ZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNWZXJpZnk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2VjdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImh5cG90aGVzZXMiLCJheGlvbSIsImxlbW1hIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJnZXRIeXBvdGhlc2VzIiwiZ2V0QXhpb20iLCJnZXRMZW1tYSIsImdldFRoZW9yZW0iLCJnZXRDb25qZWN0dXJlIiwiZ2V0U2VjdGlvbk5vZGUiLCJnZXROb2RlIiwic2VjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNlY3Rpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzIiwic2V0SHlwb3RoZXNlcyIsImRlYnVnIiwiZXZlcnkiLCJoeXBvdGhlc2lzIiwiaHlwb3RoZXNpc1ZlcmlmaWVzIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGdCQUFnQkMsdUJBQU87SUFDakQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsQ0FBRTtRQUMzRixLQUFLLENBQUNSLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNMLFVBQVU7SUFDeEI7SUFFQU0sV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDTCxLQUFLO0lBQ25CO0lBRUFNLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0wsS0FBSztJQUNuQjtJQUVBTSxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNMLE9BQU87SUFDckI7SUFFQU0sZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNMLFVBQVU7SUFDeEI7SUFFQU0saUJBQWlCO1FBQ2YsTUFBTVosT0FBTyxJQUFJLENBQUNhLE9BQU8sSUFDbkJDLGNBQWNkLE1BQU0sR0FBRztRQUU3QixPQUFPYztJQUNUO0lBRUEsTUFBTUMsT0FBT2pCLE9BQU8sRUFBRTtRQUNwQixJQUFJa0IsV0FBVztRQUVmLE1BQU1DLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTVDcEIsUUFBUXFCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsY0FBYyxZQUFZLENBQUM7UUFFM0QsTUFBTUcsbUJBQW1CLElBQUksQ0FBQ0MsZ0JBQWdCO1FBRTlDLElBQUlELGtCQUFrQjtZQUNwQixNQUFNRSxvQkFBcUIsSUFBSSxDQUFDbkIsS0FBSyxJQUFJLElBQUksQ0FBQ0MsS0FBSyxJQUFJLElBQUksQ0FBQ0MsT0FBTyxJQUFJLElBQUksQ0FBQ0MsVUFBVSxFQUNoRmlCLDRCQUE0QixNQUFNRCxrQkFBa0JQLE1BQU0sQ0FBQ2pCO1lBRWpFLElBQUl5QiwyQkFBMkI7Z0JBQzdCRCxrQkFBa0JFLGFBQWEsQ0FBQyxJQUFJLENBQUN0QixVQUFVO2dCQUUvQ2MsV0FBVztZQUNiO1FBQ0Y7UUFFQSxJQUFJQSxVQUFVO1lBQ1psQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVSLGNBQWMsVUFBVSxDQUFDO1FBQzdEO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSyxtQkFBbUI7UUFDakIsTUFBTUQsbUJBQW1CLElBQUksQ0FBQ2xCLFVBQVUsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDQztZQUM5QyxNQUFNQyxxQkFBcUJELFdBQVdaLE1BQU0sQ0FBQyxJQUFJLENBQUNqQixPQUFPO1lBRXpELElBQUk4QixvQkFBb0I7Z0JBQ3RCLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT1I7SUFDVDtJQUVBUyxTQUFTO1FBQ1AsTUFBTTlCLFNBQVMsSUFBSSxDQUFDbUIsU0FBUyxJQUN2QmpCLFlBQVksSUFBSSxDQUFDNkIsWUFBWSxJQUM3QkMsT0FBTztZQUNMaEM7WUFDQUU7UUFDRjtRQUVOLE9BQU84QjtJQUNUO0lBRUEsT0FBT0MsT0FBTyxVQUFVO0FBQzFCIn0=