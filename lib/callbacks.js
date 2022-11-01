"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
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
var HALT_MESSAGE = "Halted verification.", BEGIN_MESSAGE = "Begun verification...", COMPLETED_MESSAGE = "...completed verification.";
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
Object.assign(Callbacks, {
    HALT_MESSAGE: HALT_MESSAGE,
    BEGIN_MESSAGE: BEGIN_MESSAGE,
    COMPLETED_MESSAGE: COMPLETED_MESSAGE
});
var _default = Callbacks;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWxsYmFja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEhBTFRfTUVTU0FHRSA9IFwiSGFsdGVkIHZlcmlmaWNhdGlvbi5cIixcbiAgICAgIEJFR0lOX01FU1NBR0UgPSBcIkJlZ3VuIHZlcmlmaWNhdGlvbi4uLlwiLFxuICAgICAgQ09NUExFVEVEX01FU1NBR0UgPSBcIi4uLmNvbXBsZXRlZCB2ZXJpZmljYXRpb24uXCI7XG5cbmNsYXNzIENhbGxiYWNrcyB7XG4gIGNvbnN0cnVjdG9yKGhhbHQsIGJlZ2luLCBjb21wbGV0ZSkge1xuICAgIHRoaXMuaGFsdCA9IGhhbHQ7XG4gICAgdGhpcy5iZWdpbiA9IGJlZ2luO1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgfVxuXG4gIGdldEhhbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFsdDtcbiAgfVxuXG4gIGdldEJlZ2luKCkge1xuICAgIHJldHVybiB0aGlzLmJlZ2luO1xuICB9XG5cbiAgZ2V0Q29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhhbHRCZWdpbkFuZENvbXBsZXRlKGhhbHQsIGJlZ2luLCBjb21wbGV0ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IG5ldyBDYWxsYmFja3MoaGFsdCwgYmVnaW4sIGNvbXBsZXRlKTtcblxuICAgIHJldHVybiBjYWxsYmFja3M7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYWxsYmFja3MsIHtcbiAgSEFMVF9NRVNTQUdFLFxuICBCRUdJTl9NRVNTQUdFLFxuICBDT01QTEVURURfTUVTU0FHRVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbGxiYWNrcztcbiJdLCJuYW1lcyI6WyJIQUxUX01FU1NBR0UiLCJCRUdJTl9NRVNTQUdFIiwiQ09NUExFVEVEX01FU1NBR0UiLCJDYWxsYmFja3MiLCJoYWx0IiwiYmVnaW4iLCJjb21wbGV0ZSIsImdldEhhbHQiLCJnZXRCZWdpbiIsImdldENvbXBsZXRlIiwiZnJvbUhhbHRCZWdpbkFuZENvbXBsZXRlIiwiY2FsbGJhY2tzIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQ0E7OztlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcENBLElBQU1BLGVBQWUsd0JBQ2ZDLGdCQUFnQix5QkFDaEJDLG9CQUFvQjtBQUUxQixJQUFBLEFBQU1DLDBCQTBCSCxBQTFCSDthQUFNQSxVQUNRQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUTs4QkFEN0JIO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztpQkFKZEg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJOLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7Z0JBQ3JELElBQU1LLFlBQVksSUFwQmhCUixVQW9COEJDLE1BQU1DLE9BQU9DO2dCQUU3QyxPQUFPSztZQUNUOzs7V0F2QklSOztBQTBCTlMsT0FBT0MsTUFBTSxDQUFDVixXQUFXO0lBQ3ZCSCxjQUFBQTtJQUNBQyxlQUFBQTtJQUNBQyxtQkFBQUE7QUFDRjtJQUVBLFdBQWVDIn0=