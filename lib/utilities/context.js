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
const _scoped = /*#__PURE__*/ _interop_require_default(require("../context/scoped"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
const _synthetic = /*#__PURE__*/ _interop_require_default(require("../context/synthetic"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function scope(innerFunction, context) {
    const scopedContext = _scoped.default.fromNothing(context);
    context = scopedContext; ///
    return innerFunction(context);
}
function attempt(innerFunction, context) {
    const ephemeralContext = _ephemeral.default.fromNothing(context);
    context = ephemeralContext; ///
    return innerFunction(context);
}
function liminally(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function literally(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function synthetically(innerFunction, contexts, context) {
    const syntheticContext = _synthetic.default.fromContexts(contexts, context);
    context = syntheticContext; ///
    return innerFunction(context);
}
async function asyncScope(innerFunction, context) {
    const scopedContext = _scoped.default.fromNothing(context);
    context = scopedContext; ///
    return await innerFunction(context);
}
async function asyncAttempt(innerFunction, context) {
    const ephemeralContext = _ephemeral.default.fromNothing(context);
    context = ephemeralContext; ///
    return await innerFunction(context);
}
async function asyncLiminally(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return await innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29wZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHNjb3BlZENvbnRleHQgPSBTY29wZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzY29wZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXRlcmFsbHkoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ludGhldGljYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0cywgY29udGV4dCkge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzeW50aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1Njb3BlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgc2NvcGVkQ29udGV4dCA9IFNjb3BlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHNjb3BlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gYXdhaXQgaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jQXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0xpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbiJdLCJuYW1lcyI6WyJhc3luY0F0dGVtcHQiLCJhc3luY0xpbWluYWxseSIsImFzeW5jU2NvcGUiLCJhdHRlbXB0IiwibGltaW5hbGx5IiwibGl0ZXJhbGx5Iiwic2NvcGUiLCJzeW50aGV0aWNhbGx5IiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHQiLCJzY29wZWRDb250ZXh0IiwiU2NvcGVkQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJsaW1pbmFsQ29udGV4dCIsIkxpbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsImNvbnRleHRzIiwic3ludGhldGljQ29udGV4dCIsIlN5bnRoZXRpY0NvbnRleHQiLCJmcm9tQ29udGV4dHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdEc0JBO2VBQUFBOztRQVFBQztlQUFBQTs7UUFoQkFDO2VBQUFBOztRQWhDTkM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUF4QkFDO2VBQUFBOztRQWdDQUM7ZUFBQUE7OzsrREF0Q1U7Z0VBQ0M7Z0VBQ0E7a0VBQ0U7a0VBQ0E7Ozs7OztBQUV0QixTQUFTRCxNQUFNRSxhQUFhLEVBQUVDLE9BQU87SUFDMUMsTUFBTUMsZ0JBQWdCQyxlQUFhLENBQUNDLFdBQVcsQ0FBQ0g7SUFFaERBLFVBQVVDLGVBQWdCLEdBQUc7SUFFN0IsT0FBT0YsY0FBY0M7QUFDdkI7QUFFTyxTQUFTTixRQUFRSyxhQUFhLEVBQUVDLE9BQU87SUFDNUMsTUFBTUksbUJBQW1CQyxrQkFBZ0IsQ0FBQ0YsV0FBVyxDQUFDSDtJQUV0REEsVUFBVUksa0JBQW1CLEdBQUc7SUFFaEMsT0FBT0wsY0FBY0M7QUFDdkI7QUFFTyxTQUFTTCxVQUFVSSxhQUFhLEVBQUVDLE9BQU87SUFDOUMsTUFBTU0saUJBQWlCQyxnQkFBYyxDQUFDSixXQUFXLENBQUNIO0lBRWxEQSxVQUFVTSxnQkFBaUIsR0FBRztJQUU5QixPQUFPUCxjQUFjQztBQUN2QjtBQUVPLFNBQVNKLFVBQVVHLGFBQWEsRUFBRUMsT0FBTztJQUM5QyxNQUFNUSxpQkFBaUJDLGdCQUFjLENBQUNOLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVRLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9ULGNBQWNDO0FBQ3ZCO0FBRU8sU0FBU0YsY0FBY0MsYUFBYSxFQUFFVyxRQUFRLEVBQUVWLE9BQU87SUFDNUQsTUFBTVcsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsWUFBWSxDQUFDSCxVQUFVVjtJQUVqRUEsVUFBVVcsa0JBQW1CLEdBQUc7SUFFaEMsT0FBT1osY0FBY0M7QUFDdkI7QUFFTyxlQUFlUCxXQUFXTSxhQUFhLEVBQUVDLE9BQU87SUFDckQsTUFBTUMsZ0JBQWdCQyxlQUFhLENBQUNDLFdBQVcsQ0FBQ0g7SUFFaERBLFVBQVVDLGVBQWdCLEdBQUc7SUFFN0IsT0FBTyxNQUFNRixjQUFjQztBQUM3QjtBQUVPLGVBQWVULGFBQWFRLGFBQWEsRUFBRUMsT0FBTztJQUN2RCxNQUFNSSxtQkFBbUJDLGtCQUFnQixDQUFDRixXQUFXLENBQUNIO0lBRXREQSxVQUFVSSxrQkFBbUIsR0FBRztJQUVoQyxPQUFPLE1BQU1MLGNBQWNDO0FBQzdCO0FBRU8sZUFBZVIsZUFBZU8sYUFBYSxFQUFFQyxPQUFPO0lBQ3pELE1BQU1NLGlCQUFpQkMsZ0JBQWMsQ0FBQ0osV0FBVyxDQUFDSDtJQUVsREEsVUFBVU0sZ0JBQWlCLEdBQUc7SUFFOUIsT0FBTyxNQUFNUCxjQUFjQztBQUM3QiJ9