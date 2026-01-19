"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiteralContext;
    }
});
var _node = require("../utilities/node");
var _context = require("../utilities/context");
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
var LiteralContext = /*#__PURE__*/ function() {
    function LiteralContext(context, tokens) {
        _class_call_check(this, LiteralContext);
        this.context = context;
        this.tokens = tokens;
        return (0, _context.chainContext)(this);
    }
    _create_class(LiteralContext, [
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _node.nodeAsString)(node, this.tokens);
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var tokens = null, literalContext = new LiteralContext(context, tokens);
                return literalContext;
            }
        }
    ]);
    return LiteralContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgY2hhaW5Db250ZXh0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdGVyYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBsaXRlcmFsQ29udGV4dCA9IG5ldyBMaXRlcmFsQ29udGV4dChjb250ZXh0LCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGxpdGVyYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGl0ZXJhbENvbnRleHQiLCJjb250ZXh0IiwidG9rZW5zIiwiY2hhaW5Db250ZXh0IiwiZ2V0VG9rZW5zIiwic2V0VG9rZW5zIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInN0cmluZyIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O29CQUhRO3VCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsK0JBQU47YUFBTUEsZUFDUEMsT0FBTyxFQUFFQyxNQUFNO2dDQURSRjtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFFZCxPQUFPQyxJQUFBQSxxQkFBWSxFQUFDLElBQUk7O2tCQUxQSDs7WUFRbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVSCxNQUFNO2dCQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNoQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxJQUFJO2dCQUNmLElBQU1DLFNBQVNGLElBQUFBLGtCQUFZLEVBQUNDLE1BQU0sSUFBSSxDQUFDTCxNQUFNO2dCQUU3QyxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlSLE9BQU87Z0JBQ3hCLElBQU1DLFNBQVMsTUFDVFEsaUJBQWlCLElBeEJOVixlQXdCeUJDLFNBQVNDO2dCQUVuRCxPQUFPUTtZQUNUOzs7V0EzQm1CViJ9