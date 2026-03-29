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
const _default = (0, _elements.define)(class Theorem extends _topLevelAssertion.default {
    getThoeremNode() {
        const node = this.getNode(), theoremNode = node; ///
        return theoremNode;
    }
    async verify(context) {
        let verifies;
        await this.break(context);
        const theoremString = this.getString(); ///
        context.trace(`Verifying the '${theoremString}' theorem...`);
        verifies = await super.verify(context);
        if (verifies) {
            const theorem = this; ///
            context.addTheorem(theorem);
            context.debug(`...verified the '${theoremString}' theorem.`);
        }
        return verifies;
    }
    static name = "Theorem";
    static fromJSON(json, context) {
        return _topLevelAssertion.default.fromJSON(Theorem, json, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL3RoZW9yZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUaGVvcmVtIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBnZXRUaG9lcmVtTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGhlb3JlbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0aGVvcmVtTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHRoZW9yZW1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RoZW9yZW1TdHJpbmd9JyB0aGVvcmVtLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IGF3YWl0IHN1cGVyLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgdGhlb3JlbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGhlb3JlbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihUaGVvcmVtLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGhlb3JlbSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0VGhvZXJlbU5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsInRoZW9yZW1Ob2RlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiYnJlYWsiLCJ0aGVvcmVtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0aGVvcmVtIiwiYWRkVGhlb3JlbSIsImRlYnVnIiwibmFtZSIsImZyb21KU09OIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MEVBSjhCOzBCQUVQOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxnQkFBZ0JDLDBCQUFpQjtJQUMzREMsaUJBQWlCO1FBQ2YsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLGNBQWNGLE1BQU0sR0FBRztRQUU3QixPQUFPRTtJQUNUO0lBRUEsTUFBTUMsT0FBT0MsT0FBTyxFQUFFO1FBQ3BCLElBQUlDO1FBRUosTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0Y7UUFFakIsTUFBTUcsZ0JBQWdCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFNUNKLFFBQVFLLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsY0FBYyxZQUFZLENBQUM7UUFFM0RGLFdBQVcsTUFBTSxLQUFLLENBQUNGLE9BQU9DO1FBRTlCLElBQUlDLFVBQVU7WUFDWixNQUFNSyxVQUFVLElBQUksRUFBRSxHQUFHO1lBRXpCTixRQUFRTyxVQUFVLENBQUNEO1lBRW5CTixRQUFRUSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUwsY0FBYyxVQUFVLENBQUM7UUFDN0Q7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBT1EsT0FBTyxVQUFVO0lBRXhCLE9BQU9DLFNBQVNDLElBQUksRUFBRVgsT0FBTyxFQUFFO1FBQUUsT0FBT04sMEJBQWlCLENBQUNnQixRQUFRLENBQUNqQixTQUFTa0IsTUFBTVg7SUFBVTtBQUM5RiJ9