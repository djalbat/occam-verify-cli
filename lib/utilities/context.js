"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "chainContext", {
    enumerable: true,
    get: function() {
        return chainContext;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbkNvbnRleHQoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFByb3h5KGNvbnRleHQsIHtcbiAgICBnZXQ6IChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgIGlmIChuYW1lIGluIGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldChpbnN0YW5jZSwgbmFtZSwgcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZXh0ID0gaW5zdGFuY2UuY29udGV4dCxcbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dFtuYW1lXTtcblxuICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICB2YWx1ZS5iaW5kKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjaGFpbkNvbnRleHQiLCJjb250ZXh0IiwiUHJveHkiLCJnZXQiLCJpbnN0YW5jZSIsIm5hbWUiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJ2YWx1ZSIsIkZVTkNUSU9OIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRlM7Ozs7O0FBRWxCLFNBQVNBLGFBQWFDLE9BQU87SUFDbEMsT0FBTyxJQUFJQyxNQUFNRCxTQUFTO1FBQ3hCRSxLQUFLLFNBQUNDLFVBQVVDLE1BQU1DO1lBQ3BCLElBQUlELFFBQVFELFVBQVU7Z0JBQ3BCLE9BQU9HLFFBQVFKLEdBQUcsQ0FBQ0MsVUFBVUMsTUFBTUM7WUFDckM7WUFFQSxJQUFNTCxZQUFVRyxTQUFTSCxPQUFPLEVBQzFCTyxRQUFRUCxTQUFPLENBQUNJLEtBQUs7WUFFM0IsT0FBTyxBQUFDLENBQUEsT0FBT0csc0NBQVAsU0FBT0EsTUFBSSxNQUFNQyxtQkFBUSxHQUN4QkQsTUFBTUUsSUFBSSxDQUFDVCxhQUNUTztRQUNiO0lBQ0Y7QUFDRiJ9