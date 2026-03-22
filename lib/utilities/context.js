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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IE5lc3RlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmVzdGVkXCI7XG5pbXBvcnQgVGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90aGV0aWNcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IEJyYW5jaGluZ0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhbmNoaW5nXCI7XG5pbXBvcnQgU3ludGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9zeW50aGV0aWNcIjtcblxuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tQ29udGV4dHMoLi4uY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3ludGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBuZXN0ZWRDb250ZXh0ID0gTmVzdGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbmVzdGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbGx5KGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZXN0cmljdChpbm5lckZ1bmN0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IGFzc3VtcHRpb25zOyAgLy8vXG5cbiAgICBhc3N1bXB0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbUFzc3VtcHRpb25zKGFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gcHJvb2ZDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiYXN5bmNSZWNvbmNpbGUiLCJhc3luY1Jlc3RyaWN0IiwiYXR0ZW1wdCIsImNob29zZSIsImRlY2xhcmUiLCJkZXJpdmUiLCJkZXNjZW5kIiwiaW5zdGFudGlhdGUiLCJqb2luIiwibm9taW5hbGx5IiwicmVjb25jaWxlIiwic2VyaWFsaXNlIiwidW5zZXJpYWxpc2UiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJzeW50aGV0aWNDb250ZXh0IiwiU3ludGhldGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiaWxsYXRpdmVDb250ZXh0IiwiSWxsYXRpdmVDb250ZXh0IiwidGhldGljQ29udGV4dCIsIlRoZXRpY0NvbnRleHQiLCJuZXN0ZWRDb250ZXh0IiwiTmVzdGVkQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImxpdGVyYWxDb250ZXh0IiwiTGl0ZXJhbENvbnRleHQiLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsImFzc3VtcHRpb25zIiwidW5kZWZpbmVkIiwicHJvb2ZDb250ZXh0IiwiUHJvb2ZDb250ZXh0IiwiZnJvbUFzc3VtcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE0SHNCQTtlQUFBQTs7UUFkQUM7ZUFBQUE7O1FBeEROQztlQUFBQTs7UUFoQ0FDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7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