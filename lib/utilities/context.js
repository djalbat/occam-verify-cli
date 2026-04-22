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
    const unreleased = context.isUnreleased();
    if (unreleased) {
        assert(context, _aphasic.default, _thetic.default, _illative.default, _literal.default, _nominal1.default);
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
function serialise(innerFunction, context) {
    assert(context, _mnemic.default);
    const mnemicContext = context, mnemicContextJSON = (0, _json.mnemicContextToMnemicContextJSON)(mnemicContext), contextJSON = mnemicContextJSON; ///
    context = contextJSON; ///
    return innerFunction(context);
}
function unserialise(innerFunction, json, context) {
    assert(context, _literal.default);
    const mnemicContext = (0, _json.mnemicContextFromJSON)(json, context);
    context = mnemicContext; ///
    return innerFunction(json, context);
}
function unserialises(innerFunction, json, context) {
    assert(context, _literal.default);
    const mnemicContexts = (0, _json.mnemicContextsFromJSON)(json, context), contexts = mnemicContexts; ///
    return innerFunction(json, ...contexts);
}
function instantiate(innerFunction, context) {
    assert(context, _nominal1.default);
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function manifest(innerFunction, ...contexts) {
    asserts(contexts, _mnemic.default);
    const phanericContext = _phaneric.default.fromContexts(contexts), context = phanericContext; ///
    return innerFunction(context);
}
function attempts(innerFunction, ...contexts) {
    contexts = contexts.map((context)=>{
        const unreleased = context.isUnreleased();
        if (unreleased) {
            assert(context, _aphasic.default, _thetic.default, _illative.default, _literal.default, _nominal1.default);
            const mnemicContext = _mnemic.default.fromNothing(context);
            context = mnemicContext; ///
        }
        return context;
    });
    return innerFunction(...contexts);
}
function serialises(innerFunction, ...contexts) {
    asserts(contexts, _mnemic.default);
    const mnemicContexts = contexts, mnemicContextsJSON = (0, _json.mnemicContextsToMnemicContextsJSON)(mnemicContexts), contextsJSON = mnemicContextsJSON; ///
    contexts = contextsJSON; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1uZW1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEFwaGFzaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2FwaGFzaWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgUGhhbmVyaWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BoYW5lcmljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGUocHJvY2VkdXJlLCB0ZXJtcykge1xuICBjb25zdCBjb250ZXh0ID0gcHJvY2VkdXJlLmdldENvbnRleHQoKTtcblxuICByZXR1cm4gcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY2xvc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgTm9taW5hbEZpbGVDb250ZXh0LCBCb3VuZGVkQ29udGV4dClcblxuICBjb25zdCBib3VuZGVkQ29udGV4dCA9IEJvdW5kZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBib3VuZGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jYXBzdWxhdGUoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgYXNzZXJ0KGNvbnRleHQsIE5vbWluYWxGaWxlQ29udGV4dClcblxuICBjb25zdCBib3VuZGVkQ29udGV4dCA9IEJvdW5kZWRDb250ZXh0LmZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyhtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJvdW5kZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgQm91bmRlZENvbnRleHQpXG5cbiAgY29uc3QgaWxsYXRpdmVDb250ZXh0ID0gSWxsYXRpdmVDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBpbGxhdGl2ZUNvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgQm91bmRlZENvbnRleHQpXG5cbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGFzc2VydChjb250ZXh0LCBMaW1pbmFsQ29udGV4dCwgTW5lbWljQ29udGV4dCwgQXBoYXNpY0NvbnRleHQpXG5cbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwZWN1bGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGFzc2VydChjb250ZXh0LCBNbmVtaWNDb250ZXh0LCBOZXN0ZWRDb250ZXh0LCBBcGhhc2ljQ29udGV4dClcblxuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgYXNzZXJ0KGNvbnRleHQsIEJyYW5jaGluZ0NvbnRleHQsIE1uZW1pY0NvbnRleHQsIE5lc3RlZENvbnRleHQsIEFwaGFzaWNDb250ZXh0KVxuXG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgYXNzZXJ0KGNvbnRleHQsIE5lc3RlZENvbnRleHQsIE1uZW1pY0NvbnRleHQsIEFwaGFzaWNDb250ZXh0KVxuXG4gIGNvbnN0IG5lc3RlZENvbnRleHQgPSBOZXN0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBuZXN0ZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICBhc3NlcnQoY29udGV4dCwgQXBoYXNpY0NvbnRleHQsIFRoZXRpY0NvbnRleHQsIElsbGF0aXZlQ29udGV4dCwgTGl0ZXJhbENvbnRleHQsIE5vbWluYWxGaWxlQ29udGV4dClcblxuICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNbmVtaWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IG1uZW1pY0NvbnRleHQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxpZGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgVGhldGljQ29udGV4dCwgSWxsYXRpdmVDb250ZXh0LCBNbmVtaWNDb250ZXh0LCBQaGFuZXJpY0NvbnRleHQpXG5cbiAgY29uc3QgYXBoYXNpY0NvbnRleHQgPSBBcGhhc2ljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYXBoYXNpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGFzc2VydChjb250ZXh0LCBNbmVtaWNDb250ZXh0KVxuXG4gIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICBtbmVtaWNDb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OKG1uZW1pY0NvbnRleHQpLFxuICAgIGNvbnRleHRKU09OID0gbW5lbWljQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgTGl0ZXJhbENvbnRleHQpXG5cbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IG1uZW1pY0NvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZXMoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBhc3NlcnQoY29udGV4dCwgTGl0ZXJhbENvbnRleHQpXG5cbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBtbmVtaWNDb250ZXh0c0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICBjb250ZXh0cyA9IG1uZW1pY0NvbnRleHRzOyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCAuLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGFzc2VydChjb250ZXh0LCBOb21pbmFsRmlsZUNvbnRleHQpXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYW5pZmVzdChpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBhc3NlcnRzKGNvbnRleHRzLCBNbmVtaWNDb250ZXh0KVxuXG4gIGNvbnN0IHBoYW5lcmljQ29udGV4dCA9IFBoYW5lcmljQ29udGV4dC5mcm9tQ29udGV4dHMoY29udGV4dHMpLFxuICAgICAgICBjb250ZXh0ID0gcGhhbmVyaWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRlbXB0cyhpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgdW5yZWxlYXNlZCA9IGNvbnRleHQuaXNVbnJlbGVhc2VkKCk7XG5cbiAgICBpZiAodW5yZWxlYXNlZCkge1xuICAgICAgYXNzZXJ0KGNvbnRleHQsIEFwaGFzaWNDb250ZXh0LCBUaGV0aWNDb250ZXh0LCBJbGxhdGl2ZUNvbnRleHQsIExpdGVyYWxDb250ZXh0LCBOb21pbmFsRmlsZUNvbnRleHQpXG5cbiAgICAgIGNvbnN0IG1uZW1pY0NvbnRleHQgPSBNbmVtaWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGFzc2VydHMoY29udGV4dHMsIE1uZW1pY0NvbnRleHQpXG5cbiAgY29uc3QgbW5lbWljQ29udGV4dHMgPSBjb250ZXh0cywgLy8vXG4gICAgICAgIG1uZW1pY0NvbnRleHRzSlNPTiA9IG1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04obW5lbWljQ29udGV4dHMpLFxuICAgICAgICBjb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c0pTT047IC8vL1xuXG4gIGNvbnRleHRzID0gY29udGV4dHNKU09OOyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oLi4uY29udGV4dHMpO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdBYmxhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAodW5yZWxlYXNlZCkge1xuICAgIGxldCBjb250ZXh0R3JvdW5kZWRDb250ZXh0ID0gaXNDb250ZXh0R3JvdW5kZWRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgd2hpbGUgKCFjb250ZXh0R3JvdW5kZWRDb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnRleHRHcm91bmRlZENvbnRleHQgPSBpc0NvbnRleHRHcm91bmRlZENvbnRleHQoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tU3RhdGVkKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBmb3JjZWQsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBmb3JjZWQ7IC8vL1xuXG4gICAgZm9yY2VkID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCB1bnJlbGVhc2VkID0gY29udGV4dC5pc1VucmVsZWFzZWQoKTtcblxuICBpZiAoZm9yY2VkIHx8IHVucmVsZWFzZWQpIHtcbiAgICBjb250ZXh0ID0gYWJsYXRlQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZmZlcihpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlZCA9IGZhbHNlLFxuICAgICAgICBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tU3RhdGVkKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZXMoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IHVucmVsZWFzZWQgPSBjb250ZXh0LmlzVW5yZWxlYXNlZCgpO1xuXG4gICAgaWYgKHVucmVsZWFzZWQpIHtcbiAgICAgIGNvbnRleHQgPSBhYmxhdGVDb250ZXh0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmZ1bmN0aW9uIGFibGF0ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgbGV0IGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dCA9IGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpO1xuXG4gIHdoaWxlIChjb250ZXh0RXh0cmFuZW91c0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0RXh0cmFuZW91c0NvbnRleHQgPSBpc0NvbnRleHRFeHRyYW5lb3VzQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IENvbnRleHQgPSBzdGF0ZWQgPyBUaGV0aWNDb250ZXh0IDogSWxsYXRpdmVDb250ZXh0O1xuXG4gIGNvbnRleHQgPSBhdWdtZW50Q29udGV4dChjb250ZXh0LCBDb250ZXh0KTtcblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudENvbnRleHQoY29udGV4dCwgQ29udGV4dCkge1xuICBjb25zdCBjb250ZXh0Q29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29udGV4dEV4dHJhbmVvdXNDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFN1YnN0YW50aXZlQ29udGV4dCA9IGlzQ29udGV4dFN1YnN0YW50aXZlQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgY29udGV4dEV4dHJhbmVvdXNDb250ZXh0ID0gIWNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQ7XG5cbiAgcmV0dXJuIGNvbnRleHRFeHRyYW5lb3VzQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNDb250ZXh0R3JvdW5kZWRDb250ZXh0KGNvbnRleHQpIHtcbiAgY29uc3QgY29udGV4dFRoZXRpY0NvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIFRoZXRpY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SWxsYXRpdmVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBJbGxhdGl2ZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0R3JvdW5kZWRDb250ZXh0ID0gKGNvbnRleHRUaGV0aWNDb250ZXh0IHx8IGNvbnRleHRJbGxhdGl2ZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0R3JvdW5kZWRDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBpc0NvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQoY29udGV4dCkge1xuICBjb25zdCBjb250ZXh0VGhldGljQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgVGhldGljQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRJbGxhdGl2ZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIElsbGF0aXZlQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRCb3VuZGVkQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgQm91bmRlZENvbnRleHQpLFxuICAgICAgICBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpLFxuICAgICAgICBjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0ID0gKGNvbnRleHRUaGV0aWNDb250ZXh0IHx8IGNvbnRleHRJbGxhdGl2ZUNvbnRleHQgfHwgY29udGV4dEJvdW5kZWRDb250ZXh0IHx8IGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0U3Vic3RhbnRpdmVDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NlcnQoY29udGV4dCwgLi4uQ29udGV4dHMpIHtcbiAgY29uc3QgcGFzc2VkID0gQ29udGV4dHMuc29tZSgoQ29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAoIXBhc3NlZCkge1xuICAgIGRlYnVnZ2VyXG5cbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0cyhjb250ZXh0cywgLi4uQ29udGV4dHMpIHtcbiAgY29udGV4dHMuZm9yRWFjaCgoY29udGV4dCkgPT4ge1xuICAgIGFzc2VydChjb250ZXh0LCAuLi5Db250ZXh0cyk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImFibGF0ZSIsImFibGF0ZXMiLCJhdHRlbXB0IiwiYXR0ZW1wdHMiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImVsaWRlIiwiZW5jYXBzdWxhdGUiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsIm1hbmlmZXN0IiwibmV3QWJsYXRlIiwicG9zaXQiLCJwcm9mZmVyIiwicmVjb25jaWxlIiwic2VyaWFsaXNlIiwic2VyaWFsaXNlcyIsInNwZWN1bGF0ZSIsInVuc2VyaWFsaXNlIiwidW5zZXJpYWxpc2VzIiwicHJvY2VkdXJlIiwidGVybXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNhbGwiLCJpbm5lckZ1bmN0aW9uIiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsImFzc2VydCIsIk5vbWluYWxGaWxlQ29udGV4dCIsIkJvdW5kZWRDb250ZXh0IiwiYm91bmRlZENvbnRleHQiLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJNbmVtaWNDb250ZXh0IiwiQXBoYXNpY0NvbnRleHQiLCJsaW1pbmFsQ29udGV4dCIsIk5lc3RlZENvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwiYnJhbmNoaW5nQ29udGV4dCIsIm5lc3RlZENvbnRleHQiLCJ1bnJlbGVhc2VkIiwiaXNVbnJlbGVhc2VkIiwibW5lbWljQ29udGV4dCIsIlBoYW5lcmljQ29udGV4dCIsImFwaGFzaWNDb250ZXh0IiwibW5lbWljQ29udGV4dEpTT04iLCJtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm1uZW1pY0NvbnRleHRGcm9tSlNPTiIsIm1uZW1pY0NvbnRleHRzIiwibW5lbWljQ29udGV4dHNGcm9tSlNPTiIsImNvbnRleHRzIiwiYXNzZXJ0cyIsInBoYW5lcmljQ29udGV4dCIsImZyb21Db250ZXh0cyIsIm1hcCIsIm1uZW1pY0NvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzVG9NbmVtaWNDb250ZXh0c0pTT04iLCJjb250ZXh0c0pTT04iLCJjb250ZXh0R3JvdW5kZWRDb250ZXh0IiwiaXNDb250ZXh0R3JvdW5kZWRDb250ZXh0Iiwic3RhdGVkIiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJmcm9tU3RhdGVkIiwiZm9yY2VkIiwidW5kZWZpbmVkIiwiYWJsYXRlQ29udGV4dCIsImlzU3RhdGVkIiwiY29udGV4dEV4dHJhbmVvdXNDb250ZXh0IiwiaXNDb250ZXh0RXh0cmFuZW91c0NvbnRleHQiLCJDb250ZXh0IiwiYXVnbWVudENvbnRleHQiLCJjb250ZXh0Q29udGV4dCIsImNvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQiLCJpc0NvbnRleHRTdWJzdGFudGl2ZUNvbnRleHQiLCJjb250ZXh0VGhldGljQ29udGV4dCIsImNvbnRleHRJbGxhdGl2ZUNvbnRleHQiLCJjb250ZXh0Qm91bmRlZENvbnRleHQiLCJjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0IiwiQ29udGV4dHMiLCJwYXNzZWQiLCJzb21lIiwicHJvY2VzcyIsImV4aXQiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUEwUWdCQTtlQUFBQTs7UUF5QkFDO2VBQUFBOztRQTdLQUM7ZUFBQUE7O1FBNEVBQztlQUFBQTs7UUFoR0FDO2VBQUFBOztRQTlCQUM7ZUFBQUE7O1FBVkFDO2VBQUFBOztRQWtEQUM7ZUFBQUE7O1FBd0JBQztlQUFBQTs7UUFwRkFDO2VBQUFBOztRQVZBQztlQUFBQTs7UUFwQkFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFxSkFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUFpREFDO2VBQUFBOztRQXVCQUM7ZUFBQUE7O1FBeUJBQztlQUFBQTs7UUE1TUFDO2VBQUFBOztRQWdFQUM7ZUFBQUE7O1FBc0VBQztlQUFBQTs7UUE1SEFDO2VBQUFBOztRQWtFQUM7ZUFBQUE7O1FBVUFDO2VBQUFBOzs7K0RBbEtVOytEQUNBOytEQUNBO2dFQUNDO2dFQUNBO2dFQUNB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