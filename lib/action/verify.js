"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyAction;
    }
});
require("../preamble");
var _occammodel = require("occam-model");
var _occamlanguages = require("occam-languages");
var _fileContext = require("../utilities/fileContext");
var _releaseContext = require("../utilities/releaseContext");
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
var releaseContextFromJSON = _occamlanguages.releaseContextUtilities.releaseContextFromJSON, createReleaseContext = _occamlanguages.verificationUtilities.createReleaseContext, verifyReleaseContext = _occamlanguages.verificationUtilities.verifyReleaseContext, initialiseReleaseContext = _occamlanguages.verificationUtilities.initialiseReleaseContext;
function verifyAction(name, log) {
    return _async_to_generator(function() {
        var callback, releaseContextMap, context, dependentNames, dependency, success, releaseName, releaseContext, released, dependentName, dependentReleased, releaseVerifies, json, entries;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    callback = function(context, filePath, lineIndex) {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2
                                ];
                            });
                        ///
                        })();
                    }, releaseContextMap = {}, context = {
                        log: log,
                        callback: callback,
                        releaseContextMap: releaseContextMap,
                        FileContextFromFilePath: _fileContext.FileContextFromFilePath,
                        releaseContextFromDependency: _releaseContext.releaseContextFromDependency
                    };
                    dependentNames = [], dependency = _occammodel.Dependency.fromName(name);
                    return [
                        4,
                        createReleaseContext(dependency, dependentNames, context)
                    ];
                case 1:
                    success = _state.sent();
                    if (!success) {
                        log.warning("The '".concat(name, "' project or package cannot be created."));
                        return [
                            2
                        ];
                    }
                    releaseName = name, releaseContext = releaseContextMap[releaseName], released = releaseContext.isReleased();
                    if (released) {
                        log.warning("The '".concat(name, "' package does not need to be verified."));
                        return [
                            2
                        ];
                    }
                    initialiseReleaseContext(dependency, context);
                    dependentName = null, dependentReleased = false;
                    return [
                        4,
                        verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap)
                    ];
                case 2:
                    releaseVerifies = _state.sent();
                    if (!releaseVerifies) {
                        log.warning("The '".concat(name, "' project or package cannot be verified."));
                        return [
                            2
                        ];
                    }
                    json = releaseContext.toJSON(), entries = releaseContext.getEntries();
                    (function() {
                        var context;
                        var entriesJSON = entries.toJSON();
                        entries = entriesJSON; ///
                        context = json; ///
                        json = {
                            name: name,
                            entries: entries,
                            context: context
                        };
                        context = {
                            log: log,
                            callback: callback
                        };
                        var releaseContext = releaseContextFromJSON(json, context), releaseContexts = [
                            releaseContext
                        ];
                        releaseContext.initialise(releaseContexts, _fileContext.FileContextFromFilePath);
                    })();
                    return [
                        2
                    ];
            }
        });
    // }
    // catch (error) {
    //   log.error(error);
    // }
    })();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyB2ZXJpZmljYXRpb25VdGlsaXRpZXMsIHJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZUNvbnRleHRcIjtcbmltcG9ydCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG5cbmNvbnN0IHsgcmVsZWFzZUNvbnRleHRGcm9tSlNPTiB9ID0gcmVsZWFzZUNvbnRleHRVdGlsaXRpZXMsXG4gICAgICB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCB2ZXJpZnlSZWxlYXNlQ29udGV4dCwgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IH0gPSB2ZXJpZmljYXRpb25VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUFjdGlvbihuYW1lLCBsb2cpIHtcbiAgY29uc3QgY2FsbGJhY2sgPSBhc3luYyAoY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCkgPT4ge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9LFxuICAgICAgICByZWxlYXNlQ29udGV4dE1hcCA9IHt9LFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGxvZyxcbiAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dE1hcCxcbiAgICAgICAgICBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG4gICAgICAgIH1cblxuICAvLyB0cnkge1xuXG4gICAgY29uc3QgZGVwZW5kZW50TmFtZXMgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmN5ID0gRGVwZW5kZW5jeS5mcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdWNjZXNzID0gYXdhaXQgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgIHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKHJlbGVhc2VkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwYWNrYWdlIGRvZXMgbm90IG5lZWQgdG8gYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbnROYW1lID0gbnVsbCxcbiAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllcyA9IGF3YWl0IHZlcmlmeVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKCFyZWxlYXNlVmVyaWZpZXMpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQganNvbiA9IHJlbGVhc2VDb250ZXh0LnRvSlNPTigpLFxuICAgICAgICBlbnRyaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RW50cmllcygpO1xuXG4gICAgKCgpID0+IHtcblxuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnN0IGVudHJpZXNKU09OID0gZW50cmllcy50b0pTT04oKTtcblxuICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OOyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBqc29uOyAvLy9cblxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW50cmllcyxcbiAgICAgICAgY29udGV4dFxuICAgICAgfTtcblxuICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgbG9nLFxuICAgICAgICBjYWxsYmFja1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gW1xuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFxuICAgICAgICAgICAgXTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKTtcblxuICAgIH0pKCk7XG5cblxuICAvLyB9XG4gIC8vIGNhdGNoIChlcnJvcikge1xuICAvLyAgIGxvZy5lcnJvcihlcnJvcik7XG4gIC8vIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBY3Rpb24iLCJyZWxlYXNlQ29udGV4dEZyb21KU09OIiwicmVsZWFzZUNvbnRleHRVdGlsaXRpZXMiLCJjcmVhdGVSZWxlYXNlQ29udGV4dCIsInZlcmlmaWNhdGlvblV0aWxpdGllcyIsInZlcmlmeVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwibmFtZSIsImxvZyIsImNhbGxiYWNrIiwicmVsZWFzZUNvbnRleHRNYXAiLCJjb250ZXh0IiwiZGVwZW5kZW50TmFtZXMiLCJkZXBlbmRlbmN5Iiwic3VjY2VzcyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsInJlbGVhc2VWZXJpZmllcyIsImpzb24iLCJlbnRyaWVzIiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJEZXBlbmRlbmN5IiwiZnJvbU5hbWUiLCJ3YXJuaW5nIiwiaXNSZWxlYXNlZCIsInRvSlNPTiIsImdldEVudHJpZXMiLCJlbnRyaWVzSlNPTiIsInJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBOEJBOzs7UUFYdkI7MEJBRW9COzhCQUNvQzsyQkFFdkI7OEJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTSxBQUFFQyx5QkFBMkJDLHVDQUF1QixDQUFsREQsd0JBQ0FFLHVCQUF5RUMscUNBQXFCLENBQTlGRCxzQkFBc0JFLHVCQUFtREQscUNBQXFCLENBQXhFQyxzQkFBc0JDLDJCQUE2QkYscUNBQXFCLENBQWxERTtBQUVyQyxTQUFlTixhQUFhTyxJQUFJLEVBQUVDLEdBQUc7O1lBQzVDQyxVQUdBQyxtQkFDQUMsU0FVRUMsZ0JBQ0FDLFlBQ0FDLFNBUUFDLGFBQ0FDLGdCQUNBQyxVQVVBQyxlQUNBQyxtQkFDQUMsaUJBUUZDLE1BQ0FDOzs7O29CQS9DQWIsV0FBVyxTQUFPRSxTQUFTWSxVQUFVQzs7Ozs7Ozt3QkFDbkMsR0FBRzt3QkFDTDt1QkFDQWQsb0JBQW9CLENBQUMsR0FDckJDLFVBQVU7d0JBQ1JILEtBQUFBO3dCQUNBQyxVQUFBQTt3QkFDQUMsbUJBQUFBO3dCQUNBZSx5QkFBQUEsb0NBQXVCO3dCQUN2QkMsOEJBQUFBLDRDQUE0QjtvQkFDOUI7b0JBSUVkLHFCQUNBQyxhQUFhYyxzQkFBVSxDQUFDQyxRQUFRLENBQUNyQjtvQkFDdkI7O3dCQUFNSixxQkFBcUJVLFlBQVlELGdCQUFnQkQ7OztvQkFBakVHLFVBQVU7b0JBRWhCLElBQUksQ0FBQ0EsU0FBUzt3QkFDWk4sSUFBSXFCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTHRCLE1BQUs7d0JBRXpCOzs7b0JBQ0Y7b0JBRU1RLGNBQWNSLE1BQ2RTLGlCQUFpQk4saUJBQWlCLENBQUNLLFlBQVksRUFDL0NFLFdBQVdELGVBQWVjLFVBQVU7b0JBRTFDLElBQUliLFVBQVU7d0JBQ1pULElBQUlxQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUx0QixNQUFLO3dCQUV6Qjs7O29CQUNGO29CQUVBRCx5QkFBeUJPLFlBQVlGO29CQUUvQk8sZ0JBQWdCLE1BQ2hCQyxvQkFBb0I7b0JBQ0Y7O3dCQUFNZCxxQkFBcUJVLGFBQWFHLGVBQWVDLG1CQUFtQlQ7OztvQkFBNUZVLGtCQUFrQjtvQkFFeEIsSUFBSSxDQUFDQSxpQkFBaUI7d0JBQ3BCWixJQUFJcUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMdEIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFSWMsT0FBT0wsZUFBZWUsTUFBTSxJQUM1QlQsVUFBVU4sZUFBZWdCLFVBQVU7b0JBRXRDLENBQUE7d0JBRUMsSUFBSXJCO3dCQUVKLElBQU1zQixjQUFjWCxRQUFRUyxNQUFNO3dCQUVsQ1QsVUFBVVcsYUFBYyxHQUFHO3dCQUUzQnRCLFVBQVVVLE1BQU0sR0FBRzt3QkFFbkJBLE9BQU87NEJBQ0xkLE1BQUFBOzRCQUNBZSxTQUFBQTs0QkFDQVgsU0FBQUE7d0JBQ0Y7d0JBRUFBLFVBQVU7NEJBQ1JILEtBQUFBOzRCQUNBQyxVQUFBQTt3QkFDRjt3QkFFQSxJQUFNTyxpQkFBaUJmLHVCQUF1Qm9CLE1BQU1WLFVBQzlDdUIsa0JBQWtCOzRCQUNoQmxCO3lCQUNEO3dCQUVQQSxlQUFlbUIsVUFBVSxDQUFDRCxpQkFBaUJULG9DQUF1QjtvQkFFcEUsQ0FBQTs7Ozs7O0lBR0YsSUFBSTtJQUNKLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsSUFBSTtJQUNOIn0=