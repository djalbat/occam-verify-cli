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
    get stringFromTypeNameTypePrefixNameAndSuperTypes () {
        return stringFromTypeNameTypePrefixNameAndSuperTypes;
    },
    get superTypesStringFromSuperTypes () {
        return superTypesStringFromSuperTypes;
    }
});
var _type = require("../structure/type");
function stringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes) {
    var string;
    string = typePrefixName !== null ? "".concat(typePrefixName).concat(typeName) : typeName;
    var superTypesString = superTypesStringFromSuperTypes(superTypes);
    if (superTypesString !== null) {
        string = "".concat(string, ":").concat(superTypesString);
    }
    return string;
}
function superTypesStringFromSuperTypes(superTypes) {
    var superTypesString = superTypes.reduce(function(superTypesString, superType) {
        if (superType !== _type.baseType) {
            var superTypeString = superType.getString();
            superTypesString = superTypesString === null ? "'".concat(superTypeString, "'") : "".concat(superTypesString, ", '").concat(superTypeString, "'");
        }
        return superTypesString;
    }, null);
    return superTypesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYmFzZVR5cGUgfSBmcm9tIFwiLi4vc3RydWN0dXJlL3R5cGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyh0eXBlTmFtZSwgdHlwZVByZWZpeE5hbWUsIHN1cGVyVHlwZXMpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSAodHlwZVByZWZpeE5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICBgJHt0eXBlUHJlZml4TmFtZX0ke3R5cGVOYW1lfWA6XG4gICAgICAgICAgICAgICB0eXBlTmFtZTtcblxuICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpO1xuXG4gIGlmIChzdXBlclR5cGVzU3RyaW5nICE9PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke3N1cGVyVHlwZXNTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICBjb25zdCBzdXBlclR5cGVzU3RyaW5nID0gc3VwZXJUeXBlcy5yZWR1Y2UoKHN1cGVyVHlwZXNTdHJpbmcsIHN1cGVyVHlwZSkgPT4ge1xuICAgIGlmIChzdXBlclR5cGUgIT09IGJhc2VUeXBlKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSAoc3VwZXJUeXBlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCcke3N1cGVyVHlwZVN0cmluZ30nYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cGVyVHlwZXNTdHJpbmd9LCAnJHtzdXBlclR5cGVTdHJpbmd9J2A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0Zyb21UeXBlTmFtZVR5cGVQcmVmaXhOYW1lQW5kU3VwZXJUeXBlcyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsInR5cGVOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwic3RyaW5nIiwic3VwZXJUeXBlc1N0cmluZyIsInJlZHVjZSIsInN1cGVyVHlwZSIsImJhc2VUeXBlIiwic3VwZXJUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJZ0JBO2VBQUFBOztRQWdCQUM7ZUFBQUE7OztvQkFsQlM7QUFFbEIsU0FBU0QsOENBQThDRSxRQUFRLEVBQUVDLGNBQWMsRUFBRUMsVUFBVTtJQUNoRyxJQUFJQztJQUVKQSxTQUFTLEFBQUNGLG1CQUFtQixPQUNsQixBQUFDLEdBQW1CRCxPQUFqQkMsZ0JBQTBCLE9BQVRELFlBQ2xCQTtJQUViLElBQU1JLG1CQUFtQkwsK0JBQStCRztJQUV4RCxJQUFJRSxxQkFBcUIsTUFBTTtRQUM3QkQsU0FBUyxBQUFDLEdBQVlDLE9BQVZELFFBQU8sS0FBb0IsT0FBakJDO0lBQ3hCO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNKLCtCQUErQkcsVUFBVTtJQUN2RCxJQUFNRSxtQkFBbUJGLFdBQVdHLE1BQU0sQ0FBQyxTQUFDRCxrQkFBa0JFO1FBQzVELElBQUlBLGNBQWNDLGNBQVEsRUFBRTtZQUMxQixJQUFNQyxrQkFBa0JGLFVBQVVHLFNBQVM7WUFFM0NMLG1CQUFtQixBQUFDQSxxQkFBcUIsT0FDcEIsQUFBQyxJQUFtQixPQUFoQkksaUJBQWdCLE9BQ2xCLEFBQUMsR0FBd0JBLE9BQXRCSixrQkFBaUIsT0FBcUIsT0FBaEJJLGlCQUFnQjtRQUNsRTtRQUVBLE9BQU9KO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1QifQ==