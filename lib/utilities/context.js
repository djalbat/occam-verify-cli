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
    },
    get sanitisedContextFromContext () {
        return sanitisedContextFromContext;
    }
});
const _scoped = /*#__PURE__*/ _interop_require_default(require("../context/scoped"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
const _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
const _branching = /*#__PURE__*/ _interop_require_default(require("../context/branching"));
const _synthetic = /*#__PURE__*/ _interop_require_default(require("../context/synthetic"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function nominally(innerFunction) {
    let context;
    context = _nominal.default; ///
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
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
function instantiate(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    const element = innerFunction(context);
    context = element.getContext();
    if (context !== null) {
        context = context.getContext();
        element.setContext(context);
    }
    return element;
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
function sanitisedContextFromContext(context) {
    let contextExtraneousContext = isContextExtraneousContext(context);
    while(contextExtraneousContext){
        context = context.getContext();
        contextExtraneousContext = isContextExtraneousContext(context);
    }
    const ephemeralContext = _ephemeral.default.fromNothing(context), sanitisedContext = ephemeralContext; ///
    return sanitisedContext;
}
function isContextExtraneousContext(context) {
    const contextLiminalContext = context instanceof _liminal.default, contextEphemeralContext = context instanceof _ephemeral.default, contextBranchingContext = context instanceof _branching.default, contextSyntheticContext = context instanceof _synthetic.default, contextExtraneousContext = contextLiminalContext || contextEphemeralContext || contextBranchingContext || contextSyntheticContext;
    return contextExtraneousContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgbm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsbHkoaW5uZXJGdW5jdGlvbikge1xuICBsZXQgY29udGV4dDtcblxuICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2luKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IHN5bnRoZXRpY0NvbnRleHQgPSBTeW50aGV0aWNDb250ZXh0LmZyb21Db250ZXh0cyguLi5jb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBzeW50aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBicmFuY2hpbmdDb250ZXh0ID0gQnJhbmNoaW5nQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYnJhbmNoaW5nQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlbGVtZW50LmdldENvbnRleHQoKTtcblxuICBpZiAoY29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgIGVsZW1lbnQuc2V0Q29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZXN0cmljdChpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gbWV0YUxldmVsU3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBzY29wZWRDb250ZXh0ID0gU2NvcGVkQ29udGV4dC5mcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gc2NvcGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBhd2FpdCBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBhd2FpdCBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpc2VkQ29udGV4dEZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICBzYW5pdGlzZWRDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIHNhbml0aXNlZENvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dExpbWluYWxDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBMaW1pbmFsQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRFcGhlbWVyYWxDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBFcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEJyYW5jaGluZ0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIEJyYW5jaGluZ0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0U3ludGhldGljQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgU3ludGhldGljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IChjb250ZXh0TGltaW5hbENvbnRleHQgfHwgY29udGV4dEVwaGVtZXJhbENvbnRleHQgfHwgY29udGV4dEJyYW5jaGluZ0NvbnRleHQgfHwgY29udGV4dFN5bnRoZXRpY0NvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiYXN5bmNSZWNvbmNpbGUiLCJhc3luY1Jlc3RyaWN0IiwiYXR0ZW1wdCIsImNob29zZSIsImluc3RhbnRpYXRlIiwiam9pbiIsIm5vbWluYWxseSIsInJlY29uY2lsZSIsInNhbml0aXNlZENvbnRleHRGcm9tQ29udGV4dCIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0Iiwibm9taW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJjb250ZXh0cyIsInN5bnRoZXRpY0NvbnRleHQiLCJTeW50aGV0aWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwiYnJhbmNoaW5nQ29udGV4dCIsIkJyYW5jaGluZ0NvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJlbGVtZW50IiwiZ2V0Q29udGV4dCIsInNldENvbnRleHQiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwidW5kZWZpbmVkIiwic2NvcGVkQ29udGV4dCIsIlNjb3BlZENvbnRleHQiLCJmcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0Iiwic2FuaXRpc2VkQ29udGV4dCIsImNvbnRleHRMaW1pbmFsQ29udGV4dCIsImNvbnRleHRFcGhlbWVyYWxDb250ZXh0IiwiY29udGV4dEJyYW5jaGluZ0NvbnRleHQiLCJjb250ZXh0U3ludGhldGljQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBcUZzQkE7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQWxDTkM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQXdCQUM7ZUFBQUE7O1FBL0JBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBbUNBQztlQUFBQTs7UUFnREFDO2VBQUFBOzs7K0RBM0ZVO2dFQUNDO2dFQUNBO2dFQUNBO2tFQUNFO2tFQUNBO2tFQUNBOzs7Ozs7QUFFdEIsU0FBU0YsVUFBVUcsYUFBYTtJQUNyQyxJQUFJQztJQUVKQSxVQUFVQyxnQkFBYyxFQUFFLEdBQUc7SUFFN0IsTUFBTUMsaUJBQWlCQyxnQkFBYyxDQUFDQyxXQUFXLENBQUNKO0lBRWxEQSxVQUFVRSxnQkFBaUIsR0FBRztJQUU5QixPQUFPSCxjQUFjQztBQUN2QjtB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