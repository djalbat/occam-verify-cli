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
var _type = require("../element/type");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYmFzZVR5cGUgfSBmcm9tIFwiLi4vZWxlbWVudC90eXBlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHR5cGVQcmVmaXhOYW1lLCBzdXBlclR5cGVzKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gKHR5cGVQcmVmaXhOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgYCR7dHlwZVByZWZpeE5hbWV9JHt0eXBlTmFtZX1gOlxuICAgICAgICAgICAgICAgdHlwZU5hbWU7XG5cbiAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKTtcblxuICBpZiAoc3VwZXJUeXBlc1N0cmluZyAhPT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHtzdXBlclR5cGVzU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXMucmVkdWNlKChzdXBlclR5cGVzU3RyaW5nLCBzdXBlclR5cGUpID0+IHtcbiAgICBpZiAoc3VwZXJUeXBlICE9PSBiYXNlVHlwZSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBzdXBlclR5cGVzU3RyaW5nID0gKHN1cGVyVHlwZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAnJHtzdXBlclR5cGVTdHJpbmd9J2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdXBlclR5cGVzU3RyaW5nfSwgJyR7c3VwZXJUeXBlU3RyaW5nfSdgO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdHJpbmdGcm9tVHlwZU5hbWVUeXBlUHJlZml4TmFtZUFuZFN1cGVyVHlwZXMiLCJzdXBlclR5cGVzU3RyaW5nRnJvbVN1cGVyVHlwZXMiLCJ0eXBlTmFtZSIsInR5cGVQcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInN0cmluZyIsInN1cGVyVHlwZXNTdHJpbmciLCJyZWR1Y2UiLCJzdXBlclR5cGUiLCJiYXNlVHlwZSIsInN1cGVyVHlwZVN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWdCQTtlQUFBQTs7UUFnQkFDO2VBQUFBOzs7b0JBbEJTO0FBRWxCLFNBQVNELDhDQUE4Q0UsUUFBUSxFQUFFQyxjQUFjLEVBQUVDLFVBQVU7SUFDaEcsSUFBSUM7SUFFSkEsU0FBUyxBQUFDRixtQkFBbUIsT0FDbEIsQUFBQyxHQUFtQkQsT0FBakJDLGdCQUEwQixPQUFURCxZQUNsQkE7SUFFYixJQUFNSSxtQkFBbUJMLCtCQUErQkc7SUFFeEQsSUFBSUUscUJBQXFCLE1BQU07UUFDN0JELFNBQVMsQUFBQyxHQUFZQyxPQUFWRCxRQUFPLEtBQW9CLE9BQWpCQztJQUN4QjtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTSiwrQkFBK0JHLFVBQVU7SUFDdkQsSUFBTUUsbUJBQW1CRixXQUFXRyxNQUFNLENBQUMsU0FBQ0Qsa0JBQWtCRTtRQUM1RCxJQUFJQSxjQUFjQyxjQUFRLEVBQUU7WUFDMUIsSUFBTUMsa0JBQWtCRixVQUFVRyxTQUFTO1lBRTNDTCxtQkFBbUIsQUFBQ0EscUJBQXFCLE9BQ3BCLEFBQUMsSUFBbUIsT0FBaEJJLGlCQUFnQixPQUNsQixBQUFDLEdBQXdCQSxPQUF0Qkosa0JBQWlCLE9BQXFCLE9BQWhCSSxpQkFBZ0I7UUFDbEU7UUFFQSxPQUFPSjtJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUIn0=