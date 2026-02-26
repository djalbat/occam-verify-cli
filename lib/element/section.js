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
    constructor(context, string, node, hypotheses, axiom, lemma, theorem, conjecture){
        super(context, string, node);
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
    async verify() {
        let verifies = false;
        const context = this.getContext(), sectionString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2VjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGh5cG90aGVzZXMsIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSwgY29uamVjdHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICAgIHRoaXMuYXhpb20gPSBheGlvbTtcbiAgICB0aGlzLmxlbW1hID0gbGVtbWE7XG4gICAgdGhpcy50aGVvcmVtID0gdGhlb3JlbTtcbiAgICB0aGlzLmNvbmplY3R1cmUgPSBjb25qZWN0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0QXhpb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpb207XG4gIH1cblxuICBnZXRMZW1tYSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW1tYTtcbiAgfVxuXG4gIGdldFRoZW9yZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlb3JlbTtcbiAgfVxuXG4gIGdldENvbmplY3R1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uamVjdHVyZTtcbiAgfVxuXG4gIGdldFNlY3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzZWN0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNlY3Rpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNlY3Rpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NlY3Rpb25TdHJpbmd9JyBzZWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy52ZXJpZnlIeXBvdGhlc2VzKCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb24gPSAodGhpcy5heGlvbSB8fCB0aGlzLmxlbW1hIHx8IHRoaXMudGhlb3JlbSB8fCB0aGlzLmNvbmplY3R1cmUpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcyA9IGF3YWl0IHRvcExldmVsQXNzZXJ0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24uc2V0SHlwb3RoZXNlcyh0aGlzLmh5cG90aGVzZXMpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlIeXBvdGhlc2VzKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNWZXJpZnkgPSB0aGlzLmh5cG90aGVzZXMuZXZlcnkoKGh5cG90aGVzaXMpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90aGVzaXNWZXJpZmllcyA9IGh5cG90aGVzaXMudmVyaWZ5KHRoaXMuY29udGV4dCk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2lzVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc1ZlcmlmeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTZWN0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTZWN0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiaHlwb3RoZXNlcyIsImF4aW9tIiwibGVtbWEiLCJ0aGVvcmVtIiwiY29uamVjdHVyZSIsImdldEh5cG90aGVzZXMiLCJnZXRBeGlvbSIsImdldExlbW1hIiwiZ2V0VGhlb3JlbSIsImdldENvbmplY3R1cmUiLCJnZXRTZWN0aW9uTm9kZSIsImdldE5vZGUiLCJzZWN0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsInNlY3Rpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzZXNWZXJpZnkiLCJ2ZXJpZnlIeXBvdGhlc2VzIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzIiwic2V0SHlwb3RoZXNlcyIsImRlYnVnIiwiZXZlcnkiLCJoeXBvdGhlc2lzIiwiaHlwb3RoZXNpc1ZlcmlmaWVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0JBQWdCQyx1QkFBTztJQUNqRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsQ0FBRTtRQUNoRixLQUFLLENBQUNQLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNMLFVBQVU7SUFDeEI7SUFFQU0sV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDTCxLQUFLO0lBQ25CO0lBRUFNLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0wsS0FBSztJQUNuQjtJQUVBTSxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNMLE9BQU87SUFDckI7SUFFQU0sZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNMLFVBQVU7SUFDeEI7SUFFQU0saUJBQWlCO1FBQ2YsTUFBTVgsT0FBTyxJQUFJLENBQUNZLE9BQU8sSUFDbkJDLGNBQWNiLE1BQU0sR0FBRztRQUU3QixPQUFPYTtJQUNUO0lBRUEsTUFBTUMsU0FBUztRQUNiLElBQUlDLFdBQVc7UUFFZixNQUFNakIsVUFBVSxJQUFJLENBQUNrQixVQUFVLElBQ3pCQyxnQkFBZ0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU1Q3BCLFFBQVFxQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGNBQWMsWUFBWSxDQUFDO1FBRTNELE1BQU1HLG1CQUFtQixJQUFJLENBQUNDLGdCQUFnQjtRQUU5QyxJQUFJRCxrQkFBa0I7WUFDcEIsTUFBTUUsb0JBQXFCLElBQUksQ0FBQ3BCLEtBQUssSUFBSSxJQUFJLENBQUNDLEtBQUssSUFBSSxJQUFJLENBQUNDLE9BQU8sSUFBSSxJQUFJLENBQUNDLFVBQVUsRUFDaEZrQiw0QkFBNEIsTUFBTUQsa0JBQWtCUixNQUFNLENBQUNoQjtZQUVqRSxJQUFJeUIsMkJBQTJCO2dCQUM3QkQsa0JBQWtCRSxhQUFhLENBQUMsSUFBSSxDQUFDdkIsVUFBVTtnQkFFL0NjLFdBQVc7WUFDYjtRQUNGO1FBRUEsSUFBSUEsVUFBVTtZQUNaakIsUUFBUTJCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFUixjQUFjLFVBQVUsQ0FBQztRQUM3RDtRQUVBLE9BQU9GO0lBQ1Q7SUFFQU0sbUJBQW1CO1FBQ2pCLE1BQU1ELG1CQUFtQixJQUFJLENBQUNuQixVQUFVLENBQUN5QixLQUFLLENBQUMsQ0FBQ0M7WUFDOUMsTUFBTUMscUJBQXFCRCxXQUFXYixNQUFNLENBQUMsSUFBSSxDQUFDaEIsT0FBTztZQUV6RCxJQUFJOEIsb0JBQW9CO2dCQUN0QixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9SO0lBQ1Q7SUFFQSxPQUFPUyxPQUFPLFVBQVU7QUFDMUIifQ==