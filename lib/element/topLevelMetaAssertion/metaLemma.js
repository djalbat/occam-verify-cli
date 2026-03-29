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
    async verify(context) {
        let verifies;
        await this.break(context);
        const metaLemmaString = this.getString(); ///
        context.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);
        verifies = super.verify(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbE1ldGFBc3NlcnRpb24gZnJvbSBcIi4vLi4vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YUxlbW1hIGV4dGVuZHMgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIHtcbiAgZ2V0TWV0YUxlbW1hTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YUxlbW1hTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYS4uLmApO1xuXG4gICAgdmVyaWZpZXMgPSBzdXBlci52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFUaGVvcmVtID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkTWV0YXRoZW9yZW0obWV0YVRoZW9yZW0pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YUxlbW1hXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsTWV0YUFzc2VydGlvbi5mcm9tSlNPTihNZXRhTGVtbWEsIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhTGVtbWEiLCJUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJnZXRNZXRhTGVtbWFOb2RlIiwibm9kZSIsImdldE5vZGUiLCJtZXRhTGVtbWFOb2RlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiYnJlYWsiLCJtZXRhTGVtbWFTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGFUaGVvcmVtIiwiYWRkTWV0YXRoZW9yZW0iLCJkZWJ1ZyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzhFQUprQzswQkFFWDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyw4QkFBcUI7SUFDakVDLG1CQUFtQjtRQUNqQixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsZ0JBQWdCRixNQUFNLEdBQUc7UUFFL0IsT0FBT0U7SUFDVDtJQUVBLE1BQU1DLE9BQU9DLE9BQU8sRUFBRTtRQUNwQixJQUFJQztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNGO1FBRWpCLE1BQU1HLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDSixRQUFRSyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGdCQUFnQixlQUFlLENBQUM7UUFFaEVGLFdBQVcsS0FBSyxDQUFDRixPQUFPQztRQUV4QixJQUFJQyxVQUFVO1lBQ1osTUFBTUssY0FBYyxJQUFJLEVBQUUsR0FBRztZQUU3Qk4sUUFBUU8sY0FBYyxDQUFDRDtZQUV2Qk4sUUFBUVEsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVMLGdCQUFnQixhQUFhLENBQUM7UUFDbEU7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBT1EsT0FBTyxZQUFZO0lBRTFCLE9BQU9DLFNBQVNDLElBQUksRUFBRVgsT0FBTyxFQUFFO1FBQUUsT0FBT04sOEJBQXFCLENBQUNnQixRQUFRLENBQUNqQixXQUFXa0IsTUFBTVg7SUFBVTtBQUNwRyJ9