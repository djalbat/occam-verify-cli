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
    get proffer () {
        return proffer;
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
    const stated = true, ephemeralContext = _ephemeral.default.fromStated(stated, context);
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
function proffer(innerFunction, context) {
    const stated = false, ephemeralContext = _ephemeral.default.fromStated(stated, context);
    context = ephemeralContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgIGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21TdGF0ZWQoc3RhdGVkLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBmb3JjZWQsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBmb3JjZWQ7IC8vL1xuXG4gICAgZm9yY2VkID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAoZm9yY2VkIHx8IHVucmVsZWFzZWQpIHtcbiAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9mZmVyKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVkID0gZmFsc2UsXG4gICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21TdGF0ZWQoc3RhdGVkLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRoZXRpY0NvbnRleHQgPSBUaGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAodW5yZWxlYXNlZCkge1xuICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNZW5taWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jbG9zZShpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb25zOyAgLy8vXG5cbiAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBib3VuZGVkQ29udGV4dCA9IEJvdW5kZWRDb250ZXh0LmZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyhtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJvdW5kZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYW5pZmVzdChpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBwaGFuZXJpY0NvbnRleHQgPSBQaGFuZXJpY0NvbnRleHQuZnJvbUNvbnRleHRzKGNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHBoYW5lcmljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb25jaWxlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlc3Rlcihpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFwaGFzaWNDb250ZXh0ID0gQXBoYXNpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGFwaGFzaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRKU09OID0gbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04obW5lbWljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gbW5lbWljQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gICAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICAgIGNvbnRleHQgPSBhYmxhdGVDb250ZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0cyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgICBpZiAodW5yZWxlYXNlZCkge1xuICAgICAgY29uc3QgbW5lbWljQ29udGV4dCA9IE1lbm1pY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBjb250ZXh0cywgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04obW5lbWljQ29udGV4dHMpLFxuICAgICAgICBjb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c0pTT047IC8vL1xuXG4gIGNvbnRleHRzID0gY29udGV4dHNKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBtbmVtaWNDb250ZXh0c0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICBjb250ZXh0cyA9IG1uZW1pY0NvbnRleHRzOyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCAuLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZShwcm9jZWR1cmUsIHRlcm1zKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBwcm9jZWR1cmUuZ2V0Q29udGV4dCgpO1xuXG4gIHJldHVybiBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFibGF0ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IENvbnRleHQgPSBzdGF0ZWQgPyBUaGV0aWNDb250ZXh0IDogSWxsYXRpdmVDb250ZXh0O1xuXG4gIGNvbnRleHQgPSBhdWdtZW50Q29udGV4dChjb250ZXh0LCBDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudENvbnRleHQoY29udGV4dCwgQ29udGV4dCkge1xuICBjb25zdCBjb250ZXh0Q29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IGlzQ29udGV4dFN1YnN0YW50aXZlQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gIWNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQ7XG5cbiAgcmV0dXJuIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFRoZXRpY0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIFRoZXRpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SWxsYXRpdmVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBJbGxhdGl2ZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0Qm91bmRlZENvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIEJvdW5kZWRDb250ZXh0KSxcbiAgICAgICAgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IChjb250ZXh0VGhldGljQ29udGV4dCB8fCBjb250ZXh0SWxsYXRpdmVDb250ZXh0IHx8IGNvbnRleHRCb3VuZGVkQ29udGV4dCB8fCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dFN1YnN0YW50aXZlQ29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJhYmxhdGUiLCJhYmxhdGVzIiwiYXR0ZW1wdCIsImF0dGVtcHRzIiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsIm1hbmlmZXN0IiwicG9zaXQiLCJwcm9mZmVyIiwicmVjb25jaWxlIiwic2VxdWVzdGVyIiwic2VyaWFsaXNlIiwic2VyaWFsaXNlcyIsInVuc2VyaWFsaXNlIiwidW5zZXJpYWxpc2VzIiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHQiLCJzdGF0ZWQiLCJlcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsImZyb21TdGF0ZWQiLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwiZm9yY2VkIiwidW5kZWZpbmVkIiwidW5yZWxlYXNlZCIsImlzVW5yZWxlYXNlZCIsImFibGF0ZUNvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJtbmVtaWNDb250ZXh0IiwiTWVubWljQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImNvbnRleHRzIiwicGhhbmVyaWNDb250ZXh0IiwiUGhhbmVyaWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImFwaGFzaWNDb250ZXh0IiwiQXBoYXNpY0NvbnRleHQiLCJtbmVtaWNDb250ZXh0SlNPTiIsIm1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibW5lbWljQ29udGV4dEZyb21KU09OIiwibWFwIiwibW5lbWljQ29udGV4dHMiLCJtbmVtaWNDb250ZXh0c0pTT04iLCJtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OIiwiY29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNGcm9tSlNPTiIsInByb2NlZHVyZSIsInRlcm1zIiwiZ2V0Q29udGV4dCIsImNhbGwiLCJpc1N0YXRlZCIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0IiwiQ29udGV4dCIsImF1Z21lbnRDb250ZXh0IiwiY29udGV4dENvbnRleHQiLCJjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiY29udGV4dFRoZXRpY0NvbnRleHQiLCJjb250ZXh0SWxsYXRpdmVDb250ZXh0IiwiY29udGV4dEJvdW5kZWRDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBeUNnQkE7ZUFBQUE7O1FBb0lBQztlQUFBQTs7UUEzRUFDO2VBQUFBOztRQXlGQUM7ZUFBQUE7O1FBbElBQztlQUFBQTs7UUF5QkFDO2VBQUFBOztRQWpCQUM7ZUFBQUE7O1FBeUJBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQThHQUM7ZUFBQUE7O1FBak1BQztlQUFBQTs7UUFrSUFDO2VBQUFBOztR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