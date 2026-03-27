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
function attempt(innerFunction, context) {
    const ephemeralContext = _ephemeral.default.fromNothing(context);
    context = ephemeralContext; ///
    return innerFunction(context);
}
function descend(innerFunction, context) {
    const nestedContext = _nested.default.fromNothing(context);
    context = nestedContext; ///
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
    const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
    context = contextJSON; ///
    return innerFunction(context);
}
function unserialise(innerFunction, json, context) {
    const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
    context = ephemeralContext; ///
    return innerFunction(json, context);
}
function instantiate(innerFunction, context) {
    const literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5lc3RlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbmVzdGVkXCI7XG5pbXBvcnQgVGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90aGV0aWNcIjtcbmltcG9ydCBCb3VuZGVkQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ib3VuZGVkXCI7XG5pbXBvcnQgTm9taW5hbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbm9taW5hbFwiO1xuaW1wb3J0IExpdGVyYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xpdGVyYWxcIjtcbmltcG9ydCBMaW1pbmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9saW1pbmFsXCI7XG5pbXBvcnQgU3lub3B0aWNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3N5bm9wdGljXCI7XG5pbXBvcnQgSWxsYXRpdmVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2lsbGF0aXZlXCI7XG5pbXBvcnQgRXBoZW1lcmFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9lcGhlbWVyYWxcIjtcbmltcG9ydCBCcmFuY2hpbmdDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYW5jaGluZ1wiO1xuaW1wb3J0IE5vbWluYWxGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlL25vbWluYWxcIjtcblxuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gam9pbihpbm5lckZ1bmN0aW9uLCAuLi5jb250ZXh0cykge1xuICBjb25zdCBzeW5vcHRpY0NvbnRleHQgPSBTeW5vcHRpY0NvbnRleHQuZnJvbUNvbnRleHRzKC4uLmNvbnRleHRzKSxcbiAgICAgICAgY29udGV4dCA9IHN5bm9wdGljQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdW5kKGlubmVyRnVuY3Rpb24pIHtcbiAgbGV0IGNvbnRleHQ7XG5cbiAgY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG4gIGNvbnRleHQgPSBub21pbmFsQ29udGV4dDsgLy8vXG5cbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFibGF0ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBjb250ZXh0Tm9taW5hbEZpbGVDb250ZXh0ID0gKGNvbnRleHQgaW5zdGFuY2VvZiBOb21pbmFsRmlsZUNvbnRleHQpO1xuXG4gIHdoaWxlICghY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0LmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHROb21pbmFsRmlsZUNvbnRleHQgPSAoY29udGV4dCBpbnN0YW5jZW9mIE5vbWluYWxGaWxlQ29udGV4dClcbiAgfVxuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgYnJhbmNoaW5nQ29udGV4dCA9IEJyYW5jaGluZ0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGJyYW5jaGluZ0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcml2ZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlsbGF0aXZlQ29udGV4dCA9IElsbGF0aXZlQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gaWxsYXRpdmVDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgdGhldGljQ29udGV4dCA9IFRoZXRpY0NvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZChpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lc3RlZENvbnRleHQgPSBOZXN0ZWRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBuZXN0ZWRDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNsb3NlKGlubmVyRnVuY3Rpb24sIG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gbWV0YUxldmVsQXNzdW1wdGlvbnM7ICAvLy9cblxuICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0gQm91bmRlZENvbnRleHQuZnJvbU1ldGFMZXZlbEFzc3VtcHRpb25zKG1ldGFMZXZlbEFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gYm91bmRlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlKHByb2NlZHVyZSwgdGVybXMpIHtcbiAgY29uc3QgY29udGV4dCA9IHByb2NlZHVyZS5nZXRDb250ZXh0KCk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShpbm5lckZ1bmN0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxpbWluYWxDb250ZXh0ID0gTGltaW5hbENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IGxpbWluYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGlubmVyRnVuY3Rpb24oY29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgIGNvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dEpTT047IC8vL1xuXG4gIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZXJpYWxpc2UoaW5uZXJGdW5jdGlvbiwganNvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihqc29uLCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJhYmxhdGUiLCJhdHRlbXB0IiwiY2hvb3NlIiwiZGVjbGFyZSIsImRlcml2ZSIsImRlc2NlbmQiLCJlbmNsb3NlIiwiZXZhbHVhdGUiLCJncm91bmQiLCJpbnN0YW50aWF0ZSIsImpvaW4iLCJyZWNvbmNpbGUiLCJzZXJpYWxpc2UiLCJ1bnNlcmlhbGlzZSIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0cyIsInN5bm9wdGljQ29udGV4dCIsIlN5bm9wdGljQ29udGV4dCIsImZyb21Db250ZXh0cyIsImNvbnRleHQiLCJub21pbmFsQ29udGV4dCIsIk5vbWluYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCIsIkxpdGVyYWxDb250ZXh0IiwiY29udGV4dE5vbWluYWxGaWxlQ29udGV4dCIsIk5vbWluYWxGaWxlQ29udGV4dCIsImdldENvbnRleHQiLCJicmFuY2hpbmdDb250ZXh0IiwiQnJhbmNoaW5nQ29udGV4dCIsImlsbGF0aXZlQ29udGV4dCIsIklsbGF0aXZlQ29udGV4dCIsInRoZXRpY0NvbnRleHQiLCJUaGV0aWNDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dCIsIkVwaGVtZXJhbENvbnRleHQiLCJuZXN0ZWRDb250ZXh0IiwiTmVzdGVkQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwidW5kZWZpbmVkIiwiYm91bmRlZENvbnRleHQiLCJCb3VuZGVkQ29udGV4dCIsImZyb21NZXRhTGV2ZWxBc3N1bXB0aW9ucyIsInByb2NlZHVyZSIsInRlcm1zIiwiY2FsbCIsImxpbWluYWxDb250ZXh0IiwiTGltaW5hbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFxQ2dCQTtlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQXhCQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFSQUM7ZUFBQUE7O1FBd0JBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQWhGQUM7ZUFBQUE7O1FBZ0hBQztlQUFBQTs7UUF2SEFDO2VBQUFBOztRQTZGQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVVBQztlQUFBQTs7OytEQTdIVTsrREFDQTtnRUFDQztnRUFDQTtnRUFDQTtnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztrRUFDQTtpRUFDRTtzQkFFa0Q7Ozs7OztBQUUxRSxTQUFTSCxLQUFLSSxhQUFhLEVBQUUsR0FBR0MsUUFBUTtJQUM3QyxNQUFNQyxrQkFBa0JDLGlCQUFlLENBQUNDLFlBQVksSUFBSUgsV0FDbERJLFVBQVVILGlCQUFrQixHQUFHO0lBRXJDLE9BQU9GLGNBQWNLO0FBQ3ZCO0FBRU8sU0FBU1gsT0FBT00sYUFBYTtJQUNsQyxJQUFJSztJQUVKLE1BQU1DLGlCQUFpQkMsZ0JBQWMsQ0FBQ0MsV0FBVztJQUVqREgsVUFBVUMsZ0JBQWdCLEdBQUc7SUFFN0IsTUFBTUcsaUJBQWlCQyxnQkFBYyxDQUFDRixXQUFXLENBQUNIO0lBRWxEQSxV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