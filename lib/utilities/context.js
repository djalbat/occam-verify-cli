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
    const contextEphemeralContext = context instanceof _ephemeral.default;
    if (contextEphemeralContext) {
        context = context.getContext();
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb29mQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wcm9vZlwiO1xuaW1wb3J0IE5lc3RlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmVzdGVkXCI7XG5pbXBvcnQgVGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90aGV0aWNcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBFcGhlbWVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2VwaGVtZXJhbFwiO1xuaW1wb3J0IEJyYW5jaGluZ0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhbmNoaW5nXCI7XG5pbXBvcnQgU3ludGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9zeW50aGV0aWNcIjtcblxuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tQ29udGV4dHMoLi4uY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3ludGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBuZXN0ZWRDb250ZXh0ID0gTmVzdGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbmVzdGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRFcGhlbWVyYWxDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBFcGhlbWVyYWxDb250ZXh0KTtcblxuICBpZiAoY29udGV4dEVwaGVtZXJhbENvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG4gIH1cblxuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb25jaWxlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxseShpbm5lckZ1bmN0aW9uKSB7XG4gIGxldCBjb250ZXh0O1xuXG4gIGNvbnN0IG5vbWluYWxDb250ZXh0ID0gTm9taW5hbENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVzdHJpY3QoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uczsgIC8vL1xuXG4gICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyhtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHByb29mQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBhd2FpdCBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNSZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBhd2FpdCBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImFzeW5jUmVjb25jaWxlIiwiYXN5bmNSZXN0cmljdCIsImF0dGVtcHQiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImluc3RhbnRpYXRlIiwiam9pbiIsIm5vbWluYWxseSIsInJlY29uY2lsZSIsInNlcmlhbGlzZSIsInVuc2VyaWFsaXNlIiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHRzIiwic3ludGhldGljQ29udGV4dCIsIlN5bnRoZXRpY0NvbnRleHQiLCJmcm9tQ29udGV4dHMiLCJjb250ZXh0IiwiYnJhbmNoaW5nQ29udGV4dCIsIkJyYW5jaGluZ0NvbnRleHQiLCJmcm9tTm90aGluZyIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJjb250ZXh0RXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJnZXRDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0Iiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInVuZGVmaW5lZCIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBa0lzQkE7ZUFBQUE7O1FBZEFDO2VBQUFBOztRQTlETkM7ZUFBQUE7O1FBaENBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQThCQUM7ZUFBQUE7O1FBN0RBQztlQUFBQTs7UUFxRUFDO2VBQUFBOztRQWhCQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFVQUM7ZUFBQUE7Ozs4REExR1M7K0RBQ0M7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7a0VBQ0M7a0VBQ0E7a0VBQ0E7c0JBRW9EOzs7Ozs7QUFFMUUsU0FBU0osS0FBS0ssYUFBYSxFQUFFLEdBQUdDLFFBQVE7SUFDN0MsTUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsWUFBWSxJQUFJSCxXQUNwREksVUFBVUgsa0JBQW1CLEdBQUc7SUFFdEMsT0FBT0YsY0FBY0s7QUFDdkI7QUFFTyxTQUFTZixPQUFPVSxhQUFhLEVBQUVLLE9BQU87SUFDM0MsTUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsV0FBVyxDQUFDSDtJQUV0REEsVUFBVUMsa0JBQW1CLEdBQUc7SUFFaEMsT0FBT04sY0FBY0s7QUFDdkI7QUFFTyxTQUFTYixPQUFPUSxhQUFhLEVBQUVLLE9BQU87SUFDM0MsTUFBTUksa0JBQWtCQyxpQkFBZSxDQUFDRixXQUFXLENBQUNIO0lBRXBEQSxVQUFVSSxpQkFBa0IsR0FBRztJQUUvQixPQUFPVCxjQUFjSztBQUN2QjtBQUVPLFNBQVNkLFFBQVFTLGFBQWEsRUFBRUssT0FBTztJQUM1QyxNQUFNTSxnQkFBZ0JDLGVBQWEsQ0FBQ0osV0FBVyxDQUFDSDtJQUVoREEsVUFBVU0sZUFBZ0IsR0FBRztJQUU3QixPQUFPWCxjQUFjSztBQUN2QjtBQUVPLFNBQVNaLFFBQVFPLGFBQWEsRUFBRUssT0FBTztJQUM1QyxNQUFNUSxnQkFBZ0JDLGVBQWEsQ0FBQ04sV0FBVyxDQUFDSDtJQUVoREEsVUFBVVEsZUFBZ0IsR0FBRztJQUU3QixPQUFPYixjQUFjSztBQUN2QjtBQUVPLFNBQVNoQixRQUFRVyxhQUFhLEVBQUVLLE9BQU87SUFDNUMsTUFBTVUsMEJBQTJCVixtQkFBbUJXLGtCQUFnQjtJQUVwRSxJQUFJRCx5QkFBeUI7UUFDM0JWLFVBQVVBLFFBQVFZLFVBQVU7SUFDOUI7SUFFQSxNQUFNQyxtQkFBbUJGLGtCQUFnQixDQUFDUixXQUFXLENBQUNIO0lBRXREQSxVQUFVYSxrQkFBbUIsR0FBRztJQUVoQyxPQUFPbEIsY0FBY0s7QUFDdkI7QUFFTyxTQUFTUixVQUFVRyxhQUFhLEVBQUVLLE9BQU87SUFDOUMsTUFBTWMsaUJBQWlCQyxnQkFBYyxDQUFDWixXQUFXLENBQUNIO0lBRWxEQSxVQUFVYyxnQkFBaUIsR0FBRztJQUU5QixPQUFPbkIsY0FBY0s7QUFDdkI7QUFFTyxTQUFTWCxZQUFZTSxhQUFhLEVBQUVLLE9BQU87SUFDaEQsTUFBTWdCLGlCQUFpQkMsZ0JBQWMsQ0FBQ2QsV0FBVyxDQUFDSDtJQUVsREEsVUFBVWdCLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9yQixjQUFjSztBQUN2QjtBQUVPLFNBQVNULFVBQVVJLGFBQWE7SUFDckMsSUFBSUs7SUFFSixNQUFNa0IsaUJBQWlCQyxnQkFBYyxDQUFDaEIsV0FBVztJQUVqREgsVUFBVWtCLGdCQUFnQixHQUFHO0lBRTdCLE1BQU1GLGlCQUFpQkMsZ0JBQWMsQ0FBQ2QsV0FBVyxDQUFDSDtJQUVsREEsVUFBVWdCLGdCQUFpQixHQUFHO0lBRTlCLE9BQU9yQixjQUFjSztBQUN2QjtBQUVPLFNBQVNQLFVBQVVFLGFBQWEsRUFBRUssT0FBTztJQUM5QyxNQUFNYSxtQkFBbUJiLFNBQ25Cb0IsdUJBQXVCQyxJQUFBQSw0Q0FBc0MsRUFBQ1IsbUJBQzlEUyxjQUFjRixzQkFBc0IsR0FBRztJQUU3Q3BCLFVBQVVzQixhQUFjLEdBQUc7SUFFM0IsT0FBTzNCLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU04sWUFBWUMsYUFBYSxFQUFFNEIsSUFBSSxFQUFFdkIsT0FBTztJQUN0RCxNQUFNYSxtQkFBbUJXLElBQUFBLDhCQUF3QixFQUFDRCxNQUFNdkI7SUFFeERBLFVBQVVhLGtCQUFrQixHQUFHO0lBRS9CLE9BQU9sQixjQUFjNEIsTUFBTXZCO0FBQzdCO0FBRU8sZUFBZWpCLGNBQWNZLGFBQWEsRUFBRThCLG9CQUFvQixFQUFFekIsT0FBTztJQUM5RSxJQUFJQSxZQUFZMEIsV0FBVztRQUN6QjFCLFVBQVV5QixzQkFBdUIsR0FBRztRQUVwQ0EsdUJBQXVCO0lBQ3pCO0lBRUEsTUFBTUUsZUFBZUMsY0FBWSxDQUFDQyx3QkFBd0IsQ0FBQ0osc0JBQXNCekI7SUFFakZBLFVBQVUyQixjQUFlLEdBQUc7SUFFNUIsT0FBTyxNQUFNaEMsY0FBY0s7QUFDN0I7QUFFTyxlQUFlbEIsZUFBZWEsYUFBYSxFQUFFSyxPQUFPO0lBQ3pELE1BQU1jLGlCQUFpQkMsZ0JBQWMsQ0FBQ1osV0FBVyxDQUFDSDtJQUVsREEsVUFBVWMsZ0JBQWlCLEdBQUc7SUFFOUIsT0FBTyxNQUFNbkIsY0FBY0s7QUFDN0IifQ==