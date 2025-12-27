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
var _type = require("../ontology/type");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYmFzZVR5cGUgfSBmcm9tIFwiLi4vb250b2xvZ3kvdHlwZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcykge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9ICh0eXBlUHJlZml4TmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgIGAke3R5cGVQcmVmaXhOYW1lfSR7dHlwZU5hbWV9YDpcbiAgICAgICAgICAgICAgIHR5cGVOYW1lO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgaWYgKHN1cGVyVHlwZXNTdHJpbmcgIT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7c3VwZXJUeXBlc1N0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzLnJlZHVjZSgoc3VwZXJUeXBlc1N0cmluZywgc3VwZXJUeXBlKSA9PiB7XG4gICAgaWYgKHN1cGVyVHlwZSAhPT0gYmFzZVR5cGUpIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgc3VwZXJUeXBlc1N0cmluZyA9IChzdXBlclR5cGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJyR7c3VwZXJUeXBlU3RyaW5nfSdgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3VwZXJUeXBlc1N0cmluZ30sICcke3N1cGVyVHlwZVN0cmluZ30nYDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cGVyVHlwZXNTdHJpbmc7XG59XG4iXSwibmFtZXMiOlsic3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzIiwic3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzIiwidHlwZU5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJzdHJpbmciLCJzdXBlclR5cGVzU3RyaW5nIiwicmVkdWNlIiwic3VwZXJUeXBlIiwiYmFzZVR5cGUiLCJzdXBlclR5cGVTdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUlnQkE7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7O29CQWxCUztBQUVsQixTQUFTRCw4Q0FBOENFLFFBQVEsRUFBRUMsY0FBYyxFQUFFQyxVQUFVO0lBQ2hHLElBQUlDO0lBRUpBLFNBQVMsQUFBQ0YsbUJBQW1CLE9BQ2xCLEFBQUMsR0FBbUJELE9BQWpCQyxnQkFBMEIsT0FBVEQsWUFDbEJBO0lBRWIsSUFBTUksbUJBQW1CTCwrQkFBK0JHO0lBRXhELElBQUlFLHFCQUFxQixNQUFNO1FBQzdCRCxTQUFTLEFBQUMsR0FBWUMsT0FBVkQsUUFBTyxLQUFvQixPQUFqQkM7SUFDeEI7SUFFQSxPQUFPRDtBQUNUO0FBRU8sU0FBU0osK0JBQStCRyxVQUFVO0lBQ3ZELElBQU1FLG1CQUFtQkYsV0FBV0csTUFBTSxDQUFDLFNBQUNELGtCQUFrQkU7UUFDNUQsSUFBSUEsY0FBY0MsY0FBUSxFQUFFO1lBQzFCLElBQU1DLGtCQUFrQkYsVUFBVUcsU0FBUztZQUUzQ0wsbUJBQW1CLEFBQUNBLHFCQUFxQixPQUNwQixBQUFDLElBQW1CLE9BQWhCSSxpQkFBZ0IsT0FDbEIsQUFBQyxHQUF3QkEsT0FBdEJKLGtCQUFpQixPQUFxQixPQUFoQkksaUJBQWdCO1FBQ2xFO1FBRUEsT0FBT0o7SUFDVCxHQUFHO0lBRUgsT0FBT0E7QUFDVCJ9