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
    get chainContext () {
        return chainContext;
    },
    get unchainMetavariable () {
        return unchainMetavariable;
    },
    get unchainVariable () {
        return unchainVariable;
    }
});
var _constants = require("../constants");
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
function unchainVariable(variable) {
    var context = variable.getContext(), variableIdentifier = variable.getIdentifier();
    variable = context.findVariableByVariableIdentifier(variableIdentifier);
    return variable;
}
function unchainMetavariable(metavariable) {
    var context = metavariable.getContext(), metavariableName = metavariable.getName();
    metavariable = context.findMetavariableByMetavariableName(metavariableName);
    return metavariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbkNvbnRleHQoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFByb3h5KGNvbnRleHQsIHtcbiAgICBnZXQ6IChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgIGlmIChuYW1lIGluIGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZXh0ID0gaW5zdGFuY2UuY29udGV4dCxcbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dFtuYW1lXTtcblxuICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICB2YWx1ZS5iaW5kKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuY2hhaW5WYXJpYWJsZSh2YXJpYWJsZSkge1xuICBjb25zdCBjb250ZXh0ID0gdmFyaWFibGUuZ2V0Q29udGV4dCgpLFxuICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5jaGFpbk1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgY29udGV4dCA9IG1ldGF2YXJpYWJsZS5nZXRDb250ZXh0KCksXG4gICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuIl0sIm5hbWVzIjpbImNoYWluQ29udGV4dCIsInVuY2hhaW5NZXRhdmFyaWFibGUiLCJ1bmNoYWluVmFyaWFibGUiLCJjb250ZXh0IiwiUHJveHkiLCJnZXQiLCJpbnN0YW5jZSIsIm5hbWUiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJ2YWx1ZSIsIkZVTkNUSU9OIiwiYmluZCIsInZhcmlhYmxlIiwiZ2V0Q29udGV4dCIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWdCQTtlQUFBQTs7UUEwQkFDO2VBQUFBOztRQVRBQztlQUFBQTs7O3lCQW5CUzs7Ozs7QUFFbEIsU0FBU0YsYUFBYUcsT0FBTztJQUNsQyxPQUFPLElBQUlDLE1BQU1ELFNBQVM7UUFDeEJFLEtBQUssU0FBQ0MsVUFBVUMsTUFBTUM7WUFDcEIsSUFBSUQsUUFBUUQsVUFBVTtnQkFDcEIsT0FBT0csUUFBUUosR0FBRyxDQUFDQyxVQUFVQyxNQUFNQztZQUNyQztZQUVBLElBQU1MLFlBQVVHLFNBQVNILE9BQU8sRUFDMUJPLFFBQVFQLFNBQU8sQ0FBQ0ksS0FBSztZQUUzQixPQUFPLEFBQUMsQ0FBQSxPQUFPRyxzQ0FBUCxTQUFPQSxNQUFJLE1BQU1DLG1CQUFRLEdBQ3hCRCxNQUFNRSxJQUFJLENBQUNULGFBQ1RPO1FBQ2I7SUFDRjtBQUNGO0FBRU8sU0FBU1IsZ0JBQWdCVyxRQUFRO0lBQ3RDLElBQU1WLFVBQVVVLFNBQVNDLFVBQVUsSUFDN0JDLHFCQUFxQkYsU0FBU0csYUFBYTtJQUVqREgsV0FBV1YsUUFBUWMsZ0NBQWdDLENBQUNGO0lBRXBELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTWixvQkFBb0JpQixZQUFZO0lBQzlDLElBQU1mLFVBQVVlLGFBQWFKLFVBQVUsSUFDakNLLG1CQUFtQkQsYUFBYUUsT0FBTztJQUU3Q0YsZUFBZWYsUUFBUWtCLGtDQUFrQyxDQUFDRjtJQUUxRCxPQUFPRDtBQUNUIn0=