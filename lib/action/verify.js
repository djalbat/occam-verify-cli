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
var _release = require("../utilities/release");
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
var createReleaseContext = _occamlanguages.releaseContextTiilities.createReleaseContext, initialiseReleaseContext = _occamlanguages.releaseContextTiilities.initialiseReleaseContext;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyByZWxlYXNlQ29udGV4dFRpaWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdmVyaWZ5UmVsZWFzZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVsZWFzZVwiO1xuaW1wb3J0IHsgc3RhcnRDbG9jaywgc3RvcENsb2NrIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jbG9ja1wiO1xuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5jb25zdCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQgfSA9IHJlbGVhc2VDb250ZXh0VGlpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBY3Rpb24oYXJndW1lbnQsIGxvZykge1xuICBjb25zdCBuYW1lID0gYXJndW1lbnQsIC8vL1xuICAgICAgICBjb250ZXh0ID0ge30sXG4gICAgICAgIGNhbGxiYWNrID0gYXN5bmMgKGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgpID0+IHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSxcbiAgICAgICAgZGVwZW5kZW5jeSA9IERlcGVuZGVuY3kuZnJvbU5hbWUobmFtZSksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzID0gW10sXG4gICAgICAgIHJlbGVhc2VDb250ZXh0TWFwID0ge307XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgbG9nLFxuICAgIGNhbGxiYWNrLFxuICAgIHJlbGVhc2VDb250ZXh0TWFwLFxuICAgIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lcbiAgfSk7XG5cbiAgbGV0IG5vdyA9IHN0YXJ0Q2xvY2soKTtcblxuICAvLyB0cnkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHBhY2thZ2UgZG9lcyBub3QgbmVlZCB0byBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgIGlmICghcmVsZWFzZVZlcmlmaWVzKSB7XG4gICAgICBsb2cud2FybmluZyhgVGhlICcke25hbWV9JyBwcm9qZWN0IG9yIHBhY2thZ2UgY2Fubm90IGJlIHZlcmlmaWVkLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcENsb2NrKG5vdywgbG9nKTtcbiAgLy8gfVxuICAvLyBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICBsb2cuZXJyb3IoZXJyb3IpO1xuICAvLyB9XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QWN0aW9uIiwiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dFRpaWxpdGllcyIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsImFyZ3VtZW50IiwibG9nIiwibmFtZSIsImNvbnRleHQiLCJjYWxsYmFjayIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsInJlbGVhc2VDb250ZXh0TWFwIiwibm93Iiwic3VjY2VzcyIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsInJlbGVhc2VWZXJpZmllcyIsImZpbGVQYXRoIiwibGluZUluZGV4IiwiRGVwZW5kZW5jeSIsImZyb21OYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsInN0YXJ0Q2xvY2siLCJ3YXJuaW5nIiwiaXNSZWxlYXNlZCIsInZlcmlmeVJlbGVhc2UiLCJzdG9wQ2xvY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBOEJBOzs7UUFYdkI7MEJBRW9COzhCQUNhO3VCQUVWO3FCQUNROzBCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQVFDLHVCQUFtREMsdUNBQXVCLENBQTFFRCxzQkFBc0JFLDJCQUE2QkQsdUNBQXVCLENBQXBEQztBQUVmLFNBQWVILGFBQWFJLFFBQVEsRUFBRUMsR0FBRzs7WUFDaERDLE1BQ0FDLFNBQ0FDLFVBR0FDLFlBQ0FDLGdCQUNBQyxtQkFTRkMsS0FHSUMsU0FRQUMsYUFDQUMsZ0JBQ0FDLFVBVUFDLGVBQ0FDLG1CQUNBQzs7OztvQkF6Q0ZiLE9BQU9GLFVBQ1BHLFVBQVUsQ0FBQyxHQUNYQyxXQUFXLFNBQU9ELFNBQVNhLFVBQVVDOzs7Ozs7O3dCQUNuQyxHQUFHO3dCQUNMO3VCQUNBWixhQUFhYSxzQkFBVSxDQUFDQyxRQUFRLENBQUNqQixPQUNqQ0kscUJBQ0FDLG9CQUFvQixDQUFDO29CQUUzQmEsT0FBT0MsTUFBTSxDQUFDbEIsU0FBUzt3QkFDckJGLEtBQUFBO3dCQUNBRyxVQUFBQTt3QkFDQUcsbUJBQUFBO3dCQUNBZSw4QkFBQUEsd0NBQTRCO29CQUM5QjtvQkFFSWQsTUFBTWUsSUFBQUEsaUJBQVU7b0JBR0Y7O3dCQUFNMUIscUJBQXFCUSxZQUFZQyxnQkFBZ0JIOzs7b0JBQWpFTSxVQUFVO29CQUVoQixJQUFJLENBQUNBLFNBQVM7d0JBQ1pSLElBQUl1QixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUx0QixNQUFLO3dCQUV6Qjs7O29CQUNGO29CQUVNUSxjQUFjUixNQUNkUyxpQkFBaUJKLGlCQUFpQixDQUFDRyxZQUFZLEVBQy9DRSxXQUFXRCxlQUFlYyxVQUFVO29CQUUxQyxJQUFJYixVQUFVO3dCQUNaWCxJQUFJdUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMdEIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFQUgseUJBQXlCTSxZQUFZRjtvQkFFL0JVLGdCQUFnQixNQUNoQkMsb0JBQW9CO29CQUNGOzt3QkFBTVksSUFBQUEsc0JBQWEsRUFBQ2hCLGFBQWFHLGVBQWVDLG1CQUFtQlA7OztvQkFBckZRLGtCQUFrQjtvQkFFeEIsSUFBSSxDQUFDQSxpQkFBaUI7d0JBQ3BCZCxJQUFJdUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMdEIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFQXlCLElBQUFBLGdCQUFTLEVBQUNuQixLQUFLUDs7Ozs7O0lBQ2pCLElBQUk7SUFDSixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLElBQUk7SUFDTiJ9