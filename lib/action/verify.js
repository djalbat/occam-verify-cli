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
        var name, context, callback, dependency, dependentNames, releaseContextMap, now, success, releaseName, releaseContext, released, dependentName, dependentReleased, releaseVerifies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    name = argument, context = {}, callback = function(context, filePath, lineIndex) {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2
                                ];
                            });
                        ///
                        })();
                    }, dependency = _occammodel.Dependency.fromName(name), dependentNames = [], releaseContextMap = {};
                    Object.assign(context, {
                        log: log,
                        callback: callback,
                        releaseContextMap: releaseContextMap,
                        releaseContextFromDependency: _fileSystem.releaseContextFromDependency
                    });
                    now = (0, _clock.startClock)();
                    return [
                        4,
                        (0, _releaseContext.createReleaseContext)(dependency, dependentNames, context)
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
                    (0, _releaseContext.initialiseReleaseContext)(dependency, context);
                    dependentName = null, dependentReleased = false;
                    return [
                        4,
                        (0, _release.verifyRelease)(releaseName, dependentName, dependentReleased, releaseContextMap)
                    ];
                case 2:
                    releaseVerifies = _state.sent();
                    if (!releaseVerifies) {
                        log.warning("The '".concat(name, "' project or package cannot be verified."));
                        return [
                            2
                        ];
                    }
                    (0, _clock.stopClock)(now, log);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5cbmltcG9ydCBcIi4uL3ByZWFtYmxlXCI7XG5cbmltcG9ydCB7IHZlcmlmeVJlbGVhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmltcG9ydCB7IHN0YXJ0Q2xvY2ssIHN0b3BDbG9jayB9IGZyb20gXCIuLi91dGlsaXRpZXMvY2xvY2tcIjtcbmltcG9ydCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUFjdGlvbihhcmd1bWVudCwgbG9nKSB7XG4gIGNvbnN0IG5hbWUgPSBhcmd1bWVudCwgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fSxcbiAgICAgICAgY2FsbGJhY2sgPSBhc3luYyAoY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCkgPT4ge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9LFxuICAgICAgICBkZXBlbmRlbmN5ID0gRGVwZW5kZW5jeS5mcm9tTmFtZShuYW1lKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXMgPSBbXSxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAgPSB7fTtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBsb2csXG4gICAgY2FsbGJhY2ssXG4gICAgcmVsZWFzZUNvbnRleHRNYXAsXG4gICAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeVxuICB9KTtcblxuICBsZXQgbm93ID0gc3RhcnRDbG9jaygpO1xuXG4gIC8vIHRyeSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSBjcmVhdGVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgICByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmIChyZWxlYXNlZCkge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcGFja2FnZSBkb2VzIG5vdCBuZWVkIHRvIGJlIHZlcmlmaWVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW50TmFtZSA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW50UmVsZWFzZWQgPSBmYWxzZSxcbiAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSBhd2FpdCB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKCFyZWxlYXNlVmVyaWZpZXMpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9wQ2xvY2sobm93LCBsb2cpO1xuICAvLyB9XG4gIC8vIGNhdGNoIChlcnJvcikge1xuICAvLyAgIGxvZy5lcnJvcihlcnJvcik7XG4gIC8vIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBY3Rpb24iLCJhcmd1bWVudCIsImxvZyIsIm5hbWUiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJyZWxlYXNlQ29udGV4dE1hcCIsIm5vdyIsInN1Y2Nlc3MiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZWQiLCJkZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJyZWxlYXNlVmVyaWZpZXMiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsIkRlcGVuZGVuY3kiLCJmcm9tTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJzdGFydENsb2NrIiwiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJ3YXJuaW5nIiwiaXNSZWxlYXNlZCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsInZlcmlmeVJlbGVhc2UiLCJzdG9wQ2xvY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBOEJBOzs7MEJBVEg7UUFFcEI7dUJBRXVCO3FCQUNROzBCQUNPOzhCQUNrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxTQUFlQSxhQUFhQyxRQUFRLEVBQUVDLEdBQUc7O1lBQ2hEQyxNQUNBQyxTQUNBQyxVQUdBQyxZQUNBQyxnQkFDQUMsbUJBU0ZDLEtBR0lDLFNBUUFDLGFBQ0FDLGdCQUNBQyxVQVVBQyxlQUNBQyxtQkFDQUM7Ozs7b0JBekNGYixPQUFPRixVQUNQRyxVQUFVLENBQUMsR0FDWEMsV0FBVyxTQUFPRCxTQUFTYSxVQUFVQzs7Ozs7Ozt3QkFDbkMsR0FBRzt3QkFDTDt1QkFDQVosYUFBYWEsc0JBQVUsQ0FBQ0MsUUFBUSxDQUFDakIsT0FDakNJLHFCQUNBQyxvQkFBb0IsQ0FBQztvQkFFM0JhLE9BQU9DLE1BQU0sQ0FBQ2xCLFNBQVM7d0JBQ3JCRixLQUFBQTt3QkFDQUcsVUFBQUE7d0JBQ0FHLG1CQUFBQTt3QkFDQWUsOEJBQUFBLHdDQUE0QjtvQkFDOUI7b0JBRUlkLE1BQU1lLElBQUFBLGlCQUFVO29CQUdGOzt3QkFBTUMsSUFBQUEsb0NBQW9CLEVBQUNuQixZQUFZQyxnQkFBZ0JIOzs7b0JBQWpFTSxVQUFVO29CQUVoQixJQUFJLENBQUNBLFNBQVM7d0JBQ1pSLElBQUl3QixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUx2QixNQUFLO3dCQUV6Qjs7O29CQUNGO29CQUVNUSxjQUFjUixNQUNkUyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLEVBQy9DRSxXQUFXRCxlQUFlZSxVQUFVO29CQUUxQyxJQUFJZCxVQUFVO3dCQUNaWCxJQUFJd0IsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMdkIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFQXlCLElBQUFBLHdDQUF3QixFQUFDdEIsWUFBWUY7b0JBRS9CVSxnQkFBZ0IsTUFDaEJDLG9CQUFvQjtvQkFDRjs7d0JBQU1jLElBQUFBLHNCQUFhLEVBQUNsQixhQUFhRyxlQUFlQyxtQkFBbUJQOzs7b0JBQXJGUSxrQkFBa0I7b0JBRXhCLElBQUksQ0FBQ0EsaUJBQWlCO3dCQUNwQmQsSUFBSXdCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTHZCLE1BQUs7d0JBRXpCOzs7b0JBQ0Y7b0JBRUEyQixJQUFBQSxnQkFBUyxFQUFDckIsS0FBS1A7Ozs7OztJQUNqQixJQUFJO0lBQ0osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixJQUFJO0lBQ04ifQ==