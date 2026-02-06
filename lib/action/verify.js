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
var _occammodel = require("occam-model");
require("../preamble");
var _release = require("../utilities/release");
var _clock = require("../utilities/clock");
var _fileSystem = require("../utilities/fileSystem");
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
function verifyAction(argument, log) {
    return _async_to_generator(function() {
        var name, context, callback, dependency, dependentNames, releaseContextMap, now, success, releaseName, releaseContext, released, dependentName, dependentReleased, releaseVerifies, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    name = argument, context = {}, callback = function(context, filePath, lineIndex) {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                debugger;
                                return [
                                    2
                                ];
                            });
                        })();
                    }, dependency = _occammodel.Dependency.fromName(name), dependentNames = [], releaseContextMap = {};
                    Object.assign(context, {
                        log: log,
                        callback: callback,
                        releaseContextMap: releaseContextMap,
                        releaseContextFromDependency: _fileSystem.releaseContextFromDependency
                    });
                    now = (0, _clock.startClock)();
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        (0, _releaseContext.createReleaseContext)(dependency, dependentNames, context)
                    ];
                case 2:
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
                    (0, _releaseContext.initialiseReleaseContext)(dependency, context);
                    dependentName = null, dependentReleased = false;
                    return [
                        4,
                        (0, _release.verifyRelease)(releaseName, dependentName, dependentReleased, releaseContextMap)
                    ];
                case 3:
                    releaseVerifies = _state.sent();
                    if (!releaseVerifies) {
                        log.warning("The '".concat(name, "' project or package cannot be verified."));
                        return [
                            2
                        ];
                    }
                    (0, _clock.stopClock)(now, log);
                    return [
                        3,
                        5
                    ];
                case 4:
                    error = _state.sent();
                    log.error(error);
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    })();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5cbmltcG9ydCBcIi4uL3ByZWFtYmxlXCI7XG5cbmltcG9ydCB7IHZlcmlmeVJlbGVhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmltcG9ydCB7IHN0YXJ0Q2xvY2ssIHN0b3BDbG9jayB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xvY2tcIjtcbmltcG9ydCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUFjdGlvbihhcmd1bWVudCwgbG9nKSB7XG4gIGNvbnN0IG5hbWUgPSBhcmd1bWVudCwgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fSxcbiAgICAgICAgY2FsbGJhY2sgPSBhc3luYyAoY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCkgPT4ge1xuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIH0sXG4gICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICByZWxlYXNlQ29udGV4dE1hcCA9IHt9O1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGxvZyxcbiAgICBjYWxsYmFjayxcbiAgICByZWxlYXNlQ29udGV4dE1hcCxcbiAgICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG4gIH0pO1xuXG4gIGxldCBub3cgPSBzdGFydENsb2NrKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgIHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKHJlbGVhc2VkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwYWNrYWdlIGRvZXMgbm90IG5lZWQgdG8gYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbnROYW1lID0gbnVsbCxcbiAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllcyA9IGF3YWl0IHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICBpZiAoIXJlbGVhc2VWZXJpZmllcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0b3BDbG9jayhub3csIGxvZyk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nLmVycm9yKGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInZlcmlmeUFjdGlvbiIsImFyZ3VtZW50IiwibG9nIiwibmFtZSIsImNvbnRleHQiLCJjYWxsYmFjayIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsInJlbGVhc2VDb250ZXh0TWFwIiwibm93Iiwic3VjY2VzcyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsInJlbGVhc2VWZXJpZmllcyIsImVycm9yIiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJEZXBlbmRlbmN5IiwiZnJvbU5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5Iiwic3RhcnRDbG9jayIsImNyZWF0ZVJlbGVhc2VDb250ZXh0Iiwid2FybmluZyIsImlzUmVsZWFzZWQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnlSZWxlYXNlIiwic3RvcENsb2NrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQThCQTs7OzBCQVRIO1FBRXBCO3VCQUV1QjtxQkFDUTswQkFDTzs4QkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsU0FBZUEsYUFBYUMsUUFBUSxFQUFFQyxHQUFHOztZQUNoREMsTUFDQUMsU0FDQUMsVUFHQUMsWUFDQUMsZ0JBQ0FDLG1CQVNGQyxLQUdJQyxTQVFBQyxhQUNBQyxnQkFDQUMsVUFVQUMsZUFDQUMsbUJBQ0FDLGlCQVVEQzs7OztvQkFuRERkLE9BQU9GLFVBQ1BHLFVBQVUsQ0FBQyxHQUNYQyxXQUFXLFNBQU9ELFNBQVNjLFVBQVVDOzs7Z0NBQ25DLFFBQVE7Ozs7O3dCQUNWO3VCQUNBYixhQUFhYyxzQkFBVSxDQUFDQyxRQUFRLENBQUNsQixPQUNqQ0kscUJBQ0FDLG9CQUFvQixDQUFDO29CQUUzQmMsT0FBT0MsTUFBTSxDQUFDbkIsU0FBUzt3QkFDckJGLEtBQUFBO3dCQUNBRyxVQUFBQTt3QkFDQUcsbUJBQUFBO3dCQUNBZ0IsOEJBQUFBLHdDQUE0QjtvQkFDOUI7b0JBRUlmLE1BQU1nQixJQUFBQSxpQkFBVTs7Ozs7Ozs7O29CQUdGOzt3QkFBTUMsSUFBQUEsb0NBQW9CLEVBQUNwQixZQUFZQyxnQkFBZ0JIOzs7b0JBQWpFTSxVQUFVO29CQUVoQixJQUFJLENBQUNBLFNBQVM7d0JBQ1pSLElBQUl5QixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUx4QixNQUFLO3dCQUV6Qjs7O29CQUNGO29CQUVNUSxjQUFjUixNQUNkUyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLEVBQy9DRSxXQUFXRCxlQUFlZ0IsVUFBVTtvQkFFMUMsSUFBSWYsVUFBVTt3QkFDWlgsSUFBSXlCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTHhCLE1BQUs7d0JBRXpCOzs7b0JBQ0Y7b0JBRUEwQixJQUFBQSx3Q0FBd0IsRUFBQ3ZCLFlBQVlGO29CQUUvQlUsZ0JBQWdCLE1BQ2hCQyxvQkFBb0I7b0JBQ0Y7O3dCQUFNZSxJQUFBQSxzQkFBYSxFQUFDbkIsYUFBYUcsZUFBZUMsbUJBQW1CUDs7O29CQUFyRlEsa0JBQWtCO29CQUV4QixJQUFJLENBQUNBLGlCQUFpQjt3QkFDcEJkLElBQUl5QixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUx4QixNQUFLO3dCQUV6Qjs7O29CQUNGO29CQUVBNEIsSUFBQUEsZ0JBQVMsRUFBQ3RCLEtBQUtQOzs7Ozs7b0JBRVZlO29CQUNMZixJQUFJZSxLQUFLLENBQUNBOzs7Ozs7Ozs7OztJQUVkIn0=