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
const _topLevelMetaAssertion = /*#__PURE__*/ _interop_require_default(require("./../topLevelMetaAssertion"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class MetaLemma extends _topLevelMetaAssertion.default {
    getMetaLemmaNode() {
        const node = this.getNode(), metaLemmaNode = node; ///
        return metaLemmaNode;
    }
    async verify() {
        let verifies;
        const context = this.getContext();
        await this.break(context);
        const metaLemmaString = this.getString(); ///
        context.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);
        verifies = super.verify();
        if (verifies) {
            const metaTheorem = this; ///
            context.addMetatheorem(metaTheorem);
            context.debug(`...verified the '${metaLemmaString}' meta-lemma.`);
        }
        return verifies;
    }
    static name = "MetaLemma";
    static fromJSON(json, context) {
        return _topLevelMetaAssertion.default.fromJSON(MetaLemma, json, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbE1ldGFBc3NlcnRpb24gZnJvbSBcIi4vLi4vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YUxlbW1hIGV4dGVuZHMgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIHtcbiAgZ2V0TWV0YUxlbW1hTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YUxlbW1hTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGFMZW1tYVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhVGhlb3JlbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZE1ldGF0aGVvcmVtKG1ldGFUaGVvcmVtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGFMZW1tYVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbE1ldGFBc3NlcnRpb24uZnJvbUpTT04oTWV0YUxlbW1hLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YUxlbW1hIiwiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZ2V0TWV0YUxlbW1hTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwibWV0YUxlbW1hTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJicmVhayIsIm1ldGFMZW1tYVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YVRoZW9yZW0iLCJhZGRNZXRhdGhlb3JlbSIsImRlYnVnIiwibmFtZSIsImZyb21KU09OIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7OEVBSmtDOzBCQUVYOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLDhCQUFxQjtJQUNqRUMsbUJBQW1CO1FBQ2pCLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxnQkFBZ0JGLE1BQU0sR0FBRztRQUUvQixPQUFPRTtJQUNUO0lBRUEsTUFBTUMsU0FBUztRQUNiLElBQUlDO1FBRUosTUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVU7UUFFL0IsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0Y7UUFFakIsTUFBTUcsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFN0NKLFFBQVFLLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsZ0JBQWdCLGVBQWUsQ0FBQztRQUVoRUosV0FBVyxLQUFLLENBQUNEO1FBRWpCLElBQUlDLFVBQVU7WUFDWixNQUFNTyxjQUFjLElBQUksRUFBRSxHQUFHO1lBRTdCTixRQUFRTyxjQUFjLENBQUNEO1lBRXZCTixRQUFRUSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUwsZ0JBQWdCLGFBQWEsQ0FBQztRQUNsRTtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxPQUFPVSxPQUFPLFlBQVk7SUFFMUIsT0FBT0MsU0FBU0MsSUFBSSxFQUFFWCxPQUFPLEVBQUU7UUFBRSxPQUFPUCw4QkFBcUIsQ0FBQ2lCLFFBQVEsQ0FBQ2xCLFdBQVdtQixNQUFNWDtJQUFVO0FBQ3BHIn0=