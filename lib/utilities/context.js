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
    get posit () {
        return posit;
    },
    get reconcile () {
        return reconcile;
    },
    get sequester () {
        return sequester;
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
const _aphasic = /*#__PURE__*/ _interop_require_default(require("../context/aphasic"));
const _bounded = /*#__PURE__*/ _interop_require_default(require("../context/bounded"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
const _phaneric = /*#__PURE__*/ _interop_require_default(require("../context/phaneric"));
const _synoptic = /*#__PURE__*/ _interop_require_default(require("../context/synoptic"));
const _illative = /*#__PURE__*/ _interop_require_default(require("../context/illative"));
const _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
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
function posit(innerFunction, context) {
    const ephemeralContext = _ephemeral.default.fromNothing(context);
    context = ephemeralContext; ///
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
        context = ablateContext(context);
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
function sequester(innerFunction, context) {
    const aphasicContext = _aphasic.default.fromNothing(context);
    context = aphasicContext; ///
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
            context = ablateContext(context);
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
function ablateContext(context) {
    const stated = context.isStated();
    let contextExtraneousContext = isContextExtraneousContext(context);
    while(contextExtraneousContext){
        context = context.getContext();
        contextExtraneousContext = isContextExtraneousContext(context);
    }
    if (stated) {
        const theticContext = _thetic.default.fromNothing(context);
        context = theticContext; ///
    } else {
        const illativeContext = _illative.default.fromNothing(context);
        context = illativeContext; ///
    }
    return context;
}
function isContextExtraneousContext(context) {
    const contextSubstantiveContext = isContextSubstantiveContext(context), contextExtraneousContext = !contextSubstantiveContext;
    return contextExtraneousContext;
}
function isContextSubstantiveContext(context) {
    const contextTheticContext = context instanceof _thetic.default, contextIllativeContext = context instanceof _illative.default, contextBoundedContext = context instanceof _bounded.default, contextNominalFileContext = context instanceof _nominal1.default, contextSubstantiveContext = contextTheticContext || contextIllativeContext || contextBoundedContext || contextNominalFileContext;
    return contextSubstantiveContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgU3lub3B0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3N5bm9wdGljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLmZpbHRlcigoY29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN5bm9wdGljQ29udGV4dCA9IFN5bm9wdGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3lub3B0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmQoaW5uZXJGdW5jdGlvbikge1xuICBsZXQgY29udGV4dDtcblxuICBjb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbiAgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJsYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgY29udGV4dCA9IGFibGF0ZUNvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBpbGxhdGl2ZUNvbnRleHQgPSBJbGxhdGl2ZUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRoZXRpY0NvbnRleHQgPSBUaGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlZCA9IGNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gIGlmICghcmVsZWFzZWQpIHtcbiAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTWVubWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY2xvc2UoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uczsgIC8vL1xuXG4gICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgYm91bmRlZENvbnRleHQgPSBCb3VuZGVkQ29udGV4dC5mcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMobWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBib3VuZGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuaWZlc3QoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgcGhhbmVyaWNDb250ZXh0ID0gUGhhbmVyaWNDb250ZXh0LmZyb21Db250ZXh0cyhjb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBwaGFuZXJpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZXN0ZXIoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBhcGhhc2ljQ29udGV4dCA9IEFwaGFzaWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBhcGhhc2ljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OKG1uZW1pY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRKU09OOyAvLy9cblxuICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IG1uZW1pY0NvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGVzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCByZWxlYXNlZCA9IGNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlZCkge1xuICAgICAgY29udGV4dCA9IGFibGF0ZUNvbnRleHQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHRzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCByZWxlYXNlZCA9IGNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlZCkge1xuICAgICAgY29uc3QgbW5lbWljQ29udGV4dCA9IE1lbm1pY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBjb250ZXh0cywgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04obW5lbWljQ29udGV4dHMpLFxuICAgICAgICBjb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c0pTT047IC8vL1xuXG4gIGNvbnRleHRzID0gY29udGV4dHNKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBtbmVtaWNDb250ZXh0c0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICBjb250ZXh0cyA9IG1uZW1pY0NvbnRleHRzOyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCAuLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZShwcm9jZWR1cmUsIHRlcm1zKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBwcm9jZWR1cmUuZ2V0Q29udGV4dCgpO1xuXG4gIHJldHVybiBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFibGF0ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCB0aGV0aWNDb250ZXh0ID0gVGhldGljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaWxsYXRpdmVDb250ZXh0ID0gSWxsYXRpdmVDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IGlzQ29udGV4dFN1YnN0YW50aXZlQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gIWNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQ7XG5cbiAgcmV0dXJuIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFRoZXRpY0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIFRoZXRpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SWxsYXRpdmVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBJbGxhdGl2ZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0Qm91bmRlZENvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIEJvdW5kZWRDb250ZXh0KSxcbiAgICAgICAgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IChjb250ZXh0VGhldGljQ29udGV4dCB8fCBjb250ZXh0SWxsYXRpdmVDb250ZXh0IHx8IGNvbnRleHRCb3VuZGVkQ29udGV4dCB8fCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dFN1YnN0YW50aXZlQ29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJhYmxhdGUiLCJhYmxhdGVzIiwiYXR0ZW1wdCIsImF0dGVtcHRzIiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsImpvaW4iLCJtYW5pZmVzdCIsInBvc2l0IiwicmVjb25jaWxlIiwic2VxdWVzdGVyIiwic2VyaWFsaXNlIiwic2VyaWFsaXNlcyIsInVuc2VyaWFsaXNlIiwidW5zZXJpYWxpc2VzIiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHRzIiwiZmlsdGVyIiwiY29udGV4dCIsInN5bm9wdGljQ29udGV4dCIsIlN5bm9wdGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsInJlbGVhc2VkIiwiaXNSZWxlYXNlZCIsImFibGF0ZUNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJtbmVtaWNDb250ZXh0IiwiTWVubWljQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwidW5kZWZpbmVkIiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInBoYW5lcmljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJhcGhhc2ljQ29udGV4dCIsIkFwaGFzaWNDb250ZXh0IiwibW5lbWljQ29udGV4dEpTT04iLCJtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm1uZW1pY0NvbnRleHRGcm9tSlNPTiIsIm1hcCIsIm1uZW1pY0NvbnRleHRzIiwibW5lbWljQ29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiIsImNvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzRnJvbUpTT04iLCJwcm9jZWR1cmUiLCJ0ZXJtcyIsImdldENvbnRleHQiLCJjYWxsIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJjb250ZXh0RXh0cmFuZW91c0NvbnRleHQiLCJpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQiLCJpc0NvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQiLCJjb250ZXh0VGhldGljQ29udGV4dCIsImNvbnRleHRJbGxhdGl2ZUNvbnRleHQiLCJjb250ZXh0Qm91bmRlZENvbnRleHQiLCJjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0IiwiTm9taW5hbEZpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFzRGdCQTtlQUFBQTs7UUFxSEFDO2VBQUFBOztRQTNFQUM7ZUFBQUE7O1FBeUZBQztlQUFBQTs7UUF6SEFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBb0JBQztlQUFBQTs7UUE4R0FDO2VBQUFBOztRQWxMQUM7ZUFBQUE7O1FBbUhBQztlQUFBQTs7UUF4SUFDO2VBQUFBOztRQXVHQUM7ZUFBQUE7O1FBMUZBQztlQUFBQTs7UUFpR0FDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBd0RBQztlQUFBQTs7UUF0Q0FDO2VBQUFBOztRQWdEQUM7ZUFBQUE7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