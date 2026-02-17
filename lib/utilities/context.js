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
    get asyncAttempt () {
        return asyncAttempt;
    },
    get asyncLiminally () {
        return asyncLiminally;
    },
    get asyncScope () {
        return asyncScope;
    },
    get attempt () {
        return attempt;
    },
    get liminally () {
        return liminally;
    },
    get literally () {
        return literally;
    },
    get scope () {
        return scope;
    },
    get synthetically () {
        return synthetically;
    }
});
var _scoped = /*#__PURE__*/ _interop_require_default(require("../context/scoped"));
var _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
var _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
var _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
var _synthetic = /*#__PURE__*/ _interop_require_default(require("../context/synthetic"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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
function scope(innerFunction, context) {
    var scopedContext = _scoped.default.fromNothing(context);
    context = scopedContext; ///
    return innerFunction(context);
}
function attempt(innerFunction, context) {
    var ephemeralContext = _ephemeral.default.fromNothing(context);
    context = ephemeralContext; ///
    return innerFunction(context);
}
function liminally(innerFunction, context) {
    var liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function literally(innerFunction, context) {
    var literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function synthetically(innerFunction, contexts, context) {
    var syntheticContext = _synthetic.default.fromContexts(contexts, context);
    context = syntheticContext; ///
    return innerFunction(context);
}
function asyncScope(innerFunction, context) {
    return _async_to_generator(function() {
        var scopedContext;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    scopedContext = _scoped.default.fromNothing(context);
                    context = scopedContext; ///
                    return [
                        4,
                        innerFunction(context)
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    })();
}
function asyncAttempt(innerFunction, context) {
    return _async_to_generator(function() {
        var ephemeralContext;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    ephemeralContext = _ephemeral.default.fromNothing(context);
                    context = ephemeralContext; ///
                    return [
                        4,
                        innerFunction(context)
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    })();
}
function asyncLiminally(innerFunction, context) {
    return _async_to_generator(function() {
        var liminalContext;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    liminalContext = _liminal.default.fromNothing(context);
                    context = liminalContext; ///
                    return [
                        4,
                        innerFunction(context)
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    })();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29wZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHNjb3BlZENvbnRleHQgPSBTY29wZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzY29wZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXRlcmFsbHkoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ludGhldGljYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0cywgY29udGV4dCkge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzeW50aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1Njb3BlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgc2NvcGVkQ29udGV4dCA9IFNjb3BlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHNjb3BlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gYXdhaXQgaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jQXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0xpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbiJdLCJuYW1lcyI6WyJhc3luY0F0dGVtcHQiLCJhc3luY0xpbWluYWxseSIsImFzeW5jU2NvcGUiLCJhdHRlbXB0IiwibGltaW5hbGx5IiwibGl0ZXJhbGx5Iiwic2NvcGUiLCJzeW50aGV0aWNhbGx5IiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHQiLCJzY29wZWRDb250ZXh0IiwiU2NvcGVkQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJsaW1pbmFsQ29udGV4dCIsIkxpbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsImNvbnRleHRzIiwic3ludGhldGljQ29udGV4dCIsIlN5bnRoZXRpY0NvbnRleHQiLCJmcm9tQ29udGV4dHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdEc0JBO2VBQUFBOztRQVFBQztlQUFBQTs7UUFoQkFDO2VBQUFBOztRQWhDTkM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUF4QkFDO2VBQUFBOztRQWdDQUM7ZUFBQUE7Ozs2REF0Q1U7OERBQ0M7OERBQ0E7Z0VBQ0U7Z0VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixTQUFTRCxNQUFNRSxhQUFhLEVBQUVDLE9BQU87SUFDMUMsSUFBTUMsZ0JBQWdCQyxlQUFhLENBQUNDLFdBQVcsQ0FBQ0g7SUFFaERBLFVBQVVDLGVBQWdCLEdBQUc7SUFFN0IsT0FBT0YsY0FBY0M7QUFDdkI7QUFFTyxTQUFTTixRQUFRSyxhQUFhLEVBQUVDLE9BQU87SUFDNUMsSUFBTUksbUJBQW1CQyxrQkFBZ0IsQ0FBQ0YsV0FBVyxDQUFDSDtJQUV0REEsVUFBVUksa0JBQW1CLEdBQUc7SUFFaEMsT0FBT0wsY0FBY0M7QUFDdkI7QUFFTyxTQUFTTCxVQUFVSSxhQUFhLEVBQUVDLE9BQU87SUFDOUMsSUFBTU0saUJBQWlCQyxnQkFBYyxDQUFDSixXQUFXLENBQUNIO0lBRWxEQSxVQUFVTSxnQkFBaUIsR0FBRztJQUU5QixPQUFPUCxjQUFjQztBQUN2QjtBQUVPLFNBQVNKLFVBQVVHLGFBQWEsRUFBRUMsT0FBTztJQUM5QyxJQUFNUSxpQkFBaUJDLGdCQUFjLENBQUNOLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVRLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9ULGNBQWNDO0FBQ3ZCO0FBRU8sU0FBU0YsY0FBY0MsYUFBYSxFQUFFVyxRQUFRLEVBQUVWLE9BQU87SUFDNUQsSUFBTVcsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsWUFBWSxDQUFDSCxVQUFVVjtJQUVqRUEsVUFBVVcsa0JBQW1CLEdBQUc7SUFFaEMsT0FBT1osY0FBY0M7QUFDdkI7QUFFTyxTQUFlUCxXQUFXTSxhQUFhLEVBQUVDLE9BQU87O1lBQy9DQzs7OztvQkFBQUEsZ0JBQWdCQyxlQUFhLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRWhEQSxVQUFVQyxlQUFnQixHQUFHO29CQUV0Qjs7d0JBQU1GLGNBQWNDOzs7b0JBQTNCOzt3QkFBTzs7OztJQUNUOztBQUVPLFNBQWVULGFBQWFRLGFBQWEsRUFBRUMsT0FBTzs7WUFDakRJOzs7O29CQUFBQSxtQkFBbUJDLGtCQUFnQixDQUFDRixXQUFXLENBQUNIO29CQUV0REEsVUFBVUksa0JBQW1CLEdBQUc7b0JBRXpCOzt3QkFBTUwsY0FBY0M7OztvQkFBM0I7O3dCQUFPOzs7O0lBQ1Q7O0FBRU8sU0FBZVIsZUFBZU8sYUFBYSxFQUFFQyxPQUFPOztZQUNuRE07Ozs7b0JBQUFBLGlCQUFpQkMsZ0JBQWMsQ0FBQ0osV0FBVyxDQUFDSDtvQkFFbERBLFVBQVVNLGdCQUFpQixHQUFHO29CQUV2Qjs7d0JBQU1QLGNBQWNDOzs7b0JBQTNCOzt3QkFBTzs7OztJQUNUIn0=