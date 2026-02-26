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
const _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelAssertion"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class Lemma extends _topLevelAssertion.default {
    getLemmaNode() {
        const node = this.getNode(), lemmaNode = node; ///
        return lemmaNode;
    }
    async verify() {
        let verifies;
        const context = this.getContext();
        await this.break(context);
        const lemmaString = this.getString(); ///
        lemmaString === null ? context.trace(`Verifying a lemma...`) : context.trace(`Verifying the '${lemmaString}' lemma...`);
        verifies = await super.verify();
        if (verifies) {
            const lemma = this; ///
            context.addLemma(lemma);
            lemmaString === null ? context.debug(`...verified a lemma.`) : context.debug(`...verified the '${lemmaString}' lemma.`);
        }
        return verifies;
    }
    static name = "Lemma";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2xlbW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4uL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGdldExlbW1hTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbGVtbWFOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbGVtbWFOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBsZW1tYVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgKGxlbW1hU3RyaW5nID09PSBudWxsKSA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgYSBsZW1tYS4uLmApIDpcbiAgICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsZW1tYVN0cmluZ30nIGxlbW1hLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IGF3YWl0IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBsZW1tYSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZExlbW1hKGxlbW1hKTtcblxuICAgICAgKGxlbW1hU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIGEgbGVtbWEuYCkgOlxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsZW1tYVN0cmluZ30nIGxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMZW1tYVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTGVtbWEiLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldExlbW1hTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwibGVtbWFOb2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJyZWFrIiwibGVtbWFTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImxlbW1hIiwiYWRkTGVtbWEiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzBFQUo4QjswQkFFUDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsMEJBQWlCO0lBQ3pEQyxlQUFlO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQU0sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUEsTUFBTUMsU0FBUztRQUNiLElBQUlDO1FBRUosTUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVU7UUFFL0IsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0Y7UUFFakIsTUFBTUcsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXhDRCxnQkFBZ0IsT0FDZkgsUUFBUUssS0FBSyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFDbENMLFFBQVFLLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsWUFBWSxVQUFVLENBQUM7UUFFM0RKLFdBQVcsTUFBTSxLQUFLLENBQUNEO1FBRXZCLElBQUlDLFVBQVU7WUFDWixNQUFNTyxRQUFRLElBQUksRUFBRSxHQUFHO1lBRXZCTixRQUFRTyxRQUFRLENBQUNEO1lBRWhCSCxnQkFBZ0IsT0FDZkgsUUFBUVEsS0FBSyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFDbENSLFFBQVFRLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTCxZQUFZLFFBQVEsQ0FBQztRQUM3RDtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxPQUFPVSxPQUFPLFFBQVE7QUFDeEIifQ==