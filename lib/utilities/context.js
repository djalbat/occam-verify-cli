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
    get elide () {
        return elide;
    },
    get encapsulate () {
        return encapsulate;
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
const _aphasic = /*#__PURE__*/ _interop_require_default(require("../context/aphasic"));
const _bounded = /*#__PURE__*/ _interop_require_default(require("../context/bounded"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
const _phaneric = /*#__PURE__*/ _interop_require_default(require("../context/phaneric"));
const _illative = /*#__PURE__*/ _interop_require_default(require("../context/illative"));
const _branching = /*#__PURE__*/ _interop_require_default(require("../context/branching"));
const _nominal1 = /*#__PURE__*/ _interop_require_default(require("../context/file/nominal"));
const _json = require("../utilities/json");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ground(innerFunction) {
    let context;
    const nominalContext = _nominal.default.fromNothing();
    context = nominalContext; ///
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function evaluate(procedure, terms) {
    const context = procedure.getContext();
    return procedure.call(terms, context);
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
function enclose(innerFunction, context) {
    const boundedContext = _bounded.default.fromNothing(context);
    context = boundedContext; ///
    return innerFunction(context);
}
function encapsulate(innerFunction, metaLevelAssumptions, context) {
    const boundedContext = _bounded.default.fromMetaLevelAssumptions(metaLevelAssumptions, context);
    context = boundedContext; ///
    return innerFunction(context);
}
function reconcile(innerFunction, context) {
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function choose(innerFunction, context) {
    const branchingContext = _branching.default.fromNothing(context);
    context = branchingContext; ///
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
function ablate(innerFunction, context) {
    const unreleased = context.isUnreleased();
    if (unreleased) {
        context = ablateContext(context); ///
    }
    return innerFunction(context);
}
function elide(innerFunction, context) {
    const aphasicContext = _aphasic.default.fromNothing(context);
    context = aphasicContext; ///
    return innerFunction(context);
}
function serialise(innerFunction, context) {
    const mnemicContext = context, mnemicContextJSON = (0, _json.mnemicContextToMnemicContextJSON)(mnemicContext), contextJSON = mnemicContextJSON; ///
    context = contextJSON; ///
    return innerFunction(context);
}
function unserialise(innerFunction, json, context) {
    const mnemicContext = (0, _json.mnemicContextFromJSON)(json, context);
    context = mnemicContext; ///
    return innerFunction(json, context);
}
function unserialises(innerFunction, json, context) {
    const mnemicContexts = (0, _json.mnemicContextsFromJSON)(json, context), contexts = mnemicContexts; ///
    return innerFunction(json, ...contexts);
}
function instantiate(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function manifest(innerFunction, ...contexts) {
    const phanericContext = _phaneric.default.fromContexts(contexts), context = phanericContext; ///
    return innerFunction(context);
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
function ablates(innerFunction, ...contexts) {
    contexts = contexts.map((context)=>{
        const unreleased = context.isUnreleased();
        if (unreleased) {
            context = ablateContext(context); ///
        }
        return context;
    });
    return innerFunction(...contexts);
}
function ablateContext(context) {
    let contextGroundedContext = isContextGroundedContext(context);
    while(!contextGroundedContext){
        context = context.getContext();
        contextGroundedContext = isContextGroundedContext(context);
    }
    return context;
}
function isContextGroundedContext(context) {
    const contextTheticContext = context instanceof _thetic.default, contextIllativeContext = context instanceof _illative.default, contextNominalFileContext = context instanceof _nominal1.default, contextGroundedContext = contextTheticContext || contextIllativeContext || contextNominalFileContext;
    return contextGroundedContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1uZW1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgQnJhbmNoaW5nQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9icmFuY2hpbmdcIjtcbmltcG9ydCBOb21pbmFsRmlsZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZmlsZS9ub21pbmFsXCI7XG5cbmltcG9ydCB7IG1uZW1pY0NvbnRleHRGcm9tSlNPTiwgbW5lbWljQ29udGV4dHNGcm9tSlNPTiwgbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04sIG1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZChpbm5lckZ1bmN0aW9uKSB7XG4gIGxldCBjb250ZXh0O1xuXG4gIGNvbnN0IG5vbWluYWxDb250ZXh0ID0gTm9taW5hbENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZShwcm9jZWR1cmUsIHRlcm1zKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBwcm9jZWR1cmUuZ2V0Q29udGV4dCgpO1xuXG4gIHJldHVybiBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBpbGxhdGl2ZUNvbnRleHQgPSBJbGxhdGl2ZUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRoZXRpY0NvbnRleHQgPSBUaGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNsb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYm91bmRlZENvbnRleHQgPSBCb3VuZGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY2Fwc3VsYXRlKGlubmVyRnVuY3Rpb24sIG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBicmFuY2hpbmdDb250ZXh0ID0gQnJhbmNoaW5nQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYnJhbmNoaW5nQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lc3RlZENvbnRleHQgPSBOZXN0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBuZXN0ZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTW5lbWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgY29udGV4dCA9IGFibGF0ZUNvbnRleHQoY29udGV4dCk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGlkZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFwaGFzaWNDb250ZXh0ID0gQXBoYXNpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGFwaGFzaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRKU09OID0gbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04obW5lbWljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gbW5lbWljQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gbW5lbWljQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBtbmVtaWNDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuaWZlc3QoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgcGhhbmVyaWNDb250ZXh0ID0gUGhhbmVyaWNDb250ZXh0LmZyb21Db250ZXh0cyhjb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBwaGFuZXJpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHRzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICAgIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTW5lbWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBtbmVtaWNDb250ZXh0cyA9IGNvbnRleHRzLCAvLy9cbiAgICAgICAgbW5lbWljQ29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTihtbmVtaWNDb250ZXh0cyksXG4gICAgICAgIGNvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzSlNPTjsgLy8vXG5cbiAgY29udGV4dHMgPSBjb250ZXh0c0pTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGVzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICAgIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZnVuY3Rpb24gYWJsYXRlQ29udGV4dChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHRHcm91bmRlZENvbnRleHQgPSBpc0NvbnRleHRHcm91bmRlZENvbnRleHQoY29udGV4dCk7XG5cbiAgICB3aGlsZSAoIWNvbnRleHRHcm91bmRlZENvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgICAgY29udGV4dEdyb3VuZGVkQ29udGV4dCA9IGlzQ29udGV4dEdyb3VuZGVkQ29udGV4dChjb250ZXh0KTtcbiAgICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEdyb3VuZGVkQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRUaGV0aWNDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBUaGV0aWNDb250ZXh0KSxcbiAgICAgICAgY29udGV4dElsbGF0aXZlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgSWxsYXRpdmVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEdyb3VuZGVkQ29udGV4dCA9IChjb250ZXh0VGhldGljQ29udGV4dCB8fCBjb250ZXh0SWxsYXRpdmVDb250ZXh0IHx8IGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0R3JvdW5kZWRDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImFibGF0ZSIsImFibGF0ZXMiLCJhdHRlbXB0IiwiYXR0ZW1wdHMiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImVsaWRlIiwiZW5jYXBzdWxhdGUiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsIm1hbmlmZXN0IiwicmVjb25jaWxlIiwic2VyaWFsaXNlIiwic2VyaWFsaXNlcyIsInVuc2VyaWFsaXNlIiwidW5zZXJpYWxpc2VzIiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHQiLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwicHJvY2VkdXJlIiwidGVybXMiLCJnZXRDb250ZXh0IiwiY2FsbCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwiZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zIiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImJyYW5jaGluZ0NvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJ1bnJlbGVhc2VkIiwiaXNVbnJlbGVhc2VkIiwibW5lbWljQ29udGV4dCIsIk1uZW1pY0NvbnRleHQiLCJhYmxhdGVDb250ZXh0IiwiYXBoYXNpY0NvbnRleHQiLCJBcGhhc2ljQ29udGV4dCIsIm1uZW1pY0NvbnRleHRKU09OIiwibW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJtbmVtaWNDb250ZXh0RnJvbUpTT04iLCJtbmVtaWNDb250ZXh0cyIsIm1uZW1pY0NvbnRleHRzRnJvbUpTT04iLCJjb250ZXh0cyIsInBoYW5lcmljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImZyb21Db250ZXh0cyIsIm1hcCIsIm1uZW1pY0NvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04iLCJjb250ZXh0c0pTT04iLCJjb250ZXh0R3JvdW5kZWRDb250ZXh0IiwiaXNDb250ZXh0R3JvdW5kZWRDb250ZXh0IiwiY29udGV4dFRoZXRpY0NvbnRleHQiLCJjb250ZXh0SWxsYXRpdmVDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBeUdnQkE7ZUFBQUE7O1FBb0ZBQztlQUFBQTs7UUFoR0FDO2VBQUFBOztRQXNFQUM7ZUFBQUE7O1FBdEZBQztlQUFBQTs7UUFoQ0FDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnREFDO2VBQUFBOztRQThCQUM7ZUFBQUE7O1FBdERBQztlQUFBQTs7UUFSQUM7ZUFBQUE7O1FBdEJBQztlQUFBQTs7UUFkQUM7ZUFBQUE7O1FBbUlBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBdkZBQztlQUFBQTs7UUFzREFDO2VBQUFBOztRQXdEQUM7ZUFBQUE7O1FBOUNBQztlQUFBQTs7UUFRQUM7ZUFBQUE7OzsrREEzSVU7K0RBQ0E7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7aUVBQ0E7a0VBQ0M7aUVBQ0U7c0JBRXFHOzs7Ozs7QUFFN0gsU0FBU1AsT0FBT1EsYUFBYTtJQUNsQyxJQUFJQztJQUVKLE1BQU1DLGlCQUFpQkMsZ0JBQWMsQ0FBQ0MsV0FBVztJQUVqREgsVUFBVUMsZ0JBQWdCLEdBQUc7SUFFN0IsTUFBTUcsaUJBQWlCQyxnQkFBYyxDQUFDRixXQUFXLENBQUNIO0lBRWxEQSxVQUFVSSxnQkFBaUIsR0FBRztJQUU5QixPQUFPTCxjQUFjQztBQUN2QjtBQUVPLFNBQVNWLFNBQVNnQixTQUFTLEVBQUVDLEtBQUs7SUFDdkMsTUFBTVAsVUFBVU0sVUFBVUUsVUFBVTtJQUVwQyxPQUFPRixVQUFVRyxJQUFJLENBQUNGLE9BQU9QO0FBQy9CO0FBRU8sU0FBU2YsT0FBT2MsYUFBYSxFQUFFQyxPQUFPO0lBQzNDLE1BQU1VLGtCQUFrQkMsaUJBQWUsQ0FBQ1IsV0FB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