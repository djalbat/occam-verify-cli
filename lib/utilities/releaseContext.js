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
    get default () {
        return _default;
    },
    get releaseContextFromDependency () {
        return releaseContextFromDependency;
    }
});
var _occamlanguages = require("occam-languages");
var _occamfilesystem = require("occam-file-system");
var _necessary = require("necessary");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var loadProject = _occamfilesystem.fileSystemUtilities.loadProject, concatenatePaths = _necessary.pathUtilities.concatenatePaths, readFile = _necessary.fileSystemUtilities.readFile, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, checkEntryExists = _necessary.fileSystemUtilities.checkEntryExists, releaseContextFromJSON = _occamlanguages.releaseContextUtilities.releaseContextFromJSON, releaseContextFromProject = _occamlanguages.releaseContextUtilities.releaseContextFromProject;
function releaseContextFromDependency(dependency, context) {
    return _async_to_generator(function() {
        var releaseContext, projectsDirectoryPath, dependencyName, entryPath, entryExists, entryFile, filePath, content, jsonString, json, projectName, project;
        return _ts_generator(this, function(_state) {
            releaseContext = null;
            projectsDirectoryPath = process.cwd(), dependencyName = dependency.getName(), entryPath = concatenatePaths(projectsDirectoryPath, dependencyName), entryExists = checkEntryExists(entryPath);
            if (entryExists) {
                entryFile = isEntryFile(entryPath);
                if (entryFile) {
                    filePath = entryPath, content = readFile(filePath), jsonString = content, json = JSON.parse(jsonString);
                    releaseContext = releaseContextFromJSON(json, context);
                } else {
                    projectName = dependencyName, project = loadProject(projectName, projectsDirectoryPath);
                    releaseContext = releaseContextFromProject(project, context);
                }
            }
            return [
                2,
                releaseContext
            ];
        });
    })();
}
var _default = {
    releaseContextFromDependency: releaseContextFromDependency
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgZmlsZVN5c3RlbVV0aWxpdGllcyBhcyBvY2NhbUZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgYXMgbmVjZXNzYXJ5RmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBsb2FkUHJvamVjdCB9ID0gb2NjYW1GaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyByZWFkRmlsZSwgaXNFbnRyeUZpbGUsIGNoZWNrRW50cnlFeGlzdHMgfSA9IG5lY2Vzc2FyeUZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IHJlbGVhc2VDb250ZXh0RnJvbUpTT04sIHJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QgfSA9IHJlbGVhc2VDb250ZXh0VXRpbGl0aWVzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvamVjdHNEaXJlY3RvcnlQYXRoID0gcHJvY2Vzcy5jd2QoKSwgLy8vXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGVudHJ5UGF0aCwgLy8vXG4gICAgICAgICAgICBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgICAganNvblN0cmluZyA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgICBwcm9qZWN0ID0gbG9hZFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdChwcm9qZWN0LCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeVxufTtcbiJdLCJuYW1lcyI6WyJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwibG9hZFByb2plY3QiLCJvY2NhbUZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsInJlYWRGaWxlIiwibmVjZXNzYXJ5RmlsZVN5c3RlbVV0aWxpdGllcyIsImlzRW50cnlGaWxlIiwiY2hlY2tFbnRyeUV4aXN0cyIsInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dFV0aWxpdGllcyIsInJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QiLCJkZXBlbmRlbmN5IiwiY29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZGVwZW5kZW5jeU5hbWUiLCJlbnRyeVBhdGgiLCJlbnRyeUV4aXN0cyIsImVudHJ5RmlsZSIsImZpbGVQYXRoIiwiY29udGVudCIsImpzb25TdHJpbmciLCJqc29uIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0IiwicHJvY2VzcyIsImN3ZCIsImdldE5hbWUiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdDQTtlQUFBOztRQTdCc0JBO2VBQUFBOzs7OEJBVGtCOytCQUN3Qjt5QkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkYsSUFBTSxBQUFFQyxjQUFnQkMsb0NBQXdCLENBQXhDRCxhQUNGLEFBQUVFLG1CQUFxQkMsd0JBQWEsQ0FBbENELGtCQUNBRSxXQUE0Q0MsOEJBQTRCLENBQXhFRCxVQUFVRSxjQUFrQ0QsOEJBQTRCLENBQTlEQyxhQUFhQyxtQkFBcUJGLDhCQUE0QixDQUFqREUsa0JBQ3ZCQyx5QkFBc0RDLHVDQUF1QixDQUE3RUQsd0JBQXdCRSw0QkFBOEJELHVDQUF1QixDQUFyREM7QUFFekIsU0FBZVgsNkJBQTZCWSxVQUFVLEVBQUVDLE9BQU87O1lBQ2hFQyxnQkFFRUMsdUJBQ0FDLGdCQUNBQyxXQUNBQyxhQUdFQyxXQUdFQyxVQUNBQyxTQUNBQyxZQUNBQyxNQUlBQyxhQUNBQzs7WUFuQk5YLGlCQUFpQjtZQUVmQyx3QkFBd0JXLFFBQVFDLEdBQUcsSUFDbkNYLGlCQUFpQkosV0FBV2dCLE9BQU8sSUFDbkNYLFlBQVlkLGlCQUFpQlksdUJBQXVCQyxpQkFDcERFLGNBQWNWLGlCQUFpQlM7WUFFckMsSUFBSUMsYUFBYTtnQkFDVEMsWUFBWVosWUFBWVU7Z0JBRTlCLElBQUlFLFdBQVc7b0JBQ1BDLFdBQVdILFdBQ1hJLFVBQVVoQixTQUFTZSxXQUNuQkUsYUFBYUQsU0FDYkUsT0FBT00sS0FBS0MsS0FBSyxDQUFDUjtvQkFFeEJSLGlCQUFpQkwsdUJBQXVCYyxNQUFNVjtnQkFDaEQsT0FBTztvQkFDQ1csY0FBY1IsZ0JBQ2RTLFVBQVV4QixZQUFZdUIsYUFBYVQ7b0JBRXpDRCxpQkFBaUJILDBCQUEwQmMsU0FBU1o7Z0JBQ3REO1lBQ0Y7WUFFQTs7Z0JBQU9DOzs7SUFDVDs7SUFFQSxXQUFlO0lBQ2JkLDhCQUFBQTtBQUNGIn0=