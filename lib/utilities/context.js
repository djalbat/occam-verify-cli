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
    get ablates () {
        return ablates;
    },
    get attempt () {
        return attempt;
    },
    get attempts () {
        return attempts;
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
    get enclose () {
        return enclose;
    },
    get evaluate () {
        return evaluate;
    },
    get ground () {
        return ground;
    },
    get instantiate () {
        return instantiate;
    },
    get join () {
        return join;
    },
    get manifest () {
        return manifest;
    },
    get reconcile () {
        return reconcile;
    },
    get serialise () {
        return serialise;
    },
    get serialises () {
        return serialises;
    },
    get unserialise () {
        return unserialise;
    },
    get unserialises () {
        return unserialises;
    }
});
const _mnemic = /*#__PURE__*/ _interop_require_default(require("../context/mnemic"));
const _nested = /*#__PURE__*/ _interop_require_default(require("../context/nested"));
const _thetic = /*#__PURE__*/ _interop_require_default(require("../context/thetic"));
const _bounded = /*#__PURE__*/ _interop_require_default(require("../context/bounded"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
const _phaneric = /*#__PURE__*/ _interop_require_default(require("../context/phaneric"));
const _synoptic = /*#__PURE__*/ _interop_require_default(require("../context/synoptic"));
const _illative = /*#__PURE__*/ _interop_require_default(require("../context/illative"));
const _branching = /*#__PURE__*/ _interop_require_default(require("../context/branching"));
const _nominal1 = /*#__PURE__*/ _interop_require_default(require("../context/file/nominal"));
const _json = require("../utilities/json");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function join(innerFunction, ...contexts) {
    contexts = contexts.filter((context)=>{
        if (context !== null) {
            return true;
        }
    });
    const synopticContext = _synoptic.default.fromContexts(contexts), context = synopticContext; ///
    return innerFunction(context);
}
function ground(innerFunction) {
    let context;
    const nominalContext = _nominal.default.fromNothing();
    context = nominalContext; ///
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function ablate(innerFunction, context) {
    const released = context.isReleased();
    if (!released) {
        let contextExtraneousContext = isContextExtraneousContext(context);
        while(contextExtraneousContext){
            context = context.getContext();
            contextExtraneousContext = isContextExtraneousContext(context);
        }
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
    const released = context.isReleased();
    if (!released) {
        const mnemicContext = _mnemic.default.fromNothing(context);
        context = mnemicContext; ///
    }
    return innerFunction(context);
}
function enclose(innerFunction, metaLevelAssumptions, context) {
    if (context === undefined) {
        context = metaLevelAssumptions; ///
        metaLevelAssumptions = null;
    }
    const boundedContext = _bounded.default.fromMetaLevelAssumptions(metaLevelAssumptions, context);
    context = boundedContext; ///
    return innerFunction(context);
}
function manifest(innerFunction, ...contexts) {
    const phanericContext = _phaneric.default.fromContexts(contexts), context = phanericContext; ///
    return innerFunction(context);
}
function reconcile(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function serialise(innerFunction, context) {
    const mnemicContext = context, mnemicContextJSON = (0, _json.mnemicContextToMnemicContextJSON)(mnemicContext), contextJSON = mnemicContextJSON; ///
    context = contextJSON; ///
    return innerFunction(context);
}
function instantiate(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function unserialise(innerFunction, json, context) {
    const mnemicContext = (0, _json.mnemicContextFromJSON)(json, context);
    context = mnemicContext; ///
    return innerFunction(json, context);
}
function ablates(innerFunction, ...contexts) {
    contexts = contexts.map((context)=>{
        const released = context.isReleased();
        if (!released) {
            let contextExtraneousContext = isContextExtraneousContext(context);
            while(contextExtraneousContext){
                context = context.getContext();
                contextExtraneousContext = isContextExtraneousContext(context);
            }
        }
        return context;
    });
    return innerFunction(...contexts);
}
function attempts(innerFunction, ...contexts) {
    contexts = contexts.map((context)=>{
        const released = context.isReleased();
        if (!released) {
            const mnemicContext = _mnemic.default.fromNothing(context);
            context = mnemicContext; ///
        }
        return context;
    });
    return innerFunction(...contexts);
}
function serialises(innerFunction, ...contexts) {
    const mnemicContexts = contexts, mnemicContextsJSON = (0, _json.mnemicContextsToMnemicContextsJSON)(mnemicContexts), contextsJSON = mnemicContextsJSON; ///
    contexts = contextsJSON; ///
    return innerFunction(...contexts);
}
function unserialises(innerFunction, json, context) {
    const mnemicContexts = (0, _json.mnemicContextsFromJSON)(json, context), contexts = mnemicContexts; ///
    return innerFunction(json, ...contexts);
}
function evaluate(procedure, terms) {
    const context = procedure.getContext();
    return procedure.call(terms, context);
}
function isContextExtraneousContext(context) {
    const contextBoundedContext = context instanceof _bounded.default, contextNominalFileContext = context instanceof _nominal1.default, contextExtraneousContext = !contextBoundedContext && !contextNominalFileContext;
    return contextExtraneousContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEJvdW5kZWRDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JvdW5kZWRcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBQaGFuZXJpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcGhhbmVyaWNcIjtcbmltcG9ydCBTeW5vcHRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3lub3B0aWNcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLmZpbHRlcigoY29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN5bm9wdGljQ29udGV4dCA9IFN5bm9wdGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3lub3B0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmQoaW5uZXJGdW5jdGlvbikge1xuICBsZXQgY29udGV4dDtcblxuICBjb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbiAgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJsYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgd2hpbGUgKGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBpbGxhdGl2ZUNvbnRleHQgPSBJbGxhdGl2ZUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRoZXRpY0NvbnRleHQgPSBUaGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlZCA9IGNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gIGlmICghcmVsZWFzZWQpIHtcbiAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTWVubWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY2xvc2UoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uczsgIC8vL1xuXG4gICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgYm91bmRlZENvbnRleHQgPSBCb3VuZGVkQ29udGV4dC5mcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMobWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBib3VuZGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuaWZlc3QoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgcGhhbmVyaWNDb250ZXh0ID0gUGhhbmVyaWNDb250ZXh0LmZyb21Db250ZXh0cyhjb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBwaGFuZXJpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRKU09OID0gbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04obW5lbWljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gbW5lbWljQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgICBsZXQgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQoY29udGV4dCk7XG5cbiAgICAgIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0cyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZWQpIHtcbiAgICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNZW5taWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gY29udGV4dHMsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OKG1uZW1pY0NvbnRleHRzKSxcbiAgICAgICAgY29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNKU09OOyAvLy9cblxuICBjb250ZXh0cyA9IGNvbnRleHRzSlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gbW5lbWljQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBtbmVtaWNDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGUocHJvY2VkdXJlLCB0ZXJtcykge1xuICBjb25zdCBjb250ZXh0ID0gcHJvY2VkdXJlLmdldENvbnRleHQoKTtcblxuICByZXR1cm4gcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRCb3VuZGVkQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgQm91bmRlZENvbnRleHQpLFxuICAgICAgICBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSAoIWNvbnRleHRCb3VuZGVkQ29udGV4dCAmJiAhY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dDtcbn0iXSwibmFtZXMiOlsiYWJsYXRlIiwiYWJsYXRlcyIsImF0dGVtcHQiLCJhdHRlbXB0cyIsImNob29zZSIsImRlY2xhcmUiLCJkZXJpdmUiLCJkZXNjZW5kIiwiZW5jbG9zZSIsImV2YWx1YXRlIiwiZ3JvdW5kIiwiaW5zdGFudGlhdGUiLCJqb2luIiwibWFuaWZlc3QiLCJyZWNvbmNpbGUiLCJzZXJpYWxpc2UiLCJzZXJpYWxpc2VzIiwidW5zZXJpYWxpc2UiLCJ1bnNlcmlhbGlzZXMiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJmaWx0ZXIiLCJjb250ZXh0Iiwic3lub3B0aWNDb250ZXh0IiwiU3lub3B0aWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsInJlbGVhc2VkIiwiaXNSZWxlYXNlZCIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImJyYW5jaGluZ0NvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwiaWxsYXRpdmVDb250ZXh0IiwiSWxsYXRpdmVDb250ZXh0IiwidGhldGljQ29udGV4dCIsIlRoZXRpY0NvbnRleHQiLCJuZXN0ZWRDb250ZXh0IiwiTmVzdGVkQ29udGV4dCIsIm1uZW1pY0NvbnRleHQiLCJNZW5taWNDb250ZXh0IiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJ1bmRlZmluZWQiLCJib3VuZGVkQ29udGV4dCIsIkJvdW5kZWRDb250ZXh0IiwiZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zIiwicGhhbmVyaWNDb250ZXh0IiwiUGhhbmVyaWNDb250ZXh0IiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsIm1uZW1pY0NvbnRleHRKU09OIiwibW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJtbmVtaWNDb250ZXh0RnJvbUpTT04iLCJtYXAiLCJtbmVtaWNDb250ZXh0cyIsIm1uZW1pY0NvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04iLCJjb250ZXh0c0pTT04iLCJtbmVtaWNDb250ZXh0c0Zyb21KU09OIiwicHJvY2VkdXJlIiwidGVybXMiLCJjYWxsIiwiY29udGV4dEJvdW5kZWRDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNENnQkE7ZUFBQUE7O1FBbUhBQztlQUFBQTs7UUFuRUFDO2VBQUFBOztRQXVGQUM7ZUFBQUE7O1FBdkhBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBNEdBQztlQUFBQTs7UUF0TEFDO2VBQUFBOztRQWlIQUM7ZUFBQUE7O1FBOUhBQztlQUFBQTs7UUFxR0FDO2VBQUFBOztRQU9BQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBOERBQztlQUFBQTs7UUE1Q0FDO2VBQUFBOztRQXNEQUM7ZUFBQUE7OzsrREEzTVU7K0RBQ0E7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7aUVBQ0E7aUVBQ0E7a0VBQ0M7aUVBQ0U7c0JBRXFHOzs7Ozs7QUFFN0gsU0FBU04sS0FBS08sYUFBYSxFQUFFLEdBQUdDLFFBQVE7SUFDN0NBLFdBQVdBLFNBQVNDLE1BQU0sQ0FBQyxDQUFDQztRQUMxQixJQUFJQSxZQUFZLE1BQU07WUFDcEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxNQUFNQyxrQkFBa0JDLGlCQUFlLENBQUNDLFlBQVksQ0FBQ0wsV0FDL0NFLFVBQVVDLGlCQUFrQixHQUFHO0lBRXJDLE9BQU9KLGNBQWNHO0FBQ3ZCO0FBRU8sU0FBU1osT0FBT1MsYUFBYTtJQUNsQyxJQUFJRztJQUVKLE1BQU1JLGlCQUFpQkMsZ0JBQWMsQ0FBQ0MsV0FBVztJQUVqRE4sVUFBVUksZ0JBQWdCLEdBQUc7SUFFN0IsTUFBTUcsaUJBQWlCQyxnQkFBYyxDQUFDRixXQUFXLENBQUNOO0lBRWxEQSxVQUFVTyxnQkFB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