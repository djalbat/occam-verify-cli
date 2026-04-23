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
function evaluate(procedure, terms) {
    const context = procedure.getContext();
    return procedure.call(terms, context);
}
function ground(innerFunction) {
    let context;
    const nominalContext = _nominal.default.fromNothing();
    context = nominalContext; ///
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function declare(innerFunction, context) {
    const theticContext = _thetic.default.fromNothing(context);
    context = theticContext; ///
    return innerFunction(context);
}
function derive(innerFunction, context) {
    const illativeContext = _illative.default.fromNothing(context);
    context = illativeContext; ///
    return innerFunction(context);
}
function elide(innerFunction, context) {
    const aphasicContext = _aphasic.default.fromNothing(context);
    context = aphasicContext; ///
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
function ablate(innerFunction, context) {
    const unreleased = context.isUnreleased();
    if (unreleased) {
        context = ablateContext(context); ///
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1uZW1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgQnJhbmNoaW5nQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9icmFuY2hpbmdcIjtcbmltcG9ydCBOb21pbmFsRmlsZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZmlsZS9ub21pbmFsXCI7XG5cbmltcG9ydCB7IG1uZW1pY0NvbnRleHRGcm9tSlNPTiwgbW5lbWljQ29udGV4dHNGcm9tSlNPTiwgbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04sIG1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlKHByb2NlZHVyZSwgdGVybXMpIHtcbiAgY29uc3QgY29udGV4dCA9IHByb2NlZHVyZS5nZXRDb250ZXh0KCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZChpbm5lckZ1bmN0aW9uKSB7XG4gIGxldCBjb250ZXh0O1xuXG4gIGNvbnN0IG5vbWluYWxDb250ZXh0ID0gTm9taW5hbENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGlkZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFwaGFzaWNDb250ZXh0ID0gQXBoYXNpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGFwaGFzaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNsb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYm91bmRlZENvbnRleHQgPSBCb3VuZGVkQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY2Fwc3VsYXRlKGlubmVyRnVuY3Rpb24sIG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgY29udGV4dCA9IGFibGF0ZUNvbnRleHQoY29udGV4dCk7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTW5lbWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAgLy8vXG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRKU09OID0gbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04obW5lbWljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gbW5lbWljQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gbW5lbWljQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBtbmVtaWNDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuaWZlc3QoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3QgcGhhbmVyaWNDb250ZXh0ID0gUGhhbmVyaWNDb250ZXh0LmZyb21Db250ZXh0cyhjb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBwaGFuZXJpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHRzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICAgIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTW5lbWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfSk7XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBtbmVtaWNDb250ZXh0cyA9IGNvbnRleHRzLCAvLy9cbiAgICAgICAgbW5lbWljQ29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTihtbmVtaWNDb250ZXh0cyksXG4gICAgICAgIGNvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzSlNPTjsgLy8vXG5cbiAgY29udGV4dHMgPSBjb250ZXh0c0pTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGVzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICAgIGlmICh1bnJlbGVhc2VkKSB7XG4gICAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH0pO1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZnVuY3Rpb24gYWJsYXRlQ29udGV4dChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHRHcm91bmRlZENvbnRleHQgPSBpc0NvbnRleHRHcm91bmRlZENvbnRleHQoY29udGV4dCk7XG5cbiAgICB3aGlsZSAoIWNvbnRleHRHcm91bmRlZENvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgICAgY29udGV4dEdyb3VuZGVkQ29udGV4dCA9IGlzQ29udGV4dEdyb3VuZGVkQ29udGV4dChjb250ZXh0KTtcbiAgICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEdyb3VuZGVkQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRUaGV0aWNDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBUaGV0aWNDb250ZXh0KSxcbiAgICAgICAgY29udGV4dElsbGF0aXZlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgSWxsYXRpdmVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEdyb3VuZGVkQ29udGV4dCA9IChjb250ZXh0VGhldGljQ29udGV4dCB8fCBjb250ZXh0SWxsYXRpdmVDb250ZXh0IHx8IGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0R3JvdW5kZWRDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImFibGF0ZSIsImFibGF0ZXMiLCJhdHRlbXB0IiwiYXR0ZW1wdHMiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImVsaWRlIiwiZW5jYXBzdWxhdGUiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsIm1hbmlmZXN0IiwicmVjb25jaWxlIiwic2VyaWFsaXNlIiwic2VyaWFsaXNlcyIsInVuc2VyaWFsaXNlIiwidW5zZXJpYWxpc2VzIiwicHJvY2VkdXJlIiwidGVybXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbGwiLCJpbm5lckZ1bmN0aW9uIiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwiaWxsYXRpdmVDb250ZXh0IiwiSWxsYXRpdmVDb250ZXh0IiwiYXBoYXNpY0NvbnRleHQiLCJBcGhhc2ljQ29udGV4dCIsImJvdW5kZWRDb250ZXh0IiwiQm91bmRlZENvbnRleHQiLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImJyYW5jaGluZ0NvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwibmVzdGVkQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJ1bnJlbGVhc2VkIiwiaXNVbnJlbGVhc2VkIiwiYWJsYXRlQ29udGV4dCIsIm1uZW1pY0NvbnRleHQiLCJNbmVtaWNDb250ZXh0IiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsIm1uZW1pY0NvbnRleHRKU09OIiwibW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJtbmVtaWNDb250ZXh0RnJvbUpTT04iLCJtbmVtaWNDb250ZXh0cyIsIm1uZW1pY0NvbnRleHRzRnJvbUpTT04iLCJjb250ZXh0cyIsInBoYW5lcmljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImZyb21Db250ZXh0cyIsIm1hcCIsIm1uZW1pY0NvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04iLCJjb250ZXh0c0pTT04iLCJjb250ZXh0R3JvdW5kZWRDb250ZXh0IiwiaXNDb250ZXh0R3JvdW5kZWRDb250ZXh0IiwiY29udGV4dFRoZXRpY0NvbnRleHQiLCJjb250ZXh0SWxsYXRpdmVDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNkZnQkE7ZUFBQUE7O1FBZ0dBQztlQUFBQTs7UUF0RkFDO2VBQUFBOztRQTREQUM7ZUFBQUE7O1FBdEZBQztlQUFBQTs7UUF4Q0FDO2VBQUFBOztRQVFBQztlQUFBQTs7UUF3Q0FDO2VBQUFBOztRQWhDQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFSQUM7ZUFBQUE7O1FBNUNBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBNkhBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBekNBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBd0RBQztlQUFBQTs7UUE5Q0FDO2VBQUFBOztRQVFBQztlQUFBQTs7OytEQTNJVTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztpRUFDRTtzQkFFcUc7Ozs7OztBQUU3SCxTQUFTUixTQUFTUyxTQUFTLEVBQUVDLEtBQUs7SUFDdkMsTUFBTUMsVUFBVUYsVUFBVUcsVUFBVTtJQUVwQyxPQUFPSCxVQUFVSSxJQUFJLENBQUNILE9BQU9DO0FBQy9CO0FBRU8sU0FBU1YsT0FBT2EsYUFBYTtJQUNsQyxJQUFJSDtJQUVKLE1BQU1JLGlCQUFpQkMsZ0JBQWMsQ0FBQ0MsV0FBVztJQUVqRE4sVUFBVUksZ0JBQWdCLEdBQUc7SUFFN0IsTUFBTUcsaUJBQWlCQyxnQkFBYyxDQUFDRixXQUFXLENBQUNOO0lBRWxEQSxVQUFVTyxnQkFBaUIsR0FBRztJQUU5QixPQUFPSixjQUFjSDtBQUN2QjtBQUVPLFNBQVNqQixRQUFRb0IsYUFBYSxFQUFFSCxPQUFPO0lBQzVDLE1BQU1TLGdCQUFnQkMsZUFBYSxDQUFDSixXQUFX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