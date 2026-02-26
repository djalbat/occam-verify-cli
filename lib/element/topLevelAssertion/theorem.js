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
    async verify() {
        let verifies;
        const context = this.getContext();
        await this.break(context);
        const theoremString = this.getString(); ///
        context.trace(`Verifying the '${theoremString}' theorem...`);
        verifies = await super.verify();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL3RoZW9yZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUaGVvcmVtIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBnZXRUaG9lcmVtTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGhlb3JlbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiB0aGVvcmVtTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGhlb3JlbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGhlb3JlbVN0cmluZ30nIHRoZW9yZW0uLi5gKTtcblxuICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHRoZW9yZW0gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhlb3JlbVN0cmluZ30nIHRoZW9yZW0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRoZW9yZW1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oVGhlb3JlbSwganNvbiwgY29udGV4dCk7IH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRoZW9yZW0iLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldFRob2VyZW1Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJ0aGVvcmVtTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJicmVhayIsInRoZW9yZW1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRoZW9yZW0iLCJhZGRUaGVvcmVtIiwiZGVidWciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzswRUFKOEI7MEJBRVA7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGdCQUFnQkMsMEJBQWlCO0lBQzNEQyxpQkFBaUI7UUFDZixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsY0FBY0YsTUFBTSxHQUFHO1FBRTdCLE9BQU9FO0lBQ1Q7SUFFQSxNQUFNQyxTQUFTO1FBQ2IsSUFBSUM7UUFFSixNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVTtRQUUvQixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDRjtRQUVqQixNQUFNRyxnQkFBZ0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU1Q0osUUFBUUssS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixjQUFjLFlBQVksQ0FBQztRQUUzREosV0FBVyxNQUFNLEtBQUssQ0FBQ0Q7UUFFdkIsSUFBSUMsVUFBVTtZQUNaLE1BQU1PLFVBQVUsSUFBSSxFQUFFLEdBQUc7WUFFekJOLFFBQVFPLFVBQVUsQ0FBQ0Q7WUFFbkJOLFFBQVFRLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTCxjQUFjLFVBQVUsQ0FBQztRQUM3RDtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxPQUFPVSxPQUFPLFVBQVU7SUFFeEIsT0FBT0MsU0FBU0MsSUFBSSxFQUFFWCxPQUFPLEVBQUU7UUFBRSxPQUFPUCwwQkFBaUIsQ0FBQ2lCLFFBQVEsQ0FBQ2xCLFNBQVNtQixNQUFNWDtJQUFVO0FBQzlGIn0=