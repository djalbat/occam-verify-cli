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
    const synopticContext = _synoptic.default.fromContexts(...contexts), context = synopticContext; ///
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
function evaluate(procedure, terms) {
    const context = procedure.getContext();
    return procedure.call(terms, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEJvdW5kZWRDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JvdW5kZWRcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBTeW5vcHRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3lub3B0aWNcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBzeW5vcHRpY0NvbnRleHQgPSBTeW5vcHRpY0NvbnRleHQuZnJvbUNvbnRleHRzKC4uLmNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bm9wdGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgaWYgKCFyZWxlYXNlZCkge1xuICAgIGxldCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gICAgd2hpbGUgKCFjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBicmFuY2hpbmdDb250ZXh0ID0gQnJhbmNoaW5nQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYnJhbmNoaW5nQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVyaXZlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgaWxsYXRpdmVDb250ZXh0ID0gSWxsYXRpdmVDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBpbGxhdGl2ZUNvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCB0aGV0aWNDb250ZXh0ID0gVGhldGljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gdGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lc3RlZENvbnRleHQgPSBOZXN0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBuZXN0ZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgY29uc3QgbW5lbWljQ29udGV4dCA9IE1lbm1pY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNsb3NlKGlubmVyRnVuY3Rpb24sIG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gbWV0YUxldmVsQXNzdW1wdGlvbnM7ICAvLy9cblxuICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlKHByb2NlZHVyZSwgdGVybXMpIHtcbiAgY29uc3QgY29udGV4dCA9IHByb2NlZHVyZS5nZXRDb250ZXh0KCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRKU09OID0gbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04obW5lbWljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gbW5lbWljQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgICBsZXQgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KTtcblxuICAgICAgd2hpbGUgKCFjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgICAgICBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0cyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgcmVsZWFzZWQgPSBjb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZWQpIHtcbiAgICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNZW5taWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gY29udGV4dHMsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OKG1uZW1pY0NvbnRleHRzKSxcbiAgICAgICAgY29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNKU09OOyAvLy9cblxuICBjb250ZXh0cyA9IGNvbnRleHRzSlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gbW5lbWljQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBtbmVtaWNDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgLi4uY29udGV4dHMpO1xufVxuIl0sIm5hbWVzIjpbImFibGF0ZSIsImFibGF0ZXMiLCJhdHRlbXB0IiwiYXR0ZW1wdHMiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImVuY2xvc2UiLCJldmFsdWF0ZSIsImdyb3VuZCIsImluc3RhbnRpYXRlIiwiam9pbiIsInJlY29uY2lsZSIsInNlcmlhbGlzZSIsInNlcmlhbGlzZXMiLCJ1bnNlcmlhbGlzZSIsInVuc2VyaWFsaXNlcyIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0cyIsInN5bm9wdGljQ29udGV4dCIsIlN5bm9wdGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImNvbnRleHQiLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwicmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCIsImdldENvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJtbmVtaWNDb250ZXh0IiwiTWVubWljQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwidW5kZWZpbmVkIiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInByb2NlZHVyZSIsInRlcm1zIiwiY2FsbCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJtbmVtaWNDb250ZXh0SlNPTiIsIm1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibW5lbWljQ29udGV4dEZyb21KU09OIiwibWFwIiwibW5lbWljQ29udGV4dHMiLCJtbmVtaWNDb250ZXh0c0pTT04iLCJtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OIiwiY29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBcUNnQkE7ZUFBQUE7O1FBa0hBQztlQUFBQTs7UUFsRUFDO2VBQUFBOztRQXNGQUM7ZUFBQUE7O1FBdEhBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQXhGQUM7ZUFBQUE7O1FBZ0hBQztlQUFBQTs7UUF2SEFDO2VBQUFBOztRQXFHQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQThEQUM7ZUFBQUE7O1FBNUNBQztlQUFBQTs7UUFzREFDO2VBQUFBOzs7K0RBbk1VOytEQUNBOytEQUNBO2dFQUNDO2dFQUNBO2dFQUNBO2dFQUNBO2lFQUNDO2lFQUNBO2tFQUNDO2lFQUNFO3NCQUVxRzs7Ozs7O0FBRTdILFNBQVNMLEtBQUtNLGFBQWEsRUFBRSxHQUFHQyxRQUFRO0lBQzdDLE1BQU1DLGtCQUFrQkMsaUJBQWUsQ0FBQ0MsWUFBWSxJQUFJSCxXQUNsREksVUFBVUgsaUJBQWtCLEdBQUc7SUFFckMsT0FBT0YsY0FBY0s7QUFDdkI7QUFFTyxTQUFTYixPQUFPUSxhQUFhO0lBQ2xDLElBQUlLO0lBRUosTUFBTUMsaUJBQWlCQyxnQkFBYyxDQUFDQyxXQUFXO0lBRWpESCxVQUFVQyxnQkFBZ0IsR0FBRztJQUU3QixNQUFNRyxpQkFBaUJDLGdCQUFjLENBQUNGLFdBQVcsQ0FBQ0g7SUFFbERBLFVBQVVJLGdCQUFpQixH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