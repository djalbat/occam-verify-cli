"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyFiles;
    }
});
var _array = require("../utilities/array");
function verifyFiles() {
    var _loop = function() {
        var filePathsLength = filePaths.length;
        if (filePathsLength === 0) {
            filesVerified = true;
            return "break";
        }
        var verifiedFilePaths = [];
        filePaths.forEach(function(filePath) {
            var fileVerified = releaseContext.verifyFile(filePath);
            if (fileVerified) {
                var verifiedFilePath = filePath; ///
                verifiedFilePaths.push(verifiedFilePath);
            }
        });
        var verifiedFilePathsLength = verifiedFilePaths.length, fileVerified = verifiedFilePathsLength > 0;
        if (!fileVerified) {
            return "break";
        }
        (0, _array.leftDifference)(filePaths, verifiedFilePaths);
    };
    var releaseContext = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this;
    var filesVerified = false;
    var filePaths = releaseContext.getFilePaths();
    for(;;){
        var _ret = _loop();
        if (_ret === "break") break;
    }
    return filesVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxlZnREaWZmZXJlbmNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlGaWxlcyhyZWxlYXNlQ29udGV4dCA9IHRoaXMpIHtcbiAgbGV0IGZpbGVzVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBmaWxlUGF0aHMgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlUGF0aHMoKTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgZmlsZVBhdGhzTGVuZ3RoID0gZmlsZVBhdGhzLmxlbmd0aDtcblxuICAgIGlmIChmaWxlUGF0aHNMZW5ndGggPT09IDApIHtcbiAgICAgIGZpbGVzVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVQYXRocyA9IFtdO1xuXG4gICAgZmlsZVBhdGhzLmZvckVhY2goKGZpbGVQYXRoKSA9PiB7XG4gICAgICBjb25zdCBmaWxlVmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC52ZXJpZnlGaWxlKGZpbGVQYXRoKTtcblxuICAgICAgaWYgKGZpbGVWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEZpbGVQYXRoID0gZmlsZVBhdGg7ICAvLy9cblxuICAgICAgICB2ZXJpZmllZEZpbGVQYXRocy5wdXNoKHZlcmlmaWVkRmlsZVBhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdmVyaWZpZWRGaWxlUGF0aHNMZW5ndGggPSB2ZXJpZmllZEZpbGVQYXRocy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVZlcmlmaWVkID0gKHZlcmlmaWVkRmlsZVBhdGhzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoIWZpbGVWZXJpZmllZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGVmdERpZmZlcmVuY2UoZmlsZVBhdGhzLCB2ZXJpZmllZEZpbGVQYXRocyk7XG4gIH1cblxuICByZXR1cm4gZmlsZXNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlcyIsImZpbGVQYXRoc0xlbmd0aCIsImZpbGVQYXRocyIsImxlbmd0aCIsImZpbGVzVmVyaWZpZWQiLCJ2ZXJpZmllZEZpbGVQYXRocyIsImZvckVhY2giLCJmaWxlUGF0aCIsImZpbGVWZXJpZmllZCIsInJlbGVhc2VDb250ZXh0IiwidmVyaWZ5RmlsZSIsInZlcmlmaWVkRmlsZVBhdGgiLCJwdXNoIiwidmVyaWZpZWRGaWxlUGF0aHNMZW5ndGgiLCJsZWZ0RGlmZmVyZW5jZSIsImdldEZpbGVQYXRocyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OztxQkFGTztBQUVoQixTQUFTQSxjQUFtQzsyQkFLaEQ7UUFDUCxJQUFNQyxrQkFBa0JDLFVBQVVDLE1BQU07UUFFeEMsSUFBSUYsb0JBQW9CLEdBQUc7WUFDekJHLGdCQUFnQixJQUFJO1lBRXBCLE9BQUE7UUFDRixDQUFDO1FBRUQsSUFBTUMsb0JBQW9CLEVBQUU7UUFFNUJILFVBQVVJLE9BQU8sQ0FBQyxTQUFDQyxVQUFhO1lBQzlCLElBQU1DLGVBQWVDLGVBQWVDLFVBQVUsQ0FBQ0g7WUFFL0MsSUFBSUMsY0FBYztnQkFDaEIsSUFBTUcsbUJBQW1CSixVQUFXLEdBQUc7Z0JBRXZDRixrQkFBa0JPLElBQUksQ0FBQ0Q7WUFDekIsQ0FBQztRQUNIO1FBRUEsSUFBTUUsMEJBQTBCUixrQkFBa0JGLE1BQU0sRUFDbERLLGVBQWdCSywwQkFBMEI7UUFFaEQsSUFBSSxDQUFDTCxjQUFjO1lBQ2pCLE9BQUE7UUFDRixDQUFDO1FBRURNLElBQUFBLHFCQUFjLEVBQUNaLFdBQVdHO0lBQzVCO1FBbENrQ0ksaUJBQUFBLGlFQUFpQixJQUFJO0lBQ3ZELElBQUlMLGdCQUFnQixLQUFLO0lBRXpCLElBQU1GLFlBQVlPLGVBQWVNLFlBQVk7SUFFN0M7Ozs7SUErQkEsT0FBT1g7QUFDVCJ9