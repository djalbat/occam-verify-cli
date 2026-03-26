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
    get asyncFurtle () {
        return asyncFurtle;
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
async function asyncFurtle(procedure, terms, context) {
    context = procedure.getContext();
    return await procedure.call(terms, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IE5lc3RlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmVzdGVkXCI7XG5pbXBvcnQgVGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90aGV0aWNcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IEJyYW5jaGluZ0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhbmNoaW5nXCI7XG5pbXBvcnQgU3ludGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9zeW50aGV0aWNcIjtcbmltcG9ydCBOb21pbmFsRmlsZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZmlsZS9ub21pbmFsXCI7XG5cbmltcG9ydCB7IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiwgZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3Qgc3ludGhldGljQ29udGV4dCA9IFN5bnRoZXRpY0NvbnRleHQuZnJvbUNvbnRleHRzKC4uLmNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bnRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHdoaWxlICghY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dClcbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBuZXN0ZWRDb250ZXh0ID0gTmVzdGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbmVzdGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbGx5KGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNGdXJ0bGUocHJvY2VkdXJlLCB0ZXJtcywgY29udGV4dCkge1xuICBjb250ZXh0ID0gcHJvY2VkdXJlLmdldENvbnRleHQoKTtcblxuICByZXR1cm4gYXdhaXQgcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZXN0cmljdChpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb25zOyAgLy8vXG5cbiAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gcHJvb2ZDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGF3YWl0IGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiYWJsYXRlIiwiYXN5bmNGdXJ0bGUiLCJhc3luY1JlY29uY2lsZSIsImFzeW5jUmVzdHJpY3QiLCJhdHRlbXB0IiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJpbnN0YW50aWF0ZSIsImpvaW4iLCJub21pbmFsbHkiLCJyZWNvbmNpbGUiLCJzZXJpYWxpc2UiLCJ1bnNlcmlhbGlzZSIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0cyIsInN5bnRoZXRpY0NvbnRleHQiLCJTeW50aGV0aWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwiY29udGV4dCIsImNvbnRleHROb21pbmFsRmlsZUNvbnRleHQiLCJOb21pbmFsRmlsZUNvbnRleHQiLCJnZXRDb250ZXh0IiwiYnJhbmNoaW5nQ29udGV4dCIsIkJyYW5jaGluZ0NvbnRleHQiLCJmcm9tTm90aGluZyIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0Iiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJwcm9jZWR1cmUiLCJ0ZXJtcyIsImNhbGwiLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInVuZGVmaW5lZCIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdUJnQkE7ZUFBQUE7O1FBb0dNQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQWRBQztlQUFBQTs7UUE5RE5DO2VBQUFBOztRQWhDQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFSQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQW5FQUM7ZUFBQUE7O1FBMkVBQztlQUFBQTs7UUFoQkFDO2VBQUFBOztRQThCQUM7ZUFBQUE7O1FBVUFDO2VBQUFBOzs7OERBakhTOytEQUNDOytEQUNBO2dFQUNDO2dFQUNBO2dFQUNBO2lFQUNDO2tFQUNDO2tFQUNBO2tFQUNBO2lFQUNFO3NC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