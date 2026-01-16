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
    get contextFromString () {
        return contextFromString;
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
function contextFromString(string) {
    var context = {
        nodeAsString: function() {
            return string;
        }
    };
    return context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbkNvbnRleHQoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFByb3h5KGNvbnRleHQsIHtcbiAgICBnZXQ6IChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgIGlmIChuYW1lIGluIGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZXh0ID0gaW5zdGFuY2UuY29udGV4dCxcbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dFtuYW1lXTtcblxuICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICB2YWx1ZS5iaW5kKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHRGcm9tU3RyaW5nKHN0cmluZykge1xuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIG5vZGVBc1N0cmluZzogKCkgPT4gc3RyaW5nXG4gIH07XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiY2hhaW5Db250ZXh0IiwiY29udGV4dEZyb21TdHJpbmciLCJjb250ZXh0IiwiUHJveHkiLCJnZXQiLCJpbnN0YW5jZSIsIm5hbWUiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJ2YWx1ZSIsIkZVTkNUSU9OIiwiYmluZCIsInN0cmluZyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBSWdCQTtlQUFBQTs7UUFpQkFDO2VBQUFBOzs7eUJBbkJTOzs7OztBQUVsQixTQUFTRCxhQUFhRSxPQUFPO0lBQ2xDLE9BQU8sSUFBSUMsTUFBTUQsU0FBUztRQUN4QkUsS0FBSyxTQUFDQyxVQUFVQyxNQUFNQztZQUNwQixJQUFJRCxRQUFRRCxVQUFVO2dCQUNwQixPQUFPRyxRQUFRSixHQUFHLENBQUNDLFVBQVVDLE1BQU1DO1lBQ3JDO1lBRUEsSUFBTUwsWUFBVUcsU0FBU0gsT0FBTyxFQUMxQk8sUUFBUVAsU0FBTyxDQUFDSSxLQUFLO1lBRTNCLE9BQU8sQUFBQyxDQUFBLE9BQU9HLHNDQUFQLFNBQU9BLE1BQUksTUFBTUMsbUJBQVEsR0FDeEJELE1BQU1FLElBQUksQ0FBQ1QsYUFDVE87UUFDYjtJQUNGO0FBQ0Y7QUFFTyxTQUFTUixrQkFBa0JXLE1BQU07SUFDdEMsSUFBTVYsVUFBVTtRQUNkVyxjQUFjO21CQUFNRDs7SUFDdEI7SUFFQSxPQUFPVjtBQUNUIn0=