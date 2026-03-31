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
    static name = "Section";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2VjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgICB0aGlzLmF4aW9tID0gYXhpb207XG4gICAgdGhpcy5sZW1tYSA9IGxlbW1hO1xuICAgIHRoaXMudGhlb3JlbSA9IHRoZW9yZW07XG4gICAgdGhpcy5jb25qZWN0dXJlID0gY29uamVjdHVyZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldEF4aW9tKCkge1xuICAgIHJldHVybiB0aGlzLmF4aW9tO1xuICB9XG5cbiAgZ2V0TGVtbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVtbWE7XG4gIH1cblxuICBnZXRUaGVvcmVtKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW9yZW07XG4gIH1cblxuICBnZXRDb25qZWN0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmplY3R1cmU7XG4gIH1cblxuICBnZXRTZWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2VjdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzZWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzZWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi4uLmApO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5SHlwb3RoZXNlcygpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gKHRoaXMuYXhpb20gfHwgdGhpcy5sZW1tYSB8fCB0aGlzLnRoZW9yZW0gfHwgdGhpcy5jb25qZWN0dXJlKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMgPSBhd2FpdCB0b3BMZXZlbEFzc2VydGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uLnNldEh5cG90aGVzZXModGhpcy5oeXBvdGhlc2VzKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5SHlwb3RoZXNlcygpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy5oeXBvdGhlc2VzLmV2ZXJ5KChoeXBvdGhlc2lzKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2lzVmVyaWZpZXMgPSBoeXBvdGhlc2lzLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoaHlwb3RoZXNpc1ZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2VjdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImh5cG90aGVzZXMiLCJheGlvbSIsImxlbW1hIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJnZXRIeXBvdGhlc2VzIiwiZ2V0QXhpb20iLCJnZXRMZW1tYSIsImdldFRoZW9yZW0iLCJnZXRDb25qZWN0dXJlIiwiZ2V0U2VjdGlvbk5vZGUiLCJnZXROb2RlIiwic2VjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNlY3Rpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzIiwic2V0SHlwb3RoZXNlcyIsImRlYnVnIiwiZXZlcnkiLCJoeXBvdGhlc2lzIiwiaHlwb3RoZXNpc1ZlcmlmaWVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0JBQWdCQyx1QkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxDQUFFO1FBQzNGLEtBQUssQ0FBQ1IsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNMLEtBQUs7SUFDbkI7SUFFQU0sV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDTCxLQUFLO0lBQ25CO0lBRUFNLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0wsT0FBTztJQUNyQjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxpQkFBaUI7UUFDZixNQUFNWixPQUFPLElBQUksQ0FBQ2EsT0FBTyxJQUNuQkMsY0FBY2QsTUFBTSxHQUFHO1FBRTdCLE9BQU9jO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPakIsT0FBTyxFQUFFO1FBQ3BCLElBQUlrQixXQUFXO1FBRWYsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFNUNwQixRQUFRcUIsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixjQUFjLFlBQVksQ0FBQztRQUUzRCxNQUFNRyxtQkFBbUIsSUFBSSxDQUFDQyxnQkFBZ0I7UUFFOUMsSUFBSUQsa0JBQWtCO1lBQ3BCLE1BQU1FLG9CQUFxQixJQUFJLENBQUNuQixLQUFLLElBQUksSUFBSSxDQUFDQyxLQUFLLElBQUksSUFBSSxDQUFDQyxPQUFPLElBQUksSUFBSSxDQUFDQyxVQUFVLEVBQ2hGaUIsNEJBQTRCLE1BQU1ELGtCQUFrQlAsTUFBTSxDQUFDakI7WUFFakUsSUFBSXlCLDJCQUEyQjtnQkFDN0JELGtCQUFrQkUsYUFBYSxDQUFDLElBQUksQ0FBQ3RCLFVBQVU7Z0JBRS9DYyxXQUFXO1lBQ2I7UUFDRjtRQUVBLElBQUlBLFVBQVU7WUFDWmxCLFFBQVEyQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVIsY0FBYyxVQUFVLENBQUM7UUFDN0Q7UUFFQSxPQUFPRDtJQUNUO0lBRUFLLG1CQUFtQjtRQUNqQixNQUFNRCxtQkFBbUIsSUFBSSxDQUFDbEIsVUFBVSxDQUFDd0IsS0FBSyxDQUFDLENBQUNDO1lBQzlDLE1BQU1DLHFCQUFxQkQsV0FBV1osTUFBTSxDQUFDLElBQUksQ0FBQ2pCLE9BQU87WUFFekQsSUFBSThCLG9CQUFvQjtnQkFDdEIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPUjtJQUNUO0lBRUEsT0FBT1MsT0FBTyxVQUFVO0FBQzFCIn0=