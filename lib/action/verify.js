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
var _clock = require("../utilities/clock");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyByZWxlYXNlQ29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgc3RhcnRDbG9jaywgc3RvcENsb2NrIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jbG9ja1wiO1xuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5jb25zdCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCB2ZXJpZnlSZWxlYXNlQ29udGV4dCwgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IH0gPSByZWxlYXNlQ29udGV4dFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5QWN0aW9uKGFyZ3VtZW50LCBsb2cpIHtcbiAgY29uc3QgbmFtZSA9IGFyZ3VtZW50LCAvLy9cbiAgICAgICAgY29udGV4dCA9IHt9LFxuICAgICAgICBjYWxsYmFjayA9IGFzeW5jIChjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4KSA9PiB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0sXG4gICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICByZWxlYXNlQ29udGV4dE1hcCA9IHt9O1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGxvZyxcbiAgICBjYWxsYmFjayxcbiAgICByZWxlYXNlQ29udGV4dE1hcCxcbiAgICByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5XG4gIH0pO1xuXG4gIGxldCBub3cgPSBzdGFydENsb2NrKCk7XG5cbiAgLy8gdHJ5IHtcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgY3JlYXRlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgIHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKHJlbGVhc2VkKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwYWNrYWdlIGRvZXMgbm90IG5lZWQgdG8gYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbnROYW1lID0gbnVsbCxcbiAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllcyA9IGF3YWl0IHZlcmlmeVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKCFyZWxlYXNlVmVyaWZpZXMpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9wQ2xvY2sobm93LCBsb2cpO1xuICAvLyB9XG4gIC8vIGNhdGNoIChlcnJvcikge1xuICAvLyAgIGxvZy5lcnJvcihlcnJvcik7XG4gIC8vIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBY3Rpb24iLCJjcmVhdGVSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0VXRpbGl0aWVzIiwidmVyaWZ5UmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJhcmd1bWVudCIsImxvZyIsIm5hbWUiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJyZWxlYXNlQ29udGV4dE1hcCIsIm5vdyIsInN1Y2Nlc3MiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZWQiLCJkZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJyZWxlYXNlVmVyaWZpZXMiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsIkRlcGVuZGVuY3kiLCJmcm9tTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kiLCJzdGFydENsb2NrIiwid2FybmluZyIsImlzUmVsZWFzZWQiLCJzdG9wQ2xvY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBOEJBOzs7UUFWdkI7MEJBRW9COzhCQUNhO3FCQUVGOzBCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQVFDLHVCQUF5RUMsdUNBQXVCLENBQWhHRCxzQkFBc0JFLHVCQUFtREQsdUNBQXVCLENBQTFFQyxzQkFBc0JDLDJCQUE2QkYsdUNBQXVCLENBQXBERTtBQUVyQyxTQUFlSixhQUFhSyxRQUFRLEVBQUVDLEdBQUc7O1lBQ2hEQyxNQUNBQyxTQUNBQyxVQUdBQyxZQUNBQyxnQkFDQUMsbUJBU0ZDLEtBR0lDLFNBUUFDLGFBQ0FDLGdCQUNBQyxVQVVBQyxlQUNBQyxtQkFDQUM7Ozs7b0JBekNGYixPQUFPRixVQUNQRyxVQUFVLENBQUMsR0FDWEMsV0FBVyxTQUFPRCxTQUFTYSxVQUFVQzs7Ozs7Ozt3QkFDbkMsR0FBRzt3QkFDTDt1QkFDQVosYUFBYWEsc0JBQVUsQ0FBQ0MsUUFBUSxDQUFDakIsT0FDakNJLHFCQUNBQyxvQkFBb0IsQ0FBQztvQkFFM0JhLE9BQU9DLE1BQU0sQ0FBQ2xCLFNBQVM7d0JBQ3JCRixLQUFBQTt3QkFDQUcsVUFBQUE7d0JBQ0FHLG1CQUFBQTt3QkFDQWUsOEJBQUFBLHdDQUE0QjtvQkFDOUI7b0JBRUlkLE1BQU1lLElBQUFBLGlCQUFVO29CQUdGOzt3QkFBTTNCLHFCQUFxQlMsWUFBWUMsZ0JBQWdCSDs7O29CQUFqRU0sVUFBVTtvQkFFaEIsSUFBSSxDQUFDQSxTQUFTO3dCQUNaUixJQUFJdUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMdEIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFTVEsY0FBY1IsTUFDZFMsaUJBQWlCSixpQkFBaUIsQ0FBQ0csWUFBWSxFQUMvQ0UsV0FBV0QsZUFBZWMsVUFBVTtvQkFFMUMsSUFBSWIsVUFBVTt3QkFDWlgsSUFBSXVCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTHRCLE1BQUs7d0JBRXpCOzs7b0JBQ0Y7b0JBRUFILHlCQUF5Qk0sWUFBWUY7b0JBRS9CVSxnQkFBZ0IsTUFDaEJDLG9CQUFvQjtvQkFDRjs7d0JBQU1oQixxQkFBcUJZLGFBQWFHLGVBQWVDLG1CQUFtQlA7OztvQkFBNUZRLGtCQUFrQjtvQkFFeEIsSUFBSSxDQUFDQSxpQkFBaUI7d0JBQ3BCZCxJQUFJdUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMdEIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFQXdCLElBQUFBLGdCQUFTLEVBQUNsQixLQUFLUDs7Ozs7O0lBQ2pCLElBQUk7SUFDSixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLElBQUk7SUFDTiJ9