"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Callbacks;
    }
});
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Callbacks = /*#__PURE__*/ function() {
    function Callbacks(halt, begin, complete) {
        _classCallCheck(this, Callbacks);
        this.halt = halt;
        this.begin = begin;
        this.complete = complete;
    }
    _createClass(Callbacks, [
        {
            key: "getHalt",
            value: function getHalt() {
                return this.halt;
            }
        },
        {
            key: "getBegin",
            value: function getBegin() {
                return this.begin;
            }
        },
        {
            key: "getComplete",
            value: function getComplete() {
                return this.complete;
            }
        }
    ], [
        {
            key: "fromHaltBeginAndComplete",
            value: function fromHaltBeginAndComplete(halt, begin, complete) {
                var callbacks = new Callbacks(halt, begin, complete);
                return callbacks;
            }
        }
    ]);
    return Callbacks;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWxsYmFja3MuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrcyB7XG4gIGNvbnN0cnVjdG9yKGhhbHQsIGJlZ2luLCBjb21wbGV0ZSkge1xuICAgIHRoaXMuaGFsdCA9IGhhbHQ7XG4gICAgdGhpcy5iZWdpbiA9IGJlZ2luO1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgfVxuXG4gIGdldEhhbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFsdDtcbiAgfVxuXG4gIGdldEJlZ2luKCkge1xuICAgIHJldHVybiB0aGlzLmJlZ2luO1xuICB9XG5cbiAgZ2V0Q29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhhbHRCZWdpbkFuZENvbXBsZXRlKGhhbHQsIGJlZ2luLCBjb21wbGV0ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IG5ldyBDYWxsYmFja3MoaGFsdCwgYmVnaW4sIGNvbXBsZXRlKTtcblxuICAgIHJldHVybiBjYWxsYmFja3M7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ2FsbGJhY2tzIiwiaGFsdCIsImJlZ2luIiwiY29tcGxldGUiLCJnZXRIYWx0IiwiZ2V0QmVnaW4iLCJnZXRDb21wbGV0ZSIsImZyb21IYWx0QmVnaW5BbmRDb21wbGV0ZSIsImNhbGxiYWNrcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUTs4QkFEZEg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztpQkFKQ0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCTixJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUNyRCxJQUFNSyxZQUFZLElBcEJEUixVQW9CZUMsTUFBTUMsT0FBT0M7Z0JBRTdDLE9BQU9LO1lBQ1Q7OztXQXZCbUJSIn0=