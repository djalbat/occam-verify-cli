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
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = null;
                return fileContext;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = -1;
                return depth;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vbWluYWxMZXhlciwgbm9taW5hbFBhcnNlciB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5jbGFzcyBOb21pbmFsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IG51bGw7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IC0xO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICBub21pbmFsQ29udGV4dCA9IG5ldyBOb21pbmFsQ29udGV4dChsZXhlciwgcGFyc2VyKTtcblxuICAgIHJldHVybiBub21pbmFsQ29udGV4dDtcbiAgfVxufVxuXG5jb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vbWluYWxDb250ZXh0O1xuIl0sIm5hbWVzIjpbIk5vbWluYWxDb250ZXh0IiwibGV4ZXIiLCJwYXJzZXIiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiZnJvbU5vdGhpbmciLCJub21pbmFsTGV4ZXIiLCJub21pbmFsUGFyc2VyIiwibm9taW5hbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlDQTs7O2VBQUE7Ozt1QkF2QzRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLCtCQUFOO2FBQU1BLGVBQ1FDLEtBQUssRUFBRUMsTUFBTTtnQ0FEckJGO1FBRUYsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIWkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjO2dCQUVwQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsQ0FBQztnQkFFZixPQUFPQTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1SLFFBQVFTLHFCQUFZLEVBQ3BCUixTQUFTUyxzQkFBYSxFQUN0QkMsaUJBQWlCLElBN0JyQlosZUE2QndDQyxPQUFPQztnQkFFakQsT0FBT1U7WUFDVDs7O1dBaENJWjs7QUFtQ04sSUFBTVksaUJBQWlCWixlQUFlUyxXQUFXO0lBRWpELFdBQWVHIn0=