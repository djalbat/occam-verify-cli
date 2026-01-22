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
    get attempt () {
        return attempt;
    },
    get chainContext () {
        return chainContext;
    },
    get literally () {
        return literally;
    },
    get scope () {
        return scope;
    },
    get synthetically () {
        return synthetically;
    }
});
var _scoped = /*#__PURE__*/ _interop_require_default(require("../context/scoped"));
var _literal = /*#__PURE__*/ _interop_require_default(require("../context/literal"));
var _ephemeral = /*#__PURE__*/ _interop_require_default(require("../context/ephemeral"));
var _synthetic = /*#__PURE__*/ _interop_require_default(require("../context/synthetic"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function chainContext(context) {
    return new Proxy(context, {
        get: function(instance, name, receiver) {
            if (name in instance) {
                return Reflect.get(instance, name, receiver);
            }
            var _$context = instance.context, value = _$context[name];
            return (typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.FUNCTION ? value.bind(_$context) : value;
        }
    });
}
function scope(innerFunction, context) {
    var scopedContext = _scoped.default.fromNothing(context);
    context = scopedContext; ///
    return innerFunction(context);
}
function attempt(innerFunction, context) {
    var ephemeralContext = _ephemeral.default.fromNothing(context);
    context = ephemeralContext; ///
    return innerFunction(context);
}
function literally(innerFunction, context) {
    var literalContext = _literal.default.fromNothing(context);
    context = literalContext; ///
    return innerFunction(context);
}
function synthetically(innerFunction, generalContext, specificContext) {
    var syntheticContext = _synthetic.default.fromNothing(generalContext, specificContext), context = syntheticContext; ///
    return innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNjb3BlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvc2NvcGVkXCI7XG5pbXBvcnQgTGl0ZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbGl0ZXJhbFwiO1xuaW1wb3J0IEVwaGVtZXJhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZXBoZW1lcmFsXCI7XG5pbXBvcnQgU3ludGhldGljQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9zeW50aGV0aWNcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbkNvbnRleHQoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFByb3h5KGNvbnRleHQsIHtcbiAgICBnZXQ6IChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgIGlmIChuYW1lIGluIGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZXh0ID0gaW5zdGFuY2UuY29udGV4dCxcbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dFtuYW1lXTtcblxuICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICB2YWx1ZS5iaW5kKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjb3BlKGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgc2NvcGVkQ29udGV4dCA9IFNjb3BlZENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgY29udGV4dCA9IHNjb3BlZENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGVtcHQoaW5uZXJGdW5jdGlvbiwgY29udGV4dCkge1xuICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gRXBoZW1lcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgIC8vL1xuXG4gIHJldHVybiBpbm5lckZ1bmN0aW9uKGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGl0ZXJhbGx5KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgbGl0ZXJhbENvbnRleHQgPSBMaXRlcmFsQ29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbGl0ZXJhbENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRoZXRpY2FsbHkoaW5uZXJGdW5jdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCBzeW50aGV0aWNDb250ZXh0ID0gU3ludGhldGljQ29udGV4dC5mcm9tTm90aGluZyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgY29udGV4dCA9IHN5bnRoZXRpY0NvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJhdHRlbXB0IiwiY2hhaW5Db250ZXh0IiwibGl0ZXJhbGx5Iiwic2NvcGUiLCJzeW50aGV0aWNhbGx5IiwiY29udGV4dCIsIlByb3h5IiwiZ2V0IiwiaW5zdGFuY2UiLCJuYW1lIiwicmVjZWl2ZXIiLCJSZWZsZWN0IiwidmFsdWUiLCJGVU5DVElPTiIsImJpbmQiLCJpbm5lckZ1bmN0aW9uIiwic2NvcGVkQ29udGV4dCIsIlNjb3BlZENvbnRleHQiLCJmcm9tTm90aGluZyIsImVwaGVtZXJhbENvbnRleHQiLCJFcGhlbWVyYWxDb250ZXh0IiwibGl0ZXJhbENvbnRleHQiLCJMaXRlcmFsQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3ludGhldGljQ29udGV4dCIsIlN5bnRoZXRpY0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWtDZ0JBO2VBQUFBOztRQXpCQUM7ZUFBQUE7O1FBaUNBQztlQUFBQTs7UUFoQkFDO2VBQUFBOztRQXdCQUM7ZUFBQUE7Ozs2REFoRFU7OERBQ0M7Z0VBQ0U7Z0VBQ0E7eUJBRUo7Ozs7Ozs7Ozs7QUFFbEIsU0FBU0gsYUFBYUksT0FBTztJQUNsQyxPQUFPLElBQUlDLE1BQU1ELFNBQVM7UUFDeEJFLEtBQUssU0FBQ0MsVUFBVUMsTUFBTUM7WUFDcEIsSUFBSUQsUUFBUUQsVUFBVTtnQkFDcEIsT0FBT0csUUFBUUosR0FBRyxDQUFDQyxVQUFVQyxNQUFNQztZQUNyQztZQUVBLElBQU1MLFlBQVVHLFNBQVNILE9BQU8sRUFDMUJPLFFBQVFQLFNBQU8sQ0FBQ0ksS0FBSztZQUUzQixPQUFPLEFBQUMsQ0FBQSxPQUFPRyxzQ0FBUCxTQUFPQSxNQUFJLE1BQU1DLG1CQUFRLEdBQ3hCRCxNQUFNRSxJQUFJLENBQUNULGFBQ1RPO1FBQ2I7SUFDRjtBQUNGO0FBRU8sU0FBU1QsTUFBTVksYUFBYSxFQUFFVixPQUFPO0lBQzFDLElBQU1XLGdCQUFnQkMsZUFBYSxDQUFDQyxXQUFXLENBQUNiO0lBRWhEQSxVQUFVVyxlQUFnQixHQUFHO0lBRTdCLE9BQU9ELGNBQWNWO0FBQ3ZCO0FBRU8sU0FBU0wsUUFBUWUsYUFBYSxFQUFFVixPQUFPO0lBQzVDLElBQU1jLG1CQUFtQkMsa0JBQWdCLENBQUNGLFdBQVcsQ0FBQ2I7SUFFdERBLFVBQVVjLGtCQUFtQixHQUFHO0lBRWhDLE9BQU9KLGNBQWNWO0FBQ3ZCO0FBRU8sU0FBU0gsVUFBVWEsYUFBYSxFQUFFVixPQUFPO0lBQzlDLElBQU1nQixpQkFBaUJDLGdCQUFjLENBQUNKLFdBQVcsQ0FBQ2I7SUFFbERBLFVBQVVnQixnQkFBaUIsR0FBRztJQUU5QixPQUFPTixjQUFjVjtBQUN2QjtBQUVPLFNBQVNELGNBQWNXLGFBQWEsRUFBRVEsY0FBYyxFQUFFQyxlQUFlO0lBQzFFLElBQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNSLFdBQVcsQ0FBQ0ssZ0JBQWdCQyxrQkFDaEVuQixVQUFVb0Isa0JBQW1CLEdBQUc7SUFFdEMsT0FBT1YsY0FBY1Y7QUFDdkIifQ==