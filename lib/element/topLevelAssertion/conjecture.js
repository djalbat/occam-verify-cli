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
    async verify() {
        let verifies;
        const context = this.getContext();
        await this.break(context);
        const conjectureString = this.getString(); ///
        context.trace(`Verifying the '${conjectureString}' conjecture...`);
        verifies = await super.verify();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2NvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25qZWN0dXJlIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBnZXRDb25qZWN0dXJlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uamVjdHVyZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29uamVjdHVyZU5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGNvbmplY3R1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmplY3R1cmVTdHJpbmd9JyBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IGF3YWl0IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZENvbmplY3R1cmUoY29uamVjdHVyZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25qZWN0dXJlU3RyaW5nfScgY29uamVjdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uamVjdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihDb25qZWN0dXJlLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29uamVjdHVyZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0Q29uamVjdHVyZU5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImNvbmplY3R1cmVOb2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJyZWFrIiwiY29uamVjdHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiY29uamVjdHVyZSIsImFkZENvbmplY3R1cmUiLCJkZWJ1ZyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzBFQUo4QjswQkFFUDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQywwQkFBaUI7SUFDOURDLG9CQUFvQjtRQUNsQixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsaUJBQWlCRixNQUFPLEdBQUc7UUFFakMsT0FBT0U7SUFDVDtJQUVBLE1BQU1DLFNBQVM7UUFDYixJQUFJQztRQUVKLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVO1FBRS9CLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNGO1FBRWpCLE1BQU1HLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DSixRQUFRSyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGlCQUFpQixlQUFlLENBQUM7UUFFakVKLFdBQVcsTUFBTSxLQUFLLENBQUNEO1FBRXZCLElBQUlDLFVBQVU7WUFDWixNQUFNTyxhQUFhLElBQUksRUFBRyxHQUFHO1lBRTdCTixRQUFRTyxhQUFhLENBQUNEO1lBRXRCTixRQUFRUSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUwsaUJBQWlCLGFBQWEsQ0FBQztRQUNuRTtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxPQUFPVSxPQUFPLGFBQWE7SUFFM0IsT0FBT0MsU0FBU0MsSUFBSSxFQUFFWCxPQUFPLEVBQUU7UUFBRSxPQUFPUCwwQkFBaUIsQ0FBQ2lCLFFBQVEsQ0FBQ2xCLFlBQVltQixNQUFNWDtJQUFVO0FBQ2pHIn0=