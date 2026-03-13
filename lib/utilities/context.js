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
    get reconcile () {
        return reconcile;
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
function reconcile(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function instantiate(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGltaW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGltaW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IFN5bnRoZXRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3ludGhldGljXCI7XG5pbXBvcnQgQnJhbmNoaW5nQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9icmFuY2hpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3Qgc3ludGhldGljQ29udGV4dCA9IFN5bnRoZXRpY0NvbnRleHQuZnJvbUNvbnRleHRzKC4uLmNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bnRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1Jlc3RyaWN0KGlubmVyRnVuY3Rpb24sIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zOyAgLy8vXG5cbiAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNjb3BlZENvbnRleHQgPSBTY29wZWRDb250ZXh0LmZyb21NZXRhTGV2ZWxTdWJzdGl0dXRpb25zKG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBzY29wZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiYXN5bmNSZWNvbmNpbGUiLCJhc3luY1Jlc3RyaWN0IiwiYXR0ZW1wdCIsImNob29zZSIsImluc3RhbnRpYXRlIiwiam9pbiIsInJlY29uY2lsZSIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0cyIsInN5bnRoZXRpY0NvbnRleHQiLCJTeW50aGV0aWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwiY29udGV4dCIsImJyYW5jaGluZ0NvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJlcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwibWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsInVuZGVmaW5lZCIsInNjb3BlZENvbnRleHQiLCJTY29wZWRDb250ZXh0IiwiZnJvbU1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThEc0JBO2VBQUFBOztRQWRBQztlQUFBQTs7UUF4Qk5DO2VBQUFBOztRQVJBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQS9CQUM7ZUFBQUE7O1FBdUJBQztlQUFBQTs7OytEQTlCVTtnRUFDQztnRUFDQTtrRUFDRTtrRUFDQTtrRUFDQTs7Ozs7O0FBRXRCLFNBQVNELEtBQUtFLGFBQWEsRUFBRSxHQUFHQyxRQUFRO0lBQzdDLE1BQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNDLFlBQVksSUFBSUgsV0FDcERJLFVBQVVILGtCQUFtQixHQUFHO0lBRXRDLE9BQU9GLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU1QsT0FBT0ksYUFBYSxFQUFFSyxPQUFPO0lBQzNDLE1BQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNDLFdBQVcsQ0FBQ0g7SUFFdERBLFVBQVVDLGtCQUFtQixHQUFHO0lBRWhDLE9BQU9OLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU1YsUUFBUUssYUFBYSxFQUFFSyxPQUFPO0lBQzVDLE1BQU1JLG1CQUFtQkMsa0JBQWdCLENBQUNGLFdBQVcsQ0FBQ0g7SUFFdERBLFVBQVVJLGtCQUFtQixHQUFHO0lBRWhDLE9BQU9ULGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU04sVUFBVUMsYUFBYSxFQUFFSyxPQUFPO0lBQzlDLE1BQU1NLGlCQUFpQkMsZ0JBQWMsQ0FBQ0osV0FBVyxDQUFDSDtJQUVsREEsVUFBVU0sZ0JBQWlCLEdBQUc7SUFFOUIsT0FBT1gsY0FBY0s7QUFDdkI7QUFFTyxTQUFTUixZQUFZRyxhQUFhLEVBQUVLLE9BQU87SUFDaEQsTUFBTVEsaUJBQWlCQyxnQkFBYyxDQUFDTixXQUFXLENBQUNIO0lBRWxEQSxVQUFVUSxnQkFBaUIsR0FBRztJQUU5QixPQUFPYixjQUFjSztBQUN2QjtBQUVPLGVBQWVYLGNBQWNNLGFBQWEsRUFBRWUsc0JBQXNCLEVBQUVWLE9BQU87SUFDaEYsSUFBSUEsWUFBWVcsV0FBVztRQUN6QlgsVUFBVVUsd0JBQXlCLEdBQUc7UUFFdENBLHlCQUF5QjtJQUMzQjtJQUVBLE1BQU1FLGdCQUFnQkMsZUFBYSxDQUFDQywwQkFBMEIsQ0FBQ0osd0JBQXdCVjtJQUV2RkEsVUFBVVksZUFBZ0IsR0FBRztJQUU3QixPQUFPLE1BQU1qQixjQUFjSztBQUM3QjtBQUVPLGVBQWVaLGVBQWVPLGFBQWEsRUFBRUssT0FBTztJQUN6RCxNQUFNTSxpQkFBaUJDLGdCQUFjLENBQUNKLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVNLGdCQUFpQixHQUFHO0lBRTlCLE9BQU8sTUFBTVgsY0FBY0s7QUFDN0IifQ==