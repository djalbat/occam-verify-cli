"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Assertion;
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
var Assertion = /*#__PURE__*/ function() {
    function Assertion(variable) {
        _classCallCheck(this, Assertion);
        this.variable = variable;
    }
    _createClass(Assertion, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "assert",
            value: function assert(proofContext) {
                proofContext.addVariable(this.variable);
            }
        }
    ], [
        {
            key: "fromVariable",
            value: function fromVariable(variable) {
                var assertion = new Assertion(variable);
                return assertion;
            }
        }
    ]);
    return Assertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NlcnRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBhc3NlcnQocHJvb2ZDb250ZXh0KSB7XG4gICAgcHJvb2ZDb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IG5ldyBBc3NlcnRpb24odmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJBc3NlcnRpb24iLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwiYXNzZXJ0IiwicHJvb2ZDb250ZXh0IiwiYWRkVmFyaWFibGUiLCJmcm9tVmFyaWFibGUiLCJhc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsUUFBUTs4QkFEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztpQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxZQUFZLEVBQUU7Z0JBQ25CQSxhQUFhQyxXQUFXLENBQUMsSUFBSSxDQUFDSixRQUFRO1lBQ3hDOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFMLFFBQVEsRUFBRTtnQkFDNUIsSUFBTU0sWUFBWSxJQWREUCxVQWNlQztnQkFFaEMsT0FBT007WUFDVDs7O1dBakJtQlAifQ==