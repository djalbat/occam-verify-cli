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
    const released = context.isReleased();
    if (forced || !released) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgU3lub3B0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3N5bm9wdGljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLmZpbHRlcigoY29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHN5bm9wdGljQ29udGV4dCA9IFN5bm9wdGljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gc3lub3B0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91bmQoaW5uZXJGdW5jdGlvbikge1xuICBsZXQgY29udGV4dDtcblxuICBjb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbiAgY29udGV4dCA9IG5vbWluYWxDb250ZXh0OyAvLy9cblxuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJsYXRlKGlubmVyRnVuY3Rpb24sIGZvcmNlZCwgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IGZvcmNlZDsgLy8vXG5cbiAgICBmb3JjZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgaWYgKGZvcmNlZCB8fCAhcmVsZWFzZWQpIHtcbiAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBuZXN0ZWRDb250ZXh0ID0gTmVzdGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbmVzdGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgaWYgKCFyZWxlYXNlZCkge1xuICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNZW5taWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jbG9zZShpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb25zOyAgLy8vXG5cbiAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBib3VuZGVkQ29udGV4dCA9IEJvdW5kZWRDb250ZXh0LmZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyhtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJvdW5kZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYW5pZmVzdChpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBwaGFuZXJpY0NvbnRleHQgPSBQaGFuZXJpY0NvbnRleHQuZnJvbUNvbnRleHRzKGNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHBoYW5lcmljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb25jaWxlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlc3Rlcihpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFwaGFzaWNDb250ZXh0ID0gQXBoYXNpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGFwaGFzaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRKU09OID0gbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04obW5lbWljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gbW5lbWljQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ZW1wdHMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHJlbGVhc2VkID0gY29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTWVubWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBtbmVtaWNDb250ZXh0cyA9IGNvbnRleHRzLCAvLy9cbiAgICAgICAgbW5lbWljQ29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTihtbmVtaWNDb250ZXh0cyksXG4gICAgICAgIGNvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzSlNPTjsgLy8vXG5cbiAgY29udGV4dHMgPSBjb250ZXh0c0pTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZXMoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0cyA9IG1uZW1pY0NvbnRleHRzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgIGNvbnRleHRzID0gbW5lbWljQ29udGV4dHM7IC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGpzb24sIC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlKHByb2NlZHVyZSwgdGVybXMpIHtcbiAgY29uc3QgY29udGV4dCA9IHByb2NlZHVyZS5nZXRDb250ZXh0KCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWJsYXRlQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICBsZXQgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQoY29udGV4dCk7XG5cbiAgd2hpbGUgKGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgY29uc3QgQ29udGV4dCA9IHN0YXRlZCA/IFRoZXRpY0NvbnRleHQgOiBJbGxhdGl2ZUNvbnRleHQ7XG5cbiAgY29udGV4dCA9IGF1Z21lbnRDb250ZXh0KGNvbnRleHQsIENvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhdWdtZW50Q29udGV4dChjb250ZXh0LCBDb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBDb250ZXh0KTtcblxuICBpZiAoIWNvbnRleHRDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0ID0gaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSAhY29udGV4dFN1YnN0YW50aXZlQ29udGV4dDtcblxuICByZXR1cm4gY29udGV4dEV4dHJhbmVvdXNDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBpc0NvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBjb250ZXh0VGhldGljQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgVGhldGljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRJbGxhdGl2ZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIElsbGF0aXZlQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRCb3VuZGVkQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgQm91bmRlZENvbnRleHQpLFxuICAgICAgICBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0ID0gKGNvbnRleHRUaGV0aWNDb250ZXh0IHx8IGNvbnRleHRJbGxhdGl2ZUNvbnRleHQgfHwgY29udGV4dEJvdW5kZWRDb250ZXh0IHx8IGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImFibGF0ZSIsImFibGF0ZXMiLCJhdHRlbXB0IiwiYXR0ZW1wdHMiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImVuY2xvc2UiLCJldmFsdWF0ZSIsImdyb3VuZCIsImluc3RhbnRpYXRlIiwiam9pbiIsIm1hbmlmZXN0IiwicG9zaXQiLCJyZWNvbmNpbGUiLCJzZXF1ZXN0ZXIiLCJzZXJpYWxpc2UiLCJzZXJpYWxpc2VzIiwidW5zZXJpYWxpc2UiLCJ1bnNlcmlhbGlzZXMiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJmaWx0ZXIiLCJjb250ZXh0Iiwic3lub3B0aWNDb250ZXh0IiwiU3lub3B0aWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJmcm9tTm90aGluZyIsIm5vbWluYWxDb250ZXh0IiwiTm9taW5hbENvbnRleHQiLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwiZm9yY2VkIiwidW5kZWZpbmVkIiwicmVsZWFzZWQiLCJpc1JlbGVhc2VkIiwiYWJsYXRlQ29udGV4dCIsImJyYW5jaGluZ0NvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwiaWxsYXRpdmVDb250ZXh0IiwiSWxsYXRpdmVDb250ZXh0IiwidGhldGljQ29udGV4dCIsIlRoZXRpY0NvbnRleHQiLCJuZXN0ZWRDb250ZXh0IiwiTmVzdGVkQ29udGV4dCIsIm1uZW1pY0NvbnRleHQiLCJNZW5taWNDb250ZXh0IiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJib3VuZGVkQ29udGV4dCIsIkJvdW5kZWRDb250ZXh0IiwiZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zIiwicGhhbmVyaWNDb250ZXh0IiwiUGhhbmVyaWNDb250ZXh0IiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImFwaGFzaWNDb250ZXh0IiwiQXBoYXNpY0NvbnRleHQiLCJtbmVtaWNDb250ZXh0SlNPTiIsIm1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibW5lbWljQ29udGV4dEZyb21KU09OIiwibWFwIiwibW5lbWljQ29udGV4dHMiLCJtbmVtaWNDb250ZXh0c0pTT04iLCJtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OIiwiY29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNGcm9tSlNPTiIsInByb2NlZHVyZSIsInRlcm1zIiwiZ2V0Q29udGV4dCIsImNhbGwiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0IiwiQ29udGV4dCIsImF1Z21lbnRDb250ZXh0IiwiY29udGV4dENvbnRleHQiLCJjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiY29udGV4dFRoZXRpY0NvbnRleHQiLCJjb250ZXh0SWxsYXRpdmVDb250ZXh0IiwiY29udGV4dEJvdW5kZWRDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc0RnQkE7ZUFBQUE7O1FBMkhBQztlQUFBQTs7UUEzRUFDO2VBQUFBOztRQXlGQUM7ZUFBQUE7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