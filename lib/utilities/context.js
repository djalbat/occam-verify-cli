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
    let contextNominalFileContext = context instanceof _nominal1.default;
    while(!contextNominalFileContext){
        context = context.getContext();
        contextNominalFileContext = context instanceof _nominal1.default;
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
    const mnemicContext = _mnemic.default.fromNothing(context);
    context = mnemicContext; ///
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
        let contextNominalFileContext = context instanceof _nominal1.default;
        while(!contextNominalFileContext){
            context = context.getContext();
            contextNominalFileContext = context instanceof _nominal1.default;
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
    return innerFunction(json, contexts);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbm1pY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbW5lbWljXCI7XG5pbXBvcnQgTmVzdGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uZXN0ZWRcIjtcbmltcG9ydCBUaGV0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3RoZXRpY1wiO1xuaW1wb3J0IEJvdW5kZWRDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JvdW5kZWRcIjtcbmltcG9ydCBOb21pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ub21pbmFsXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IExpbWluYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpbWluYWxcIjtcbmltcG9ydCBTeW5vcHRpY0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc3lub3B0aWNcIjtcbmltcG9ydCBJbGxhdGl2ZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvaWxsYXRpdmVcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgbW5lbWljQ29udGV4dEZyb21KU09OLCBtbmVtaWNDb250ZXh0c0Zyb21KU09OLCBtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiwgbW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBzeW5vcHRpY0NvbnRleHQgPSBTeW5vcHRpY0NvbnRleHQuZnJvbUNvbnRleHRzKC4uLmNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bm9wdGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHdoaWxlICghY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBpbGxhdGl2ZUNvbnRleHQgPSBJbGxhdGl2ZUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRoZXRpY0NvbnRleHQgPSBUaGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBtbmVtaWNDb250ZXh0ID0gTWVubWljQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jbG9zZShpbm5lckZ1bmN0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb25zOyAgLy8vXG5cbiAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG51bGw7XG4gIH1cblxuICBjb25zdCBib3VuZGVkQ29udGV4dCA9IEJvdW5kZWRDb250ZXh0LmZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyhtZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJvdW5kZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZShwcm9jZWR1cmUsIHRlcm1zKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBwcm9jZWR1cmUuZ2V0Q29udGV4dCgpO1xuXG4gIHJldHVybiBwcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbmNpbGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaW1pbmFsQ29udGV4dCA9IExpbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaW1pbmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRUb01uZW1pY0NvbnRleHRKU09OKG1uZW1pY0NvbnRleHQpLFxuICAgICAgICBjb250ZXh0SlNPTiA9IG1uZW1pY0NvbnRleHRKU09OOyAvLy9cblxuICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlKGlubmVyRnVuY3Rpb24sIGpzb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbW5lbWljQ29udGV4dCA9IG1uZW1pY0NvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbW5lbWljQ29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGVzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnRleHRzID0gY29udGV4dHMubWFwKChjb250ZXh0KSA9PiB7ICAvLy9cbiAgICBsZXQgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KTtcblxuICAgIHdoaWxlICghY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2VzKGlubmVyRnVuY3Rpb24sIC4uLmNvbnRleHRzKSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gY29udGV4dHMsIC8vL1xuICAgICAgICBtbmVtaWNDb250ZXh0c0pTT04gPSBtbmVtaWNDb250ZXh0c1RvTW5lbWljQ29udGV4dHNKU09OKG1uZW1pY0NvbnRleHRzKSxcbiAgICAgICAgY29udGV4dHNKU09OID0gbW5lbWljQ29udGV4dHNKU09OOyAvLy9cblxuICBjb250ZXh0cyA9IGNvbnRleHRzSlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VyaWFsaXNlcyhpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1uZW1pY0NvbnRleHRzID0gbW5lbWljQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBtbmVtaWNDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgY29udGV4dHMpO1xufVxuIl0sIm5hbWVzIjpbImFibGF0ZSIsImFibGF0ZXMiLCJhdHRlbXB0IiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsImpvaW4iLCJyZWNvbmNpbGUiLCJzZXJpYWxpc2UiLCJzZXJpYWxpc2VzIiwidW5zZXJpYWxpc2UiLCJ1bnNlcmlhbGlzZXMiLCJpbm5lckZ1bmN0aW9uIiwiY29udGV4dHMiLCJzeW5vcHRpY0NvbnRleHQiLCJTeW5vcHRpY0NvbnRleHQiLCJmcm9tQ29udGV4dHMiLCJjb250ZXh0Iiwibm9taW5hbENvbnRleHQiLCJOb21pbmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsImNvbnRleHROb21pbmFsRmlsZUNvbnRleHQiLCJOb21pbmFsRmlsZUNvbnRleHQiLCJnZXRDb250ZXh0IiwiYnJhbmNoaW5nQ29udGV4dCIsIkJyYW5jaGluZ0NvbnRleHQiLCJpbGxhdGl2ZUNvbnRleHQiLCJJbGxhdGl2ZUNvbnRleHQiLCJ0aGV0aWNDb250ZXh0IiwiVGhldGljQ29udGV4dCIsIm5lc3RlZENvbnRleHQiLCJOZXN0ZWRDb250ZXh0IiwibW5lbWljQ29udGV4dCIsIk1lbm1pY0NvbnRleHQiLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInVuZGVmaW5lZCIsImJvdW5kZWRDb250ZXh0IiwiQm91bmRlZENvbnRleHQiLCJmcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMiLCJwcm9jZWR1cmUiLCJ0ZXJtcyIsImNhbGwiLCJsaW1pbmFsQ29udGV4dCIsIkxpbWluYWxDb250ZXh0IiwibW5lbWljQ29udGV4dEpTT04iLCJtbmVtaWNDb250ZXh0VG9NbmVtaWNDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm1uZW1pY0NvbnRleHRGcm9tSlNPTiIsIm1hcCIsIm1uZW1pY0NvbnRleHRzIiwibW5lbWljQ29udGV4dHNKU09OIiwibW5lbWljQ29udGV4dHNUb01uZW1pY0NvbnRleHRzSlNPTiIsImNvbnRleHRzSlNPTiIsIm1uZW1pY0NvbnRleHRzRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXFDZ0JBO2VBQUFBOztRQTBHQUM7ZUFBQUE7O1FBOURBQztlQUFBQTs7UUFoQ0FDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBaEZBQztlQUFBQTs7UUF3R0FDO2VBQUFBOztRQS9HQUM7ZUFBQUE7O1FBNkZBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBMENBQztlQUFBQTs7UUF4QkFDO2VBQUFBOztRQWtDQUM7ZUFBQUE7OzsrREF2S1U7K0RBQ0E7K0RBQ0E7Z0VBQ0M7Z0VBQ0E7Z0VBQ0E7Z0VBQ0E7aUVBQ0M7aUVBQ0E7a0VBQ0M7aUVBQ0U7c0JBRXFHOzs7Ozs7QUFFN0gsU0FBU0wsS0FBS00sYUFBYSxFQUFFLEdBQUdDLFFB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