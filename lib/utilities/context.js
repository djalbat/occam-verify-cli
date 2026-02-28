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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXRlcmFsbHkoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ludGhldGljYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0cywgY29udGV4dCkge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzeW50aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1Njb3BlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgc2NvcGVkQ29udGV4dCA9IFNjb3BlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHNjb3BlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gYXdhaXQgaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jQXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0xpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbiJdLCJuYW1lcyI6WyJhc3luY0F0dGVtcHQiLCJhc3luY0xpbWluYWxseSIsImFzeW5jU2NvcGUiLCJhdHRlbXB0IiwibGltaW5hbGx5IiwibGl0ZXJhbGx5Iiwic3ludGhldGljYWxseSIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJmcm9tTm90aGluZyIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwiY29udGV4dHMiLCJzeW50aGV0aWNDb250ZXh0IiwiU3ludGhldGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsInNjb3BlZENvbnRleHQiLCJTY29wZWRDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnRHNCQTtlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBaEJBQztlQUFBQTs7UUFoQ05DO2VBQUFBOztRQVFBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOzs7K0RBOUJVO2dFQUNDO2dFQUNBO2tFQUNFO2tFQUNBOzs7Ozs7QUFFdEIsU0FBU0gsUUFBUUksYUFBYSxFQUFFQyxPQUFPO0lBQzVDLE1BQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNDLFdBQVcsQ0FBQ0g7SUFFdERBLFVBQVVDLGtCQUFtQixHQUFHO0lBRWhDLE9BQU9GLGNBQWNDO0FBQ3ZCO0FBRU8sU0FBU0osVUFBVUcsYUFBYSxFQUFFQyxPQUFPO0lBQzlDLE1BQU1JLGlCQUFpQkMsZ0JBQWMsQ0FBQ0YsV0FBVyxDQUFDSDtJQUVsREEsVUFBVUksZ0JBQWlCLEdBQUc7SUFFOUIsT0FBT0wsY0FBY0M7QUFDdkI7QUFFTyxTQUFTSCxVQUFVRSxhQUFhLEVBQUVDLE9BQU87SUFDOUMsTUFBTU0saUJBQWlCQyxnQkFBYyxDQUFDSixXQUFXLENBQUNIO0lBRWxEQSxVQUFVTSxnQkFBaUIsR0FBRztJQUU5QixPQUFPUCxjQUFjQztBQUN2QjtBQUVPLFNBQVNGLGNBQWNDLGFBQWEsRUFBRVMsUUFBUSxFQUFFUixPQUFPO0lBQzVELE1BQU1TLG1CQUFtQkMsa0JBQWdCLENBQUNDLFlBQVksQ0FBQ0gsVUFBVVI7SUFFakVBLFVBQVVTLGtCQUFtQixHQUFHO0lBRWhDLE9BQU9WLGNBQWNDO0FBQ3ZCO0FBRU8sZUFBZU4sV0FBV0ssYUFBYSxFQUFFQyxPQUFPO0lBQ3JELE1BQU1ZLGdCQUFnQkMsZUFBYSxDQUFDVixXQUFXLENBQUNIO0lBRWhEQSxVQUFVWSxlQUFnQixHQUFHO0lBRTdCLE9BQU8sTUFBTWIsY0FBY0M7QUFDN0I7QUFFTyxlQUFlUixhQUFhTyxhQUFhLEVBQUVDLE9BQU87SUFDdkQsTUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsV0FBVyxDQUFDSDtJQUV0REEsVUFBVUMsa0JBQW1CLEdBQUc7SUFFaEMsT0FBTyxNQUFNRixjQUFjQztBQUM3QjtBQUVPLGVBQWVQLGVBQWVNLGFBQWEsRUFBRUMsT0FBTztJQUN6RCxNQUFNSSxpQkFBaUJDLGdCQUFjLENBQUNGLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVJLGdCQUFpQixHQUFHO0lBRTlCLE9BQU8sTUFBTUwsY0FBY0M7QUFDN0IifQ==