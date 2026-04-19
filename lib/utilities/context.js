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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgU3lub3B0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3N5bm9wdGljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLmZpbHRlcigoY29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN5bm9wdGljQ29udGV4dCA9IFN5bm9wdGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3lub3B0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmQoaW5uZXJGdW5jdGlvbikge1xuICBsZXQgY29udGV4dDtcblxuICBjb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbiAgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJsYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgY29udGV4dCA9IGFibGF0ZUNvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBpbGxhdGl2ZUNvbnRleHQgPSBJbGxhdGl2ZUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRoZXRpY0NvbnRleHQgPSBUaGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlZCA9IGNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gIGlmICghcmVsZWFzZWQpIHtcbiAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTWVubWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY2xvc2UoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uczsgIC8vL1xuXG4gICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgYm91bmRlZENvbnRleHQgPSBCb3VuZGVkQ29udGV4dC5mcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMobWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBib3VuZGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuaWZlc3QoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgcGhhbmVyaWNDb250ZXh0ID0gUGhhbmVyaWNDb250ZXh0LmZyb21Db250ZXh0cyhjb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBwaGFuZXJpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZXN0ZXIoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBhcGhhc2ljQ29udGV4dCA9IEFwaGFzaWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBhcGhhc2ljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OKG1uZW1pY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRKU09OOyAvLy9cblxuICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IG1uZW1pY0NvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGVzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCByZWxlYXNlZCA9IGNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlZCkge1xuICAgICAgY29udGV4dCA9IGFibGF0ZUNvbnRleHQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHRzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCByZWxlYXNlZCA9IGNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlZCkge1xuICAgICAgY29uc3QgbW5lbWljQ29udGV4dCA9IE1lbm1pY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBjb250ZXh0cywgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04obW5lbWljQ29udGV4dHMpLFxuICAgICAgICBjb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c0pTT047IC8vL1xuXG4gIGNvbnRleHRzID0gY29udGV4dHNKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBtbmVtaWNDb250ZXh0c0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICBjb250ZXh0cyA9IG1uZW1pY0NvbnRleHRzOyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCAuLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZShwcm9jZWR1cmUsIHRlcm1zKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBwcm9jZWR1cmUuZ2V0Q29udGV4dCgpO1xuXG4gIHJldHVybiBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFibGF0ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IENvbnRleHQgPSBzdGF0ZWQgPyBUaGV0aWNDb250ZXh0IDogSWxsYXRpdmVDb250ZXh0O1xuXG4gIGNvbnRleHQgPSBhdWdtZW50Q29udGV4dChjb250ZXh0LCBDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudENvbnRleHQoY29udGV4dCwgQ29udGV4dCkge1xuICBjb25zdCBjb250ZXh0Q29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IGlzQ29udGV4dFN1YnN0YW50aXZlQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gIWNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQ7XG5cbiAgcmV0dXJuIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFRoZXRpY0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIFRoZXRpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SWxsYXRpdmVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBJbGxhdGl2ZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0Qm91bmRlZENvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIEJvdW5kZWRDb250ZXh0KSxcbiAgICAgICAgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IChjb250ZXh0VGhldGljQ29udGV4dCB8fCBjb250ZXh0SWxsYXRpdmVDb250ZXh0IHx8IGNvbnRleHRCb3VuZGVkQ29udGV4dCB8fCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dFN1YnN0YW50aXZlQ29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJhYmxhdGUiLCJhYmxhdGVzIiwiYXR0ZW1wdCIsImF0dGVtcHRzIiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsImpvaW4iLCJtYW5pZmVzdCIsInBvc2l0IiwicmVjb25jaWxlIiwic2VxdWVzdGVyIiwic2VyaWFsaXNlIiwic2VyaWFsaXNlcyIsInVuc2VyaWFsaXNlIiwidW5zZXJpYWxpc2VzIiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHRzIiwiZmlsdGVyIiwiY29udGV4dCIsInN5bm9wdGljQ29udGV4dCIsIlN5bm9wdGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsInJlbGVhc2VkIiwiaXNSZWxlYXNlZCIsImFibGF0ZUNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJtbmVtaWNDb250ZXh0IiwiTWVubWljQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwidW5kZWZpbmVkIiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInBoYW5lcmljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJhcGhhc2ljQ29udGV4dCIsIkFwaGFzaWNDb250ZXh0IiwibW5lbWljQ29udGV4dEpTT04iLCJtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm1uZW1pY0NvbnRleHRGcm9tSlNPTiIsIm1hcCIsIm1uZW1pY0NvbnRleHRzIiwibW5lbWljQ29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiIsImNvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzRnJvbUpTT04iLCJwcm9jZWR1cmUiLCJ0ZXJtcyIsImdldENvbnRleHQiLCJjYWxsIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJjb250ZXh0RXh0cmFuZW91c0NvbnRleHQiLCJpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsIkNvbnRleHQiLCJhdWdtZW50Q29udGV4dCIsImNvbnRleHRDb250ZXh0IiwiY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCIsImlzQ29udGV4dFN1YnN0YW50aXZlQ29udGV4dCIsImNvbnRleHRUaGV0aWNDb250ZXh0IiwiY29udGV4dElsbGF0aXZlQ29udGV4dCIsImNvbnRleHRCb3VuZGVkQ29udGV4dCIsImNvbnRleHROb21pbmFsRmlsZUNvbnRleHQiLCJOb21pbmFsRmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXNEZ0JBO2VBQUFBOztRQXFIQUM7ZUFBQUE7O1FBM0VBQztlQUFBQTs7UUF5RkFDO2VBQUFBOztRQXpIQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFSQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQThHQUM7ZUFBQUE7O1FBbExBQztlQUFBQTs7UUFtSEFDO2VBQUFBOztRQXhJ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