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
    get asyncResolve () {
        return asyncResolve;
    },
    get asyncRestrict () {
        return asyncRestrict;
    },
    get attempt () {
        return attempt;
    },
    get choose () {
        return choose;
    },
    get instantiate () {
        return instantiate;
    },
    get join () {
        return join;
    },
    get resolve () {
        return resolve;
    }
});
const _scoped = /*#__PURE__*/ _interop_require_default(require("../context/scoped"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
const _synthetic = /*#__PURE__*/ _interop_require_default(require("../context/synthetic"));
const _branching = /*#__PURE__*/ _interop_require_default(require("../context/branching"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function join(innerFunction, ...contexts) {
    const syntheticContext = _synthetic.default.fromContexts(...contexts), context = syntheticContext; ///
    return innerFunction(context);
}
function choose(innerFunction, context) {
    const branchingContext = _branching.default.fromNothing(context);
    context = branchingContext; ///
    return innerFunction(context);
}
function attempt(innerFunction, context) {
    const ephemeralContext = _ephemeral.default.fromNothing(context);
    context = ephemeralContext; ///
    return innerFunction(context);
}
function resolve(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function instantiate(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
async function asyncResolve(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return await innerFunction(context);
}
async function asyncRestrict(innerFunction, metaLevelSubstitutions, context) {
    if (context === undefined) {
        context = metaLevelSubstitutions; ///
        metaLevelSubstitutions = null;
    }
    const scopedContext = _scoped.default.fromMetaLevelSubstitutions(metaLevelSubstitutions, context);
    context = scopedContext; ///
    return await innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5pbXBvcnQgQnJhbmNoaW5nQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9icmFuY2hpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3Qgc3ludGhldGljQ29udGV4dCA9IFN5bnRoZXRpY0NvbnRleHQuZnJvbUNvbnRleHRzKC4uLmNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bnRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZXNvbHZlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gYXdhaXQgaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVzdHJpY3QoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsU3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3Qgc2NvcGVkQ29udGV4dCA9IFNjb3BlZENvbnRleHQuZnJvbU1ldGFMZXZlbFN1YnN0aXR1dGlvbnMobWV0YUxldmVsU3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHNjb3BlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gYXdhaXQgaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJhc3luY1Jlc29sdmUiLCJhc3luY1Jlc3RyaWN0IiwiYXR0ZW1wdCIsImNob29zZSIsImluc3RhbnRpYXRlIiwiam9pbiIsInJlc29sdmUiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJzeW50aGV0aWNDb250ZXh0IiwiU3ludGhldGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJsaW1pbmFsQ29udGV4dCIsIkxpbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJ1bmRlZmluZWQiLCJzY29wZWRDb250ZXh0IiwiU2NvcGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxTdWJzdGl0dXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnRHNCQTtlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBaENOQztlQUFBQTs7UUFSQUM7ZUFBQUE7O1FBd0JBQztlQUFBQTs7UUEvQkFDO2VBQUFBOztRQXVCQUM7ZUFBQUE7OzsrREE5QlU7Z0VBQ0M7Z0VBQ0E7a0VBQ0U7a0VBQ0E7a0VBQ0E7Ozs7OztBQUV0QixTQUFTRCxLQUFLRSxhQUFhLEVBQUUsR0FBR0MsUUFBUTtJQUM3QyxNQUFNQyxtQkFBbUJDLGtCQUFnQixDQUFDQyxZQUFZLElBQUlILFdBQ3BESSxVQUFVSCxrQkFBbUIsR0FBRztJQUV0QyxPQUFPRixjQUFjSztBQUN2QjtBQUVPLFNBQVNULE9BQU9JLGFBQWEsRUFBRUssT0FBTztJQUMzQyxNQUFNQyxtQkFBbUJDLGtCQUFnQixDQUFDQyxXQUFXLENBQUNIO0lBRXREQSxVQUFVQyxrQkFBbUIsR0FBRztJQUVoQyxPQUFPTixjQUFjSztBQUN2QjtBQUVPLFNBQVNWLFFBQVFLLGFBQWEsRUFBRUssT0FBTztJQUM1QyxNQUFNSSxtQkFBbUJDLGtCQUFnQixDQUFDRixXQUFXLENBQUNIO0lBRXREQSxVQUFVSSxrQkFBbUIsR0FBRztJQUVoQyxPQUFPVCxjQUFjSztBQUN2QjtBQUVPLFNBQVNOLFFBQVFDLGFBQWEsRUFBRUssT0FBTztJQUM1QyxNQUFNTSxpQkFBaUJDLGdCQUFjLENBQUNKLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVNLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9YLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU1IsWUFBWUcsYUFBYSxFQUFFSyxPQUFPO0lBQ2hELE1BQU1RLGlCQUFpQkMsZ0JBQWMsQ0FBQ04sV0FBVyxDQUFDSDtJQUVsREEsVUFBVVEsZ0JBQWlCLEdBQUc7SUFFOUIsT0FBT2IsY0FBY0s7QUFDdkI7QUFFTyxlQUFlWixhQUFhTyxhQUFhLEVBQUVLLE9BQU87SUFDdkQsTUFBTU0saUJBQWlCQyxnQkFBYyxDQUFDSixXQUFXLENBQUNIO0lBRWxEQSxVQUFVTSxnQkFBaUIsR0FBRztJQUU5QixPQUFPLE1BQU1YLGNBQWNLO0FBQzdCO0FBRU8sZUFBZVgsY0FBY00sYUFBYSxFQUFFZSxzQkFBc0IsRUFBRVYsT0FBTztJQUNoRixJQUFJQSxZQUFZVyxXQUFXO1FBQ3pCWCxVQUFVVSx3QkFBeUIsR0FBRztRQUV0Q0EseUJBQXlCO0lBQzNCO0lBRUEsTUFBTUUsZ0JBQWdCQyxlQUFhLENBQUNDLDBCQUEwQixDQUFDSix3QkFBd0JWO0lBRXZGQSxVQUFVWSxlQUFnQixHQUFHO0lBRTdCLE9BQU8sTUFBTWpCLGNBQWNLO0FBQzdCIn0=