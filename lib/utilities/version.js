"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _versionChanges = require("../versionChanges");
function updateVersion(version, versionChange) {
    switch(versionChange){
        case _versionChanges.BREAKING_VERSION_CHANGE:
            version.bumpMajorNumber();
            version.resetMinorNumber();
            version.resetPatchNumber();
            break;
        case _versionChanges.ADDITIVE_VERSION_CHANGE:
            version.bumpMinorNumber();
            version.resetPatchNumber();
            break;
        case _versionChanges.COSMETIC_VERSION_CHANGE:
            version.bumpPatchNumber();
            break;
    }
}
var _default = {
    updateVersion: updateVersion
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQlJFQUtJTkdfVkVSU0lPTl9DSEFOR0UsIEFERElUSVZFX1ZFUlNJT05fQ0hBTkdFLCBDT1NNRVRJQ19WRVJTSU9OX0NIQU5HRSB9IGZyb20gXCIuLi92ZXJzaW9uQ2hhbmdlc1wiO1xuXG5mdW5jdGlvbiB1cGRhdGVWZXJzaW9uKHZlcnNpb24sIHZlcnNpb25DaGFuZ2UpIHtcbiAgc3dpdGNoICh2ZXJzaW9uQ2hhbmdlKSB7XG4gICAgY2FzZSBCUkVBS0lOR19WRVJTSU9OX0NIQU5HRTpcbiAgICAgIHZlcnNpb24uYnVtcE1ham9yTnVtYmVyKCk7XG4gICAgICB2ZXJzaW9uLnJlc2V0TWlub3JOdW1iZXIoKTtcbiAgICAgIHZlcnNpb24ucmVzZXRQYXRjaE51bWJlcigpO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgQURESVRJVkVfVkVSU0lPTl9DSEFOR0U6XG4gICAgICB2ZXJzaW9uLmJ1bXBNaW5vck51bWJlcigpO1xuICAgICAgdmVyc2lvbi5yZXNldFBhdGNoTnVtYmVyKCk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBDT1NNRVRJQ19WRVJTSU9OX0NIQU5HRTpcbiAgICAgIHZlcnNpb24uYnVtcFBhdGNoTnVtYmVyKCk7XG5cbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXBkYXRlVmVyc2lvblxufTtcblxuIl0sIm5hbWVzIjpbInVwZGF0ZVZlcnNpb24iLCJ2ZXJzaW9uIiwidmVyc2lvbkNoYW5nZSIsIkJSRUFLSU5HX1ZFUlNJT05fQ0hBTkdFIiwiYnVtcE1ham9yTnVtYmVyIiwicmVzZXRNaW5vck51bWJlciIsInJlc2V0UGF0Y2hOdW1iZXIiLCJBRERJVElWRV9WRVJTSU9OX0NIQU5HRSIsImJ1bXBNaW5vck51bWJlciIsIkNPU01FVElDX1ZFUlNJT05fQ0hBTkdFIiwiYnVtcFBhdGNoTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7OEJBeEIwRjtBQUUxRixTQUFTQSxjQUFjQyxPQUFPLEVBQUVDLGFBQWEsRUFBRTtJQUM3QyxPQUFRQTtRQUNOLEtBQUtDLHVDQUF1QjtZQUMxQkYsUUFBUUcsZUFBZTtZQUN2QkgsUUFBUUksZ0JBQWdCO1lBQ3hCSixRQUFRSyxnQkFBZ0I7WUFFeEIsS0FBTTtRQUVSLEtBQUtDLHVDQUF1QjtZQUMxQk4sUUFBUU8sZUFBZTtZQUN2QlAsUUFBUUssZ0JBQWdCO1lBRXhCLEtBQU07UUFFUixLQUFLRyx1Q0FBdUI7WUFDMUJSLFFBQVFTLGVBQWU7WUFFdkIsS0FBTTtJQUNWO0FBQ0Y7SUFFQSxXQUFlO0lBQ2JWLGVBQUFBO0FBQ0YifQ==