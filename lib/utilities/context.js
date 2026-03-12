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
    },
    get tentatively () {
        return tentatively;
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
function tentatively(innerFunction, context) {
    const branchingContext = _branching.default.fromNothing(context);
    context = branchingContext; ///
    return innerFunction(context);
}
function synthetically(innerFunction, contexts, context) {
    const syntheticContext = _synthetic.default.fromContexts(contexts, context);
    context = syntheticContext; ///
    return innerFunction(context);
}
async function asyncScope(innerFunction, metaLevelSubstitutions, context) {
    if (context === undefined) {
        context = metaLevelSubstitutions; ///
        metaLevelSubstitutions = null;
    }
    const scopedContext = _scoped.default.fromMetaLevelSubstitutions(metaLevelSubstitutions, context);
    context = scopedContext; ///
    return await innerFunction(context);
}
async function asyncLiminally(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return await innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5pbXBvcnQgQnJhbmNoaW5nQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9icmFuY2hpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGltaW5hbGx5KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpdGVyYWxseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW50YXRpdmVseShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW50aGV0aWNhbGx5KGlubmVyRnVuY3Rpb24sIGNvbnRleHRzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN5bnRoZXRpY0NvbnRleHQgPSBTeW50aGV0aWNDb250ZXh0LmZyb21Db250ZXh0cyhjb250ZXh0cywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHN5bnRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jU2NvcGUoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsU3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3Qgc2NvcGVkQ29udGV4dCA9IFNjb3BlZENvbnRleHQuZnJvbU1ldGFMZXZlbFN1YnN0aXR1dGlvbnMobWV0YUxldmVsU3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHNjb3BlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gYXdhaXQgaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jTGltaW5hbGx5KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gYXdhaXQgaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJhc3luY0xpbWluYWxseSIsImFzeW5jU2NvcGUiLCJhdHRlbXB0IiwibGltaW5hbGx5IiwibGl0ZXJhbGx5Iiwic3ludGhldGljYWxseSIsInRlbnRhdGl2ZWx5IiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImxpdGVyYWxDb250ZXh0IiwiTGl0ZXJhbENvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImNvbnRleHRzIiwic3ludGhldGljQ29udGV4dCIsIlN5bnRoZXRpY0NvbnRleHQiLCJmcm9tQ29udGV4dHMiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwidW5kZWZpbmVkIiwic2NvcGVkQ29udGV4dCIsIlNjb3BlZENvbnRleHQiLCJmcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK0RzQkE7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQXhDTkM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7OytEQS9CVTtnRUFDQztnRUFDQTtrRUFDRTtrRUFDQTtrRUFDQTs7Ozs7O0FBRXRCLFNBQVNKLFFBQVFLLGFBQWEsRUFBRUMsT0FBTztJQUM1QyxNQUFNQyxtQkFBbUJDLGtCQUFnQixDQUFDQyxXQUFXLENBQUNIO0lBRXREQSxVQUFVQyxrQkFBbUIsR0FBRztJQUVoQyxPQUFPRixjQUFjQztBQUN2QjtBQUVPLFNBQVNMLFVBQVVJLGFBQWEsRUFBRUMsT0FBTztJQUM5QyxNQUFNSSxpQkFBaUJDLGdCQUFjLENBQUNGLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVJLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9MLGNBQWNDO0FBQ3ZCO0FBRU8sU0FBU0osVUFBVUcsYUFBYSxFQUFFQyxPQUFPO0lBQzlDLE1BQU1NLGlCQUFpQkMsZ0JBQWMsQ0FBQ0osV0FBVyxDQUFDSDtJQUVsREEsVUFBVU0sZ0JBQWlCLEdBQUc7SUFFOUIsT0FBT1AsY0FBY0M7QUFDdkI7QUFFTyxTQUFTRixZQUFZQyxhQUFhLEVBQUVDLE9BQU87SUFDaEQsTUFBTVEsbUJBQW1CQyxrQkFBZ0IsQ0FBQ04sV0FBVyxDQUFDSDtJQUV0REEsVUFBVVEsa0JBQW1CLEdBQUc7SUFFaEMsT0FBT1QsY0FBY0M7QUFDdkI7QUFFTyxTQUFTSCxjQUFjRSxhQUFhLEVBQUVXLFFBQVEsRUFBRVYsT0FBTztJQUM1RCxNQUFNVyxtQkFBbUJDLGtCQUFnQixDQUFDQyxZQUFZLENBQUNILFVBQVVWO0lBRWpFQSxVQUFVVyxrQkFBbUIsR0FBRztJQUVoQyxPQUFPWixjQUFjQztBQUN2QjtBQUVPLGVBQWVQLFdBQVdNLGFBQWEsRUFBRWUsc0JBQXNCLEVBQUVkLE9BQU87SUFDN0UsSUFBSUEsWUFBWWUsV0FBVztRQUN6QmYsVUFBVWMsd0JBQXlCLEdBQUc7UUFFdENBLHlCQUF5QjtJQUMzQjtJQUVBLE1BQU1FLGdCQUFnQkMsZUFBYSxDQUFDQywwQkFBMEIsQ0FBQ0osd0JBQXdCZDtJQUV2RkEsVUFBVWdCLGVBQWdCLEdBQUc7SUFFN0IsT0FBTyxNQUFNakIsY0FBY0M7QUFDN0I7QUFFTyxlQUFlUixlQUFlTyxhQUFhLEVBQUVDLE9BQU87SUFDekQsTUFBTUksaUJBQWlCQyxnQkFBYyxDQUFDRixXQUFXLENBQUNIO0lBRWxEQSxVQUFVSSxnQkFBaUIsR0FBRztJQUU5QixPQUFPLE1BQU1MLGNBQWNDO0FBQzdCIn0=