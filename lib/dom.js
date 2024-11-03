"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    domAssigned: function() {
        return domAssigned;
    }
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var dom = WeakMap;
function domAssigned(Class) {
    var name = Class.name;
    Object.assign(dom, _define_property({}, name, Class));
    return Class;
}
var _default = dom;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGRvbSA9IFdlYWtNYXA7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21Bc3NpZ25lZChDbGFzcykge1xuICBjb25zdCB7IG5hbWUgfSA9IENsYXNzO1xuXG4gIE9iamVjdC5hc3NpZ24oZG9tLCB7XG4gICAgW25hbWVdOiBDbGFzc1xuICB9KTtcblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsImRvbSIsIldlYWtNYXAiLCJDbGFzcyIsIm5hbWUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNBLE9BQW1CO2VBQW5COztJQVZnQkEsV0FBVztlQUFYQTs7Ozs7Ozs7Ozs7Ozs7OztBQUZoQixJQUFNQyxNQUFNQztBQUVMLFNBQVNGLFlBQVlHLEtBQUs7SUFDL0IsSUFBTSxBQUFFQyxPQUFTRCxNQUFUQztJQUVSQyxPQUFPQyxNQUFNLENBQUNMLEtBQ1oscUJBQUNHLE1BQU9EO0lBR1YsT0FBT0E7QUFDVDtJQUVBLFdBQWVGIn0=