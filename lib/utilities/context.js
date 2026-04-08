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
        let contextNominalFileContext = context instanceof _nominal1.default;
        while(!contextNominalFileContext){
            context = context.getContext();
            contextNominalFileContext = context instanceof _nominal1.default;
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
            let contextNominalFileContext = context instanceof _nominal1.default;
            while(!contextNominalFileContext){
                context = context.getContext();
                contextNominalFileContext = context instanceof _nominal1.default;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEJvdW5kZWRDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JvdW5kZWRcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBQaGFuZXJpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcGhhbmVyaWNcIjtcbmltcG9ydCBTeW5vcHRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3lub3B0aWNcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBzeW5vcHRpY0NvbnRleHQgPSBTeW5vcHRpY0NvbnRleHQuZnJvbUNvbnRleHRzKGNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bm9wdGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgaWYgKCFyZWxlYXNlZCkge1xuICAgIGxldCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gICAgd2hpbGUgKCFjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBicmFuY2hpbmdDb250ZXh0ID0gQnJhbmNoaW5nQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYnJhbmNoaW5nQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgaWxsYXRpdmVDb250ZXh0ID0gSWxsYXRpdmVDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBpbGxhdGl2ZUNvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCB0aGV0aWNDb250ZXh0ID0gVGhldGljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gdGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lc3RlZENvbnRleHQgPSBOZXN0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBuZXN0ZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgY29uc3QgbW5lbWljQ29udGV4dCA9IE1lbm1pY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNsb3NlKGlubmVyRnVuY3Rpb24sIG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gbWV0YUxldmVsQXNzdW1wdGlvbnM7ICAvLy9cblxuICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hbmlmZXN0KGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IHBoYW5lcmljQ29udGV4dCA9IFBoYW5lcmljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gcGhhbmVyaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OKG1uZW1pY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRKU09OOyAvLy9cblxuICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IG1uZW1pY0NvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGVzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCByZWxlYXNlZCA9IGNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlZCkge1xuICAgICAgbGV0IGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dCk7XG5cbiAgICAgIHdoaWxlICghY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdHMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTWVubWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBtbmVtaWNDb250ZXh0cyA9IGNvbnRleHRzLCAvLy9cbiAgICAgICAgbW5lbWljQ29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTihtbmVtaWNDb250ZXh0cyksXG4gICAgICAgIGNvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzSlNPTjsgLy8vXG5cbiAgY29udGV4dHMgPSBjb250ZXh0c0pTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZXMoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0cyA9IG1uZW1pY0NvbnRleHRzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgIGNvbnRleHRzID0gbW5lbWljQ29udGV4dHM7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlKHByb2NlZHVyZSwgdGVybXMpIHtcbiAgY29uc3QgY29udGV4dCA9IHByb2NlZHVyZS5nZXRDb250ZXh0KCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJhYmxhdGUiLCJhYmxhdGVzIiwiYXR0ZW1wdCIsImF0dGVtcHRzIiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsImpvaW4iLCJtYW5pZmVzdCIsInJlY29uY2lsZSIsInNlcmlhbGlzZSIsInNlcmlhbGlzZXMiLCJ1bnNlcmlhbGlzZSIsInVuc2VyaWFsaXNlcyIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0cyIsInN5bm9wdGljQ29udGV4dCIsIlN5bm9wdGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImNvbnRleHQiLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwicmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCIsImdldENvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJtbmVtaWNDb250ZXh0IiwiTWVubWljQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwidW5kZWZpbmVkIiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInBoYW5lcmljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJtbmVtaWNDb250ZXh0SlNPTiIsIm1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibW5lbWljQ29udGV4dEZyb21KU09OIiwibWFwIiwibW5lbWljQ29udGV4dHMiLCJtbmVtaWNDb250ZXh0c0pTT04iLCJtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OIiwiY29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNGcm9tSlNPTiIsInByb2NlZHVyZSIsInRlcm1zIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc0NnQkE7ZUFBQUE7O1FBbUhBQztlQUFBQTs7UUFuRUFDO2VBQUFBOztRQXVGQUM7ZUFBQUE7O1FBdkhBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBNEdBQztlQUFBQTs7UUF0TEFDO2VBQUFBOztRQWlIQUM7ZUFBQUE7O1FBeEhBQztlQUFBQTs7UUErRkFDO2VBQUFBOztRQU9BQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBOERBQztlQUFBQTs7UUE1Q0FDO2VBQUFBOztRQXNEQUM7ZUFBQUE7OzsrREFyTVU7K0RBQ0E7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7aUVB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