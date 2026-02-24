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
var createReleaseContext = _occamlanguages.releaseContextUtilities.createReleaseContext, verifyReleaseContext = _occamlanguages.releaseContextUtilities.verifyReleaseContext, initialiseReleaseContext = _occamlanguages.releaseContextUtilities.initialiseReleaseContext, releaseContextFromJSON = _occamlanguages.releaseContextUtilities.releaseContextFromJSON;
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
                        debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyByZWxlYXNlQ29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yZWxlYXNlQ29udGV4dFwiO1xuXG5jb25zdCB7IGNyZWF0ZVJlbGVhc2VDb250ZXh0LCB2ZXJpZnlSZWxlYXNlQ29udGV4dCwgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dEZyb21KU09OIH0gPSByZWxlYXNlQ29udGV4dFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5QWN0aW9uKG5hbWUsIGxvZykge1xuICBjb25zdCBjYWxsYmFjayA9IGFzeW5jIChjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4KSA9PiB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGVhc2VDb250ZXh0TWFwID0ge30sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgbG9nLFxuICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWFwLFxuICAgICAgICAgIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3lcbiAgICAgICAgfVxuXG4gIC8vIHRyeSB7XG5cbiAgICBjb25zdCBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHBhY2thZ2UgZG9lcyBub3QgbmVlZCB0byBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICBpZiAoIXJlbGVhc2VWZXJpZmllcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBqc29uID0gcmVsZWFzZUNvbnRleHQudG9KU09OKCksXG4gICAgICAgIGVudHJpZXMgPSByZWxlYXNlQ29udGV4dC5nZXRFbnRyaWVzKCk7XG5cbiAgICAoKCkgPT4ge1xuXG4gICAgICBsZXQgY29udGV4dDtcblxuICAgICAgY29uc3QgZW50cmllc0pTT04gPSBlbnRyaWVzLnRvSlNPTigpO1xuXG4gICAgICBlbnRyaWVzID0gZW50cmllc0pTT047ICAvLy9cblxuICAgICAgY29udGV4dCA9IGpzb247IC8vL1xuXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbnRyaWVzLFxuICAgICAgICBjb250ZXh0XG4gICAgICB9O1xuXG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBsb2csXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSBbXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0XG4gICAgICAgICAgICBdO1xuXG4gICAgICBkZWJ1Z2dlclxuXG4gICAgICByZWxlYXNlQ29udGV4dC5pbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpO1xuXG4gICAgfSkoKTtcblxuXG4gIC8vIH1cbiAgLy8gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgbG9nLmVycm9yKGVycm9yKTtcbiAgLy8gfVxufVxuIl0sIm5hbWVzIjpbInZlcmlmeUFjdGlvbiIsImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRVdGlsaXRpZXMiLCJ2ZXJpZnlSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJuYW1lIiwibG9nIiwiY2FsbGJhY2siLCJyZWxlYXNlQ29udGV4dE1hcCIsImNvbnRleHQiLCJkZXBlbmRlbnROYW1lcyIsImRlcGVuZGVuY3kiLCJzdWNjZXNzIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VkIiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZVZlcmlmaWVzIiwianNvbiIsImVudHJpZXMiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsIkZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsIkRlcGVuZGVuY3kiLCJmcm9tTmFtZSIsIndhcm5pbmciLCJpc1JlbGVhc2VkIiwidG9KU09OIiwiZ2V0RW50cmllcyIsImVudHJpZXNKU09OIiwicmVsZWFzZUNvbnRleHRzIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUE4QkE7OztRQVZ2QjswQkFFb0I7OEJBQ2E7MkJBRUE7OEJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBUUMsdUJBQWlHQyx1Q0FBdUIsQ0FBeEhELHNCQUFzQkUsdUJBQTJFRCx1Q0FBdUIsQ0FBbEdDLHNCQUFzQkMsMkJBQXFERix1Q0FBdUIsQ0FBNUVFLDBCQUEwQkMseUJBQTJCSCx1Q0FBdUIsQ0FBbERHO0FBRS9ELFNBQWVMLGFBQWFNLElBQUksRUFBRUMsR0FBRzs7WUFDNUNDLFVBR0FDLG1CQUNBQyxTQVVFQyxnQkFDQUMsWUFDQUMsU0FRQUMsYUFDQUMsZ0JBQ0FDLFVBVUFDLGVBQ0FDLG1CQUNBQyxpQkFRRkMsTUFDQUM7Ozs7b0JBL0NBYixXQUFXLFNBQU9FLFNBQVNZLFVBQVVDOzs7Ozs7O3dCQUNuQyxHQUFHO3dCQUNMO3VCQUNBZCxvQkFBb0IsQ0FBQyxHQUNyQkMsVUFBVTt3QkFDUkgsS0FBQUE7d0JBQ0FDLFVBQUFBO3dCQUNBQyxtQkFBQUE7d0JBQ0FlLHlCQUFBQSxvQ0FBdUI7d0JBQ3ZCQyw4QkFBQUEsNENBQTRCO29CQUM5QjtvQkFJRWQscUJBQ0FDLGFBQWFjLHNCQUFVLENBQUNDLFFBQVEsQ0FBQ3JCO29CQUN2Qjs7d0JBQU1MLHFCQUFxQlcsWUFBWUQsZ0JBQWdCRDs7O29CQUFqRUcsVUFBVTtvQkFFaEIsSUFBSSxDQUFDQSxTQUFTO3dCQUNaTixJQUFJcUIsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMdEIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFTVEsY0FBY1IsTUFDZFMsaUJBQWlCTixpQkFBaUIsQ0FBQ0ssWUFBWSxFQUMvQ0UsV0FBV0QsZUFBZWMsVUFBVTtvQkFFMUMsSUFBSWIsVUFBVTt3QkFDWlQsSUFBSXFCLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTHRCLE1BQUs7d0JBRXpCOzs7b0JBQ0Y7b0JBRUFGLHlCQUF5QlEsWUFBWUY7b0JBRS9CTyxnQkFBZ0IsTUFDaEJDLG9CQUFvQjtvQkFDRjs7d0JBQU1mLHFCQUFxQlcsYUFBYUcsZUFBZUMsbUJBQW1CVDs7O29CQUE1RlUsa0JBQWtCO29CQUV4QixJQUFJLENBQUNBLGlCQUFpQjt3QkFDcEJaLElBQUlxQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUx0QixNQUFLO3dCQUV6Qjs7O29CQUNGO29CQUVJYyxPQUFPTCxlQUFlZSxNQUFNLElBQzVCVCxVQUFVTixlQUFlZ0IsVUFBVTtvQkFFdEMsQ0FBQTt3QkFFQyxJQUFJckI7d0JBRUosSUFBTXNCLGNBQWNYLFFBQVFTLE1BQU07d0JBRWxDVCxVQUFVVyxhQUFjLEdBQUc7d0JBRTNCdEIsVUFBVVUsTUFBTSxHQUFHO3dCQUVuQkEsT0FBTzs0QkFDTGQsTUFBQUE7NEJBQ0FlLFNBQUFBOzRCQUNBWCxTQUFBQTt3QkFDRjt3QkFFQUEsVUFBVTs0QkFDUkgsS0FBQUE7NEJBQ0FDLFVBQUFBO3dCQUNGO3dCQUVBLElBQU1PLGlCQUFpQlYsdUJBQXVCZSxNQUFNVixVQUM5Q3VCLGtCQUFrQjs0QkFDaEJsQjt5QkFDRDt3QkFFUCxRQUFRO3dCQUVSQSxlQUFlbUIsVUFBVSxDQUFDRCxpQkFBaUJULG9DQUF1QjtvQkFFcEUsQ0FBQTs7Ozs7O0lBR0YsSUFBSTtJQUNKLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsSUFBSTtJQUNOIn0=