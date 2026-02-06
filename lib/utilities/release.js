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
    get verifyRelease () {
        return verifyRelease;
    }
});
var _dependency = require("../utilities/dependency");
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
function verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap) {
    return _async_to_generator(function() {
        var releaseVerifies, releaseContext, released, _$dependentName, _$dependentReleased, dependencyReleasesVerifies, releaseContextVerified, releaseContextVerifies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    releaseVerifies = false;
                    releaseContext = releaseContextMap[releaseName];
                    if (!(releaseContext !== null)) return [
                        3,
                        6
                    ];
                    released = releaseContext.isReleased();
                    if (!released) return [
                        3,
                        1
                    ];
                    releaseVerifies = true;
                    return [
                        3,
                        6
                    ];
                case 1:
                    if (!dependentReleased) return [
                        3,
                        2
                    ];
                    releaseContext.warning("The '".concat(releaseName, "' project cannot be verifies because its '").concat(dependentName, "' dependent is a package."));
                    return [
                        3,
                        6
                    ];
                case 2:
                    _$dependentName = releaseName, _$dependentReleased = released;
                    return [
                        4,
                        verifyDependencyReleases(releaseContext, _$dependentName, _$dependentReleased, releaseContextMap)
                    ];
                case 3:
                    dependencyReleasesVerifies = _state.sent();
                    if (!dependencyReleasesVerifies) return [
                        3,
                        6
                    ];
                    releaseContextVerified = releaseContext.isVerified();
                    if (!releaseContextVerified) return [
                        3,
                        4
                    ];
                    releaseVerifies = true;
                    return [
                        3,
                        6
                    ];
                case 4:
                    releaseContext.info("Verifying the '".concat(releaseName, "' project..."));
                    return [
                        4,
                        releaseContext.verify()
                    ];
                case 5:
                    releaseContextVerifies = _state.sent();
                    if (releaseContextVerifies) {
                        releaseContext.info("...verified the '".concat(releaseName, "' project."));
                        releaseVerifies = true;
                    }
                    _state.label = 6;
                case 6:
                    return [
                        2,
                        releaseVerifies
                    ];
            }
        });
    })();
}
var _default = {
    verifyRelease: verifyRelease
};
function verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap) {
    return _async_to_generator(function() {
        var dependencies, dependencyReleasesVerifies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dependencies = releaseContext.getDependencies();
                    return [
                        4,
                        (0, _dependency.asyncEveryDependency)(dependencies, function(dependency) {
                            return _async_to_generator(function() {
                                var name, releaseName, releaseVerifies;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            name = dependency.getName(), releaseName = name;
                                            return [
                                                4,
                                                verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap)
                                            ];
                                        case 1:
                                            releaseVerifies = _state.sent();
                                            if (releaseVerifies) {
                                                return [
                                                    2,
                                                    true
                                                ];
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        })
                    ];
                case 1:
                    dependencyReleasesVerifies = _state.sent();
                    return [
                        2,
                        dependencyReleasesVerifies
                    ];
            }
        });
    })();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNFdmVyeURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlcGVuZGVuY3lcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBsZXQgcmVsZWFzZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkZXBlbmRlbnRSZWxlYXNlZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dC53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0IGNhbm5vdCBiZSB2ZXJpZmllcyBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IHJlbGVhc2VkLCAvLy9cbiAgICAgICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VzVmVyaWZpZXMgPSBhd2FpdCB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICAgICAgICAgIGlmIChyZWxlYXNlQ29udGV4dFZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZnlpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgcHJvamVjdC4uLmApO1xuXG4gICAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFZlcmlmaWVzID0gYXdhaXQgcmVsZWFzZUNvbnRleHQudmVyaWZ5KCk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlQ29udGV4dFZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuYCk7XG5cbiAgICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZlcmlmeVJlbGVhc2Vcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpLFxuICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZXNWZXJpZmllcyA9IGF3YWl0IGFzeW5jRXZlcnlEZXBlbmRlbmN5KGRlcGVuZGVuY2llcywgYXN5bmMgKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSBhd2FpdCB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VzVmVyaWZpZXM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UmVsZWFzZSIsInJlbGVhc2VOYW1lIiwiZGVwZW5kZW50TmFtZSIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZUNvbnRleHRNYXAiLCJyZWxlYXNlVmVyaWZpZXMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VkIiwiZGVwZW5kZW5jeVJlbGVhc2VzVmVyaWZpZXMiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVkIiwicmVsZWFzZUNvbnRleHRWZXJpZmllcyIsImlzUmVsZWFzZWQiLCJ3YXJuaW5nIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzIiwiaXNWZXJpZmllZCIsImluZm8iLCJ2ZXJpZnkiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY0V2ZXJ5RGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJuYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBOENBO2VBQUE7O1FBMUNzQkE7ZUFBQUE7OzswQkFGZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixTQUFlQSxjQUFjQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjs7WUFDOUZDLGlCQUVFQyxnQkFHRUMsVUFRSUwsaUJBQ0FDLHFCQUNBSyw0QkFHRUMsd0JBT0VDOzs7O29CQXpCWkwsa0JBQWtCO29CQUVoQkMsaUJBQWlCRixpQkFBaUIsQ0FBQ0gsWUFBWTt5QkFFakRLLENBQUFBLG1CQUFtQixJQUFHLEdBQXRCQTs7OztvQkFDSUMsV0FBV0QsZUFBZUssVUFBVTt5QkFFdENKLFVBQUFBOzs7O29CQUNGRixrQkFBa0I7Ozs7Ozt5QkFFZEYsbUJBQUFBOzs7O29CQUNGRyxlQUFlTSxPQUFPLENBQUMsQUFBQyxRQUErRFYsT0FBeERELGFBQVksOENBQTBELE9BQWRDLGVBQWM7Ozs7OztvQkFFL0ZBLGtCQUFnQkQsYUFDaEJFLHNCQUFvQkk7b0JBQ1M7O3dCQUFNTSx5QkFBeUJQLGdCQUFnQkosaUJBQWVDLHFCQUFtQkM7OztvQkFBOUdJLDZCQUE2Qjt5QkFFL0JBLDRCQUFBQTs7OztvQkFDSUMseUJBQXlCSCxlQUFlUSxVQUFVO3lCQUVwREwsd0JBQUFBOzs7O29CQUNGSixrQkFBa0I7Ozs7OztvQkFFbEJDLGVBQWVTLElBQUksQ0FBQyxBQUFDLGtCQUE2QixPQUFaZCxhQUFZO29CQUVuQjs7d0JBQU1LLGVBQWVVLE1BQU07OztvQkFBcEROLHlCQUF5QjtvQkFFL0IsSUFBSUEsd0JBQXdCO3dCQUMxQkosZUFBZVMsSUFBSSxDQUFDLEFBQUMsb0JBQStCLE9BQVpkLGFBQVk7d0JBRXBESSxrQkFBa0I7b0JBQ3BCOzs7b0JBT1Y7O3dCQUFPQTs7OztJQUNUOztJQUVBLFdBQWU7SUFDYkwsZUFBQUE7QUFDRjtBQUVBLFNBQWVhLHlCQUF5QlAsY0FBYyxFQUFFSixhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUI7O1lBQ25HYSxjQUNBVDs7OztvQkFEQVMsZUFBZVgsZUFBZVksZUFBZTtvQkFDaEI7O3dCQUFNQyxJQUFBQSxnQ0FBb0IsRUFBQ0YsY0FBYyxTQUFPRzs7b0NBQ3JFQyxNQUNBcEIsYUFDQUk7Ozs7NENBRkFnQixPQUFPRCxXQUFXRSxPQUFPLElBQ3pCckIsY0FBY29COzRDQUNJOztnREFBTXJCLGNBQWNDLGFBQWFDLGVBQWVDLG1CQUFtQkM7Ozs0Q0FBckZDLGtCQUFrQjs0Q0FFeEIsSUFBSUEsaUJBQWlCO2dEQUNuQjs7b0RBQU87OzRDQUNUOzs7Ozs7NEJBQ0Y7Ozs7b0JBUkFHLDZCQUE2QjtvQkFVbkM7O3dCQUFPQTs7OztJQUNUIn0=