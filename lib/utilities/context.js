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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBmb3JjZWQsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBmb3JjZWQ7IC8vL1xuXG4gICAgZm9yY2VkID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAoZm9yY2VkIHx8IHVucmVsZWFzZWQpIHtcbiAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBuZXN0ZWRDb250ZXh0ID0gTmVzdGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbmVzdGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgY29uc3QgbW5lbWljQ29udGV4dCA9IE1lbm1pY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNsb3NlKGlubmVyRnVuY3Rpb24sIG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gbWV0YUxldmVsQXNzdW1wdGlvbnM7ICAvLy9cblxuICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hbmlmZXN0KGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IHBoYW5lcmljQ29udGV4dCA9IFBoYW5lcmljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gcGhhbmVyaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVzdGVyKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYXBoYXNpY0NvbnRleHQgPSBBcGhhc2ljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYXBoYXNpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgbW5lbWljQ29udGV4dEpTT04gPSBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTihtbmVtaWNDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEpTT04gPSBtbmVtaWNDb250ZXh0SlNPTjsgLy8vXG5cbiAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBtbmVtaWNDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJsYXRlcyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgICBpZiAodW5yZWxlYXNlZCkge1xuICAgICAgY29udGV4dCA9IGFibGF0ZUNvbnRleHQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHRzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICAgIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTWVubWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBtbmVtaWNDb250ZXh0cyA9IGNvbnRleHRzLCAvLy9cbiAgICAgICAgbW5lbWljQ29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTihtbmVtaWNDb250ZXh0cyksXG4gICAgICAgIGNvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzSlNPTjsgLy8vXG5cbiAgY29udGV4dHMgPSBjb250ZXh0c0pTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZXMoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0cyA9IG1uZW1pY0NvbnRleHRzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgIGNvbnRleHRzID0gbW5lbWljQ29udGV4dHM7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlKHByb2NlZHVyZSwgdGVybXMpIHtcbiAgY29uc3QgY29udGV4dCA9IHByb2NlZHVyZS5nZXRDb250ZXh0KCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWJsYXRlQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICBsZXQgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQoY29udGV4dCk7XG5cbiAgd2hpbGUgKGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgY29uc3QgQ29udGV4dCA9IHN0YXRlZCA/IFRoZXRpY0NvbnRleHQgOiBJbGxhdGl2ZUNvbnRleHQ7XG5cbiAgY29udGV4dCA9IGF1Z21lbnRDb250ZXh0KGNvbnRleHQsIENvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhdWdtZW50Q29udGV4dChjb250ZXh0LCBDb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBDb250ZXh0KTtcblxuICBpZiAoIWNvbnRleHRDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0ID0gaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSAhY29udGV4dFN1YnN0YW50aXZlQ29udGV4dDtcblxuICByZXR1cm4gY29udGV4dEV4dHJhbmVvdXNDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBpc0NvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBjb250ZXh0VGhldGljQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgVGhldGljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRJbGxhdGl2ZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIElsbGF0aXZlQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRCb3VuZGVkQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgQm91bmRlZENvbnRleHQpLFxuICAgICAgICBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0ID0gKGNvbnRleHRUaGV0aWNDb250ZXh0IHx8IGNvbnRleHRJbGxhdGl2ZUNvbnRleHQgfHwgY29udGV4dEJvdW5kZWRDb250ZXh0IHx8IGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImFibGF0ZSIsImFibGF0ZXMiLCJhdHRlbXB0IiwiYXR0ZW1wdHMiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImVuY2xvc2UiLCJldmFsdWF0ZSIsImdyb3VuZCIsImluc3RhbnRpYXRlIiwibWFuaWZlc3QiLCJwb3NpdCIsInJlY29uY2lsZSIsInNlcXVlc3RlciIsInNlcmlhbGlzZSIsInNlcmlhbGlzZXMiLCJ1bnNlcmlhbGlzZSIsInVuc2VyaWFsaXNlcyIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJmcm9tTm90aGluZyIsIm5vbWluYWxDb250ZXh0IiwiTm9taW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwiZm9yY2VkIiwidW5kZWZpbmVkIiwidW5yZWxlYXNlZCIsImlzVW5yZWxlYXNlZCIsImFibGF0ZUNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJtbmVtaWNDb250ZXh0IiwiTWVubWljQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImNvbnRleHRzIiwicGhhbmVyaWNDb250ZXh0IiwiUGhhbmVyaWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImFwaGFzaWNDb250ZXh0IiwiQXBoYXNpY0NvbnRleHQiLCJtbmVtaWNDb250ZXh0SlNPTiIsIm1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibW5lbWljQ29udGV4dEZyb21KU09OIiwibWFwIiwibW5lbWljQ29udGV4dHMiLCJtbmVtaWNDb250ZXh0c0pTT04iLCJtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OIiwiY29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNGcm9tSlNPTiIsInByb2NlZHVyZSIsInRlcm1zIiwiZ2V0Q29udGV4dCIsImNhbGwiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0IiwiQ29udGV4dCIsImF1Z21lbnRDb250ZXh0IiwiY29udGV4dENvbnRleHQiLCJjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiY29udGV4dFRoZXRpY0NvbnRleHQiLCJjb250ZXh0SWxsYXRpdmVDb250ZXh0IiwiY29udGV4dEJvdW5kZWRDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0NnQkE7ZUFBQUE7O1FBMkhBQztlQUFBQTs7UUEzRUFDO2VBQUFBOztRQXlGQUM7ZUFBQUE7O1FBekhBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBOEdBQztlQUFBQTs7UUF4TEFDO2VBQUFBOztRQXlIQUM7ZUFBQUE7O1FBakNBQztlQUFBQTs7UUFoR0FDO2VBQUFBOztRQXVHQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUF3REFDO2VBQUFBOztRQXRDQUM7ZUFBQUE7O1FBZ0RBQztlQUFBQTs7OytEQXpNVTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztrRUFDQTtpRUFDRTtzQkFFcUc7Ozs7OztBQUU3SCxTQUFTTixNQUFNTyxhQUFhLEVBQUVDLE9BQU87SUFDMUMsTUFBTUMsbUJBQW1CQyxrQkFBZ0IsQ0FBQ0MsV0FBVyxDQUFDSDtJ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