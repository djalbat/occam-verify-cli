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
    get newAblate () {
        return newAblate;
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
    get serialise () {
        return serialise;
    },
    get serialises () {
        return serialises;
    },
    get speculate () {
        return speculate;
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
function enclose(innerFunction, context) {
    assert(context, _nominal1.default, _bounded.default);
    const boundedContext = _bounded.default.fromNothing(context);
    context = boundedContext; ///
    return innerFunction(context);
}
function encapsulate(innerFunction, metaLevelAssumptions, context) {
    assert(context, _nominal1.default);
    const boundedContext = _bounded.default.fromMetaLevelAssumptions(metaLevelAssumptions, context);
    context = boundedContext; ///
    return innerFunction(context);
}
function derive(innerFunction, context) {
    assert(context, _bounded.default);
    const illativeContext = _illative.default.fromNothing(context);
    context = illativeContext; ///
    return innerFunction(context);
}
function declare(innerFunction, context) {
    assert(context, _bounded.default);
    const theticContext = _thetic.default.fromNothing(context);
    context = theticContext; ///
    return innerFunction(context);
}
function reconcile(innerFunction, context) {
    assert(context, _liminal.default, _mnemic.default, _aphasic.default);
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function speculate(innerFunction, context) {
    assert(context, _mnemic.default, _nested.default, _aphasic.default);
    const liminalContext = _liminal.default.fromNothing(context);
    context = liminalContext; ///
    return innerFunction(context);
}
function choose(innerFunction, context) {
    assert(context, _branching.default, _mnemic.default, _nested.default, _aphasic.default);
    const branchingContext = _branching.default.fromNothing(context);
    context = branchingContext; ///
    return innerFunction(context);
}
function descend(innerFunction, context) {
    assert(context, _nested.default, _mnemic.default, _aphasic.default);
    const nestedContext = _nested.default.fromNothing(context);
    context = nestedContext; ///
    return innerFunction(context);
}
function attempt(innerFunction, context) {
    assert(context, _aphasic.default, _thetic.default, _illative.default, _literal.default, _nominal1.default);
    const unreleased = context.isUnreleased();
    if (unreleased) {
        const mnemicContext = _mnemic.default.fromNothing(context);
        context = mnemicContext; ///
    }
    return innerFunction(context);
}
function elide(innerFunction, context) {
    assert(context, _thetic.default, _illative.default, _mnemic.default, _phaneric.default);
    const aphasicContext = _aphasic.default.fromNothing(context);
    context = aphasicContext; ///
    return innerFunction(context);
}
function manifest(innerFunction, ...contexts) {
    asserts(contexts, _mnemic.default);
    const phanericContext = _phaneric.default.fromContexts(contexts), context = phanericContext; ///
    return innerFunction(context);
}
function attempts(innerFunction, ...contexts) {
    asserts(contexts, _aphasic.default, _thetic.default, _illative.default, _literal.default, _nominal1.default);
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
function newAblate(innerFunction, context) {
    const unreleased = context.isUnreleased();
    if (unreleased) {
        let contextGroundedContext = isContextGroundedContext(context);
        while(!contextGroundedContext){
            context = context.getContext();
            contextGroundedContext = isContextGroundedContext(context);
        }
    }
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
function proffer(innerFunction, context) {
    const stated = false, ephemeralContext = _ephemeral.default.fromStated(stated, context);
    context = ephemeralContext; ///
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
function isContextGroundedContext(context) {
    const contextTheticContext = context instanceof _thetic.default, contextIllativeContext = context instanceof _illative.default, contextGroundedContext = contextTheticContext || contextIllativeContext;
    return contextGroundedContext;
}
function isContextSubstantiveContext(context) {
    const contextTheticContext = context instanceof _thetic.default, contextIllativeContext = context instanceof _illative.default, contextBoundedContext = context instanceof _bounded.default, contextNominalFileContext = context instanceof _nominal1.default, contextSubstantiveContext = contextTheticContext || contextIllativeContext || contextBoundedContext || contextNominalFileContext;
    return contextSubstantiveContext;
}
function assert(context, ...Contexts) {
    const passed = Contexts.some((Context)=>{
        if (context instanceof Context) {
            return true;
        }
    });
    if (!passed) {
        debugger;
        process.exit(1);
    }
}
function asserts(contexts, ...Contexts) {
    contexts.forEach((context)=>{
        assert(context, ...Contexts);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1uZW1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5jbG9zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGFzc2VydChjb250ZXh0LCBOb21pbmFsRmlsZUNvbnRleHQsIEJvdW5kZWRDb250ZXh0KVxuXG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJvdW5kZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNhcHN1bGF0ZShpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgTm9taW5hbEZpbGVDb250ZXh0KVxuXG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGFzc2VydChjb250ZXh0LCBCb3VuZGVkQ29udGV4dClcblxuICBjb25zdCBpbGxhdGl2ZUNvbnRleHQgPSBJbGxhdGl2ZUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGFzc2VydChjb250ZXh0LCBCb3VuZGVkQ29udGV4dClcblxuICBjb25zdCB0aGV0aWNDb250ZXh0ID0gVGhldGljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gdGhldGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb25jaWxlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgYXNzZXJ0KGNvbnRleHQsIExpbWluYWxDb250ZXh0LCBNbmVtaWNDb250ZXh0LCBBcGhhc2ljQ29udGV4dClcblxuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BlY3VsYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgYXNzZXJ0KGNvbnRleHQsIE1uZW1pY0NvbnRleHQsIE5lc3RlZENvbnRleHQsIEFwaGFzaWNDb250ZXh0KVxuXG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgQnJhbmNoaW5nQ29udGV4dCwgTW5lbWljQ29udGV4dCwgTmVzdGVkQ29udGV4dCwgQXBoYXNpY0NvbnRleHQpXG5cbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgTmVzdGVkQ29udGV4dCwgTW5lbWljQ29udGV4dCwgQXBoYXNpY0NvbnRleHQpXG5cbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgQXBoYXNpY0NvbnRleHQsIFRoZXRpY0NvbnRleHQsIElsbGF0aXZlQ29udGV4dCwgTGl0ZXJhbENvbnRleHQsIE5vbWluYWxGaWxlQ29udGV4dClcblxuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAodW5yZWxlYXNlZCkge1xuICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNbmVtaWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxpZGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgVGhldGljQ29udGV4dCwgSWxsYXRpdmVDb250ZXh0LCBNbmVtaWNDb250ZXh0LCBQaGFuZXJpY0NvbnRleHQpXG5cbiAgY29uc3QgYXBoYXNpY0NvbnRleHQgPSBBcGhhc2ljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYXBoYXNpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hbmlmZXN0KGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGFzc2VydHMoY29udGV4dHMsIE1uZW1pY0NvbnRleHQpXG5cbiAgY29uc3QgcGhhbmVyaWNDb250ZXh0ID0gUGhhbmVyaWNDb250ZXh0LmZyb21Db250ZXh0cyhjb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBwaGFuZXJpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHRzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGFzc2VydHMoY29udGV4dHMsIEFwaGFzaWNDb250ZXh0LCBUaGV0aWNDb250ZXh0LCBJbGxhdGl2ZUNvbnRleHQsIExpdGVyYWxDb250ZXh0LCBOb21pbmFsRmlsZUNvbnRleHQpXG5cbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gICAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNbmVtaWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdBYmxhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAodW5yZWxlYXNlZCkge1xuICAgIGxldCBjb250ZXh0R3JvdW5kZWRDb250ZXh0ID0gaXNDb250ZXh0R3JvdW5kZWRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgd2hpbGUgKCFjb250ZXh0R3JvdW5kZWRDb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnRleHRHcm91bmRlZENvbnRleHQgPSBpc0NvbnRleHRHcm91bmRlZENvbnRleHQoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tU3RhdGVkKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZChpbm5lckZ1bmN0aW9uKSB7XG4gIGxldCBjb250ZXh0O1xuXG4gIGNvbnN0IG5vbWluYWxDb250ZXh0ID0gTm9taW5hbENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGUoaW5uZXJGdW5jdGlvbiwgZm9yY2VkLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gZm9yY2VkOyAvLy9cblxuICAgIGZvcmNlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgaWYgKGZvcmNlZCB8fCB1bnJlbGVhc2VkKSB7XG4gICAgY29udGV4dCA9IGFibGF0ZUNvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2ZmZXIoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgZXBoZW1lcmFsQ29udGV4dCA9IEVwaGVtZXJhbENvbnRleHQuZnJvbVN0YXRlZChzdGF0ZWQsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRKU09OID0gbW5lbWljQ29udGV4dFRvTW5lbWljQ29udGV4dEpTT04obW5lbWljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gbW5lbWljQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBtbmVtaWNDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gICAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICAgIGNvbnRleHQgPSBhYmxhdGVDb250ZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gY29udGV4dHMsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OKG1uZW1pY0NvbnRleHRzKSxcbiAgICAgICAgY29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNKU09OOyAvLy9cblxuICBjb250ZXh0cyA9IGNvbnRleHRzSlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gbW5lbWljQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBtbmVtaWNDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGUocHJvY2VkdXJlLCB0ZXJtcykge1xuICBjb25zdCBjb250ZXh0ID0gcHJvY2VkdXJlLmdldENvbnRleHQoKTtcblxuICByZXR1cm4gcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhYmxhdGVDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gIGxldCBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcblxuICB3aGlsZSAoY29udGV4dEV4dHJhbmVvdXNDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IGNvbnRleHQuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICBjb25zdCBDb250ZXh0ID0gc3RhdGVkID8gVGhldGljQ29udGV4dCA6IElsbGF0aXZlQ29udGV4dDtcblxuICBjb250ZXh0ID0gYXVnbWVudENvbnRleHQoY29udGV4dCwgQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnRDb250ZXh0KGNvbnRleHQsIENvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dENvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIENvbnRleHQpO1xuXG4gIGlmICghY29udGV4dENvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQgPSBpc0NvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQoY29udGV4dCksXG4gICAgICAgIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9ICFjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0O1xuXG4gIHJldHVybiBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEdyb3VuZGVkQ29udGV4dChjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHRUaGV0aWNDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBUaGV0aWNDb250ZXh0KSxcbiAgICAgICAgY29udGV4dElsbGF0aXZlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgSWxsYXRpdmVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dEdyb3VuZGVkQ29udGV4dCA9IChjb250ZXh0VGhldGljQ29udGV4dCB8fCBjb250ZXh0SWxsYXRpdmVDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dEdyb3VuZGVkQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFRoZXRpY0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIFRoZXRpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SWxsYXRpdmVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBJbGxhdGl2ZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0Qm91bmRlZENvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIEJvdW5kZWRDb250ZXh0KSxcbiAgICAgICAgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KSxcbiAgICAgICAgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IChjb250ZXh0VGhldGljQ29udGV4dCB8fCBjb250ZXh0SWxsYXRpdmVDb250ZXh0IHx8IGNvbnRleHRCb3VuZGVkQ29udGV4dCB8fCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dFN1YnN0YW50aXZlQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0KGNvbnRleHQsIC4uLkNvbnRleHRzKSB7XG4gIGNvbnN0IHBhc3NlZCA9IENvbnRleHRzLnNvbWUoKENvbnRleHQpID0+IHtcbiAgICBpZiAoY29udGV4dCBpbnN0YW5jZW9mIENvbnRleHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFwYXNzZWQpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydHMoY29udGV4dHMsIC4uLkNvbnRleHRzKSB7XG4gIGNvbnRleHRzLmZvckVhY2goKGNvbnRleHQpID0+IHtcbiAgICBhc3NlcnQoY29udGV4dCwgLi4uQ29udGV4dHMpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJhYmxhdGUiLCJhYmxhdGVzIiwiYXR0ZW1wdCIsImF0dGVtcHRzIiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJlbGlkZSIsImVuY2Fwc3VsYXRlIiwiZW5jbG9zZSIsImV2YWx1YXRlIiwiZ3JvdW5kIiwiaW5zdGFudGlhdGUiLCJtYW5pZmVzdCIsIm5ld0FibGF0ZSIsInBvc2l0IiwicHJvZmZlciIsInJlY29uY2lsZSIsInNlcmlhbGlzZSIsInNlcmlhbGlzZXMiLCJzcGVjdWxhdGUiLCJ1bnNlcmlhbGlzZSIsInVuc2VyaWFsaXNlcyIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0IiwiYXNzZXJ0IiwiTm9taW5hbEZpbGVDb250ZXh0IiwiQm91bmRlZENvbnRleHQiLCJib3VuZGVkQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJmcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMiLCJpbGxhdGl2ZUNvbnRleHQiLCJJbGxhdGl2ZUNvbnRleHQiLCJ0aGV0aWNDb250ZXh0IiwiVGhldGljQ29udGV4dCIsIkxpbWluYWxDb250ZXh0IiwiTW5lbWljQ29udGV4dCIsIkFwaGFzaWNDb250ZXh0IiwibGltaW5hbENvbnRleHQiLCJOZXN0ZWRDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImJyYW5jaGluZ0NvbnRleHQiLCJuZXN0ZWRDb250ZXh0IiwiTGl0ZXJhbENvbnRleHQiLCJ1bnJlbGVhc2VkIiwiaXNVbnJlbGVhc2VkIiwibW5lbWljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImFwaGFzaWNDb250ZXh0IiwiY29udGV4dHMiLCJhc3NlcnRzIiwicGhhbmVyaWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwibWFwIiwiY29udGV4dEdyb3VuZGVkQ29udGV4dCIsImlzQ29udGV4dEdyb3VuZGVkQ29udGV4dCIsImdldENvbnRleHQiLCJzdGF0ZWQiLCJlcGhlbWVyYWxDb250ZXh0IiwiRXBoZW1lcmFsQ29udGV4dCIsImZyb21TdGF0ZWQiLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJmb3JjZWQiLCJ1bmRlZmluZWQiLCJhYmxhdGVDb250ZXh0IiwibW5lbWljQ29udGV4dEpTT04iLCJtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm1uZW1pY0NvbnRleHRGcm9tSlNPTiIsIm1uZW1pY0NvbnRleHRzIiwibW5lbWljQ29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiIsImNvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzRnJvbUpTT04iLCJwcm9jZWR1cmUiLCJ0ZXJtcyIsImNhbGwiLCJpc1N0YXRlZCIsImNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCIsImlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0IiwiQ29udGV4dCIsImF1Z21lbnRDb250ZXh0IiwiY29udGV4dENvbnRleHQiLCJjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiaXNDb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0IiwiY29udGV4dFRoZXRpY0NvbnRleHQiLCJjb250ZXh0SWxsYXRpdmVDb250ZXh0IiwiY29udGV4dEJvdW5kZWRDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIkNvbnRleHRzIiwicGFzc2VkIiwic29tZSIsInByb2Nlc3MiLCJleGl0IiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNE1nQkE7ZUFBQUE7O1FBbURBQztlQUFBQTs7UUE3SkFDO2VBQUFBOztRQWlDQUM7ZUFBQUE7O1FBckRBQztlQUFBQTs7UUE5QkFDO2VBQUFBOztRQVZBQztlQUFBQTs7UUFrREFDO2VBQUFBOztRQXdCQUM7ZUFBQUE7O1FBcEZBQztlQUFBQTs7UUFWQUM7ZUFBQUE7O1FBNFFBQztlQUFBQTs7UUFoR0FDO2VBQUFBOztRQWlEQUM7ZUFBQUE7O1FBckhBQztlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQXVCQUM7ZUFBQUE7O1FBdUNBQztlQUFBQTs7UUFsS0FDO2VBQUFBOztRQTJLQUM7ZUFBQUE7O1FBd0NBQztlQUFBQTs7UUF6TUFDO2VBQUFBOztRQW1MQUM7ZUFBQUE7O1FBZ0NBQztlQUFBQTs7OytEQXJSVTsrREFDQTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztrRUFDQTtpRUFDRTtzQkFFcUc7Ozs7OztBQUU3SCxTQUFTYixRQUFRYyxhQUFhLEVBQUVDLE9BQU87SUFDNUNDLE9BQU9ELFNBQVNFLGlCQUFrQixFQUFFQyxnQkFBYztJQUVsRCxNQUFNQyxpQkFBaUJELGdCQUFjLENBQUNFLFdBQVcsQ0FBQ0w7SUFFbERBLFVBQVVJLGdCQUFp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