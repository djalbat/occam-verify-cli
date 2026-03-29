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
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static name = "Section";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2VjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgaHlwb3RoZXNlcywgYXhpb20sIGxlbW1hLCB0aGVvcmVtLCBjb25qZWN0dXJlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgICB0aGlzLmF4aW9tID0gYXhpb207XG4gICAgdGhpcy5sZW1tYSA9IGxlbW1hO1xuICAgIHRoaXMudGhlb3JlbSA9IHRoZW9yZW07XG4gICAgdGhpcy5jb25qZWN0dXJlID0gY29uamVjdHVyZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldEF4aW9tKCkge1xuICAgIHJldHVybiB0aGlzLmF4aW9tO1xuICB9XG5cbiAgZ2V0TGVtbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVtbWE7XG4gIH1cblxuICBnZXRUaGVvcmVtKCkge1xuICAgIHJldHVybiB0aGlzLnRoZW9yZW07XG4gIH1cblxuICBnZXRDb25qZWN0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmplY3R1cmU7XG4gIH1cblxuICBnZXRTZWN0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2VjdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzZWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzZWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzZWN0aW9uU3RyaW5nfScgc2VjdGlvbi4uLmApO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5SHlwb3RoZXNlcygpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gKHRoaXMuYXhpb20gfHwgdGhpcy5sZW1tYSB8fCB0aGlzLnRoZW9yZW0gfHwgdGhpcy5jb25qZWN0dXJlKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVmVyaWZpZXMgPSBhd2FpdCB0b3BMZXZlbEFzc2VydGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uLnNldEh5cG90aGVzZXModGhpcy5oeXBvdGhlc2VzKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2VjdGlvblN0cmluZ30nIHNlY3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5SHlwb3RoZXNlcygpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzVmVyaWZ5ID0gdGhpcy5oeXBvdGhlc2VzLmV2ZXJ5KChoeXBvdGhlc2lzKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGhlc2lzVmVyaWZpZXMgPSBoeXBvdGhlc2lzLnZlcmlmeSh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoaHlwb3RoZXNpc1ZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNWZXJpZnk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2VjdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2VjdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImh5cG90aGVzZXMiLCJheGlvbSIsImxlbW1hIiwidGhlb3JlbSIsImNvbmplY3R1cmUiLCJnZXRIeXBvdGhlc2VzIiwiZ2V0QXhpb20iLCJnZXRMZW1tYSIsImdldFRoZW9yZW0iLCJnZXRDb25qZWN0dXJlIiwiZ2V0U2VjdGlvbk5vZGUiLCJnZXROb2RlIiwic2VjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJzZWN0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJoeXBvdGhlc2VzVmVyaWZ5IiwidmVyaWZ5SHlwb3RoZXNlcyIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25WZXJpZmllcyIsInNldEh5cG90aGVzZXMiLCJkZWJ1ZyIsImV2ZXJ5IiwiaHlwb3RoZXNpcyIsImh5cG90aGVzaXNWZXJpZmllcyIsInRvSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFB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