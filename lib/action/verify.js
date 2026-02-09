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
var _fileSystem = require("../utilities/fileSystem");
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
var createReleaseContext = _occamlanguages.releaseContextUtilities.createReleaseContext, verifyReleaseContext = _occamlanguages.releaseContextUtilities.verifyReleaseContext, initialiseReleaseContext = _occamlanguages.releaseContextUtilities.initialiseReleaseContext;
function verifyAction(name, log) {
    return _async_to_generator(function() {
        var callback, releaseContextMap, context, dependentNames, dependency, success, releaseName, releaseContext, released, dependentName, dependentReleased, releaseVerifies;
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
                        releaseContextFromDependency: _fileSystem.releaseContextFromDependency
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyByZWxlYXNlQ29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5jb25zdCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCB2ZXJpZnlSZWxlYXNlQ29udGV4dCwgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IH0gPSByZWxlYXNlQ29udGV4dFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5QWN0aW9uKG5hbWUsIGxvZykge1xuICBjb25zdCBjYWxsYmFjayA9IGFzeW5jIChjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4KSA9PiB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGVhc2VDb250ZXh0TWFwID0ge30sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgbG9nLFxuICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWFwLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lcbiAgICAgICAgfVxuXG4gIC8vIHRyeSB7XG5cbiAgICBjb25zdCBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHBhY2thZ2UgZG9lcyBub3QgbmVlZCB0byBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICBpZiAoIXJlbGVhc2VWZXJpZmllcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAvLyB9XG4gIC8vIGNhdGNoIChlcnJvcikge1xuICAvLyAgIGxvZy5lcnJvcihlcnJvcik7XG4gIC8vIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBY3Rpb24iLCJjcmVhdGVSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIiwidmVyaWZ5UmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJuYW1lIiwibG9nIiwiY2FsbGJhY2siLCJyZWxlYXNlQ29udGV4dE1hcCIsImNvbnRleHQiLCJkZXBlbmRlbnROYW1lcyIsImRlcGVuZGVuY3kiLCJzdWNjZXNzIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VkIiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZVZlcmlmaWVzIiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiRGVwZW5kZW5jeSIsImZyb21OYW1lIiwid2FybmluZyIsImlzUmVsZWFzZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBOEJBOzs7UUFUdkI7MEJBRW9COzhCQUNhOzBCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQVFDLHVCQUF5RUMsdUNBQXVCLENBQWhHRCxzQkFBc0JFLHVCQUFtREQsdUNBQXVCLENBQTFFQyxzQkFBc0JDLDJCQUE2QkYsdUNBQXVCLENBQXBERTtBQUVyQyxTQUFlSixhQUFhSyxJQUFJLEVBQUVDLEdBQUc7O1lBQzVDQyxVQUdBQyxtQkFDQUMsU0FTRUMsZ0JBQ0FDLFlBQ0FDLFNBUUFDLGFBQ0FDLGdCQUNBQyxVQVVBQyxlQUNBQyxtQkFDQUM7Ozs7b0JBckNGWCxXQUFXLFNBQU9FLFNBQVNVLFVBQVVDOzs7Ozs7O3dCQUNuQyxHQUFHO3dCQUNMO3VCQUNBWixvQkFBb0IsQ0FBQyxHQUNyQkMsVUFBVTt3QkFDUkgsS0FBQUE7d0JBQ0FDLFVBQUFBO3dCQUNBQyxtQkFBQUE7d0JBQ0FhLDhCQUFBQSx3Q0FBNEI7b0JBQzlCO29CQUlFWCxxQkFDQUMsYUFBYVcsc0JBQVUsQ0FBQ0MsUUFBUSxDQUFDbEI7b0JBQ3ZCOzt3QkFBTUoscUJBQXFCVSxZQUFZRCxnQkFBZ0JEOzs7b0JBQWpFRyxVQUFVO29CQUVoQixJQUFJLENBQUNBLFNBQVM7d0JBQ1pOLElBQUlrQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUxuQixNQUFLO3dCQUV6Qjs7O29CQUNGO29CQUVNUSxjQUFjUixNQUNkUyxpQkFBaUJOLGlCQUFpQixDQUFDSyxZQUFZLEVBQy9DRSxXQUFXRCxlQUFlVyxVQUFVO29CQUUxQyxJQUFJVixVQUFVO3dCQUNaVCxJQUFJa0IsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMbkIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFQUQseUJBQXlCTyxZQUFZRjtvQkFFL0JPLGdCQUFnQixNQUNoQkMsb0JBQW9CO29CQUNGOzt3QkFBTWQscUJBQXFCVSxhQUFhRyxlQUFlQyxtQkFBbUJUOzs7b0JBQTVGVSxrQkFBa0I7b0JBRXhCLElBQUksQ0FBQ0EsaUJBQWlCO3dCQUNwQlosSUFBSWtCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTG5CLE1BQUs7d0JBRXpCOzs7b0JBQ0Y7Ozs7OztJQUVGLElBQUk7SUFDSixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLElBQUk7SUFDTiJ9