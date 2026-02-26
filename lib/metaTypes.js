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
    get findMetaTypeByMetaTypeName () {
        return findMetaTypeByMetaTypeName;
    },
    get getMetaTypes () {
        return getMetaTypes;
    }
});
const _elements = /*#__PURE__*/ _interop_require_default(require("./elements"));
const _metaTypeNames = require("./metaTypeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let frameMetaType = null, referenceMetaType = null, statementMetaType = null;
function getMetaTypes() {
    const frameMetaType = frameMetaTypeFromNothing(), referenceMetaType = referenceMetaTypeFromNothing(), statementMetaType = statementMetaTypeFromNothing(), metaTypes = [
        frameMetaType,
        referenceMetaType,
        statementMetaType
    ];
    return metaTypes;
}
function findMetaTypeByMetaTypeName(metaTypeName) {
    const metaTypes = getMetaTypes(), metaType = metaTypes.find((metaType)=>{
        const metaTypeComparesToMetaTypeName = metaType.compareMetaTypeName(metaTypeName);
        if (metaTypeComparesToMetaTypeName) {
            return true;
        }
    }) || null;
    return metaType;
}
function frameMetaTypeFromNothing() {
    if (frameMetaType === null) {
        const { MetaType } = _elements.default, name = _metaTypeNames.FRAME_META_TYPE_NAME, context = null;
        frameMetaType = MetaType.fromName(name, context);
    }
    return frameMetaType;
}
function statementMetaTypeFromNothing() {
    if (statementMetaType === null) {
        const { MetaType } = _elements.default, name = _metaTypeNames.STATEMENT_META_TYPE_NAME, context = null;
        statementMetaType = MetaType.fromName(name, context);
    }
    return statementMetaType;
}
function referenceMetaTypeFromNothing() {
    if (referenceMetaType === null) {
        const { MetaType } = _elements.default, name = _metaTypeNames.REFERENCE_META_TYPE_NAME, context = null;
        referenceMetaType = MetaType.fromName(name, context);
    }
    return referenceMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSwgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmxldCBmcmFtZU1ldGFUeXBlID0gbnVsbCxcbiAgICByZWZlcmVuY2VNZXRhVHlwZSA9IG51bGwsXG4gICAgc3RhdGVtZW50TWV0YVR5cGUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YVR5cGVzKCkge1xuICBjb25zdCBmcmFtZU1ldGFUeXBlID0gZnJhbWVNZXRhVHlwZUZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IHN0YXRlbWVudE1ldGFUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgbWV0YVR5cGVzID0gW1xuICAgICAgICAgIGZyYW1lTWV0YVR5cGUsXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YVR5cGVcbiAgICAgICAgXTtcblxuICByZXR1cm4gbWV0YVR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gIGNvbnN0IG1ldGFUeXBlcyA9IGdldE1ldGFUeXBlcygpLFxuICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmNvbXBhcmVNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICAgIGlmIChtZXRhVHlwZUNvbXBhcmVzVG9NZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZyYW1lTWV0YVR5cGVGcm9tTm90aGluZygpIHtcbiAgaWYgKGZyYW1lTWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsICAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGZyYW1lTWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZU1ldGFUeXBlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRNZXRhVHlwZUZyb21Ob3RoaW5nKCkge1xuICBpZiAoc3RhdGVtZW50TWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FLCAgLy8vXG4gICAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21OYW1lKG5hbWUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE1ldGFUeXBlO1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VNZXRhVHlwZUZyb21Ob3RoaW5nKCkge1xuICBpZiAocmVmZXJlbmNlTWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLCAgLy8vXG4gICAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICByZWZlcmVuY2VNZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21OYW1lKG5hbWUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZU1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVzIiwiZnJhbWVNZXRhVHlwZSIsInJlZmVyZW5jZU1ldGFUeXBlIiwic3RhdGVtZW50TWV0YVR5cGUiLCJmcmFtZU1ldGFUeXBlRnJvbU5vdGhpbmciLCJyZWZlcmVuY2VNZXRhVHlwZUZyb21Ob3RoaW5nIiwic3RhdGVtZW50TWV0YVR5cGVGcm9tTm90aGluZyIsIm1ldGFUeXBlcyIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZCIsIm1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSIsImNvbXBhcmVNZXRhVHlwZU5hbWUiLCJNZXRhVHlwZSIsImVsZW1lbnRzIiwibmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiY29udGV4dCIsImZyb21OYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1QmdCQTtlQUFBQTs7UUFiQUM7ZUFBQUE7OztpRUFSSzsrQkFFb0U7Ozs7OztBQUV6RixJQUFJQyxnQkFBZ0IsTUFDaEJDLG9CQUFvQixNQUNwQkMsb0JBQW9CO0FBRWpCLFNBQVNIO0lBQ2QsTUFBTUMsZ0JBQWdCRyw0QkFDaEJGLG9CQUFvQkcsZ0NBQ3BCRixvQkFBb0JHLGdDQUNwQkMsWUFBWTtRQUNWTjtRQUNBQztRQUNBQztLQUNEO0lBRVAsT0FBT0k7QUFDVDtBQUVPLFNBQVNSLDJCQUEyQlMsWUFBWTtJQUNyRCxNQUFNRCxZQUFZUCxnQkFDWlMsV0FBV0YsVUFBVUcsSUFBSSxDQUFDLENBQUNEO1FBQ3pCLE1BQU1FLGlDQUFpQ0YsU0FBU0csbUJBQW1CLENBQUNKO1FBRXBFLElBQUlHLGdDQUFnQztZQUNsQyxPQUFPO1FBQ1Q7SUFDRixNQUFNO0lBRVosT0FBT0Y7QUFDVDtBQUVBLFNBQVNMO0lBQ1AsSUFBSUgsa0JBQWtCLE1BQU07UUFDMUIsTUFBTSxFQUFFWSxRQUFRLEVBQUUsR0FBR0MsaUJBQVEsRUFDdkJDLE9BQU9DLG1DQUFvQixFQUMzQkMsVUFBVTtRQUVoQmhCLGdCQUFnQlksU0FBU0ssUUFBUSxDQUFDSCxNQUFNRTtJQUMxQztJQUVBLE9BQU9oQjtBQUNUO0FBRUEsU0FBU0s7SUFDUCxJQUFJSCxzQkFBc0IsTUFBTTtRQUM5QixNQUFNLEVBQUVVLFFBQVEsRUFBRSxHQUFHQyxpQkFBUSxFQUN2QkMsT0FBT0ksdUNBQXdCLEVBQy9CRixVQUFVO1FBRWhCZCxvQkFBb0JVLFNBQVNLLFFBQVEsQ0FBQ0gsTUFBTUU7SUFDOUM7SUFFQSxPQUFPZDtBQUNUO0FBRUEsU0FBU0U7SUFDUCxJQUFJSCxzQkFBc0IsTUFBTTtRQUM5QixNQUFNLEVBQUVXLFFBQVEsRUFBRSxHQUFHQyxpQkFBUSxFQUN2QkMsT0FBT0ssdUNBQXdCLEVBQy9CSCxVQUFVO1FBRWhCZixvQkFBb0JXLFNBQVNLLFFBQVEsQ0FBQ0gsTUFBTUU7SUFDOUM7SUFFQSxPQUFPZjtBQUNUIn0=