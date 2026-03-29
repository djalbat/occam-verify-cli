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
    async verify(context) {
        let verifies;
        await this.break(context);
        const lemmaString = this.getString(); ///
        lemmaString === null ? context.trace(`Verifying a lemma...`) : context.trace(`Verifying the '${lemmaString}' lemma...`);
        verifies = await super.verify(context);
        if (verifies) {
            const lemma = this; ///
            context.addLemma(lemma);
            lemmaString === null ? context.debug(`...verified a lemma.`) : context.debug(`...verified the '${lemmaString}' lemma.`);
        }
        return verifies;
    }
    static name = "Lemma";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2xlbW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4uL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGdldExlbW1hTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbGVtbWFOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbGVtbWFOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgbGVtbWFTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIChsZW1tYVN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIGEgbGVtbWEuLi5gKSA6XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYS4uLmApO1xuXG4gICAgdmVyaWZpZXMgPSBhd2FpdCBzdXBlci52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGxlbW1hID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuXG4gICAgICAobGVtbWFTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgYSBsZW1tYS5gKSA6XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxlbW1hXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJMZW1tYSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0TGVtbWFOb2RlIiwibm9kZSIsImdldE5vZGUiLCJsZW1tYU5vZGUiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJicmVhayIsImxlbW1hU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsZW1tYSIsImFkZExlbW1hIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzswRUFKOEI7MEJBRVA7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLDBCQUFpQjtJQUN6REMsZUFBZTtRQUNiLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxZQUFZRixNQUFNLEdBQUc7UUFFM0IsT0FBT0U7SUFDVDtJQUVBLE1BQU1DLE9BQU9DLE9BQU8sRUFBRTtRQUNwQixJQUFJQztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNGO1FBRWpCLE1BQU1HLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV4Q0QsZ0JBQWdCLE9BQ2ZILFFBQVFLLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQ2xDTCxRQUFRSyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLFlBQVksVUFBVSxDQUFDO1FBRTNERixXQUFXLE1BQU0sS0FBSyxDQUFDRixPQUFPQztRQUU5QixJQUFJQyxVQUFVO1lBQ1osTUFBTUssUUFBUSxJQUFJLEVBQUUsR0FBRztZQUV2Qk4sUUFBUU8sUUFBUSxDQUFDRDtZQUVoQkgsZ0JBQWdCLE9BQ2ZILFFBQVFRLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQ2xDUixRQUFRUSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUwsWUFBWSxRQUFRLENBQUM7UUFDN0Q7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBT1EsT0FBTyxRQUFRO0FBQ3hCIn0=