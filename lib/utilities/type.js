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
    var superTypesString = superTypesStringFromSuperTypes(superTypes), string = superTypesString !== null ? "'".concat(typeName, "':").concat(superTypesString) : typeName; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVOYW1lTmFtZUFuZFN1cGVyVHlwZXModHlwZU5hbWUsIHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSxcbiAgICAgICAgc3RyaW5nID0gKHN1cGVyVHlwZXNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBgJyR7dHlwZU5hbWV9Jzoke3N1cGVyVHlwZXNTdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICB0eXBlTmFtZTsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gIGNvbnN0IHN1cGVyVHlwZXNTdHJpbmcgPSBzdXBlclR5cGVzLnJlZHVjZSgoc3VwZXJUeXBlc1N0cmluZywgc3VwZXJUeXBlKSA9PiB7XG4gICAgaWYgKHN1cGVyVHlwZSAhPT0gb2JqZWN0VHlwZSkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBzdXBlclR5cGVzU3RyaW5nID0gKHN1cGVyVHlwZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAnJHtzdXBlclR5cGVTdHJpbmd9J2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdXBlclR5cGVzU3RyaW5nfSwgJyR7c3VwZXJUeXBlU3RyaW5nfSdgO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwZXJUeXBlc1N0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdHJpbmdGcm9tVHlwZU5hbWVOYW1lQW5kU3VwZXJUeXBlcyIsInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsInR5cGVOYW1lIiwic3VwZXJUeXBlcyIsInN1cGVyVHlwZXNTdHJpbmciLCJzdHJpbmciLCJyZWR1Y2UiLCJzdXBlclR5cGUiLCJvYmplY3RUeXBlIiwic3VwZXJUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJZ0JBO2VBQUFBOztRQVNBQztlQUFBQTs7O29CQVhXO0FBRXBCLFNBQVNELG9DQUFvQ0UsUUFBUSxFQUFFQyxVQUFVO0lBQ3RFLElBQU1DLG1CQUFtQkgsK0JBQStCRSxhQUNsREUsU0FBUyxBQUFDRCxxQkFBcUIsT0FDcEIsQUFBQyxJQUFnQkEsT0FBYkYsVUFBUyxNQUFxQixPQUFqQkUsb0JBQ2ZGLFVBQVUsR0FBRztJQUVoQyxPQUFPRztBQUNUO0FBRU8sU0FBU0osK0JBQStCRSxVQUFVO0lBQ3ZELElBQU1DLG1CQUFtQkQsV0FBV0csTUFBTSxDQUFDLFNBQUNGLGtCQUFrQkc7UUFDNUQsSUFBSUEsY0FBY0MsZ0JBQVUsRUFBRTtZQUM1QixJQUFNQyxrQkFBa0JGLFVBQVVHLFNBQVM7WUFFM0NOLG1CQUFtQixBQUFDQSxxQkFBcUIsT0FDcEIsQUFBQyxJQUFtQixPQUFoQkssaUJBQWdCLE9BQ2xCLEFBQUMsR0FBd0JBLE9BQXRCTCxrQkFBaUIsT0FBcUIsT0FBaEJLLGlCQUFnQjtRQUNsRTtRQUVBLE9BQU9MO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1QifQ==