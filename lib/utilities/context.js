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
    get pass () {
        return pass;
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
function pass(innerFunction, context) {
    return innerFunction(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFzcyhpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgIGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21TdGF0ZWQoc3RhdGVkLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBmb3JjZWQsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBmb3JjZWQ7IC8vL1xuXG4gICAgZm9yY2VkID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAoZm9yY2VkIHx8IHVucmVsZWFzZWQpIHtcbiAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9mZmVyKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVkID0gZmFsc2UsXG4gICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21TdGF0ZWQoc3RhdGVkLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRoZXRpY0NvbnRleHQgPSBUaGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAodW5yZWxlYXNlZCkge1xuICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNZW5taWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jbG9zZShpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb25zOyAgLy8vXG5cbiAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBib3VuZGVkQ29udGV4dCA9IEJvdW5kZWRDb250ZXh0LmZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyhtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJvdW5kZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYW5pZmVzdChpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBwaGFuZXJpY0NvbnRleHQgPSBQaGFuZXJpY0NvbnRleHQuZnJvbUNvbnRleHRzKGNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHBoYW5lcmljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb25jaWxlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlc3Rlcihpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFwaGFzaWNDb250ZXh0ID0gQXBoYXNpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGFwaGFzaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRKU09OID0gbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04obW5lbWljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gbW5lbWljQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gICAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICAgIGNvbnRleHQgPSBhYmxhdGVDb250ZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0cyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgICBpZiAodW5yZWxlYXNlZCkge1xuICAgICAgY29uc3QgbW5lbWljQ29udGV4dCA9IE1lbm1pY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBjb250ZXh0cywgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04obW5lbWljQ29udGV4dHMpLFxuICAgICAgICBjb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c0pTT047IC8vL1xuXG4gIGNvbnRleHRzID0gY29udGV4dHNKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBtbmVtaWNDb250ZXh0c0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICBjb250ZXh0cyA9IG1uZW1pY0NvbnRleHRzOyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCAuLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZShwcm9jZWR1cmUsIHRlcm1zKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBwcm9jZWR1cmUuZ2V0Q29udGV4dCgpO1xuXG4gIHJldHVybiBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFibGF0ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IENvbnRleHQgPSBzdGF0ZWQgPyBUaGV0aWNDb250ZXh0IDogSWxsYXRpdmVDb250ZXh0O1xuXG4gIGNvbnRleHQgPSBhdWdtZW50Q29udGV4dChjb250ZXh0LCBDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudENvbnRleHQoY29udGV4dCwgQ29udGV4dCkge1xuICBjb25zdCBjb250ZXh0Q29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IGlzQ29udGV4dFN1YnN0YW50aXZlQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gIWNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQ7XG5cbiAgcmV0dXJuIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFRoZXRpY0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIFRoZXRpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SWxsYXRpdmVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBJbGxhdGl2ZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0Qm91bmRlZENvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIEJvdW5kZWRDb250ZXh0KSxcbiAgICAgICAgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IChjb250ZXh0VGhldGljQ29udGV4dCB8fCBjb250ZXh0SWxsYXRpdmVDb250ZXh0IHx8IGNvbnRleHRCb3VuZGVkQ29udGV4dCB8fCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dFN1YnN0YW50aXZlQ29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJhYmxhdGUiLCJhYmxhdGVzIiwiYXR0ZW1wdCIsImF0dGVtcHRzIiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsIm1hbmlmZXN0IiwicGFzcyIsInBvc2l0IiwicHJvZmZlciIsInJlY29uY2lsZSIsInNlcXVlc3RlciIsInNlcmlhbGlzZSIsInNlcmlhbGlzZXMiLCJ1bnNlcmlhbGlzZSIsInVuc2VyaWFsaXNlcyIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0Iiwic3RhdGVkIiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJmcm9tU3RhdGVkIiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsImZvcmNlZCIsInVuZGVmaW5lZCIsInVucmVsZWFzZWQiLCJpc1VucmVsZWFzZWQiLCJhYmxhdGVDb250ZXh0IiwiYnJhbmNoaW5nQ29udGV4dCIsIkJyYW5jaGluZ0NvbnRleHQiLCJpbGxhdGl2ZUNvbnRleHQiLCJJbGxhdGl2ZUNvbnRleHQiLCJ0aGV0aWNDb250ZXh0IiwiVGhldGljQ29udGV4dCIsIm5lc3RlZENvbnRleHQiLCJOZXN0ZWRDb250ZXh0IiwibW5lbWljQ29udGV4dCIsIk1lbm1pY0NvbnRleHQiLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImJvdW5kZWRDb250ZXh0IiwiQm91bmRlZENvbnRleHQiLCJmcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMiLCJjb250ZXh0cyIsInBoYW5lcmljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJhcGhhc2ljQ29udGV4dCIsIkFwaGFzaWNDb250ZXh0IiwibW5lbWljQ29udGV4dEpTT04iLCJtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm1uZW1pY0NvbnRleHRGcm9tSlNPTiIsIm1hcCIsIm1uZW1pY0NvbnRleHRzIiwibW5lbWljQ29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiIsImNvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzRnJvbUpTT04iLCJwcm9jZWR1cmUiLCJ0ZXJtcyIsImdldENvbnRleHQiLCJjYWxsIiwiaXNTdGF0ZWQiLCJjb250ZXh0RXh0cmFuZW91c0NvbnRleHQiLCJpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsIkNvbnRleHQiLCJhdWdtZW50Q29udGV4dCIsImNvbnRleHRDb250ZXh0IiwiY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCIsImlzQ29udGV4dFN1YnN0YW50aXZlQ29udGV4dCIsImNvbnRleHRUaGV0aWNDb250ZXh0IiwiY29udGV4dElsbGF0aXZlQ29udGV4dCIsImNvbnRleHRCb3VuZGVkQ29udGV4dCIsImNvbnRleHROb21pbmFsRmlsZUNvbnRleHQiLCJOb21pbmFsRmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTZDZ0JBO2VBQUFBOztRQW9JQUM7ZUFBQUE7O1FBM0VBQztlQUFBQTs7UUF5RkFDO2VBQUFBOztRQWxJQUM7ZUFBQUE7O1FBeUJB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