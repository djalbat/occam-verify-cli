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
    get attempt () {
        return attempt;
    },
    get chainContext () {
        return chainContext;
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
var _necessary = require("necessary");
var _scoped = /*#__PURE__*/ _interop_require_default(require("../context/scoped"));
var _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
var _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
var _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
var _synthetic = /*#__PURE__*/ _interop_require_default(require("../context/synthetic"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var secondLast = _necessary.arrayUtilities.secondLast;
function chainContext(context) {
    return new Proxy(context, {
        get: function(instance, name, receiver) {
            var levelsIncludeName = _constants.LEVELS.includes(name);
            if (levelsIncludeName) {
                return function(message) {
                    var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                    var depth = -1, _$context = instance; ///
                    var contexts = [
                        _$context
                    ];
                    _$context = _$context.getContext();
                    while(_$context !== null){
                        depth++;
                        contexts.push(_$context);
                        _$context = _$context.getContext();
                    }
                    var secondLastContext = secondLast(contexts), fileContext = secondLastContext, indent = _constants.DOUBLE_SPACE.repeat(depth), level = name; ///
                    message = "".concat(indent).concat(message);
                    return fileContext.writeToLog(level, message, node);
                };
            }
            if (name in instance) {
                return Reflect.get(instance, name, receiver);
            }
            var _$context = instance.getContext(), value = _$context[name];
            return (typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.FUNCTION ? value.bind(_$context) : value;
        }
    });
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
function synthetically(innerFunction, generalContext, specificContext) {
    var syntheticContext = _synthetic.default.fromNothing(generalContext, specificContext), context = syntheticContext; ///
    return innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTY29wZWRDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Njb3BlZFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBMaXRlcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saXRlcmFsXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBTeW50aGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3N5bnRoZXRpY1wiO1xuXG5pbXBvcnQgeyBMRVZFTFMsIEZVTkNUSU9OLCBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbkNvbnRleHQoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFByb3h5KGNvbnRleHQsIHtcbiAgICBnZXQ6IChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgIGNvbnN0IGxldmVsc0luY2x1ZGVOYW1lID0gTEVWRUxTLmluY2x1ZGVzKG5hbWUpO1xuXG4gICAgICBpZiAobGV2ZWxzSW5jbHVkZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChtZXNzYWdlLCBub2RlID0gbnVsbCkgPT4ge1xuICAgICAgICAgIGxldCBkZXB0aCA9IC0xLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gaW5zdGFuY2U7IC8vL1xuXG4gICAgICAgICAgY29uc3QgY29udGV4dHMgPSBbXG4gICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgICAgICAgIHdoaWxlIChjb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkZXB0aCsrO1xuXG4gICAgICAgICAgICBjb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2Vjb25kTGFzdENvbnRleHQgPSBzZWNvbmRMYXN0KGNvbnRleHRzKSxcbiAgICAgICAgICAgICAgICBmaWxlQ29udGV4dCA9IHNlY29uZExhc3RDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgaW5kZW50ID0gRE9VQkxFX1NQQUNFLnJlcGVhdChkZXB0aCksXG4gICAgICAgICAgICAgICAgbGV2ZWwgPSBuYW1lOyAvLy9cblxuICAgICAgICAgIG1lc3NhZ2UgPSBgJHtpbmRlbnR9JHttZXNzYWdlfWA7XG5cbiAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHQud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBuYW1lLCByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSBpbnN0YW5jZS5nZXRDb250ZXh0KCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRbbmFtZV07XG5cbiAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgdmFsdWUuYmluZChjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgIHZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29wZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHNjb3BlZENvbnRleHQgPSBTY29wZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzY29wZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXRlcmFsbHkoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ludGhldGljYWxseShpbm5lckZ1bmN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IHN5bnRoZXRpY0NvbnRleHQgPSBTeW50aGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0ID0gc3ludGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImF0dGVtcHQiLCJjaGFpbkNvbnRleHQiLCJsaW1pbmFsbHkiLCJsaXRlcmFsbHkiLCJzY29wZSIsInN5bnRoZXRpY2FsbHkiLCJzZWNvbmRMYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZXh0IiwiUHJveHkiLCJnZXQiLCJpbnN0YW5jZSIsIm5hbWUiLCJyZWNlaXZlciIsImxldmVsc0luY2x1ZGVOYW1lIiwiTEVWRUxTIiwiaW5jbHVkZXMiLCJtZXNzYWdlIiwibm9kZSIsImRlcHRoIiwiY29udGV4dHMiLCJnZXRDb250ZXh0IiwicHVzaCIsInNlY29uZExhc3RDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJpbmRlbnQiLCJET1VCTEVfU1BBQ0UiLCJyZXBlYXQiLCJsZXZlbCIsIndyaXRlVG9Mb2ciLCJSZWZsZWN0IiwidmFsdWUiLCJGVU5DVElPTiIsImJpbmQiLCJpbm5lckZ1bmN0aW9uIiwic2NvcGVkQ29udGV4dCIsIlNjb3BlZENvbnRleHQiLCJmcm9tTm90aGluZyIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImxpdGVyYWxDb250ZXh0IiwiTGl0ZXJhbENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN5bnRoZXRpY0NvbnRleHQiLCJTeW50aGV0aWNDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1RWdCQTtlQUFBQTs7UUF6REFDO2VBQUFBOztRQWlFQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQXhCQUM7ZUFBQUE7O1FBZ0NBQztlQUFBQTs7O3lCQTdGZTs2REFFTDs4REFDQzs4REFDQTtnRUFDRTtnRUFDQTt5QkFFa0I7Ozs7Ozs7Ozs7QUFFL0MsSUFBTSxBQUFFQyxhQUFlQyx5QkFBYyxDQUE3QkQ7QUFFRCxTQUFTTCxhQUFhTyxPQUFPO0lBQ2xDLE9BQU8sSUFBSUMsTUFBTUQsU0FBUztRQUN4QkUsS0FBSyxTQUFDQyxVQUFVQyxNQUFNQztZQUNwQixJQUFNQyxvQkFBb0JDLGlCQUFNLENBQUNDLFFBQVEsQ0FBQ0o7WUFFMUMsSUFBSUUsbUJBQW1CO2dCQUNyQixPQUFPLFNBQUNHO3dCQUFTQyx3RUFBTztvQkFDdEIsSUFBSUMsUUFBUSxDQUFDLEdBQ1RYLFlBQVVHLFVBQVUsR0FBRztvQkFFM0IsSUFBTVMsV0FBVzt3QkFDZlo7cUJBQ0Q7b0JBRURBLFlBQVVBLFVBQVFhLFVBQVU7b0JBRTVCLE1BQU9iLGNBQVksS0FBTTt3QkFDdkJXO3dCQUVBQyxTQUFTRSxJQUFJLENBQUNkO3dCQUVkQSxZQUFVQSxVQUFRYSxVQUFVO29CQUM5QjtvQkFFQSxJQUFNRSxvQkFBb0JqQixXQUFXYyxXQUMvQkksY0FBY0QsbUJBQ2RFLFNBQVNDLHVCQUFZLENBQUNDLE1BQU0sQ0FBQ1IsUUFDN0JTLFFBQVFoQixNQUFNLEdBQUc7b0JBRXZCSyxVQUFVLEFBQUMsR0FBV0EsT0FBVFEsUUFBaUIsT0FBUlI7b0JBRXRCLE9BQU9PLFlBQVlLLFVBQVUsQ0FBQ0QsT0FBT1gsU0FBU0M7Z0JBQ2hEO1lBQ0Y7WUFFQSxJQUFJTixRQUFRRCxVQUFVO2dCQUNwQixPQUFPbUIsUUFBUXBCLEdBQUcsQ0FBQ0MsVUFBVUMsTUFBTUM7WUFDckM7WUFFQSxJQUFNTCxZQUFVRyxTQUFTVSxVQUFVLElBQzdCVSxRQUFRdkIsU0FBTyxDQUFDSSxLQUFLO1lBRTNCLE9BQU8sQUFBQyxDQUFBLE9BQU9tQixzQ0FBUCxTQUFPQSxNQUFJLE1BQU1DLG1CQUFRLEdBQ3hCRCxNQUFNRSxJQUFJLENBQUN6QixhQUNUdUI7UUFDYjtJQUNGO0FBQ0Y7QUFFTyxTQUFTM0IsTUFBTThCLGFBQWEsRUFBRTFCLE9BQU87SUFDMUMsSUFBTTJCLGdCQUFnQkMsZUFBYSxDQUFDQyxXQUFXLENBQUM3QjtJQUVoREEsVUFBVTJCLGVBQWdCLEdBQUc7SUFFN0IsT0FBT0QsY0FBYzFCO0FBQ3ZCO0FBRU8sU0FBU1IsUUFBUWtDLGFBQWEsRUFBRTFCLE9BQU87SUFDNUMsSUFBTThCLG1CQUFtQkMsa0JBQWdCLENBQUNGLFdBQVcsQ0FBQzdCO0lBRXREQSxVQUFVOEIsa0JBQW1CLEdBQUc7SUFFaEMsT0FBT0osY0FBYzFCO0FBQ3ZCO0FBRU8sU0FBU04sVUFBVWdDLGFBQWEsRUFBRTFCLE9BQU87SUFDOUMsSUFBTWdDLGlCQUFpQkMsZ0JBQWMsQ0FBQ0osV0FBVyxDQUFDN0I7SUFFbERBLFVBQVVnQyxnQkFBaUIsR0FBRztJQUU5QixPQUFPTixjQUFjMUI7QUFDdkI7QUFFTyxTQUFTTCxVQUFVK0IsYUFBYSxFQUFFMUIsT0FBTztJQUM5QyxJQUFNa0MsaUJBQWlCQyxnQkFBYyxDQUFDTixXQUFXLENBQUM3QjtJQUVsREEsVUFBVWtDLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9SLGNBQWMxQjtBQUN2QjtBQUVPLFNBQVNILGNBQWM2QixhQUFhLEVBQUVVLGNBQWMsRUFBRUMsZUFBZTtJQUMxRSxJQUFNQyxtQkFBbUJDLGtCQUFnQixDQUFDVixXQUFXLENBQUNPLGdCQUFnQkMsa0JBQ2hFckMsVUFBVXNDLGtCQUFtQixHQUFHO0lBRXRDLE9BQU9aLGNBQWMxQjtBQUN2QiJ9