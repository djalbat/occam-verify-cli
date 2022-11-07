"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
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
module.exports = {
    updateVersion: updateVersion
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQlJFQUtJTkdfVkVSU0lPTl9DSEFOR0UsIEFERElUSVZFX1ZFUlNJT05fQ0hBTkdFLCBDT1NNRVRJQ19WRVJTSU9OX0NIQU5HRSB9IGZyb20gXCIuLi92ZXJzaW9uQ2hhbmdlc1wiO1xuXG5mdW5jdGlvbiB1cGRhdGVWZXJzaW9uKHZlcnNpb24sIHZlcnNpb25DaGFuZ2UpIHtcbiAgc3dpdGNoICh2ZXJzaW9uQ2hhbmdlKSB7XG4gICAgY2FzZSBCUkVBS0lOR19WRVJTSU9OX0NIQU5HRTpcbiAgICAgIHZlcnNpb24uYnVtcE1ham9yTnVtYmVyKCk7XG4gICAgICB2ZXJzaW9uLnJlc2V0TWlub3JOdW1iZXIoKTtcbiAgICAgIHZlcnNpb24ucmVzZXRQYXRjaE51bWJlcigpO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgQURESVRJVkVfVkVSU0lPTl9DSEFOR0U6XG4gICAgICB2ZXJzaW9uLmJ1bXBNaW5vck51bWJlcigpO1xuICAgICAgdmVyc2lvbi5yZXNldFBhdGNoTnVtYmVyKCk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBDT1NNRVRJQ19WRVJTSU9OX0NIQU5HRTpcbiAgICAgIHZlcnNpb24uYnVtcFBhdGNoTnVtYmVyKCk7XG5cbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1cGRhdGVWZXJzaW9uXG59O1xuXG4iXSwibmFtZXMiOlsidXBkYXRlVmVyc2lvbiIsInZlcnNpb24iLCJ2ZXJzaW9uQ2hhbmdlIiwiQlJFQUtJTkdfVkVSU0lPTl9DSEFOR0UiLCJidW1wTWFqb3JOdW1iZXIiLCJyZXNldE1pbm9yTnVtYmVyIiwicmVzZXRQYXRjaE51bWJlciIsIkFERElUSVZFX1ZFUlNJT05fQ0hBTkdFIiwiYnVtcE1pbm9yTnVtYmVyIiwiQ09TTUVUSUNfVkVSU0lPTl9DSEFOR0UiLCJidW1wUGF0Y2hOdW1iZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs4QkFFMEY7QUFFMUYsU0FBU0EsY0FBY0MsT0FBTyxFQUFFQyxhQUFhLEVBQUU7SUFDN0MsT0FBUUE7UUFDTixLQUFLQyx1Q0FBdUI7WUFDMUJGLFFBQVFHLGVBQWU7WUFDdkJILFFBQVFJLGdCQUFnQjtZQUN4QkosUUFBUUssZ0JBQWdCO1lBRXhCLEtBQU07UUFFUixLQUFLQyx1Q0FBdUI7WUFDMUJOLFFBQVFPLGVBQWU7WUFDdkJQLFFBQVFLLGdCQUFnQjtZQUV4QixLQUFNO1FBRVIsS0FBS0csdUNBQXVCO1lBQzFCUixRQUFRUyxlQUFlO1lBRXZCLEtBQU07SUFDVjtBQUNGO0FBRUFDLE9BQU9DLE9BQU8sR0FBRztJQUNmWixlQUFBQTtBQUNGIn0=