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
    get getMetaTypes () {
        return getMetaTypes;
    },
    get metaTypeFromMetaTypeName () {
        return metaTypeFromMetaTypeName;
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
function metaTypeFromMetaTypeName(metaTypeName) {
    var metaTypes = getMetaTypes(), metaType = metaTypes.find(function(metaType) {
        var metaTypeComparesToMetaTypeName = metaType.compareMetaTypeName(metaTypeName);
        if (metaTypeComparesToMetaTypeName) {
            return true;
        }
    }) || null;
    return metaType;
}
function frameMetaTypeFromNothing() {
    if (frameMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.FRAME_META_TYPE_NAME, context = null;
        frameMetaType = MetaType.fromName(name, context);
    }
    return frameMetaType;
}
function statementMetaTypeFromNothing() {
    if (statementMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.STATEMENT_META_TYPE_NAME, context = null;
        statementMetaType = MetaType.fromName(name, context);
    }
    return statementMetaType;
}
function referenceMetaTypeFromNothing() {
    if (referenceMetaType === null) {
        var MetaType = _elements.default.MetaType, name = _metaTypeNames.REFERENCE_META_TYPE_NAME, context = null;
        referenceMetaType = MetaType.fromName(name, context);
    }
    return referenceMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhVHlwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSwgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmxldCBmcmFtZU1ldGFUeXBlID0gbnVsbCxcbiAgICByZWZlcmVuY2VNZXRhVHlwZSA9IG51bGwsXG4gICAgc3RhdGVtZW50TWV0YVR5cGUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YVR5cGVzKCkge1xuICBjb25zdCBmcmFtZU1ldGFUeXBlID0gZnJhbWVNZXRhVHlwZUZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGVGcm9tTm90aGluZygpLFxuICAgICAgICBzdGF0ZW1lbnRNZXRhVHlwZSA9IHN0YXRlbWVudE1ldGFUeXBlRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgbWV0YVR5cGVzID0gW1xuICAgICAgICAgIGZyYW1lTWV0YVR5cGUsXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YVR5cGVcbiAgICAgICAgXTtcblxuICByZXR1cm4gbWV0YVR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICBjb25zdCBtZXRhVHlwZXMgPSBnZXRNZXRhVHlwZXMoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhVHlwZUNvbXBhcmVzVG9NZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5jb21wYXJlTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgICBpZiAobWV0YVR5cGVDb21wYXJlc1RvTWV0YVR5cGVOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5mdW5jdGlvbiBmcmFtZU1ldGFUeXBlRnJvbU5vdGhpbmcoKSB7XG4gIGlmIChmcmFtZU1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLCAgLy8vXG4gICAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBmcmFtZU1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU5hbWUobmFtZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVNZXRhVHlwZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50TWV0YVR5cGVGcm9tTm90aGluZygpIHtcbiAgaWYgKHN0YXRlbWVudE1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbmFtZSA9IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgc3RhdGVtZW50TWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRNZXRhVHlwZTtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlTWV0YVR5cGVGcm9tTm90aGluZygpIHtcbiAgaWYgKHJlZmVyZW5jZU1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTmFtZShuYW1lLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2VNZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZUZyb21NZXRhVHlwZU5hbWUiLCJmcmFtZU1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsImZyYW1lTWV0YVR5cGVGcm9tTm90aGluZyIsInJlZmVyZW5jZU1ldGFUeXBlRnJvbU5vdGhpbmciLCJzdGF0ZW1lbnRNZXRhVHlwZUZyb21Ob3RoaW5nIiwibWV0YVR5cGVzIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kIiwibWV0YVR5cGVDb21wYXJlc1RvTWV0YVR5cGVOYW1lIiwiY29tcGFyZU1ldGFUeXBlTmFtZSIsIk1ldGFUeXBlIiwiZWxlbWVudHMiLCJuYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJjb250ZXh0IiwiZnJvbU5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVVnQkE7ZUFBQUE7O1FBYUFDO2VBQUFBOzs7K0RBckJLOzZCQUVvRTs7Ozs7O0FBRXpGLElBQUlDLGdCQUFnQixNQUNoQkMsb0JBQW9CLE1BQ3BCQyxvQkFBb0I7QUFFakIsU0FBU0o7SUFDZCxJQUFNRSxnQkFBZ0JHLDRCQUNoQkYsb0JBQW9CRyxnQ0FDcEJGLG9CQUFvQkcsZ0NBQ3BCQyxZQUFZO1FBQ1ZOO1FBQ0FDO1FBQ0FDO0tBQ0Q7SUFFUCxPQUFPSTtBQUNUO0FBRU8sU0FBU1AseUJBQXlCUSxZQUFZO0lBQ25ELElBQU1ELFlBQVlSLGdCQUNaVSxXQUFXRixVQUFVRyxJQUFJLENBQUMsU0FBQ0Q7UUFDekIsSUFBTUUsaUNBQWlDRixTQUFTRyxtQkFBbUIsQ0FBQ0o7UUFFcEUsSUFBSUcsZ0NBQWdDO1lBQ2xDLE9BQU87UUFDVDtJQUNGLE1BQU07SUFFWixPQUFPRjtBQUNUO0FBRUEsU0FBU0w7SUFDUCxJQUFJSCxrQkFBa0IsTUFBTTtRQUMxQixJQUFNLEFBQUVZLFdBQWFDLGlCQUFRLENBQXJCRCxVQUNGRSxPQUFPQyxtQ0FBb0IsRUFDM0JDLFVBQVU7UUFFaEJoQixnQkFBZ0JZLFNBQVNLLFFBQVEsQ0FBQ0gsTUFBTUU7SUFDMUM7SUFFQSxPQUFPaEI7QUFDVDtBQUVBLFNBQVNLO0lBQ1AsSUFBSUgsc0JBQXNCLE1BQU07UUFDOUIsSUFBTSxBQUFFVSxXQUFhQyxpQkFBUSxDQUFyQkQsVUFDRkUsT0FBT0ksdUNBQXdCLEVBQy9CRixVQUFVO1FBRWhCZCxvQkFBb0JVLFNBQVNLLFFBQVEsQ0FBQ0gsTUFBTUU7SUFDOUM7SUFFQSxPQUFPZDtBQUNUO0FBRUEsU0FBU0U7SUFDUCxJQUFJSCxzQkFBc0IsTUFBTTtRQUM5QixJQUFNLEFBQUVXLFdBQWFDLGlCQUFRLENBQXJCRCxVQUNGRSxPQUFPSyx1Q0FBd0IsRUFDL0JILFVBQVU7UUFFaEJmLG9CQUFvQlcsU0FBU0ssUUFBUSxDQUFDSCxNQUFNRTtJQUM5QztJQUVBLE9BQU9mO0FBQ1QifQ==