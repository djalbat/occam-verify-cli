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
function isContextExtraneousContext(context) {
    const contextTheticContext = context instanceof _thetic.default, contextIllativeContext = context instanceof _illative.default, contextBoundedContext = context instanceof _bounded.default, contextNominalFileContext = context instanceof _nominal1.default, contextSubstantiveContext = contextTheticContext || contextIllativeContext || contextBoundedContext || contextNominalFileContext, contextExtraneousContext = !contextSubstantiveContext;
    return contextExtraneousContext;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgU3lub3B0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3N5bm9wdGljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgQnJhbmNoaW5nQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9icmFuY2hpbmdcIjtcbmltcG9ydCBOb21pbmFsRmlsZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZmlsZS9ub21pbmFsXCI7XG5cbmltcG9ydCB7IG1uZW1pY0NvbnRleHRGcm9tSlNPTiwgbW5lbWljQ29udGV4dHNGcm9tSlNPTiwgbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04sIG1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5maWx0ZXIoKGNvbnRleHQpID0+IHtcbiAgICBpZiAoY29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzeW5vcHRpY0NvbnRleHQgPSBTeW5vcHRpY0NvbnRleHQuZnJvbUNvbnRleHRzKGNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bm9wdGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgaWYgKCFyZWxlYXNlZCkge1xuICAgIGNvbnRleHQgPSBhYmxhdGVDb250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBicmFuY2hpbmdDb250ZXh0ID0gQnJhbmNoaW5nQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYnJhbmNoaW5nQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgaWxsYXRpdmVDb250ZXh0ID0gSWxsYXRpdmVDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBpbGxhdGl2ZUNvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCB0aGV0aWNDb250ZXh0ID0gVGhldGljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gdGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lc3RlZENvbnRleHQgPSBOZXN0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBuZXN0ZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgY29uc3QgbW5lbWljQ29udGV4dCA9IE1lbm1pY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNsb3NlKGlubmVyRnVuY3Rpb24sIG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gbWV0YUxldmVsQXNzdW1wdGlvbnM7ICAvLy9cblxuICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hbmlmZXN0KGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IHBoYW5lcmljQ29udGV4dCA9IFBoYW5lcmljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gcGhhbmVyaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVzdGVyKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYXBoYXNpY0NvbnRleHQgPSBBcGhhc2ljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYXBoYXNpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgbW5lbWljQ29udGV4dEpTT04gPSBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTihtbmVtaWNDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEpTT04gPSBtbmVtaWNDb250ZXh0SlNPTjsgLy8vXG5cbiAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBtbmVtaWNDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJsYXRlcyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZWQpIHtcbiAgICAgIGNvbnRleHQgPSBhYmxhdGVDb250ZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0cyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZWQpIHtcbiAgICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNZW5taWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gY29udGV4dHMsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OKG1uZW1pY0NvbnRleHRzKSxcbiAgICAgICAgY29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNKU09OOyAvLy9cblxuICBjb250ZXh0cyA9IGNvbnRleHRzSlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gbW5lbWljQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBtbmVtaWNDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGUocHJvY2VkdXJlLCB0ZXJtcykge1xuICBjb25zdCBjb250ZXh0ID0gcHJvY2VkdXJlLmdldENvbnRleHQoKTtcblxuICByZXR1cm4gcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRUaGV0aWNDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBUaGV0aWNDb250ZXh0KSxcbiAgICAgICAgY29udGV4dElsbGF0aXZlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgSWxsYXRpdmVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEJvdW5kZWRDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBCb3VuZGVkQ29udGV4dCksXG4gICAgICAgIGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQgPSAoY29udGV4dFRoZXRpY0NvbnRleHQgfHwgY29udGV4dElsbGF0aXZlQ29udGV4dCB8fCBjb250ZXh0Qm91bmRlZENvbnRleHQgfHwgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9ICFjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0O1xuXG4gIHJldHVybiBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFibGF0ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGlmIChzdGF0ZWQpIHtcbiAgICBjb25zdCB0aGV0aWNDb250ZXh0ID0gVGhldGljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaWxsYXRpdmVDb250ZXh0ID0gSWxsYXRpdmVDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiYWJsYXRlIiwiYWJsYXRlcyIsImF0dGVtcHQiLCJhdHRlbXB0cyIsImNob29zZSIsImRlY2xhcmUiLCJkZXJpdmUiLCJkZXNjZW5kIiwiZW5jbG9zZSIsImV2YWx1YXRlIiwiZ3JvdW5kIiwiaW5zdGFudGlhdGUiLCJqb2luIiwibWFuaWZlc3QiLCJyZWNvbmNpbGUiLCJzZXF1ZXN0ZXIiLCJzZXJpYWxpc2UiLCJzZXJpYWxpc2VzIiwidW5zZXJpYWxpc2UiLCJ1bnNlcmlhbGlzZXMiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJmaWx0ZXIiLCJjb250ZXh0Iiwic3lub3B0aWNDb250ZXh0IiwiU3lub3B0aWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsInJlbGVhc2VkIiwiaXNSZWxlYXNlZCIsImFibGF0ZUNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJtbmVtaWNDb250ZXh0IiwiTWVubWljQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwidW5kZWZpbmVkIiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInBoYW5lcmljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJhcGhhc2ljQ29udGV4dCIsIkFwaGFzaWNDb250ZXh0IiwibW5lbWljQ29udGV4dEpTT04iLCJtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm1uZW1pY0NvbnRleHRGcm9tSlNPTiIsIm1hcCIsIm1uZW1pY0NvbnRleHRzIiwibW5lbWljQ29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiIsImNvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzRnJvbUpTT04iLCJwcm9jZWR1cmUiLCJ0ZXJtcyIsImdldENvbnRleHQiLCJjYWxsIiwiaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQiLCJjb250ZXh0VGhldGljQ29udGV4dCIsImNvbnRleHRJbGxhdGl2ZUNvbnRleHQiLCJjb250ZXh0Qm91bmRlZENvbnRleHQiLCJjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0IiwiTm9taW5hbEZpbGVDb250ZXh0IiwiY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsInN0YXRlZCIsImlzU3RhdGVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE2Q2dCQTtlQUFBQTs7UUFxSEFDO2VBQUFBOztRQTNFQUM7ZUFBQUE7O1FBeUZBQztlQUFBQTs7UUF6SEFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBb0JBQztlQUFBQTs7UUE4R0FDO2VBQUFBOztRQWxMQUM7ZUFBQUE7O1FBbUhBQztlQUFBQTs7UUFoSUFDO2VBQUFBOztRQStGQUM7ZUFBQUE7O1FBT0FDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBd0RBQztlQUFBQTs7UUF0Q0FDO2VBQUFBOztRQWdEQUM7ZUFBQUE7OzsrREF4TVU7K0RBQ0E7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7aUVBQ0E7aUVBQ0E7a0VBQ0M7aUVBQ0U7c0JBRXFHOzs7Ozs7QUFFN0gsU0FBU1AsS0FBS1EsYUFBYSxFQUFFLEdBQUdDLFFBQVE7SUFDN0NBLFdBQVdBLFNBQVNDLE1BQU0sQ0FBQyxDQUFDQztRQUMxQixJQUFJQSxZQUFZLE1BQU07WUFDcEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxNQUFNQyxrQkFBa0JDLGlCQUFlLENBQUNDLFlBQVksQ0FBQ0wsV0FDL0NFLFVBQVVDLGlCQUFrQixHQUFHO0lBRXJDLE9BQU9KLGNBQWNHO0FBQ3ZCO0FBRU8sU0FBU2IsT0FBT1UsYUFBYTtJQUNsQyxJQUFJRztJQUVKLE1BQU1JLGlCQUFpQkMsZ0JBQWMsQ0FBQ0MsV0FBVztJQUVqRE4sVUFBVUksZ0JBQWdCLEdBQUc7SUFFN0IsTUFBTUcsaUJBQWlCQyxnQkFBYyxDQUFDRixXQUFXLENBQUNOO0lBRWxEQSxVQUFVTyxnQkFBaUIsR0FBRztJQUU5QixPQUFPVixjQUFjRztBQUN2QjtBQUVPLFNBQVN2QixPQUFPb0IsYUFB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