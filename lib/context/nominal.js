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
var _nominal = require("../utilities/nominal");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var NominalContext = /*#__PURE__*/ function() {
    function NominalContext(lexer, parser) {
        _class_call_check(this, NominalContext);
        this.lexer = lexer;
        this.parser = parser;
    }
    _create_class(NominalContext, [
        {
            key: "getLexer",
            value: function getLexer() {
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.parser;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var lexer = _nominal.nominalLexer, parser = _nominal.nominalParser, nominalContext = new NominalContext(lexer, parser);
                return nominalContext;
            }
        }
    ]);
    return NominalContext;
}();
var nominalContext = NominalContext.fromNothing();
var _default = nominalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vbWluYWxMZXhlciwgbm9taW5hbFBhcnNlciB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5jbGFzcyBOb21pbmFsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBub21pbmFsTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG5vbWluYWxQYXJzZXIsIC8vL1xuICAgICAgICAgIG5vbWluYWxDb250ZXh0ID0gbmV3IE5vbWluYWxDb250ZXh0KGxleGVyLCBwYXJzZXIpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxDb250ZXh0O1xuICB9XG59XG5cbmNvbnN0IG5vbWluYWxDb250ZXh0ID0gTm9taW5hbENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9taW5hbENvbnRleHQ7XG4iXSwibmFtZXMiOlsiTm9taW5hbENvbnRleHQiLCJsZXhlciIsInBhcnNlciIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZnJvbU5vdGhpbmciLCJub21pbmFsTGV4ZXIiLCJub21pbmFsUGFyc2VyIiwibm9taW5hbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZCQTs7O2VBQUE7Ozt1QkEzQjRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLCtCQUFOO2FBQU1BLGVBQ1FDLEtBQUssRUFBRUMsTUFBTTtnQ0FEckJGO1FBRUYsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIWkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNSixRQUFRSyxxQkFBWSxFQUNwQkosU0FBU0ssc0JBQWEsRUFDdEJDLGlCQUFpQixJQWpCckJSLGVBaUJ3Q0MsT0FBT0M7Z0JBRWpELE9BQU9NO1lBQ1Q7OztXQXBCSVI7O0FBdUJOLElBQU1RLGlCQUFpQlIsZUFBZUssV0FBVztJQUVqRCxXQUFlRyJ9