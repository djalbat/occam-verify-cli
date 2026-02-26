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
var createReleaseContext = _occamlanguages.verificationUtilities.createReleaseContext, verifyReleaseContext = _occamlanguages.verificationUtilities.verifyReleaseContext, initialiseReleaseContext = _occamlanguages.verificationUtilities.initialiseReleaseContext;
function verifyAction(name, log) {
    return _async_to_generator(function() {
        var callback, releaseContextMap, context, dependentNames, dependency, success, releaseName, releaseContext, released, dependentName, dependentReleased, releaseVerifies, error;
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
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    dependentNames = [], dependency = _occammodel.Dependency.fromName(name);
                    return [
                        4,
                        createReleaseContext(dependency, dependentNames, context)
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
                    initialiseReleaseContext(dependency, context);
                    dependentName = null, dependentReleased = false;
                    return [
                        4,
                        verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap)
                    ];
                case 3:
                    releaseVerifies = _state.sent();
                    if (!releaseVerifies) {
                        log.warning("The '".concat(name, "' project or package cannot be verified."));
                        return [
                            2
                        ];
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSBcIm9jY2FtLW1vZGVsXCI7XG5pbXBvcnQgeyB2ZXJpZmljYXRpb25VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlQ29udGV4dFwiO1xuaW1wb3J0IHsgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHRcIjtcblxuY29uc3QgeyBjcmVhdGVSZWxlYXNlQ29udGV4dCwgdmVyaWZ5UmVsZWFzZUNvbnRleHQsIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCB9ID0gdmVyaWZpY2F0aW9uVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBY3Rpb24obmFtZSwgbG9nKSB7XG4gIGNvbnN0IGNhbGxiYWNrID0gYXN5bmMgKGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgpID0+IHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAgPSB7fSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBsb2csXG4gICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRNYXAsXG4gICAgICAgICAgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeVxuICAgICAgICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkZXBlbmRlbnROYW1lcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHByb2plY3Qgb3IgcGFja2FnZSBjYW5ub3QgYmUgY3JlYXRlZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7bmFtZX0nIHBhY2thZ2UgZG9lcyBub3QgbmVlZCB0byBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICBpZiAoIXJlbGVhc2VWZXJpZmllcykge1xuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtuYW1lfScgcHJvamVjdCBvciBwYWNrYWdlIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QWN0aW9uIiwiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJ2ZXJpZmljYXRpb25VdGlsaXRpZXMiLCJ2ZXJpZnlSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsIm5hbWUiLCJsb2ciLCJjYWxsYmFjayIsInJlbGVhc2VDb250ZXh0TWFwIiwiY29udGV4dCIsImRlcGVuZGVudE5hbWVzIiwiZGVwZW5kZW5jeSIsInN1Y2Nlc3MiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZWQiLCJkZXBlbmRlbnROYW1lIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJyZWxlYXNlVmVyaWZpZXMiLCJlcnJvciIsImZpbGVQYXRoIiwibGluZUluZGV4IiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwiRGVwZW5kZW5jeSIsImZyb21OYW1lIiwid2FybmluZyIsImlzUmVsZWFzZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBOEJBOzs7UUFWdkI7MEJBRW9COzhCQUNXOzJCQUVFOzhCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQVFDLHVCQUF5RUMscUNBQXFCLENBQTlGRCxzQkFBc0JFLHVCQUFtREQscUNBQXFCLENBQXhFQyxzQkFBc0JDLDJCQUE2QkYscUNBQXFCLENBQWxERTtBQUVyQyxTQUFlSixhQUFhSyxJQUFJLEVBQUVDLEdBQUc7O1lBQzVDQyxVQUdBQyxtQkFDQUMsU0FTRUMsZ0JBQ0FDLFlBQ0FDLFNBUUFDLGFBQ0FDLGdCQUNBQyxVQVVBQyxlQUNBQyxtQkFDQUMsaUJBUURDOzs7O29CQTdDRFosV0FBVyxTQUFPRSxTQUFTVyxVQUFVQzs7Ozs7Ozt3QkFDbkMsR0FBRzt3QkFDTDt1QkFDQWIsb0JBQW9CLENBQUMsR0FDckJDLFVBQVU7d0JBQ1JILEtBQUFBO3dCQUNBQyxVQUFBQTt3QkFDQUMsbUJBQUFBO3dCQUNBYyx5QkFBQUEsb0NBQXVCO3dCQUN2QkMsOEJBQUFBLDRDQUE0QjtvQkFDOUI7Ozs7Ozs7OztvQkFHRWIscUJBQ0FDLGFBQWFhLHNCQUFVLENBQUNDLFFBQVEsQ0FBQ3BCO29CQUN2Qjs7d0JBQU1KLHFCQUFxQlUsWUFBWUQsZ0JBQWdCRDs7O29CQUFqRUcsVUFBVTtvQkFFaEIsSUFBSSxDQUFDQSxTQUFTO3dCQUNaTixJQUFJb0IsT0FBTyxDQUFDLEFBQUMsUUFBWSxPQUFMckIsTUFBSzt3QkFFekI7OztvQkFDRjtvQkFFTVEsY0FBY1IsTUFDZFMsaUJBQWlCTixpQkFBaUIsQ0FBQ0ssWUFBWSxFQUMvQ0UsV0FBV0QsZUFBZWEsVUFBVTtvQkFFMUMsSUFBSVosVUFBVTt3QkFDWlQsSUFBSW9CLE9BQU8sQ0FBQyxBQUFDLFFBQVksT0FBTHJCLE1BQUs7d0JBRXpCOzs7b0JBQ0Y7b0JBRUFELHlCQUF5Qk8sWUFBWUY7b0JBRS9CTyxnQkFBZ0IsTUFDaEJDLG9CQUFvQjtvQkFDRjs7d0JBQU1kLHFCQUFxQlUsYUFBYUcsZUFBZUMsbUJBQW1CVDs7O29CQUE1RlUsa0JBQWtCO29CQUV4QixJQUFJLENBQUNBLGlCQUFpQjt3QkFDcEJaLElBQUlvQixPQUFPLENBQUMsQUFBQyxRQUFZLE9BQUxyQixNQUFLO3dCQUV6Qjs7O29CQUNGOzs7Ozs7b0JBRUtjO29CQUNMYixJQUFJYSxLQUFLLENBQUNBOzs7Ozs7Ozs7OztJQUVkIn0=