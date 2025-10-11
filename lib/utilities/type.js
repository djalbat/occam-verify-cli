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
var _type = require("../dom/type");
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
        if (superType !== _type.objectType) {
            var superTypeString = superType.getString();
            superTypesString = superTypesString === null ? "'".concat(superTypeString, "'") : "".concat(superTypesString, ", '").concat(superTypeString, "'");
        }
        return superTypesString;
    }, null);
    return superTypesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzKHR5cGVOYW1lLCB0eXBlUHJlZml4TmFtZSwgc3VwZXJUeXBlcykge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9ICh0eXBlUHJlZml4TmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgIGAke3R5cGVQcmVmaXhOYW1lfSR7dHlwZU5hbWV9YDpcbiAgICAgICAgICAgICAgIHR5cGVOYW1lO1xuXG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMoc3VwZXJUeXBlcyk7XG5cbiAgaWYgKHN1cGVyVHlwZXNTdHJpbmcgIT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7c3VwZXJUeXBlc1N0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzLnJlZHVjZSgoc3VwZXJUeXBlc1N0cmluZywgc3VwZXJUeXBlKSA9PiB7XG4gICAgaWYgKHN1cGVyVHlwZSAhPT0gb2JqZWN0VHlwZSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBzdXBlclR5cGVzU3RyaW5nID0gKHN1cGVyVHlwZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAnJHtzdXBlclR5cGVTdHJpbmd9J2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdXBlclR5cGVzU3RyaW5nfSwgJyR7c3VwZXJUeXBlU3RyaW5nfSdgO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMiLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJ0eXBlTmFtZSIsInR5cGVQcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInN0cmluZyIsInN1cGVyVHlwZXNTdHJpbmciLCJyZWR1Y2UiLCJzdXBlclR5cGUiLCJvYmplY3RUeXBlIiwic3VwZXJUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJZ0JBO2VBQUFBOztRQWdCQUM7ZUFBQUE7OztvQkFsQlc7QUFFcEIsU0FBU0QsOENBQThDRSxRQUFRLEVBQUVDLGNBQWMsRUFBRUMsVUFBVTtJQUNoRyxJQUFJQztJQUVKQSxTQUFTLEFBQUNGLG1CQUFtQixPQUNsQixBQUFDLEdBQW1CRCxPQUFqQkMsZ0JBQTBCLE9BQVRELFlBQ2xCQTtJQUViLElBQU1JLG1CQUFtQkwsK0JBQStCRztJQUV4RCxJQUFJRSxxQkFBcUIsTUFBTTtRQUM3QkQsU0FBUyxBQUFDLEdBQVlDLE9BQVZELFFBQU8sS0FBb0IsT0FBakJDO0lBQ3hCO0lBRUEsT0FBT0Q7QUFDVDtBQUVPLFNBQVNKLCtCQUErQkcsVUFBVTtJQUN2RCxJQUFNRSxtQkFBbUJGLFdBQVdHLE1BQU0sQ0FBQyxTQUFDRCxrQkFBa0JFO1FBQzVELElBQUlBLGNBQWNDLGdCQUFVLEVBQUU7WUFDNUIsSUFBTUMsa0JBQWtCRixVQUFVRyxTQUFTO1lBRTNDTCxtQkFBbUIsQUFBQ0EscUJBQXFCLE9BQ3BCLEFBQUMsSUFBbUIsT0FBaEJJLGlCQUFnQixPQUNsQixBQUFDLEdBQXdCQSxPQUF0Qkosa0JBQWlCLE9BQXFCLE9BQWhCSSxpQkFBZ0I7UUFDbEU7UUFFQSxPQUFPSjtJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUIn0=