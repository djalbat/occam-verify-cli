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
var _constants = require("../constants");
var _release = require("../utilities/release");
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
    var name = trimTrailingSlash(argument), context = {}, callback = function(context, filePath, lineIndex) {
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
    var now = startClock();
    (0, _releaseContext.createReleaseContext)(dependency, dependentNames, context, function(error, success) {
        if (error) {
            log.error(error);
            return;
        }
        if (!success) {
            log.warning("The '".concat(name, "' project or package cannot be created."));
            return;
        }
        var releaseName = name, releaseContext = releaseContextMap[releaseName], released = releaseContext.isReleased();
        if (released) {
            log.warning("The '".concat(name, "' package does not need to be verified."));
            return;
        }
        (0, _releaseContext.initialiseReleaseContext)(dependency, context);
        var dependentName = null, dependentReleased = false, releaseVerifies = (0, _release.verifyRelease)(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (!releaseVerifies) {
            log.warning("The '".concat(name, "' project or package cannot be verified."));
            return;
        }
        stopClock(now, log);
    });
}
function stopClock(now, log) {
    var then = now; ///
    now = Date.now();
    var seconds = Math.floor(now - then) / 1000;
    log.info("Time ".concat(seconds, " seconds."));
}
function startClock() {
    var now;
    now = Date.now();
    return now;
}
function trimTrailingSlash(string) {
    string = string.replace(/\/$/, _constants.EMPTY_STRING); ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5cbmltcG9ydCBcIi4uL3ByZWFtYmxlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZlcmlmeVJlbGVhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VcIjtcbmltcG9ydCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JlbGVhc2VDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUFjdGlvbihhcmd1bWVudCwgbG9nKSB7XG4gIGNvbnN0IG5hbWUgPSB0cmltVHJhaWxpbmdTbGFzaChhcmd1bWVudCksIC8vL1xuICAgICAgICBjb250ZXh0ID0ge30sXG4gICAgICAgIGNhbGxiYWNrID0gYXN5bmMgKGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgpID0+IHtcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB9LFxuICAgICAgICBkZXBlbmRlbmN5ID0gRGVwZW5kZW5jeS5mcm9tTmFtZShuYW1lKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXMgPSBbXSxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAgPSB7fTtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBsb2csXG4gICAgY2FsbGJhY2ssXG4gICAgcmVsZWFzZUNvbnRleHRNYXAsXG4gICAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeVxuICB9KTtcblxuICBsZXQgbm93ID0gc3RhcnRDbG9jaygpO1xuXG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0LCAoZXJyb3IsIHN1Y2Nlc3MpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihlcnJvcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHBhY2thZ2UgZG9lcyBub3QgbmVlZCB0byBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgIGlmICghcmVsZWFzZVZlcmlmaWVzKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIHZlcmlmaWVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcENsb2NrKG5vdywgbG9nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BDbG9jayhub3csIGxvZykge1xuICBjb25zdCB0aGVuID0gbm93OyAvLy9cblxuICBub3cgPSBEYXRlLm5vdygpO1xuXG4gIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKG5vdyAtIHRoZW4pIC8gMTAwMDtcblxuICBsb2cuaW5mbyhgVGltZSAke3NlY29uZHN9IHNlY29uZHMuYCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0Q2xvY2soKSB7XG4gIGxldCBub3c7XG5cbiAgbm93ID0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gbm93O1xufVxuXG5mdW5jdGlvbiB0cmltVHJhaWxpbmdTbGFzaChzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsidmVyaWZ5QWN0aW9uIiwiYXJndW1lbnQiLCJsb2ciLCJuYW1lIiwidHJpbVRyYWlsaW5nU2xhc2giLCJjb250ZXh0IiwiY2FsbGJhY2siLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsImRlcGVuZGVuY3kiLCJEZXBlbmRlbmN5IiwiZnJvbU5hbWUiLCJkZXBlbmRlbnROYW1lcyIsInJlbGVhc2VDb250ZXh0TWFwIiwiT2JqZWN0IiwiYXNzaWduIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsIm5vdyIsInN0YXJ0Q2xvY2siLCJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImVycm9yIiwic3VjY2VzcyIsIndhcm5pbmciLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZVZlcmlmaWVzIiwidmVyaWZ5UmVsZWFzZSIsInN0b3BDbG9jayIsInRoZW4iLCJEYXRlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImluZm8iLCJzdHJpbmciLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzBCQVRHO1FBRXBCO3lCQUVzQjt1QkFDQzswQkFDZTs4QkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsU0FBU0EsYUFBYUMsUUFBUSxFQUFFQyxHQUFHO0lBQ2hELElBQU1DLE9BQU9DLGtCQUFrQkgsV0FDekJJLFVBQVUsQ0FBQyxHQUNYQyxXQUFXLFNBQU9ELFNBQVNFLFVBQVVDOzs7Z0JBQ25DLFFBQVE7Ozs7O1FBQ1Y7T0FDQUMsYUFBYUMsc0JBQVUsQ0FBQ0MsUUFBUSxDQUFDUixPQUNqQ1MsaUJBQWlCLEVBQUUsRUFDbkJDLG9CQUFvQixDQUFDO0lBRTNCQyxPQUFPQyxNQUFNLENBQUNWLFNBQVM7UUFDckJILEtBQUFBO1FBQ0FJLFVBQUFBO1FBQ0FPLG1CQUFBQTtRQUNBRyw4QkFBQUEsd0NBQTRCO0lBQzlCO0lBRUEsSUFBSUMsTUFBTUM7SUFFVkMsSUFBQUEsb0NBQW9CLEVBQUNWLFlBQVlHLGdCQUFnQlAsU0FBUyxTQUFDZSxPQUFPQztRQUNoRSxJQUFJRCxPQUFPO1lBQ1RsQixJQUFJa0IsS0FBSyxDQUFDQTtZQUVWO1FBQ0Y7UUFFQSxJQUFJLENBQUNDLFNBQVM7WUFDWm5CLElBQUlvQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUxuQixNQUFLO1lBRXpCO1FBQ0Y7UUFFQSxJQUFNb0IsY0FBY3BCLE1BQ2RxQixpQkFBaUJYLGlCQUFpQixDQUFDVSxZQUFZLEVBQy9DRSxXQUFXRCxlQUFlRSxVQUFVO1FBRTFDLElBQUlELFVBQVU7WUFDWnZCLElBQUlvQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUxuQixNQUFLO1lBRXpCO1FBQ0Y7UUFFQXdCLElBQUFBLHdDQUF3QixFQUFDbEIsWUFBWUo7UUFFckMsSUFBTXVCLGdCQUFnQixNQUNoQkMsb0JBQW9CLE9BQ3BCQyxrQkFBa0JDLElBQUFBLHNCQUFhLEVBQUNSLGFBQWFLLGVBQWVDLG1CQUFtQmhCO1FBRXJGLElBQUksQ0FBQ2lCLGlCQUFpQjtZQUNwQjVCLElBQUlvQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUxuQixNQUFLO1lBRXpCO1FBQ0Y7UUFFQTZCLFVBQVVmLEtBQUtmO0lBQ2pCO0FBQ0Y7QUFFQSxTQUFTOEIsVUFBVWYsR0FBRyxFQUFFZixHQUFHO0lBQ3pCLElBQU0rQixPQUFPaEIsS0FBSyxHQUFHO0lBRXJCQSxNQUFNaUIsS0FBS2pCLEdBQUc7SUFFZCxJQUFNa0IsVUFBVUMsS0FBS0MsS0FBSyxDQUFDcEIsTUFBTWdCLFFBQVE7SUFFekMvQixJQUFJb0MsSUFBSSxDQUFDLEFBQUMsUUFBZSxPQUFSSCxTQUFRO0FBQzNCO0FBRUEsU0FBU2pCO0lBQ1AsSUFBSUQ7SUFFSkEsTUFBTWlCLEtBQUtqQixHQUFHO0lBRWQsT0FBT0E7QUFDVDtBQUVBLFNBQVNiLGtCQUFrQm1DLE1BQU07SUFDL0JBLFNBQVNBLE9BQU9DLE9BQU8sQ0FBQyxPQUFPQyx1QkFBWSxHQUFHLEdBQUc7SUFFakQsT0FBT0Y7QUFDVCJ9