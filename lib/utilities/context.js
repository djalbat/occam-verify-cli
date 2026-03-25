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
    get ablate () {
        return ablate;
    },
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
const _nominal1 = /*#__PURE__*/ _interop_require_default(require("../context/file/nominal"));
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
function ablate(innerFunction, context) {
    let contextNominalFileContext = context instanceof _nominal1.default;
    while(!contextNominalFileContext){
        context = context.getContext();
        contextNominalFileContext = context instanceof _nominal1.default;
    }
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
async function asyncRestrict(innerFunction, metaLevelAssumptions, context) {
    if (context === undefined) {
        context = metaLevelAssumptions; ///
        metaLevelAssumptions = null;
    }
    const proofContext = _proof.default.fromMetaLevelAssumptions(metaLevelAssumptions, context);
    context = proofContext; ///
    return await innerFunction(context);
}
async function asyncReconcile(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return await innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IE5lc3RlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmVzdGVkXCI7XG5pbXBvcnQgVGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90aGV0aWNcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IEJyYW5jaGluZ0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhbmNoaW5nXCI7XG5pbXBvcnQgU3ludGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9zeW50aGV0aWNcIjtcbmltcG9ydCBOb21pbmFsRmlsZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZmlsZS9ub21pbmFsXCI7XG5cbmltcG9ydCB7IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiwgZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3Qgc3ludGhldGljQ29udGV4dCA9IFN5bnRoZXRpY0NvbnRleHQuZnJvbUNvbnRleHRzKC4uLmNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bnRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHdoaWxlICghY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dClcbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBuZXN0ZWRDb250ZXh0ID0gTmVzdGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbmVzdGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbGx5KGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZXN0cmljdChpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb25zOyAgLy8vXG5cbiAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gcHJvb2ZDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiYWJsYXRlIiwiYXN5bmNSZWNvbmNpbGUiLCJhc3luY1Jlc3RyaWN0IiwiYXR0ZW1wdCIsImNob29zZSIsImRlY2xhcmUiLCJkZXJpdmUiLCJkZXNjZW5kIiwiaW5zdGFudGlhdGUiLCJqb2luIiwibm9taW5hbGx5IiwicmVjb25jaWxlIiwic2VyaWFsaXNlIiwidW5zZXJpYWxpc2UiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJzeW50aGV0aWNDb250ZXh0IiwiU3ludGhldGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImNvbnRleHQiLCJjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0IiwiTm9taW5hbEZpbGVDb250ZXh0IiwiZ2V0Q29udGV4dCIsImJyYW5jaGluZ0NvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJpbGxhdGl2ZUNvbnRleHQiLCJJbGxhdGl2ZUNvbnRleHQiLCJ0aGV0aWNDb250ZXh0IiwiVGhldGljQ29udGV4dCIsIm5lc3RlZENvbnRleHQiLCJOZXN0ZWRDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJsaW1pbmFsQ29udGV4dCIsIkxpbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsIm5vbWluYWxDb250ZXh0IiwiTm9taW5hbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJ1bmRlZmluZWQiLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVCZ0JBO2VBQUFBOztRQWtITUM7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQXhETkM7ZUFBQUE7O1FBaENBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQXdCQUM7ZUFBQUE7O1FBbkVBQztlQUFBQTs7UUEyRUFDO2VBQUFBOztRQWhCQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFVQUM7ZUFBQUE7Ozs4REFqSFM7K0RBQ0M7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7a0VBQ0M7a0VBQ0E7a0VBQ0E7aUVBQ0U7c0JBRWtEOzs7Ozs7QUFFMUUsU0FBU0osS0FBS0ssYUFBYSxFQUFFLEdBQUdDLFFBQVE7SUFDN0MsTUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsWUFBWSxJQUFJSCxXQUNwREksVUFBVUgsa0JBQW1CLEdBQUc7SUFFdEMsT0FBT0YsY0FBY0s7QUFDdkI7QUFFTyxTQUFTbkIsT0FBT2MsYUFBYSxFQUFFSyxPQUFPO0lBQzNDLElBQUlDLDRCQUE2QkQsbUJBQW1CRSxpQkFBa0I7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