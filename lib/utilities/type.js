"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "superTypesStringFromSuperTypes", {
    enumerable: true,
    get: function() {
        return superTypesStringFromSuperTypes;
    }
});
var _type = require("../dom/type");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3VwZXJUeXBlc1N0cmluZ0Zyb21TdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgY29uc3Qgc3VwZXJUeXBlc1N0cmluZyA9IHN1cGVyVHlwZXMucmVkdWNlKChzdXBlclR5cGVzU3RyaW5nLCBzdXBlclR5cGUpID0+IHtcbiAgICBpZiAoc3VwZXJUeXBlICE9PSBvYmplY3RUeXBlKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN1cGVyVHlwZXNTdHJpbmcgPSAoc3VwZXJUeXBlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCcke3N1cGVyVHlwZVN0cmluZ30nYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cGVyVHlwZXNTdHJpbmd9LCAnJHtzdXBlclR5cGVTdHJpbmd9J2A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdXBlclR5cGVzU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN1cGVyVHlwZXNTdHJpbmdGcm9tU3VwZXJUeXBlcyIsInN1cGVyVHlwZXMiLCJzdXBlclR5cGVzU3RyaW5nIiwicmVkdWNlIiwic3VwZXJUeXBlIiwib2JqZWN0VHlwZSIsInN1cGVyVHlwZVN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7b0JBRlc7QUFFcEIsU0FBU0EsK0JBQStCQyxVQUFVO0lBQ3ZELElBQU1DLG1CQUFtQkQsV0FBV0UsTUFBTSxDQUFDLFNBQUNELGtCQUFrQkU7UUFDNUQsSUFBSUEsY0FBY0MsZ0JBQVUsRUFBRTtZQUM1QixJQUFNQyxrQkFBa0JGLFVBQVVHLFNBQVM7WUFFM0NMLG1CQUFtQixBQUFDQSxxQkFBcUIsT0FDcEIsQUFBQyxJQUFtQixPQUFoQkksaUJBQWdCLE9BQ2xCLEFBQUMsR0FBd0JBLE9BQXRCSixrQkFBaUIsT0FBcUIsT0FBaEJJLGlCQUFnQjtRQUNsRTtRQUVBLE9BQU9KO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1QifQ==