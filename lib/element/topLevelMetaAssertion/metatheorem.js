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
    async verify(context) {
        let verifies;
        await this.break(context);
        const metaLemmaString = this.getString(); ///
        context.trace(`Verifying the '${metaLemmaString}' metatheorem...`);
        verifies = super.verify(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsTWV0YUFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YXRoZW9yZW0gZXh0ZW5kcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24ge1xuICBnZXRNZXRhdGhlb3JlbU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGFMZW1tYVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhdGhlb3JlbS4uLmApO1xuXG4gICAgdmVyaWZpZXMgPSBzdXBlci52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFUaGVvcmVtID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkTWV0YXRoZW9yZW0obWV0YVRoZW9yZW0pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YXRoZW9yZW0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF0aGVvcmVtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsTWV0YUFzc2VydGlvbi5mcm9tSlNPTihNZXRhdGhlb3JlbSwganNvbiwgY29udGV4dCk7IH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF0aGVvcmVtIiwiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZ2V0TWV0YXRoZW9yZW1Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJtZXRhdGhlb3JlbU5vZGUiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJicmVhayIsIm1ldGFMZW1tYVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YVRoZW9yZW0iLCJhZGRNZXRhdGhlb3JlbSIsImRlYnVnIiwibmFtZSIsImZyb21KU09OIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7OEVBSmtDOzBCQUVYOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLDhCQUFxQjtJQUNuRUMscUJBQXFCO1FBQ25CLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxrQkFBa0JGLE1BQU0sR0FBRztRQUVqQyxPQUFPRTtJQUNUO0lBRUEsTUFBTUMsT0FBT0MsT0FBTyxFQUFFO1FBQ3BCLElBQUlDO1FBRUosTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0Y7UUFFakIsTUFBTUcsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFN0NKLFFBQVFLLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsZ0JBQWdCLGdCQUFnQixDQUFDO1FBRWpFRixXQUFXLEtBQUssQ0FBQ0YsT0FBT0M7UUFFeEIsSUFBSUMsVUFBVTtZQUNaLE1BQU1LLGNBQWMsSUFBSSxFQUFFLEdBQUc7WUFFN0JOLFFBQVFPLGNBQWMsQ0FBQ0Q7WUFFdkJOLFFBQVFRLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTCxnQkFBZ0IsY0FBYyxDQUFDO1FBQ25FO1FBRUEsT0FBT0Y7SUFDVDtJQUVBLE9BQU9RLE9BQU8sY0FBYztJQUU1QixPQUFPQyxTQUFTQyxJQUFJLEVBQUVYLE9BQU8sRUFBRTtRQUFFLE9BQU9OLDhCQUFxQixDQUFDZ0IsUUFBUSxDQUFDakIsYUFBYWtCLE1BQU1YO0lBQVU7QUFDdEcifQ==