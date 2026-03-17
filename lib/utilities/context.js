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
    get asyncReconcile () {
        return asyncReconcile;
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
    get nominally () {
        return nominally;
    },
    get reconcile () {
        return reconcile;
    }
});
const _scoped = /*#__PURE__*/ _interop_require_default(require("../context/scoped"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
const _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
const _branching = /*#__PURE__*/ _interop_require_default(require("../context/branching"));
const _synthetic = /*#__PURE__*/ _interop_require_default(require("../context/synthetic"));
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
function reconcile(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function nominally(innerFunction) {
    let context;
    context = _nominal.default; ///
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function instantiate(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
    steriiseLiteralContext(literalContext);
    context = literalContext; ///
    return innerFunction(context);
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
async function asyncReconcile(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return await innerFunction(context);
}
function steriiseLiteralContext(literalContext) {
    let context;
    context = literalContext.getContext();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBub21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2luKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IHN5bnRoZXRpY0NvbnRleHQgPSBTeW50aGV0aWNDb250ZXh0LmZyb21Db250ZXh0cyguLi5jb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBzeW50aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBicmFuY2hpbmdDb250ZXh0ID0gQnJhbmNoaW5nQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYnJhbmNoaW5nQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbGx5KGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIHN0ZXJpaXNlTGl0ZXJhbENvbnRleHQobGl0ZXJhbENvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZXN0cmljdChpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gbWV0YUxldmVsU3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBzY29wZWRDb250ZXh0ID0gU2NvcGVkQ29udGV4dC5mcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gc2NvcGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBhd2FpdCBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBhd2FpdCBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBzdGVyaWlzZUxpdGVyYWxDb250ZXh0KGxpdGVyYWxDb250ZXh0KSB7XG4gIGxldCBjb250ZXh0O1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dC5nZXRDb250ZXh0KCk7XG5cblxufVxuIl0sIm5hbWVzIjpbImFzeW5jUmVjb25jaWxlIiwiYXN5bmNSZXN0cmljdCIsImF0dGVtcHQiLCJjaG9vc2UiLCJpbnN0YW50aWF0ZSIsImpvaW4iLCJub21pbmFsbHkiLCJyZWNvbmNpbGUiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJzeW50aGV0aWNDb250ZXh0IiwiU3ludGhldGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJsaW1pbmFsQ29udGV4dCIsIkxpbWluYWxDb250ZXh0Iiwibm9taW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0Iiwic3Rlcmlpc2VMaXRlcmFsQ29udGV4dCIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJ1bmRlZmluZWQiLCJzY29wZWRDb250ZXh0IiwiU2NvcGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwiZ2V0Q29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNkVzQkE7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQXRDTkM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQW9DQUM7ZUFBQUE7O1FBM0NBQztlQUFBQTs7UUErQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7OytEQS9CVTtnRUFDQztnRUFDQTtnRUFDQTtrRUFDRTtrRUFDQTtrRUFDQTs7Ozs7O0FBRXRCLFNBQVNGLEtBQUtHLGFBQWEsRUFBRSxHQUFHQyxRQUFRO0lBQzdDLE1BQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNDLFlBQVksSUFBSUgsV0FDcERJLFVBQVVILGtCQUFtQixHQUFHO0lBRXRDLE9BQU9GLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU1YsT0FBT0ssYUFBYSxFQUFFSyxPQUFPO0lBQzNDLE1BQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNDLFdBQVcsQ0FBQ0g7SUFFdERBLFVBQVVDLGtCQUFtQixHQUFHO0lBRWhDLE9BQU9OLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU1gsUUFBUU0sYUFBYSxFQUFFSyxPQUFPO0lBQzVDLE1BQU1JLG1CQUFtQkMsa0JBQWdCLENBQUNGLFdBQVcsQ0FBQ0g7SUFFdERBLFVBQVVJLGtCQUFtQixHQUFHO0lBRWhDLE9BQU9ULGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU04sVUFBVUMsYUFBYSxFQUFFSyxPQUFPO0lBQzlDLE1BQU1NLGlCQUFpQkMsZ0JBQWMsQ0FBQ0osV0FBVyxDQUFDSDtJQUVsREEsVUFBVU0sZ0JBQWlCLEdBQUc7SUFFOUIsT0FBT1gsY0FBY0s7QUFDdkI7QUFFTyxTQUFTUCxVQUFVRSxhQUFhO0lBQ3JDLElBQUlLO0lBRUpBLFVBQVVRLGdCQUFjLEVBQUUsR0FBRztJQUU3QixNQUFNQyxpQkFBaUJDLGdCQUFjLENBQUNQLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVTLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9kLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU1QsWUFBWUksYUFBYSxFQUFFSyxPQUFPO0lBQ2hELE1BQU1TLGlCQUFpQkMsZ0JBQWMsQ0FBQ1AsV0FBVyxDQUFDSDtJQUVsRFcsdUJBQXVCRjtJQUV2QlQsVUFBVVMsZ0JBQWlCLEdBQUc7SUFFOUIsT0FBT2QsY0FBY0s7QUFDdkI7QUFFTyxlQUFlWixjQUFjTyxhQUFhLEVBQUVpQixzQkFBc0IsRUFBRVosT0FBTztJQUNoRixJQUFJQSxZQUFZYSxXQUFXO1FBQ3pCYixVQUFVWSx3QkFBeUIsR0FBRztRQUV0Q0EseUJBQXlCO0lBQzNCO0lBRUEsTUFBTUUsZ0JBQWdCQyxlQUFhLENBQUNDLDBCQUEwQixDQUFDSix3QkFBd0JaO0lBRXZGQSxVQUFVYyxlQUFnQixHQUFHO0lBRTdCLE9BQU8sTUFBTW5CLGNBQWNLO0FBQzdCO0FBRU8sZUFBZWIsZUFBZVEsYUFBYSxFQUFFSyxPQUFPO0lBQ3pELE1BQU1NLGlCQUFpQkMsZ0JBQWMsQ0FBQ0osV0FBVyxDQUFDSDtJQUVsREEsVUFBVU0sZ0JBQWlCLEdBQUc7SUFFOUIsT0FBTyxNQUFNWCxjQUFjSztBQUM3QjtBQUVBLFNBQVNXLHVCQUF1QkYsY0FBYztJQUM1QyxJQUFJVDtJQUVKQSxVQUFVUyxlQUFlUSxVQUFVO0FBR3JDIn0=