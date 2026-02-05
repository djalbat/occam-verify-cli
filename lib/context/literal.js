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
var _occamfurtle = require("occam-furtle");
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
var nodeAsString = _occamfurtle.nodeUtilities.nodeAsString, chainContext = _occamfurtle.contextUtilities.chainContext;
var LiteralContext = /*#__PURE__*/ function() {
    function LiteralContext(context, tokens) {
        _class_call_check(this, LiteralContext);
        this.context = context;
        this.tokens = tokens;
        return chainContext(this);
    }
    _create_class(LiteralContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
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
            value: function nodeAsString1(node) {
                var string = nodeAsString(node, this.tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVVdGlsaXRpZXMsIGNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmNvbnN0IHsgbm9kZUFzU3RyaW5nIH0gPSBub2RlVXRpbGl0aWVzLFxuICAgICAgeyBjaGFpbkNvbnRleHQgfSA9IGNvbnRleHRVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdGVyYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBsaXRlcmFsQ29udGV4dCA9IG5ldyBMaXRlcmFsQ29udGV4dChjb250ZXh0LCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGxpdGVyYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGl0ZXJhbENvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2RlVXRpbGl0aWVzIiwiY2hhaW5Db250ZXh0IiwiY29udGV4dFV0aWxpdGllcyIsImNvbnRleHQiLCJ0b2tlbnMiLCJnZXRDb250ZXh0IiwiZ2V0VG9rZW5zIiwic2V0VG9rZW5zIiwibm9kZSIsInN0cmluZyIsImZyb21Ob3RoaW5nIiwibGl0ZXJhbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJCQUwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsSUFBTSxBQUFFQyxlQUFpQkMsMEJBQWEsQ0FBOUJELGNBQ0YsQUFBRUUsZUFBaUJDLDZCQUFnQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ILCtCQUFOO2FBQU1BLGVBQ1BLLE9BQU8sRUFBRUMsTUFBTTtnQ0FEUk47UUFFakIsSUFBSSxDQUFDSyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBRWQsT0FBT0gsYUFBYSxJQUFJOztrQkFMUEg7O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUgsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYVMsSUFBSTtnQkFDZixJQUFNQyxTQUFTVixhQUFhUyxNQUFNLElBQUksQ0FBQ0osTUFBTTtnQkFFN0MsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZUCxPQUFPO2dCQUN4QixJQUFNQyxTQUFTLE1BQ1RPLGlCQUFpQixJQTVCTmIsZUE0QnlCSyxTQUFTQztnQkFFbkQsT0FBT087WUFDVDs7O1dBL0JtQmIifQ==