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
const _default = (0, _elements.define)(class Conjecture extends _topLevelAssertion.default {
    getConjectureNode() {
        const node = this.getNode(), conjectureNode = node; ///
        return conjectureNode;
    }
    async verify(context) {
        let verifies;
        await this.break(context);
        const conjectureString = this.getString(); ///
        context.trace(`Verifying the '${conjectureString}' conjecture...`);
        verifies = await super.verify(context);
        if (verifies) {
            const conjecture = this; ///
            context.addConjecture(conjecture);
            context.debug(`...verified the '${conjectureString}' conjecture.`);
        }
        return verifies;
    }
    static name = "Conjecture";
    static fromJSON(json, context) {
        return _topLevelAssertion.default.fromJSON(Conjecture, json, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2NvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25qZWN0dXJlIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBnZXRDb25qZWN0dXJlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uamVjdHVyZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZU5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBjb25qZWN0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25qZWN0dXJlU3RyaW5nfScgY29uamVjdHVyZS4uLmApO1xuXG4gICAgdmVyaWZpZXMgPSBhd2FpdCBzdXBlci52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmplY3R1cmVTdHJpbmd9JyBjb25qZWN0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25qZWN0dXJlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKENvbmplY3R1cmUsIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25qZWN0dXJlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJnZXRDb25qZWN0dXJlTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiY29uamVjdHVyZU5vZGUiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJicmVhayIsImNvbmplY3R1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImNvbmplY3R1cmUiLCJhZGRDb25qZWN0dXJlIiwiZGVidWciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzswRUFKOEI7MEJBRVA7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsMEJBQWlCO0lBQzlEQyxvQkFBb0I7UUFDbEIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLGlCQUFpQkYsTUFBTyxHQUFHO1FBRWpDLE9BQU9FO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPQyxPQUFPLEVBQUU7UUFDcEIsSUFBSUM7UUFFSixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDRjtRQUVqQixNQUFNRyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUvQ0osUUFBUUssS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixpQkFBaUIsZUFBZSxDQUFDO1FBRWpFRixXQUFXLE1BQU0sS0FBSyxDQUFDRixPQUFPQztRQUU5QixJQUFJQyxVQUFVO1lBQ1osTUFBTUssYUFBYSxJQUFJLEVBQUcsR0FBRztZQUU3Qk4sUUFBUU8sYUFBYSxDQUFDRDtZQUV0Qk4sUUFBUVEsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVMLGlCQUFpQixhQUFhLENBQUM7UUFDbkU7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBT1EsT0FBTyxhQUFhO0lBRTNCLE9BQU9DLFNBQVNDLElBQUksRUFBRVgsT0FBTyxFQUFFO1FBQUUsT0FBT04sMEJBQWlCLENBQUNnQixRQUFRLENBQUNqQixZQUFZa0IsTUFBTVg7SUFBVTtBQUNqRyJ9