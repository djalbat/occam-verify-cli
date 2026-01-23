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
function chainContext(context) {
    return new Proxy(context, {
        get: function(instance, name, receiver) {
            if (name in instance) {
                return Reflect.get(instance, name, receiver);
            }
            var _$context = instance.context, value = _$context[name];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhaW5Db250ZXh0KGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBQcm94eShjb250ZXh0LCB7XG4gICAgZ2V0OiAoaW5zdGFuY2UsIG5hbWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICBpZiAobmFtZSBpbiBpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIG5hbWUsIHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGV4dCA9IGluc3RhbmNlLmNvbnRleHQsXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRbbmFtZV07XG5cbiAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgdmFsdWUuYmluZChjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgIHZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29wZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHNjb3BlZENvbnRleHQgPSBTY29wZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzY29wZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXRlcmFsbHkoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ludGhldGljYWxseShpbm5lckZ1bmN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IHN5bnRoZXRpY0NvbnRleHQgPSBTeW50aGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0ID0gc3ludGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImF0dGVtcHQiLCJjaGFpbkNvbnRleHQiLCJsaW1pbmFsbHkiLCJsaXRlcmFsbHkiLCJzY29wZSIsInN5bnRoZXRpY2FsbHkiLCJjb250ZXh0IiwiUHJveHkiLCJnZXQiLCJpbnN0YW5jZSIsIm5hbWUiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJ2YWx1ZSIsIkZVTkNUSU9OIiwiYmluZCIsImlubmVyRnVuY3Rpb24iLCJzY29wZWRDb250ZXh0IiwiU2NvcGVkQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJsaW1pbmFsQ29udGV4dCIsIkxpbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3ludGhldGljQ29udGV4dCIsIlN5bnRoZXRpY0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW1DZ0JBO2VBQUFBOztRQXpCQUM7ZUFBQUE7O1FBaUNBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBeEJBQztlQUFBQTs7UUFnQ0FDO2VBQUFBOzs7NkRBekRVOzhEQUNDOzhEQUNBO2dFQUNFO2dFQUNBO3lCQUVKOzs7Ozs7Ozs7O0FBRWxCLFNBQVNKLGFBQWFLLE9BQU87SUFDbEMsT0FBTyxJQUFJQyxNQUFNRCxTQUFTO1FBQ3hCRSxLQUFLLFNBQUNDLFVBQVVDLE1BQU1DO1lBQ3BCLElBQUlELFFBQVFELFVBQVU7Z0JBQ3BCLE9BQU9HLFFBQVFKLEdBQUcsQ0FBQ0MsVUFBVUMsTUFBTUM7WUFDckM7WUFFQSxJQUFNTCxZQUFVRyxTQUFTSCxPQUFPLEVBQzFCTyxRQUFRUCxTQUFPLENBQUNJLEtBQUs7WUFFM0IsT0FBTyxBQUFDLENBQUEsT0FBT0csc0NBQVAsU0FBT0EsTUFBSSxNQUFNQyxtQkFBUSxHQUN4QkQsTUFBTUUsSUFBSSxDQUFDVCxhQUNUTztRQUNiO0lBQ0Y7QUFDRjtBQUVPLFNBQVNULE1BQU1ZLGFBQWEsRUFBRVYsT0FBTztJQUMxQyxJQUFNVyxnQkFBZ0JDLGVBQWEsQ0FBQ0MsV0FBVyxDQUFDYjtJQUVoREEsVUFBVVcsZUFBZ0IsR0FBRztJQUU3QixPQUFPRCxjQUFjVjtBQUN2QjtBQUVPLFNBQVNOLFFBQVFnQixhQUFhLEVBQUVWLE9BQU87SUFDNUMsSUFBTWMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0YsV0FBVyxDQUFDYjtJQUV0REEsVUFBVWMsa0JBQW1CLEdBQUc7SUFFaEMsT0FBT0osY0FBY1Y7QUFDdkI7QUFFTyxTQUFTSixVQUFVYyxhQUFhLEVBQUVWLE9BQU87SUFDOUMsSUFBTWdCLGlCQUFpQkMsZ0JBQWMsQ0FBQ0osV0FBVyxDQUFDYjtJQUVsREEsVUFBVWdCLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9OLGNBQWNWO0FBQ3ZCO0FBRU8sU0FBU0gsVUFBVWEsYUFBYSxFQUFFVixPQUFPO0lBQzlDLElBQU1rQixpQkFBaUJDLGdCQUFjLENBQUNOLFdBQVcsQ0FBQ2I7SUFFbERBLFVBQVVrQixnQkFBaUIsR0FBRztJQUU5QixPQUFPUixjQUFjVjtBQUN2QjtBQUVPLFNBQVNELGNBQWNXLGFBQWEsRUFBRVUsY0FBYyxFQUFFQyxlQUFlO0lBQzFFLElBQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNWLFdBQVcsQ0FBQ08sZ0JBQWdCQyxrQkFDaEVyQixVQUFVc0Isa0JBQW1CLEdBQUc7SUFFdEMsT0FBT1osY0FBY1Y7QUFDdkIifQ==