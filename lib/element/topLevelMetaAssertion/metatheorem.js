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
const _topLevelMetaAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelMetaAssertion"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class Metatheorem extends _topLevelMetaAssertion.default {
    getMetatheoremNode() {
        const node = this.getNode(), metatheoremNode = node; ///
        return metatheoremNode;
    }
    async verify() {
        let verifies;
        const context = this.getContext();
        await this.break(context);
        const metaLemmaString = this.getString(); ///
        context.trace(`Verifying the '${metaLemmaString}' metatheorem...`);
        verifies = super.verify();
        if (verifies) {
            const metaTheorem = this; ///
            context.addMetatheorem(metaTheorem);
            context.debug(`...verified the '${metaLemmaString}' metatheorem.`);
        }
        return verifies;
    }
    static name = "Metatheorem";
    static fromJSON(json, context) {
        return _topLevelMetaAssertion.default.fromJSON(Metatheorem, json, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsTWV0YUFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YXRoZW9yZW0gZXh0ZW5kcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24ge1xuICBnZXRNZXRhdGhlb3JlbU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgbWV0YUxlbW1hU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGF0aGVvcmVtLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBtZXRhVGhlb3JlbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZE1ldGF0aGVvcmVtKG1ldGFUaGVvcmVtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGF0aGVvcmVtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdGhlb3JlbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbE1ldGFBc3NlcnRpb24uZnJvbUpTT04oTWV0YXRoZW9yZW0sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdGhlb3JlbSIsIlRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldE1ldGF0aGVvcmVtTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwibWV0YXRoZW9yZW1Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJyZWFrIiwibWV0YUxlbW1hU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhVGhlb3JlbSIsImFkZE1ldGF0aGVvcmVtIiwiZGVidWciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozs4RUFKa0M7MEJBRVg7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsOEJBQXFCO0lBQ25FQyxxQkFBcUI7UUFDbkIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLGtCQUFrQkYsTUFBTSxHQUFHO1FBRWpDLE9BQU9FO0lBQ1Q7SUFFQSxNQUFNQyxTQUFTO1FBQ2IsSUFBSUM7UUFFSixNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVTtRQUUvQixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDRjtRQUVqQixNQUFNRyxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU3Q0osUUFBUUssS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixnQkFBZ0IsZ0JBQWdCLENBQUM7UUFFakVKLFdBQVcsS0FBSyxDQUFDRDtRQUVqQixJQUFJQyxVQUFVO1lBQ1osTUFBTU8sY0FBYyxJQUFJLEVBQUUsR0FBRztZQUU3Qk4sUUFBUU8sY0FBYyxDQUFDRDtZQUV2Qk4sUUFBUVEsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVMLGdCQUFnQixjQUFjLENBQUM7UUFDbkU7UUFFQSxPQUFPSjtJQUNUO0lBRUEsT0FBT1UsT0FBTyxjQUFjO0lBRTVCLE9BQU9DLFNBQVNDLElBQUksRUFBRVgsT0FBTyxFQUFFO1FBQUUsT0FBT1AsOEJBQXFCLENBQUNpQixRQUFRLENBQUNsQixhQUFhbUIsTUFBTVg7SUFBVTtBQUN0RyJ9