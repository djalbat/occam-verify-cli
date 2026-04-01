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
    get unserialise () {
        return unserialise;
    }
});
const _nested = /*#__PURE__*/ _interop_require_default(require("../context/nested"));
const _thetic = /*#__PURE__*/ _interop_require_default(require("../context/thetic"));
const _bounded = /*#__PURE__*/ _interop_require_default(require("../context/bounded"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../context/nominal"));
const _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
const _liminal = /*#__PURE__*/ _interop_require_default(require("../context/liminal"));
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
function attempt(innerFunction, ...contexts) {
    contexts = contexts.map((context)=>{
        const ephemeralContext = _ephemeral.default.fromNothing(context);
        context = ephemeralContext; ///
        return context;
    });
    return innerFunction(...contexts);
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
function serialise(innerFunction, ...contexts) {
    contexts = contexts.map((context)=>{
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        return context;
    });
    return innerFunction(...contexts);
}
function unserialise(innerFunction, json, context) {
    const ephemeralContexts = (0, _json.ephemeralContextsFromJSON)(json, context), contexts = ephemeralContexts; ///
    return innerFunction(json, ...contexts);
}
function instantiate(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5lc3RlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmVzdGVkXCI7XG5pbXBvcnQgVGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90aGV0aWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgU3lub3B0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3N5bm9wdGljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dHNGcm9tSlNPTiwgZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29uc3Qgc3lub3B0aWNDb250ZXh0ID0gU3lub3B0aWNDb250ZXh0LmZyb21Db250ZXh0cyguLi5jb250ZXh0cyksXG4gICAgICAgIGNvbnRleHQgPSBzeW5vcHRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VuZChpbm5lckZ1bmN0aW9uKSB7XG4gIGxldCBjb250ZXh0O1xuXG4gIGNvbnN0IG5vbWluYWxDb250ZXh0ID0gTm9taW5hbENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuICBjb250ZXh0ID0gbm9taW5hbENvbnRleHQ7IC8vL1xuXG4gIGNvbnN0IGxpdGVyYWxDb250ZXh0ID0gTGl0ZXJhbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpdGVyYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYmxhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBsZXQgY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCA9IChjb250ZXh0IGluc3RhbmNlb2YgTm9taW5hbEZpbGVDb250ZXh0KTtcblxuICB3aGlsZSAoIWNvbnRleHROb21pbmFsRmlsZUNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpXG4gIH1cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJyYW5jaGluZ0NvbnRleHQgPSBCcmFuY2hpbmdDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBicmFuY2hpbmdDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXJpdmUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBpbGxhdGl2ZUNvbnRleHQgPSBJbGxhdGl2ZUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGlsbGF0aXZlQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRoZXRpY0NvbnRleHQgPSBUaGV0aWNDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSB0aGV0aWNDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbmVzdGVkQ29udGV4dCA9IE5lc3RlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG5lc3RlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgLi4uY29udGV4dHMpIHtcbiAgY29udGV4dHMgPSBjb250ZXh0cy5tYXAoKGNvbnRleHQpID0+IHsgIC8vL1xuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBFcGhlbWVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKC4uLmNvbnRleHRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY2xvc2UoaW5uZXJGdW5jdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uczsgIC8vL1xuXG4gICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgYm91bmRlZENvbnRleHQgPSBCb3VuZGVkQ29udGV4dC5mcm9tTWV0YUxldmVsQXNzdW1wdGlvbnMobWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBib3VuZGVkQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGUocHJvY2VkdXJlLCB0ZXJtcykge1xuICBjb25zdCBjb250ZXh0ID0gcHJvY2VkdXJlLmdldENvbnRleHQoKTtcblxuICByZXR1cm4gcHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb25jaWxlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGltaW5hbENvbnRleHQgPSBMaW1pbmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGltaW5hbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb250ZXh0cyA9IGNvbnRleHRzLm1hcCgoY29udGV4dCkgPT4geyAgLy8vXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9KTtcblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbiguLi5jb250ZXh0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlcmlhbGlzZShpbm5lckZ1bmN0aW9uLCBqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVwaGVtZXJhbENvbnRleHRzID0gZXBoZW1lcmFsQ29udGV4dHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgY29udGV4dHMgPSBlcGhlbWVyYWxDb250ZXh0czsgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oanNvbiwgLi4uY29udGV4dHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGUoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBsaXRlcmFsQ29udGV4dCA9IExpdGVyYWxDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBsaXRlcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImFibGF0ZSIsImF0dGVtcHQiLCJjaG9vc2UiLCJkZWNsYXJlIiwiZGVyaXZlIiwiZGVzY2VuZCIsImVuY2xvc2UiLCJldmFsdWF0ZSIsImdyb3VuZCIsImluc3RhbnRpYXRlIiwiam9pbiIsInJlY29uY2lsZSIsInNlcmlhbGlzZSIsInVuc2VyaWFsaXNlIiwiaW5uZXJGdW5jdGlvbiIsImNvbnRleHRzIiwic3lub3B0aWNDb250ZXh0IiwiU3lub3B0aWNDb250ZXh0IiwiZnJvbUNvbnRleHRzIiwiY29udGV4dCIsIm5vbWluYWxDb250ZXh0IiwiTm9taW5hbENvbnRleHQiLCJmcm9tTm90aGluZyIsImxpdGVyYWxDb250ZXh0IiwiTGl0ZXJhbENvbnRleHQiLCJjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0IiwiTm9taW5hbEZpbGVDb250ZXh0IiwiZ2V0Q29udGV4dCIsImJyYW5jaGluZ0NvbnRleHQiLCJCcmFuY2hpbmdDb250ZXh0IiwiaWxsYXRpdmVDb250ZXh0IiwiSWxsYXRpdmVDb250ZXh0IiwidGhldGljQ29udGV4dCIsIlRoZXRpY0NvbnRleHQiLCJuZXN0ZWRDb250ZXh0IiwiTmVzdGVkQ29udGV4dCIsIm1hcCIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJ1bmRlZmluZWQiLCJib3VuZGVkQ29udGV4dCIsIkJvdW5kZWRDb250ZXh0IiwiZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zIiwicHJvY2VkdXJlIiwidGVybXMiLCJjYWxsIiwibGltaW5hbENvbnRleHQiLCJMaW1pbmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJlcGhlbWVyYWxDb250ZXh0cyIsImVwaGVtZXJhbENvbnRleHRzRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXFDZ0JBO2VBQUFBOztRQTRDQUM7ZUFBQUE7O1FBaENBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQXBGQUM7ZUFBQUE7O1FBdUhBQztlQUFBQTs7UUE5SEFDO2VBQUFBOztRQWlHQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQWNBQztlQUFBQTs7OytEQXJJVTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztrRUFDQTtpRUFDRTtzQkFFbUQ7Ozs7OztBQUUzRSxTQUFTSCxLQUFLSSxhQUFhLEVBQUUsR0FBR0MsUUFBUTtJQUM3QyxNQUFNQyxrQkFB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