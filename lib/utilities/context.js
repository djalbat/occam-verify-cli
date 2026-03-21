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
    let contextExtraneousContext = isContextExtraneousContext(context);
    while(contextExtraneousContext){
        context = context.getContext();
        contextExtraneousContext = isContextExtraneousContext(context);
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IE5lc3RlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmVzdGVkXCI7XG5pbXBvcnQgVGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90aGV0aWNcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IEJyYW5jaGluZ0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhbmNoaW5nXCI7XG5pbXBvcnQgU3ludGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9zeW50aGV0aWNcIjtcblxuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tQ29udGV4dHMoLi4uY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3ludGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBuZXN0ZWRDb250ZXh0ID0gTmVzdGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbmVzdGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbGx5KGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsaWZ5KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZXN0cmljdChpbm5lckZ1bmN0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IGFzc3VtcHRpb25zOyAgLy8vXG5cbiAgICBhc3N1bXB0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbUFzc3VtcHRpb25zKGFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gcHJvb2ZDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dExpbWluYWxDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBMaW1pbmFsQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRFcGhlbWVyYWxDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBFcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEJyYW5jaGluZ0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIEJyYW5jaGluZ0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0U3ludGhldGljQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgU3ludGhldGljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9ICggY29udGV4dExpbWluYWxDb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29udGV4dEVwaGVtZXJhbENvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBjb250ZXh0QnJhbmNoaW5nQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbnRleHRTeW50aGV0aWNDb250ZXh0ICk7XG5cbiAgcmV0dXJuIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJhc3luY1JlY29uY2lsZSIsImFzeW5jUmVzdHJpY3QiLCJhdHRlbXB0IiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJpbnN0YW50aWF0ZSIsImpvaW4iLCJub21pbmFsbHkiLCJyZWNvbmNpbGUiLCJzZXJpYWxpc2UiLCJzaW1wbGlmeSIsInVuc2VyaWFsaXNlIiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHRzIiwic3ludGhldGljQ29udGV4dCIsIlN5bnRoZXRpY0NvbnRleHQiLCJmcm9tQ29udGV4dHMiLCJjb250ZXh0IiwiYnJhbmNoaW5nQ29udGV4dCIsIkJyYW5jaGluZ0NvbnRleHQiLCJmcm9tTm90aGluZyIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0Iiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJhc3N1bXB0aW9ucyIsInVuZGVmaW5lZCIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21Bc3N1bXB0aW9ucyIsImNvbnRleHRMaW1pbmFsQ29udGV4dCIsImNvbnRleHRFcGhlbWVyYWxDb250ZXh0IiwiY29udGV4dEJyYW5jaGluZ0NvbnRleHQiLCJjb250ZXh0U3ludGhldGljQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNElzQkE7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQXhFTkM7ZUFBQUE7O1FBaENBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQXdCQUM7ZUFBQUE7O1FBdkRBQztlQUFBQTs7UUErREFDO2VBQUFBOztRQWhCQUM7ZUFBQUE7O1FBOENBQztlQUFBQTs7UUFoQkFDO2VBQUFBOztRQTBCQUM7ZUFBQUE7Ozs4REFwSFM7K0RBQ0M7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7a0VBQ0M7a0VBQ0E7a0VBQ0E7c0JBRW9EOzs7Ozs7QUFFMUUsU0FBU0wsS0FBS00sYUFBYSxFQUFFLEdBQUdDLFFBQVE7SUFDN0MsTUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsWUFBWSxJQUFJSCxXQUNwREksVUFBVUgsa0JBQW1CLEdBQUc7SUFFdEMsT0FBT0YsY0FBY0s7QUFDdkI7QUFFTyxTQUFTaEIsT0FBT1csYUFBYSxFQUFFSyxPQUFPO0lBQzNDLE1BQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNDLFdBQVcsQ0FBQ0g7SUFFdERBLFVBQVVDLGtCQUFtQixHQUFHO0lBRWhDLE9BQU9OLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU2QsT0FBT1MsYUFBYSxFQUFFSyxPQUFPO0lBQzNDLE1BQU1JLGtCQUFrQkMsaUJBQWUsQ0FBQ0YsV0FBVyxDQUFDSDtJQUVwREEsVUFBVUksaUJBQWtCLEdBQUc7SUFFL0IsT0FBT1QsY0FBY0s7QUFDdkI7QUFFTyxT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