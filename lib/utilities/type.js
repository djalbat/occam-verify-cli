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
    get stringFromTypeNameNameAndSuperTypes () {
        return stringFromTypeNameNameAndSuperTypes;
    },
    get superTypesStringFromSuperTypes () {
        return superTypesStringFromSuperTypes;
    }
});
var _type = require("../dom/type");
function stringFromTypeNameNameAndSuperTypes(typeName, superTypes) {
    var superTypesString = superTypesStringFromSuperTypes(superTypes), string = superTypesString !== null ? "".concat(typeName, ":").concat(superTypesString) : typeName; ///
    return string;
}
function superTypesStringFromSuperTypes(superTypes) {
    var superTypesString = superTypes.reduce(function(superTypesString, superType) {
        if (superType !== _type.objectType) {
            var superTypeString = superType.getString();
            superTypesString = superTypesString === null ? "'".concat(superTypeString, "'") : "".concat(superTypesString, ", '").concat(superTypeString, "'");
        }
        return superTypesString;
    }, null);
    return superTypesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSxcbiAgICAgICAgc3RyaW5nID0gKHN1cGVyVHlwZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBgJHt0eXBlTmFtZX06JHtzdXBlclR5cGVzU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgdHlwZU5hbWU7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlcy5yZWR1Y2UoKHN1cGVyVHlwZXNTdHJpbmcsIHN1cGVyVHlwZSkgPT4ge1xuICAgIGlmIChzdXBlclR5cGUgIT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgc3VwZXJUeXBlc1N0cmluZyA9IChzdXBlclR5cGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJyR7c3VwZXJUeXBlU3RyaW5nfSdgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3VwZXJUeXBlc1N0cmluZ30sICcke3N1cGVyVHlwZVN0cmluZ30nYDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNTdHJpbmc7XG59XG4iXSwibmFtZXMiOlsic3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXMiLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJ0eXBlTmFtZSIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzU3RyaW5nIiwic3RyaW5nIiwicmVkdWNlIiwic3VwZXJUeXBlIiwib2JqZWN0VHlwZSIsInN1cGVyVHlwZVN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWdCQTtlQUFBQTs7UUFTQUM7ZUFBQUE7OztvQkFYVztBQUVwQixTQUFTRCxvQ0FBb0NFLFFBQVEsRUFBRUMsVUFBVTtJQUN0RSxJQUFNQyxtQkFBbUJILCtCQUErQkUsYUFDbERFLFNBQVMsQUFBQ0QscUJBQXFCLE9BQ3BCLEFBQUMsR0FBY0EsT0FBWkYsVUFBUyxLQUFvQixPQUFqQkUsb0JBQ2JGLFVBQVUsR0FBRztJQUVoQyxPQUFPRztBQUNUO0FBRU8sU0FBU0osK0JBQStCRSxVQUFVO0lBQ3ZELElBQU1DLG1CQUFtQkQsV0FBV0csTUFBTSxDQUFDLFNBQUNGLGtCQUFrQkc7UUFDNUQsSUFBSUEsY0FBY0MsZ0JBQVUsRUFBRTtZQUM1QixJQUFNQyxrQkFBa0JGLFVBQVVHLFNBQVM7WUFFM0NOLG1CQUFtQixBQUFDQSxxQkFBcUIsT0FDcEIsQUFBQyxJQUFtQixPQUFoQkssaUJBQWdCLE9BQ2xCLEFBQUMsR0FBd0JBLE9BQXRCTCxrQkFBaUIsT0FBcUIsT0FBaEJLLGlCQUFnQjtRQUNsRTtRQUVBLE9BQU9MO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1QifQ==