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
async function asyncScope(innerFunction, substitutions, context) {
    if (context === undefined) {
        context = substitutions; ///
        substitutions = null;
    }
    const scopedContext = _scoped.default.fromSubstitutions(substitutions, context);
    context = scopedContext; ///
    return await innerFunction(context);
}
async function asyncLiminally(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return await innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXRlcmFsbHkoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ludGhldGljYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0cywgY29udGV4dCkge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzeW50aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1Njb3BlKGlubmVyRnVuY3Rpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBzdWJzdGl0dXRpb25zOyAgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNjb3BlZENvbnRleHQgPSBTY29wZWRDb250ZXh0LmZyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzY29wZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0xpbWluYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiYXN5bmNMaW1pbmFsbHkiLCJhc3luY1Njb3BlIiwiYXR0ZW1wdCIsImxpbWluYWxseSIsImxpdGVyYWxseSIsInN5bnRoZXRpY2FsbHkiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dCIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJsaW1pbmFsQ29udGV4dCIsIkxpbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsImNvbnRleHRzIiwic3ludGhldGljQ29udGV4dCIsIlN5bnRoZXRpY0NvbnRleHQiLCJmcm9tQ29udGV4dHMiLCJzdWJzdGl0dXRpb25zIiwidW5kZWZpbmVkIiwic2NvcGVkQ29udGV4dCIsIlNjb3BlZENvbnRleHQiLCJmcm9tU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc0RzQkE7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQWhDTkM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFRQUM7ZUFBQUE7OzsrREE5QlU7Z0VBQ0M7Z0VBQ0E7a0VBQ0U7a0VBQ0E7Ozs7OztBQUV0QixTQUFTSCxRQUFRSSxhQUFhLEVBQUVDLE9BQU87SUFDNUMsTUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsV0FBVyxDQUFDSDtJQUV0REEsVUFBVUMsa0JBQW1CLEdBQUc7SUFFaEMsT0FBT0YsY0FBY0M7QUFDdkI7QUFFTyxTQUFTSixVQUFVRyxhQUFhLEVBQUVDLE9BQU87SUFDOUMsTUFBTUksaUJBQWlCQyxnQkFBYyxDQUFDRixXQUFXLENBQUNIO0lBRWxEQSxVQUFVSSxnQkFBaUIsR0FBRztJQUU5QixPQUFPTCxjQUFjQztBQUN2QjtBQUVPLFNBQVNILFVBQVVFLGFBQWEsRUFBRUMsT0FBTztJQUM5QyxNQUFNTSxpQkFBaUJDLGdCQUFjLENBQUNKLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVNLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9QLGNBQWNDO0FBQ3ZCO0FBRU8sU0FBU0YsY0FBY0MsYUFBYSxFQUFFUyxRQUFRLEVBQUVSLE9BQU87SUFDNUQsTUFBTVMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsWUFBWSxDQUFDSCxVQUFVUjtJQUVqRUEsVUFBVVMsa0JBQW1CLEdBQUc7SUFFaEMsT0FBT1YsY0FBY0M7QUFDdkI7QUFFTyxlQUFlTixXQUFXSyxhQUFhLEVBQUVhLGFBQWEsRUFBRVosT0FBTztJQUNwRSxJQUFJQSxZQUFZYSxXQUFXO1FBQ3pCYixVQUFVWSxlQUFnQixHQUFHO1FBRTdCQSxnQkFBZ0I7SUFDbEI7SUFFQSxNQUFNRSxnQkFBZ0JDLGVBQWEsQ0FBQ0MsaUJBQWlCLENBQUNKLGVBQWVaO0lBRXJFQSxVQUFVYyxlQUFnQixHQUFHO0lBRTdCLE9BQU8sTUFBTWYsY0FBY0M7QUFDN0I7QUFFTyxlQUFlUCxlQUFlTSxhQUFhLEVBQUVDLE9BQU87SUFDekQsTUFBTUksaUJBQWlCQyxnQkFBYyxDQUFDRixXQUFXLENBQUNIO0lBRWxEQSxVQUFVSSxnQkFBaUIsR0FBRztJQUU5QixPQUFPLE1BQU1MLGNBQWNDO0FBQzdCIn0=