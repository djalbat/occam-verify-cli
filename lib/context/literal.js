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
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.context.getFileContext();
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVVdGlsaXRpZXMsIGNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmNvbnN0IHsgbm9kZUFzU3RyaW5nIH0gPSBub2RlVXRpbGl0aWVzLFxuICAgICAgeyBjaGFpbkNvbnRleHQgfSA9IGNvbnRleHRVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdGVyYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVDb250ZXh0KCk7IH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBsZXQgZGVwdGggPSB0aGlzLmNvbnRleHQuZ2V0RGVwdGgoKTtcblxuICAgIGRlcHRoKys7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbGl0ZXJhbENvbnRleHQgPSBuZXcgTGl0ZXJhbENvbnRleHQoY29udGV4dCwgdG9rZW5zKTtcblxuICAgIHJldHVybiBsaXRlcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpdGVyYWxDb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwibm9kZVV0aWxpdGllcyIsImNoYWluQ29udGV4dCIsImNvbnRleHRVdGlsaXRpZXMiLCJjb250ZXh0IiwidG9rZW5zIiwiZ2V0Q29udGV4dCIsImdldFRva2VucyIsInNldFRva2VucyIsIm5vZGUiLCJzdHJpbmciLCJnZXRGaWxlQ29udGV4dCIsImdldERlcHRoIiwiZGVwdGgiLCJmcm9tTm90aGluZyIsImxpdGVyYWxDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyQkFMMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQU0sQUFBRUMsZUFBaUJDLDBCQUFhLENBQTlCRCxjQUNGLEFBQUVFLGVBQWlCQyw2QkFBZ0IsQ0FBakNEO0FBRU8sSUFBQSxBQUFNSCwrQkFBTjthQUFNQSxlQUNQSyxPQUFPLEVBQUVDLE1BQU07Z0NBRFJOO1FBRWpCLElBQUksQ0FBQ0ssT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUVkLE9BQU9ILGFBQWEsSUFBSTs7a0JBTFBIOztZQVFuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVILE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWFTLElBQUk7Z0JBQ2YsSUFBTUMsU0FBU1YsYUFBYVMsTUFBTSxJQUFJLENBQUNKLE1BQU07Z0JBRTdDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQW1CLE9BQU8sSUFBSSxDQUFDUCxPQUFPLENBQUNPLGNBQWM7WUFBSTs7O1lBRXpEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsUUFBUSxJQUFJLENBQUNULE9BQU8sQ0FBQ1EsUUFBUTtnQkFFakNDO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWVYsT0FBTztnQkFDeEIsSUFBTUMsU0FBUyxNQUNUVSxpQkFBaUIsSUF0Q05oQixlQXNDeUJLLFNBQVNDO2dCQUVuRCxPQUFPVTtZQUNUOzs7V0F6Q21CaEIifQ==