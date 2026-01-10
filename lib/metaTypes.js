"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get frameMetaTypeFromNothing () {
        return frameMetaTypeFromNothing;
    },
    get referenceMetaTypeFromNothing () {
        return referenceMetaTypeFromNothing;
    },
    get statementMetaTypeFromNothing () {
        return statementMetaTypeFromNothing;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("./elements"));
var _metaTypeNames = require("./metaTypeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var frameMetaType = null, referenceMetaType = null, statementMetaType = null;
function frameMetaTypeFromNothing() {
    if (frameMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.FRAME_META_TYPE_NAME; ///
        frameMetaType = MetaType.fromName(name);
    }
    return frameMetaType;
}
function referenceMetaTypeFromNothing() {
    if (referenceMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.REFERENCE_META_TYPE_NAME; ///
        referenceMetaType = MetaType.fromName(name);
    }
    return referenceMetaType;
}
function statementMetaTypeFromNothing() {
    if (statementMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.STATEMENT_META_TYPE_NAME; ///
        statementMetaType = MetaType.fromName(name);
    }
    return statementMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSwgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmxldCBmcmFtZU1ldGFUeXBlID0gbnVsbCxcbiAgICByZWZlcmVuY2VNZXRhVHlwZSA9IG51bGwsXG4gICAgc3RhdGVtZW50TWV0YVR5cGUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVNZXRhVHlwZUZyb21Ob3RoaW5nKCkge1xuICBpZiAoZnJhbWVNZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTWV0YVR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRTsgIC8vL1xuXG4gICAgZnJhbWVNZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21OYW1lKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lTWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VNZXRhVHlwZUZyb21Ob3RoaW5nKCkge1xuICBpZiAocmVmZXJlbmNlTWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FOyAgLy8vXG5cbiAgICByZWZlcmVuY2VNZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21OYW1lKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZU1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50TWV0YVR5cGVGcm9tTm90aGluZygpIHtcbiAgaWYgKHN0YXRlbWVudE1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbmFtZSA9IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRTsgIC8vL1xuXG4gICAgc3RhdGVtZW50TWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTmFtZShuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRNZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZU1ldGFUeXBlRnJvbU5vdGhpbmciLCJyZWZlcmVuY2VNZXRhVHlwZUZyb21Ob3RoaW5nIiwic3RhdGVtZW50TWV0YVR5cGVGcm9tTm90aGluZyIsImZyYW1lTWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsInN0YXRlbWVudE1ldGFUeXBlIiwiTWV0YVR5cGUiLCJlbGVtZW50cyIsIm5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyb21OYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFVZ0JBO2VBQUFBOztRQVdBQztlQUFBQTs7UUFXQUM7ZUFBQUE7OzsrREE5Qks7NkJBRW9FOzs7Ozs7QUFFekYsSUFBSUMsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsTUFDcEJDLG9CQUFvQjtBQUVqQixTQUFTTDtJQUNkLElBQUlHLGtCQUFrQixNQUFNO1FBQzFCLElBQU0sQUFBRUcsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0ZFLE9BQU9DLG1DQUFvQixFQUFHLEdBQUc7UUFFdkNOLGdCQUFnQkcsU0FBU0ksUUFBUSxDQUFDRjtJQUNwQztJQUVBLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTRjtJQUNkLElBQUlHLHNCQUFzQixNQUFNO1FBQzlCLElBQU0sQUFBRUUsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0ZFLE9BQU9HLHVDQUF3QixFQUFHLEdBQUc7UUFFM0NQLG9CQUFvQkUsU0FBU0ksUUFBUSxDQUFDRjtJQUN4QztJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTRjtJQUNkLElBQUlHLHNCQUFzQixNQUFNO1FBQzlCLElBQU0sQUFBRUMsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0ZFLE9BQU9JLHVDQUF3QixFQUFHLEdBQUc7UUFFM0NQLG9CQUFvQkMsU0FBU0ksUUFBUSxDQUFDRjtJQUN4QztJQUVBLE9BQU9IO0FBQ1QifQ==