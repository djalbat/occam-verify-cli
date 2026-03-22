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
    get declare () {
        return declare;
    },
    get derive () {
        return derive;
    },
    get descend () {
        return descend;
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
    get serialise () {
        return serialise;
    },
    get simplify () {
        return simplify;
    },
    get unserialise () {
        return unserialise;
    }
});
const _proof = /*#__PURE__*/ _interop_require_default(require("../context/proof"));
const _nested = /*#__PURE__*/ _interop_require_default(require("../context/nested"));
const _thetic = /*#__PURE__*/ _interop_require_default(require("../context/thetic"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
const _illative = /*#__PURE__*/ _interop_require_default(require("../context/illative"));
const _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
const _branching = /*#__PURE__*/ _interop_require_default(require("../context/branching"));
const _synthetic = /*#__PURE__*/ _interop_require_default(require("../context/synthetic"));
const _json = require("../utilities/json");
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
function derive(innerFunction, context) {
    const illativeContext = _illative.default.fromNothing(context);
    context = illativeContext; ///
    return innerFunction(context);
}
function declare(innerFunction, context) {
    const theticContext = _thetic.default.fromNothing(context);
    context = theticContext; ///
    return innerFunction(context);
}
function descend(innerFunction, context) {
    const nestedContext = _nested.default.fromNothing(context);
    context = nestedContext; ///
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
function nominally(innerFunction) {
    let context;
    const nominalContext = _nominal.default.fromNothing();
    context = nominalContext; ///
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function simplify(innerFunction, context) {
    context = removeExtraneousContexts(context);
    const ephemeralContext = _ephemeral.default.fromNothing(context);
    context = ephemeralContext; ///
    return innerFunction(context);
}
function serialise(innerFunction, context) {
    const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
    context = contextJSON; ///
    return innerFunction(context);
}
function unserialise(innerFunction, json, context) {
    const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
    context = ephemeralContext; ///
    return innerFunction(json, context);
}
async function asyncRestrict(innerFunction, assumptions, context) {
    if (context === undefined) {
        context = assumptions; ///
        assumptions = null;
    }
    const proofContext = _proof.default.fromAssumptions(assumptions, context);
    context = proofContext; ///
    return await innerFunction(context);
}
async function asyncReconcile(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return await innerFunction(context);
}
function isContextExtraneousContext(context) {
    const contextLiminalContext = context instanceof _liminal.default, contextEphemeralContext = context instanceof _ephemeral.default, contextBranchingContext = context instanceof _branching.default, contextSyntheticContext = context instanceof _synthetic.default, contextExtraneousContext = contextLiminalContext || contextEphemeralContext || contextBranchingContext || contextSyntheticContext;
    return contextExtraneousContext;
}
function removeExtraneousContexts(context) {
    context = trimExtraneousContexts(context);
    const firstContext = context; ///
    let currentContext = context; ///
    while(currentContext !== null){
        context = currentContext.getContext();
        context = trimExtraneousContexts(context);
        currentContext.setContext(context);
        currentContext = context; ///
    }
    context = firstContext; ///
    return context;
}
function trimExtraneousContexts(context) {
    let contextExtraneousContext = isContextExtraneousContext(context);
    while(contextExtraneousContext){
        context = context.getContext();
        if (context === null) {
            break;
        }
        contextExtraneousContext = isContextExtraneousContext(context);
    }
    return context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IE5lc3RlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmVzdGVkXCI7XG5pbXBvcnQgVGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90aGV0aWNcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IEJyYW5jaGluZ0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhbmNoaW5nXCI7XG5pbXBvcnQgU3ludGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9zeW50aGV0aWNcIjtcblxuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tQ29udGV4dHMoLi4uY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3ludGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBuZXN0ZWRDb250ZXh0ID0gTmVzdGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbmVzdGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbGx5KGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsaWZ5KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29udGV4dCA9IHJlbW92ZUV4dHJhbmVvdXNDb250ZXh0cyhjb250ZXh0KTtcblxuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVzdHJpY3QoaW5uZXJGdW5jdGlvbiwgYXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBhc3N1bXB0aW9uczsgIC8vL1xuXG4gICAgYXNzdW1wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21Bc3N1bXB0aW9ucyhhc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHByb29mQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBhd2FpdCBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBhd2FpdCBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRMaW1pbmFsQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTGltaW5hbENvbnRleHQpLFxuICAgICAgICBjb250ZXh0RXBoZW1lcmFsQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgRXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRCcmFuY2hpbmdDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBCcmFuY2hpbmdDb250ZXh0KSxcbiAgICAgICAgY29udGV4dFN5bnRoZXRpY0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIFN5bnRoZXRpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSAoIGNvbnRleHRMaW1pbmFsQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbnRleHRFcGhlbWVyYWxDb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29udGV4dEJyYW5jaGluZ0NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBjb250ZXh0U3ludGhldGljQ29udGV4dCApO1xuXG4gIHJldHVybiBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV4dHJhbmVvdXNDb250ZXh0cyhjb250ZXh0KSB7XG4gIGNvbnRleHQgPSB0cmltRXh0cmFuZW91c0NvbnRleHRzKGNvbnRleHQpO1xuXG4gIGNvbnN0IGZpcnN0Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gIGxldCBjdXJyZW50Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gIHdoaWxlIChjdXJyZW50Q29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnRleHQgPSBjdXJyZW50Q29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0ID0gdHJpbUV4dHJhbmVvdXNDb250ZXh0cyhjb250ZXh0KTtcblxuICAgIGN1cnJlbnRDb250ZXh0LnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICBjdXJyZW50Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuICB9XG5cbiAgY29udGV4dCA9IGZpcnN0Q29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIHRyaW1FeHRyYW5lb3VzQ29udGV4dHMoY29udGV4dCkge1xuICBsZXQgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQoY29udGV4dCk7XG5cbiAgd2hpbGUgKGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImFzeW5jUmVjb25jaWxlIiwiYXN5bmNSZXN0cmljdCIsImF0dGVtcHQiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImluc3RhbnRpYXRlIiwiam9pbiIsIm5vbWluYWxseSIsInJlY29uY2lsZSIsInNlcmlhbGlzZSIsInNpbXBsaWZ5IiwidW5zZXJpYWxpc2UiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJzeW50aGV0aWNDb250ZXh0IiwiU3ludGhldGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiaWxsYXRpdmVDb250ZXh0IiwiSWxsYXRpdmVDb250ZXh0IiwidGhldGljQ29udGV4dCIsIlRoZXRpY0NvbnRleHQiLCJuZXN0ZWRDb250ZXh0IiwiTmVzdGVkQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImxpdGVyYWxDb250ZXh0IiwiTGl0ZXJhbENvbnRleHQiLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwicmVtb3ZlRXh0cmFuZW91c0NvbnRleHRzIiwiZXBoZW1lcmFsQ29udGV4dEpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsImFzc3VtcHRpb25zIiwidW5kZWZpbmVkIiwicHJvb2ZDb250ZXh0IiwiUHJvb2ZDb250ZXh0IiwiZnJvbUFzc3VtcHRpb25zIiwiaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQiLCJjb250ZXh0TGltaW5hbENvbnRleHQiLCJjb250ZXh0RXBoZW1lcmFsQ29udGV4dCIsImNvbnRleHRCcmFuY2hpbmdDb250ZXh0IiwiY29udGV4dFN5bnRoZXRpY0NvbnRleHQiLCJjb250ZXh0RXh0cmFuZW91c0NvbnRleHQiLCJ0cmltRXh0cmFuZW91c0NvbnRleHRzIiwiZmlyc3RDb250ZXh0IiwiY3VycmVudENvbnRleHQi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