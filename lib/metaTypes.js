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
    get getMetaTypes () {
        return getMetaTypes;
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
function getMetaTypes() {
    var frameMetaType = frameMetaTypeFromNothing(), referenceMetaType = referenceMetaTypeFromNothing(), statementMetaType = statementMetaTypeFromNothing(), metaTypes = [
        frameMetaType,
        referenceMetaType,
        statementMetaType
    ];
    return metaTypes;
}
function frameMetaTypeFromNothing() {
    if (frameMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.FRAME_META_TYPE_NAME; ///
        frameMetaType = MetaType.fromName(name);
    }
    return frameMetaType;
}
function statementMetaTypeFromNothing() {
    if (statementMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.STATEMENT_META_TYPE_NAME; ///
        statementMetaType = MetaType.fromName(name);
    }
    return statementMetaType;
}
function referenceMetaTypeFromNothing() {
    if (referenceMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.REFERENCE_META_TYPE_NAME; ///
        referenceMetaType = MetaType.fromName(name);
    }
    return referenceMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSwgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmxldCBmcmFtZU1ldGFUeXBlID0gbnVsbCxcbiAgICByZWZlcmVuY2VNZXRhVHlwZSA9IG51bGwsXG4gICAgc3RhdGVtZW50TWV0YVR5cGUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YVR5cGVzKCkge1xuICBjb25zdCBmcmFtZU1ldGFUeXBlID0gZnJhbWVNZXRhVHlwZUZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IHN0YXRlbWVudE1ldGFUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgbWV0YVR5cGVzID0gW1xuICAgICAgICAgIGZyYW1lTWV0YVR5cGUsXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YVR5cGVcbiAgICAgICAgXTtcblxuICByZXR1cm4gbWV0YVR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWVNZXRhVHlwZUZyb21Ob3RoaW5nKCkge1xuICBpZiAoZnJhbWVNZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTWV0YVR5cGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRTsgIC8vL1xuXG4gICAgZnJhbWVNZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21OYW1lKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lTWV0YVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnRNZXRhVHlwZUZyb21Ob3RoaW5nKCkge1xuICBpZiAoc3RhdGVtZW50TWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FOyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21OYW1lKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE1ldGFUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlTWV0YVR5cGVGcm9tTm90aGluZygpIHtcbiAgaWYgKHJlZmVyZW5jZU1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRTsgIC8vL1xuXG4gICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTmFtZShuYW1lKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2VNZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZU1ldGFUeXBlRnJvbU5vdGhpbmciLCJnZXRNZXRhVHlwZXMiLCJyZWZlcmVuY2VNZXRhVHlwZUZyb21Ob3RoaW5nIiwic3RhdGVtZW50TWV0YVR5cGVGcm9tTm90aGluZyIsImZyYW1lTWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsInN0YXRlbWVudE1ldGFUeXBlIiwibWV0YVR5cGVzIiwiTWV0YVR5cGUiLCJlbGVtZW50cyIsIm5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyb21OYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1QmdCQTtlQUFBQTs7UUFiQUM7ZUFBQUE7O1FBbUNBQztlQUFBQTs7UUFYQUM7ZUFBQUE7OzsrREFoQ0s7NkJBRW9FOzs7Ozs7QUFFekYsSUFBSUMsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsTUFDcEJDLG9CQUFvQjtBQUVqQixTQUFTTDtJQUNkLElBQU1HLGdCQUFnQkosNEJBQ2hCSyxvQkFBb0JILGdDQUNwQkksb0JBQW9CSCxnQ0FDcEJJLFlBQVk7UUFDVkg7UUFDQUM7UUFDQUM7S0FDRDtJQUVQLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTUDtJQUNkLElBQUlJLGtCQUFrQixNQUFNO1FBQzFCLElBQU0sQUFBRUksV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0ZFLE9BQU9DLG1DQUFvQixFQUFHLEdBQUc7UUFFdkNQLGdCQUFnQkksU0FBU0ksUUFBUSxDQUFDRjtJQUNwQztJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTRDtJQUNkLElBQUlHLHNCQUFzQixNQUFNO1FBQzlCLElBQU0sQUFBRUUsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0ZFLE9BQU9HLHVDQUF3QixFQUFHLEdBQUc7UUFFM0NQLG9CQUFvQkUsU0FBU0ksUUFBUSxDQUFDRjtJQUN4QztJQUVBLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTSjtJQUNkLElBQUlHLHNCQUFzQixNQUFNO1FBQzlCLElBQU0sQUFBRUcsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0ZFLE9BQU9JLHVDQUF3QixFQUFHLEdBQUc7UUFFM0NULG9CQUFvQkcsU0FBU0ksUUFBUSxDQUFDRjtJQUN4QztJQUVBLE9BQU9MO0FBQ1QifQ==