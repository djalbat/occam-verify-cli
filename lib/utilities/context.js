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
function ablate(innerFunction, forced, context) {
    if (context === undefined) {
        context = forced; ///
        forced = false;
    }
    const unreleased = context.isUnreleased();
    if (forced || unreleased) {
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
    const unreleased = context.isUnreleased();
    if (unreleased) {
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
        const unreleased = context.isUnreleased();
        if (unreleased) {
            context = ablateContext(context);
        }
        return context;
    });
    return innerFunction(...contexts);
}
function attempts(innerFunction, ...contexts) {
    contexts = contexts.map((context)=>{
        const unreleased = context.isUnreleased();
        if (unreleased) {
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
    const Context = stated ? _thetic.default : _illative.default;
    context = augmentContext(context, Context);
    return context;
}
function augmentContext(context, Context) {
    const contextContext = context instanceof Context;
    if (!contextContext) {
        context = Context.fromNothing(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgU3lub3B0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3N5bm9wdGljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLmZpbHRlcigoY29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN5bm9wdGljQ29udGV4dCA9IFN5bm9wdGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3lub3B0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmQoaW5uZXJGdW5jdGlvbikge1xuICBsZXQgY29udGV4dDtcblxuICBjb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbiAgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJsYXRlKGlubmVyRnVuY3Rpb24sIGZvcmNlZCwgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IGZvcmNlZDsgLy8vXG5cbiAgICBmb3JjZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gIGlmIChmb3JjZWQgfHwgdW5yZWxlYXNlZCkge1xuICAgIGNvbnRleHQgPSBhYmxhdGVDb250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBicmFuY2hpbmdDb250ZXh0ID0gQnJhbmNoaW5nQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYnJhbmNoaW5nQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgaWxsYXRpdmVDb250ZXh0ID0gSWxsYXRpdmVDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBpbGxhdGl2ZUNvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCB0aGV0aWNDb250ZXh0ID0gVGhldGljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gdGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lc3RlZENvbnRleHQgPSBOZXN0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBuZXN0ZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTWVubWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY2xvc2UoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uczsgIC8vL1xuXG4gICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgYm91bmRlZENvbnRleHQgPSBCb3VuZGVkQ29udGV4dC5mcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMobWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBib3VuZGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuaWZlc3QoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgcGhhbmVyaWNDb250ZXh0ID0gUGhhbmVyaWNDb250ZXh0LmZyb21Db250ZXh0cyhjb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBwaGFuZXJpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZXN0ZXIoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBhcGhhc2ljQ29udGV4dCA9IEFwaGFzaWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBhcGhhc2ljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OKG1uZW1pY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRKU09OOyAvLy9cblxuICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IG1uZW1pY0NvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGVzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICAgIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdHMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gICAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNZW5taWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gY29udGV4dHMsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OKG1uZW1pY0NvbnRleHRzKSxcbiAgICAgICAgY29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNKU09OOyAvLy9cblxuICBjb250ZXh0cyA9IGNvbnRleHRzSlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gbW5lbWljQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBtbmVtaWNDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGUocHJvY2VkdXJlLCB0ZXJtcykge1xuICBjb25zdCBjb250ZXh0ID0gcHJvY2VkdXJlLmdldENvbnRleHQoKTtcblxuICByZXR1cm4gcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhYmxhdGVDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gIGxldCBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcblxuICB3aGlsZSAoY29udGV4dEV4dHJhbmVvdXNDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IGNvbnRleHQuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICBjb25zdCBDb250ZXh0ID0gc3RhdGVkID8gVGhldGljQ29udGV4dCA6IElsbGF0aXZlQ29udGV4dDtcblxuICBjb250ZXh0ID0gYXVnbWVudENvbnRleHQoY29udGV4dCwgQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnRDb250ZXh0KGNvbnRleHQsIENvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dENvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIENvbnRleHQpO1xuXG4gIGlmICghY29udGV4dENvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQgPSBpc0NvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQoY29udGV4dCksXG4gICAgICAgIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9ICFjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0O1xuXG4gIHJldHVybiBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dFN1YnN0YW50aXZlQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRUaGV0aWNDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBUaGV0aWNDb250ZXh0KSxcbiAgICAgICAgY29udGV4dElsbGF0aXZlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgSWxsYXRpdmVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEJvdW5kZWRDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBCb3VuZGVkQ29udGV4dCksXG4gICAgICAgIGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQgPSAoY29udGV4dFRoZXRpY0NvbnRleHQgfHwgY29udGV4dElsbGF0aXZlQ29udGV4dCB8fCBjb250ZXh0Qm91bmRlZENvbnRleHQgfHwgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiYWJsYXRlIiwiYWJsYXRlcyIsImF0dGVtcHQiLCJhdHRlbXB0cyIsImNob29zZSIsImRlY2xhcmUiLCJkZXJpdmUiLCJkZXNjZW5kIiwiZW5jbG9zZSIsImV2YWx1YXRlIiwiZ3JvdW5kIiwiaW5zdGFudGlhdGUiLCJqb2luIiwibWFuaWZlc3QiLCJwb3NpdCIsInJlY29uY2lsZSIsInNlcXVlc3RlciIsInNlcmlhbGlzZSIsInNlcmlhbGlzZXMiLCJ1bnNlcmlhbGlzZSIsInVuc2VyaWFsaXNlcyIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0cyIsImZpbHRlciIsImNvbnRleHQiLCJzeW5vcHRpY0NvbnRleHQiLCJTeW5vcHRpY0NvbnRleHQiLCJmcm9tQ29udGV4dHMiLCJlcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImxpdGVyYWxDb250ZXh0IiwiTGl0ZXJhbENvbnRleHQiLCJmb3JjZWQiLCJ1bmRlZmluZWQiLCJ1bnJlbGVhc2VkIiwiaXNVbnJlbGVhc2VkIiwiYWJsYXRlQ29udGV4dCIsImJyYW5jaGluZ0NvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwiaWxsYXRpdmVDb250ZXh0IiwiSWxsYXRpdmVDb250ZXh0IiwidGhldGljQ29udGV4dCIsIlRoZXRpY0NvbnRleHQiLCJuZXN0ZWRDb250ZXh0IiwiTmVzdGVkQ29udGV4dCIsIm1uZW1pY0NvbnRleHQiLCJNZW5taWNDb250ZXh0IiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJib3VuZGVkQ29udGV4dCIsIkJvdW5kZWRDb250ZXh0IiwiZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zIiwicGhhbmVyaWNDb250ZXh0IiwiUGhhbmVyaWNDb250ZXh0IiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImFwaGFzaWNDb250ZXh0IiwiQXBoYXNpY0NvbnRleHQiLCJtbmVtaWNDb250ZXh0SlNPTiIsIm1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibW5lbWljQ29udGV4dEZyb21KU09OIiwibWFwIiwibW5lbWljQ29udGV4dHMiLCJtbmVtaWNDb250ZXh0c0pTT04iLCJtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OIiwiY29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNGcm9tSlNPTiIsInByb2NlZHVyZSIsInRlcm1zIiwiZ2V0Q29udGV4dCIsImNhbGwiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0IiwiQ29udGV4dCIsImF1Z21lbnRDb250ZXh0IiwiY29udGV4dENvbnRleHQiLCJjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiY29udGV4dFRoZXRpY0NvbnRleHQiLCJjb250ZXh0SWxsYXRpdmVDb250ZXh0IiwiY29udGV4dEJvdW5kZWRDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc0RnQkE7ZUFBQUE7O1FBMkhBQztlQUFBQTs7UUEz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