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
                    if (project !== null) {
                        releaseContext = releaseContextFromProject(project, context);
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIGFzIG9jY2FtRmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyBhcyBuZWNlc3NhcnlGaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGxvYWRQcm9qZWN0IH0gPSBvY2NhbUZpbGVTeXN0ZW1VdGlsaXRpZXMsXG4gICAgICB7IGNvbmNhdGVuYXRlUGF0aHMgfSA9IHBhdGhVdGlsaXRpZXMsXG4gICAgICB7IHJlYWRGaWxlLCBpc0VudHJ5RmlsZSwgY2hlY2tFbnRyeUV4aXN0cyB9ID0gbmVjZXNzYXJ5RmlsZVN5c3RlbVV0aWxpdGllcyxcbiAgICAgIHsgcmVsZWFzZUNvbnRleHRGcm9tSlNPTiwgcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdCB9ID0gcmVsZWFzZUNvbnRleHRVdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VDb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9qZWN0c0RpcmVjdG9yeVBhdGggPSBwcm9jZXNzLmN3ZCgpLCAvLy9cbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoZW50cnlQYXRoKTtcblxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gZW50cnlQYXRoLCAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgICBqc29uU3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICAgIHByb2plY3QgPSBsb2FkUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICAgICAgaWYgKHByb2plY3QgIT09IG51bGwpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0KHByb2plY3QsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG59O1xuIl0sIm5hbWVzIjpbInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJsb2FkUHJvamVjdCIsIm9jY2FtRmlsZVN5c3RlbVV0aWxpdGllcyIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwicmVhZEZpbGUiLCJuZWNlc3NhcnlGaWxlU3lzdGVtVXRpbGl0aWVzIiwiaXNFbnRyeUZpbGUiLCJjaGVja0VudHJ5RXhpc3RzIiwicmVsZWFzZUNvbnRleHRGcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIiwicmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdCIsImRlcGVuZGVuY3kiLCJjb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJkZXBlbmRlbmN5TmFtZSIsImVudHJ5UGF0aCIsImVudHJ5RXhpc3RzIiwiZW50cnlGaWxlIiwiZmlsZVBhdGgiLCJjb250ZW50IiwianNvblN0cmluZyIsImpzb24iLCJwcm9qZWN0TmFtZSIsInByb2plY3QiLCJwcm9jZXNzIiwiY3dkIiwiZ2V0TmFtZSIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMENBO2VBQUE7O1FBL0JzQkE7ZUFBQUE7Ozs4QkFUa0I7K0JBQ3dCO3lCQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFNLEFBQUVDLGNBQWdCQyxvQ0FBd0IsQ0FBeENELGFBQ0YsQUFBRUUsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0FFLFdBQTRDQyw4QkFBNEIsQ0FBeEVELFVBQVVFLGNBQWtDRCw4QkFBNEIsQ0FBOURDLGFBQWFDLG1CQUFxQkYsOEJBQTRCLENBQWpERSxrQkFDdkJDLHlCQUFzREMsdUNBQXVCLENBQTdFRCx3QkFBd0JFLDRCQUE4QkQsdUNBQXVCLENBQXJEQztBQUV6QixTQUFlWCw2QkFBNkJZLFVBQVUsRUFBRUMsT0FBTzs7WUFDaEVDLGdCQUVFQyx1QkFDQUMsZ0JBQ0FDLFdBQ0FDLGFBR0VDLFdBR0VDLFVBQ0FDLFNBQ0FDLFlBQ0FDLE1BSUFDLGFBQ0FDOztZQW5CTlgsaUJBQWlCO1lBRWZDLHdCQUF3QlcsUUFBUUMsR0FBRyxJQUNuQ1gsaUJBQWlCSixXQUFXZ0IsT0FBTyxJQUNuQ1gsWUFBWWQsaUJBQWlCWSx1QkFBdUJDLGlCQUNwREUsY0FBY1YsaUJBQWlCUztZQUVyQyxJQUFJQyxhQUFhO2dCQUNUQyxZQUFZWixZQUFZVTtnQkFFOUIsSUFBSUUsV0FBVztvQkFDUEMsV0FBV0gsV0FDWEksVUFBVWhCLFNBQVNlLFdBQ25CRSxhQUFhRCxTQUNiRSxPQUFPTSxLQUFLQyxLQUFLLENBQUNSO29CQUV4QlIsaUJBQWlCTCx1QkFBdUJjLE1BQU1WO2dCQUNoRCxPQUFPO29CQUNDVyxjQUFjUixnQkFDZFMsVUFBVXhCLFlBQVl1QixhQUFhVDtvQkFFekMsSUFBSVUsWUFBWSxNQUFNO3dCQUNwQlgsaUJBQWlCSCwwQkFBMEJjLFNBQVNaO29CQUN0RDtnQkFDRjtZQUNGO1lBRUE7O2dCQUFPQzs7O0lBQ1Q7O0lBRUEsV0FBZTtJQUNiZCw4QkFBQUE7QUFDRiJ9